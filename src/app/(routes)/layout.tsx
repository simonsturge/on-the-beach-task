import Background from '@/app/_components/Background';

import type { Metadata } from 'next';
import { config } from '@fortawesome/fontawesome-svg-core';
import { Inter } from 'next/font/google';

import '@fortawesome/fontawesome-svg-core/styles.css';
import './globals.css';

config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'On The Beach',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Background>{children}</Background>
      </body>
    </html>
  );
}
