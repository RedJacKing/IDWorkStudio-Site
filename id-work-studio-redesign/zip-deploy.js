import fs from 'fs';
import path from 'path';
import archiver from 'archiver';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const output = fs.createWriteStream(path.join(__dirname, 'deploy-package.zip'));
const archive = archiver('zip', {
  zlib: { level: 9 }
});

output.on('close', function() {
  console.log(archive.pointer() + ' total bytes');
  console.log('archiver has been finalized and the output file descriptor has closed.');
});

archive.on('error', function(err) {
  throw err;
});

archive.pipe(output);

// Append dist folder contents to root
if (fs.existsSync('dist')) {
  archive.directory('dist/', false);
} else {
  console.warn('dist folder not found!');
}

// Append .netlify folder
if (fs.existsSync('.netlify')) {
  archive.directory('.netlify/', '.netlify');
} else {
  console.warn('.netlify folder not found!');
}

// Append netlify.toml
if (fs.existsSync('netlify.toml')) {
  archive.file('netlify.toml', { name: 'netlify.toml' });
}

archive.finalize();
