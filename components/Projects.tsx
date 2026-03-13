"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const projectsData = [
  {
    title: "Stockify",
    description: "A web-based inventory management system designed to optimize stock tracking, product categorization, and systematic transaction reporting.",
    tags: ["PHP", "Laravel", "Blade", "MySQL"],
    github: "https://github.com/Evaanoor/stockifyTest",
    live: "#",
  },
  {
    title: "Titik Visual",
    description: "A professional company profile for a creative agency, showcasing digital solutions and visual designs with a modern, responsive interface.",
    tags: ["JavaScript", "React", "Tailwind CSS","PHP", "Laravel", "MySQL"],
    github: "https://github.com/Evaanoor/titik-visual",
    live: "https://titikvisual.com/",
  },
  {
    title: "Seven Inc. Profile",
    description: "A digital presence for a men's fashion creative industry, integrating online business profiles with human resource development and internship programs.",
    tags: ["JavaScript", "React", "Tailwind CSS","PHP", "Laravel", "MySQL"],
    github: "https://github.com/Evaanoor/web-seveninc",
    live: "#",
  },
  {
    title: "NJP Pottery Indonesia",
    description: "Upcoming Project: A digital branding for a traditional furniture business focused on preserving and promoting authentic Indonesian pottery art.",
    tags: ["#cooming soon", "#Coming Soon", "#Coming Soon"],
    github: "#",
    live: "#", // Coming Soon
  },
   {
    title: "Web Pro Creator",
    description: "Upcoming Project: An admin panel for managing and creating professional websites.",
    tags: ["#cooming soon", "#Coming Soon", "#Coming Soon"],
    github: "#",
    live: "#", // Coming Soon
  },
   {
    title: "Confident Up",
    description: "Upcoming Project: A self-improvement web app that gamifies confidence-building with a 30-day structured program, progressive levels, and interactive daily challenges for introverts.",
    tags: ["#cooming soon", "#Coming Soon", "#Coming Soon"],
    github: "#",
    live: "#", // Coming Soon
  },
];

const Projects = () => {
  return (
    <motion.section 
      id="projects" 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-24"
    >
      <p className="text-neon font-mono mb-2">// projects</p>
      <h2 className="text-5xl font-bold mb-16 text-gray-900 dark:text-white">My Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}

            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 0 25px rgba(0, 255, 209, 0.4)" 
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white dark:bg-[#111111] p-8 rounded-3xl border border-gray-200 dark:border-white/10 flex flex-col justify-between group cursor-pointer transition-colors hover:border-neon/30"
          >
            <div>

              <div className="flex justify-between items-start mb-6">

                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-neon transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3 text-gray-500">
                  <a href={project.github} target="_blank" className="hover:text-neon transition-colors"><FaGithub size={18} /></a>
                  <a href={project.live} target="_blank" className="hover:text-neon transition-colors"><ExternalLink size={18} /></a>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-8 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>


            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex} 
                  className="px-4 py-1.5 text-xs font-mono rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 group-hover:border-neon/20 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;