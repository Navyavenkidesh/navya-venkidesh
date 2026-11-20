# Branded resume and tailored cover letter

## Goal
Give recruiters a clean, ready-to-submit PDF with no browser-added branding, while letting Navya tailor a cover letter for each application and export it together with the resume.

## Portfolio changes
- Add a shared **Download PDF** action to the Home, Work, Profile, and Contact pages so it is always easy to reach.
- Add a focused **Cover Letter** section to the Contact page with editable company, role, hiring manager, location, date, subject, opening, body, and closing fields.
- Show a live, professionally formatted letter preview and provide a **Download Resume + Cover Letter** action.
- Keep entered letter content in the current browser so page refreshes do not erase an in-progress application.

## PDF deliverables
- Generate a reviewed static A4 resume named `Navya_Venkidesh_Machine_Learning_Developer_Resume.pdf`.
- Use the title **“Navya Venkidesh — Machine Learning Developer”**, ATS-readable selectable text, working links, restrained navy/pastel branding, and controlled page breaks.
- Set PDF title, author, subject, and keyword metadata.
- Generate the tailored cover letter as an additional first page and merge it with the reviewed resume for the combined download.
- Produce PDFs directly in the app rather than through the browser print dialog, preventing browser URLs, dates, page numbers, headers, and injected Lovable branding.

## Verification
- Render and inspect every page of the static resume and a sample combined letter/resume PDF for clipping, overlap, font issues, links, metadata, page order, and unwanted branding.
- Verify the four page-level download actions and the cover-letter editor on desktop and mobile.
- Verify the direct filenames and run the project checks.
