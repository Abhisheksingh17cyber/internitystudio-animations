'use client';

import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>INTERNITY TOURS | Luxury Travel Experiences</title>
        <meta name="description" content="Discover the world's most extraordinary destinations with INTERNITY TOURS. Luxury travel experiences crafted for the discerning explorer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-navy text-white font-inter">
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
