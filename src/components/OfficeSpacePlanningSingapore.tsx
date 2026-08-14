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
 * ☑ Commercial
 * □ Residential
 * □ Both
 *
 * Primary Knowledge Topic:
 * Office Space Planning
 *
 * Primary Entity:
 * Office Renovation
 *
 * Related Planning Tool:
 * None
 *
 * Related Service Page:
 * /commercial/office-renovation
 *
 * Related Guides:
 * /insights/office-renovation-cost-singapore
 * /insights/office-renovation-timeline-singapore
 * /insights/commercial-renovation-approvals-singapore
 *
 * ============================================================================
 *
 * VERIFIED REGULATORY BASIS (checked 14 Aug 2026)
 *
 * SCDF Fire Code 2023, current SCDF online edition:
 * - Table 1.4B occupant load factors
 * - Table 2.2A exit/travel distance requirements
 * - Clause 2.2 exit determination / capacity / travel distance
 * - Clause 9.4 Purpose Group IV (office) occupancy
 * - SCDF plan approval / Minor A&A / FSC & TFP procedures
 *
 * IMPORTANT:
 * - 10m²/person for office and 1.5m²/person for meeting/conference rooms are
 *   FIRE-SAFETY OCCUPANT LOAD FACTORS, not ergonomic or comfort standards.
 * - JLL's 12 rentable m²/seat is an APAC workplace-density benchmark, not
 *   Singapore legislation and not a universal recommendation.
 * - Actual fire-safety design and submission requirements depend on the
 *   building, tenancy, use and scope. A Qualified Person (QP) must verify the
 *   applicable requirements where regulated fire-safety works are involved.
 *
 * ============================================================================
 */

type PlanningRow = {
  seats: string;
  benchmark: string;
  note: string;
};

type ScdfFactorRow = {
  space: string;
  factor: string;
  meaning: string;
};

type SectionLink = {
  label: string;
  to: string;
  text: string;
};

type ArticleSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  links?: SectionLink[];
};

type Scenario = {
  title: string;
  summary: string;
  items: string[];
  conclusion: string;
};

type ScdfCheck = {
  title: string;
  text: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type SourceItem = {
  label: string;
  href: string;
};

type ArticleContent = {
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  heroAlt: string;
  quickAnswerTitle: string;
  quickAnswer: string;
  benchmarkTitle: string;
  benchmarkIntro: string;
  planningRows: PlanningRow[];
  benchmarkNote: string;
  sections: ArticleSection[];
  scenarioTitle: string;
  scenarios: Scenario[];
  scdfTitle: string;
  scdfIntro: string;
  scdfFactors: ScdfFactorRow[];
  scdfFactorNote: string;
  scdfChecksTitle: string;
  scdfChecks: ScdfCheck[];
  scdfSubmissionTitle: string;
  scdfSubmissionParagraphs: string[];
  workedExampleTitle: string;
  workedExampleIntro: string;
  workedExampleRows: { label: string; value: string; note: string }[];
  workedExampleConclusion: string;
  trendsTitle: string;
  trendsIntro: string;
  trends: { title: string; text: string }[];
  mistakesTitle: string;
  mistakes: { title: string; text: string }[];
  preLeaseTitle: string;
  preLeaseIntro: string;
  preLeaseItems: string[];
  midCtaTitle: string;
  midCtaText: string;
  midCtaButton: string;
  faqTitle: string;
  faqs: FaqItem[];
  finalCtaTitle: string;
  finalCtaText: string;
  finalCtaPrimary: string;
  finalCtaSecondary: string;
  sourcesTitle: string;
  sourcesNote: string;
  sources: SourceItem[];
  breadcrumbCurrent: string;
};

const content: Record<"en" | "zh", ArticleContent> = {
  en: {
    metaTitle:
      "How Much Office Space Do You Need in Singapore? Headcount, Layout & SCDF Guide | ID Work Studio",
    metaDescription:
      "Work out how much office space you need in Singapore using headcount, peak occupancy, meeting rooms, phone booths and SCDF fire-safety requirements. Includes office sizing benchmarks, escape planning and practical fit-out guidance.",
    canonical:
      "https://idworkstudio.com/insights/how-much-office-space-do-you-need-singapore",
    eyebrow: "Singapore Office Planning Guide · 2026",
    title:
      "How Much Office Space Do You Need in Singapore? Space Planning, Headcount & SCDF Requirements Explained",
    subtitle:
      "Headcount is only the starting point. A practical office plan must also allow for peak attendance, meeting rooms, private calls, support spaces, future growth and the fire-safety constraints of the actual building.",
    category: "Commercial · Office Planning",
    readTime: "14 min read",
    heroAlt:
      "Modern Singapore office space planning with workstations, meeting rooms and private focus spaces",

    quickAnswerTitle: "Quick answer: do not size an office by headcount alone",
    quickAnswer:
      "There is no single Singapore law that says every employee must have a fixed number of square feet for comfortable office planning. A useful external benchmark is JLL's Asia-Pacific workplace-density average of about 12 rentable m² per seat (about 129 sqft per seat), but it is a benchmark—not a Singapore statutory minimum. Your actual requirement depends on how many seats you need at peak attendance, how much enclosed meeting and focus space you require, how much support space the business consumes, and whether the final layout satisfies the building's fire-safety and accessibility requirements.",

    benchmarkTitle: "A starting benchmark for 10, 20, 30 and 50 seats",
    benchmarkIntro:
      "The table below simply applies JLL's reported Asia-Pacific average of 12 rentable m² per seat. Use it as a sense-check while shortlisting units, not as a final design formula.",
    planningRows: [
      {
        seats: "10 seats",
        benchmark: "~120 m² / ~1,292 sqft",
        note: "May be enough for a compact team, but meeting rooms, pantry, reception and private rooms can move the requirement quickly.",
      },
      {
        seats: "20 seats",
        benchmark: "~240 m² / ~2,583 sqft",
        note: "Check whether the business needs assigned desks, shared seats, private offices, client rooms or several simultaneous calls.",
      },
      {
        seats: "30 seats",
        benchmark: "~360 m² / ~3,875 sqft",
        note: "The difference between an open-plan SME and a client-facing professional firm can become significant at this size.",
      },
      {
        seats: "50 seats",
        benchmark: "~600 m² / ~6,458 sqft",
        note: "Large meeting or training spaces, peak occupancy, exit capacity and future growth become increasingly important.",
      },
    ],
    benchmarkNote:
      "Benchmark ≠ regulation. SCDF occupant-load factors are separate fire-safety calculations. They should never be used as a comfort-space recommendation.",

    sections: [
      {
        title: "Why “sqft per employee” can give you the wrong office",
        paragraphs: [
          "Two companies with 30 employees can need very different offices. One may be hybrid, mainly open-plan and rarely receive visitors. Another may have six managers who need private rooms, a sales team making calls all day, regular client meetings and a 20-person training room.",
          "The first company can put a larger share of its floor area into shared workstations. The second needs more enclosed rooms, circulation, acoustic separation and support space. Both have the same payroll headcount, but the second office may need substantially more usable area and usually more fit-out work.",
          "The practical question is therefore not “How many employees do I have?” It is “What must this office allow those people to do at the same time?”",
        ],
      },
      {
        title: "Start with three headcount numbers, not one",
        paragraphs: [
          "For a modern Singapore office, record total headcount, typical daily attendance and peak occupancy. Total headcount tells you the size of the organisation. Typical attendance helps estimate day-to-day demand. Peak occupancy tells you whether the office still works on the busiest realistic day.",
          "Peak occupancy should include employees, regular visitors and any realistic simultaneous use of meeting, training or event spaces. A hybrid company with 40 employees may usually have only 25 people present, but if Wednesday regularly brings 35 staff back into the office, designing only for the average can create an immediate capacity problem.",
          "Singapore's Tripartite Guidelines on Flexible Work Arrangement Requests have made flexible-work requests a formal part of employment practice. That does not mean every company should reduce its seat count; it means actual attendance patterns should be understood before a lease or layout is fixed.",
        ],
        bullets: [
          "Total headcount: everyone employed by the business.",
          "Typical daily attendance: the number usually present.",
          "Peak occupancy: the busiest realistic combination of staff, visitors and gatherings.",
        ],
      },
      {
        title: "How many desks do you actually need?",
        paragraphs: [
          "A company using assigned seating may need close to one workstation per office-based employee. A genuinely hybrid team may be able to use shared seating, but only if peak attendance and team routines support it.",
          "The mistake is to assume that removing ten desks automatically lets you rent an office that is ten desks smaller. Modern hybrid offices often use some of that saved area for phone booths, focus rooms, small meeting rooms and collaboration areas.",
          "JLL's 2026 fit-out research also shows that workspace typology materially affects fit-out cost. High-spatial-variety workplaces combine open work areas with enclosed collaboration and focus spaces; this gives staff more choice, but those extra room types require more design and building services than rows of open desks.",
        ],
      },
      {
        title: "Open-plan offices need somewhere for private calls",
        paragraphs: [
          "An open office may fit the workstation count perfectly and still fail operationally. If three employees need confidential Teams calls at the same time and the only enclosed room is a six-person meeting room, one person can end up occupying the meeting room alone while others speak at their desks or leave the office.",
          "For call-heavy teams, plan a mix of one-person phone or focus rooms, small two-to-four-person discussion rooms and normal meeting rooms. There is no reliable Singapore rule such as “one phone booth for every five employees”; the right number depends on simultaneous call demand, confidentiality and how often teams use video meetings.",
          "This has become more important as meeting transcription, AI-assisted calls and video collaboration increase the value of controlled acoustics. Private spaces are no longer a luxury add-on for many open offices; they can be part of the basic operating plan.",
        ],
      },
      {
        title: "A meeting room that fits 12 chairs is not automatically a good 12-person room",
        paragraphs: [
          "Meeting-room capacity should not be decided by squeezing in the maximum number of chairs. The room still needs a workable table, chair movement, circulation, a clear route to the door, screen visibility, acoustic control, cooling and ventilation, and suitable access.",
          "Large meeting and training rooms need even more care because they create short periods of dense occupancy. A company may have 30 employees but still plan a 40-person town-hall or training room for visitors and staff. Fire-safety planning therefore looks at the function of the space, not just the company's normal desk count.",
          "When a room has several possible uses, the fire-safety assessment may need to consider the use that creates the greatest occupant load. This is one reason a flexible event/training room should be checked before the partition layout is finalised.",
        ],
      },
      {
        title: "Plan departments around work behaviour, not only the organisation chart",
        paragraphs: [
          "A sales team may need frequent phone privacy and quick access to small meeting rooms. Accounts may need longer periods of focused, confidential work. Designers may need large monitors, sample storage and project tables. Management may need private conversations and client meeting space.",
          "This is more useful than giving every department the same workstation module and then discovering that half the meeting rooms are permanently occupied by one-person calls.",
          "For space planning, ask what each team does repeatedly during a normal week: focused work, calls, client meetings, collaboration, training, storage, equipment use and visitor reception. The layout should respond to those behaviours.",
        ],
      },
      {
        title: "Fewer desks do not necessarily mean a cheaper office renovation",
        paragraphs: [
          "In Singapore, enclosed rooms can be expensive square footage. A phone room or meeting room may need partitions, a door, acoustic treatment, lighting, power and data, air-conditioning coordination, sprinkler or detector coordination and meeting technology.",
          "Cushman & Wakefield's 2026 Singapore office fit-out research reports an average collaborative-hybrid fit-out cost of about S$180 psf, with highly specified hybrid workplaces costing more because of items including enhanced acoustics and integrated technology. The exact cost of your project will depend on the existing unit and specification, but the direction is clear: space variety can improve usability while increasing fit-out complexity.",
          "If you are comparing layouts or budgets, use the office-cost guide for the renovation side rather than assuming that a smaller desk count equals a proportionately smaller budget.",
        ],
        links: [
          {
            label: "Office renovation cost guide",
            to: "/insights/office-renovation-cost-singapore",
            text: "See what normally drives office renovation cost in Singapore",
          },
        ],
      },
      {
        title: "Do not design only for today's headcount",
        paragraphs: [
          "A 25-person business that expects to reach 35 within the lease term should test that scenario before committing to a fixed plan. The answer is not always to rent a much larger unit from day one. It may be to keep selected areas adaptable, use modular or demountable elements where sensible, and avoid creating rooms that can never change use.",
          "The 2026 workplace direction is increasingly about adaptability: organisations are trying to preserve the ability to reconfigure as hybrid attendance, team structures, technology and AI-enabled work continue to change.",
          "Future flexibility also matters at lease exit. Permanent partitions and services may have reinstatement consequences, so today's fit-out decision can become tomorrow's handover cost.",
        ],
      },
    ],

    scenarioTitle: "Same headcount, very different office",
    scenarios: [
      {
        title: "Company A · 30 staff",
        summary: "Hybrid, low visitor volume, mainly open-plan work",
        items: [
          "24–26 workpoints rather than 30 assigned desks",
          "1 normal meeting room",
          "2 phone/focus rooms",
          "Compact pantry and storage",
          "Little client reception space",
        ],
        conclusion:
          "A larger share of the floor can remain open and flexible, provided peak attendance has been tested.",
      },
      {
        title: "Company B · 30 staff",
        summary: "Client-facing, call-heavy and privacy-sensitive",
        items: [
          "30 assigned workstations",
          "Several private manager rooms",
          "3–4 phone/focus rooms",
          "Small discussion room + client meeting room",
          "20-person training / presentation room",
        ],
        conclusion:
          "The same 30-person headcount can require much more enclosed area, circulation, acoustic work and fire-safety coordination.",
      },
    ],

    scdfTitle: "SCDF: why fire-safety planning can change your office layout",
    scdfIntro:
      "For office fit-outs, the Singapore Civil Defence Force (SCDF) Fire Code is not a late-stage decoration check. Occupant load, escape paths, exit capacity and the building's existing fire-protection systems can affect where rooms and partitions can sensibly go. The following figures are fire-safety calculations—not comfort-space recommendations.",

    scdfFactors: [
      {
        space: "General office / business centre",
        factor: "10 m²/person",
        meaning:
          "Used to calculate fire-safety occupant load for normal office floor space.",
      },
      {
        space: "Meeting / conference room",
        factor: "1.5 m²/person",
        meaning:
          "Recognises the much denser gathering potential of a meeting or conference space.",
      },
      {
        space: "Director / manager room",
        factor: "15 m²/person",
        meaning:
          "A different functional-space factor applies from the open office.",
      },
      {
        space: "Reception / staff lounge",
        factor: "3 m²/person",
        meaning:
          "Reception and lounge functions can have higher calculated occupant density than general office areas.",
      },
      {
        space: "Server room",
        factor: "30 m²/person",
        meaning:
          "A technical room with relatively low normal occupancy has a much lower calculated occupant density.",
      },
    ],
    scdfFactorNote:
      "Example: a 30 m² meeting room divided by the SCDF meeting-room factor of 1.5 m²/person gives a fire-safety occupant load of 20 persons. This does not mean SCDF is recommending 1.5 m² as comfortable meeting-room space.",

    scdfChecksTitle: "SCDF requirements that commonly affect office space planning",
    scdfChecks: [
      {
        title: "1. Occupant load by functional space",
        text:
          "The QP does not simply count payroll headcount. Different areas can use different occupant-load factors under SCDF Table 1.4B. A dense meeting, conference or multipurpose area can therefore affect the calculated load even when normal desk occupancy is modest.",
      },
      {
        title: "2. Number and capacity of exits",
        text:
          "Exit doors, corridors, exit passageways and staircases must have adequate capacity for the occupant load they serve. Where two exits are required from a room or space, SCDF requires each exit to accommodate at least half of that room or space's occupant load.",
      },
      {
        title: "3. Travel distance to an exit",
        text:
          "For offices, SCDF Table 2.2A gives maximum one-way travel distances of 15 m in a non-sprinklered condition and 30 m when sprinkler-protected; two-way travel distances are 45 m and 75 m respectively. The measurement is based on the actual escape route, so adding partitions can change compliance.",
      },
      {
        title: "4. Dead ends and corridor width",
        text:
          "For offices, Table 2.2A gives maximum dead-end corridor lengths of 15 m non-sprinklered and 20 m sprinklered, and a general minimum corridor width of 1.2 m. A narrow or long internal corridor created by a new fit-out should therefore not be treated as leftover space.",
      },
      {
        title: "5. Single-exit office floors are an exception, not a default",
        text:
          "SCDF Clause 9.4 permits one exit staircase for certain small aboveground office floors only when the stated conditions are met, including occupant load below 50 persons, accessible floor area not exceeding 200 m², storey/habitable-height limits and the relevant one-way travel-distance limits. A larger or different office cannot assume that the same single-exit arrangement is acceptable.",
      },
      {
        title: "6. Exit remoteness and alternative escape",
        text:
          "Where multiple exits are required, their arrangement matters. Fire-safety design aims to reduce the risk that one incident blocks all available escape routes. A visually convenient layout can still be poor if partitions channel everyone towards the same vulnerable route.",
      },
      {
        title: "7. Doors serving occupied rooms",
        text:
          "Door clear width, door operation and the room's occupant load all matter to escape planning. Higher-occupancy meeting or training rooms should be reviewed before the table and seating layout is fixed; adding chairs does not increase the safe capacity of the exit arrangement.",
      },
      {
        title: "8. Exit signs and emergency lighting",
        text:
          "New partitions can change sightlines and escape routes. Existing exit signs and emergency lighting may therefore need review so that occupants can still identify and use the required escape route after the fit-out.",
      },
      {
        title: "9. Sprinklers, alarms, detectors and hose-reel coverage",
        text:
          "Partitioning an open floor into rooms can affect the existing fire-protection layout. Sprinkler heads, detectors, alarm devices and other systems cannot simply be boxed in or assumed to remain suitable. Fire-protection changes must be coordinated with the relevant QP and specialists where triggered.",
      },
      {
        title: "10. Fire-rated construction and compartmentation",
        text:
          "Where the building's approved fire-safety design relies on fire-rated walls, doors, shafts or protected routes, renovation works must not compromise them. Openings, penetrations and services passing through fire-rated construction require proper detailing and fire stopping where applicable.",
      },
      {
        title: "11. Air-conditioning, ventilation and smoke-control interfaces",
        text:
          "Moving partitions or changing room use can affect air-conditioning and mechanical ventilation. Where systems form part of the building's fire or smoke-control strategy, alterations need coordinated review rather than being treated only as comfort cooling.",
      },
      {
        title: "12. Escape provisions for persons with disabilities",
        text:
          "SCDF includes special means-of-escape provisions for persons with disabilities, while BCA's current accessibility code provides baseline barrier-free requirements for applicable building works. Accessibility should therefore be considered together with fire safety and circulation, not after the layout is complete.",
      },
    ],

    scdfSubmissionTitle:
      "Does every office renovation need a new SCDF submission?",
    scdfSubmissionParagraphs: [
      "No. It is not accurate to say that every office refresh automatically needs a fresh SCDF plan submission. SCDF states that proposed fire-safety works require approval and are submitted by a Qualified Person (QP), while exempted works and qualifying minor Addition & Alteration works follow the applicable exemption or minor-A&A process.",
      "Where the project includes regulated fire-safety works or other changes that require formal approval, the relevant plans should be prepared and submitted by the QP before the affected works proceed. This is why fire-safety review belongs early in space planning rather than after construction drawings are finished.",
      "For projects that require a Fire Safety Certificate (FSC) or Temporary Fire Permit (TFP), SCDF states that the fire-safety works must first be approved and completed in accordance with requirements. A Registered Inspector may then be required to inspect and certify the fire-safety works before the FSC/TFP application. The exact route depends on the building and project scope.",
      "In practical terms: do not assume either “SCDF approval is always required” or “this is only an interior renovation, so SCDF is irrelevant.” Confirm the actual fit-out scope and building records early with the appropriate QP and building management.",
    ],

    workedExampleTitle: "Where does a 2,500 sqft office actually go?",
    workedExampleIntro:
      "This is an illustrative planning example for a 20-seat office—not a prescribed Singapore standard. It shows why a tenancy's advertised floor area is not the same as workstation area.",
    workedExampleRows: [
      {
        label: "Workstations / immediate work area",
        value: "~1,000 sqft",
        note: "20 workpoints with local circulation and storage allowance.",
      },
      {
        label: "Meeting + discussion spaces",
        value: "~450 sqft",
        note: "One normal meeting room plus one small discussion room.",
      },
      {
        label: "Phone / focus rooms",
        value: "~120 sqft",
        note: "Two compact private-call spaces.",
      },
      {
        label: "Reception + pantry + shared support",
        value: "~400 sqft",
        note: "Reception, pantry, printer/storage and IT/server support.",
      },
      {
        label: "Main circulation / planning buffer",
        value: "~530 sqft",
        note: "Routes between spaces, access around rooms and planning tolerance.",
      },
    ],
    workedExampleConclusion:
      "The point is not that every 20-person office should use these exact percentages. The point is that a floor plan must allocate area to the activities and support functions the business needs before anyone decides whether the unit is “big enough.”",

    trendsTitle: "What changed in office planning from 2025 to 2026?",
    trendsIntro:
      "The useful changes are not cosmetic trends. They affect how much built space an office needs and how that space is serviced.",
    trends: [
      {
        title: "Privacy is returning to the open office",
        text:
          "Focus rooms, phone rooms and small enclosed discussion spaces are becoming more important because workers still need concentrated work and confidential calls even when the main office remains open-plan.",
      },
      {
        title: "AI is affecting physical meeting spaces",
        text:
          "AI-assisted transcription, video meetings and integrated meeting technology increase the importance of acoustics, camera position, lighting, connectivity and rooms where confidential discussions can be recorded without disturbing the open office.",
      },
      {
        title: "Space is being planned around activities, not only desks",
        text:
          "JLL's current fit-out research distinguishes progressive, high-spatial-variety and traditional office typologies. A hybrid office can have fewer assigned desks but more types of spaces for focus, calls and collaboration.",
      },
      {
        title: "Adaptability has become a design requirement",
        text:
          "JLL's 2026 guidance emphasises adaptable design and reconfiguration because workforce patterns and technology needs remain uncertain. A good fit-out should test how the office can change during the lease, not just how it looks on opening day.",
      },
    ],

    mistakesTitle: "Common office space-planning mistakes",
    mistakes: [
      {
        title: "Multiplying headcount by one magic sqft number",
        text:
          "Benchmarks help shortlist units, but they do not know your meeting demand, private-room requirements, peak attendance or building constraints.",
      },
      {
        title: "Planning to average attendance instead of peak attendance",
        text:
          "A hybrid office that works on Friday can still fail every Wednesday if that is when most teams return.",
      },
      {
        title: "Using meeting rooms as phone booths",
        text:
          "If a six-person room is regularly occupied by one caller, the office is missing the smaller private spaces its work pattern requires.",
      },
      {
        title: "Adding a large training room without testing occupant load",
        text:
          "A dense gathering space can materially change fire-safety calculations and exit planning even when normal desk headcount is modest.",
      },
      {
        title: "Drawing partitions before checking escape routes",
        text:
          "New rooms can increase travel distance, create dead ends, change sightlines to exits and interfere with existing fire-protection systems.",
      },
      {
        title: "Assuming fewer desks means a cheaper fit-out",
        text:
          "A smaller desk count can be offset by more enclosed rooms, acoustic construction, M&E coordination and meeting technology.",
      },
    ],

    preLeaseTitle: "Before signing an office lease, test these 10 things",
    preLeaseIntro:
      "A unit that looks large enough on a property listing may still be wrong for the way your company operates. Test the floor plan before you commit.",
    preLeaseItems: [
      "Total headcount, typical daily attendance and realistic peak occupancy.",
      "Number of assigned or shared workstations actually required.",
      "Simultaneous phone-call and confidential-focus demand.",
      "Small meeting, client meeting, boardroom and training-room capacity.",
      "Reception, pantry, storage, printer, server/IT and other support areas.",
      "Existing exits, internal travel paths and likely partition positions.",
      "Existing sprinklers, detectors, alarms, emergency lighting and exit signs that may be affected by rooms.",
      "Building management / landlord fit-out rules and the approved use of the premises.",
      "Future headcount or layout changes during the lease term.",
      "Likely renovation budget and programme after the workable layout is known.",
    ],

    midCtaTitle: "Not sure whether the unit is actually large enough?",
    midCtaText:
      "Send us the floor plan, approximate floor area, expected headcount and how your team works. We can help you identify whether the unit can realistically accommodate the workstations, meeting spaces, private calls and support areas before you lock the renovation scope.",
    midCtaButton: "Discuss Your Office Layout",

    faqTitle: "Frequently asked questions",
    faqs: [
      {
        question: "How much office space do I need per employee in Singapore?",
        answer:
          "There is no single Singapore statutory comfort-space figure per employee. As an external benchmark, JLL reports an Asia-Pacific average workplace density of about 12 rentable m² per seat (about 129 sqft). Use that only as a starting benchmark. Actual office size should be planned around peak attendance, workstations, meeting and focus rooms, support spaces and the building's compliance constraints.",
      },
      {
        question: "Is 1,000 sqft enough for 10 employees?",
        answer:
          "It can be for a compact team with limited enclosed rooms, but it may be tight once you add a meeting room, pantry, reception, storage and private-call space. A floor-plan test is more useful than deciding from 100 sqft per person alone.",
      },
      {
        question: "How much office space should I consider for 20 employees?",
        answer:
          "Applying JLL's 12 rentable m²-per-seat APAC benchmark gives roughly 240 m² or 2,583 sqft for 20 seats. It is not a rule. A hybrid team with shared seating may use less, while a client-facing firm with private rooms and several meeting spaces may need more.",
      },
      {
        question: "Is 2,000 sqft enough for 30 employees?",
        answer:
          "Possibly for a dense, mainly open-plan layout, but 2,000 sqft can become constrained once you include meeting rooms, private calls, pantry, storage and circulation. It is also well below the simple 12 rentable m²-per-seat APAC benchmark for 30 seats, so the proposed work pattern and peak occupancy should be tested carefully.",
      },
      {
        question: "What is the SCDF occupant-load factor for an office?",
        answer:
          "SCDF Table 1.4B uses 10 m² per person for general office/business-centre occupant-load calculations. This is a fire-safety calculation used for exit planning; it is not a recommendation that each employee should be given exactly 10 m² of comfortable workspace.",
      },
      {
        question: "What is the SCDF occupant-load factor for a meeting room?",
        answer:
          "SCDF Table 1.4B uses 1.5 m² per person for meeting and conference rooms. For example, 30 m² divided by 1.5 m²/person gives an occupant load of 20 people for fire-safety calculation. It does not mean 1.5 m² per person is a recommended meeting-room comfort standard.",
      },
      {
        question: "How far can an office be from an exit under SCDF rules?",
        answer:
          "For offices, SCDF Table 2.2A lists maximum one-way travel distances of 15 m for non-sprinklered and 30 m for sprinkler-protected conditions, and two-way travel distances of 45 m and 75 m respectively. The actual route and other Fire Code conditions must be checked by the QP for the specific building.",
      },
      {
        question: "Does every office renovation require SCDF approval?",
        answer:
          "No. Proposed fire-safety works require SCDF approval and QP submission, while exempted works and qualifying minor A&A works follow the applicable procedures. Whether your office fit-out needs a formal submission depends on the actual renovation scope and building. Confirm this before work starts rather than assuming either way.",
      },
      {
        question: "How many phone booths should an open office have?",
        answer:
          "There is no reliable universal Singapore ratio. Plan from simultaneous call demand instead: how many people are likely to need private calls at the same time, how confidential those calls are, and whether small rooms are being used by one person because no phone rooms exist.",
      },
      {
        question: "Should I plan for current headcount or future growth?",
        answer:
          "Plan for today's realistic peak occupancy and test at least one credible growth scenario within the lease term. The most cost-effective answer may be adaptable space rather than permanently building every possible future room on day one.",
      },
    ],

    finalCtaTitle: "Plan the office before the fit-out locks you in",
    finalCtaText:
      "Share the unit floor plan, headcount, expected meeting patterns and target move-in date with ID Work Studio. We can review how the office could be planned, identify practical fit-out and approval dependencies, and help you decide whether the unit works before you commit to the final renovation scope.",
    finalCtaPrimary: "Send Floor Plan for Review",
    finalCtaSecondary: "View Office Renovation Services",

    sourcesTitle: "Primary references used for this guide",
    sourcesNote:
      "Regulatory figures are taken from current Singapore authority sources. Workplace-density and fit-out figures are industry benchmarks, not statutory requirements.",
    sources: [
      {
        label: "SCDF Fire Code 2023 — Table 1.4B Occupant Load Factors",
        href: "https://www.scdf.gov.sg/fire-safety-services-listing/fire-code-2023/table-of-content/chapter-1-general/related-tables-and-diagrams-of-chapter-1",
      },
      {
        label: "SCDF Fire Code 2023 — Table 2.2A Exit Requirements",
        href: "https://www.scdf.gov.sg/fire-safety-services-listing/fire-code-2023/table-of-content/chapter-2-means-of-escape/related-tables-and-diagrams-of-chapter-2/",
      },
      {
        label: "SCDF Fire Code 2023 — Purpose Group IV Office Occupancy",
        href: "https://www.scdf.gov.sg/fire-safety-services-listing/fire-code-2023/table-of-content/chapter-9-additional-requirements-for-each-purpose-group/clause-9.4-purpose-group-iv-occupancy",
      },
      {
        label: "SCDF — Plan Approval / Fire Safety Works",
        href: "https://www.scdf.gov.sg/fire-safety-services-listing/plans-submission-process/plan-approval",
      },
      {
        label: "SCDF — Fire Safety Certificate & Temporary Fire Permit",
        href: "https://www.scdf.gov.sg/fire-safety-services-listing/plans-submission-process/fire-safety-certificate-temporary-fire-permit",
      },
      {
        label: "BCA — Code on Accessibility in the Built Environment 2025",
        href: "https://www1.bca.gov.sg/safety-and-standards/accessibility/code-on-accessibility-in-the-built-environment/",
      },
      {
        label: "MOM — Tripartite Guidelines on Flexible Work Arrangement Requests",
        href: "https://www.mom.gov.sg/employment-practices/good-work-practices/flexible-work-arrangements",
      },
      {
        label: "JLL — Occupancy planning key to effective hybrid workplaces",
        href: "https://www.jll.com/en-au/newsroom/occupancy-planning-key-to-effective-hybrid-workplaces",
      },
      {
        label: "JLL — Global Office Fit-Out Costs Guide 2026",
        href: "https://www.jll.com/en-us/guides/global-office-fit-out-costs-guide",
      },
      {
        label: "Cushman & Wakefield — Singapore Office Fit Out Costs 2026",
        href: "https://www.cushmanwakefield.com/en/singapore/insights/office-fit-out-cost-guide",
      },
    ],

    breadcrumbCurrent: "How Much Office Space Do You Need?",
  },

  zh: {
    metaTitle:
      "新加坡办公室需要多大？人数、空间规划与 SCDF 消防要求 | ID Work Studio",
    metaDescription:
      "了解新加坡办公室应如何按人数、峰值使用人数、会议室、电话间及 SCDF 消防逃生要求规划面积，并分清办公空间基准与法定消防人数计算。",
    canonical:
      "https://idworkstudio.com/insights/how-much-office-space-do-you-need-singapore",
    eyebrow: "新加坡办公室规划指南 · 2026",
    title:
      "新加坡办公室需要多大？空间规划、员工人数与 SCDF 消防要求完整说明",
    subtitle:
      "员工人数只是起点。真正可用的办公室还要考虑高峰到岗人数、会议室、私人通话、辅助空间、未来扩张，以及实际大楼的消防与无障碍条件。",
    category: "商业装修 · 办公室规划",
    readTime: "约14分钟阅读",
    heroAlt:
      "新加坡现代办公室空间规划，包含工位、会议室和私人专注空间",

    quickAnswerTitle: "快速答案：不要只按员工人数决定办公室面积",
    quickAnswer:
      "新加坡并没有一条法规定每名员工为了“舒适办公”必须拥有固定多少平方英尺。可以参考的外部行业基准之一，是 JLL 报告的亚太区平均约 12 平方米可出租面积/座位（约 129 平方英尺/座位），但这只是基准，不是新加坡法定最低面积。真正需要多大，要看高峰时实际需要多少座位、会议与私人通话需求、茶水间和储物等辅助空间，以及最终布局能否符合大楼的消防与无障碍要求。",

    benchmarkTitle: "10、20、30、50 个座位可以先怎样估算？",
    benchmarkIntro:
      "下表只是把 JLL 报告的亚太区平均 12 平方米可出租面积/座位直接换算，适合找单位初期做初步筛选，不应当成最终设计公式。",
    planningRows: [
      {
        seats: "10 个座位",
        benchmark: "约120 m² / 约1,292 sqft",
        note: "小团队可能够用，但一旦加入会议室、茶水间、接待区和私人房间，面积需求会很快改变。",
      },
      {
        seats: "20 个座位",
        benchmark: "约240 m² / 约2,583 sqft",
        note: "应先确认固定座位还是共享座位，以及经理房、客户会议室和同时通话的需求。",
      },
      {
        seats: "30 个座位",
        benchmark: "约360 m² / 约3,875 sqft",
        note: "同样30人，开放式中小企业与经常见客户的专业服务公司，对面积的要求可以相差很大。",
      },
      {
        seats: "50 个座位",
        benchmark: "约600 m² / 约6,458 sqft",
        note: "大型会议或培训空间、高峰人数、出口容量及未来扩张会变得更重要。",
      },
    ],
    benchmarkNote:
      "行业基准 ≠ 法规。SCDF 的 occupant load（使用人数负荷）属于消防逃生计算，不能当成舒适办公面积建议。",

    sections: [
      {
        title: "为什么“每名员工多少 sqft”很容易算错",
        paragraphs: [
          "两家公司都有30名员工，所需办公室却可能完全不同。第一家公司采用混合办公，以开放式工位为主，很少有访客；第二家公司有六名经理需要独立房间、销售团队整天打电话、经常接待客户，还需要一间20人培训室。",
          "第一家公司可以把更多面积留给共享工位。第二家公司则需要更多封闭房间、走道、隔音及辅助空间。员工总数相同，但第二种办公室往往需要更大的实用面积，也通常需要更多装修工程。",
          "所以真正的问题并不是“我有多少员工”，而是“在最忙的时候，这个办公室必须让这些人同时完成什么工作”。",
        ],
      },
      {
        title: "先记录三个数字，而不是只看总员工人数",
        paragraphs: [
          "现代新加坡办公室应先记录总员工人数、一般每天到岗人数和高峰使用人数。总人数代表公司规模；一般到岗人数反映日常需求；高峰人数则决定办公室在最忙的一天是否仍然可用。",
          "高峰人数应考虑员工、经常来访的客户，以及会议、培训或活动空间同时使用时的现实人数。公司可能有40名员工，平时只有25人到办公室，但如果每逢星期三经常有35人回来，只按平均数设计，办公室很快就会不够用。",
          "新加坡人力部的灵活工作安排申请三方指导原则，已把灵活工作请求正式纳入雇佣实践。这并不代表每家公司都应该减少工位，而是说明在签租约或确定布局前，更应该了解真实的到岗模式。",
        ],
        bullets: [
          "总员工人数：公司所有员工。",
          "一般每天到岗人数：日常通常在办公室的人数。",
          "高峰使用人数：最忙时员工、访客及聚集活动的现实总人数。",
        ],
      },
      {
        title: "到底需要多少张办公桌？",
        paragraphs: [
          "如果采用固定座位，通常要接近每名长期在办公室工作的员工一张工位。真正实行混合办公的团队可以考虑共享座位，但前提是高峰到岗人数和团队工作方式确实允许。",
          "常见误区是认为减少十张桌子，就一定可以租小十张桌子的面积。现代混合办公室往往把部分节省的面积转给电话间、专注室、小会议室及协作空间。",
          "JLL 2026 年的办公室装修研究也指出，工作空间类型会明显影响装修成本。高空间多样性的办公室同时包含开放工作区、封闭协作空间和专注空间，员工选择更多，但也比一排开放工位需要更多建筑和机电配合。",
        ],
      },
      {
        title: "开放式办公室必须解决私人通话问题",
        paragraphs: [
          "开放办公室可能完美放下所有工位，却仍然不好用。假设三名员工同时需要进行保密的 Teams 通话，而唯一的封闭空间是一间六人会议室，最后往往是一人独占会议室，其他人在工位讲话，甚至走到外面通话。",
          "对于通话频繁的团队，应组合一人电话/专注间、2至4人小讨论室和正常会议室。新加坡并没有可靠的通用规则，例如“每五名员工必须一间电话亭”。正确数量取决于同时通话需求、保密程度，以及会议室是否经常被一人通话占用。",
          "随着会议转录、AI 辅助会议及视频协作增加，受控的声学环境变得更重要。对很多开放办公室来说，私人空间已不只是豪华配置，而是基本运营需要。",
        ],
      },
      {
        title: "放得下12张椅子，不等于这就是一间好的12人会议室",
        paragraphs: [
          "会议室容量不应由“最多能塞多少椅子”决定。桌子本身、椅子拉出后的活动空间、走动路线、到门口的通道、屏幕视线、隔音、冷气和通风，以及合适的无障碍通行都需要考虑。",
          "大型会议或培训室更需要谨慎，因为它会在短时间内形成高密度人员聚集。一家公司可能只有30名员工，却计划一间可以容纳40人的 town hall 或培训室，供员工和访客共同使用。因此消防计算看的是空间功能，而不只是日常工位人数。",
          "如果同一个房间有多种用途，消防评估可能需要考虑产生最高使用人数的用途。这就是为什么多功能活动/培训室最好在隔墙位置确定前先检查。",
        ],
      },
      {
        title: "按工作行为规划，而不是只按部门名称规划",
        paragraphs: [
          "销售团队可能需要频繁打电话、更多私人通话空间和快速使用小会议室；财务部门可能需要更长时间的安静与保密工作；设计团队可能需要大型屏幕、样品储存和项目讨论桌；管理层则可能经常进行私人谈话和客户会议。",
          "这比给每个部门相同的工位模块更有效，否则很容易装修完成后才发现，一半会议室长期被单人电话占用。",
          "规划时应问每个团队一周内反复进行什么：专注工作、电话、客户会议、协作、培训、储物、设备使用及访客接待。办公室布局应该响应这些真实行为。",
        ],
      },
      {
        title: "工位减少，不代表办公室装修一定更便宜",
        paragraphs: [
          "在新加坡，封闭房间往往是昂贵的面积。一间电话房或会议室可能需要隔墙、门、隔音、照明、电源和网络、冷气配合、喷淋或探测器调整，以及会议科技设备。",
          "Cushman & Wakefield 的 2026 新加坡办公室装修研究显示，协作型混合办公室平均装修成本约为 S$180/平方英尺；高规格混合办公室因为加强隔音和整合科技等项目，成本会更高。你的实际项目仍取决于原有单位与规格，但趋势很清楚：空间类型越丰富，使用体验可能越好，装修协调也越复杂。",
          "如果你正在比较布局或预算，不要假设减少工位就一定等比例减少装修费；办公室装修成本指南会更适合进一步评估。",
        ],
        links: [
          {
            label: "办公室装修成本指南",
            to: "/insights/office-renovation-cost-singapore",
            text: "了解新加坡办公室装修费用真正由什么决定",
          },
        ],
      },
      {
        title: "不要只为今天的人数设计",
        paragraphs: [
          "如果现在25人、租约期内可能增长到35人，应在签约前把这个情景放进平面规划。答案不一定是现在就租大很多，而可能是保留可调整区域、在合适位置使用模块化或可拆结构，并避免把每个空间都永久固定。",
          "2026 年办公室研究越来越强调 adaptability（可调整性），因为混合办公、团队结构、科技和 AI 工作方式仍在改变。",
          "未来弹性也影响退租复原。永久隔墙和机电改动可能变成日后的复原范围，所以今天的空间决定有可能就是租约结束时的成本。",
        ],
      },
    ],

    scenarioTitle: "同样30人，办公室可以完全不同",
    scenarios: [
      {
        title: "公司 A · 30 人",
        summary: "混合办公、访客少、以开放式工作为主",
        items: [
          "24–26 个 workpoints，而不是30个固定座位",
          "1 间正常会议室",
          "2 间电话/专注室",
          "较紧凑的茶水间与储物空间",
          "很少客户接待空间",
        ],
        conclusion:
          "只要经过高峰到岗测试，就可以把较大比例的面积保留为开放与灵活空间。",
      },
      {
        title: "公司 B · 30 人",
        summary: "客户导向、通话频繁、保密需求高",
        items: [
          "30 个固定工位",
          "多间经理私人房",
          "3–4 间电话/专注室",
          "小讨论室 + 客户会议室",
          "20 人培训 / 演示空间",
        ],
        conclusion:
          "同样30人的公司，可能需要更多封闭面积、走道、隔音工程及消防协调。",
      },
    ],

    scdfTitle: "SCDF：为什么消防规划会改变办公室布局",
    scdfIntro:
      "新加坡民防部队（Singapore Civil Defence Force，SCDF）的消防规范不应该在装修设计完成后才检查。使用人数负荷、逃生路线、出口容量和大楼现有消防系统，都可能影响会议室与隔墙应放在哪里。以下数值是消防计算，不是舒适办公面积建议。",

    scdfFactors: [
      {
        space: "一般办公室 / Business centre",
        factor: "10 m²/人",
        meaning: "用于一般办公楼面消防使用人数负荷计算。",
      },
      {
        space: "会议室 / Conference room",
        factor: "1.5 m²/人",
        meaning: "反映会议或会议空间可能形成更高密度人员聚集。",
      },
      {
        space: "董事 / 经理房",
        factor: "15 m²/人",
        meaning: "与开放办公室使用不同的功能空间系数。",
      },
      {
        space: "接待区 / 员工休息区",
        factor: "3 m²/人",
        meaning: "接待及休息功能的计算人员密度可高于一般办公区。",
      },
      {
        space: "Server room",
        factor: "30 m²/人",
        meaning: "技术房正常人员较少，因此计算人员密度较低。",
      },
    ],
    scdfFactorNote:
      "例子：30 m² 会议室 ÷ SCDF 会议室系数 1.5 m²/人 = 消防使用人数负荷 20 人。这并不代表 SCDF 建议每人只留 1.5 m² 就是舒适会议空间。",

    scdfChecksTitle: "办公室空间规划最常受影响的 SCDF 要求",
    scdfChecks: [
      {
        title: "1. 按不同功能计算使用人数负荷",
        text:
          "Qualified Person（QP，合资格人士）不会只看公司 payroll 人数。SCDF Table 1.4B 对不同功能空间采用不同 occupant-load factor。高密度会议、conference 或多功能空间，即使日常工位人数不多，也可能改变整体消防人数计算。",
      },
      {
        title: "2. 出口数量与容量",
        text:
          "出口门、走道、exit passageway 与楼梯需要有足够容量供所服务的使用人数逃生。如果某个房间或空间需要两个出口，SCDF 要求每个出口至少能承担该空间一半的使用人数。",
      },
      {
        title: "3. 到出口的 travel distance",
        text:
          "SCDF Table 2.2A 对办公室列出的最大单向逃生距离为：无喷淋 15 m、有喷淋 30 m；双向逃生距离为 45 m 和 75 m。实际计算沿真实逃生路线进行，所以增加隔墙可能改变是否合规。",
      },
      {
        title: "4. Dead end 与走道宽度",
        text:
          "办公室 dead-end corridor 的最大长度在 Table 2.2A 中为无喷淋 15 m、有喷淋 20 m；一般最低 corridor 宽度为 1.2 m。装修后形成的狭窄或过长内部走道不能只当成“剩余空间”。",
      },
      {
        title: "5. 单一逃生楼梯属于有条件例外",
        text:
          "SCDF Clause 9.4 只在特定小型地面以上办公室楼层符合条件时允许一个 exit staircase，包括使用人数少于50人、accessible floor area 不超过200 m²、楼层/建筑高度限制，以及相应单向逃生距离。较大或情况不同的办公室不能直接假设同样单出口安排也适用。",
      },
      {
        title: "6. 多个出口的位置与独立逃生路线",
        text:
          "需要多个出口时，出口之间的位置关系也重要。消防设计要尽量避免同一场火灾同时阻断所有逃生路线。视觉上方便的平面，如果把所有人都导向同一个容易被阻断的位置，仍可能是不好的逃生设计。",
      },
      {
        title: "7. 高使用人数房间的门",
        text:
          "门的净宽、开启方式和房间使用人数都会影响逃生规划。大型会议或培训室应在桌椅布局确认前先检查；增加椅子并不会自动增加出口可以安全承担的人数。",
      },
      {
        title: "8. Exit sign 与 emergency lighting",
        text:
          "新增隔墙可能改变视线和逃生路线，因此现有出口指示牌和紧急照明可能需要重新检查，确保装修后人员仍能识别并使用正确逃生路线。",
      },
      {
        title: "9. 喷淋、警报、探测器及 hose reel 覆盖",
        text:
          "把开放空间分隔成多个房间可能影响原有消防系统。喷淋头、探测器、alarm device 等不能被隔墙包住，也不能假设原位置装修后仍然适用。如触发相关消防工程，应由 QP 与相关专业人员协调。",
      },
      {
        title: "10. 防火结构与 compartmentation",
        text:
          "如果大楼已批准的消防设计依赖防火墙、防火门、shaft 或 protected route，装修不能破坏这些构造。穿过防火结构的开口、管线和服务在适用时需要正确防火封堵。",
      },
      {
        title: "11. 冷气、机械通风与 smoke-control interface",
        text:
          "移动隔墙或改变房间用途会影响冷气和机械通风。如果相关系统也是大楼消防或排烟策略的一部分，改动就需要协调审查，而不能只当成舒适冷气问题。",
      },
      {
        title: "12. 残障人士逃生与无障碍",
        text:
          "SCDF 对残障人士设有特别逃生规定，而 BCA 最新无障碍规范也为适用建筑工程提供基本 barrier-free 要求。因此，无障碍、逃生和内部通行应该一起考虑，而不是装修完成后才补。",
      },
    ],

    scdfSubmissionTitle: "是不是每一次办公室装修都要重新向 SCDF 提交？",
    scdfSubmissionParagraphs: [
      "不是。不能说所有办公室翻新都自动需要一次新的 SCDF 正式图纸提交。SCDF 明确规定，proposed fire safety works 需要审批，并由 Qualified Person（QP）代表业主提交；属于豁免工程或符合 minor Addition & Alteration 的工程，则按相应豁免或 minor-A&A 程序处理。",
      "如果项目包含受监管的消防工程或其他需要正式审批的改动，应由 QP 在相关工程开始前准备并提交适用图纸。这也是为什么消防审查应该在空间规划早期进行，而不是施工图完成后才处理。",
      "如果项目需要 Fire Safety Certificate（FSC）或 Temporary Fire Permit（TFP），SCDF 说明相关消防工程应先获批，并按要求完成；之后可能需要 Registered Inspector（RI，注册检查员）检查和认证，再申请 FSC/TFP。具体流程取决于实际大楼和装修范围。",
      "实际做法是：不要假设“办公室装修一定要 SCDF”，也不要假设“只是室内装修所以 SCDF 一定无关”。在开工前由合适 QP 配合大楼管理方确认实际范围和原有消防记录。",
    ],

    workedExampleTitle: "一间 2,500 sqft 办公室，面积到底去了哪里？",
    workedExampleIntro:
      "以下只是一个20个座位办公室的示意规划，并不是新加坡规定比例。它要说明的是：租赁广告上的总面积，并不等于你可以全部拿来放桌子的面积。",
    workedExampleRows: [
      {
        label: "工位 / 直接工作区域",
        value: "约1,000 sqft",
        note: "20个工位，加上局部活动和储物余量。",
      },
      {
        label: "会议 + 小讨论空间",
        value: "约450 sqft",
        note: "一间正常会议室 + 一间小讨论室。",
      },
      {
        label: "电话 / 专注室",
        value: "约120 sqft",
        note: "两间紧凑私人通话空间。",
      },
      {
        label: "接待 + 茶水间 + 共用辅助空间",
        value: "约400 sqft",
        note: "接待、茶水间、打印/储物和 IT/server 支持。",
      },
      {
        label: "主要走道 / 规划余量",
        value: "约530 sqft",
        note: "空间之间的路线、房间周围通行和规划余量。",
      },
    ],
    workedExampleConclusion:
      "重点并不是说每间20人办公室都必须按这个比例，而是签租约前应先把真实工作活动和辅助功能放入平面，之后才判断单位是否真的“够大”。",

    trendsTitle: "2025–2026 办公室规划真正发生了什么变化？",
    trendsIntro:
      "真正值得注意的并不是装饰潮流，而是会改变办公室需要多少建成空间、以及这些空间如何配套的变化。",
    trends: [
      {
        title: "开放式办公室重新重视 privacy",
        text:
          "专注室、电话间和小型封闭讨论空间越来越重要，因为即使主要布局仍是开放式，员工仍需要专注工作和保密通话。",
      },
      {
        title: "AI 开始改变实体会议空间",
        text:
          "AI 会议转录、视频会议和整合会议科技，让隔音、摄像位置、照明、网络，以及可以进行保密录音讨论的房间变得更重要。",
      },
      {
        title: "空间开始按 activity，而不是只按 desk 数量规划",
        text:
          "JLL 最新装修研究把办公室分为 progressive、高空间多样性和传统型。混合办公室可能减少固定工位，却增加专注、通话与协作空间种类。",
      },
      {
        title: "可调整性成为设计要求",
        text:
          "JLL 2026 指引强调可调整设计，因为员工工作模式和科技需求仍不确定。好的装修应测试租约期间如何重新配置，而不只是开业当天看起来如何。",
      },
    ],

    mistakesTitle: "常见办公室空间规划错误",
    mistakes: [
      {
        title: "用员工人数乘一个“神奇 sqft 数字”",
        text:
          "行业基准适合初步筛选，却不知道你的会议需求、私人房、高峰人数和实际大楼条件。",
      },
      {
        title: "按平均到岗人数，而不是高峰人数规划",
        text:
          "一间星期五很好用的混合办公室，如果星期三大部分团队一起回来，仍然可能马上爆满。",
      },
      {
        title: "把会议室当电话亭",
        text:
          "如果六人会议室长期被一名单独通话的人占用，说明办公室缺少符合真实工作方式的小型私人空间。",
      },
      {
        title: "加入大型培训室，却没有先检查 occupant load",
        text:
          "即使一般工位人数不多，高密度聚集空间仍可能明显改变消防人数计算和出口规划。",
      },
      {
        title: "先画隔墙，最后才检查逃生路线",
        text:
          "新房间可能增加 travel distance、形成 dead end、改变 exit sightline，并干扰现有消防系统。",
      },
      {
        title: "认为工位减少就一定装修更便宜",
        text:
          "工位减少的面积可能被更多封闭房、隔音、机电配合和会议科技抵消。",
      },
    ],

    preLeaseTitle: "签办公室租约前，先测试这10项",
    preLeaseIntro:
      "地产广告看起来够大的单位，不一定适合你的实际运营方式。签约前先把这些项目放进平面测试。",
    preLeaseItems: [
      "总员工人数、一般到岗人数与现实高峰使用人数。",
      "真正需要固定还是共享的工位数量。",
      "同时私人通话及专注工作的需求。",
      "小会议、客户会议、董事会议和培训空间容量。",
      "接待、茶水间、储物、打印、server/IT 等辅助空间。",
      "现有出口、内部逃生路线与可能新增的隔墙位置。",
      "可能受新房间影响的喷淋、探测器、alarm、emergency lighting 和 exit sign。",
      "大楼管理 / landlord fit-out guide 与单位获批用途。",
      "租约期间可能出现的人数增长或布局变化。",
      "可用布局确认后的装修预算和时间表。",
    ],

    midCtaTitle: "不确定这个单位到底够不够大？",
    midCtaText:
      "把 floor plan、约略面积、预计员工人数和团队工作方式发给我们。我们可以协助你判断单位是否能合理容纳工位、会议、私人通话和辅助空间，再决定最终装修范围。",
    midCtaButton: "讨论办公室布局",

    faqTitle: "常见问题",
    faqs: [
      {
        question: "新加坡每名员工应该有多少办公室面积？",
        answer:
          "新加坡没有一条统一的法定“舒适办公面积/员工”数字。外部行业基准方面，JLL 报告亚太区平均约为12 m²可出租面积/座位（约129 sqft）。它只能作起点。实际面积应按高峰到岗、工位、会议与专注空间、辅助空间以及大楼合规条件规划。",
      },
      {
        question: "1,000 sqft 够10名员工使用吗？",
        answer:
          "对会议室很少的小型紧凑团队可能够用，但加入会议室、茶水间、接待、储物和私人通话空间后可能很快变紧。比起单纯按每人100 sqft，先测试平面更有意义。",
      },
      {
        question: "20名员工应该考虑多大的办公室？",
        answer:
          "如果单纯应用 JLL 亚太区12 m²可出租面积/座位的基准，20个座位约为240 m²或2,583 sqft。这不是法规。共享座位的混合团队可能少一些；需要私人房和多个会议空间的公司可能更多。",
      },
      {
        question: "2,000 sqft 够30名员工吗？",
        answer:
          "对于高密度、主要开放式布局可能做得到，但加入会议室、私人通话、茶水间、储物和走道后会相当紧。它也明显低于30个座位按12 m²/座位直接换算的行业基准，所以应认真测试真实工作方式与高峰人数。",
      },
      {
        question: "SCDF 一般办公室的 occupant-load factor 是多少？",
        answer:
          "SCDF Table 1.4B 对一般 office/business centre 使用10 m²/人作为消防 occupant-load 计算。这是用来规划逃生与出口的消防数值，不是说每名员工舒适办公必须刚好有10 m²。",
      },
      {
        question: "SCDF 会议室的 occupant-load factor 是多少？",
        answer:
          "SCDF Table 1.4B 对 meeting/conference room 使用1.5 m²/人。例如30 m² ÷ 1.5 m²/人 = 消防使用人数负荷20人。它不是每人1.5 m²的舒适会议室建议。",
      },
      {
        question: "SCDF 对办公室到出口的距离有什么要求？",
        answer:
          "SCDF Table 2.2A 对 office 列出的最大单向逃生距离为无喷淋15 m、有喷淋30 m；双向逃生距离为45 m和75 m。实际路线和其他 Fire Code 条件必须由 QP 按具体大楼确认。",
      },
      {
        question: "是不是每一次办公室装修都需要 SCDF approval？",
        answer:
          "不是。Proposed fire-safety works 需要 SCDF approval 和 QP 提交，而豁免工程及符合 minor A&A 的工程按相应程序处理。你的办公室是否需要正式提交取决于实际装修范围和大楼，应在开工前确认。",
      },
      {
        question: "开放办公室应该有多少间电话亭？",
        answer:
          "没有可靠的统一新加坡比例。应按同时通话人数规划：有多少人可能同一时间需要私人电话、保密程度有多高，以及会议室是否因为没有电话间而经常被单人占用。",
      },
      {
        question: "办公室应该按现在人数还是未来增长规划？",
        answer:
          "先满足今天现实的高峰使用人数，再测试至少一个租约期内可信的增长情景。最省成本的答案有时是保留可调整空间，而不是第一天就把所有未来房间永久建出来。",
      },
    ],

    finalCtaTitle: "在装修把布局固定之前，先把办公室规划正确",
    finalCtaText:
      "把单位 floor plan、员工人数、会议方式和目标搬入日期发给 ID Work Studio。我们可以一起检查办公室如何规划、可能涉及的装修与审批依赖，并在你确定最终装修范围前判断这个单位是否真正适合。",
    finalCtaPrimary: "发送 Floor Plan 给我们检查",
    finalCtaSecondary: "查看办公室装修服务",

    sourcesTitle: "本指南主要参考资料",
    sourcesNote:
      "消防与无障碍数值来自当前新加坡官方资料；办公密度与装修成本属于行业基准，并非法定要求。",
    sources: [
      {
        label: "SCDF Fire Code 2023 — Table 1.4B Occupant Load Factors",
        href: "https://www.scdf.gov.sg/fire-safety-services-listing/fire-code-2023/table-of-content/chapter-1-general/related-tables-and-diagrams-of-chapter-1",
      },
      {
        label: "SCDF Fire Code 2023 — Table 2.2A Exit Requirements",
        href: "https://www.scdf.gov.sg/fire-safety-services-listing/fire-code-2023/table-of-content/chapter-2-means-of-escape/related-tables-and-diagrams-of-chapter-2/",
      },
      {
        label: "SCDF Fire Code 2023 — Purpose Group IV Office Occupancy",
        href: "https://www.scdf.gov.sg/fire-safety-services-listing/fire-code-2023/table-of-content/chapter-9-additional-requirements-for-each-purpose-group/clause-9.4-purpose-group-iv-occupancy",
      },
      {
        label: "SCDF — Plan Approval / Fire Safety Works",
        href: "https://www.scdf.gov.sg/fire-safety-services-listing/plans-submission-process/plan-approval",
      },
      {
        label: "SCDF — Fire Safety Certificate & Temporary Fire Permit",
        href: "https://www.scdf.gov.sg/fire-safety-services-listing/plans-submission-process/fire-safety-certificate-temporary-fire-permit",
      },
      {
        label: "BCA — Code on Accessibility in the Built Environment 2025",
        href: "https://www1.bca.gov.sg/safety-and-standards/accessibility/code-on-accessibility-in-the-built-environment/",
      },
      {
        label: "MOM — Tripartite Guidelines on Flexible Work Arrangement Requests",
        href: "https://www.mom.gov.sg/employment-practices/good-work-practices/flexible-work-arrangements",
      },
      {
        label: "JLL — Occupancy planning key to effective hybrid workplaces",
        href: "https://www.jll.com/en-au/newsroom/occupancy-planning-key-to-effective-hybrid-workplaces",
      },
      {
        label: "JLL — Global Office Fit-Out Costs Guide 2026",
        href: "https://www.jll.com/en-us/guides/global-office-fit-out-costs-guide",
      },
      {
        label: "Cushman & Wakefield — Singapore Office Fit Out Costs 2026",
        href: "https://www.cushmanwakefield.com/en/singapore/insights/office-fit-out-cost-guide",
      },
    ],

    breadcrumbCurrent: "新加坡办公室需要多大？",
  },
};

const HERO_IMAGE =
  "/insights/how-much-office-space-do-you-need-singapore-hero.webp";

const WHATSAPP_URL =
  "https://wa.me/6598333085?text=Hi%20ID%20Work%20Studio%2C%20I%27d%20like%20help%20checking%20whether%20an%20office%20unit%20is%20large%20enough.%20I%20can%20share%20the%20floor%20plan%2C%20headcount%20and%20working%20requirements.";

export default function OfficeSpacePlanningSingapore() {
  const { i18n } = useTranslation();
  const lang = i18n.language === "zh" ? "zh" : "en";
  const t = content[lang];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: t.title,
    description: t.metaDescription,
    url: t.canonical,
    image: `https://idworkstudio.com${HERO_IMAGE}`,
    datePublished: "2026-08-14",
    dateModified: "2026-08-14",
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
    mainEntityOfPage: t.canonical,
    inLanguage: lang === "zh" ? "zh-SG" : "en-SG",
    about: [
      { "@type": "Thing", name: "Office space planning Singapore" },
      { "@type": "Thing", name: "Office renovation Singapore" },
      { "@type": "Thing", name: "SCDF office fire safety" },
    ],
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
        <meta property="og:type" content="article" />
        <meta property="og:title" content={t.metaTitle} />
        <meta property="og:description" content={t.metaDescription} />
        <meta property="og:url" content={t.canonical} />
        <meta
          property="og:image"
          content={`https://idworkstudio.com${HERO_IMAGE}`}
        />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <main className="bg-[#F7F3EC] text-[#2C2C2C]">
        <section className="relative isolate min-h-[620px] overflow-hidden bg-[#111]">
          <img
            src={HERO_IMAGE}
            alt={t.heroAlt}
            className="absolute inset-0 h-full w-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/55 to-black/90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(197,160,89,0.25),transparent_38%)]" />

          <div className="relative z-10 mx-auto flex min-h-[620px] max-w-6xl flex-col justify-end px-6 pb-16 pt-32 md:px-8 md:pb-20">
            <p className="mb-5 w-fit rounded-full border border-[#C5A059]/50 bg-black/25 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D6B26B] backdrop-blur">
              {t.eyebrow}
            </p>
            <h1 className="max-w-5xl font-serif text-4xl font-semibold leading-[1.08] text-white md:text-6xl">
              {t.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
              {t.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-white/55">
              <span>{t.category}</span>
              <span className="text-[#C5A059]">•</span>
              <span>{t.readTime}</span>
              <span className="text-[#C5A059]">•</span>
              <span>ID Work Studio · Singapore</span>
            </div>
          </div>
        </section>

        <section className="border-b border-[#e5ddd1] bg-white/90 px-6 py-5 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
            <Link
              to="/insights"
              className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f6a63] hover:text-[#C5A059]"
            >
              ← {lang === "zh" ? "返回装修文章" : "Back to insights"}
            </Link>
            <Link
              to="/commercial"
              className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-[#6f6a63] hover:text-[#C5A059] sm:block"
            >
              {lang === "zh" ? "商业装修服务" : "Commercial renovation services"} →
            </Link>
          </div>
        </section>

        <article className="mx-auto max-w-5xl px-6 py-12 md:px-8 md:py-20">
          <section className="rounded-[30px] border border-[#e4dbcf] bg-white p-6 shadow-[0_18px_50px_rgba(34,29,23,0.06)] md:p-9">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A9864D]">
                  {t.quickAnswerTitle}
                </p>
                <p className="mt-4 text-base leading-8 text-[#5B5650]">
                  {t.quickAnswer}
                </p>
              </div>
              <div className="rounded-3xl bg-[#171514] p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.17em] text-[#C5A059]">
                  {lang === "zh" ? "规划原则" : "Planning principle"}
                </p>
                <p className="mt-4 font-serif text-2xl leading-9">
                  {lang === "zh"
                    ? "在决定需要多少面积之前，先决定这些面积必须完成什么工作。"
                    : "Before deciding how many square feet you need, decide what those square feet need to do."}
                </p>
              </div>
            </div>
          </section>

          <section className="mt-12">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A9864D]">
                {lang === "zh" ? "初步面积基准" : "Starting benchmark"}
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold md:text-4xl">
                {t.benchmarkTitle}
              </h2>
              <p className="mt-4 text-base leading-8 text-[#5B5650]">
                {t.benchmarkIntro}
              </p>
            </div>

            <div className="mt-7 overflow-hidden rounded-3xl border border-[#e4dbcf] bg-white shadow-sm">
              <div className="hidden grid-cols-[.8fr_1fr_1.8fr] gap-4 border-b border-[#e4dbcf] bg-[#F1EBE1] px-6 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#756D64] md:grid">
                <span>{lang === "zh" ? "座位" : "Seats"}</span>
                <span>{lang === "zh" ? "12 m²/座位换算" : "12 m²/seat benchmark"}</span>
                <span>{lang === "zh" ? "为什么还要检查布局" : "Why the layout still matters"}</span>
              </div>
              {t.planningRows.map((row) => (
                <div
                  key={row.seats}
                  className="grid gap-2 border-b border-[#eee7dd] px-6 py-5 last:border-b-0 md:grid-cols-[.8fr_1fr_1.8fr] md:gap-4"
                >
                  <div className="font-semibold text-[#2C2C2C]">{row.seats}</div>
                  <div className="font-semibold text-[#A17B3E]">{row.benchmark}</div>
                  <div className="text-sm leading-6 text-[#686159]">{row.note}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-[#C5A059]/30 bg-[#FFF9ED] px-5 py-4 text-sm leading-6 text-[#6C5A3B]">
              <strong>{lang === "zh" ? "重要：" : "Important: "}</strong>
              {t.benchmarkNote}
            </div>
          </section>

          <section className="mt-14 grid gap-5 md:grid-cols-2">
            {t.scenarios.map((scenario) => (
              <div
                key={scenario.title}
                className="rounded-3xl border border-[#e4dbcf] bg-white p-6 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A9864D]">
                  {scenario.title}
                </p>
                <h2 className="mt-3 font-serif text-2xl font-semibold">
                  {scenario.summary}
                </h2>
                <ul className="mt-5 space-y-3">
                  {scenario.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-[#5B5650]">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#C5A059]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-[#eee7dd] pt-5 text-sm leading-7 text-[#5B5650]">
                  {scenario.conclusion}
                </p>
              </div>
            ))}
          </section>

          {t.sections.map((section, index) => (
            <section key={section.title} className="mt-14">
              <div className="grid gap-7 lg:grid-cols-[220px_1fr]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A9864D]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight">
                    {section.title}
                  </h2>
                </div>
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-[#5B5650]">
                      {paragraph}
                    </p>
                  ))}

                  {section.bullets && (
                    <ul className="grid gap-3 pt-2 sm:grid-cols-3">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="rounded-2xl border border-[#e4dbcf] bg-white p-4 text-sm leading-6 text-[#5B5650]"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.links?.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="mt-3 inline-flex rounded-full border border-[#C5A059]/45 bg-[#FFF9ED] px-5 py-3 text-sm font-semibold text-[#8D6B35] transition hover:bg-[#C5A059] hover:text-white"
                    >
                      {link.text} →
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          ))}

          <section className="mt-16 overflow-hidden rounded-[34px] bg-[#141312] text-white">
            <div className="border-b border-white/10 px-6 py-8 md:px-9">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
                SCDF · Fire Code
              </p>
              <h2 className="mt-3 max-w-4xl font-serif text-3xl font-semibold md:text-4xl">
                {t.scdfTitle}
              </h2>
              <p className="mt-4 max-w-4xl text-sm leading-7 text-white/70 md:text-base">
                {t.scdfIntro}
              </p>
            </div>

            <div className="grid gap-px bg-white/10 md:grid-cols-5">
              {t.scdfFactors.map((row) => (
                <div key={row.space} className="bg-[#1B1A18] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/45">
                    {row.space}
                  </p>
                  <p className="mt-3 text-2xl font-bold text-[#D6B26B]">{row.factor}</p>
                  <p className="mt-3 text-xs leading-6 text-white/60">{row.meaning}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 px-6 py-5 text-sm leading-7 text-[#E3D2B5] md:px-9">
              {t.scdfFactorNote}
            </div>
          </section>

          <section className="mt-14">
            <div className="max-w-3xl">
              <h2 className="font-serif text-3xl font-semibold md:text-4xl">
                {t.scdfChecksTitle}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#5B5650]">
                {lang === "zh"
                  ? "下面是最常直接影响办公室平面规划的项目。它不是整本 Fire Code 的替代品；实际项目仍应由 QP 按大楼与工程范围确认。"
                  : "These are the items most likely to affect an office layout directly. They are not a substitute for the full Fire Code; the project's QP must still assess the actual building and scope."}
              </p>
            </div>

            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {t.scdfChecks.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-[#e4dbcf] bg-white p-6 shadow-sm"
                >
                  <h3 className="text-base font-semibold text-[#2C2C2C]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5B5650]">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/insights/commercial-renovation-approvals-singapore"
                className="rounded-full bg-[#171514] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2A2825]"
              >
                {lang === "zh"
                  ? "查看商业装修审批完整指南"
                  : "Read the commercial approvals guide"}{" "}
                →
              </Link>
              <Link
                to="/commercial/office-renovation"
                className="rounded-full border border-[#C5A059]/60 bg-white px-5 py-3 text-sm font-semibold text-[#8D6B35] transition hover:bg-[#FFF9ED]"
              >
                {lang === "zh"
                  ? "查看办公室装修服务"
                  : "Explore office renovation services"}{" "}
                →
              </Link>
            </div>
          </section>

          <section className="mt-14 rounded-[30px] border border-[#D9C49F] bg-[#FFF9ED] p-6 md:p-8">
            <h2 className="font-serif text-3xl font-semibold">{t.scdfSubmissionTitle}</h2>
            <div className="mt-5 space-y-4">
              {t.scdfSubmissionParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-7 text-[#655A4A] md:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          <section className="mt-14">
            <div className="grid gap-7 lg:grid-cols-[.85fr_1.15fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A9864D]">
                  {lang === "zh" ? "示意空间分配" : "Illustrative space allocation"}
                </p>
                <h2 className="mt-3 font-serif text-3xl font-semibold">
                  {t.workedExampleTitle}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#5B5650]">
                  {t.workedExampleIntro}
                </p>
                <p className="mt-5 rounded-2xl border border-[#e4dbcf] bg-white p-5 text-sm leading-7 text-[#5B5650]">
                  {t.workedExampleConclusion}
                </p>
              </div>

              <div className="overflow-hidden rounded-3xl border border-[#e4dbcf] bg-white shadow-sm">
                {t.workedExampleRows.map((row) => (
                  <div
                    key={row.label}
                    className="grid gap-2 border-b border-[#eee7dd] px-6 py-5 last:border-b-0 sm:grid-cols-[1fr_auto]"
                  >
                    <div>
                      <p className="font-semibold">{row.label}</p>
                      <p className="mt-1 text-xs leading-6 text-[#756D64]">{row.note}</p>
                    </div>
                    <div className="text-lg font-bold text-[#A17B3E]">{row.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-14 rounded-[32px] bg-white p-6 shadow-sm md:p-9">
            <h2 className="font-serif text-3xl font-semibold md:text-4xl">
              {t.trendsTitle}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#5B5650]">
              {t.trendsIntro}
            </p>
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {t.trends.map((trend) => (
                <div
                  key={trend.title}
                  className="rounded-3xl border border-[#e4dbcf] bg-[#FCFAF6] p-6"
                >
                  <h3 className="text-lg font-semibold">{trend.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5B5650]">{trend.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14 rounded-[34px] bg-[#1A1917] p-7 text-white md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C5A059]">
              ID Work Studio · Office Planning
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold">{t.midCtaTitle}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70 md:text-base">
              {t.midCtaText}
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-full bg-[#C5A059] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#D6B26B]"
            >
              {t.midCtaButton}
            </a>
          </section>

          <section className="mt-14">
            <h2 className="font-serif text-3xl font-semibold md:text-4xl">
              {t.mistakesTitle}
            </h2>
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {t.mistakes.map((mistake) => (
                <div
                  key={mistake.title}
                  className="rounded-3xl border border-[#e4dbcf] bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold">{mistake.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5B5650]">{mistake.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14">
            <div className="grid gap-7 lg:grid-cols-[.85fr_1.15fr]">
              <div>
                <h2 className="font-serif text-3xl font-semibold md:text-4xl">
                  {t.preLeaseTitle}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#5B5650]">
                  {t.preLeaseIntro}
                </p>
              </div>
              <ol className="grid gap-3">
                {t.preLeaseItems.map((item, index) => (
                  <li
                    key={item}
                    className="grid grid-cols-[38px_1fr] gap-4 rounded-2xl border border-[#e4dbcf] bg-white p-4"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F0E5D1] text-sm font-bold text-[#8D6B35]">
                      {index + 1}
                    </span>
                    <span className="self-center text-sm leading-6 text-[#5B5650]">{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-7">
              <Link
                to="/insights/office-renovation-timeline-singapore"
                className="inline-flex rounded-full border border-[#C5A059]/55 bg-white px-5 py-3 text-sm font-semibold text-[#8D6B35] transition hover:bg-[#FFF9ED]"
              >
                {lang === "zh"
                  ? "单位确认后，再规划办公室装修时间表"
                  : "Once the unit works, plan the office renovation timeline"}{" "}
                →
              </Link>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="font-serif text-3xl font-semibold md:text-4xl">{t.faqTitle}</h2>
            <div className="mt-7 space-y-3">
              {t.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-[#e4dbcf] bg-white p-5 shadow-sm"
                >
                  <summary className="cursor-pointer list-none pr-8 text-base font-semibold">
                    {faq.question}
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-[#5B5650]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="mt-16 rounded-[34px] bg-[#111] p-7 text-white md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C5A059]">
              ID Work Studio
            </p>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl font-semibold md:text-4xl">
              {t.finalCtaTitle}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70 md:text-base">
              {t.finalCtaText}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#C5A059] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#D6B26B]"
              >
                {t.finalCtaPrimary}
              </a>
              <Link
                to="/commercial/office-renovation"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#C5A059] hover:text-[#C5A059]"
              >
                {t.finalCtaSecondary}
              </Link>
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-[#e4dbcf] bg-white p-6">
            <h2 className="font-serif text-2xl font-semibold">{t.sourcesTitle}</h2>
            <p className="mt-3 text-xs leading-6 text-[#756D64]">{t.sourcesNote}</p>
            <div className="mt-5 grid gap-2 md:grid-cols-2">
              {t.sources.map((source) => (
                <a
                  key={source.href}
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-[#eee7dd] bg-[#FCFAF6] px-4 py-3 text-xs leading-5 text-[#655E56] transition hover:border-[#C5A059]/60 hover:text-[#8D6B35]"
                >
                  {source.label} ↗
                </a>
              ))}
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
