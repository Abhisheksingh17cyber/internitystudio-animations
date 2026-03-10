'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

const TOTAL_FRAMES = 59;

function getImageSrc(index) {
  const num = String(index).padStart(3, '0');
  return `/sequence/final_${num}.jpg`;
}

export default function HeroSequence() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const imagesRef = useRef([]);
  const currentFrameRef = useRef(0);
  const loadedSetRef = useRef(new Set());
  const [isLoaded, setIsLoaded] = useState(false);
  const animFrameRef = useRef(null);

  const drawFrame = useCallback((index) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const img = imagesRef.current[index];
    if (!img || !img.complete || !img.naturalWidth) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    const scale = Math.max(cw / iw, ch / ih);
    const sw = iw * scale;
    const sh = ih * scale;
    const sx = (cw - sw) / 2;
    const sy = (ch - sh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, sx, sy, sw, sh);
  }, []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    drawFrame(currentFrameRef.current);
  }, [drawFrame]);

  useEffect(() => {
    const images = new Array(TOTAL_FRAMES);
    imagesRef.current = images;

    const loadImage = (i) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = getImageSrc(i);
        img.onload = () => {
          images[i] = img;
          loadedSetRef.current.add(i);
          resolve();
        };
        img.onerror = () => {
          resolve();
        };
        images[i] = img;
      });
    };

    loadImage(0).then(() => {
      setIsLoaded(true);
      resizeCanvas();
      drawFrame(0);
    });

    const loadRemaining = async () => {
      const coarseFrames = [];
      for (let i = 1; i < TOTAL_FRAMES; i += 4) {
        coarseFrames.push(loadImage(i));
      }
      await Promise.all(coarseFrames);

      const remaining = [];
      for (let i = 1; i < TOTAL_FRAMES; i++) {
        if (!loadedSetRef.current.has(i)) {
          remaining.push(loadImage(i));
        }
      }
      await Promise.all(remaining);
    };

    loadRemaining();

    const handleScroll = () => {
      if (animFrameRef.current) return;
      animFrameRef.current = requestAnimationFrame(() => {
        animFrameRef.current = null;
        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const containerHeight = container.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrolled = -rect.top;
        const totalScrollable = containerHeight - windowHeight;
        const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
        const frameIndex = Math.min(TOTAL_FRAMES - 1, Math.floor(progress * TOTAL_FRAMES));

        if (frameIndex !== currentFrameRef.current) {
          currentFrameRef.current = frameIndex;

          if (loadedSetRef.current.has(frameIndex)) {
            drawFrame(frameIndex);
          } else {
            for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
              if (loadedSetRef.current.has(frameIndex - offset) && frameIndex - offset >= 0) {
                drawFrame(frameIndex - offset);
                break;
              }
              if (loadedSetRef.current.has(frameIndex + offset) && frameIndex + offset < TOTAL_FRAMES) {
                drawFrame(frameIndex + offset);
                break;
              }
            }
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', resizeCanvas);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [drawFrame, resizeCanvas]);

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 transition-opacity duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 hero-overlay" />

        {/* Glow orbs */}
        <div className="glow-orb w-[200px] h-[200px] top-[20%] left-[10%] opacity-20" />
        <div className="glow-orb w-[150px] h-[150px] bottom-[20%] right-[15%] opacity-15" />

        {/* Loading state */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-primary flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-2 border-gold border-t-transparent rounded-full animate-spin" />
              <p className="text-text-secondary text-sm tracking-wider uppercase font-satoshi">Loading Experience</p>
            </div>
          </div>
        )}

        {/* Hero Content */}
        <div className="relative z-10 text-center section-padding max-w-5xl mx-auto">
          <p className="font-satoshi text-xs uppercase tracking-ultra text-gold mb-6 opacity-90">
            Luxury Travel Redefined
          </p>
          <h1 className="heading-xl mb-6">
            Discover the World&apos;s
            <br />
            Most <span className="text-gold">Extraordinary</span>
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
            <span className="text-text-secondary text-xs uppercase tracking-widest font-satoshi">Scroll to Explore</span>
            <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
