import { motion } from "framer-motion";
import { Code2, Brain, MessageSquare, Settings, Eye, Database } from "lucide-react";
import { FloatingOrbs, FloatingParticles } from "./AnimatedBackground";

const skillCategories = [
  {
    title: "Machine Learning",
    icon: Brain,
    skills: ["Python", "Scikit-learn", "XGBoost", "LightGBM", "CatBoost", "Pandas", "NumPy", "Feature Engineering", "SHAP"],
  },
  {
    title: "Deep Learning & CV",
    icon: Eye,
    skills: ["TensorFlow", "PyTorch", "Keras", "OpenCV", "CNNs", "Face Detection", "Image Classification"],
  },
  {
    title: "NLP & LLMs",
    icon: MessageSquare,
    skills: ["HuggingFace", "LangChain", "Transformers", "BERT", "Text Classification", "Sentiment Analysis", "Intent Recognition", "Chatbots"],
  },
  {
    title: "MLOps & Engineering",
    icon: Settings,
    skills: ["FastAPI", "Flask", "Streamlit", "Docker", "Git", "REST APIs", "Model Deployment"],
  },
  {
    title: "Data & Visualization",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "Plotly", "Matplotlib", "Seaborn", "Power BI", "Hadoop", "Spark"],
  },
  {
    title: "Web Scraping & ETL",
    icon: Code2,
    skills: ["BeautifulSoup", "Selenium", "Data Pipelines", "ETL Workflows", "Jupyter Notebooks", "Data Cleaning"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-16 section-gradient overflow-hidden md:py-20">
      {/* Animated Background */}
      <FloatingOrbs />
      <FloatingParticles count={8} />
      
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
            <Code2 className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">Skills</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Technical Expertise
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="elegant-card p-6 hover:border-primary/30 transition-colors"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-md bg-muted text-sm font-medium text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
