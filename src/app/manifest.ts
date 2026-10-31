import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Utkarsh Kushwaha Portfolio',
    short_name: 'Utkarsh Portfolio',
    description:
      'Explore the portfolio of Utkarsh Kushwaha, a B.Tech Computer Science student at NIET (AKTU).',
    start_url: '/',
    display: 'standalone',
    background_color: '#111820',
    theme_color: '#73DCE8',
    icons: [
      {
        src: '/icon.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/logo.png',
        sizes: '1024x1024',
        type: 'image/png',
      },
    ],
  };
}

