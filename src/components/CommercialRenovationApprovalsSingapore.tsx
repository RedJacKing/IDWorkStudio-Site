import { Helmet } from "react-helmet-async";
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
 * Commercial Renovation Approvals
 *
 * Primary Entity:
 * Commercial Renovation Approvals Singapore
 *
 * Related Planning Tool:
 * /commercial-renovation-planner
 *
 * Related Service Page:
 * /commercial
 *
 * Related Guides:
 * /insights/commercial-renovation-cost-singapore
 * /insights/office-renovation-timeline-singapore
 * /commercial/reinstatement
 *
 * ============================================================================
 */

type FaqItem = {
  question: string;
  answer: string;
};

type SummaryCard = {
  label: string;
  value: string;
  note: string;
};

type RelatedLink = {
  title: string;
  description: string;
  to: string;
  label: string;
};

type Section = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  scenario?: string;
  link?: {
    to: string;
    label: string;
  };
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
  summaryCards: SummaryCard[];
  sections: Section[];
  comparisonTitle: string;
  comparisonIntro: string;
  comparisonRows: {
    project: string;
    mainChecks: string;
    timelineRisk: string;
  }[];
  reviewCtaTitle: string;
  reviewCtaText: string;
  reviewCtaPrimary: string;
  reviewCtaSecondary: string;
  timelineTitle: string;
  timelineIntro: string;
  timeline: {
    step: string;
    title: string;
    text: string;
  }[];
  mistakesTitle: string;
  mistakes: {
    title: string;
    text: string;
  }[];
  relatedKnowledgeTitle: string;
  relatedKnowledgeIntro: string;
  relatedKnowledge: RelatedLink[];
  trustTitle: string;
  trustIntro: string;
  trustPoints: {
    title: string;
    text: string;
  }[];
  trustNote: string;
  faqTitle: string;
  faqs: FaqItem[];
  assuranceEyebrow: string;
  assuranceTitle: string;
  assuranceText: string[];
  assurancePlannerLabel: string;
  assuranceContactLabel: string;
  ctaTitle: string;
  ctaText: string;
  ctaPrimary: string;
  ctaSecondary: string;
  breadcrumbCurrent: string;
};

const content: Record<"en" | "zh", ArticleContent> = {
  en: {
    metaTitle:
      "Commercial Renovation Approvals Singapore (2026) | ID Work Studio",
    metaDescription:
      "Plan Singapore commercial renovation approvals before signing a lease. Covers SCDF, SFA, URA, BCA, landlord requirements, trade licences, timelines and rent-free period risks.",
    canonical:
      "https://idworkstudio.com/insights/commercial-renovation-approvals-singapore",
    eyebrow: "Singapore Commercial Renovation Guide",
    title:
      "Commercial Renovation Approvals in Singapore: What You Need Before Work Can Start",
    subtitle:
      "Plan the journey from lease signing to business opening—not just the construction period. The unit, intended trade, approval pathway, landlord requirements and fit-out scope should be checked before you commit to a takeover date.",
    readTime: "55 min read",
    category: "Commercial Renovation",
    quickAnswerTitle: "Quick answer",
    quickAnswer:
      "Before signing or taking over a commercial unit, work backwards from the intended opening date. Confirm that the unit can support the intended business, obtain the latest landlord or building fit-out guide, identify the likely approval pathway, allow time for design and submissions, then add the physical renovation and final inspection period. A rent-free renovation period should not be treated as automatically sufficient: if approvals consume part of it, the tenant may start paying rent before construction or licensing is complete.",
    summaryCards: [
      {
        label: "Before signing the lease",
        value: "Check feasibility first",
        note:
          "Confirm the unit, approved use, building services and landlord conditions before fixing the takeover and opening dates.",
      },
      {
        label: "Before taking over",
        value: "Build the full programme",
        note:
          "Allow for design, submissions, revisions, renovation, testing, inspection and any trade-specific licence requirements.",
      },
      {
        label: "Rent-free period",
        value: "Do not assume it is enough",
        note:
          "Approval time can consume the renovation-free period before physical work even begins.",
      },
      {
        label: "Best first document",
        value: "Latest fit-out guide",
        note:
          "Ask for the current landlord or building-management requirements before the design and quotation are finalised.",
      },
    ],
    sections: [
      {
        title: "Stage 1: Before signing the lease—check whether the unit can support the business",
        paragraphs: [
          "The safest time to identify approval risk is before the lease is signed, not after the keys are collected. Start by checking the intended business use, the unit’s current approved use, the available electrical load, air-conditioning, drainage, exhaust possibilities, structural limitations, signage conditions and the landlord’s fit-out requirements.",
          "A unit can look suitable and still be difficult or expensive to convert. A low rent or attractive location does not compensate for an exhaust route that cannot be approved, insufficient electrical capacity, a restrictive shopfront guideline or a business use that requires further review.",
          "The decision is not simply whether the unit can be renovated. It is whether the unit can be renovated, approved and opened within the commercial timeline and budget.",
        ],
        bullets: [
          "Ask for the latest landlord or building-management fit-out guide",
          "Confirm the unit’s current approved use and intended business use",
          "Check power, air-conditioning, water, drainage, exhaust and loading needs",
          "Identify likely fire-safety, building or trade-licensing triggers",
          "Review reinstatement obligations before accepting the lease",
        ],
        scenario:
          "Example: a restaurant operator signs a unit because the rental is attractive, then discovers that a compliant kitchen exhaust route cannot be provided. The problem is no longer a renovation detail—it threatens whether the business can operate from that unit.",
        link: {
          to: "/commercial",
          label: "Review the unit before committing to the lease",
        },
      },
      {
        title: "Stage 2: Before agreeing to the takeover date—plan the full approval and fit-out window",
        paragraphs: [
          "Do not plan from the construction duration alone. Work backwards from the intended opening date and include feasibility checks, design development, landlord review, authority or professional submissions where required, revisions, physical renovation, testing, final inspection and business licensing.",
          "The rent-free renovation period is a commercial negotiation, not proof that the project can be completed within that period. If management approval or authority review takes several weeks, part of the rent-free period may pass before demolition or partition work begins.",
          "Before accepting the takeover date, ask for a realistic programme showing what can happen before possession, what only begins after possession, and which activities can run in parallel.",
        ],
        bullets: [
          "Target opening date",
          "Business-use and site-feasibility review",
          "Design and drawing preparation",
          "Landlord, Management Corporation Strata Title (MCST) or building-management review",
          "Authority and professional submissions where triggered",
          "Renovation, testing, inspection and licensing",
        ],
        scenario:
          "Example: the landlord grants one month of rent-free renovation, but drawing preparation and management approval consume three weeks. The tenant is left with roughly one week of rent-free physical work and may start paying rent well before opening.",
        link: {
          to: "/insights/office-renovation-timeline-singapore",
          label: "See how an office renovation timeline is planned",
        },
      },
      {
        title: "Stage 3: After securing the unit—collect the documents that control the project",
        paragraphs: [
          "Once the unit is secured, obtain the latest fit-out guide, approved plans where available, handover condition, landlord contact list, nominated-contractor requirements, insurance limits, deposit conditions, working hours, loading rules and service-lift procedures.",
          "The fit-out guide affects design, cost and programme. It may control shopfront appearance, noisy-work hours, protection requirements, fire-system shutdown, ceiling access, material restrictions, contractor registration and final inspections.",
          "Do not use another building’s guide as a substitute. The active rules for the actual property are the rules that matter.",
        ],
        bullets: [
          "Latest fit-out or renovation guide",
          "Handover drawings and existing services information",
          "Renovation deposit and insurance requirements",
          "Approved work hours and noisy-work restrictions",
          "Nominated contractors and specialist booking procedures",
          "Final inspection and deposit-release conditions",
        ],
      },
      {
        title: "Stage 4: Plan the approvals—there is no single commercial renovation permit",
        paragraphs: [
          "Different approvals answer different questions. One party checks whether the business use is permitted. Another checks fire safety. The landlord or building management checks the property’s own rules. A professional may need to design, submit or certify regulated work.",
          "One approval does not replace another. Landlord acceptance does not remove government requirements, and government approval does not force the landlord to accept work that breaches the building’s fit-out guide.",
          "The project team should therefore produce an approval map: what needs approval, who handles it, what information is required, what can proceed in parallel and what must be completed before work starts.",
        ],
        bullets: [
          "Business-use and planning feasibility",
          "Landlord, MCST or building-management approval",
          "Government authority approval where triggered",
          "Professional design, submission or certification",
          "Insurance, deposits, registration and work permit",
          "Pre-opening inspection or trade licence where required",
        ],
      },
      {
        title: "The four approval groups every business owner should understand",
        paragraphs: [
          "The approval journey becomes easier to manage when the requirements are separated into four practical groups.",
        ],
        bullets: [
          "Building or landlord approval: the owner, landlord, MCST or building management checks whether the proposal follows the property’s rules.",
          "Government approval: depending on the business and work, authorities may review planning use, building work, fire safety, electrical work, plumbing, environmental matters or operating licences.",
          "Professional review: some work must be prepared, checked, submitted or certified by a registered architect, engineer or licensed specialist.",
          "Site permission: even after drawings are accepted, the building may still require insurance, deposits, contractor registration and a formal fit-out work permit.",
        ],
      },
      {
        title: "Authority map: which Singapore regulator handles which part of the project?",
        paragraphs: [
          "Commercial renovation approval is not controlled by one agency. Each regulator looks at a different risk: whether the business use is allowed, whether the building work is safe, whether fire protection remains compliant, whether food premises meet hygiene requirements, whether electrical and plumbing systems are suitable, and whether the business may legally open.",
          "The project team should identify the regulators before the lease, layout and opening date are finalised. The authority list below is a trigger map, not a statement that every project needs every approval.",
        ],
        bullets: [
          "URA (Urban Redevelopment Authority): checks whether the intended business use is permitted at the premises and whether a change-of-use application or lodgment is needed.",
          "BCA (Building and Construction Authority): becomes relevant for building plans, structural works, certain addition and alteration works, accessibility and other regulated building work.",
          "SCDF (Singapore Civil Defence Force): reviews proposed fire-safety works, including changes that affect escape routes, compartmentation, fire-rated construction, sprinklers, alarms, smoke control or mechanical ventilation.",
          "SFA (Singapore Food Agency): licenses food shops, stalls and food-manufacturing or storage premises, and reviews the submitted layout and operational setup before approval.",
          "NEA (National Environment Agency): may be relevant to environmental health, kitchen exhaust, ventilation, pollution, noise, waste or other environmental-control matters.",
          "PUB (Singapore’s National Water Agency): regulates water service, sanitary plumbing, sewerage, used-water discharge and grease-trap requirements.",
          "EMA (Energy Market Authority): regulates electrical workers and electrical or supply installations; the appropriate LEW (Licensed Electrical Worker) must handle regulated electrical work.",
          "MOH (Ministry of Health): regulates healthcare services under the HCSA (Healthcare Services Act); operators must hold the relevant service licence before providing regulated healthcare services.",
          "JTC (JTC Corporation), HDB (Housing & Development Board), the landlord or MCST (Management Corporation Strata Title): may impose separate property, tenancy, use and renovation-consent requirements.",
        ],
      },
      {
        title: "SCDF: fire-safety approval can shape the layout before construction starts",
        paragraphs: [
          "SCDF (Singapore Civil Defence Force) is often the most important authority in office, retail, clinic, F&B and other fit-out projects because the layout affects how occupants escape and how fire-protection systems serve the premises.",
          "A new partition is not merely an interior-design item. Depending on its position and construction, it can affect travel distance, exit access, fire compartmentation, occupant movement, sprinkler coverage, smoke detectors, alarm devices, emergency lighting, air-conditioning and mechanical ventilation. That is why fire-safety implications should be checked before the layout is frozen.",
          "Where proposed fire-safety works require submission, the plans are prepared and submitted by the relevant QP (Qualified Person), meaning a registered architect or professional engineer with the appropriate discipline. Some completed projects may also require inspection and certification by an RI (Registered Inspector) before a Fire Safety Certificate or Temporary Fire Permit can be obtained.",
          "The practical timing lesson is to complete fire-safety coordination during design, not after partitions are already built. A late SCDF-related redesign can affect several trades at once and may consume part of the rent-free fitting-out period.",
        ],
        bullets: [
          "Check whether new rooms alter escape routes or travel distance",
          "Coordinate sprinkler, detector and alarm coverage with the final ceiling and partition plan",
          "Confirm whether fire-rated walls, doors or penetrations are required",
          "Check whether mechanical ventilation, smoke control or kitchen exhaust affects the fire-safety submission",
          "Identify the QP, specialist contractor and possible RI requirement before committing to the opening date",
        ],
        scenario:
          "Example: an office adds several enclosed meeting rooms after the first layout is approved. The partitions affect sprinkler and detector positions and require revised fire-safety coordination. Even if the carpentry is ready, the project programme may move because the drawings, specialist quotations and approvals must be updated.",
      },
      {
        title: "SFA, NEA and PUB: why F&B approval must begin with the kitchen layout",
        paragraphs: [
          "For an F&B (Food and Beverage) project, the kitchen, food-preparation area, wash areas, exhaust, drainage, grease management and equipment positions are not details to solve after renovation. They form part of the licensing and technical review.",
          "SFA (Singapore Food Agency) reviews the application and layout plan for a food shop and carries out pre-licensing checks before final approval. Once SFA approves the application, the operator proceeds with renovation and sets up the premises according to the submitted layout. Changing the kitchen or equipment arrangement later may therefore create rework or require the licensing information to be updated.",
          "NEA (National Environment Agency) requirements can affect kitchen exhaust, ventilation and environmental-health design. PUB (Singapore’s National Water Agency) requirements affect sanitary plumbing, used water and grease traps. PUB’s current sewerage and sanitary code requires food shops and food-processing establishments to provide grease traps, subject to limited exceptions and PUB’s permission.",
          "Before signing an F&B lease, confirm that the unit can physically support an acceptable exhaust route, drainage, grease-trap arrangement, water supply, electrical load and kitchen workflow. Attractive rent cannot compensate for a unit that cannot support the operation.",
        ],
        bullets: [
          "Prepare a scaled kitchen and equipment layout early",
          "Confirm exhaust discharge feasibility before committing to the unit",
          "Check drainage falls, sanitary connections and grease-trap location",
          "Coordinate cooking equipment, electrical load, gas and fire protection",
          "Allow time for layout review, renovation, setup and pre-licensing inspection",
        ],
        scenario:
          "Example: a café signs a lease assuming that a recirculating hood will be accepted, but the actual menu and cooking process require a compliant exhaust arrangement. If no suitable discharge route exists, the concept, layout or even the chosen unit may have to change.",
      },
      {
        title: "URA, BCA, EMA, MOH, JTC and HDB: other triggers that can stop a project or delay opening",
        paragraphs: [
          "URA (Urban Redevelopment Authority) should be checked when the proposed trade differs from the premises’ approved use. URA specifically advises business owners to confirm whether planning permission is needed before committing to a tenancy or starting renovation. Some qualifying changes may use a lodgment route, while others require a formal change-of-use application.",
          "BCA (Building and Construction Authority) becomes relevant when the scope includes regulated building or structural work. Some minor works do not require BCA approval, but structural changes, certain building-plan matters and addition and alteration works may require plans and permits through a QP.",
          "EMA (Energy Market Authority) regulates LEWs (Licensed Electrical Workers). New wiring, rewiring, extensions, higher loads and electrical or supply installations must be handled, inspected and tested by the appropriate licensed person. Equipment should not be ordered before the available electrical capacity is checked.",
          "Healthcare operators must consider MOH (Ministry of Health) licensing under the HCSA (Healthcare Services Act). The licence follows the regulated healthcare service being provided, so a clinic project must align the intended services, premises design, operational requirements and opening approval—not simply renovate an office and assume it can operate as a clinic.",
          "For industrial premises, JTC (JTC Corporation) may require plan consent and approval before fitting-out or renovation begins, in addition to approvals from the relevant authorities. HDB (Housing & Development Board) commercial premises may also require HDB consent or clearance for trade, use and addition and alteration works.",
        ],
        bullets: [
          "Check approved use before signing the tenancy",
          "Separate landlord consent from statutory approval",
          "Engage the correct QP, PE, LEW, Licensed Plumber or other specialist",
          "Check industrial-landlord or HDB commercial-premises requirements",
          "Do not set the opening date until operating-licence and final-inspection requirements are mapped",
        ],
      },
      {
        title: "How do you know which approvals apply to your project?",
        paragraphs: [
          "Start with five questions: what business will operate in the unit, what the unit is currently approved for, what physical changes are proposed, which building systems will be affected, and what the current fit-out guide requires.",
          "A change of use, new partitions, escape-route changes, sprinkler or alarm modifications, higher electrical load, plumbing, exhaust, structural work, heavy equipment, shopfront changes or trade-specific operating requirements can create separate approval paths.",
          "These triggers should be identified before the quotation and programme are finalised so that the client sees the likely consultant fees, submission work, lead time and opening risk.",
        ],
        bullets: [
          "Change of business use",
          "Changes to partitions, escape routes or fire protection",
          "Structural work, heavy equipment or floor loading",
          "Electrical upgrading, plumbing, exhaust or ventilation changes",
          "Shopfront, signage or common-property work",
          "Trade-specific licensing or pre-opening inspection",
        ],
      },
      {
        title: "What does building management usually ask for?",
        paragraphs: [
          "Building management normally needs more than a floor plan. The exact list differs by property, but common items include layout drawings, ceiling plans, electrical plans, air-conditioning plans, sprinkler layouts, contractor particulars, insurance and a work schedule.",
          "Retail malls may control shopfronts, signage, shutters and entrance zones. Industrial properties may focus on machinery weight, vibration, exhaust and electrical load. Offices often receive closer review of partitions, fire protection, air-conditioning and power distribution.",
          "The current guide for the actual unit must be reviewed before the design is finalised.",
        ],
      },
      {
        title: "Stage 5: During renovation—protect the approved scope and opening date",
        paragraphs: [
          "Once work begins, the project should follow the approved drawings, conditions and work permit. Changes that affect layout, fire safety, electrical loading, plumbing, exhaust, structure or regulated equipment may require revised drawings, renewed approval or additional specialist coordination.",
          "This is why late changes should not be treated as simple site instructions. A variation order records the change to the agreed contract and should state the effect on cost and programme.",
          "The team should track approvals, procurement, inspections and client decisions against the target opening date—not only against the construction completion date.",
        ],
        bullets: [
          "Keep the approved drawing set available on site",
          "Record authority, management and specialist conditions",
          "Do not alter regulated work without checking the approval impact",
          "Confirm equipment specifications before related services are installed",
          "Use variation orders for scope, cost or programme changes",
        ],
      },
      {
        title: "What usually causes delay?",
        paragraphs: [
          "Approval is not always the only source of delay. Late design decisions, missing equipment data, incomplete documents, material changes and restricted working hours can disrupt the sequence just as seriously.",
          "Moving a room after electrical, air-conditioning and fire-safety coordination may require revised drawings, new quantities and rework. A change that looks small to the tenant can affect several trades and the approval record.",
          "A realistic programme should include time for comments, resubmission, specialist bookings and rectification—not assume that every submission is accepted on the first review.",
        ],
        bullets: [
          "Late confirmation of materials or equipment",
          "Design changes after submission",
          "Incomplete management or authority documents",
          "Additional comments and resubmission",
          "Electrical, exhaust, drainage or structural limitations found late",
          "Restricted work hours or nominated-contractor availability",
        ],
        scenario:
          "Example: changing the kitchen equipment after services are coordinated can affect power, gas, drainage, exhaust and fire-safety requirements. The delay is not limited to ordering a different appliance.",
      },
      {
        title: "Hidden costs that may sit outside the main renovation quotation",
        paragraphs: [
          "Commercial renovation cost is not limited to partitions, flooring, carpentry and electrical work. The full budget may also include professional fees, submission charges, renovation deposits, insurance, management charges, utility upgrades, system shutdowns, nominated contractors, night work, lift protection and temporary services.",
          "The quotation should distinguish included work, excluded work, provisional items and costs that cannot be confirmed until the fit-out guide or authority pathway is reviewed.",
          "A lower construction quotation is not necessarily a lower total project cost if the approval and specialist responsibilities are missing.",
        ],
        link: {
          to: "/insights/commercial-renovation-cost-singapore",
          label: "See the commercial renovation cost guide",
        },
      },
      {
        title: "Choose your trade pathway before you plan the renovation",
        paragraphs: [
          "The same unit can face a very different approval path depending on what business will operate inside it. A small office, retail shop, restaurant, clinic, cleaning company and workshop should not use the same checklist or opening programme.",
          "The first planning question should therefore be: “What approvals and licences are triggered by this trade?” The answer affects whether the unit is suitable, which drawings are needed, which specialists must be appointed, when renovation may start and when the business may legally open.",
          "The pathways below are practical starting points. They do not replace the current requirements of the landlord, regulator or licensing authority.",
        ],
      },
      {
        title: "Office pathway: partitions, fire safety, M&E and move-in coordination",
        paragraphs: [
          "A normal office usually does not need a trade-specific operating licence, but that does not mean approval is simple. The main risks are landlord or MCST review, SCDF fire-safety implications, electrical and data planning, air-conditioning distribution and the number of enclosed rooms.",
          "Every meeting room, manager room, phone booth or store can affect sprinkler coverage, smoke detectors, lighting, air-conditioning and escape routes. The final headcount also matters because occupant load and circulation should match the approved layout.",
          "Before the lease starts, obtain the latest fit-out guide, confirm the existing electrical and air-conditioning capacity, and freeze the room layout early enough for coordinated drawings. Do not plan the move-in date using the site-work duration alone.",
        ],
        bullets: [
          "Landlord or MCST fit-out approval",
          "SCDF review where fire-safety works are triggered",
          "LEW coordination for electrical loading, wiring and testing",
          "Air-conditioning, data, access control and server-room planning",
          "Final inspection, testing and IT or furniture move-in",
        ],
        scenario:
          "Example: a 1,500 sqft office may look like a simple six-week fit-out, but adding many enclosed rooms late can trigger revised sprinkler, detector, air-conditioning and electrical coordination. The opening programme should include design and approval time before those six weeks begin.",
        link: {
          to: "/commercial/office-renovation",
          label: "Explore the office renovation service",
        },
      },
      {
        title: "Retail pathway: shopfront, signage, mall design rules and fire safety",
        paragraphs: [
          "A retail shop is usually shaped as much by the landlord’s design manual as by the renovation design. Shopping malls often control the shopfront, fascia, signage, shutters, lighting, display zones, floor finishes near the entrance and how work interfaces with common property.",
          "Retail projects may also involve SCDF review where the layout or ceiling affects fire-safety systems. Mall-appointed or nominated contractors may be required for sprinklers, alarms, air-conditioning, electrical supply or signage connection.",
          "Before fabrication begins, secure written design approval for the shopfront and other controlled elements. Ordering carpentry or signage before the mall’s comments are closed creates a high risk of rework.",
        ],
        bullets: [
          "Mall or landlord concept and technical approval",
          "Shopfront, fascia, signage and shutter approval",
          "SCDF coordination where partitions or ceiling works affect fire safety",
          "Nominated contractors and after-hours work requirements",
          "Common-area protection, delivery and service-lift bookings",
        ],
      },
      {
        title: "F&B pathway: use, kitchen layout, SFA licence, exhaust, drainage and grease control",
        paragraphs: [
          "An F&B (Food and Beverage) business has one of the most approval-sensitive renovation pathways. Before signing the lease, confirm that the use is allowed and that the unit can support the menu, cooking method, kitchen exhaust, drainage, grease trap, water supply, gas or electrical load and fire-safety requirements.",
          "SFA (Singapore Food Agency) reviews the food-shop licence application and layout plan, followed by pre-licensing checks. The premises should be renovated and set up according to the submitted layout. Equipment positions, food flow, wash areas and storage should therefore be settled before major fabrication.",
          "NEA (National Environment Agency), PUB (Singapore’s National Water Agency), SCDF (Singapore Civil Defence Force), the landlord and specialist contractors may all affect the final kitchen and back-of-house design. A one-month fitting-out period is often too aggressive when the unit needs new exhaust, drainage or heavy service upgrading.",
        ],
        bullets: [
          "Confirm permitted food use and landlord acceptance",
          "Prepare the scaled kitchen and equipment layout",
          "Check SFA licence pathway and pre-licensing requirements",
          "Verify exhaust, grease trap, drainage, water and waste arrangements",
          "Coordinate SCDF, gas, electrical load and specialist equipment",
        ],
        scenario:
          "Example: a restaurant signs a lease for a unit with no workable exhaust discharge route. Even if the dining area design is complete, the business may have to change its menu, install an expensive alternative system, seek further approval or abandon the unit.",
      },
      {
        title: "Clinic and healthcare pathway: service licence, room use, patient flow and specialist systems",
        paragraphs: [
          "A clinic cannot be planned as an ordinary office with consultation rooms added later. MOH (Ministry of Health) regulates healthcare services under the HCSA (Healthcare Services Act), and the licence depends on the healthcare service being provided.",
          "The intended services should be confirmed before design begins because they can affect room functions, privacy, infection control, hand-washing points, accessibility, medication storage, waste handling, imaging or laboratory equipment and other specialist requirements.",
          "The premises layout, renovation, equipment installation and HCSA application should be planned as one programme. A finished renovation does not by itself authorise the operator to provide regulated healthcare services.",
        ],
        bullets: [
          "Define the exact healthcare services to be provided",
          "Check URA use and landlord acceptance for the clinic",
          "Align layout and rooms with HCSA licensing requirements",
          "Coordinate SCDF, accessibility, plumbing and electrical needs",
          "Allow time for licensing review, inspection and rectification",
        ],
        scenario:
          "Example: an operator leases a former office and later decides to add treatment procedures requiring more plumbing, infection-control measures and specialist equipment. The late service change affects layout, cost and licensing readiness.",
      },
      {
        title: "Cleaning business pathway: NEA business licence versus premises renovation approval",
        paragraphs: [
          "A cleaning company has two separate questions. First, does the business need an NEA (National Environment Agency) Cleaning Business Licence? Second, does its office, warehouse or chemical-storage area need renovation, use or landlord approval?",
          "Businesses providing general cleaning services to other premises generally require the appropriate Cleaning Business Licence. The licence concerns the cleaning business and its workforce; it does not replace landlord, URA, SCDF, electrical or renovation approval for the company’s own premises.",
          "A simple administrative office may follow a normal office pathway. A base that stores cleaning chemicals, machinery, batteries or large quantities of supplies needs a more careful review of approved use, fire safety, ventilation, storage method, loading and waste handling.",
        ],
        bullets: [
          "Check whether an NEA Cleaning Business Licence is required",
          "Separate manpower and business-licence requirements from renovation approval",
          "Confirm whether the premises is office, storage, warehouse or mixed use",
          "Review chemical, battery, machinery and ventilation risks",
          "Check fire safety, loading, delivery access and landlord restrictions",
        ],
        scenario:
          "Example: a cleaning company rents a small industrial unit as an office and store. The office portion may be straightforward, but chemical and equipment storage can change the use, ventilation, fire-safety and landlord requirements.",
      },
      {
        title: "Industrial, warehouse and workshop pathway: approved use, loading, ventilation and operations",
        paragraphs: [
          "Industrial and warehouse projects should begin with the approved use and landlord conditions. JTC (JTC Corporation), HDB (Housing & Development Board), another industrial landlord or the relevant authority may control the activities permitted in the unit.",
          "Machinery weight, floor loading, vibration, noise, exhaust, compressed air, power demand, drainage, waste discharge, hazardous substances and delivery movements can all affect feasibility. Structural review or specialist submissions may be required before installation.",
          "Do not sign the lease based only on floor area and rent. Obtain equipment data and operating requirements early so that the unit, loading bay, electrical supply and environmental controls can be checked before commitment.",
        ],
        bullets: [
          "Confirm approved industrial or warehouse use",
          "Obtain equipment weight, load, power and ventilation data",
          "Check JTC, HDB or landlord plan-consent requirements",
          "Review NEA, PUB, SCDF and workplace-safety triggers",
          "Plan installation, testing and operational clearance",
        ],
      },
      {
        title: "Other regulated trades: childcare, beauty, wellness, massage, gyms and assembly uses",
        paragraphs: [
          "Some businesses sit outside the common office, retail and F&B pathways. An ECDC (Early Childhood Development Centre), for example, must hold a valid ECDA (Early Childhood Development Agency) licence before operating, advertising or accepting payment. Premises suitability and licensing should therefore be checked before renovation.",
          "Beauty and wellness businesses require careful definition of the services offered. Ordinary beauty services differ from medical or healthcare procedures. Massage establishments may require separate Police licensing, while gyms and studios must still consider approved use, occupant load, fire safety, ventilation, noise and changing or shower facilities.",
          "Tuition centres, religious spaces, event venues and other assembly uses can attract more attention to occupant load, escape capacity, accessibility, toilets and neighbourhood impact. The trade must be described accurately before the unit and approval path are assessed.",
        ],
        bullets: [
          "Identify the actual service—not only the business name",
          "Check whether a sector regulator or operating licence applies",
          "Review approved use, occupant load and fire-safety implications",
          "Confirm wet-area, ventilation, acoustic and accessibility needs",
          "Do not advertise or open before the required licence is in place",
        ],
      },
      {
        title: "Technical trigger map: which physical changes create additional approval risk?",
        paragraphs: [
          "The business type tells you which licences may apply. The physical renovation scope tells you which technical approvals, professionals and specialist contractors may be required.",
          "A project can begin as a simple fit-out and become approval-sensitive when the design adds enclosed rooms, changes fire systems, upgrades electrical load, introduces kitchen exhaust, cuts structural elements, adds wet areas or installs heavy equipment.",
          "The safest method is to review every proposed physical change before the quotation, authority programme and lease takeover date are finalised.",
        ],
      },
      {
        title: "Partitions, rooms and fire compartmentation",
        paragraphs: [
          "Partitions are one of the most common technical triggers in commercial renovation. They can change escape routes, travel distance, occupant movement, fire compartmentation, sprinkler coverage, smoke-detector positions, emergency lighting and air-conditioning distribution.",
          "SCDF (Singapore Civil Defence Force) states that proposed fire-safety works require approval unless they fall within an applicable exemption. For minor addition and alteration works, the submission must show partition details and whether existing sprinkler or automatic fire-alarm systems are affected.",
          "Do not erect partitions first and ask the fire-safety consultant to regularise them later. The final room layout should be coordinated with the ceiling, fire systems, doors and mechanical services before work begins.",
        ],
        bullets: [
          "New meeting rooms, treatment rooms, stores and back-of-house rooms",
          "Changes to exit access, corridor width or travel distance",
          "Fire-rated walls, doors, glazing and service penetrations",
          "Sprinkler, detector, alarm and emergency-lighting relocation",
          "Changes in occupant load or room function",
        ],
      },
      {
        title: "Ceilings, air-conditioning, mechanical ventilation and smoke control",
        paragraphs: [
          "A new ceiling can conceal or obstruct fire-protection devices, change sprinkler clearances and affect smoke detectors, emergency lighting, exit signs and air-conditioning distribution.",
          "Ductwork passing through fire compartments may require fire dampers or other fire-stopping measures. Kitchen exhaust, toilet exhaust, smoke control and mechanical ventilation should therefore be designed together with the fire-safety and ceiling plans.",
          "Before signing the lease, confirm whether the building uses central air-conditioning, whether after-hours cooling is available, and whether new fan-coil units, condensers, ducts or exhaust discharge points are permitted.",
        ],
        bullets: [
          "False-ceiling height and access panels",
          "Sprinkler and detector positions below the final ceiling",
          "Fire dampers where ducts cross compartment walls or floors",
          "Fresh-air, return-air and toilet-exhaust requirements",
          "Kitchen exhaust route, discharge point and maintenance access",
        ],
      },
      {
        title: "Plumbing, sanitary works, drainage and grease traps",
        paragraphs: [
          "Adding a pantry, treatment room, salon wash area, restaurant kitchen or new toilet can trigger sanitary-plumbing, drainage and waterproofing requirements. The nearest pipe is not automatically an acceptable connection point.",
          "PUB (Singapore’s National Water Agency) regulates sewerage and sanitary works. Food shops and food-processing establishments generally require grease traps for culinary used water, while toilet discharge must bypass the grease trap and connect separately to the sewer.",
          "The project team should confirm pipe routes, invert levels, drainage falls, access for maintenance, waterproofing and whether pumping is required before fixing the layout. Poor drainage feasibility can make an otherwise attractive unit unsuitable.",
        ],
        bullets: [
          "New sinks, basins, floor traps, toilets or treatment-room plumbing",
          "Drainage falls and connection levels",
          "Grease-trap size, location and maintenance access",
          "Waterproofing and kerb requirements for wet areas",
          "Pumped drainage where gravity discharge is not possible",
        ],
      },
      {
        title: "Electrical load, new wiring and equipment power",
        paragraphs: [
          "Commercial equipment should not be purchased until the available electrical capacity is checked. Kitchens, clinics, workshops, server rooms, laundries and beauty premises can exceed the unit’s existing supply even when the floor area is small.",
          "EMA (Energy Market Authority) requires electrical work such as new wiring, rewiring and extensions to be carried out by an LEW (Licensed Electrical Worker), with testing before supply is turned on.",
          "A load upgrade may affect the distribution board, incoming supply, metering, landlord approval and project timeline. Confirm each major item’s voltage, phase, current, starting load and isolation requirements before ordering.",
        ],
        bullets: [
          "Existing approved load and spare capacity",
          "Single-phase versus three-phase equipment",
          "Distribution-board and sub-main upgrading",
          "Emergency power, UPS and server requirements",
          "Testing, certification and supply turn-on",
        ],
        scenario:
          "Example: a restaurant orders several high-load cooking appliances based only on the supplier brochure. The unit’s available supply is insufficient, so the electrical design, landlord submission and opening programme must be revised.",
      },
      {
        title: "Structural work, floor loading and heavy equipment",
        paragraphs: [
          "Hacking a structural element, cutting a slab, creating an opening, installing a heavy safe, compactus system, water tank, medical machine or industrial equipment can trigger structural review.",
          "BCA (Building and Construction Authority) requires a permit for building works unless the work is classified as insignificant. Structural-plan approval must be submitted by a QP (Qualified Person) who is a registered Professional Engineer in the civil or structural discipline.",
          "Equipment weight should be assessed together with its footprint, point load, vibration and movement during delivery. A machine that is acceptable when evenly distributed may still create a concentrated loading problem.",
        ],
        bullets: [
          "Slab, beam, column or structural-wall alteration",
          "Core drilling, floor openings and penetrations",
          "Heavy machinery, safes, compactus systems and tanks",
          "Vibration, anchoring and dynamic loads",
          "Delivery path, loading bay and goods-lift capacity",
        ],
      },
      {
        title: "Accessibility, entrances, level changes and toilets",
        paragraphs: [
          "Commercial renovation should not focus only on aesthetics and operational flow. New building works and addition and alteration works may need to comply with BCA accessibility requirements.",
          "Entrance steps, narrow doors, raised platforms, inaccessible counters, unsuitable toilet arrangements and obstructed circulation can create compliance and usability problems. Accessibility should be checked before shopfront, flooring and carpentry details are fixed.",
          "Where the work triggers formal building-plan review, the QP should confirm the applicable accessibility scope. Even where a specific submission is not triggered, inclusive access remains an important design responsibility.",
        ],
        bullets: [
          "Step-free entrance or suitable ramp",
          "Door clear widths and circulation space",
          "Accessible counters, rooms and routes",
          "Accessible toilet implications",
          "Level changes created by flooring or platforms",
        ],
      },
      {
        title: "Shopfronts, signage, shutters and common property",
        paragraphs: [
          "Shopfronts and signs affect more than branding. They may interface with common property, fire escape, smoke curtains, mall shutters, facade controls, lighting power and landlord design standards.",
          "The landlord or MCST (Management Corporation Strata Title) may require concept approval followed by detailed technical approval. External signs may also require separate consent depending on location and type.",
          "Do not release shopfront, signage or shutter fabrication until dimensions, materials, fixing details, power supply and management comments are closed.",
        ],
        bullets: [
          "Fascia, signboard, lightbox and digital-display dimensions",
          "Shutter type, controls and interface with fire systems",
          "Fixing into facade or common-property elements",
          "Lighting, wiring and timer requirements",
          "Mall sightline, transparency and display-zone rules",
        ],
      },
      {
        title: "Noise, vibration, fumes, waste and hazardous materials",
        paragraphs: [
          "Some businesses create operational impacts that are not obvious from the floor plan. Workshops, gyms, studios, laboratories, cleaning stores, food premises and light-industrial operations may generate noise, vibration, fumes, odour, trade effluent or hazardous waste.",
          "NEA (National Environment Agency), PUB, SCDF, the industrial landlord and workplace-safety requirements may all become relevant depending on the activity and material involved.",
          "The intended operations should be described honestly before the lease is signed. Calling a workshop a general office or describing chemical storage as ordinary supplies can lead to rejected submissions, enforcement risk or an unusable unit.",
        ],
        bullets: [
          "Noise and vibration transfer to neighbouring units",
          "Fumes, odour and exhaust discharge",
          "Trade effluent and used-water discharge",
          "Chemical, battery, gas-cylinder or flammable storage",
          "Waste collection, pest control and housekeeping space",
        ],
      },
      {
        title: "Stage 6: Before opening—complete inspections, documents and operating requirements",
        paragraphs: [
          "Physical completion does not always mean the business can open. The building may require a final inspection, system testing, updated as-built information, proof of certified work and rectification of damage to common areas.",
          "Certain trades also require separate operating licences, inspections or clearances. These should be planned alongside renovation rather than started only after the contractor hands over.",
          "The opening date should be confirmed only after the remaining building, authority, professional and trade-specific conditions are understood.",
        ],
        bullets: [
          "Building-management final inspection",
          "Testing and certification of regulated systems",
          "As-built drawings or completion documents where required",
          "Rectification and renovation-deposit release",
          "Trade-specific licence or inspection before operation",
          "Final handover, staff setup and opening preparation",
        ],
      },
      {
        title: "How much time should you prepare before taking over the unit?",
        paragraphs: [
          "The ranges below are practical planning allowances, not official processing guarantees. Some stages can overlap when the design is ready and the parties respond quickly; others can extend when the unit is unsuitable, drawings are revised or several regulators are involved.",
          "The total window should include feasibility checks, design, landlord review, authority or professional submissions, pre-start documents, construction, testing, inspection and operating-licence clearance where applicable.",
          "For lease planning, use the higher end of the range until the actual unit, trade, fit-out guide and technical scope have been reviewed.",
        ],
        bullets: [
          "Simple office or cleaning-company office: allow about 7–14 weeks from confirmed brief to practical move-in.",
          "Retail shop: allow about 9–18 weeks where shopfront approval, mall rules and nominated contractors apply.",
          "F&B outlet: allow about 16–32 weeks where kitchen services, SFA licensing, exhaust, drainage and fire-safety coordination are required.",
          "Clinic or healthcare premises: allow about 14–32 weeks where HCSA licensing, room requirements, specialist services and inspections apply.",
          "Industrial, warehouse or workshop: allow about 9–26 weeks depending on approved use, equipment data, loading, ventilation and landlord consent.",
          "Childcare, preschool or another highly regulated use: allow about 18–40 weeks where premises approval and operating-licence conditions must be satisfied.",
        ],
        scenario:
          "These ranges begin when the business brief and required information are substantially ready. If the operator is still deciding the menu, medical services, equipment list or number of rooms, the programme has not truly started.",
      },
      {
        title: "How the rent-free fitting-out period should be assessed",
        paragraphs: [
          "A one-month rent-free period does not automatically mean the unit can open within one month. The free-rent clock may start from possession, while the contractor may still be waiting for final drawings, management comments, authority submissions, deposits or the work permit.",
          "Before accepting the lease dates, separate the programme into three blocks: work that can be completed before possession, work that requires access to the unit, and clearance that may continue after physical construction.",
          "Negotiate using the whole opening programme—not only the number of construction weeks. Where the landlord will not extend the fitting-out period, the tenant should understand the likely rent exposure and include it in the business-opening budget.",
        ],
        bullets: [
          "Pre-possession: use check, fit-out-guide review, site survey where permitted, concept design, equipment schedule and preliminary specialist advice",
          "After possession but before work permit: measured survey, coordinated drawings, management submission, insurance, deposit and contractor registration",
          "Construction: protection, demolition, M&E, partitions, ceiling, finishes, carpentry, equipment installation and testing",
          "Post-construction: final inspection, rectification, as-built documents, licensing inspection, staff setup and opening preparation",
        ],
        scenario:
          "Example: the landlord grants four rent-free weeks. The project needs three weeks for final submission and work-permit clearance after takeover, six weeks of construction and one week for testing and inspection. The real opening window is about ten weeks after takeover, leaving roughly six weeks of rent payable before trading begins.",
        link: {
          to: "/insights/commercial-renovation-cost-singapore",
          label: "Plan the renovation and pre-opening budget",
        },
      },
      {
        title: "Work backwards from the opening date—not forwards from key collection",
        paragraphs: [
          "Start with the date the business must be operational, then work backwards through final licensing, inspection, testing, equipment commissioning, construction, approvals, design and feasibility.",
          "Add contingency for at least one meaningful revision cycle. Commercial projects often lose time not because the first submission is unusually slow, but because information changes after the first submission.",
          "Do not commit staff start dates, marketing launches, stock delivery or customer appointments to the most optimistic programme. Use a confirmed programme with decision deadlines and named responsibilities.",
        ],
        bullets: [
          "Target soft-opening or operational date",
          "Licensing, final inspection and rectification allowance",
          "Testing, commissioning, cleaning and staff setup",
          "Physical renovation and equipment installation",
          "Management and authority approval allowance",
          "Design, feasibility and lease-negotiation period",
        ],
      },
      {
        title: "What experienced consultant-level guidance should look like",
        paragraphs: [
          "Good approval advice should not stop at naming authorities. It should convert the regulator’s requirement into a decision about the lease, design, budget, programme or opening sequence.",
          "For every major risk, the project team should explain three things: what must be done, why it matters, and what happens if it is ignored. This gives the business owner enough information to make a commercial decision rather than simply receive a technical warning.",
          "The strongest consultant is not the person who promises that every approval can be handled easily. It is the person who identifies uncertainty early, states which specialist is required, shows the likely programme effect and helps the tenant decide whether to proceed, redesign or choose another unit.",
        ],
        bullets: [
          "Translate regulatory triggers into lease and opening consequences",
          "Separate confirmed requirements from assumptions and unknowns",
          "State who is responsible for every submission and inspection",
          "Show approval, construction and licensing dependencies in one programme",
          "Advise when the better decision is to reject the unit or change the concept",
        ],
      },
      {
        title: "Who is responsible for commercial renovation approvals?",
        paragraphs: [
          "The tenant remains responsible for lawful use of the premises and for obtaining the licences needed to operate the business. The landlord or building management controls compliance with the property’s rules. Registered professionals and licensed specialists handle submissions or certifications that legally require their involvement.",
          "The renovation contractor can coordinate drawings, documents, nominated contractors, specialists and the site programme, but should not claim to replace a registered architect, engineer or licensed professional.",
          "Before signing the renovation contract, confirm who prepares each drawing, who submits it, who pays the fees, who responds to comments and who arranges the final inspection.",
        ],
      },
      {
        title: "How ID Work Studio helps coordinate the process",
        paragraphs: [
          "Business owners usually want one team to connect the unit, business use, landlord requirements, approvals, renovation and opening programme.",
          "ID Work Studio can review the unit, intended trade, fit-out guide, proposed layout and target opening date, then coordinate the renovation scope, management submissions, relevant specialists, nominated contractors and site sequence.",
          "Where regulated work requires a registered professional or licensed specialist, ID Work Studio coordinates with the appropriate party and keeps the requirement visible in the programme and quotation.",
        ],
        link: {
          to: "/commercial",
          label: "Explore ID Work Studio’s commercial renovation services",
        },
      },
      {
        title: "Plan reinstatement before the first renovation decision",
        paragraphs: [
          "The lease may require the unit to be returned to its original or landlord-specified condition when the tenancy ends.",
          "Record the original handover condition, approved alterations and items the landlord agrees may remain. Design decisions made at the beginning can materially affect the future reinstatement cost and exit programme.",
        ],
        link: {
          to: "/commercial/reinstatement",
          label: "Understand commercial reinstatement requirements",
        },
      },
    ],
    comparisonTitle: "How approval risks differ by project type",
    comparisonIntro:
      "The table below is not a complete legal checklist. It shows why different commercial projects should not be planned with the same assumptions.",
    comparisonRows: [
      {
        project: "Office",
        mainChecks: "Landlord approval, partitions, fire safety, air-conditioning, electrical/data and headcount",
        timelineRisk: "Late room changes, coordinated-drawing revisions and IT or furniture move-in",
      },
      {
        project: "Retail shop",
        mainChecks: "Shopfront, signage, mall design rules, lighting, shutters and nominated contractors",
        timelineRisk: "Repeated concept approval, after-hours works and fabrication before final approval",
      },
      {
        project: "F&B",
        mainChecks: "SFA layout and licence, exhaust, grease trap, drainage, equipment, power and SCDF",
        timelineRisk: "Unsuitable unit, kitchen redesign, service upgrades and pre-licensing inspection",
      },
      {
        project: "Clinic / healthcare",
        mainChecks: "HCSA service licence, room functions, patient flow, infection control and specialist systems",
        timelineRisk: "Service scope changes, licensing review, inspection and equipment coordination",
      },
      {
        project: "Cleaning business",
        mainChecks: "NEA Cleaning Business Licence plus office, storage, chemical and fire-safety requirements",
        timelineRisk: "Confusing the business licence with premises approval or unsuitable storage use",
      },
      {
        project: "Industrial / warehouse",
        mainChecks: "Approved use, equipment loading, power, ventilation, discharge, fire safety and landlord consent",
        timelineRisk: "Late equipment data, structural review and operational restrictions",
      },
      {
        project: "Childcare / preschool",
        mainChecks: "ECDA licence, premises suitability, child safety, toilets, fire safety and operating layout",
        timelineRisk: "Committing to a unit before licensing and premises requirements are confirmed",
      },
      {
        project: "Beauty / wellness / gym",
        mainChecks: "Actual service, approved use, sector licence where applicable, wet areas, ventilation and noise",
        timelineRisk: "Misclassifying medical or massage services and underestimating fit-out requirements",
      },
    ],
    reviewCtaTitle: "Before you sign or take over, let us review the unit against your opening plan",
    reviewCtaText:
      "Send the floor plan, latest fit-out guide, intended trade, proposed takeover date, target opening date and major equipment list. ID Work Studio can identify obvious feasibility concerns, likely approval stages, missing information and programme risks before you lock in the renovation scope or lease timeline.",
    reviewCtaPrimary: "Review My Unit Before I Commit",
    reviewCtaSecondary: "See How We Handle Commercial Projects",
    timelineTitle: "From lease planning to business opening: the full project sequence",
    timelineIntro:
      "Use this sequence to work backwards from the intended opening date. The phase allowances below are planning guides, not guaranteed approval times, and several stages may overlap when information is complete.",
    timeline: [
      {
        step: "1",
        title: "Check the unit and business use",
        text:
          "Planning allowance: about 1–3 weeks before lease commitment. Confirm permitted use, landlord acceptance, power, air-conditioning, exhaust, drainage, signage and trade feasibility.",
      },
      {
        step: "2",
        title: "Prepare the design and technical drawings",
        text:
          "Planning allowance: about 2–6 weeks depending on complexity. Freeze the operating brief, equipment and layout, then coordinate electrical, air-conditioning, plumbing, fire-safety and structural drawings.",
      },
      {
        step: "3",
        title: "Submit to building management",
        text:
          "Planning allowance: commonly 1–4 weeks, excluding major redesign. The landlord or MCST reviews the proposal against the building’s fit-out guide and may request revisions.",
      },
      {
        step: "4",
        title: "Obtain other approvals where required",
        text:
          "Planning allowance: about 2–12+ weeks depending on the trigger and completeness of submission. Registered professionals or authorities review regulated works and trade requirements.",
      },
      {
        step: "5",
        title: "Complete pre-start requirements",
        text:
          "Planning allowance: several working days to about 2 weeks. Submit insurance, deposits, contractor registration, risk documents and applications for temporary services or specialist work.",
      },
      {
        step: "6",
        title: "Receive permission to start",
        text:
          "Do not schedule demolition until the permit is issued. Confirm approved working hours, nominated contractors, service bookings and conditions attached to the permit.",
      },
      {
        step: "7",
        title: "Renovate, test and inspect",
        text:
          "Construction allowance varies by trade: roughly 4–8 weeks for a simple office and considerably longer for retail, F&B, healthcare or technically complex premises. Test systems and arrange inspections.",
      },
      {
        step: "8",
        title: "Handover and move in",
        text:
          "Planning allowance: about 1–8+ weeks depending on defects, licensing and inspections. Submit completion documents, rectify outstanding items and confirm lawful readiness to open.",
      },
    ],
    mistakesTitle: "Common failure scenarios and what an experienced project team should do",
    mistakes: [
      {
        title: "The lease is signed before feasibility is checked",
        text:
          "The tenant later discovers that the unit cannot support the intended use, exhaust, drainage, power load, signage or licensing route. The correct response is to pause design commitment, verify the use and building constraints, and quantify whether the concept must change before more cost is incurred.",
      },
      {
        title: "The rent-free period is treated as the project duration",
        text:
          "Management review, authority submissions and work-permit clearance consume the free-rent period before construction begins. The project team should separate pre-possession, approval, construction and post-construction stages and show the likely rent exposure before the lease dates are accepted.",
      },
      {
        title: "A layout is frozen before fire-safety coordination",
        text:
          "Rooms, corridors, doors, ceilings and equipment are designed first, then SCDF-related implications are checked later. The correct approach is to coordinate partitions, escape routes, sprinklers, detectors, alarms, emergency lighting and ventilation before the layout is released for construction.",
      },
      {
        title: "Equipment is ordered before capacity is verified",
        text:
          "The unit cannot support the electrical load, exhaust, drainage, structural weight or access route. An experienced team requests the equipment schedule early, checks each major item against the unit and delays procurement until the required services and approvals are confirmed.",
      },
      {
        title: "The landlord’s approval is mistaken for authority approval",
        text:
          "The design is accepted by management, but regulated work or the operating licence remains outstanding. The project team should maintain a live approval register showing landlord, QP, authority, licensed specialist and trade-licence responsibilities separately.",
      },
      {
        title: "The authority process is left entirely to the contractor",
        text:
          "The contractor is expected to solve matters that legally require a QP, PE, RI, LEW, Licensed Plumber or sector applicant. The contract should state who is appointed, who submits, who pays, who responds to comments and what happens if the regulator requires additional work.",
      },
      {
        title: "Late business decisions force redesign",
        text:
          "The menu, medical services, equipment list, headcount, storage method or number of rooms changes after submissions begin. The project team should define decision deadlines and explain that changes after those dates may affect drawings, approval status, cost and opening.",
      },
      {
        title: "The cheapest quotation excludes the approval burden",
        text:
          "Consultant fees, nominated contractors, system shutdowns, testing, insurance, deposits and authority-related works appear later as separate costs. Quotations should be compared on total project responsibility, not only the visible construction subtotal.",
      },
      {
        title: "Construction finishes but the business still cannot open",
        text:
          "Final inspection, certification, as-built documents, defect rectification or the operating licence remains incomplete. The opening checklist should be managed from the start of the project and not introduced only after handover.",
      },
      {
        title: "Reinstatement is ignored during the first fit-out",
        text:
          "The tenant installs extensive partitions, services and finishes without understanding the future lease-exit obligation. An experienced team records the original condition, keeps approved drawings and highlights design decisions that will increase future reinstatement cost.",
      },
    ],
    relatedKnowledgeTitle: "Continue your commercial renovation decision journey",
    relatedKnowledgeIntro:
      "Use the next guide that matches your current decision. These links connect approval planning with cost, timeline, execution, proof of experience and eventual lease exit.",
    relatedKnowledge: [
      {
        title: "Commercial renovation cost",
        description:
          "Understand realistic commercial fit-out costs, approval-related expenses, hidden items and budget risks before comparing quotations.",
        to: "/insights/commercial-renovation-cost-singapore",
        label: "Read the commercial cost guide",
      },
      {
        title: "Office renovation timeline",
        description:
          "See how design, landlord review, approvals, construction, testing and move-in are sequenced for an office project.",
        to: "/insights/office-renovation-timeline-singapore",
        label: "Plan the office timeline",
      },
      {
        title: "Office renovation service",
        description:
          "Review how ID Work Studio plans and delivers office fit-outs, including coordination of layout, services and building requirements.",
        to: "/commercial/office-renovation",
        label: "Explore office renovation",
      },
      {
        title: "Commercial reinstatement",
        description:
          "Understand the future lease-exit obligation before deciding which partitions, services, finishes and alterations to install now.",
        to: "/commercial/reinstatement",
        label: "Review reinstatement requirements",
      },
      {
        title: "Commercial project portfolio",
        description:
          "See completed commercial and residential work before deciding whether ID Work Studio is suitable for your project.",
        to: "/gallery",
        label: "View the project portfolio",
      },
      {
        title: "Commercial Renovation Planner",
        description:
          "Answer a few project questions to identify likely approval, permit, landlord and planning requirements before you commit.",
        to: "/commercial-renovation-planner",
        label: "Open the commercial planner",
      },
      {
        title: "Commercial project review",
        description:
          "Share the unit, fit-out guide, intended trade, target takeover date and opening plan for an initial feasibility discussion.",
        to: "/contact",
        label: "Request a project review",
      },
    ],
    trustTitle: "What you should receive from a proper commercial project review",
    trustIntro:
      "A useful review should reduce uncertainty before you spend heavily. It should not be a vague promise that every permit is easy or that every unit can be made suitable.",
    trustPoints: [
      {
        title: "A feasibility view of the actual unit",
        text:
          "The review should connect the intended trade with the unit’s approved use, landlord rules, services, exhaust, drainage, power, loading and other obvious constraints.",
      },
      {
        title: "A clear approval and responsibility map",
        text:
          "You should know which matters sit with the landlord, authority, QP, PE, RI, LEW, Licensed Plumber, specialist contractor or business-licence applicant.",
      },
      {
        title: "A realistic programme tied to the opening date",
        text:
          "The programme should separate design, approval, work-permit, construction, testing, inspection and licensing instead of quoting construction weeks alone.",
      },
      {
        title: "Visible assumptions, exclusions and unknowns",
        text:
          "Unconfirmed requirements should be stated openly. A trustworthy team does not hide unresolved authority, service-capacity or landlord issues inside a low initial quotation.",
      },
    ],
    trustNote:
      "ID Work Studio coordinates renovation planning, management submissions, specialists and site execution. Where law or regulation requires a registered professional, licensed person or authority approval, that role remains with the appropriate qualified party. We do not present contractor coordination as a substitute for statutory approval.",
    faqTitle: "Frequently asked questions",
    faqs: [
      {
        question: "Do I need a permit for commercial renovation in Singapore?",
        answer:
          "Usually, you need written approval from the landlord or building management before work starts. Additional authority or professional approval depends on the unit, business use and renovation scope.",
      },
      {
        question: "How long does commercial renovation take in Singapore?",
        answer:
          "It depends on the project. The total programme should include design, approvals, construction, testing and handover. A straightforward office is usually faster than an F&B, clinic or technically complex project.",
      },
      {
        question: "Is landlord approval enough to start renovation?",
        answer:
          "Not always. The building may also require insurance, deposits, contractor registration and a work permit. Certain works may need separate authority or professional approval.",
      },
      {
        question: "Does every office renovation need SCDF approval?",
        answer:
          "No. The Singapore Civil Defence Force (SCDF) becomes relevant when the work affects fire safety, such as escape routes, fire-rated partitions, sprinklers, alarms or the approved use of the premises.",
      },
      {
        question: "What is a Qualified Person?",
        answer:
          "A Qualified Person (QP) is a registered architect or engineer authorised to prepare and submit certain regulated drawings. Not every renovation needs one.",
      },
      {
        question: "What is a Licensed Electrical Worker?",
        answer:
          "A Licensed Electrical Worker (LEW) is a licensed professional responsible for certain electrical design, testing, certification and supply-turn-on work.",
      },
      {
        question: "Can renovation begin while approval is pending?",
        answer:
          "Do not assume so. Many building manuals state that work can only start after all required approvals, insurance, deposits and permits are in place.",
      },
      {
        question: "What is a fit-out work permit?",
        answer:
          "It is the building management’s formal permission for the contractor to begin approved renovation work. Drawing approval alone may not be enough.",
      },
      {
        question: "What is a variation order?",
        answer:
          "A variation order is a formal change to the agreed renovation scope. It records the additional or reduced work and any effect on price or completion date.",
      },
      {
        question: "What costs may be excluded from the quotation?",
        answer:
          "Possible exclusions include consultant fees, authority fees, management deposits, insurance, nominated contractors, electrical upgrading, specialist testing and after-hours work.",
      },
      {
        question: "Can I move in as soon as construction finishes?",
        answer:
          "Not always. The building may require inspection, testing, updated drawings and completion documents. Some businesses also need operating licences before opening.",
      },
      {
        question: "How much time should I allow for approvals before commercial renovation starts?",
        answer:
          "For planning, allow about 1 to 4 weeks for landlord or MCST review and about 2 to 12 weeks or more for authority or professional approvals where triggered. These stages may overlap, but incomplete drawings, unsuitable premises or revisions can extend the programme.",
      },
      {
        question: "Is one month of rent-free fitting-out usually enough?",
        answer:
          "Not always. A one-month rent-free period may be partly consumed by measurement, coordinated drawings, management review, insurance, deposits and work-permit clearance before construction starts. The lease should be assessed against the full opening programme, not construction time alone.",
      },
      {
        question: "What approvals commonly apply to an F&B renovation?",
        answer:
          "An F&B project may involve landlord approval, permitted-use checks, SCDF fire-safety coordination, SFA food-shop licensing, kitchen layout review, exhaust, drainage, grease traps, electrical load, gas and pre-opening inspection. The exact path depends on the unit, menu and cooking method.",
      },
      {
        question: "Does a cleaning business need renovation approval?",
        answer:
          "The NEA Cleaning Business Licence and premises approval are separate matters. A simple administrative office may follow a normal office pathway, while chemical, battery, machinery or equipment storage can trigger additional use, fire-safety, ventilation and landlord requirements.",
      },
      {
        question: "Can ID Work Studio handle the submissions?",
        answer:
          "ID Work Studio can coordinate renovation drawings, management requirements, specialists and the project programme. Where a regulated submission requires a Qualified Person, Professional Engineer, Registered Inspector, Licensed Electrical Worker, Licensed Plumber or another licensed party, we coordinate with the appropriate professional.",
      },
    ],
    assuranceEyebrow: "You do not have to work this out alone",
    assuranceTitle: "Commercial approvals can feel overwhelming—but uncertainty at this stage is normal",
    assuranceText: [
      "Commercial renovation can involve the landlord, building management, consultants, licensed specialists and different authorities. It is understandable to be unsure which requirements apply or what should happen first.",
      "The important step is not to guess. Use the Commercial Renovation Planner to organise the likely approval pathway, then let us review the actual unit, fit-out guide and intended business where the remaining uncertainties need professional verification.",
      "A short discussion before you commit can help prevent avoidable redesign, approval delays, unexpected costs and rent being paid while the business is still unable to open.",
    ],
    assurancePlannerLabel: "Open Commercial Renovation Planner",
    assuranceContactLabel: "Let Us Help Review the Project",
    ctaTitle: "Send us the unit information before approval risk becomes paid rent",
    ctaText:
      "Share the floor plan, fit-out guide, intended trade, equipment list, proposed takeover date and target opening date. We will review the commercial renovation scope, identify the likely approval and specialist dependencies, and explain the main cost and programme risks before you commit to the final works.",
    ctaPrimary: "Send My Project for Review",
    ctaSecondary: "View Commercial Renovation Services",
    breadcrumbCurrent: "Commercial Renovation Approvals",
  },
  zh: {
    metaTitle:
      "新加坡商业装修审批与开工要求（2026）| ID Work Studio",
    metaDescription:
      "签商业租约前规划装修审批，了解 SCDF、SFA、URA、BCA、管理处要求、行业执照、审批时间与免租期风险。",
    canonical:
      "https://idworkstudio.com/insights/commercial-renovation-approvals-singapore",
    eyebrow: "新加坡商业装修指南",
    title: "新加坡商业装修审批：开工前需要完成什么？",
    subtitle:
      "规划时应从签约一路看到正式开业，而不只是计算现场施工。确认接管日期前，应先检查单位、营业类型、审批路径、业主要求和装修范围。",
    readTime: "约55分钟阅读",
    category: "商业装修",
    quickAnswerTitle: "快速答案",
    quickAnswer:
      "签约或接管商业单位前，应从目标开业日期倒推。先确认单位能否支持计划中的业务，索取最新的业主或大厦装修指南，识别可能涉及的审批路径，为设计与提交预留时间，再加上现场装修和最终检查。不要假设免租装修期一定足够；如果审批占用了其中一部分，租户可能在工程或营业执照尚未完成前就开始付租。",
    summaryCards: [
      {
        label: "签租约之前",
        value: "先检查可行性",
        note:
          "确认单位、批准用途、大厦系统和业主条件，再决定接管与开业日期。",
      },
      {
        label: "接管之前",
        value: "建立完整时间表",
        note:
          "应包括设计、提交、修改、装修、测试、检查，以及行业所需的营业执照。",
      },
      {
        label: "免租装修期",
        value: "不要假设一定足够",
        note:
          "审批可能在实体施工开始前，就已经占用部分免租装修时间。",
      },
      {
        label: "最先索取的文件",
        value: "最新装修指南",
        note:
          "设计与报价定案前，先索取当前业主或管理处的正式要求。",
      },
    ],
    sections: [
      {
        title: "阶段一：签租约之前——先确认单位是否适合经营该业务",
        paragraphs: [
          "识别审批风险的最佳时间，是签租约之前，而不是拿到钥匙之后。首先应检查计划中的营业用途、单位目前的批准用途、现有电力负荷、空调、排水、排气条件、结构限制、招牌条件和业主装修要求。",
          "一个单位看起来合适，并不代表改造一定简单或经济。租金较低、地点理想，也无法弥补无法提供合规排气路线、电力不足、店面规定严格，或营业用途需要额外审核的问题。",
          "真正要判断的，不只是单位能否装修，而是能否在预算和商业时间内完成装修、审批并正式开业。",
        ],
        bullets: [
          "索取最新的业主或管理处装修指南",
          "确认单位当前批准用途与计划营业用途",
          "检查电力、空调、供水、排水、排气和装卸需求",
          "识别可能涉及的消防、建筑或行业执照要求",
          "接受租约前先查看恢复原状责任",
        ],
        scenario:
          "例子：餐厅经营者因租金吸引而签下单位，之后才发现无法设置合规的厨房排气路线。此时问题已不只是装修细节，而是该业务能否在单位内合法经营。",
        link: {
          to: "/commercial",
          label: "签租约前先审核实际单位",
        },
      },
      {
        title: "阶段二：同意接管日期之前——规划完整审批与装修时间",
        paragraphs: [
          "不要只从现场施工时间来规划。应从目标开业日期倒推，并包括可行性检查、设计深化、业主审核、需要时的政府或专业提交、图纸修改、实体装修、测试、最终检查和营业执照。",
          "免租装修期是一项商业谈判，并不代表项目一定能在期限内完成。如果管理处或政府审批需要数周，免租期可能在拆除或隔间工程开始前就已经过去一部分。",
          "接受接管日期前，应先取得一份现实时间表，说明哪些工作可在接管前进行、哪些必须接管后才开始，以及哪些步骤可以同步处理。",
        ],
        bullets: [
          "目标开业日期",
          "营业用途与现场可行性审核",
          "设计与图纸准备",
          "业主、管理委员会（Management Corporation Strata Title，简称 MCST）或管理处审核",
          "触发时所需的政府与专业提交",
          "装修、测试、检查和营业执照",
        ],
        scenario:
          "例子：业主提供一个月免租装修期，但图纸准备与管理处审核用了三周。租户只剩约一周免租时间进行现场施工，并可能在正式开业前就开始付租。",
        link: {
          to: "/insights/office-renovation-timeline-singapore",
          label: "查看办公室装修时间如何规划",
        },
      },
      {
        title: "阶段三：取得单位后——收集真正控制项目的文件",
        paragraphs: [
          "取得单位后，应索取最新装修指南、现有批准图纸（如有）、交付状况、业主联络名单、指定承包商要求、保险额度、保证金条件、施工时间、装卸规定和货梯程序。",
          "装修指南会直接影响设计、费用和时间。它可能规定店面外观、噪音施工时间、保护工程、消防系统停用、天花检修、材料限制、承包商登记和最终检查。",
          "不要用其他大厦的指南代替。当前物业的有效规定，才是这个项目必须遵守的标准。",
        ],
        bullets: [
          "最新装修或施工指南",
          "交付图纸与现有系统资料",
          "装修保证金和保险要求",
          "允许施工时间与噪音限制",
          "指定承包商和专业工程预约程序",
          "最终检查与保证金退还条件",
        ],
      },
      {
        title: "阶段四：规划审批——新加坡没有一张统一的商业装修准证",
        paragraphs: [
          "不同审批处理不同问题。有的检查营业用途是否允许，有的检查消防安全，业主或管理处检查物业本身规定，而部分受监管工程需要专业人士设计、提交或认证。",
          "一项批准不能代替另一项。业主接受设计，并不代表政府要求自动免除；取得政府批准，也不代表管理处必须接受违反装修指南的工程。",
          "项目团队应建立审批地图：哪些事项需要批准、由谁负责、需要什么资料、哪些步骤可以同步，以及哪些事项必须在开工前完成。",
        ],
        bullets: [
          "营业用途与规划可行性",
          "业主、MCST 或管理处批准",
          "触发时所需的政府部门批准",
          "专业设计、提交或认证",
          "保险、保证金、承包商登记和施工准证",
          "开业前检查或行业营业执照",
        ],
      },
      {
        title: "商家需要了解的四类审批",
        paragraphs: [
          "把要求分成四个实际类别，会更容易管理整个审批过程。",
        ],
        bullets: [
          "业主或大厦批准：业主、房东、MCST 或管理处检查方案是否符合物业规定。",
          "政府批准：根据营业类型和工程，相关部门可能审核规划用途、建筑工程、消防、电气、给排水、环境事项或营业执照。",
          "专业审核：部分工程必须由注册建筑师、工程师或持牌专业人士准备、检查、提交或认证。",
          "现场开工许可：即使图纸获接受，管理处仍可能要求保险、保证金、承包商登记和正式装修施工准证。",
        ],
      },
      {
        title: "政府部门地图：新加坡不同监管机构分别负责什么？",
        paragraphs: [
          "商业装修不是由单一部门管理。不同监管机构分别检查不同风险：营业用途是否允许、建筑工程是否安全、消防系统是否合规、餐饮场所是否符合卫生要求、电气与给排水系统是否适用，以及商家是否可以合法开业。",
          "项目团队应在租约、布局和开业日期定案前识别相关部门。以下是触发条件地图，并不代表每个项目都需要所有批准。",
        ],
        bullets: [
          "URA（Urban Redevelopment Authority，市区重建局）：检查计划中的营业用途是否允许，以及是否需要用途更改申请或简化申报。",
          "BCA（Building and Construction Authority，建设局）：涉及建筑图、结构工程、部分加建改建工程、无障碍要求及其他受监管建筑工程时可能介入。",
          "SCDF（Singapore Civil Defence Force，新加坡民防部队）：审核影响逃生路线、防火分区、防火构造、喷淋、火警、排烟或机械通风的消防安全工程。",
          "SFA（Singapore Food Agency，新加坡食品局）：负责餐饮店、摊位、食品制造或储存场所的执照，并在批准前审核提交的布局和营运设置。",
          "NEA（National Environment Agency，国家环境局）：可能涉及环境卫生、厨房排气、通风、污染、噪音、废物及其他环境控制事项。",
          "PUB（Singapore’s National Water Agency，新加坡国家水务局）：负责供水、卫生水喉、污水、废水排放和隔油池要求。",
          "EMA（Energy Market Authority，能源市场管理局）：监管电气人员与电气或供电装置；受监管电气工程必须由适当级别的 LEW（Licensed Electrical Worker，持牌电气人员）负责。",
          "MOH（Ministry of Health，卫生部）：根据 HCSA（Healthcare Services Act，医疗服务法）监管医疗服务；提供受监管医疗服务前必须取得相关执照。",
          "JTC（JTC Corporation，裕廊集团）、HDB（Housing & Development Board，建屋发展局）、业主或 MCST（Management Corporation Strata Title，分层地契管理机构）：可能另有物业、租约、用途和装修批准要求。",
        ],
      },
      {
        title: "SCDF：消防审批应在施工前影响布局，而不是完工后才处理",
        paragraphs: [
          "SCDF（Singapore Civil Defence Force，新加坡民防部队）经常是办公室、零售、诊所、餐饮及其他装修项目最重要的监管机构之一，因为布局会影响人员如何逃生，以及消防系统如何覆盖整个单位。",
          "新增隔间不只是室内设计项目。根据位置和构造，它可能影响逃生距离、出口通道、防火分区、人员动线、喷淋覆盖、烟感器、火警装置、紧急照明、空调和机械通风。因此，在布局定案前必须检查消防影响。",
          "当拟议消防安全工程需要提交时，图纸应由相关 QP（Qualified Person，合格专业人士）准备并提交，即具备适当专业资格的注册建筑师或专业工程师。部分完工项目还可能需要 RI（Registered Inspector，注册检查员）检查与认证，之后才能申请消防安全证书或临时消防准证。",
          "实际时间规划上，应在设计阶段完成消防协调，而不是隔间已经建好后才处理。后期 SCDF 相关修改可能同时影响多个工种，并消耗免租装修期。",
        ],
        bullets: [
          "检查新房间是否改变逃生路线或逃生距离",
          "把喷淋、烟感器和火警覆盖与最终天花和隔间图一起协调",
          "确认是否需要防火墙、防火门或防火封堵",
          "确认机械通风、排烟或厨房排气是否影响消防提交",
          "在确认开业日期前识别 QP、专业承包商及可能的 RI 要求",
        ],
        scenario:
          "例子：办公室在第一版布局获批后增加多个封闭会议室。新隔间影响喷淋和烟感器位置，需要重新协调消防图纸。即使木作已经准备好，图纸、专业报价和审批更新仍可能推迟工程。",
      },
      {
        title: "SFA、NEA 与 PUB：餐饮审批必须从厨房布局开始",
        paragraphs: [
          "对于 F&B（Food and Beverage，餐饮）项目，厨房、食品准备区、清洗区、排气、排水、油脂处理和设备位置，不能等装修后才解决。这些项目直接关系执照和技术审核。",
          "SFA（Singapore Food Agency，新加坡食品局）会审核餐饮店申请和场所布局，并在最终批准前进行开业前检查。SFA 批准申请后，经营者才按提交的布局装修和设置场所。因此，后期更改厨房或设备位置可能导致返工，或需要更新执照资料。",
          "NEA（National Environment Agency，国家环境局）的要求可能影响厨房排气、通风及环境卫生设计。PUB（Singapore’s National Water Agency，新加坡国家水务局）的要求涉及卫生水喉、废水和隔油池。PUB 现行污水与卫生工程规范要求餐饮店和食品加工场所设置隔油池，只有少数情况可在获得 PUB 允许后例外处理。",
          "签署餐饮租约前，应确认单位是否能够提供可接受的排气路线、排水、隔油池、供水、电力负荷和厨房工作流程。租金再吸引，也无法弥补一个不能支持营运的单位。",
        ],
        bullets: [
          "尽早准备按比例绘制的厨房和设备布局",
          "签租约前确认排气出口的可行性",
          "检查排水坡度、卫生接驳和隔油池位置",
          "协调烹饪设备、电力负荷、燃气与消防系统",
          "为布局审核、装修、设备设置和开业前检查预留时间",
        ],
        scenario:
          "例子：咖啡店签租约时以为循环过滤式烟罩可以接受，但实际菜单和烹饪方式需要合规排气。如果单位没有合适排气路线，经营概念、布局，甚至所选单位都可能必须改变。",
      },
      {
        title: "URA、BCA、EMA、MOH、JTC 与 HDB：其他可能阻止施工或延迟开业的触发点",
        paragraphs: [
          "当计划中的行业与单位当前批准用途不同时，应检查 URA（Urban Redevelopment Authority，市区重建局）要求。URA 明确建议商家在承诺租约或开始装修前，先确认是否需要规划许可。部分符合条件的用途改变可使用简化申报，其他情况则需要正式用途更改申请。",
          "当工程涉及受监管建筑或结构项目时，BCA（Building and Construction Authority，建设局）可能介入。部分小型工程无需 BCA 批准，但结构改变、特定建筑图事项及加建改建工程可能需要通过 QP 提交图纸与申请准证。",
          "EMA（Energy Market Authority，能源市场管理局）监管 LEW（Licensed Electrical Worker，持牌电气人员）。新布线、重布线、线路延伸、提高负荷及电气或供电装置，必须由适当持牌人员处理、检查和测试。在确认现有电力容量前，不应购买大型设备。",
          "医疗经营者必须考虑 MOH（Ministry of Health，卫生部）根据 HCSA（Healthcare Services Act，医疗服务法）实施的执照制度。执照跟随所提供的受监管医疗服务，因此诊所项目必须让服务类型、场所设计、营运要求和开业批准相互配合，而不是把办公室装修好后就假设可以作为诊所营业。",
          "工业单位可能需要 JTC（JTC Corporation，裕廊集团）在装修前给予图纸同意，并同时取得相关政府部门批准。HDB（Housing & Development Board，建屋发展局）商业单位也可能需要就行业、用途及加建改建工程取得 HDB 同意或批准。",
        ],
        bullets: [
          "签租约前检查批准用途",
          "把业主同意与政府批准分开处理",
          "聘请正确的 QP、PE、LEW、持牌水喉匠或其他专业人士",
          "检查工业业主或 HDB 商业单位要求",
          "在营业执照和最终检查路径明确前，不要确认开业日期",
        ],
      },
      {
        title: "如何判断项目需要哪些审批？",
        paragraphs: [
          "先回答五个问题：单位将经营什么业务、目前批准用途是什么、计划进行哪些改动、会影响哪些大厦系统，以及最新装修指南要求什么。",
          "用途改变、新增隔间、逃生路线改变、喷淋或火警修改、电力负荷提高、给排水、排气、结构工程、重型设备、店面改动或行业营业要求，都可能形成不同审批路径。",
          "这些触发点应在报价和时间表定案前识别，让客户看见可能涉及的顾问费用、提交工作、审批时间和开业风险。",
        ],
        bullets: [
          "营业用途改变",
          "隔间、逃生路线或消防系统改动",
          "结构工程、重型设备或楼板荷载",
          "电力升级、给排水、排气或通风改变",
          "店面、招牌或公共区域工程",
          "行业执照或开业前检查",
        ],
      },
      {
        title: "管理处通常要求提交什么？",
        paragraphs: [
          "管理处通常不只需要一张平面图。不同物业要求不同，但常见资料包括布局图、天花图、电气图、空调图、喷淋图、承包商资料、保险和施工时间表。",
          "商场可能控制店面、招牌、卷闸和入口区域；工业物业可能关注机器重量、震动、排气和电力负荷；办公室则常重点审核隔间、消防、空调和电力分配。",
          "设计定案前，必须先查看实际单位当前有效的装修指南。",
        ],
      },
      {
        title: "阶段五：装修期间——保护已批准范围与目标开业日期",
        paragraphs: [
          "开工后，工程应遵守获批图纸、条件和施工准证。若改动影响布局、消防、电力负荷、给排水、排气、结构或受监管设备，可能需要修改图纸、重新审批或增加专业协调。",
          "因此，后期改动不应只当作简单现场指示。变更单（Variation Order）应记录原合同范围的改变，并说明对费用与时间的影响。",
          "项目团队应根据目标开业日期追踪审批、采购、检查和客户决定，而不只是追踪现场完工日期。",
        ],
        bullets: [
          "现场保留获批图纸",
          "记录政府、管理处与专业工程条件",
          "改动受监管工程前先确认审批影响",
          "安装相关系统前确认设备规格",
          "工程范围、费用或时间变化使用变更单记录",
        ],
      },
      {
        title: "商业装修通常为什么延误？",
        paragraphs: [
          "审批不是唯一延误来源。后期设计决定、设备资料不足、文件不完整、材料更换和工作时间限制，同样会严重影响施工顺序。",
          "电气、空调和消防协调完成后才移动房间，可能需要修改图纸、重新计算数量和返工。租户看来只是小改动，但可能同时影响多个工种和审批记录。",
          "现实时间表应为意见回复、重新提交、专业工程预约和整改预留时间，而不是假设所有提交第一次就会获接受。",
        ],
        bullets: [
          "材料或设备确认太迟",
          "提交后更改设计",
          "管理处或政府文件不完整",
          "额外意见与重新提交",
          "后期发现电力、排气、排水或结构限制",
          "施工时间受限或指定承包商档期不足",
        ],
        scenario:
          "例子：水电与排气已经协调后才更换厨房设备，可能同时影响电力、燃气、排水、排气和消防要求。延误不只是更换一台设备的订货时间。",
      },
      {
        title: "主装修报价以外的隐藏费用",
        paragraphs: [
          "商业装修总费用不只包括隔间、地板、木工和电气。完整预算还可能包括专业顾问费、申请费、装修保证金、保险、管理费、水电升级、系统停用、指定承包商、夜间施工、货梯保护和临时水电。",
          "报价应清楚区分已包含工程、排除工程、暂定项目，以及在查看装修指南或审批路径前无法确认的费用。",
          "如果审批与专业责任被遗漏，较低的施工报价未必代表较低的项目总成本。",
        ],
        link: {
          to: "/insights/commercial-renovation-cost-singapore",
          label: "查看商业装修费用指南",
        },
      },
      {
        title: "规划装修前，先确认您的行业审批路径",
        paragraphs: [
          "同一个单位，因为经营不同业务，可能面对完全不同的审批路径。小型办公室、零售店、餐厅、诊所、清洁公司和工场，不应使用同一份清单或开业时间表。",
          "第一个规划问题应是：“这个行业会触发哪些审批和执照？”答案会影响单位是否适合、需要哪些图纸、必须聘请哪些专业人士、何时可以开工，以及商家何时可以合法营业。",
          "以下路径是实用起点，并不能取代业主、监管机构或发牌部门的最新要求。",
        ],
      },
      {
        title: "办公室路径：隔间、消防、机电与搬迁协调",
        paragraphs: [
          "一般办公室通常不需要行业专属营业执照，但不代表审批简单。主要风险包括业主或 MCST 审核、SCDF 消防影响、电气与数据规划、空调分配，以及封闭房间数量。",
          "每一个会议室、经理房、电话间或储物室，都可能影响喷淋、烟感器、灯光、空调和逃生路线。最终员工人数也很重要，因为使用人数和动线应与获批布局一致。",
          "租期开始前，应取得最新装修指南，确认现有电力和空调容量，并尽早确定房间布局，以便完成协调图纸。不要只按现场施工时间安排搬迁日期。",
        ],
        bullets: [
          "业主或 MCST 装修批准",
          "工程触发消防要求时进行 SCDF 审核",
          "由 LEW 协调电力负荷、布线和测试",
          "规划空调、数据、门禁与服务器房",
          "最终检查、测试及 IT 或家具搬迁",
        ],
        scenario:
          "例子：1,500 平方英尺办公室看起来只需六周施工，但后期增加多个封闭房间，会影响喷淋、烟感器、空调和电气协调。开业计划应在六周施工前，先加入设计与审批时间。",
        link: {
          to: "/commercial/office-renovation",
          label: "了解办公室装修服务",
        },
      },
      {
        title: "零售路径：店面、招牌、商场设计规定与消防",
        paragraphs: [
          "零售店往往同时受装修设计和业主设计手册控制。商场通常限制店面、门楣、招牌、卷闸、灯光、陈列区、入口附近地面以及与公共区域衔接的工程。",
          "若布局或天花影响消防系统，零售项目也可能需要 SCDF 审核。喷淋、火警、空调、电力或招牌接驳，可能必须由商场指定或认可承包商完成。",
          "开始制作前，应先取得店面及其他受管制项目的书面设计批准。商场意见未结束前订购木作或招牌，会带来很高的返工风险。",
        ],
        bullets: [
          "商场或业主概念与技术批准",
          "店面、门楣、招牌与卷闸批准",
          "隔间或天花影响消防时进行 SCDF 协调",
          "指定承包商与夜间施工要求",
          "公共区域保护、送货及货梯预约",
        ],
      },
      {
        title: "餐饮路径：用途、厨房布局、SFA 执照、排气、排水与隔油",
        paragraphs: [
          "F&B（Food and Beverage，餐饮）是审批最敏感的装修类型之一。签租约前，应确认用途允许，并确认单位能够支持菜单、烹饪方式、厨房排气、排水、隔油池、供水、燃气或电力负荷及消防要求。",
          "SFA（Singapore Food Agency，新加坡食品局）会审核餐饮店执照申请和布局图，并进行开业前检查。场所应按提交的布局装修和设置，因此设备位置、食品动线、清洗区和储存区应在主要制作前确定。",
          "NEA（National Environment Agency，国家环境局）、PUB（Singapore’s National Water Agency，新加坡国家水务局）、SCDF（Singapore Civil Defence Force，新加坡民防部队）、业主和专业承包商，都可能影响最终厨房及后勤区设计。当单位需要新增排气、排水或重大机电升级时，一个月免租装修期通常过于紧张。",
        ],
        bullets: [
          "确认餐饮用途与业主接受程度",
          "尽早准备按比例绘制的厨房及设备布局",
          "确认 SFA 执照路径和开业前要求",
          "检查排气、隔油池、排水、供水和废物处理",
          "协调 SCDF、燃气、电力负荷及专业设备",
        ],
        scenario:
          "例子：餐厅签下一间没有合适排气出口的单位。即使用餐区设计已经完成，商家仍可能必须更改菜单、安装昂贵替代系统、申请进一步批准，甚至放弃该单位。",
      },
      {
        title: "诊所与医疗路径：服务执照、房间用途、病人动线与专业系统",
        paragraphs: [
          "诊所不能当成普通办公室，装修后再随意加上诊疗室。MOH（Ministry of Health，卫生部）根据 HCSA（Healthcare Services Act，医疗服务法）监管医疗服务，而执照取决于实际提供的医疗服务。",
          "设计前应先确认服务内容，因为这会影响房间功能、隐私、感染控制、洗手点、无障碍、药品储存、废物处理、影像或化验设备，以及其他专业要求。",
          "场所布局、装修、设备安装与 HCSA 申请应作为同一个项目规划。装修完工本身，并不代表经营者可以提供受监管医疗服务。",
        ],
        bullets: [
          "明确实际提供的医疗服务",
          "检查诊所用途与业主接受程度",
          "让布局和房间符合 HCSA 发牌要求",
          "协调 SCDF、无障碍、水喉与电气需求",
          "为发牌审核、检查和整改预留时间",
        ],
        scenario:
          "例子：经营者租下原办公室后，才决定增加需要更多水喉、感染控制和专业设备的治疗项目。后期改变服务内容，会影响布局、费用和发牌准备。",
      },
      {
        title: "清洁业务路径：NEA 营业执照与场所装修批准是两回事",
        paragraphs: [
          "清洁公司有两个独立问题。第一，业务是否需要 NEA（National Environment Agency，国家环境局）清洁业务执照？第二，公司办公室、仓库或化学品储存区是否需要装修、用途或业主批准？",
          "向其他场所提供一般清洁服务的企业，通常需要相应的清洁业务执照。该执照针对清洁业务和人员要求，并不能取代公司自身场所所需的业主、URA、SCDF、电气或装修批准。",
          "简单行政办公室可沿用普通办公室路径。若基地储存清洁化学品、机器、电池或大量物资，就必须更仔细检查批准用途、消防、通风、储存方式、装卸和废物处理。",
        ],
        bullets: [
          "确认是否需要 NEA 清洁业务执照",
          "把人力与营业执照要求和装修审批分开处理",
          "确认场所属于办公室、储存、仓库或混合用途",
          "审核化学品、电池、机器和通风风险",
          "检查消防、荷载、送货及业主限制",
        ],
        scenario:
          "例子：清洁公司租下小型工业单位作为办公室和仓库。办公室部分可能简单，但化学品和设备储存会改变用途、通风、消防及业主要求。",
      },
      {
        title: "工业、仓库与工场路径：批准用途、荷载、通风与营运",
        paragraphs: [
          "工业和仓库项目应先从批准用途和业主条件开始。JTC（JTC Corporation，裕廊集团）、HDB（Housing & Development Board，建屋发展局）、其他工业业主或相关部门，可能限制单位内允许进行的活动。",
          "机器重量、楼板荷载、震动、噪音、排气、压缩空气、电力需求、排水、废水排放、危险物质和送货动线，都可能影响可行性。设备安装前可能需要结构审核或专业提交。",
          "不要只根据面积和租金签租约。应尽早取得设备资料和营运需求，以便在承诺前检查单位、装卸区、电力和环境控制条件。",
        ],
        bullets: [
          "确认批准工业或仓库用途",
          "取得设备重量、荷载、电力和通风资料",
          "检查 JTC、HDB 或业主图纸同意要求",
          "审核 NEA、PUB、SCDF 与工作场所安全触发点",
          "规划安装、测试和营运批准",
        ],
      },
      {
        title: "其他受监管行业：幼儿、托儿、美容、养生、按摩、健身与聚集用途",
        paragraphs: [
          "部分业务不属于常见办公室、零售或餐饮路径。例如，ECDC（Early Childhood Development Centre，幼儿培育中心）必须在营业、宣传或收取费用前，取得 ECDA（Early Childhood Development Agency，幼儿培育署）有效执照。因此，场所适用性和发牌应在装修前检查。",
          "美容与养生业务必须准确说明实际服务。普通美容服务与医疗或医疗保健程序不同。按摩场所可能需要警方另行发牌；健身房和工作室仍须考虑批准用途、使用人数、消防、通风、噪音及更衣或淋浴设施。",
          "补习中心、宗教场所、活动场地及其他聚集用途，通常更重视使用人数、逃生能力、无障碍、厕所及邻里影响。评估单位和审批路径前，必须准确说明行业和服务。",
        ],
        bullets: [
          "识别实际服务，而不只是公司名称",
          "确认是否有行业监管机构或营业执照",
          "检查批准用途、使用人数与消防影响",
          "确认湿区、通风、隔音与无障碍需求",
          "所需执照未取得前，不要宣传或开业",
        ],
      },
      {
        title: "技术触发地图：哪些实体改动会增加审批风险？",
        paragraphs: [
          "行业类型决定可能需要哪些营业执照；实体装修范围则决定需要哪些技术审批、专业人士和专业承包商。",
          "项目原本可能只是简单装修，但当设计加入封闭房间、改动消防系统、提升电力负荷、新增厨房排气、切割结构、增加湿区或安装重型设备后，审批复杂度会明显提高。",
          "最稳妥的方法，是在报价、政府审批时间表和租约交接日期定案前，先审核每一项实体改动。",
        ],
      },
      {
        title: "隔间、房间与防火分区",
        paragraphs: [
          "隔间是商业装修最常见的技术触发点之一。它可能改变逃生路线、逃生距离、人员动线、防火分区、喷淋覆盖、烟感器位置、紧急照明和空调分配。",
          "SCDF（Singapore Civil Defence Force，新加坡民防部队）说明，拟议消防安全工程除非符合相关豁免，否则需要批准。小型加建改建提交也必须显示隔间细节，以及是否影响现有喷淋或自动火警系统。",
          "不要先建隔间，再要求消防顾问事后补办。最终房间布局应在开工前，与天花、消防系统、门和机电服务一起协调。",
        ],
        bullets: [
          "新增会议室、治疗室、储物室和后勤房间",
          "改变出口通道、走廊宽度或逃生距离",
          "防火墙、防火门、防火玻璃及管线穿透位置",
          "移动喷淋、烟感器、火警和紧急照明",
          "改变使用人数或房间用途",
        ],
      },
      {
        title: "天花、空调、机械通风与排烟",
        paragraphs: [
          "新天花可能遮挡消防装置、改变喷淋净空，并影响烟感器、紧急照明、出口指示和空调分配。",
          "风管穿过防火分区时，可能需要防火阀或其他防火封堵。厨房排气、厕所排气、排烟和机械通风应与消防图和天花图一起设计。",
          "签租约前，应确认大厦是否使用中央空调、是否提供加时冷气，以及是否允许新增风机盘管、冷凝机、风管或排气出口。",
        ],
        bullets: [
          "假天花高度和检修口",
          "最终天花下方的喷淋和烟感器位置",
          "风管穿过防火墙或楼板时的防火阀",
          "新风、回风和厕所排气要求",
          "厨房排气路线、出口及维修空间",
        ],
      },
      {
        title: "水喉、卫生工程、排水与隔油池",
        paragraphs: [
          "新增茶水间、治疗室、美发洗头区、餐厅厨房或厕所，可能触发卫生水喉、排水和防水要求。最近的水管并不一定是可接受的接驳点。",
          "PUB（Singapore’s National Water Agency，新加坡国家水务局）监管污水和卫生工程。餐饮店和食品加工场所的厨房废水通常需要经过隔油池，而厕所排水必须绕过隔油池，另行连接污水系统。",
          "项目团队应在确定布局前，确认管线路线、接驳高度、排水坡度、维修空间、防水和是否需要抽水。排水不可行，可能使原本吸引的单位不适合使用。",
        ],
        bullets: [
          "新增水槽、洗手盆、地漏、厕所或治疗室水喉",
          "排水坡度和接驳高度",
          "隔油池尺寸、位置和维修空间",
          "湿区防水及挡水要求",
          "无法重力排水时采用抽水系统",
        ],
      },
      {
        title: "电力负荷、新布线与设备供电",
        paragraphs: [
          "在检查现有电力容量前，不应购买商业设备。厨房、诊所、工场、服务器房、洗衣店和美容场所，即使面积不大，也可能超过单位现有供电。",
          "EMA（Energy Market Authority，能源市场管理局）要求新布线、重布线和线路延伸等电气工程由 LEW（Licensed Electrical Worker，持牌电气人员）负责，并在通电前完成测试。",
          "电力升级可能影响配电箱、入电、仪表、业主批准和项目时间。订购前应确认每件主要设备的电压、相数、电流、启动负荷和隔离要求。",
        ],
        bullets: [
          "现有批准负荷与备用容量",
          "单相与三相设备",
          "配电箱和主电缆升级",
          "紧急电源、UPS 和服务器要求",
          "测试、认证及正式通电",
        ],
        scenario:
          "例子：餐厅只根据供应商资料订购多台高负荷厨房设备。单位现有供电不足，因此电气设计、业主提交和开业时间都必须重新安排。",
      },
      {
        title: "结构工程、楼板荷载与重型设备",
        paragraphs: [
          "拆改结构、切割楼板、开孔，或安装重型保险箱、移动密集柜、水箱、医疗机器或工业设备，都可能触发结构审核。",
          "BCA（Building and Construction Authority，建设局）规定，除非属于非重要建筑工程，否则建筑工程需要准证。结构图批准必须由具备土木或结构专业资格的 QP（Qualified Person，合格专业人士）提交。",
          "评估设备重量时，应同时考虑占地面积、集中荷载、震动及送货搬运过程。平均分布时可接受的机器，仍可能产生集中荷载问题。",
        ],
        bullets: [
          "改动楼板、横梁、柱或结构墙",
          "钻孔、楼板开口和管线穿透",
          "重型机器、保险箱、移动密集柜和水箱",
          "震动、固定方式与动态荷载",
          "送货路线、装卸区和货梯容量",
        ],
      },
      {
        title: "无障碍、入口、高低差与厕所",
        paragraphs: [
          "商业装修不应只考虑美观和营运动线。新建筑工程和加建改建工程，可能需要符合 BCA 无障碍要求。",
          "入口台阶、过窄门口、架高平台、无法使用的柜台、不合适的厕所和受阻动线，都可能造成合规与使用问题。店面、地板和木作细节定案前，应先检查无障碍设计。",
          "若工程触发正式建筑图审核，应由 QP 确认适用的无障碍范围。即使没有触发特定提交，包容性通行仍是重要设计责任。",
        ],
        bullets: [
          "无台阶入口或合适坡道",
          "门口净宽与回转空间",
          "无障碍柜台、房间与路线",
          "无障碍厕所影响",
          "地板或平台形成的高低差",
        ],
      },
      {
        title: "店面、招牌、卷闸与公共区域",
        paragraphs: [
          "店面和招牌不只是品牌设计，也可能影响公共区域、逃生、挡烟设施、商场卷闸、外墙控制、照明供电和业主设计标准。",
          "业主或 MCST（Management Corporation Strata Title，分层地契管理机构）可能先要求概念批准，再进行详细技术审核。视地点和招牌类型而定，外部招牌也可能需要额外同意。",
          "在尺寸、材料、固定方式、电力和管理处意见全部确定前，不要开始制作店面、招牌或卷闸。",
        ],
        bullets: [
          "门楣、招牌、灯箱及电子显示尺寸",
          "卷闸类型、控制及与消防系统的接口",
          "固定在外墙或公共区域构件",
          "灯光、布线和定时器要求",
          "商场视线、通透度和陈列区规定",
        ],
      },
      {
        title: "噪音、震动、烟气、废物与危险物质",
        paragraphs: [
          "部分业务会产生平面图看不出来的营运影响。工场、健身房、工作室、实验室、清洁仓库、餐饮和轻工业业务，可能产生噪音、震动、烟气、气味、工业废水或危险废物。",
          "视活动和材料而定，NEA（National Environment Agency，国家环境局）、PUB、SCDF、工业业主及工作场所安全要求都可能介入。",
          "签租约前应如实说明营运内容。把工场称为普通办公室，或把化学品储存描述为一般物资，可能导致申请被拒、执法风险或单位最终无法使用。",
        ],
        bullets: [
          "噪音和震动传到邻近单位",
          "烟气、气味和排气出口",
          "工业废水和污水排放",
          "化学品、电池、气瓶或易燃物储存",
          "废物收集、虫害控制和清洁空间",
        ],
      },
      {
        title: "阶段六：开业之前——完成检查、文件与营业要求",
        paragraphs: [
          "现场工程完成，并不代表业务一定可以马上开业。管理处可能要求最终检查、系统测试、更新竣工资料、受监管工程证明，以及修复公共区域损坏。",
          "部分行业还需要独立营业执照、检查或批准。这些事项应与装修同步规划，而不是等承包商交付后才开始。",
          "只有在剩余的大厦、政府、专业与行业条件都清楚后，才应确认正式开业日期。",
        ],
        bullets: [
          "管理处最终检查",
          "受监管系统测试与认证",
          "需要时提交竣工图纸或完工文件",
          "整改与装修保证金退还",
          "营业前行业执照或检查",
          "最终交付、员工设置与开业准备",
        ],
      },
      {
        title: "接管单位前，应预留多少时间？",
        paragraphs: [
          "以下是实务规划范围，并不是政府部门保证的处理时限。设计准备充分、各方回复迅速时，部分阶段可以重叠；若单位不适合、图纸需要修改或涉及多个监管部门，时间会延长。",
          "总时间应包括可行性检查、设计、业主审核、政府或专业提交、开工前文件、施工、测试、检查，以及适用行业的营业执照批准。",
          "在实际单位、行业、装修指南和技术范围完成审核前，租约规划应先采用较高一端的时间范围。",
        ],
        bullets: [
          "简单办公室或清洁公司行政办公室：从需求确认到实际搬入，建议预留约 7–14 周。",
          "零售店：若涉及店面审批、商场规定和指定承包商，建议预留约 9–18 周。",
          "餐饮单位：若涉及厨房系统、SFA 发牌、排气、排水和消防协调，建议预留约 16–32 周。",
          "诊所或医疗场所：若涉及 HCSA 发牌、房间要求、专业系统和检查，建议预留约 14–32 周。",
          "工业、仓库或工场：视批准用途、设备资料、荷载、通风和业主同意，建议预留约 9–26 周。",
          "幼儿园、托儿或其他高度受监管用途：若必须满足场所和营业执照条件，建议预留约 18–40 周。",
        ],
        scenario:
          "这些范围从营业需求和必要资料大致确定后开始计算。若经营者仍未决定菜单、医疗服务、设备清单或房间数量，项目时间实际上还没有正式开始。",
      },
      {
        title: "如何评估免租装修期是否足够",
        paragraphs: [
          "一个月免租期，并不代表单位可以在一个月内开业。免租时间可能从接管单位开始计算，但承包商仍可能在等待最终图纸、管理处意见、政府提交、保证金或施工准证。",
          "接受租约日期前，应把项目分为三个部分：接管前可以完成的工作、必须进入单位后才能完成的工作，以及实体施工后仍需完成的批准。",
          "谈判时应使用完整开业时间，而不只是现场施工周数。若业主不愿延长免租期，租户应清楚可能产生多少空付租金，并把它纳入开业预算。",
        ],
        bullets: [
          "接管前：用途检查、装修指南审核、允许情况下的现场查看、概念设计、设备清单及初步专业意见",
          "接管后但未取得施工准证：详细测量、协调图纸、管理处提交、保险、保证金和承包商登记",
          "施工阶段：保护、拆除、机电、隔间、天花、饰面、木作、设备安装和测试",
          "施工后：最终检查、整改、竣工文件、发牌检查、员工设置和开业准备",
        ],
        scenario:
          "例子：业主给予四周免租期。接管后仍需三周完成最终提交和施工准证，六周施工，再用一周测试和检查。实际开业约在接管后十周，代表开业前大约有六周已经开始支付租金。",
        link: {
          to: "/insights/commercial-renovation-cost-singapore",
          label: "规划装修与开业前预算",
        },
      },
      {
        title: "应从开业日期倒推，而不是从拿钥匙日期往后算",
        paragraphs: [
          "先确定业务必须开始营运的日期，再倒推发牌、最终检查、测试、设备调试、施工、审批、设计和可行性检查。",
          "至少为一次实质修改预留缓冲。商业项目失去时间，往往不是第一次提交特别慢，而是第一次提交后资料或需求发生变化。",
          "不要按最乐观时间承诺员工入职、宣传发布、货品送达或客户预约。应使用已经确认、包含决策截止日期和责任人的项目时间表。",
        ],
        bullets: [
          "目标试营业或正式营运日期",
          "发牌、最终检查和整改时间",
          "测试、调试、清洁和员工设置",
          "实体装修和设备安装",
          "管理处和政府审批时间",
          "设计、可行性及租约谈判期",
        ],
      },
      {
        title: "真正的顾问级建议应该是什么样",
        paragraphs: [
          "良好的审批建议不能只列出政府部门，而应把监管要求转化为租约、设计、预算、时间或开业顺序上的决定。",
          "对于每一个主要风险，项目团队都应说明三件事：要做什么、为什么重要，以及忽略后会发生什么。这样商家得到的不是技术警告，而是足够作商业判断的信息。",
          "最强的顾问不是承诺所有批准都很容易处理的人，而是能尽早识别不确定性、说明需要哪一位专业人士、显示对时间的影响，并协助租户决定继续、重设计或更换单位的人。",
        ],
        bullets: [
          "把监管触发点转化为租约与开业后果",
          "把已确认要求、假设和未知事项分开",
          "说明每项提交和检查由谁负责",
          "把审批、施工和发牌依赖放进同一时间表",
          "必要时建议放弃单位或改变经营概念",
        ],
      },
      {
        title: "商业装修审批由谁负责？",
        paragraphs: [
          "租户仍须确保单位合法使用，并取得经营业务所需的执照。业主或管理处控制物业规定；法律要求的提交与认证，则由注册专业人士和持牌人员处理。",
          "装修承包商可以协调图纸、文件、指定承包商、专业人士和现场时间，但不应声称可取代注册建筑师、工程师或持牌专业人士。",
          "签订装修合约前，应确认谁准备每份图纸、谁提交、谁承担费用、谁回复意见，以及谁安排最终检查。",
        ],
      },
      {
        title: "ID Work Studio如何协调整个过程",
        paragraphs: [
          "商家通常希望由一个团队把单位、营业用途、业主要求、审批、装修和开业时间连接起来。",
          "ID Work Studio可审核单位、营业类型、装修指南、拟议布局和目标开业日期，并协调装修范围、管理处提交、相关专业人士、指定承包商和现场顺序。",
          "若受监管工程必须由注册专业人士或持牌人员处理，ID Work Studio会协调适合的单位，并把要求清楚纳入时间表和报价。",
        ],
        link: {
          to: "/commercial",
          label: "了解ID Work Studio商业装修服务",
        },
      },
      {
        title: "第一次装修决定前，就应考虑恢复原状",
        paragraphs: [
          "租约可能要求租户在租期结束时，把单位恢复至原始或业主指定状况。",
          "应记录原始交付情况、获批改动，以及业主同意保留的项目。开始阶段的设计决定，会直接影响未来恢复原状的费用和退租时间。",
        ],
        link: {
          to: "/commercial/reinstatement",
          label: "了解商业恢复原状要求",
        },
      },
    ],
    comparisonTitle: "不同商业项目的审批风险",
    comparisonIntro:
      "以下比较并不是完整法律清单，而是帮助商家理解为什么不同项目不能用同一套假设来规划。",
    comparisonRows: [
      {
        project: "办公室",
        mainChecks: "业主批准、隔间、消防、空调、电气/数据和员工人数",
        timelineRisk: "后期更改房间、协调图纸修改及 IT 或家具搬迁",
      },
      {
        project: "零售店",
        mainChecks: "店面、招牌、商场设计规定、灯光、卷闸及指定承包商",
        timelineRisk: "多轮概念审批、夜间施工及未获最终批准前开始制作",
      },
      {
        project: "餐饮",
        mainChecks: "SFA 布局与执照、排气、隔油池、排水、设备、电力和 SCDF",
        timelineRisk: "单位不适合、厨房重设计、服务升级及开业前检查",
      },
      {
        project: "诊所 / 医疗",
        mainChecks: "HCSA 服务执照、房间用途、病人动线、感染控制和专业系统",
        timelineRisk: "服务范围改变、发牌审核、检查及设备协调",
      },
      {
        project: "清洁公司",
        mainChecks: "NEA 清洁业务执照，以及办公室、储存、化学品和消防要求",
        timelineRisk: "把营业执照误当场所批准，或选择不适合储存的单位",
      },
      {
        project: "工业 / 仓库",
        mainChecks: "批准用途、设备荷载、电力、通风、排放、消防及业主同意",
        timelineRisk: "设备资料太迟、结构审核及营运限制",
      },
      {
        project: "幼儿 / 托儿",
        mainChecks: "ECDA 执照、场所适用性、儿童安全、厕所、消防及营运布局",
        timelineRisk: "未确认发牌和场所要求前就承诺租下单位",
      },
      {
        project: "美容 / 养生 / 健身",
        mainChecks: "实际服务、批准用途、适用行业执照、湿区、通风和噪音",
        timelineRisk: "误判医疗或按摩服务，以及低估装修要求",
      },
    ],
    reviewCtaTitle: "签约或接管之前，先让我们按您的开业计划审核单位",
    reviewCtaText:
      "提供平面图、最新装修指南、营业类型、计划接管日期、目标开业日期和主要设备清单。ID Work Studio 可在您锁定装修范围或租约时间前，协助识别明显可行性问题、可能审批阶段、缺失资料和时间风险。",
    reviewCtaPrimary: "签约前审核我的单位",
    reviewCtaSecondary: "了解我们如何处理商业项目",
    timelineTitle: "从租约规划到正式开业：完整项目顺序",
    timelineIntro:
      "应根据目标开业日期倒推以下步骤。以下阶段时间仅供规划，并非保证审批时限；资料完整时，部分步骤可以重叠进行。",
    timeline: [
      {
        step: "1",
        title: "检查单位和营业用途",
        text:
          "规划时间：建议在承诺租约前预留约 1–3 周。确认批准用途、业主接受程度、电力、空调、排气、排水、招牌和行业可行性。",
      },
      {
        step: "2",
        title: "准备设计和技术图纸",
        text:
          "规划时间：视复杂程度约 2–6 周。先确定营运需求、设备和布局，再协调电气、空调、给排水、消防和结构图纸。",
      },
      {
        step: "3",
        title: "提交管理处审核",
        text:
          "规划时间：一般约 1–4 周，不包括重大重设计。房东或 MCST 根据装修指南审核，并可能要求修改。",
      },
      {
        step: "4",
        title: "取得其他必要批准",
        text:
          "规划时间：视触发条件与资料完整度约 2–12 周以上。注册专业人士或政府部门审核受监管工程和行业要求。",
      },
      {
        step: "5",
        title: "完成开工前要求",
        text:
          "规划时间：数个工作日至约 2 周。提交保险、保证金、承包商登记、风险文件，以及临时水电或特殊工程申请。",
      },
      {
        step: "6",
        title: "取得正式开工许可",
        text:
          "施工准证未签发前，不应安排拆除。确认获批工作时间、指定承包商、设施预约和准证附带条件。",
      },
      {
        step: "7",
        title: "施工、测试和检查",
        text:
          "施工时间视行业而定：简单办公室约 4–8 周；零售、餐饮、医疗或技术复杂单位通常更长。完成系统测试并安排检查。",
      },
      {
        step: "8",
        title: "交付和搬入",
        text:
          "规划时间：视缺陷、发牌和检查约 1–8 周以上。提交完工文件、完成整改，并确认单位可合法开业或搬入。",
      },
    ],
    mistakesTitle: "常见失败情境，以及有经验的项目团队应如何处理",
    mistakes: [
      {
        title: "未检查可行性就先签租约",
        text:
          "租户之后才发现单位无法支持计划用途、排气、排水、电力负荷、招牌或发牌路径。正确做法是暂停进一步设计承诺，核实用途和大厦限制，并先计算是否必须改变经营概念，避免继续增加损失。",
      },
      {
        title: "把免租期当成整个项目时间",
        text:
          "管理处审核、政府提交和施工准证占用了免租期，实体施工还未开始。项目团队应把接管前、审批、施工和施工后阶段分开，并在接受租约日期前说明可能产生的空付租金。",
      },
      {
        title: "未协调消防就先确定布局",
        text:
          "房间、走廊、门、天花和设备先设计完成，之后才检查 SCDF 相关影响。正确方法是在放图施工前，一起协调隔间、逃生路线、喷淋、烟感器、火警、紧急照明和通风。",
      },
      {
        title: "未检查容量就先订购设备",
        text:
          "单位无法支持设备所需的电力、排气、排水、结构重量或送货路线。有经验的团队会尽早索取设备清单，逐项检查单位条件，并在服务和审批确认前暂缓采购。",
      },
      {
        title: "把业主批准误当成政府批准",
        text:
          "管理处接受设计，但受监管工程或营业执照仍未完成。项目团队应维持一份实时审批清单，把业主、QP、政府部门、持牌专业人士和行业执照责任分别记录。",
      },
      {
        title: "把整个审批过程都交给承包商",
        text:
          "承包商被要求处理法律上必须由 QP、PE、RI、LEW、持牌水喉匠或行业申请人负责的事项。合约应说明聘请谁、由谁提交、谁付费、谁回复意见，以及监管机构要求额外工程时如何处理。",
      },
      {
        title: "营业决定太迟，导致重新设计",
        text:
          "菜单、医疗服务、设备清单、员工人数、储存方式或房间数量在提交后改变。项目团队应设定决策截止日期，并清楚说明之后的更改可能影响图纸、审批状态、费用和开业日期。",
      },
      {
        title: "最低报价没有包括审批责任",
        text:
          "顾问费、指定承包商、系统停用、测试、保险、保证金和政府相关工程，之后才以额外费用出现。比较报价时应看总项目责任，而不是只看表面施工小计。",
      },
      {
        title: "施工完成，但业务仍不能开业",
        text:
          "最终检查、认证、竣工文件、缺陷整改或营业执照尚未完成。开业清单应从项目开始就持续管理，而不是交付后才第一次提出。",
      },
      {
        title: "第一次装修时忽略未来恢复原状",
        text:
          "租户安装大量隔间、系统和饰面，却不了解未来退租责任。有经验的团队会记录原始状况、保存获批图纸，并指出哪些设计决定会增加未来恢复费用。",
      },
    ],
    relatedKnowledgeTitle: "继续完成您的商业装修决策旅程",
    relatedKnowledgeIntro:
      "根据您目前面对的决定，选择下一份指南。以下内容把审批规划与费用、时间、施工经验和未来退租责任连接起来。",
    relatedKnowledge: [
      {
        title: "商业装修费用",
        description:
          "比较报价前，先了解商业装修的现实费用、审批相关开支、隐藏项目和预算风险。",
        to: "/insights/commercial-renovation-cost-singapore",
        label: "阅读商业装修费用指南",
      },
      {
        title: "办公室装修时间",
        description:
          "了解办公室项目如何安排设计、业主审核、审批、施工、测试和正式搬迁。",
        to: "/insights/office-renovation-timeline-singapore",
        label: "规划办公室装修时间",
      },
      {
        title: "办公室装修服务",
        description:
          "了解 ID Work Studio 如何规划和执行办公室装修，包括布局、机电和大厦要求协调。",
        to: "/commercial/office-renovation",
        label: "查看办公室装修服务",
      },
      {
        title: "商业恢复原状",
        description:
          "决定今天要安装哪些隔间、系统和饰面前，先了解未来租约结束时的恢复责任。",
        to: "/commercial/reinstatement",
        label: "了解恢复原状要求",
      },
      {
        title: "商业项目案例",
        description:
          "决定是否委托 ID Work Studio 前，先查看已完成的商业与住宅装修项目。",
        to: "/gallery",
        label: "查看项目案例",
      },
      {
        title: "商业装修规划工具",
        description:
          "回答几个项目问题，先了解可能涉及的审批、准证、业主要求与规划步骤，再决定是否承诺。",
        to: "/commercial-renovation-planner",
        label: "打开商业装修规划工具",
      },
      {
        title: "商业项目审核",
        description:
          "提供单位、装修指南、营业类型、目标接管日期和开业计划，进行初步可行性讨论。",
        to: "/contact",
        label: "申请项目审核",
      },
    ],
    trustTitle: "正式的商业项目审核应该让您得到什么",
    trustIntro:
      "有用的审核应在您投入大量资金前减少不确定性，而不是笼统承诺所有准证都很容易，或每一个单位都能改造成合适场所。",
    trustPoints: [
      {
        title: "针对实际单位的可行性判断",
        text:
          "审核应把营业类型与单位批准用途、业主规定、现有系统、排气、排水、电力、荷载及其他明显限制连接起来。",
      },
      {
        title: "清楚的审批与责任地图",
        text:
          "您应知道哪些事项由业主、政府部门、QP、PE、RI、LEW、持牌水喉匠、专业承包商或营业执照申请人负责。",
      },
      {
        title: "与开业日期连接的现实时间表",
        text:
          "时间表应把设计、审批、施工准证、施工、测试、检查和发牌分开，而不是只报价现场施工周数。",
      },
      {
        title: "清楚显示假设、排除与未知事项",
        text:
          "尚未确认的要求应公开说明。可信赖的团队不会把未解决的政府、系统容量或业主问题藏在较低的初步报价内。",
      },
    ],
    trustNote:
      "ID Work Studio 负责协调装修规划、管理处提交、专业人士和现场施工。法律或监管要求必须由注册专业人士、持牌人员或政府部门批准时，相关责任仍由适当资格方承担。我们不会把承包商协调工作包装成法定批准的替代品。",
    faqTitle: "常见问题",
    faqs: [
      {
        question: "新加坡商业装修需要准证吗？",
        answer:
          "通常需要房东或管理处书面批准。是否还需要政府或专业审批，则取决于单位、营业用途和装修范围。",
      },
      {
        question: "新加坡商业装修通常需要多久？",
        answer:
          "取决于项目。完整时间应包括设计、审批、施工、测试和交付。一般办公室通常比餐饮、诊所或技术复杂的项目更快。",
      },
      {
        question: "有了业主批准就可以开工吗？",
        answer:
          "不一定。大厦还可能要求保险、保证金、承包商登记和施工准证。部分工程也需要额外政府或专业批准。",
      },
      {
        question: "每个办公室装修都需要SCDF批准吗？",
        answer:
          "不需要。新加坡民防部队（SCDF）通常在工程影响消防安全时介入，例如逃生路线、防火隔间、喷淋、火警系统或单位批准用途。",
      },
      {
        question: "什么是QP？",
        answer:
          "合格专业人士（Qualified Person，QP）是获授权准备并提交特定受监管图纸的注册建筑师或工程师。并非每项装修都需要QP。",
      },
      {
        question: "什么是LEW？",
        answer:
          "持牌电气人员（Licensed Electrical Worker，LEW）负责部分电气设计、测试、认证及通电工作。",
      },
      {
        question: "审批期间可以先开始装修吗？",
        answer:
          "不要自行假设可以。许多大厦规定，必须在所有批准、保险、保证金和施工准证完成后才能开工。",
      },
      {
        question: "什么是装修施工准证？",
        answer:
          "这是管理处正式允许承包商开始获批工程的文件。单纯图纸获批，未必足以开工。",
      },
      {
        question: "什么是变更单？",
        answer:
          "变更单是对原定装修范围的正式修改，用于记录增加或减少的工程，以及对价格和工期的影响。",
      },
      {
        question: "哪些费用可能不在报价内？",
        answer:
          "可能包括顾问费、政府申请费、管理处保证金、保险、指定承包商、电力升级、专业测试和夜间施工。",
      },
      {
        question: "施工完成后可以马上搬入吗？",
        answer:
          "不一定。管理处可能要求检查、测试、更新图纸和完工文件。部分行业也需要营业执照后才能开业。",
      },
      {
        question: "商业装修开工前，审批应预留多少时间？",
        answer:
          "规划时，业主或 MCST 审核可先预留约 1 至 4 周；触发政府或专业审批时，可预留约 2 至 12 周以上。部分阶段可以重叠，但图纸不完整、单位不适合或需要修改时，时间会延长。",
      },
      {
        question: "一个月免租装修期通常足够吗？",
        answer:
          "不一定。详细测量、协调图纸、管理处审核、保险、保证金和施工准证，可能在实体施工前就占用部分免租期。评估租约时应看完整开业时间，而不只是施工周数。",
      },
      {
        question: "餐饮装修通常涉及哪些审批？",
        answer:
          "餐饮项目可能涉及业主批准、用途检查、SCDF 消防协调、SFA 餐饮店执照、厨房布局审核、排气、排水、隔油池、电力负荷、燃气和开业前检查。实际路径取决于单位、菜单和烹饪方式。",
      },
      {
        question: "清洁公司需要场所装修批准吗？",
        answer:
          "NEA 清洁业务执照与场所批准是两回事。简单行政办公室可按普通办公室路径处理；若储存化学品、电池、机器或设备，则可能触发额外用途、消防、通风和业主要求。",
      },
      {
        question: "ID Work Studio可以处理提交吗？",
        answer:
          "ID Work Studio可协调装修图纸、管理处要求、专业人士和项目时间。若受监管提交必须由 QP、PE、RI、LEW、持牌水喉匠或其他持牌单位处理，我们会协调适合的专业人士。",
      },
    ],
    assuranceEyebrow: "您不需要独自弄清所有要求",
    assuranceTitle: "商业审批令人不安很正常，但不应靠猜测继续前进",
    assuranceText: [
      "商业装修可能同时涉及业主、管理处、顾问、持牌专业人士和不同政府部门。现阶段不确定哪些要求适用、应该先做什么，是很常见的情况。",
      "重要的不是自行猜测。您可以先使用商业装修规划工具整理可能的审批路径；对于仍需专业核实的部分，再让我们根据实际单位、装修指南和营业类型进一步审核。",
      "在正式承诺前进行一次简短讨论，往往可以减少不必要的重设计、审批延误、额外费用，以及业务尚未开业却已经开始支付租金的风险。",
    ],
    assurancePlannerLabel: "打开商业装修规划工具",
    assuranceContactLabel: "让我们协助审核项目",
    ctaTitle: "在审批风险变成实际租金之前，把单位资料交给我们审核",
    ctaText:
      "提供平面图、装修指南、营业类型、设备清单、计划接管日期和目标开业日期。我们会审核商业装修范围，识别可能的审批与专业依赖，并在您确认最终工程前说明主要费用和时间风险。",
    ctaPrimary: "提交我的项目审核",
    ctaSecondary: "查看商业装修服务",
    breadcrumbCurrent: "商业装修审批",
  },
};

export default function CommercialRenovationApprovalsSingapore() {
  const { i18n } = useTranslation();
  const lang = i18n.language === "zh" ? "zh" : "en";
  const t = content[lang];
  const heroImagePath =
    "/insights/commercial-renovation-approvals-singapore-hero.webp";
  const heroImageUrl =
    "https://idworkstudio.com/insights/commercial-renovation-approvals-singapore-hero.webp";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: t.title,
    description: t.metaDescription,
    url: t.canonical,
    image: heroImageUrl,
    datePublished: "2026-07-10",
    dateModified: "2026-07-11",
    isAccessibleForFree: true,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": t.canonical,
    },
    keywords:
      lang === "zh"
        ? [
            "新加坡商业装修审批",
            "商业装修准证",
            "SCDF 消防审批",
            "SFA 餐饮执照",
            "URA 用途更改",
            "BCA 建筑审批",
            "管理处装修批准",
            "商业装修时间",
            "商业租约免租装修期",
          ]
        : [
            "commercial renovation approvals Singapore",
            "commercial renovation permit Singapore",
            "SCDF fire safety approval",
            "SFA food shop licence",
            "URA change of use",
            "BCA building approval",
            "landlord fit-out approval",
            "commercial renovation timeline",
            "rent-free fitting-out period",
          ],
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
    articleSection: t.category,
    isPartOf: {
      "@type": "WebSite",
      name: "ID Work Studio",
      url: "https://idworkstudio.com/",
    },
    about: {
      "@type": "Thing",
      name:
        lang === "zh"
          ? "新加坡商业装修审批"
          : "Commercial renovation approvals in Singapore",
    },
    mentions: [
      {
        "@type": "GovernmentOrganization",
        name: "Urban Redevelopment Authority",
      },
      {
        "@type": "GovernmentOrganization",
        name: "Singapore Civil Defence Force",
      },
      {
        "@type": "GovernmentOrganization",
        name: "Building and Construction Authority",
      },
      {
        "@type": "GovernmentOrganization",
        name: "Singapore Food Agency",
      },
      {
        "@type": "GovernmentOrganization",
        name: "National Environment Agency",
      },
      {
        "@type": "GovernmentOrganization",
        name: "PUB, Singapore's National Water Agency",
      },
      {
        "@type": "GovernmentOrganization",
        name: "Energy Market Authority",
      },
      {
        "@type": "GovernmentOrganization",
        name: "Ministry of Health Singapore",
      },
      {
        "@type": "GovernmentOrganization",
        name: "JTC Corporation",
      },
      {
        "@type": "GovernmentOrganization",
        name: "Housing & Development Board",
      },
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
        name: lang === "zh" ? "装修指南" : "Insights",
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
        <meta property="og:type" content="article" />
        <meta property="og:title" content={t.metaTitle} />
        <meta property="og:description" content={t.metaDescription} />
        <meta property="og:url" content={t.canonical} />
        <meta property="og:image" content={heroImageUrl} />
        <meta
          property="og:image:alt"
          content={lang === "zh" ? "新加坡商业装修审批指南" : "Commercial renovation approvals in Singapore"}
        />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.metaTitle} />
        <meta name="twitter:description" content={t.metaDescription} />
        <meta name="twitter:image" content={heroImageUrl} />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <main className="bg-[#FAF8F3] text-[#2C2C2C]">
        <section className="relative overflow-hidden bg-[#111] px-6 py-20 text-center text-white md:py-28">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImagePath})` }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background:
                "radial-gradient(circle at 20% 20%, rgba(197,160,89,0.55), transparent 34%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.12), transparent 30%)",
            }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-5xl">
            <p className="mb-5 inline-flex rounded-full border border-[#C5A059]/40 bg-black/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#D6B26B]">
              {t.eyebrow}
            </p>
            <h1 className="font-serif text-4xl font-semibold leading-tight md:text-6xl">
              {t.title}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
              {t.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs uppercase tracking-[0.16em] text-white/50">
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
              ← {lang === "zh" ? "返回装修指南" : "Back to insights"}
            </Link>
          </div>
        </section>

        <article className="mx-auto max-w-5xl px-6 py-14 md:py-20">
          <section className="mb-14 rounded-3xl border border-[#e8e1d7] bg-white p-6 shadow-sm md:p-8">
            <h2 className="font-serif text-3xl font-semibold">
              {t.quickAnswerTitle}
            </h2>
            <p className="mt-4 text-base leading-8 text-[#5f5a54]">
              {t.quickAnswer}
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {t.summaryCards.map((card) => (
                <div
                  key={card.label}
                  className="rounded-2xl border border-[#e8e1d7] bg-[#fffdf8] p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8b8176]">
                    {card.label}
                  </p>
                  <p className="mt-2 font-serif text-2xl font-semibold text-[#2C2C2C]">
                    {card.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#6f6a63]">
                    {card.note}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {t.sections.map((section) => (
            <section key={section.title} className="mb-14">
              <h2 className="border-b border-[#e8e1d7] pb-4 font-serif text-3xl font-semibold">
                {section.title}
              </h2>
              <div className="mt-6 space-y-4">
                {section.paragraphs?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base leading-8 text-[#5f5a54]"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="grid gap-3 md:grid-cols-2">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 rounded-2xl border border-[#e8e1d7] bg-white p-4 text-sm leading-7 text-[#5f5a54]"
                      >
                        <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#C5A059]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.scenario && (
                  <div className="rounded-2xl border-l-4 border-[#C5A059] bg-[#f4eee4] px-5 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8a6e36]">
                      {lang === "zh" ? "实际情境" : "Real-world scenario"}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[#5f5a54]">
                      {section.scenario}
                    </p>
                  </div>
                )}
                {section.link && (
                  <Link
                    to={section.link.to}
                    className="inline-flex items-center rounded-full border border-[#C5A059]/45 bg-[#fffaf0] px-5 py-2.5 text-sm font-semibold text-[#7c642f] hover:border-[#C5A059] hover:bg-white"
                  >
                    {section.link.label} →
                  </Link>
                )}
              </div>
            </section>
          ))}

          <section className="mb-14">
            <h2 className="border-b border-[#e8e1d7] pb-4 font-serif text-3xl font-semibold">
              {t.comparisonTitle}
            </h2>
            <p className="mt-5 text-base leading-8 text-[#5f5a54]">
              {t.comparisonIntro}
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-[#e8e1d7] bg-white">
              <div className="hidden grid-cols-[0.8fr_1.6fr_1.4fr] gap-4 border-b border-[#e8e1d7] bg-[#efe6d8] px-5 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#6f6a63] md:grid">
                <span>{lang === "zh" ? "项目类型" : "Project type"}</span>
                <span>{lang === "zh" ? "主要检查" : "Main checks"}</span>
                <span>{lang === "zh" ? "常见时间风险" : "Common timeline risk"}</span>
              </div>
              {t.comparisonRows.map((row) => (
                <div
                  key={row.project}
                  className="grid gap-3 border-b border-[#e8e1d7] p-5 last:border-b-0 md:grid-cols-[0.8fr_1.6fr_1.4fr] md:gap-4"
                >
                  <h3 className="font-semibold text-[#2C2C2C]">{row.project}</h3>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#8b8176] md:hidden">
                      {lang === "zh" ? "主要检查" : "Main checks"}
                    </p>
                    <p className="text-sm leading-7 text-[#5f5a54]">{row.mainChecks}</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#8b8176] md:hidden">
                      {lang === "zh" ? "常见时间风险" : "Common timeline risk"}
                    </p>
                    <p className="text-sm leading-7 text-[#5f5a54]">{row.timelineRisk}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14 rounded-3xl border border-[#d9c7aa] bg-[#fffaf0] p-6 shadow-sm md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6e36]">
              {lang === "zh" ? "管理处文件审核" : "Fit-out guide review"}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-[#2C2C2C]">
              {t.reviewCtaTitle}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#5f5a54]">
              {t.reviewCtaText}
            </p>
            <div className="mt-5 grid gap-3 text-sm text-[#5f5a54] sm:grid-cols-3">
              <div className="rounded-2xl border border-[#dfd4c4] bg-white px-4 py-3">
                {lang === "zh" ? "先看实际单位与营业用途" : "Review the actual unit and business use"}
              </div>
              <div className="rounded-2xl border border-[#dfd4c4] bg-white px-4 py-3">
                {lang === "zh" ? "说明审批与各方责任" : "Clarify approvals and responsibilities"}
              </div>
              <div className="rounded-2xl border border-[#dfd4c4] bg-white px-4 py-3">
                {lang === "zh" ? "规划较实际的搬迁时间" : "Plan a realistic move-in programme"}
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-full bg-[#C5A059] px-6 py-3 text-sm font-semibold text-white hover:bg-[#D6B26B]"
              >
                {t.reviewCtaPrimary}
              </Link>
              <Link
                to="/commercial"
                className="rounded-full border border-[#C5A059]/45 bg-white px-6 py-3 text-sm font-semibold text-[#7c642f] hover:border-[#C5A059]"
              >
                {t.reviewCtaSecondary}
              </Link>
            </div>
          </section>

          <section className="mb-14">
            <h2 className="border-b border-[#e8e1d7] pb-4 font-serif text-3xl font-semibold">
              {t.timelineTitle}
            </h2>
            <p className="mt-5 text-base leading-8 text-[#5f5a54]">
              {t.timelineIntro}
            </p>
            <div className="mt-6 grid gap-3">
              {t.timeline.map((item) => (
                <div
                  key={item.step}
                  className="grid grid-cols-[42px_1fr] gap-4 rounded-2xl border border-[#e8e1d7] bg-[#fffdf8] p-5 shadow-sm"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C5A059] text-sm font-bold text-white">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-7 text-[#5f5a54]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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
                  <p className="mt-2 text-sm leading-7 text-[#5f5a54]">
                    {mistake.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14 rounded-3xl border border-[#dfd4c4] bg-[#efe6d8] p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6e36]">
              {lang === "zh" ? "项目规划提示" : "Project planning note"}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold">
              {lang === "zh"
                ? "不要只问施工需要多久"
                : "Do not ask only how long construction takes"}
            </h2>
            <p className="mt-4 text-base leading-8 text-[#5f5a54]">
              {lang === "zh"
                ? "更有用的问题是：从设计确认到审批、施工、检查和正式搬入，整个过程需要多久？这才是安排租金、搬迁、员工和开业日期时真正需要的时间。"
                : "The more useful question is: how long will the whole journey take from design confirmation to approvals, construction, inspection and actual move-in? That is the timeline needed to plan rent, relocation, staff and business opening."}
            </p>
          </section>

          <section className="mb-14">
            <h2 className="border-b border-[#e8e1d7] pb-4 font-serif text-3xl font-semibold">
              {t.relatedKnowledgeTitle}
            </h2>
            <p className="mt-5 text-base leading-8 text-[#5f5a54]">
              {t.relatedKnowledgeIntro}
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {t.relatedKnowledge.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="group rounded-2xl border border-[#e8e1d7] bg-white p-5 shadow-sm transition hover:border-[#C5A059] hover:bg-[#fffdf8]"
                >
                  <h3 className="text-lg font-semibold text-[#2C2C2C] group-hover:text-[#8a6e36]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#5f5a54]">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-flex text-sm font-semibold text-[#7c642f]">
                    {item.label} →
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-14 rounded-3xl border border-[#d9c7aa] bg-[#fffaf0] p-6 shadow-sm md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6e36]">
              {lang === "zh" ? "信任与责任" : "Trust and responsibility"}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-[#2C2C2C]">
              {t.trustTitle}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#5f5a54]">
              {t.trustIntro}
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {t.trustPoints.map((point) => (
                <div
                  key={point.title}
                  className="rounded-2xl border border-[#dfd4c4] bg-white p-5"
                >
                  <h3 className="text-lg font-semibold text-[#2C2C2C]">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#5f5a54]">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border-l-4 border-[#C5A059] bg-white px-5 py-4">
              <p className="text-sm leading-7 text-[#5f5a54]">
                {t.trustNote}
              </p>
            </div>
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
                  <p className="mt-3 text-sm leading-7 text-[#5f5a54]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <section className="mb-14 rounded-3xl border border-[#d9c7aa] bg-[#fffaf0] p-6 shadow-sm md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6e36]">
              {t.assuranceEyebrow}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-[#2C2C2C]">
              {t.assuranceTitle}
            </h2>
            <div className="mt-4 max-w-3xl space-y-3">
              {t.assuranceText.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-8 text-[#5f5a54]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/commercial-renovation-planner"
                className="rounded-full bg-[#C5A059] px-6 py-3 text-sm font-semibold text-white hover:bg-[#D6B26B]"
              >
                {t.assurancePlannerLabel}
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-[#C5A059]/45 bg-white px-6 py-3 text-sm font-semibold text-[#7c642f] hover:border-[#C5A059]"
              >
                {t.assuranceContactLabel}
              </Link>
            </div>
          </section>

          <section className="rounded-3xl bg-[#151515] p-7 text-white md:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C5A059]">
              ID Work Studio
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold">
              {t.ctaTitle}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70">
              {t.ctaText}
            </p>
            <div className="mt-5 grid gap-3 text-sm text-white/75 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                {lang === "zh" ? "提供平面图、装修指南和营业类型" : "Share the floor plan, fit-out guide and intended trade"}
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                {lang === "zh" ? "识别审批、专业人士与未知事项" : "Identify approvals, specialists and unknowns"}
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                {lang === "zh" ? "从目标开业日期倒推现实时间" : "Work backwards from the target opening date"}
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-full bg-[#C5A059] px-6 py-3 text-sm font-semibold text-white hover:bg-[#D6B26B]"
              >
                {t.ctaPrimary}
              </Link>
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
