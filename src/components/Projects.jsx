import { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect } from "react";

const projects = [
  {
    title: "Khana Khazana",
    description: "A PHP-based blog platform with OTP auth, CRUD functionality, and a clean UI.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/varunnnx/khana-khazana",
    demo: "#"
  },
  {
    title: "Little Lemon",
    description: "Django-based restaurant site with pages for booking, menu, and contact.",
    tech: ["Python", "Django", "SQLite", "HTML", "CSS"],
    github: "https://github.com/varunnnx/little-lemon",
    demo: "#"
  },

  {
  title: "NLP Text Classification",
  description: "An end-to-end ML pipeline for text classification using TF-IDF and traditional classifiers.",
  tech: ["Python", "Pandas", "Scikit-learn", "NLTK", "Jupyter Notebook"],
  github: "https://github.com/varunnnx/NLP-Text-Classification-Model",
  demo: "#"
}

];

const ProjectCard = ({ project }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="rounded-xl bg-dark/40 border border-gray-700 p-6 hover:shadow-xl transition duration-300"
    >
      <h3 className="text-xl font-semibold mb-2 text-accent">{project.title}</h3>
      <p className="text-gray-400 mb-3">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, index) => (
          <span key={index} className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-300">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">
          GitHub
        </a>
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">
          Live Demo
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen px-6 py-16 bg-background text-text">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <ProjectCard project={project} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
