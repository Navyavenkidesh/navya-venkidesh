import { motion } from "framer-motion";
import { BookOpen, TrendingUp, Clock, Target, BarChart3, ExternalLink } from "lucide-react";
import { FloatingOrbs, GlowingLines } from "./AnimatedBackground";

const caseStudies = [
  {
    title: "Credit Risk Assessment — Fintech Loan Decisions",
    metrics: [
      { label: "Accuracy", value: "89.2%", icon: TrendingUp },
      { label: "ROC-AUC", value: "0.912", icon: BarChart3 },
      { label: "Precision", value: "87.5%", icon: Target },
      { label: "Recall", value: "85.3%", icon: Clock },
    ],
    items: [
      { label: "Problem", text: "Automate credit risk assessment for financial institutions with explainable AI" },
      { label: "Data", text: "25+ financial features: credit bureau score, DPD history, EMI ratios, cash flow, banking behavior" },
      { label: "Approach", text: "LightGBM + XGBoost + CatBoost ensemble → SHAP explainability → risk scoring engine" },
      { label: "Deployment", text: "Streamlit dashboard with single prediction and batch processing (thousands of applications)" },
      { label: "Stack", text: "Python, LightGBM, XGBoost, CatBoost, Streamlit, Plotly, Pandas, NumPy" },
    ],
  },
  {
    title: "NLP Chatbot — Customer Support Automation",
    metrics: [
      { label: "Intent Accuracy", value: "89%", icon: TrendingUp },
      { label: "Ticket Routing", value: "Auto", icon: Clock },
    ],
    items: [
      { label: "Problem", text: "Automate customer query handling and reduce manual ticket routing" },
      { label: "Approach", text: "Intent classification with transformers + entity extraction + sentiment scoring" },
      { label: "Architecture", text: "Transformer-based classifier with fallback to rule engine" },
      { label: "Integration", text: "REST API integrated with existing support workflow via FastAPI" },
      { label: "Stack", text: "HuggingFace, LangChain, FastAPI, PostgreSQL, Transformers" },
    ],
  },
];

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="relative py-16 overflow-hidden md:py-20">
      {/* Animated Background */}
      <FloatingOrbs />
      <GlowingLines />
      
      <div className="container relative px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-9"
        >
          <div className="flex items-center gap-2 text-primary mb-4">
            <BookOpen className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">Case Studies</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Technical Deep Dives
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            Detailed breakdowns of production systems — problem, approach, architecture, and results.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="elegant-card p-6 hover:border-primary/30 transition-colors"
            >
              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {study.title}
              </h3>

              <p className="mb-4 text-xs font-medium text-muted-foreground">
                Confidential company project · code & demo not public
              </p>

              {/* Metrics */}
              <div className="flex flex-wrap gap-3 mb-6">
                {study.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-card border border-border"
                  >
                    <span className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <metric.icon className="w-4 h-4 text-primary" />
                    </span>
                    <div>
                      <div className="text-base font-display font-bold gradient-text leading-tight">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Details */}
              <ul className="space-y-3">
                {study.items.map((item) => (
                  <li key={item.label} className="flex gap-3 text-sm items-baseline">
                    <span className="shrink-0 px-2 py-0.5 rounded-md bg-primary/10 text-primary text-xs font-semibold">
                      {item.label}
                    </span>
                    <span className="text-muted-foreground">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
