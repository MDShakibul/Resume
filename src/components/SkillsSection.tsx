import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/data/portfolio";
import { Progress } from "antd";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    { title: "Expertise", items: skills.expertise, level: 90 },
    { title: "Comfortable", items: skills.comfortable, level: 75 },
    { title: "Databases", items: skills.databases, level: 80 },
    { title: "Tools", items: skills.tools, level: 85 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="skills" className="section-container bg-card/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="text-primary font-mono">03.</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="flex-1 h-px bg-border/50 max-w-xs" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className="experience-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * catIndex }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-heading font-semibold text-foreground">
                  {category.title}
                </h3>
                <Progress
                  type="circle"
                  percent={category.level}
                  size={50}
                  strokeColor="hsl(174, 72%, 56%)"
                  trailColor="hsl(222, 30%, 18%)"
                  format={(percent) => (
                    <span className="text-xs text-primary">{percent}%</span>
                  )}
                />
              </div>

              <motion.div
                className="flex flex-wrap gap-2"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {category.items.map((skill) => (
                  <motion.span
                    key={skill}
                    className="skill-badge"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Programming Languages */}
        <motion.div
          className="mt-8 experience-card"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
            Programming Languages
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.languages.map((lang, index) => (
              <motion.div
                key={lang}
                className="flex items-center gap-3 px-4 py-2 rounded-lg bg-secondary/50 border border-border/50"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <span className="text-foreground font-medium">{lang}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
