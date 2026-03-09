'use client';

import { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 59;

export default function HeroSequence() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const imagesRef = useRef([]);
  const currentFrameRef = useRef(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Preload all images
    let loadedCount = 0;
    const images = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      const num = String(i).padStart(3, '0');
      img.src = `/sequence/final_${num}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          setIsLoaded(true);
          // Set canvas size based on first image
          canvas.width = images[0].naturalWidth;
          canvas.height = images[0].naturalHeight;
          drawFrame(0);
        }
      };
      images.push(img);
    }
    imagesRef.current = images;

    function drawFrame(index) {
      const img = images[index];
      if (!img || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }

    function handleScroll() {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress through the container
      const scrolled = -rect.top;
      const totalScrollable = containerHeight - windowHeight;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));

      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.floor(progress * TOTAL_FRAMES)
      );

      if (frameIndex !== currentFrameRef.current) {
        currentFrameRef.current = frameIndex;
        drawFrame(frameIndex);
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ objectFit: 'cover' }}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 hero-overlay" />

        {/* Loading state */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-navy flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-2 border-gold border-t-transparent rounded-full animate-spin" />
              <p className="text-text-secondary text-sm tracking-wider uppercase">Loading Experience</p>
            </div>
          </div>
        )}

        {/* Hero Content */}
        <div className="relative z-10 text-center section-padding max-w-5xl mx-auto">
          <p className="font-inter text-xs uppercase tracking-ultra text-gold mb-6 opacity-90">
            Luxury Travel Redefined
          </p>
          <h1 className="heading-xl mb-6">
            Discover the World&apos;s
            <br />
            Most <span className="italic text-gold">Extraordinary</span>
            <br />
            Destinations
          </h1>
          <p className="body-text text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/70">
            Where every journey becomes a timeless story — crafted with elegance,
            designed for the soul, and curated for those who seek the exceptional.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/destinations" className="btn-gold">
              Explore Destinations
            </a>
            <a href="/experiences" className="btn-gold-outline">
              View Experiences
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            <span className="text-text-secondary text-xs uppercase tracking-widest">Scroll to Explore</span>
            <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
