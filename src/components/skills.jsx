import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaPython,
  FaPhp, FaGitAlt, FaGithub, FaDatabase, FaGitlab, FaFigma, FaChartBar, FaCode
} from "react-icons/fa";
import {
  SiTailwindcss, SiDjango, SiFlask, SiPostgresql, SiMysql,
  SiMongodb, SiScikitlearn, SiPytorch, SiVercel,
  SiExpress, SiBootstrap, SiNumpy, SiPandas
} from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
      { name: "React Router" },
      { name: "Context API" },
      { name: "Axios" },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-400" /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <FaNode className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { name: "Django", icon: <SiDjango className="text-green-600" /> },
      { name: "Flask", icon: <SiFlask className="text-gray-300" /> },
      { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
      { name: "SQLite", icon: <FaDatabase className="text-gray-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    ],
  },
  {
    category: "AI / ML / Data Science",
    items: [
      { name: "Python", icon: <FaPython className="text-yellow-400" /> },
      { name: "Scikit-learn", icon: <SiScikitlearn className="text-yellow-300" /> },
      { name: "Pandas", icon: <SiPandas className="text-white" /> },
      { name: "NumPy", icon: <SiNumpy className="text-purple-300" /> },
      { name: "PyTorch", icon: <SiPytorch className="text-orange-400" /> },
      { name: "Deep Learning" },
      { name: "CNN / RNN / LSTM" },
      { name: "NLP" },
      { name: "Reinforcement Learning" },
      { name: "Optimization Techniques" },
      { name: "Dimensionality Reduction (PCA, LDA)" },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "VS Code", icon: <FaCode className="text-blue-400" /> },
      { name: "Postman" },
      { name: "Power BI", icon: <FaChartBar className="text-yellow-400" /> },
      { name: "Figma", icon: <FaFigma className="text-pink-400" /> },
    ],
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Leadership" },
      { name: "Communication" },
      { name: "Teamwork" },
      { name: "Time Management" },
      { name: "Risk Management" },
      { name: "Documentation & Reporting" },
    ],
  },
];

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      type: "spring",
      stiffness: 120,
    },
  }),
};

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen bg-background text-text px-6 py-20">
      <motion.h2
        className="text-4xl md:text-6xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2">
        {skills.map((group, groupIdx) => (
          <motion.div
            key={groupIdx}
            className="relative group bg-gradient-to-br from-[#1b1b1b] to-[#222222] border border-gray-700 p-6 rounded-xl shadow-xl hover:shadow-[0_0_24px_#00bcd480] transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: groupIdx * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-5 text-accent">{group.category}</h3>
            <ul className="flex flex-wrap gap-3">
              {group.items.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-2 px-3 py-2 rounded bg-gray-800 text-gray-300 text-sm hover:scale-105 hover:bg-gray-700 transition"
                  custom={i}
                  variants={badgeVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {item.icon && <span className="text-lg">{item.icon}</span>}
                  {item.name}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
