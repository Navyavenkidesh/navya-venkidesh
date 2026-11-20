import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { FloatingParticles, GeometricShapes } from "./AnimatedBackground";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-16 section-gradient overflow-hidden md:py-20">
      {/* Animated Background */}
      <FloatingParticles count={10} />
      <GeometricShapes />
      
      <div className="container relative px-6">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 text-primary mb-4">
              <Mail className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">Contact</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Let's Connect
            </h2>
            <p className="text-muted-foreground mt-3">
              Open to full-time opportunities, collaborations, and impactful ML projects.
            </p>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="elegant-card p-8"
          >
            {/* Contact Links */}
            <div className="space-y-4 mb-8">
              <a
                href="mailto:navyaa.venkidesh@gmail.com"
                className="flex items-center gap-3 p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    navyaa.venkidesh@gmail.com
                  </div>
                  <div className="text-xs text-muted-foreground">Email</div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/navya-venkidesh-63bb06275"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    linkedin.com/in/navya-venkidesh-63bb06275
                  </div>
                  <div className="text-xs text-muted-foreground">LinkedIn</div>
                </div>
              </a>

              <a
                href="https://github.com/Navyavenkidesh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center">
                  <Github className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    github.com/Navyavenkidesh
                  </div>
                  <div className="text-xs text-muted-foreground">GitHub</div>
                </div>
              </a>
            </div>

            {/* CTA */}
            <a
              href="mailto:navyaa.venkidesh@gmail.com"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              <Send className="w-4 h-4" />
              Send Message
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
