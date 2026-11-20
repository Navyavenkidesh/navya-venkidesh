import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_PDF_FILENAME, RESUME_PDF_PATH } from "@/lib/cover-letter-pdf";

export function ResumeDownloadAction() {
  return (
    <div className="fixed bottom-5 right-5 z-40 print:hidden md:bottom-7 md:right-7">
      <Button asChild className="h-11 border border-primary/30 shadow-lg shadow-primary/10">
        <a href={RESUME_PDF_PATH} download={RESUME_PDF_FILENAME} aria-label="Download resume PDF">
          <Download />
          <span>Download PDF</span>
        </a>
      </Button>
    </div>
  );
}