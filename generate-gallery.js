import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PUBLIC_DIR = path.join(__dirname, '../public');

// Future optional structure:
// public/projects/{residential|commercial}/{project-slug}/{cover.webp, 01-*.webp, ...}
const PROJECTS_DIR = path.join(PUBLIC_DIR, 'projects');

// Current working structure:
// public/gallery/{residential|commercial}/*.webp
const LEGACY_GALLERY_DIR = path.join(PUBLIC_DIR, 'gallery');

const OUTPUT_FILE = path.join(PUBLIC_DIR, 'gallery.json');
const IMAGE_EXTENSIONS = /\.(jpg|jpeg|png|webp|gif|svg)$/i;
const VALID_CATEGORIES = ['residential', 'commercial'];

const CATEGORY_LABELS = {
  residential: 'Residential',
  commercial: 'Commercial',
};

const CATEGORY_SERVICE_LABELS = {
  residential: 'Residential Renovation',
  commercial: 'Commercial Renovation',
};

// Canonical labels. Keep this compact and business-specific, not a giant keyword list.
const TERM_DEFINITIONS = [
  // property / business types
  { terms: ['shopping mall'], label: 'Shopping Mall', type: 'property' },
  { terms: ['hdb'], label: 'HDB', type: 'property' },
  { terms: ['bto'], label: 'BTO', type: 'property' },
  { terms: ['resale'], label: 'Resale', type: 'property' },
  { terms: ['condo'], label: 'Condo', type: 'property' },
  { terms: ['landed'], label: 'Landed', type: 'property' },
  { terms: ['office'], label: 'Office', type: 'property' },
  { terms: ['retail'], label: 'Retail', type: 'property' },
  { terms: ['shop', 'store'], label: 'Shop', type: 'property' },
  { terms: ['mall'], label: 'Shopping Mall', type: 'property' },
  { terms: ['kiosk'], label: 'Kiosk', type: 'property' },
  { terms: ['bakery'], label: 'Bakery', type: 'property' },
  { terms: ['spa'], label: 'Spa', type: 'property' },
  { terms: ['school'], label: 'School', type: 'property' },
  { terms: ['restaurant'], label: 'Restaurant', type: 'property' },
  { terms: ['cafe'], label: 'Cafe', type: 'property' },
  { terms: ['clinic'], label: 'Clinic', type: 'property' },
  { terms: ['salon'], label: 'Salon', type: 'property' },
  { terms: ['showroom'], label: 'Showroom', type: 'property' },
  { terms: ['boutique'], label: 'Boutique', type: 'property' },
  { terms: ['warehouse'], label: 'Warehouse', type: 'property' },

  // spaces / scope
  { terms: ['walk in wardrobe', 'walk-in wardrobe'], label: 'Walk-In Wardrobe', type: 'space' },
  { terms: ['living room'], label: 'Living Room', type: 'space' },
  { terms: ['open concept'], label: 'Open Concept', type: 'space' },
  { terms: ['dining'], label: 'Dining', type: 'space' },
  { terms: ['kitchen'], label: 'Kitchen', type: 'space' },
  { terms: ['bedroom'], label: 'Bedroom', type: 'space' },
  { terms: ['bathroom'], label: 'Bathroom', type: 'space' },
  { terms: ['wardrobe'], label: 'Wardrobe', type: 'space' },
  { terms: ['corridor'], label: 'Corridor', type: 'space' },
  { terms: ['staircase'], label: 'Staircase', type: 'space' },
  { terms: ['platform'], label: 'Platform', type: 'space' },
  { terms: ['reception'], label: 'Reception', type: 'space' },
  { terms: ['meeting room'], label: 'Meeting Room', type: 'space' },
  { terms: ['workspace'], label: 'Workspace', type: 'space' },
  { terms: ['desking'], label: 'Desking System', type: 'space' },
  { terms: ['counter'], label: 'Counter', type: 'space' },
  { terms: ['display'], label: 'Display Area', type: 'space' },
  { terms: ['shelving'], label: 'Shelving', type: 'space' },
  { terms: ['glass partition', 'partitions'], label: 'Glass Partition', type: 'space' },
  { terms: ['shopfront'], label: 'Shopfront', type: 'space' },
  { terms: ['lighting'], label: 'Lighting', type: 'space' },

  // styles / design signals
  { terms: ['dark wood'], label: 'Dark Wood', type: 'style' },
  { terms: ['light wood'], label: 'Light Wood', type: 'style' },
  { terms: ['emerald green'], label: 'Emerald Green', type: 'style' },
  { terms: ['modern'], label: 'Modern', type: 'style' },
  { terms: ['japandi'], label: 'Japandi', type: 'style' },
  { terms: ['scandinavian'], label: 'Scandinavian', type: 'style' },
  { terms: ['minimalist'], label: 'Minimalist', type: 'style' },
  { terms: ['luxury'], label: 'Luxury', type: 'style' },
  { terms: ['industrial'], label: 'Industrial', type: 'style' },
  { terms: ['contemporary'], label: 'Contemporary', type: 'style' },
  { terms: ['marble'], label: 'Marble', type: 'style' },

  // locations / place signals
  { terms: ['bukit merah'], label: 'Bukit Merah', type: 'location' },
  { terms: ['woodlands'], label: 'Woodlands', type: 'location' },
  { terms: ['orchard'], label: 'Orchard', type: 'location' },
  { terms: ['leedon'], label: 'Leedon', type: 'location' },
  { terms: ['punggol'], label: 'Punggol', type: 'location' },
  { terms: ['tampines'], label: 'Tampines', type: 'location' },
  { terms: ['sengkang'], label: 'Sengkang', type: 'location' },
  { terms: ['macpherson'], label: 'MacPherson', type: 'location' },
  { terms: ['cbd'], label: 'CBD', type: 'location' },
  { terms: ['suntec'], label: 'Suntec', type: 'location' },
  { terms: ['takashimaya'], label: 'Takashimaya', type: 'location' },
  { terms: ['singpost'], label: 'SingPost', type: 'location' },
  { terms: ['singapore'], label: 'Singapore', type: 'location' },
];

const DISPLAY_WORD_OVERRIDES = new Map([
  ['hdb', 'HDB'],
  ['bto', 'BTO'],
  ['cbd', 'CBD'],
  ['lws', 'LWS'],
  ['f&b', 'F&B'],
  ['singpost', 'SingPost'],
  ['simplytoy', 'SimplyToy'],
  ['kpop', 'Kpop'],
  ['koong', 'Koong'],
  ['woh', 'Woh'],
  ['tong', 'Tong'],
  ['barcook', 'Barcook'],
  ['neuroblx', 'Neuroblx'],
  ['takashimaya', 'Takashimaya'],
  ['macpherson', 'MacPherson'],
]);

function ensureDirectories() {
  for (const dir of [PROJECTS_DIR, LEGACY_GALLERY_DIR]) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  }
  for (const category of VALID_CATEGORIES) {
    const legacyCategoryDir = path.join(LEGACY_GALLERY_DIR, category);
    if (!fs.existsSync(legacyCategoryDir)) fs.mkdirSync(legacyCategoryDir, { recursive: true });
  }
}

function toPublicUrl(filePath) {
  const relativePath = path.relative(PUBLIC_DIR, filePath).replace(/\\/g, '/');
  return '/' + relativePath.split('/').map(encodeURIComponent).join('/');
}

function normalizeSlug(value) {
  return String(value || '')
    .trim()
    .replace(/\.(jpg|jpeg|png|webp|gif|svg)$/gi, '')
    .replace(/\b(webp|jpg|jpeg|png|gif|svg)\b/gi, '')
    .replace(/[_\s]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();
}

function cleanWords(value) {
  return normalizeSlug(value)
    .replace(/^\d+[-_\s]*/, '')
    .replace(/(renovation|design)(\d+)$/i, '$1')
    .replace(/-?webp$/i, '')
    .replace(/-/g, ' ')
    .replace(/\b(webp|jpg|jpeg|png|gif|svg)\b/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function titleCase(value) {
  return String(value || '')
    .split(' ')
    .filter(Boolean)
    .map((word) => {
      const lower = word.toLowerCase();
      if (DISPLAY_WORD_OVERRIDES.has(lower)) return DISPLAY_WORD_OVERRIDES.get(lower);
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join(' ');
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function extractOrder(value) {
  const match = String(value || '').match(/^(\d+)[-_\s]/);
  return match ? Number.parseInt(match[1], 10) : 9999;
}

function listImageFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => IMAGE_EXTENSIONS.test(file))
    .sort((a, b) => {
      const orderA = extractOrder(a);
      const orderB = extractOrder(b);
      if (orderA !== orderB) return orderA - orderB;
      return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
    });
}

function getNormalizedSearchText(value) {
  return ` ${cleanWords(value).toLowerCase()} `;
}

function hasTerm(searchText, term) {
  const normalizedTerm = term.toLowerCase().replace(/[-_]+/g, ' ');
  return searchText.includes(` ${normalizedTerm} `);
}

function inferTerms(text) {
  const searchText = getNormalizedSearchText(text);
  const found = { property: [], space: [], style: [], location: [] };

  for (const definition of TERM_DEFINITIONS) {
    if (definition.terms.some((term) => hasTerm(searchText, term))) {
      found[definition.type].push(definition.label);
    }
  }

  return {
    propertyTypes: unique(found.property),
    spaces: unique(found.space),
    styles: unique(found.style),
    locations: unique(found.location.filter((location) => location !== 'Singapore')),
  };
}

function removeKnownMetaTerms(rawText, termsToRemove) {
  let text = ` ${cleanWords(rawText).toLowerCase()} `;

  // Remove place/property signals that are better shown as metadata than inside the main title.
  const sortedTerms = [...termsToRemove].sort((a, b) => b.length - a.length);
  for (const term of sortedTerms) {
    const normalizedTerm = term.toLowerCase().replace(/[-_]+/g, ' ');
    text = text.replace(new RegExp(`\\s${normalizedTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s`, 'g'), ' ');
  }

  return text
    .replace(/\b(singapore|commercial|residential)\b/gi, ' ')
    .replace(/\b(webp|jpg|jpeg|png|gif|svg)\b/gi, ' ')
    .replace(/\b(renovation|design)(\d+)\b/gi, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

function buildDisplayTitle({ slug, propertyTypes, locations }) {
  const rawTitle = cleanWords(slug);

  const removablePropertyTerms = propertyTypes
    .filter((label) => ['HDB', 'BTO', 'Condo', 'Landed'].includes(label))
    .map((label) => label.toLowerCase());

  const removableLocationTerms = locations.map((label) => label.toLowerCase());
  const cleaned = removeKnownMetaTerms(rawTitle, [...removablePropertyTerms, ...removableLocationTerms]);

  const finalText = cleaned || rawTitle;
  return titleCase(finalText).replace(/\s+/g, ' ').trim();
}

function buildMetaLine(values) {
  return unique(values).filter(Boolean).slice(0, 3).join(' • ');
}

function inferMetadata({ category, slug, imageNames }) {
  const combinedText = [slug, ...imageNames.map((name) => path.parse(name).name)].join(' ');
  const terms = inferTerms(combinedText);

  const propertyTypes = terms.propertyTypes.slice(0, 4);
  const spaces = terms.spaces.slice(0, 4);
  const styles = terms.styles.slice(0, 3);
  const locations = terms.locations.slice(0, 2);

  const rawTitle = titleCase(cleanWords(slug));
  const displayTitle = buildDisplayTitle({ slug, propertyTypes, locations });
  const serviceType = CATEGORY_SERVICE_LABELS[category] || 'Renovation';
  const primaryPropertyType = propertyTypes[0] || (category === 'commercial' ? 'Commercial Space' : 'Home');
  const primarySpace = spaces[0] || '';
  const primaryStyle = styles[0] || '';
  const primaryLocation = locations[0] || 'Singapore';

  const metaLine = buildMetaLine([primaryPropertyType, primaryLocation]);
  const scopeLine = buildMetaLine(spaces);
  const styleLine = buildMetaLine(styles);

  // Structured text is kept for schema/alt/future project pages, not shown as a big paragraph in the modal.
  const descriptionParts = [primaryStyle, primaryPropertyType, primarySpace, serviceType, primaryLocation].filter(Boolean);
  const description = `${descriptionParts.join(' ')} by ID Work Studio Singapore.`
    .replace(/\s+/g, ' ')
    .trim();

  const altParts = [displayTitle, primaryPropertyType, primaryLocation, 'ID Work Studio Singapore'].filter(Boolean);
  const altText = unique(altParts).join(' - ');

  const tags = unique([
    serviceType,
    ...propertyTypes,
    ...spaces,
    ...styles,
    ...locations,
    'Singapore Renovation',
  ]).slice(0, 10);

  return {
    rawTitle,
    title: displayTitle,
    displayTitle,
    description,
    altText,
    serviceType,
    primaryPropertyType,
    primarySpace,
    primaryStyle,
    primaryLocation,
    metaLine,
    scopeLine,
    styleLine,
    propertyTypes,
    spaces,
    styles,
    locations,
    tags,
  };
}

function getDirectoryBirthtime(dir, imageFiles) {
  const candidates = imageFiles.map((file) => fs.statSync(path.join(dir, file)).birthtimeMs);
  const minBirthtime = candidates.length ? Math.min(...candidates) : fs.statSync(dir).birthtimeMs;
  return new Date(minBirthtime).toISOString();
}

function createProjectRecord({ category, slugSource, imageFiles, projectDir, sourceType }) {
  const slug = normalizeSlug(slugSource);
  const coverFile = imageFiles.find((file) => /^cover\./i.test(file)) || imageFiles[0];
  const images = imageFiles.map((file) => toPublicUrl(path.join(projectDir, file)));
  const coverImage = toPublicUrl(path.join(projectDir, coverFile));
  const metadata = inferMetadata({ category, slug, imageNames: imageFiles });

  return {
    id: `${category}-${slug}`,
    slug,
    rawTitle: metadata.rawTitle,
    title: metadata.title,
    displayTitle: metadata.displayTitle,
    category: CATEGORY_LABELS[category],
    serviceType: metadata.serviceType,
    imageUrl: coverImage,
    coverImage,
    images,
    description: metadata.description,
    altText: metadata.altText,
    order: extractOrder(slugSource),
    createdAt:
      sourceType === 'project-folder'
        ? getDirectoryBirthtime(projectDir, imageFiles)
        : fs.statSync(path.join(projectDir, imageFiles[0])).birthtime.toISOString(),
    primaryPropertyType: metadata.primaryPropertyType,
    primarySpace: metadata.primarySpace,
    primaryStyle: metadata.primaryStyle,
    primaryLocation: metadata.primaryLocation,
    metaLine: metadata.metaLine,
    scopeLine: metadata.scopeLine,
    styleLine: metadata.styleLine,
    propertyTypes: metadata.propertyTypes,
    spaces: metadata.spaces,
    styles: metadata.styles,
    locations: metadata.locations,
    tags: metadata.tags,
    sourceType,
  };
}

function scanProjectFolders(categoryDir, category) {
  if (!fs.existsSync(categoryDir)) return [];

  return fs
    .readdirSync(categoryDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const projectDir = path.join(categoryDir, entry.name);
      const imageFiles = listImageFiles(projectDir);
      if (imageFiles.length === 0) return null;

      return createProjectRecord({
        category,
        slugSource: entry.name,
        imageFiles,
        projectDir,
        sourceType: 'project-folder',
      });
    })
    .filter(Boolean);
}

function scanLegacyFlatImages(categoryDir, category) {
  const imageFiles = listImageFiles(categoryDir);

  return imageFiles.map((file) => {
    const nameWithoutExt = path.parse(file).name;
    return createProjectRecord({
      category,
      slugSource: nameWithoutExt,
      imageFiles: [file],
      projectDir: categoryDir,
      sourceType: 'legacy-flat-image',
    });
  });
}

function scanAllProjects() {
  const projects = [];

  for (const category of VALID_CATEGORIES) {
    const newCategoryDir = path.join(PROJECTS_DIR, category);
    const legacyCategoryDir = path.join(LEGACY_GALLERY_DIR, category);

    projects.push(...scanProjectFolders(newCategoryDir, category));
    projects.push(...scanLegacyFlatImages(legacyCategoryDir, category));
  }

  return projects.sort((a, b) => {
    if (a.category !== b.category) return a.category.localeCompare(b.category);
    if (a.order !== b.order) return a.order - b.order;
    return a.title.localeCompare(b.title, undefined, { numeric: true, sensitivity: 'base' });
  });
}

ensureDirectories();
const allProjects = scanAllProjects();
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(allProjects, null, 2));

const folderCount = allProjects.filter((project) => project.sourceType === 'project-folder').length;
const legacyCount = allProjects.filter((project) => project.sourceType === 'legacy-flat-image').length;

console.log(`Generated gallery.json with ${allProjects.length} items.`);
console.log(`Project-folder items: ${folderCount}`);
console.log(`Legacy flat-image items: ${legacyCount}`);
