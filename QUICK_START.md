# Quick Start Guide

## 🚀 Start Both Apps (Easiest Way)

**On Windows:**
```bash
Double-click: start-apps.bat
```

**On Mac/Linux:**
```bash
chmod +x start-apps.sh
./start-apps.sh
```

**Or Manually in Separate Terminals:**

Terminal 1:
```bash
cd c:\Users\ACE\Documents\portfolio
npm run dev
```

Terminal 2:
```bash
cd c:\Users\ACE\Documents\portfolio\jamforte-sentra-dashboard
npm run dev -- --port 5175
```

## 🌐 Access the Apps

- **Portfolio**: http://localhost:5174
- **Sentra Demo**: http://localhost:5175

## 📱 Portfolio Navigation

1. **Intro** - Hero section with introduction
2. **About** - Skills, education, certifications
3. **Experience** - Work history and responsibilities
4. **Work** - Project showcase (Sentra is featured!)
5. **Contact** - Get in touch form

## 🎯 Sentra App Demo

1. Open http://localhost:5175
2. Enter any email (e.g., demo@example.com)
3. Click "Log in"
4. Explore the dashboard
5. Toggle dark mode (top right)
6. Check responsive design on mobile

## 📝 Important Files

- `src/data/projects.js` - Project data (update links here)
- `src/components/projects.jsx` - Project display (visual updates)
- `INTEGRATION_GUIDE.md` - Detailed integration documentation
- `jamforte-sentra-dashboard/` - Sentra app source code

## 🔧 Customization

### Update Project Links
Edit `src/data/projects.js`:
```javascript
{
  title: "Sentra Web App",
  live: "YOUR_LIVE_URL_HERE",
  github: "YOUR_GITHUB_URL_HERE",
  featured: true,
}
```

### Modify Contact Info
Edit `src/components/contact.jsx`:
- Email: agboolaephraim@gmail.com
- Phone: +234 9020570468

### Update Social Links
Edit `src/components/header.jsx` and `src/components/contact.jsx`

## 🚢 Deployment

### Portfolio Deployment

**Using Vercel:**
```bash
npm install -g vercel
vercel
```

**Using Netlify:**
```bash
npm run build
# Upload dist/ folder to Netlify
```

**Using GitHub Pages:**
```bash
npm run build
git add dist/
git commit -m "Deploy"
git push
```

### Sentra Deployment

**Using Vercel:**
```bash
cd jamforte-sentra-dashboard
vercel
```

**Update Portfolio after deploying:**
```javascript
// src/data/projects.js
live: "https://your-sentra-url.vercel.app"
```

## ✨ Features Showcase

### Portfolio Features
- ✅ Scroll animations
- ✅ Responsive design
- ✅ Dark theme
- ✅ Smooth navigation
- ✅ Contact form
- ✅ Experience timeline

### Sentra App Features
- ✅ Modern login
- ✅ Interactive dashboard
- ✅ Dark/Light mode
- ✅ Responsive layout
- ✅ Navigation sidebar
- ✅ Report cards

## 🐛 Troubleshooting

### Apps won't start?
```bash
# Clear node_modules and reinstall
rm -r node_modules package-lock.json
npm install

# Try again
npm run dev
```

### Port already in use?
```bash
# Windows: Kill process on port 5174/5175
netstat -ano | findstr :5174
taskkill /PID <PID> /F
```

### Sentra styles not showing?
```bash
cd jamforte-sentra-dashboard
npm install tailwindcss -D
npm run dev -- --port 5175
```

## 📚 Documentation

- Full guide: See `INTEGRATION_GUIDE.md`
- Portfolio code: `/src`
- Sentra code: `/jamforte-sentra-dashboard/src`

## 💡 Pro Tips

1. Keep both terminals open while developing
2. Hot reload is enabled - changes appear instantly
3. Build before deployment: `npm run build`
4. Test responsive design: F12 → Mobile view
5. Use dark mode to see theme switching

## 🎓 Learning Resources

- React: https://react.dev
- Tailwind: https://tailwindcss.com
- Vite: https://vitejs.dev
- React Router: https://reactrouter.com

---

**Version**: 1.0  
**Last Updated**: January 20, 2026  
**Status**: ✅ Production Ready
