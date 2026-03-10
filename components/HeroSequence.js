'use client';

import { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 59;

function getImageSrc(index) {
  const num = String(index).padStart(3, '0');
  return `/sequence/final_${num}.jpg`;
}

export default function HeroSequence() {
  const containerRef = useRef(null);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const loadedFrames = useRef(new Set());
  const bestFrame = useRef(0);

  // Preload images
  useEffect(() => {
    const preload = (i) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = getImageSrc(i);
        img.onload = () => {
          loadedFrames.current.add(i);
          resolve();
        };
        img.onerror = () => resolve();
      });
    };

    // Load first frame immediately
    preload(0).then(() => setIsLoaded(true));

    // Load every 4th frame, then fill in the rest
    const loadAll = async () => {
      const coarse = [];
      for (let i = 1; i < TOTAL_FRAMES; i += 4) coarse.push(preload(i));
      await Promise.all(coarse);
      const rest = [];
      for (let i = 1; i < TOTAL_FRAMES; i++) {
        if (!loadedFrames.current.has(i)) rest.push(preload(i));
      }
      await Promise.all(rest);
    };
    loadAll();
  }, []);

  // Scroll-driven frame update using rAF
  useEffect(() => {
    let rafId = null;

    const tick = () => {
      const container = containerRef.current;
      if (container) {
        const scrollY = window.scrollY || 0;
        const containerTop = container.offsetTop;
        const containerHeight = container.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrolled = scrollY - containerTop;
        const totalScrollable = containerHeight - windowHeight;

        if (totalScrollable > 0) {
          const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
          const targetFrame = Math.min(TOTAL_FRAMES - 1, Math.floor(progress * TOTAL_FRAMES));

          // Find nearest loaded frame
          let frame = targetFrame;
          if (!loadedFrames.current.has(targetFrame)) {
            for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
              if (loadedFrames.current.has(targetFrame - offset) && targetFrame - offset >= 0) {
                frame = targetFrame - offset;
                break;
              }
              if (loadedFrames.current.has(targetFrame + offset) && targetFrame + offset < TOTAL_FRAMES) {
                frame = targetFrame + offset;
                break;
              }
            }
          }

          if (frame !== bestFrame.current) {
            bestFrame.current = frame;
            setCurrentFrame(frame);
          }
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => { if (rafId) cancelAnimationFrame(rafId); };
  }, []);

  return (
    <div ref={containerRef} className="relative bg-primary" style={{ height: '500vh' }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background image - always visible, changes with scroll */}
        <img
          src={getImageSrc(currentFrame)}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(2,43,35,0.6) 0%, rgba(2,43,35,0.2) 35%, rgba(2,43,35,0.3) 65%, rgba(2,43,35,0.85) 100%)',
          }}
        />

        {/* Glow orbs */}
        <div className="glow-orb w-[200px] h-[200px] top-[20%] left-[10%] opacity-20" />
        <div className="glow-orb w-[150px] h-[150px] bottom-[20%] right-[15%] opacity-15" />

        {/* Loading state */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-primary flex items-center justify-center z-30">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-2 border-gold border-t-transparent rounded-full animate-spin" />
              <p className="text-text-secondary text-sm tracking-wider uppercase font-satoshi">Loading Experience</p>
            </div>
          </div>
        )}

        {/* Hero Content - always on top */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center section-padding">
          <div className="max-w-4xl mx-auto">
            <p className="font-satoshi text-xs uppercase tracking-ultra text-gold mb-6 opacity-90">
              Luxury Travel Redefined
            </p>
            <h1 className="font-satoshi text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ lineHeight: '1.2' }}>
              Discover the World&apos;s
              <br />
              Most <span className="text-gold">Extraordinary</span>
              <br />
              Destinations
            </h1>
            <p className="font-satoshi text-base md:text-lg max-w-2xl mx-auto mb-10 text-white/70 leading-relaxed">
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
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            <span className="text-text-secondary text-xs uppercase tracking-widest font-satoshi">Scroll to Explore</span>
            <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
