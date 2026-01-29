This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Project Structure

```text
.
├── app/
│   ├── fonts/
│   │   └── Satoshi-Variable.woff2
│   ├── layout.tsx         # Root layout with font config
│   └── globals.css        # Tailwind v4 theme & utilities
│   └── page.tsx           # index page
├── public/
│   └── images/            # images assets
│   └── fonts/             # fonts assets
├── components/
│   └── common/            # re-usable components
│   └── sections/          # contains all the sections components
│   └── Navbar.tsx         # navbar component
├── utils/
│   └── index.ts           # contains utility functions
│   └── iterables.ts       # contains iterable contents
│   └── types.ts           # contains exportable types for TS typing
└── package.json
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
