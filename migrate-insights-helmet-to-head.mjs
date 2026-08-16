import fs from 'node:fs';
import path from 'node:path';

const files = [
  'src/components/ArticleRenovationCostSingapore2026.tsx',
  'src/components/ArticleHDBTimeline.tsx',
  'src/components/ArticleRenovationMistakes.tsx',
  'src/components/CommercialRenovationCostSingapore.tsx',
  'src/components/CommercialReinstatementSingapore.tsx',
  'src/components/CommercialRenovationApprovalsSingapore.tsx',
  'src/components/WhatToCheckBeforeSigningFnbShopLeaseSingapore.tsx',
  'src/components/OfficeRenovationCostSingapore.tsx',
  'src/components/OfficeRenovationTimelineSingapore.tsx',
  'src/components/OverseasRenovationShoppingMistakes.tsx',
  'src/components/FengShuiRenovationSingapore.tsx',
  'src/components/KitchenRenovationCostSingapore.tsx',
  'src/components/RenovationQuotationSingapore.tsx',
  'src/components/RealCostMovingIntoNewHomeSingapore.tsx',
  'src/components/HDBDefectChecklistBeforeRenovationSingapore.tsx',
  'src/components/FifteenRenovationDecisionsSingapore.tsx',
  'src/components/OfficeSpacePlanningSingapore.tsx',
];

const importPattern = /^import\s+\{\s*Helmet\s*\}\s+from\s+['"]react-helmet-async['"];\s*$/m;
const openingPattern = /<Helmet>/g;
const closingPattern = /<\/Helmet>/g;

const states = [];

console.log('Preflight: verifying 17 active Insights article files...\n');

for (const relativeFile of files) {
  const filePath = path.resolve(relativeFile);

  if (!fs.existsSync(filePath)) {
    throw new Error(`STOP: missing file: ${relativeFile}`);
  }

  const source = fs.readFileSync(filePath, 'utf8');
  const importMatches = source.match(importPattern);
  const openingMatches = source.match(openingPattern) || [];
  const closingMatches = source.match(closingPattern) || [];

  if (!importMatches) {
    throw new Error(`STOP: exact Helmet import not found in ${relativeFile}`);
  }

  if (openingMatches.length !== 1) {
    throw new Error(
      `STOP: expected exactly 1 <Helmet> in ${relativeFile}, found ${openingMatches.length}`
    );
  }

  if (closingMatches.length !== 1) {
    throw new Error(
      `STOP: expected exactly 1 </Helmet> in ${relativeFile}, found ${closingMatches.length}`
    );
  }

  if (source.includes("from 'vite-react-ssg'") || source.includes('from "vite-react-ssg"')) {
    throw new Error(`STOP: ${relativeFile} already imports from vite-react-ssg; review manually.`);
  }

  states.push({ relativeFile, filePath, source });
  console.log(`✓ ${relativeFile}`);
}

console.log('\nPreflight passed for all 17 files.');
console.log('Applying only the verified Helmet → Head migration...\n');

for (const { relativeFile, filePath, source } of states) {
  let updated = source.replace(
    importPattern,
    "import { Head } from 'vite-react-ssg';"
  );

  updated = updated.replace('<Helmet>', '<Head>');
  updated = updated.replace('</Helmet>', '</Head>');

  if (updated === source) {
    throw new Error(`STOP: no change produced for ${relativeFile}`);
  }

  const changedLineCount = source
    .split('\n')
    .filter((line, index) => line !== updated.split('\n')[index]).length;

  if (changedLineCount !== 3) {
    throw new Error(
      `STOP: expected exactly 3 changed lines in ${relativeFile}, found ${changedLineCount}`
    );
  }

  fs.writeFileSync(filePath, updated, 'utf8');
  console.log(`✓ migrated ${relativeFile}`);
}

console.log('\nMigration complete.');
console.log('Changed files: 17');
console.log('Per file: import only + <Helmet> + </Helmet>');
console.log('No article copy, schema objects, links, layout, styling, CTA, or translations changed.');
