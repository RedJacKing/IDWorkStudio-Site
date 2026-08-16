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

   'insights/overseas-renovation-shopping-singapore.html': {
  canonical: 'https://idworkstudio.com/insights/overseas-renovation-shopping-singapore',
  title: 'Mistakes Singapore Homeowners Make When Buying Renovation Items From Overseas | ID Work Studio',
  description: 'Buying furniture, tiles, taps, lighting and appliances from Taobao, Amazon or overseas suppliers can save money, but many Singapore homeowners underestimate the risks involving sizing, compatibility, shipping delays, warranty and renovation coordination.',
  ogTitle: 'Mistakes Singapore Homeowners Make When Buying Renovation Items From Overseas',
  ogDesc: 'A practical Singapore guide covering overseas renovation shopping risks including furniture sizing, tiles, plumbing fittings, voltage compatibility, SAFETY Mark concerns and shipping delays.',
  ogUrl: 'https://idworkstudio.com/insights/overseas-renovation-shopping-singapore',
},

  'insights/feng-shui-renovation-singapore.html': {
  canonical: 'https://idworkstudio.com/insights/feng-shui-renovation-singapore',
  title: 'Feng Shui Renovation Singapore: Data-Driven Wellness Design | ID Work Studio',
  description: 'A practical Singapore guide to feng shui renovation through environmental psychology, stress-reduction layouts, lighting, storage, Japandi interiors and HDB or condo planning.',
  ogTitle: 'Feng Shui Renovation Singapore: Data-Driven Wellness Design',
  ogDesc: 'Modern feng shui for Singapore HDB and condo renovation, explained through environmental psychology, lighting, storage, workflow and wellness-focused design.',
  ogUrl: 'https://idworkstudio.com/insights/feng-shui-renovation-singapore',
},

  'insights/kitchen-renovation-cost-singapore-2026.html': {
  canonical: 'https://idworkstudio.com/insights/kitchen-renovation-cost-singapore-2026',
  title: 'Kitchen Renovation Cost Singapore (2026 Guide) | ID Work Studio',
  description: 'A realistic Singapore kitchen renovation cost guide for HDB, resale and condo homes, covering carpentry, worktops, hacking, plumbing, electrical works and hidden site conditions.',
  ogTitle: 'Kitchen Renovation Cost Singapore (2026 Guide)',
  ogDesc: 'Realistic kitchen renovation costs in Singapore for HDB, resale and condo homes, including carpentry, worktops, hacking and hidden site conditions.',
  ogUrl: 'https://idworkstudio.com/insights/kitchen-renovation-cost-singapore-2026',
},

  'insights/renovation-quotation-singapore.html': {
  canonical: 'https://idworkstudio.com/insights/renovation-quotation-singapore',
  title: 'Why Renovation Quotations in Singapore Vary So Much | ID Work Studio',
  description: 'A practical Singapore guide explaining why renovation quotations differ so much, including hidden exclusions, resale risks, variation orders, material specifications and how homeowners should compare quotes.',
  ogTitle: 'Why Renovation Quotations in Singapore Vary So Much',
  ogDesc: 'Understand hidden exclusions, resale risk, variation orders and line-by-line quote checks before choosing a renovation contractor in Singapore.',
  ogUrl: 'https://idworkstudio.com/insights/renovation-quotation-singapore',
},

  'insights/real-cost-moving-home-singapore.html': {
  canonical: 'https://idworkstudio.com/insights/real-cost-moving-home-singapore',
  title: 'The Real Cost of Moving Into a New Home in Singapore | ID Work Studio',
  description: 'A realistic Singapore move-in budget guide covering renovation works, appliances, furniture, renovation loans, MOP resale value and what homeowners should plan before spending.',
  ogTitle: 'The Real Cost of Moving Into a New Home in Singapore',
  ogDesc: 'Renovation is only one part of the real move-in cost. Plan for appliances, furniture, loans, MOP resale value and what happens if plans change.',
  ogUrl: 'https://idworkstudio.com/insights/real-cost-moving-home-singapore',
},

  'insights/hdb-defect-checklist-before-renovation-singapore.html': {
    canonical: 'https://idworkstudio.com/insights/hdb-defect-checklist-before-renovation-singapore',
    title: 'HDB Defect Checklist Before Renovation Singapore (2026 Guide) | ID Work Studio',
    description: 'A practical HDB defect checklist for Singapore BTO and resale homeowners before renovation starts, including tools to bring, floor gradient, window water tests, Tengah district cooling checks and renovation-sensitive defects.',
    ogTitle: 'HDB Defect Checklist Before Renovation Singapore (2026 Guide)',
    ogDesc: 'What HDB homeowners should check before renovation starts: tools, water tests, windows, doors, meters, Tengah district cooling and renovation-sensitive defects.',
    ogUrl: 'https://idworkstudio.com/insights/hdb-defect-checklist-before-renovation-singapore',
  },

  'insights/commercial-reinstatement-singapore.html': {
    canonical: 'https://idworkstudio.com/insights/commercial-reinstatement-singapore',
    title: 'Commercial Reinstatement Singapore: Cost, Timeline, Checklist & Landlord Requirements | ID Work Studio',
    description: 'Commercial reinstatement Singapore guide for office, retail and mall tenants. Plan lease handover, landlord requirements, hidden costs, nominated contractors and deposit recovery risks.',
    ogTitle: 'Commercial Reinstatement Singapore: Cost, Timeline, Checklist & Landlord Requirements',
    ogDesc: 'A practical Singapore commercial reinstatement and lease handover guide covering offices, retail shops, mall units, landlord requirements, hidden costs and security deposit risks.',
    ogUrl: 'https://idworkstudio.com/insights/commercial-reinstatement-singapore',
  },

  'insights/commercial-renovation-approvals-singapore.html': {
    canonical: 'https://idworkstudio.com/insights/commercial-renovation-approvals-singapore',
    title: 'Commercial Renovation Approvals Singapore (2026) | ID Work Studio',
    description: 'Understand the approvals, landlord requirements, permits, timeline risks and hidden costs before commercial renovation starts in Singapore.',
    ogTitle: 'Commercial Renovation Approvals Singapore (2026) | ID Work Studio',
    ogDesc: 'Understand the approvals, landlord requirements, permits, timeline risks and hidden costs before commercial renovation starts in Singapore.',
    ogUrl: 'https://idworkstudio.com/insights/commercial-renovation-approvals-singapore',
  },

  'insights/what-to-check-before-signing-fnb-shop-lease-singapore.html': {
    canonical: 'https://idworkstudio.com/insights/what-to-check-before-signing-fnb-shop-lease-singapore',
    title: 'What to Check Before Signing an F&B Shop Lease in Singapore | ID Work Studio',
    description: 'Before signing an F&B shop lease in Singapore, check whether the unit can support your menu, cooking method, exhaust, drainage, power, gas and licensing needs.',
    ogTitle: 'What Should You Check Before Signing an F&B Shop Lease in Singapore?',
    ogDesc: 'Check whether an F&B unit can support your menu, cooking methods, exhaust, drainage, power, gas and licensing needs before committing to the lease.',
    ogUrl: 'https://idworkstudio.com/insights/what-to-check-before-signing-fnb-shop-lease-singapore',
  },

  'insights/how-much-office-space-do-you-need-singapore.html': {
    canonical: 'https://idworkstudio.com/insights/how-much-office-space-do-you-need-singapore',
    title: 'How Much Office Space Do You Need in Singapore? Headcount, Layout & SCDF Guide | ID Work Studio',
    description: 'Work out how much office space you need in Singapore using headcount, peak occupancy, meeting rooms, phone booths and SCDF fire-safety requirements.',
    ogTitle: 'How Much Office Space Do You Need in Singapore?',
    ogDesc: 'Plan office size around headcount, peak occupancy, meeting rooms, private calls and SCDF fire-safety requirements.',
    ogUrl: 'https://idworkstudio.com/insights/how-much-office-space-do-you-need-singapore',
  },

  'commercial/reinstatement.html': {
    canonical: 'https://idworkstudio.com/commercial/reinstatement',
    title: 'Office Reinstatement Singapore | Bare Shell Handover | ID Work Studio',
    description: 'Professional office and retail reinstatement in Singapore by a BCA-registered firm. Plan bare-shell handover, landlord requirements and authority coordination where applicable. Free site survey.',
    ogTitle: 'Office Reinstatement Singapore | ID Work Studio',
    ogDesc: 'BCA-registered office reinstatement contractor in Singapore for bare-shell handover, landlord requirements and authority coordination where applicable. Free site survey.',
    ogUrl: 'https://idworkstudio.com/commercial/reinstatement',
  },
  'commercial/office-renovation.html': {
    canonical: 'https://idworkstudio.com/commercial/office-renovation',
    title: 'Office Renovation Singapore | Turnkey Fit-Out | BCA-Registered | ID Work Studio',
    description: 'Turnkey office renovation and fit-out in Singapore by a BCA-registered firm. Hybrid work layouts, system furniture and fire-safety coordination where applicable. Free site survey.',
    ogTitle: 'Office Renovation Singapore | Turnkey Fit-Out | ID Work Studio',
    ogDesc: 'Office renovation and fit-out in Singapore by ID Work Studio — BCA-registered, with authority and building-management coordination where applicable. Free site survey.',
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
    description: 'Heritage shophouse renovations and F&B interior fit-outs in Singapore by a BCA-registered firm, with URA and fire-safety requirements coordinated where applicable. Free site survey.',
    ogTitle: 'Shophouse & F&B Renovation Singapore | ID Work Studio',
    ogDesc: 'Shophouse renovation and F&B fit-outs in Singapore by ID Work Studio, with URA and fire-safety requirements coordinated where applicable.',
    ogUrl: 'https://idworkstudio.com/commercial/shophouse-renovation',
  },
  'commercial/permits-compliance.html': {
    canonical: 'https://idworkstudio.com/commercial/permits-compliance',
    title: 'Commercial Renovation Permits Singapore | BCA, SCDF & MCST | ID Work Studio',
    description: 'Commercial renovation permit and approval coordination in Singapore for BCA, SCDF, MCST and URA requirements where applicable, by BCA-registered ID Work Studio.',
    ogTitle: 'Commercial Renovation Permits Singapore | ID Work Studio',
    ogDesc: 'Commercial renovation approval coordination for BCA, SCDF, MCST and URA requirements where applicable, by ID Work Studio.',
    ogUrl: 'https://idworkstudio.com/commercial/permits-compliance',
  },
  'renovation-cost-calculator.html': {
    canonical: 'https://idworkstudio.com/renovation-cost-calculator',
    title: 'Free Singapore Renovation Cost Calculator (No Email Needed) | ID Work Studio',
description: 'Estimate your renovation budget instantly with our free Singapore Renovation Cost Calculator. No email needed. Updated for 2026 HDB, condo, resale, and landed renovation pricing.',
ogTitle: 'Free Singapore Renovation Cost Calculator (No Email Needed) | ID Work Studio',
ogDesc: 'Estimate your Singapore renovation budget instantly for HDB, condo, resale and landed homes. No email needed.',
    ogUrl: 'https://idworkstudio.com/renovation-cost-calculator',
  },
  'total-home-budget-calculator.html': {
    canonical: 'https://idworkstudio.com/total-home-budget-calculator',
    title: 'Total Home Budget Calculator Singapore | Renovation, Furniture & Appliances | ID Work Studio',
    description: 'Estimate the realistic total move-in budget for a Singapore home, including renovation, loose furniture, appliances, hidden costs and safety buffer.',
    ogTitle: 'Total Home Budget Calculator Singapore | ID Work Studio',
    ogDesc: 'Plan renovation, loose furniture, appliances and hidden move-in costs before committing to your Singapore home budget.',
    ogUrl: 'https://idworkstudio.com/total-home-budget-calculator',
  },
  'renovation-timeline-planner-singapore.html': {
    canonical: 'https://idworkstudio.com/renovation-timeline-planner-singapore',
    title: 'Renovation Timeline Planner Singapore | ID Work Studio',
    description: 'Estimate your Singapore renovation timeline, move-in date, weekly progress, HDB or condo approval buffer, owner decisions, appliance dependencies and common delay risks.',
    ogTitle: 'Renovation Timeline Planner Singapore | ID Work Studio',
    ogDesc: 'Plan your Singapore renovation schedule, move-in date and progress status with ID Work Studio’s free timeline planner.',
    ogUrl: 'https://idworkstudio.com/renovation-timeline-planner-singapore',
  },
  'hdb-renovation-style-quiz.html': {
    canonical: 'https://idworkstudio.com/hdb-renovation-style-quiz',
    title: 'HDB Renovation Style Quiz Singapore | Find Your Home Design Style | ID Work Studio',
    description: 'Take ID Work Studio’s HDB renovation style quiz to discover your preferred Singapore home design direction, from Japandi and Muji to modern luxury and Scandinavian.',
    ogTitle: 'HDB Renovation Style Quiz Singapore | ID Work Studio',
    ogDesc: 'Discover your ideal HDB interior design style with a Singapore-focused renovation style quiz by ID Work Studio.',
    ogUrl: 'https://idworkstudio.com/hdb-renovation-style-quiz',
  },
  'commercial-approval-planner.html': {
    canonical: 'https://idworkstudio.com/commercial-approval-planner',
    title: 'Commercial Renovation Approval Planner Singapore | ID Work Studio',
    description: 'Find the likely permits required before commercial renovation starts in Singapore, why they are needed, how many working days to allow, and when to sign your tenancy based on your target opening date.',
    ogTitle: 'Singapore Commercial Renovation Approval Planner | ID Work Studio',
    ogDesc: 'Plan permits, renovation timing, tenancy signing and takeover dates for offices, retail shops, F&B, clinics, tuition centres, childcare, gyms and industrial units.',
    ogUrl: 'https://idworkstudio.com/commercial-approval-planner',
  },
  'office-space-planner.html': {
    canonical: 'https://idworkstudio.com/office-space-planner',
    title: 'Singapore Office Space Planner | ID Work Studio',
    description: 'Estimate how much office space your team may need in Singapore based on headcount, workstation size, meeting rooms, private offices and support spaces.',
    ogTitle: 'Singapore Office Space Planner | ID Work Studio',
    ogDesc: 'Estimate the office size your team may need before viewing or committing to a unit in Singapore.',
    ogUrl: 'https://idworkstudio.com/office-space-planner',
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

  html = html.replace(/<link\b(?=[^>]*\brel=["']canonical["'])[^>]*>\s*/gi, '');
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

  const businessEntity = relativeFile === 'index.html'
    ? {
        '@type': 'HomeAndConstructionBusiness',
        '@id': 'https://idworkstudio.com/#business',
        name: 'ID Work Studio',
        legalName: 'ID WORK STUDIO PTE LTD',
        url: 'https://idworkstudio.com/',
        telephone: '+6568162872',
        email: 'contact@idworkstudio.com',
        foundingDate: '2015',
        identifier: {
          '@type': 'PropertyValue',
          propertyID: 'UEN',
          value: '201539658C',
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: '11 Woodlands Close, Woodlands 11, #03-10',
          addressLocality: 'Woodlands',
          addressRegion: 'Singapore',
          postalCode: '737853',
          addressCountry: 'SG',
        },
        areaServed: {
          '@type': 'Country',
          name: 'Singapore',
        },
        description: 'Singapore renovation and interior design company providing residential renovation, office fit-out and commercial renovation services.',
      }
    : {
        '@id': 'https://idworkstudio.com/#business',
      };

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      businessEntity,
      {
        '@type': 'WebPage',
        '@id': `${meta.canonical}#webpage`,
        url: meta.canonical,
        name: meta.title,
        description: meta.description,
      },
    ],
  };

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



  if (relativeFile === 'renovation-cost-calculator.html') {
    schema['@graph'].push({
      '@type': 'SoftwareApplication',
      '@id': `${meta.canonical}#application`,
      name: 'Singapore Renovation Cost Calculator',
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web browser',
      description: meta.description,
      url: meta.canonical,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'SGD',
      },
      provider: {
        '@id': 'https://idworkstudio.com/#business',
      },
    });
  }

  if (relativeFile === 'renovation-timeline-planner-singapore.html') {
    schema['@graph'].push({
      '@type': 'SoftwareApplication',
      '@id': `${meta.canonical}#application`,
      name: 'Renovation Timeline Planner Singapore',
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Web browser',
      description: meta.description,
      url: meta.canonical,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'SGD',
      },
      provider: {
        '@id': 'https://idworkstudio.com/#business',
      },
    });
  }

  if (relativeFile === 'hdb-renovation-style-quiz.html') {
    schema['@graph'].push({
      '@type': 'SoftwareApplication',
      '@id': `${meta.canonical}#application`,
      name: 'HDB Renovation Style Quiz Singapore',
      applicationCategory: 'DesignApplication',
      operatingSystem: 'Web browser',
      description: meta.description,
      url: meta.canonical,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'SGD',
      },
      provider: {
        '@id': 'https://idworkstudio.com/#business',
      },
    });
  }

  if (relativeFile === 'commercial-approval-planner.html') {
    schema['@graph'].push({
      '@type': 'SoftwareApplication',
      '@id': `${meta.canonical}#application`,
      name: 'Commercial Renovation Approval Planner Singapore',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web browser',
      description: meta.description,
      url: meta.canonical,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'SGD',
      },
      provider: {
        '@id': 'https://idworkstudio.com/#business',
      },
    });
  }

  if (relativeFile === 'office-space-planner.html') {
    schema['@graph'].push(
      {
        '@type': 'SoftwareApplication',
        '@id': `${meta.canonical}#application`,
        name: 'Singapore Office Space Planner',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web browser',
        description: meta.description,
        url: meta.canonical,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'SGD',
        },
        provider: {
          '@id': 'https://idworkstudio.com/#business',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${meta.canonical}#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How much office space do I need per employee in Singapore?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A single square-foot-per-person figure can be misleading. Two companies with the same headcount may need very different office sizes depending on workstation dimensions, meeting rooms, private offices, pantry, storage and circulation. This planner therefore calculates from your actual requirements rather than using one fixed allowance per employee.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does this planner include meeting rooms and private offices?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. The recommendation includes the meeting rooms, director rooms, manager rooms, phone or Zoom rooms and support spaces you select. Spaces you do not select are not automatically added.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can a small SME use an office below 1,000 sqft?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Small teams can operate from offices well below 1,000 sqft when their room requirements are limited and the floor plate is efficient. The planner is designed for smaller SMEs as well as larger offices and does not impose a 1,000 sqft minimum.',
            },
          },
          {
            '@type': 'Question',
            name: 'Why does circulation affect the recommended office size?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Furniture and room footprints are not the whole office. People still need workable access between desks, rooms and shared facilities. The planner therefore allows for circulation and overall planning rather than simply adding the physical size of each desk and room.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does this result confirm SCDF compliance?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. This is a space-planning and property-search estimate, not an SCDF compliance assessment. Final suitability depends on the actual unit, exit routes, floor-plan geometry and the final proposed office layout. Fire-safety requirements should be reviewed during detailed design where applicable.',
            },
          },
        ],
      }
    );
  }

  if (relativeFile === 'total-home-budget-calculator.html') {
    schema['@graph'].push(
      {
        '@type': 'SoftwareApplication',
        name: 'Total Home Budget Calculator',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web browser',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'SGD',
        },
        provider: {
          '@id': 'https://idworkstudio.com/#business',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${meta.canonical}#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Why is this different from a renovation calculator?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A renovation calculator focuses on renovation works. This calculator also includes loose furniture, appliances, contingency and comfort planning so homeowners can understand the real move-in budget.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are built-in wardrobes counted as furniture?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Usually no. In Singapore renovation planning, built-in wardrobes and fixed carpentry are normally renovation works, while this calculator treats furniture as loose furniture such as sofa, mattress, bedframe, dining set, curtains, rugs and decor.',
            },
          },
          {
            '@type': 'Question',
            name: 'Should I buy all furniture before moving in?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Usually no. It is often better to buy essential furniture first, live in the space, then add loose furniture and decor after understanding your habits.',
            },
          },
        ],
      }
    );
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
            text: 'Commercial renovation in Singapore typically costs $50 to $80 psf for a basic office fit-out, $80 to $130 psf for a mid-range office fit-out, and $130 to $200+ psf for a premium or Grade A office fit-out. Complex corporate, high-spec M&E, acoustic, AV or strongly branded projects can exceed $200 psf and approach $300 psf. Retail shops usually range from $120 to $300 psf, while F&B outlets commonly require $200 to $500+ psf. The final range is mainly affected by M&E works, fire safety requirements, carpentry, flooring, ceiling works and landlord reinstatement conditions.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does office renovation cost in Singapore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A basic office fit-out is typically $50 to $80 psf. A mid-range office fit-out with more meeting rooms, glass partitions, pantry, better lighting and more electrical or data points is usually $80 to $130 psf. Premium or Grade A office fit-outs with acoustic treatment, custom carpentry, boardrooms, advanced M&E and stronger branding details are typically $130 to $200+ psf. Complex high-spec projects can exceed $200 psf and approach $300 psf.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does commercial renovation usually take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A typical commercial renovation may take around 8 to 16 weeks from planning to handover, depending on unit type, approval requirements, M&E complexity and renovation scope. Straightforward office fit-outs can be faster, while retail and F&B projects may take longer. Design and planning may take 2 to 3 weeks, landlord or MCST submission may take 2 to 4 weeks as a planning allowance, and actual renovation works commonly take 4 to 8 weeks depending on project size and approval conditions.',
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
            text: 'Retail renovation is often higher than a basic office because shopfront, lighting, display fixtures, signage, customer flow, storage and landlord design guidelines are more involved. Typical retail renovation in Singapore ranges from $120 to $300 psf.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is F&B renovation usually more expensive?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'F&B renovation usually costs more because of exhaust, grease trap, plumbing, waterproofing, kitchen equipment coordination, fire safety, pest control requirements and stricter authority or landlord conditions. A practical F&B budget is usually $200 to $500+ psf.',
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

  if (!relativeFile.startsWith('insights/')) {
    html = html.replace(
      /\s*<script\s+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>\s*/gi,
      '\n'
    );
  }

  html = html.replace(
    '</head>',
    `    <script type="application/ld+json">${JSON.stringify(schema)}</script>\n</head>`
  );

  html = html.replace(/<link\s+rel=["']alternate["'][^>]*hreflang=["'][^"']+["'][^>]*>\s*/gi, '');

  const geoTags = `    <link rel="alternate" hreflang="en-SG" href="${meta.canonical}" />\n    <link rel="alternate" hreflang="x-default" href="${meta.canonical}" />\n`;
  html = html.replace('</head>', `${geoTags}</head>`);

  const canonicalTag = `    <link rel="canonical" href="${meta.canonical}" />\n`;
  html = html.replace('</head>', `${canonicalTag}</head>`);

  fs.writeFileSync(filePath, html, 'utf8');

  console.log(`✓ ${relativeFile}`);
  console.log(`    title: ${meta.title}`);
  console.log(`    canonical: ${meta.canonical}`);
}
