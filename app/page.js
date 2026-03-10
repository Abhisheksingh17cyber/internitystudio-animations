'use client';

import HeroSequence from '@/components/HeroSequence';
import { FadeIn, StaggerContainer, StaggerItem, CountUp, SectionLabel, GoldDivider, ParallaxSection } from '@/components/Animations';
import { ArrowUpRight, Compass, Globe, Star, Shield, Anchor, Mountain, Sun, TreePine } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const stats = [
  { number: 150, suffix: '+', label: 'Destinations' },
  { number: 12, suffix: '+', label: 'Years of Excellence' },
  { number: 50, suffix: 'K+', label: 'Happy Travelers' },
  { number: 98, suffix: '%', label: 'Satisfaction Rate' },
];

const featuredDestinations = [
  {
    title: 'Santorini, Greece',
    subtitle: 'Mediterranean Bliss',
    description: 'Azure waters meet whitewashed architecture in one of the world\'s most iconic island destinations.',
    image: '/sequence/final_010.jpg',
    tag: 'Popular',
  },
  {
    title: 'Kyoto, Japan',
    subtitle: 'Ancient Elegance',
    description: 'A timeless journey through bamboo forests, ancient temples, and the art of Japanese refinement.',
    image: '/sequence/final_020.jpg',
    tag: 'Cultural',
  },
  {
    title: 'Swiss Alps',
    subtitle: 'Alpine Grandeur',
    description: 'Majestic peaks, pristine valleys, and world-class luxury lodges nestled in nature\'s masterpiece.',
    image: '/sequence/final_030.jpg',
    tag: 'Adventure',
  },
];

const experiences = [
  {
    icon: Anchor,
    title: 'Luxury Cruises',
    description: 'Sail the world\'s most stunning coastlines aboard vessels designed for discerning travelers.',
  },
  {
    icon: Mountain,
    title: 'Adventure Expeditions',
    description: 'From Himalayan treks to Arctic explorations — carefully curated adventures await.',
  },
  {
    icon: Sun,
    title: 'Coastal Retreats',
    description: 'Private beaches, over-water villas, and the gentle rhythm of the ocean at your doorstep.',
  },
  {
    icon: TreePine,
    title: 'Cultural Immersions',
    description: 'Deep connections with local traditions, cuisines, and the living heart of every destination.',
  },
];

const testimonials = [
  {
    quote: 'INTERNITY TOURS transformed our anniversary trip into the most magical experience of our lives. Every detail was perfect.',
    author: 'Elizabeth & James',
    location: 'Mediterranean Voyage',
    rating: 5,
  },
  {
    quote: 'The level of personalization is unmatched. They understood exactly what we were looking for before we even knew ourselves.',
    author: 'Alexander Chen',
    location: 'Japanese Heritage Tour',
    rating: 5,
  },
  {
    quote: 'From the private transfers to the handpicked boutique hotels, everything spoke of quiet, understated luxury.',
    author: 'Sofia Laurent',
    location: 'Alpine Expedition',
    rating: 5,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section with Image Sequence Animation */}
      <HeroSequence />

      {/* Stats Section */}
      <section className="relative z-20 bg-primary-dark border-y border-white/5">
        <div className="max-w-7xl mx-auto section-padding py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <p className="font-satoshi text-4xl md:text-5xl font-bold text-white mb-2">
                    <CountUp end={stat.number} suffix={stat.suffix} />
                  </p>
                  <p className="font-satoshi text-xs uppercase tracking-ultra text-text-secondary">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="relative z-20 py-24 md:py-36 bg-primary overflow-hidden">
        {/* Glow orb */}
        <div className="glow-orb w-[300px] h-[300px] top-[20%] right-[10%] opacity-20" />
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Content */}
            <div>
              <SectionLabel>The Art of Travel</SectionLabel>
              <FadeIn delay={0.1}>
                <h2 className="heading-lg mb-8">
                  Where Wanderlust
                  <br />
                  Meets <span className="text-gold">Luxury</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <GoldDivider className="mb-8" />
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="body-text mb-6">
                  At INTERNITY TOURS, we believe travel is the ultimate form of self-discovery.
                  Each journey we craft is a carefully orchestrated symphony of culture,
                  comfort, and connection — designed to transform the way you see the world.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p className="body-text mb-10">
                  From intimate cultural immersions in ancient cities to breathtaking ocean
                  voyages across pristine waters, our travel architects design bespoke
                  itineraries that honor both the destination and the traveler.
                </p>
              </FadeIn>
              <FadeIn delay={0.5}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/about" className="btn-gold text-xs">
                    Our Story
                    <ArrowUpRight size={14} />
                  </Link>
                  <Link href="/experiences" className="btn-gold-outline text-xs">
                    View Experiences
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Right Image Grid */}
            <div className="relative">
              <FadeIn delay={0.3} direction="right">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="aspect-[3/4] overflow-hidden rounded-card">
                      <img
                        src="/sequence/final_005.jpg"
                        alt="Luxury travel"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="aspect-square overflow-hidden rounded-card">
                      <img
                        src="/sequence/final_015.jpg"
                        alt="Travel experience"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 pt-12">
                    <div className="aspect-square overflow-hidden rounded-card">
                      <img
                        src="/sequence/final_025.jpg"
                        alt="Destination"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="aspect-[3/4] overflow-hidden rounded-card">
                      <img
                        src="/sequence/final_035.jpg"
                        alt="Adventure"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="relative z-20 py-24 md:py-36 section-gradient">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center mb-16 md:mb-20">
            <SectionLabel className="text-center">Featured Destinations</SectionLabel>
            <FadeIn delay={0.1}>
              <h2 className="heading-lg mb-6">
                Handpicked <span className="text-gold">Wonders</span>
                <br />
                of the World
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="body-text max-w-2xl mx-auto">
                Our expert travel architects select only the most extraordinary
                destinations — places that inspire, transform, and create lasting memories.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {featuredDestinations.map((dest, i) => (
              <StaggerItem key={dest.title}>
                <Link href="/destinations" className="group block card-luxury">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-card">
                    <img
                      src={dest.image}
                      alt={dest.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-gold/90 text-primary text-[10px] uppercase tracking-widest font-satoshi font-bold rounded-full">
                        {dest.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <p className="text-gold text-xs uppercase tracking-ultra mb-2 font-satoshi">
                        {dest.subtitle}
                      </p>
                      <h3 className="font-satoshi text-2xl md:text-3xl font-bold text-white mb-3">
                        {dest.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {dest.description}
                      </p>
                      <div className="flex items-center gap-2 mt-4 text-gold text-xs uppercase tracking-widest font-satoshi">
                        <span>Explore</span>
                        <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.4}>
            <div className="text-center mt-12 md:mt-16">
              <Link href="/destinations" className="btn-gold-outline text-xs">
                View All Destinations
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="relative z-20 py-24 md:py-36 bg-primary overflow-hidden">
        <div className="glow-orb w-[250px] h-[250px] bottom-[10%] left-[5%] opacity-20" />
        <div className="max-w-7xl mx-auto section-padding relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <SectionLabel>Curated Experiences</SectionLabel>
              <FadeIn delay={0.1}>
                <h2 className="heading-lg mb-8">
                  Journeys Crafted
                  <br />
                  for the <span className="text-gold">Extraordinary</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <GoldDivider className="mb-8" />
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="body-text mb-10">
                  Every experience is thoughtfully designed to create moments that transcend
                  the ordinary. Our curators blend local expertise with world-class service
                  to deliver journeys that are as unique as you are.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <Link href="/experiences" className="btn-gold text-xs">
                  Discover Experiences
                  <ArrowUpRight size={14} />
                </Link>
              </FadeIn>
            </div>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6" staggerDelay={0.15}>
              {experiences.map((exp) => (
                <StaggerItem key={exp.title}>
                  <div className="card-luxury p-6 md:p-8 group hover:bg-card-hover transition-all duration-500 relative overflow-hidden">
                    <div className="glow-orb w-[100px] h-[100px] -top-[50px] -right-[50px] opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
                    <exp.icon className="text-gold mb-5 relative z-10" size={28} strokeWidth={1.2} />
                    <h3 className="font-satoshi text-xl font-bold text-white mb-3 relative z-10">
                      {exp.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed relative z-10">
                      {exp.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Parallax Image Break */}
      <section className="relative z-20 h-[70vh] overflow-hidden">
        <ParallaxSection speed={0.5} className="absolute inset-[-15%]">
          <img
            src="/sequence/final_040.jpg"
            alt="Travel panorama"
            className="w-full h-full object-cover"
          />
        </ParallaxSection>
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 h-full flex items-center justify-center text-center section-padding">
          <div>
            <FadeIn>
              <p className="font-satoshi text-xs uppercase tracking-ultra text-gold mb-4">
                A Promise of Excellence
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="heading-lg max-w-3xl mx-auto">
                Every Detail <span className="text-gold">Matters.</span>
                <br />
                Every Moment <span className="text-gold">Counts.</span>
              </h2>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative z-20 py-24 md:py-36 bg-primary overflow-hidden">
        <div className="glow-orb w-[200px] h-[200px] top-[30%] left-1/2 -translate-x-1/2 opacity-15" />
        <div className="max-w-7xl mx-auto section-padding relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <SectionLabel className="text-center">Why INTERNITY</SectionLabel>
            <FadeIn delay={0.1}>
              <h2 className="heading-lg mb-6">
                The <span className="text-gold">INTERNITY</span> Difference
              </h2>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                icon: Compass,
                title: 'Bespoke Itineraries',
                description: 'Every journey is uniquely designed around your preferences, pace, and passions — never a one-size-fits-all approach.',
              },
              {
                icon: Globe,
                title: 'Global Expertise',
                description: 'Our network of local guides, luxury partners, and destination specialists spans over 150 destinations worldwide.',
              },
              {
                icon: Shield,
                title: 'Uncompromising Quality',
                description: 'From five-star accommodations to private transfers, every touchpoint meets the highest standards of luxury service.',
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-6 border border-gold/30 rounded-card flex items-center justify-center group-hover:bg-gold/5 transition-colors duration-500">
                    <item.icon className="text-gold" size={24} strokeWidth={1.2} />
                  </div>
                  <h3 className="heading-sm mb-4">{item.title}</h3>
                  <p className="body-text text-sm max-w-sm mx-auto">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-20 py-24 md:py-36 section-gradient-alt">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center mb-16 md:mb-20">
            <SectionLabel className="text-center">Testimonials</SectionLabel>
            <FadeIn delay={0.1}>
              <h2 className="heading-lg">
                Words from Our <span className="text-gold">Travelers</span>
              </h2>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t) => (
              <StaggerItem key={t.author}>
                <div className="card-luxury p-8 md:p-10 h-full flex flex-col relative overflow-hidden">
                  <div className="glow-orb w-[120px] h-[120px] -bottom-[60px] -right-[60px] opacity-20" />
                  {/* Stars */}
                  <div className="flex gap-1 mb-6 relative z-10">
                    {Array(t.rating).fill(null).map((_, i) => (
                      <Star key={i} size={14} className="fill-gold text-gold" />
                    ))}
                  </div>
                  <blockquote className="text-white/90 text-base leading-relaxed mb-8 flex-1 font-satoshi relative z-10">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="relative z-10">
                    <p className="text-white font-satoshi font-medium text-sm">{t.author}</p>
                    <p className="text-gold text-xs uppercase tracking-wider mt-1 font-satoshi">{t.location}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative z-20 py-24 md:py-36 bg-primary overflow-hidden">
        <div className="glow-orb w-[250px] h-[250px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15" />
        <div className="max-w-4xl mx-auto section-padding text-center relative z-10">
          <SectionLabel className="text-center">Stay Inspired</SectionLabel>
          <FadeIn delay={0.1}>
            <h2 className="heading-lg mb-6">
              Join the <span className="text-gold">INTERNITY</span> Circle
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="body-text max-w-xl mx-auto mb-10">
              Receive exclusive travel insights, early access to new journeys,
              and curated inspiration delivered to your inbox.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-card/80 backdrop-blur-sm border border-white/10 text-white placeholder:text-text-secondary/50 font-satoshi text-sm rounded-pill
                focus:outline-none focus:border-gold/40 transition-colors duration-300"
              />
              <button type="submit" className="btn-gold text-xs whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
