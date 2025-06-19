import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="min-h-[60vh] px-6 py-24 bg-background text-text text-center">
      <motion.h2
        className="text-4xl md:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h2>

      <motion.p
        className="text-gray-400 text-lg max-w-xl mx-auto mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        viewport={{ once: true }}
      >
        I'm always open to opportunities, collaborations, or just a friendly chat. Feel free to reach out!
      </motion.p>

      <motion.div
        className="flex justify-center gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        viewport={{ once: true }}
      >
        <a
          href="mailto:work.varunnagpal@gmail.com"
          className="bg-accent text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-opacity-90 transition"
        >
          <FaEnvelope /> Say Hello
        </a>

        <a
          href="https://www.linkedin.com/in/varun-nagpal-3baaa1251/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent/70 transition text-2xl"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/varunnnx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent/70 transition text-2xl"
        >
          <FaGithub />
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
