import { motion } from "framer-motion";
import { GraduationCap, Brain, TrendingUp, Code2, Lightbulb, Target, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { FloatingParticles, GlowingLines } from "./AnimatedBackground";

const milestones = [
  {
    icon: GraduationCap,
    title: "Mathematics Foundation",
    description: "Built a strong analytical foundation through a BSc in Mathematics, developing deep intuition for statistical modeling and linear algebra.",
  },
  {
    icon: Lightbulb,
    title: "Discovered ML",
    description: "Transitioned from pure math to applied ML — realizing that algorithms and data could solve real-world business problems at scale.",
  },
  {
    icon: Code2,
    title: "Hands-On Engineering",
    description: "Moved beyond theory into production systems — building end-to-end pipelines, REST APIs, and deploying models that serve real users.",
  },
  {
    icon: TrendingUp,
    title: "Business Impact",
    description: "Focused on measurable outcomes — from 89.2% accuracy credit risk models to NLP chatbots reducing manual workload by 40%.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-16 section-gradient overflow-hidden md:py-20">
      {/* Background Animations */}
      <FloatingParticles count={12} />
      <GlowingLines />

      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4"
            >
              <Brain className="w-4 h-4" />
              About Me
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              From Mathematics to{" "}
              <span className="gradient-text">Machine Learning</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              A journey driven by curiosity, powered by data, and focused on building
              intelligent systems that create real business value.
            </p>
          </motion.div>

          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="elegant-card p-8 md:p-10 mb-10 relative overflow-hidden"
          >
            {/* Subtle gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              {/* Main Bio */}
              <div className="lg:col-span-3 space-y-4">
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Professional Summary
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a <span className="text-foreground font-medium">ML/AI Engineer</span> with 2+ years of experience in machine learning development and data science, and
                  a unique path — starting from a <span className="text-foreground font-medium">BSc in Mathematics</span>, 
                  where I developed deep analytical thinking and a love for problem-solving through numbers. 
                  That mathematical foundation became the springboard into the world of applied AI.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Currently at <span className="text-foreground font-medium">Zen Meraki</span>, I design and deploy 
                  production-grade ML systems across fintech — from credit risk scoring engines achieving 
                  <span className="text-primary font-medium"> 89.2% accuracy</span> to NLP-powered chatbots and 
                  loan prediction pipelines. My work bridges the gap between research and real-world deployment, 
                  always with a focus on measurable business outcomes.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I thrive at the intersection of mathematics, engineering, and domain expertise — 
                  turning complex data problems into clean, scalable solutions that stakeholders can trust and rely on.
                </p>
                <div className="pt-2">
                  <Link
                    to="/resume"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors glow-accent"
                  >
                    <Download className="w-4 h-4" />
                    View & Download Resume
                  </Link>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="lg:col-span-2 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">At a Glance</h3>
                <div className="space-y-3">
                  {[
                    { label: "Current Role", value: "ML/AI Engineer @ Zen Meraki" },
                    { label: "Education", value: "BSc Mathematics" },
                    { label: "Specialization", value: "Applied ML & NLP" },
                    { label: "Domain", value: "Fintech / Credit Risk" },
                    { label: "Open To", value: "Full-time opportunities" },
                  ].map((fact, i) => (
                    <motion.div
                      key={fact.label}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.05 }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 border border-border/50"
                    >
                      <span className="text-sm font-medium text-primary whitespace-nowrap">{fact.label}</span>
                      <span className="text-sm text-muted-foreground">{fact.value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Journey Milestones */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                whileHover={{ y: -4, borderColor: "hsl(var(--primary) / 0.4)" }}
                className="elegant-card p-6 relative group transition-colors duration-300"
              >
                {/* Step number */}
                <span className="absolute top-4 right-4 text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors">
                  0{i + 1}
                </span>

                <motion.div
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 border border-primary/20 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <milestone.icon className="w-6 h-6 text-primary" />
                </motion.div>

                <h3 className="text-lg font-semibold text-foreground mb-2">{milestone.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{milestone.description}</p>

                {/* Connector line (except last) */}
                {i < milestones.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-primary/30 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
