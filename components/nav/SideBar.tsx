import { useEffect, useState } from "react";
import styles from "./sidebar.module.scss";
import { motion } from "framer-motion";

export const SideBar = () => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");

    const options = {
      threshold: 0.3,
    };

    const callback = (entries:any) => {
      entries.forEach((entry:any) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => observer.observe(section));
  }, []);

  const navItems = [
    { label: "About", href: "#about", delay: 0.1 },
    { label: "Projects", href: "#projects", delay: 0.2 },
    { label: "Exp.", href: "#experience", delay: 0.3 },
    { label: "Contact", href: "#contact", delay: 0.4 },
  ];

  return (
    <div style={{ background: "var(--background-dark)" }}>
      <motion.nav
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.sideBar}
      >
        <span
          className={styles.logo}
          onClick={() => {
            document.location.hash === ""
              ? document.getElementById("main")?.scrollIntoView()
              : (document.location.hash = "");
          }}
        >
          SI<span>.</span>
        </span>
        {navItems.map((item) => (
          
          <motion.a
            key={item.label}
            initial={{ x: -70 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: item.delay }}
            href={item.href}
            onClick={() => setSelected(item.label.toLowerCase())}
            className={selected === item.label.toLowerCase() ? styles.selected : ""}
          >
            {item.label}
          </motion.a>
        ))}
      </motion.nav>
    </div>
  );
};
