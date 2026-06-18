'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Why Evergreen', href: '#feature' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-primary shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <Image
              src="/images/logo.png"
              alt="Evergreen Lawn & Landscape Logo"
              width={64}
              height={64}
              className="w-16 h-16 object-contain flex-shrink-0"
            />
            <div className="hidden sm:block">
              <span className="block font-heading text-white text-lg font-bold leading-tight">
                Evergreen
              </span>
              <span className="block font-body text-white/80 text-xs tracking-widest uppercase">
                Lawn &amp; Landscape
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-white/90 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-brand-accent hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:5125550147"
              className="flex items-center gap-2 text-white/90 hover:text-white font-body text-sm font-medium transition-colors duration-200"
            >
              <Phone size={16} />
              <span>(512) 555-0147</span>
            </a>
            <a
              href="#contact"
              className="bg-brand-accent hover:bg-orange-500 text-white font-body font-semibold text-sm px-5 py-2.5 rounded transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-brand-primary border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-body text-white/90 hover:text-white text-base font-medium py-2 border-b border-white/10 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:5125550147"
              className="flex items-center gap-2 text-white/90 font-body text-base font-medium py-2"
            >
              <Phone size={18} />
              <span>(512) 555-0147</span>
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="bg-brand-accent hover:bg-orange-500 text-white font-body font-semibold text-center px-5 py-3 rounded transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
