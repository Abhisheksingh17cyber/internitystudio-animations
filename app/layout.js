import './globals.css';
import ClientLayout from '@/components/ClientLayout';

export const metadata = {
  title: 'INTERNITY TOURS | Luxury Travel Experiences',
  description: 'Discover the world\'s most extraordinary destinations with INTERNITY TOURS. Luxury travel experiences crafted for the discerning explorer.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-navy text-white font-inter">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
