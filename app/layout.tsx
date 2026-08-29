import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://netherholt.com'),
  title: 'Netherholt — Independent Holding Company',
  description:
    'Netherholt is the independent holding company behind Moumoujus, Copycat app, and future ventures.',
  openGraph: {
    title: 'Netherholt — Independent Holding Company',
    description:
      'A home for considered companies—Moumoujus, Copycat app, and whatever comes next.',
    url: 'https://netherholt.com',
    siteName: 'Netherholt',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1730,
        height: 909,
        alt: 'Netherholt — Independent holding company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Netherholt — Independent Holding Company',
    description:
      'A home for considered companies—Moumoujus, Copycat app, and whatever comes next.',
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
