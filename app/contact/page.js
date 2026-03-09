'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem, SectionLabel, GoldDivider } from '@/components/Animations';
import { Phone, Mail, MapPin, Clock, Send, ArrowUpRight, Globe, MessageCircle, Calendar } from 'lucide-react';

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    detail: '+1 (234) 567-890',
    subtext: 'Mon–Fri, 9AM–7PM EST',
    href: 'tel:+1234567890',
  },
  {
    icon: Mail,
    title: 'Email Us',
    detail: 'info@internitytours.com',
    subtext: 'We respond within 24 hours',
    href: 'mailto:info@internitytours.com',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    detail: '580 Fifth Avenue, Suite 1200',
    subtext: 'New York, NY 10036',
    href: '#',
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    detail: 'Chat with our concierge',
    subtext: 'Available 24/7',
    href: '#',
  },
];

const offices = [
  { city: 'New York', country: 'United States', timezone: 'EST (UTC-5)', phone: '+1 (234) 567-890' },
  { city: 'London', country: 'United Kingdom', timezone: 'GMT (UTC+0)', phone: '+44 20 7946 0958' },
  { city: 'Singapore', country: 'Singapore', timezone: 'SGT (UTC+8)', phone: '+65 6789 0123' },
  { city: 'Dubai', country: 'UAE', timezone: 'GST (UTC+4)', phone: '+971 4 567 8901' },
];

const faqs = [
  {
    q: 'How far in advance should I book?',
    a: 'We recommend booking 3–6 months in advance for most journeys, and up to 12 months for peak-season destinations and exclusive experiences.',
  },
  {
    q: 'Can I customize a pre-designed experience?',
    a: 'Absolutely. Every journey we offer can be tailored to your preferences. Our travel architects welcome the opportunity to personalize each detail.',
  },
  {
    q: 'What is included in the consultation?',
    a: 'Our complimentary consultation covers your travel aspirations, preferred style, budget considerations, and a preliminary itinerary concept — with no obligation.',
  },
  {
    q: 'Do you offer group and corporate travel?',
    a: 'Yes. We specialize in curating bespoke group experiences, corporate retreats, and incentive travel programs for discerning organizations.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'Our flexible cancellation policies vary by experience type. Most journeys offer full refunds up to 60 days before departure, with graduated terms thereafter.',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: '',
    travelDate: '',
    budget: '',
    message: '',
  });
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
  };

  const inputClasses =
    'w-full px-5 py-4 bg-ocean/50 border border-white/10 text-white placeholder:text-text-secondary/40 font-inter text-sm focus:outline-none focus:border-gold/40 transition-colors duration-300';

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
        >
          <img
            src="/sequence/final_054.jpg"
            alt="Contact INTERNITY TOURS"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-navy/40" />

        <div className="relative z-10 section-padding max-w-7xl mx-auto w-full pt-32">
          <SectionLabel>Get in Touch</SectionLabel>
          <FadeIn delay={0.1}>
            <h1 className="heading-xl mb-6 max-w-4xl">
              Let&apos;s Plan Your
              <br />
              <span className="italic text-gold">Dream Journey</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="body-text text-lg max-w-xl">
              Whether you have a destination in mind or are seeking inspiration,
              our travel architects are ready to craft your perfect journey.
            </p>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent" />
      </section>

      {/* Contact Methods */}
      <section className="py-16 md:py-20 bg-navy border-b border-white/5">
        <div className="max-w-7xl mx-auto section-padding">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method) => (
              <StaggerItem key={method.title}>
                <a href={method.href} className="card-luxury p-6 md:p-8 block group hover:bg-ocean/80 transition-all duration-500 h-full">
                  <div className="w-12 h-12 border border-gold/30 flex items-center justify-center mb-5 group-hover:bg-gold/5 transition-colors duration-500">
                    <method.icon className="text-gold" size={20} strokeWidth={1.3} />
                  </div>
                  <h3 className="font-playfair text-lg font-light text-white mb-2">{method.title}</h3>
                  <p className="text-white text-sm font-inter mb-1">{method.detail}</p>
                  <p className="text-text-secondary text-xs">{method.subtext}</p>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-24 md:py-36 bg-navy">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
            {/* Form */}
            <div className="lg:col-span-3">
              <SectionLabel>Enquiry Form</SectionLabel>
              <FadeIn delay={0.1}>
                <h2 className="heading-lg mb-4">
                  Begin Your <span className="italic text-gold">Consultation</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.15}>
                <GoldDivider className="mb-6" />
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="body-text text-sm mb-10 max-w-lg">
                  Share your travel aspirations and our team will craft a personalized
                  proposal within 48 hours. No obligation, no pressure — just inspiration.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <input
                      name="firstName"
                      type="text"
                      placeholder="First Name *"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={inputClasses}
                      required
                    />
                    <input
                      name="lastName"
                      type="text"
                      placeholder="Last Name *"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={inputClasses}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <input
                      name="email"
                      type="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClasses}
                      required
                    />
                    <input
                      name="phone"
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className={`${inputClasses} appearance-none`}
                    >
                      <option value="" className="bg-ocean text-text-secondary">Experience Type</option>
                      <option value="cruise" className="bg-ocean">Luxury Cruise</option>
                      <option value="cultural" className="bg-ocean">Cultural Immersion</option>
                      <option value="adventure" className="bg-ocean">Adventure Expedition</option>
                      <option value="culinary" className="bg-ocean">Culinary Journey</option>
                      <option value="wellness" className="bg-ocean">Wellness Retreat</option>
                      <option value="custom" className="bg-ocean">Custom Journey</option>
                    </select>
                    <input
                      name="travelDate"
                      type="text"
                      placeholder="Preferred Travel Date"
                      value={formData.travelDate}
                      onChange={handleChange}
                      className={inputClasses}
                      onFocus={(e) => (e.target.type = 'date')}
                      onBlur={(e) => {
                        if (!e.target.value) e.target.type = 'text';
                      }}
                    />
                  </div>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={`${inputClasses} appearance-none`}
                  >
                    <option value="" className="bg-ocean text-text-secondary">Budget Range (per person)</option>
                    <option value="3000-5000" className="bg-ocean">$3,000 – $5,000</option>
                    <option value="5000-10000" className="bg-ocean">$5,000 – $10,000</option>
                    <option value="10000-20000" className="bg-ocean">$10,000 – $20,000</option>
                    <option value="20000+" className="bg-ocean">$20,000+</option>
                  </select>
                  <textarea
                    name="message"
                    placeholder="Tell us about your dream journey — destinations, interests, special occasions..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`${inputClasses} resize-none`}
                  />
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <button type="submit" className="btn-gold">
                      <Send size={16} />
                      Send Enquiry
                    </button>
                    <p className="text-text-secondary text-xs">
                      Complimentary consultation — No obligation
                    </p>
                  </div>
                </form>
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <SectionLabel>Our Offices</SectionLabel>
              <FadeIn delay={0.1}>
                <h3 className="heading-md mb-8">
                  <span className="italic text-gold">Global</span> Presence
                </h3>
              </FadeIn>

              <div className="space-y-6">
                {offices.map((office, i) => (
                  <FadeIn key={office.city} delay={0.15 + i * 0.1}>
                    <div className="card-luxury p-6 group hover:bg-ocean/80 transition-all duration-500">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 border border-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Globe className="text-gold" size={16} strokeWidth={1.3} />
                        </div>
                        <div>
                          <h4 className="font-playfair text-lg font-light text-white">
                            {office.city}
                          </h4>
                          <p className="text-text-secondary text-sm mb-2">{office.country}</p>
                          <div className="flex flex-col gap-1 text-xs text-text-secondary">
                            <span className="flex items-center gap-1.5">
                              <Clock size={11} /> {office.timezone}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Phone size={11} /> {office.phone}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>

              {/* Emergency Contact */}
              <FadeIn delay={0.6}>
                <div className="mt-8 p-6 border border-gold/20 bg-gold/5">
                  <p className="font-inter text-xs uppercase tracking-ultra text-gold mb-2">
                    24/7 Traveler Support
                  </p>
                  <p className="text-white text-sm mb-1 font-inter">
                    For travelers currently on a journey:
                  </p>
                  <a
                    href="tel:+18005551234"
                    className="text-gold font-inter font-semibold text-lg hover:text-gold-light transition-colors"
                  >
                    +1 (800) 555-1234
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-ocean/30">
        <div className="max-w-3xl mx-auto section-padding">
          <div className="text-center mb-16">
            <SectionLabel className="text-center">Common Questions</SectionLabel>
            <FadeIn delay={0.1}>
              <h2 className="heading-lg">
                Frequently <span className="italic text-gold">Asked</span>
              </h2>
            </FadeIn>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="border border-white/5 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-ocean/40 transition-colors duration-300"
                  >
                    <span className="font-playfair text-lg font-light text-white pr-4">
                      {faq.q}
                    </span>
                    <motion.span
                      animate={{ rotate: openFaq === i ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gold text-2xl font-light flex-shrink-0"
                    >
                      +
                    </motion.span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === i ? 'auto' : 0,
                      opacity: openFaq === i ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Map / CTA */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/sequence/final_056.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-navy/50" />
        <div className="relative z-10 section-padding max-w-4xl mx-auto text-center">
          <SectionLabel className="text-center">Ready to Begin?</SectionLabel>
          <FadeIn delay={0.1}>
            <h2 className="heading-lg mb-6">
              The World Is <span className="italic text-gold">Waiting</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="body-text max-w-xl mx-auto mb-10 text-white/70">
              Schedule a private consultation with one of our travel architects and
              take the first step toward your most extraordinary journey yet.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+1234567890" className="btn-gold">
                <Phone size={16} />
                Call Now
              </a>
              <a href="mailto:info@internitytours.com" className="btn-gold-outline">
                <Mail size={16} />
                Email Us
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
