# 🚀 Esraa Portfolio - Setup & Deployment Guide

## 📋 Table of Contents
1. [Local Development Setup](#local-development-setup)
2. [GitHub Repository Setup](#github-repository-setup)
3. [Vercel Deployment](#vercel-deployment)
4. [Project Structure](#project-structure)

---

## 🖥️ Local Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm (recommended: pnpm)
- Git
- VS Code (or any code editor)

### Step 1: Clone or Copy the Project
```bash
# If you already have the folder, navigate to it
cd esraa-portfolio

# Or clone from GitHub (after you push it)
git clone https://github.com/esraashammout/esraa-portfolio.git
cd esraa-portfolio
```

### Step 2: Install Dependencies
```bash
# Using pnpm (recommended)
pnpm install

# Or using npm
npm install
```

### Step 3: Start Development Server
```bash
# Using pnpm
pnpm dev

# Or using npm
npm run dev
```

The portfolio will be available at: **http://localhost:5173**

### Step 4: Build for Production
```bash
# Using pnpm
pnpm build

# Or using npm
npm run build
```

---

## 📦 GitHub Repository Setup

### Step 1: Create GitHub Repository
1. Go to [github.com/new](https://github.com/new)
2. Repository name: `esraa-portfolio`
3. Description: "Professional Flutter Developer Portfolio"
4. Make it **Public** (so employers can see it)
5. Click "Create repository"

### Step 2: Push Code to GitHub
```bash
# Navigate to your project folder
cd esraa-portfolio

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Complete portfolio with animations and projects"

# Add remote repository
git remote add origin https://github.com/esraashammout/esraa-portfolio.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 3: Verify on GitHub
- Go to https://github.com/esraashammout/esraa-portfolio
- You should see all your project files there

---

## 🌐 Vercel Deployment

### Step 1: Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub (recommended)
3. Authorize Vercel to access your GitHub account

### Step 2: Import Project
1. Click "New Project"
2. Select "Import Git Repository"
3. Find and select `esraa-portfolio`
4. Click "Import"

### Step 3: Configure Project
- **Framework Preset**: Vite
- **Root Directory**: ./
- **Build Command**: `pnpm build` (or `npm run build`)
- **Output Directory**: `dist`
- Click "Deploy"

### Step 4: Wait for Deployment
- Vercel will automatically build and deploy your project
- You'll get a URL like: **https://esraa-portfolio-[random].vercel.app**

### Step 5: Custom Domain (Optional)
1. Go to your Vercel project settings
2. Click "Domains"
3. Add your custom domain (if you have one)
4. Follow the DNS configuration steps

### Step 6: Get Your Final URL
Your portfolio will be live at:
- **https://esraa-portfolio-[random].vercel.app** (default)
- Or your custom domain if you set one up

---

## 📁 Project Structure
```
esraa-portfolio/
├── client/
│   ├── public/
│   │   ├── projects/          # Project images
│   │   │   ├── medtech-mobile-login.jpg
│   │   │   ├── medtech-mobile-ai.jpg
│   │   │   ├── medtech-mobile-checkout.jpg
│   │   │   ├── medtech-web-login.png
│   │   │   ├── medtech-web-dashboard.png
│   │   │   ├── medtech-web-orders.png
│   │   │   └── radiology.jpg
│   │   └── ...
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── sections/
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   ├── AboutSection.tsx
│   │   │   │   ├── ProjectsSection.tsx
│   │   │   │   ├── SkillsSection.tsx
│   │   │   │   └── ContactSection.tsx
│   │   │   └── ui/             # shadcn/ui components
│   │   ├── pages/
│   │   │   └── Home.tsx
│   │   ├── hooks/
│   │   │   └── useScrollAnimation.ts
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── package.json
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🎨 Customization Tips

### Change Colors
Edit `client/src/index.css` to modify the color scheme:
```css
@theme {
  --color-primary: oklch(0.5 0.2 240);
  /* Change these values */
}
```

### Update Content
- **Hero Section**: Edit `client/src/components/sections/HeroSection.tsx`
- **About Section**: Edit `client/src/components/sections/AboutSection.tsx`
- **Projects**: Edit `client/src/components/sections/ProjectsSection.tsx`
- **Contact Info**: Edit `client/src/components/sections/ContactSection.tsx`

### Add New Projects
Add new project objects to the `projects` array in `ProjectsSection.tsx`:
```typescript
{
  id: 4,
  title: "Your New Project",
  description: "Description here",
  technologies: ["Tech1", "Tech2"],
  images: ["/projects/image.jpg"],
  github: "https://github.com/...",
  features: ["Feature 1", "Feature 2"],
}
```

---

## 🚀 Quick Commands Reference

```bash
# Development
pnpm dev              # Start dev server
pnpm build            # Build for production
pnpm preview          # Preview production build locally

# Git
git add .             # Stage all changes
git commit -m "msg"   # Commit with message
git push              # Push to GitHub

# Vercel
# Deploy automatically when you push to main branch
```

---

## ✅ Checklist Before Sharing

- [ ] All project images are loading correctly
- [ ] All links work (GitHub, LinkedIn, email)
- [ ] Contact form works
- [ ] Portfolio is responsive on mobile
- [ ] No console errors
- [ ] All animations are smooth
- [ ] GitHub repository is public
- [ ] Vercel deployment is live

---

## 📞 Support

If you encounter any issues:
1. Check the console for errors (F12 in browser)
2. Make sure all dependencies are installed: `pnpm install`
3. Clear cache and rebuild: `pnpm build`
4. Check GitHub and Vercel documentation

---

**Good luck with your portfolio! 🎉**
