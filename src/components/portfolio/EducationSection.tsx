import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Calendar, ChartNoAxesCombined, GraduationCap, MapPin, Network, Sigma, Variable } from "lucide-react";
import { Button } from "@/components/ui/button";

const foundations = [
  { name: "Linear algebra", symbol: "Ax = b", icon: Network, description: "Vectors, matrices, and transformations — the mathematical language behind machine learning.", color: "text-primary", surface: "bg-primary/10" },
  { name: "Calculus", symbol: "∂f / ∂x", icon: Variable, description: "Rates of change and optimization — a foundation for understanding how models learn.", color: "text-mint", surface: "bg-mint/10" },
  { name: "Statistics", symbol: "μ · σ²", icon: ChartNoAxesCombined, description: "Patterns, distributions, and analytical reasoning — turning observations into informed decisions.", color: "text-lavender", surface: "bg-lavender/10" },
  { name: "Probability", symbol: "P(A | B)", icon: Sigma, description: "Uncertainty and likelihood — the building blocks of statistical thinking and prediction.", color: "text-coral", surface: "bg-coral/10" },
];

export function EducationSection() {
  const [selected, setSelected] = useState(0);
  const reduceMotion = useReducedMotion();
  const foundation = foundations[selected];
  const Icon = foundation.icon;

  return (
    <section id="education" className="relative overflow-hidden border-y border-border bg-card/40 py-16 md:py-20">
      <div className="container px-6">
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <span className="mb-3 flex items-center gap-2 text-sm font-semibold text-primary"><GraduationCap className="h-4 w-4" /> Academic foundations</span>
            <h2 className="text-3xl font-bold md:text-4xl">My <span className="gradient-text">Education</span></h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">From mathematical thinking to machine learning practice.</p>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <motion.article initial={reduceMotion ? false : { opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative border-l-2 border-primary pl-6 md:pl-8">
            <span className="absolute -left-[7px] top-0 h-3 w-3 rounded-full border-2 border-background bg-primary" aria-hidden="true" />
            <div className="mb-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" />2020 — Apr 2023</span>
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4" />Kerala, India</span>
            </div>
            <h3 className="text-2xl font-semibold md:text-3xl">BSc Mathematics</h3>
            <p className="mt-2 text-lg font-medium text-primary">University of Calicut</p>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">Built a strong foundation in linear algebra, calculus, statistics, and probability. Rigorous coursework shaped my analytical thinking and problem-solving approach to machine learning.</p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
              {['Analytical thinking', 'Problem solving', 'Communication'].map((skill) => <span key={skill} className="flex items-center gap-1.5"><ArrowUpRight className="h-3.5 w-3.5 text-mint" />{skill}</span>)}
            </div>
          </motion.article>

          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="min-w-0">
            <div className="relative mx-auto flex h-56 w-56 items-center justify-center md:h-64 md:w-64" aria-hidden="true">
              <motion.div animate={reduceMotion ? undefined : { rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute inset-3 rounded-full border border-dashed border-primary/30">
                <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-primary" />
                <span className="absolute bottom-0 left-1/2 h-2.5 w-2.5 translate-y-1/2 rounded-full bg-mint" />
              </motion.div>
              <motion.div animate={reduceMotion ? undefined : { rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute inset-8 rounded-full border border-lavender/25">
                <span className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-lavender" />
              </motion.div>
              <motion.div key={foundation.name} initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className={`flex h-32 w-32 flex-col items-center justify-center gap-3 rounded-full ${foundation.surface} ${foundation.color}`}>
                <Icon className="h-7 w-7" />
                <span className="font-mono text-xl font-semibold">{foundation.symbol}</span>
              </motion.div>
            </div>
            <div role="tablist" aria-label="Mathematical foundations" className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {foundations.map((item, index) => (
                <Button key={item.name} id={`foundation-tab-${index}`} role="tab" aria-selected={selected === index} aria-controls="foundation-detail" variant="ghost" onClick={() => setSelected(index)} className={`h-auto whitespace-normal border px-2 py-3 text-xs ${selected === index ? `border-primary ${item.surface} ${item.color}` : 'border-input text-muted-foreground'}`}>{item.name}</Button>
              ))}
            </div>
            <div id="foundation-detail" role="tabpanel" aria-labelledby={`foundation-tab-${selected}`} className="mt-4 min-h-24 border-l-2 border-primary/30 pl-4">
              <p className="mb-1 text-sm font-semibold text-foreground">{foundation.name}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{foundation.description}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
