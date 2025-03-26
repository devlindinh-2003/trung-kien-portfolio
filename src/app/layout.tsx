import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import StairTransition from '@/components/StairTransition';
import { Analytics } from '@vercel/analytics/next';

// Load JetBrains Mono font
const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono', // Define CSS variable for usage
  subsets: ['latin'], // Define supported subsets
  weight: ['400', '700'], // Include different weights if needed
});
export const metadata: Metadata = {
  title: 'Trung Kien | Personal Portfolio',
  description: 'Trung Kien is a front-end developer ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${jetBrainsMono.variable} antialiased bg-zinc-900 text-white`}
      >
        {/* Header */}
        <Header></Header>
        {/* Body */}
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        {/* Footer */}
        {/* <Footer /> */}
        <Analytics />
      </body>
    </html>
  );
}
