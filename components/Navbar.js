'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Destinations', href: '/destinations' },
  { name: 'Experiences', href: '/experiences' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block fixed top-0 left-0 right-0 z-[60] bg-primary-dark/90 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+1234567890" className="flex items-center gap-2 text-text-secondary text-xs hover:text-gold transition-colors">
              <Phone size={12} />
              <span>+1 (234) 567-890</span>
            </a>
            <a href="mailto:info@internitytours.com" className="flex items-center gap-2 text-text-secondary text-xs hover:text-gold transition-colors">
              <Mail size={12} />
              <span>info@internitytours.com</span>
            </a>
          </div>
          <p className="text-text-secondary text-xs tracking-wider font-satoshi">
            Crafting Extraordinary Journeys Since 2024
          </p>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.header
        className={`fixed left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? 'top-0 bg-primary-dark/95 backdrop-blur-md border-b border-white/5 py-4'
            : 'lg:top-[36px] top-0 bg-transparent py-6'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <div className="flex flex-col items-start">
              <span className="font-satoshi text-2xl md:text-3xl font-bold tracking-wider text-white">
                INTERNITY
              </span>
              <span className="font-satoshi text-[10px] uppercase tracking-ultra text-gold mt-[-2px]">
                Tours
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="nav-link relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-500" />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <Link href="/contact" className="btn-gold text-xs py-3 px-6">
              Book Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden relative z-10 text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-primary/98 backdrop-blur-lg flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="font-satoshi text-3xl font-bold text-white hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <Link href="/contact" onClick={() => setIsMobileOpen(false)} className="btn-gold mt-4">
                  Book Now
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
