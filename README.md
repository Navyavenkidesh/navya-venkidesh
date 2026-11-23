# Navya Venkidesh Portfolio

Portfolio site for Navya Venkidesh, Machine Learning & AI Engineer. Built with Vite, React, TypeScript and Tailwind CSS.

Live site: https://navya-venkidesh.vercel.app

## Run locally

Requires Node.js 22.

```sh
npm ci
npm run dev
```

## Deploy (Vercel or Render)

This is a Vite single-page app. Both hosts install with `npm ci`, build with `npm run build`, and publish the `dist` folder. `vercel.json` and `render.yaml` already contain these settings and route page refreshes to the app.

Add these two public, build-time variables on the host (for every environment):

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

Never add a service-role key or other private credentials. After changing a variable, redeploy so the build picks it up.

The resume and videos are bundled with the app (`src/assets`), so they do not depend on Lovable's asset URLs.

## Sign-in and cover-letter drafting

Owner sign-in and AI cover-letter drafting use the connected Lovable Cloud project. Add the deployed site URL (`https://navya-venkidesh.vercel.app/**`) to the Redirect URLs list in its authentication settings.

## Built with Lovable

Created with [Lovable](https://lovable.dev). Changes pushed to `main` on GitHub sync back into the Lovable project.
