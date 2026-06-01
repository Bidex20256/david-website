# Contact Form → Gmail Setup

Your contact form uses **Web3Forms** (free) to forward messages to your Gmail inbox.  
HTML alone cannot send email — this service handles delivery for static websites.

---

## Step-by-step (about 5 minutes)

### 1. Create a Web3Forms account

1. Open **[https://web3forms.com](https://web3forms.com)**
2. Enter **your Gmail address** (the inbox where you want messages)
3. Click ****
4. Check your Gmail **Inbox** and **Spam** for a verification email from Web3Forms
5. Click the verification link in that email

### 2. Copy your Access Key

1. After verifying, go to **[https://web3forms.com/#my-account](https://web3forms.com/#my-account)** (or the dashboard)
2. Copy your **Access Key** (long string of letters/numbers)

### 3. Paste the key into your website

1. Open this file in your project:

   `assets/js/contact-config.js`

2. Replace `YOUR_ACCESS_KEY_HERE` with your real key:

   ```javascript
   window.CONTACT_FORM_CONFIG = {
     accessKey: "paste-your-real-key-here",
     subject: "New portfolio message — DAVIDJAMES",
   };
   ```

3. Save the file.

### 4. Update your email on the site (optional)

Replace `davidjames@email.com` with your real Gmail in:

- `contact.html`
- `index.html` (footer)
- Other pages if needed

### 5. Test the form

1. Open `contact.html` in your browser (or deploy the site online)
2. Fill in Name, Email, and Message
3. Click **Send Message**
4. Wait for the green success message
5. Check your **Gmail inbox** (and Spam folder the first time)

> **Note:** Testing from `file://` (double-clicking the HTML file) may block the request. Deploy to Netlify/Vercel/GitHub Pages, or use a local server, for reliable testing.

---

## Deploy online (recommended)

Web3Forms works best when the site is hosted on HTTPS:

| Platform | How |
|----------|-----|
| **Netlify** | Drag your `david-website` folder to [app.netlify.com/drop](https://app.netlify.com/drop) |
| **Vercel** | Import the folder at [vercel.com](https://vercel.com) |
| **GitHub Pages** | Push to GitHub → Settings → Pages → enable |

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Success message but no email | Verify Web3Forms email; check Spam; confirm access key is correct |
| "Email is not configured yet" | Add your access key in `contact-config.js` |
| "Could not send your message" | Site must be on HTTPS or localhost; check browser console (F12) |
| Emails go to Spam | Mark first Web3Forms email as "Not spam" |

---

## Free plan limits

- **250 submissions/month** on the free plan (enough for a portfolio)
- Upgrade at Web3Forms if you need more

---

## Alternative: Formspree

If you prefer Formspree:

1. Sign up at [https://formspree.io](https://formspree.io)
2. Create a form and copy your form ID
3. Change the form in `contact.html` to:

   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

   and remove the custom JavaScript submit handler (or use Formspree’s default POST).
