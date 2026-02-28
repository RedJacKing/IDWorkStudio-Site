import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, 'public');
const GALLERY_DIR = path.join(PUBLIC_DIR, 'gallery');
const OUTPUT_FILE = path.join(PUBLIC_DIR, 'projects.json');

// Ensure gallery directories exist
['residential', 'commercial'].forEach(dir => {
  const fullPath = path.join(GALLERY_DIR, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`Created directory: ${fullPath}`);
  }
});

const projects = [];
let idCounter = 1;

function scanDirectory(category) {
  const categoryPath = path.join(GALLERY_DIR, category);
  if (!fs.existsSync(categoryPath)) return;

  const items = fs.readdirSync(categoryPath);

  items.forEach(item => {
    const itemPath = path.join(categoryPath, item);
    const stats = fs.statSync(itemPath);

    if (stats.isDirectory()) {
      // It's a project folder (e.g., "Modern Loft")
      const projectTitle = item;
      const images = fs.readdirSync(itemPath).filter(f => /\.(jpg|jpeg|png|webp|gif)$/i.test(f));
      
      images.forEach((image, index) => {
        projects.push({
          id: `static-${category}-${projectTitle}-${index}`,
          title: projectTitle,
          description: '',
          imageUrl: `/gallery/${category}/${projectTitle}/${image}`,
          category: category.charAt(0).toUpperCase() + category.slice(1),
          createdAt: new Date().toISOString(),
          order: idCounter++
        });
      });
    } else if (/\.(jpg|jpeg|png|webp|gif)$/i.test(item)) {
      // It's a direct image file, use filename as title
      const title = path.parse(item).name;
      projects.push({
        id: `static-${category}-${title}`,
        title: title.replace(/[-_]/g, ' '),
        description: '',
        imageUrl: `/gallery/${category}/${item}`,
        category: category.charAt(0).toUpperCase() + category.slice(1),
        createdAt: new Date().toISOString(),
        order: idCounter++
      });
    }
  });
}

scanDirectory('residential');
scanDirectory('commercial');

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(projects, null, 2));
console.log(`Generated ${projects.length} projects to ${OUTPUT_FILE}`);
