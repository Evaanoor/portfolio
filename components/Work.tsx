"use client";
import { motion } from "framer-motion";

const workData = {
  internship: [
    { title: "Networking Installation", company: "PT. Tangguh Mandiri Bersama", date: "Oct 2022 - Dec 2022" },
    { title: "Admin Data Entry", company: "PT. Iconnet Comnet Plus Region Kaltim", date: "Jan 2023 - March 2023" },
    { title: "Asisten Dosen Praktikum", company: "UTDI", date: "Sept 2024 - Now" },
    { title: "Full Stack Web Developer", company: "PT Seven INC", date: "Sept 2025 - Feb 2026" },
    { title: "Full Stack Web Developer", company: "Cv Nusantara Jalu Perkasa", date: "March 2026 - July 2026" },
  ],
  fnb: [
    { title: "Waitress", company: "Dialog Coffee Extra", date: "April 2023 - June 2023" },
    { title: "Cashier", company: "KOPIKOKO", date: "June 2023 - Aug 2023" },
    { title: "Front Liner", company: "Nilu Kopi", date: "May 2025 - Sept 2025" },
    { title: "Barista", company: "Personal Roastery Coffee", date: "Dec 2025 - March 2026" },
  ]
};

const Work = () => {
  return (
    <section id="work" className="py-24">
      <p className="text-neon font-mono mb-2">// professional</p>
      <h2 className="text-4xl font-bold mb-16 text-gray-900 dark:text-white uppercase tracking-tighter">
        Work Experience
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

        <div>
          <h3 className="text-2xl font-bold mb-10 text-neon font-mono tracking-widest border-b border-neon/20 pb-4 inline-block">
            INTERNSHIP
          </h3>
          <div className="space-y-10">
            {workData.internship.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-6 border-l border-gray-200 dark:border-white/10 group lg:cursor-pointer"
              >
                <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-neon group-hover:scale-150 transition-transform shadow-[0_0_10px_#00FFD1]" />
                <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-neon transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-2 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300">
                  {item.company}
                </p>
                <p className="text-xs font-mono text-gray-400 mt-2 uppercase tracking-widest opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-2 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300 delay-75">
                  {item.date}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/*
        <div>
          <h3 className="text-2xl font-bold mb-10 text-gray-400 font-mono tracking-widest border-b border-white/10 pb-4 inline-block">
            FNB
          </h3>
          <div className="space-y-10">
            {workData.fnb.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-6 border-l border-gray-200 dark:border-white/10 group lg:cursor-pointer"
              >
                <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-gray-400 group-hover:bg-neon transition-colors" />
                <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-neon transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-2 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300">
                  {item.company}
                </p>
                <p className="text-xs font-mono text-gray-400 mt-2 uppercase tracking-widest opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-2 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300 delay-75">
                  {item.date}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        */}

      </div>
    </section>
  );
};

export default Work;