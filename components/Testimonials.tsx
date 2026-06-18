'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    text: 'Marcus and his crew transformed our backyard into something out of a magazine.',
    attribution: 'Jenna P.',
  },
  {
    text: 'Reliable, tidy, and the design ideas were spot on. Best landscaper we have used.',
    attribution: 'David L.',
  },
  {
    text: 'Our lawn has never looked better and they always show up when they say they will.',
    attribution: 'Priya S.',
  },
];

export default function Testimonials() {
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { once: true, margin: '-80px' });

  return (
    <section id="testimonials" className="bg-brand-background py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-body text-brand-accent text-sm font-semibold tracking-widest uppercase mb-4">
            Happy Homeowners
          </span>
          <h2 className="font-heading text-brand-primary text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            Austin Homeowners Love
            <br className="hidden sm:block" /> Their Evergreen Yards
          </h2>
          <p className="font-body text-brand-secondary text-lg max-w-xl mx-auto">
            Real results from real Austin homeowners. Here is what they are saying.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {testimonials.map((review, index) => (
            <TestimonialCard key={review.attribution} review={review} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative rounded-2xl overflow-hidden"
        >
          <Image
            src="/images/gallery-2.jpg"
            alt="Beautifully maintained Austin landscape by Evergreen"
            width={1280}
            height={400}
            className="w-full h-48 sm:h-64 lg:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/70 to-brand-primary/20 flex items-center">
            <div className="px-8 sm:px-12">
              <p className="font-heading text-white text-2xl sm:text-3xl lg:text-4xl font-bold max-w-lg leading-tight">
                Your Best Yard Starts With One Call.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center mt-5 bg-brand-accent hover:bg-orange-500 text-white font-body font-semibold text-sm px-6 py-3 rounded transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({
  review,
  index,
}: {
  review: (typeof testimonials)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="bg-white rounded-xl p-7 shadow-sm border border-brand-primary/8 flex flex-col"
    >
      <div className="flex gap-1 mb-5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className="text-brand-accent fill-brand-accent" />
        ))}
      </div>
      <blockquote className="font-body text-brand-text text-base leading-relaxed flex-1 mb-5">
        &ldquo;{review.text}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3 pt-4 border-t border-brand-primary/10">
        <div className="w-9 h-9 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
          <span className="font-heading text-brand-primary text-sm font-bold">
            {review.attribution.charAt(0)}
          </span>
        </div>
        <span className="font-body text-brand-secondary text-sm font-semibold">
          {review.attribution}
        </span>
      </div>
    </motion.div>
  );
}
