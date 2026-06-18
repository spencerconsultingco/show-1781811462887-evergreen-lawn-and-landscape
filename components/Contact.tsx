'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const services = [
    'Lawn Care and Mowing',
    'Landscape Design and Installation',
    'Hardscaping and Patios',
    'Irrigation and Sprinkler Systems',
    'Tree and Shrub Care',
    'Seasonal Cleanups',
    'Other',
  ];

  return (
    <section id="contact" className="bg-brand-primary py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block font-body text-brand-accent text-sm font-semibold tracking-widest uppercase mb-4">
            Get a Free Estimate
          </span>
          <h2 className="font-heading text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            Let&#39;s Talk About Your Yard
          </h2>
          <p className="font-body text-white/70 text-lg max-w-xl mx-auto">
            Tell us about your property and what you are looking for. We will get back to you quickly to schedule a free walkthrough.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-heading text-white text-xl font-semibold mb-6">
                Reach Us Directly
              </h3>
              <div className="space-y-5">
                <a
                  href="tel:5125550147"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-lg bg-brand-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-accent/30 transition-colors duration-200">
                    <Phone size={20} className="text-brand-accent" />
                  </div>
                  <div>
                    <p className="font-body text-white/60 text-xs uppercase tracking-wide mb-0.5">Phone</p>
                    <p className="font-body text-white text-base font-medium group-hover:text-brand-accent transition-colors duration-200">
                      (512) 555-0147
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:todd@thesitesmith.co"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-lg bg-brand-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-accent/30 transition-colors duration-200">
                    <Mail size={20} className="text-brand-accent" />
                  </div>
                  <div>
                    <p className="font-body text-white/60 text-xs uppercase tracking-wide mb-0.5">Email</p>
                    <p className="font-body text-white text-base font-medium group-hover:text-brand-accent transition-colors duration-200">
                      todd@thesitesmith.co
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-brand-accent/20 flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-brand-accent" />
                  </div>
                  <div>
                    <p className="font-body text-white/60 text-xs uppercase tracking-wide mb-0.5">Hours</p>
                    <p className="font-body text-white text-base font-medium">
                      Mon to Sat, 8am to 6pm
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/15 pt-8">
              <p className="font-body text-white/60 text-sm leading-relaxed">
                Serving Austin, TX and the surrounding Hill Country. Most estimates are scheduled within 48 hours of your request.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="bg-white/10 border border-white/20 rounded-xl p-10 text-center">
                <CheckCircle size={48} className="text-brand-accent mx-auto mb-4" />
                <h3 className="font-heading text-white text-2xl font-bold mb-3">
                  We Got Your Request
                </h3>
                <p className="font-body text-white/70 text-base">
                  Thanks for reaching out. A member of our team will contact you within one business day to schedule your free estimate.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/8 border border-white/15 rounded-xl p-7 sm:p-9 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-body text-white/80 text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Smith"
                      className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 font-body text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-brand-accent transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-white/80 text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(512) 000-0000"
                      className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 font-body text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-brand-accent transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-body text-white/80 text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="jane@example.com"
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 font-body text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-brand-accent transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block font-body text-white/80 text-sm font-medium mb-2">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 text-white font-body text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-brand-accent transition-colors duration-200 appearance-none"
                  >
                    <option value="" className="bg-brand-primary">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-brand-primary">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-body text-white/80 text-sm font-medium mb-2">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your yard, what you are looking to improve, or any questions you have..."
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 font-body text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-brand-accent transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-brand-accent hover:bg-orange-500 text-white font-body font-semibold text-base px-8 py-4 rounded-lg transition-colors duration-200 group"
                >
                  Contact Us
                  <Send size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>

                <p className="font-body text-white/45 text-xs text-center">
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
