import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { experiences } from "@/data/portfolio";
import { Tabs } from "antd";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeKey, setActiveKey] = useState("0");

  const tabItems = experiences.map((exp, index) => ({
    key: String(index),
    label: (
      <span className="text-muted-foreground hover:text-primary transition-colors">
        {exp.company}
      </span>
    ),
    children: (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-4"
      >
        <h3 className="text-xl font-heading font-semibold text-foreground">
          {exp.role}{" "}
          <span className="text-primary">@ {exp.company}</span>
        </h3>

        <p className="text-muted-foreground font-mono text-sm">
          {exp.period}
        </p>

        <p className="text-muted-foreground text-sm">{exp.location}</p>

        <ul className="space-y-3 pt-2">
          {exp.highlights.map((highlight, i) => (
            <motion.li
              key={i}
              className="flex gap-3 text-muted-foreground"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
              <span className="leading-relaxed">{highlight}</span>
            </motion.li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-4">
          {exp.technologies.map((tech) => (
            <span key={tech} className="skill-badge text-xs">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    ),
  }));

  return (
    <section id="experience" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-12"
      >
        <span className="text-primary font-mono">02.</span>
        <h2 className="section-title">Where I've Worked</h2>
        <div className="flex-1 h-px bg-border/50 max-w-xs" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-3xl"
      >
        <Tabs
          activeKey={activeKey}
          onChange={setActiveKey}
          tabPosition="left"
          items={tabItems}
          className="experience-tabs"
        />
      </motion.div>

      <style>{`
        .experience-tabs .ant-tabs-tab {
          color: hsl(var(--muted-foreground)) !important;
          padding: 12px 20px !important;
          margin: 0 !important;
          border-left: 2px solid hsl(var(--border)) !important;
        }
        .experience-tabs .ant-tabs-tab:hover {
          color: hsl(var(--primary)) !important;
          background: hsl(var(--primary) / 0.05) !important;
        }
        .experience-tabs .ant-tabs-tab-active {
          color: hsl(var(--primary)) !important;
          border-left: 2px solid hsl(var(--primary)) !important;
          background: hsl(var(--primary) / 0.1) !important;
        }
        .experience-tabs .ant-tabs-tab-active .ant-tabs-tab-btn {
          color: hsl(var(--primary)) !important;
        }
        .experience-tabs .ant-tabs-ink-bar {
          background: hsl(var(--primary)) !important;
        }
        .experience-tabs .ant-tabs-nav::before {
          border: none !important;
        }
        .experience-tabs .ant-tabs-content-holder {
          padding-left: 24px !important;
        }
      `}</style>
    </section>
  );
};

export default ExperienceSection;
