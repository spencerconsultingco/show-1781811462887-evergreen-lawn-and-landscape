'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Scissors, TreePine, Hammer, Droplets, Sparkles, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Lawn Care and Mowing',
    description:
      'Weekly and bi-weekly lawn maintenance that keeps your grass healthy, even, and looking sharp every single visit.',
  },
  {
    icon: TreePine,
    title: 'Landscape Design and Installation',
    description:
      'Custom landscape plans tailored to your home, soil, and lifestyle. We handle everything from planting beds to full yard transformations.',
  },
  {
    icon: Hammer,
    title: 'Hardscaping and Patios',
    description:
      'Patios, walkways, retaining walls, and outdoor living spaces built to last and designed to impress.',
  },
  {
    icon: Droplets,
    title: 'Irrigation and Sprinkler Systems',
    description:
      'Smart, efficient irrigation installations and repairs that protect your investment and cut your water bill.',
  },
  {
    icon: TreePine,
    title: 'Tree and Shrub Care',
    description:
      'Professional trimming, shaping, and health treatments that keep your trees and shrubs looking their best year-round.',
  },
  {
    icon: Sparkles,
    title: 'Seasonal Cleanups',
    description:
      'Spring and fall cleanups that clear debris, refresh your landscape, and set the stage for the season ahead.',
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="bg-brand-background py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-body text-brand-accent text-sm font-semibold tracking-widest uppercase mb-4">
            What We Do
          </span>
          <h2 className="font-heading text-brand-primary text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            Full-Service Landscaping,
            <br className="hidden sm:block" /> Start to Finish
          </h2>
          <p className="font-body text-brand-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            From the first mow to a complete backyard overhaul, Evergreen Lawn &amp; Landscape handles every detail so you do not have to.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-orange-500 text-white font-body font-semibold text-base px-8 py-4 rounded transition-colors duration-200 group"
          >
            Contact Us
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white border border-brand-primary/10 rounded-xl p-7 hover:shadow-xl hover:border-brand-accent/30 transition-all duration-300"
    >
      <div className="w-12 h-12 bg-brand-primary/8 rounded-lg flex items-center justify-center mb-5 group-hover:bg-brand-accent/10 transition-colors duration-300">
        <Icon size={24} className="text-brand-primary group-hover:text-brand-accent transition-colors duration-300" />
      </div>
      <h3 className="font-heading text-brand-primary text-xl font-semibold mb-3">
        {service.title}
      </h3>
      <p className="font-body text-brand-secondary text-sm leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
}
