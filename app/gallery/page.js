'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn, SectionLabel, StaggerContainer, StaggerItem } from '@/components/Animations';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const categories = ['All', 'Destinations', 'Cruises', 'Culture', 'Adventure', 'Culinary'];

const galleryImages = [
  { src: '/sequence/final_000.jpg', title: 'The Journey Begins', category: 'Adventure', span: 'col-span-1 row-span-1 md:col-span-2 md:row-span-2' },
  { src: '/sequence/final_004.jpg', title: 'Coastal Horizons', category: 'Destinations', span: 'col-span-1' },
  { src: '/sequence/final_008.jpg', title: 'Golden Hour', category: 'Destinations', span: 'col-span-1' },
  { src: '/sequence/final_011.jpg', title: 'Ocean Voyage', category: 'Cruises', span: 'col-span-1' },
  { src: '/sequence/final_015.jpg', title: 'Ancient Pathways', category: 'Culture', span: 'col-span-1 md:row-span-2' },
  { src: '/sequence/final_019.jpg', title: 'Mountain Sanctuary', category: 'Adventure', span: 'col-span-1' },
  { src: '/sequence/final_022.jpg', title: 'Twilight Escape', category: 'Destinations', span: 'col-span-1 md:col-span-2' },
  { src: '/sequence/final_026.jpg', title: 'Hidden Temples', category: 'Culture', span: 'col-span-1' },
  { src: '/sequence/final_029.jpg', title: 'Deck at Dawn', category: 'Cruises', span: 'col-span-1' },
  { src: '/sequence/final_033.jpg', title: 'Wilderness Trail', category: 'Adventure', span: 'col-span-1 md:col-span-2 md:row-span-2' },
  { src: '/sequence/final_036.jpg', title: 'Vintage Rails', category: 'Culture', span: 'col-span-1' },
  { src: '/sequence/final_039.jpg', title: 'Flavors of Tuscany', category: 'Culinary', span: 'col-span-1' },
  { src: '/sequence/final_042.jpg', title: 'Orient Express', category: 'Cruises', span: 'col-span-1' },
  { src: '/sequence/final_046.jpg', title: 'Sunrise Summit', category: 'Adventure', span: 'col-span-1' },
  { src: '/sequence/final_049.jpg', title: 'Market Spices', category: 'Culinary', span: 'col-span-1 md:col-span-2' },
  { src: '/sequence/final_052.jpg', title: 'Serenity Bay', category: 'Destinations', span: 'col-span-1' },
  { src: '/sequence/final_055.jpg', title: 'Alpine Feast', category: 'Culinary', span: 'col-span-1' },
  { src: '/sequence/final_058.jpg', title: 'Eternal Horizons', category: 'Destinations', span: 'col-span-1' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index) => {
    setLightbox(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightbox(null);
    document.body.style.overflow = '';
  };

  const navigate = (dir) => {
    if (lightbox === null) return;
    const next = lightbox + dir;
    if (next >= 0 && next < filtered.length) {
      setLightbox(next);
    }
  };

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
            src="/sequence/final_040.jpg"
            alt="Gallery"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-primary/30" />

        {/* Glow orb decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/3 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 section-padding max-w-7xl mx-auto w-full pt-32">
          <SectionLabel>Visual Stories</SectionLabel>
          <FadeIn delay={0.1}>
            <h1 className="heading-xl mb-6 max-w-4xl">
              A World in
              <br />
              <span className="text-gold">Frames</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="body-text text-lg max-w-xl">
              Every photograph tells a story of discovery. Explore our curated collection
              of moments captured across the world&apos;s most extraordinary destinations.
            </p>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent" />
      </section>

      {/* Filter + Gallery */}
      <section className="relative py-20 md:py-28 section-gradient">
        {/* Glow orb decorative elements */}
        <div className="absolute top-40 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-40 left-0 w-64 h-64 bg-gold/3 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto section-padding">
          {/* Category Filters */}
          <FadeIn>
            <div className="flex flex-wrap gap-3 mb-14 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-3 rounded-card font-satoshi text-xs uppercase tracking-ultra border transition-all duration-300 ${
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

          {/* Masonry Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[240px]"
            >
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.5 }}
                  className={`${img.span} relative group cursor-pointer overflow-hidden rounded-card`}
                  onClick={() => openLightbox(i)}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-all duration-500 flex items-center justify-center rounded-card">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center px-4">
                      <Maximize2 className="text-gold mx-auto mb-3" size={20} strokeWidth={1.5} />
                      <p className="font-satoshi text-lg font-bold text-white mb-1">
                        {img.title}
                      </p>
                      <p className="text-gold text-[10px] uppercase tracking-ultra font-satoshi">
                        {img.category}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative bg-card border-y border-white/5">
        {/* Glow orb decorative element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto section-padding py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '150+', label: 'Destinations Captured' },
              { value: '2,000+', label: 'Photographs' },
              { value: '45+', label: 'Countries' },
              { value: '6', label: 'Continents' },
            ].map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <p className="font-satoshi text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="font-satoshi text-xs uppercase tracking-ultra text-text-secondary">
                  {stat.label}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 section-gradient-alt">
        {/* Glow orb decorative elements */}
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-gold/3 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto section-padding text-center">
          <SectionLabel className="text-center">Your Story Awaits</SectionLabel>
          <FadeIn delay={0.1}>
            <h2 className="heading-lg mb-6">
              Create Your Own <span className="text-gold">Masterpiece</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="body-text max-w-xl mx-auto mb-10">
              The most beautiful photographs are the ones you haven&apos;t taken yet.
              Let us take you to the places that will fill your lens and your soul.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <a href="/contact" className="btn-gold">
              Plan Your Journey
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && filtered[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-primary/98 backdrop-blur-md flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-10 w-12 h-12 rounded-card border border-white/10 flex items-center justify-center text-white hover:text-gold hover:border-gold/30 transition-all duration-300"
            >
              <X size={20} />
            </button>

            {/* Navigation */}
            {lightbox > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); navigate(-1); }}
                className="absolute left-4 md:left-8 z-10 w-12 h-12 rounded-card border border-white/10 flex items-center justify-center text-white hover:text-gold hover:border-gold/30 transition-all duration-300"
              >
                <ChevronLeft size={20} />
              </button>
            )}
            {lightbox < filtered.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); navigate(1); }}
                className="absolute right-4 md:right-8 z-10 w-12 h-12 rounded-card border border-white/10 flex items-center justify-center text-white hover:text-gold hover:border-gold/30 transition-all duration-300"
              >
                <ChevronRight size={20} />
              </button>
            )}

            {/* Image */}
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightbox].src}
                alt={filtered[lightbox].title}
                className="w-full h-full object-contain max-h-[75vh] rounded-card"
              />
              <div className="mt-4 text-center">
                <p className="font-satoshi text-xl font-bold text-white">
                  {filtered[lightbox].title}
                </p>
                <p className="text-gold text-xs uppercase tracking-ultra font-satoshi mt-1">
                  {filtered[lightbox].category}
                </p>
              </div>
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-text-secondary text-xs font-satoshi tracking-wider">
              {lightbox + 1} / {filtered.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
