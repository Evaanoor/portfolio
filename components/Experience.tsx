"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    org: "HIMAFORKA",
    color: "#E11D48",
    roles: [
      { type: "KEPENGURUSAN", detail: "Kepala Divisi Networking 2024 - 2025" },
      { type: "KEPANITIAAN", detail: "Wakil Ketua Panitia - Maroon Day 2024" },
      { type: "KEPANITIAAN", detail: "Sie Acara - Maroon Day 2025" },
    ],
  },
  {
    org: "PERMIKOMNAS",
    color: "#0D9488", 
    roles: [
      { type: "KEPENGURUSAN", detail: "Staff Akastrat - BPW Permikomnas" },
      { type: "KEPANITIAAN", detail: "Koordinator Humas - Rakerwil Permikomnas" },
    ],
  },
  {
    org: "TAEKWONDO",
    color: "#F59E0B", 
    roles: [
      { type: "KEPENGURUSAN", detail: "Staff Kerumah Tanggaan 2024 - 2025" },
    ],
  },
];

const Experience = () => {
  return (
    <motion.section 
      id="experience"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-24"
    >
      <p className="text-neon font-mono mb-2">// journey</p>
      <h2 className="text-4xl font-bold mb-20 text-gray-900 dark:text-white uppercase tracking-tighter">
        Organization Experience
      </h2>

      <div className="relative">

        <div className="absolute top-[42px] left-0 w-full h-[1px] bg-gray-200 dark:bg-white/10 z-0" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col items-center">
              

              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white tracking-widest uppercase">
                {exp.org}
              </h3>

              <motion.div 
                whileHover={{ scale: 1.5, boxShadow: `0 0 20px ${exp.color}` }}
                className="w-5 h-5 mb-8 rotate-45 border-2 border-[#0a0a0a] dark:border-white/20"
                style={{ backgroundColor: exp.color }}
              />


              <div className="text-center space-y-6">
                {exp.roles.map((role, rIndex) => (
                  <div key={rIndex} className="group">
                    <h4 className="text-xs font-mono text-neon mb-1 tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                      {role.type}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-[200px]">
                      {role.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;