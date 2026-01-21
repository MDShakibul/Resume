import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social Links - Mobile */}
          <div className="flex items-center gap-6 md:hidden">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ y: -3 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm font-mono">
              Designed & Built by{" "}
              <a href="#" className="text-primary hover:underline">
                {personalInfo.name}
              </a>
            </p>
          </div>

          <p className="text-muted-foreground text-xs font-mono">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
