import { NextResponse } from 'next/server';

// In-memory rate limiting map (IP -> timestamps)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes window
const MAX_REQUESTS_PER_WINDOW = 5;

// Clean up stale rate-limit entries periodically
function cleanupRateLimits() {
  const now = Date.now();
  rateLimitMap.forEach((timestamps, ip) => {
    const fresh = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
    if (fresh.length === 0) {
      rateLimitMap.delete(ip);
    } else {
      rateLimitMap.set(ip, fresh);
    }
  });
}

function isRateLimited(ip: string): boolean {
  cleanupRateLimits();
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

// HTML escape helper to prevent injection in email templates
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(req: Request) {
  try {
    // 1. IP extraction & Rate Limiting
    const forwardedFor = req.headers.get('x-forwarded-for');
    const realIp = req.headers.get('x-real-ip');
    const clientIp = (forwardedFor ? forwardedFor.split(',')[0].trim() : realIp) || '127.0.0.1';

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many messages sent. Please wait 10 minutes before sending another inquiry.',
        },
        { status: 429 }
      );
    }

    // 2. Parse request payload
    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, error: 'Malformed request payload. Please submit valid JSON.' },
        { status: 400 }
      );
    }

    const { name, email, subject, message, _hp } = body;

    // 3. Honeypot check (anti-spam bot detection)
    if (_hp && typeof _hp === 'string' && _hp.trim().length > 0) {
      // Bot trapped in honeypot: return silent 200 without sending
      return NextResponse.json({
        success: true,
        message: 'Your inquiry has been submitted.',
      });
    }

    // 4. Server-Side Input Validation & Sanitization
    if (!name || typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 100) {
      return NextResponse.json(
        { success: false, error: 'Name is required and must be between 2 and 100 characters.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    const trimmedEmail = typeof email === 'string' ? email.trim() : '';
    if (!trimmedEmail || !emailRegex.test(trimmedEmail) || trimmedEmail.length > 150) {
      return NextResponse.json(
        { success: false, error: 'A valid email address is required (max 150 characters).' },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== 'string' || subject.trim().length < 3 || subject.trim().length > 200) {
      return NextResponse.json(
        { success: false, error: 'Subject is required and must be between 3 and 200 characters.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10 || message.trim().length > 3000) {
      return NextResponse.json(
        { success: false, error: 'Message is required and must be between 10 and 3000 characters.' },
        { status: 400 }
      );
    }

    const cleanName = name.trim();
    const cleanEmail = trimmedEmail;
    const cleanSubject = subject.trim();
    const cleanMessage = message.trim();
    const submissionDate = new Date();
    const formattedTimestamp = submissionDate.toUTCString();

    // 5. Check Resend API configuration
    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || 'hey.utkarsh.tech@gmail.com';
    // By default onboarding@resend.dev allows testing immediately before a custom domain is verified
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Utkarsh Portfolio <onboarding@resend.dev>';

    if (!resendApiKey) {
      console.warn('[CONTACT_API] Missing RESEND_API_KEY environment variable.');
      return NextResponse.json(
        {
          success: false,
          error:
            'Email delivery is currently awaiting Resend API configuration. Please contact hey.utkarsh.tech@gmail.com directly.',
          isConfigPending: true,
        },
        { status: 503 }
      );
    }

    // 6. Build HTML and plain text email content
    const safeName = escapeHtml(cleanName);
    const safeEmail = escapeHtml(cleanEmail);
    const safeSubject = escapeHtml(cleanSubject);
    const safeMessage = escapeHtml(cleanMessage).replace(/\n/g, '<br />');

    const htmlEmail = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>New Portfolio Message</title>
</head>
<body style="margin: 0; padding: 0; background-color: #111820; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F2F6F7;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #111820; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #19232C; border: 1px solid #30404A; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.4);">
          <!-- Header -->
          <tr>
            <td style="padding: 28px 32px; background-color: #202D37; border-bottom: 1px solid #30404A;">
              <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #73DCE8; font-weight: 700;">Portfolio Inquiry</span>
              <h1 style="margin: 8px 0 0 0; font-size: 20px; font-weight: 700; color: #F2F6F7;">${safeSubject}</h1>
            </td>
          </tr>

          <!-- Metadata Section -->
          <tr>
            <td style="padding: 24px 32px; border-bottom: 1px solid #30404A;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="padding: 6px 0; font-size: 13px; color: #788A94; width: 110px;">From:</td>
                  <td style="padding: 6px 0; font-size: 14px; color: #F2F6F7; font-weight: 600;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-size: 13px; color: #788A94;">Email:</td>
                  <td style="padding: 6px 0; font-size: 14px; color: #73DCE8;"><a href="mailto:${safeEmail}" style="color: #73DCE8; text-decoration: none;">${safeEmail}</a></td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-size: 13px; color: #788A94;">Date:</td>
                  <td style="padding: 6px 0; font-size: 13px; color: #A9B8C0;">${formattedTimestamp}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message Body -->
          <tr>
            <td style="padding: 32px;">
              <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #788A94; margin-bottom: 12px; font-weight: 600;">Message Content</div>
              <div style="padding: 20px; background-color: #111820; border: 1px solid #30404A; border-radius: 12px; font-size: 14px; line-height: 1.6; color: #F2F6F7; white-space: pre-wrap;">
${safeMessage}
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 32px; background-color: #111820; border-top: 1px solid #30404A; font-size: 12px; color: #788A94; text-align: center;">
              This inquiry was sent via your portfolio contact form at <a href="https://utkarsh-kushwaha-portfolio.vercel.app" style="color: #73DCE8; text-decoration: none;">utkarsh-kushwaha-portfolio.vercel.app</a>.<br />
              Direct reply is configured to send directly to <strong>${safeEmail}</strong>.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim();

    const textEmail = `
New Portfolio Message: ${cleanSubject}
=======================================
From: ${cleanName}
Email: ${cleanEmail}
Date: ${formattedTimestamp}

Message:
--------
${cleanMessage}

---------------------------------------
Sent via portfolio contact form at https://utkarsh-kushwaha-portfolio.vercel.app
Direct reply goes to ${cleanEmail}.
    `.trim();

    // 7. Dispatch to Resend REST API
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: cleanEmail,
        subject: `[Portfolio Contact] ${cleanSubject}`,
        html: htmlEmail,
        text: textEmail,
      }),
    });

    const resendData = await resendResponse.json().catch(() => ({}));

    if (!resendResponse.ok) {
      console.error('[RESEND_ERROR]', {
        status: resendResponse.status,
        data: resendData,
      });

      return NextResponse.json(
        {
          success: false,
          error:
            resendData?.message ||
            'Failed to dispatch message via email provider. Please contact hey.utkarsh.tech@gmail.com directly.',
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your message has been sent successfully. I will get back to you shortly.',
      id: resendData?.id,
    });
  } catch (error) {
    console.error('[CONTACT_API_UNHANDLED_ERROR]', error);
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred while processing your request. Please email directly.',
      },
      { status: 500 }
    );
  }
}
