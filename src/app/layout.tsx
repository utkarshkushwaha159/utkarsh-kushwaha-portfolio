import type { Metadata } from 'next';
import './globals.css';
import CustomCursor from '@/components/ui/CustomCursor';
import BackToTop from '@/components/ui/BackToTop';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://utkarsh-portfolio.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Utkarsh Kushwaha — Software Developer | Portfolio',
    template: '%s | Utkarsh Kushwaha',
  },
  description:
    'Utkarsh Kushwaha is a B.Tech Computer Science student at NIET (AKTU) with an 8.54 CGPA, software developer, hackathon finalist (SIH 2026), and open-source contributor (GSSoC 2026). Explore engineered systems and projects.',
  keywords: [
    'Utkarsh Kushwaha',
    'Utkarsh Kushwaha Portfolio',
    'Utkarsh Kushwaha Developer',
    'Utkarsh Kushwaha NIET',
    'Utkarsh Kushwaha Software Developer',
    'B.Tech CSE NIET',
    'NIET Greater Noida',
    'Smart India Hackathon 2026',
    'GSSoC 2026 Contributor',
    'Java Developer',
    'Python Developer',
    'Full-Stack Developer',
  ],
  authors: [{ name: 'Utkarsh Kushwaha', url: 'https://github.com/utkarshkushwaha159' }],
  creator: 'Utkarsh Kushwaha',
  publisher: 'Utkarsh Kushwaha',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Utkarsh Kushwaha — Software Developer | Portfolio',
    description:
      'Personal portfolio of Utkarsh Kushwaha, B.Tech CSE student at NIET Greater Noida (AKTU). Software developer and problem solver.',
    siteName: 'Utkarsh Kushwaha — Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Utkarsh Kushwaha — Software Developer',
    description:
      'Computer Science Undergraduate | Software Developer | Hackathon Finalist | Open Source Contributor',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data: Schema.org Person & WebSite
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: 'Utkarsh Kushwaha',
        jobTitle: 'Software Developer',
        description:
          'B.Tech Computer Science & Engineering student at NIET Greater Noida, hackathon finalist, and open source contributor.',
        url: siteUrl,
        sameAs: [
          'https://www.linkedin.com/in/utkarsh-kk',
          'https://github.com/utkarshkushwaha159',
        ],
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'Noida Institute of Engineering & Technology (NIET), Greater Noida',
          sameAs: 'https://www.niet.co.in/',
        },
        knowsAbout: [
          'Software Engineering',
          'Java',
          'Python',
          'Data Structures & Algorithms',
          'Object-Oriented Programming',
          'Web Development',
          'Cybersecurity',
          'Internet of Things',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Utkarsh Kushwaha — Portfolio',
        description: 'Personal portfolio of software developer Utkarsh Kushwaha',
        publisher: {
          '@id': `${siteUrl}/#person`,
        },
      },
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,400&family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700;800&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-bg-primary text-text-primary antialiased">
        <CustomCursor />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
