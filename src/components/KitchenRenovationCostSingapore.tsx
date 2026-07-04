import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

type CostRow = {
  label: string;
  value: string;
  note: string;
};

type ComparisonRow = {
  item: string;
  cost: string;
  note: string;
};

type Section = {
  title: string;
  eyebrow?: string;
  paragraphs: string[];
  bullets?: string[];
};

type Scenario = {
  title: string;
  cost: string;
  details: string[];
};

type FaqItem = {
  question: string;
  answer: string;
};

type ArticleContent = {
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  readTime: string;
  category: string;
  heroImageAlt: string;
  quickAnswerTitle: string;
  quickAnswer: string;
  costRows: CostRow[];
  costTableTitle: string;
  costTableIntro: string;
  kitchenTypes: ComparisonRow[];
  costDriversTitle: string;
  costDrivers: ComparisonRow[];
  sections: Section[];
  worktopTitle: string;
  worktopIntro: string;
  worktopRows: ComparisonRow[];
  sinkSupportTitle: string;
  sinkSupportParagraphs: string[];
  sinkSupportBullets: string[];
  overlayTitle: string;
  overlayIntro: string;
  overlayRows: ComparisonRow[];
  scenariosTitle: string;
  scenarios: Scenario[];
  budgetingTitle: string;
  budgetingTips: string[];
  internalLinksTitle: string;
  internalLinks: { label: string; to: string; text: string }[];
  faqTitle: string;
  faqs: FaqItem[];
  ctaTitle: string;
  ctaText: string;
  ctaPrimary: string;
  ctaSecondary: string;
  breadcrumbCurrent: string;
};

const heroImage = "/insights/kitchen-renovation-cost-singapore-2026-hero.webp";

const content: Record<"en" | "zh", ArticleContent> = {
  en: {
    metaTitle: "Kitchen Renovation Cost Singapore 2026 Guide | ID Work Studio",
    metaDescription:
      "Realistic Singapore kitchen renovation cost guide for HDB, condo and resale homes. Learn carpentry, worktop, hacking, plumbing, electrical and hidden cost factors.",
    canonical: "https://idworkstudio.com/insights/kitchen-renovation-cost-singapore-2026",
    eyebrow: "Singapore Renovation Cost Guide",
    title: "How Much Does Kitchen Renovation Cost in Singapore? (2026 Guide)",
    subtitle:
      "In Singapore, a kitchen renovation usually costs between S$8,000 and S$35,000+, depending on hacking, carpentry, worktop material, plumbing, electrical works and site condition. Resale HDB kitchens often cost more because older finishes, sink supports and concealed services can create extra rectification work after demolition.",
    readTime: "8 min read",
    category: "Renovation Cost",
    heroImageAlt:
      "Premium warm neutral Singapore kitchen renovation with custom carpentry and stone worktop",
    quickAnswerTitle: "Quick answer",
    quickAnswer:
      "A simple BTO kitchen refresh may stay around S$8,000–S$15,000, while a full resale HDB kitchen rebuild with hacking, new tiles, custom cabinetry, plumbing and electrical works can reach S$20,000–S$35,000 or more. The final number depends less on the word “kitchen” and more on what must be removed, rebuilt, concealed and customised.",
    costRows: [
      {
        label: "Basic BTO kitchen refresh",
        value: "S$8,000 – S$15,000",
        note: "Usually lighter works, less hacking and fewer hidden site issues.",
      },
      {
        label: "HDB resale kitchen renovation",
        value: "S$15,000 – S$28,000+",
        note: "Often includes hacking, haulage, tiling, plumbing updates and rectification.",
      },
      {
        label: "Condo kitchen renovation",
        value: "S$18,000 – S$35,000+",
        note: "Costs may increase with management rules, protection works and appliance integration.",
      },
      {
        label: "Premium custom kitchen",
        value: "S$35,000 – S$60,000+",
        note: "Applies when there are premium slabs, tall units, island counters and complex detailing.",
      },
    ],
    costTableTitle: "Typical kitchen renovation cost in Singapore",
    costTableIntro:
      "These ranges are planning references, not fixed packages. Two kitchens with the same floor area can differ greatly if one requires hacking, plumbing rerouting, premium worktops or full-height custom carpentry.",
    kitchenTypes: [
      {
        item: "BTO kitchen",
        cost: "S$8,000 – S$15,000",
        note: "Suitable when the layout is simple and major hacking is not required.",
      },
      {
        item: "4-room or 5-room HDB resale kitchen",
        cost: "S$15,000 – S$28,000+",
        note: "Budget more when existing cabinets, sink support, wall tiles and floor tiles must be removed.",
      },
      {
        item: "Condo kitchen",
        cost: "S$18,000 – S$35,000+",
        note: "MCST rules, lift protection, hacking hours and concealed services can affect planning.",
      },
      {
        item: "Open-concept or island kitchen",
        cost: "S$30,000 – S$50,000+",
        note: "The cost rises with island carpentry, large worktops, lighting and appliance coordination.",
      },
    ],
    costDriversTitle: "What actually makes a kitchen renovation expensive?",
    costDrivers: [
      {
        item: "Carpentry",
        cost: "Often 30–50% of the kitchen budget",
        note: "Top and bottom cabinets, tall units, internal hardware and custom finishing add up quickly.",
      },
      {
        item: "Worktop material",
        cost: "Moderate to high impact",
        note: "Quartz is practical for many homes; sintered stone costs more but gives better heat resistance and a premium look.",
      },
      {
        item: "Hacking and haulage",
        cost: "High impact for resale homes",
        note: "Old wall tiles, floor tiles, sink supports and built-in structures require labour and disposal.",
      },
      {
        item: "Plumbing and electrical",
        cost: "Depends on layout changes",
        note: "Sink relocation, hood points, oven points, concealed wiring and older pipes can increase cost.",
      },
      {
        item: "Appliance integration",
        cost: "Often underestimated",
        note: "Built-in ovens, dishwashers, fridge panels and exact dimensions must be planned before fabrication.",
      },
    ],
    sections: [
      {
        eyebrow: "Quotation check",
        title: "How to compare kitchen renovation quotations properly",
        paragraphs: [
          "A kitchen quotation should not be judged by the total price alone. In Singapore, the real difference is often whether the quote includes hacking, haulage, making-good works, plumbing coordination, electrical points, worktop cut-outs, GST and appliance-related preparation.",
          "This matters because kitchen renovation touches regulated and technical works. HDB renovation works may require approval before works begin, regulated plumbing works must be carried out by Licensed Plumbers, and electrical wiring or new power points should be handled by Licensed Electrical Workers. Gas-related works also need proper safety coordination before renovation starts.",
          "Before signing, ask the contractor to separate visible finishes from site-preparation and technical works. A cheaper quote may only cover carpentry and surface materials, while a more complete quote may already include demolition, disposal, sink support removal, wall patching, plumbing reconnection, electrical additions and final cleaning.",
        ],
        bullets: [
          "Check whether hacking, haulage, disposal and site cleaning are included.",
          "Confirm whether making-good works after removing old cabinets, sink supports, tiles or built-ins are included or provisional.",
          "Ask whether plumbing reconnection, sink relocation, drainage adjustments and Licensed Plumber coordination are included.",
          "Clarify whether electrical points for oven, hood, hob, fridge, dishwasher and small appliances are included or charged separately.",
          "Confirm whether worktop sink and hob cut-outs, edge finishing, backsplash, joints and silicone works are included.",
          "Check whether GST, condo protection works, lift padding, management application fees or debris handling are included.",
          "Do not finalise the quote until appliance dimensions, sink model, hob type, hood type and gas or induction decision are confirmed.",
        ],
      },
      {
        eyebrow: "Carpentry",
        title: "Kitchen carpentry is usually the biggest cost component",
        paragraphs: [
          "For most Singapore kitchens, cabinetry has the biggest influence on the final price. A kitchen with only bottom cabinets will cost very differently from one with top cabinets, tall units, internal pull-out baskets, appliance towers and special finishes.",
          "The cheapest cabinet is not always the cheapest long-term decision. Kitchens face heat, moisture, oil, cleaning chemicals and daily use. Poor-quality laminate, weak hinges or badly planned storage can become expensive to rectify later.",
        ],
        bullets: [
          "Bottom cabinets and top cabinets are usually priced by length.",
          "Tall units, appliance towers and full-height storage cost more because they use more material and internal structure.",
          "Soft-closing systems, premium hinges, drawers and pull-out accessories increase cost but improve durability and daily use.",
          "Curved panels, fluted details, hidden handles and boutique profiles should be budgeted as custom carpentry, not basic carpentry.",
        ],
      },
      {
        eyebrow: "Specifications",
        title: "The same-looking kitchen can be priced differently because the specifications are different",
        paragraphs: [
          "Two kitchen quotations can show the same cabinet length and still describe very different products. The difference is often hidden in the specifications: cabinet carcass material, internal laminate, door finish, hinges, drawer runners, worktop thickness, backsplash height, edge profile, number of drawers and how appliances are integrated.",
          "This is why a homeowner should not compare kitchen carpentry by length alone. A basic cabinet with simple swing doors is not the same as a kitchen with tall storage, heavy-duty drawers, soft-closing hardware, internal accessories, a full-height backsplash and a premium worktop.",
          "For worktops, quartz is commonly selected because it is practical and low-maintenance, while sintered stone is usually chosen when the homeowner wants better heat resistance, a thinner premium look or larger-format surfaces. The correct choice depends on cooking habits, budget, edge detail, installation complexity and how carefully the surface will be used.",
        ],
        bullets: [
          "Ask what cabinet carcass material is being used, and whether exposed or internal areas are properly finished.",
          "Confirm whether the quoted cabinet price includes top cabinets, tall units, drawer units, internal accessories and soft-closing hardware.",
          "Check whether the worktop price includes backsplash, sink and hob cut-outs, edge profile, joints, silicone and installation.",
          "Compare quartz and sintered stone by usage, heat exposure, chip risk, repairability, visual effect and budget — not only by material name.",
          "Clarify whether premium details such as fluted panels, curved corners, hidden handles, glass doors, LED lighting and appliance towers are included.",
          "Before signing, ask the contractor to write down the specification clearly so later upgrades do not become variation orders.",
        ],
      },
      {
        eyebrow: "Resale homes",
        title: "Why resale kitchen renovation costs more",
        paragraphs: [
          "Resale kitchens usually cost more because the contractor is not starting from a clean base. Before the new kitchen can be built, the old cabinets, worktop, wall tiles, floor tiles, plumbing points and electrical points may need to be removed or corrected.",
          "After hacking, the real condition of the site becomes clearer. Uneven walls, hollow tiles, old pipe routes, damaged plaster and missing tiles under old built-ins can all create additional work before carpentry can be installed properly.",
        ],
        bullets: [
          "Hacking and haulage are common in resale kitchens.",
          "Old wall and floor finishes may reveal uneven surfaces after removal.",
          "Existing plumbing points may not suit the new sink, dishwasher or washing machine location.",
          "Older electrical points may not be suitable for modern ovens, hobs, hoods or additional appliances.",
        ],
      },
      {
        eyebrow: "Site assessment",
        title: "Hidden kitchen costs are usually discovered before or during hacking",
        paragraphs: [
          "The most dangerous kitchen budget is one that assumes the site is already ready for new carpentry. In resale HDB flats and older condos, many cost differences only appear after the old cabinets, tiles, sink support and existing services are inspected or removed.",
          "This is why a site assessment matters before accepting a quotation. HDB renovation works may require approval before commencement, regulated plumbing work must be handled by a PUB Licensed Plumber, and new wiring or electrical extensions should be carried out by Licensed Electrical Workers. These are not decorative choices; they affect whether the kitchen can be built safely and correctly.",
          "A proper kitchen discussion should therefore separate design cost from site-readiness cost. The homeowner should know what is confirmed, what is provisional, and what can only be finalised after hacking or inspection.",
        ],
        bullets: [
          "Old tiled sink support: removal may reveal missing floor tiles, uneven levels or old pipe routes.",
          "Wall and floor condition: hollow tiles, weak plaster or uneven surfaces can require patching, screeding or relaying before new work starts.",
          "Concealed plumbing: sink, washer or dishwasher relocation may need Licensed Plumber coordination and cannot be priced like a simple cabinet change.",
          "Electrical loading and points: ovens, induction hobs, hoods, fridges and dishwashers may require additional points or circuit planning by a Licensed Electrical Worker.",
          "Gas coordination: gas pipe alteration, termination or reconnection should be planned before carpentry and appliance positions are fixed.",
          "Appliance mismatch: late confirmation of fridge, hob, hood, oven or dishwasher dimensions can lead to carpentry variation or rework.",
          "Condo logistics: MCST rules, lift protection, hacking hours and debris handling can affect cost even when the kitchen size is similar.",
        ],
      },
      {
        eyebrow: "Planning sequence",
        title: "Plan appliances, power, plumbing and gas before carpentry",
        paragraphs: [
          "A kitchen layout should not be finalised from cabinet dimensions alone. Before carpentry is fabricated, the homeowner should confirm the appliance list, sink position, hob type, hood type, fridge clearance, oven height, dishwasher or washer location, lighting points, power points, plumbing route and gas requirement.",
          "This is where many kitchen renovation variations happen. HDB advises homeowners to know the flat's electrical loading when planning electrical appliances, PUB requires regulated plumbing works to be carried out by Licensed Plumbers, and gas pipe alteration or supply turn-on has to be coordinated safely before the kitchen is completed.",
          "A practical way to plan is to lock the technical items first, then design the cabinets around them. If the induction hob, oven, dishwasher, hood or gas pipe route is confirmed too late, the carpentry may need to be altered, additional points may be required, or installation may be delayed.",
        ],
        bullets: [
          "Confirm the exact fridge, oven, hob, hood, dishwasher and washer dimensions before carpentry measurement.",
          "Decide early between gas hob and induction hob because this affects gas coordination, electrical loading and countertop cut-outs.",
          "Check whether the oven, induction hob or other high-capacity appliances need dedicated power points or circuit planning.",
          "Plan sink, dishwasher and washing machine positions together so plumbing and drainage are not treated as an afterthought.",
          "Allow clearance for fridge doors, drawer opening, tall cabinet doors, service access and ventilation around built-in appliances.",
          "Confirm hood type and ducting or recirculation approach before designing top cabinets.",
          "Finalise appliance specifications before worktop fabrication because sink and hob cut-outs cannot be guessed accurately.",
        ],
      },
      {
        eyebrow: "Approvals",
        title: "HDB, condo and site constraints matter",
        paragraphs: [
          "For HDB flats, renovation works are subject to HDB guidelines, and some works require approval before commencement. Hacking, changes to wall or floor finishes, and works affecting wet areas should never be treated casually.",
          "For condos, the management office and MCST rules can affect renovation hours, lift protection, debris disposal, noisy works and application procedures. Even when the design is simple, the approval and site-management process can affect the renovation timeline.",
        ],
        bullets: [
          "Confirm permit and approval requirements before hacking starts.",
          "Check condo management rules before scheduling noisy works.",
          "Plan material delivery, lift protection and debris removal early.",
          "Do not finalise carpentry before plumbing, appliance dimensions and site conditions are confirmed.",
        ],
      },
    ],
    worktopTitle: "Quartz vs sintered stone worktops",
    worktopIntro:
      "Worktop choice affects not only cost, but also cooking habits, maintenance and the overall feel of the kitchen. In Singapore homes, quartz remains a practical choice for many families, while sintered stone is often selected for a more premium finish and better heat resistance.",
    worktopRows: [
      {
        item: "Quartz",
        cost: "Moderate",
        note: "Durable and practical for most homes, but homeowners should still avoid placing very hot cookware directly on the surface.",
      },
      {
        item: "Sintered stone",
        cost: "Higher",
        note: "More heat-resistant and visually premium, suitable when the kitchen design calls for a thinner or more refined slab look.",
      },
      {
        item: "Waterfall edge or large backsplash",
        cost: "Additional cost",
        note: "Looks premium, but increases material usage, fabrication and installation complexity.",
      },
      {
        item: "Sink and hob cut-outs",
        cost: "Must be included",
        note: "Cut-outs, joints and edge finishing should be checked before comparing worktop quotations.",
      },
    ],
    sinkSupportTitle: "Older HDB sink supports can increase renovation complexity",
    sinkSupportParagraphs: [
      "Some older Singapore HDB kitchens use tiled concrete sink supports instead of modern modular kitchen bottom cabinets. This means tiles or masonry were used to build up the base that supports the sink and countertop.",
      "When this old sink support is hacked away, there may not be finished floor tiles beneath it. The support may have been built directly onto the original slab or over an unfinished area during an earlier renovation.",
      "This is why older resale HDB kitchens need careful site inspection. Removing the sink support can expose missing tiles, uneven floor levels, old pipe routes or surfaces that need patching before new cabinets can be installed properly.",
    ],
    sinkSupportBullets: [
      "Patching missing floor areas after demolition.",
      "Levelling uneven surfaces before new carpentry goes in.",
      "Additional tiling or making-good works.",
      "Concealed plumbing adjustments around the sink area.",
      "Extra hacking, haulage and site-cleaning labour.",
    ],
    overlayTitle: "Should you overlay or hack existing kitchen tiles?",
    overlayIntro:
      "Overlaying tiles can reduce cost and mess, but it is not always the right answer. The existing tile condition, floor height, drainage slope and long-term durability must be checked before deciding.",
    overlayRows: [
      {
        item: "Overlay existing tiles",
        cost: "Lower upfront cost",
        note: "Works best when existing tiles are sound, flat and suitable for overlay. Not ideal if tiles are hollow, loose or uneven.",
      },
      {
        item: "Hack and relay tiles",
        cost: "Higher upfront cost",
        note: "More labour and disposal, but gives a cleaner base when existing finishes are old or unreliable.",
      },
      {
        item: "Partial making-good",
        cost: "Depends on condition",
        note: "Common in resale kitchens after cabinets, sink supports or built-ins are removed.",
      },
    ],
    scenariosTitle: "Realistic kitchen renovation budget examples",
    scenarios: [
      {
        title: "4-room BTO kitchen",
        cost: "Around S$10,000 – S$15,000",
        details: [
          "Standard top and bottom cabinets",
          "Quartz worktop",
          "Basic plumbing connection",
          "Limited hacking or no hacking",
          "Simple lighting and power-point planning",
        ],
      },
      {
        title: "4-room HDB resale kitchen",
        cost: "Around S$22,000 – S$35,000",
        details: [
          "Full hacking of old cabinets, tiles and sink support",
          "New wall and floor finishes",
          "Custom carpentry with quartz or sintered stone",
          "Plumbing adjustment and electrical upgrades",
          "Making-good works after demolition",
        ],
      },
      {
        title: "Condo open-concept kitchen",
        cost: "Around S$30,000 – S$50,000+",
        details: [
          "Island counter or extended peninsula",
          "Premium worktop and backsplash",
          "Integrated appliances",
          "Concealed lighting details",
          "MCST coordination and protection works",
        ],
      },
    ],
    budgetingTitle: "How to budget properly for a kitchen renovation",
    budgetingTips: [
      "Start with the workflow: sink, hob, fridge, preparation area and storage should be planned before choosing decorative finishes.",
      "Set aside a contingency buffer, especially for resale HDB and older condo kitchens.",
      "Confirm appliance dimensions early so the carpentry can be fabricated accurately.",
      "Spend first on durable areas: cabinet structure, worktop, hinges, plumbing and electrical safety.",
      "Avoid comparing quotations only by total price. Check whether hacking, haulage, sink support removal, cut-outs, GST and making-good works are included.",
    ],
    internalLinksTitle: "Useful planning tools and related guides",
    internalLinks: [
      {
        label: "Renovation Cost Calculator",
        to: "/renovation-cost-calculator",
        text: "Estimate a realistic planning range before asking for quotations.",
      },
      {
        label: "Renovation Quotation Singapore",
        to: "/insights/renovation-quotation-singapore",
        text: "Learn why kitchen quotations can vary depending on exclusions, site risks and material specifications.",
      },
      {
        label: "Buying Renovation Items Overseas",
        to: "/insights/overseas-renovation-shopping-singapore",
        text: "Check what to confirm before sourcing sinks, taps, appliances or kitchen fittings from overseas.",
      },
      {
        label: "Renovation Cost Singapore Guide",
        to: "/insights/renovation-cost-singapore-2026",
        text: "Understand whole-home renovation cost ranges for HDB, condo and resale homes.",
      },
      {
        label: "Renovation Mistakes Singapore Homeowners Make",
        to: "/insights/renovation-mistakes-singapore",
        text: "Avoid common planning, quotation and site coordination mistakes.",
      },
      {
        label: "HDB Renovation Timeline Singapore",
        to: "/insights/hdb-renovation-timeline-singapore",
        text: "Plan the renovation sequence, approval timing and handover expectations.",
      },
    ],
    faqTitle: "Kitchen renovation cost FAQ",
    faqs: [
      {
        question: "How much does kitchen renovation cost in Singapore?",
        answer:
          "Most kitchen renovations in Singapore range from S$8,000 to S$35,000+. A basic BTO kitchen can be below S$15,000, while a full resale kitchen rebuild with hacking, tiling, custom carpentry, plumbing and electrical works can exceed S$30,000.",
      },
      {
        question: "Why do resale HDB kitchen renovations cost more?",
        answer:
          "Resale kitchens usually involve removal of old cabinets, tiles, worktops and sometimes tiled sink supports. After hacking, the contractor may also need to patch missing tiles, level surfaces, adjust plumbing and make good old wall or floor areas.",
      },
      {
        question: "What is an HDB kitchen sink support?",
        answer:
          "Some older HDB kitchens use tiled concrete or masonry sink supports instead of modern cabinet bases. When removed, there may be no finished floor tiles below the support, which can create extra patching, tiling and levelling works.",
      },
      {
        question: "How much does kitchen carpentry cost in Singapore?",
        answer:
          "Kitchen carpentry cost depends on length, cabinet height, internal hardware, material selection and design complexity. It is often the largest part of the kitchen budget and can account for 30–50% of the total cost.",
      },
      {
        question: "Is quartz or sintered stone better for kitchen worktops?",
        answer:
          "Quartz is practical and commonly used for Singapore homes. Sintered stone costs more but offers better heat resistance and a more premium appearance. The better choice depends on cooking habits, budget and design expectations.",
      },
      {
        question: "Can I renovate my kitchen without hacking?",
        answer:
          "Yes, if the existing tiles and layout are suitable. Some homeowners keep the floor and wall finishes, then change carpentry, worktop and fittings. However, for older resale kitchens with hollow tiles, sink supports or poor existing finishes, hacking may be more reliable.",
      },
      {
        question: "Should I overlay or hack kitchen tiles?",
        answer:
          "Overlaying is usually cheaper and faster, but it depends on existing tile condition. If the tiles are hollow, uneven, loose or affected by old works, hacking and relaying may provide a better long-term base.",
      },
      {
        question: "How long does a kitchen renovation take?",
        answer:
          "A straightforward kitchen renovation may take a few weeks, while resale kitchens with hacking, tiling, plumbing, electrical works and custom carpentry coordination can take longer. Carpentry fabrication and site readiness are usually key timeline factors.",
      },
      {
        question: "Why do kitchen renovation quotations vary so much?",
        answer:
          "Quotations vary because some include hacking, haulage, making-good works, sink support removal, worktop cut-outs, GST and electrical points, while others only show basic carpentry and visible finishes. Always compare scope, not only total price.",
      },
      {
        question: "How much contingency should I prepare for a kitchen renovation?",
        answer:
          "For a new BTO kitchen, a smaller contingency may be enough. For resale HDB or older condo kitchens, it is safer to prepare a larger buffer because hidden site conditions are only fully revealed after demolition.",
      },
    ],
    ctaTitle: "Planning a kitchen renovation in Singapore?",
    ctaText:
      "Use ID Work Studio’s renovation cost calculator first to understand a realistic budget range. If you are renovating a resale HDB kitchen, we can also review the likely hacking, sink support, tiling and carpentry considerations before you commit to a scope.",
    ctaPrimary: "Estimate Your Kitchen Budget",
    ctaSecondary: "Request Kitchen Quote",
    breadcrumbCurrent: "Kitchen Renovation Cost Singapore",
  },
  zh: {
    metaTitle: "新加坡厨房装修费用 2026 指南 | ID Work Studio",
    metaDescription:
      "新加坡厨房装修费用指南，适用于HDB、共管公寓和二手房。了解橱柜、台面、拆除、水电、铺砖和隐藏费用。",
    canonical: "https://idworkstudio.com/insights/kitchen-renovation-cost-singapore-2026",
    eyebrow: "新加坡装修费用指南",
    title: "新加坡厨房装修多少钱？（2026指南）",
    subtitle:
      "在新加坡，厨房装修通常约为 S$8,000 至 S$35,000+，主要取决于是否需要拆除、橱柜范围、台面材料、水电工程和现场状况。二手HDB厨房通常更贵，因为旧瓷砖、旧水电、砖砌洗碗盆支撑和拆除后的修补工程都会影响最终费用。",
    readTime: "约8分钟阅读",
    category: "装修费用",
    heroImageAlt: "新加坡高级暖色系厨房装修，定制橱柜与石材台面",
    quickAnswerTitle: "快速答案",
    quickAnswer:
      "简单的BTO厨房翻新可能约 S$8,000–S$15,000；如果是二手HDB厨房，需要拆除、重铺墙地砖、定制橱柜、调整水电和处理现场修补，费用可能达到 S$20,000–S$35,000 或更高。真正影响价格的不是“厨房”两个字，而是需要拆掉什么、重做什么、隐藏什么，以及橱柜要做到多复杂。",
    costRows: [
      {
        label: "基本BTO厨房翻新",
        value: "S$8,000 – S$15,000",
        note: "工程较轻，通常较少拆除，隐藏问题也较少。",
      },
      {
        label: "HDB二手厨房装修",
        value: "S$15,000 – S$28,000+",
        note: "常见项目包括拆除、清运、铺砖、水电调整和修补工程。",
      },
      {
        label: "共管公寓厨房装修",
        value: "S$18,000 – S$35,000+",
        note: "管理处规定、保护工程、施工时间限制和电器整合都会影响费用。",
      },
      {
        label: "高级定制厨房",
        value: "S$35,000 – S$60,000+",
        note: "适用于高级台面、高柜、中岛、复杂细节和整合式电器。",
      },
    ],
    costTableTitle: "新加坡常见厨房装修费用",
    costTableIntro:
      "以下范围适合作为预算参考，并不是固定配套。两个面积相近的厨房，如果一个需要拆除、改水电、高级台面和大量定制橱柜，费用会相差很多。",
    kitchenTypes: [
      {
        item: "BTO厨房",
        cost: "S$8,000 – S$15,000",
        note: "适合简单布局、无需大量拆除的厨房。",
      },
      {
        item: "4房或5房HDB二手厨房",
        cost: "S$15,000 – S$28,000+",
        note: "如果旧橱柜、砖砌支撑、墙砖和地砖都需要拆除，预算需要更充足。",
      },
      {
        item: "共管公寓厨房",
        cost: "S$18,000 – S$35,000+",
        note: "MCST规定、电梯保护、拆除时间限制和隐藏管线都会影响规划。",
      },
      {
        item: "开放式或中岛厨房",
        cost: "S$30,000 – S$50,000+",
        note: "中岛橱柜、大型台面、灯光和电器整合都会提高费用。",
      },
    ],
    costDriversTitle: "厨房装修真正贵在哪里？",
    costDrivers: [
      {
        item: "橱柜",
        cost: "通常占厨房预算30–50%",
        note: "上下柜、高柜、内部五金和定制饰面都会快速增加费用。",
      },
      {
        item: "台面材料",
        cost: "中至高影响",
        note: "石英石实用；岩板价格较高，但耐热性和高级感更强。",
      },
      {
        item: "拆除与清运",
        cost: "二手房影响较大",
        note: "旧墙砖、地砖、砖砌洗碗盆支撑和旧结构都需要人工与清运。",
      },
      {
        item: "水电工程",
        cost: "视布局改变而定",
        note: "洗碗盆移位、抽油烟机点、烤箱点、暗线和旧水管都会影响费用。",
      },
      {
        item: "电器整合",
        cost: "常被低估",
        note: "嵌入式烤箱、洗碗机、冰箱位置和尺寸必须在橱柜制作前确认。",
      },
    ],
    sections: [
      {
        eyebrow: "报价比较",
        title: "如何正确比较厨房装修报价",
        paragraphs: [
          "厨房装修报价不能只看总价。在新加坡，真正的差别通常在于报价是否包括拆除、清运、修补、水喉协调、电位、台面开孔、GST和电器相关准备工程。",
          "这很重要，因为厨房装修涉及受监管和技术性的工程。HDB装修有些项目开工前需要批准；受监管的水务和卫生水喉工程必须由持牌水喉工处理；新增或改动电线、电位等电力工程也应由持牌电工进行。涉及煤气的装修，也需要在开工前做好安全协调。",
          "签约前，应要求承包商把表面材料和现场准备、技术工程分开说明。较便宜的报价可能只包括橱柜和表面材料；较完整的报价可能已经包括拆除、清运、砖砌洗碗盆支撑拆除、墙面修补、水喉重接、电位增加和完工清洁。",
        ],
        bullets: [
          "确认报价是否包括拆除、清运、垃圾处理和现场清洁。",
          "确认拆除旧橱柜、砖砌支撑、瓷砖或固定家具后的修补工程是否包括，还是暂定项目。",
          "确认水喉重接、洗碗盆移位、排水调整和持牌水喉工协调是否包括。",
          "确认烤箱、抽油烟机、炉具、冰箱、洗碗机和小家电所需电位是否包括，还是另外收费。",
          "确认台面洗碗盆和炉具开孔、收边、挡水板、接缝和硅胶工程是否包括。",
          "确认GST、公寓保护工程、电梯保护、管理处申请费用和垃圾处理是否包括。",
          "在电器尺寸、洗碗盆型号、炉具类型、抽油烟机类型，以及煤气或电磁炉选择确认前，不要急着确定报价。",
        ],
      },
      {
        eyebrow: "橱柜",
        title: "厨房橱柜通常是最大费用项目",
        paragraphs: [
          "在多数新加坡厨房装修中，橱柜对最终价格影响最大。只有下柜的厨房，与有上柜、高柜、拉篮、嵌入式电器柜和特殊饰面的厨房，价格会完全不同。",
          "最便宜的橱柜，不一定是长期最省钱的选择。厨房每天面对油烟、湿气、清洁剂和频繁使用，如果板材、铰链或收纳规划不好，后期修补反而更麻烦。",
        ],
        bullets: [
          "下柜和上柜通常按长度计算。",
          "高柜、电器柜和全高收纳用料更多，内部结构也更复杂。",
          "缓冲铰链、抽屉、拉篮和五金会增加费用，但能提升耐用度和使用体验。",
          "弧形板、格栅细节、隐藏把手和特殊造型应按定制橱柜预算，不应当作基础橱柜。",
        ],
      },
      {
        eyebrow: "规格细节",
        title: "看起来一样的厨房，报价可能因为规格不同而差很多",
        paragraphs: [
          "两份厨房报价即使写着相同的橱柜长度，实际内容也可能完全不同。差别通常藏在规格里：柜体板材、内部饰面、门板饰面、铰链、抽屉滑轨、台面厚度、挡水板高度、收边方式、抽屉数量，以及电器如何整合。",
          "所以屋主不应该只用长度来比较厨房橱柜价格。普通平开门下柜，和有高柜、重型抽屉、缓冲五金、内部拉篮、满高挡水板和高级台面的厨房，并不是同一种报价。",
          "台面方面，石英石通常因为实用和容易保养而被选择；岩板则多用于追求更高耐热性、较薄的高级视觉或大板面效果的厨房。真正合适的选择，要看烹饪习惯、预算、收边细节、安装复杂度和日常使用方式。",
        ],
        bullets: [
          "确认柜体使用什么板材，外露和内部位置是否有妥善饰面。",
          "确认橱柜报价是否包括上柜、高柜、抽屉柜、内部五金和缓冲系统。",
          "确认台面报价是否包括挡水板、洗碗盆和炉具开孔、收边、接缝、硅胶和安装。",
          "比较石英石和岩板时，不要只看材料名称，也要看使用习惯、受热情况、崩边风险、维修难度、视觉效果和预算。",
          "确认格栅门板、弧形角、隐藏把手、玻璃门、LED灯和电器高柜等高级细节是否已经包括。",
          "签约前应要求承包商把规格写清楚，避免后期升级全部变成追加费用。",
        ],
      },
      {
        eyebrow: "二手房",
        title: "为什么二手厨房装修通常更贵",
        paragraphs: [
          "二手厨房通常更贵，因为施工不是从干净的空屋开始。新的厨房还没安装之前，旧橱柜、台面、墙砖、地砖、水管和电位都可能需要拆除或修正。",
          "拆除后，现场真实状况才会完全显现。不平整的墙面、空鼓瓷砖、旧水管路线、损坏的批荡，以及旧柜底下没有完整地砖，都会影响橱柜安装前的准备工程。",
        ],
        bullets: [
          "二手厨房常见拆除和清运费用。",
          "旧墙砖和地砖拆除后，墙面或地面可能需要修补。",
          "原有水位可能不适合新的洗碗盆、洗碗机或洗衣机位置。",
          "旧电位可能无法满足现代烤箱、炉具、抽油烟机和小家电需求。",
        ],
      },
      {
        eyebrow: "现场评估",
        title: "厨房隐藏费用通常在检查或拆除后才真正出现",
        paragraphs: [
          "最危险的厨房预算，是默认现场已经可以直接做新橱柜。二手HDB和旧公寓厨房常见的问题，往往要等旧橱柜、墙地砖、砖砌洗碗盆支撑和旧水电位置检查或拆除后，才会真正看得清楚。",
          "这也是为什么签报价前需要做现场评估。HDB装修工程可能需要在开工前申请批准，受监管的水喉和排水工程必须由PUB Licensed Plumber处理，新增电线或电位也应由Licensed Electrical Worker负责。这些不是装饰选择，而是会影响厨房是否能安全、正确施工的技术条件。",
          "所以一个专业的厨房报价，不应该只谈设计和表面材料，也要分清楚哪些费用已经确定，哪些只是暂估，哪些必须等拆除或现场检查后才能最终确认。",
        ],
        bullets: [
          "旧砖砌洗碗盆支撑：拆除后可能发现地砖缺失、地面不平或旧水管路线。",
          "墙面和地面状况：空鼓砖、墙面松动或地面不平，可能需要修补、找平或重新铺设。",
          "隐藏水喉问题：洗碗盆、洗衣机或洗碗机移位，可能需要Licensed Plumber协调，不能当作简单橱柜更换来计算。",
          "电力负荷和电位：烤箱、电磁炉、抽油烟机、冰箱和洗碗机，可能需要Licensed Electrical Worker规划额外电位或线路。",
          "煤气协调：煤气管调整、暂停或重新接驳，应在橱柜和电器位置确定前先规划。",
          "电器尺寸不合：冰箱、炉具、抽油烟机、烤箱或洗碗机太迟确认，可能造成橱柜改动或返工。",
          "公寓现场限制：MCST规定、电梯保护、拆除时段和垃圾清运，即使厨房面积相近，也可能影响费用。",
        ],
      },
      {
        eyebrow: "规划顺序",
        title: "橱柜定制前，先确认电器、电位、水喉和煤气",
        paragraphs: [
          "厨房布局不能只按橱柜尺寸来决定。在橱柜制作前，屋主应先确认电器清单、洗碗盆位置、炉具类型、抽油烟机类型、冰箱开门空间、烤箱高度、洗碗机或洗衣机位置、灯位、电位、水管路线和煤气需求。",
          "很多厨房装修的追加费用，都是因为这些项目太迟确认。HDB提醒屋主在规划电器时应了解单位的电力负荷；PUB规定受监管的水喉工程必须由持牌水喉工处理；煤气管调整或重新接通也需要在厨房完工前做好安全协调。",
          "比较实际的做法，是先确认技术条件，再围绕这些条件设计橱柜。如果电磁炉、烤箱、洗碗机、抽油烟机或煤气管路线太迟确认，橱柜可能要修改、电位可能要增加，安装也可能被延误。",
        ],
        bullets: [
          "橱柜量尺前，先确认冰箱、烤箱、炉具、抽油烟机、洗碗机和洗衣机的准确尺寸。",
          "提早决定使用煤气炉还是电磁炉，因为这会影响煤气协调、电力负荷和台面开孔。",
          "确认烤箱、电磁炉或其他高功率电器是否需要独立电位或线路规划。",
          "洗碗盆、洗碗机和洗衣机位置应一起规划，不要把水喉和排水当作后期小事。",
          "预留冰箱开门、抽屉开启、高柜门、维修空间和嵌入式电器散热空间。",
          "设计上柜前，先确认抽油烟机类型，以及是否需要排管或使用循环式。",
          "台面制作前必须确认电器型号，因为洗碗盆和炉具开孔不能靠估算。",
        ],
      },
      {
        eyebrow: "审批与限制",
        title: "HDB、共管公寓和现场限制都会影响厨房装修",
        paragraphs: [
          "HDB单位的装修必须遵守HDB规定，有些工程需要在开工前申请批准。涉及拆除、墙地面饰面、水位或湿区相关工程时，不应随便处理。",
          "如果是共管公寓，管理处和MCST规定可能影响施工时间、电梯保护、垃圾清运、噪音工程和申请流程。即使设计不复杂，审批和现场管理也会影响工期。",
        ],
        bullets: [
          "拆除前先确认是否需要相关批准。",
          "安排噪音工程前，先查看公寓管理处规定。",
          "提早规划材料运输、电梯保护和垃圾清运。",
          "水位、电器尺寸和现场状况确认前，不要急着定制橱柜。",
        ],
      },
    ],
    worktopTitle: "石英石 vs 岩板厨房台面",
    worktopIntro:
      "台面选择不只影响预算，也影响烹饪习惯、保养方式和整体厨房质感。在新加坡家庭中，石英石仍然是实用选择；岩板费用较高，但耐热性和视觉效果更高级。",
    worktopRows: [
      {
        item: "石英石",
        cost: "中等",
        note: "多数家庭实用耐用，但仍不建议把高温锅具直接放在台面上。",
      },
      {
        item: "岩板",
        cost: "较高",
        note: "耐热性更好，视觉更高级，适合追求薄板和精致效果的厨房。",
      },
      {
        item: "瀑布边或大面积挡水板",
        cost: "额外费用",
        note: "效果高级，但材料用量、加工和安装复杂度都会增加。",
      },
      {
        item: "洗碗盆和炉具开孔",
        cost: "必须确认",
        note: "比较报价时，要确认开孔、接口、边角和收口是否已经包括。",
      },
    ],
    sinkSupportTitle: "旧HDB厨房的砖砌洗碗盆支撑可能增加复杂度",
    sinkSupportParagraphs: [
      "一些较旧的新加坡HDB厨房，不是用现代橱柜来承托洗碗盆，而是用瓷砖或砖砌结构做成洗碗盆支撑。也就是说，洗碗盆和台面底部原本是由砖墙或瓷砖结构支撑。",
      "当这个旧支撑被拆除时，底下未必有完整铺好的地砖。有些旧支撑是在早期装修时直接建在原始地面或未完成区域上。",
      "因此，较旧的二手HDB厨房一定要更仔细检查现场。拆掉支撑后，可能会看到缺失地砖、不平地面、旧水管路线，或需要先修补才能安装新橱柜的区域。",
    ],
    sinkSupportBullets: [
      "拆除后补回缺失地面区域。",
      "新橱柜安装前需要找平。",
      "额外铺砖或修补工程。",
      "洗碗盆附近的隐藏水管调整。",
      "额外拆除、清运和现场清洁人工。",
    ],
    overlayTitle: "厨房地砖应该覆盖还是拆除重铺？",
    overlayIntro:
      "覆盖旧砖可以降低费用和减少灰尘，但不一定适合所有厨房。决定前应检查旧砖状况、地面高度、排水坡度和长期耐用性。",
    overlayRows: [
      {
        item: "覆盖旧砖",
        cost: "前期费用较低",
        note: "适合旧砖稳固、平整、没有空鼓的情况。不适合松动、不平或空鼓的旧砖。",
      },
      {
        item: "拆除重铺",
        cost: "前期费用较高",
        note: "人工和清运较多，但如果旧饰面不可靠，重做基层会更稳妥。",
      },
      {
        item: "局部修补",
        cost: "视现场而定",
        note: "常见于拆除旧橱柜、砖砌支撑或固定家具之后。",
      },
    ],
    scenariosTitle: "真实厨房装修预算例子",
    scenarios: [
      {
        title: "4房BTO厨房",
        cost: "约 S$10,000 – S$15,000",
        details: [
          "标准上下柜",
          "石英石台面",
          "基本水位连接",
          "少量或无需拆除",
          "简单灯光和电位规划",
        ],
      },
      {
        title: "4房HDB二手厨房",
        cost: "约 S$22,000 – S$35,000",
        details: [
          "拆除旧橱柜、旧砖和砖砌洗碗盆支撑",
          "重新铺墙砖和地砖",
          "定制橱柜配石英石或岩板台面",
          "水位调整和电位升级",
          "拆除后的修补工程",
        ],
      },
      {
        title: "共管公寓开放式厨房",
        cost: "约 S$30,000 – S$50,000+",
        details: [
          "中岛或半岛台设计",
          "高级台面和挡水板",
          "嵌入式电器",
          "隐藏灯光细节",
          "MCST协调和保护工程",
        ],
      },
    ],
    budgetingTitle: "如何正确规划厨房装修预算",
    budgetingTips: [
      "先规划动线：洗碗盆、炉具、冰箱、备餐区和收纳位置应先确定，再选择装饰材料。",
      "预留预算缓冲，尤其是二手HDB和较旧公寓厨房。",
      "提早确认电器尺寸，避免橱柜制作后才发现不合。",
      "优先把钱花在耐用位置：橱柜结构、台面、铰链、水电安全。",
      "不要只比较总价，要确认报价是否包括拆除、清运、砖砌支撑拆除、台面开孔、GST和修补工程。",
    ],
    internalLinksTitle: "实用预算工具与相关指南",
    internalLinks: [
      {
        label: "装修费用计算器",
        to: "/renovation-cost-calculator",
        text: "在索取报价前，先估算一个实际预算范围。",
      },
      {
        label: "新加坡装修报价指南",
        to: "/insights/renovation-quotation-singapore",
        text: "了解为什么厨房装修报价会因为排除项目、现场风险和材料规格而不同。",
      },
      {
        label: "海外购买装修材料注意事项",
        to: "/insights/overseas-renovation-shopping-singapore",
        text: "购买水槽、水龙头、电器或厨房五金前，先确认尺寸、保修和安装责任。",
      },
      {
        label: "新加坡装修费用指南",
        to: "/insights/renovation-cost-singapore-2026",
        text: "了解HDB、公寓和二手房整体装修费用。",
      },
      {
        label: "新加坡屋主常见装修错误",
        to: "/insights/renovation-mistakes-singapore",
        text: "避免预算、报价和现场协调上的常见问题。",
      },
      {
        label: "HDB装修时间表",
        to: "/insights/hdb-renovation-timeline-singapore",
        text: "规划装修流程、审批时间和交屋预期。",
      },
    ],
    faqTitle: "厨房装修费用常见问题",
    faqs: [
      {
        question: "新加坡厨房装修多少钱？",
        answer:
          "多数新加坡厨房装修约 S$8,000 至 S$35,000+。基本BTO厨房可能低于 S$15,000；如果是二手厨房，需要拆除、铺砖、定制橱柜、水电和修补，费用可能超过 S$30,000。",
      },
      {
        question: "为什么二手HDB厨房装修更贵？",
        answer:
          "二手厨房通常要拆除旧橱柜、瓷砖、台面，有些还有砖砌洗碗盆支撑。拆除后可能还要补砖、找平、调整水管，并修补旧墙面或地面。",
      },
      {
        question: "什么是HDB厨房砖砌洗碗盆支撑？",
        answer:
          "一些旧HDB厨房使用砖砌或瓷砖结构来支撑洗碗盆，而不是现代橱柜底座。拆除后，底下可能没有完整地砖，因此需要额外修补、铺砖和找平。",
      },
      {
        question: "新加坡厨房橱柜多少钱？",
        answer:
          "厨房橱柜费用取决于长度、高度、内部五金、材料和设计复杂度。它通常是厨房装修最大费用之一，可能占整体预算30–50%。",
      },
      {
        question: "厨房台面选石英石还是岩板？",
        answer:
          "石英石实用、常见，适合多数新加坡家庭。岩板价格较高，但耐热性和高级感更好。选择取决于烹饪习惯、预算和设计要求。",
      },
      {
        question: "厨房可以不拆除直接翻新吗？",
        answer:
          "可以，但前提是现有瓷砖和布局适合保留。有些屋主只更换橱柜、台面和配件。但如果旧砖空鼓、旧支撑复杂或基础状况不好，拆除重做会更稳妥。",
      },
      {
        question: "厨房地砖应该覆盖还是拆除？",
        answer:
          "覆盖通常较便宜较快，但要看旧砖是否稳固、平整、没有空鼓。如果旧砖松动、不平或受旧装修影响，拆除重铺会更可靠。",
      },
      {
        question: "厨房装修需要多久？",
        answer:
          "简单厨房装修可能数周完成；如果涉及拆除、铺砖、水电、定制橱柜和现场协调，时间会更长。橱柜制作和现场准备通常是关键。",
      },
      {
        question: "为什么厨房装修报价差别这么大？",
        answer:
          "因为有些报价包括拆除、清运、修补、砖砌支撑拆除、台面开孔、GST和电位，有些只包括基本橱柜和表面材料。比较时应看范围，不只是总价。",
      },
      {
        question: "厨房装修要预留多少备用预算？",
        answer:
          "BTO厨房可以预留较小缓冲；二手HDB或旧公寓厨房建议预留更多，因为许多隐藏问题要拆除后才会真正看见。",
      },
    ],
    ctaTitle: "正在规划新加坡厨房装修？",
    ctaText:
      "先使用 ID Work Studio 装修费用计算器建立预算。如果是全屋装修，再使用总装修预算计算器。正式比较报价前，可先让我们协助检视厨房施工范围，提前发现可能影响预算的隐藏项目。",
    ctaPrimary: "估算厨房预算",
    ctaSecondary: "预约厨房施工范围评估",
    breadcrumbCurrent: "新加坡厨房装修费用",
  },
};

export default function KitchenRenovationCostSingapore() {
  const { i18n } = useTranslation();
  const lang = i18n.language === "zh" ? "zh" : "en";
  const t = content[lang];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: t.title,
    description: t.metaDescription,
    url: t.canonical,
    image: `https://idworkstudio.com${heroImage}`,
    author: {
      "@type": "Organization",
      name: "ID Work Studio",
      url: "https://idworkstudio.com/",
    },
    publisher: {
      "@type": "Organization",
      name: "ID Work Studio",
      url: "https://idworkstudio.com/",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": t.canonical,
    },
    inLanguage: lang === "zh" ? "zh-SG" : "en-SG",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: lang === "zh" ? "首页" : "Home",
        item: "https://idworkstudio.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: lang === "zh" ? "装修文章" : "Insights",
        item: "https://idworkstudio.com/insights",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: t.breadcrumbCurrent,
        item: t.canonical,
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDescription} />
        <link rel="canonical" href={t.canonical} />
        <meta property="og:title" content={t.metaTitle} />
        <meta property="og:description" content={t.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={t.canonical} />
        <meta property="og:image" content={`https://idworkstudio.com${heroImage}`} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <main className="bg-[#FAF8F3] text-[#2C2C2C]">
        <section className="relative flex min-h-[720px] items-center justify-center overflow-hidden bg-[#111] px-6 py-24 text-white md:min-h-[820px] md:py-32">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt={t.heroImageAlt}
              className="h-full w-full object-cover object-center opacity-70"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-[#111]/80" />
          </div>
          <div className="relative z-10 mx-auto max-w-6xl text-center">
            <p className="mb-7 inline-flex rounded-full border border-[#C5A059]/45 bg-black/25 px-6 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#C5A059] backdrop-blur">
              {t.eyebrow}
            </p>
            <h1 className="mx-auto max-w-5xl font-serif text-4xl font-semibold leading-[1.08] md:text-7xl">
              {t.title}
            </h1>
            <p className="mx-auto mt-7 max-w-4xl text-base leading-8 text-white/80 md:text-xl md:leading-9">
              {t.subtitle}
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3 text-xs uppercase tracking-[0.18em] text-white/65">
              <span>{t.category}</span>
              <span>•</span>
              <span>{t.readTime}</span>
            </div>
          </div>
        </section>

        <section className="border-b border-[#e8e1d7] bg-white px-6 py-5">
          <div className="mx-auto max-w-5xl">
            <Link
              to="/insights"
              className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f6a63] hover:text-[#C5A059]"
            >
              ← {lang === "zh" ? "返回装修文章" : "Back to insights"}
            </Link>
          </div>
        </section>

        <article className="mx-auto max-w-5xl px-6 py-14 md:py-20">
          <section className="mb-14 rounded-3xl border border-[#e8e1d7] bg-white p-6 shadow-sm md:p-8">
            <h2 className="font-serif text-3xl font-semibold">{t.quickAnswerTitle}</h2>
            <p className="mt-4 text-base leading-8 text-[#5f5a54]">{t.quickAnswer}</p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {t.costRows.map((row) => (
                <div key={row.label} className="rounded-2xl border border-[#e8e1d7] bg-[#fffdf8] p-5">
                  <p className="text-sm font-semibold text-[#6f6a63]">{row.label}</p>
                  <p className="mt-2 text-2xl font-bold text-[#2C2C2C]">{row.value}</p>
                  <p className="mt-2 text-sm leading-6 text-[#6f6a63]">{row.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="border-b border-[#e8e1d7] pb-4 font-serif text-3xl font-semibold">
              {t.costTableTitle}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5f5a54]">{t.costTableIntro}</p>
            <div className="mt-6 overflow-hidden rounded-3xl border border-[#e8e1d7] bg-white shadow-sm">
              {t.kitchenTypes.map((row) => (
                <div key={row.item} className="grid gap-2 border-b border-[#e8e1d7] p-5 last:border-b-0 md:grid-cols-[1.1fr_0.8fr_1.6fr] md:gap-5">
                  <p className="font-semibold text-[#2C2C2C]">{row.item}</p>
                  <p className="font-bold text-[#9a7a3f]">{row.cost}</p>
                  <p className="text-sm leading-6 text-[#6f6a63]">{row.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="border-b border-[#e8e1d7] pb-4 font-serif text-3xl font-semibold">
              {t.costDriversTitle}
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {t.costDrivers.map((row) => (
                <div key={row.item} className="rounded-2xl border border-[#e8e1d7] bg-white p-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C5A059]">{row.cost}</p>
                  <h3 className="mt-2 text-lg font-semibold">{row.item}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#5f5a54]">{row.note}</p>
                </div>
              ))}
            </div>
          </section>

          {t.sections.map((section) => (
            <section key={section.title} className="mb-14">
              {section.eyebrow && (
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#C5A059]">
                  {section.eyebrow}
                </p>
              )}
              <h2 className="border-b border-[#e8e1d7] pb-4 font-serif text-3xl font-semibold">
                {section.title}
              </h2>
              <div className="mt-6 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-[#5f5a54]">
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="space-y-3 pt-2">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-base leading-7 text-[#5f5a54]">
                        <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#C5A059]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}

          <section className="mb-14 rounded-3xl border border-[#e8e1d7] bg-white p-6 shadow-sm md:p-8">
            <h2 className="font-serif text-3xl font-semibold">{t.sinkSupportTitle}</h2>
            <div className="mt-6 space-y-4">
              {t.sinkSupportParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-[#5f5a54]">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-[#C5A059]/35 bg-[#fff9eb] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#9a7a3f]">
                {lang === "zh" ? "可能增加的工程" : "Possible added works"}
              </p>
              <ul className="mt-4 grid gap-3 md:grid-cols-2">
                {t.sinkSupportBullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-7 text-[#5f5a54]">
                    <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#C5A059]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mb-14">
            <h2 className="border-b border-[#e8e1d7] pb-4 font-serif text-3xl font-semibold">
              {t.worktopTitle}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5f5a54]">{t.worktopIntro}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {t.worktopRows.map((row) => (
                <div key={row.item} className="rounded-2xl border border-[#e8e1d7] bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-semibold">{row.item}</h3>
                  <p className="mt-1 text-sm font-semibold text-[#9a7a3f]">{row.cost}</p>
                  <p className="mt-2 text-sm leading-7 text-[#5f5a54]">{row.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="border-b border-[#e8e1d7] pb-4 font-serif text-3xl font-semibold">
              {t.overlayTitle}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5f5a54]">{t.overlayIntro}</p>
            <div className="mt-6 overflow-hidden rounded-3xl border border-[#e8e1d7] bg-white shadow-sm">
              {t.overlayRows.map((row) => (
                <div key={row.item} className="grid gap-2 border-b border-[#e8e1d7] p-5 last:border-b-0 md:grid-cols-[1fr_0.8fr_1.8fr] md:gap-5">
                  <p className="font-semibold text-[#2C2C2C]">{row.item}</p>
                  <p className="font-bold text-[#9a7a3f]">{row.cost}</p>
                  <p className="text-sm leading-6 text-[#6f6a63]">{row.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="border-b border-[#e8e1d7] pb-4 font-serif text-3xl font-semibold">
              {t.scenariosTitle}
            </h2>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {t.scenarios.map((scenario) => (
                <div key={scenario.title} className="rounded-3xl border border-[#e8e1d7] bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold">{scenario.title}</h3>
                  <p className="mt-2 text-lg font-bold text-[#9a7a3f]">{scenario.cost}</p>
                  <ul className="mt-4 space-y-3">
                    {scenario.details.map((detail) => (
                      <li key={detail} className="flex gap-3 text-sm leading-6 text-[#5f5a54]">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C5A059]" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14 rounded-3xl border border-[#e8e1d7] bg-[#fffdf8] p-6 shadow-sm md:p-8">
            <h2 className="font-serif text-3xl font-semibold">{t.budgetingTitle}</h2>
            <ul className="mt-6 space-y-3">
              {t.budgetingTips.map((tip) => (
                <li key={tip} className="flex gap-3 text-base leading-7 text-[#5f5a54]">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#C5A059]" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-14">
            <h2 className="border-b border-[#e8e1d7] pb-4 font-serif text-3xl font-semibold">
              {t.internalLinksTitle}
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {t.internalLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-2xl border border-[#e8e1d7] bg-white p-5 shadow-sm transition hover:border-[#C5A059] hover:shadow-md"
                >
                  <h3 className="text-base font-semibold text-[#2C2C2C]">{item.label}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#5f5a54]">{item.text}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="border-b border-[#e8e1d7] pb-4 font-serif text-3xl font-semibold">
              {t.faqTitle}
            </h2>
            <div className="mt-6 space-y-3">
              {t.faqs.map((faq) => (
                <details key={faq.question} className="rounded-2xl border border-[#e8e1d7] bg-[#fffdf8] p-5">
                  <summary className="cursor-pointer text-base font-semibold">{faq.question}</summary>
                  <p className="mt-3 text-sm leading-7 text-[#5f5a54]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="rounded-3xl bg-[#151515] p-7 text-white md:p-9">
            <h2 className="font-serif text-3xl font-semibold">{t.ctaTitle}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">{t.ctaText}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/renovation-cost-calculator"
                className="rounded-full bg-[#C5A059] px-6 py-3 text-sm font-semibold text-white hover:bg-[#D6B26B]"
              >
                {t.ctaPrimary}
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-[#C5A059] hover:text-[#C5A059]"
              >
                {t.ctaSecondary}
              </Link>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
