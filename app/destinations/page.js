'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Clock, MapPin, Sparkles, Users, HeartHandshake, Calendar } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem, SectionLabel, GoldDivider, ParallaxSection } from '@/components/Animations';

const categories = ['All', 'Europe', 'Asia', 'Africa', 'Americas', 'Oceania'];

const destinations = [
  {
    title: 'Santorini, Greece',
    region: 'Europe',
    description: 'Perched above the Aegean Sea, Santorini enchants with its iconic blue-domed churches, sun-bleached cliffside villages, and sunsets that paint the sky in shades of amber and rose. Wander through Oia at golden hour, savour wines from ancient volcanic vineyards, and drift between hidden coves aboard a private catamaran.',
    shortDescription: 'Iconic sunsets, volcanic vineyards, and cliffside serenity above the Aegean.',
    duration: '7-10 Days',
    price: '$4,800',
    image: '/sequence/final_005.jpg',
  },
  {
    title: 'Kyoto, Japan',
    region: 'Asia',
    description: 'A living tapestry of ancient tradition and refined beauty, Kyoto reveals itself through moss-carpeted temple gardens, the rustle of silk kimono in geisha districts, and the meditative calm of a private tea ceremony. Experience the fleeting magic of cherry blossoms in spring, or the fiery canopy of autumn maples framing centuries-old pagodas.',
    shortDescription: 'Ancient temples, tea ceremonies, and the timeless art of Japanese refinement.',
    duration: '10-14 Days',
    price: '$6,200',
    image: '/sequence/final_010.jpg',
  },
  {
    title: 'Serengeti, Tanzania',
    region: 'Africa',
    description: 'Witness the raw grandeur of nature on the vast plains of the Serengeti, where the Great Migration unfolds in a spectacle of primal beauty. From luxury tented camps beneath star-saturated skies to dawn balloon safaris drifting above endless golden grasslands, every moment here reconnects you with the untamed heartbeat of the Earth.',
    shortDescription: 'The Great Migration, luxury safari camps, and Africa\'s boundless wilderness.',
    duration: '8-12 Days',
    price: '$7,500',
    image: '/sequence/final_015.jpg',
  },
  {
    title: 'Amalfi Coast, Italy',
    region: 'Europe',
    description: 'Where terraced lemon groves cascade toward crystalline waters, the Amalfi Coast is a masterpiece of Mediterranean splendour. Cruise past pastel-painted villages clinging to dramatic sea cliffs, dine on hand-rolled pasta in family-run trattorias perched above the waves, and discover hidden beaches accessible only by vintage wooden boat.',
    shortDescription: 'Pastel villages, terraced gardens, and the jewel of the Mediterranean coastline.',
    duration: '7-10 Days',
    price: '$5,400',
    image: '/sequence/final_020.jpg',
  },
  {
    title: 'Patagonia, Argentina',
    region: 'Americas',
    description: 'At the edge of the world, Patagonia stirs the soul with its glacial lakes of impossible blue, towering granite spires, and windswept steppe stretching to the horizon. Trek through Torres del Paine, witness the thunderous calving of Perito Moreno Glacier, and retreat each evening to a luxury estancia where gaucho hospitality meets world-class cuisine.',
    shortDescription: 'Glacial wilderness, granite peaks, and estancia luxury at the edge of the world.',
    duration: '10-14 Days',
    price: '$8,200',
    image: '/sequence/final_025.jpg',
  },
  {
    title: 'Bali, Indonesia',
    region: 'Asia',
    description: 'The Island of the Gods weaves spirituality into every experience, from sacred water temples draped in offerings to emerald rice terraces sculpted over centuries. Surrender to holistic wellness in a clifftop spa, join a Balinese priest for a private purification ritual, and dine beneath a canopy of frangipani as the jungle hums its ancient lullaby.',
    shortDescription: 'Sacred temples, emerald rice terraces, and holistic wellness in paradise.',
    duration: '7-12 Days',
    price: '$4,200',
    image: '/sequence/final_030.jpg',
  },
  {
    title: 'Marrakech, Morocco',
    region: 'Africa',
    description: 'Step through ornate archways into a world of sensory wonder where the scent of cedar and orange blossom mingles with the call to prayer. Marrakech unveils its treasures in labyrinthine souks, opulent riads with courtyard pools, and the silence of the Sahara dunes just hours away. This is North Africa at its most intoxicating and refined.',
    shortDescription: 'Labyrinthine souks, opulent riads, and the golden silence of the Sahara.',
    duration: '7-10 Days',
    price: '$3,800',
    image: '/sequence/final_035.jpg',
  },
  {
    title: 'Queensland, Australia',
    region: 'Oceania',
    description: 'From the living mosaic of the Great Barrier Reef to the ancient emerald expanse of the Daintree Rainforest, Queensland offers a voyage through ecosystems of staggering beauty. Dive alongside sea turtles, helicopter over heart-shaped reefs, and retreat to a private island lodge where the Coral Sea meets powder-white sand.',
    shortDescription: 'The Great Barrier Reef, ancient rainforests, and island luxury beyond compare.',
    duration: '10-14 Days',
    price: '$7,800',
    image: '/sequence/final_040.jpg',
  },
  {
    title: 'Cusco & Sacred Valley, Peru',
    region: 'Americas',
    description: 'Walk in the footsteps of the Inca Empire through the Sacred Valley\'s patchwork of ancient ruins, weaving villages, and terraced mountainsides. Arrive at Machu Picchu via luxury train through the Andes, partake in a traditional Pachamanca feast prepared by local communities, and stay in heritage haciendas that honour centuries of Andean culture.',
    shortDescription: 'Incan heritage, Andean peaks, and the mystical wonder of Machu Picchu.',
    duration: '8-12 Days',
    price: '$5,600',
    image: '/sequence/final_045.jpg',
  },
];

const whyCards = [
  {
    icon: Sparkles,
    title: 'Handpicked Perfection',
    description: 'Every destination in our portfolio has been personally vetted by our travel architects. We select only locations that meet our exacting standards for beauty, cultural richness, and the availability of truly exceptional accommodations and experiences.',
  },
  {
    icon: Users,
    title: 'Local Connections',
    description: 'Our network of trusted local guides, artisans, and cultural ambassadors ensures you experience each destination from the inside. These are not tourist encounters but genuine connections that reveal the living soul of a place.',
  },
  {
    icon: HeartHandshake,
    title: 'Seamless Luxury',
    description: 'From the moment you arrive to the final farewell, every detail is orchestrated with quiet precision. Private transfers, priority access, and a dedicated concierge accompany you throughout, so the only thing you need to do is be present.',
  },
];

export default function DestinationsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredDestinations = activeCategory === 'All'
    ? destinations
    : destinations.filter((d) => d.region === activeCategory);

  return (
    <>
      {/* ====== HERO SECTION ====== */}
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <img
            src="/sequence/final_045.jpg"
            alt="Extraordinary destinations around the world"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-navy/30" />

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center section-padding">
          <SectionLabel className="text-center">Our Destinations</SectionLabel>

          <FadeIn delay={0.2}>
            <h1 className="heading-xl max-w-5xl mx-auto mb-6">
              Explore Extraordinary{' '}
              <span className="italic text-gold">Destinations</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="body-text max-w-2xl mx-auto text-lg md:text-xl text-white/70">
              From the sun-drenched coasts of the Mediterranean to the mist-veiled temples of
              Asia, discover a curated collection of the world&apos;s most remarkable places
              — each one chosen for its power to inspire, transform, and linger in memory
              long after you return.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="mt-10 flex items-center gap-3 text-gold">
              <MapPin size={16} strokeWidth={1.5} />
              <span className="font-inter text-xs uppercase tracking-ultra">
                150+ Destinations Worldwide
              </span>
            </div>
          </FadeIn>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent" />
      </section>

      {/* ====== FILTER / CATEGORY BAR ====== */}
      <section className="relative z-10 bg-navy border-b border-white/5">
        <div className="max-w-7xl mx-auto section-padding py-8 md:py-10">
          <FadeIn>
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 border font-inter font-semibold text-xs uppercase tracking-widest transition-all duration-500 ease-out ${
                    activeCategory === cat
                      ? 'bg-gold text-navy border-gold'
                      : 'border-gold text-gold hover:bg-gold hover:text-navy'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ====== DESTINATIONS GRID ====== */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-7xl mx-auto section-padding">
          {/* Grid Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16">
            <div>
              <SectionLabel>Curated Collection</SectionLabel>
              <FadeIn delay={0.1}>
                <h2 className="heading-lg">
                  {activeCategory === 'All' ? (
                    <>
                      All <span className="italic text-gold">Destinations</span>
                    </>
                  ) : (
                    <>
                      <span className="italic text-gold">{activeCategory}</span> Collection
                    </>
                  )}
                </h2>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <p className="body-text mt-4 md:mt-0 max-w-md">
                {filteredDestinations.length} extraordinary {filteredDestinations.length === 1 ? 'destination' : 'destinations'} awaiting your discovery.
              </p>
            </FadeIn>
          </div>

          {/* Destination Cards Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredDestinations.map((dest, i) => (
                  <motion.div
                    key={dest.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.1,
                      ease: [0.25, 0.4, 0.25, 1],
                    }}
                  >
                    <div className="group card-luxury h-full flex flex-col">
                      {/* Card Image */}
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={dest.image}
                          alt={dest.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                        />
                        {/* Image Overlay on Hover */}
                        <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/60 transition-all duration-700" />

                        {/* Region Tag */}
                        <div className="absolute top-4 left-4 z-10">
                          <span className="px-3 py-1.5 bg-gold/90 text-navy text-[10px] uppercase tracking-widest font-inter font-semibold">
                            {dest.region}
                          </span>
                        </div>

                        {/* Hover Description Overlay */}
                        <div className="absolute inset-0 z-10 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                          <p className="text-white/90 text-sm leading-relaxed text-center font-inter">
                            {dest.description}
                          </p>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="flex flex-col flex-1 p-6 md:p-8">
                        {/* Title */}
                        <h3 className="font-playfair text-xl md:text-2xl font-light text-white mb-3 group-hover:text-gold transition-colors duration-500">
                          {dest.title}
                        </h3>

                        {/* Short Description */}
                        <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">
                          {dest.shortDescription}
                        </p>

                        {/* Meta Info */}
                        <div className="flex items-center justify-between pt-5 border-t border-white/5">
                          <div className="flex items-center gap-2 text-text-secondary">
                            <Clock size={14} strokeWidth={1.5} />
                            <span className="font-inter text-xs uppercase tracking-wider">
                              {dest.duration}
                            </span>
                          </div>
                          <div>
                            <span className="font-inter text-[10px] uppercase tracking-wider text-text-secondary">
                              From{' '}
                            </span>
                            <span className="font-playfair text-lg text-gold">
                              {dest.price}
                            </span>
                          </div>
                        </div>

                        {/* Explore Link */}
                        <div className="mt-5">
                          <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-inter font-semibold group-hover:gap-3 transition-all duration-300"
                          >
                            <span>Enquire Now</span>
                            <ArrowUpRight
                              size={14}
                              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredDestinations.length === 0 && (
            <FadeIn>
              <div className="text-center py-20">
                <p className="heading-sm text-white/50 mb-4">No destinations found</p>
                <p className="body-text">
                  We are currently curating new experiences in this region.
                  Please check back soon or explore our other collections.
                </p>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* ====== WHY OUR DESTINATIONS ====== */}
      <section className="py-24 md:py-36 bg-ocean/30">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center mb-16 md:mb-20">
            <SectionLabel className="text-center">The INTERNITY Standard</SectionLabel>
            <FadeIn delay={0.1}>
              <h2 className="heading-lg mb-6">
                Why Our <span className="italic text-gold">Destinations</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="body-text max-w-2xl mx-auto">
                We do not simply list popular locations. Every destination in the INTERNITY
                portfolio has been chosen through a rigorous process of personal exploration,
                partner vetting, and a commitment to experiences that simply cannot be
                replicated elsewhere.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12" staggerDelay={0.15}>
            {whyCards.map((card) => (
              <StaggerItem key={card.title}>
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-6 border border-gold/30 flex items-center justify-center group-hover:bg-gold/5 transition-colors duration-500">
                    <card.icon className="text-gold" size={24} strokeWidth={1.2} />
                  </div>
                  <h3 className="heading-sm mb-4">{card.title}</h3>
                  <GoldDivider className="mx-auto mb-6" />
                  <p className="body-text text-sm max-w-sm mx-auto">{card.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ====== CTA / CONSULTATION SECTION ====== */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/sequence/final_008.jpg"
            alt="Luxury travel consultation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
          <div className="absolute inset-0 bg-navy/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto section-padding text-center">
          <SectionLabel className="text-center">Begin Your Journey</SectionLabel>

          <FadeIn delay={0.1}>
            <h2 className="heading-lg mb-6">
              Your Extraordinary Journey{' '}
              <span className="italic text-gold">Starts Here</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <GoldDivider className="mx-auto mb-8" />
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="body-text max-w-2xl mx-auto mb-6 text-white/70">
              Every journey we create begins with a conversation. Our travel architects take
              the time to understand your desires, interests, and travel style before crafting
              a bespoke itinerary that exceeds every expectation.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="body-text max-w-2xl mx-auto mb-10 text-white/70">
              Whether you dream of a romantic escape along the Amalfi Coast, a wildlife
              adventure across the Serengeti, or a cultural odyssey through ancient Kyoto,
              we will design a journey as unique as you are.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-gold text-xs">
                <Calendar size={14} strokeWidth={1.5} />
                Book a Consultation
              </Link>
              <Link href="/experiences" className="btn-gold-outline text-xs">
                Explore Experiences
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="mt-10 font-inter text-xs text-white/40 uppercase tracking-wider">
              Complimentary consultation &mdash; No obligation
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
