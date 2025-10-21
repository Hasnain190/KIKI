# Creator Landing — Next.js + TypeScript + Tailwind

This is a starter landing site for a digital content creator. It uses Next.js 15 (app router), TypeScript and TailwindCSS. The repo includes a home page (hero, gallery, stats), about page, and contact page with a simple contact API route.

Setup (Windows bash):

```bash
# install
npm install

# start dev server
npm run dev
```

Notes:

- Add real images into `public/images/*.jpg` to replace placeholder files.
- The contact API endpoint at `/api/contact` echoes the payload. Hook it up to an email or database in production.
