# Pharmacy.online

A multi-page React + Vite + Tailwind CSS pharmacy site, with real client-side
routing (`react-router-dom`) so the whole thing is **one project** you can
push to GitHub and deploy on Netlify.

## Pages

| Route         | Page                          |
|---------------|-------------------------------|
| `/`           | Medicines (category listing)  |
| `/license`    | Our License                   |
| `/contacts`   | Contacts                      |
| `/product`    | Product detail (Creon 10000)  |
| `/account`    | My Account                    |
| `/cart`       | Cart                          |
| `/favorites`  | Favorites                     |
| `/article`    | Health blog article           |
| `/reviews`    | Reviews about us               |
| `/delivery`   | Delivery & pickup               |
| `/about`      | About company                   |
| `/payment`    | Payment                         |

Header (logo, cart icon, Favorites, My Account, category menu) and Footer
links are already wired up with real `<Link>` navigation between these
pages — clicking around the site actually moves between routes.

## Local setup

```bash
npm install
npm run dev
```

## Project structure

```
src/
  layouts/
    MainLayout.jsx       Header + TagsBar + <Outlet /> + Footer (shared shell)
  pages/
    MedicinesPage.jsx
    LicensePage.jsx
    ContactsPage.jsx
    ProductPage.jsx
    AccountPage.jsx
    CartPage.jsx
    FavoritesPage.jsx
  components/             All the section components used by the pages above
  App.jsx                 Route definitions only
  main.jsx
```

Each page file only contains the content unique to that page — Header,
TagsBar, Footer, and the scroll-to-top button live once in `MainLayout.jsx`
and wrap every page automatically.

## Deploying — GitHub + Netlify

**1. Push to GitHub**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-empty-github-repo-url>
git push -u origin main
```

(`node_modules` and `dist` are already excluded via `.gitignore` — don't
remove that, GitHub doesn't need them and Netlify rebuilds everything
itself.)

**2. Deploy on Netlify**

- Go to Netlify → "Add new site" → "Import an existing project" → pick your
  GitHub repo.
- Build settings (Netlify usually detects these automatically from
  `netlify.toml`, but in case it asks):
  - **Build command:** `npm run build`
  - **Publish directory:** `dist`
- Click Deploy.

**Why pages didn't work before:** this is a single-page app — without a
redirect rule, refreshing a URL like `/cart` directly makes Netlify look
for a real `/cart` folder and 404. The included `netlify.toml` and
`public/_redirects` files fix this by redirecting all paths back to
`index.html` so React Router can take over.

## Replacing placeholder images/icons

All images under `src/assets/` and `public/` are generated placeholders
(solid color boxes) so the app runs without errors. Drop your real Figma
exports into the same folders using the same file names — nothing else
needs to change. See the in-repo folders for exact names:

```
src/assets/images/   src/assets/icons/
public/products/     public/blog/         public/bestsellers/
public/product-detail/   public/license-1.png   public/license-2.png
```
