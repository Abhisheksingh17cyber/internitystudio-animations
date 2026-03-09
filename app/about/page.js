'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem, SectionLabel, GoldDivider, CountUp } from '@/components/Animations';
import { ArrowUpRight, Compass, Globe, Heart, Shield, Users, Award, MapPin } from 'lucide-react';

const values = [
  {
    icon: Compass,
    title: 'Authenticity',
    description: 'We believe true luxury lies in authentic experiences that connect travelers with the genuine spirit of each destination.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Our team is driven by an unwavering passion for discovery, beauty, and the transformative power of travel.',
  },
  {
    icon: Shield,
    title: 'Excellence',
    description: 'From the first conversation to the final farewell, every touchpoint reflects our commitment to the highest standards.',
  },
  {
    icon: Globe,
    title: 'Sustainability',
    description: 'We are devoted stewards of the places we visit, partnering with communities to ensure travel enriches rather than extracts.',
  },
];

const team = [
  {
    name: 'Victoria Ashford',
    role: 'Founder & Creative Director',
    image: '/sequence/final_003.jpg',
    description: 'With two decades in luxury hospitality, Victoria founded INTERNITY TOURS to redefine how the world experiences travel.',
  },
  {
    name: 'James Harrington',
    role: 'Head of Destinations',
    image: '/sequence/final_013.jpg',
    description: 'A former National Geographic explorer, James curates our destination portfolio with an eye for the undiscovered.',
  },
  {
    name: 'Sophia Chen',
    role: 'Experience Architect',
    image: '/sequence/final_023.jpg',
    description: 'Sophia transforms travel dreams into meticulously planned realities, ensuring each itinerary is a masterpiece.',
  },
  {
    name: 'Marcus Laurent',
    role: 'Luxury Partnerships',
    image: '/sequence/final_033.jpg',
    description: 'Marcus maintains our global network of five-star properties, private guides, and exclusive access partners.',
  },
];

const milestones = [
  { year: '2012', title: 'The Beginning', description: 'Founded in New York with a vision to redefine luxury travel experiences.' },
  { year: '2015', title: 'Global Expansion', description: 'Opened offices in London and Singapore, extending our reach across three continents.' },
  { year: '2018', title: 'Award Recognition', description: 'Named \'Luxury Travel Agency of the Year\' by World Travel Awards.' },
  { year: '2021', title: 'Sustainable Pledge', description: 'Launched our carbon-neutral travel initiative and community partnership programs.' },
  { year: '2024', title: '150+ Destinations', description: 'Expanded our curated collection to over 150 extraordinary destinations worldwide.' },
];

export default function AboutPage() {
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
            src="/sequence/final_044.jpg"
            alt="About INTERNITY TOURS"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-navy/30" />

        <div className="relative z-10 section-padding max-w-7xl mx-auto w-full pt-32">
          <SectionLabel>Our Story</SectionLabel>
          <FadeIn delay={0.1}>
            <h1 className="heading-xl mb-6 max-w-4xl">
              The Soul Behind
              <br />
              <span className="italic text-gold">INTERNITY</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="body-text text-lg max-w-xl">
              Born from a belief that travel should transform, not merely transport —
              we craft journeys that honor the beauty of the world and the curiosity of the traveler.
            </p>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent" />
      </section>

      {/* Origin Story */}
      <section className="py-24 md:py-36 bg-navy">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <SectionLabel>Founded in Purpose</SectionLabel>
              <FadeIn delay={0.1}>
                <h2 className="heading-lg mb-8">
                  A Legacy of
                  <br />
                  <span className="italic text-gold">Extraordinary</span> Travel
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <GoldDivider className="mb-8" />
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="body-text mb-6">
                  INTERNITY TOURS was founded with a singular vision: to create travel
                  experiences that transcend the ordinary and touch the extraordinary. In an
                  age of mass tourism, we chose a different path — one paved with intention,
                  authenticity, and an uncompromising devotion to beauty.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p className="body-text mb-6">
                  Our name speaks to the eternal nature of the memories we help create.
                  We believe that a journey well-traveled becomes a part of you — shaping
                  perspectives, deepening connections, and illuminating the world in ways
                  no brochure ever could.
                </p>
              </FadeIn>
              <FadeIn delay={0.5}>
                <p className="body-text">
                  Today, our team of travel architects, destination specialists, and luxury
                  partners spans the globe, united by a shared passion for crafting moments
                  that endure long after the journey is complete.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.3} direction="right">
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src="/sequence/final_007.jpg"
                    alt="The INTERNITY Story"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-40 h-40 border border-gold/20" />
                <div className="absolute -top-6 -right-6 p-6 bg-ocean border border-white/5">
                  <p className="font-playfair text-4xl font-light text-gold mb-1">12+</p>
                  <p className="font-inter text-xs uppercase tracking-ultra text-text-secondary">
                    Years of<br />Excellence
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ocean/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto section-padding py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { number: 150, suffix: '+', label: 'Destinations' },
              { number: 50, suffix: 'K+', label: 'Travelers Served' },
              { number: 35, suffix: '+', label: 'Expert Guides' },
              { number: 98, suffix: '%', label: 'Return Rate' },
            ].map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <p className="font-playfair text-4xl md:text-5xl font-light text-white mb-2">
                    <CountUp end={stat.number} suffix={stat.suffix} />
                  </p>
                  <p className="font-inter text-xs uppercase tracking-ultra text-text-secondary">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-36 bg-navy">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center mb-16 md:mb-20">
            <SectionLabel className="text-center">Our Values</SectionLabel>
            <FadeIn delay={0.1}>
              <h2 className="heading-lg">
                Guided by <span className="italic text-gold">Principle</span>
              </h2>
            </FadeIn>
          </div>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.12}>
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="card-luxury p-8 text-center h-full group hover:bg-ocean/80 transition-all duration-500">
                  <div className="w-14 h-14 mx-auto mb-6 border border-gold/30 flex items-center justify-center group-hover:bg-gold/5 transition-colors duration-500">
                    <value.icon className="text-gold" size={22} strokeWidth={1.2} />
                  </div>
                  <h3 className="font-playfair text-xl font-light text-white mb-3">{value.title}</h3>
                  <GoldDivider className="mx-auto mb-4" />
                  <p className="text-text-secondary text-sm leading-relaxed">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-36 bg-ocean/30">
        <div className="max-w-4xl mx-auto section-padding">
          <div className="text-center mb-16 md:mb-20">
            <SectionLabel className="text-center">Our Journey</SectionLabel>
            <FadeIn delay={0.1}>
              <h2 className="heading-lg">
                Milestones of <span className="italic text-gold">Excellence</span>
              </h2>
            </FadeIn>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold/20 md:-translate-x-px" />

            {milestones.map((milestone, i) => (
              <FadeIn key={milestone.year} delay={i * 0.12} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className={`relative flex items-start mb-12 last:mb-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-gold rounded-full -translate-x-1.5 mt-2 z-10" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'
                  }`}>
                    <span className="font-playfair text-3xl font-light text-gold">{milestone.year}</span>
                    <h3 className="font-playfair text-xl font-light text-white mt-2 mb-2">{milestone.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-36 bg-navy">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center mb-16 md:mb-20">
            <SectionLabel className="text-center">Our Team</SectionLabel>
            <FadeIn delay={0.1}>
              <h2 className="heading-lg">
                The Visionaries <span className="italic text-gold">Behind</span>
                <br />
                Every Journey
              </h2>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <div className="card-luxury group">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-light text-white mb-1">{member.name}</h3>
                    <p className="text-gold text-xs uppercase tracking-wider font-inter mb-3">{member.role}</p>
                    <p className="text-text-secondary text-sm leading-relaxed">{member.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Awards/Recognition */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/sequence/final_052.jpg" alt="Awards" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-navy/50" />
        <div className="relative z-10 section-padding max-w-4xl mx-auto text-center">
          <SectionLabel className="text-center">Recognition</SectionLabel>
          <FadeIn delay={0.1}>
            <h2 className="heading-lg mb-8">
              Trusted by <span className="italic text-gold">Discerning</span>
              <br />
              Travelers Worldwide
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12">
              {[
                'World Travel Awards',
                'Conde Nast Top 50',
                'Forbes Luxury List',
                'Travel + Leisure A-List',
              ].map((award) => (
                <div key={award} className="flex items-center gap-2 text-white/60 text-sm font-inter">
                  <Award size={16} className="text-gold" />
                  {award}
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Link href="/contact" className="btn-gold">
              Begin Your Journey
              <ArrowUpRight size={14} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
