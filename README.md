# Code-Editor

A real-time collaborative code editor powered by Monaco Editor, Yjs (CRDTs), Socket.IO, Express, and Docker, deployed on AWS.

## Features

- **Real-Time Collaboration**: Multi-user concurrent editing with conflict-free replicated data types via [Yjs](https://github.com/yjs/yjs) and `y-socket.io`.
- **Monaco Editor Integration**: Full-featured code editing experience using Monaco Editor and `y-monaco`.
- **User Presence & Awareness**: Track active collaborators live in the room.
- **Dockerized Architecture**: Multi-stage Docker build combining React frontend and Express backend into a single production container.
- **Cloud-Ready**: Ready for deployment to AWS (EC2 / ECS).

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, `@monaco-editor/react`, `yjs`, `y-monaco`, `y-socket.io`
- **Backend**: Node.js, Express, Socket.IO, `y-socket.io`
- **DevOps**: Docker (multi-stage build), AWS

## Getting Started

### Local Development

1. **Backend**:
   ```bash
   cd Backend
   npm install
   npm start
   ```

2. **Frontend**:
   ```bash
   cd Frontend
   npm install
   npm run dev
   ```

### Docker Build & Run

```bash
docker build -t code-editor .
docker run -p 3000:3000 code-editor
```
Visit `http://localhost:3000` in your browser.
