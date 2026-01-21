import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo, education } from "@/data/portfolio";
import profileImage from "@/assets/profile.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "GraphQL",
    "Tailwind CSS",
  ];

  return (
    <section id="about" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-12"
      >
        <span className="text-primary font-mono">01.</span>
        <h2 className="section-title">About Me</h2>
        <div className="flex-1 h-px bg-border/50 max-w-xs" />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-12">
        <motion.div
          className="md:col-span-2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-muted-foreground leading-relaxed">
            Hello! I'm Shakibul, a passionate Full Stack Developer based in {personalInfo.location}. 
            I enjoy creating things that live on the internet, whether that be websites, applications, 
            or anything in between. My goal is to always build products that provide pixel-perfect, 
            performant experiences.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Currently, I'm working as a <span className="text-primary">Senior Frontend Developer</span> at 
            Saimon Global, where I focus on building accessible, human-centered products. I've had the 
            privilege of working with startups and companies on impactful projects that improve user 
            engagement and business metrics.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            I graduated with a <span className="text-primary">{education.degree}</span> from {education.institution}. 
            When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
            or learning about blockchain and web3.
          </p>

          <div className="pt-4">
            <p className="text-foreground font-medium mb-4">
              Here are a few technologies I've been working with recently:
            </p>
            <ul className="grid grid-cols-2 gap-2">
              {technologies.map((tech, index) => (
                <motion.li
                  key={tech}
                  className="flex items-center gap-2 text-muted-foreground text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <span className="text-primary">▹</span>
                  {tech}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="relative group"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="relative w-full aspect-square max-w-xs mx-auto">
            {/* Profile Image */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-500" />
            <div className="absolute inset-0 rounded-lg border-2 border-primary translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <img 
                src={profileImage} 
                alt={personalInfo.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
