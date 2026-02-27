import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORTFOLIO_DIR = path.join(__dirname, '../public/assets/portfolio');
const OUTPUT_FILE = path.join(__dirname, '../public/gallery.json');

// Ensure directories exist
if (!fs.existsSync(PORTFOLIO_DIR)) {
  fs.mkdirSync(PORTFOLIO_DIR, { recursive: true });
}
if (!fs.existsSync(path.join(PORTFOLIO_DIR, 'residential'))) {
  fs.mkdirSync(path.join(PORTFOLIO_DIR, 'residential'), { recursive: true });
}
if (!fs.existsSync(path.join(PORTFOLIO_DIR, 'commercial'))) {
  fs.mkdirSync(path.join(PORTFOLIO_DIR, 'commercial'), { recursive: true });
}

// Function to scan directory
function scanDirectory(dir, category) {
  if (!fs.existsSync(dir)) return [];
  
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

      return {
        id: `${category}-${nameWithoutExt}`,
        title: title,
        category: category.charAt(0).toUpperCase() + category.slice(1),
        imageUrl: `/assets/portfolio/${category}/${file}`,
        description: '', // Could be extracted from a sidecar file if needed
        order: order,
        createdAt: stats.birthtime.toISOString()
      };
    });
}

// Scan both directories
const residentialProjects = scanDirectory(path.join(PORTFOLIO_DIR, 'residential'), 'residential');
const commercialProjects = scanDirectory(path.join(PORTFOLIO_DIR, 'commercial'), 'commercial');

const allProjects = [...residentialProjects, ...commercialProjects];

// Write to JSON file
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(allProjects, null, 2));

console.log(`Generated gallery.json with ${allProjects.length} projects.`);
