# DAVIDJAMES Portfolio Website

A professional, multi-page portfolio for full-stack developer **DAVIDJAMES**, built with HTML, CSS, and JavaScript.

## Pages

| Page | File |
|------|------|
| Home | `index.html` |
| About | `about.html` |
| Portfolio | `portfolio.html` |
| Testimonials | `testimonials.html` |
| Blog | `blog.html` |
| Contact | `contact.html` |
| Resume / CV | `resume.html` (print to PDF) |

## Features

- Yellow & green color theme with light/dark mode toggle
- Fully responsive (desktop & mobile)
- Custom cursor effect (desktop only)
- Smooth scroll, hover effects, scroll reveal animations
- SEO-friendly semantic HTML and meta descriptions
- Contact form with client-side validation

## Local preview

```bash
# From project root — Python
python -m http.server 8080

# Or Node.js
npx serve .
```

Open `http://localhost:8080` in your browser.

## Deployment

Upload all files to any static host:

- **Netlify** — drag & drop the folder
- **Vercel** — import repo, no build step
- **GitHub Pages** — push to `gh-pages` branch
- **Cloudflare Pages** — connect repository

## Customize

1. Replace `davidjames@email.com` and social URLs across HTML files
2. Update project demo/GitHub links in `portfolio.html`
3. Add a real PDF to `assets/` and link from `resume.html` if preferred
4. Replace avatar placeholders with your photo in `assets/images/`

## Project structure

```
david-website/
├── index.html
├── about.html
├── portfolio.html
├── testimonials.html
├── blog.html
├── contact.html
├── resume.html
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── images/
│       ├── profile.png
│       ├── projects/   (SVG thumbnails)
│       └── skills/     (SVG technology icons)
└── README.md
```
