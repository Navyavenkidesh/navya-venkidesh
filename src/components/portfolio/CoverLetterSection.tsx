import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, FilePenLine, LockKeyhole, LogIn, LogOut, RotateCcw, WandSparkles } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { downloadApplicationPdf, type CoverLetterData } from "@/lib/cover-letter-pdf";
import { lovable } from "@/integrations/lovable";
import { supabase } from "@/integrations/supabase/client";

const OWNER_ID = "40127c4d-e46f-4298-b625-6748a2276e00";
const initialLetter: CoverLetterData = {
  company: "",
  role: "ML/AI Engineer",
  hiringManager: "Hiring Manager",
  location: "",
  date: new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" }).format(new Date()),
  subject: "Application for ML/AI Engineer",
  greeting: "Dear Hiring Manager,",
  opening: "I am writing to apply for the ML/AI Engineer position. With 2+ years of combined experience in machine learning development and data science, I build reliable AI systems that connect measurable model performance with practical business outcomes.",
  body: "At Zen Meraki, I have delivered credit-risk assessment, NLP automation, classification, and explainable AI workflows using Python, LightGBM, XGBoost, CatBoost, FastAPI, and Streamlit. My BSc in Mathematics gives me a strong foundation in statistics, probability, and analytical problem-solving.\n\nI am particularly interested in this opportunity because it brings together applied machine learning, thoughtful product delivery, and continuous technical learning. I would bring production-minded development, clear communication, and a strong commitment to responsible, measurable AI.",
  closing: "Thank you for your time and consideration. I would welcome the opportunity to discuss how my experience can support your team.",
};

type FieldKey = keyof CoverLetterData;

export function CoverLetterSection() {
  const [letter, setLetter] = useState<CoverLetterData>(initialLetter);
  const [isDownloading, setIsDownloading] = useState(false);
  const [authReady, setAuthReady] = useState(false);
  const [ownerId, setOwnerId] = useState<string | null>(null);
  const [draftLoaded, setDraftLoaded] = useState(false);
  const [draftChanged, setDraftChanged] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [jobDescription, setJobDescription] = useState("");
  const [isDrafting, setIsDrafting] = useState(false);

  useEffect(() => {
    let mounted = true;
    const verifyOwner = async () => {
      const { data } = await supabase.auth.getUser();
      if (!mounted) return;
      const id = data.user?.id === OWNER_ID ? data.user.id : null;
      setOwnerId(id);
      setAuthReady(true);
      if (!id) return;
      const { data: saved, error } = await supabase.from("owner_cover_letter_drafts").select("content").eq("user_id", id).maybeSingle();
      if (!mounted) return;
      if (error) {
        setSaveStatus("error");
        toast.error("Your saved letter could not be loaded.");
      } else {
        if (saved?.content && typeof saved.content === "object" && !Array.isArray(saved.content)) {
          const content = saved.content as Record<string, unknown>;
          const restored = { ...initialLetter };
          (Object.keys(restored) as FieldKey[]).forEach((key) => {
            if (typeof content[key] === "string") restored[key] = content[key];
          });
          setLetter(restored);
        }
        setDraftLoaded(true);
      }
    };
    verifyOwner();
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        setOwnerId(null);
        setLetter(initialLetter);
        setDraftLoaded(false);
        setDraftChanged(false);
        setSaveStatus("idle");
        setAuthReady(true);
      } else {
        verifyOwner();
      }
    });
    return () => {
      mounted = false;
      data.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!ownerId || !draftLoaded || !draftChanged) return;
    setSaveStatus("saving");
    const timer = window.setTimeout(async () => {
      const { error } = await supabase.from("owner_cover_letter_drafts").upsert({
        user_id: ownerId,
        content: letter,
        updated_at: new Date().toISOString(),
      });
      if (error) {
        setSaveStatus("error");
        toast.error("Draft not saved. Please try editing again.");
      } else {
        setSaveStatus("saved");
      }
    }, 700);
    return () => window.clearTimeout(timer);
  }, [letter, ownerId, draftLoaded, draftChanged]);

  const update = (key: FieldKey, value: string) => {
    setLetter((current) => ({ ...current, [key]: value }));
    setDraftChanged(true);
  };

  const signIn = async () => {
    const result = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin });
    if (result.error) toast.error(result.error.message);
  };

  const draftFromJob = async () => {
    if (jobDescription.trim().length < 40) {
      toast.error("Paste a fuller job description before drafting.");
      return;
    }
    setIsDrafting(true);
    try {
      const { data, error } = await supabase.functions.invoke("draft-cover-letter", { body: { jobDescription: jobDescription.trim() } });
      if (error || !data?.draft) throw new Error(data?.error || error?.message || "The draft could not be created.");
      const draft = data.draft as Partial<CoverLetterData>;
      setLetter((current) => ({
        ...current,
        ...Object.fromEntries((["role", "subject", "greeting", "opening", "body", "closing"] as FieldKey[])
          .filter((key) => typeof draft[key] === "string")
          .map((key) => [key, draft[key]])),
      }));
      setDraftChanged(true);
      toast.success("Draft ready to review and personalize.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "AI drafting is unavailable right now.");
    } finally {
      setIsDrafting(false);
    }
  };

  const download = async () => {
    setIsDownloading(true);
    try {
      await downloadApplicationPdf(letter);
      toast.success("Tailored application PDF downloaded");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "The PDF could not be created.");
    } finally {
      setIsDownloading(false);
    }
  };

  const fields: Array<{ key: FieldKey; label: string; placeholder: string }> = [
    { key: "company", label: "Company", placeholder: "Company name" },
    { key: "role", label: "Role", placeholder: "Job title" },
    { key: "hiringManager", label: "Hiring manager", placeholder: "Hiring manager" },
    { key: "location", label: "Company location", placeholder: "City, Country" },
    { key: "date", label: "Date", placeholder: "19 September 2026" },
    { key: "subject", label: "Subject", placeholder: "Application for…" },
  ];

  return (
    <section className="relative overflow-hidden border-y border-border bg-card/35 py-16 md:py-20" aria-labelledby="cover-letter-title">
      <div className="container px-6">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8 max-w-3xl">
          <div className="mb-4 flex items-center gap-2 text-lavender">
            <FilePenLine className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">Application studio</span>
          </div>
          <h2 id="cover-letter-title" className="text-3xl font-display font-bold text-foreground md:text-5xl">Tailor your cover letter.</h2>
          <p className="mt-4 text-muted-foreground">Adapt the letter for each role, then download it before your resume in one PDF.</p>
        </motion.div>

        {!authReady ? (
          <div className="elegant-card flex min-h-56 items-center justify-center p-8 text-center text-muted-foreground">Checking owner access…</div>
        ) : !ownerId || !draftLoaded ? (
          <div className="elegant-card relative overflow-hidden p-8 md:p-12">
            <div className="absolute inset-x-0 top-0 h-1 pastel-spectrum" />
            <div className="flex max-w-2xl flex-col items-start gap-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-md border border-lavender/30 bg-lavender/10 text-lavender"><LockKeyhole /></div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Private application workspace</h3>
                <p className="mt-2 text-muted-foreground">Only Navya can open, edit, and export tailored cover letters. Recruiters and visitors cannot access draft content.</p>
              </div>
               {!ownerId && <Button onClick={signIn} className="gap-2"><LogIn /> Owner sign in</Button>}
               {ownerId && <Button onClick={() => window.location.reload()} variant="outline">Retry loading draft</Button>}
            </div>
          </div>
        ) : (
        <>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-md border border-mint/25 bg-mint/10 px-4 py-3">
           <div className="flex items-center gap-2 text-sm text-mint"><LockKeyhole className="h-4 w-4" /> Private draft {saveStatus === "saving" ? "saving…" : saveStatus === "saved" ? "saved" : saveStatus === "error" ? "not saved" : "ready"}</div>
          <Button size="sm" variant="ghost" onClick={() => supabase.auth.signOut()}><LogOut /> Sign out</Button>
        </div>
        <div className="grid gap-6 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="elegant-card space-y-5 p-5 md:p-7">
             <div className="border-b border-border pb-6">
               <label htmlFor="job-description" className="mb-3 block text-sm font-semibold text-foreground">Job description</label>
               <Textarea id="job-description" className="min-h-40" maxLength={12000} value={jobDescription} onChange={(event) => setJobDescription(event.target.value)} placeholder="Paste the role and requirements here…" />
               <Button type="button" variant="secondary" className="mt-3 gap-2" disabled={isDrafting || jobDescription.trim().length < 40} onClick={draftFromJob}>
                 <WandSparkles className="h-4 w-4" /> {isDrafting ? "Drafting…" : "Draft with AI"}
               </Button>
             </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {fields.map((field) => (
                <label key={field.key} className="space-y-2 text-sm font-medium text-foreground">
                  <span>{field.label}</span>
                  <Input value={letter[field.key]} placeholder={field.placeholder} onChange={(event) => update(field.key, event.target.value)} />
                </label>
              ))}
            </div>
            {(["greeting", "opening", "body", "closing"] as FieldKey[]).map((key) => (
              <label key={key} className="block space-y-2 text-sm font-medium capitalize text-foreground">
                <span>{key}</span>
                <Textarea className={key === "body" ? "min-h-48" : "min-h-24"} value={letter[key]} onChange={(event) => update(key, event.target.value)} />
              </label>
            ))}
            <div className="flex flex-wrap gap-3 pt-2">
              <Button onClick={download} disabled={isDownloading} className="gap-2">
                <Download /> {isDownloading ? "Creating PDF…" : "Download Resume + Cover Letter"}
              </Button>
               <Button type="button" variant="outline" onClick={() => { setLetter(initialLetter); setDraftChanged(true); }} className="gap-2">
                <RotateCcw /> Reset
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-border bg-secondary/70 p-3 md:p-6">
            <article className="application-paper mx-auto aspect-[1/1.414] w-full max-w-[640px] overflow-auto p-7 shadow-2xl md:p-12">
              <header className="mb-8 border-b-4 border-primary pb-5">
                <h3 className="text-2xl font-bold">Navya Venkidesh</h3>
                <p className="application-paper-meta mt-1 text-sm font-semibold">ML/AI Engineer · 2+ Years Experience</p>
                <p className="application-paper-meta mt-3 text-xs leading-5">Thrissur, Kerala, India • navyaa.venkidesh@gmail.com • +91 9746844319</p>
              </header>
              <div className="space-y-4 text-xs leading-5 md:text-sm md:leading-6">
                <p>{letter.date}</p>
                <div><p className="font-bold">{letter.hiringManager || "Hiring Manager"}</p><p>{letter.company || "Company"}</p><p>{letter.location}</p></div>
                <p className="font-bold">{letter.subject}</p>
                <p>{letter.greeting}</p>
                <p>{letter.opening}</p>
                {letter.body.split(/\n+/).filter(Boolean).map((paragraph, index) => <p key={`${paragraph.slice(0, 12)}-${index}`}>{paragraph}</p>)}
                <p>{letter.closing}</p>
                <div className="pt-3"><p>Sincerely,</p><p className="mt-4 font-bold">Navya Venkidesh</p></div>
              </div>
            </article>
          </div>
        </div>
        </>
        )}
      </div>
    </section>
  );
}