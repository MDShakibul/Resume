import { motion, type Easing } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as Easing },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        className="section-container relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={itemVariants} className="text-primary font-mono mb-6">
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-foreground mb-4"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold text-muted-foreground mb-8"
        >
          I build things for the web.
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
        >
          {personalInfo.bio}
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-16">
          <a href="#contact" className="btn-primary">
            Get In Touch
          </a>
          <a href="#projects" className="btn-outline">
            View My Work
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Github size={24} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Mail size={24} />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="text-primary" size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
