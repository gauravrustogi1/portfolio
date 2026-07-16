# gauravrustogi.dev — professional profile site

A single-page, lightweight, SEO-optimised professional profile. No frameworks, no build step — pure HTML/CSS/JS. Upload the folder contents to any static host and it works.

## Files

| File | Purpose |
|------|---------|
| `index.html` | **Live by default.** Option A — full résumé mirrored (every role, bullet, skill). Maximum SEO keyword coverage. |
| `indexB.html` | Option B — curated/condensed version. Comparison alternative. To switch, rename `index.html` → `indexA.html` and `indexB.html` → `index.html`. |
| `styles.css` | All styling (shared by both pages). |
| `script.js` | Contact-form submit + footer year (shared by both pages). |
| `gaurav-rustogi.jpg` | Optimised profile photo (~15 KB). |
| `Gaurav-Rustogi-CV.pdf` | Downloadable résumé. **Sanitised** — no phone/email, LinkedIn only. |
| `favicon.svg` | GR monogram browser-tab icon. |
| `robots.txt` / `sitemap.xml` | SEO crawl helpers. |

## Contact form

Wired to Formspree endpoint `mrevvoyj`. Submissions land in the inbox registered with that Formspree form. No email address appears anywhere in the page source. A honeypot field silently blocks bot spam.

> First real submission: Formspree may show a one-time confirmation step in your Formspree dashboard/email. Submit the form once yourself after going live to activate it.

## Privacy

Neither the HTML nor the PDF contains your phone number or email. The only contact paths are the form, LinkedIn, and GitHub.

## Before you go live — update these absolute URLs

In **both** `index.html` and `indexB.html`, the SEO meta tags and structured data assume the final domain is `https://gauravrustogi.dev/`. If that's correct, nothing to change. If the path differs, update the `og:url`, `og:image`, `twitter:image`, `canonical`, and JSON-LD `url`/`image` values — plus `robots.txt` and `sitemap.xml`.

## Deploy

Upload all files to your host's web root so `index.html` is served at the domain root. Any static host works (Cloudflare Pages, Netlify, GitHub Pages, Vercel, or a plain server's public folder).
