# Pacific Bridge

Signals and field notes bridging U.S. startups and Taiwanese public companies.

This repository supports a short, executive-level talk and a simple, scrollable website.
It is **not** a fund, not investment advice, and not a product.

## What this is
- A 15-minute narrative on the current U.S. startup / VC landscape
- A practical framing for corporate participation:
  - technology radar
  - second growth curve
  - partnership and M&A options

## What this is not
- Not a pitch deck
- Not venture marketing
- Not trend chasing

## Structure
- `/client` — frontend / presentation site
- `/server` — backend (if applicable)
- `/shared` — shared types/utilities
- `/notes` — speaker notes and references (to be added)

## Development

### Prerequisites
- Node.js 20+ (see `.nvmrc`)
- pnpm 10.4.1+ (pinned in `package.json`)

### Local Development
```bash
pnpm install
pnpm dev
```
Visit http://localhost:3000 in your browser.

### Build Locally
```bash
pnpm build        # Builds frontend + backend (outputs to dist/)
pnpm build:pages  # Builds frontend only for Cloudflare Pages (outputs to dist/)
pnpm check        # Type-check with TypeScript
```

## Deploy to Cloudflare Pages

This frontend is a single-page application (SPA) built with React and Vite. It can be deployed to Cloudflare Pages as a static site.

### Cloudflare Pages Dashboard Settings

Configure your Cloudflare Pages project with these exact settings:

| Setting | Value |
|---------|-------|
| **Framework preset** | None |
| **Root directory** | `.` (repo root) |
| **Build command** | `pnpm build:pages` |
| **Build output directory** | `dist` |
| **Node.js version** | 20 |

### Why These Settings?

- **Root directory `.`**: The repo root contains both `package.json` and the source files needed for the build.
- **Build command `pnpm build:pages`**: Runs Vite in "pages" mode, which outputs directly to `dist/` (not `dist/public/`). This keeps the Pages build lean—frontend only, no backend artifacts.
- **Output directory `dist`**: Vite outputs `index.html` and assets to the root of `dist/` when built in "pages" mode.
- **Node.js 20**: Specified in `.nvmrc` and aligns with Cloudflare Pages' default LTS support.

### SPA Routing (Client-Side)

The `public/_redirects` file is automatically deployed with your site. It ensures that all unmatched routes (e.g., `/trends`, `/opportunities`) redirect to `index.html` with a 200 status. This allows React Router (via wouter) to handle client-side routing without server configuration.

### Environment Variables

If needed, create a `.env.production` file or set environment variables in the Cloudflare Pages dashboard under **Settings > Environment variables**.

### Deployments

Once configured, every push to the default branch (`main`) will trigger a new build and deployment. You can monitor builds in the Cloudflare Pages dashboard.

