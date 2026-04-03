<div align="center">
  <h1>🚀 Fintech Dashboard React Flow</h1>
  <p>A modern, interactive financial dashboard built with React, Vite, and Tailwind CSS.</p>

  <!-- Badges -->
  <p>
    <img src="https://img.shields.io/badge/React-19.2-blue?style=for-the-badge&logo=react" alt="React" />
    <img src="https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
  </p>
</div>

---

## 📖 Overview

**Fintech Dashboard React Flow** is a sleek, responsive, and performance-optimized single-page application. Originally migrated from a static HTML dashboard, it now leverages the power of **React** Context API for state management, interactive data visualization using **Recharts**, and utility-first styling with **Tailwind CSS**.

From dynamic transaction filtering to a toggleable role-based UI (Admin vs. Viewer), this dashboard provides an elegant user experience tailored for financial tracking.

## ✨ Key Features

- **Role-Based Views**: Seamlessly toggle between **Admin View** (with action privileges like deleting transactions) and **Viewer View**.
- **Interactive Visualizations**: Dynamic spending breakdown charts powered by Recharts.
- **Transaction Management**: Real-time search, sorting (by date and amount), and status-based filtering of recent activities.
- **Polished UI/UX**: Custom animations (`fadeInUp`), refined scrollbars, smooth transitions, and a premium color palette centered around the Outfit font family.
- **AI Financial Insight**: Simulated dynamic insights widget providing proactive budgeting advice.

## 🛠️ Technology Stack

- **Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (CDN)
- **Icons**: [Iconify](https://iconify.design/)
- **Charts**: [Recharts](https://recharts.org/)

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

Ensure you have Node.js and npm (or yarn/pnpm) installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-link>
   cd finance
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local URL provided by Vite (usually `http://localhost:5173`).

## 📁 Project Structure

```text
finance/
├── public/                 # Static assets
├── src/
│   ├── context/
│   │   └── DashboardContext.jsx # Global state management
│   ├── App.jsx             # Main Dashboard Component & Layout
│   ├── main.jsx            # Application Entry Point
│   └── index.css           # Global Styles & Tailwind Directives
├── index.html              # HTML template
├── package.json            # Dependencies and Scripts
└── vite.config.js          # Vite Configuration
```

## 🎨 Design & Aesthetics

The UI focuses on modern design principles:
- **Glassmorphism & Depth**: Subtle card shadows, backdrop blurs, and hover effects.
- **Typography**: Uses the sleek, highly readable **Outfit** font.
- **Gradients & Colors**: Purposeful use of warning and success states, combined with energetic brand accents (`#FF6B35`).

---

<div align="center">
  <p>Built with ❤️ using React</p>
</div>
