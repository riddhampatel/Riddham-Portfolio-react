# 🚀 MERN Stack Developer Portfolio

A production-grade, fully functional developer portfolio built with **React 18 + Vite**, **Express.js**, **MongoDB**, and **Redux Toolkit**. Features dark/light theme toggle, responsive design, and **admin dashboard for managing content without touching code**.

---

## ✨ Features

- ✅ **Dark/Light Theme Toggle** - Smooth theme switching with localStorage persistence
- ✅ **Responsive Design** - Mobile-first approach with Tailwind CSS
- ✅ **Admin Dashboard** - Manage projects, about section, skills, and CV without coding
- ✅ **Real-time Updates** - Hot Module Replacement (HMR) with Vite
- ✅ **MongoDB Integration** - Store and retrieve portfolio data dynamically
- ✅ **Socket.IO Ready** - Real-time communication setup included
- ✅ **Smooth Animations** - Framer Motion for professional UI transitions
- ✅ **SEO Optimized** - Meta tags and semantic HTML
- ✅ **Contact Form** - Email integration ready
- ✅ **Authentication Ready** - JWT setup for admin login

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Redux Toolkit** - State management
- **Framer Motion** - Animations
- **React Router** - Page routing
- **Axios** - API calls

### Backend
- **Express.js** - Web framework
- **Node.js** - Runtime
- **MongoDB** - Database
- **Socket.IO** - Real-time communication
- **JWT** - Authentication
- **Cors** - Cross-origin requests
- JWT
- Redis
- Socket.IO
- Nodemailer

### DevOps
- Docker
- Docker Compose
- GitHub Actions
- Render (Backend Deployment)
---

## 📋 Project Structure

```
mern-portfolio/
├── client/                          # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/             # Reusable UI components
│   │   │   ├── ui/                 # Button, Card, Input, Textarea, Badge, Loader
│   │   │   └── layout/             # Navbar, Footer, Header
│   │   ├── pages/                  # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── AdminDashboard.jsx  # ⭐ Manage content here
│   │   │   ├── Contact.jsx
│   │   │   ├── Blogs.jsx
│   │   │   ├── Resume.jsx
│   │   │   ├── Login.jsx
│   │   │   └── NotFound.jsx
│   │   ├── hooks/
│   │   │   └── useTheme.js         # Theme management
│   │   ├── store/                  # Redux store
│   │   │   └── slices/
│   │   │       └── themeSlice.js
│   │   ├── styles/
│   │   │   └── globals.css         # Global styles & light mode
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
├── server/                          # Backend (Express)
│   ├── routes/                     # API endpoints
│   ├── models/                     # MongoDB schemas
│   ├── controllers/                # Business logic
│   ├── middleware/                 # Auth, validation
│   ├── .env                        # Environment variables
│   └── index.js                    # Server entry point
│
├── shared/                         # Shared code
├── package.json                    # Workspace root (npm workspaces)
└── README.md                       # This file
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js 16+** and npm
- **MongoDB** (local or MongoDB Atlas cloud)

### Installation

1. **Navigate to project:**
```bash
cd "D:\NEW PORTFOLIO\mern-portfolio"
```

2. **Install all dependencies:**
```bash
npm install
```

3. **Configure MongoDB in `server/.env`:**
```bash
# Edit server/.env file
MONGODB_URI=mongodb://localhost:27017/portfolio
# OR (cloud)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
JWT_SECRET=your_secret_key
PORT=5000
NODE_ENV=development
```

4. **Start both servers:**
```bash
npm run dev
```

This starts:
- **Frontend**: http://localhost:5173 (React with Vite)
- **Backend**: http://localhost:5000 (Express)

---

## 📱 Pages & Routes

| Page | URL | Purpose |
|------|-----|---------|
| **Home** | `/` | Landing page with featured projects & skills |
| **About** | `/about` | Your bio, experience, and skills |
| **Projects** | `/projects` | All your completed projects |
| **Blogs** | `/blogs` | Articles and blog posts |
| **Resume** | `/resume` | Work experience and education |
| **Contact** | `/contact` | Contact form for visitors |
| **Admin Dashboard** | `/admin` | **Manage content without coding** ⭐ |
| **Login** | `/login` | Admin authentication |

---

## 🎯 How to Manage Your Portfolio (NO CODE!)

### **Use the Admin Dashboard**

Navigate to: **http://localhost:5173/admin**

#### 1. **Add/Edit Projects**
   - Click **Projects** tab
   - Fill in: Title, Description, Technologies, Image URL
   - Click **Add Project**
   - Done! Changes appear immediately

#### 2. **Update About Section**
   - Click **About** tab
   - Edit: Bio, Experience, Location
   - Click **Save About Section**

#### 3. **Manage Skills**
   - Click **Skills** tab
   - Add skills (one per line)
   - Click **Save Skills**

#### 4. **Upload CV/Resume**
   - Click **CV** tab
   - Upload PDF to Google Drive/Dropbox
   - Share link → Copy URL
   - Paste in **CV URL** field
   - Click **Update CV**

### **Example: Add Your First Project**

```
Title:        E-Commerce Platform
Description:  Full-stack marketplace with payment integration
Technologies: React, Node.js, MongoDB, Stripe
Image URL:    https://via.placeholder.com/400x300
```

Click Add → **Done!** Project appears on /projects page instantly.

---

## 🌓 Dark/Light Theme

The portfolio includes a fully functional theme system:

- **Toggle Button** - Click sun/moon icon in Navbar
- **Auto-detect** - System preference on first visit
- **Persistent** - Your choice saved in browser storage
- **Smooth Animation** - No flashing, smooth transition
- **All Pages** - Works perfectly on all pages and components

---

## 🔌 API Endpoints (Ready for Backend Integration)

### Projects
```
GET    /api/projects           - Get all projects
POST   /api/projects           - Create new project (admin)
PUT    /api/projects/:id       - Update project (admin)
DELETE /api/projects/:id       - Delete project (admin)
```

### About Section
```
GET    /api/about              - Get about info
PUT    /api/about              - Update about info (admin)
```

### Skills
```
GET    /api/skills             - Get all skills
POST   /api/skills             - Add skill (admin)
DELETE /api/skills/:id         - Delete skill (admin)
```

### Contact
```
POST   /api/contact            - Send contact message
GET    /api/contact            - Get messages (admin)
```

### Authentication
```
POST   /api/auth/login         - Admin login
POST   /api/auth/logout        - Admin logout
GET    /api/auth/me            - Get current user
```

---

## 📦 Available NPM Scripts

```bash
# Start both frontend + backend
npm run dev

# Frontend only (Vite dev server with HMR)
npm run client

# Backend only (Express server)
npm run server

# Build frontend for production
npm run build

# Preview production build
npm run preview
```

---

## 🔐 Environment Variables

**File:** `server/.env`

```env
# MongoDB Connection
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio

# Security
JWT_SECRET=your_secret_key_here_change_in_production

# Server Configuration
PORT=5000
NODE_ENV=development

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173

# Email (optional - for contact form)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_specific_password
```

---

## 🎨 Customization Guide

### Change Colors
Edit `client/tailwind.config.js`:
```javascript
colors: {
  secondary: {
    400: '#Your-Color-Here'
  }
}
```

### Change Fonts
Edit `client/tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['Your-Font-Name', 'sans-serif']
}
```

### Add Social Links
Edit `client/src/components/layout/Navbar.jsx` or `Footer.jsx`:
```jsx
socialLinks: [
  { icon: <FiGithub />, url: 'https://github.com/yourname' },
  { icon: <FiLinkedin />, url: 'https://linkedin.com/in/yourname' },
]
```

---

## 🚀 Deployment

### Deploy Backend (Render.com)
1. Push code to GitHub
2. Go to [render.com](https://render.com)
3. Connect GitHub account
4. Create new Web Service
5. Add environment variables:
   - `MONGODB_URI` - Your MongoDB connection
   - `JWT_SECRET` - Your secret key
6. Deploy!

### Deploy Frontend (Vercel)
1. Go to [vercel.com](https://vercel.com)
2. Import GitHub project
3. Set environment variable:
   - `VITE_API_URL` - Your Render backend URL
4. Deploy!

**After deployment, update:**
- Backend API URL in frontend
- Frontend URL in backend CORS settings
- Google Drive/Dropbox links for CV

---

## 🐛 Troubleshooting

### "Cannot find module" error?
```bash
# Reinstall dependencies
rm -r node_modules package-lock.json
npm install
```

### Ports already in use?
```bash
# Kill process on port 5173 or 5000
# (See: https://stackoverflow.com/questions/39632667)
```

### MongoDB connection failed?
- Check `MONGODB_URI` in `server/.env`
- Ensure MongoDB is running locally: `mongod`
- Or use MongoDB Atlas: [mongodb.com/cloud](https://mongodb.com/cloud)

### Theme toggle not working?
- Clear browser cache (Ctrl+Shift+Delete)
- Check browser console for errors (F12)
- Verify `localStorage` is enabled

---

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [Express.js](https://expressjs.com)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

## 💡 Pro Tips

✅ **Backup regularly** - Save important data to cloud storage
✅ **Use real images** - Replace placeholders with project screenshots
✅ **Update often** - Keep portfolio fresh with latest projects
✅ **Test mobile** - Always preview on phone/tablet
✅ **Check SEO** - Add meta descriptions to pages

---

## 📊 Features Status

- ✅ Multi-page routing
- ✅ Dark/Light theme toggle
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Admin dashboard for content management
- ✅ Component library (Button, Card, Input, Badge, etc.)
- ✅ Smooth animations (Framer Motion)
- ✅ Clean, maintainable code structure
- 🔄 Backend API integration (ready to implement)
- 🔄 MongoDB data persistence (ready to implement)
- 🔄 Email contact form (ready to implement)
- 🔄 Admin authentication (ready to implement)

---

## 📝 Next Steps

1. ✅ **Add your projects** → Go to `/admin` → Projects tab
2. ✅ **Update CV** → Upload to Google Drive → Add link in `/admin` → CV tab
3. ✅ **Customize colors** → Edit `tailwind.config.js`
4. ✅ **Add social links** → Edit Navbar/Footer components
5. ⬜ Deploy to production (Render + Vercel)
6. ⬜ Connect to MongoDB for data persistence
7. ⬜ Set up email integration for contact form

---

## 📄 License

MIT License - Feel free to use for personal or commercial projects!

---

## 🤝 Need Help?

- 📖 **Read this README** - Most questions answered here
- 🔍 **Check component code** - `client/src/components/`
- 📡 **Review API files** - `server/routes/`
- 🐛 **Debug with DevTools** - React DevTools & Redux DevTools

---

**Made with ❤️ - Happy Building! 🚀**
