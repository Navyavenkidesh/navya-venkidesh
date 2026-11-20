import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { INTRO_EXIT_MS } from "@/lib/intro-timing";
import introVideo from "@/assets/portfolio-intro-refined.mp4";
import introPoster from "@/assets/portfolio-intro-poster.jpg";

interface SplashScreenProps {
  isLoading: boolean;
  onSkip: () => void;
}

export function SplashScreen({ isLoading, onSkip }: SplashScreenProps) {
  const reduceMotion = useReducedMotion();
  return (
    <AnimatePresence>
      {isLoading && !reduceMotion && (
        <motion.div
          role="dialog" aria-modal="true" aria-label="Navya Venkidesh portfolio introduction"
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.985, filter: "blur(4px)" }}
          transition={{ duration: INTRO_EXIT_MS / 1000, ease: [0.22, 1, 0.36, 1] }}
          onKeyDown={(event) => { if (event.key === "Escape") onSkip(); }}
          onWheel={(event) => { if (event.deltaY > 12) onSkip(); }}
          className="cinematic-intro fixed inset-0 z-[100] flex min-h-dvh flex-col overflow-hidden print:hidden"
        >
          <video autoPlay muted playsInline preload="auto" poster={introPoster} aria-hidden="true" className="absolute inset-0 h-full w-full object-cover">
            <source src={introVideo} type="video/mp4" />
          </video>
          <div className="cinematic-intro-shade absolute inset-0" aria-hidden="true" />
          <div className="relative z-10 flex items-center justify-between gap-4 px-6 py-5 md:px-12 md:py-8">
            <span className="font-mono text-xs font-medium">NV <span aria-hidden="true">/</span> APPLIED AI</span>
            <Button variant="outline" size="sm" onClick={onSkip} autoFocus className="cinematic-intro-skip min-h-11">Enter portfolio <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </div>
          <div className="relative z-10 flex min-h-0 flex-1 items-center justify-center px-6 py-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl"
            >
              <p className="cinematic-intro-kicker mb-5 font-mono text-xs">MATHEMATICS · APPLIED ML · PRODUCTION AI</p>
              <h1 className="font-display text-4xl font-semibold leading-tight sm:text-6xl md:text-7xl">Navya Venkidesh</h1>
              <p className="cinematic-intro-muted mt-5 text-base md:text-xl">ML/AI Engineer <span aria-hidden="true">·</span> 2+ Years Experience</p>
              <span className="cinematic-intro-rule mx-auto mt-8 block h-px w-16" aria-hidden="true" />
            </motion.div>
          </div>
          <div className="relative z-10 flex items-end justify-between gap-6 px-6 pb-7 md:px-12 md:pb-10">
            <p className="cinematic-intro-muted max-w-72 text-xs leading-5">Mathematical foundations. Practical, production-ready AI.</p>
            <span className="cinematic-intro-muted font-mono text-xs">01 <span aria-hidden="true">/</span> 04</span>
          </div>
          <div className="cinematic-intro-progress absolute inset-x-0 bottom-0 h-1" aria-hidden="true" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
