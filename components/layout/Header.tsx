'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Training Plans', href: '/training-plans' },
    { name: 'Register', href: '/registration' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'TrainHeroic', href: '/trainheroic' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[86px]">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/final_logo1_webp.webp"
              alt="Berry Strong Fitness"
              width={200}
              height={86}
              className="h-20 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-14">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-black hover:text-berry-red-dark font-oswald uppercase text-sm tracking-wider transition-all duration-300 px-4 py-2 rounded-lg hover:bg-gray-50 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-berry-red-dark transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex flex-col space-y-1.5 p-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-all ${
                mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-all ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-all ${
                mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-200 bg-gray-50/50 backdrop-blur-sm">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-800 hover:text-berry-red-dark hover:bg-white font-oswald uppercase text-sm tracking-wider transition-all duration-300 px-4 py-3 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
