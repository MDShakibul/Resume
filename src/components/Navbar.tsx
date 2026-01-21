import { motion } from "framer-motion";
import { FileText, Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/portfolio";

const RESUME_URL = "https://drive.google.com/file/d/1N62-V77EwlYDEBI1OBLwPaERn_DsA2LO/view";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border/50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#"
            className="text-2xl font-heading font-bold text-gradient"
            whileHover={{ scale: 1.05 }}
          >
            {"<SI />"}
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="nav-link text-sm font-medium"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <span className="text-primary mr-1">0{index + 1}.</span>
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-sm inline-flex items-center gap-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <FileText size={16} />
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pt-4 pb-2"
          >
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 nav-link"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-primary mr-2">0{index + 1}.</span>
                {item.label}
              </a>
            ))}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-3 nav-link text-primary"
              onClick={() => setIsOpen(false)}
            >
              <FileText size={16} className="inline mr-2" />
              Resume
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
