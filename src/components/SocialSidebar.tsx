import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const SocialSidebar = () => {
  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  return (
    <>
      {/* Left Side - Social Links */}
      <motion.div
        className="fixed left-8 bottom-0 hidden md:flex flex-col items-center gap-6 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 + index * 0.1 }}
          >
            <social.icon size={20} />
          </motion.a>
        ))}
        <div className="w-px h-24 bg-muted-foreground/50" />
      </motion.div>

      {/* Right Side - Email */}
      <motion.div
        className="fixed right-8 bottom-0 hidden md:flex flex-col items-center gap-6 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.a
          href={`mailto:${personalInfo.email}`}
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300 font-mono text-xs tracking-widest"
          style={{ writingMode: "vertical-rl" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7 }}
        >
          {personalInfo.email}
        </motion.a>
        <div className="w-px h-24 bg-muted-foreground/50" />
      </motion.div>
    </>
  );
};

export default SocialSidebar;
