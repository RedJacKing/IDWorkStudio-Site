import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

type SummaryRow = {
  label: string;
  value: string;
  note: string;
};

type ComparisonRow = {
  item: string;
  impact?: string;
  cost?: string;
  note: string;
};

type Section = {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

type Scenario = {
  title: string;
  problem: string;
  advice: string;
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
  summaryRows: SummaryRow[];
  comparisonTitle: string;
  comparisonIntro: string;
  comparisonRows: ComparisonRow[];
  sections: Section[];
  checklistTitle: string;
  checklistIntro: string;
  checklist: string[];
  scenarioTitle: string;
  scenarios: Scenario[];
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

const heroImage = "/insights/office-reinstatement-singapore-hero.webp";

const content: Record<"en" | "zh", ArticleContent> = {
  "en": {
    "metaTitle": "Commercial Reinstatement Singapore: Cost, Timeline, Checklist & Landlord Requirements (2026 Guide) | ID Work Studio",
    "metaDescription": "A practical Singapore commercial reinstatement guide covering offices, retail shops, shopping malls and commercial units. Learn about landlord requirements, handover planning, cost drivers, nominated contractors, hidden costs and security deposit risks.",
    "canonical": "https://idworkstudio.com/insights/commercial-reinstatement-singapore",
    "eyebrow": "Commercial Reinstatement & Lease Handover Guide",
    "title": "Commercial Reinstatement Singapore: Cost, Timeline, Checklist & Landlord Requirements",
    "subtitle": "Office reinstatement in Singapore is the process of returning a leased office, retail unit or commercial premises to the condition required by the landlord before handover. It is not just demolition work. A successful reinstatement protects your handover deadline, reduces landlord disputes and improves the chance of recovering your security deposit.",
    "readTime": "16 min read",
    "category": "Commercial Reinstatement",
    "heroImageAlt": "Singapore commercial tenant reviewing office reinstatement checklist, lease agreement and handover documents",
    "quickAnswerTitle": "Quick answer",
    "quickAnswer": "Commercial reinstatement means removing tenant-installed renovation works and restoring the premises according to the lease, landlord guidelines and building management requirements. In Singapore, the safest approach is to start planning 2–3 months before lease expiry, confirm the landlord's written reinstatement scope, survey the site, identify M&E or fire-safety items early, and leave enough time for inspection, rectification and final cleaning before handover.",
    "summaryRows": [
      {
        "label": "Planning start",
        "value": "2–3 months before expiry",
        "note": "Earlier planning is safer when the building has strict landlord requirements, nominated contractors or fire protection works."
      },
      {
        "label": "Common cost basis",
        "value": "S$8–S$35+ psf",
        "note": "Simple office reinstatement may be lower; retail, mall and technical premises can exceed this depending on scope."
      },
      {
        "label": "Main handover risk",
        "value": "Missed landlord requirements",
        "note": "A unit may look clean but still fail handover if electrical, fire protection, air-conditioning or documentation items are incomplete."
      },
      {
        "label": "Best strategy",
        "value": "Treat it as lease handover planning",
        "note": "The goal is not only to remove renovation works, but to satisfy the landlord before the deadline."
      }
    ],
    "comparisonTitle": "What tenants think reinstatement means vs what landlords may actually check",
    "comparisonIntro": "Many business owners assume reinstatement is mainly about removing partitions and repainting walls. In practice, landlords and building management may inspect visible finishes, building services, fire protection systems, documentation and common-area protection before accepting the premises.",
    "comparisonRows": [
      {
        "item": "Tenant assumption",
        "impact": "Remove visible renovation",
        "note": "Partitions, flooring, signage and carpentry are important, but they are only the most obvious part of reinstatement."
      },
      {
        "item": "Landlord reality",
        "impact": "Restore original condition",
        "note": "The landlord may expect the unit to be returned to its agreed original layout, base building condition or documented handover condition."
      },
      {
        "item": "Technical reality",
        "impact": "M&E and fire safety matter",
        "note": "Electrical boards, lighting, emergency lighting, sprinkler points, smoke detectors, PA speakers, FCUs and telecom infrastructure may be inspected."
      },
      {
        "item": "Business reality",
        "impact": "Deadline and deposit risk",
        "note": "Late completion, failed inspection or unresolved defects can lead to lease extension costs, deductions or disputes."
      }
    ],
    "sections": [
      {
        "eyebrow": "Definition",
        "title": "What is commercial reinstatement in Singapore?",
        "paragraphs": [
          "Office reinstatement is the process of returning a leased commercial space to the condition required by the landlord when the lease ends. The exact scope depends on the lease agreement, original handover condition, landlord's reinstatement letter, building management rules and any approved renovation works carried out during the tenancy.",
          "In simple terms, renovation prepares a space for your business to operate. Reinstatement prepares the space for your landlord to take back. A renovation project is usually design-led: layout, finishes, branding, meeting rooms, pantry, lighting and workplace experience. Reinstatement is obligation-led: remove what must be removed, reinstate what must be reinstated, make good damage, submit required reports and pass handover inspection.",
          "For a basic office, reinstatement may involve removing partitions, workstations, carpet, vinyl, raised floor finishes, signage, built-in cabinets and tenant-installed electrical points. For a more complex office, retail unit, clinic, education centre, F&B outlet or mall tenancy, the scope can extend to ceiling grids, fire protection systems, M&E services, air-conditioning, exhaust, plumbing, telecom cabling, public-address speakers, emergency lighting and building documentation."
        ],
        "bullets": [
          "Return the unit according to lease obligations",
          "Remove tenant-installed partitions, finishes and fixtures",
          "Make good walls, ceilings, flooring and columns",
          "Coordinate building services such as electrical, data, air-conditioning and fire protection where applicable",
          "Clean, inspect, rectify and hand over before the lease deadline"
        ]
      },
      {
        "eyebrow": "Lease obligation",
        "title": "Why reinstatement is commonly required in commercial leases",
        "paragraphs": [
          "Most commercial leases in Singapore contain reinstatement or yielding-up clauses. These clauses usually require the tenant to return the premises in the required condition at the end of the lease, fair wear and tear excepted. The wording may differ from landlord to landlord, but the business risk is the same: if the handover condition does not satisfy the landlord, the tenant may face rectification requests, deductions from the security deposit or additional occupation costs.",
          "The common mistake is waiting until the final month before asking for a reinstatement quote. By then, the tenant may still be operating, moving out, handling IT migration, arranging new office works, clearing inventory and negotiating with the landlord at the same time. Reinstatement becomes stressful not because the work is always complicated, but because the deadline is fixed.",
          "Treat reinstatement as a business planning exercise. You are managing lease expiry, staff move-out, asset disposal, IT shutdown, contractor access, landlord inspection and deposit recovery. The construction work is only one part of the handover process."
        ],
        "bullets": [
          "Review the lease before requesting quotations",
          "Ask the landlord for written reinstatement requirements",
          "Check whether the landlord has a standard reinstatement guide",
          "Confirm whether nominated contractors are required",
          "Reserve time for inspection and rectification, not just construction"
        ]
      },
      {
        "eyebrow": "Handover inspection",
        "title": "What do landlords actually check during handover?",
        "paragraphs": [
          "Landlords usually check whether the tenant has removed unauthorised or tenant-installed works, repaired damage caused by removal and returned the unit to the required condition. For a typical office, the inspection may focus on partitions, ceiling, floor finishes, paintwork, doors, electrical points, data cabling, air-conditioning diffusers, signage and cleanliness.",
          "However, premium buildings, shopping malls and technical commercial premises may go much deeper. A stringent reinstatement letter may require the tenant to reinstate distribution boards, emergency lights, exit signs, telephone distribution boxes, sprinkler points, smoke detectors, PA speakers, air-conditioning FCUs, condensate drain servicing, chemical cleaning reports, utility termination forms, joint inspections and nominated contractor involvement.",
          "This is why a reinstatement contractor should not price the job based only on a quick visual walk-through. The correct scope must be matched against the landlord's written requirements, original drawings, tenant fit-out records and building management conditions."
        ],
        "bullets": [
          "Partitions: removed fully and damaged areas patched",
          "Flooring: original finish, screed, tiles or carpet condition checked",
          "Ceiling: grid, boards, access panels and services restored",
          "Electrical: DB, lighting, emergency lights, exit signs and redundant wiring checked",
          "Data and telecom: tenant-installed cables removed where required",
          "Carpentry and signage: counters, cabinets, logos and shopfront works removed",
          "Air-conditioning: diffusers, grilles, ducts, FCUs and service reports checked where applicable",
          "Fire protection: sprinklers, smoke detectors, PA speakers and extinguishers verified where required",
          "Cleaning: debris, dust, labels, stains and common-area damage checked"
        ]
      },
      {
        "eyebrow": "Three levels",
        "title": "The three levels of reinstatement: visible, building services and compliance",
        "paragraphs": [
          "A useful way to understand reinstatement is to divide it into three levels. Level one is visible reinstatement. This is what most tenants notice first: removing partitions, cabinets, signage, flooring and tenant finishes. It is important, but it is not the whole project.",
          "Level two is building services reinstatement. This includes electrical works, lighting, data cabling, telephone points, air-conditioning diffusers, FCU servicing, ceiling services and other systems that connect the tenant space to the building. Mistakes here can delay inspection because building management often needs these systems to be safe, accessible and traceable.",
          "Level three is compliance reinstatement. This may involve fire protection, emergency lighting, exit signage, sprinkler positions, smoke detectors, PA speakers, testing reports, Licensed Electrical Worker involvement or Qualified Person submissions where relevant. Not every office reinstatement reaches this level, but when it does, the timeline and cost can change significantly."
        ],
        "bullets": [
          "Level 1: partitions, flooring, ceiling boards, carpentry, signage and painting",
          "Level 2: electrical, lighting, data, telecom, air-conditioning and ceiling services",
          "Level 3: fire protection, testing, certification, endorsed drawings and landlord documentation"
        ]
      },
      {
        "eyebrow": "Timeline",
        "title": "Office reinstatement timeline in Singapore",
        "paragraphs": [
          "A safe office reinstatement timeline usually starts 2–3 months before lease expiry. This does not mean the contractor needs three months on site. It means the business needs enough time to review obligations, obtain landlord instructions, survey the premises, price the correct scope, arrange building access, schedule noisy works and handle inspection before the deadline.",
          "Three months before expiry, review the lease and request the landlord's reinstatement requirements. If the landlord provides a detailed letter, read it line by line. Check whether the scope mentions M&E, fire protection, telecom cabling, FCU servicing, utility termination, specific paint finishes, floor restoration or nominated contractors.",
          "Two months before expiry, arrange a site survey and obtain itemised quotations. This is also the time to identify long-lead risks: landlord approvals, after-hours work, service lift booking, common-area protection, security access, fire alarm isolation, LEW coordination or nominated contractors. One month before expiry, confirm the contractor, schedule works and coordinate business move-out. The final week should be reserved for inspection, rectification, final cleaning and handover documents."
        ],
        "bullets": [
          "3 months before: review lease, request landlord scope, collect original drawings if available",
          "2 months before: survey site, obtain quotes, identify technical or approval risks",
          "6–8 weeks before: confirm nominated contractors, LEW/fire protection needs and building access",
          "1 month before: appoint contractor, schedule move-out and submit required forms",
          "Final week: joint inspection, rectification, deep cleaning and final handover"
        ]
      },
      {
        "eyebrow": "Delay risks",
        "title": "What causes reinstatement delays?",
        "paragraphs": [
          "The most common delay is not demolition speed. It is missing information. If the landlord issues a detailed reinstatement list late, the contractor may discover that the original quote did not include technical items such as fire protection, telecom removal, emergency lighting or air-conditioning reports. That creates cost discussions and schedule pressure.",
          "Another common delay is poor move-out coordination. Reinstatement cannot properly start if staff, furniture, servers, safes, inventory or loose items are still inside the unit. IT teams may need more time to remove racks, access points and data cabling. Asset disposal may need separate vendors. If these activities overlap badly with reinstatement, the site becomes congested and unsafe.",
          "Building rules can also slow down the project. Many commercial buildings restrict hacking, drilling, noisy works, deliveries and disposal to specific hours. Shopping malls may only allow noisy works at night. Service lifts need booking. Common corridors and lift lobbies may need protection. These items sound administrative, but they can determine whether the project finishes on time."
        ],
        "bullets": [
          "Late landlord reinstatement letter",
          "Incomplete site survey or missing original drawings",
          "Nominated contractors unavailable",
          "After-hours work restrictions",
          "Service lift or loading bay booking issues",
          "Furniture, IT or inventory not cleared before work starts",
          "Failed inspection requiring rectification"
        ]
      },
      {
        "eyebrow": "Cost planning",
        "title": "Office reinstatement cost Singapore: what affects the price?",
        "paragraphs": [
          "Office reinstatement cost in Singapore varies because no two handover scopes are identical. A small open-plan office with light partitions and carpet removal will cost very differently from a retail shop with shopfront hoarding, marble floor protection, fire protection works, FCU servicing, telecom removal and landlord-nominated contractors.",
          "As a planning reference, simple office reinstatement may fall around S$8–S$18 per square foot when the scope is mainly removal, disposal, patching, painting and basic ceiling or flooring works. More involved office reinstatement commonly sits around S$18–S$35 per square foot. Retail, mall, F&B, clinic or technical premises can exceed S$35–S$45+ per square foot when M&E, fire protection, waterproofing, exhaust, plumbing, hoarding, after-hours work or strict landlord requirements are involved.",
          "These ranges should not be treated as a guaranteed quotation. The correct price depends on the landlord's written scope, current site condition, original handover state, amount of demolition, waste volume, ceiling height, floor finish, electrical requirements, fire protection works, working-hour restrictions and whether specialist trades must be appointed."
        ],
        "bullets": [
          "Office size and layout complexity",
          "Number and type of partitions to remove",
          "Flooring restoration: carpet, vinyl, tiles, raised floor or screed",
          "Ceiling works: board ceiling, grid ceiling, access panels and services",
          "Electrical and data cabling removal or reinstatement",
          "Air-conditioning diffusers, ducts, FCUs and servicing reports",
          "Fire protection works such as sprinklers, detectors and emergency systems",
          "After-hours works, mall rules and building management requirements",
          "Disposal volume, haulage and common-area protection"
        ]
      },
      {
        "eyebrow": "Hidden costs",
        "title": "Hidden reinstatement costs most businesses miss",
        "paragraphs": [
          "Many tenants budget for hacking and painting but forget the less visible costs. Disposal charges can be significant when there are many partitions, carpets, cabinets, glass panels, counters, safes or built-in storage. Haulage and debris removal can also increase when the building has restricted loading hours or requires manual movement through service corridors.",
          "Landlord-nominated contractors are another major hidden cost. Some buildings require certain trades to be handled by approved contractors, especially fire protection, PA systems, electrical metering, fibre optic removal, waterproofing, hoarding or survey works. This reduces the tenant's flexibility and may affect both price and schedule.",
          "Documentation can also cost money. Depending on scope, the tenant may need LEW-endorsed electrical documents, service reports for air-conditioning, telecom termination confirmations, utility termination forms, fire protection reports or joint inspection sign-offs. These are often not obvious when the project is first discussed."
        ],
        "bullets": [
          "Disposal and haulage charges",
          "After-hours labour and night works",
          "Hoarding installation and removal",
          "Landlord-nominated contractor charges",
          "LEW, fire protection or specialist trade coordination",
          "Air-conditioning chemical cleaning and service reports",
          "Telecom, fibre or data-cable removal",
          "Unexpected repair after hacking or removal",
          "Additional landlord rectification requests after inspection"
        ]
      },
      {
        "eyebrow": "Retail and mall units",
        "title": "Why shopping mall reinstatement is often stricter than office reinstatement",
        "paragraphs": [
          "Retail and shopping mall reinstatement is often more stringent because the unit affects public-facing areas, fire safety systems, shopfront appearance, service corridors, common facilities and mall operations. The landlord may impose very specific instructions for hoarding, corridor protection, shopfront restoration, marble tile protection, noisy work hours and nominated contractors.",
          "A mall landlord may require the tenant to remove glass panels, signage, display shelving, counters, advertisement panels, floor finishes, ceiling works and tenant cabling. At the same time, the tenant may need to reinstate sprinkler points, smoke detectors, PA speakers, emergency lighting, exit signage, FCUs, grilles, ducts, utility termination forms and service reports.",
          "This is why a retail reinstatement quote that only covers demolition and painting is often incomplete. The correct question is not 'how much to hack and paint?' The correct question is 'what exactly will the landlord inspect before accepting handover?'"
        ],
        "bullets": [
          "Shopfront and signage requirements",
          "Common corridor and lift lobby protection",
          "Night work or restricted noisy work timing",
          "Nominated fire protection, electrical or hoarding contractors",
          "Air-conditioning and condensate drain servicing",
          "Utility termination and meter handover",
          "Final joint inspection with landlord representatives"
        ]
      },
      {
        "eyebrow": "Security deposit",
        "title": "Common reasons businesses lose part of their security deposit",
        "paragraphs": [
          "Businesses usually worry about reinstatement cost, but the larger concern may be the security deposit. A landlord may deduct from the deposit if the premises are handed over late, incomplete, damaged, dirty or not reinstated according to the lease and landlord requirements.",
          "The frustrating cases are often those where the tenant believes the work is complete because the space looks empty and freshly painted. The landlord may still reject handover if hidden or technical items are unresolved: redundant cables above the ceiling, incomplete fire protection reinstatement, damaged floor screed, missing access panels, unremoved signage fixings, damaged marble, unserviced FCUs or missing certification documents.",
          "The best way to reduce deposit risk is to work from a written reinstatement checklist, photograph pre-existing conditions, confirm ambiguous items before work starts, keep inspection records and reserve time for rectification before the lease expiry date."
        ],
        "bullets": [
          "Incomplete reinstatement scope",
          "Poor patching, uneven finishing or visible damage",
          "Late completion after lease expiry",
          "Unresolved defects after landlord inspection",
          "Damage to common areas during removal works",
          "Failure to remove redundant cabling or fixtures",
          "Missing service reports, utility forms or endorsed documents",
          "Poor final cleaning or debris left behind"
        ]
      },
      {
        "eyebrow": "Approvals and compliance",
        "title": "Do you need permits for office reinstatement?",
        "paragraphs": [
          "Not every reinstatement project requires authority approval. Simple removal of tenant fixtures, loose furniture, non-structural partitions and basic making-good works may be handled under building management requirements without formal authority submission. However, this must not be assumed blindly.",
          "Approval or specialist involvement may be needed when the work affects fire safety systems, structural elements, building services, electrical infrastructure, plumbing, gas, exhaust, change of use or regulated fire safety provisions. In Singapore, proposed fire safety works generally require SCDF approval submitted through the appropriate Qualified Person route, and certain electrical works may require Licensed Electrical Worker involvement.",
          "Some minor building works may be exempt from BCA approval, but the party carrying out the work remains responsible for safety and compliance. For commercial premises, the practical first step is to ask the landlord or building management what forms, approvals, contractors and inspections are required before work starts."
        ],
        "bullets": [
          "Do not assume permits are always required",
          "Do not assume permits are never required",
          "Check landlord, MCST or building management requirements first",
          "Confirm whether SCDF, BCA, LEW, QP or specialist trade involvement is relevant",
          "Keep approval records and handover documents for final inspection"
        ]
      },
      {
        "eyebrow": "Checklist",
        "title": "Office reinstatement checklist before lease handover",
        "paragraphs": [
          "A reinstatement checklist helps the business stay in control. It should cover lease obligations, site condition, landlord requirements, contractor scope, move-out coordination, authority or building approvals, utilities, inspections and documents.",
          "The checklist should be completed before the contractor starts work, not after the landlord rejects handover. A proper checklist reduces arguments because everyone is working from the same documented scope."
        ],
        "bullets": [
          "Lease reinstatement clause reviewed",
          "Landlord reinstatement letter obtained",
          "Original handover condition or drawings checked",
          "Site survey completed with photos",
          "Scope separated into demolition, making-good, M&E, fire protection and documentation",
          "Nominated contractor requirements confirmed",
          "Building access, work hours and service lift booking checked",
          "Furniture, IT equipment and inventory removal scheduled",
          "Utility termination and telecom disconnection planned",
          "Final inspection date booked before lease expiry",
          "Rectification buffer reserved",
          "Handover documents prepared"
        ]
      },
      {
        "eyebrow": "Choosing a contractor",
        "title": "How to choose a reinstatement contractor in Singapore",
        "paragraphs": [
          "A good reinstatement contractor should ask for the lease requirements, landlord letter, floor plan, photos, previous renovation drawings and building management rules before giving a final quote. If the contractor only looks at the empty office and gives a lump-sum demolition price, important handover items may be missed.",
          "Commercial reinstatement needs coordination discipline. The contractor must understand access restrictions, common-area protection, disposal routing, noisy work timing, safety requirements and landlord inspection expectations. For technical scopes, the contractor must also coordinate the right specialist trades rather than pretending every item is simple hacking work.",
          "The cheapest quote can be dangerous if it excludes disposal, protection, patching, ceiling making-good, M&E removal, fire protection coordination, air-conditioning servicing or post-inspection rectification. Ask for an itemised quote that clearly separates included works, excluded works and assumptions."
        ],
        "bullets": [
          "Ask whether the quote is based on the landlord's reinstatement letter",
          "Check if M&E and fire protection items are included or excluded",
          "Confirm disposal, haulage and protection works",
          "Clarify working hours and after-hours charges",
          "Ask who handles landlord inspection and rectification",
          "Request clear payment stages and variation rules"
        ]
      },
      {
        "eyebrow": "Business continuity",
        "title": "Reinstatement should be planned together with your move-out",
        "paragraphs": [
          "Lease handover is rarely the only thing happening. Your team may also be moving to a new office, returning equipment, changing internet service, updating registered addresses, clearing inventory, migrating servers and coordinating staff access. If reinstatement is planned separately from these business tasks, conflict is likely.",
          "A practical move-out plan should decide the final operating day, IT removal day, furniture disposal day, contractor start day, utilities termination date and final inspection date. The timeline should avoid unrealistic overlaps. For example, hacking should not begin while critical servers are still running, and final cleaning should not happen before rectification works are complete.",
          "This is why business owners should not treat reinstatement as an afterthought. A late handover can cost more than the reinstatement itself if the tenant must pay additional rent, utilities, management charges or deposit deductions."
        ],
        "bullets": [
          "Confirm final operating date",
          "Plan staff and IT move-out before hacking",
          "Remove loose furniture before reinstatement starts",
          "Coordinate utility termination only after essential works are complete",
          "Leave time for landlord inspection and rectification before expiry"
        ]
      },
      {
        "eyebrow": "Practical conclusion",
        "title": "The safest way to approach office reinstatement",
        "paragraphs": [
          "The safest approach is to start with documentation, not demolition. Read the lease, obtain the landlord's reinstatement requirements, survey the premises, identify technical systems, clarify approvals and price the full handover scope before appointing the contractor.",
          "Office reinstatement is successful when the landlord accepts the handover on time with minimal dispute. A clean empty unit is not enough if the technical requirements, reports or landlord-specific conditions are missing.",
          "Plan early, document clearly and avoid comparing quotes only by total price. The best reinstatement contractor is not simply the cheapest demolition team, but the team that can help you hand back the premises properly."
        ],
        "bullets": [
          "Start 2–3 months before lease expiry",
          "Get landlord requirements in writing",
          "Budget for hidden technical and documentation costs",
          "Choose a contractor who understands commercial handover",
          "Reserve time for final inspection and rectification"
        ]
      }
    ],
    
      {
        "eyebrow": "Real-world landlord requirements",
        "title": "Why shopping mall and retail reinstatement can be more complex than office reinstatement",
        "paragraphs": [
          "Many business owners assume reinstatement only involves removing partitions and repainting walls. In reality, shopping malls and premium commercial buildings often impose significantly stricter handover requirements.",
          "Landlords may require reinstatement deposits, public liability insurance, nominated contractors, common area protection, service lift protection, after-hours work arrangements, joint inspections and detailed documentation before works can even begin.",
          "Some reinstatement requirements extend beyond visible finishes. Electrical systems, emergency lighting, fire protection systems, telecom infrastructure, air-conditioning servicing records and utility termination confirmations may form part of the final handover process.",
          "For this reason, commercial reinstatement should be managed as a lease handover project rather than a demolition project."
        ],
        "bullets": [
          "Confirm landlord requirements before obtaining quotations",
          "Check if nominated contractors are mandatory",
          "Budget for deposits, insurance and documentation costs",
          "Allow time for inspections and rectification works",
          "Coordinate utility termination and final handover records"
        ]
      },
      {
        "eyebrow": "Project management",
        "title": "Commercial reinstatement is a coordination exercise",
        "paragraphs": [
          "Many delays occur because multiple stakeholders must be coordinated within a fixed lease expiry deadline. These can include the landlord, building management, reinstatement contractor, LEW, fire protection specialists, telecom providers and utility companies.",
          "A successful handover depends on sequencing works, obtaining approvals, scheduling inspections and ensuring documentation is completed before the landlord's final acceptance."
        ],
        "bullets": [
          "Landlord and building management approvals",
          "LEW and electrical documentation where required",
          "Fire protection reinstatement and testing",
          "Utility termination planning",
          "Joint inspections and final acceptance"
        ]
      },
"checklistTitle": "Office reinstatement checklist for Singapore tenants",
    "checklistIntro": "Use this checklist before appointing a contractor or confirming your lease handover timeline.",
    "checklist": [
      "Lease clause reviewed",
      "Landlord reinstatement requirements received in writing",
      "Original condition, drawings or handover photos checked",
      "Site survey completed with photos",
      "Partitions, flooring, ceiling and carpentry scope confirmed",
      "Electrical, data, telecom and air-conditioning scope checked",
      "Fire protection, emergency lighting and exit sign requirements clarified",
      "Nominated contractors identified where required",
      "Building work hours, loading bay and service lift rules confirmed",
      "Disposal, haulage and protection costs included",
      "Utility termination and telecom disconnection planned",
      "Final inspection booked with rectification buffer",
      "Final cleaning included",
      "Handover documents and service reports prepared"
    ],
    "scenarioTitle": "Realistic Singapore reinstatement scenarios",
    "scenarios": [
      {
        "title": "Small open-plan office",
        "problem": "The unit has loose furniture, carpet flooring, light partitioning and basic electrical additions. The reinstatement scope is mainly removal, patching, painting and cleaning.",
        "advice": "Still confirm data cabling, ceiling condition, floor adhesive removal and landlord inspection requirements. Simple offices can still fail handover if redundant cables or damaged ceiling tiles are left behind."
      },
      {
        "title": "Corporate office with meeting rooms",
        "problem": "The office has multiple glass partitions, acoustic rooms, feature walls, pantry cabinets, extra lighting, data points and ceiling alterations.",
        "advice": "Allow more time for glass disposal, ceiling making-good, electrical removal, data-cable tracing, paint matching and post-inspection rectification."
      },
      {
        "title": "Shopping mall or retail unit",
        "problem": "The landlord may require shopfront hoarding, signage removal, marble protection, fire protection reinstatement, FCU servicing, utility termination forms and nominated contractors.",
        "advice": "Do not quote this like a basic office. Mall reinstatement should be planned around landlord instructions, night-work restrictions, technical trades and final joint inspection."
      }
    ],
    "internalLinksTitle": "Related commercial renovation guides",
    "internalLinks": [{"label":"Commercial Reinstatement Services","to":"/commercial/reinstatement","text":"Learn more about commercial reinstatement services, landlord handover support and lease expiry planning."},
      {
        "label": "Commercial Renovation Singapore",
        "to": "/commercial",
        "text": "Explore ID Work Studio's commercial renovation and reinstatement services for offices, retail and business spaces."
      },
      {
        "label": "Office Renovation Cost Singapore",
        "to": "/insights/office-renovation-cost-singapore",
        "text": "Understand how office renovation cost is planned before comparing reinstatement against relocation or fit-out budgets."
      },
      {
        "label": "Office Renovation Timeline Singapore",
        "to": "/insights/office-renovation-timeline-singapore",
        "text": "Compare renovation and reinstatement timelines so your move-out and new office schedule do not clash."
      },
      {
        "label": "Commercial Renovation Cost Singapore",
        "to": "/insights/commercial-renovation-cost-singapore",
        "text": "See the wider cost drivers for commercial renovation, fit-out and reinstatement planning in Singapore."
      }
    ],
    "faqTitle": "Office reinstatement FAQ",
    "faqs": [
      {
        "question": "Is commercial reinstatement mandatory in Singapore?",
        "answer": "It depends on your lease. Most commercial leases require the tenant to reinstate the premises at lease expiry unless the landlord waives or modifies the requirement in writing. Always review the lease and ask the landlord for the exact handover scope."
      },
      {
        "question": "How much does commercial reinstatement cost in Singapore?",
        "answer": "As a planning guide, simple office reinstatement may be around S$8–S$18 per square foot, while more involved projects may range from S$18–S$35+ per square foot. Retail, mall, F&B or technical premises can exceed this when fire protection, M&E, hoarding, night works or nominated contractors are involved."
      },
      {
        "question": "How long does office reinstatement take?",
        "answer": "Small offices may take several days to two weeks on site, but planning should start 2–3 months before lease expiry. Larger offices, retail units and premises with strict landlord requirements may need more time because of approvals, nominated contractors, inspections and rectification."
      },
      {
        "question": "What do landlords check during office reinstatement?",
        "answer": "Landlords commonly check partitions, flooring, ceilings, walls, paint, signage, carpentry, cleaning and damage. Some also check electrical boards, lighting, emergency lights, exit signs, data cabling, telecom boxes, air-conditioning, sprinklers, smoke detectors, PA speakers and supporting reports."
      },
      {
        "question": "Can reinstatement requirements be negotiated?",
        "answer": "Sometimes. A landlord may waive or reduce certain requirements if the next tenant wants to retain part of the fit-out, or if both parties agree in writing. Do not rely on verbal assumptions. Any waiver should be documented clearly."
      },
      {
        "question": "What happens if the landlord rejects handover?",
        "answer": "The landlord may request rectification, delay acceptance of the premises, deduct costs from the security deposit or charge additional occupation-related costs depending on the lease. This is why inspection should be scheduled before the final lease expiry date."
      },
      {
        "question": "Do I need permits for office reinstatement?",
        "answer": "Not always. Simple non-structural removal and making-good works may not need authority submission, but building management approval is usually still required. Works affecting fire safety systems, electrical infrastructure, structure, plumbing, gas, exhaust or regulated systems may require specialist involvement or authority approval."
      },
      {
        "question": "Do I need a Licensed Electrical Worker for reinstatement?",
        "answer": "Some projects involving electrical distribution boards, metering, sub-main cables or electrical certification may require Licensed Electrical Worker involvement. The requirement depends on the building and scope."
      },
      {
        "question": "Can my landlord require nominated contractors?",
        "answer": "Yes. Some landlords require nominated or approved contractors for fire protection, PA systems, electrical metering, fibre optic removal, hoarding, waterproofing or other building services. This can affect cost and schedule."
      },
      {
        "question": "Why do businesses lose part of their security deposit?",
        "answer": "Common reasons include incomplete reinstatement, poor workmanship, late completion, damage during removal works, missed landlord requirements, unresolved defects, poor cleaning or missing documents such as service reports and utility termination forms."
      },
      {
        "question": "Should I reinstate before or after moving to the new office?",
        "answer": "Most businesses should plan move-out first, then reinstatement. Loose furniture, IT equipment, servers and inventory should be cleared before hacking and making-good works begin. However, utility and telecom termination must be timed carefully so essential services are available during the works."
      },
      {
        "question": "Is retail reinstatement different from office reinstatement?",
        "answer": "Yes. Retail and mall reinstatement is often stricter because of shopfront requirements, public areas, signage, fire safety systems, air-conditioning, service corridors, night works and landlord-nominated contractors."
      }
    ],
    "ctaTitle": "Need help planning office reinstatement before lease handover?",
    "ctaText": "Send ID Work Studio your lease expiry date, floor plan, landlord reinstatement letter and site photos. We can help you review the likely scope, identify hidden handover risks and prepare a practical reinstatement quotation before your deadline becomes urgent.",
    "ctaPrimary": "WhatsApp ID Work Studio",
    "ctaSecondary": "View Commercial Services",
    "breadcrumbCurrent": "Office Reinstatement Singapore"
  },
  "zh": {
    "metaTitle": "新加坡办公室还原工程：费用、时间表、清单与业主要求（2026指南）| ID Work Studio",
    "metaDescription": "新加坡办公室与商业单位还原工程指南，涵盖费用、时间表、业主交还要求、隐藏成本、押金风险、检查清单和租约交还规划。",
    "canonical": "https://idworkstudio.com/insights/commercial-reinstatement-singapore",
    "eyebrow": "商业租约交还指南",
    "title": "新加坡办公室还原工程：费用、时间表、清单与业主要求",
    "subtitle": "新加坡办公室还原工程，是在租约结束前，把办公室、零售店或商业单位恢复到业主要求的交还状态。它不只是拆除工程，而是关系到交还期限、业主验收、押金退还和租约风险的商业规划。",
    "readTime": "约 16 分钟",
    "category": "商业还原工程",
    "heroImageAlt": "新加坡商业租户查看办公室还原工程清单、租约和交还文件",
    "quickAnswerTitle": "快速答案",
    "quickAnswer": "办公室还原工程通常包括拆除租户后期装修、恢复墙面、地面、天花、电工、空调、消防、数据线或其他业主指定项目。最安全的做法是在租约到期前 2–3 个月开始规划，先取得业主书面还原要求，完成现场勘查，及早确认 M&E、消防或指定承包商项目，并预留验收、修补和清洁时间。",
    "summaryRows": [
      {
        "label": "建议开始时间",
        "value": "租约到期前 2–3 个月",
        "note": "如果大楼要求严格、涉及指定承包商或消防系统，越早规划越安全。"
      },
      {
        "label": "常见预算参考",
        "value": "S$8–S$35+ / sqft",
        "note": "简单办公室可能较低；商场、零售和技术性单位会因范围而明显提高。"
      },
      {
        "label": "最大交还风险",
        "value": "遗漏业主要求",
        "note": "单位看起来干净，不代表电工、消防、空调或文件项目已经符合交还要求。"
      },
      {
        "label": "最佳策略",
        "value": "当成租约交还项目处理",
        "note": "目标不是单纯拆除，而是在期限前让业主接受交还。"
      }
    ],
    "comparisonTitle": "租户以为的还原工程 vs 业主实际可能检查的项目",
    "comparisonIntro": "很多业主以为还原工程只是拆墙和油漆。实际上，商业业主或大楼管理处可能会检查表面装修、建筑服务、消防系统、文件、公共区域保护和最终清洁。",
    "comparisonRows": [
      {
        "item": "租户常见理解",
        "impact": "拆除表面装修",
        "note": "隔墙、地板、招牌和木作当然重要，但它们只是最明显的一部分。"
      },
      {
        "item": "业主实际要求",
        "impact": "恢复指定状态",
        "note": "业主可能要求单位恢复到原始交付状态、基本建筑状态或之前记录的交还状态。"
      },
      {
        "item": "技术层面",
        "impact": "M&E 与消防很重要",
        "note": "配电箱、照明、紧急灯、出口灯、喷淋头、烟感、PA 喇叭、FCU 和电话/网络设施都可能被检查。"
      },
      {
        "item": "商业风险",
        "impact": "期限与押金风险",
        "note": "逾期完成、验收失败或缺陷未解决，都可能导致额外租金、押金扣款或争议。"
      }
    ],
    "sections": [
      {
        "eyebrow": "定义",
        "title": "什么是新加坡办公室还原工程？",
        "paragraphs": [
          "办公室还原工程，是在商业租约结束时，把租赁单位恢复到租约和业主要求的状态。实际范围取决于租约条款、原始交付状态、业主还原信、大楼管理规定，以及租户在租期内做过的装修。",
          "简单来说，装修是为了让公司开始营业；还原是为了让业主可以收回单位。装修通常以设计为中心，例如布局、材料、品牌形象、会议室、茶水间和灯光。还原则以责任为中心：该拆的拆、该恢复的恢复、损坏的修补、文件的提交，以及最后通过业主验收。",
          "简单办公室可能只需要拆除隔墙、地毯、PVC 地板、招牌、木柜和后加电点。复杂的办公室、零售店、诊所、教育中心、餐饮或商场单位，范围可能包括天花、消防、M&E、空调、排气、水喉、电话线、网络线、PA 喇叭、紧急灯和相关检测文件。"
        ],
        "bullets": [
          "按租约要求交还单位",
          "拆除租户后加的隔墙、装修和固定装置",
          "修补墙面、天花、地面和柱子",
          "如适用，处理电工、网络、空调和消防系统",
          "完成清洁、验收、修补和正式交还"
        ]
      },
      {
        "eyebrow": "租约责任",
        "title": "为什么商业租约通常要求还原？",
        "paragraphs": [
          "大多数新加坡商业租约都会有还原或交还条款，要求租户在租约结束时，把单位恢复到指定状态，合理损耗除外。不同业主的文字会不一样，但商业风险相同：如果交还状态不符合要求，租户可能面对修补要求、押金扣除或额外占用费用。",
          "常见错误是等到最后一个月才开始找还原报价。这个时候，公司可能还在营业、搬迁、处理 IT、安排新办公室、清货和与业主沟通。还原工程之所以压力大，不一定因为施工本身复杂，而是因为交还期限是固定的。",
          "还原工程应被当成商业规划，而不是单纯施工。你同时在管理租约到期、员工搬迁、资产处理、IT 停用、承包商进场、业主验收和押金退还。施工只是其中一部分。"
        ],
        "bullets": [
          "报价前先看租约",
          "向业主索取书面还原要求",
          "确认业主是否有标准还原指南",
          "确认是否必须使用指定承包商",
          "预留验收和修补时间，而不只是施工时间"
        ]
      },
      {
        "eyebrow": "交还验收",
        "title": "业主交还时实际会检查什么？",
        "paragraphs": [
          "业主通常会检查租户后加工程是否拆除、拆除造成的损坏是否修补，以及单位是否恢复到要求状态。一般办公室常见检查项目包括隔墙、天花、地面、油漆、门、电点、数据线、空调风口、招牌和清洁。",
          "但高级商业大楼、购物商场和技术性商业单位可能检查得更深入。严格的还原信可能要求恢复配电箱、紧急灯、出口灯、电话分线箱、喷淋头、烟感、PA 喇叭、FCU、冷凝水管清洗报告、化学清洗报告、断电表格、联合检查和指定承包商项目。",
          "因此，还原报价不应该只靠现场看一圈就决定。正确范围必须对照业主书面要求、原始图纸、租户装修记录和大楼管理规定。"
        ],
        "bullets": [
          "隔墙：完全拆除并修补损坏位置",
          "地面：恢复原有饰面、找平层、地砖或地毯状态",
          "天花：恢复天花板、龙骨、检修口和相关服务",
          "电工：检查配电箱、照明、紧急灯、出口灯和多余电线",
          "数据与电话：按要求移除租户后加线缆",
          "木作与招牌：移除柜台、柜体、Logo 和店面装修",
          "空调：如适用，检查风口、回风口、风管、FCU 和服务报告",
          "消防：如要求，确认喷淋、烟感、PA 喇叭和灭火器",
          "清洁：垃圾、粉尘、标签、污渍和公共区域损坏"
        ]
      },
      {
        "eyebrow": "三层概念",
        "title": "还原工程的三个层次：表面、建筑服务与合规",
        "paragraphs": [
          "理解还原工程，可以分成三个层次。第一层是表面还原，也就是大多数租户最先看到的：拆隔墙、柜体、招牌、地板和后期装修。它很重要，但不是全部。",
          "第二层是建筑服务还原，包括电工、照明、数据线、电话线、空调风口、FCU、天花内服务和其他连接大楼系统的项目。这里出错，会影响管理处验收，因为这些系统必须安全、可检查、可追踪。",
          "第三层是合规还原，可能涉及消防、紧急灯、出口灯、喷淋、烟感、PA 喇叭、测试报告、LEW 或 QP 文件。不是每个办公室都会到这一层，但一旦涉及，费用和时间都会改变。"
        ],
        "bullets": [
          "第一层：隔墙、地面、天花板、木作、招牌和油漆",
          "第二层：电工、灯光、数据、电话、空调和天花内服务",
          "第三层：消防、测试、证书、签署图纸和业主文件"
        ]
      },
      {
        "eyebrow": "时间表",
        "title": "新加坡办公室还原工程时间表",
        "paragraphs": [
          "安全的办公室还原工程，通常应在租约到期前 2–3 个月开始规划。这不代表承包商需要三个月在现场施工，而是公司需要足够时间检查租约、取得业主要求、勘查现场、报价、安排进场、预订服务电梯、安排噪音工程，并在期限前完成验收。",
          "到期前三个月，应先检查租约并向业主索取还原要求。如果业主提供详细还原信，必须逐项阅读，查看是否提到 M&E、消防、电话线、FCU 服务、断电断水、指定油漆、地面恢复或指定承包商。",
          "到期前两个月，应安排现场勘查和报价，同时确认长周期风险，例如业主批准、夜间施工、服务电梯、公共区域保护、保安出入、火警隔离、LEW 或指定承包商。到期前一个月，应确定承包商、安排搬迁和提交必要表格。最后一周应保留给验收、修补、深度清洁和正式交还。"
        ],
        "bullets": [
          "提前 3 个月：检查租约、索取业主范围、收集原始图纸",
          "提前 2 个月：现场勘查、取得报价、确认技术或审批风险",
          "提前 6–8 周：确认指定承包商、LEW/消防需求和进场条件",
          "提前 1 个月：委任承包商、安排搬迁、提交表格",
          "最后一周：联合检查、修补、清洁和交还"
        ]
      },
      {
        "eyebrow": "延误风险",
        "title": "还原工程为什么会延误？",
        "paragraphs": [
          "最常见的延误不是拆除速度，而是资料不足。如果业主太迟才发出详细还原清单，承包商可能发现原报价没有包括消防、电话线、紧急灯、空调报告等技术项目，导致追加费用和时间压力。",
          "另一个常见延误是搬迁协调不好。如果员工、家具、服务器、保险箱、货物或杂物还在单位内，还原工程就无法顺利开始。IT 团队可能需要更多时间拆除机柜、网络设备和数据线。资产处理也可能需要独立供应商。",
          "大楼规定也会影响时间。很多商业大楼对敲打、钻孔、噪音、运输和弃置有固定时段。商场可能只允许夜间噪音工程。服务电梯要预订，走廊和电梯厅要保护。这些看似行政的细节，往往决定项目能否准时完成。"
        ],
        "bullets": [
          "业主还原信太迟发出",
          "现场勘查不完整或缺少原图",
          "指定承包商档期不足",
          "夜间或限时施工规定",
          "服务电梯或卸货区预订问题",
          "家具、IT 或货物未清空",
          "验收失败后需要修补"
        ]
      },
      {
        "eyebrow": "费用规划",
        "title": "新加坡办公室还原工程费用：哪些因素影响价格？",
        "paragraphs": [
          "办公室还原费用差异很大，因为每个交还范围都不同。一个小型开放办公室，只需拆少量隔墙和地毯，费用会与一个涉及店面围板、大理石保护、消防、FCU、电话线和指定承包商的零售单位完全不同。",
          "作为预算参考，简单办公室还原工程可能约 S$8–S$18 / sqft，范围主要是拆除、清运、修补、油漆和基础天花/地面工程。较复杂办公室通常可能约 S$18–S$35 / sqft。零售、商场、餐饮、诊所或技术单位，如果涉及 M&E、消防、防水、排气、水喉、围板、夜间施工或严格业主要求，可能超过 S$35–S$45+ / sqft。",
          "这些范围只是初步规划参考，不应当成最终报价。正确价格取决于业主书面范围、现场状态、原交付状态、拆除量、垃圾量、天花高度、地面饰面、电工要求、消防工程、施工时段限制和是否需要专业承包商。"
        ],
        "bullets": [
          "办公室面积和布局复杂度",
          "需拆除的隔墙数量和类型",
          "地面恢复：地毯、PVC、地砖、架空地台或找平层",
          "天花：石膏板、系统天花、检修口和设备",
          "电工和数据线拆除或恢复",
          "空调风口、风管、FCU 和服务报告",
          "消防项目如喷淋、烟感和紧急系统",
          "夜间施工、商场规则和管理处要求",
          "垃圾量、清运和公共区域保护"
        ]
      },
      {
        "eyebrow": "隐藏成本",
        "title": "很多公司会忽略的还原隐藏成本",
        "paragraphs": [
          "很多租户只预算拆除和油漆，却忘记不显眼的成本。隔墙、地毯、柜体、玻璃、柜台、保险箱或固定储物柜多的时候，弃置费用可能不低。如果大楼卸货时间有限，或必须通过服务走廊人工搬运，清运成本也会增加。",
          "指定承包商也是重要隐藏成本。有些大楼要求消防、PA 系统、电表、光纤拆除、防水、围板或测量工程必须由批准承包商负责。这样会减少租户自由选择，也会影响价格和时间。",
          "文件也可能产生费用。视工程范围而定，租户可能需要 LEW 签署文件、空调服务报告、电话/网络断线确认、公用事业终止表格、消防报告或联合验收记录。这些在最初讨论时经常被忽略。"
        ],
        "bullets": [
          "弃置和清运费用",
          "夜间人工和加班施工",
          "围板安装和拆除",
          "业主指定承包商费用",
          "LEW、消防或专业工种协调",
          "空调化学清洗和服务报告",
          "电话、光纤或数据线拆除",
          "拆除后发现的额外修补",
          "业主验收后的追加修补要求"
        ]
      },
      {
        "eyebrow": "零售与商场",
        "title": "为什么商场还原通常比办公室更严格",
        "paragraphs": [
          "零售和商场还原通常更严格，因为单位影响公共区域、消防系统、店面外观、服务走廊、公共设施和商场营运。业主可能对围板、走廊保护、店面恢复、大理石保护、噪音时间和指定承包商有非常具体的要求。",
          "商场业主可能要求租户拆除玻璃门、招牌、展示架、柜台、广告板、地面饰面、天花和租户线缆。同时，租户可能要恢复喷淋、烟感、PA 喇叭、紧急灯、出口灯、FCU、回风口、断电断水表格和服务报告。",
          "因此，零售还原不能当成普通办公室来报价。正确问题不是“拆除和油漆多少钱”，而是“业主在接受交还前到底会检查什么”。"
        ],
        "bullets": [
          "店面和招牌要求",
          "公共走廊和电梯厅保护",
          "夜间施工或噪音时间限制",
          "指定消防、电工或围板承包商",
          "空调和冷凝水管服务",
          "公用事业终止和电表交还",
          "与业主代表联合验收"
        ]
      },
      {
        "eyebrow": "押金风险",
        "title": "公司为什么会被扣部分押金？",
        "paragraphs": [
          "公司通常担心还原费用，但更大的风险可能是押金。若单位逾期交还、工程不完整、有损坏、不干净，或没有按租约和业主要求还原，业主可能从押金中扣除费用。",
          "最让人头痛的情况，是租户以为单位已经空了、油漆好了，所以工程完成。但业主仍可能因为技术项目未处理而拒收，例如天花上方多余电线未拆、消防未恢复、地面找平层损坏、检修口缺失、招牌孔洞未修、大理石损坏、FCU 未服务或缺少证明文件。",
          "降低押金风险的方法，是从书面清单开始，拍照记录原有状态，开工前确认模糊项目，保留检查记录，并在租约到期前预留修补时间。"
        ],
        "bullets": [
          "还原范围不完整",
          "修补粗糙、不平或明显损坏",
          "租约到期后才完成",
          "业主验收缺陷未解决",
          "拆除时损坏公共区域",
          "未拆除多余线缆或固定件",
          "缺少服务报告、断电表格或签署文件",
          "最终清洁不足或遗留垃圾"
        ]
      },
      {
        "eyebrow": "审批与合规",
        "title": "办公室还原需要申请许可证吗？",
        "paragraphs": [
          "不是每个还原工程都需要政府审批。简单拆除租户家具、非结构隔墙、基本修补和油漆，很多时候只需符合大楼管理要求。但这不应被盲目假设。",
          "如果工程影响消防系统、结构、电工基础设施、水喉、煤气、排气、用途改变或受监管消防设施，就可能需要专业人员或相关审批。在新加坡，拟进行的消防安全工程通常需要通过合适的 Qualified Person 路径向 SCDF 申请；部分电工系统也可能需要 LEW 参与。",
          "某些小型建筑工程可能不需要 BCA 批准，但施工方仍需确保安全和合规。商业单位最实际的第一步，是问清业主或大楼管理处：开工前需要哪些表格、批准、指定承包商和检查。"
        ],
        "bullets": [
          "不要假设一定需要许可证",
          "也不要假设一定不需要许可证",
          "先确认业主、MCST 或管理处要求",
          "确认是否涉及 SCDF、BCA、LEW、QP 或专业工种",
          "保留批准记录和交还文件"
        ]
      },
      {
        "eyebrow": "清单",
        "title": "办公室交还前还原工程清单",
        "paragraphs": [
          "还原清单可以帮助公司保持控制。清单应包括租约责任、现场状态、业主要求、承包商范围、搬迁安排、审批、公用事业、验收和文件。",
          "这份清单应在承包商开工前完成，而不是等业主拒收后才补救。清楚的清单可以减少争议，因为各方都以同一份范围为基础。"
        ],
        "bullets": [
          "已检查租约还原条款",
          "已取得业主还原信",
          "已查看原始交付状态或图纸",
          "已完成现场拍照勘查",
          "已把范围分成拆除、修补、M&E、消防和文件",
          "已确认指定承包商要求",
          "已检查进场、施工时段和服务电梯安排",
          "已安排家具、IT 和货物清出",
          "已规划公用事业和电话网络终止",
          "已在租约到期前预约最终验收",
          "已预留修补时间",
          "已准备交还文件"
        ]
      },
      {
        "eyebrow": "选择承包商",
        "title": "如何选择新加坡还原工程承包商",
        "paragraphs": [
          "好的还原承包商在正式报价前，应先索取租约要求、业主还原信、平面图、照片、过往装修图和大楼管理规定。如果承包商只是看一眼空办公室就报一个拆除总价，重要交还项目很容易遗漏。",
          "商业还原需要协调能力。承包商必须理解进场限制、公共区域保护、清运路线、噪音时间、安全要求和业主验收标准。涉及技术范围时，还需要协调正确专业工种，而不是把所有项目都当成简单拆除。",
          "最便宜报价可能有风险，如果它排除了清运、保护、修补、天花恢复、M&E 拆除、消防协调、空调服务或验收后修补。应要求逐项报价，并清楚列明包括、排除和假设。"
        ],
        "bullets": [
          "确认报价是否根据业主还原信制作",
          "检查 M&E 和消防是否包括或排除",
          "确认清运、保护和垃圾处理",
          "说明施工时间和夜间费用",
          "确认谁负责业主验收和修补",
          "要求清楚付款阶段和追加规则"
        ]
      },
      {
        "eyebrow": "商业连续性",
        "title": "还原工程应与公司搬迁一起规划",
        "paragraphs": [
          "租约交还通常不是唯一正在发生的事。公司可能同时搬去新办公室、归还设备、更换网络、更新注册地址、清货、迁移服务器和安排员工通行。如果还原工程与这些事项分开规划，就很容易冲突。",
          "实际搬迁计划应确定最后营业日、IT 拆除日、家具清运日、承包商进场日、公用事业终止日和最终验收日。时间表不应不现实地重叠。例如，服务器还在运行时不应开始敲打；最终清洁也不应安排在修补工程完成前。",
          "这就是为什么公司不应把还原当成最后才处理的小事。逾期交还造成的额外租金、水电、管理费或押金扣款，有时会比还原工程本身更贵。"
        ],
        "bullets": [
          "确定最后营业日",
          "敲打前完成员工和 IT 搬迁",
          "还原前清走松散家具",
          "公用事业终止时间要配合工程需求",
          "在到期前预留业主验收和修补时间"
        ]
      },
      {
        "eyebrow": "实际结论",
        "title": "最安全的办公室还原做法",
        "paragraphs": [
          "最安全的做法，是先处理文件，而不是先拆。先看租约、取得业主要求、勘查现场、确认技术系统、澄清审批，并在委任承包商前把完整交还范围报价清楚。",
          "办公室还原是否成功，取决于业主是否准时、少争议地接受交还。一个看起来空、看起来干净的单位，并不代表技术要求、报告或业主特别条件已经完成。",
          "应提早规划、清楚记录，不要只按总价比较报价。最好的还原承包商，不只是最便宜的拆除队，而是能帮你正确完成商业交还的团队。"
        ],
        "bullets": [
          "租约到期前 2–3 个月开始",
          "把业主要求写下来",
          "预算隐藏技术和文件成本",
          "选择懂商业交还的承包商",
          "预留最终验收和修补时间"
        ]
      }
    ],
    "checklistTitle": "新加坡商业租户办公室还原清单",
    "checklistIntro": "在委任承包商或确认交还时间表前，可用这份清单检查。",
    "checklist": [
      "已检查租约条款",
      "已取得业主书面还原要求",
      "已查看原始状态、图纸或交付照片",
      "已完成现场拍照勘查",
      "已确认隔墙、地面、天花和木作范围",
      "已检查电工、数据、电话和空调范围",
      "已澄清消防、紧急灯和出口灯要求",
      "已确认是否需要指定承包商",
      "已确认施工时段、卸货区和服务电梯规则",
      "已把清运、保护和垃圾处理列入报价",
      "已规划水电、电话和网络终止",
      "已预约最终验收并预留修补时间",
      "已包括最终清洁",
      "已准备服务报告和交还文件"
    ],
    "scenarioTitle": "新加坡常见还原场景",
    "scenarios": [
      {
        "title": "小型开放办公室",
        "problem": "单位主要是松散家具、地毯、少量隔墙和基础后加电点。范围通常是拆除、修补、油漆和清洁。",
        "advice": "仍要确认数据线、天花、地面胶和业主验收要求。简单办公室也可能因为天花上多余线缆或天花板损坏而验收失败。"
      },
      {
        "title": "有多个会议室的公司办公室",
        "problem": "办公室有玻璃隔墙、隔音房、特色墙、茶水间柜、加装灯光、数据点和天花改动。",
        "advice": "应预留更多时间处理玻璃清运、天花修补、电工拆除、数据线追踪、油漆配色和验收后修补。"
      },
      {
        "title": "购物商场或零售单位",
        "problem": "业主可能要求围板、招牌拆除、大理石保护、消防还原、FCU 服务、公用事业终止表格和指定承包商。",
        "advice": "不要当成普通办公室报价。商场还原应围绕业主指示、夜间施工、技术工种和最终联合验收来规划。"
      }
    ],
    "internalLinksTitle": "相关商业装修指南",
    "internalLinks": [{"label":"Commercial Reinstatement Services","to":"/commercial/reinstatement","text":"Learn more about commercial reinstatement services, landlord handover support and lease expiry planning."},
      {
        "label": "新加坡商业装修服务",
        "to": "/commercial",
        "text": "了解 ID Work Studio 为办公室、零售和商业空间提供的装修与还原服务。"
      },
      {
        "label": "新加坡办公室装修费用",
        "to": "/insights/office-renovation-cost-singapore",
        "text": "在比较搬迁、装修和还原预算前，先理解办公室装修费用的组成。"
      },
      {
        "label": "新加坡办公室装修时间表",
        "to": "/insights/office-renovation-timeline-singapore",
        "text": "对比装修与还原时间，避免搬迁、新办公室和旧办公室交还互相冲突。"
      },
      {
        "label": "新加坡商业装修费用",
        "to": "/insights/commercial-renovation-cost-singapore",
        "text": "了解商业装修、fit-out 和还原工程的整体费用因素。"
      }
    ],
    "faqTitle": "办公室还原工程常见问题",
    "faqs": [
      {
        "question": "新加坡办公室还原是强制的吗？",
        "answer": "取决于租约。大多数商业租约都会要求租户在租约结束时还原单位，除非业主书面豁免或修改要求。应先检查租约，并向业主索取具体交还范围。"
      },
      {
        "question": "新加坡办公室还原工程多少钱？",
        "answer": "作为预算参考，简单办公室可能约 S$8–S$18 / sqft，较复杂项目可能约 S$18–S$35+ / sqft。零售、商场、餐饮或技术单位若涉及消防、M&E、围板、夜间施工或指定承包商，费用可能更高。"
      },
      {
        "question": "办公室还原需要多久？",
        "answer": "小型办公室现场施工可能数天到两周，但规划应在租约到期前 2–3 个月开始。大型办公室、零售单位或业主要求严格的项目，因审批、指定承包商、验收和修补，通常需要更多时间。"
      },
      {
        "question": "业主交还时会检查什么？",
        "answer": "常见项目包括隔墙、地面、天花、墙面、油漆、招牌、木作、清洁和损坏。有些业主还会检查配电箱、照明、紧急灯、出口灯、数据线、电话箱、空调、喷淋、烟感、PA 喇叭和相关报告。"
      },
      {
        "question": "还原要求可以谈判吗？",
        "answer": "有时可以。如果下一任租户愿意保留部分装修，或业主同意修改范围，某些项目可能被豁免。但不要依赖口头说法，任何豁免都应书面确认。"
      },
      {
        "question": "如果业主拒收单位会怎样？",
        "answer": "业主可能要求修补、延迟接受交还、从押金扣款，或根据租约收取额外占用费用。因此，最终验收应安排在租约到期日前，而不是最后一天。"
      },
      {
        "question": "办公室还原需要许可证吗？",
        "answer": "不一定。简单非结构拆除和修补可能不需要政府审批，但通常仍需大楼管理批准。若涉及消防、电工基础设施、结构、水喉、煤气、排气或受监管系统，则可能需要专业人员或相关审批。"
      },
      {
        "question": "办公室还原需要 LEW 吗？",
        "answer": "涉及配电箱、电表、主电缆或电工认证的项目，可能需要 Licensed Electrical Worker 参与。实际要求取决于大楼和工程范围。"
      },
      {
        "question": "业主可以要求我使用指定承包商吗？",
        "answer": "可以。有些业主会要求消防、PA 系统、电表、光纤拆除、围板、防水或其他建筑服务由指定或批准承包商完成。这会影响费用和时间。"
      },
      {
        "question": "为什么公司会被扣押金？",
        "answer": "常见原因包括还原不完整、手工差、逾期、拆除造成损坏、遗漏业主要求、缺陷未修、清洁不足或缺少服务报告、公用事业终止表格等文件。"
      },
      {
        "question": "我应该先搬走还是先还原？",
        "answer": "大多数情况应先安排搬迁，再开始还原。松散家具、IT 设备、服务器和货物应在敲打和修补前清走。但水电和网络终止时间要小心安排，确保工程期间仍有必要服务。"
      },
      {
        "question": "零售还原和办公室还原一样吗？",
        "answer": "不一样。零售和商场还原通常更严格，涉及店面、公共区域、招牌、消防、空调、服务走廊、夜间施工和业主指定承包商。"
      }
    ],
    "ctaTitle": "需要在租约交还前规划办公室还原？",
    "ctaText": "把租约到期日、平面图、业主还原信和现场照片发给 ID Work Studio。我们可以帮你判断可能范围、隐藏交还风险，并在期限变得紧急前准备实际的还原报价。",
    "ctaPrimary": "WhatsApp ID Work Studio",
    "ctaSecondary": "查看商业装修服务",
    "breadcrumbCurrent": "新加坡办公室还原工程"
  }
};
;

export default function OfficeReinstatementSingapore() {
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
              {t.summaryRows.map((row) => (
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
              {t.comparisonTitle}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5f5a54]">{t.comparisonIntro}</p>
            <div className="mt-6 overflow-hidden rounded-3xl border border-[#e8e1d7] bg-white shadow-sm">
              {t.comparisonRows.map((row) => (
                <div key={row.item} className="grid gap-2 border-b border-[#e8e1d7] p-5 last:border-b-0 md:grid-cols-[1.1fr_0.7fr_1.7fr] md:gap-5">
                  <p className="font-semibold text-[#2C2C2C]">{row.item}</p>
                  <p className="font-bold text-[#9a7a3f]">{row.impact}</p>
                  <p className="text-sm leading-6 text-[#6f6a63]">{row.note}</p>
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
            <h2 className="font-serif text-3xl font-semibold">{t.checklistTitle}</h2>
            <p className="mt-4 text-base leading-8 text-[#5f5a54]">{t.checklistIntro}</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {t.checklist.map((item) => (
                <div key={item} className="rounded-2xl border border-[#e8e1d7] bg-[#fffdf8] p-4 text-sm leading-6 text-[#5f5a54]">
                  <span className="mr-2 text-[#C5A059]">✓</span>{item}
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="border-b border-[#e8e1d7] pb-4 font-serif text-3xl font-semibold">
              {t.scenarioTitle}
            </h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {t.scenarios.map((scenario) => (
                <div key={scenario.title} className="rounded-3xl border border-[#e8e1d7] bg-white p-6 shadow-sm">
                  <h3 className="font-serif text-2xl font-semibold">{scenario.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#5f5a54]">{scenario.problem}</p>
                  <p className="mt-4 rounded-2xl bg-[#FAF8F3] p-4 text-sm leading-7 text-[#5f5a54]">
                    {scenario.advice}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14 rounded-3xl border border-[#e8e1d7] bg-white p-6 shadow-sm md:p-8">
            <h2 className="font-serif text-3xl font-semibold">{t.internalLinksTitle}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {t.internalLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="rounded-2xl border border-[#e8e1d7] bg-[#fffdf8] p-5 transition hover:border-[#C5A059] hover:shadow-md"
                >
                  <p className="text-sm font-semibold text-[#9a7a3f]">{link.label}</p>
                  <p className="mt-2 text-sm leading-6 text-[#5f5a54]">{link.text}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="border-b border-[#e8e1d7] pb-4 font-serif text-3xl font-semibold">
              {t.faqTitle}
            </h2>
            <div className="mt-6 space-y-4">
              {t.faqs.map((faq) => (
                <details key={faq.question} className="rounded-2xl border border-[#e8e1d7] bg-white p-5 shadow-sm">
                  <summary className="cursor-pointer font-semibold text-[#2C2C2C]">{faq.question}</summary>
                  <p className="mt-4 text-sm leading-7 text-[#5f5a54]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="rounded-3xl bg-[#111] p-8 text-white md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C5A059]">
              ID Work Studio
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold md:text-4xl">{t.ctaTitle}</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/70">{t.ctaText}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/6598333085"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#C5A059] px-7 py-3 text-center text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#d8b76c]"
              >
                {t.ctaPrimary}
              </a>
              <Link
                to="/commercial"
                className="rounded-full border border-white/30 px-7 py-3 text-center text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:border-[#C5A059] hover:text-[#C5A059]"
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
