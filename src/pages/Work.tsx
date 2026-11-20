import { Cpu } from "lucide-react";
import { PageIntro } from "@/components/portfolio/PageIntro";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { RagConsoleSection } from "@/components/portfolio/RagConsoleSection";
import { CaseStudiesSection } from "@/components/portfolio/CaseStudiesSection";
import { MLOpsSection } from "@/components/portfolio/MLOpsSection";

export default function Work() {
  return (
    <>
      <PageIntro index="02" eyebrow="Selected work" title="AI systems built for measurable outcomes." description="Production-minded machine learning, retrieval intelligence, explainability, and deployment—shown through working systems and documented results." icon={Cpu} />
      <ProjectsSection />
      <RagConsoleSection />
      <CaseStudiesSection />
      <MLOpsSection />
    </>
  );
}