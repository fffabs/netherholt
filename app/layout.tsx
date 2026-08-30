import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://netherholt.com'),
  title: 'Netherholt — Experimental Holding Company',
  description:
    'Netherholt is the experimental holding company behind Moumoujus, Copycat for macOS, and future ventures.',
  icons: {
    icon: [{ url: '/netherholt-logo.svg', type: 'image/svg+xml' }],
    shortcut: '/netherholt-logo.svg',
  },
  openGraph: {
    title: 'Netherholt — Experimental Holding Company',
    description:
      'Building ventures where physical and digital products meet.',
    url: 'https://netherholt.com',
    siteName: 'Netherholt',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1730,
        height: 909,
        alt: 'Netherholt — Experimental holding company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Netherholt — Experimental Holding Company',
    description:
      'Building ventures where physical and digital products meet.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
