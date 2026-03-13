"use client";
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const Hero = () => {
  const text = "Welcome to my portfolio";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText.length < text.length) {

      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, 100);
    } else if (!isDeleting && displayedText.length === text.length) {

      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText.length > 0) {

      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length - 1));
      }, 50);
    } else if (isDeleting && displayedText.length === 0) {

      timeout = setTimeout(() => setIsDeleting(false), 500);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, text]);

  return (
    <section id="hero" className="flex flex-col md:flex-row items-center justify-between py-16 md:py-24">
      <div className="flex-1 z-10">
        <div className="text-neon font-mono mb-6 tracking-wider flex items-center whitespace-pre">
          <span>{displayedText}</span>
          <motion.span
            className="ml-1 text-neon font-bold"
            animate={{ opacity: [1, 0] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            |
          </motion.span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold leading-[1.1] text-gray-900 dark:text-white">
          I Am <span className="text-neon drop-shadow-[0_0_15px_rgba(0,255,209,0.5)]"> a Junior</span>
          <br />
          Programmer
        </h1>
        
        <p className="text-gray-500 dark:text-gray-400 mt-8 text-lg md:text-xl max-w-md leading-relaxed">
          Passionate to develop modern, clean, and meaningful web experiences.
        </p>

        <div className="flex flex-wrap gap-4 mt-12">
          <a
            href="#contact"
            className="bg-neon text-black px-8 py-3 rounded-xl font-bold hover:brightness-110 hover:scale-105 transition-all inline-flex items-center justify-center"
          >
            Contact
          </a>
          <a
            href="#projects"
            className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 px-8 py-3 rounded-xl font-bold hover:bg-gray-200 dark:hover:bg-white/10 transition-all text-gray-900 dark:text-white inline-flex items-center justify-center"
          >
            View Projects
          </a>
        </div>
      </div>


      <div className="flex-1 flex justify-center md:justify-end mt-20 md:mt-0 relative">
        <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
          <div className="absolute inset-0 animate-[spin_15s_linear_infinite] pointer-events-none">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <path id="textPath" d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" fill="none" />
              <text className="fill-gray-400 dark:fill-gray-500 font-mono text-[10px] uppercase tracking-[3px]">
                <textPath href="#textPath">Junior Programmer • Fullstack Developer • Web Developer • </textPath>
              </text>
            </svg>
          </div>
          <div className="w-24 h-24 bg-neon/10 rounded-full border border-neon flex items-center justify-center shadow-[0_0_30px_rgba(0,255,209,0.2)]">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00FFD1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
          <div className="absolute w-[110%] h-[110%] border border-gray-200 dark:border-white/5 rounded-full -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;