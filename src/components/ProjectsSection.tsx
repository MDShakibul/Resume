import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/portfolio";
import { ExternalLink, Github, Folder } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="text-primary font-mono block mb-2">04.</span>
        <h2 className="section-title mx-auto">Some Things I've Built</h2>
        <p className="section-subtitle mx-auto mt-4">
          A selection of projects I've worked on, from web apps to blockchain integrations.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            whileHover={{ y: -8 }}
          >
            <div className="p-6 h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <Folder className="text-primary" size={40} strokeWidth={1} />
                <div className="flex items-center gap-3">
                  {project.links.server && (
                    <a
                      href={project.links.server}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.links.client && (
                    <a
                      href={project.links.client}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA for more projects */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6 }}
      >
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline inline-flex items-center gap-2"
        >
          <Github size={18} />
          View More on GitHub
        </a>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
