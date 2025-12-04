# Portfolio (React + TypeScript + Vite)

This repository contains a personal portfolio built with React, TypeScript and Vite.

## Deployment

There are multiple ways to deploy this site. Two convenient options are provided below.

1) GitHub Pages (recommended)

- A GitHub Actions workflow has been added at `.github/workflows/deploy.yml`.
- On every push to `main` the action will install dependencies, run `npm run build`, and deploy the produced `dist/` folder to the `gh-pages` branch using the default `GITHUB_TOKEN`.

2) Surge (one-off)

- The project includes an `npm run deploy` script which runs `npm run build` and then `npx surge dist`.
- To use Surge you can install it globally (`npm i -g surge`) or allow the `npx` command to install it interactively.

Other hosts (Netlify, Vercel)

- You can also connect this repository to Netlify or Vercel and set the build command to `npm run build` and the publish directory to `dist`.

## Local development

Install dependencies and run the dev server:

```bash
npm ci
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```
