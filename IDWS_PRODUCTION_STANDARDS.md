# ID Work Studio Production Standards

**Status:** Production Standard\
**Applies to:** ID Work Studio website articles, pages, planning tools,
calculators, SEO/GEO implementation, and production fixes\
**Priority:** Safety \> Correctness \> Completeness \> Speed

## 1. Purpose

This document defines the acceptance standard for future ID Work Studio
website work.

A change is not considered production-safe merely because the required
code exists in the source file. Crawl-critical implementation must be
verified in the generated static HTML and, after deployment, on the live
website.

**Core rule:** Source-code presence is not proof of SEO implementation.
For crawl-critical elements, generated HTML and ultimately live HTML are
the source of truth.

------------------------------------------------------------------------

## 2. Global Production Safety Rules

Before editing any existing production file:

1.  Identify the exact affected file.
2.  Identify the exact affected section, function, component, object, or
    translation key.
3.  Confirm the issue exists in the current file.
4.  Confirm the affected section is active and used by the live site.
5.  State the exact planned change.
6.  Make only the smallest required change.

If any of these cannot be confirmed with certainty, stop. Do not guess,
patch from memory, use an older file, or assume an inactive duplicate is
the live implementation.

### No collateral changes

During a targeted fix, do not:

-   refactor unrelated code;
-   reformat unrelated sections;
-   rename unrelated variables, keys, functions, or components;
-   reorder unrelated code;
-   clean up unrelated legacy content;
-   change styling, layout, typography, spacing, UX, or copy unless
    required by the approved task;
-   combine unrelated fixes without explicit approval.

------------------------------------------------------------------------

## 3. Current-File and Active-Path Verification

The current production file must be verified before any edit.

For routing, confirm the component actually imported and used by
`src/App.tsx` or the current active routing system.

For `i18n.ts`, confirm the exact active object and path before editing,
for example:

-   `enT["..."]`
-   `zhT["..."]`

A matching key elsewhere in the file does not prove that it is active.

Legacy or unreferenced values must not be changed simply because they
appear inconsistent.

------------------------------------------------------------------------

## 4. SSG and Crawlability Standard

ID Work Studio uses static-site generation. Critical SEO/GEO content
must therefore be present in generated HTML.

For new Insights articles, use the SSG-compatible head implementation:

``` tsx
import { Head } from 'vite-react-ssg';
```

Do not introduce `react-helmet-async` for new Insights article
metadata/schema when it prevents the required output from appearing in
the generated static HTML.

Critical content must:

-   be rendered as crawlable HTML;
-   not depend on client-side JavaScript for discovery;
-   have a clear heading hierarchy;
-   remain SSG-safe;
-   be present in the relevant `dist/*.html` output after build.

------------------------------------------------------------------------

## 5. Article Production Gate

Every new Insights article must pass all applicable checks below.

### Architecture

-   Active route exists.
-   Correct article component is connected to the route.
-   Sitemap entry exists.
-   Insights listing/category integration exists where required.
-   Canonical URL is correct.
-   Exactly one H1 exists.
-   Page title exists.
-   Meta description exists.
-   English and Chinese content architecture follows the approved
    article system.

### Required schema

Generated HTML must contain exactly one of each:

-   `Article`
-   `FAQPage`
-   `BreadcrumbList`

Schema objects existing only in `.tsx` source are not sufficient.

### Content structure

The article must include:

-   a direct answer near the beginning;
-   logical H2 sections;
-   short readable paragraphs;
-   bullet lists where useful;
-   tables where they materially improve comprehension;
-   Singapore-specific context;
-   relevant regulatory context only where applicable;
-   problem;
-   explanation;
-   practical solution;
-   real-world scenarios;
-   cost clarity where relevant;
-   conversion path.

Do not force HDB, BCA, SCDF, MCST, URA, NEA, or other authorities into
an article when they are not relevant to the topic.

### Internal links

Each article should contain 2--4 useful internal links where context
supports them, such as:

-   related Insights articles;
-   relevant planning tools;
-   calculators;
-   relevant service pages.

Internal links must serve the reader rather than exist solely to
increase link count.

### Conversion

Every article must have a sensible next action appropriate to the
reader's intent, such as:

-   WhatsApp consultation;
-   quotation/budget review;
-   contact;
-   relevant calculator;
-   relevant planner.

A CTA must not be added merely to satisfy a count if an existing
conversion path already performs the same role effectively.

------------------------------------------------------------------------

## 6. Tool and Calculator Production Gate

Every new planning tool or calculator must be treated separately from an
article.

### Required checks

-   Active route exists.
-   Static output exists.
-   Sitemap entry exists.
-   Planning Tools navigation/listing integration exists where required.
-   Correct canonical exists.
-   Exactly one `SoftwareApplication` schema is rendered in generated
    HTML.
-   FAQ exists where appropriate.
-   Page is indexable.
-   Analytics events are implemented for meaningful user actions.
-   Conversion path exists.
-   Mobile and desktop navigation behaviour is checked.
-   Relevant internal links are present.

### Calculation-logic protection

SEO/GEO work must not silently alter:

-   formulas;
-   rates;
-   calculations;
-   branching;
-   outputs;
-   assumptions;
-   UX flow;
-   tool behaviour.

If factual consistency genuinely requires a logic change, stop before
editing and state:

1.  the exact function/formula/rate/branch affected;
2.  why a wording-only correction is insufficient;
3.  which outputs or behaviours would change;
4.  the expected impact.

Proceed only after explicit approval.

------------------------------------------------------------------------

## 7. Factual Consistency Standard

All new content must be checked against the current ID Work Studio
factual source of truth before release.

High-risk factual categories include:

-   renovation cost ranges;
-   cost-per-square-foot ranges;
-   renovation timelines;
-   approval durations;
-   HDB requirements;
-   BCA requirements;
-   SCDF requirements;
-   URA requirements;
-   MCST/landlord/building-management requirements;
-   professional appointment triggers such as QP, PE, LEW, MEP, and
    applicable standards.

Different ranges may legitimately apply to different scopes. Do not
normalize distinct contexts merely to make every number identical.

When an apparent conflict is found:

1.  identify the active page and context;
2.  verify whether the conflicting value is actually rendered/live;
3.  distinguish scope differences from genuine factual contradictions;
4.  edit only a verified active inconsistency.

------------------------------------------------------------------------

## 8. `i18n.ts` Safety Standard

`i18n.ts` is for short UI translation content such as:

-   buttons;
-   labels;
-   navigation;
-   card titles;
-   short descriptions;
-   short UI text.

New long-form article content must remain inside the article `.tsx` file
according to the approved article architecture.

Do not store new:

-   article paragraphs;
-   FAQ answers;
-   long SEO copy;
-   full article bodies;
-   schema content

inside `i18n.ts`.

When an existing article still relies on `i18n.ts`, edit only the exact
verified active key required by the task. Do not migrate or restructure
it as part of an unrelated fix.

------------------------------------------------------------------------

## 9. Routing and Discovery Gate

Before a new public page is considered complete, verify all applicable
discovery paths:

-   route;
-   generated static page;
-   sitemap;
-   canonical;
-   Insights listing/category if applicable;
-   Planning Tools navigation if applicable;
-   internal links from relevant pages.

A page existing in source code is not sufficient evidence that search
engines or users can discover it.

------------------------------------------------------------------------

## 10. Build Gate

Every production change that can affect the build must pass the actual
production SSG build.

A successful build is required before deployment.

Build warnings must be reviewed. A warning is not automatically a
blocker, but it must not be silently treated as irrelevant when it
affects rendering, crawlability, functionality, or user experience.

No release should be called production-safe based solely on
TypeScript/source inspection.

------------------------------------------------------------------------

## 11. Generated-HTML Acceptance Gate

After a successful build, inspect `dist/`.

For an article, verify at minimum:

-   static HTML file exists;
-   canonical count = 1;
-   Article schema count = 1;
-   FAQPage schema count = 1;
-   BreadcrumbList schema count = 1;
-   expected direct-answer content is present;
-   no accidental `noindex`.

For a tool/calculator, verify at minimum:

-   static HTML file exists;
-   canonical count = 1;
-   SoftwareApplication schema count = 1;
-   no accidental `noindex`.

Additional page-specific requirements must also be verified.

**This is mandatory. Source inspection alone does not satisfy the
production gate.**

------------------------------------------------------------------------

## 12. Live Deployment Gate

After deployment, verify the actual live site.

At minimum, check:

-   expected URL returns HTTP 200;
-   canonical exists exactly once and points to the intended URL;
-   required schema is present in the live HTML;
-   sitemap contains the intended public URL;
-   no accidental `noindex`;
-   critical page content is available in returned HTML;
-   tool/page navigation works where relevant.

A successful local build does not prove a successful deployment.

------------------------------------------------------------------------

## 13. Production Release Status

Use these release states:

### NOT READY

One or more mandatory checks are incomplete or failed.

### BUILD VERIFIED

Source and generated output have passed, but live deployment has not yet
been verified.

### PRODUCTION SAFE

All required source, build, generated-output, and live checks have
passed.

Do not describe a deployment as fixed, complete, or production-safe
before the applicable verification is complete.

------------------------------------------------------------------------

## 14. Automated Audit Requirement

The project should maintain a production audit script that checks the
generated `dist/` output before deployment.

The audit should cover, where applicable:

-   expected static routes;
-   canonical count;
-   title;
-   meta description;
-   H1;
-   Article schema;
-   FAQPage schema;
-   BreadcrumbList schema;
-   SoftwareApplication schema;
-   accidental `noindex`;
-   sitemap membership;
-   placeholder/TODO indicators;
-   other deterministic production requirements.

The audit must distinguish between articles, tools/calculators, and
ordinary pages rather than applying inappropriate requirements
universally.

A failed mandatory audit should produce a clear **DO NOT DEPLOY**
result.

The automated audit supplements manual verification; it does not replace
factual review, UX review, or live verification.

------------------------------------------------------------------------

## 15. New Content Workflow

For every future article, page, tool, or calculator:

**Research/requirements → current architecture verification →
implementation → factual consistency check → build → generated HTML
audit → deploy → live audit → measurement.**

Do not skip directly from source editing to deployment.

For bug fixes, continue using the surgical bug-fix workflow rather than
turning a small correction into a full-page rewrite.

------------------------------------------------------------------------

## 16. Measurement Discipline

Do not immediately rewrite newly deployed pages merely because rankings
or traffic have not changed.

SEO/GEO changes require recrawl and sufficient measurement time.

Maintain comparable pre/post baselines using:

-   Google Search Console;
-   GA4;
-   tool interaction events;
-   WhatsApp/contact conversion signals.

Distinguish:

-   impressions from rankings;
-   clicks from enquiries;
-   WhatsApp clicks from completed leads;
-   technical readiness from actual search/AI performance.

Technical compliance improves eligibility and machine understanding; it
does not guarantee rankings, citations, traffic, or leads.

------------------------------------------------------------------------

## 17. Final Production Principle

The ID Work Studio website should become harder to break as it grows.

The objective is not to rely on memory or increasingly long prompts.
Critical requirements should be embedded in:

1.  a factual source of truth;
2.  reusable production standards/templates;
3.  automated pre-deployment checks;
4.  generated-HTML verification;
5.  live post-deployment verification.

**If the source says it is correct but the generated or live HTML does
not, it is not correct.**
