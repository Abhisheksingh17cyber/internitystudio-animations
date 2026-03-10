'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem, SectionLabel, GoldDivider } from '@/components/Animations';
import { ArrowUpRight, Anchor, Mountain, Utensils, Sparkles, Heart, Globe, Star, Calendar, Users, Clock } from 'lucide-react';

const categories = ['All', 'Cruises', 'Cultural', 'Adventure', 'Culinary', 'Wellness'];

const experiences = [
  {
    title: 'Mediterranean Odyssey',
    category: 'Cruises',
    image: '/sequence/final_002.jpg',
    duration: '14 Days',
    price: '$8,500',
    description: 'Sail through the azure waters of the Mediterranean, visiting hidden ports and iconic coastal cities from Barcelona to Santorini.',
    highlights: ['Private yacht excursions', 'Onboard fine dining', 'Shore-side private tours', 'Sunset deck events'],
    icon: Anchor,
  },
  {
    title: 'Japanese Heritage Trail',
    category: 'Cultural',
    image: '/sequence/final_012.jpg',
    duration: '10 Days',
    price: '$6,200',
    description: 'An intimate journey through Japan\'s cultural soul — from the hushed beauty of Kyoto\'s temples to the electric pulse of Tokyo.',
    highlights: ['Tea ceremony experience', 'Ryokan stays', 'Temple meditation', 'Geisha district tour'],
    icon: Globe,
  },
  {
    title: 'Patagonian Expedition',
    category: 'Adventure',
    image: '/sequence/final_022.jpg',
    duration: '12 Days',
    price: '$7,800',
    description: 'Trek through the raw, untamed wilderness of Patagonia\'s glaciers, peaks, and pristine wilderness lodges.',
    highlights: ['Glacier heli-tours', 'Guided summit treks', 'Luxury eco-lodges', 'Wildlife encounters'],
    icon: Mountain,
  },
  {
    title: 'Tuscan Culinary Odyssey',
    category: 'Culinary',
    image: '/sequence/final_032.jpg',
    duration: '7 Days',
    price: '$5,400',
    description: 'Immerse yourself in the gastronomic heart of Italy — truffle hunts, vineyard dinners, and private chef masterclasses in Tuscany.',
    highlights: ['Vineyard private dinners', 'Farm-to-table cooking', 'Truffle hunting', 'Olive oil estates'],
    icon: Utensils,
  },
  {
    title: 'Bali Wellness Retreat',
    category: 'Wellness',
    image: '/sequence/final_042.jpg',
    duration: '8 Days',
    price: '$4,800',
    description: 'Restore balance and vitality in Bali\'s lush highlands — yoga, Ayurvedic treatments, and holistic spa rituals.',
    highlights: ['Daily yoga sessions', 'Spa treatments', 'Meditation workshops', 'Organic cuisine'],
    icon: Heart,
  },
  {
    title: 'Arctic Aurora Voyage',
    category: 'Cruises',
    image: '/sequence/final_048.jpg',
    duration: '10 Days',
    price: '$12,500',
    description: 'Witness the Northern Lights from the deck of a luxury expedition vessel through the fjords of Norway and Iceland.',
    highlights: ['Aurora viewing decks', 'Fjord kayaking', 'Thermal hot springs', 'Local Sami culture'],
    icon: Anchor,
  },
  {
    title: 'Moroccan Royal Tour',
    category: 'Cultural',
    image: '/sequence/final_038.jpg',
    duration: '9 Days',
    price: '$5,900',
    description: 'From the imperial cities to the Sahara — experience the majesty of Morocco through private riads and desert camps.',
    highlights: ['Private riad stays', 'Desert glamping', 'Medina guided tours', 'Atlas Mountains'],
    icon: Globe,
  },
  {
    title: 'Alpine Summit Challenge',
    category: 'Adventure',
    image: '/sequence/final_028.jpg',
    duration: '11 Days',
    price: '$9,200',
    description: 'Conquer the most spectacular peaks of the Swiss and French Alps with expert mountaineers and five-star base camps.',
    highlights: ['Summit heli-tours', 'Gourmet base camps', 'Via ferrata routes', 'Alpine spa recovery'],
    icon: Mountain,
  },
  {
    title: 'Tokyo Gastronomic Trail',
    category: 'Culinary',
    image: '/sequence/final_018.jpg',
    duration: '6 Days',
    price: '$4,200',
    description: 'Navigate Tokyo\'s extraordinary food scene — from hidden ramen counters to multi-Michelin starred kaiseki temples.',
    highlights: ['Tsukiji market tours', 'Omakase experiences', 'Sake brewery visits', 'Street food crawls'],
    icon: Utensils,
  },
];

const luxuryFeatures = [
  {
    icon: Sparkles,
    title: 'White-Glove Service',
    description: 'From your first inquiry to your return home, a dedicated travel concierge ensures every detail exceeds expectations.',
  },
  {
    icon: Users,
    title: 'Expert-Led Journeys',
    description: 'Travel alongside historians, naturalists, sommeliers, and local artisans who bring each destination to life.',
  },
  {
    icon: Star,
    title: 'Exclusive Access',
    description: 'Private after-hours museum tours, chef\'s table reservations, and VIP experiences unavailable elsewhere.',
  },
];

export default function ExperiencesPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? experiences
    : experiences.filter((e) => e.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
        >
          <img
            src="/sequence/final_050.jpg"
            alt="Luxury experiences"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-primary/30" />
        <div className="relative z-10 section-padding max-w-7xl mx-auto w-full pt-32">
          <SectionLabel>Curated Experiences</SectionLabel>
          <FadeIn delay={0.1}>
            <h1 className="heading-xl mb-6 max-w-4xl">
              Extraordinary <span className="text-gold">Experiences</span>
              <br />
              Await
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="body-text max-w-xl text-lg">
              From oceangoing voyages to mountaintop retreats, each experience is designed
              to reveal the soul of a destination through a lens of uncompromising luxury.
            </p>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent" />
      </section>

      {/* Filter + Grid */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-primary">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto section-padding relative z-10">
          {/* Filters */}
          <FadeIn>
            <div className="flex flex-wrap gap-3 mb-14 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-3 font-satoshi text-xs uppercase tracking-ultra border transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-gold text-primary border-gold'
                      : 'border-white/10 text-text-secondary hover:border-gold/40 hover:text-gold'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Experience Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filtered.map((exp, i) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="card-luxury rounded-card group h-full flex flex-col">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden rounded-card">
                      <img
                        src={exp.image}
                        alt={exp.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="px-3 py-1 bg-gold/90 text-primary text-[10px] uppercase tracking-widest font-semibold font-satoshi">
                          {exp.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4 w-10 h-10 border border-white/20 flex items-center justify-center bg-primary/40 backdrop-blur-sm rounded-card">
                        <exp.icon size={18} className="text-gold" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8 flex flex-col flex-1">
                      <h3 className="font-satoshi text-2xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {exp.highlights.map((h) => (
                          <span key={h} className="text-text-secondary text-xs flex items-center gap-1.5">
                            <span className="w-1 h-1 bg-gold rounded-full flex-shrink-0" />
                            {h}
                          </span>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/5">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1.5 text-text-secondary text-xs">
                            <Clock size={12} />
                            {exp.duration}
                          </span>
                          <span className="text-gold font-satoshi font-semibold text-sm">
                            From {exp.price}
                          </span>
                        </div>
                        <Link
                          href="/contact"
                          className="text-gold text-xs uppercase tracking-wider font-satoshi flex items-center gap-1 hover:gap-2 transition-all duration-300"
                        >
                          Enquire
                          <ArrowUpRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Luxury Features */}
      <section className="relative overflow-hidden py-24 md:py-32 section-gradient">
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[350px] h-[350px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto section-padding relative z-10">
          <div className="text-center mb-16">
            <SectionLabel className="text-center">The INTERNITY Standard</SectionLabel>
            <FadeIn delay={0.1}>
              <h2 className="heading-lg">
                Unparalleled <span className="text-gold">Service</span>
              </h2>
            </FadeIn>
          </div>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {luxuryFeatures.map((feat) => (
              <StaggerItem key={feat.title}>
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-6 border border-gold/30 rounded-card flex items-center justify-center group-hover:bg-gold/5 transition-colors duration-500">
                    <feat.icon className="text-gold" size={24} strokeWidth={1.2} />
                  </div>
                  <h3 className="heading-sm mb-4">{feat.title}</h3>
                  <GoldDivider className="mx-auto mb-4" />
                  <p className="body-text text-sm max-w-sm mx-auto">{feat.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Full-Width CTA */}
      <section className="relative overflow-hidden py-28 md:py-36">
        <div className="absolute inset-0">
          <img src="/sequence/final_055.jpg" alt="CTA background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-primary/40" />
        <div className="absolute -top-24 -left-24 w-[350px] h-[350px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-[350px] h-[350px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10 section-padding max-w-4xl mx-auto text-center">
          <SectionLabel className="text-center">Start Planning</SectionLabel>
          <FadeIn delay={0.1}>
            <h2 className="heading-lg mb-6">
              Your Perfect Journey <span className="text-gold">Awaits</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <GoldDivider className="mx-auto mb-6" />
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="body-text max-w-xl mx-auto mb-10 text-white/70">
              Let our travel architects craft a bespoke experience tailored to
              your every desire. Complimentary consultation — no obligation.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-gold">
                <Calendar size={16} />
                Book Consultation
              </Link>
              <Link href="/destinations" className="btn-gold-outline">
                Explore Destinations
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
