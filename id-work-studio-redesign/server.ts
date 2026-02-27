import express from 'express';
import { createServer as createViteServer } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, 'public');
const ASSETS_DIR = path.join(PUBLIC_DIR, 'assets');
const GALLERY_DIR = path.join(ASSETS_DIR, 'projects');
const PROJECTS_FILE = path.join(ASSETS_DIR, 'projects.json');

// Ensure directories exist
if (!fs.existsSync(ASSETS_DIR)) {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });
}
if (!fs.existsSync(GALLERY_DIR)) {
  fs.mkdirSync(GALLERY_DIR, { recursive: true });
}

if (!fs.existsSync(PROJECTS_FILE)) {
  fs.writeFileSync(PROJECTS_FILE, '[]');
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Increase payload limit for base64 images
  app.use(express.json({ limit: '500mb' }));
  app.use(express.urlencoded({ extended: true, limit: '500mb' }));

  // API Routes (Mock for Preview Environment)
  app.get('/api/projects', (req, res) => {
    try {
      if (!fs.existsSync(PROJECTS_FILE)) {
        return res.json([]);
      }
      const data = fs.readFileSync(PROJECTS_FILE, 'utf-8');
      res.json(JSON.parse(data));
    } catch (error: any) {
      console.error('Error fetching projects:', error);
      res.status(500).json({ error: `Failed to fetch projects: ${error.message}` });
    }
  });

  app.post('/api/projects', (req, res) => {
    try {
      const { title, description, imageUrl, category, order } = req.body;
      
      if (!title || !imageUrl) {
        return res.status(400).json({ error: 'Title and Image are required' });
      }

      let projects = [];
      if (fs.existsSync(PROJECTS_FILE)) {
        try {
          const fileContent = fs.readFileSync(PROJECTS_FILE, 'utf-8');
          projects = JSON.parse(fileContent || '[]');
        } catch (e) {
          console.error('Error parsing projects.json:', e);
          projects = [];
        }
      }
      
      // Generate ID and filename
      const id = Date.now();
      const safeTitle = title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
      const filename = `${id}-${safeTitle}.jpg`;
      const categoryDir = (category || 'general').toLowerCase();
      const dirPath = path.join(GALLERY_DIR, categoryDir);
      
      // Ensure directory exists
      if (!fs.existsSync(dirPath)) {
        console.log(`Creating directory: ${dirPath}`);
        fs.mkdirSync(dirPath, { recursive: true });
      }

      const filePath = path.join(dirPath, filename);

      // Save image file
      try {
        const base64Data = imageUrl.replace(/^data:image\/\w+;base64,/, "");
        fs.writeFileSync(filePath, base64Data, 'base64');
      } catch (writeError: any) {
        console.error('Error writing image file:', writeError);
        return res.status(500).json({ error: 'Failed to save image file', details: writeError.message });
      }

      // Add to projects list
      const newProject = {
        id,
        title,
        description: description || '',
        imageUrl: `/assets/projects/${categoryDir}/${filename}`,
        category: category || 'General',
        createdAt: new Date().toISOString(),
        order: order || 0
      };

      projects.push(newProject);
      
      try {
        fs.writeFileSync(PROJECTS_FILE, JSON.stringify(projects, null, 2));
      } catch (writeJsonError: any) {
        console.error('Error updating projects.json:', writeJsonError);
        return res.status(500).json({ error: 'Failed to update project list', details: writeJsonError.message });
      }
      
      res.json({ id, success: true });
    } catch (error: any) {
      console.error('Error creating project:', error);
      res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
  });

  app.put('/api/projects/:id', (req, res) => {
    try {
      const { id } = req.params;
      const { order } = req.body;
      
      if (order === undefined) {
        return res.status(400).json({ error: 'Order is required' });
      }

      const projects = JSON.parse(fs.readFileSync(PROJECTS_FILE, 'utf-8'));
      const projectIndex = projects.findIndex((p: any) => String(p.id) === String(id));
      
      if (projectIndex === -1) {
        return res.status(404).json({ error: 'Project not found' });
      }

      projects[projectIndex].order = order;
      fs.writeFileSync(PROJECTS_FILE, JSON.stringify(projects, null, 2));
      
      res.json({ success: true });
    } catch (error) {
      console.error('Error updating project:', error);
      res.status(500).json({ error: 'Failed to update project' });
    }
  });

  app.delete('/api/projects/:id', (req, res) => {
    try {
      const { id } = req.params;
      const projects = JSON.parse(fs.readFileSync(PROJECTS_FILE, 'utf-8'));
      const projectIndex = projects.findIndex((p: any) => String(p.id) === String(id));
      
      if (projectIndex === -1) {
        return res.status(404).json({ error: 'Project not found' });
      }

      const project = projects[projectIndex];
      
      // Delete image file if it exists
      if (project.imageUrl) {
        const imagePath = path.join(PUBLIC_DIR, project.imageUrl);
        if (fs.existsSync(imagePath)) {
          fs.unlinkSync(imagePath);
        }
      }

      projects.splice(projectIndex, 1);
      fs.writeFileSync(PROJECTS_FILE, JSON.stringify(projects, null, 2));
      
      res.json({ success: true });
    } catch (error) {
      console.error('Error deleting project:', error);
      res.status(500).json({ error: 'Failed to delete project' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static('dist'));
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
