import { Orbit } from "lucide-react";
import { PageIntro } from "@/components/portfolio/PageIntro";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { EducationSection } from "@/components/portfolio/EducationSection";
import { CertificationsSection } from "@/components/portfolio/CertificationsSection";

export default function Profile() {
  return (
    <>
      <PageIntro index="03" eyebrow="Professional profile" title="Mathematical foundations. Production AI practice." description="Two-plus years across machine learning development and data science, grounded in a Mathematics degree and shaped by hands-on delivery." icon={Orbit} />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <CertificationsSection />
    </>
  );
}