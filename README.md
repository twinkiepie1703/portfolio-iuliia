# Iuliia Portfolio

A minimalistic, sophisticated personal portfolio website for a beauty and luxury marketing professional. Built with Next.js, Tailwind CSS, and Framer Motion.

## Getting Started

1. Install dependencies (if they haven't finished installing in the background):
   ```bash
   npm install
   ```

2. Configure the Contact Form:
   - Copy `.env.example` to `.env.local`
   - Update the SMTP variables with your email provider's settings (e.g., Gmail App Passwords, Resend, SendGrid, etc.).
   - Make sure `CONTACT_EMAIL` is the email where you want to receive messages.

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customizing Content

- **Images**: Search the codebase for `https://images.unsplash.com` to swap the placeholder editorial images with your own high-quality imagery.
- **Copy**: Update the text in the components under `src/components/` (e.g., `Experience.tsx`, `About.tsx`) to reflect your actual professional journey.
- **Journal**: Add new journal entries in `src/app/journal/page.tsx`.

## Design Philosophy

This portfolio is designed to feel like a high-end editorial publication, utilizing ample whitespace, a refined color palette (ivory, charcoal, muted taupe, champagne), and elegant typography.
