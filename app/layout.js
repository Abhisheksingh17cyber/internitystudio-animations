import './globals.css';

export const metadata = {
  title: 'INTERNITY TOURS | Luxury Travel Experiences',
  description: 'Discover extraordinary journeys across the globe with INTERNITY TOURS. Premium travel experiences, curated destinations, and unforgettable voyages.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
