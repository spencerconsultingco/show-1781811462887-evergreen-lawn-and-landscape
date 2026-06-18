import Image from 'next/image';
import { Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Why Evergreen', href: '#feature' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    'Lawn Care and Mowing',
    'Landscape Design',
    'Hardscaping and Patios',
    'Irrigation Systems',
    'Tree and Shrub Care',
    'Seasonal Cleanups',
  ];

  return (
    <footer className="bg-brand-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo.png"
                alt="Evergreen Lawn & Landscape Logo"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <div>
                <span className="block font-heading text-white text-base font-bold leading-tight">
                  Evergreen
                </span>
                <span className="block font-body text-white/60 text-xs tracking-widest uppercase">
                  Lawn &amp; Landscape
                </span>
              </div>
            </a>
            <p className="font-body text-white/55 text-sm leading-relaxed">
              Full-service landscaping and lawn care for Austin homeowners who want a yard they are proud of.
            </p>
          </div>

          <div>
            <h4 className="font-body text-white text-sm font-semibold uppercase tracking-widest mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-white/55 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-white text-sm font-semibold uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="font-body text-white/55 hover:text-white text-sm transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-white text-sm font-semibold uppercase tracking-widest mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:5125550147"
                  className="flex items-center gap-3 group"
                >
                  <Phone size={16} className="text-brand-accent flex-shrink-0" />
                  <span className="font-body text-white/55 group-hover:text-white text-sm transition-colors duration-200">
                    (512) 555-0147
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:todd@thesitesmith.co"
                  className="flex items-center gap-3 group"
                >
                  <Mail size={16} className="text-brand-accent flex-shrink-0" />
                  <span className="font-body text-white/55 group-hover:text-white text-sm transition-colors duration-200">
                    todd@thesitesmith.co
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-brand-accent flex-shrink-0 mt-0.5" />
                <span className="font-body text-white/55 text-sm">
                  Mon to Sat, 8am to 6pm
                </span>
              </li>
            </ul>

            <div className="mt-7">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-brand-accent hover:bg-orange-500 text-white font-body font-semibold text-sm px-5 py-2.5 rounded transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Evergreen Lawn &amp; Landscape. All rights reserved. Austin, TX.
          </p>
          <a
            href="https://thesitesmith.co"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-white/40 hover:text-white/70 text-sm transition-colors duration-200"
          >
            Website by The Sitesmith
          </a>
        </div>
      </div>
    </footer>
  );
}
