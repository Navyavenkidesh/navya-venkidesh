import { motion } from "framer-motion";
import { GitBranch, Activity, DollarSign, Clock, HardDrive, Zap, Sparkles, BarChart3 } from "lucide-react";
import { GlowingLines, PulsingDots } from "./AnimatedBackground";

const mlopsCards = [
  {
    icon: GitBranch,
    title: "CI / CD & Versioning",
    description: "Model versioning, automated testing, and deployment pipelines. Git-based workflow for reproducible ML experiments.",
  },
  {
    icon: Activity,
    title: "Monitoring & Alerts",
    description: "Model performance tracking, data drift detection, and automated retraining triggers for production systems.",
  },
  {
    icon: DollarSign,
    title: "Deployment & Scale",
    description: "FastAPI and Streamlit-based deployments. Batch processing support for thousands of predictions simultaneously.",
  },
];

const benchmarks = [
  { icon: BarChart3, label: "ROC-AUC Score", value: "0.912", detail: "Credit Risk Engine — LightGBM ensemble model" },
  { icon: Clock, label: "F1-Score", value: "86.4%", detail: "Balanced precision (87.5%) and recall (85.3%)" },
  { icon: Zap, label: "Batch Processing", value: "1000+", detail: "Applications processed per batch in credit risk system" },
  { icon: HardDrive, label: "Features Evaluated", value: "25+", detail: "Financial features per credit risk assessment" },
];

export function MLOpsSection() {
  return (
    <section className="relative py-16 overflow-hidden md:py-20">
      {/* Animated Background */}
      <GlowingLines />
      <PulsingDots />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/5 via-primary/3 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="container relative px-6">
        {/* MLOps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              MLOps <span className="gradient-text">Practices</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xl mb-10 text-lg">
            Engineering practices applied to keep ML systems healthy in production
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mlopsCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="elegant-card p-7 group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
              >
                <motion.div
                  whileHover={{ rotate: 5 }}
                  className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-5 shadow-lg"
                >
                  <card.icon className="w-7 h-7 text-primary-foreground" />
                </motion.div>
                <h3 className="font-display font-semibold text-xl mb-3 group-hover:text-primary transition-colors">{card.title}</h3>
                <p className="text-muted-foreground">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benchmarks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Performance <span className="gradient-text">Benchmarks</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xl mb-10 text-lg">
            Real metrics from production deployments at Zen Meraki
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benchmarks.map((bench, index) => (
              <motion.div
                key={bench.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="elegant-card p-8 text-center group hover:shadow-2xl hover:shadow-primary/10 transition-all"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-5 shadow-lg"
                >
                  <bench.icon className="w-8 h-8 text-primary-foreground" />
                </motion.div>
                <div className="text-4xl font-display font-bold gradient-text mb-2">{bench.value}</div>
                <div className="font-semibold text-foreground mb-2">{bench.label}</div>
                <p className="text-sm text-muted-foreground">{bench.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
