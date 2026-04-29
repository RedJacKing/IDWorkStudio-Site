import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');

// Per-page meta. This is the single source of truth for SSG head tags,
// because vite-react-ssg does not extract react-helmet-async context during build.
// When you update a page title/description in the React component, update it here too.
const pageMetaMap = {
  'index.html': {
    canonical:   'https://idworkstudio.com/',
    title:       'ID Work Studio | Renovation & Interior Design Singapore | Woodlands',
    description: "Singapore's trusted renovation and interior design firm. BCA & HDB registered. Specialising in commercial fit-outs, reinstatement & residential renovations.",
    ogTitle:     'ID Work Studio | Interior Design & Renovation Firm in Singapore',
    ogDesc:      'HDB-licensed and BCA-registered interior design and renovation firm in Singapore for residential homes, commercial spaces, and office reinstatement works.',
    ogUrl:       'https://idworkstudio.com/',
  },
  'residential.html': {
    canonical:   'https://idworkstudio.com/residential',
    title:       'HDB & Condo Interior Design Singapore | ID Work Studio',
    description: 'HDB-licensed and BCA-registered residential interior design and renovation in Singapore. Tailored solutions for BTO, resale flats, condominiums and landed homes.',
    ogTitle:     'HDB & Condo Interior Design Singapore | ID Work Studio',
    ogDesc:      'HDB-licensed and BCA-registered residential interior design and renovation in Singapore for BTO, resale, condo and landed homes.',
    ogUrl:       'https://idworkstudio.com/residential',
  },
  'commercial.html': {
    canonical:   'https://idworkstudio.com/commercial',
    title:       'Reliable Commercial Contractors Singapore | Office Renovation Packages | ID Work Studio',
    description: 'BCA-registered commercial renovation contractor in Singapore. Office fit-outs, retail interiors, F&B renovations & reinstatement. Free itemised quote.',
    ogTitle:     'Reliable Commercial Contractors Singapore | ID Work Studio',
    ogDesc:      'BCA-registered commercial interior design and renovation firm. Office fit-outs, retail, F&B and reinstatement. Free site survey.',
    ogUrl:       'https://idworkstudio.com/commercial',
  },
  'gallery.html': {
    canonical:   'https://idworkstudio.com/gallery',
    title:       'Renovation Portfolio Singapore | Commercial & Residential Projects | ID Work Studio',
    description: 'Browse ID Work Studio\'s renovation portfolio. HDB, condo, office, retail and F&B projects across Singapore by a BCA-registered interior design firm.',
    ogTitle:     'Renovation Portfolio Singapore | ID Work Studio',
    ogDesc:      'Commercial and residential renovation projects in Singapore by ID Work Studio — BCA-registered, HDB-approved.',
    ogUrl:       'https://idworkstudio.com/gallery',
  },
  'contact.html': {
    canonical:   'https://idworkstudio.com/contact',
    title:       'Contact ID Work Studio | Free Site Survey Singapore',
    description: 'Get in touch with ID Work Studio. BCA-registered renovation firm based in Woodlands, Singapore. Request a free site survey or itemised quotation today.',
    ogTitle:     'Contact ID Work Studio | Free Site Survey Singapore',
    ogDesc:      'Request a free site survey or quote from ID Work Studio — BCA-registered renovation and interior design firm in Singapore.',
    ogUrl:       'https://idworkstudio.com/contact',
  },
  'insights.html': {
    canonical:   'https://idworkstudio.com/insights',
    title:       'Renovation Insights & Planning Guides Singapore | ID Work Studio',
    description: 'Practical renovation guides for Singapore homeowners and businesses — covering costs, timelines, HDB rules and planning decisions.',
    ogTitle:     'Renovation Insights & Planning Guides Singapore | ID Work Studio',
    ogDesc:      'Renovation cost guides, HDB timelines and planning advice for Singapore homeowners by ID Work Studio.',
    ogUrl:       'https://idworkstudio.com/insights',
  },
  'insights/renovation-cost-singapore-2026.html': {
    canonical:   'https://idworkstudio.com/insights/renovation-cost-singapore-2026',
    title:       'Renovation Cost in Singapore (2026 Guide) | ID Work Studio',
    description: 'A practical guide to what homeowners in Singapore should realistically budget for BTO, resale and condo renovation in 2026, and what actually drives cost.',
    ogTitle:     'Renovation Cost in Singapore (2026 Guide)',
    ogDesc:      'How much does renovation cost in Singapore in 2026? Realistic budget ranges for HDB BTO, resale and condo — and what actually drives the final number.',
    ogUrl:       'https://idworkstudio.com/insights/renovation-cost-singapore-2026',
  },
  'insights/hdb-renovation-timeline-singapore.html': {
    canonical:   'https://idworkstudio.com/insights/hdb-renovation-timeline-singapore',
    title:       'HDB Renovation Timeline Singapore | How Long It Really Takes | ID Work Studio',
    description: 'A clear guide to how long HDB renovation takes in Singapore, where delays happen, and how to plan your BTO or resale renovation with more confidence.',
    ogTitle:     'HDB Renovation Timeline Singapore | ID Work Studio',
    ogDesc:      'How long does HDB renovation take? Realistic timelines for BTO and resale flats, and what causes delays.',
    ogUrl:       'https://idworkstudio.com/insights/hdb-renovation-timeline-singapore',
  },
  'insights/renovation-mistakes-singapore.html': {
    canonical:   'https://idworkstudio.com/insights/renovation-mistakes-singapore',
    title:       'Biggest Renovation Mistakes Singapore Homeowners Make | ID Work Studio',
    description: 'A practical guide to common renovation pitfalls in Singapore, and how clearer decisions early on can prevent delay, rework and regret.',
    ogTitle:     'Biggest Renovation Mistakes Singapore Homeowners Make',
    ogDesc:      'Common renovation mistakes Singapore homeowners make — and how to avoid them with better planning.',
    ogUrl:       'https://idworkstudio.com/insights/renovation-mistakes-singapore',
  },
  'commercial/reinstatement.html': {
    canonical:   'https://idworkstudio.com/commercial/reinstatement',
    title:       'Office Reinstatement Singapore | Bare Shell Handover | ID Work Studio',
    description: 'Professional office and retail reinstatement in Singapore. BCA-registered. SCDF-compliant. 100% handover success with full permit management. Free site survey.',
    ogTitle:     'Office Reinstatement Singapore | ID Work Studio',
    ogDesc:      'BCA-registered office reinstatement contractor in Singapore. SCDF permits, bare shell handover, 100% deposit recovery. Free site survey.',
    ogUrl:       'https://idworkstudio.com/commercial/reinstatement',
  },
  'commercial/office-renovation.html': {
    canonical:   'https://idworkstudio.com/commercial/office-renovation',
    title:       'Office Renovation Singapore | Turnkey Fit-Out | BCA-Registered | ID Work Studio',
    description: 'Turnkey office renovation and fit-out in Singapore by a BCA-registered firm. Hybrid work layouts, system furniture and full SCDF compliance. Free site survey.',
    ogTitle:     'Office Renovation Singapore | Turnkey Fit-Out | ID Work Studio',
    ogDesc:      'Office renovation and fit-out in Singapore by ID Work Studio — BCA-registered, full permit management, free site survey.',
    ogUrl:       'https://idworkstudio.com/commercial/office-renovation',
  },
  'commercial/retail-mall-renovation.html': {
    canonical:   'https://idworkstudio.com/commercial/retail-mall-renovation',
    title:       'Retail & Mall Store Renovation Singapore | MCST Submission | ID Work Studio',
    description: 'High-impact retail interior fit-outs for Singapore malls and shopfronts. MCST submission management, full permit coordination. Free site survey.',
    ogTitle:     'Retail & Mall Store Renovation Singapore | ID Work Studio',
    ogDesc:      'Retail interior fit-outs in Singapore with MCST submission management by ID Work Studio — BCA-registered.',
    ogUrl:       'https://idworkstudio.com/commercial/retail-mall-renovation',
  },
  'commercial/shophouse-renovation.html': {
    canonical:   'https://idworkstudio.com/commercial/shophouse-renovation',
    title:       'Shophouse & F&B Renovation Singapore | URA Compliant | ID Work Studio',
    description: 'Heritage shophouse renovations and F&B interior fit-outs in Singapore with full URA and SCDF compliance. Free site survey by BCA-registered firm.',
    ogTitle:     'Shophouse & F&B Renovation Singapore | ID Work Studio',
    ogDesc:      'Shophouse renovation and F&B fit-outs in Singapore — URA and SCDF compliant, by ID Work Studio.',
    ogUrl:       'https://idworkstudio.com/commercial/shophouse-renovation',
  },
  'commercial/permits-compliance.html': {
    canonical:   'https://idworkstudio.com/commercial/permits-compliance',
    title:       'Commercial Renovation Permits Singapore | BCA, SCDF & MCST | ID Work Studio',
    description: 'Full commercial renovation permit management in Singapore. BCA, SCDF, MCST and URA submissions handled in-house by ID Work Studio — BCA-registered firm.',
    ogTitle:     'Commercial Renovation Permits Singapore | ID Work Studio',
    ogDesc:      'BCA, SCDF, MCST and URA permit submissions for commercial renovations in Singapore — managed in-house by ID Work Studio.',
    ogUrl:       'https://idworkstudio.com/commercial/permits-compliance',
  },
  'renovation-cost-calculator.html': {
    canonical:   'https://idworkstudio.com/renovation-cost-calculator',
    title:       'Singapore Renovation Cost Calculator 2026 | Free Budget Estimate | ID Work Studio',
    description: 'Free renovation cost calculator for HDB, BTO, resale, condo and landed homes in Singapore. Estimate your budget in minutes — no sign-up required.',
    ogTitle:     'Singapore Renovation Cost Calculator 2026 | ID Work Studio',
    ogDesc:      'Estimate your HDB, condo or landed renovation budget in minutes with ID Work Studio\'s free Singapore renovation cost calculator.',
    ogUrl:       'https://idworkstudio.com/renovation-cost-calculator',
  },
};

// Helper: escape special characters for use in regex replacement
function escapeForRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Helper: encode HTML entities for safe injection into HTML attributes / title
function encodeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

for (const [relativeFile, meta] of Object.entries(pageMetaMap)) {
  const filePath = path.join(distDir, relativeFile);

  if (!fs.existsSync(filePath)) {
    console.warn(`Skipped missing file: ${relativeFile}`);
    continue;
  }

  let html = fs.readFileSync(filePath, 'utf8');

  if (!html.includes('</head>')) {
    console.warn(`No </head> found in: ${relativeFile}`);
    continue;
  }

  // ── 1. Canonical tag ──────────────────────────────────────────────────────
  html = html.replace(/<link\s+rel=["']canonical["'][^>]*>\s*/gi, '');
  html = html.replace(/<!--\s*❌ REMOVED GLOBAL CANONICAL HERE\s*-->\s*/g, '');

  // ── 2. Title ──────────────────────────────────────────────────────────────
  const encodedTitle = encodeHtml(meta.title);
  if (/<title>[^<]*<\/title>/i.test(html)) {
    html = html.replace(/<title>[^<]*<\/title>/i, `<title>${encodedTitle}</title>`);
  }

  // ── 3. Meta description ───────────────────────────────────────────────────
  const encodedDesc = encodeHtml(meta.description);
  if (/<meta\s+name=["']description["'][^>]*>/i.test(html)) {
    html = html.replace(
      /<meta\s+name=["']description["'][^>]*>/i,
      `<meta name="description" content="${encodedDesc}">`
    );
  }

  // ── 4. OG title ───────────────────────────────────────────────────────────
  const encodedOgTitle = encodeHtml(meta.ogTitle);
  if (/<meta\s+property=["']og:title["'][^>]*>/i.test(html)) {
    html = html.replace(
      /<meta\s+property=["']og:title["'][^>]*>/i,
      `<meta property="og:title" content="${encodedOgTitle}">`
    );
  }

  // ── 5. OG description ─────────────────────────────────────────────────────
  const encodedOgDesc = encodeHtml(meta.ogDesc);
  if (/<meta\s+property=["']og:description["'][^>]*>/i.test(html)) {
    html = html.replace(
      /<meta\s+property=["']og:description["'][^>]*>/i,
      `<meta property="og:description" content="${encodedOgDesc}">`
    );
  }

  // ── 6. OG URL ─────────────────────────────────────────────────────────────
  if (/<meta\s+property=["']og:url["'][^>]*>/i.test(html)) {
    html = html.replace(
      /<meta\s+property=["']og:url["'][^>]*>/i,
      `<meta property="og:url" content="${meta.ogUrl}">`
    );
  }

  // ── 7. Inject canonical just before </head> ───────────────────────────────
  const canonicalTag = `    <link rel="canonical" href="${meta.canonical}" />\n`;
  html = html.replace('</head>', `${canonicalTag}</head>`);

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`✓ ${relativeFile}`);
  console.log(`    title: ${meta.title}`);
  console.log(`    canonical: ${meta.canonical}`);
}
