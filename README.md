# Prashanth Thota - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and TailwindCSS.

## 🚀 Live Demo

Visit the live website: [https://yourusername.github.io/portfolio/](https://yourusername.github.io/portfolio/)

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: TailwindCSS v3
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── profile.jpeg
│   └── vite.svg
├── src/
│   ├── ui/
│   │   ├── components/
│   │   │   ├── Logo.tsx
│   │   │   ├── MobileNav.tsx
│   │   │   ├── ProfilePhoto.tsx
│   │   │   └── ThemeToggle.tsx
│   │   ├── sections/
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── Skills.tsx
│   │   ├── data/
│   │   │   └── projects.ts
│   │   └── App.tsx
│   ├── main.tsx
│   └── style.css
├── .github/workflows/
│   └── deploy.yml
├── index.html
├── package.json
├── tailwind.config.cjs
├── tsconfig.json
└── vite.config.ts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🌐 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages:

1. **Push to main branch**: The GitHub Action will automatically build and deploy your site
2. **Manual deployment**: Go to Actions tab → Deploy to GitHub Pages → Run workflow

### Setup GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" section
3. Under "Source", select "GitHub Actions"
4. The site will be available at: `https://yourusername.github.io/portfolio/`

## 🎨 Customization

### Updating Profile Information

1. **Profile Photo**: Replace `public/profile.jpeg` with your photo
2. **Personal Info**: Update content in `src/ui/sections/Hero.tsx`
3. **Experience**: Modify `src/ui/sections/Experience.tsx`
4. **Projects**: Update `src/ui/data/projects.ts`
5. **Skills**: Edit `src/ui/sections/Skills.tsx`
6. **Contact**: Update links in `src/ui/sections/Contact.tsx`

### Theme Customization

The color scheme can be modified in `src/style.css`:

```css
:root {
  --color-primary: 35 98 245; /* blue-600 */
  --color-secondary: 17 24 39; /* slate-900 */
  --color-accent: 16 185 129; /* emerald-500 */
}
```

## 📱 Features

- ✅ Responsive design (mobile-first)
- ✅ Dark/Light mode toggle
- ✅ Smooth scrolling navigation
- ✅ Framer Motion animations
- ✅ SEO optimized
- ✅ Fast loading with Vite
- ✅ TypeScript for type safety
- ✅ TailwindCSS for styling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- **GitHub**: [Your GitHub Profile](https://github.com/yourusername)

---

Built with ❤️ by Prashanth Thota
