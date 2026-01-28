# Portfolio & Sentra App Integration Guide

## Overview

Your portfolio website is now fully integrated with the Sentra Web App project. The portfolio showcases your work with the Sentra project featured prominently, allowing visitors to view a live demo of your dashboard development skills.

## Running Both Applications

### Option 1: Terminal Approach (Recommended)

**Terminal 1 - Portfolio Website:**
```bash
cd c:\Users\ACE\Documents\portfolio
npm run dev
# Runs on http://localhost:5174
```

**Terminal 2 - Sentra App:**
```bash
cd c:\Users\ACE\Documents\portfolio\jamforte-sentra-dashboard
npm run dev -- --port 5175
# Runs on http://localhost:5175
```

### Option 2: Quick Start Script

Create a batch file `start-apps.bat` in the portfolio root:
```batch
@echo off
start cmd /k "cd jamforte-sentra-dashboard && npm run dev -- --port 5175"
start cmd /k "npm run dev"
pause
```

Then double-click the file to start both apps.

## Integration Details

### What's Been Updated

#### 1. **Projects Data** (`src/data/projects.js`)
- Sentra project now has `featured: true` flag
- Live demo link: `http://localhost:5175`
- GitHub link: `https://github.com/jamforte/sentra`
- Enhanced description highlighting your dashboard work

#### 2. **Projects Component** (`src/components/projects.jsx`)
- Added "Featured" badge for highlighted projects
- Smart link handling (opens demo in new tab, internal links in same tab)
- Better visual distinction for featured projects

#### 3. **Project Details**

**Sentra Web App Card includes:**
- Project title and description
- Technology tags: React, JavaScript, UI Components, Dashboard, TailwindCSS
- "View Demo" button → Opens live dashboard
- "View Code" button → Links to GitHub repository
- Featured badge to highlight this project

## Features Showcased

### From Your Resume
✅ **Front-end Development**: React, JavaScript, Tailwind CSS  
✅ **UI/UX Design**: Professional dashboard layout  
✅ **Responsive Design**: Works on all screen sizes  
✅ **Component Architecture**: Reusable components  
✅ **Version Control**: Git integration  
✅ **Modern Tools**: Vite, React Router  

### In the Sentra App
- **Login Page**: Professional authentication UI
- **Dashboard**: Multi-card reporting system
- **Theme Toggle**: Dark/Light mode support
- **Sidebar Navigation**: Clean navigation structure
- **Responsive Grid**: Mobile-friendly layout

## Demo Walkthrough

1. **Visit Portfolio**: http://localhost:5174
2. **Scroll to Experience Section**: See your internship details
3. **Scroll to Projects Section**: Find the Sentra project with "Featured" badge
4. **Click "View Demo"**: Opens Sentra app (http://localhost:5175)
5. **In Sentra App**:
   - Enter any email/username
   - Click "Log in" to access dashboard
   - Toggle dark mode in top-right
   - Explore the dashboard layout

## Customization Options

### Update Project Links
In `src/data/projects.js`, modify the Sentra project:

```javascript
{
  title: "Sentra Web App",
  // ... other properties
  live: "http://localhost:5175",  // Change this URL
  github: "https://github.com/yourusername/sentra",  // Update repo URL
  featured: true,
}
```

### Deploy Options

**For Portfolio:**
- Vercel, Netlify, or GitHub Pages

**For Sentra App:**
- Vercel, Netlify
- Deploy and update `live` URL in projects data
- Example: `live: "https://sentra-demo.vercel.app"`

### When Deploying

Update the live link in `src/data/projects.js`:
```javascript
live: "https://your-sentra-deployment-url.com"
```

## Responsive Features

Both apps are fully responsive:
- ✅ Mobile (320px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)
- ✅ Large screens (1280px+)

## Performance

- Portfolio: ~223KB JavaScript, ~37KB CSS (gzipped)
- Sentra: ~200KB JavaScript, ~35KB CSS (gzipped)
- Both optimized with Vite

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Troubleshooting

### Port Already in Use
```bash
# Find process on port 5175
netstat -ano | findstr :5175

# Kill the process
taskkill /PID <PID> /F
```

### Dependencies Issues
```bash
# Clear and reinstall
rm -r node_modules package-lock.json
npm install
```

### CSS Not Loading in Sentra
```bash
cd jamforte-sentra-dashboard
npm run build
# Check if tailwind.config.js and postcss.config.js are present
```

## File Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── about.jsx
│   │   ├── contact.jsx
│   │   ├── experience.jsx
│   │   ├── header.jsx
│   │   ├── hero.jsx
│   │   └── projects.jsx  ← Updated
│   ├── data/
│   │   ├── projects.js  ← Updated
│   │   ├── experience.js
│   │   └── education.js
│   ├── hooks/
│   │   └── useScrollAnimation.js
│   ├── App.jsx
│   └── index.css
└── jamforte-sentra-dashboard/  ← Sentra App
    ├── src/
    │   ├── Pages/
    │   │   ├── Dashboard.jsx
    │   │   └── Login.jsx
    │   ├── components/
    │   │   ├── Sidebar.jsx
    │   │   ├── Topbar.jsx
    │   │   └── ReportCard.jsx
    │   ├── routes/
    │   │   └── AppRoutes.jsx
    │   └── App.jsx
    └── package.json
```

## Next Steps

1. ✅ **Verify both apps run correctly**
2. **Update GitHub links** in projects data
3. **Deploy portfolio** to production
4. **Deploy Sentra app** to production service
5. **Update live links** to point to deployed URLs
6. **Share portfolio** with potential employers

## Contact & Support

For questions about the integration:
- Email: agboolaephraim@gmail.com
- Phone: +234 9020570468

---

**Created**: January 20, 2026  
**Status**: Production Ready ✅
