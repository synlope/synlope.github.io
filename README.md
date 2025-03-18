# Modern Portfolio Website

A sleek, minimalistic, and modern black-and-white portfolio website built with Vite, React, and TailwindCSS. This portfolio features smooth animations, interactive elements, and a responsive design.

## Features

- **Modern Design**: Clean black & white aesthetic with grid-based layouts
- **Interactive Animations**: 
  - Dynamic typing effects for introducing yourself
  - Smooth page transitions with Framer Motion
  - Text animations with glitch effects
  - Custom cursor with magnetic pull effect
- **Responsive Layout**: Looks great on all devices, from mobile to desktop
- **Project Showcase**: Interactive project cards with modal details
- **Contact Form**: Animated form with floating labels
- **GitHub Pages Support**: Configured for easy deployment

## Technologies Used

- **Vite.js**: For fast development and optimized production builds
- **React.js**: UI component library
- **TailwindCSS**: Utility-first CSS framework
- **Framer Motion**: For smooth animations and transitions
- **GSAP**: For complex animations
- **React Router**: For navigation

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/my-portfolio.git
   cd my-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser to see the website.

## Customization

### Modifying Content

1. **Personal Information**: Update the text in the Home, About, and Contact components
2. **Projects**: Modify the project data in the `src/pages/Projects.jsx` file
3. **Resume/CV**: Update your skills and experience in the `src/pages/About.jsx` file

### Styling

- Customize colors in the `tailwind.config.js` file
- Update animations and transitions in the component files

## Deployment

This project is configured for GitHub Pages deployment. To deploy:

1. Update the `base` property in `vite.config.js` with your repository name:
   ```javascript
   base: '/your-repo-name/',
   ```

2. Deploy using the included script:
   ```bash
   npm run deploy
   # or
   yarn deploy
   ```

Alternatively, you can use the included GitHub Actions workflow by pushing to your main branch.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Vite.js](https://vitejs.dev/)
- [React.js](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP](https://greensock.com/gsap/)
- [React Router](https://reactrouter.com/)
