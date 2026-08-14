import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');

const planningTools = [
  { slug: 'renovation-cost-calculator', label: 'Renovation Cost Calculator', description: 'Estimate renovation contract costs.' },
  { slug: 'total-home-budget-calculator', label: 'Total Home Budget Calculator', officeLabel: 'Total Move-In Budget Planner', description: 'Plan furniture, appliances and cash buffer.' },
  { slug: 'renovation-timeline-planner-singapore', label: 'Renovation Timeline Planner', description: 'Estimate renovation schedule and move-in timing.' },
  { slug: 'hdb-renovation-style-quiz', label: 'HDB Renovation Style Quiz', description: 'Discover a suitable interior style direction.' },
  { slug: 'hdb-defect-checklist', label: 'HDB Defect Inspection Checklist', description: 'Inspect defects before renovation begins.' },
  { slug: 'commercial-approval-planner', label: 'Commercial Renovation Planner', description: 'Plan approvals, renovation timing, takeover and business opening.' },
  { slug: 'office-space-planner', label: 'Office Space Planner', description: 'Estimate office size from headcount, workstations, rooms and support spaces.' },
];

const pages = [
  'commercial-approval-planner.html',
  'hdb-defect-checklist.html',
  'hdb-renovation-style-quiz.html',
  'office-space-planner.html',
  'renovation-cost-calculator.html',
  'renovation-timeline-planner-singapore.html',
  'total-home-budget-calculator.html',
];

function href(tool) {
  return `https://idworkstudio.com/${tool.slug}`;
}

function isCurrent(tool, relativeFile) {
  return relativeFile === `${tool.slug}.html`;
}

function currentAttr(tool, relativeFile) {
  return isCurrent(tool, relativeFile) ? ' aria-current="page"' : '';
}

function renderSimple(relativeFile) {
  return planningTools
    .map((tool) => `<a href="${href(tool)}"${currentAttr(tool, relativeFile)}>${tool.label}</a>`)
    .join('');
}

function renderSimpleDescriptive(relativeFile) {
  return planningTools
    .map((tool) => `<a href="${href(tool)}"${currentAttr(tool, relativeFile)}>${tool.label}<span style="display:block;margin-top:3px;font-size:10.5px;font-weight:400;line-height:1.45;color:#8b8177;text-transform:none;letter-spacing:0">${tool.description}</span></a>`)
    .join('');
}

function renderDescriptive(relativeFile) {
  return planningTools
    .map((tool) => `<a${currentAttr(tool, relativeFile)} href="${href(tool)}">${tool.label}<span>${tool.description}</span></a>`)
    .join('\n');
}

function renderOffice(relativeFile) {
  return planningTools
    .map((tool) => {
      const label = tool.officeLabel || tool.label;
      return `            <a href="${href(tool)}"${currentAttr(tool, relativeFile)}>
              <strong>${label}</strong>
              <small>${tool.description}</small>
            </a>`;
    })
    .join('\n');
}

function renderTimeline(relativeFile) {
  return planningTools
    .map((tool) => {
      const current = isCurrent(tool, relativeFile);
      const classes = current
        ? 'block rounded-xl bg-[#fbf8f2] px-3 py-2.5 font-semibold text-[#8a6a2f]'
        : 'block rounded-xl px-3 py-2.5 font-semibold hover:bg-[#fbf8f2] hover:text-[#8a6a2f]';
      const description = tool.slug === 'commercial-approval-planner'
        ? 'Plan approvals, renovation timing, takeover and opening.'
        : tool.description;
      return `      <a href="${href(tool)}"${current ? ' aria-current="page"' : ''} class="${classes}">${tool.label}<span class="mt-1 block text-[10.5px] font-normal leading-[1.45] text-[#8b8177]">${description}</span></a>`;
    })
    .join('\n');
}

function replaceExactlyOnce(html, regex, replacement, relativeFile, targetName) {
  const matches = html.match(regex);
  if (!matches || matches.length !== 1) {
    throw new Error(`${relativeFile}: expected exactly one ${targetName}; found ${matches ? matches.length : 0}`);
  }
  return html.replace(regex, replacement);
}

function updatePlanningMenu(html, relativeFile) {
  switch (relativeFile) {
    case 'commercial-approval-planner.html':
      return replaceExactlyOnce(
        html,
        /<div class="nav-dropdown-menu" id="planningToolsMenu">[\s\S]*?<\/div>\s*<\/div>\s*<a href="https:\/\/idworkstudio\.com\/insights">Guides<\/a>/g,
        `<div class="nav-dropdown-menu" id="planningToolsMenu">\n${renderDescriptive(relativeFile)}\n</div>\n</div>\n<a href="https://idworkstudio.com/insights">Guides</a>`,
        relativeFile,
        'commercial Planning Tools menu'
      );

    case 'hdb-defect-checklist.html':
      return replaceExactlyOnce(
        html,
        /<div class="site-dropdown">[\s\S]*?<\/div>\s*<\/div>\s*<a href="\/insights">Guides<\/a>/g,
        `<div class="site-dropdown">\n          ${renderSimple(relativeFile)}\n        </div>\n      </div>\n      <a href="/insights">Guides</a>`,
        relativeFile,
        'defect-checklist Planning Tools menu'
      );

    case 'hdb-renovation-style-quiz.html':
      return replaceExactlyOnce(
        html,
        /<div style="position:absolute;top:100%;left:0;background:#fff;border:1px solid #E5E2DA;border-radius:16px;padding:10px 0;min-width:260px;box-shadow:0 14px 34px rgba\(0,0,0,\.08\);display:none" class="planning-dropdown">[\s\S]*?<\/div><\/div><a href="https:\/\/idworkstudio\.com\/insights">Guides<\/a>/g,
        `<div style="position:absolute;top:100%;left:0;background:#fff;border:1px solid #E5E2DA;border-radius:16px;padding:10px 0;min-width:260px;box-shadow:0 14px 34px rgba(0,0,0,.08);display:none" class="planning-dropdown">${planningTools.map((tool) => `<a href="${href(tool)}"${currentAttr(tool, relativeFile)} style="display:block;padding:10px 18px">${tool.label}</a>`).join('')}</div></div><a href="https://idworkstudio.com/insights">Guides</a>`,
        relativeFile,
        'style-quiz Planning Tools menu'
      );

    case 'office-space-planner.html':
      return replaceExactlyOnce(
        html,
        /<div class="planning-tools-menu">[\s\S]*?<\/div>\s*<\/div>\s*<a href="https:\/\/idworkstudio\.com\/insights">Guides<\/a>/g,
        `<div class="planning-tools-menu">\n${renderOffice(relativeFile)}\n          </div>\n        </div>\n\n        <a href="https://idworkstudio.com/insights">Guides</a>`,
        relativeFile,
        'office-space Planning Tools menu'
      );

    case 'renovation-cost-calculator.html':
    case 'total-home-budget-calculator.html':
      return replaceExactlyOnce(
        html,
        /<div class="nav-tools-menu">[\s\S]*?<\/div>\s*<\/div>\s*<a href="https:\/\/idworkstudio\.com\/insights">Guides<\/a>/g,
        `<div class="nav-tools-menu">${renderSimpleDescriptive(relativeFile)}</div></div><a href="https://idworkstudio.com/insights">Guides</a>`,
        relativeFile,
        'nav-tools Planning Tools menu'
      );

    case 'renovation-timeline-planner-singapore.html':
      return replaceExactlyOnce(
        html,
        /<div class="rounded-\[18px\] border border-\[#eee5da\] bg-white p-2\.5 text-left normal-case tracking-normal shadow-\[0_18px_45px_rgba\(23,21,20,\.14\)\]">[\s\S]*?<\/div>\s*<\/div>\s*<\/div><a href="https:\/\/idworkstudio\.com\/insights"/g,
        `<div class="rounded-[18px] border border-[#eee5da] bg-white p-2.5 text-left normal-case tracking-normal shadow-[0_18px_45px_rgba(23,21,20,.14)]">\n${renderTimeline(relativeFile)}\n    </div>\n  </div>\n</div><a href="https://idworkstudio.com/insights"`,
        relativeFile,
        'timeline Planning Tools menu'
      );

    default:
      throw new Error(`${relativeFile}: no verified Planning Tools replacement strategy configured`);
  }
}

for (const relativeFile of pages) {
  const filePath = path.join(distDir, relativeFile);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing required planning-tool output: ${relativeFile}`);
  }

  const original = fs.readFileSync(filePath, 'utf8');
  const updated = updatePlanningMenu(original, relativeFile);

  if (updated === original) {
    throw new Error(`${relativeFile}: Planning Tools menu was not changed`);
  }

  if (!updated.includes('https://idworkstudio.com/office-space-planner')) {
    throw new Error(`${relativeFile}: Office Space Planner link missing after injection`);
  }

  fs.writeFileSync(filePath, updated, 'utf8');
  console.log(`✓ Planning Tools updated: ${relativeFile}`);
}
