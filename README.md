# Dr. Maya Reynolds - Therapy Practice Website

A modern, responsive, and beautifully designed website for Dr. Maya Reynolds, a Licensed Clinical Psychologist based in Santa Monica, CA. The site is built to be accessible, fast, and soothing—using a refined, earthy color palette and fluid typography to create a safe digital space for potential clients.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Components:** React (Functional Components & Hooks)
- **Icons & Fonts:** Custom UI layout with variable fonts and scalable typography.

## Features

- **Responsive Design:** Optimized for all devices—from mobile screens to large desktop monitors.
- **Component-Driven Architecture:** Modular sections (Hero, CTA, FAQs, Services) for easy maintenance.
- **Custom Theme System:** Centralized CSS variables (`var(--color-primary)`, `var(--bg-primary)`) for rapid theme adjustments.
- **Accessible Navigation:** Desktop and Mobile hamburger menu for seamless routing.
- **Integrated FAQs:** Profile-matched, easily extendable FAQ page.

## Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run the Development Server:**
   ```bash
   npm run dev
   ```

3. **Build for Production:**
   ```bash
   npm run build
   ```

4. **Start the Production Server:**
   ```bash
   npm run start
   ```

## Folder Structure

- `/app` - Next.js App Router files (`page.js`, `layout.js`, `globals.css`)
  - `/components` - Reusable UI components (`Hero.jsx`, `Navbar.jsx`, `Footer.jsx`, etc.)
  - `/faqs` - Dedicated route for the FAQ page
- `/public` - Static assets (images, icons)
