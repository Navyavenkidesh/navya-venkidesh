import { Radio } from "lucide-react";
import { PageIntro } from "@/components/portfolio/PageIntro";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { CoverLetterSection } from "@/components/portfolio/CoverLetterSection";

export default function Contact() {
  return (
    <>
      <PageIntro index="04" eyebrow="Open channel" title="Let’s build intelligent systems that matter." description="Open to machine learning opportunities and conversations about applied AI, NLP, and risk systems." icon={Radio} />
      <CoverLetterSection />
      <ContactSection />
    </>
  );
}