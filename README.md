# Estima.id - PT Estima Reka Sakti

A modern, responsive company profile website for PT Estima Reka Sakti, specializing in Industrial Insulation, Scaffolding Access, and Plant Maintenance for heavy industries (Oil & Gas, Power Plants, Petrochemical).

## 🚀 Features

- **Modern & Responsive UI**: Built with Tailwind CSS for seamless viewing across all devices.
- **Dynamic Scroll Animations**: Engaging user experience using `framer-motion` for reveal and stagger effects on scroll across all sections.
- **Projects Gallery**: Showcase of past projects featuring category filtering.
- **Interactive Project Details**: Draggable image carousel for multi-image project views.
- **Contact & Inquiry**: Easy-to-use contact sections with integrated maps and forms.

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org) (App Router)
- **Library**: [React](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 💻 Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

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

## 📂 Project Structure

- `app/`: Next.js App Router root.
  - `page.tsx`: Main landing page assembling all homepage sections.
  - `projects/[id]/page.tsx`: Dynamic routing page for viewing specific project details.
- `components/Sections/`: Modular React components for each section of the website (Hero, Services, Projects, Contact, FAQ, etc.).
- `lib/Constants.ts`: Centralized data store (Company Info, Projects Database, Service Details, Styling Tokens).
- `public/`: Static assets folder containing images, logos, and certificates.

## 📄 License

This project is proprietary and confidential to PT Estima Reka Sakti.
