import type { Metadata } from 'next';
import './globals.css';
import CustomCursor from '@/components/ui/CustomCursor';
import BackToTop from '@/components/ui/BackToTop';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://utkarsh-kushwaha-portfolio.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Utkarsh Kushwaha Portfolio',
    template: '%s | Utkarsh Kushwaha Portfolio',
  },
  description:
    'Explore the portfolio of Utkarsh Kushwaha, a B.Tech Computer Science student at NIET (AKTU). Discover technical projects, programming skills, hackathon achievements, open-source contributions and experience.',
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
    title: 'Utkarsh Kushwaha Portfolio',
    description:
      'Explore the portfolio of Utkarsh Kushwaha, a B.Tech Computer Science student at NIET (AKTU). Discover technical projects, programming skills, hackathon achievements, open-source contributions and experience.',
    siteName: 'Utkarsh Kushwaha Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Utkarsh Kushwaha Portfolio',
    description:
      'Explore the portfolio of Utkarsh Kushwaha, a B.Tech Computer Science student at NIET (AKTU). Discover technical projects, programming skills, hackathon achievements, open-source contributions and experience.',
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
  verification: {
    google: 'KzO0kU07lK3Uj5cdtNuU_7j8NU5XwSuCPv9vrn2ro3Q',
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
          'Explore the portfolio of Utkarsh Kushwaha, a B.Tech Computer Science student at NIET (AKTU). Discover technical projects, programming skills, hackathon achievements, open-source contributions and experience.',
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
        name: 'Utkarsh Kushwaha Portfolio',
        description:
          'Explore the portfolio of Utkarsh Kushwaha, a B.Tech Computer Science student at NIET (AKTU). Discover technical projects, programming skills, hackathon achievements, open-source contributions and experience.',
        publisher: {
          '@id': `${siteUrl}/#person`,
        },
      },
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta
          name="google-site-verification"
          content="KzO0kU07lK3Uj5cdtNuU_7j8NU5XwSuCPv9vrn2ro3Q"
        />
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
