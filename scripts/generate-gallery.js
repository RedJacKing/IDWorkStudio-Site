import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_GALLERY_DIR = path.join(__dirname, '../public/gallery');
const IMAGE_GALLERY_DIR = path.join(__dirname, '../public/gallery/image');
const OUTPUT_FILE = path.join(__dirname, '../public/gallery.json');

// Ensure base directories exist
if (!fs.existsSync(BASE_GALLERY_DIR)) {
  fs.mkdirSync(BASE_GALLERY_DIR, { recursive: true });
}
if (!fs.existsSync(path.join(BASE_GALLERY_DIR, 'residential'))) {
  fs.mkdirSync(path.join(BASE_GALLERY_DIR, 'residential'), { recursive: true });
}
if (!fs.existsSync(path.join(BASE_GALLERY_DIR, 'commercial'))) {
  fs.mkdirSync(path.join(BASE_GALLERY_DIR, 'commercial'), { recursive: true });
}

// Function to scan directory
function scanDirectory(dir, category) {
  if (!fs.existsSync(dir)) return [];
  
  const actualFolderName = path.basename(dir);
  const files = fs.readdirSync(dir);
  return files
    .filter(file => /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(file))
    .map(file => {
      const filePath = path.join(dir, file);
      const stats = fs.statSync(filePath);
      
      // Extract title and order from filename
      // Format: "01_Project Name.jpg" -> order: 1, title: "Project Name"
      const nameWithoutExt = path.parse(file).name;
      const orderMatch = nameWithoutExt.match(/^(\d+)[_-]/);
      const order = orderMatch ? parseInt(orderMatch[1], 10) : 0;
      
      let title = nameWithoutExt
        .replace(/^\d+[_-]/, '') // Remove order prefix
        .replace(/[_-]/g, ' ')   // Replace separators with spaces
        .replace(/\b\w/g, c => c.toUpperCase()); // Capitalize words

      // Get path relative to public directory for the URL
      const publicDir = path.join(__dirname, '../public');
      const relativePath = path.relative(publicDir, filePath).replace(/\\/g, '/');
      
      // Encode the URL to handle spaces and special characters
      const encodedUrl = '/' + relativePath.split('/').map(encodeURIComponent).join('/');

      return {
        id: `${category}-${nameWithoutExt}`,
        title: title,
        category: category.charAt(0).toUpperCase() + category.slice(1),
        imageUrl: encodedUrl,
        description: '', // Could be extracted from a sidecar file if needed
        order: order,
        createdAt: stats.birthtime.toISOString()
      };
    });
}

// Function to find directory case-insensitively
function findDirectoryIgnoreCase(baseDir, targetName) {
  if (!fs.existsSync(baseDir)) return null;
  const files = fs.readdirSync(baseDir);
  const found = files.find(f => f.toLowerCase() === targetName.toLowerCase());
  return found ? path.join(baseDir, found) : null;
}

// Scan both directories (base and image subfolder)
const resDirBase = findDirectoryIgnoreCase(BASE_GALLERY_DIR, 'residential') || path.join(BASE_GALLERY_DIR, 'residential');
const comDirBase = findDirectoryIgnoreCase(BASE_GALLERY_DIR, 'commercial') || path.join(BASE_GALLERY_DIR, 'commercial');

const resDirImage = findDirectoryIgnoreCase(IMAGE_GALLERY_DIR, 'residential');
const comDirImage = findDirectoryIgnoreCase(IMAGE_GALLERY_DIR, 'commercial');

const residentialProjectsBase = scanDirectory(resDirBase, 'residential');
const commercialProjectsBase = scanDirectory(comDirBase, 'commercial');

const residentialProjectsImage = resDirImage ? scanDirectory(resDirImage, 'residential') : [];
const commercialProjectsImage = comDirImage ? scanDirectory(comDirImage, 'commercial') : [];

const allProjects = [
  ...residentialProjectsBase, 
  ...commercialProjectsBase,
  ...residentialProjectsImage,
  ...commercialProjectsImage
];

// Write to JSON file
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(allProjects, null, 2));

console.log(`Generated gallery.json with ${allProjects.length} projects.`);
