#!/usr/bin/env node

/**
 * ID Work Studio — Production Audit
 *
 * Run AFTER the production build:
 *   node audit-production.mjs
 *
 * This script is intentionally read-only.
 * It audits generated files inside dist/ and does not modify production output.
 *
 * Acceptance principle:
 * Source-code presence is not proof. Generated HTML is the pre-deployment gate.
 */

import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DIST = path.join(ROOT, 'dist');
const SITEMAP_FILE = path.join(DIST, 'sitemap.xml');

const SITE_ORIGIN = 'https://idworkstudio.com';

const TOOL_ROUTES = new Set([
  '/renovation-cost-calculator',
  '/total-home-budget-calculator',
  '/renovation-timeline-planner-singapore',
  '/hdb-renovation-style-quiz',
  '/hdb-defect-checklist',
  '/commercial-approval-planner',
  '/office-space-planner',
]);

const REQUIRED_CORE_ROUTES = [
  '/',
  '/residential',
  '/commercial',
  '/insights',
  '/gallery',
  '/contact',
];

const FAILURES = [];
const WARNINGS = [];
const PASSES = [];

function fail(route, message) {
  FAILURES.push({ route, message });
}

function warn(route, message) {
  WARNINGS.push({ route, message });
}

function pass(route, message) {
  PASSES.push({ route, message });
}

function countMatches(text, regex) {
  return (text.match(regex) || []).length;
}

function routeToHtmlFile(route) {
  if (route === '/') {
    return path.join(DIST, 'index.html');
  }

  const clean = route.replace(/^\/+|\/+$/g, '');
  return path.join(DIST, `${clean}.html`);
}

function htmlFileToRoute(file) {
  const rel = path.relative(DIST, file).replace(/\\/g, '/');

  if (rel === 'index.html') return '/';

  return `/${rel.replace(/\.html$/i, '')}`;
}

function walkHtmlFiles(dir) {
  const files = [];

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...walkHtmlFiles(full));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(full);
    }
  }

  return files;
}

function getCanonicalUrls(html) {
  const tags = html.match(/<link\b[^>]*\brel=["']canonical["'][^>]*>|<link\b[^>]*\bhref=["'][^"']+["'][^>]*\brel=["']canonical["'][^>]*>/gi) || [];

  return tags
    .map((tag) => {
      const match = tag.match(/\bhref=["']([^"']+)["']/i);
      return match ? match[1] : null;
    })
    .filter(Boolean);
}

function hasMetaDescription(html) {
  return /<meta\b(?=[^>]*\bname=["']description["'])[^>]*\bcontent=["'][^"']+["'][^>]*>/i.test(html)
    || /<meta\b(?=[^>]*\bcontent=["'][^"']+["'])[^>]*\bname=["']description["'][^>]*>/i.test(html);
}

function hasTitle(html) {
  return /<title>[^<]+<\/title>/i.test(html);
}

function hasH1(html) {
  return /<h1\b[^>]*>[\s\S]*?<\/h1>/i.test(html);
}

function hasNoindex(html) {
  return /<meta\b[^>]*\bname=["']robots["'][^>]*\bcontent=["'][^"']*\bnoindex\b[^"']*["'][^>]*>/i.test(html)
    || /<meta\b[^>]*\bcontent=["'][^"']*\bnoindex\b[^"']*["'][^>]*\bname=["']robots["'][^>]*>/i.test(html);
}

function hasPlaceholderMarker(html) {
  return /\bTODO\b|\bFIXME\b|\bTBD\b|coming soon|placeholder text/i.test(html);
}

function extractSitemapRoutes(xml) {
  const urls = [...xml.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/gi)].map((m) => m[1].trim());
  const routes = [];

  for (const url of urls) {
    try {
      const parsed = new URL(url);

      if (parsed.origin !== SITE_ORIGIN) {
        warn('sitemap.xml', `External sitemap URL found: ${url}`);
        continue;
      }

      routes.push(parsed.pathname === '' ? '/' : parsed.pathname.replace(/\/$/, '') || '/');
    } catch {
      fail('sitemap.xml', `Invalid URL in sitemap: ${url}`);
    }
  }

  return routes;
}

function auditCommonHtml(route, html, expectedCanonical) {
  if (!hasTitle(html)) {
    fail(route, 'Missing <title>.');
  } else {
    pass(route, 'Title present.');
  }

  if (!hasMetaDescription(html)) {
    fail(route, 'Missing meta description.');
  } else {
    pass(route, 'Meta description present.');
  }

  if (!hasH1(html)) {
    fail(route, 'Missing rendered H1.');
  } else {
    pass(route, 'Rendered H1 present.');
  }

  if (hasNoindex(html)) {
    fail(route, 'Accidental noindex detected.');
  } else {
    pass(route, 'No accidental noindex.');
  }

  const canonicals = getCanonicalUrls(html);

  if (canonicals.length !== 1) {
    fail(route, `Expected exactly 1 canonical; found ${canonicals.length}.`);
  } else if (canonicals[0] !== expectedCanonical) {
    fail(route, `Canonical mismatch. Expected ${expectedCanonical}; found ${canonicals[0]}.`);
  } else {
    pass(route, 'Canonical correct.');
  }

  if (hasPlaceholderMarker(html)) {
    warn(route, 'Possible TODO/FIXME/TBD/placeholder marker found in generated HTML. Review manually.');
  }
}

function auditArticle(route, html) {
  const articleCount = countMatches(html, /"@type"\s*:\s*"Article"/g);
  const faqCount = countMatches(html, /"@type"\s*:\s*"FAQPage"/g);
  const breadcrumbCount = countMatches(html, /"@type"\s*:\s*"BreadcrumbList"/g);

  if (articleCount !== 1) {
    fail(route, `Expected Article schema count = 1; found ${articleCount}.`);
  } else {
    pass(route, 'Article schema = 1.');
  }

  if (faqCount !== 1) {
    fail(route, `Expected FAQPage schema count = 1; found ${faqCount}.`);
  } else {
    pass(route, 'FAQPage schema = 1.');
  }

  if (breadcrumbCount !== 1) {
    fail(route, `Expected BreadcrumbList schema count = 1; found ${breadcrumbCount}.`);
  } else {
    pass(route, 'BreadcrumbList schema = 1.');
  }
}

function auditTool(route, html) {
  const softwareCount = countMatches(html, /"@type"\s*:\s*"SoftwareApplication"/g);

  if (softwareCount !== 1) {
    fail(route, `Expected SoftwareApplication schema count = 1; found ${softwareCount}.`);
  } else {
    pass(route, 'SoftwareApplication schema = 1.');
  }
}

function printSection(title) {
  console.log('');
  console.log(`===== ${title} =====`);
}

if (!fs.existsSync(DIST) || !fs.statSync(DIST).isDirectory()) {
  console.error('');
  console.error('IDWS PRODUCTION AUDIT');
  console.error('');
  console.error('FAIL: dist/ does not exist.');
  console.error('Run the production build first, then run:');
  console.error('  node audit-production.mjs');
  console.error('');
  console.error('PRODUCTION STATUS: DO NOT DEPLOY');
  process.exit(1);
}

if (!fs.existsSync(SITEMAP_FILE)) {
  console.error('');
  console.error('IDWS PRODUCTION AUDIT');
  console.error('');
  console.error('FAIL: dist/sitemap.xml does not exist.');
  console.error('');
  console.error('PRODUCTION STATUS: DO NOT DEPLOY');
  process.exit(1);
}

const sitemapXml = fs.readFileSync(SITEMAP_FILE, 'utf8');
const sitemapRoutes = extractSitemapRoutes(sitemapXml);
const sitemapRouteSet = new Set(sitemapRoutes);
const htmlFiles = walkHtmlFiles(DIST);
const generatedRoutes = new Set(htmlFiles.map(htmlFileToRoute));

for (const route of REQUIRED_CORE_ROUTES) {
  if (!sitemapRouteSet.has(route)) {
    fail(route, 'Required core route is missing from sitemap.');
  }
}

for (const route of TOOL_ROUTES) {
  if (!sitemapRouteSet.has(route)) {
    fail(route, 'Planning tool route is missing from sitemap.');
  }
}

for (const route of sitemapRoutes) {
  const file = routeToHtmlFile(route);

  if (!fs.existsSync(file)) {
    fail(route, `Sitemap URL has no generated static HTML file: ${path.relative(ROOT, file)}`);
    continue;
  }

  const html = fs.readFileSync(file, 'utf8');
  const expectedCanonical = route === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${route}`;

  auditCommonHtml(route, html, expectedCanonical);

  if (route.startsWith('/insights/')) {
    auditArticle(route, html);
  }

  if (TOOL_ROUTES.has(route)) {
    auditTool(route, html);
  }
}

for (const route of generatedRoutes) {
  if (route === '/') continue;

  // Only flag public route-like HTML. Vite support files are not .html routes.
  if (!sitemapRouteSet.has(route)) {
    warn(route, 'Generated HTML exists but route is not listed in sitemap. Review whether it should be indexed.');
  }
}

const articleRoutes = sitemapRoutes.filter((route) => route.startsWith('/insights/'));
const toolRoutesInSitemap = sitemapRoutes.filter((route) => TOOL_ROUTES.has(route));

printSection('IDWS PRODUCTION AUDIT');
console.log(`Sitemap URLs: ${sitemapRoutes.length}`);
console.log(`Generated HTML files: ${htmlFiles.length}`);
console.log(`Insights article routes audited: ${articleRoutes.length}`);
console.log(`Planning tool routes audited: ${toolRoutesInSitemap.length}`);

printSection('FAILURES');
if (FAILURES.length === 0) {
  console.log('None');
} else {
  for (const item of FAILURES) {
    console.log(`FAIL ${item.route}: ${item.message}`);
  }
}

printSection('WARNINGS');
if (WARNINGS.length === 0) {
  console.log('None');
} else {
  for (const item of WARNINGS) {
    console.log(`WARN ${item.route}: ${item.message}`);
  }
}

printSection('SUMMARY');
console.log(`Checks passed: ${PASSES.length}`);
console.log(`Failures: ${FAILURES.length}`);
console.log(`Warnings: ${WARNINGS.length}`);

console.log('');

if (FAILURES.length > 0) {
  console.log('PRODUCTION STATUS: DO NOT DEPLOY');
  process.exit(1);
}

console.log('PRODUCTION STATUS: BUILD VERIFIED');
console.log('Next gate: deploy, then perform live production verification.');
process.exit(0);
