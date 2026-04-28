import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');

const canonicalMap = {
  'index.html': 'https://idworkstudio.com/',
  'residential.html': 'https://idworkstudio.com/residential',
  'commercial.html': 'https://idworkstudio.com/commercial',
  'contact.html': 'https://idworkstudio.com/contact',
  'gallery.html': 'https://idworkstudio.com/gallery',
  'insights.html': 'https://idworkstudio.com/insights',
  'insights/renovation-cost-singapore-2026.html': 'https://idworkstudio.com/insights/renovation-cost-singapore-2026',
  'insights/hdb-renovation-timeline-singapore.html': 'https://idworkstudio.com/insights/hdb-renovation-timeline-singapore',
  'insights/renovation-mistakes-singapore.html': 'https://idworkstudio.com/insights/renovation-mistakes-singapore',
  'commercial/reinstatement.html': 'https://idworkstudio.com/commercial/reinstatement',
  'commercial/office-renovation.html': 'https://idworkstudio.com/commercial/office-renovation',
  'commercial/retail-mall-renovation.html': 'https://idworkstudio.com/commercial/retail-mall-renovation',
  'commercial/shophouse-renovation.html': 'https://idworkstudio.com/commercial/shophouse-renovation',
  'commercial/permits-compliance.html': 'https://idworkstudio.com/commercial/permits-compliance',
  'renovation-cost-calculator.html': 'https://idworkstudio.com/renovation-cost-calculator',
};

for (const [relativeFile, canonicalUrl] of Object.entries(canonicalMap)) {
  const filePath = path.join(distDir, relativeFile);

  if (!fs.existsSync(filePath)) {
    console.warn(`Skipped missing file: ${relativeFile}`);
    continue;
  }

  let html = fs.readFileSync(filePath, 'utf8');

  html = html.replace(/<link\s+rel=["']canonical["'][^>]*>\s*/gi, '');
  html = html.replace(/<!--\s*❌ REMOVED GLOBAL CANONICAL HERE\s*-->\s*/g, '');

  const canonicalTag = `    <link rel="canonical" href="${canonicalUrl}" />\n`;

  if (html.includes('</head>')) {
    html = html.replace('</head>', `${canonicalTag}</head>`);
  } else {
    console.warn(`No </head> found in: ${relativeFile}`);
    continue;
  }

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Canonical injected: ${relativeFile} → ${canonicalUrl}`);
}