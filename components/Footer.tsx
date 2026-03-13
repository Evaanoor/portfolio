import React from 'react';
import { FaInstagram, FaXTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#0a0a0a] px-6 md:px-24 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
        
        <div className="flex flex-col gap-6">
          <div className="text-xl font-bold tracking-tighter text-gray-900 dark:text-white">
            <span className="text-neon">eva's</span>.portfolio™
          </div>
          {/*<p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
            Membangun solusi digital dengan fokus pada performa, estetika modern, dan pengalaman pengguna yang bermakna.
          </p>*/}
          
          <div className="flex gap-4">
            {[FaInstagram, FaXTwitter, FaLinkedinIn, FaGithub].map((Icon, index) => (
              <a 
                key={index} 
                href="#" 
                className="w-10 h-10 bg-white dark:bg-white rounded-full flex items-center justify-center hover:bg-neon hover:scale-110 transition-all text-black"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>


        <div className="flex flex-col gap-6">
         <h3 className="text-gray-900 dark:text-white font-bold text-lg">Links</h3>
          <ul className="flex flex-col gap-4 text-gray-500 dark:text-gray-400 text-sm font-mono">
            <li><a href="#hero" className="hover:text-neon transition-colors">Home</a></li>
            <li><a href="#projects" className="hover:text-neon transition-colors">Projects</a></li>
            <li><a href="#skills" className="hover:text-neon transition-colors">Skills</a></li>
            <li><a href="#experience" className="hover:text-neon transition-colors">Experience</a></li>
            <li><a href="#about" className="hover:text-neon transition-colors">About Me</a></li>
          </ul>
        </div>


        <div className="flex flex-col gap-6">
          <h3 className="text-gray-900 dark:text-white font-bold text-lg">Contact</h3>
          <div className="flex flex-col gap-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
            <p>Yogyakarta, Indonesia</p>
            <a href="mailto:epaapull@email.com" className="hover:text-neon transition-colors">epaapull@gmail.com</a>
            <p>(+62) 8820-2083-1416</p>
          </div>
        </div>

      </div>


      <div className="mt-16 pt-8 border-t border-gray-200 dark:border-white/5 text-center">
        <p className="text-gray-600 text-[10px] font-mono tracking-widest uppercase">
          © {new Date().getFullYear()} EVA NOOR KUSUMAWATI. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;