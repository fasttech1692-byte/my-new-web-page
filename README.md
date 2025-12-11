# Logo Studio — Simple Website Template

A minimal, responsive template for a logo design studio, including a contact form that can send emails.

## What's included
- `index.html`: Home page with hero, services, portfolio, and process sections.
- `contact.html`: Contact page with form.
- `css/styles.css`: Styling.
- `js/main.js`: Small helper.
- `js/contact.js`: Handles form submission.
- `assets/*.svg`: Placeholder graphics.
- `backend/server.js`: Node.js Express API to email form submissions.
- `.env.example`: SMTP configuration template.

## Option A — No backend (Formspree)
1. Create a free Formspree form endpoint.
2. In `contact.html`, use the Formspree `action` URL and remove the Node endpoint.
3. Deploy the site (Netlify, GitHub Pages, etc.).

## Option B — Backend (Node + SMTP)
1. Ensure Node.js is installed.
2. In the project root, run:
   ```bash
   npm init -y
   npm install express cors nodemailer dotenv
   ```
3. Copy `.env.example` to `.env` and set your SMTP details and `TO_EMAIL`.
4. Start the server:
   ```bash
   node backend/server.js
   ```
5. Open `contact.html` and ensure the form `action` points to your server URL (e.g., `http://localhost:3000/api/contact`).

## Deployment tips
- Static files can be hosted on Netlify, Vercel, Azure Static Web Apps, or any web server.
- The backend can be deployed to Render, Railway, Azure App Service, or your own server.

## Customize
- Replace placeholder text and SVGs in `assets/` with your own logo work.
- Update colors in `css/styles.css` under the `:root` variables.

## License
MIT — use, modify, and share freely.
