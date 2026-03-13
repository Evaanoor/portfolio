"use client";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section 
      id="about"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20 flex flex-col md:flex-row gap-12"
    >
      <div className="flex-1">
        <p className="text-neon font-mono mb-2">// about me</p>
        <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">About Me</h2>
        <div className="text-gray-500 dark:text-gray-400 space-y-4 leading-relaxed">
          <p>I’m Eva Noor Kusumawati, a 6th-semester Informatics student at the Digital Technology University of Indonesia. I enjoy learning computer networks and have six months of experience as an admin and field team member.</p>
          <p>Beyond networking, I am interested in web development and recently completed an 8-month internship as a Fullstack Developer.</p>
          <p>And then I'm also active member in Yogyakarta National Informatics and Computer Students Association, where I’ve developed public speaking, teamwork, and leadership skills.</p>
          <p>I believe that great software starts with clean and well-structured code.</p>
        </div>
      </div>
      
      <div className="flex-1 font-mono text-sm space-y-4 self-center text-gray-700 dark:text-gray-300">
        <p><span className="text-neon">Name:</span> Eva Noor Kusumawati</p>
        <p><span className="text-neon">Location:</span>Yogyakarta, Indonesia</p>
        <p><span className="text-neon">Email:</span> epaapulll@gmail.com</p>
        <p><span className="text-neon">Status:</span> Open to Work</p>
      </div>
    </motion.section>
  );
};

export default About;