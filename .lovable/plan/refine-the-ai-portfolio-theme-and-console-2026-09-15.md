# Refine the AI Portfolio Theme and Console

## Goal
Make the portfolio feel more distinctive and recruiter-ready with a restrained pastel-on-dark palette, polished AI motion, and a console that is no longer framed specifically around PDFs.

## Changes
- Rename and rewrite the console as a general AI retrieval assistant while preserving the interactive question-to-answer flow.
- Replace PDF-specific prompts, labels, and simulated output with document-agnostic language.
- Introduce a professional pastel accent system using soft cyan, mint, lavender, and coral against the existing dark foundation.
- Apply the accent roles consistently to key headings, status details, cards, pipeline stages, and interactive states.
- Refine ambient motion into subtle neural-node, data-flow, scan, and glow effects that remain calm and respect reduced-motion preferences.
- Remove disallowed skills from the visible skills list so the portfolio stays aligned with the approved ML stack.
- Validate the main page at desktop and mobile sizes, including the interactive console flow.

## Technical Details
- Extend semantic color tokens in the global theme rather than hardcoding colors in page components.
- Update the console data and copy without adding a backend; it remains an interactive portfolio demonstration.
- Reuse Framer Motion and existing animation components, simplifying decorative effects where needed for a more professional presentation.
