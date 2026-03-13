"use client";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6"; 

const Contact = () => {
  const socialLinks = [
    { name: "Email", icon: <Mail size={20} />, link: "mailto:epaapull@email.com" },
    { name: "GitHub", icon: <FaGithub size={20} />, link: "https://github.com/Evaanoor" },
    { name: "LinkedIn", icon: <FaLinkedinIn size={20} />, link: "https://linkedin.com/in/evaank/" },
  ];

  return (
    <motion.section 
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-32 flex flex-col items-center text-center"
    >
      <p className="text-neon font-mono mb-4">// contact</p>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Call To Admit</h2>
      
      <p className="text-gray-500 dark:text-gray-400 max-w-lg mb-12 leading-relaxed">
        Interested in collaborating or just want to say hello? 
        Don't hesitate to contact me through the platforms below.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {socialLinks.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl text-gray-900 dark:text-white font-mono hover:border-neon/50 transition-colors"
          >
            <span className="text-neon">{item.icon}</span>
            {item.name}
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default Contact;