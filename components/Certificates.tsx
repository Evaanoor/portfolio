"use client";
import { motion } from "framer-motion";

const certs = [
  {
    title: "Internship Certificate",
    sub: "PT. Tangguh Mandiri",
    fileName: "TM_intern_001.jpg", 
  },
  {
    title: "Internship Certificate",
    sub: "PT. Indonesia Comnets Plus",
    fileName: "IC_intern_002.jpg", 
  },
  {
    title: "Competency Assessment",
    sub: "Teknik Komputer dan Jaringan",
    fileName: "assesment_page-001.jpg", 
  },
  {
    title: "Internship Certificate",
    sub: "Fullstack Developer at PT Seven INC",
    fileName: "seven-inc_page-0001.jpg", 
  },
  {
    title: "Internship Certificate",
    sub: "Fullstack Developer at CV Nusantara Jalu Perkasa",
    fileName: "seven-inc_page-0001.jpg", 
  },
  {
    title: "Organization Certificate",
    sub: "Maroon Committee",
    fileName: "panitia-maroon.png", 
  },
  {
    title: "Organization Certificate",
    sub: "Public Lecture Committee",
    fileName: "panitia-kulum.png", 
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-24">
      <p className="text-neon font-mono mb-2">// credentials</p>
      <h2 className="text-5xl font-bold mb-16 text-gray-900 dark:text-white uppercase tracking-tighter">
        Certificates
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certs.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#111111]"
          >

            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={`/${cert.fileName}`} 
                alt={cert.title}
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
                <h3 className="text-neon font-bold text-xl mb-2">{cert.title}</h3>
                <p className="text-white text-sm font-mono uppercase tracking-widest">{cert.sub}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;