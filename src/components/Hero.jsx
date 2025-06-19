import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 text-center overflow-hidden bg-background text-text">

      {/* Blurred Background Gradient Blob */}
      <div className="absolute w-[400px] h-[400px] bg-blue-500 rounded-full blur-[160px] opacity-30 -z-10 top-10 left-10"></div>
      <div className="absolute w-[300px] h-[300px] bg-purple-600 rounded-full blur-[120px] opacity-20 -z-10 bottom-20 right-10"></div>

      {/* Headline */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm <span className="text-accent">Varun Nagpal</span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="mt-4 text-lg md:text-xl text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Aspiring Full Stack Developer | Data Science Enthusiast
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-6 flex flex-wrap gap-4 justify-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://drive.google.com/file/d/1X0SItA6HIu29RysFY5VcS-8bOuoHC7gQ/view?usp=sharing"
          target="_blank"
          className="px-6 py-2 rounded-lg bg-accent text-white hover:bg-blue-700 transition"
        >
          Resume
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="px-6 py-2 rounded-lg border border-accent text-accent hover:bg-accent hover:text-white transition"
        >
          Contact Me
        </motion.a>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="mt-6 flex gap-6 text-2xl text-accent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="https://github.com/varunnnx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="https://www.linkedin.com/in/varun-nagpal-3baaa1251/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </motion.a>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-6 animate-bounce text-accent text-sm opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        ↓ Scroll to explore
      </motion.div>
    </section>
  );
};

export default Hero;
