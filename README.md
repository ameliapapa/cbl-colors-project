# CBL Colors - Professional Colorist Portfolio

A modern, responsive portfolio website for a professional film colorist, built with React, TypeScript, Vite, and Tailwind CSS. Features stunning animations, parallax scrolling, and a beautiful masonry layout for showcasing color grading work.

## Overview

This portfolio website showcases the work and expertise of a professional colorist with a focus on "Colour as Language" - highlighting the artistic and technical mastery required in film post-production color grading.

## Tech Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Lightning-fast build tool with HMR
- **Tailwind CSS** - Utility-first CSS framework
- **Relume UI** - Professional component library
- **Framer Motion** - Smooth animations and transitions
- **React Icons** - Comprehensive icon library

## Features

### Home Page Sections

1. **Navbar21** - Sticky navigation bar with animated hamburger menu
   - Responsive design
   - Full-screen overlay menu
   - Featured work showcase in menu
   - Social media links

2. **Layout355** - Hero section with parallax scrolling
   - Full-screen background video
   - Interactive video dialog with play button
   - Three key value propositions with scroll animations
   - Smooth parallax effects

3. **Portfolio14** - Selected works showcase
   - Responsive masonry grid layout (1/2/3 columns)
   - 6 featured projects with images, descriptions, and badges
   - Category tags (Documentary, Fiction, Color Grading, etc.)
   - "View all" CTA button

4. **Layout423** - Additional services section
   - 3 expandable service cards
   - Hover animations that expand cards to 70% width
   - Framer Motion smooth transitions
   - Professional consulting services highlight

5. **Layout1** - About/Bio section
   - Professional introduction
   - Image showcase
   - "Learn More" call-to-action

6. **Cta41** - Call-to-action section
   - "Let's Create Together" heading
   - Contact and Learn More buttons
   - Background image with overlay

7. **Footer1** - Complete footer with
   - Newsletter signup form
   - Quick links navigation
   - Social media icons (Facebook, Instagram, Twitter/X, LinkedIn, YouTube)
   - Legal links (Privacy Policy, Terms of Service)

## Project Structure

```
cbl-colors-project/
├── src/
│   ├── home/
│   │   ├── components/
│   │   │   ├── Navbar21.jsx      # Navigation bar
│   │   │   ├── Layout355.jsx     # Hero section
│   │   │   ├── Portfolio14.jsx   # Portfolio grid
│   │   │   ├── Layout423.jsx     # Services section
│   │   │   ├── Layout1.jsx       # Bio section
│   │   │   ├── Cta41.jsx         # Call-to-action
│   │   │   └── Footer1.jsx       # Footer
│   │   └── index.jsx             # Home page composition
│   ├── about-me/                 # About page
│   ├── blog/                     # Blog listing
│   ├── blog-post/                # Blog post template
│   ├── documentary-1/            # Project showcase template
│   ├── works/                    # Works listing page
│   ├── App.tsx                   # Main app component
│   ├── main.tsx                  # App entry point
│   └── index.css                 # Global styles
├── public/                       # Static assets
├── tailwind.config.ts            # Tailwind configuration
├── vite.config.ts                # Vite configuration
└── package.json                  # Dependencies
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone git@github.com:ameliapapa/cbl-colors-project.git
cd cbl-colors-project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## Configuration

### Tailwind CSS

The project uses a custom Tailwind configuration with the Relume preset for design consistency:

```typescript
// tailwind.config.ts
export default {
  presets: [require('@relume_io/relume-tailwind')],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@relume_io/relume-ui/**/*.{js,ts,jsx,tsx}',
  ],
  // ...
}
```

### Vite Configuration

Optimized for React with fast refresh and modern build output.

## Key Technical Highlights

### Responsive Design
- Mobile-first approach
- Breakpoints: mobile, tablet (md), desktop (lg)
- Fluid typography and spacing

### Performance Optimizations
- Vite for instant HMR
- Code splitting ready
- Optimized asset loading
- Lazy loading compatible

### Animations
- Framer Motion for smooth transitions
- Parallax scrolling effects
- Hover state animations
- Page transition ready

### Component Architecture
- Modular component structure
- Reusable UI components
- Clean separation of concerns
- TypeScript for type safety

## Customization Guide

### Updating Content

1. **Replace placeholder images**: Update image URLs in component files
2. **Update text content**: Modify headings, descriptions, and CTAs in respective components
3. **Configure navigation**: Update links in `Navbar21.jsx`
4. **Social media links**: Update URLs in `Footer1.jsx`
5. **Project showcase**: Add real projects in `Portfolio14.jsx`

### Styling

- Modify colors in `tailwind.config.ts`
- Update global styles in `src/index.css`
- Component-specific styles use Tailwind utility classes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a personal portfolio project. If you find bugs or have suggestions, please open an issue.

## License

This project is private and proprietary.

## Acknowledgments

- Built with [Relume UI](https://www.relume.io/) components
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

## Contact

For inquiries about color grading services, use the contact form on the website.

---

Built with React, TypeScript, and Tailwind CSS • Powered by Vite
