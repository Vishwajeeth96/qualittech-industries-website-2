import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from '../ui/Logo';
import SkewButton from '../ui/SkewButton';

interface NavbarProps {
  onNavigate?: (route: string) => void;
  currentRoute?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentRoute = 'home' }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Why QTI', href: '#why-qti' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Our Achievements', href: '#achievements' },
    { label: 'Our Customers', href: '#customers' },
    { label: 'Industries', href: '#industries' },
    { label: 'Process', href: '#process' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    if (currentRoute !== 'home' && onNavigate) {
      e.preventDefault();
      onNavigate('home');
      setTimeout(() => {
        const anchor = href.replace('#', '');
        const el = document.getElementById(anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 120);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 ${
          scrolled ? 'py-2.5 sm:py-3' : 'py-3.5 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Authentic Frosted Glassmorphic Navigation Bar */}
          <nav
            className="flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl sm:rounded-3xl transition-all duration-300 relative group"
            style={{
              background: scrolled
                ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.72) 0%, rgba(255, 255, 255, 0.48) 100%)'
                : 'linear-gradient(135deg, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0.40) 100%)',
              backdropFilter: 'blur(20px) saturate(190%)',
              WebkitBackdropFilter: 'blur(20px) saturate(190%)',
              border: '1px solid rgba(255, 255, 255, 0.75)',
              boxShadow: scrolled
                ? '0 20px 45px -12px rgba(1, 122, 195, 0.16), 0 4px 12px -2px rgba(7, 24, 39, 0.06), inset 0 1px 1px 0 rgba(255, 255, 255, 0.95), inset 0 -1px 1px 0 rgba(1, 122, 195, 0.12)'
                : '0 20px 40px -15px rgba(1, 122, 195, 0.10), 0 4px 12px -2px rgba(7, 24, 39, 0.04), inset 0 1px 1px 0 rgba(255, 255, 255, 0.90), inset 0 -1px 1px 0 rgba(1, 122, 195, 0.08)',
            }}
            aria-label="Main Navigation"
          >
            {/* Subtle Engineering L-Brackets on Frosted Glass */}
            <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-[#017AC3]/60 rounded-tl-sm pointer-events-none" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t border-r border-[#017AC3]/60 rounded-tr-sm pointer-events-none" />
            <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b border-l border-[#017AC3]/60 rounded-bl-sm pointer-events-none" />
            <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-[#D71920]/60 rounded-br-sm pointer-events-none" />

            {/* Logo with Frosted Backdrop */}
            <button
              type="button"
              onClick={() => {
                if (onNavigate) onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="cursor-pointer bg-transparent border-none p-0 text-left"
              title="Return to Qualitech Home"
            >
              <Logo size="md" variant="light" />
            </button>

            {/* Desktop Navigation Links with Frosted Glass Hover Pills */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="relative px-3 py-1.5 text-xs xl:text-sm font-semibold text-slate-700 hover:text-[#017AC3] hover:bg-white/70 hover:backdrop-blur-md rounded-full transition-all duration-200 group whitespace-nowrap shadow-none hover:shadow-xs hover:border hover:border-white/80 cursor-pointer"
                >
                  <span>{link.label}</span>
                </a>
              ))}
            </div>

            {/* CTA Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <SkewButton
                href="#contact"
                variant="white"
                className="!text-xs !py-2 !px-5 shadow-sm hover:shadow-md"
                icon={<ArrowUpRight className="w-4 h-4 text-[#017AC3]" />}
              >
                Enquire Now
              </SkewButton>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-[#017AC3] hover:bg-white/60 backdrop-blur-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#017AC3]"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer with Matching Frosted Glassmorphism */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#071827]/30 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute top-20 left-4 right-4 rounded-3xl p-6 transition-all duration-300 ${
            mobileMenuOpen ? 'translate-y-0 scale-100' : '-translate-y-4 scale-95'
          }`}
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.65) 100%)',
            backdropFilter: 'blur(24px) saturate(190%)',
            WebkitBackdropFilter: 'blur(24px) saturate(190%)',
            border: '1px solid rgba(255, 255, 255, 0.8)',
            boxShadow: '0 25px 50px -12px rgba(1, 122, 195, 0.25), inset 0 1px 1px 0 rgba(255, 255, 255, 0.95)',
          }}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="flex items-center justify-between px-4 py-3 text-base font-bold text-slate-800 hover:text-[#017AC3] hover:bg-white/60 rounded-xl transition-colors cursor-pointer"
              >
                <span>{link.label}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#017AC3]/40" />
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-slate-200/60 flex flex-col gap-3">
              <SkewButton
                href="#contact"
                variant="white"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full justify-center !text-sm !py-3"
                icon={<ArrowUpRight className="w-4 h-4 text-[#017AC3]" />}
              >
                Enquire Now
              </SkewButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
