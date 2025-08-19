import { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect } from "react";

const projects = [
  {
    title: "SkillBridge",
    description:
      "A full-stack NLP-based career path recommender that parses resumes and matches them to tech roles with 90%+ accuracy.",
    tech: ["Flask", "React.js", "Tailwind CSS", "Python", "NLP"],
    github: "https://github.com/varunnnx/Skillbridge",
  },
  {
    title: "NLP Text Classification",
    description:
      "A binary classifier trained on 7,600+ tweets to detect disaster-related content, achieving 88% accuracy.",
    tech: ["Python", "Scikit-learn", "NLTK", "Pandas"],
    github: "https://github.com/varunnnx/NLP-Text-Classification-Model",
  },
  {
    title: "Snap Shot",
    description:
      "A React gallery app with real-time image fetching from Flickr API and efficient state management.",
    tech: ["React.js", "React Router", "Axios", "Context API"],
    github: "https://github.com/varunnnx/Snapshot-master",
  },
  {
    title: "Khana Khazana",
    description:
      "A PHP-based blog platform with OTP authentication, CRUD functionality, and secure user management.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/varunnnx/khana-khazana",
  },
  {
    title: "Little Lemon",
    description:
      "A Django-powered restaurant booking website with pages for menu, reservations, and contact.",
    tech: ["Python", "Django", "SQLite", "HTML", "CSS"],
    github: "https://github.com/varunnnx/littlelemon",
  },
  {
    title: "NGO Management Website",
    description:
      "A dynamic platform for NGOs to manage events, registrations, and community tasks.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "", // if you have link, we can add it
  },
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
