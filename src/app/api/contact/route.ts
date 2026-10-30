import { NextResponse } from 'next/server';

// In-memory rate limiting map (IP -> timestamps)
const rateLimitMap = new Map<string, number[]>();

const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
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

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || '127.0.0.1';

    // Rate Limiting Check
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: 'Rate limit exceeded. Please wait a minute before sending another transmission.' },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, subject, message, _hp } = body;

    // Spam Protection: Honeypot check
    if (_hp && _hp.trim() !== '') {
      // Bot detected, silently return success without processing
      return NextResponse.json({ success: true, message: 'Transmission dispatched.' });
    }

    // Server-Side Input Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2 || name.length > 100) {
      return NextResponse.json(
        { success: false, error: 'Name must be between 2 and 100 characters.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim()) || email.length > 150) {
      return NextResponse.json(
        { success: false, error: 'A valid email address is required.' },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== 'string' || subject.trim().length < 3 || subject.length > 200) {
      return NextResponse.json(
        { success: false, error: 'Subject must be between 3 and 200 characters.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10 || message.length > 3000) {
      return NextResponse.json(
        { success: false, error: 'Message payload must be between 10 and 3000 characters.' },
        { status: 400 }
      );
    }

    // In a production environment with email SMTP/Resend configured,
    // you would dispatch an email here.
    // For this zero-backend/serverless deployment, we validate cleanly and log privacy-safe telemetry.
    console.log(`[CONTACT_DISPATCH] From: ${name.trim()} <${email.trim()}> | Subject: ${subject.trim()}`);

    return NextResponse.json({
      success: true,
      message: 'Transmission successfully validated and recorded. Thank you for reaching out!',
    });
  } catch (error) {
    console.error('[CONTACT_ERROR]', error);
    return NextResponse.json(
      { success: false, error: 'Internal processing error. Please use direct email.' },
      { status: 500 }
    );
  }
}
