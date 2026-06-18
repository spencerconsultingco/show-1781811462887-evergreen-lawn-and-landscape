'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BadgeCheck, Timer, ThumbsUp, ShieldCheck, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const differentiators = [
  {
    icon: BadgeCheck,
    title: 'Detail-Obsessed Crews',
    description:
      'Every edge trimmed, every bed cleared, every surface blown clean. Our crews take pride in the work that others rush past.',
  },
  {
    icon: Timer,
    title: 'On-Time, Every Time',
    description:
      'We show up when we say we will. No waiting around, no last-minute cancellations. Your schedule matters to us.',
  },
  {
    icon: ShieldCheck,
    title: 'Satisfaction Guaranteed',
    description:
      'Not happy with the result? We come back and make it right, no questions asked. That is our promise on every single job.',
  },
  {
    icon: ThumbsUp,
    title: 'Yards the Whole Street Notices',
    description:
      'We design and maintain landscapes that genuinely stand out. Austin homeowners trust us because the results speak for themselves.',
  },
];

export default function FeatureSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="feature" className="bg-brand-primary py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block font-body text-brand-accent text-sm font-semibold tracking-widest uppercase mb-4">
              Why Evergreen
            </span>
            <h2 className="font-heading text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              A Landscaping Company
              <br />
              <span className="text-brand-accent">Built on Your Trust</span>
            </h2>
            <p className="font-body text-white/75 text-lg leading-relaxed mb-10">
              Anyone can cut grass. Evergreen Lawn &amp; Landscape delivers a complete outdoor experience. We are detail-obsessed, genuinely reliable, and fully accountable to every homeowner we serve across Austin and the Hill Country.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {differentiators.map((item, index) => (
                <DifferentiatorCard key={item.title} item={item} index={index} />
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-orange-500 text-white font-body font-semibold text-base px-8 py-4 rounded transition-colors duration-200 group"
            >
              Contact Us
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/gallery-1.jpg"
                alt="Professional landscaping work by Evergreen Lawn and Landscape"
                width={700}
                height={520}
                className="w-full h-[380px] sm:h-[460px] lg:h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden lg:block">
              <div className="bg-brand-accent rounded-xl p-5 shadow-xl">
                <p className="font-heading text-white text-3xl font-bold">100%</p>
                <p className="font-body text-white/90 text-sm mt-1">Satisfaction<br />Guaranteed</p>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 hidden lg:block">
              <div className="bg-white rounded-xl p-4 shadow-xl">
                <p className="font-body text-brand-primary text-xs font-semibold uppercase tracking-wide mb-1">Service Area</p>
                <p className="font-heading text-brand-primary text-sm font-bold">Austin + Hill Country</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DifferentiatorCard({
  item,
  index,
}: {
  item: (typeof differentiators)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex gap-4"
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-accent/20 flex items-center justify-center mt-0.5">
        <Icon size={20} className="text-brand-accent" />
      </div>
      <div>
        <h3 className="font-heading text-white text-base font-semibold mb-1">{item.title}</h3>
        <p className="font-body text-white/65 text-sm leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  );
}
