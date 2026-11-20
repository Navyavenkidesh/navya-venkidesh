import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Sparkles } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { FloatingOrbs, FloatingParticles, GlowingLines } from "./AnimatedBackground";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[min(760px,90svh)] items-center justify-center overflow-hidden hero-gradient pt-20">
      {/* Background Animations */}
      <div className="absolute inset-0 ai-grid-bg opacity-40 pointer-events-none" aria-hidden="true" />
      <FloatingOrbs />
      <FloatingParticles count={15} />
      <GlowingLines />
      

      
      <div className="container relative z-10 px-6 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 border border-primary/30 shadow-lg shadow-primary/10 mb-6 backdrop-blur-sm"
              >
                <motion.span 
                  className="w-2 h-2 rounded-full bg-success"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{ boxShadow: '0 0 10px hsl(var(--success))' }}
                />
                <span className="text-sm font-medium text-muted-foreground">Open to Opportunities</span>
              </motion.div>

              {/* Headline */}
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-foreground">Machine Learning &amp; AI</span>
                <br />
                <span className="gradient-text">
                  Engineer
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-muted-foreground mt-4 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Building production-grade intelligent systems
              </motion.p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {["Applied ML", "NLP", "Credit Risk", "Production AI"].map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + i * 0.05 }}
                    whileHover={{ scale: 1.05, borderColor: 'hsl(var(--primary))' }}
                    className="px-3 py-1.5 text-sm rounded-lg bg-card/60 text-foreground border border-border/50 shadow-sm backdrop-blur-sm cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* Description */}
              <p className="text-lg text-muted-foreground mt-8 leading-relaxed max-w-xl">
                Designing and deploying ML systems at <span className="text-foreground font-medium">Zen Meraki</span> — 
                from credit risk models and loan prediction pipelines to NLP chatbots and classification engines. 
                Focused on delivering measurable business impact through applied machine learning.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mt-10">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button asChild size="lg"><Link to="/work" className="group">
                    View Projects
                    <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </Link></Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button asChild size="lg" variant="outline"><Link to="/contact">
                    <Sparkles className="w-4 h-4 text-primary" />
                    Get in Touch
                  </Link></Button>
                </motion.div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/50">
                {[
                  { value: "2+", label: "Years Experience" },
                  { value: "5+", label: "Production Systems" },
                  { value: "Fintech", label: "Domain Focus" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <motion.div 
                      className="text-2xl font-bold text-primary"
                      whileHover={{ scale: 1.1 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Main image container */}
                <motion.div 
                  className="relative rounded-2xl overflow-hidden border-2 border-primary/20 glow-card"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                    <img
                      src={profilePhoto}
                      alt="Navya Venkidesh - Machine Learning and AI Engineer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
                </motion.div>

                {/* Decorative ring */}
                <motion.div
                  className="absolute -inset-4 rounded-2xl border border-primary/20"
                  animate={{ rotate: [0, 2, -2, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Floating Card - Current Role */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  className="absolute -bottom-6 -left-6 bg-card/90 px-4 py-3 rounded-xl border border-primary/30 shadow-lg shadow-primary/10 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Briefcase className="w-5 h-5 text-primary" />
                    </motion.div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">ML/AI Engineer</div>
                      <div className="text-xs text-muted-foreground">Zen Meraki</div>
                    </div>
                  </div>
                </motion.div>

                {/* Additional floating element */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -top-4 -right-4 bg-primary/20 p-3 rounded-full border border-primary/40 backdrop-blur-sm"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-5 h-5 text-primary" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
