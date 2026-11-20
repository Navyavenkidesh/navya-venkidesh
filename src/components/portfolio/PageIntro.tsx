import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface PageIntroProps {
  index: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export function PageIntro({ index, eyebrow, title, description, icon: Icon }: PageIntroProps) {
  return (
    <section className="relative flex min-h-[420px] items-end overflow-hidden border-b border-border pt-24 md:min-h-[460px]">
      <div className="absolute inset-0 ai-grid-bg opacity-30" aria-hidden="true" />
      <div className="absolute inset-0 neural-field opacity-35" aria-hidden="true" />
      <div className="container relative px-6 pb-12 md:pb-14">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_18rem]">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}>
            <div className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase text-primary">
              <span className="font-mono text-muted-foreground">{index}</span>
              <span className="h-px w-10 pastel-spectrum" />
              {eyebrow}
            </div>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.82, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.15 }}
            className="relative hidden aspect-square items-center justify-center justify-self-end lg:flex"
            aria-hidden="true"
          >
            <div className="absolute inset-4 rounded-full border border-primary/25 ai-orbit" />
            <div className="absolute inset-12 rounded-full border border-lavender/30 ai-orbit [animation-direction:reverse]" />
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-primary/40 bg-card/80 shadow-lg backdrop-blur-md ai-pulse">
              <Icon className="h-10 w-10 text-primary" />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-px w-full data-stream" aria-hidden="true" />
    </section>
  );
}