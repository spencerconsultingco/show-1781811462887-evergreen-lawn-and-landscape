'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const trustPoints = [
    'Satisfaction Guaranteed',
    'On-Time, Every Time',
    'Serving Austin Since Day One',
  ];

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: imageY }}
      >
        <motion.div
          className="w-full h-full"
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: 10, ease: 'linear' }}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero.jpg')" }}
          />
        </motion.div>
      </motion.div>

      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.60) 100%)',
        }}
      />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4"
          >
            <span className="inline-block font-body text-brand-accent text-sm font-semibold tracking-widest uppercase border border-brand-accent/40 px-3 py-1 rounded">
              Austin, TX and the Hill Country
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="font-heading text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            The Yard Your
            <br />
            <span className="text-brand-accent">Neighbors Will Notice.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-body text-white/85 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl"
          >
            Evergreen Lawn &amp; Landscape designs, builds, and maintains outdoor spaces Austin homeowners are genuinely proud of. Meticulous crews. Dependable schedules. Results that last.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-orange-500 text-white font-body font-semibold text-base px-8 py-4 rounded transition-colors duration-200 group"
            >
              Contact Us
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="tel:5125550147"
              className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-body font-semibold text-base px-8 py-4 rounded backdrop-blur-sm transition-all duration-200"
            >
              (512) 555-0147
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-x-6 gap-y-2"
          >
            {trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-2">
                <CheckCircle size={16} className="text-brand-accent flex-shrink-0" />
                <span className="font-body text-white/80 text-sm">{point}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
