import { Download, ExternalLink, Home, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { RESUME_PDF_FILENAME, RESUME_PDF_PATH } from "@/lib/cover-letter-pdf";
import { ThemeToggle } from "./ThemeToggle";

export function ResumePage() {
  return (
    <div className="min-h-screen bg-background px-4 py-8">
      <div className="mx-auto mb-6 max-w-5xl">
         <div className="flex justify-end"><ThemeToggle /></div>
        <p className="mb-2 text-sm font-semibold uppercase text-primary">Recruiter-ready document</p>
        <h1 className="text-2xl font-bold text-foreground md:text-4xl">Navya Venkidesh — ML/AI Engineer</h1>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">Machine learning experience, selected projects, education, and credentials.</p>
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild className="mt-5 gap-2"><a href={RESUME_PDF_PATH} download={RESUME_PDF_FILENAME}><Download />Download PDF</a></Button>
          <Button asChild variant="outline" className="mt-5 gap-2"><a href={RESUME_PDF_PATH} target="_blank" rel="noreferrer"><Printer />Open print view</a></Button>
          <Button asChild variant="ghost" className="mt-5 gap-2"><Link to="/"><Home />Back to Home</Link></Button>
        </div>
      </div>
      <div className="mx-auto max-w-5xl overflow-hidden rounded-lg border border-border bg-card shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-4 py-3 text-xs text-muted-foreground">
          <span>1-page A4 PDF</span><ExternalLink className="h-4 w-4" />
        </div>
        <iframe title="Navya Venkidesh resume PDF preview" src={`${RESUME_PDF_PATH}#toolbar=0&navpanes=0`} className="h-[75vh] w-full bg-secondary" />
      </div>
    </div>
  );
}
