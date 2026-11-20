Keep the user's exact resume as an asset pointer shared by the preview, direct downloads, and merged applications; this prevents alternate resume versions from drifting.
Only show project demo and repository actions when a real destination is provided; never invent links for resume-only projects.
Use one app-wide next-themes provider with class-based semantic color tokens and persisted appearance selection so all pages share the same theme.
Keep document previews on semantic paper tokens independent of the app theme, and use full-opacity text and the input token for control outlines to preserve contrast.
Use the app-wide MotionConfig reduced-motion preference and guard continuous section animations so motion remains accessible.
Mount the cinematic opening intro in PortfolioLayout only on initial home entry, once per browser session, and bypass it for reduced motion or direct inner-page visits so navigation stays immediate; use a shared video asset pointer and semantic cinema tokens to keep footage and typography consistent across themes.
Keep the npm lockfile synchronized with package.json and pin the Node major version so clean external-host installs are reproducible.
Bundle portfolio media and the exact resume as Vite-managed local assets so Lovable, Render, and Vercel serve identical files.