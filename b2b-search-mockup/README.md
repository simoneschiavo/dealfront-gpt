# B2B Search Intelligence Mockup

A React-based mockup demonstrating a B2B search intelligence tool with freemium gating, built with Vite and Tailwind CSS.

## Features

- **AI-powered B2B Search**: Natural language search for companies and contacts
- **Freemium Model**: Shows 3 results, gates additional content
- **Modern Tech Stack**: React + TypeScript + Vite + Tailwind CSS
- **Responsive Design**: Mobile-first design with Dealfront-inspired styling
- **Mock Data**: Realistic B2B company and contact information

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

### GitHub Pages (Automatic)

This project is configured for automatic deployment to GitHub Pages via GitHub Actions.

1. Push code to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Enable GitHub Pages in repository settings (Source: GitHub Actions)

### Manual Deployment

```bash
# Build and deploy manually
npm run deploy
```

## Project Structure

```
src/
├── components/          # React components
├── data/               # Mock data
├── utils/              # Utility functions
└── styles/             # CSS styles
```

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 4
- **Testing**: Vitest (planned)
- **Deployment**: GitHub Pages
