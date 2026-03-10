'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowUpRight, Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  explore: [
    { name: 'Destinations', href: '/destinations' },
    { name: 'Experiences', href: '/experiences' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  destinations: [
    { name: 'Mediterranean', href: '/destinations' },
    { name: 'Southeast Asia', href: '/destinations' },
    { name: 'European Alps', href: '/destinations' },
    { name: 'African Safari', href: '/destinations' },
    { name: 'South America', href: '/destinations' },
  ],
  experiences: [
    { name: 'Luxury Cruises', href: '/experiences' },
    { name: 'Cultural Immersion', href: '/experiences' },
    { name: 'Adventure Tours', href: '/experiences' },
    { name: 'Culinary Journeys', href: '/experiences' },
    { name: 'Wellness Retreats', href: '/experiences' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative z-20 bg-primary-dark border-t border-white/5">
      {/* CTA Banner */}
      <section className="section-padding py-20 md:py-28 border-b border-white/5 relative overflow-hidden">
        <div className="glow-orb w-[200px] h-[200px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-satoshi text-xs uppercase tracking-ultra text-gold mb-6"
          >
            Begin Your Story
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-lg mb-8"
          >
            Ready for an Extraordinary
            <br />
            <span className="text-gold">Journey?</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/contact" className="btn-gold">
              Plan Your Voyage
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="section-padding py-16 md:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="font-satoshi text-3xl font-bold tracking-wider text-white">
                INTERNITY
              </span>
              <br />
              <span className="font-satoshi text-[10px] uppercase tracking-ultra text-gold">
                Tours
              </span>
            </div>
            <p className="body-text text-sm max-w-md mb-8 leading-relaxed">
              Crafting extraordinary travel experiences for the discerning explorer.
              Every journey is a masterpiece — designed to inspire, transform, and
              create memories that endure.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-text-secondary hover:text-gold hover:border-gold/30 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-satoshi text-xs uppercase tracking-ultra text-gold mb-6">
                {title === 'explore' ? 'Explore' : title === 'destinations' ? 'Destinations' : 'Experiences'}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-text-secondary text-sm hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Bar */}
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col sm:flex-row gap-6 text-text-secondary text-sm">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone size={14} />
              +1 (234) 567-890
            </a>
            <a href="mailto:info@internitytours.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail size={14} />
              info@internitytours.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={14} />
              New York, United States
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-xs">
            &copy; {new Date().getFullYear()} INTERNITY TOURS. All rights reserved.
          </p>
          <div className="flex gap-6 text-text-secondary text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
