# Navya Venkidesh Portfolio

## Deploy to Render or Vercel

This is a Vite single-page app. Both hosts use Node.js 22, install with `npm ci`, build with `npm run build`, and publish the `dist` folder. The checked-in `render.yaml` and `vercel.json` configure these settings and route page refreshes to the app.

Before deploying, add the same two **public** build-time variables to both hosts:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

Use the values from this project's local `.env` and keep them aligned with the connected Lovable Cloud project. These are browser-visible public settings; do not add a service-role key or other private credentials. The resume and portfolio videos are bundled with the app, so they do not depend on Lovable's asset URLs.

If using owner sign-in or AI cover-letter drafting on a custom deployment, add that site's URL to the Lovable Cloud authentication redirect allowlist. Those features still use the connected Lovable Cloud project.

### Render

Connect this repository as a **Static Site**. `render.yaml` sets the install/build commands, `dist` output, and single-page-app fallback. Add the two variables above to the service's environment settings.

### Vercel

Import this repository as a Vite project. `vercel.json` pins `npm ci`, `npm run build`, the `dist` output directory, and single-page-app fallback. Add the same two variables for every environment you deploy.


import React from 'react'
import { motion } from 'framer-motion'

// Lovable Portfolio - Single-file React component
// TailwindCSS classes used (no imports required here). Default export at bottom.
// This file is meant to be dropped into a React + Tailwind app (e.g. Create React App, Vite) as a top-level page/component.

const projects = [
  {
    id: 'universal-classifier',
    title: 'Universal Category Classifier',
    subtitle: 'FastAPI + Embeddings + Rule Engine',
    description:
      'Production-ready classification API with hybrid rule + embedding pipeline, confidence scoring, and explainability hooks.',
    tags: ['FastAPI', 'Embeddings', 'Scoring', 'Docker'],
    demo: '#',
    repo: '#'
  },
  {
    id: 'gesture-controller',
    title: 'Gesture-Controlled Game Interface',
    subtitle: 'MediaPipe + OpenCV + Keyboard Controller',
    description:
      'Real-time gesture detection (left/right/jump/slide) with debugging overlay and screen recording for demo playback.',
    tags: ['MediaPipe', 'OpenCV', 'Realtime'],
    demo: '#',
    repo: '#'
  },
  {
    id: 'ai-text-tools',
    title: 'AI Text Utilities Suite',
    subtitle: 'Summarizer • Humanizer • Tone • Detector',
    description:
      'Modular LLM utilities exposing endpoints for summarization, tone transfer, and plagiarism or AI detection.',
    tags: ['LLM', 'RAG', 'APIs'],
    demo: '#',
    repo: '#'
  }
]

const miniProjects = [
  { title: 'Resume Analyzer', desc: 'Extracts skills & matches to job roles', tag: 'NLP' },
  { title: 'Document Auto-Tagger', desc: 'PDF→tags pipeline using embeddings', tag: 'Search' },
  { title: 'Price Predictor', desc: 'Interactive regression demo + visualization', tag: 'Regression' },
  { title: 'Fake News Classifier', desc: 'NLP binary classifier + explainability', tag: 'NLP' }
]

function Badge({ children }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 mr-2 mt-2">
      {children}
    </span>
  )
}

function ProjectCard({ p }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-gray-800"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">{p.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{p.subtitle}</p>
        </div>
        <div className="text-xs text-gray-400">Project</div>
      </div>

      <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">{p.description}</p>

      <div className="mt-4 flex flex-wrap">
        {p.tags.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        <a
          href={p.demo}
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-500"
        >
          Live Demo
        </a>
        <a
          href={p.repo}
          className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          Code
        </a>
      </div>
    </motion.div>
  )
}

export default function LovablePortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-black text-gray-900 dark:text-gray-100">
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-full w-12 h-12 bg-indigo-600 flex items-center justify-center text-white font-bold">NM</div>
          <div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Navya Venkidesh</div>
            <div className="text-lg font-semibold">ML Engineer • AI • Data Scientist</div>
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <a href="#projects" className="text-sm hover:underline">Projects</a>
          <a href="#case-studies" className="text-sm hover:underline">Case Studies</a>
          <a href="#about" className="text-sm hover:underline">About</a>
          <a href="#contact" className="px-3 py-2 bg-indigo-600 rounded-md text-white text-sm">Contact</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-20">
        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              I build intelligent systems that solve real problems.
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              End-to-end ML & AI: production APIs, CV systems, LLM-based utilities, and clean data science case studies. Fast prototypes — production-ready when needed.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <a href="#projects" className="px-5 py-3 bg-indigo-600 text-white rounded-lg">View Projects</a>
              <a href="#contact" className="px-5 py-3 border rounded-lg">Hire / Collaborate</a>
            </div>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm text-center">
                <div className="text-sm font-semibold">ML Systems</div>
                <div className="text-xs text-gray-500">Pipelines • CI/CD</div>
              </div>
              <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm text-center">
                <div className="text-sm font-semibold">Computer Vision</div>
                <div className="text-xs text-gray-500">MediaPipe • OpenCV</div>
              </div>
              <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm text-center">
                <div className="text-sm font-semibold">NLP & LLMs</div>
                <div className="text-xs text-gray-500">RAG • Fine-tuning</div>
              </div>
              <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm text-center">
                <div className="text-sm font-semibold">Data Science</div>
                <div className="text-xs text-gray-500">EDA • Explainability</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg"
          >
            <div className="rounded-md overflow-hidden">
              <img src="https://images.unsplash.com/photo-1542834369-f10ebf06d3cb?auto=format&fit=crop&w=1200&q=60" alt="project screenshot" className="w-full h-56 object-cover"/>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-400">Featured</div>
                  <div className="text-lg font-semibold">Universal Category Classifier</div>
                </div>
                <div className="text-xs text-gray-500">Production</div>
              </div>

              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">Hybrid pipeline combining rule-based filters and vector embeddings for robust classification across variable inputs.</p>

              <div className="mt-4 flex gap-3">
                <a href="#" className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm">Live Demo</a>
                <a href="#" className="px-4 py-2 border rounded-md text-sm">View Code</a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Skills */}
        <section id="about" className="mt-12">
          <h2 className="text-2xl font-semibold">Skills & Tools</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">A snapshot of core competencies and tools I use regularly.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
              <h3 className="font-semibold">Machine Learning</h3>
              <ul className="mt-3 text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <li>Regression • Classification • Clustering</li>
                <li>Feature engineering • Model optimization</li>
                <li>SHAP / LIME explainability</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
              <h3 className="font-semibold">Deep Learning & CV</h3>
              <ul className="mt-3 text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <li>CNNs, transfer learning</li>
                <li>Object detection • MediaPipe</li>
                <li>PyTorch / TensorFlow</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
              <h3 className="font-semibold">MLOps & Engineering</h3>
              <ul className="mt-3 text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <li>Docker • CI/CD • Monitoring</li>
                <li>FastAPI • Render • Deta</li>
                <li>Embeddings • Vector DBs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-12">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Selected Projects</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">End-to-end projects with code, demos and write-ups.</p>
            </div>
            <div className="text-sm text-gray-500">Total: {projects.length}</div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold">Mini Projects & Prototypes</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {miniProjects.map((m) => (
                <div key={m.title} className="p-4 rounded-lg bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                  <div className="text-sm font-semibold">{m.title}</div>
                  <div className="text-xs text-gray-500 mt-1">{m.tag}</div>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section id="case-studies" className="mt-12">
          <h2 className="text-2xl font-semibold">Case Studies</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Deep dives presenting the problem, approach, experiments, results and next steps.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
              <h3 className="font-semibold">Universal Classifier — Design & Results</h3>
              <ul className="text-sm mt-3 space-y-2 text-gray-600 dark:text-gray-300">
                <li><strong>Problem:</strong> Classify user inputs into canonical categories with high precision and recall.</li>
                <li><strong>Dataset:</strong> Mixed labelled + heuristics + synthetic augmentation.</li>
                <li><strong>Approach:</strong> Rule-engine → embedding match → fallback classifier.</li>
                <li><strong>Results:</strong> Significant improvement in edge-case coverage and confidence calibration.</li>
                <li><strong>Tools:</strong> FastAPI, scikit-learn, sentence-transformers, Docker</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
              <h3 className="font-semibold">Gesture Controller — Implementation Notes</h3>
              <ul className="text-sm mt-3 space-y-2 text-gray-600 dark:text-gray-300">
                <li><strong>Problem:</strong> Reliable gesture recognition for game control in diverse lighting.</li>
                <li><strong>Approach:</strong> MediaPipe hand landmarks + temporal smoothing + swipe detection.</li>
                <li><strong>Feature:</strong> Screen recording for labeled training data and live debug overlay.</li>
                <li><strong>Next:</strong> Add RL-based action optimization for auto-play experiments.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* MLOps Snapshot */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">MLOps Snapshot</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Key engineering choices I apply to keep ML systems healthy in production.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
              <h4 className="font-semibold">CI / CD</h4>
              <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">Automated tests, model versioning, and deployment pipelines using GitHub Actions.</p>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
              <h4 className="font-semibold">Monitoring</h4>
              <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">Latency, correctness, and data-drift alerts plus periodic model retraining triggers.</p>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
              <h4 className="font-semibold">Cost & Scale</h4>
              <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">Lightweight microservices on Render / Deta; caching & batching for throughput.</p>
            </div>
          </div>
        </section>

        {/* Performance Benchmarks */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Performance Benchmarks</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-white dark:bg-gray-900 border">
              <div className="text-sm font-semibold">API Latency</div>
              <div className="mt-2 text-xs text-gray-500">Median: 110ms — Optimized from 420ms via batching & caching</div>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-gray-900 border">
              <div className="text-sm font-semibold">Model Size</div>
              <div className="mt-2 text-xs text-gray-500">Optimized model: 80MB (int8) — suitable for edge deployment</div>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-gray-900 border">
              <div className="text-sm font-semibold">Inference Cost</div>
              <div className="mt-2 text-xs text-gray-500">~$0.003 per request after amortization</div>
            </div>
          </div>
        </section>

        {/* Story / Blog Teaser */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Featured Story: Building the Universal Classifier</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">A concise narrative walking through my problem solving, major roadblocks, and the final outcome.</p>

          <div className="mt-4 p-6 rounded-2xl bg-white dark:bg-gray-900 border">
            <ol className="list-decimal pl-5 text-sm text-gray-600 dark:text-gray-300 space-y-2">
              <li>Problem scoping and constraints — why a hybrid approach is needed.</li>
              <li>Prototyping rules and validating edge-case coverage with unit tests.</li>
              <li>Integrating embeddings for semantic matches and fallback classifiers for rare cases.</li>
              <li>Deploying on Render with CI pipelines and integration tests.</li>
            </ol>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-12">
          <h2 className="text-2xl font-semibold">Contact / Work with me</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Open to freelance projects, collaborations, and interviews.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border">
              <h3 className="font-semibold">Get in touch</h3>
              <form className="mt-4 space-y-4" action="#" method="POST">
                <input placeholder="Your name" className="w-full p-3 rounded-md border bg-transparent" />
                <input placeholder="Email" className="w-full p-3 rounded-md border bg-transparent" />
                <textarea placeholder="Message" className="w-full p-3 rounded-md border bg-transparent h-28" />
                <div className="flex items-center gap-3">
                  <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md">Send</button>
                  <a href="#" className="text-sm text-gray-500">Or email: hello@yourdomain.com</a>
                </div>
              </form>
            </div>

            <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border">
              <h3 className="font-semibold">Downloadables</h3>
              <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">Resume, model weights, demo scripts and API collection.</p>
              <div className="mt-4 flex gap-3">
                <a className="px-4 py-2 bg-gray-100 rounded-md border">Resume (PDF)</a>
                <a className="px-4 py-2 bg-gray-100 rounded-md border">Model Bundle</a>
              </div>

              <h4 className="mt-6 font-semibold">Social</h4>
              <div className="mt-3 flex gap-3">
                <a className="p-3 rounded-md border text-sm">GitHub</a>
                <a className="p-3 rounded-md border text-sm">LinkedIn</a>
                <a className="p-3 rounded-md border text-sm">Kaggle</a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 py-8 text-center text-sm text-gray-500">
          <div>© {new Date().getFullYear()} Navya Venkidesh — ML Engineer • AI • Data Science</div>
          <div className="mt-2">Built with ❤️ • Tailwind • Framer Motion</div>
        </footer>
      </main>
    </div>
  )
}
I need more creative and beatifull portfolio for me

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/bae5f8f2-d8d7-409d-b0f8-543162fe7877).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
