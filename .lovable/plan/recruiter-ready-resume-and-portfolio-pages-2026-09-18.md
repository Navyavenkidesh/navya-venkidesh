# Recruiter-ready resume and portfolio pages

## Goal
Give recruiters a polished portfolio they can browse by focused page, plus a ready-to-submit resume PDF that downloads directly without browser headers, page numbers, or platform branding.

## Portfolio experience
- Replace the single long scrolling homepage with four focused views:
  - **Home** — introduction, professional positioning, and selected highlights.
  - **Work** — projects, interactive AI console, case studies, and MLOps work.
  - **Profile** — experience, skills, education, and certifications.
  - **Contact** — a concise recruiter contact experience.
- Add a persistent desktop navigation rail and a compact mobile navigation bar.
- Use animated page transitions, section reveal sequences, pastel data streams, and restrained AI motion so each view feels distinct without becoming distracting.
- Keep the current professional dark/pastel design system, all existing verified content, and the separate resume view.

## Resume download
- Use the title **“Navya Venkidesh — Machine Learning Developer”** in the resume and PDF metadata.
- Create a clean branded A4 PDF with subtle navy and pastel accents, ATS-readable typography, selectable text, working links, and controlled page breaks.
- Download the prepared PDF directly from the resume page instead of opening the browser print dialog. This guarantees no browser URL, date, page numbers, headers, or Lovable branding.
- Keep a print option only as a secondary action, with print-safe styling.
- Name the file `Navya_Venkidesh_Machine_Learning_Developer_Resume.pdf`.

## Technical details
- Introduce shared portfolio layout and page-transition components, then add `/work`, `/profile`, and `/contact` routes.
- Recompose the existing section components across those routes rather than duplicating their content.
- Update all navigation links and remove the scroll-position dependency from global navigation.
- Generate the PDF as a static public asset so every recruiter receives the same reviewed document.
- Set PDF title, author, subject, and keywords metadata.

## Verification
- Inspect every generated PDF page as an image for clipping, overlap, font issues, branding, page numbers, and browser headers.
- Verify direct download filename and PDF metadata.
- Test every route, navigation state, transition, and resume action on desktop and mobile widths.
