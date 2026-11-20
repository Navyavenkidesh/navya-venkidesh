import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { Layers, Building2, Sparkles } from "lucide-react";
import { FloatingParticles, PulsingDots } from "./AnimatedBackground";

// Import project images
import classifierImage from "@/assets/project-classifier.jpg";
import nlpImage from "@/assets/project-nlp.jpg";
import pdfAssistantImage from "@/assets/project-ai-pdf-assistant.jpg";
import conversifyImage from "@/assets/project-conversify.jpg";
import gestureImage from "@/assets/project-gesture.jpg";
import emotionImage from "@/assets/project-emotion.jpg";
import censusImage from "@/assets/project-census.jpg";

// Import project videos
import creditRiskVideo from "@/assets/video-credit-risk.mp4";
import pdfAssistantVideo from "@/assets/video-ai-pdf-assistant.mp4";
import conversifyVideo from "@/assets/video-conversify.mp4";
import shopifyVideo from "@/assets/video-shopify.mp4";

const projects = [
  {
    id: "credit-risk-engine",
    title: "Credit Risk Assessment System",
    subtitle: "Production System • Zen Meraki",
    description:
      "AI-powered loan decision platform for financial institutions. Real-time credit risk assessment with explainable AI, evaluating 25+ financial features for automated loan decisions.",
    outcome: "89.2% accuracy and 0.912 ROC-AUC in production, deployed on Streamlit with batch processing support",
    tags: ["LightGBM", "XGBoost", "CatBoost", "Streamlit", "Plotly", "SHAP"],
    confidential: true,
    featured: true,
    image: classifierImage,
    video: creditRiskVideo,
  },
  {
    id: "ai-pdf-assistant",
    title: "AI PDF Assistant",
    subtitle: "RAG-Powered Document Q&A",
    description:
      "End-to-end document intelligence app that lets users upload multiple PDFs and ask questions in natural language. A RAG pipeline retrieves semantically relevant chunks and generates answers locally using an open-source LLM.",
    outcome: "Fully local RAG pipeline that answers document-specific questions with retrieved context",
    tags: ["Python", "FastAPI", "LangChain", "Ollama", "ChromaDB", "RAG"],
    demo: "https://lnkd.in/p/gJ6_aUYm",
    repo: "https://lnkd.in/gY-QzYRs",
    featured: true,
    image: pdfAssistantImage,
    video: pdfAssistantVideo,
  },
  {
    id: "text-humanizer-conversify",
    title: "Text Humanizer (Conversify)",
    subtitle: "Production System • Zen Meraki",
    description:
      "Full-stack AI text humanization platform that converts AI-generated text into authentic, natural-sounding content. Features advanced text processing, plagiarism detection, tone adjustment, and local file processing.",
    outcome: "Production-deployed SaaS platform with file upload support and real-time processing",
    tags: ["NLP", "Python", "FastAPI", "React", "AI/ML", "Full-Stack"],
    confidential: true,
    featured: true,
    image: conversifyImage,
    video: conversifyVideo,
  },
  {
    id: "shopify-category-prediction",
    title: "Product Category Prediction",
    subtitle: "E-commerce ML • Zen Meraki",
    description:
      "Automated product categorization system for Shopify stores. Multi-class classification processing product titles and descriptions for accurate category assignment.",
    outcome: "94% accuracy on production data, integrated with the Shopify workflow",
    tags: ["Classification", "NLP", "TF-IDF", "Scikit-learn", "Python"],
    confidential: true,
    image: nlpImage,
    video: shopifyVideo,
  },
];

const impactStrip = [
  { value: "4", label: "Production systems" },
  { value: "89.2%", label: "Credit-risk accuracy" },
  { value: "94%", label: "Classification accuracy" },
  { value: "25+", label: "Features scored per loan" },
];

const resumeProjects = [
  {
    id: "gesture-controlled-game-interface",
    title: "Gesture-Controlled Game Interface",
    subtitle: "Computer Vision • Hand Tracking",
    description: "Real-time hand tracking with 21 landmarks and velocity-based swipe detection to control a game.",
    outcome: "Gesture-to-game control at under 400 ms latency",
    tags: ["Python", "OpenCV", "MediaPipe"],
    demo: "https://lnkd.in/p/g3tVzWea",
    image: gestureImage,
  },
  {
    id: "real-time-emotion-detection",
    title: "Real-Time Emotion Detection",
    subtitle: "Computer Vision • Deep Learning",
    description: "A deep learning model recognizing happy, sad, angry, surprise, disgust, fear, and neutral facial emotions in real time.",
    outcome: "Real-time recognition across seven facial emotions",
    tags: ["Python", "OpenCV", "Deep Learning"],
    image: emotionImage,
  },
  {
    id: "census-income-prediction",
    title: "Census Income Prediction",
    subtitle: "Classification • Model Comparison",
    description: "Compared KNN, Naive Bayes, SVM, Decision Tree, and Logistic Regression with IQR outlier handling, SMOTE balancing, and hyperparameter tuning.",
    outcome: "Five classifiers compared with balanced data and tuned hyperparameters",
    tags: ["Python", "Scikit-learn", "SMOTE", "GridSearchCV"],
    image: censusImage,
  },
];

const additionalProjects = [
  {
    title: "Face Detection System",
    desc: "Real-time face detection using OpenCV and deep learning",
    repo: "https://github.com/Navyavenkidesh/face_detection",
    tech: "OpenCV • Python • Jupyter",
  },
  {
    title: "Web Scraping Pipelines",
    desc: "Automated data collection from LinkedIn & Bayut real estate",
    repo: "https://github.com/Navyavenkidesh/BAYUT_SCRAPPING",
    tech: "Python • BeautifulSoup • Selenium",
  },
  {
    title: "LinkedIn Data Scraper",
    desc: "Profile data extraction and analysis automation",
    repo: "https://github.com/Navyavenkidesh/linkedin_scrap",
    tech: "Python • Jupyter • Data Analysis",
  },
  {
    title: "ML Experimentation Lab",
    desc: "Algorithm benchmarks, hyperparameter tuning & cross-validation",
    repo: "https://github.com/Navyavenkidesh/code_github",
    tech: "Python • Scikit-learn • NumPy",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-16 section-gradient overflow-hidden md:py-20">
      {/* Animated Background */}
      <FloatingParticles count={12} />
      <PulsingDots />

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
            <Layers className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Production ML Systems
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            All projects below were designed and deployed at <span className="text-foreground">Zen Meraki</span> —
            production-grade systems solving real business problems.
          </p>
        </motion.div>

        {/* Zen Meraki Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border shadow-sm mb-8"
        >
          <Building2 className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Built at Zen Meraki • Production & Client Systems</span>
        </motion.div>

        {/* Impact Strip */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="ai-glow-border rounded-xl bg-card/70 backdrop-blur-sm px-6 py-5 mb-10 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {impactStrip.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.07 }}
              className="text-center md:text-left"
            >
              <div className="text-2xl md:text-3xl font-display font-bold gradient-text">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Projects Grid — two-up, larger media */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mb-12">
          <div className="mb-6 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-mint" />
            <h3 className="text-xl font-semibold text-foreground">Computer Vision & Applied ML</h3>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {resumeProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index + projects.length} />
            ))}
          </div>
        </div>

        {/* Additional Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-lavender" />
            <h3 className="text-xl font-semibold text-foreground">
              Additional Projects & Experiments
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalProjects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="elegant-card p-5 hover:border-primary/30 transition-all group cursor-pointer"
              >
                <h4 className="font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-3">{project.desc}</p>
                <p className="text-xs text-primary font-medium">{project.tech}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
