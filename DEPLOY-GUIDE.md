# Deploy DAVIDJAMES Portfolio — GitHub + Vercel

Step-by-step guide for Windows. Your project folder:

`C:\Users\Adebanjo\Desktop\david-website`

---

## Part 1 — Install Git (required first)

Git is **not installed** on your PC yet. Install it once:

1. Go to **[https://git-scm.com/download/win](https://git-scm.com/download/win)**
2. Download and run the installer
3. Click **Next** through the defaults (keep “Git from the command line”)
4. Finish installation
5. **Close and reopen** PowerShell or Cursor terminal

Check it works:

```powershell
git --version
```

You should see something like `git version 2.x.x`.

---

## Part 2 — Create a GitHub account & repository

### A. GitHub account

1. Go to **[https://github.com](https://github.com)**
2. Sign up (free) if you don’t have an account

### B. Create a new repository

1. Click the **+** icon (top right) → **New repository**
2. Fill in:
   - **Repository name:** `david-website` (or any name you like)
   - **Description:** `DAVIDJAMES portfolio website`
   - **Public** (recommended for free Vercel)
   - **Do NOT** check “Add a README” (you already have files)
3. Click **Create repository**
4. Keep the page open — you’ll need the repo URL, e.g.  
   `https://github.com/YOUR_USERNAME/david-website.git`

---

## Part 3 — Push your project to GitHub

Open **PowerShell** or **Terminal** in Cursor, then run these commands **one block at a time**.

### Step 1: Go to your project folder

```powershell
cd "C:\Users\Adebanjo\Desktop\david-website"
```

### Step 2: Initialize Git and make the first commit

```powershell
git init
git add .
git commit -m "Initial commit: DAVIDJAMES portfolio website"
```

### Step 3: Connect to GitHub and push

Replace `YOUR_USERNAME` and `david-website` with your real GitHub username and repo name:

```powershell
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/david-website.git
git push -u origin main
```

**First time pushing:** GitHub will ask you to sign in:

- A browser window may open — log in to GitHub and authorize, **or**
- Use a **Personal Access Token** as the password:
  1. GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
  2. **Generate new token** → check **repo** → Generate
  3. Copy the token and paste it when Git asks for a **password** (username = your GitHub username)

### Step 4: Confirm on GitHub

Refresh your repository page — you should see all files (`index.html`, `assets/`, etc.).

---

## Part 4 — Deploy on Vercel (free)

### A. Sign up / log in to Vercel

1. Go to **[https://vercel.com](https://vercel.com)**
2. Click **Sign Up** → choose **Continue with GitHub**
3. Authorize Vercel to access your GitHub account

### B. Import your project

1. On the Vercel dashboard, click **Add New…** → **Project**
2. Find your repo **`david-website`** (or the name you used) → click **Import**
3. **Configure Project** (important for static HTML sites):

   | Setting | Value |
   |---------|--------|
   | **Framework Preset** | `Other` |
   | **Root Directory** | `./` (leave default) |
   | **Build Command** | leave **empty** |
   | **Output Directory** | leave **empty** |
   | **Install Command** | leave **empty** |

4. Click **Deploy**

### C. Wait ~1 minute

Vercel will build and deploy. When done you get a live URL like:

`https://david-website-xxxxx.vercel.app`

Open that link — your portfolio is live.

### D. Custom domain (optional, later)

Vercel → your project → **Settings** → **Domains** → add your own domain if you have one.

---

## Part 5 — Update the site after changes

Whenever you edit files locally:

```powershell
cd "C:\Users\Adebanjo\Desktop\david-website"
git add .
git commit -m "Describe what you changed"
git push
```

Vercel **automatically redeploys** after each push to `main` (usually within 1–2 minutes).

---

## Part 6 — Web3Forms on the live site

Your contact form will work better on Vercel than opening `file://` locally.

1. In **Web3Forms dashboard**, add your Vercel URL to allowed domains if required
2. When creating the form, for **Domain** you can use:  
   `your-site.vercel.app/contact.html`  
   or your custom domain later
3. Your access key is already in `assets/js/contact-config.js`

Test the contact form on the **live Vercel URL**, then check Gmail.

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| `git is not recognized` | Install Git (Part 1) and restart terminal |
| `git push` rejected / auth failed | Use GitHub login in browser or Personal Access Token |
| Vercel shows 404 on pages | Ensure **Build** and **Output** are empty; Framework = **Other** |
| Contact form fails on Vercel | Check Web3Forms domain settings; test in browser console (F12) |
| Large files won’t push | GitHub limit 100MB per file; your project is small — should be fine |

---

## Easier option: GitHub Desktop (no commands)

If you prefer a visual app:

1. Install **[GitHub Desktop](https://desktop.github.com/)**
2. **File → Add local repository** → choose `C:\Users\Adebanjo\Desktop\david-website`
3. **Publish repository** to GitHub
4. Then connect that repo in Vercel (Part 4)

---

## Quick checklist

- [ ] Git installed (`git --version` works)
- [ ] GitHub repo created
- [ ] `git push` succeeded — files visible on GitHub
- [ ] Vercel project imported from GitHub
- [ ] Build/Output commands left empty
- [ ] Live URL opens `index.html`
- [ ] Contact form tested on live URL

---

**Your live site URL** will appear on the Vercel dashboard after deploy. Share that link on LinkedIn, resume, and business cards.
