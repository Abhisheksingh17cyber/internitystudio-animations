'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function FadeIn({ children, delay = 0, direction = 'up', className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    none: {},
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className = '', staggerDelay = 0.1 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '' }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxSection({ children, speed = 0.3, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let rafId = null;

    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.bottom > 0 && rect.top < windowHeight) {
          const scrolled = windowHeight - rect.top;
          el.style.transform = `translateY(${scrolled * speed * -0.1}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function CountUp({ end, duration = 2, suffix = '', className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const countRef = useRef(null);

  useEffect(() => {
    if (!isInView || !countRef.current) return;

    let startTime;
    const startVal = 0;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(startVal + (end - startVal) * eased);

      if (countRef.current) {
        countRef.current.textContent = current + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration, suffix]);

  return (
    <span ref={ref}>
      <span ref={countRef} className={className}>
        0{suffix}
      </span>
    </span>
  );
}

export function GoldDivider({ className = '' }) {
  return (
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: 64 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`h-px bg-gold ${className}`}
    />
  );
}

export function SectionLabel({ children, className = '' }) {
  return (
    <FadeIn>
      <p className={`font-inter text-xs uppercase tracking-ultra text-gold mb-6 ${className}`}>
        {children}
      </p>
    </FadeIn>
  );
}
