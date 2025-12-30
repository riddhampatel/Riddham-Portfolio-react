# 🚀 MERN Stack Developer Portfolio

A modern, full-stack developer portfolio showcasing projects and skills with a professional design and seamless user experience.

## 📋 About

A complete portfolio website built with the MERN stack, featuring an admin dashboard for easy content management. Includes featured projects: Doctor Appointment Booking System and Social Dashboard Productivity Hub.

## ✨ Features

- 🌓 **Dark/Light Theme** - Smooth theme switching with persistence
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **Fast Performance** - Built with Vite for lightning-fast load times
- 🎨 **Modern UI** - Clean design with Framer Motion animations
- 🔐 **Admin Dashboard** - Manage projects without touching code
- 💾 **MongoDB Integration** - Dynamic data storage and retrieval
- 🔄 **Real-time Updates** - Live data synchronization
- 📧 **Contact Form** - Direct communication from visitors

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- Redux Toolkit
- Framer Motion
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO
- JWT Authentication
- CORS

### DevOps
- Docker & Docker Compose
- GitHub Actions

## 📂 Project Structure

```
mern-portfolio/
├── client/              # Frontend React application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components
│   │   ├── hooks/       # Custom React hooks
│   │   ├── store/       # Redux store
│   │   └── styles/      # Global styles
│   └── package.json
│
├── server/              # Backend Express API
│   ├── src/
│   │   ├── routes/      # API endpoints
│   │   ├── models/      # MongoDB schemas
│   │   ├── controllers/ # Business logic
│   │   └── middleware/  # Auth & validation
│   └── package.json
│
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- MongoDB (local or cloud)

### Installation

```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install

# Configure environment (server/.env)
MONGODB_URI=mongodb://localhost:27017/mern-portfolio
JWT_SECRET=your_secret_key
PORT=5000
CLIENT_URL=http://localhost:5173

# Seed database
cd server
node seedProjects.js

# Start backend (new terminal)
npm run dev

# Start frontend (new terminal)
cd ../client
npm run dev
```

**Access:**
- Frontend: http://localhost:5173
- Backend: http://localhost:5000
- Admin: http://localhost:5173/admin

## 📄 Pages

- **Home** - Landing page with featured projects
- **About** - Bio, experience, and skills
- **Projects** - Portfolio projects showcase
- **Blogs** - Articles and blog posts
- **Resume** - Work experience and education
- **Contact** - Contact form
- **Admin Dashboard** - Content management (no coding required)

## 🎯 Key Highlights

### Admin Dashboard
Easily manage your portfolio content through an intuitive admin panel:
- Add/Edit/Delete projects
- Update about section
- Manage skills
- No coding required

### Theme System
- Toggle between dark and light modes
- Auto-detects system preference
- Smooth transitions
- Persistent across sessions

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interface

## 🔌 API Endpoints

### Projects
- `GET /api/v1/projects` - Get all projects
- `GET /api/v1/projects/:id` - Get single project
- `POST /api/v1/projects` - Create project (admin)
- `PUT /api/v1/projects/:id` - Update project (admin)
- `DELETE /api/v1/projects/:id` - Delete project (admin)

### Skills
- `GET /api/v1/skills` - Get all skills
- `POST /api/v1/skills` - Add skill (admin)
- `DELETE /api/v1/skills/:id` - Delete skill (admin)

### Contact
- `POST /api/v1/contact` - Send message
- `GET /api/v1/contact` - Get messages (admin)

### Authentication
- `POST /api/v1/auth/login` - Admin login
- `GET /api/v1/auth/me` - Get current user

## 🚀 Deployment

### Backend (Render.com)
1. Push code to GitHub
2. Create new Web Service on [render.com](https://render.com)
3. Connect repository
4. Set root directory to `server`
5. Add environment variables
6. Deploy

### Frontend (Vercel)
1. Import repository on [vercel.com](https://vercel.com)
2. Set root directory to `client`
3. Add `VITE_API_URL` environment variable
4. Deploy

### Docker
```bash
docker-compose up --build
```

## 📄 License

MIT License - Free for personal and commercial use

---

**Built with ❤️ using MERN Stack**
