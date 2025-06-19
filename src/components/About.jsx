import { motion } from "framer-motion";
import Lottie from "lottie-react";
import aiAvatar from "../assets/ai-avatar.json";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-24 bg-background text-text flex flex-col items-center text-center"
    >
      {/* AIML Tag */}
      <motion.div
        className="text-xs text-accent uppercase tracking-widest mb-4 animate-pulse"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        🔬 Powered by AIML
      </motion.div>

      {/* Avatar with Glow */}
      <motion.div
        className="relative w-60 h-60 mb-10 before:content-[''] before:absolute before:-inset-4 before:rounded-full before:bg-accent/30 before:blur-2xl before:animate-pulse"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <Lottie animationData={aiAvatar} loop={true} />
      </motion.div>

      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-accent mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      {/* Description */}
      <motion.div
        className="max-w-3xl text-lg text-gray-300 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p>
          I’m <span className="font-semibold text-accent">Varun Nagpal</span>, an aspiring Full Stack Developer
          with a deep passion for <span className="text-accent font-medium">AI</span> and{" "}
          <span className="text-accent font-medium">Machine Learning</span>.
        </p>
        <p className="mt-4">
          I specialize in transforming complex challenges into smart, scalable
          solutions using technologies like <span className="text-accent">React</span>,{" "}
          <span className="text-accent">Django</span>, and{" "}
          <span className="text-accent">Python</span>.
        </p>
        <p className="mt-4">
          Currently pursuing an Honours in AIML, I’ve explored{" "}
          <span className="text-accent">deep learning</span>,{" "}
          <span className="text-accent">NLP</span>,{" "}
          <span className="text-accent">optimization techniques</span>, and{" "}
          <span className="text-accent">data-driven design</span>.
          I love combining tech and creativity to build experiences that matter.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
