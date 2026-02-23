import type { Metadata } from 'next';
import { Geist, Geist_Mono, Syne } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Emmanuel Yupit - Engineering Manager & Full-Stack Engineer',
  description:
    'Engineering Manager with 9 years building scalable systems. Led teams at Vetted Health & EPAM. Expert in React, Node.js, AWS, and distributed systems. 150k+ users, $20M ARR impact.',
  keywords: [
    'Emmanuel Yupit',
    'Engineering Manager',
    'Full Stack Engineer',
    'Frontend Engineer',
    'React',
    'Node.js',
    'TypeScript',
    'AWS',
    'Technical Leader',
  ],
  authors: [{ name: 'Emmanuel Yupit' }],
  creator: 'Emmanuel Yupit',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://emmanuelyupit.com',
    title: 'Emmanuel Yupit - Engineering Manager & Full-Stack Engineer',
    description:
      'Building reliable systems at scale. 150k+ users, $20M ARR impact.',
    siteName: 'Emmanuel Yupit',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emmanuel Yupit - Engineering Manager & Full-Stack Engineer',
    description:
      'Building reliable systems at scale. 150k+ users, $20M ARR impact.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} antialiased`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
