import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "@/data/portfolio";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactDetails = [
    { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: MapPin, label: "Location", value: personalInfo.location, href: null },
  ];

  return (
    <section id="contact" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto"
      >
        <span className="text-primary font-mono block mb-4">05. What's Next?</span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
          Get In Touch
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-12">
          I'm currently looking for new opportunities. Whether you have a question, 
          a project idea, or just want to say hi, I'll try my best to get back to you!
        </p>

        <motion.a
          href={`mailto:${personalInfo.email}`}
          className="btn-primary text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Say Hello
        </motion.a>
      </motion.div>

      {/* Contact Cards */}
      <motion.div
        className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {contactDetails.map((detail, index) => (
          <motion.div
            key={detail.label}
            className="experience-card text-center group"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 + index * 0.1 }}
          >
            {detail.href ? (
              <a href={detail.href} className="block">
                <detail.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-muted-foreground text-sm mb-2">{detail.label}</p>
                <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                  {detail.value}
                </p>
              </a>
            ) : (
              <>
                <detail.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground text-sm mb-2">{detail.label}</p>
                <p className="text-foreground font-medium">{detail.value}</p>
              </>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ContactSection;
