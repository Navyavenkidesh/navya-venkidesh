import { motion } from "framer-motion";
import { Award, Calendar, Building, ExternalLink, Download } from "lucide-react";
import { FloatingOrbs, GlowingLines } from "./AnimatedBackground";

const certifications = [
  {
    title: "Datascience with Gen AI",
    issuer: "iDatalytics / RP2 Center",
    date: "July 2024 – October 2024",
    credentialId: "Ref: HRD/IDL/2024",
    fileUrl: "/certificates/cert-rp2-datascience-genai.jpg",
    gradient: "from-mint to-primary",
  },
  {
    title: "Data Science with Gen AI Intern",
    issuer: "iDatalytics Pvt. Ltd.",
    date: "July 2024 – October 2024",
    credentialId: "Employee ID: 647",
    fileUrl: "/certificates/cert-idatalytics-experience.jpg",
    gradient: "from-primary to-lavender",
  },
  {
    title: "Big Data Analytics & Data Science",
    issuer: "Luminar Technolab",
    date: "November 2023",
    credentialId: "Reg: LUM/KOC/32203 • Grade: A+",
    fileUrl: "/certificates/cert-luminar-bigdata.jpg",
    gradient: "from-lavender to-mint",
  },
  {
    title: "Big Data Analytics & Data Science",
    issuer: "NACTET (Govt. of India)",
    date: "November 2023",
    credentialId: "Serial No: 89713",
    fileUrl: "/certificates/cert-nactet-bigdata.jpg",
    gradient: "from-mint to-lavender",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-16 mint-gradient overflow-hidden md:py-20">
      <FloatingOrbs />
      <GlowingLines />
      
      <motion.div 
        className="absolute top-1/4 right-0 w-80 h-80 bg-lavender/15 rounded-full blur-3xl"
        animate={{ x: [0, -50, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-0 w-96 h-96 bg-mint/15 rounded-full blur-3xl"
        animate={{ y: [0, 50, 0], scale: [1, 0.8, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 text-sm font-semibold text-primary mb-6"
          >
            <Award className="w-4 h-4" />
            Professional Credentials
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Continuously upgrading skills through industry-recognized certifications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title + cert.issuer}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.03, rotateY: 5 }}
              className="elegant-card p-6 group hover:shadow-2xl hover:shadow-mint/20 transition-all duration-500 relative overflow-hidden flex flex-col justify-between"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              />
              
              <div>
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.gradient} flex items-center justify-center mb-5 shadow-lg relative`}
                >
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cert.gradient} opacity-50`}
                    animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  />
                  <Award className="w-7 h-7 text-primary-foreground relative z-10" />
                </motion.div>

                <h3 className="text-base font-display font-semibold group-hover:text-primary transition-colors mb-2 relative">
                  {cert.title}
                </h3>

                <div className="space-y-1.5 text-xs text-muted-foreground mb-3 relative">
                  <motion.div className="flex items-center gap-2" whileHover={{ x: 5 }}>
                    <Building className="w-3.5 h-3.5 shrink-0" />
                    <span>{cert.issuer}</span>
                  </motion.div>
                  <motion.div className="flex items-center gap-2" whileHover={{ x: 5 }}>
                    <Calendar className="w-3.5 h-3.5 shrink-0" />
                    <span>{cert.date}</span>
                  </motion.div>
                </div>

                <p className="text-xs text-muted-foreground relative font-mono">
                  {cert.credentialId}
                </p>
              </div>

              {cert.fileUrl && (
                <div className="relative mt-4 pt-3 border-t border-border/40 flex items-center gap-4">
                  <a
                    href={cert.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    View
                  </a>
                  <a
                    href={cert.fileUrl}
                    download
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download
                  </a>
                </div>
              )}

              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 border border-mint/10 rounded-full pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
