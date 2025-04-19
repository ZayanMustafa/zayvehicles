


import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/section/navbar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  weight: ['400', '600', '700'], 
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  weight: ['400', '500'], 
});

export const metadata = {
  title: 'Zay Vehicle',
  description: 'Your premium vehicle e-commerce platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans select-none bg-dark text-white`}
      >
        {children}
        <Navbar/>
      </body>
    </html>
  );
}