"use client";
import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: ".about()" },
    { href: "#experience", label: ".experience()" },
    { href: "#skills", label: ".skills()" },
    { href: "#projects", label: ".projects()" },
    { href: "#certificates", label: ".certificates()" },
    { href: "#contact", label: ".contact()" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-24 font-mono text-sm transition-all duration-300 ${
      scrolled
        ? 'bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 py-4 shadow-sm'
        : 'bg-transparent py-10'
    }`}>
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter text-gray-900 dark:text-white">
          <span className="text-neon">eva's</span>.portfolio
        </div>
        <div className="flex items-center gap-4">

          <div className="hidden md:flex gap-8 text-gray-500 dark:text-gray-400">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-neon transition-colors">{link.label}</a>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon size={20} className="text-gray-700" />
            ) : (
              <Sun size={20} className="text-yellow-400" />
            )}
          </button>
          
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-gray-300"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 pb-6 text-gray-600 dark:text-gray-400 bg-white dark:bg-[#0a0a0a] px-4 rounded-2xl border border-gray-100 dark:border-white/10 shadow-lg mt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="hover:text-neon transition-colors py-1 border-b border-gray-100 dark:border-white/5"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;