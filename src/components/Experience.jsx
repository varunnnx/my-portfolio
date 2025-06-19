import { motion } from "framer-motion";

const experiences = [
  {
    logo: "/logos/fileago.png", // place image in /public/logos/
    role: "Techno-Commercial Intern",
    company: "FileAgo",
    duration: "Jan 2024 – Mar 2024",
    points: [
      "Worked on FileAgo cloud storage & document system.",
      "Integrated CRM insights with sales flow.",
      "Conducted product audits and reporting.",
    ],
  },
  {
    logo: "/logos/rsb.png",
    role: "Data Analyst Intern",
    company: "RSB Insights",
    duration: "Aug 2023 – Oct 2023",
    points: [
      "Built dashboards in Power BI.",
      "Analyzed NLP sentiment from feedback.",
    ],
  },

];

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen px-6 py-24 bg-background text-text relative">
      <motion.h2
        className="text-4xl md:text-6xl font-bold text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <div className="grid gap-16 md:grid-cols-2">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative bg-dark/30 border border-gray-700 backdrop-blur-md rounded-xl shadow-lg transition-all hover:shadow-accent/40 hover:-translate-y-1 hover:scale-[1.01] duration-300 overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Image / Logo */}
            <div className="w-full h-40 bg-gray-900 flex items-center justify-center border-b border-gray-700">
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="h-20 object-contain"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-accent mb-1">{exp.role}</h3>
              <p className="text-sm text-gray-400 mb-3">
                {exp.company} • {exp.duration}
              </p>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
