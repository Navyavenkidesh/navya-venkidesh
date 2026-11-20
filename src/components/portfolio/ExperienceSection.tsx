import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { GlowingLines, GeometricShapes } from "./AnimatedBackground";

const experiences = [
  {
    title: "Machine Learning & AI Engineer",
    company: "Zen Meraki",
    location: "Thrissur, Kerala, India",
    period: "Jan 2024 – Present",
    type: "Full-time",
    responsibilities: [
      "Developed AI-powered Credit Risk Assessment System using LightGBM, XGBoost, and CatBoost achieving 89.2% accuracy and 0.912 ROC-AUC",
      "Built real-time credit risk scoring engine evaluating 25+ financial features with SHAP explainability for regulatory compliance",
      "Designed and deployed NLP chatbot systems with intent classification and sentiment analysis for customer support automation",
      "Developed multi-class product categorization system for Shopify e-commerce with 94%+ accuracy",
      "Built web scraping pipelines for automated data collection from LinkedIn and real estate platforms",
      "Deployed ML models via FastAPI and Streamlit with interactive Plotly visualization dashboards",
    ],
    skills: ["Python", "LightGBM", "XGBoost", "NLP", "FastAPI", "Streamlit", "SHAP"],
  },
  {
    title: "Data Analyst Intern",
    company: "Luminar Technolab",
    location: "Kochi, Kerala, India",
    period: "May 2023 – Feb 2024",
    type: "Internship",
    responsibilities: [
      "Conducted data exploration and visualization using Pandas, NumPy, Matplotlib, and Seaborn",
      "Designed interactive dashboards and reports using Power BI for stakeholder data accessibility",
      "Performed big data analysis using Apache Hadoop and Apache Spark on datasets exceeding 1M+ records",
      "Implemented machine learning models for predictive analytics, achieving 85%+ accuracy on classification tasks",
      "Earned Big Data Analytics & Data Science certification with Grade A+",
    ],
    skills: ["Python", "Power BI", "Hadoop", "Spark", "Machine Learning"],
  },
  {
    title: "Data Science Intern",
    company: "iDatalytics Pvt. Ltd",
    location: "India",
    period: "4 Months",
    type: "Internship",
    responsibilities: [
      "Participated in training programs to enhance technical proficiency in data science methodologies",
      "Contributed insights during team discussions and applied logical thinking to resolve technical challenges",
      "Maintained comprehensive task and project documentation for knowledge transfer",
    ],
    skills: ["Data Science", "Python", "Documentation"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-16 overflow-hidden md:py-20">
      {/* Animated Background */}
      <GlowingLines />
      <GeometricShapes />
      
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
            <Briefcase className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">Experience</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Professional Background
          </h2>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-3xl space-y-6">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.title + exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="elegant-card p-6 hover:border-primary/30 transition-colors"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-md bg-secondary text-xs font-medium text-secondary-foreground">
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-2 mb-5">
                {exp.responsibilities.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="text-primary mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md bg-muted text-xs font-medium text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
