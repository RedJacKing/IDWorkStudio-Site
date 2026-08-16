# ID Work Studio — Agent / Developer Instructions

This repository contains production rules that MUST be followed before creating or editing any ID Work Studio article, page, planning tool, calculator, SEO/GEO implementation, or production fix.

## Mandatory references

Before making changes, read and follow:

1. `IDWS_PRODUCTION_STANDARDS.md`
2. `IDWS_FACTUAL_SOURCE_OF_TRUTH.md`

These files define the production acceptance standard and canonical factual framework.

## Mandatory pre-edit verification

Before editing any existing file:

1. Identify the exact affected file.
2. Identify the exact affected section, component, function, object, formula, or translation key.
3. Confirm the issue exists in the CURRENT file.
4. Confirm the affected section is active and used by the live route/page/tool.
5. State the exact planned change.
6. Make the smallest possible change.

If any of these cannot be confirmed, STOP. Do not guess, patch from memory, edit inactive duplicates, or use an older file.

## New Insights article rules

Every new Insights article must:

- keep full long-form English and Chinese article content in the `.tsx` article file;
- use the approved bilingual article architecture;
- use `Head` from `vite-react-ssg` for crawl-critical head output;
- render exactly one canonical;
- render exactly one `Article` schema;
- render exactly one `FAQPage` schema;
- render exactly one `BreadcrumbList` schema;
- contain exactly one H1;
- give a direct answer near the beginning;
- include relevant Singapore context;
- include 2–4 useful internal links where appropriate;
- include a sensible conversion path;
- be added to the correct route, sitemap, and Insights listing/category where required.

Do not use `react-helmet-async` for new Insights article metadata/schema where the required output would not appear in generated SSG HTML.

## New page rules

Every new public page must verify:

- active route;
- generated static HTML;
- title;
- meta description;
- exactly one H1;
- exactly one canonical;
- indexability;
- sitemap membership where the page should be indexed;
- relevant navigation/listing/internal links;
- conversion path where appropriate.

## New planning tool / calculator rules

Every new tool or calculator must verify:

- active route;
- generated static HTML;
- title and meta description;
- exactly one H1;
- exactly one canonical;
- exactly one `SoftwareApplication` schema;
- FAQ where appropriate;
- indexability;
- sitemap membership;
- Planning Tools navigation/listing integration;
- analytics for meaningful user actions;
- relevant internal links;
- conversion path.

### Calculation logic protection

Do NOT change calculator/planner:

- formulas;
- rates;
- branching;
- assumptions;
- outputs;
- calculation logic;
- UX flow;
- layout/styling

unless the user explicitly approves that exact change.

If factual consistency appears to require a logic change, STOP first and explain:

1. the exact function/formula/rate/branch affected;
2. why wording-only correction is insufficient;
3. which outputs/behaviour would change;
4. the expected impact.

## Factual consistency

Before publishing recurring renovation facts, check `IDWS_FACTUAL_SOURCE_OF_TRUTH.md`.

Do not force identical figures across pages when the scope differs.

When an apparent conflict is found:

1. verify the active/live content;
2. compare the exact scope and assumptions;
3. classify it as a genuine contradiction, legitimate scope difference, inactive/legacy content, calculator-specific logic, or insufficient information;
4. edit only a verified active contradiction.

## `i18n.ts` protection

For existing `i18n.ts` edits:

- verify the exact active `enT[...]` or `zhT[...]` path;
- edit only the required key;
- do not regenerate or restructure the object;
- do not edit inactive duplicates;
- do not move keys;
- do not touch neighbouring keys unless required.

For future articles, do not store long-form article paragraphs, FAQ answers, SEO body copy, or schema content in `i18n.ts`.

## No unnecessary changes

Do not:

- refactor unrelated code;
- reformat unrelated sections;
- rename unrelated items;
- reorder unrelated code;
- perform broad/global replacements;
- clean up unrelated legacy content;
- alter styling/layout/UX without explicit need;
- combine unrelated fixes.

## Mandatory build gate

Before a release is considered ready, run:

```bash
npm run build
```

The normal build pipeline includes the production audit automatically.

A release is NOT ready if the build or audit fails.

The expected final audit state is:

```text
PRODUCTION STATUS: BUILD VERIFIED
```

## Generated HTML is the acceptance test

Source-code presence is NOT proof of SEO implementation.

For crawl-critical elements, verify the generated `dist/*.html`.

For articles, generated HTML must contain:

- canonical = 1
- Article = 1
- FAQPage = 1
- BreadcrumbList = 1
- no accidental `noindex`

For tools/calculators:

- canonical = 1
- SoftwareApplication = 1
- no accidental `noindex`

## Live verification

After deployment, verify the actual live URL before declaring the task complete.

At minimum:

- HTTP 200;
- expected canonical exactly once;
- expected schema present;
- sitemap membership where required;
- no accidental `noindex`;
- critical content present in returned HTML.

A successful local build does not prove a successful deployment.

## Release language

Use these states:

- `NOT READY` — mandatory check incomplete or failed.
- `BUILD VERIFIED` — source/build/generated HTML passed; live deployment not yet verified.
- `PRODUCTION SAFE` — required live verification also passed.

Do not call a change fixed, complete, or production-safe before the applicable gate has passed.

## Final principle

If the source says it is correct but the generated or live HTML does not, it is not correct.
