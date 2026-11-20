import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { GeometricShapes, FloatingParticles } from "./AnimatedBackground";
import { ResumeDownloadAction } from "./ResumeDownloadAction";
import { SplashScreen } from "./SplashScreen";
import { INTRO_VISIBLE_MS } from "@/lib/intro-timing";

const pageTitles: Record<string, string> = {
  "/": "Navya Venkidesh | ML/AI Engineer",
  "/work": "Selected AI & ML Work | Navya Venkidesh",
  "/profile": "Experience & Skills | Navya Venkidesh",
  "/contact": "Contact | Navya Venkidesh",
};

export function PortfolioLayout() {
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  const pageRef = useRef<HTMLElement>(null);
  const [showIntro, setShowIntro] = useState(() => {
    if (location.pathname !== "/") return false;
    try { return sessionStorage.getItem("portfolio-intro-seen") !== "true"; }
    catch { return true; }
  });

  useEffect(() => {
    if (!showIntro) return;
    try { sessionStorage.setItem("portfolio-intro-seen", "true"); } catch { /* Storage may be unavailable. */ }
    if (reduceMotion) { setShowIntro(false); return; }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => setShowIntro(false), INTRO_VISIBLE_MS);
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, [showIntro, reduceMotion]);

  useEffect(() => {
    document.title = pageTitles[location.pathname] ?? pageTitles["/"];
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <SplashScreen isLoading={showIntro} onSkip={() => setShowIntro(false)} />
      <div className="fixed inset-0 z-0 pointer-events-none opacity-60" aria-hidden="true">
        <GeometricShapes />
        <FloatingParticles count={8} />
      </div>
      <Header />
      <ResumeDownloadAction />
      <motion.main
        ref={pageRef}
        {...(showIntro && !reduceMotion ? { inert: "" } : {})}
        key={location.pathname}
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 md:pl-24"
      >
        <Outlet />
        <Footer />
      </motion.main>
    </div>
  );
}