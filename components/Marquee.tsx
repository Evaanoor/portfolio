import React from 'react';

const Marquee = () => {
  const skills = [
    "CSS", "JavaScript", "TypeScript", "React", "Next.js",
    "vue.js", "Git", "Tailwind CSS", "Laravel", 
    "Java", "PHP", "MySQL"
  ];

  return (
    <div className="relative flex overflow-x-hidden border-y border-gray-200 dark:border-white/5 bg-white dark:bg-[#0a0a0a] py-4">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {skills.map((skill, index) => (
          <span key={index} className="mx-4 text-2xl font-mono text-gray-400 dark:text-gray-500 uppercase tracking-tighter">
            {skill} <span className="ml-8 text-neon">•</span>
          </span>
        ))}
      </div>


      <div className="absolute top-4 animate-marquee2 whitespace-nowrap flex items-center">
        {skills.map((skill, index) => (
          <span key={index} className="mx-4 text-2xl font-mono text-gray-400 dark:text-gray-500 uppercase tracking-tighter">
            {skill} <span className="ml-8 text-neon">•</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;