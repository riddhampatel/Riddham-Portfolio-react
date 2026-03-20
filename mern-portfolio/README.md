# MERN Portfolio

Personal developer portfolio built with a React frontend and Node.js/Express backend.

## Overview

This project is structured as an npm workspace monorepo:

- `client`: Vite + React frontend
- `server`: Express + MongoDB backend

The frontend now uses a content-first approach: profile info, social links, resume link, and blog data are maintained from one file.

## Current App Scope

- Public portfolio pages: Home, About, Projects, Blogs, Resume, Contact
- Responsive UI with Tailwind and Framer Motion
- Contact API integration
- No admin dashboard route in frontend

## Tech Stack

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
- MongoDB + Mongoose
- Socket.IO
- JWT utilities and middleware (backend side)

### Tooling
- npm workspaces
- Docker and Docker Compose

## Project Structure

```text
mern-portfolio/
|-- client/
|   |-- public/
|   |-- src/
|   |   |-- components/
|   |   |-- data/
|   |   |-- pages/
|   |   |-- store/
|   |   `-- styles/
|   `-- package.json
|-- server/
|   |-- src/
|   |   |-- controllers/
|   |   |-- middleware/
|   |   |-- models/
|   |   `-- routes/
|   `-- package.json
|-- docker-compose.yml
|-- package.json
`-- README.md
```

## Prerequisites

- Node.js 18+
- npm 9+
- MongoDB (local or cloud)

## Environment Variables

Create a `.env` file in `server/`:

```env
MONGODB_URI=mongodb://localhost:27017/mern-portfolio
JWT_SECRET=your_secret_key
PORT=5000
CLIENT_URL=http://localhost:5173
```

Frontend optional env in `client/.env`:

```env
VITE_API_URL=http://localhost:5000/api/v1
VITE_SOCKET_URL=http://localhost:5000
```

## Local Development

Install dependencies from project root:

```bash
npm install
```

Run frontend and backend together:

```bash
npm run dev
```

Or run separately:

```bash
npm run dev:client
npm run dev:server
```

Default local URLs:

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

## Build and Run

Build all workspaces:

```bash
npm run build
```

Start backend in production mode:

```bash
npm run start
```

## Portfolio Content Editing

Main content source:

- `client/src/data/portfolioContent.js`

Update this file to change:

- Name and personal details
- Social links
- Featured projects/blog cards
- Resume metadata

Resume file location:

- Place the PDF in `client/public/` (for example `client/public/ResumeR.pdf`)
- Set `resume.downloadUrl` in `client/src/data/portfolioContent.js` to match

## API Endpoints (Core)

- `GET /api/v1/projects`
- `GET /api/v1/projects/:id`
- `GET /api/v1/skills`
- `POST /api/v1/contact`

## Docker

Build and start containers:

```bash
docker-compose up --build
```

Or via scripts:

```bash
npm run docker:build
npm run docker:up
npm run docker:down
```

## Deployment Notes

- Deploy backend first, then frontend
- Set frontend `VITE_API_URL` to your deployed backend API base
- Set backend `CLIENT_URL` to your deployed frontend domain
- Ensure `MONGODB_URI` and `JWT_SECRET` are configured in backend environment

## License

MIT
