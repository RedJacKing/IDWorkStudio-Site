import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');

const pageMetaMap = {
  'index.html': {
    canonical: 'https://idworkstudio.com/',
    title: 'Renovation Contractor Singapore | HDB, Condo & Commercial | ID Work Studio',
    description: 'ID Work Studio is a BCA-registered and HDB-registered renovation firm in Singapore for HDB, condo, office, retail and commercial interiors. Get a free site consultation.',
    ogTitle: 'Renovation Contractor Singapore | HDB, Condo & Commercial | ID Work Studio',
    ogDesc: 'BCA-registered and HDB-registered renovation firm for homes, offices, retail and commercial spaces in Singapore.',
    ogUrl: 'https://idworkstudio.com/',
  },
  'residential.html': {
    canonical: 'https://idworkstudio.com/residential',
    title: 'HDB & Condo Interior Design Singapore | ID Work Studio',
    description: 'HDB-licensed and BCA-registered residential interior design and renovation in Singapore. Tailored solutions for BTO, resale flats, condominiums and landed homes.',
    ogTitle: 'HDB & Condo Interior Design Singapore | ID Work Studio',
    ogDesc: 'HDB-licensed and BCA-registered residential interior design and renovation in Singapore for BTO, resale, condo and landed homes.',
    ogUrl: 'https://idworkstudio.com/residential',
  },
  'commercial.html': {
    canonical: 'https://idworkstudio.com/commercial',
    title: 'Commercial Renovation Singapore | Office, Retail & F&B Fit-Out | ID Work Studio',
    description: 'Commercial renovation contractor in Singapore for office, retail and F&B projects. Real cost, timeline, MCST and SCDF approvals explained. Free site survey.',
    ogTitle: 'Commercial Renovation Singapore | Office, Retail & F&B Fit-Out',
    ogDesc: 'Office, retail and F&B renovation in Singapore. Real cost, timeline and permit requirements explained by a BCA-registered contractor.',
    ogUrl: 'https://idworkstudio.com/commercial',
  },
  'gallery.html': {
    canonical: 'https://idworkstudio.com/gallery',
    title: 'Renovation Portfolio Singapore | Commercial & Residential Projects | ID Work Studio',
    description: "Browse ID Work Studio's renovation portfolio. HDB, condo, office, retail and F&B projects across Singapore by a BCA-registered interior design firm.",
    ogTitle: 'Renovation Portfolio Singapore | ID Work Studio',
    ogDesc: 'Commercial and residential renovation projects in Singapore by ID Work Studio — BCA-registered, HDB-approved.',
    ogUrl: 'https://idworkstudio.com/gallery',
  },
  'contact.html': {
    canonical: 'https://idworkstudio.com/contact',
    title: 'Contact ID Work Studio | Free Site Survey Singapore',
    description: 'Get in touch with ID Work Studio. BCA-registered renovation firm based in Woodlands, Singapore. Request a free site survey or itemised quotation today.',
    ogTitle: 'Contact ID Work Studio | Free Site Survey Singapore',
    ogDesc: 'Request a free site survey or quote from ID Work Studio — BCA-registered renovation and interior design firm in Singapore.',
    ogUrl: 'https://idworkstudio.com/contact',
  },
  'insights.html': {
    canonical: 'https://idworkstudio.com/insights',
    title: 'Renovation Insights & Planning Guides Singapore | ID Work Studio',
    description: 'Practical renovation guides for Singapore homeowners and businesses — covering costs, timelines, HDB rules and planning decisions.',
    ogTitle: 'Renovation Insights & Planning Guides Singapore | ID Work Studio',
    ogDesc: 'Renovation cost guides, HDB timelines and planning advice for Singapore homeowners by ID Work Studio.',
    ogUrl: 'https://idworkstudio.com/insights',
  },
  'insights/renovation-cost-singapore-2026.html': {
    canonical: 'https://idworkstudio.com/insights/renovation-cost-singapore-2026',
    title: 'Renovation Cost in Singapore (2026 Guide) | ID Work Studio',
    description: 'A practical guide to what homeowners in Singapore should realistically budget for BTO, resale and condo renovation in 2026, and what actually drives cost.',
    ogTitle: 'Renovation Cost in Singapore (2026 Guide)',
    ogDesc: 'How much does renovation cost in Singapore in 2026? Realistic budget ranges for HDB BTO, resale and condo — and what actually drives the final number.',
    ogUrl: 'https://idworkstudio.com/insights/renovation-cost-singapore-2026',
  },
  'insights/hdb-renovation-timeline-singapore.html': {
    canonical: 'https://idworkstudio.com/insights/hdb-renovation-timeline-singapore',
    title: 'HDB Renovation Timeline Singapore | How Long It Really Takes | ID Work Studio',
    description: 'A clear guide to how long HDB renovation takes in Singapore, where delays happen, and how to plan your BTO or resale renovation with more confidence.',
    ogTitle: 'HDB Renovation Timeline Singapore | ID Work Studio',
    ogDesc: 'How long does HDB renovation take? Realistic timelines for BTO and resale flats, and what causes delays.',
    ogUrl: 'https://idworkstudio.com/insights/hdb-renovation-timeline-singapore',
  },
  'insights/renovation-mistakes-singapore.html': {
    canonical: 'https://idworkstudio.com/insights/renovation-mistakes-singapore',
    title: 'Biggest Renovation Mistakes Singapore Homeowners Make | ID Work Studio',
    description: 'A practical guide to common renovation pitfalls in Singapore, and how clearer decisions early on can prevent delay, rework and regret.',
    ogTitle: 'Biggest Renovation Mistakes Singapore Homeowners Make',
    ogDesc: 'Common renovation mistakes Singapore homeowners make — and how to avoid them with better planning.',
    ogUrl: 'https://idworkstudio.com/insights/renovation-mistakes-singapore',
  },
  'insights/commercial-renovation-cost-singapore.html': {
    canonical: 'https://idworkstudio.com/insights/commercial-renovation-cost-singapore',
    title: 'Commercial Renovation Cost Singapore (2026 Guide) | ID Work Studio',
    description: 'Commercial renovation cost Singapore guide for office, retail and F&B spaces. See realistic 2026 pricing, approval requirements, hidden costs and budget planning tips.',
    ogTitle: 'Commercial Renovation Cost Singapore (2026 Guide)',
    ogDesc: 'Realistic commercial renovation costs in Singapore for office, retail and F&B spaces, including approvals, hidden costs and budget planning.',
    ogUrl: 'https://idworkstudio.com/insights/commercial-renovation-cost-singapore',
  },
   'insights/office-renovation-cost-singapore.html': {
    canonical: 'https://idworkstudio.com/insights/office-renovation-cost-singapore',
    title: 'Office Renovation Cost Singapore (2026 Guide) | ID Work Studio',
    description: 'Real office renovation cost in Singapore by office size. Includes cost breakdown, timeline, landlord approval, M&E works and hidden costs explained by a BCA-registered contractor.',
    ogTitle: 'Office Renovation Cost Singapore (2026 Guide)',
    ogDesc: 'How much does office renovation cost in Singapore? Real fit-out pricing by size, timeline, approvals and hidden costs explained.',
    ogUrl: 'https://idworkstudio.com/insights/office-renovation-cost-singapore',
  },
  'insights/office-renovation-timeline-singapore.html': {
    canonical: 'https://idworkstudio.com/insights/office-renovation-timeline-singapore',
    title: 'Office Renovation Timeline Singapore | How Long Fit-Out Takes | ID Work Studio',
    description: 'Office renovation timeline Singapore guide. See realistic fit-out timelines, Gantt schedule, landlord approval, MCST, SCDF, M&E coordination, delays and FAQ.',
    ogTitle: 'Office Renovation Timeline Singapore',
    ogDesc: 'How long does office renovation take in Singapore? Realistic timeline, Gantt schedule, approvals, site works and handover explained by ID Work Studio.',
    ogUrl: 'https://idworkstudio.com/insights/office-renovation-timeline-singapore',
  },
  'commercial/reinstatement.html': {
    canonical: 'https://idworkstudio.com/commercial/reinstatement',
    title: 'Office Reinstatement Singapore | Bare Shell Handover | ID Work Studio',
    description: 'Professional office and retail reinstatement in Singapore. BCA-registered. SCDF-compliant. 100% handover success with full permit management. Free site survey.',
    ogTitle: 'Office Reinstatement Singapore | ID Work Studio',
    ogDesc: 'BCA-registered office reinstatement contractor in Singapore. SCDF permits, bare shell handover, 100% deposit recovery. Free site survey.',
    ogUrl: 'https://idworkstudio.com/commercial/reinstatement',
  },
  'commercial/office-renovation.html': {
    canonical: 'https://idworkstudio.com/commercial/office-renovation',
    title: 'Office Renovation Singapore | Turnkey Fit-Out | BCA-Registered | ID Work Studio',
    description: 'Turnkey office renovation and fit-out in Singapore by a BCA-registered firm. Hybrid work layouts, system furniture and full SCDF compliance. Free site survey.',
    ogTitle: 'Office Renovation Singapore | Turnkey Fit-Out | ID Work Studio',
    ogDesc: 'Office renovation and fit-out in Singapore by ID Work Studio — BCA-registered, full permit management, free site survey.',
    ogUrl: 'https://idworkstudio.com/commercial/office-renovation',
  },
  'commercial/retail-mall-renovation.html': {
    canonical: 'https://idworkstudio.com/commercial/retail-mall-renovation',
    title: 'Retail & Mall Store Renovation Singapore | MCST Submission | ID Work Studio',
    description: 'High-impact retail interior fit-outs for Singapore malls and shopfronts. MCST submission management, full permit coordination. Free site survey.',
    ogTitle: 'Retail & Mall Store Renovation Singapore | ID Work Studio',
    ogDesc: 'Retail interior fit-outs in Singapore with MCST submission management by ID Work Studio — BCA-registered.',
    ogUrl: 'https://idworkstudio.com/commercial/retail-mall-renovation',
  },
  'commercial/shophouse-renovation.html': {
    canonical: 'https://idworkstudio.com/commercial/shophouse-renovation',
    title: 'Shophouse & F&B Renovation Singapore | URA Compliant | ID Work Studio',
    description: 'Heritage shophouse renovations and F&B interior fit-outs in Singapore with full URA and SCDF compliance. Free site survey by BCA-registered firm.',
    ogTitle: 'Shophouse & F&B Renovation Singapore | ID Work Studio',
    ogDesc: 'Shophouse renovation and F&B fit-outs in Singapore — URA and SCDF compliant, by ID Work Studio.',
    ogUrl: 'https://idworkstudio.com/commercial/shophouse-renovation',
  },
  'commercial/permits-compliance.html': {
    canonical: 'https://idworkstudio.com/commercial/permits-compliance',
    title: 'Commercial Renovation Permits Singapore | BCA, SCDF & MCST | ID Work Studio',
    description: 'Full commercial renovation permit management in Singapore. BCA, SCDF, MCST and URA submissions handled in-house by ID Work Studio — BCA-registered firm.',
    ogTitle: 'Commercial Renovation Permits Singapore | ID Work Studio',
    ogDesc: 'BCA, SCDF, MCST and URA permit submissions for commercial renovations in Singapore — managed in-house by ID Work Studio.',
    ogUrl: 'https://idworkstudio.com/commercial/permits-compliance',
  },
  'renovation-cost-calculator.html': {
    canonical: 'https://idworkstudio.com/renovation-cost-calculator',
    title: 'Singapore Renovation Cost Calculator 2026 | Free Budget Estimate | ID Work Studio',
    description: 'Free renovation cost calculator for HDB, BTO, resale, condo and landed homes in Singapore. Estimate your budget in minutes — no sign-up required.',
    ogTitle: 'Singapore Renovation Cost Calculator 2026 | ID Work Studio',
    ogDesc: "Estimate your HDB, condo or landed renovation budget in minutes with ID Work Studio's free Singapore renovation cost calculator.",
    ogUrl: 'https://idworkstudio.com/renovation-cost-calculator',
  },
  'hdb-renovation-style-quiz.html': {
    canonical: 'https://idworkstudio.com/hdb-renovation-style-quiz',
    title: 'HDB Renovation Style Quiz Singapore | Find Your Home Design Style | ID Work Studio',
    description: 'Take ID Work Studio’s HDB renovation style quiz to discover your preferred Singapore home design direction, from Japandi and Muji to modern luxury and Scandinavian.',
    ogTitle: 'HDB Renovation Style Quiz Singapore | ID Work Studio',
    ogDesc: 'Discover your ideal HDB interior design style with a Singapore-focused renovation style quiz by ID Work Studio.',
    ogUrl: 'https://idworkstudio.com/hdb-renovation-style-quiz',
  },
};

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

  html = html.replace(/<link\s+rel=["']canonical["'][^>]*>\s*/gi, '');
  html = html.replace(/<!--\s*❌ REMOVED GLOBAL CANONICAL HERE\s*-->\s*/g, '');

  const encodedTitle = encodeHtml(meta.title);
  if (/<title>[^<]*<\/title>/i.test(html)) {
    html = html.replace(/<title>[^<]*<\/title>/i, `<title>${encodedTitle}</title>`);
  }

  const encodedDesc = encodeHtml(meta.description);
  if (/<meta\s+name=["']description["'][^>]*>/i.test(html)) {
    html = html.replace(
      /<meta\s+name=["']description["'][^>]*>/i,
      `<meta name="description" content="${encodedDesc}">`
    );
  }

  const encodedOgTitle = encodeHtml(meta.ogTitle);
  if (/<meta\s+property=["']og:title["'][^>]*>/i.test(html)) {
    html = html.replace(
      /<meta\s+property=["']og:title["'][^>]*>/i,
      `<meta property="og:title" content="${encodedOgTitle}">`
    );
  }

  const encodedOgDesc = encodeHtml(meta.ogDesc);
  if (/<meta\s+property=["']og:description["'][^>]*>/i.test(html)) {
    html = html.replace(
      /<meta\s+property=["']og:description["'][^>]*>/i,
      `<meta property="og:description" content="${encodedOgDesc}">`
    );
  }

  if (/<meta\s+property=["']og:url["'][^>]*>/i.test(html)) {
    html = html.replace(
      /<meta\s+property=["']og:url["'][^>]*>/i,
      `<meta property="og:url" content="${meta.ogUrl}">`
    );
  }

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://idworkstudio.com/#business',
        name: 'ID Work Studio',
        url: 'https://idworkstudio.com/',
        telephone: '+65 6816 2872',
        email: 'contact@idworkstudio.com',
        description: 'BCA-registered and HDB-registered renovation and interior design firm in Singapore.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '11 Woodlands Close, Woodlands 11, #03-10',
          addressLocality: 'Singapore',
          postalCode: '737853',
          addressCountry: 'SG',
        },
        areaServed: {
          '@type': 'Country',
          name: 'Singapore',
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${meta.canonical}#webpage`,
        url: meta.canonical,
        name: meta.title,
        description: meta.description,
      },
    ],
  };

  if (relativeFile.startsWith('insights/')) {
    schema['@graph'].push({
      '@type': 'Article',
      '@id': `${meta.canonical}#article`,
      headline: meta.ogTitle || meta.title,
      description: meta.description,
      url: meta.canonical,
      author: {
        '@type': 'Organization',
        name: 'ID Work Studio',
      },
      publisher: {
        '@type': 'Organization',
        name: 'ID Work Studio',
      },
    });
  }

  if (relativeFile.startsWith('commercial/') || relativeFile === 'commercial.html' || relativeFile === 'residential.html') {
    schema['@graph'].push({
      '@type': 'Service',
      '@id': `${meta.canonical}#service`,
      name: meta.ogTitle || meta.title,
      description: meta.description,
      provider: {
        '@id': 'https://idworkstudio.com/#business',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Singapore',
      },
    });
  }

  if (relativeFile === 'commercial.html') {
    schema['@graph'].push({
      '@type': 'FAQPage',
      '@id': `${meta.canonical}#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does commercial renovation cost in Singapore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Commercial renovation in Singapore typically costs $30 to $180 psf for offices, $80 to $150 psf for retail shops, and $120 to $250 psf for F&B outlets. The final range is mainly affected by M&E works, fire safety requirements, carpentry, flooring, ceiling works and landlord reinstatement conditions.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does office renovation cost in Singapore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A basic office renovation usually starts from $30 to $60 psf. A mid-range office with meeting rooms, pantry, flooring, ceiling and electrical works is usually $60 to $100 psf. Premium office fit-outs with feature walls, acoustic rooms, customised carpentry and higher-grade finishes can reach $100 to $180 psf.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does commercial renovation usually take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most commercial renovation projects take 6 to 12 weeks. Design and planning usually takes 2 to 3 weeks, landlord or MCST submission takes 2 to 4 weeks, and actual renovation works usually take 4 to 8 weeks depending on project size and approval conditions.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need landlord or MCST approval before renovation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Most offices, retail units, clinics, gyms and F&B spaces require landlord, building management or MCST approval before renovation starts. Drawings, method statements, insurance documents and contractor details may be required before work permits are issued.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does commercial renovation need SCDF submission?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'SCDF submission may be required if the renovation affects fire-rated partitions, sprinkler points, fire alarm systems, exit routes, emergency lighting, occupancy load or F&B exhaust systems. Simple office refresh works may not need SCDF submission, but this should be checked before work starts.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can office renovation be done after office hours?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, but it depends on the building rules. Many commercial buildings only allow noisy works after office hours or during approved time windows. Hacking, drilling and delivery timing must follow landlord, MCST or building management requirements.',
          },
        },
        {
          '@type': 'Question',
          name: 'What affects commercial renovation cost the most?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The biggest cost drivers are electrical and data points, air-conditioning changes, ceiling works, fire safety compliance, flooring, carpentry, glass partitions, pantry works, plumbing and whether reinstatement is required at the end of the lease.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is office reinstatement in Singapore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Office reinstatement means returning the unit to the landlord's original handover condition before lease exit. It may include removing partitions, flooring, ceiling, wiring, signage, carpentry and making good affected surfaces according to the tenancy agreement.",
          },
        },
        {
          '@type': 'Question',
          name: 'Is retail renovation more expensive than office renovation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Retail renovation is often higher than a basic office because shopfront, lighting, display fixtures, signage, customer flow, storage and landlord design guidelines are more involved. Typical retail renovation in Singapore ranges from $80 to $150 psf.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is F&B renovation usually more expensive?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'F&B renovation usually costs more because of exhaust, grease trap, plumbing, waterproofing, kitchen equipment coordination, fire safety, pest control requirements and stricter authority or landlord conditions. A practical F&B budget is usually $120 to $250 psf.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I prepare before requesting a commercial renovation quotation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Prepare the floor plan, unit size, tenancy agreement or landlord fitting-out guide, preferred handover date, rough layout requirements, headcount, pantry needs, meeting room count and any existing reinstatement conditions. These details make the quotation more accurate.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can ID Work Studio handle both design and renovation works?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. ID Work Studio can support layout planning, design coordination, renovation works, site coordination and commercial handover. For commercial projects, we also coordinate practical site requirements such as access timing, protection works and building management submissions.',
          },
        },
      ],
    });
  }

  if (relativeFile === 'insights/commercial-renovation-cost-singapore.html') {
    schema['@graph'].push({
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does commercial renovation cost in Singapore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A standard office renovation usually costs around $80 to $150 psf. Retail renovation often ranges from $120 to $300 psf. F&B renovation can reach $200 to $500+ psf.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need approval before starting commercial renovation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Most commercial projects require building management, MCST or landlord approval before work starts. Depending on scope, BCA, SCDF, PE or QP submissions may also be required.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if MCST or building management rejects the permit?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Work cannot start until the submission is accepted. Rejection is usually caused by incomplete drawings, missing method statements, missing insurance or works that do not follow building rules.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the biggest hidden cost in commercial renovation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The biggest hidden costs are usually aircon, exhaust, drainage, electrical loading, fire safety, reinstatement and compliance-related works.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can commercial renovation be done after office hours?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It depends on building rules. Some buildings restrict noisy works, loading bay use and lift access. Night work may need separate approval and can increase labour cost by 15% to 25%.',
          },
        },
      ],
    });
  }


  if (relativeFile === 'insights/office-renovation-timeline-singapore.html') {
    schema['@graph'].push({
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long does office renovation take in Singapore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Small offices usually take 3 to 6 weeks, medium offices take 6 to 10 weeks, and large corporate offices take 10 to 16 weeks including planning, approvals, site works, testing and handover.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can office renovation be completed in 2 weeks?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Only very small cosmetic refresh works can be completed in about 2 weeks. A proper office fit-out with partition, electrical, data, aircon and landlord approval usually needs more time.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need landlord approval for office renovation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Most Singapore office renovations require landlord or building management approval before work can start. Required documents may include drawings, work schedule, method statement, contractor details and insurance.',
          },
        },
        {
          '@type': 'Question',
          name: 'When is SCDF submission required for office renovation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'SCDF-related submission may be required if the renovation affects fire safety systems, sprinkler layout, fire alarm, smoke detector, exit route, fire-rated partition or occupant load. Such submissions are handled by Qualified Persons where applicable.',
          },
        },
        {
          '@type': 'Question',
          name: 'What causes office renovation delays in Singapore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Common delays come from landlord or MCST approval, after-hours work restrictions, electrical and data coordination, aircon modification, sprinkler coordination, furniture delivery and late client changes.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can we continue operating during office renovation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It is possible for some offices, but the renovation must be phased with dust control, noise planning, safety barricades and careful power or data cutover. Phased works usually take longer than a vacant-site renovation.',
          },
        },
      ],
    });
  }

  html = html.replace(
    /\s*<script\s+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>\s*/gi,
    '\n'
  );

  html = html.replace(
    '</head>',
    `    <script type="application/ld+json">${JSON.stringify(schema)}</script>\n</head>`
  );

  const canonicalTag = `    <link rel="canonical" href="${meta.canonical}" />\n`;
  html = html.replace('</head>', `${canonicalTag}</head>`);

  fs.writeFileSync(filePath, html, 'utf8');

  console.log(`✓ ${relativeFile}`);
  console.log(`    title: ${meta.title}`);
  console.log(`    canonical: ${meta.canonical}`);
}