import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrainCircuit, Braces, Database, FileSearch, ScanSearch, Sparkles, Terminal, Zap } from "lucide-react";
import { Message, MessageContent, MessageResponse } from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
} from "@/components/ai-elements/prompt-input";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { Button } from "@/components/ui/button";

const steps = [
  { icon: FileSearch, label: "Understanding context", detail: "Sources indexed" },
  { icon: Braces, label: "Encoding intent", detail: "Semantic representation" },
  { icon: Database, label: "Retrieving evidence", detail: "Top matches ranked" },
  { icon: ScanSearch, label: "Checking relevance", detail: "Context verified" },
  { icon: BrainCircuit, label: "Composing response", detail: "Grounded generation" },
];

const samples = [
  "Summarize the strongest finding",
  "What risks should I pay attention to?",
  "Turn the evidence into three actions",
];

function buildAnswer(question: string) {
  const topic = question.replace(/\?$/, "");
  return `The most relevant evidence for “${topic}” points to three themes: measurable outcomes, reliable retrieval, and decisions grounded in source context. The assistant ranks semantic matches before generating this response, helping it stay focused on the supplied knowledge rather than relying on keywords alone.`;
}

export function RagConsoleSection() {
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [active, setActive] = useState(-1);
  const [answer, setAnswer] = useState<string | null>(null);
  const [running, setRunning] = useState(false);
  const timers = useRef<number[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const run = (value: string) => {
    const question = value.trim();
    if (!question || running) return;
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setSubmittedQuery(question);
    setRunning(true);
    setAnswer(null);
    setActive(-1);
    setQuery("");

    steps.forEach((_, index) => {
      timers.current.push(window.setTimeout(() => setActive(index), 300 + index * 560));
    });
    timers.current.push(
      window.setTimeout(() => {
        setAnswer(buildAnswer(question));
        setRunning(false);
      }, 300 + steps.length * 560),
    );
  };

  return (
    <section id="ai-console" className="relative overflow-hidden py-16 section-gradient md:py-20">
      <div className="absolute inset-0 neural-field opacity-40" aria-hidden="true" />
      <div className="container relative px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10 max-w-3xl"
        >
          <div className="mb-4 flex items-center gap-2 text-primary">
            <Terminal className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">Interactive AI Demo</span>
          </div>
          <h2 className="gradient-text font-display text-3xl font-bold md:text-4xl">
            Retrieval Intelligence Console
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Ask a question and see how an AI system interprets intent, retrieves supporting evidence,
            validates relevance, and produces a grounded answer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <div className="elegant-card ai-glow-border relative overflow-hidden p-6 lg:col-span-2">
            <div className="absolute inset-x-0 top-0 h-px data-stream" aria-hidden="true" />
            <div className="pointer-events-none absolute right-4 top-16 h-24 w-24 rounded-full border border-lavender/20 ai-orbit" aria-hidden="true">
              <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-lavender shadow-ai-lavender" />
            </div>
            <div className="mb-6 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Reasoning flow</p>
              <span className="flex items-center gap-2 text-xs text-mint">
                <span className="h-1.5 w-1.5 rounded-full bg-mint ai-pulse" /> Live
              </span>
            </div>
            <div className="space-y-4">
              {steps.map((step, index) => {
                const state = active > index || answer ? "done" : active === index ? "active" : "idle";
                const Icon = step.icon;
                const accent = index % 3 === 0 ? "text-primary" : index % 3 === 1 ? "text-lavender" : "text-mint";
                return (
                  <div key={step.label} className="relative flex items-center gap-3">
                    {index < steps.length - 1 && (
                      <span className="absolute left-[17px] top-9 h-5 w-px bg-border" aria-hidden="true" />
                    )}
                    <motion.div
                      animate={state === "active" ? { scale: [1, 1.08, 1] } : { scale: 1 }}
                      transition={{ duration: 1.3, repeat: state === "active" ? Infinity : 0 }}
                      className={`relative flex h-9 w-9 items-center justify-center rounded-md border bg-secondary ${
                        state === "idle" ? "border-border text-muted-foreground" : `border-current ${accent}`
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </motion.div>
                    <div className="min-w-0">
                        <p className={`text-sm font-medium transition-colors ${state === "idle" ? "text-muted-foreground" : "text-foreground"}`}>
                        {step.label}
                      </p>
                      <p className="truncate text-xs text-muted-foreground">
                        {state === "idle" ? "Queued" : step.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="elegant-card ai-glow-border ai-console-scan flex min-h-[440px] flex-col overflow-hidden p-5 lg:col-span-3 md:p-6">
            <div className="mb-4 flex items-center justify-between border-b border-border pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <BrainCircuit className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Navya’s AI Lab</p>
                  <p className="text-xs text-muted-foreground">Semantic retrieval demonstration</p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 rounded-md border border-mint/30 bg-mint/10 px-2 py-1 text-xs text-mint">
                <Zap className="h-3 w-3" /> Ready
              </span>
            </div>

            <div className="mb-4 grid grid-cols-3 gap-2" aria-label="AI console status">
              {[
                ["12.4k", "vectors", "text-primary"],
                ["28ms", "retrieval", "text-mint"],
                ["0.94", "confidence", "text-lavender"],
              ].map(([value, label, color]) => (
                <div key={label} className="rounded-md border border-border bg-secondary/35 px-3 py-2">
                  <p className={`text-sm font-semibold ${color}`}>{value}</p>
                  <p className="text-[10px] uppercase tracking-wide text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>

            <div className="flex min-h-[240px] flex-1 flex-col justify-end gap-5 overflow-hidden rounded-md border border-border bg-background/40 p-4">
              {!submittedQuery && (
                <div className="my-auto text-center">
                  <div className="relative mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-lavender/30 bg-lavender/10">
                    <span className="absolute inset-[-7px] rounded-full border border-dashed border-primary/30 ai-orbit" aria-hidden="true" />
                    <BrainCircuit className="h-7 w-7 text-lavender ai-pulse" />
                    <Sparkles className="absolute -right-1 -top-1 h-4 w-4 text-coral ai-float" />
                  </div>
                  <p className="text-sm font-medium text-foreground">Explore a grounded AI workflow</p>
                  <p className="mx-auto mt-1 max-w-sm text-xs leading-relaxed text-muted-foreground">
                    Choose a prompt or ask your own question to watch the retrieval path activate.
                  </p>
                </div>
              )}

              {submittedQuery && (
                <Message from="user">
                  <MessageContent>{submittedQuery}</MessageContent>
                </Message>
              )}

              <AnimatePresence mode="wait">
                {running && (
                  <motion.div key="thinking" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <Message from="assistant">
                      <MessageContent>
                        <Shimmer className="text-sm">Retrieving and checking the strongest evidence…</Shimmer>
                      </MessageContent>
                    </Message>
                  </motion.div>
                )}
                {answer && !running && (
                  <motion.div key="answer" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                    <Message from="assistant">
                      <MessageContent className="leading-relaxed">
                        <MessageResponse>{answer}</MessageResponse>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {["semantic match", "source grounded", "relevance checked"].map((label, index) => (
                            <span
                              key={label}
                              className={`rounded-md border px-2 py-1 text-xs ${
                                index === 0
                                  ? "border-primary/30 bg-primary/10 text-primary"
                                  : index === 1
                                    ? "border-mint/30 bg-mint/10 text-mint"
                                    : "border-lavender/30 bg-lavender/10 text-lavender"
                              }`}
                            >
                              {label}
                            </span>
                          ))}
                        </div>
                      </MessageContent>
                    </Message>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <PromptInput
              onSubmit={(message) => run(message.text || query)}
              className="mt-4 border-input bg-secondary/50"
            >
              <PromptInputTextarea
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Ask the intelligence layer…"
                aria-label="Ask the AI retrieval console"
                className="min-h-[76px]"
              />
              <PromptInputFooter className="justify-between">
                <span className="text-xs text-muted-foreground">Enter to run</span>
                <PromptInputSubmit status={running ? "submitted" : "ready"} disabled={running || !query.trim()} />
              </PromptInputFooter>
            </PromptInput>

            <div className="mt-3 flex flex-wrap gap-2">
              {samples.map((sample) => (
                <Button
                  key={sample}
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => run(sample)}
                  disabled={running}
                  className="h-auto whitespace-normal border-input bg-background py-1.5 text-left text-xs text-foreground hover:border-primary hover:text-accent-foreground"
                >
                  {sample}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}