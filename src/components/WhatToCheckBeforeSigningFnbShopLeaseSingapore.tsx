import { Head } from 'vite-react-ssg';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

/**
 * ============================================================================
 * KNOWLEDGE METADATA (AUTHOR ONLY)
 * ============================================================================
 *
 * Knowledge Metadata
 *
 * Primary Section
 * □ Residential
 * ☑ Commercial
 * □ Both
 *
 * Primary Knowledge Topic:
 * F&B premises suitability before lease commitment
 *
 * Primary Entity:
 * F&B shop lease in Singapore
 *
 * Related Planning Tool:
 * /commercial-approval-planner
 *
 * Related Service Page:
 * /commercial
 *
 * Related Guides:
 * /insights/commercial-renovation-approvals-singapore
 * /insights/commercial-renovation-cost-singapore
 *
 * ============================================================================
 */

type FaqItem = {
  question: string;
  answer: string;
};

type ConceptRow = {
  concept: string;
  operation: string;
  considerations: string;
  warning: string;
};

type CheckItem = {
  title: string;
  question: string;
  why: string;
};

type SafetyNet = {
  step: string;
  title: string;
  text: string;
};

type Mistake = {
  title: string;
  text: string;
};

type NextStep = {
  number: string;
  title: string;
  text: string;
  label?: string;
  to?: string;
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
  quickAnswerTitle: string;
  quickAnswer: string;
  quickPoints: { label: string; value: string; note: string }[];
  earlyCtaTitle: string;
  earlyCtaText: string;
  earlyCtaPrimary: string;
  earlyCtaSecondary: string;
  centralTitle: string;
  centralIntro: string;
  centralChain: string[];
  centralClose: string;
  misconceptionTitle: string;
  misconceptionParagraphs: string[];
  sameUnitTitle: string;
  sameUnitIntro: string;
  sameUnitCards: { title: string; items: string[]; result: string }[];
  conceptTitle: string;
  conceptIntro: string;
  conceptHeaders: {
    concept: string;
    operation: string;
    considerations: string;
    warning: string;
  };
  concepts: ConceptRow[];
  systemsTitle: string;
  systemsIntro: string;
  systems: { title: string; paragraphs: string[]; bullets?: string[] }[];
  suitabilityTitle: string;
  suitabilityIntro: string;
  checks: CheckItem[];
  comparisonCtaTitle: string;
  comparisonCtaText: string;
  comparisonCtaPrimary: string;
  seatingTitle: string;
  seatingParagraphs: string[];
  safetyTitle: string;
  safetyIntro: string;
  safetyNets: SafetyNet[];
  leaseTitle: string;
  leaseIntro: string;
  leaseBullets: string[];
  leaseClose: string;
  mistakesTitle: string;
  mistakes: Mistake[];
  nextTitle: string;
  nextIntro: string;
  nextSteps: NextStep[];
  reassuranceTitle: string;
  reassuranceText: string;
  sourcesTitle: string;
  sourcesIntro: string;
  sources: { label: string; href: string }[];
  faqTitle: string;
  faqs: FaqItem[];
  ctaTitle: string;
  ctaText: string;
  ctaPrimary: string;
  ctaSecondary: string;
  breadcrumbCurrent: string;
  backLabel: string;
};

const content: Record<"en" | "zh", ArticleContent> = {
  en: {
    metaTitle: "What to Check Before Signing an F&B Shop Lease in Singapore | ID Work Studio",
    metaDescription:
      "Before signing an F&B shop lease in Singapore, check whether the unit can support your menu, cooking method, exhaust, drainage, power, gas and licensing needs.",
    canonical:
      "https://idworkstudio.com/insights/what-to-check-before-signing-fnb-shop-lease-singapore",
    eyebrow: "Singapore F&B Planning Guide",
    title: "What Should You Check Before Signing an F&B Shop Lease in Singapore?",
    subtitle:
      "Confirm that the unit can support your actual menu and operation—not merely that it is described as an F&B space. A café, Chinese restaurant, Korean BBQ outlet and hotpot restaurant can require very different building services even when their floor areas are similar.",
    readTime: "14 min read",
    category: "F&B Lease Planning",
    quickAnswerTitle: "The answer before you sign",
    quickAnswer:
      "Before signing an F&B shop lease in Singapore, verify the approved use, landlord conditions and whether the unit can physically support your menu, cooking methods and equipment. Check exhaust feasibility, grease and wastewater management, electrical capacity, gas options, fire-safety implications and Singapore Food Agency (SFA) licensing requirements. An F&B-approved unit is not automatically suitable for every F&B concept.",
    quickPoints: [
      {
        label: "The key question",
        value: "Can the unit support your menu?",
        note: "Suitability depends on how food is prepared, not only on the shop size or its previous tenant.",
      },
      {
        label: "The safest timing",
        value: "Before lease commitment",
        note: "Resolve material unknowns while you can still compare units or negotiate appropriate lease conditions.",
      },
    ],
    earlyCtaTitle: "Considering an F&B unit?",
    earlyCtaText:
      "If you already have a floor plan, proposed menu or equipment list, ID Work Studio can help you identify the questions that should be clarified before lease commitment.",
    earlyCtaPrimary: "Check This Unit Before You Sign",
    earlyCtaSecondary: "Use the Commercial Renovation Planner",
    centralTitle: "Your menu determines your renovation",
    centralIntro:
      "The floor area matters, but it does not tell you what the kitchen must support. The more useful starting point is the proposed menu because it creates a chain of operational and technical decisions.",
    centralChain: [
      "Menu",
      "Cooking methods",
      "Equipment schedule",
      "Power, water and gas",
      "Exhaust and grease control",
      "Fire safety and food licensing",
      "Building suitability",
      "Cost and opening timeline",
    ],
    centralClose:
      "This is why two restaurants of the same size can have completely different F&B renovation costs. The difference is not simply design quality. It may come from the kitchen, ventilation route, drainage, utility upgrading, fire-safety coordination and what the existing building can accommodate.",
    misconceptionTitle: "“It was previously an F&B unit” is useful—but not enough",
    misconceptionParagraphs: [
      "A former café may already have water, drainage and a modest kitchen setup. That is helpful evidence, but it does not prove that the same unit can economically support heavy wok cooking, table-top grilling or a production bakery.",
      "The landlord or leasing agent is an important first safety net. They should be able to share the known approved use, available services, house rules and building restrictions. However, they may not know the final load, exhaust design or licensing implications of equipment that has not yet been selected.",
      "The practical conclusion is not that the tenant must become a technical expert. It is that everyone should assess the same defined business concept. If the menu and equipment are vague, even a well-intentioned landlord, agent or contractor may be answering the wrong question.",
    ],
    sameUnitTitle: "Same shop, different menu, completely different fit-out",
    sameUnitIntro:
      "Consider one unit with an existing water point, drainage connection and some electrical provision. Its suitability can change when the proposed operation changes.",
    sameUnitCards: [
      {
        title: "Coffee and pastry café",
        items: [
          "Coffee machines and refrigeration",
          "Pastry display and dishwashing",
          "Light preparation or reheating, depending on the menu",
        ],
        result:
          "The unit may be workable with limited kitchen changes, subject to the actual equipment and ventilation assessment.",
      },
      {
        title: "Chinese restaurant",
        items: [
          "Potential heavy wok cooking and frying",
          "Higher grease, heat and make-up-air considerations",
          "Gas or substantial electrical cooking loads",
        ],
        result:
          "The same unit may need a very different exhaust route, grease strategy and supporting services—or may not be economical to convert.",
      },
    ],
    conceptTitle: "How common F&B concepts change the renovation",
    conceptIntro:
      "These are planning patterns, not automatic approval rules. A concept name alone never decides the requirement; the final menu, cooking method, equipment schedule, layout and building conditions do.",
    conceptHeaders: {
      concept: "Concept",
      operation: "What usually drives the fit-out",
      considerations: "Likely planning considerations",
      warning: "Do not assume",
    },
    concepts: [
      {
        concept: "Beverage kiosk or bubble tea",
        operation: "Drink preparation, ice, water heating, sealing, refrigeration and washing",
        considerations:
          "Water supply, wastewater discharge, floor drainage where applicable, counter workflow and cumulative electrical demand",
        warning: "“No cooking” means no service coordination",
      },
      {
        concept: "Coffee shop or café",
        operation: "Coffee, dishwashing, refrigeration and anything from reheating to full cooking",
        considerations:
          "The kitchen requirement changes sharply if the menu adds frying, grilling, baking or substantial hot-food preparation",
        warning: "Every café is a light-cooking operation",
      },
      {
        concept: "Bakery or dessert shop",
        operation: "Ovens, mixers, proofers, chillers, freezers and heat-producing equipment",
        considerations:
          "Electrical load, heat rejection, ventilation, production workflow, washing and equipment access",
        warning: "Baking has the same needs as reheating pastries",
      },
      {
        concept: "Western or Japanese restaurant",
        operation: "May include griddles, fryers, grills, stock preparation or relatively light assembly",
        considerations:
          "Ventilation and grease control depend on the actual cooking processes, not the cuisine label",
        warning: "Cuisine type alone reveals the exhaust requirement",
      },
      {
        concept: "Chinese restaurant",
        operation: "May involve intensive wok cooking, steaming, boiling and frying",
        considerations:
          "Potentially greater exhaust, make-up air, heat, grease, gas or power, drainage and cleaning demands",
        warning: "Every Chinese concept is heavy cooking—or that every former restaurant can support it",
      },
      {
        concept: "Korean BBQ",
        operation: "Cooking at multiple customer tables, sometimes alongside a separate kitchen",
        considerations:
          "Dining-area extraction, branch ducting, ceiling coordination, air balancing, maintenance access, table power or gas and fire safety",
        warning: "It is simply a normal restaurant with extra tables",
      },
      {
        concept: "Hotpot",
        operation: "Heating at customer tables with electrical or approved gas equipment",
        considerations:
          "Table circuits or gas planning, load diversity, cable or pipe routing, aisle layout, cleaning and seating coordination",
        warning: "The dining area needs only furniture and lighting",
      },
      {
        concept: "Central kitchen",
        operation: "Higher-volume preparation, cooking, chilling, packing and storage",
        considerations:
          "Production flow, food-establishment licensing category, utility demand, drainage, ventilation, cold storage and hygiene separation",
        warning: "A retail food shop and a food-production facility have identical requirements",
      },
    ],
    systemsTitle: "The building services that can make or break the unit",
    systemsIntro:
      "A beautiful location can still be the wrong operational shell. The following systems should be assessed against the proposed menu and equipment—not through a generic F&B checklist.",
    systems: [
      {
        title: "1. Kitchen exhaust, heat and cooking fumes",
        paragraphs: [
          "Ventilation needs are driven by what the equipment releases: heat, steam, smoke, odour and grease-laden vapour. Frying, grilling, barbecue and wok cooking can create very different demands from drink preparation or simple assembly.",
          "Induction changes the heat source; it does not make cooking fumes, steam, grease or odour disappear. Therefore, “we use induction” is not enough to conclude that no exhaust is needed. The food process, equipment specifications, hood arrangement, discharge route, building rules and relevant assessments still matter.",
          "A proposed exhaust route may need to pass through ceiling voids, risers or other controlled areas. Even when a route appears technically possible, landlord permission, building coordination and any required authority submissions remain separate checks.",
        ],
        bullets: [
          "Ask where an exhaust duct could legally and physically discharge.",
          "Check whether an existing duct is suitable for the proposed operation—not merely whether a grille or hood is present.",
          "Allow for cleaning and maintenance access from the design stage.",
        ],
      },
      {
        title: "2. Grease, wastewater and drainage",
        paragraphs: [
          "Grease is not only a housekeeping issue. The amount and form of grease produced can affect hood and duct maintenance, wastewater treatment, drainage layout, kitchen cleaning and where equipment can be placed.",
          "SFA’s food-shop pre-licensing checklist requires the layout to show relevant kitchen equipment and infrastructure. It also identifies floor traps in food-preparation areas for wastewater discharge and states that grease traps and certain sanitary infrastructure should not be located in food preparation, cooking, storage or serving areas where contamination could arise.",
          "For the tenant, this means a grease trap shown on a property brochure is not the end of the check. Its capacity, location, connection, access for maintenance and compatibility with the actual operation still need to be assessed.",
        ],
      },
      {
        title: "3. Electrical supply",
        paragraphs: [
          "F&B electrical demand is cumulative. Coffee machines, ice makers, sealers, ovens, induction cookers, dishwashers, refrigerators, freezers, ventilation fans and table equipment may operate together.",
          "There is no responsible universal electrical capacity for a café, bakery or electric kitchen. Prepare an equipment schedule showing each appliance’s rating, quantity and operating pattern. A Licensed Electrical Worker (LEW) can then assess the proposed load and advise what can be supported or upgraded.",
          "This is especially important for bakeries, all-electric kitchens, hotpot and Korean BBQ concepts because multiple heat-producing appliances or table circuits can change both the incoming-load question and the internal distribution design.",
        ],
      },
      {
        title: "4. Piped gas and liquefied petroleum gas (LPG)",
        paragraphs: [
          "If the building has no piped gas, liquefied petroleum gas (LPG) may be considered for some operations, but it is not an automatic substitute. Cylinder location, quantity, ventilation, pipe routing, fire precautions, delivery access and operating controls can introduce significant planning constraints.",
          "Keep three questions separate: Is the proposal technically feasible? Will the landlord or building management permit it? Will it satisfy the relevant regulatory and fire-safety requirements? A “yes” to one does not guarantee a “yes” to the others.",
          "Before treating gas as part of the concept, obtain the building’s written position and have the proposed arrangement assessed by the appropriate competent parties. Otherwise, the menu may be designed around a fuel source that cannot be implemented in that unit.",
        ],
      },
      {
        title: "5. Korean BBQ and dining-area exhaust",
        paragraphs: [
          "Korean BBQ is not simply another restaurant layout. When cooking occurs at customer tables, smoke extraction and services may extend across the dining area rather than remaining inside one kitchen.",
          "This can involve a main duct, many branch ducts, hoods at each table, careful ceiling coordination, air balancing, maintenance panels and cleaning access. Table positions become tied to engineering routes, so moving furniture later may not be simple.",
          "The important lease-stage question is whether the building can accept the full extraction concept—not whether one kitchen exhaust point exists.",
        ],
      },
      {
        title: "6. Hotpot and table services",
        paragraphs: [
          "Hotpot frequently moves substantial service planning into the dining area. Electric tabletop cookers can require many coordinated circuits; gas-based arrangements introduce a different set of feasibility and safety questions.",
          "Table spacing, aisle clearance, seating count, cable or pipe routes, cleaning and emergency movement must be considered together. The result is a dining layout shaped by operations, not only by the desired number of seats.",
        ],
      },
    ],
    suitabilityTitle: "What to check while comparing potential F&B units",
    suitabilityIntro:
      "Use the following questions to compare units on the same basis. The goal is not to complete the entire design before leasing; it is to identify any issue capable of changing feasibility, budget or opening plans.",
    checks: [
      {
        title: "Approved use",
        question: "What is the premises’ approved use, and does the proposed operation need any change-of-use process?",
        why: "An advertisement or previous F&B tenant is not a substitute for confirming the planning position. Where a change-of-use decision is needed, the Urban Redevelopment Authority (URA) advises against committing to tenancy or renovation before receiving the decision.",
      },
      {
        title: "Menu and cooking style",
        question: "What will be prepared on site, and will there be frying, wok cooking, grilling, baking, reheating or table cooking?",
        why: "This is the basis for evaluating exhaust, grease, heat, power, gas, workflow and hygiene requirements.",
      },
      {
        title: "Equipment schedule",
        question: "What are the key appliances, their quantities, dimensions, loads and connection requirements?",
        why: "A concept description is too broad for utility planning. The equipment list turns the business idea into something the landlord and technical team can assess.",
      },
      {
        title: "Exhaust feasibility",
        question: "Is there an existing compliant route suitable for this operation, or can a new route realistically be approved and built?",
        why: "A long, inaccessible or rejected duct route can make a seemingly affordable unit expensive or unsuitable.",
      },
      {
        title: "Grease and wastewater",
        question: "Where will wastewater discharge, how will grease be intercepted, and can the system be maintained without contaminating food areas?",
        why: "Drainage and grease-management locations can constrain the kitchen layout and require work below or outside the unit.",
      },
      {
        title: "Electrical capacity",
        question: "Can the supply and distribution support the proposed equipment operating together?",
        why: "An electric kitchen can avoid one fuel source while creating a much larger power requirement. Capacity should be checked from equipment data, not guessed by business type.",
      },
      {
        title: "Gas feasibility",
        question: "Is piped gas available? If LPG is proposed, is it acceptable to the building and capable of meeting the relevant requirements?",
        why: "No piped gas does not automatically mean LPG can be installed.",
      },
      {
        title: "Landlord, mall or MCST rules",
        question: "What fit-out manual, working restrictions, nominated contractors, exhaust conditions and submission documents apply?",
        why: "The Management Corporation Strata Title (MCST), landlord or mall may impose project-specific conditions beyond the physical limits of the unit.",
      },
      {
        title: "Fire safety",
        question: "Will the proposal affect escape routes, occupant load, sprinklers, fire alarms, kitchen suppression or other fire-safety provisions?",
        why: "The Singapore Civil Defence Force (SCDF) requirements depend on the proposed works and building. Fire-safety implications should be identified before the layout is treated as final.",
      },
      {
        title: "SFA licensing readiness",
        question: "Can the layout and finishes be developed to meet the applicable SFA food-licensing conditions?",
        why: "The renovation must support the eventual licence application and inspection. Approved use alone is not permission to begin food operations.",
      },
    ],
    comparisonCtaTitle: "Still comparing several units?",
    comparisonCtaText:
      "You do not need every technical answer before speaking to us. Share the unit details, proposed menu and any available floor plan, and we can help identify what may require further verification.",
    comparisonCtaPrimary: "Discuss an F&B Unit on WhatsApp",
    seatingTitle: "Do not separate customer seating from technical planning",
    seatingParagraphs: [
      "Seating is not only a revenue calculation. More seats can affect layout, circulation, sanitary provision, occupant load and the practical capacity of the kitchen and services. The exact implications depend on the premises and proposal.",
      "For Korean BBQ and hotpot, each table may also be a service point. Adding tables can mean adding extraction branches, electrical circuits or approved gas connections—not simply adding chairs.",
      "This does not mean you should reduce seating blindly. It means the proposed capacity should be checked as part of one coordinated layout before it is promised in the business plan or lease negotiation.",
    ],
    safetyTitle: "The three safety nets before lease commitment",
    safetyIntro:
      "You should not have to solve every technical issue alone. A safer leasing process creates several opportunities to detect a mismatch before it becomes an expensive renovation problem.",
    safetyNets: [
      {
        step: "1",
        title: "Landlord or leasing agent",
        text: "Obtain the approved-use information, available building services, previous fit-out records, house rules and known restrictions. Ask for written confirmation where the answer affects your decision.",
      },
      {
        step: "2",
        title: "A defined business concept",
        text: "Share the actual menu, cooking methods, opening pattern and key equipment. “Restaurant” or “café” alone is not precise enough for a meaningful suitability check.",
      },
      {
        step: "3",
        title: "Technical feasibility review",
        text: "Compare the concept against the unit’s exhaust, power, drainage, gas, fire-safety and building constraints. Escalate unresolved items to the appropriate qualified or licensed party before commitment.",
      },
    ],
    leaseTitle: "Before you commit, make the lease reflect unresolved risks",
    leaseIntro:
      "A renovation review does not replace legal advice. However, it can identify the technical unknowns you may wish to raise with your property adviser or lawyer before signing.",
    leaseBullets: [
      "Which approved use and business activity is the lease based on?",
      "What services, exhaust routes, gas provision or electrical capacity is the landlord actually providing?",
      "Who is responsible for upgrades, authority submissions, landlord fees and reinstatement?",
      "Are any commitments conditional on use, licence, exhaust, power or other critical feasibility confirmation?",
      "What previous equipment belongs to the landlord, and is its condition or suitability warranted?",
      "What fit-out period is allowed, and when does rent begin if approvals or building works take longer?",
    ],
    leaseClose:
      "Do not rely on a casual statement such as “F&B is allowed” when a specific service is essential to the concept. Record the precise question and obtain an answer that matches the proposed operation.",
    mistakesTitle: "Common lease-stage mistakes",
    mistakes: [
      {
        title: "Assuming all F&B uses are equivalent",
        text: "A beverage shop, bakery and heavy-cooking restaurant can occupy similar spaces while requiring very different services. Compare the unit with the actual concept.",
      },
      {
        title: "Signing before defining key equipment",
        text: "Without an initial equipment schedule, power, gas, ventilation and drainage discussions remain guesses. You do not need final brands, but you need realistic equipment types and quantities.",
      },
      {
        title: "Treating an existing exhaust as proof",
        text: "Confirm its route, capacity, condition, maintenance access and acceptance for the new use. A former tenant’s system may not suit your cooking process.",
      },
      {
        title: "Believing induction removes ventilation needs",
        text: "Induction removes combustion at the appliance, but cooking can still release heat, steam, odour, smoke and grease. Assess the process, not only the energy source.",
      },
      {
        title: "Assuming LPG is the default backup",
        text: "Technical feasibility, landlord permission and regulatory acceptance are different tests. Resolve all three before designing the kitchen around LPG.",
      },
      {
        title: "Counting seats before coordinating services",
        text: "For table-cooking concepts, each extra table may affect extraction, power or gas routing. Finalise seating and service coordination together.",
      },
    ],
    nextTitle: "The decision path after the unit appears suitable",
    nextIntro:
      "Once the concept and unit broadly match, move from feasibility to requirements, budget and execution. Each next step should answer one new question rather than repeat the same checklist.",
    nextSteps: [
      {
        number: "1",
        title: "Identify the likely approvals and project checkpoints",
        text: "Use the Commercial Renovation Planner to organise the likely landlord, building and authority considerations around your actual project.",
        label: "Use the Commercial Renovation Planner",
        to: "/commercial-approval-planner",
      },
      {
        number: "2",
        title: "Understand who may need to approve what",
        text: "Read the Commercial Renovation Approvals Guide for the roles of the landlord, MCST, Building and Construction Authority (BCA), SCDF and other parties where relevant.",
        label: "Read the Commercial Approvals Guide",
        to: "/insights/commercial-renovation-approvals-singapore",
      },
      {
        number: "3",
        title: "Build a concept-specific budget",
        text: "Use the Commercial Renovation Cost Guide to understand why F&B kitchen, mechanical and electrical works, exhaust and site constraints can change the budget.",
        label: "Explore the Commercial Cost Guide",
        to: "/insights/commercial-renovation-cost-singapore",
      },
      {
        number: "4",
        title: "Validate the site before final commitment",
        text: "Arrange a site discussion if the unit still has material unknowns. The purpose is to clarify the practical renovation scope—not to pressure you into a quotation before the business decision is ready.",
        label: "View Commercial Renovation Services",
        to: "/commercial",
      },
    ],
    reassuranceTitle: "You do not need every answer today",
    reassuranceText:
      "Opening an F&B business involves many specialist decisions, and it is normal not to know every technical requirement at the property-viewing stage. What matters is recognising the few questions that can change whether a unit works. Define the menu, collect the building information and resolve material unknowns in the right order. Good F&B renovation planning begins before design—with a unit that can realistically support the business you intend to operate.",
    sourcesTitle: "Official Singapore references",
    sourcesIntro:
      "Requirements can change and every proposal is assessed on its own facts. These official resources provide a starting point; they do not replace project-specific advice or approvals.",
    sources: [
      {
        label: "URA — Changing the Use of Your Property",
        href: "https://www.ura.gov.sg/guidelines/property-and-business-owners/business-owners/change-use-of-property-for-business/",
      },
      {
        label: "SFA — Food Shop Pre-Licensing Requirements",
        href: "https://www.sfa.gov.sg/docs/default-source/default-document-library/self-checklist_foodshop.pdf",
      },
      {
        label: "SFA — Guidelines for Licensed Food Retail Premises",
        href: "https://www.sfa.gov.sg/food-retail/licence-permit/guidelines-for-licensed-food-retail-premises",
      },
      {
        label: "SCDF — Fire Code",
        href: "https://www.scdf.gov.sg/fire-safety-services-listing/fire-code-2023",
      },
    ],
    faqTitle: "Frequently asked questions",
    faqs: [
      {
        question: "Can any F&B-approved unit be used for every restaurant in Singapore?",
        answer:
          "No. Approved use is only one part of suitability. The unit must also be able to support the specific menu, cooking methods, equipment, exhaust, drainage, power, gas and licensing needs, subject to the building and relevant assessments.",
      },
      {
        question: "What is the most important check before signing an F&B shop lease?",
        answer:
          "Confirm that the unit can support your actual operation. Start with the menu, cooking methods and key equipment, then test these against the unit’s approved use, building services and landlord restrictions.",
      },
      {
        question: "Does induction cooking mean a restaurant does not need exhaust?",
        answer:
          "Not automatically. Induction removes combustion at the appliance, but cooking may still produce heat, steam, odour, smoke and grease-laden vapour. Ventilation depends on the food process, equipment, layout, discharge route, building rules and applicable requirements.",
      },
      {
        question: "Why can two cafés of the same size have very different renovation costs?",
        answer:
          "Their menus and equipment may be different. One may serve drinks and assembled food, while the other bakes, fries or prepares a full hot-food menu. That changes power, ventilation, grease, drainage, fire-safety coordination and kitchen scope.",
      },
      {
        question: "Why does Korean BBQ require different ventilation?",
        answer:
          "Cooking often occurs at many customer tables, so extraction may need to extend throughout the dining area. This can require multiple hoods, branch ducts, air balancing, ceiling coordination and maintenance access in addition to the main kitchen system.",
      },
      {
        question: "Can I use LPG if the unit has no piped gas?",
        answer:
          "LPG may be considered for some operations, but it is not automatic. Technical feasibility, landlord or building permission, and regulatory and fire-safety compliance must be assessed separately before the kitchen is designed around LPG.",
      },
      {
        question: "Does a former café unit suit a Chinese restaurant?",
        answer:
          "Not necessarily. If the proposed restaurant uses intensive wok cooking or frying, it may need different exhaust, grease management, gas or electrical capacity, make-up air and drainage from the former café.",
      },
      {
        question: "Should I apply for an SFA licence before or after renovation?",
        answer:
          "The renovation should be planned around the applicable SFA licensing requirements, and the application process includes layout and premises requirements. Check the current SFA and GoBusiness process for your licence type and do not assume that completing renovation alone permits operation.",
      },
      {
        question: "Should the landlord or agent confirm whether the unit is suitable?",
        answer:
          "They are an important first source for approved use, existing services and building restrictions. However, final suitability usually requires a defined menu and equipment schedule because a property representative may not be able to assess the technical implications of every F&B operation.",
      },
      {
        question: "What should I do if an important answer is still uncertain before signing?",
        answer:
          "Identify who can verify it, obtain written information where possible and seek the appropriate technical, property or legal advice. If the issue can materially affect feasibility, cost or opening, avoid treating it as something renovation can automatically solve later.",
      },
    ],
    ctaTitle: "Still comparing F&B units?",
    ctaText:
      "ID Work Studio can help you review how a proposed menu, equipment plan and unit conditions may affect the renovation scope. The aim is to identify important questions early, so you can make your leasing decision with greater clarity.",
    ctaPrimary: "Discuss an F&B Unit",
    ctaSecondary: "View Commercial Services",
    breadcrumbCurrent: "F&B Shop Lease Checklist",
    backLabel: "Back to insights",
  },
  zh: {
    metaTitle: "签新加坡餐饮店租约前应检查什么？| ID Work Studio",
    metaDescription:
      "签新加坡餐饮店租约前，应确认单位能否配合菜单、烹调方式、排烟、排水、电力、燃气及 SFA 执照要求，避免租下不适合经营概念的店面。",
    canonical:
      "https://idworkstudio.com/insights/what-to-check-before-signing-fnb-shop-lease-singapore",
    eyebrow: "新加坡餐饮店规划指南",
    title: "签署新加坡餐饮店租约前，应该检查什么？",
    subtitle:
      "不要只确认单位是否注明可作餐饮用途，还要确认它能否实际支持你的菜单和营运方式。即使面积相近，咖啡厅、中餐馆、韩式烧烤和火锅店所需的建筑设备也可能完全不同。",
    readTime: "约14分钟阅读",
    category: "餐饮租约规划",
    quickAnswerTitle: "签约前的直接答案",
    quickAnswer:
      "签署新加坡餐饮店租约前，应核实单位的核准用途、业主条件，以及空间是否能配合你的菜单、烹调方式和设备。重点包括排烟可行性、油脂与污水处理、电力容量、燃气选择、消防影响，以及新加坡食品局（SFA）的执照要求。获准作餐饮用途，并不代表适合所有餐饮概念。",
    quickPoints: [
      {
        label: "最关键的问题",
        value: "这个单位能否支持你的菜单？",
        note: "适用性取决于食物如何制作，而不只是店铺面积或上一任租户的业务。",
      },
      {
        label: "最安全的检查时机",
        value: "承诺租约之前",
        note: "趁你仍能比较单位或商议租约条件时，先解决会影响可行性的关键未知数。",
      },
    ],
    earlyCtaTitle: "正在考虑一个餐饮单位？",
    earlyCtaText:
      "如果你已有平面图、拟定菜单或设备清单，ID Work Studio 可协助你找出承诺租约前应该确认的问题。",
    earlyCtaPrimary: "签约前先检查这个单位",
    earlyCtaSecondary: "使用商业装修规划工具",
    centralTitle: "你的菜单决定你的装修",
    centralIntro:
      "面积当然重要，但面积本身无法说明厨房需要什么。更有效的起点是拟定菜单，因为菜单会引出一连串营运与技术决定。",
    centralChain: [
      "菜单",
      "烹调方式",
      "设备清单",
      "电力、用水与燃气",
      "排烟与油脂控制",
      "消防安全与食品执照",
      "建筑适用性",
      "成本与开业时间",
    ],
    centralClose:
      "这就是为什么两间面积相同的餐馆，装修费用可能完全不同。差距不只是设计档次，也可能来自厨房、排烟路径、排水、电力或燃气升级、消防协调，以及现有建筑实际能够承受什么。",
    misconceptionTitle: "“以前也是餐饮店”是有用线索，但还不够",
    misconceptionParagraphs: [
      "前租户如果是咖啡厅，单位可能已有供水、排水和基本厨房设施。这当然有帮助，但不能证明同一单位能够经济地支持猛火炒锅、桌面烧烤或生产型烘焙。",
      "业主或租赁经纪是第一道重要安全网。他们应能提供已知的核准用途、现有设施、装修守则和建筑限制。不过，在设备尚未确定之前，他们未必能判断最终电力负荷、排烟设计或执照影响。",
      "实际结论不是租户必须成为技术专家，而是各方必须针对同一个、已经定义清楚的经营概念来评估。菜单和设备若含糊，即使业主、经纪或承包商出发点良好，也可能回答了错误的问题。",
    ],
    sameUnitTitle: "同一个店面，不同菜单，完全不同的装修",
    sameUnitIntro:
      "假设一个单位已有供水点、排水连接和部分电力配置。当拟经营的业务改变时，它的适用性也会改变。",
    sameUnitCards: [
      {
        title: "咖啡与糕点咖啡厅",
        items: ["咖啡机与冷藏设备", "糕点展示与洗涤", "视菜单而定的轻量制作或翻热"],
        result: "根据实际设备与通风评估，单位可能只需有限的厨房改动。",
      },
      {
        title: "中餐馆",
        items: ["可能涉及猛火炒锅与油炸", "更高的油烟、热量与补风需求", "燃气或较大的电力烹调负荷"],
        result: "同一个单位可能需要完全不同的排烟路径、油脂处理和配套设施，甚至可能不值得改造。",
      },
    ],
    conceptTitle: "常见餐饮概念如何改变装修要求",
    conceptIntro:
      "以下是规划规律，不是自动适用的审批结论。概念名称本身不能决定要求；最终仍取决于菜单、烹调方式、设备清单、布局和建筑条件。",
    conceptHeaders: {
      concept: "餐饮概念",
      operation: "通常由什么营运活动带动装修",
      considerations: "可能需要规划的重点",
      warning: "不要假设",
    },
    concepts: [
      {
        concept: "饮料亭或珍珠奶茶店",
        operation: "调饮、制冰、加热用水、封杯、冷藏与清洗",
        considerations: "供水、污水排放、适用时的地漏、柜台动线，以及累计电力需求",
        warning: "“没有烹饪”就等于没有设备协调",
      },
      {
        concept: "咖啡店或咖啡厅",
        operation: "咖啡、洗涤、冷藏，以及从翻热到完整烹调的不同程度操作",
        considerations: "若菜单加入油炸、烧烤、烘焙或大量热食制作，厨房要求会明显改变",
        warning: "所有咖啡厅都只是轻度烹调",
      },
      {
        concept: "烘焙店或甜品店",
        operation: "烤箱、搅拌机、发酵箱、冷藏冷冻及发热设备",
        considerations: "电力负荷、散热、通风、生产动线、清洗和设备搬运空间",
        warning: "烘焙与简单翻热糕点的需求相同",
      },
      {
        concept: "西餐或日餐",
        operation: "可能包括铁板、油炸、烧烤、熬煮，也可能只是较轻量的组合制作",
        considerations: "通风与油脂控制取决于实际烹调过程，而不是菜系标签",
        warning: "只看菜系就能判断排烟要求",
      },
      {
        concept: "中餐馆",
        operation: "可能涉及高强度炒锅、蒸煮、煲煮和油炸",
        considerations: "可能需要更高的排烟、补风、散热、油脂控制、燃气或电力、排水及清洁能力",
        warning: "所有中餐都是重度烹调，或所有旧餐馆都能支持中餐",
      },
      {
        concept: "韩式烧烤",
        operation: "在多张顾客餐桌上烹调，通常另有厨房",
        considerations: "用餐区抽烟、分支风管、天花协调、风量平衡、检修空间、桌面电力或燃气及消防安全",
        warning: "它只是普通餐馆多放几张桌子",
      },
      {
        concept: "火锅",
        operation: "以电力或获准的燃气设备在顾客桌面加热",
        considerations: "桌面电路或燃气规划、负荷、线管或气管路径、走道、清洁和座位协调",
        warning: "用餐区只需要家具和照明",
      },
      {
        concept: "中央厨房",
        operation: "较大量的备料、烹调、冷却、包装和储存",
        considerations: "生产流程、食品场所执照类别、公用设施需求、排水、通风、冷藏和卫生分隔",
        warning: "零售食品店与食品生产设施要求完全相同",
      },
    ],
    systemsTitle: "可能决定单位是否合适的建筑设备",
    systemsIntro:
      "地点再漂亮，也可能不是合适的营运空间。以下系统必须根据拟定菜单和设备评估，而不是套用一张笼统的餐饮清单。",
    systems: [
      {
        title: "1. 厨房排烟、热量与烹调烟气",
        paragraphs: [
          "通风需求取决于设备实际产生什么：热、蒸汽、烟、气味及含油脂的气体。油炸、烧烤、炭烤和猛火炒锅，与调饮或简单组合制作的需求可以很不同。",
          "电磁炉改变的是热源，并不会让烹调蒸汽、油烟、气味或热量消失。因此，“我们使用电磁炉”不足以证明不需要排烟。食物制作过程、设备规格、烟罩布置、排放路径、建筑守则及相关评估仍然重要。",
          "拟议风管可能需要经过天花空间、管井或其他受管制区域。即使技术上看来可行，业主许可、建筑协调和所需的政府提交通常仍是不同的检查项目。",
        ],
        bullets: [
          "询问风管能够合法且实际地排放到哪里。",
          "确认现有风管适合拟经营的业务，而不只是看到有风口或烟罩。",
          "从设计阶段就预留清洗和检修空间。",
        ],
      },
      {
        title: "2. 油脂、污水与排水",
        paragraphs: [
          "油脂不只是清洁问题。产生油脂的数量和形式会影响烟罩及风管保养、污水处理、排水布局、厨房清洁和设备位置。",
          "SFA 的食品店开业前检查清单要求平面图显示相关厨房设备和基础设施。清单也提到食品准备区应设置地漏排放污水，并指出隔油池及某些卫生设施不应设于可能污染食品的准备、烹调、储存或供应区域。",
          "对租户而言，物业资料上写有隔油池，并不等于检查已经完成。其容量、位置、连接方式、维修通道，以及是否适合实际营运仍需评估。",
        ],
      },
      {
        title: "3. 电力供应",
        paragraphs: [
          "餐饮店的电力需求是累积的。咖啡机、制冰机、封杯机、烤箱、电磁炉、洗碗机、冰箱、冷冻柜、抽风机和桌面设备可能同时运作。",
          "咖啡厅、烘焙店或全电厨房没有一个负责任的通用电力容量。应准备设备清单，列出每台设备的功率、数量和使用方式，再由持牌电气工程人员（Licensed Electrical Worker，LEW）评估现有电力能否支持或如何升级。",
          "对于烘焙、全电厨房、火锅及韩式烧烤，这尤其重要，因为大量发热设备或桌面电路会同时改变进线容量和内部分电设计。",
        ],
      },
      {
        title: "4. 管道燃气与液化石油气（LPG）",
        paragraphs: [
          "若建筑没有管道燃气，某些业务或许可以考虑液化石油气（LPG），但它不是自动替代方案。气瓶位置、数量、通风、管道路径、消防措施、运送通道和操作控制都会增加规划限制。",
          "必须把三个问题分开：技术上是否可行？业主或大厦管理是否允许？能否满足相关法规与消防要求？其中一个答案是“可以”，并不保证另外两个也是“可以”。",
          "在把燃气写入经营概念之前，应取得大厦的书面立场，并由适当的专业人员评估方案。否则，菜单可能建立在一个最终无法使用的能源选择上。",
        ],
      },
      {
        title: "5. 韩式烧烤与用餐区排烟",
        paragraphs: [
          "韩式烧烤不只是另一种餐馆布局。当顾客桌面进行烹调时，抽烟和其他设施会延伸到整个用餐区，而不只集中在厨房。",
          "系统可能包括主风管、多条分支风管、每桌烟罩、复杂天花协调、风量平衡、检修口和清洗通道。餐桌位置会与工程路线绑定，日后不能像普通家具一样随意移动。",
          "因此，租约阶段真正要问的是建筑能否接受整套抽烟方案，而不是厨房是否已有一个排烟点。",
        ],
      },
      {
        title: "6. 火锅与桌面设施",
        paragraphs: [
          "火锅通常把大量设施规划带到用餐区。电热锅可能需要许多协调电路；若使用燃气，则会带来另一组可行性与安全问题。",
          "桌距、走道、座位数、线管或气管路径、清洁和紧急疏散必须一起考虑。因此，用餐布局由营运决定，而不只是你想摆多少张桌子。",
        ],
      },
    ],
    suitabilityTitle: "比较多个潜在餐饮单位时应检查什么",
    suitabilityIntro:
      "用以下问题，以同一标准比较不同单位。目的不是在租约前完成全部设计，而是先找出任何足以改变可行性、预算或开业计划的问题。",
    checks: [
      {
        title: "核准用途",
        question: "该单位的核准用途是什么？拟经营业务是否涉及用途变更程序？",
        why: "广告或上一任餐饮租户不能取代正式确认。若需要取得用途变更决定，新加坡市区重建局（URA）建议在收到决定前，不要承诺租约或装修工程。",
      },
      {
        title: "菜单与烹调方式",
        question: "现场会制作什么？是否涉及油炸、猛火炒锅、烧烤、烘焙、翻热或桌面烹调？",
        why: "这是评估排烟、油脂、热量、电力、燃气、动线和卫生要求的基础。",
      },
      {
        title: "设备清单",
        question: "主要设备是什么？数量、尺寸、功率和连接需求如何？",
        why: "只说经营概念不足以规划公用设施。设备清单能把商业想法转化成业主和技术团队可以评估的资料。",
      },
      {
        title: "排烟可行性",
        question: "是否已有适合该营运的合规路径？若没有，新路径是否真的能够获准并建造？",
        why: "过长、无法维修或不被接受的风管路径，会令看似便宜的单位变得昂贵或不适用。",
      },
      {
        title: "油脂与污水",
        question: "污水排到哪里？如何隔除油脂？系统能否在不污染食品区的情况下维护？",
        why: "排水与隔油设施位置会限制厨房布局，并可能涉及单位地面以下或单位以外的工程。",
      },
      {
        title: "电力容量",
        question: "现有供电与分电系统能否支持拟装设备同时运行？",
        why: "全电厨房避免了一种燃料，却可能产生很大的电力需求。应根据设备数据检查容量，而不是按店铺类型猜测。",
      },
      {
        title: "燃气可行性",
        question: "是否有管道燃气？若拟用 LPG，大厦是否允许，并能否满足相关要求？",
        why: "没有管道燃气，不等于自动可以安装 LPG。",
      },
      {
        title: "业主、商场或 MCST 守则",
        question: "适用哪些装修手册、施工限制、指定承包商、排烟条件和提交文件？",
        why: "分层地契管理机构（Management Corporation Strata Title，MCST）、业主或商场可能设有超出现有空间限制的项目条件。",
      },
      {
        title: "消防安全",
        question: "方案会否影响逃生路线、使用人数、消防喷淋、火警系统、厨房灭火或其他消防设施？",
        why: "新加坡民防部队（Singapore Civil Defence Force，SCDF）的要求取决于拟议工程和建筑情况。布局定案前应先识别消防影响。",
      },
      {
        title: "SFA 执照准备",
        question: "布局与装修材料能否按适用的 SFA 食品执照条件发展？",
        why: "装修必须配合日后的执照申请和检查。只有核准用途，并不等于可以开始食品营运。",
      },
    ],
    comparisonCtaTitle: "仍在比较几个不同单位？",
    comparisonCtaText:
      "与我们讨论前，你不需要先掌握所有技术答案。分享单位资料、拟定菜单和现有平面图，我们可以协助找出哪些事项需要进一步核实。",
    comparisonCtaPrimary: "通过 WhatsApp 讨论餐饮单位",
    seatingTitle: "不要把顾客座位与技术规划分开",
    seatingParagraphs: [
      "座位不只是营业额计算。更多座位可能影响布局、通行、卫生设施、使用人数，以及厨房和建筑设备的实际容量。确切影响取决于单位和方案。",
      "对于韩式烧烤和火锅，每张桌子也可能是一个设备点。增加桌子可能意味着增加排烟支管、电路或获准的燃气连接，而不只是多放几张椅子。",
      "这并不代表要盲目减少座位，而是应在商业计划或租约谈判承诺座位数之前，把拟定容量放进同一张协调布局中检查。",
    ],
    safetyTitle: "承诺租约前的三道安全网",
    safetyIntro:
      "你不应该独自解决所有技术问题。更安全的租赁流程，应在问题变成昂贵装修之前，提供数次发现不匹配的机会。",
    safetyNets: [
      {
        step: "1",
        title: "业主或租赁经纪",
        text: "取得核准用途、现有建筑设备、旧装修记录、管理守则和已知限制。若答案会影响决定，应尽量取得书面确认。",
      },
      {
        step: "2",
        title: "定义清楚的经营概念",
        text: "提供实际菜单、烹调方式、营业模式和主要设备。只说“餐馆”或“咖啡厅”，不足以进行有意义的适用性评估。",
      },
      {
        step: "3",
        title: "技术可行性评估",
        text: "把经营概念与单位的排烟、电力、排水、燃气、消防和建筑限制逐项比较。承诺前，把未解决的问题交给适当的合格或持牌专业人员确认。",
      },
    ],
    leaseTitle: "承诺之前，让租约反映尚未解决的风险",
    leaseIntro:
      "装修评估不能取代法律意见，但可以找出签署前值得向物业顾问或律师提出的技术未知数。",
    leaseBullets: [
      "租约依据的核准用途和经营活动是什么？",
      "业主实际提供哪些建筑设备、排烟路径、燃气或电力容量？",
      "升级、政府提交、业主费用和还原工程由谁负责？",
      "租赁承诺是否以用途、执照、排烟、电力或其他关键可行性确认为条件？",
      "哪些旧设备属于业主？其状况或适用性是否有任何保证？",
      "装修免租期多长？若审批或建筑工程延长，租金何时开始计算？",
    ],
    leaseClose:
      "若某项设施对经营概念不可或缺，不要只依赖“这里可以做餐饮”这样的口头说法。记录准确问题，并取得与拟经营业务相符的答案。",
    mistakesTitle: "租约阶段常见错误",
    mistakes: [
      {
        title: "假设所有餐饮用途相同",
        text: "饮料店、烘焙店和重度烹调餐馆即使面积相近，所需设备也可能完全不同。必须用实际经营概念评估单位。",
      },
      {
        title: "未定义主要设备就签约",
        text: "没有初步设备清单，电力、燃气、通风和排水讨论都只是猜测。品牌可以稍后决定，但设备类别和现实数量必须先明确。",
      },
      {
        title: "把现有排烟当成证明",
        text: "确认路径、能力、状况、检修空间，以及新用途是否获接受。前租户的系统未必适合你的烹调方式。",
      },
      {
        title: "相信电磁炉就不需要通风",
        text: "电磁炉没有设备燃烧，但烹调仍会产生热、蒸汽、气味、烟和油脂。应评估烹调过程，而不只是能源。",
      },
      {
        title: "把 LPG 当成默认后备",
        text: "技术可行性、业主许可与法规接受是三个不同测试。厨房围绕 LPG 设计前，必须把三者都确认。",
      },
      {
        title: "先算座位，后协调设施",
        text: "桌面烹调概念中，每张新增餐桌都可能影响排烟、电力或燃气路线。座位与设施必须一起定案。",
      },
    ],
    nextTitle: "单位看来合适之后，下一步怎么走？",
    nextIntro:
      "当经营概念与单位大致匹配后，再从可行性进入要求、预算和执行。每一步应回答新的问题，而不是重复同一张清单。",
    nextSteps: [
      {
        number: "1",
        title: "识别可能涉及的审批与项目关卡",
        text: "使用商业装修规划工具，根据你的项目整理可能涉及的业主、大厦和政府要求。",
        label: "使用商业装修规划工具",
        to: "/commercial-approval-planner",
      },
      {
        number: "2",
        title: "了解谁可能需要批准什么",
        text: "阅读商业装修审批指南，了解适用时业主、MCST、新加坡建设局（BCA）、SCDF 及其他单位的角色。",
        label: "阅读商业装修审批指南",
        to: "/insights/commercial-renovation-approvals-singapore",
      },
      {
        number: "3",
        title: "建立符合经营概念的预算",
        text: "使用商业装修成本指南，了解餐饮厨房、机电工程、排烟和现场限制如何改变预算。",
        label: "查看商业装修成本指南",
        to: "/insights/commercial-renovation-cost-singapore",
      },
      {
        number: "4",
        title: "最终承诺前验证现场",
        text: "如果单位仍有重大未知数，可安排现场讨论。目的是弄清实际装修范围，而不是在商业决定尚未成熟时催促你索取报价。",
        label: "查看商业装修服务",
        to: "/commercial",
      },
    ],
    reassuranceTitle: "你今天不需要知道所有答案",
    reassuranceText:
      "开设餐饮业务涉及许多专业决定，在看铺阶段不了解每一项技术要求是很正常的。重要的是认出哪些问题足以改变单位是否合适。先定义菜单、收集建筑资料，再按正确顺序解决关键未知数。良好的餐饮装修规划始于设计之前——先选择一个真正能支持拟经营业务的单位。",
    sourcesTitle: "新加坡官方参考资料",
    sourcesIntro:
      "要求可能更新，每个方案也会按实际情况评估。以下官方资料是起点，不能取代项目专属意见或审批。",
    sources: [
      {
        label: "URA — 更改物业用途",
        href: "https://www.ura.gov.sg/guidelines/property-and-business-owners/business-owners/change-use-of-property-for-business/",
      },
      {
        label: "SFA — 食品店开业前要求",
        href: "https://www.sfa.gov.sg/docs/default-source/default-document-library/self-checklist_foodshop.pdf",
      },
      {
        label: "SFA — 持牌食品零售场所指南",
        href: "https://www.sfa.gov.sg/food-retail/licence-permit/guidelines-for-licensed-food-retail-premises",
      },
      {
        label: "SCDF — 消防规范",
        href: "https://www.scdf.gov.sg/fire-safety-services-listing/fire-code-2023",
      },
    ],
    faqTitle: "常见问题",
    faqs: [
      {
        question: "新加坡任何获准作餐饮用途的单位，都能经营所有餐馆吗？",
        answer:
          "不能。核准用途只是适用性的一部分。单位还必须能配合特定菜单、烹调方式、设备、排烟、排水、电力、燃气和执照需求，并视建筑条件及相关评估而定。",
      },
      {
        question: "签餐饮店租约前最重要的检查是什么？",
        answer:
          "确认单位能否支持你的实际营运。先明确菜单、烹调方式和主要设备，再与单位的核准用途、建筑设备和业主限制逐项核对。",
      },
      {
        question: "使用电磁炉是否代表餐馆不需要排烟？",
        answer:
          "不一定。电磁炉没有设备燃烧，但烹调仍可能产生热、蒸汽、气味、烟及含油脂气体。通风取决于制作过程、设备、布局、排放路径、建筑守则和适用要求。",
      },
      {
        question: "为什么两间同样面积的咖啡厅，装修成本会相差很大？",
        answer:
          "它们的菜单和设备可能不同。一间只调饮和组合食物，另一间可能烘焙、油炸或制作完整热食菜单，因此电力、通风、油脂、排水、消防协调和厨房工程都会改变。",
      },
      {
        question: "为什么韩式烧烤需要不同的通风？",
        answer:
          "烹调通常发生在多张顾客餐桌，因此抽烟系统可能遍布用餐区。除了厨房系统，还可能需要多个烟罩、分支风管、风量平衡、天花协调和检修空间。",
      },
      {
        question: "单位没有管道燃气，可以使用 LPG 吗？",
        answer:
          "某些业务或许可以考虑 LPG，但并非自动可行。技术可行性、业主或大厦许可、法规和消防合规必须分别评估，才能围绕 LPG 设计厨房。",
      },
      {
        question: "以前是咖啡厅的单位适合开中餐馆吗？",
        answer:
          "不一定。若拟开餐馆涉及高强度炒锅或油炸，所需排烟、油脂处理、燃气或电力、补风和排水可能与前咖啡厅完全不同。",
      },
      {
        question: "SFA 执照应该在装修前还是装修后申请？",
        answer:
          "装修应从一开始就配合适用的 SFA 执照要求，而申请过程也涉及布局和场所条件。请按执照类型查阅最新 SFA 与 GoBusiness 流程，不要假设装修完成就能自动营业。",
      },
      {
        question: "业主或经纪是否应该确认单位适不适合？",
        answer:
          "他们是确认核准用途、现有设施和建筑限制的第一重要来源。不过，最终适用性通常需要明确菜单和设备清单，因为物业代表未必能评估每种餐饮营运的技术影响。",
      },
      {
        question: "签约前仍有关键问题不确定，应该怎么办？",
        answer:
          "先确定由谁能够核实，尽量取得书面资料，并寻求适当的技术、物业或法律意见。若问题足以显著影响可行性、成本或开业，不要假设装修阶段一定能解决。",
      },
    ],
    ctaTitle: "仍在比较不同餐饮单位？",
    ctaText:
      "ID Work Studio 可协助你了解拟定菜单、设备计划和单位条件如何影响装修范围。目标是及早找出重要问题，让你更清楚地作出租赁决定。",
    ctaPrimary: "讨论餐饮单位",
    ctaSecondary: "查看商业装修服务",
    breadcrumbCurrent: "餐饮店租约检查清单",
    backLabel: "返回装修文章",
  },
};

export default function FnbShopLeaseChecklistSingapore() {
  const { i18n } = useTranslation();
  const lang = i18n.language === "zh" ? "zh" : "en";
  const t = content[lang];
  const whatsappMessage =
    lang === "zh"
      ? "你好 ID Work Studio，我正在考虑一个餐饮单位，希望在承诺租约前了解它是否适合我的经营概念。我可以提供地点、拟定菜单和现有平面图。"
      : "Hi ID Work Studio, I’m considering an F&B unit and would like to understand whether it may suit my business concept before I commit to the lease. I can share the location, proposed menu and available floor plan.";
  const whatsappHref = `https://wa.me/6598333085?text=${encodeURIComponent(whatsappMessage)}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: t.title,
    description: t.metaDescription,
    image: "https://idworkstudio.com/insights/fnb-shop-lease-singapore.webp",
    url: t.canonical,
    datePublished: "2026-07-26",
    dateModified: "2026-07-26",
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
    about: [
      "F&B shop lease Singapore",
      "F&B renovation Singapore",
      "Restaurant renovation Singapore",
      "Commercial kitchen planning",
    ],
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
      <Head>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDescription} />
        <link rel="canonical" href={t.canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={t.title} />
        <meta property="og:description" content={t.metaDescription} />
        <meta property="og:url" content={t.canonical} />
        <meta
          property="og:image"
          content="https://idworkstudio.com/insights/fnb-shop-lease-singapore.webp"
        />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Head>

      <main className="bg-[#FAF8F3] text-[#2C2C2C]">
        <section className="relative isolate overflow-hidden bg-[#111] px-6 py-20 text-center text-white md:py-28">
          <img
            src="/insights/fnb-shop-lease-singapore.webp"
            alt=""
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-[#111]/75" />
          <div className="mx-auto max-w-5xl">
            <p className="mb-5 inline-flex rounded-full border border-[#C5A059]/50 bg-black/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#D6B26B] backdrop-blur-sm">
              {t.eyebrow}
            </p>
            <h1 className="font-serif text-4xl font-semibold leading-tight md:text-6xl">
              {t.title}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/80 md:text-lg">
              {t.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs uppercase tracking-[0.16em] text-white/60">
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
              ← {t.backLabel}
            </Link>
          </div>
        </section>

        <article className="mx-auto max-w-5xl px-6 py-14 md:py-20">
          <section className="mb-14 rounded-3xl border border-[#e8e1d7] bg-white p-6 shadow-sm md:p-8">
            <h2 className="font-serif text-3xl font-semibold">{t.quickAnswerTitle}</h2>
            <p className="mt-4 text-base leading-8 text-[#5f5a54]">{t.quickAnswer}</p>
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {t.quickPoints.map((point) => (
                <div
                  key={point.label}
                  className="rounded-2xl border border-[#e8e1d7] bg-[#fffdf8] p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#9A7A3B]">
                    {point.label}
                  </p>
                  <p className="mt-2 font-serif text-2xl font-semibold">{point.value}</p>
                  <p className="mt-2 text-sm leading-6 text-[#6f6a63]">{point.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14 rounded-3xl border border-[#d8c59f] bg-[#F4ECDD] p-7 md:p-9">
            <h2 className="font-serif text-3xl font-semibold">{t.earlyCtaTitle}</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#5f5a54]">{t.earlyCtaText}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#C5A059] px-6 py-3 text-sm font-semibold text-white hover:bg-[#D6B26B]"
              >
                {t.earlyCtaPrimary}
              </a>
              <Link
                to="/commercial-approval-planner"
                className="rounded-full border border-[#9A7734] px-6 py-3 text-sm font-semibold text-[#7A5E2D] hover:bg-white"
              >
                {t.earlyCtaSecondary}
              </Link>
            </div>
          </section>

          <section className="mb-14">
            <h2 className="border-b border-[#e8e1d7] pb-4 font-serif text-3xl font-semibold">
              {t.centralTitle}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5f5a54]">{t.centralIntro}</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {t.centralChain.map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#e8e1d7] bg-white p-5 shadow-sm"
                >
                  <span className="text-xs font-bold text-[#C5A059]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 text-sm font-semibold leading-6">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-base leading-8 text-[#5f5a54]">{t.centralClose}</p>
          </section>

          <section className="mb-14 rounded-3xl bg-[#2B2926] p-7 text-white md:p-9">
            <h2 className="font-serif text-3xl font-semibold">{t.misconceptionTitle}</h2>
            <div className="mt-5 space-y-4">
              {t.misconceptionParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-white/75">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="border-b border-[#e8e1d7] pb-4 font-serif text-3xl font-semibold">
              {t.sameUnitTitle}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5f5a54]">{t.sameUnitIntro}</p>
            <div className="mt-7 grid gap-5 md:grid-cols-2">
              {t.sameUnitCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-3xl border border-[#e8e1d7] bg-white p-6 shadow-sm"
                >
                  <h3 className="font-serif text-2xl font-semibold">{card.title}</h3>
                  <ul className="mt-4 space-y-3">
                    {card.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-7 text-[#5f5a54]">
                        <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#C5A059]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 border-t border-[#e8e1d7] pt-5 text-sm font-medium leading-7 text-[#3e3a35]">
                    {card.result}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="border-b border-[#e8e1d7] pb-4 font-serif text-3xl font-semibold">
              {t.conceptTitle}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5f5a54]">{t.conceptIntro}</p>
            <div className="mt-7 overflow-x-auto rounded-3xl border border-[#e8e1d7] bg-white shadow-sm">
              <table className="min-w-[900px] w-full border-collapse text-left">
                <thead className="bg-[#2B2926] text-white">
                  <tr>
                    <th className="px-5 py-4 text-sm font-semibold">{t.conceptHeaders.concept}</th>
                    <th className="px-5 py-4 text-sm font-semibold">{t.conceptHeaders.operation}</th>
                    <th className="px-5 py-4 text-sm font-semibold">
                      {t.conceptHeaders.considerations}
                    </th>
                    <th className="px-5 py-4 text-sm font-semibold">{t.conceptHeaders.warning}</th>
                  </tr>
                </thead>
                <tbody>
                  {t.concepts.map((row) => (
                    <tr key={row.concept} className="border-t border-[#e8e1d7] align-top">
                      <td className="px-5 py-5 text-sm font-semibold">{row.concept}</td>
                      <td className="px-5 py-5 text-sm leading-6 text-[#5f5a54]">
                        {row.operation}
                      </td>
                      <td className="px-5 py-5 text-sm leading-6 text-[#5f5a54]">
                        {row.considerations}
                      </td>
                      <td className="px-5 py-5 text-sm leading-6 text-[#8A6830]">
                        {row.warning}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-14">
            <h2 className="border-b border-[#e8e1d7] pb-4 font-serif text-3xl font-semibold">
              {t.systemsTitle}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5f5a54]">{t.systemsIntro}</p>
            <div className="mt-7 space-y-5">
              {t.systems.map((system) => (
                <section
                  key={system.title}
                  className="rounded-3xl border border-[#e8e1d7] bg-white p-6 shadow-sm md:p-7"
                >
                  <h3 className="font-serif text-2xl font-semibold">{system.title}</h3>
                  <div className="mt-4 space-y-4">
                    {system.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-base leading-8 text-[#5f5a54]">
                        {paragraph}
                      </p>
                    ))}
                    {system.bullets && (
                      <ul className="space-y-3 pt-1">
                        {system.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3 text-sm leading-7 text-[#5f5a54]">
                            <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#C5A059]" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </section>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="border-b border-[#e8e1d7] pb-4 font-serif text-3xl font-semibold">
              {t.suitabilityTitle}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5f5a54]">{t.suitabilityIntro}</p>
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {t.checks.map((check, index) => (
                <div
                  key={check.title}
                  className="rounded-2xl border border-[#e8e1d7] bg-[#fffdf8] p-5 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C5A059] text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-semibold">{check.title}</h3>
                  </div>
                  <p className="mt-4 text-sm font-semibold leading-7 text-[#3e3a35]">
                    {check.question}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[#6f6a63]">{check.why}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14 rounded-3xl bg-[#2B2926] p-7 text-white md:p-9">
            <h2 className="font-serif text-3xl font-semibold">{t.comparisonCtaTitle}</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/75">
              {t.comparisonCtaText}
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-[#C5A059] px-6 py-3 text-sm font-semibold text-white hover:bg-[#D6B26B]"
            >
              {t.comparisonCtaPrimary}
            </a>
          </section>

          <section className="mb-14 rounded-3xl border border-[#d8c59f] bg-[#F4ECDD] p-7 md:p-9">
            <h2 className="font-serif text-3xl font-semibold">{t.seatingTitle}</h2>
            <div className="mt-5 space-y-4">
              {t.seatingParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-[#5f5a54]">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="border-b border-[#e8e1d7] pb-4 font-serif text-3xl font-semibold">
              {t.safetyTitle}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5f5a54]">{t.safetyIntro}</p>
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {t.safetyNets.map((item) => (
                <div
                  key={item.step}
                  className="rounded-3xl border border-[#e8e1d7] bg-white p-6 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C5A059] text-sm font-bold text-white">
                    {item.step}
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5f5a54]">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="border-b border-[#e8e1d7] pb-4 font-serif text-3xl font-semibold">
              {t.leaseTitle}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5f5a54]">{t.leaseIntro}</p>
            <ul className="mt-5 space-y-3 rounded-3xl border border-[#e8e1d7] bg-white p-6 shadow-sm">
              {t.leaseBullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-base leading-7 text-[#5f5a54]">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#C5A059]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-base leading-8 text-[#5f5a54]">{t.leaseClose}</p>
          </section>

          <section className="mb-14">
            <h2 className="border-b border-[#e8e1d7] pb-4 font-serif text-3xl font-semibold">
              {t.mistakesTitle}
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {t.mistakes.map((mistake) => (
                <div
                  key={mistake.title}
                  className="rounded-2xl border border-[#e8e1d7] bg-white p-5 shadow-sm"
                >
                  <h3 className="text-lg font-semibold">{mistake.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#5f5a54]">{mistake.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="border-b border-[#e8e1d7] pb-4 font-serif text-3xl font-semibold">
              {t.nextTitle}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5f5a54]">{t.nextIntro}</p>
            <div className="mt-7 space-y-4">
              {t.nextSteps.map((step, index) => (
                <div
                  key={step.number}
                  className={`grid gap-4 rounded-2xl border p-5 shadow-sm sm:grid-cols-[44px_1fr] ${
                    index === 0
                      ? "border-[#C5A059] bg-[#F4ECDD]"
                      : "border-[#e8e1d7] bg-[#fffdf8]"
                  }`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C5A059] text-sm font-bold text-white">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#5f5a54]">{step.text}</p>
                    {step.to && step.label && (
                      <Link
                        to={step.to}
                        className="mt-3 inline-flex text-sm font-semibold text-[#9A7734] hover:text-[#C5A059]"
                      >
                        {step.label} →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14 rounded-3xl bg-[#2B2926] p-7 text-white md:p-9">
            <h2 className="font-serif text-3xl font-semibold">{t.reassuranceTitle}</h2>
            <p className="mt-4 text-base leading-8 text-white/75">{t.reassuranceText}</p>
          </section>

          <section className="mb-14">
            <h2 className="border-b border-[#e8e1d7] pb-4 font-serif text-3xl font-semibold">
              {t.sourcesTitle}
            </h2>
            <p className="mt-6 text-sm leading-7 text-[#6f6a63]">{t.sourcesIntro}</p>
            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              {t.sources.map((source) => (
                <li key={source.href}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-2xl border border-[#e8e1d7] bg-white p-4 text-sm font-semibold leading-6 text-[#6f6a63] shadow-sm hover:border-[#C5A059] hover:text-[#9A7734]"
                  >
                    {source.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-14">
            <h2 className="border-b border-[#e8e1d7] pb-4 font-serif text-3xl font-semibold">
              {t.faqTitle}
            </h2>
            <div className="mt-6 space-y-3">
              {t.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-2xl border border-[#e8e1d7] bg-[#fffdf8] p-5"
                >
                  <summary className="cursor-pointer text-base font-semibold">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-[#5f5a54]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="rounded-3xl bg-[#151515] p-7 text-white md:p-9">
            <h2 className="font-serif text-3xl font-semibold">{t.ctaTitle}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70">{t.ctaText}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#C5A059] px-6 py-3 text-sm font-semibold text-white hover:bg-[#D6B26B]"
              >
                {t.ctaPrimary}
              </a>
              <Link
                to="/commercial"
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
