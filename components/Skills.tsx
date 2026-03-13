"use client";
import { motion } from "framer-motion";

const skillsData = [
  { name: "HTML & CSS", level: "90%" },
  { name: "Tailwind CSS", level: "75%" },
  { name: "JavaScript", level: "75%" },
  { name: "React", level: "70%" },
  { name: "vue.js", level: "70%" },
  { name: "next.js", level: "70%" },
  { name: "TypeScript", level: "50%" },
  { name: "PHP", level: "80%" },
  { name: "Laravel", level: "80%" },
  { name: "MySQL", level: "75%" },
  { name: "Git", level: "70%" },
];

const Skills = () => {
  return (
    <motion.section 
      id="skills"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="py-20"
    >
      <p className="text-neon font-mono mb-2">// skills</p>
      <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
        {skillsData.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between font-mono text-sm mb-2">
              <span>{skill.name}</span>
              <span className="text-neon">{skill.level}</span>
            </div>
            <div className="h-[2px] w-full bg-gray-200 dark:bg-gray-800 relative">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: skill.level }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute h-full bg-neon shadow-[0_0_10px_#00FFD1]"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;