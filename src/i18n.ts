import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translations
const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "residential": "Residential",
        "commercial": "Commercial",
        "insights": "Insights",
        "gallery": "Gallery",
        "contact": "Contact"
      },
      "accreditation": {
        "hdb": "HDB-Registered",
        "bca": "BCA-Registered",
        "firm": "Firm"
      },
      "hero": {
        "title_main": "Curated Interiors ",
        "title_sub": "for Refined Living",
        "subtitle": "Singapore interior design and renovation studio creating refined homes, workplaces and retail spaces with thoughtful detail, regulatory confidence and timeless appeal.",
        "cta": "View Our Work",
        "whatsapp": "WhatsApp Us"
      },
      "process": {
        "title": "Our Process",
        "subtitle": "A seamless journey from concept to reality.",
        "steps": {
          "1": {
            "title": "Consult & Visualize",
            "desc": "We begin by understanding your vision and lifestyle, translating them into detailed 3D concepts."
          },
          "2": {
            "title": "Accredited Execution",
            "desc": "Our HDB & BCA registered team manages the renovation with precision, ensuring quality and compliance."
          },
          "3": {
            "title": "The Big Reveal",
            "desc": "Walk into your dream space, perfectly finished, cleaned, and ready for your new chapter."
          }
        }
      },
      "services": {
        "title": "Our Expertise",
        "subtitle": "Comprehensive interior design solutions for residential and commercial spaces.",
        "residential": {
          "title": "Residential Renovation",
          "desc": "Transforming HDBs, Condos, and Landed properties into dream homes. Specialized in space planning and lifestyle-centric designs."
        },
        "commercial": {
          "title": "Commercial & Retail",
          "desc": "Strategic workspace and retail design that enhances brand identity and operational efficiency. BCA-compliant solutions."
        },
        "custom": {
          "title": "Custom Carpentry & Styling",
          "desc": "Bespoke joinery and furniture design tailored to your space. Premium materials and expert craftsmanship."
        },
        "stats": {
          "years": "Years Experience",
          "trusted": "Trusted",
          "brand": "Singapore Brand",
          "quality": "Quality",
          "workmanship": "Guaranteed Workmanship"
        }
      },
      "contact": {
        "title": "Get in Touch",
        "subtitle": "Ready to start your renovation journey? Contact us today for a consultation.",
        "info": {
          "address_title": "Office Address",
          "address_line1": "11 Woodlands Close, Woodlands 11, #03-10",
          "address_line2": "Singapore 737853",
          "view_map": "View on Google Maps",
          "email_title": "Email",
          "hours_title": "Opening Hours",
          "hours_weekday": "Mon - Fri: 09:00 - 21:00",
          "hours_weekend": "Sat - Sun: 10:00 - 16:00",
          "whatsapp": "WhatsApp Us"
        }
      },
      "gallery": {
        "title": "Our Gallery",
        "subtitle": "A curated selection of our finest commercial and residential work.",
        "main_desc": "ID Work Studio is a BCA-registered and HDB-registered renovation and interior design firm based in Woodlands, Singapore. Our portfolio includes HDB renovation, BTO renovation, condo renovation, landed property renovation, office fit-out, retail renovation, and F&B renovation projects across Singapore.",
        "commercial": "Commercial",
        "commercial_desc": "Commercial renovation, office fit-out, retail interior design and F&B renovation projects completed by ID Work Studio across Singapore.",
        "residential": "Residential",
        "residential_desc": "HDB renovation, BTO renovation, condo renovation and landed property interior design projects completed by ID Work Studio across Singapore."
      },
      "residential_page": {
        "hero": {
          "badge": "2026 Design Trends",
          "title": "HDB & Condo Interior Design Singapore — Refined Living, Thoughtfully Crafted",
          "subtitle": "HDB-licensed and BCA-registered firm creating tailored homes for modern living, with careful planning, permit coordination and polished execution.",
          "cta": "Book a Home Consultation"
        },
        "lifestyle": {
          "title": "Lifestyle-First Design Solutions",
          "subtitle": "Crafting spaces that reflect your personality and enhance your daily life through innovative design.",
          "items": {
            "1": {
              "title": "Space-Saving Carpentry",
              "desc": "Bespoke multi-functional carpentry designed for Singapore's urban layouts. Maximize every square inch with hidden storage and transformable furniture."
            },
            "2": {
              "title": "Smart Home Integration",
              "desc": "Future-proof your home with seamless smart technology. From automated lighting to integrated climate control, we build homes that think for you."
            },
            "3": {
              "title": "Trending Aesthetics",
              "desc": "Mastering Japandi, Warm Minimalism, and Modern Luxury. We create timeless spaces that balance trend-setting design with daily functionality."
            }
          }
        },
        "specialists": {
          "title": "Residential Interior Design for HDB, Condo & Landed Homes in Singapore",
          "items": {
            "1": {
              "title": "BTO Interior Planning",
              "desc": "Thoughtfully planned solutions for Tengah, Bidadari and Tampines North. From early defect checks to permit coordination, we shape new homes with clarity and care."
            },
            "2": {
              "title": "Condo Interior Design Singapore",
              "desc": "Refined private living with elevated finishes, tailored detailing and spatial planning shaped around contemporary lifestyles."
            },
            "3": {
              "title": "Landed Home Enhancements",
              "desc": "Tailored addition and alteration works with careful management of structural submissions, architectural updates and design continuity."
            }
          },
          "testimonial": {
            "quote": "HDB-licensed and BCA-registered interior design for modern BTO and resale homes in Singapore.",
            "author": "ID Work Studio"
          }
        },
        "insights": {
          "title": "Expert Insights for 2026",
          "q1": {
            "q": "What is the cost of a 4-room BTO renovation in 2026?",
            "a": "In 2026, a comprehensive 4-room BTO renovation in Singapore typically ranges from <strong>$45,000 to $65,000</strong>. This estimate covers essential works like flooring, painting, plumbing, and custom carpentry for the kitchen and wardrobes. Premium \"Warm Luxury\" finishes or extensive hacking for \"broken-plan\" layouts can push costs to $75,000+."
          },
          "q2": {
            "q": "How can I maximize storage in a small HDB layout?",
            "a": "To maximize storage in small HDBs, utilize <strong>vertical space</strong> with floor-to-ceiling carpentry. Implement <strong>smart-integrated solutions</strong> like platform beds with drawers, hidden storage within feature walls, and extendable dining tables. \"Lived-in Japandi\" designs often use concealed cabinetry to maintain a clutter-free, minimalist aesthetic without sacrificing functionality."
          },
          "q3": {
            "q": "Why is choosing an HDB-registered contractor important for safety?",
            "a": "Choosing an HDB-registered contractor is crucial because they are trained to strictly adhere to <strong>HDB's renovation guidelines</strong> and structural safety protocols. They ensure that no critical structural pillars are compromised during hacking and that all electrical and plumbing works meet Singapore's safety standards, protecting you from liability and safety hazards."
          }
        },
        "cta": {
          "title": "Start Your Home Transformation",
          "subtitle": "Begin your renovation journey with a design-led team experienced in HDB, condo and landed homes across Singapore.",
          "button": "Book a Home Consultation"
        },
        "pricing": {
          "badge": "2026 Renovation Cost Guide",
          "title": "Transparent HDB Renovation Costs",
          "subtitle": "Real price benchmarks from Singapore's renovation market. Zero hidden charges. Always get a full itemised quote before signing.",
          "note": "Always set aside 10–15% of your budget as contingency for unexpected works. Resale HDB flats typically cost 20–40% more than BTO due to hacking, rewiring, waterproofing and pipe replacement requirements.",
          "cta": "Get a Free Itemised Quote",
          "items": {
            "bto3": {
              "label": "3-Room BTO",
              "range": "$25,000 – $45,000",
              "desc": "Flooring, painting, basic electrical, kitchen cabinets and bathroom fixtures. Ideal for first-time homeowners on a focused budget."
            },
            "bto4": {
              "label": "4-Room BTO",
              "range": "$45,000 – $65,000",
              "desc": "Full renovation including custom kitchen carpentry, built-in wardrobes, flooring, plumbing and feature wall. The most common renovation scope in Singapore."
            },
            "bto5": {
              "label": "5-Room BTO",
              "range": "$50,000 – $90,000",
              "desc": "Comprehensive fit-out with premium finishes, larger carpentry scope, feature walls and optional smart home integration."
            },
            "resale": {
              "label": "Resale HDB (Any Size)",
              "range": "+20–40% vs BTO",
              "desc": "Budget extra for hacking dated tiles, rewiring old electrical systems, replacing corroded pipes and full waterproofing of wet areas before aesthetic works begin."
            },
            "condo": {
              "label": "Condo / Private Apartment",
              "range": "$40,000 – $105,000",
              "desc": "Private finishes with MCST compliance. New condo from $40,000; resale condo up to $105,000+ depending on scope and material grade."
            }
          }
        },
        "resale": {
          "badge": "Resale HDB & MOP 2026",
          "title": "Planning a Resale HDB Renovation?",
          "subtitle": "Over 13,480 HDB flats hit MOP in 2026 — a 93% surge from last year. Whether you are selling or staying, a well-executed renovation maximises your flat's value and market appeal.",
          "points": {
            "1": {
              "title": "Infrastructure First",
              "desc": "Older resale flats require rewiring, pipe replacement and full waterproofing before aesthetic work begins. We inspect every system before providing your quote — no nasty surprises mid-renovation."
            },
            "2": {
              "title": "Resale Value Strategy",
              "desc": "We design renovations that appeal to the next buyer — open-plan kitchens, Japandi aesthetics and neutral palettes proven to command higher asking prices in the Singapore resale market."
            },
            "3": {
              "title": "Complete Permit Coordination",
              "desc": "As an HDB-licensed firm, we manage HDB renovation permits, neighbour notifications and structural submissions on your behalf for a smoother experience."
            }
          },
          "cta": "Plan My Resale Renovation"
        },
        "timeline": {
          "title": "HDB Renovation Timeline in Singapore",
          "subtitle": "Most residential renovation projects follow a clear journey from planning and approvals to construction and final handover.",
          "items": {
            "1": {
              "title": "Planning & Design",
              "desc": "2–4 weeks for consultation, layout planning, material selection, design development and quotation review before works begin."
            },
            "2": {
              "title": "Renovation Works",
              "desc": "8–12 weeks for most BTO homes and 10–16 weeks for resale flats, depending on hacking, carpentry, plumbing and overall scope."
            },
            "3": {
              "title": "Final Handover",
              "desc": "Final detailing, touch-ups, inspections and handover are completed once the home is ready for comfortable everyday living."
            }
          }
        },
        "mistakes": {
          "title": "Common Renovation Mistakes to Avoid",
          "subtitle": "A well-planned renovation is not just about style — it is also about avoiding unnecessary delays, rework and budget surprises.",
          "items": {
            "1": {
              "title": "Underestimating Budget",
              "desc": "Hidden costs can come from additional electrical works, waterproofing, old pipe replacement and custom carpentry upgrades."
            },
            "2": {
              "title": "Poor Space Planning",
              "desc": "A home can look beautiful but still feel awkward if storage, movement flow and daily routines are not considered early."
            },
            "3": {
              "title": "Ignoring Regulations",
              "desc": "HDB guidelines, permit approvals and structural requirements need to be handled properly to avoid delays and costly corrections."
            }
          }
        },
        "faq_section": {
          "title": "Frequently Asked Questions",
          "subtitle": "Everything Singapore homeowners need to know before starting their renovation journey.",
          "items": {
            "1": {
              "q": "What is the renovation cost for a 4-room BTO flat in 2026?",
              "a": "A comprehensive 4-room BTO renovation in Singapore typically ranges from <strong>$45,000 to $65,000</strong> in 2026. This covers flooring, painting, plumbing, and custom carpentry for the kitchen and wardrobes. Premium finishes or open-plan hacking can push costs to $75,000+."
            },
            "2": {
              "q": "How much does a 3-room or 5-room HDB renovation cost?",
              "a": "A <strong>3-room BTO renovation</strong> typically costs $25,000–$45,000. A <strong>5-room BTO</strong> ranges from $50,000–$90,000. Resale flats of any size add 20–40% due to hacking, rewiring and waterproofing requirements."
            },
            "3": {
              "q": "Why does resale HDB renovation cost more than BTO?",
              "a": "Resale HDB flats require essential infrastructure work before aesthetic renovation begins — <strong>rewiring old electrical systems, replacing corroded pipes, hacking dated tiles and waterproofing wet areas</strong>. These prelim works add $8,000–$20,000 to the total cost depending on flat age and condition."
            },
            "4": {
              "q": "How can I maximize storage in a small HDB layout?",
              "a": "Use <strong>floor-to-ceiling carpentry</strong> to maximise vertical space. Platform beds with built-in drawers, concealed feature walls with hidden storage and extendable dining tables are proven solutions. Japandi and Warm Minimalism designs rely on concealed cabinetry to maintain a clean aesthetic without sacrificing function."
            },
            "5": {
              "q": "Do I need an HDB permit for renovation works?",
              "a": "Yes. Most HDB renovation works — including <strong>hacking, tiling, electrical and plumbing</strong> — require an HDB Renovation Permit before physical work begins. The permit typically takes 1–3 weeks to approve. As an HDB-licensed firm, ID Work Studio handles all permit submissions on your behalf."
            },
            "6": {
              "q": "How long does an HDB renovation take in Singapore?",
              "a": "A <strong>4-room BTO renovation</strong> typically takes 8–12 weeks from key collection to handover, including permit processing. Resale flat renovations take 10–16 weeks due to additional hacking and infrastructure works. We provide a full Gantt chart timeline before work begins."
            },
            "7": {
              "q": "What is the HDB renovation loan limit in 2026?",
              "a": "HDB flat owners can borrow up to <strong>$30,000</strong> under the HDB Renovation Loan, repayable over up to 5 years. The loan covers licensed renovation works only. Bank renovation loans and personal loans are available for projects exceeding this limit."
            },
            "8": {
              "q": "Why is choosing an HDB-licensed firm important?",
              "a": "Choosing an HDB-licensed firm helps ensure your renovation follows <strong>HDB guidelines</strong> and structural safety requirements. It also gives homeowners added confidence that electrical, plumbing and hacking works are carried out in line with Singapore’s renovation standards."
            }
          }
        },
        "testimonials": {
          "title": "What Our Clients Say",
          "subtitle": "Verified Google reviews from Singapore homeowners and property owners.",
          "verified": "Verified on Google",
          "items": {
            "1": {
              "quote": "Absolutely outstanding renovation service. From start to finish, they demonstrated top-level professionalism, excellent craftsmanship, and great attention to detail. They were punctual, well-organised, and kept everything clean throughout the process. Communication was smooth and transparent, and they were always responsive to my requests. The final result truly exceeded my expectations — I am extremely satisfied and would highly recommend them to anyone looking for reliable, high-quality renovation services.",
              "name": "Dewi",
              "flat": "Renovation Client · 5★ Google Review"
            },
            "2": {
              "quote": "I recently engaged ID Work Studio for renovation works on my landed property along Yunnan Road, and I am very pleased with the results. The quality of workmanship was good, and any minor touch-ups or issues were followed up and resolved promptly and responsibly. The transformation has been impressive — my house now truly stands out among the others on the street. I appreciate the team's commitment to delivering quality work and ensuring customer satisfaction. I would highly recommend them to anyone looking for reliable and capable renovation services.",
              "name": "Megannn",
              "flat": "Landed Property, Yunnan Road · 5★ Google Review"
            },
            "3": {
              "quote": "I have been working with this renovation company for many years — from my own commercial shopfront to my home renovation, they are always my first choice. The owner is an exceptionally honest person who always offers the best pricing. When clients wish to source certain materials from China, he is accommodating and actively helps save costs. I can hand over any renovation project to them with complete confidence — no need to supervise the works — because the owner is an extremely responsible and dedicated professional. For any future renovation, I will only choose this company.",
              "name": "Michelle Zheng",
              "flat": "Long-Term Client · Commercial & Residential · 5★ Google Review"
            }
          }
        }
      },

      "insights": {
        "officeCost": {
          "meta": {
            "title": "Office Renovation Cost Singapore (2026 Guide) | ID Work Studio",
            "desc": "Real office renovation cost in Singapore by office size. Includes cost breakdown, timeline, landlord approval, M&E works and hidden costs explained by a BCA-registered contractor."
          },
          "title": "Office Renovation Cost Singapore (2026 Guide)",
          "intro": {
            "line1": "Office renovation in Singapore typically costs:",
            "cost1": "$50 – $80 psf for a basic office fit-out",
            "cost2": "$80 – $130 psf for a mid-range office renovation",
            "cost3": "$130 – $200+ psf for premium or Grade A office interiors",
            "line2": "A typical office renovation takes 6 to 10 weeks, depending on landlord approval, MCST rules, SCDF requirements, M&E coordination and whether noisy works must be done after office hours."
          },
          "size": {
            "title": "Office Renovation Cost by Size",
            "small": {
              "title": "Small office (800 – 1,200 sqft)",
              "cost": "Estimated cost: $40,000 – $100,000",
              "desc": "Suitable for startups and small teams with a simple open-plan layout, basic flooring, lighting, limited partitions and minimal built-in carpentry."
            },
            "mid": {
              "title": "Mid-size office (1,500 – 3,000 sqft)",
              "cost": "Estimated cost: $100,000 – $300,000",
              "desc": "Usually includes meeting rooms, a pantry, reception counter, glass partitions, more electrical points, data cabling and air-conditioning adjustments."
            },
            "large": {
              "title": "Large office (3,000 – 5,000 sqft)",
              "cost": "Estimated cost: $250,000 – $800,000",
              "desc": "Requires heavier project coordination, more workstations, acoustic treatment, feature walls, storage, M&E works and phased handover planning."
            },
            "corp": {
              "title": "Corporate / Grade A office (5,000 sqft+)",
              "cost": "Estimated cost: $800,000 – $2M+",
              "desc": "Often involves premium finishes, branded reception areas, boardrooms, specialist lighting, AV systems, strict building rules and more detailed authority coordination."
            }
          },
          "breakdown": {
            "title": "What Makes Up the Cost",
            "item1": "Partition works, including drywall rooms, glass meeting rooms and acoustic partitions",
            "item2": "Electrical and data points for workstations, meeting rooms, server racks and pantry equipment",
            "item3": "Lighting and ceiling works, including office lighting layout and sprinkler coordination",
            "item4": "Flooring such as carpet tiles, vinyl, raised flooring or existing floor protection",
            "item5": "Carpentry such as reception counters, storage cabinets, pantry cabinets and feature walls",
            "item6": "Air-conditioning modification, especially in buildings with central aircon or after-hours usage needs",
            "item7": "Fire safety and SCDF-related compliance when partitions, ceiling or fire systems are affected"
          },
          "timeline": {
            "title": "Timeline Breakdown",
            "step1": "Design and planning: 2–3 weeks for layout, material selection, budget review and landlord requirements checking",
            "step2": "Submission: 2–4 weeks for landlord, MCST, building management or SCDF-related approval depending on scope",
            "step3": "Renovation works: 4–8 weeks for partition, electrical, flooring, ceiling, carpentry, M&E coordination and handover"
          },
          "mistakes": {
            "title": "Common Cost Mistakes",
            "item1": "Underestimating electrical and data cabling cost, especially when every workstation needs power and network access",
            "item2": "Ignoring landlord, MCST or building management requirements before confirming the renovation budget",
            "item3": "Forgetting future reinstatement cost, which can affect the real cost of taking over an office unit",
            "item4": "Rushing the timeline and paying extra for night works, weekend works or urgent material coordination"
          },
          "faq": {
            "title": "FAQ",
            "q1": "How much does a 1,000 sqft office renovation cost in Singapore?",
            "a1": "A 1,000 sqft office renovation in Singapore usually costs around $50,000 to $120,000. A simple open-plan office sits near the lower range, while offices with meeting rooms, glass partitions, pantry, data cabling and aircon works will cost more.",
            "q2": "Why do office renovations become expensive?",
            "a2": "Office renovations become expensive mainly because of electrical loading, data cabling, glass partitions, aircon modification, fire safety requirements, after-hours restrictions and landlord or MCST submission requirements.",
            "q3": "Do I need approval before renovating an office?",
            "a3": "Yes. Most Singapore office buildings require landlord, MCST or building management approval before renovation starts. If partitions, ceiling, sprinklers, fire alarm or escape routes are affected, SCDF-related review may also be needed.",
            "q4": "Can office renovation be done after office hours?",
            "a4": "It depends on the building. Many CBD and Grade A buildings restrict noisy works, lift access and loading bay usage. Night or weekend work may need approval and can increase labour cost.",
            "q5": "What should I check before signing an office lease?",
            "a5": "Check power capacity, aircon operating hours, ceiling condition, sprinkler layout, reinstatement clause, loading access, floor loading, data point requirements and whether the landlord allows your planned layout.",
            "q6": "Is reinstatement part of office renovation cost?",
            "a6": "It is usually not part of the initial renovation cost, but it should be planned from the start. Reinstatement can cost around $10 to $40+ psf depending on landlord handover requirements and how much was built during the fit-out."
          },
          "cta": {
            "text": "Planning an office renovation? Send us your floor plan, lease condition and rough headcount. We can help you estimate a practical office fit-out budget before work starts.",
            "button": "WhatsApp for Office Renovation Quote"
          }
        },
        "article4": {
          "meta": {
            "title": "Commercial Renovation Cost Singapore (2026) | ID Work Studio",
            "description": "Real commercial renovation cost in Singapore for office, retail, F&B and industrial spaces, including permits, timeline, hidden costs and common mistakes."
          },
          "hero": {
            "badge": "Commercial Guide",
            "title": "Commercial Renovation Cost Singapore (2026)",
            "subtitle": "Real contractor pricing, compliance requirements and hidden costs for office, retail, F&B and industrial renovation in Singapore.",
            "meta1": "2026 Guide",
            "meta2": "Commercial Renovation"
          },
          "back": "Back to insights",
          "quick": {
            "title": "Quick cost summary",
            "desc": "Commercial renovation cost in Singapore depends heavily on compliance, building requirements and mechanical systems — not just design.",
            "office": "Office",
            "officeCost": "$50 – $300 psf",
            "retail": "Retail Shop",
            "retailCost": "$95 – $400+ psf",
            "fnb": "F&B / Restaurant",
            "fnbCost": "$223 – $540 psf",
            "industrial": "Industrial",
            "industrialCost": "$30 – $450+ psf"
          },
          "why": {
            "title": "Why commercial renovation is expensive in Singapore",
            "desc": "The main cost drivers are compliance, mechanical and electrical systems, building restrictions and material standards. Most cost overruns happen due to compliance and M&E, not finishes.",
            "point1": "Compliance: BCA, SCDF and MCST requirements",
            "point2": "M&E systems: aircon, exhaust, wiring and drainage",
            "point3": "Building restrictions: mall, CBD and JTC rules"
          },
          "office": {
            "title": "Office renovation cost Singapore",
            "level": "Level",
            "cost": "Cost",
            "scope": "Typical scope",
            "basic": "Basic",
            "basicCost": "$50 – $80 psf",
            "basicScope": "Partition, carpet, basic lights",
            "standard": "Standard",
            "standardCost": "$80 – $150 psf",
            "standardScope": "Glass rooms, reception, lighting",
            "premium": "Premium",
            "premiumCost": "$150 – $300 psf",
            "premiumScope": "Feature design, smart office, acoustics",
            "note": "In CBD buildings such as Marina Bay and Raffles Place, night-work restrictions can increase labour cost. Expect 15–25% higher cost in stricter Grade A buildings."
          },
          "retail": {
            "title": "Retail renovation cost Singapore",
            "desc": "Retail renovation cost depends heavily on shopfront design, display carpentry and lighting intensity.",
            "point1": "Basic retail: $95 – $180 psf",
            "point2": "Mall fit-out: $180 – $300 psf",
            "point3": "High-end retail: $300 – $400+ psf",
            "desc2": "Most tenants underestimate MCST submission requirements and design revisions. Approval alone can delay 2–4 weeks."
          },
          "fnb": {
            "title": "F&B renovation cost Singapore",
            "desc": "F&B projects are the most expensive due to exhaust systems, grease traps, fire-rated works and heavy plumbing.",
            "note": "Typical F&B renovation cost: $223 – $540 psf. If the unit cannot support exhaust routing, rectification can cost $10,000 – $30,000 extra."
          },
          "industrial": {
            "title": "Industrial renovation cost Singapore",
            "point1": "Basic: $30 – $80 psf",
            "point2": "Standard: $80 – $200 psf",
            "point3": "Complex upgrade: $200 – $450+ psf",
            "desc": "Industrial units may require URA zoning checks, JTC approval and structural load checks."
          },
          "breakdown": {
            "title": "Full cost breakdown",
            "component": "Component",
            "share": "Typical share",
            "construction": "Construction",
            "constructionShare": "70–80%",
            "professional": "Professional fees",
            "professionalShare": "10–15%",
            "permits": "Permits and submission",
            "permitsShare": "5–8%",
            "contingency": "Contingency",
            "contingencyShare": "10–15%",
            "note": "Plan for a 20–30% additional cost buffer for professional fees, permits and unforeseen site conditions."
          },
          "compliance": {
            "title": "Permits & compliance",
            "q": "Can you skip SCDF submission?",
            "a": "You may not need SCDF submission if works are purely cosmetic and do not affect fire safety systems.",
            "noTitle": "Usually no SCDF needed",
            "no1": "Painting",
            "no2": "Loose furniture",
            "no3": "Vinyl flooring with no hacking",
            "requiredTitle": "SCDF is still required when",
            "required1": "Ceiling affects sprinklers",
            "required2": "Partition is added or modified",
            "required3": "Aircon ducting is changed",
            "required4": "Fire protection system is touched",
            "note": "Even if SCDF is not required, MCST approval, permit to work and method statement are still required before work can start."
          },
          "timeline": {
            "title": "Renovation timeline Singapore",
            "p1": { "title": "Planning: 4–9 weeks", "desc": "Feasibility, layout planning, budgeting and consultant coordination." },
            "p2": { "title": "Design: 2–4 weeks", "desc": "Space planning, drawings, material proposal and scope confirmation." },
            "p3": { "title": "Approval: 2–6 weeks", "desc": "BCA, SCDF, landlord or MCST approval depending on project scope." },
            "p4": { "title": "Construction: 3–16 weeks", "desc": "Hacking, partition, electrical, M&E, carpentry, finishing and handover." }
          },
          "mistakes": {
            "title": "Real mistakes that increase cost",
            "m1": { "title": "Aircon system not checked", "desc": "Some buildings use central aircon that stops after 6pm. A new system may cost $8,000 – $30,000." },
            "m2": { "title": "No water / drainage", "desc": "This is common for beauty salons, nail salons, facial services and cleaning businesses. A pump system can cost $3,000 – $10,000+." },
            "m3": { "title": "MCST approval delay", "desc": "Missing documents or non-compliant drawings can delay projects by 2–4 weeks." },
            "m4": { "title": "Too many decision makers", "desc": "Frequent changes lead to higher cost and project delay." },
            "m5": { "title": "Reinstatement miscommunication", "desc": "One real case resulted in aircon removal and roughly $30,000 in avoidable cost." }
          },
          "reinstatement": {
            "title": "Reinstatement cost Singapore",
            "level": "Level",
            "cost": "Cost",
            "basic": "Basic",
            "basicCost": "$10 – $20 psf",
            "standard": "Standard",
            "standardCost": "$20 – $30 psf",
            "complex": "Complex",
            "complexCost": "$30 – $40+ psf",
            "desc": "Plan at least 3–4 months before lease end."
          },
          "faq": {
            "title": "FAQ",
            "q1": "How much does commercial renovation cost in Singapore?",
            "a1": "$50–$300 psf for office, up to $540 psf for F&B.",
            "q2": "Can I skip SCDF submission?",
            "a2": "Only if works are purely cosmetic and do not affect fire safety systems.",
            "q3": "What happens if I skip permits?",
            "a3": "Work can be stopped by building management.",
            "q4": "What is the biggest hidden cost?",
            "a4": "Aircon, M&E, exhaust, drainage and compliance-related works."
          },
          "cta": {
            "title": "Get a real renovation quote",
            "desc": "ID Work Studio is a BCA-registered renovation firm specialising in commercial spaces, permits and practical site execution.",
            "btn1": "Use Renovation Cost Calculator",
            "btn2": "View Commercial Services"
          }
        }
      },

      "insights_page": {
        "meta": {
          "title": "Insights | ID Work Studio Singapore",
          "description": "Design-led renovation insights, cost guides and project planning perspectives for homeowners and businesses in Singapore."
        },
        "hero": {
          "badge": "Design Perspectives",
          "title": "Insights",
          "subtitle": "Thoughtful perspectives on renovation, interiors and project planning in Singapore — designed to help homeowners and businesses make better decisions."
        },
        "intro": {
          "eyebrow": "Editorial Perspective",
          "title": "Built for Reading, Sharing and Future Growth",
          "body": "This page is designed as a crawlable insights hub, not a long scrolling article wall. Each article has its own future-ready URL, making it easier for Google, AI systems and mobile visitors to find the right topic quickly."
        },
        "highlights": {
          "1": {
            "title": "Crawlable Article Structure",
            "desc": "Each article is meant to live on its own URL so it can rank, be cited and be shared independently."
          },
          "2": {
            "title": "Better Mobile Experience",
            "desc": "Visitors see concise previews instead of long full articles, making the page easier to browse on phones."
          },
          "3": {
            "title": "Authority Building",
            "desc": "The first three topics are chosen to strengthen GEO, SEO and buyer trust for renovation searches in Singapore."
          }
        },
        "listing": {
          "eyebrow": "Featured Articles",
          "title": "Current Perspectives",
          "subtitle": "Five high-impact articles to anchor your authority in Singapore renovation search and future AI citations.",
          "read_more": "Read Article"
        },
        "articles": {
          "1": {
            "category": "Cost Guide",
            "title": "Renovation Cost in Singapore (2026 Guide)",
            "excerpt": "A direct guide to what homeowners should realistically budget for BTO, resale and condo renovation in Singapore — including what actually drives cost.",
            "read_time": "8 min read"
          },
          "2": {
            "category": "Planning Guide",
            "title": "HDB Renovation Timeline in Singapore",
            "excerpt": "A clear look at how long renovation usually takes, where delays happen and what homeowners can do to plan with more confidence.",
            "read_time": "7 min read"
          },
          "3": {
            "category": "Strategy Guide",
            "title": "Biggest Renovation Mistakes Singapore Homeowners Make",
            "excerpt": "A practical guide to common renovation pitfalls in Singapore, and how clearer decisions early on can prevent delay, rework and regret.",
            "read_time": "7 min read"
          },
          "4": {
            "category": "Commercial Cost Guide",
            "title": "Commercial Renovation Cost Singapore (2026 Guide)",
            "excerpt": "Real contractor pricing for office, retail, F&B and industrial renovation in Singapore — including permits, timeline, hidden costs and common site mistakes.",
            "read_time": "9 min read"
          },
          "5": {
            "category": "Office Cost Guide",
            "title": "Office Renovation Cost Singapore (2026 Guide)",
            "excerpt": "A practical contractor guide to office renovation cost by size, including workstations, meeting rooms, data cabling, landlord approvals and reinstatement planning.",
            "read_time": "8 min read"
          }
        },
        "footer_block": {
          "eyebrow": "ID Work Studio",
          "title": "Design-Led Renovation in Singapore",
          "subtitle": "If you are planning a residential or commercial project, we can help you think through design direction, practical scope, budgeting and execution with more clarity.",
          "address_label": "Office Address",
          "phone_label": "Phone",
          "email_label": "Email",
          "cta": "WhatsApp Us"
        }
      },
      "article_renovation_cost_2026": {
        "meta": {
          "title": "Renovation Cost in Singapore (2026 Guide) | ID Work Studio",
          "description": "A practical 2026 guide to renovation cost in Singapore, covering BTO, resale and condo budgets, key cost drivers, hidden expenses and smarter planning."
        },
        "hero_badge": "Cost Guide",
        "title": "Renovation Cost in Singapore (2026 Guide)",
        "subtitle": "A practical guide to what homeowners in Singapore should realistically budget for BTO, resale and condo renovation in 2026, and what actually drives cost."
      },
      "article_hdb_timeline": {
        "meta": {
          "title": "HDB Renovation Timeline in Singapore (2026 Guide) | ID Work Studio",
          "description": "Understand how long HDB renovation takes in Singapore, including real timelines, delays, and when you can actually move in."
        },
        "hero_badge": "Planning Guide",
        "title": "HDB Renovation Timeline in Singapore (2026 Guide)",
        "subtitle": "A practical breakdown of how long renovation really takes, where delays happen, and when you can realistically move in."
      },
      "article_renovation_mistakes": {
        "meta": {
          "title": "Biggest Renovation Mistakes Singapore Homeowners Make | ID Work Studio",
          "description": "Avoid costly renovation mistakes in Singapore. Learn common pitfalls and how to plan better with this experience-led guide."
        },
        "hero_badge": "Strategy Guide",
        "title": "Biggest Renovation Mistakes Singapore Homeowners Make",
        "subtitle": "A practical guide to avoiding costly renovation mistakes, based on real project experience in Singapore."
      },
      "commercial_page": {
        "hero": {
          "title": "Commercial Interior Design & Office Renovation Singapore",
          "subtitle": "Refined commercial environments for offices, retail and F&B spaces, delivered with careful planning, compliance coordination and polished execution.",
          "cta": "Book a Site Survey",
          "cta_reinstatement": "Explore Reinstatement Services"
        },
        "direct_answer": {
          "eyebrow": "Direct answer for Singapore business owners",
          "title": "Commercial renovation in Singapore: cost, timeline and approvals",
          "p1": "Commercial renovation in Singapore typically costs <strong>$30 to $180 psf for offices</strong>, <strong>$80 to $150 psf for retail shops</strong>, and <strong>$120 to $250 psf for F&B outlets</strong>. Most projects take <strong>6 to 12 weeks</strong> including design, landlord or MCST approval, authority checks and renovation works.",
          "p2": "The main difference from residential renovation is compliance. Commercial projects may involve landlord fitting-out rules, MCST requirements, fire safety checks, exhaust requirements, working-hour restrictions and reinstatement obligations at lease end.",
          "cards": {
            "1": { "label": "Office renovation", "range": "$30 – $180 psf", "note": "Basic office refresh to premium fit-out" },
            "2": { "label": "Retail renovation", "range": "$80 – $150 psf", "note": "Shopfront, lighting, display and storage works" },
            "3": { "label": "F&B renovation", "range": "$120 – $250 psf", "note": "Kitchen, exhaust, plumbing and fire safety factors" }
          }
        },
        "cost_breakdown": {
          "title": "Commercial renovation cost breakdown in Singapore",
          "subtitle": "Use these as practical planning ranges before a site visit. A confirmed quotation still needs floor plan review, site measurement, building rules and material selection.",
          "items": {
            "1": {
              "title": "Basic office fit-out",
              "cost": "$30 – $60 psf",
              "points": {
                "1": "Paint, simple flooring and loose furniture coordination",
                "2": "Basic electrical and lighting points",
                "3": "Suitable for small offices with limited built-in works"
              }
            },
            "2": {
              "title": "Mid-range office renovation",
              "cost": "$60 – $100 psf",
              "points": {
                "1": "Meeting rooms, pantry and manager rooms",
                "2": "Carpet/vinyl, ceiling, lighting and data works",
                "3": "Glass partitions and practical carpentry"
              }
            },
            "3": {
              "title": "Premium commercial fit-out",
              "cost": "$100 – $180 psf",
              "points": {
                "1": "Custom reception, feature walls and acoustic rooms",
                "2": "Higher-grade finishes and more M&E coordination",
                "3": "Best for client-facing offices and brand-led spaces"
              }
            }
          },
          "retail_fnb": {
            "title": "Retail and F&B usually need a higher budget",
            "body": "Retail spaces usually need stronger lighting, display fixtures, shopfront works and landlord design compliance. F&B spaces are more demanding because of kitchen equipment coordination, exhaust, grease trap, waterproofing, plumbing, fire safety and cleaning access. This is why F&B renovation can reach <strong>$120 to $250 psf</strong> even before equipment cost is fully confirmed."
          }
        },
        "timeline_guide": {
          "title": "Typical commercial renovation timeline",
          "subtitle": "For most Singapore commercial projects, a realistic timeline is 6 to 12 weeks. The approval stage is usually where delays happen, especially when landlord, MCST, SCDF or building management comments require drawing revisions.",
          "steps": {
            "1": { "title": "Design and planning", "time": "2 – 3 weeks", "desc": "Site visit, layout planning, design direction, budget alignment and material direction." },
            "2": { "title": "Landlord / MCST / authority submission", "time": "2 – 4 weeks", "desc": "Submission of drawings, contractor documents, insurance, method statements and fire-safety-related checks where needed." },
            "3": { "title": "Renovation works and handover", "time": "4 – 8 weeks", "desc": "Protection, demolition, M&E, ceiling, flooring, carpentry, painting, cleaning and final handover." }
          },
          "approval_title": "Common commercial approval items",
          "approval_items": {
            "1": "Landlord or building management fitting-out permit",
            "2": "MCST approval for strata-titled commercial units",
            "3": "SCDF checks if fire safety, sprinkler, alarm or exit route is affected",
            "4": "Work-at-height, noisy-work and after-hours work restrictions",
            "5": "Public liability insurance, renovation deposit and protection requirements"
          }
        },
        "content_cluster": {
          "eyebrow": "Commercial content cluster",
          "title": "Helpful guides before you renovate",
          "body": "Commercial renovation has more approval and lease-risk considerations than residential work. These guides explain cost and timeline in more detail before you speak to a contractor.",
          "cost_card": {
            "eyebrow": "Cost guide",
            "title": "Commercial Renovation Cost Singapore",
            "desc": "Read the detailed commercial cost guide for offices, retail units and F&B spaces."
          },
          "timeline_card": {
            "eyebrow": "Timeline guide",
            "title": "Office Renovation Timeline Singapore",
            "desc": "Understand planning, approval, site works and handover sequencing."
          }
        },
        "solutions": {
          "title": "Commercial Renovation Solutions",
          "items": {
            "1": {
              "title": "Office Renovation Solutions for Productivity",
              "desc": "Optimized layouts for hybrid work, ergonomic workstations, and collaborative zones. We handle office reinstatement and full fit-outs.",
              "point1": "Office Reinstatement",
              "point2": "System Furniture"
            },
            "2": {
              "title": "High-Traffic Retail & Store Design",
              "desc": "Captivating retail interiors that drive foot traffic and sales. From luxury boutiques to high-street retail fit-outs.",
              "point1": "Visual Merchandising",
              "point2": "Lighting Design"
            },
            "3": {
              "title": "BCA/HDB Compliant Commercial Renovations",
              "desc": "Full compliance with Singapore's strict building codes. We manage all submissions for F&B, Industrial, and Commercial spaces.",
              "point1": "FSSD (Fire Safety) Submissions",
              "point2": "Building Management (MA) Liaison"
            }
          }
        },
        "project_management": {
          "title": "Strategic Project Management",
          "subtitle": "Minimizing business downtime through precision planning and execution.",
          "items": {
            "1": {
              "title": "Downtime Minimization",
              "desc": "Phased renovation strategies to keep your business operational during the fit-out process."
            },
            "2": {
              "title": "Gantt Chart Transparency",
              "desc": "Detailed project timelines and weekly progress reports to ensure on-time delivery."
            },
            "3": {
              "title": "Turnkey Delivery",
              "desc": "From initial site survey to final handover, we manage every detail of your commercial project."
            }
          }
        },
        "trust": {
          "title": "Project Management & Compliance",
          "subtitle": "We handle the red tape so you can focus on your business.",
          "items": {
            "1": {
              "title": "Fire Safety (SCDF)",
              "desc": "Full submission and approval handling for fire safety regulations."
            },
            "2": {
              "title": "BCA Permits",
              "desc": "Experienced coordination for Building and Construction Authority permit requirements."
            },
            "3": {
              "title": "Mall Management",
              "desc": "Experienced in coordinating with major mall management teams in Singapore."
            },
            "4": {
              "title": "Site Safety",
              "desc": "Strict adherence to workplace safety and health (WSH) standards."
            }
          }
        },
        "faq": {
          "title": "Commercial renovation Singapore FAQ",
          "subtitle": "Practical answers for office, retail and F&B renovation in Singapore, including cost, timeline, landlord approval, MCST and SCDF considerations.",
          "q1": {
            "q": "How much does commercial renovation cost in Singapore?",
            "a": "Commercial renovation in Singapore typically costs $30 to $180 psf for offices, $80 to $150 psf for retail shops, and $120 to $250 psf for F&B outlets. The final range is mainly affected by M&E works, fire safety requirements, carpentry, flooring, ceiling works and landlord reinstatement conditions."
          },
          "q2": {
            "q": "How much does office renovation cost in Singapore?",
            "a": "A basic office renovation usually starts from $30 to $60 psf. A mid-range office with meeting rooms, pantry, flooring, ceiling and electrical works is usually $60 to $100 psf. Premium office fit-outs with feature walls, acoustic rooms, customised carpentry and higher-grade finishes can reach $100 to $180 psf."
          },
          "q3": {
            "q": "How long does commercial renovation usually take?",
            "a": "Most commercial renovation projects take 6 to 12 weeks. Design and planning usually takes 2 to 3 weeks, landlord or MCST submission takes 2 to 4 weeks, and actual renovation works usually take 4 to 8 weeks depending on project size and approval conditions."
          },
          "q4": {
            "q": "Do I need landlord or MCST approval before renovation?",
            "a": "Yes. Most offices, retail units, clinics, gyms and F&B spaces require landlord, building management or MCST approval before renovation starts. Drawings, method statements, insurance documents and contractor details may be required before work permits are issued."
          },
          "q5": {
            "q": "Does commercial renovation need SCDF submission?",
            "a": "SCDF submission may be required if the renovation affects fire-rated partitions, sprinkler points, fire alarm systems, exit routes, emergency lighting, occupancy load or F&B exhaust systems. Simple office refresh works may not need SCDF submission, but this should be checked before work starts."
          },
          "q6": {
            "q": "Can office renovation be done after office hours?",
            "a": "Yes, but it depends on the building rules. Many commercial buildings only allow noisy works after office hours or during approved time windows. Hacking, drilling and delivery timing must follow landlord, MCST or building management requirements."
          },
          "q7": {
            "q": "What affects commercial renovation cost the most?",
            "a": "The biggest cost drivers are electrical and data points, air-conditioning changes, ceiling works, fire safety compliance, flooring, carpentry, glass partitions, pantry works, plumbing and whether reinstatement is required at the end of the lease."
          },
          "q8": {
            "q": "What is office reinstatement in Singapore?",
            "a": "Office reinstatement means returning the unit to the landlord's original handover condition before lease exit. It may include removing partitions, flooring, ceiling, wiring, signage, carpentry and making good affected surfaces according to the tenancy agreement."
          },
          "q9": {
            "q": "Is retail renovation more expensive than office renovation?",
            "a": "Retail renovation is often higher than a basic office because shopfront, lighting, display fixtures, signage, customer flow, storage and landlord design guidelines are more involved. Typical retail renovation in Singapore ranges from $80 to $150 psf."
          },
          "q10": {
            "q": "Why is F&B renovation usually more expensive?",
            "a": "F&B renovation usually costs more because of exhaust, grease trap, plumbing, waterproofing, kitchen equipment coordination, fire safety, pest control requirements and stricter authority or landlord conditions. A practical F&B budget is usually $120 to $250 psf."
          },
          "q11": {
            "q": "What should I prepare before requesting a commercial renovation quotation?",
            "a": "Prepare the floor plan, unit size, tenancy agreement or landlord fitting-out guide, preferred handover date, rough layout requirements, headcount, pantry needs, meeting room count and any existing reinstatement conditions. These details make the quotation more accurate."
          },
          "q12": {
            "q": "Can ID Work Studio handle both design and renovation works?",
            "a": "Yes. ID Work Studio can support layout planning, design coordination, renovation works, site coordination and commercial handover. For commercial projects, we also coordinate practical site requirements such as access timing, protection works and building management submissions."
          }
        },
        "subpages": {
          "section_title": "Commercial Renovation Solutions",
          "section_subtitle": "Specialist services for every commercial space in Singapore — from offices to F&B outlets.",
          "btn": "Learn More",
          "office": {
            "badge": "",
            "title": "Office & Workspace Renovation",
            "desc": "Turnkey office fit-outs for Singapore businesses. Hybrid work layouts, system furniture, and full BCA/SCDF compliance."
          },
          "retail": {
            "badge": "",
            "title": "Retail & Mall Store Design",
            "desc": "High-impact retail interiors that drive footfall and sales. MCST submission management for major Singapore malls."
          },
          "shophouse": {
            "badge": "",
            "title": "F&B & Shophouse Renovation",
            "desc": "Heritage-sensitive shophouse renovations and F&B fit-outs with full URA and SCDF compliance."
          },
          "compliance": {
            "badge": "",
            "title": "Permits & Compliance",
            "desc": "BCA, SCDF, MCST and LEW permit management. We handle all submissions so you can focus on your business."
          },
          "reinstatement": {
            "badge": "",
            "title": "Office & Mall Reinstatement",
            "desc": "Professional bare-shell handover with 100% pass-rate guarantee. SCDF and MCST compliant."
          }
        },
        "process": {
          "title": "Our Commercial Renovation Process",
          "subtitle": "A transparent, step-by-step approach engineered to minimise business downtime.",
          "steps": {
            "1": {
              "title": "Free Site Survey",
              "detail": "FREE",
              "desc": "We conduct a detailed onsite assessment and provide a comprehensive itemised quotation at no cost."
            },
            "2": {
              "title": "Design & Planning",
              "detail": "1–2 WEEKS",
              "desc": "Our designers develop space plans, material schedules and 3D visuals aligned with your brand identity."
            },
            "3": {
              "title": "Permit Submission",
              "detail": "1–3 WEEKS",
              "desc": "We handle all BCA, SCDF, MCST and URA submissions before physical work begins."
            },
            "4": {
              "title": "Renovation Works",
              "detail": "4–8 WEEKS",
              "desc": "Our licensed CoreTrade team executes the fit-out with phased scheduling to minimise disruption."
            },
            "5": {
              "title": "Handover & Inspection",
              "detail": "DAY 1",
              "desc": "Joint inspection with building management, defect rectification and full site handover."
            }
          }
        },
        "cta": {
          "title": "Ready to Transform Your Business Space?",
          "subtitle": "Work with a trusted, BCA-registered commercial interior design and fit-out firm for your next project.",
          "button": "Get Commercial Quote"
        },
        "partners": {
          "title": "Our Clients & Partners",
          "subtitle": "Trusted by leading brands, MNCs, and businesses across Singapore."
        }
      },
      "footer": {
        "rights": "All rights reserved."
      },
      "sticky_nav": {
        "consult": "Free Consult",
        "contact": "Contact Us"
      },
      "reinstatement_section": {
        "headline_serif": "A Flawless",
        "headline_bold": "BARE SHELL HANDOVER",
        "subtext": "Professional reinstatement for offices and shopping mall units, managed with compliance, precision and a smooth handover experience.",
        "button": "LEARN MORE ABOUT REINSTATEMENT"
      },
      "reinstatement_page": {
        "hero": {
          "headline_serif": "A Flawless",
          "headline_bold": "BARE SHELL HANDOVER"
        },
        "challenges": {
          "title_serif": "Overcoming",
          "title_bold": "REINSTATEMENT CHALLENGES",
          "items": {
            "1": {
              "pain": "Fear of Deposit Forfeit",
              "solution": "100% Handover Success Guarantee. We manage the landlord’s checklist so you don’t have to."
            },
            "2": {
              "pain": "Strict Mall Management (MCST)",
              "solution": "We are experts in Shopping malls and Grade A Office reinstatement compliance."
            },
            "3": {
              "pain": "Complex Fire Safety (SCDF)",
              "solution": "Professional relocation of sprinklers and smoke detectors with certified endorsement."
            }
          }
        },
        "process": {
          "title_serif": "Our Seamless",
          "title_bold": "4-STEP PROCESS",
          "steps": {
            "1": {
              "title": "Site Survey",
              "desc": "Free onsite assessment & quotation."
            },
            "2": {
              "title": "Permit Management",
              "desc": "We handle all MCST & SCDF submissions."
            },
            "3": {
              "title": "The Work",
              "desc": "Professional dismantling and \"Bare Shell\" restoration."
            },
            "4": {
              "title": "Handover",
              "desc": "Final joint inspection with your landlord for a 100% pass."
            }
          }
        },
        "trust": {
          "bca": "BCA Registered",
          "hdb": "HDB Registered",
          "scdf": "SCDF Compliant"
        },
        "trust_row": {
          "text": "Trusted by tenants in Singapore's leading Grade A Offices & Malls."
        },
        "footer": {
          "headline_serif": "Your Peace of Mind",
          "headline_bold": "IS OUR PRIORITY",
          "whatsapp_btn": "WHATSAPP FOR A FREE SITE SURVEY"
        },
        "sticky_footer": {
          "text": "Get Your Deposit Back – WhatsApp for a Free Survey"
        }
      }
    }
  },
  zh: {
    translation: {
      "nav": {
        "home": "首页",
        "residential": "住宅设计",
        "commercial": "商业空间",
        "insights": "见解",
        "gallery": "作品集",
        "contact": "联系我们"
      },
      "accreditation": {
        "hdb": "HDB 注册",
        "bca": "BCA 注册",
        "firm": "公司"
      },
      "hero": {
        "title_main": "精心打造的室内设计 ",
        "title_sub": "致敬现代有识之士",
        "subtitle": "新加坡优质室内设计与翻新服务。凭借十多年的卓越信誉，我们将住宅、办公室和零售空间转化为杰作。",
        "cta": "查看我们的作品",
        "whatsapp": "WhatsApp 立即咨询"
      },
      "process": {
        "title": "我们的流程",
        "subtitle": "从概念到现实的无缝体验。",
        "steps": {
          "1": {
            "title": "咨询与构想",
            "desc": "我们首先了解您的愿景和生活方式，将其转化为详细的3D概念。"
          },
          "2": {
            "title": "专业施工",
            "desc": "我们拥有 BCA 注册与 HDB 注册的团队，精准管理翻新工程，确保质量和合规性。"
          },
          "3": {
            "title": "完美交付",
            "desc": "走进您梦想的空间，完美竣工、清洁完毕，准备好迎接您的新篇章。"
          }
        }
      },
      "services": {
        "title": "我们的专长",
        "subtitle": "为住宅和商业空间提供全面的室内设计解决方案。",
        "residential": {
          "title": "住宅翻新",
          "desc": "将组屋、公寓和有地房产改造成梦想家园。专注于空间规划和以生活方式为中心的设计。"
        },
        "commercial": {
          "title": "商业与零售",
          "desc": "战略性的工作空间和零售设计，提升品牌形象和运营效率。符合建设局(BCA)标准的解决方案。"
        },
        "custom": {
          "title": "定制木工与造型",
          "desc": "为您量身定制的细木工和家具设计。优质材料和精湛工艺。"
        },
        "stats": {
          "years": "年经验",
          "trusted": "值得信赖",
          "brand": "新加坡品牌",
          "quality": "品质保证",
          "workmanship": "精湛工艺"
        }
      },
      "contact": {
        "title": "联系我们",
        "subtitle": "准备好开始您的翻新之旅了吗？立即联系我们进行咨询。",
        "info": {
          "address_title": "办公地址",
          "address_line1": "11 Woodlands Close, Woodlands 11, #03-10",
          "address_line2": "Singapore 737853",
          "view_map": "在谷歌地图上查看",
          "email_title": "电子邮件",
          "hours_title": "营业时间",
          "hours_weekday": "周一至周五: 09:00 - 21:00",
          "hours_weekend": "周六至周日: 10:00 - 16:00",
          "whatsapp": "WhatsApp 联系我们"
        }
      },
      "gallery": {
        "title": "我们的作品集",
        "subtitle": "精选的商业和住宅设计佳作。",
        "main_desc": "ID Work Studio 是一家位于新加坡 Woodlands 的 BCA 注册与 HDB 注册建筑设计与室内装修公司。我们的作品集涵盖了新加坡各地的 HDB 装修、BTO 装修、公寓翻新、有地房产装修、办公室装修、零售店装修及餐饮空间装修项目。",
        "commercial": "商业空间",
        "commercial_desc": "由 ID Work Studio 在新加坡完成的商业装修、办公室规划、零售室内设计及餐饮空间翻新项目。",
        "residential": "住宅设计",
        "residential_desc": "由 ID Work Studio 在新加坡完成的 HDB 装修、BTO 装修、公寓翻新及有地房产室内设计项目。"
      },
      "residential_page": {
        "hero": {
          "badge": "2026 设计趋势",
          "title": "新加坡 HDB 与公寓室内设计 — 精致生活，匠心打造",
          "subtitle": "具备 HDB 执照与 BCA 注册资质，为现代居住需求打造专属住宅，涵盖规划、报批与精致施工。",
          "cta": "预约家居咨询"
        },
        "lifestyle": {
          "title": "生活方式优先的设计解决方案",
          "subtitle": "通过创新设计打造反映您个性并提升日常生活的空间。",
          "items": {
            "1": {
              "title": "节省空间的木工设计",
              "desc": "专为新加坡城市布局设计的定制多功能木工。通过隐藏式储物和可变形家具最大化每一寸空间。"
            },
            "2": {
              "title": "智能家居集成",
              "desc": "通过无缝智能技术让您的家面向未来。从自动照明到集成气候控制，我们打造懂您的家。"
            },
            "3": {
              "title": "流行美学",
              "desc": "精通 Japandi、温暖极简主义和现代奢华风格。我们创造平衡潮流设计与日常功能的永恒空间。"
            }
          }
        },
        "specialists": {
          "title": "新加坡 HDB、私人公寓与有地住宅室内设计",
          "items": {
            "1": {
              "title": "BTO 新居规划",
              "desc": "针对 Tengah、Bidadari 与 Tampines North 等新市镇，提供从初期验房到许可证协调的周全规划，以清晰有序的方式打造理想新居。"
            },
            "2": {
              "title": "新加坡公寓室内设计",
              "desc": "以更高层次的材质运用、定制细节与空间规划，营造贴合当代生活方式的精致私人居所。"
            },
            "3": {
              "title": "有地住宅优化工程",
              "desc": "为有地住宅提供量身定制的加建与改建方案，谨慎处理结构报批、建筑优化与整体设计延续性。"
            }
          },
          "testimonial": {
            "quote": "具备 HDB 执照及 BCA 注册资质，专注于新加坡现代 BTO 与转售住宅的室内设计。",
            "author": "ID Work Studio"
          }
        },
        "insights": {
          "title": "2026 年专家见解",
          "q1": {
            "q": "2026年四房式BTO翻新的成本是多少？",
            "a": "在2026年，新加坡全面的四房式BTO翻新通常在<strong>$45,000到$65,000</strong>之间。此估算涵盖了基本工程，如地板、油漆、管道以及厨房和衣柜的定制木工。高级的“温暖奢华”饰面或为“打破常规”布局进行的大量拆除可能会将成本推高至$75,000以上。"
          },
          "q2": {
            "q": "如何在小型组屋布局中最大化存储空间？",
            "a": "要在小型组屋中最大化存储空间，请利用带有落地木工的<strong>垂直空间</strong>。实施<strong>智能集成解决方案</strong>，如带抽屉的平台床、特色墙内的隐藏存储空间以及可扩展的餐桌。“生活化的Japandi”设计通常使用隐藏式橱柜，以保持整洁、极简的美感，同时不牺牲功能性。"
          },
          "q3": {
            "q": "为什么选择 HDB 注册承包商对安全很重要？",
            "a": "选择 HDB 注册承包商至关重要，因为他们受过培训，严格遵守<strong> HDB 的翻新指南</strong>和结构 safety 协议。他们确保在拆除过程中不会损坏关键的结构柱，并且所有电气和管道工程均符合新加坡的安全标准，从而保护您免受责任和安全隐患。"
          }
        },
        "cta": {
          "title": "开启您的理想家居蜕变",
          "subtitle": "与熟悉新加坡 HDB、公寓及有地住宅的设计团队，一同展开您的翻新之旅。",
          "button": "预约家居咨询"
        },
        "pricing": {
          "badge": "2026 翻新费用指南",
          "title": "透明的组屋翻新费用",
          "subtitle": "来自新加坡翻新市场的真实价格基准。零隐藏费用。签约前务必索取完整明细报价。",
          "note": "请预留报价总额的 10–15% 作为应急备用金。由于拆除、重新布线、防水及更换水管等额外工程，转售组屋的翻新费用通常比 BTO 高出 20–40%。",
          "cta": "获取免费明细报价",
          "items": {
            "bto3": {
              "label": "三房式 BTO",
              "range": "$25,000 – $45,000",
              "desc": "地板、油漆、基本电气、厨柜及浴室洁具。适合预算有限的首次置业者。"
            },
            "bto4": {
              "label": "四房式 BTO",
              "range": "$45,000 – $65,000",
              "desc": "全面翻新，包括定制厨房木工、内置衣柜、地板、水管及特色墙。新加坡最常见的翻新规模。"
            },
            "bto5": {
              "label": "五房式 BTO",
              "range": "$50,000 – $90,000",
              "desc": "全面装修，配备优质饰面、更大范围木工、特色墙及可选智能家居集成。"
            },
            "resale": {
              "label": "转售组屋（任何房型）",
              "range": "比 BTO 高 20–40%",
              "desc": "需额外预算用于拆除旧瓷砖、重新布线、更换腐蚀水管及湿区全面防水处理。"
            },
            "condo": {
              "label": "私人公寓",
              "range": "$40,000 – $105,000",
              "desc": "配备 MCST 合规的私人饰面。新公寓从 $40,000 起；转售公寓根据装修范围可达 $105,000 以上。"
            }
          }
        },
        "resale": {
          "badge": "转售组屋与 2026 年满居住年限",
          "title": "计划翻新转售组屋？",
          "subtitle": "2026 年将有超过 13,480 套组屋达到最低居住年限——比去年激增 93%。无论您是出售还是继续居住，专业翻新都能最大化您的房产价值与市场吸引力。",
          "points": {
            "1": {
              "title": "基础设施优先",
              "desc": "较旧的转售组屋在进行美观装修之前，需要重新布线、更换水管和全面防水处理。我们在报价前检查每一个系统——确保翻新过程中零意外。"
            },
            "2": {
              "title": "转售价值策略",
              "desc": "我们设计能吸引下一位买家的翻新方案——开放式厨房、日式北欧美学及中性色调，经证实能在新加坡转售市场获得更高的叫价。"
            },
            "3": {
              "title": "全程许可证协调",
              "desc": "作为具备 HDB 执照的公司，我们可代您协调 HDB 翻新许可证、邻里通知及结构报批流程，让整个过程更顺畅。"
            }
          },
          "cta": "规划我的转售组屋翻新"
        },
        "timeline": {
          "title": "新加坡组屋翻新时间表",
          "subtitle": "大多数住宅翻新项目都会经历从规划与审批，到施工与最终交付的清晰流程。",
          "items": {
            "1": {
              "title": "规划与设计",
              "desc": "通常需要 2–4 周进行咨询、格局规划、材料挑选、设计深化及报价确认，随后才正式开工。"
            },
            "2": {
              "title": "施工阶段",
              "desc": "大多数 BTO 住宅约需 8–12 周；转售组屋通常需 10–16 周，视拆改、木作、水电及整体工程范围而定。"
            },
            "3": {
              "title": "最终交付",
              "desc": "在细节修饰、收尾修补与检查完成后，才会把住宅交付给您，确保空间适合安心入住。"
            }
          }
        },
        "mistakes": {
          "title": "常见翻新误区",
          "subtitle": "一项规划完善的翻新，不仅关乎美感，也在于避免不必要的延误、返工与预算超支。",
          "items": {
            "1": {
              "title": "低估整体预算",
              "desc": "额外的电气工程、防水处理、老旧水管更换，以及定制木作升级，往往都会带来额外成本。"
            },
            "2": {
              "title": "忽略空间规划",
              "desc": "即使住宅看起来美观，如果没有及早考虑收纳、动线与日常生活习惯，居住体验仍会受到影响。"
            },
            "3": {
              "title": "忽视相关规范",
              "desc": "HDB 指南、许可证审批与结构要求都必须妥善处理，否则可能导致工程延误或后续修正成本增加。"
            }
          }
        },
        "faq_section": {
          "title": "常见问题",
          "subtitle": "新加坡业主在开始翻新之旅前需要了解的一切。",
          "items": {
            "1": {
              "q": "2026 年四房式 BTO 翻新的费用是多少？",
              "a": "2026 年新加坡全面的四房式 BTO 翻新通常在 <strong>$45,000 至 $65,000</strong> 之间。涵盖地板、油漆、管道及厨房和衣柜的定制木工。高级饰面或开放式格局拆除可能将费用推高至 $75,000 以上。"
            },
            "2": {
              "q": "三房式或五房式组屋翻新费用是多少？",
              "a": "<strong>三房式 BTO 翻新</strong>通常为 $25,000–$45,000；<strong>五房式 BTO</strong> 为 $50,000–$90,000。任何房型的转售组屋因拆除、重新布线和防水要求，费用额外增加 20–40%。"
            },
            "3": {
              "q": "为什么转售组屋翻新比 BTO 更贵？",
              "a": "转售组屋在进行美观装修前，需要完成必要的基础设施工程——<strong>重新布线、更换腐蚀水管、拆除旧瓷砖及湿区防水</strong>。这些前期工程通常增加 $8,000–$20,000 的费用，视房龄和状况而定。"
            },
            "4": {
              "q": "如何在小型组屋中最大化储物空间？",
              "a": "利用<strong>落地式木工</strong>充分发挥垂直空间。带内置抽屉的架高床、隐藏储物的特色墙及可延伸餐桌均为成熟方案。Japandi 和温暖极简风格依赖隐蔽式橱柜，在不牺牲功能的前提下保持整洁美感。"
            },
            "5": {
              "q": "组屋翻新是否需要申请 HDB 许可证？",
              "a": "是的。大多数组屋翻新工程——包括<strong>拆除、铺砖、电气及管道</strong>——在实体施工前均需取得 HDB 翻新许可证。许可证审批通常需要 1–3 周。作为具备 HDB 执照的公司，ID Work Studio 可代您处理相关许可证申请。"
            },
            "6": {
              "q": "新加坡组屋翻新需要多长时间？",
              "a": "<strong>四房式 BTO 翻新</strong>从收到钥匙到交付通常需要 8–12 周，包括许可证申请时间。转售组屋因需额外的拆除和基础设施工程，通常需要 10–16 周。我们在施工前提供完整的甘特图时间表。"
            },
            "7": {
              "q": "2026 年 HDB 翻新贷款上限是多少？",
              "a": "组屋业主可向 HDB 申请最高 <strong>$30,000</strong> 的翻新贷款，还款期最长 5 年。贷款仅涵盖经许可的翻新工程。超出上限的项目可申请银行翻新贷款或个人贷款。"
            },
            "8": {
              "q": "为什么选择具备 HDB 执照的公司很重要？",
              "a": "选择具备 HDB 执照的公司，有助于确保翻新工程符合<strong>HDB 指南</strong>及结构安全要求，也让业主更安心，知道电气、管道及拆改工程都按新加坡相关规范执行。"
            }
          }
        },
        "testimonials": {
          "title": "客户真实评价",
          "subtitle": "来自新加坡业主的 Google 认证真实评价。",
          "verified": "Google 认证评价",
          "items": {
            "1": {
              "quote": "翻新服务绝对出色。从头到尾展现出高水准的专业素养、精湛的工艺及对细节的高度重视。团队工作准时、有条不紊，整个施工过程中保持现场整洁。沟通顺畅透明，对每一个要求都能及时回应。最终效果真正超出了我的预期——我对翻新成果非常满意，强烈推荐给任何寻求可靠、高质量翻新服务的业主。",
              "name": "Dewi",
              "flat": "翻新客户 · Google 5★ 评价"
            },
            "2": {
              "quote": "我近期委托 ID Work Studio 为我位于云南路的有地房产进行翻新工程，对成果非常满意。施工质量良好，任何小修或问题都能得到迅速且负责任的跟进处理。翻新后的效果令人印象深刻——我的房子在街道上真正脱颖而出。我非常欣赏团队对高质量工程与客户满意度的承诺，强烈推荐给任何寻求可靠专业翻新服务的人士。",
              "name": "Megannn",
              "flat": "有地房产，云南路 · Google 5★ 评价"
            },
            "3": {
              "quote": "我用这家装修公司很多年了，从自己的公司店铺到家里的装修，我只找他家的，因为老板是个很实在的人，给最好的价格，如果有些材料业主想从中国购买，他也会采纳，也会帮业主省钱，装修交给他完全放心，不需要督工，因为老板是个非常责任心的人，以后有任何装修我只选择他的公司。",
              "name": "Michelle Zheng",
              "flat": "长期客户 · 商业与住宅 · Google 5★ 评价"
            }
          }
        }
      },
      
      "insights": {
        "officeCost": {
          "meta": {
            "title": "新加坡办公室装修费用（2026指南）| ID Work Studio",
            "desc": "根据办公室面积说明新加坡办公室装修真实费用，包括费用拆解、工期、业主审批、机电工程与隐藏成本。"
          },
          "title": "新加坡办公室装修费用（2026指南）",
          "intro": {
            "line1": "新加坡办公室装修通常费用：",
            "cost1": "$50 – $80 每平方英尺（基础办公室装修）",
            "cost2": "$80 – $130 每平方英尺（中档办公室装修）",
            "cost3": "$130 – $200+ 每平方英尺（高端或 Grade A 办公室）",
            "line2": "一般办公室装修需要6到10周，取决于业主审批、MCST规定、SCDF要求、机电协调以及是否需要夜间或周末施工。"
          },
          "size": {
            "title": "不同面积办公室装修费用",
            "small": {
              "title": "小型办公室（800 – 1,200 sqft）",
              "cost": "预计费用：$40,000 – $100,000",
              "desc": "适合初创公司或小团队，通常为简单开放式布局、基础地面、灯具、少量隔间与较少定制木工。"
            },
            "mid": {
              "title": "中型办公室（1,500 – 3,000 sqft）",
              "cost": "预计费用：$100,000 – $300,000",
              "desc": "通常包括会议室、茶水间、接待台、玻璃隔间、更多电源点、网络布线与空调调整。"
            },
            "large": {
              "title": "大型办公室（3,000 – 5,000 sqft）",
              "cost": "预计费用：$250,000 – $800,000",
              "desc": "需要更完整的项目协调，包括更多工位、隔音处理、特色墙、储物空间、机电工程与分阶段交付安排。"
            },
            "corp": {
              "title": "企业级 / Grade A 办公室（5,000 sqft以上）",
              "cost": "预计费用：$800,000 – $2M+",
              "desc": "通常涉及高端材料、品牌接待区、董事会议室、专业灯光、影音系统、严格大厦规定与更详细的审批协调。"
            }
          },
          "breakdown": {
            "title": "费用构成",
            "item1": "隔间工程，包括石膏板房间、玻璃会议室与隔音隔间",
            "item2": "电力与网络点位，包括工位、会议室、服务器柜与茶水间设备",
            "item3": "灯光与天花工程，包括办公室灯光布局与喷淋协调",
            "item4": "地面工程，例如方块地毯、vinyl、架高地板或现有地面保护",
            "item5": "定制木工，例如接待台、储物柜、茶水间柜与特色墙",
            "item6": "空调调整，特别是中央空调大厦或需要下班后使用空调的办公室",
            "item7": "消防与SCDF相关合规要求，尤其在隔间、天花或消防系统受影响时"
          },
          "timeline": {
            "title": "装修时间",
            "step1": "设计与规划：2–3周，用于布局、材料选择、预算审核与业主要求检查",
            "step2": "审批提交：2–4周，视工程范围可能涉及业主、MCST、大厦管理或SCDF相关审批",
            "step3": "现场施工：4–8周，包括隔间、电气、地面、天花、木工、机电协调与交付"
          },
          "mistakes": {
            "title": "常见费用错误",
            "item1": "低估电力与网络布线费用，尤其每个工位都需要电源和网络点时",
            "item2": "在确认预算前忽略业主、MCST或大厦管理要求",
            "item3": "没有预先考虑未来还原费用，导致承租办公室的真实成本被低估",
            "item4": "赶工导致额外夜间施工、周末施工或紧急材料协调费用"
          },
          "faq": {
            "title": "常见问题",
            "q1": "新加坡1000平方英尺办公室装修多少钱？",
            "a1": "新加坡1000平方英尺办公室装修通常约$50,000至$120,000。简单开放式办公室会接近低位；若有会议室、玻璃隔间、茶水间、网络布线和空调工程，费用会更高。",
            "q2": "为什么办公室装修费用会变高？",
            "a2": "主要原因包括电力负荷、网络布线、玻璃隔间、空调调整、消防安全要求、夜间施工限制以及业主或MCST审批要求。",
            "q3": "办公室装修前需要审批吗？",
            "a3": "需要。大多数新加坡办公室大厦在开工前都需要业主、MCST或大厦管理批准。如果工程影响隔间、天花、喷淋、消防警报或逃生路线，也可能需要SCDF相关审核。",
            "q4": "办公室装修可以在下班后施工吗？",
            "a4": "视大厦规定而定。许多CBD和Grade A大厦会限制噪音工程、电梯使用和卸货区时间。夜间或周末施工通常需要额外批准，也可能增加人工成本。",
            "q5": "签办公室租约前应该检查什么？",
            "a5": "建议检查电力容量、空调供应时间、天花状况、喷淋位置、还原条款、卸货通道、楼面承重、网络点需求以及业主是否允许你的规划布局。",
            "q6": "还原费用是否包含在办公室装修费用内？",
            "a6": "通常不包含在初期装修费用内，但应该从一开始就规划。还原费用大约$10至$40+每平方英尺，取决于业主交还要求以及装修时建造了多少固定工程。"
          },
          "cta": {
            "text": "准备办公室装修？把平面图、租约条件和预计员工人数发给我们，我们可以在开工前协助你估算实际办公室装修预算。",
            "button": "WhatsApp 咨询办公室装修报价"
          }
        },
        "article4": {
          "meta": {
            "title": "新加坡商业装修费用（2026）| ID Work Studio",
            "description": "新加坡商业装修费用指南，涵盖办公室、零售店、餐饮与工业空间，包括审批、工期、隐藏成本与常见错误。"
          },
          "hero": {
            "badge": "商业指南",
            "title": "新加坡商业装修费用（2026）",
            "subtitle": "从实际施工角度解析新加坡办公室、零售、餐饮与工业空间的装修价格、合规要求与隐藏成本。",
            "meta1": "2026 指南",
            "meta2": "商业装修"
          },
          "back": "返回见解",
          "quick": {
            "title": "快速费用总结",
            "desc": "新加坡商业装修费用很大程度取决于合规要求、大厦规定与机电系统，而不只是设计本身。",
            "office": "办公室",
            "officeCost": "$50 – $300 /平方尺",
            "retail": "零售店",
            "retailCost": "$95 – $400+ /平方尺",
            "fnb": "餐饮 / 餐厅",
            "fnbCost": "$223 – $540 /平方尺",
            "industrial": "工业单位",
            "industrialCost": "$30 – $450+ /平方尺"
          },
          "why": {
            "title": "为什么新加坡商业装修费用较高",
            "desc": "主要成本来自合规要求、机电系统、大厦限制与材料标准。大多数超支并不是来自饰面，而是来自审批、机电与现场条件。",
            "point1": "合规要求：BCA、SCDF 与 MCST 要求",
            "point2": "机电系统：空调、排风、布线与排水",
            "point3": "大厦限制：商场、CBD 办公楼与 JTC 规定"
          },
          "office": {
            "title": "新加坡办公室装修费用",
            "level": "级别",
            "cost": "费用",
            "scope": "常见工程范围",
            "basic": "基础",
            "basicCost": "$50 – $80 /平方尺",
            "basicScope": "隔间、地毯、基础灯具",
            "standard": "标准",
            "standardCost": "$80 – $150 /平方尺",
            "standardScope": "玻璃会议室、接待区、灯光",
            "premium": "高端",
            "premiumCost": "$150 – $300 /平方尺",
            "premiumScope": "特色设计、智能办公室、声学处理",
            "note": "在 Marina Bay 与 Raffles Place 等 CBD 大厦，夜间施工限制可能提高人工成本。较严格的 Grade A 办公楼通常需预留 15–25% 额外成本。"
          },
          "retail": {
            "title": "新加坡零售店装修费用",
            "desc": "零售装修费用主要取决于店面设计、展示木作与灯光强度。",
            "point1": "基础零售：$95 – $180 /平方尺",
            "point2": "商场装修：$180 – $300 /平方尺",
            "point3": "高端零售：$300 – $400+ /平方尺",
            "desc2": "很多租户低估了 MCST 提交要求与设计修改次数。单是审批就可能延误 2–4 周。"
          },
          "fnb": {
            "title": "新加坡餐饮装修费用",
            "desc": "餐饮项目通常最昂贵，因为涉及排风系统、隔油池、防火工程与大量水管工程。",
            "note": "常见餐饮装修费用：$223 – $540 /平方尺。如果单位无法支持排风路径，整改可能额外花费 $10,000 – $30,000。"
          },
          "industrial": {
            "title": "新加坡工业单位装修费用",
            "point1": "基础：$30 – $80 /平方尺",
            "point2": "标准：$80 – $200 /平方尺",
            "point3": "复杂升级：$200 – $450+ /平方尺",
            "desc": "工业单位可能需要 URA 用途检查、JTC 批准与结构承重检查。"
          },
          "breakdown": {
            "title": "完整费用拆解",
            "component": "项目",
            "share": "常见占比",
            "construction": "施工工程",
            "constructionShare": "70–80%",
            "professional": "专业费用",
            "professionalShare": "10–15%",
            "permits": "许可证与提交",
            "permitsShare": "5–8%",
            "contingency": "备用金",
            "contingencyShare": "10–15%",
            "note": "建议为专业费用、许可证与现场不可预见情况额外预留 20–30% 成本缓冲。"
          },
          "compliance": {
            "title": "许可证与合规要求",
            "q": "可以跳过 SCDF 提交吗？",
            "a": "如果工程只是纯装饰，并且不影响消防安全系统，可能不需要 SCDF 提交。",
            "noTitle": "通常不需要 SCDF 的工程",
            "no1": "油漆",
            "no2": "活动家具",
            "no3": "不涉及拆除的 vinyl 地板",
            "requiredTitle": "以下情况仍需要 SCDF",
            "required1": "天花影响喷淋系统",
            "required2": "新增或修改隔间",
            "required3": "更改空调风管",
            "required4": "触及消防保护系统",
            "note": "即使不需要 SCDF，开工前通常仍需 MCST 批准、施工许可证与施工方法说明。"
          },
          "timeline": {
            "title": "新加坡商业装修时间表",
            "p1": { "title": "规划：4–9 周", "desc": "可行性评估、空间规划、预算与顾问协调。" },
            "p2": { "title": "设计：2–4 周", "desc": "空间规划、图纸、材料建议与工程范围确认。" },
            "p3": { "title": "审批：2–6 周", "desc": "视工程范围而定，可能涉及 BCA、SCDF、业主或 MCST 审批。" },
            "p4": { "title": "施工：3–16 周", "desc": "拆除、隔间、电气、机电、木作、收尾与交付。" }
          },
          "mistakes": {
            "title": "会增加成本的真实错误",
            "m1": { "title": "没有检查空调系统", "desc": "部分大厦使用中央空调，晚上 6 点后停止供应。若需新增系统，可能花费 $8,000 – $30,000。" },
            "m2": { "title": "没有供水 / 排水", "desc": "美容院、美甲店、面部护理服务与清洁业务经常遇到这个问题。泵系统可能花费 $3,000 – $10,000+。" },
            "m3": { "title": "MCST 审批延误", "desc": "文件不足或图纸不合规，可能导致项目延误 2–4 周。" },
            "m4": { "title": "决策者太多", "desc": "频繁更改决定会增加成本并延误工期。" },
            "m5": { "title": "原状修复沟通错误", "desc": "一个真实案例因沟通不清导致空调被拆除，造成约 $30,000 的可避免成本。" }
          },
          "reinstatement": {
            "title": "新加坡原状修复费用",
            "level": "级别",
            "cost": "费用",
            "basic": "基础",
            "basicCost": "$10 – $20 /平方尺",
            "standard": "标准",
            "standardCost": "$20 – $30 /平方尺",
            "complex": "复杂",
            "complexCost": "$30 – $40+ /平方尺",
            "desc": "建议至少在租约结束前 3–4 个月开始规划。"
          },
          "faq": {
            "title": "常见问题",
            "q1": "新加坡商业装修费用是多少？",
            "a1": "办公室约 $50–$300 /平方尺，餐饮项目最高可达 $540 /平方尺。",
            "q2": "可以跳过 SCDF 提交吗？",
            "a2": "只有在工程属于纯装饰且不影响消防安全系统时才可能不需要。",
            "q3": "如果跳过许可证会怎样？",
            "a3": "工程可能被大厦管理方要求停止。",
            "q4": "最大的隐藏成本是什么？",
            "a4": "空调、机电、排风、排水以及合规相关工程。"
          },
          "cta": {
            "title": "获取真实商业装修报价",
            "desc": "ID Work Studio 是 BCA 注册装修公司，专注于商业空间、许可证协调与实际现场执行。",
            "btn1": "使用装修费用计算器",
            "btn2": "查看商业服务"
          }
        }
      },

      "insights_page": {
        "meta": {
          "title": "见解 | ID Work Studio Singapore",
          "description": "关于新加坡翻新、室内设计与项目规划的专业见解，帮助住宅与商业客户做出更明智的决定。"
        },
        "hero": {
          "badge": "设计观点",
          "title": "见解",
          "subtitle": "围绕新加坡翻新、室内设计与项目规划的深度观点，帮助住宅与商业客户作出更清晰、更从容的决定。"
        },
        "intro": {
          "eyebrow": "编辑式内容",
          "title": "为阅读、分享与未来扩展而设计",
          "body": "这个页面被设计成可被搜索引擎与 AI 系统理解的内容枢纽，而不是一整页冗长文章。每篇文章未来都应拥有独立网址，更利于 Google 收录、AI 引用，以及手机用户快速浏览。"
        },
        "highlights": {
          "1": {
            "title": "独立文章结构",
            "desc": "每篇文章都适合放在独立网址之下，便于排名、被引用与单独分享。"
          },
          "2": {
            "title": "更适合手机浏览",
            "desc": "页面只展示精简摘要，而非整篇长文，让用户在手机上也能轻松浏览其他内容。"
          },
          "3": {
            "title": "建立专业权威",
            "desc": "首三篇主题专为提升 GEO、SEO 以及新加坡翻新搜索中的客户信任而设。"
          }
        },
        "listing": {
          "eyebrow": "精选文章",
          "title": "当前观点",
          "subtitle": "五篇高影响力文章，帮助建立您在新加坡翻新搜索与未来 AI 引用中的专业地位。",
          "read_more": "阅读全文"
        },
        "articles": {
          "1": {
            "category": "费用指南",
            "title": "新加坡翻新费用（2026 指南）",
            "excerpt": "直接说明 BTO、转售组屋与私人公寓在新加坡翻新的合理预算范围，以及真正影响成本的关键因素。",
            "read_time": "约 8 分钟"
          },
          "2": {
            "category": "规划指南",
            "title": "新加坡 HDB 翻新时间表",
            "excerpt": "清楚说明翻新通常需要多久、延误常见在哪里，以及业主可如何更有把握地规划时间。",
            "read_time": "约 7 分钟"
          },
          "3": {
            "category": "策略指南",
            "title": "新加坡业主最常犯的翻新错误",
            "excerpt": "一篇实用指南，帮助您识别新加坡常见翻新误区，并通过更清晰的前期决策避免延误、返工与后悔。",
            "read_time": "约 7 分钟"
          },
          "4": {
            "category": "商业费用指南",
            "title": "新加坡商业翻新费用（2026 指南）",
            "excerpt": "以承包商角度说明新加坡办公室、零售、餐饮与工业空间翻新费用，包括许可证、工期、隐藏成本与常见现场问题。",
            "read_time": "约 9 分钟"
          },
          "5": {
            "category": "办公室费用指南",
            "title": "新加坡办公室装修费用（2026指南）",
            "excerpt": "从承包商角度说明不同面积办公室装修费用，包括工位、会议室、网络布线、业主审批与还原规划。",
            "read_time": "约 8 分钟"
          }
        },
        "footer_block": {
          "eyebrow": "ID Work Studio",
          "title": "新加坡设计导向翻新团队",
          "subtitle": "若您正在规划住宅或商业项目，我们可协助您更清晰地思考设计方向、工程范围、预算安排与执行节奏。",
          "address_label": "办公地址",
          "phone_label": "电话",
          "email_label": "电子邮件",
          "cta": "WhatsApp 联系我们"
        }
      },
      "article_renovation_cost_2026": {
        "meta": {
          "title": "新加坡翻新费用（2026 指南） | ID Work Studio",
          "description": "从 BTO、转售组屋到私人公寓，本指南全面解析 2026 年新加坡翻新预算、主要成本来源、隐藏费用及更实际的预算规划方式。"
        },
        "hero_badge": "费用指南",
        "title": "新加坡翻新费用（2026 指南）",
        "subtitle": "帮助新加坡业主更实际地规划 BTO、转售组屋与私人公寓翻新预算，并了解真正影响整体成本的关键因素。"
      },
      "article_hdb_timeline": {
        "meta": {
          "title": "新加坡 HDB 翻新时间表（2026 指南） | ID Work Studio",
          "description": "了解新加坡组屋翻新通常需要多久、哪些因素最容易造成延误，以及您大约什么时候可以入住。"
        },
        "hero_badge": "规划指南",
        "title": "新加坡 HDB 翻新时间表（2026 指南）",
        "subtitle": "一篇实用指南，说明翻新真正需要多久、常见延误从何而来，以及您何时能较实际地准备入住。"
      },
      "article_renovation_mistakes": {
        "meta": {
          "title": "新加坡业主最常犯的翻新错误 | ID Work Studio",
          "description": "一篇以实际项目经验为基础的指南，帮助新加坡业主避开常见翻新错误，并以更清晰的方式规划项目。"
        },
        "hero_badge": "策略指南",
        "title": "新加坡业主最常犯的翻新错误",
        "subtitle": "根据新加坡真实项目经验整理，帮助业主在翻新前避开最常见、也最昂贵的错误。"
      },
"commercial_page": {
        "hero": {
          "title": "新加坡商业室内设计与办公室装修",
          "subtitle": "为办公室、零售与餐饮空间打造更精致的商业环境，并以周密规划、合规协调与细致执行完成交付。",
          "cta": "预约现场勘察",
          "cta_reinstatement": "了解更多原状修复服务"
        },
        "direct_answer": {
          "eyebrow": "给新加坡商业业主的直接答案",
          "title": "新加坡商业翻新：费用、时间表与审批",
          "p1": "新加坡商业翻新通常为：<strong>办公室每平方英尺 $30 至 $180</strong>、<strong>零售店每平方英尺 $80 至 $150</strong>、<strong>餐饮空间每平方英尺 $120 至 $250</strong>。多数项目连同设计、业主或 MCST 审批、相关检查与施工，通常需要 <strong>6 至 12 周</strong>。",
          "p2": "商业翻新与住宅翻新的主要差别在于合规要求。商业项目可能涉及业主装修指南、MCST 要求、消防安全检查、排气系统、施工时段限制，以及租约结束时的原状修复责任。",
          "cards": {
            "1": { "label": "办公室翻新", "range": "$30 – $180 / 平方英尺", "note": "从基础办公室更新到高级办公室装修" },
            "2": { "label": "零售店翻新", "range": "$80 – $150 / 平方英尺", "note": "店面、灯光、陈列与储物工程" },
            "3": { "label": "餐饮空间翻新", "range": "$120 – $250 / 平方英尺", "note": "厨房、排气、给排水与消防安全因素" }
          }
        },
        "cost_breakdown": {
          "title": "新加坡商业翻新费用 breakdown",
          "subtitle": "以下可作为现场勘察前的实际预算参考。正式报价仍需查看平面图、现场尺寸、大厦规定与材料选择。",
          "items": {
            "1": {
              "title": "基础办公室装修",
              "cost": "$30 – $60 / 平方英尺",
              "points": {
                "1": "油漆、简单地面与活动家具协调",
                "2": "基础电位与灯位工程",
                "3": "适合木作较少的小型办公室"
              }
            },
            "2": {
              "title": "中档办公室翻新",
              "cost": "$60 – $100 / 平方英尺",
              "points": {
                "1": "会议室、茶水间与经理房",
                "2": "地毯/乙烯基地板、天花、灯光与网络点",
                "3": "玻璃隔间与实用木作"
              }
            },
            "3": {
              "title": "高级商业装修",
              "cost": "$100 – $180 / 平方英尺",
              "points": {
                "1": "定制接待区、特色墙与隔音房",
                "2": "更高等级饰面与更多机电协调",
                "3": "适合客户接待型办公室与品牌导向空间"
              }
            }
          },
          "retail_fnb": {
            "title": "零售与餐饮通常需要更高预算",
            "body": "零售空间通常需要更强的灯光、展示道具、店面工程与业主设计规范配合。餐饮空间要求更高，因为涉及厨房设备协调、排气、隔油池、防水、给排水、消防安全与清洁通道。因此餐饮翻新即使设备费用尚未完全确认，也可能达到 <strong>$120 至 $250 / 平方英尺</strong>。"
          }
        },
        "timeline_guide": {
          "title": "常见商业翻新时间表",
          "subtitle": "新加坡多数商业项目较实际的时间为 6 至 12 周。审批阶段通常最容易延误，尤其当业主、MCST、SCDF 或大厦管理方要求修改图纸时。",
          "steps": {
            "1": { "title": "设计与规划", "time": "2 – 3 周", "desc": "现场勘察、布局规划、设计方向、预算确认与材料方向。" },
            "2": { "title": "业主 / MCST / 相关单位提交", "time": "2 – 4 周", "desc": "提交图纸、承包商文件、保险、施工方法说明，以及必要的消防安全相关检查。" },
            "3": { "title": "翻新施工与交付", "time": "4 – 8 周", "desc": "现场保护、拆除、机电、天花、地面、木作、油漆、清洁与最终交付。" }
          },
          "approval_title": "常见商业审批项目",
          "approval_items": {
            "1": "业主或大厦管理方装修许可证",
            "2": "分层商业单位的 MCST 批准",
            "3": "若影响消防、喷淋、警报或逃生路线，需进行 SCDF 检查",
            "4": "高空作业、噪音工程与非办公时段施工限制",
            "5": "公共责任保险、装修押金与现场保护要求"
          }
        },
        "content_cluster": {
          "eyebrow": "商业内容主题群",
          "title": "装修前可先阅读的实用指南",
          "body": "商业翻新比住宅工程涉及更多审批与租约风险。这些指南会在您联系承包商前，更详细说明费用与时间表。",
          "cost_card": {
            "eyebrow": "费用指南",
            "title": "新加坡商业翻新费用",
            "desc": "查看办公室、零售单位与餐饮空间的详细商业翻新费用指南。"
          },
          "timeline_card": {
            "eyebrow": "时间表指南",
            "title": "新加坡办公室翻新时间表",
            "desc": "了解规划、审批、现场施工与交付安排。"
          }
        },
        "solutions": {
          "title": "商业翻新解决方案",
          "items": {
            "1": {
              "title": "提升效率的办公室翻新方案",
              "desc": "优化混合办公布局、人体工学工作站与协作区域。我们可处理办公室原状修复及全面装修工程。",
              "point1": "办公室原状修复",
              "point2": "系统家具"
            },
            "2": {
              "title": "高人流零售与店面设计",
              "desc": "打造吸引客流与提升销售的零售空间，从精品店到高街零售门店皆可提供完整设计与施工服务。",
              "point1": "视觉陈列",
              "point2": "灯光设计"
            },
            "3": {
              "title": "符合 BCA / HDB 标准的商业翻新",
              "desc": "全面配合新加坡严格建筑规范，可统筹餐饮、工业及商业空间所需的各项报批与施工协调。",
              "point1": "FSSD（消防安全）报批",
              "point2": "大厦管理协调"
            }
          }
        },
        "project_management": {
          "title": "策略型项目管理",
          "subtitle": "通过精准规划与执行，尽可能减少业务停顿时间。",
          "items": {
            "1": {
              "title": "降低停业影响",
              "desc": "采用分阶段施工策略，让您的业务在装修期间尽量维持运作。"
            },
            "2": {
              "title": "甘特图进度透明",
              "desc": "提供清晰项目时间表与每周进度更新，帮助您掌握交付节点。"
            },
            "3": {
              "title": "一站式交付",
              "desc": "从现场勘察到最终移交，我们统筹商业项目中的每一个关键细节。"
            }
          }
        },
        "trust": {
          "title": "项目管理与合规协调",
          "subtitle": "繁琐流程交给我们，您可更专注于业务本身。",
          "items": {
            "1": {
              "title": "消防安全（SCDF）",
              "desc": "协助处理消防安全相关报批与审批流程。"
            },
            "2": {
              "title": "BCA 许可证",
              "desc": "具备建筑与建设局相关报批与协调经验。"
            },
            "3": {
              "title": "商场管理协调",
              "desc": "熟悉新加坡主要商场与办公楼管理团队的配合要求。"
            },
            "4": {
              "title": "现场安全",
              "desc": "严格遵守工作场所安全与健康（WSH）标准。"
            }
          }
        },
        "faq": {
          "title": "新加坡商业翻新常见问题",
          "subtitle": "针对办公室、零售与餐饮翻新的实用解答，包括费用、时间、业主审批、MCST 与 SCDF 注意事项。",
          "q1": {
            "q": "新加坡商业翻新费用大概是多少？",
            "a": "新加坡商业翻新通常为办公室每平方英尺 $30 至 $180，零售店每平方英尺 $80 至 $150，餐饮空间每平方英尺 $120 至 $250。最终费用主要受机电工程、消防安全要求、木作、地面、天花工程及租约原状修复条件影响。"
          },
          "q2": {
            "q": "新加坡办公室翻新费用大概是多少？",
            "a": "基础办公室翻新通常从每平方英尺 $30 至 $60 起。包含会议室、茶水间、地面、天花与电位工程的中档办公室通常为每平方英尺 $60 至 $100。若涉及特色墙、隔音房、定制木作与较高等级饰面，高级办公室装修可达每平方英尺 $100 至 $180。"
          },
          "q3": {
            "q": "商业翻新通常需要多久？",
            "a": "多数商业翻新项目需要 6 至 12 周。设计与规划通常需 2 至 3 周，业主或 MCST 提交通常需 2 至 4 周，实际施工通常需 4 至 8 周，视项目大小与审批条件而定。"
          },
          "q4": {
            "q": "装修前是否需要业主或 MCST 批准？",
            "a": "需要。多数办公室、零售单位、诊所、健身房与餐饮空间在开工前都需要业主、大厦管理方或 MCST 批准。开工许可证通常需要提交图纸、施工方法说明、保险文件与承包商资料。"
          },
          "q5": {
            "q": "商业翻新是否需要 SCDF 提交？",
            "a": "如翻新影响防火隔间、喷淋点、火警系统、逃生路线、应急照明、容纳人数或餐饮排气系统，可能需要 SCDF 提交。简单办公室更新未必需要 SCDF 提交，但开工前应先确认。"
          },
          "q6": {
            "q": "办公室翻新可以在办公时间后施工吗？",
            "a": "可以，但需视大厦规定而定。许多商业大厦只允许噪音工程在办公时间后或指定时段进行。拆除、钻孔与材料运输时间都必须符合业主、MCST 或大厦管理方要求。"
          },
          "q7": {
            "q": "哪些项目最影响商业翻新费用？",
            "a": "主要费用因素包括电位与网络点、冷气改动、天花工程、消防安全合规、地面、木作、玻璃隔间、茶水间工程、给排水，以及租约结束时是否需要原状修复。"
          },
          "q8": {
            "q": "新加坡办公室原状修复是什么？",
            "a": "办公室原状修复是指在租约结束前，将单位恢复至业主原始交付状态。通常包括拆除隔间、地面、天花、线路、招牌、木作，并按租约要求修补受影响表面。"
          },
          "q9": {
            "q": "零售店翻新是否比办公室翻新更贵？",
            "a": "零售店翻新通常比基础办公室更高，因为涉及店面、灯光、展示道具、招牌、顾客动线、储物空间与业主设计规范。新加坡零售翻新通常为每平方英尺 $80 至 $150。"
          },
          "q10": {
            "q": "为什么餐饮翻新通常更贵？",
            "a": "餐饮翻新通常更贵，因为涉及排气、隔油池、给排水、防水、厨房设备协调、消防安全、虫害防治要求，以及更严格的相关单位或业主条件。实际餐饮预算通常为每平方英尺 $120 至 $250。"
          },
          "q11": {
            "q": "申请商业翻新报价前应准备什么？",
            "a": "建议准备平面图、单位面积、租约或业主装修指南、目标交付日期、初步布局需求、员工人数、茶水间需求、会议室数量，以及现有原状修复条件。这些资料可让报价更准确。"
          },
          "q12": {
            "q": "ID Work Studio 是否能同时处理设计与装修工程？",
            "a": "可以。ID Work Studio 可协助布局规划、设计协调、装修施工、现场协调与商业空间交付。商业项目中，我们也会协调进场时间、现场保护与大厦管理提交等实际要求。"
          }
        },
        "subpages": {
          "section_title": "商业翻新解决方案",
          "section_subtitle": "专为新加坡不同商业空间打造的专业服务——从办公室到餐饮门店。",
          "btn": "了解更多",
          "office": {
            "badge": "",
            "title": "办公室与工作空间翻新",
            "desc": "为新加坡企业提供一站式办公室装修服务，包括混合办公布局、系统家具及完整 BCA / SCDF 合规协调。"
          },
          "retail": {
            "badge": "",
            "title": "零售与商场店面设计",
            "desc": "打造高影响力零售空间，提升客流与销售，并可协助处理主要商场的 MCST 提交流程。"
          },
          "shophouse": {
            "badge": "",
            "title": "餐饮与店屋翻新",
            "desc": "兼顾传统风貌与营运需求的店屋翻新及餐饮装修，符合 URA 与 SCDF 要求。"
          },
          "compliance": {
            "badge": "",
            "title": "许可证与合规管理",
            "desc": "涵盖 BCA、SCDF、MCST 及 LEW 的报批与协调流程，让您能专注于业务发展。"
          },
          "reinstatement": {
            "badge": "",
            "title": "办公室与商场原状修复",
            "desc": "专业清水房交付服务，协助符合 SCDF 与 MCST 要求，并顺利完成交还程序。"
          }
        },
        "process": {
          "title": "我们的商业翻新流程",
          "subtitle": "透明且清晰的分阶段流程，尽量降低对业务营运的影响。",
          "steps": {
            "1": {
              "title": "免费现场勘察",
              "detail": "免费",
              "desc": "进行详细现场评估，并提供完整的分项报价。"
            },
            "2": {
              "title": "设计与规划",
              "detail": "1–2 周",
              "desc": "根据品牌形象与使用需求，制定空间规划、材料安排及 3D 视觉方案。"
            },
            "3": {
              "title": "许可证提交",
              "detail": "1–3 周",
              "desc": "在施工前处理所需的 BCA、SCDF、MCST 与 URA 报批流程。"
            },
            "4": {
              "title": "翻新施工",
              "detail": "4–8 周",
              "desc": "由持牌 CoreTrade 团队执行工程，并通过分阶段安排尽量减少营运干扰。"
            },
            "5": {
              "title": "交付与验收",
              "detail": "第 1 天",
              "desc": "与大厦管理方联合检查、处理缺陷并完成正式交付。"
            }
          }
        },
        "cta": {
          "title": "准备好升级您的商业空间了吗？",
          "subtitle": "为您的下一个项目选择值得信赖、具备 BCA 注册资质的商业室内设计与装修团队。",
          "button": "获取商业报价"
        },
        "partners": {
          "title": "我们的客户与合作伙伴",
          "subtitle": "深受新加坡各大品牌、跨国公司及企业客户信赖。"
        }
      },
      "footer": {
        "rights": "版权所有。"
      },
      "sticky_nav": {
        "consult": "免费咨询",
        "contact": "联系我们"
      },
      "reinstatement_section": {
        "headline_serif": "专业呈现",
        "headline_bold": "清水房交付",
        "subtext": "为办公室与商场单位提供专业原状修复服务，以合规、精准与顺畅交付为核心，协助您安心完成移交。",
        "button": "了解更多关于原状修复"
      },
      "reinstatement_page": {
        "hero": {
          "headline_serif": "专业呈现",
          "headline_bold": "清水房交付"
        },
        "challenges": {
          "title_serif": "克服",
          "title_bold": "原状修复挑战",
          "items": {
            "1": {
              "pain": "担心押金被扣",
              "solution": "我们协助对照业主或管理方的移交流程与清单，提高顺利交付的把握。"
            },
            "2": {
              "pain": "商场或大厦管理要求严格",
              "solution": "熟悉商场单位与甲级办公楼的管理规范，可配合 MCST 与大厦管理方要求安排施工。"
            },
            "3": {
              "pain": "消防系统调整复杂",
              "solution": "可协调喷淋头、烟雾探测器等消防装置的迁移与复位，并配合所需认证流程。"
            }
          }
        },
        "process": {
          "title_serif": "我们的无缝",
          "title_bold": "四步流程",
          "steps": {
            "1": {
              "title": "现场勘察",
              "desc": "提供免费现场评估与报价。"
            },
            "2": {
              "title": "许可证管理",
              "desc": "协助处理 MCST 与 SCDF 等相关提交流程。"
            },
            "3": {
              "title": "施工阶段",
              "desc": "进行专业拆除与清水房还原工程。"
            },
            "4": {
              "title": "完工移交",
              "desc": "与业主或管理方进行联合检查，完成交付。"
            }
          }
        },
        "trust": {
          "bca": "BCA 注册",
          "hdb": "HDB 注册",
          "scdf": "SCDF 合规"
        },
        "trust_row": {
          "text": "深受新加坡甲级办公楼与商场租户信赖"
        },
        "footer": {
          "headline_serif": "您的安心",
          "headline_bold": "是我们的首要任务",
          "whatsapp_btn": "WhatsApp 预约免费现场勘察"
        },
        "sticky_footer": {
          "text": "想顺利拿回押金？WhatsApp 预约免费勘察"
        }
      }
    }
  }
};

// ─── Subpage translations (EN only — fallbackLng:"en" covers ZH) ──────────
const enT = (resources as any).en.translation;

enT["office_reno_page"] = {
  hero: {
    badge: "Singapore BCA-Registered Office Renovation Contractor",
    serif: "Transform Your",
    bold: "OFFICE SPACE",
    subtitle: "Turnkey office renovation and fit-out services for Singapore businesses. From hybrid work layouts to full M&E works — delivered on time, on budget.",
    cta: "Get a Free Site Survey",
    b1: "BCA & SCDF Compliant",
    b2: "All Permit Submissions Managed",
    b3: "Phased to Minimise Downtime"
  },
  overview: {
    serif: "Singapore's",
    bold: "OFFICE RENOVATION SPECIALISTS",
    p1: "ID Work Studio is a BCA-registered contractor specialising in office renovation and commercial fit-outs across Singapore. We serve SMEs, MNCs, and government agencies from our Woodlands studio.",
    p2: "Every office project begins with a free onsite consultation where we assess your space, understand your operational requirements, and develop a fit-out plan designed to minimise business disruption.",
    p3: "As a <strong>BCA-registered contractor</strong>, we manage all submissions to BCA, SCDF, and MCST — eliminating the administrative burden from your team.",
    c1t: "Hybrid Work Ready",
    c1d: "We design flexible work environments with hot-desking zones, collaboration areas, and quiet focus pods to support modern hybrid work models.",
    c2t: "Full M&E Coordination",
    c2d: "Our team manages all mechanical and electrical works in-house, including air-conditioning, data cabling, and lighting design.",
    c3t: "BCA & SCDF Compliant",
    c3d: "We handle all BCA building permits and SCDF fire safety submissions before physical work commences, keeping your project legal and on schedule."
  },
  scope: {
    serif: "What's Included in",
    bold: "OFFICE RENOVATION",
    i1t: "Space Planning & Layout",
    i1d: "Optimised floorplans for productivity, collaboration, and compliance with Singapore's workplace safety standards.",
    i2t: "Partitioning & False Ceilings",
    i2d: "Glass partitions, drywall systems, and T-bar or plasterboard false ceilings for acoustic and aesthetic performance.",
    i3t: "Electrical & Data Works",
    i3d: "Full M&E works including power points, data cabling, UPS systems, and lighting control.",
    i4t: "Flooring & Finishes",
    i4d: "Vinyl planks, raised access floors, carpet tiles, and epoxy coatings to suit operational and aesthetic requirements.",
    i5t: "Custom Joinery & Furniture",
    i5d: "Built-in reception counters, workstations, storage walls, and boardroom furniture tailored to your brand.",
    i6t: "Permit Submissions",
    i6d: "Full BCA building plan submission, SCDF fire safety approval, and MCST fit-out permit management."
  },
  stats: {
    s1u: "psf",
    s1l: "Office renovation cost range",
    s2u: "weeks",
    s2l: "Typical fit-out timeline",
    s3u: "weeks",
    s3l: "Permit approval lead time"
  },
  challenges: {
    serif: "Common",
    bold: "OFFICE RENOVATION CHALLENGES",
    ch_label: "The Challenge",
    sol_label: "Our Solution",
    p1pain: "Budget Overruns",
    p1sol: "Fixed-price contracts with full itemised quotations. No hidden costs, no surprises.",
    p2pain: "Business Downtime",
    p2sol: "Phased renovation schedules and after-hours works to keep your operations running throughout.",
    p3pain: "Permit Complexity",
    p3sol: "Our in-house team manages all BCA, SCDF, and MCST submissions so you don't have to."
  },
  trust: { text: "Trusted by Singapore businesses, law firms, and government agencies." },
  process: {
    serif: "How We",
    bold: "DELIVER YOUR OFFICE",
    s1t: "Free Site Survey",
    s1d: "Free onsite assessment and full itemised quotation.",
    s2t: "Design & Approval",
    s2d: "Space planning, 3D visuals, and all permit submissions.",
    s3t: "Renovation Works",
    s3d: "Phased fit-out by our licensed CoreTrade team.",
    s4t: "Handover",
    s4d: "Joint inspection, defect rectification, and full handover."
  },
  faq: {
    title: "Office Renovation FAQs",
    q1: "How much does an office renovation cost in Singapore in 2026?",
    a1: "Office renovation in Singapore typically costs between <strong>S$50 and S$180 per square foot</strong>, depending on fit-out level and scope of M&E works. A basic office refresh starts from S$50 psf. A full premium fit-out with glass partitions, feature walls, and smart office systems can reach S$180 psf or more.",
    q2: "Do I need a permit for office renovation in Singapore?",
    a2: "Yes. Most office renovation works require permit approval from one or more authorities:<br/><br/>• <strong>BCA</strong> for structural works and building plan amendments<br/>• <strong>SCDF</strong> for fire safety modifications (sprinklers, fire doors, emergency lighting)<br/>• <strong>MCST</strong> if your office is within a strata building or commercial tower<br/><br/>As a BCA-registered contractor, ID Work Studio handles all submissions on your behalf before physical work begins.",
    q3: "How long does an office renovation take in Singapore?",
    a3: "A typical office renovation (2,000–5,000 sqft) takes <strong>6–12 weeks</strong> from site survey to handover. This includes 1–2 weeks for design, 1–3 weeks for permit approvals, and 4–8 weeks for renovation works. Larger projects or those requiring structural changes may take 12–16 weeks."
  },
  related: { title: "Explore Our Other Commercial Services" },
  cta: {
    serif: "Ready to Transform",
    bold: "YOUR OFFICE?",
    btn: "WhatsApp for a Free Site Survey"
  },
  sticky: { text: "Free Office Renovation Quote — WhatsApp Us Now" }
};

enT["shophouse_reno_page"] = {
  hero: {
    badge: "Singapore URA Conservation Shophouse Specialist",
    serif: "Shophouse Renovation",
    bold: "DONE RIGHT",
    subtitle: "Full URA Conservation Permission, BCA structural, and SCDF fire safety compliance for Singapore shophouses. Specialists in Tanjong Pagar, Chinatown, Kampong Glam, and Boat Quay.",
    cta: "Get a Free Consultation",
    b1: "URA Conservation Permission",
    b2: "BCA & SCDF Compliant",
    b3: "All Submissions Managed"
  },
  overview: {
    serif: "Singapore's",
    bold: "SHOPHOUSE RENOVATION SPECIALISTS",
    p1: "Singapore's conserved shophouses present a unique renovation challenge — every modification must balance heritage preservation requirements with modern functional needs, navigating the tripartite approval process of URA, BCA, and SCDF.",
    p2: "ID Work Studio has completed shophouse renovation and F&B fit-out projects across Singapore's major conservation districts. Our team understands the specific URA guidelines applicable to each conservation area and style classification.",
    p3: "We manage the complete approval process — from <strong>URA Conservation Permission</strong> application to BCA structural submission and SCDF fire safety approval — delivering compliant, beautifully restored spaces.",
    districts_title: "Conservation Districts We Serve",
    uses_title: "Common Shophouse Uses",
    uses_desc: "F&B restaurants and cafés, boutique retail, professional offices, boutique hotels, creative studios, and mixed-use residential above commercial."
  },
  scope: {
    serif: "What We Cover in",
    bold: "SHOPHOUSE RENOVATION",
    i1t: "URA Conservation Submissions",
    i1d: "Full URA Conservation Permission application and liaison for all categories of conserved shophouses in Singapore.",
    i2t: "Facade & Heritage Restoration",
    i2d: "Sensitive restoration of original facade elements, five-foot ways, air wells, and heritage architectural details.",
    i3t: "Structural Works",
    i3d: "BCA-approved structural modifications including mezzanine additions, floor openings, and load-bearing assessments.",
    i4t: "M&E & Fire Safety",
    i4d: "Full mechanical, electrical, and SCDF-compliant fire safety installation including suppression systems and emergency lighting.",
    i5t: "F&B Grease Trap & Ventilation",
    i5d: "NEA-compliant grease trap installation, industrial kitchen ventilation, and exhaust system design for F&B operations.",
    i6t: "Interior Fit-Out",
    i6d: "Custom joinery, feature walls, flooring, and lighting design that honours heritage character while meeting modern operational needs."
  },
  stats: {
    s1u: "per sqft",
    s1l: "Shophouse renovation from",
    s2u: "agencies",
    s2l: "Permits managed (URA, BCA, SCDF)",
    s3u: "months",
    s3l: "Typical project timeline"
  },
  challenges: {
    serif: "Navigating",
    bold: "SHOPHOUSE RENOVATION CHALLENGES",
    ch_label: "The Challenge",
    sol_label: "Our Solution",
    p1pain: "Complex URA Approvals",
    p1sol: "Our team is experienced in URA Conservation Permission applications across all conservation area classifications.",
    p2pain: "Heritage vs Modern Function",
    p2sol: "We design interiors that satisfy URA heritage requirements while delivering the modern F&B or office functionality you need.",
    p3pain: "Multi-Agency Compliance",
    p3sol: "We coordinate BCA structural, SCDF fire safety, and URA conservation submissions concurrently to minimise delays."
  },
  trust: { text: "Trusted for conservation shophouse projects in Tanjong Pagar, Chinatown, Kampong Glam, and Boat Quay." },
  process: {
    serif: "Our",
    bold: "SHOPHOUSE RENOVATION PROCESS",
    s1t: "Free Consultation",
    s1d: "Onsite assessment, heritage classification review, and quotation.",
    s2t: "Design & URA Submission",
    s2d: "Architectural drawings and full URA Conservation Permission application.",
    s3t: "BCA & SCDF Approval",
    s3d: "Structural and fire safety submissions managed in parallel.",
    s4t: "Renovation & Handover",
    s4d: "Heritage-sensitive construction and full site handover."
  },
  faq: {
    title: "Shophouse Renovation FAQs",
    q1: "Do I need URA approval to renovate a Singapore shophouse?",
    a1: "Yes. Conserved shophouses are protected under the URA Conservation Guidelines. Any external changes — and many internal alterations — require <strong>URA Conservation Permission</strong> before works can commence. This includes changes to facades, windows, roofing, five-foot ways, and structural elements. ID Work Studio manages the full URA application process on your behalf.",
    q2: "How much does a shophouse renovation cost in Singapore?",
    a2: "Shophouse renovation costs typically start from <strong>S$150 per square foot</strong> for a basic fit-out, and can reach S$300+ psf for full heritage restoration with premium F&B or hospitality fit-out. Key cost drivers include structural works, M&E complexity, heritage restoration requirements, and specialist conservation materials.",
    q3: "How long does a shophouse renovation take in Singapore?",
    a3: "A typical shophouse renovation takes <strong>6–9 months</strong> from initial consultation to handover. The timeline is primarily driven by the URA Conservation Permission approval process (typically 2–4 months), followed by BCA structural approval and SCDF fire safety clearance. Physical renovation works usually take 3–5 months depending on scope."
  },
  related: { title: "Explore Our Other Commercial Services" },
  cta: {
    serif: "Ready for Your",
    bold: "SHOPHOUSE RENOVATION?",
    btn: "WhatsApp for a Free Consultation"
  },
  sticky: { text: "Free Shophouse Renovation Consultation — WhatsApp Us" }
};

enT["retail_reno_page"] = {
  hero: {
    badge: "Singapore Retail & Mall Store Renovation Specialist",
    serif: "Retail Fit-Out That",
    bold: "DRIVES SALES",
    subtitle: "MCST-compliant retail renovation for Singapore shopping malls. Night-works capable, shopfront-to-stockroom specialists with proven mall management relationships.",
    cta: "Get a Free Site Survey",
    b1: "MCST Submission Managed",
    b2: "Night-Works Capable",
    b3: "Fast Mall Turnaround"
  },
  overview: {
    serif: "Singapore's",
    bold: "RETAIL FIT-OUT SPECIALISTS",
    p1: "ID Work Studio specialises in retail and mall store renovation across Singapore's major shopping centres. We understand the strict MCST fit-out requirements, limited working hour windows, and brand-standard compliance that mall retail demands.",
    p2: "From luxury boutiques in Orchard Road to food hall units and neighbourhood mall stores, our team delivers high-quality retail interiors that maximise sales floor efficiency and brand impact within your MCST timeline.",
    p3: "As an experienced retail contractor, we manage all <strong>MCST fit-out submissions, building plan approvals, and SCDF fire safety requirements</strong> — and we are capable of executing night works to meet your mall's restricted hours.",
    c1t: "MCST Submission Experts",
    c1d: "Full management of mall fit-out permit packages, tenant coordination, and MCST compliance documentation for major Singapore malls.",
    c2t: "Night-Works Capability",
    c2d: "Our team is certified for and experienced in after-hours and overnight renovation works to comply with mall trading hour restrictions.",
    c3t: "Brand-Standard Delivery",
    c3d: "We work directly with brand guidelines and head office specifications to deliver compliant, brand-accurate store environments."
  },
  scope: {
    serif: "What's Included in",
    bold: "RETAIL FIT-OUT",
    i1t: "Shopfront & Display Design",
    i1d: "High-impact shopfronts, window displays, and entrance signage designed to maximise footfall from mall common areas.",
    i2t: "Sales Floor Layout",
    i2d: "Customer journey mapping and floor layout optimised for product discovery, dwell time, and sales conversion.",
    i3t: "Custom Joinery & Displays",
    i3d: "Bespoke display fixtures, shelving, counters, and fitting rooms built to brand specifications and MCST guidelines.",
    i4t: "Lighting Design",
    i4d: "Layered retail lighting — ambient, accent, and task — designed to showcase products and enhance the in-store experience.",
    i5t: "M&E & ACMV Works",
    i5d: "Air-conditioning, electrical, and data works coordinated with the mall's central building management system.",
    i6t: "MCST & Permit Management",
    i6d: "Full MCST fit-out submission, BCA permit applications, and SCDF fire safety approval managed in-house."
  },
  stats: {
    s1u: "per sqft",
    s1l: "Retail fit-out cost range",
    s2u: "weeks",
    s2l: "Typical fit-out timeline",
    s3u: "day",
    s3l: "MCST submission turnaround"
  },
  challenges: {
    serif: "Overcoming",
    bold: "RETAIL RENOVATION CHALLENGES",
    ch_label: "The Challenge",
    sol_label: "Our Solution",
    p1pain: "MCST Compliance",
    p1sol: "We have established relationships with major Singapore mall management teams and understand each mall's specific fit-out requirements.",
    p2pain: "Night-Works Restrictions",
    p2sol: "Our certified night-works team operates during mall off-hours to complete your fit-out without impacting neighbouring tenants.",
    p3pain: "Tight Mall Timelines",
    p3sol: "Detailed Gantt chart planning and dedicated site supervisors ensure your store opens on time, every time."
  },
  trust: { text: "Trusted by retail brands and F&B operators in Singapore's major shopping malls." },
  process: {
    serif: "How We",
    bold: "DELIVER YOUR RETAIL FIT-OUT",
    s1t: "Free Site Survey",
    s1d: "Onsite assessment, MCST requirement review, and full quotation.",
    s2t: "Design & MCST Submission",
    s2d: "Shopfront design, floor plans, and full MCST fit-out permit submission.",
    s3t: "Fit-Out Works",
    s3d: "Night-capable construction by our licensed retail fit-out team.",
    s4t: "Handover & Opening",
    s4d: "MCST joint inspection, defect rectification, and store opening support."
  },
  faq: {
    title: "Retail Renovation FAQs",
    q1: "How much does a retail store fit-out cost in Singapore?",
    a1: "Retail fit-out in Singapore typically costs between <strong>S$65 and S$150 per square foot</strong> for a standard mall store. A basic fit-out starts from S$65 psf. A premium brand-standard fit-out with custom displays and high-end finishes can reach S$150 psf or more. F&B fit-outs with kitchen equipment and NEA compliance add further to the cost.",
    q2: "How long does a mall store fit-out take in Singapore?",
    a2: "A standard mall store fit-out (200–500 sqft) typically takes <strong>6–12 weeks</strong> from design sign-off to store opening. This includes 1–2 weeks for MCST submission review and 4–8 weeks for the physical fit-out. We provide a full Gantt chart timeline before work commences.",
    q3: "Can you do night works for mall renovation in Singapore?",
    a3: "Yes. ID Work Studio is experienced in and certified for night works in Singapore shopping malls. Most major mall management companies (CapitaLand, Frasers, Lendlease) require renovation works outside trading hours. Our night-works team is fully equipped and compliant with MOM Workplace Safety and Health regulations for after-hours construction."
  },
  related: { title: "Explore Our Other Commercial Services" },
  cta: {
    serif: "Ready to Open",
    bold: "YOUR STORE?",
    btn: "WhatsApp for a Free Site Survey"
  },
  sticky: { text: "Free Retail Fit-Out Quote — WhatsApp Us Now" }
};

enT["compliance_reno_page"] = {
  hero: {
    badge: "Singapore Commercial Renovation Permit Specialists",
    serif: "Navigate Singapore's",
    bold: "COMMERCIAL RENOVATION PERMITS",
    subtitle: "Complete MCST, BCA, SCDF fire safety, and LEW permit management for commercial renovation in Singapore — all handled in-house by our registered specialists.",
    cta: "Get a Free Permit Consultation",
    b1: "MCST Submission Management",
    b2: "SCDF Fire Safety Approval",
    b3: "BCA Building Plan Submission",
    b4: "LEW Licensed Electrician"
  },
  intro: {
    serif: "Why Permit Management",
    bold: "MATTERS FOR YOUR PROJECT",
    p1: "Commercial renovation in Singapore involves a complex web of regulatory submissions. Unpermitted works expose tenants to heavy fines, reinstatement orders, and lease disputes — risks that are entirely avoidable with a qualified, BCA-registered contractor.",
    p2: "ID Work Studio manages the complete permit pipeline — from initial MCST fit-out application through to BCA building plan approval, SCDF fire safety certificate, and LEW electrical clearance — so your project proceeds lawfully and on schedule."
  },
  stats: {
    s1: "Max fine for unpermitted works",
    s2: "Max fine per permit breach",
    s3: "Permit agencies we manage",
    s4: "Days saved vs self-submission"
  },
  pillars: {
    serif: "The Four",
    bold: "PERMIT PILLARS",
    step_label: "STEP",
    facts_label: "Key Requirements",
    p1: {
      agency: "MCST / Building Management",
      title: "MCST Fit-Out Permit",
      subtitle: "Required for all works within strata commercial buildings and shopping malls",
      body: "Before any physical work begins in a commercial strata unit, tenants must obtain written approval from the Management Corporation Strata Title (MCST) or building management. Each building has its own fit-out guidelines covering approved materials, working hours, dust and noise controls, and reinstatement obligations.",
      f1: "Submit fit-out drawings to building management",
      f2: "Obtain written approval before work commences",
      f3: "Comply with permitted working hours",
      f4: "Provide security deposit for reinstatement",
      f5: "Final joint inspection required at project completion"
    },
    p2: {
      agency: "Building & Construction Authority",
      title: "BCA Building Plan Submission",
      subtitle: "Required for structural works, change of use, and M&E modifications",
      body: "Works that affect structural integrity, change the approved use of a space, or significantly alter M&E systems require submission to the Building and Construction Authority. A Qualified Person (QP) must certify all structural and fire safety designs.",
      f1: "Qualified Person (QP) required for structural submissions",
      f2: "Building plan approval before structural works",
      f3: "Change of use application via URA and BCA",
      f4: "Temporary Occupation Permit (TOP) may be required",
      f5: "As-built drawings required at project completion"
    },
    p3: {
      agency: "Singapore Civil Defence Force",
      title: "SCDF Fire Safety Submission",
      subtitle: "Required for any modification to fire protection systems or fire compartmentation",
      body: "The Singapore Civil Defence Force regulates all works affecting fire safety systems. This includes relocation of sprinkler heads, smoke detectors, and fire doors — works commonly required in retail fit-outs, office renovations, and F&B conversions.",
      f1: "Fire safety plan submission to SCDF",
      f2: "Licensed Fire Safety Manager (FSM) sign-off required",
      f3: "Sprinkler relocation by PUB-licensed plumber",
      f4: "Fire door compliance with BS 476 / SS standards",
      f5: "Completion certificate from SCDF required at handover"
    },
    p4: {
      agency: "Energy Market Authority",
      title: "LEW Licensed Electrical Works",
      subtitle: "Required for all electrical works above 45 Amps in Singapore commercial spaces",
      body: "All electrical works in Singapore commercial spaces above 45 Amps must be carried out by or under the supervision of a Licensed Electrical Worker (LEW). This includes new consumer switch boards, three-phase power installations, and major M&E additions.",
      f1: "LEW must supervise all works above 45A",
      f2: "Electrical installation licence application to EMA",
      f3: "LEW to certify all new electrical installations",
      f4: "Periodic inspection certificate for existing systems",
      f5: "Electrical as-built drawings required at completion"
    }
  },
  process: {
    serif: "Our",
    bold: "PERMIT MANAGEMENT PROCESS",
    s1t: "Permit Assessment",
    s1d: "Free review of your renovation scope to identify all required permits.",
    s2t: "Document Preparation",
    s2d: "Architectural drawings, structural calculations, and fire safety plans prepared by our QP.",
    s3t: "Submission & Liaison",
    s3d: "We submit and chase all applications with MCST, BCA, SCDF, and EMA.",
    s4t: "Approval & Clearance",
    s4d: "Final approvals obtained and compliance certificates filed before handover."
  },
  faq: {
    title: "Commercial Permit FAQs",
    q1: "Do I need SCDF approval for office renovation in Singapore?",
    a1: "Yes, if your renovation involves any modification to fire protection systems. This includes relocation of <strong>sprinkler heads, smoke detectors, fire doors, or emergency lighting</strong> — all commonly required when partitioning an open-plan office or converting a retail unit. SCDF requires a fire safety plan submission certified by a Licensed Fire Safety Manager before works commence.",
    q2: "What electrical works require a Licensed Electrical Worker (LEW) in Singapore?",
    a2: "All electrical works in Singapore commercial spaces exceeding <strong>45 Amperes</strong> must be carried out by or under the direct supervision of an EMA-licensed LEW. This includes:<br/><br/>• Installation or replacement of consumer switch boards<br/>• Three-phase power installations<br/>• New electrical sub-mains<br/>• Major M&E additions requiring load calculations<br/><br/>ID Work Studio works with in-house LEW-supervised electricians for all commercial M&E works.",
    q3: "What happens if I renovate without the required permits in Singapore?",
    a3: "Unpermitted renovation works carry serious consequences. Under the Building Control Act, fines can reach <strong>S$200,000</strong> for serious breaches. Building management may issue a Stop Work Order, require full reinstatement at the tenant's cost, and forfeit the security deposit. Always engage a BCA-registered contractor to manage your permits.",
    q4: "How long do commercial renovation permit approvals take in Singapore?",
    a4: "Permit timelines vary by authority:<br/><br/>• <strong>MCST fit-out approval:</strong> 1–3 weeks<br/>• <strong>BCA building plan approval:</strong> 4–8 weeks<br/>• <strong>SCDF fire safety approval:</strong> 2–6 weeks<br/>• <strong>EMA electrical licence:</strong> 1–2 weeks<br/><br/>We submit all applications concurrently where possible to minimise overall timeline impact."
  },
  related: { title: "Explore Our Other Commercial Services" },
  cta: {
    serif: "Take the Stress Out of",
    bold: "YOUR RENOVATION PERMITS",
    btn: "WhatsApp for a Free Permit Consultation"
  },
  sticky: { text: "Free Permit Consultation — WhatsApp Us Now" }
};

// ─── ZH translations for the 4 subpages ───────────────────────────────────
const zhT = (resources as any).zh.translation;

zhT["office_reno_page"] = {
  hero: { badge:"新加坡 BCA 注册办公室翻新承包商", serif:"改造您的", bold:"办公空间", subtitle:"为新加坡企业提供一站式办公室翻新与装修服务。从混合办公布局到全套机电工程——准时交付，不超预算。", cta:"获取免费现场勘察", b1:"符合 BCA 及 SCDF 标准", b2:"全程代办许可证提交", b3:"分阶段施工，减少停业时间" },
  overview: { serif:"新加坡", bold:"办公室翻新专家", p1:"ID Work Studio 是一家 BCA 注册承包商，专注于新加坡各地的办公室翻新与商业装修。我们为中小企业、跨国公司及政府机构提供服务，总部位于兀兰。", p2:"每个办公室项目均从免费现场咨询开始——我们评估您的空间，了解运营需求，并制定旨在减少业务中断的装修方案。", p3:"作为 <strong>BCA 注册承包商</strong>，我们代您处理向 BCA、SCDF 和 MCST 的所有提交，为您的团队减轻行政负担。", c1t:"适应混合办公模式", c1d:"我们设计灵活的工作环境，配备共享工位区、协作空间和安静专注区，支持现代混合办公模式。", c2t:"全套机电统筹", c2d:"我们团队内部统筹管理所有机电工程，包括空调、数据布线和照明设计。", c3t:"符合 BCA 及 SCDF 标准", c3d:"我们在实体施工前处理所有 BCA 建筑许可证和 SCDF 消防安全提交，确保项目合规并按时推进。" },
  scope: { serif:"办公室翻新", bold:"包含哪些工程", i1t:"空间规划与布局", i1d:"针对生产力、协作需求及新加坡工作场所安全标准进行优化的平面布局设计。", i2t:"隔断与假天花", i2d:"玻璃隔断、轻钢龙骨系统及T型或石膏板假天花，兼顾隔音与美观效果。", i3t:"电气与数据工程", i3d:"全套机电工程，包括电源插座、数据布线、UPS系统及照明控制。", i4t:"地板与装饰", i4d:"乙烯基地板、架空地板、地毯砖及环氧涂层，满足运营及美观需求。", i5t:"定制木工与家具", i5d:"内置前台、工作站、储物墙及会议室家具，根据您的品牌量身定制。", i6t:"许可证提交", i6d:"全程代办 BCA 建筑方案提交、SCDF 消防安全审批及 MCST 装修许可证管理。" },
  stats: { s1u:"每平方英尺", s1l:"办公室翻新费用范围", s2u:"周", s2l:"典型装修工期", s3u:"周", s3l:"许可证审批周期" },
  challenges: { serif:"常见", bold:"办公室翻新难题", ch_label:"难题", sol_label:"我们的解决方案", p1pain:"超出预算", p1sol:"固定价格合同，附详细分项报价。无隐藏费用，无意外支出。", p2pain:"业务停工", p2sol:"分阶段施工安排及下班后作业，确保您的业务在整个装修期间持续运营。", p3pain:"许可证复杂性", p3sol:"我们内部团队代您处理所有 BCA、SCDF 和 MCST 提交。" },
  trust: { text:"深受新加坡企业、律师事务所及政府机构信赖。" },
  process: { serif:"我们如何", bold:"交付您的办公室", s1t:"免费现场勘察", s1d:"免费现场评估与详细分项报价。", s2t:"设计与审批", s2d:"空间规划、3D效果图及全部许可证提交。", s3t:"翻新施工", s3d:"由我们持牌CoreTrade团队分阶段执行装修。", s4t:"完工移交", s4d:"联合验收、缺陷修正及完整移交。" },
  faq: { title:"办公室翻新常见问题", q1:"2026年新加坡办公室翻新费用是多少？", a1:"新加坡办公室翻新费用通常在<strong>每平方英尺S$50至S$180</strong>之间，取决于装修标准和机电工程范围。基础翻新（油漆、地板、简单隔断）从S$50每平方英尺起。带玻璃隔断、特色墙及智能办公系统的全面高端装修可达S$180每平方英尺或以上。", q2:"新加坡办公室翻新是否需要申请许可证？", a2:"是的。大多数办公室翻新工程需要向以下一个或多个部门申请许可证审批：<br/><br/>• <strong>BCA</strong>（结构性工程及建筑方案变更）<br/>• <strong>SCDF</strong>（消防安全修改，包括洒水器、防火门、应急照明）<br/>• <strong>MCST</strong>（若办公室位于分层建筑或商业大厦内）<br/><br/>作为BCA注册承包商，ID Work Studio代您处理所有提交，在实体施工开始前完成审批。", q3:"新加坡办公室翻新需要多长时间？", a3:"典型办公室翻新（2,000至5,000平方英尺）从现场勘察到移交通常需要<strong>6至12周</strong>。包括1至2周设计、1至3周许可证审批及4至8周翻新施工。规模较大或需结构改动的项目可能需要12至16周。" },
  related: { title:"探索我们的其他商业服务" },
  cta: { serif:"准备好改造", bold:"您的办公室了吗？", btn:"WhatsApp 获取免费现场勘察" },
  sticky: { text:"免费办公室翻新报价 — 立即WhatsApp联系我们" }
};

zhT["shophouse_reno_page"] = {
  hero: { badge:"新加坡 URA 保育店屋翻新专家", serif:"店屋翻新", bold:"专业之选", subtitle:"为新加坡店屋提供完整的URA保育许可证、BCA结构及SCDF消防安全合规服务。专注于丹戎巴葛、牛车水、甘榜格南及驳船码头地区。", cta:"获取免费咨询", b1:"URA 保育许可证", b2:"符合 BCA 及 SCDF 标准", b3:"全程代办提交" },
  overview: { serif:"新加坡", bold:"店屋翻新专家", p1:"新加坡保育店屋的翻新面临独特挑战——每项改动都必须在遗产保育要求与现代功能需求之间取得平衡，同时应对URA、BCA和SCDF的三方审批流程。", p2:"ID Work Studio 已在新加坡各主要保育区完成多个店屋翻新及餐饮装修项目。我们团队深入了解各保育区及风格分类适用的具体URA指引。", p3:"我们管理整个审批流程——从<strong>URA保育许可证</strong>申请，到BCA结构提交及SCDF消防安全审批——为您交付合规且精美修复的空间。", districts_title:"我们服务的保育区", uses_title:"店屋常见用途", uses_desc:"餐饮餐厅与咖啡馆、精品零售、专业办公室、精品酒店、创意工作室及商住混合用途。" },
  scope: { serif:"店屋翻新", bold:"涵盖范围", i1t:"URA保育许可证提交", i1d:"为新加坡所有类别保育店屋代办完整的URA保育许可证申请及联络工作。", i2t:"外立面与遗产修复", i2d:"对原有外立面构件、五脚基、天井及遗产建筑细节进行敏感性修复。", i3t:"结构工程", i3d:"BCA审批的结构改造，包括夹层添建、楼板开孔及承重评估。", i4t:"机电及消防安全", i4d:"全套机电及符合SCDF标准的消防安全安装，包括抑制系统及应急照明。", i5t:"餐饮集油井与通风", i5d:"符合NEA标准的集油井安装、工业厨房通风及餐饮运营排气系统设计。", i6t:"室内装修", i6d:"定制木工、特色墙、地板及照明设计，在尊重遗产特色的同时满足现代运营需求。" },
  stats: { s1u:"每平方英尺起", s1l:"店屋翻新费用", s2u:"个部门", s2l:"代办许可证（URA、BCA、SCDF）", s3u:"个月", s3l:"典型项目工期" },
  challenges: { serif:"应对", bold:"店屋翻新挑战", ch_label:"难题", sol_label:"我们的解决方案", p1pain:"复杂的URA审批", p1sol:"我们团队在各保育区分类的URA保育许可证申请方面经验丰富。", p2pain:"遗产保育与现代功能的平衡", p2sol:"我们设计既满足URA遗产要求，又能实现您所需现代餐饮或办公功能的室内方案。", p3pain:"多部门合规", p3sol:"我们同步协调BCA结构、SCDF消防安全及URA保育提交，最大程度减少延误。" },
  trust: { text:"深受丹戎巴葛、牛车水、甘榜格南及驳船码头保育店屋项目业主信赖。" },
  process: { serif:"我们的", bold:"店屋翻新流程", s1t:"免费咨询", s1d:"现场评估、遗产分级审查与报价。", s2t:"设计与URA提交", s2d:"建筑图纸及完整URA保育许可证申请。", s3t:"BCA及SCDF审批", s3d:"结构及消防安全提交同步处理。", s4t:"翻新与移交", s4d:"注重遗产保育的施工与完整现场移交。" },
  faq: { title:"店屋翻新常见问题", q1:"翻新新加坡店屋是否需要URA批准？", a1:"是的。新加坡保育店屋受URA保育指引保护。任何外部变更——以及许多内部改动——在施工前均需取得<strong>URA保育许可证</strong>。这包括对外立面、窗户、屋顶、五脚基及结构构件的改动。ID Work Studio代您全程管理URA申请流程。", q2:"新加坡店屋翻新费用是多少？", a2:"店屋翻新费用通常从<strong>每平方英尺S$150</strong>起（基础装修），全面遗产修复加高端餐饮或酒店装修可达每平方英尺S$300以上。主要费用影响因素包括结构工程范围、机电复杂程度、遗产修复要求及专业保育材料。", q3:"新加坡店屋翻新需要多长时间？", a3:"典型店屋翻新从初步咨询到移交通常需要<strong>6至9个月</strong>。工期主要取决于URA保育许可证审批流程（通常2至4个月），其次是BCA结构审批及SCDF消防安全许可。实体翻新施工通常需要3至5个月，视工程范围而定。" },
  related: { title:"探索我们的其他商业服务" },
  cta: { serif:"准备好开始您的", bold:"店屋翻新了吗？", btn:"WhatsApp 获取免费咨询" },
  sticky: { text:"免费店屋翻新咨询 — 立即WhatsApp联系我们" }
};

zhT["retail_reno_page"] = {
  hero: { badge:"新加坡零售及商场店面翻新专家", serif:"推动销售增长的", bold:"零售装修", subtitle:"符合MCST标准的新加坡商场店面翻新。具备夜间施工能力，从店面到储物间全程专业服务，拥有成熟的商场管理关系网络。", cta:"获取免费现场勘察", b1:"代办MCST提交", b2:"具备夜间施工能力", b3:"快速商场交付" },
  overview: { serif:"新加坡", bold:"零售装修专家", p1:"ID Work Studio 专注于新加坡各大购物中心的零售及商场店面翻新。我们深刻理解商场零售所要求的严格MCST装修规范、有限施工时间窗口及品牌标准合规要求。", p2:"从乌节路奢侈品精品店到美食广场单位及邻里商场店面，我们团队在您的MCST工期内交付高质量零售室内设计，最大化销售区效率和品牌影响力。", p3:"作为经验丰富的零售装修承包商，我们管理所有<strong>MCST装修许可证提交、建筑方案审批及SCDF消防安全要求</strong>——并具备在商场限制时间内执行夜间施工的能力。", c1t:"MCST提交专家", c1d:"为新加坡主要商场提供完整的装修许可证包管理、租户协调及MCST合规文件服务。", c2t:"夜间施工能力", c2d:"我们团队持证并擅长在商场营业时间外进行下班后及通宵翻新施工，符合商场营业限制规定。", c3t:"品牌标准交付", c3d:"我们直接与品牌指引及总部规格配合，交付符合合规要求且准确呈现品牌形象的店面环境。" },
  scope: { serif:"零售装修", bold:"包含哪些工程", i1t:"店面与橱窗设计", i1d:"高冲击力店面、橱窗陈列及入口标识设计，最大化来自商场公共区域的客流量。", i2t:"销售区布局", i2d:"客户动线规划及地板布局优化，提升商品发现率、停留时间及销售转化率。", i3t:"定制木工与陈列", i3d:"按品牌规格和MCST指引定制的陈列架、货架、收银台及试衣间。", i4t:"照明设计", i4d:"分层式零售照明——环境光、重点照明及功能照明——旨在展示商品并提升店内体验。", i5t:"机电及空调工程", i5d:"与商场中央大厦管理系统协调的空调、电气及数据工程。", i6t:"MCST及许可证管理", i6d:"全程代办MCST装修许可证提交、BCA许可证申请及SCDF消防安全审批。" },
  stats: { s1u:"每平方英尺", s1l:"零售装修费用范围", s2u:"周", s2l:"典型装修工期", s3u:"天", s3l:"MCST提交周转时间" },
  challenges: { serif:"克服", bold:"零售翻新难题", ch_label:"难题", sol_label:"我们的解决方案", p1pain:"MCST合规", p1sol:"我们与新加坡主要商场管理团队建立了成熟关系，深入了解各商场的具体装修要求。", p2pain:"夜间施工限制", p2sol:"我们持证的夜间施工团队在商场营业时间外作业，不影响邻近租户。", p3pain:"紧张的商场工期", p3sol:"详细的甘特图规划及专属现场监督员确保您的店面按时开业。" },
  trust: { text:"深受新加坡各大购物中心零售品牌及餐饮运营商信赖。" },
  process: { serif:"我们如何", bold:"交付您的零售装修", s1t:"免费现场勘察", s1d:"现场评估、MCST要求审查与完整报价。", s2t:"设计与MCST提交", s2d:"店面设计、平面图及完整MCST装修许可证提交。", s3t:"装修施工", s3d:"由我们持牌零售装修团队进行夜间施工。", s4t:"移交与开业", s4d:"MCST联合验收、缺陷修正及开业支持。" },
  faq: { title:"零售翻新常见问题", q1:"新加坡零售店面装修费用是多少？", a1:"新加坡零售装修标准商场店面通常在<strong>每平方英尺S$65至S$150</strong>之间。基础装修从S$65每平方英尺起。配备定制陈列及高端装饰的品牌标准装修可达S$150每平方英尺或以上。含厨房设备及NEA合规要求的餐饮装修费用另行追加。", q2:"新加坡商场店面装修需要多长时间？", a2:"标准商场店面装修（200至500平方英尺）从设计确认到开业通常需要<strong>6至12周</strong>，包括1至2周MCST提交审查及4至8周实体装修施工。我们在施工前提供完整的甘特图时间表。", q3:"你们能在新加坡商场进行夜间施工吗？", a3:"可以。ID Work Studio 在新加坡购物商场夜间施工方面经验丰富并持有相关资质。凯德、Fraser及Lendlease等主要商场管理公司要求在营业时间外进行翻新施工。我们的夜间施工团队完全符合人力部工作场所安全与卫生法规。" },
  related: { title:"探索我们的其他商业服务" },
  cta: { serif:"准备好开设", bold:"您的店面了吗？", btn:"WhatsApp 获取免费现场勘察" },
  sticky: { text:"免费零售装修报价 — 立即WhatsApp联系我们" }
};

zhT["compliance_reno_page"] = {
  hero: { badge:"新加坡商业翻新许可证专家", serif:"轻松应对新加坡", bold:"商业翻新许可证", subtitle:"新加坡商业翻新全套MCST、BCA、SCDF消防安全及LEW许可证管理——由我们的注册专家内部全程代办。", cta:"获取免费许可证咨询", b1:"MCST提交管理", b2:"SCDF消防安全审批", b3:"BCA建筑方案提交", b4:"LEW持牌电气承包商" },
  intro: { serif:"为何许可证管理", bold:"对您的项目至关重要", p1:"新加坡商业翻新涉及复杂的监管提交网络。未经许可的工程使租户面临高额罚款、恢复原状令及租约纠纷——这些风险完全可通过聘请合格的BCA注册承包商来规避。", p2:"ID Work Studio 管理完整的许可证申请流程——从初始MCST装修许可证申请，到BCA建筑方案审批、SCDF消防安全证书及LEW电气许可——确保您的项目合法合规、按时推进。" },
  stats: { s1:"违规工程最高罚款", s2:"每项违规最高罚款", s3:"代办许可证部门数量", s4:"相比自行提交节省天数" },
  pillars: {
    serif:"四大", bold:"许可证支柱", step_label:"步骤", facts_label:"关键要求",
    p1: { agency:"MCST / 大厦管理", title:"MCST装修许可证", subtitle:"分层商业建筑及购物商场内所有工程的必要许可证", body:"在商业分层单位开始任何实体施工前，租户必须获得物业管理机构（MCST）或大厦管理方的书面批准。每栋建筑均有自己的装修指引，涵盖批准材料、施工时间、防尘降噪管控及恢复原状义务。", f1:"向大厦管理方提交装修图纸", f2:"施工前取得书面批准", f3:"遵守批准的施工时间", f4:"提供恢复原状保证金", f5:"项目竣工时需进行最终联合验收" },
    p2: { agency:"建设局", title:"BCA建筑方案提交", subtitle:"结构性工程、用途变更及机电改造的必要程序", body:"影响建筑结构完整性、改变空间批准用途或对机电系统进行重大改动的工程，需向建设局提交申请。所有结构及消防安全设计必须由合格人士（QP）认证。", f1:"结构提交须由合格人士（QP）负责", f2:"结构性工程前须取得建筑方案批准", f3:"通过URA和BCA申请用途变更", f4:"可能需要临时占用许可证（TOP）", f5:"项目竣工时须提交竣工图纸" },
    p3: { agency:"新加坡民防部队", title:"SCDF消防安全提交", subtitle:"对消防保护系统或防火分区进行任何改动的必要程序", body:"新加坡民防部队监管所有影响消防安全系统的工程。这包括洒水器、烟雾探测器和防火门的移位——这些是零售装修、办公室翻新和餐饮改造中常见的工程内容。", f1:"向SCDF提交消防安全方案", f2:"须由持牌消防安全经理（FSM）签署", f3:"洒水器移位须由PUB持牌水管工负责", f4:"防火门须符合BS 476 / SS标准", f5:"移交时须取得SCDF竣工证书" },
    p4: { agency:"能源市场局", title:"LEW持牌电气工程", subtitle:"新加坡商业空间45安培以上电气工程的必要资质", body:"新加坡商业空间45安培以上的电气工程必须由EMA持牌电气工作者（LEW）或在其直接监督下进行。这包括新的总配电箱、三相电源安装及主要机电新增工程。", f1:"45A以上工程须由LEW监督", f2:"向EMA申请电气安装许可证", f3:"LEW须认证所有新电气安装", f4:"现有系统须定期检查证书", f5:"竣工时须提交电气竣工图纸" }
  },
  process: { serif:"我们的", bold:"许可证管理流程", s1t:"许可证评估", s1d:"免费审查您的翻新范围，确认所需许可证。", s2t:"文件准备", s2d:"由我们的合格人士准备建筑图纸、结构计算及消防安全方案。", s3t:"提交与跟进", s3d:"我们向MCST、BCA、SCDF及EMA提交所有申请并积极跟进。", s4t:"审批与结案", s4d:"取得最终审批，在移交前归档所有合规证书。" },
  faq: { title:"商业许可证常见问题", q1:"新加坡办公室翻新是否需要SCDF审批？", a1:"是的，如果您的翻新涉及对消防保护系统的任何改动。这包括<strong>洒水器、烟雾探测器、防火门或应急照明</strong>的移位——这些在开放式办公室隔断或零售单位改造中均为常见工程。SCDF要求在施工前提交由持牌消防安全经理认证的消防安全方案。", q2:"新加坡哪些电气工程需要LEW持牌电气工作者？", a2:"新加坡商业空间超过<strong>45安培</strong>的电气工程必须由EMA持牌LEW负责或在其直接监督下进行。包括：<br/><br/>• 安装或更换总配电箱<br/>• 三相电源安装<br/>• 新电气主线<br/>• 需负荷计算的重大机电新增工程<br/><br/>ID Work Studio 的商业机电工程均由内部LEW监督电工负责。", q3:"在新加坡无证翻新会有什么后果？", a3:"违规翻新工程将面临严重后果。根据《建筑管制法》，严重违规罚款最高可达<strong>S$200,000</strong>。大厦管理方可发出停工令，要求租户自费全面恢复原状，并没收保证金。请务必聘请BCA注册承包商代办许可证。", q4:"新加坡商业翻新许可证审批需要多长时间？", a4:"审批时间因部门而异：<br/><br/>• <strong>MCST装修审批：</strong>1至3周<br/>• <strong>BCA建筑方案审批：</strong>4至8周<br/>• <strong>SCDF消防安全审批：</strong>2至6周<br/>• <strong>EMA电气许可证：</strong>1至2周<br/><br/>我们尽可能同步提交所有申请，最大程度减少总体工期影响。" },
  related: { title:"探索我们的其他商业服务" },
  cta: { serif:"让许可证管理", bold:"不再是难题", btn:"WhatsApp 获取免费许可证咨询" },
  sticky: { text:"免费许可证咨询 — 立即WhatsApp联系我们" }
};


// ─── Insights + article translations ──────────────────────────────────────
enT["insights_page"] = {
  meta: {
    title: "Insights | ID Work Studio Singapore",
    description: "Design-led renovation insights, cost guides and project planning perspectives for homeowners and businesses in Singapore."
  },
  hero: {
    badge: "Design Perspectives",
    title: "Insights",
    subtitle: "Thoughtful perspectives on renovation, interiors and project planning in Singapore — designed to help homeowners and businesses make better decisions."
  },
  intro: {
    eyebrow: "Editorial Perspective",
    title: "Built for Reading, Sharing and Future Growth",
    body: "This page is designed as a crawlable insights hub, not a long scrolling article wall. Each article has its own future-ready URL, making it easier for Google, AI systems and mobile visitors to find the right topic quickly."
  },
  highlights: {
    "1": {
      title: "Crawlable Article Structure",
      desc: "Each article is meant to live on its own URL so it can rank, be cited and be shared independently."
    },
    "2": {
      title: "Better Mobile Experience",
      desc: "Visitors see concise previews instead of long full articles, making the page easier to browse on phones."
    },
    "3": {
      title: "Authority Building",
      desc: "The first three topics are chosen to strengthen GEO, SEO and buyer trust for renovation searches in Singapore."
    }
  },
  listing: {
    eyebrow: "Featured Articles",
    title: "Current Perspectives",
    subtitle: "Five high-impact articles to anchor your authority in Singapore renovation search and future AI citations.",
    read_more: "Read Article"
  },
  articles: {
    "1": {
      category: "Cost Guide",
      title: "Renovation Cost in Singapore (2026 Guide)",
      excerpt: "A direct guide to what homeowners should realistically budget for BTO, resale and condo renovation in Singapore — including what actually drives cost.",
      read_time: "8 min read"
    },
    "2": {
      category: "Planning Guide",
      title: "HDB Renovation Timeline in Singapore",
      excerpt: "A clear look at how long renovation usually takes, where delays happen and what homeowners can do to plan with more confidence.",
      read_time: "7 min read"
    },
    "3": {
      category: "Strategy Guide",
      title: "Biggest Renovation Mistakes Singapore Homeowners Make",
      excerpt: "A practical guide to common renovation pitfalls in Singapore, and how clearer decisions early on can prevent delay, rework and regret.",
      read_time: "7 min read"
    },
    "4": {
      category: "Commercial Cost Guide",
      title: "Commercial Renovation Cost Singapore (2026 Guide)",
      excerpt: "Real contractor pricing for office, retail, F&B and industrial renovation in Singapore — including permits, timeline, hidden costs and common site mistakes.",
      read_time: "9 min read"
    },
    "5": {
      category: "Office Cost Guide",
      title: "Office Renovation Cost Singapore (2026 Guide)",
      excerpt: "A practical office fit-out cost guide for Singapore businesses, covering budget by office size, M&E, data points, partitions, landlord approvals and reinstatement planning.",
      read_time: "8 min read"
    },
    "6": {
      category: "Office Timeline Guide",
      title: "Office Renovation Timeline Singapore: How Long an Office Fit-Out Really Takes",
      excerpt: "A practical Singapore office fit-out schedule showing 3–6, 6–10 and 10–16 week timelines, Gantt sequencing, landlord approval, MCST, SCDF and handover planning.",
      read_time: "9 min read"
    }
  },
  footer_block: {
    eyebrow: "ID Work Studio",
    title: "Design-Led Renovation in Singapore",
    subtitle: "If you are planning a residential or commercial project, we can help you think through design direction, practical scope, budgeting and execution with more clarity.",
    address_label: "Office Address",
    phone_label: "Phone",
    email_label: "Email",
    cta: "WhatsApp Us"
  }
};

zhT["insights_page"] = {
  meta: {
    title: "见解 | ID Work Studio Singapore",
    description: "关于新加坡翻新、室内设计与项目规划的专业见解，帮助住宅与商业客户做出更明智的决定。"
  },
  hero: {
    badge: "设计观点",
    title: "见解",
    subtitle: "围绕新加坡翻新、室内设计与项目规划的深度观点，帮助住宅与商业客户作出更清晰、更从容的决定。"
  },
  intro: {
    eyebrow: "编辑式内容",
    title: "为阅读、分享与未来扩展而设计",
    body: "这个页面被设计成可被搜索引擎与 AI 系统理解的内容枢纽，而不是一整页冗长文章。每篇文章都拥有独立网址，更利于 Google 收录、AI 引用，以及手机用户快速浏览。"
  },
  highlights: {
    "1": {
      title: "独立文章结构",
      desc: "每篇文章都适合放在独立网址之下，便于排名、被引用与单独分享。"
    },
    "2": {
      title: "更适合手机浏览",
      desc: "页面只展示精简摘要，而非整篇长文，让用户在手机上也能轻松浏览其他内容。"
    },
    "3": {
      title: "建立专业权威",
      desc: "首三篇主题专为提升 GEO、SEO 以及新加坡翻新搜索中的客户信任而设。"
    }
  },
  listing: {
    eyebrow: "精选文章",
    title: "当前观点",
    subtitle: "五篇高影响力文章，帮助建立您在新加坡翻新搜索与未来 AI 引用中的专业地位。",
    read_more: "阅读全文"
  },
  articles: {
    "1": {
      category: "费用指南",
      title: "新加坡翻新费用（2026 指南）",
      excerpt: "直接说明 BTO、转售组屋与私人公寓在新加坡翻新的合理预算范围，以及真正影响成本的关键因素。",
      read_time: "约 8 分钟"
    },
    "2": {
      category: "规划指南",
      title: "新加坡 HDB 翻新时间表",
      excerpt: "清楚说明翻新通常需要多久、延误常见在哪里，以及业主可如何更有把握地规划时间。",
      read_time: "约 7 分钟"
    },
    "3": {
      category: "策略指南",
      title: "新加坡业主最常见的翻新错误",
      excerpt: "聚焦新加坡住宅翻新中最常见的错误，并说明如何通过更清晰的前期决策避免延误、返工与后悔。",
      read_time: "约 7 分钟"
    },
    "4": {
      category: "商业费用指南",
      title: "新加坡商业翻新费用（2026 指南）",
      excerpt: "以承包商角度说明新加坡办公室、零售、餐饮与工业空间翻新费用，包括许可证、工期、隐藏成本与常见现场问题。",
      read_time: "约 9 分钟"
    },
    "5": {
      category: "办公室费用指南",
      title: "新加坡办公室翻新费用（2026 指南）",
      excerpt: "为新加坡企业整理办公室装修与 fit-out 预算，涵盖不同面积、机电工程、数据点、隔断、大厦审批及恢复原状规划。",
      read_time: "约 8 分钟"
    },
    "6": {
      category: "办公室工期指南",
      title: "新加坡办公室翻新时间表：办公室 Fit-Out 实际需要多久",
      excerpt: "以新加坡办公室装修实际排期说明 3–6 周、6–10 周与 10–16 周工期、甘特图施工顺序、业主审批、MCST、SCDF 与移交规划。",
      read_time: "约 9 分钟"
    }
  },
  footer_block: {
    eyebrow: "ID Work Studio",
    title: "新加坡设计导向翻新团队",
    subtitle: "若您正在规划住宅或商业项目，我们可协助您更清晰地思考设计方向、工程范围、预算安排与执行节奏。",
    address_label: "办公地址",
    phone_label: "电话",
    email_label: "电子邮件",
    cta: "WhatsApp 联系我们"
  }
};

enT["article_common"] = {
  back_to_insights: "Back to Insights",
  next_article: "Next Article",
  continue_reading: "Continue Reading",
  back_to_start: "Back to Start",
  read_article: "Read Article"
};
zhT["article_common"] = {
  back_to_insights: "返回见解",
  next_article: "下一篇文章",
  continue_reading: "继续阅读",
  back_to_start: "返回起点",
  read_article: "阅读文章"
};

enT["article_office_renovation_cost"] = {
  meta: {
    title: "Office Renovation Cost Singapore (2026 Guide) | ID Work Studio",
    description: "A practical Singapore office renovation cost guide by office size, with fit-out cost ranges, M&E, data cabling, landlord approval, timeline, mistakes and FAQ."
  },
  hero_badge: "Office Cost Guide",
  title: "Office Renovation Cost Singapore (2026 Guide)",
  subtitle: "A practical contractor guide for Singapore businesses planning an office fit-out, covering real budget ranges by office size, key cost drivers, approvals, timeline and mistakes to avoid.",
  read_time: "8 min read",
  intro: "Office renovation in Singapore is different from a general commercial renovation because most of the cost is shaped by workstation planning, meeting rooms, data points, power loading, air-conditioning coordination, glass partitions, landlord rules and reinstatement obligations. A useful budget must look at how the office will actually operate, not only the floor area.",
  direct_answer: {
    title: "How much does office renovation cost in Singapore?",
    body: "Office renovation in Singapore typically costs $50 to $80 psf for a basic fit-out, $80 to $130 psf for a mid-range office, and $130 to $200+ psf for a premium or Grade A office. A 1,000 sqft office commonly budgets around $50,000 to $120,000, while a 3,000 sqft SME office can range from $180,000 to $390,000 depending on partitions, electrical/data points, meeting rooms and air-conditioning work."
  },
  sections: {
    cost_by_size_title: "Office renovation cost by office size",
    cost_by_size_intro: "These are practical Singapore budget ranges for planning before a site visit and detailed measurement.",
    size_rows: {
      "1": ["800–1,200 sqft small office", "$40,000 – $120,000", "Suitable for startups, small teams and simple open-plan layouts with limited enclosed rooms."],
      "2": ["1,500–3,000 sqft SME office", "$120,000 – $390,000", "Common for growing teams with meeting rooms, pantry, storage, manager rooms and more data/power points."],
      "3": ["3,000–5,000 sqft office", "$300,000 – $750,000", "Usually includes more M&E coordination, glass partitions, acoustic rooms, feature reception and staged handover planning."],
      "4": ["5,000 sqft+ corporate office", "$650,000 – $1.5M+", "Premium finishes, workplace strategy, boardrooms, collaboration zones, phone booths and tighter landlord/compliance requirements."]
    },
    psf_title: "Office fit-out cost per square foot",
    psf_rows: {
      "1": ["Basic office fit-out", "$50 – $80 psf", "Open-plan layout, simple flooring, basic lighting, limited carpentry and standard electrical works."],
      "2": ["Mid-range office fit-out", "$80 – $130 psf", "More meeting rooms, glass partitions, pantry, feature walls, better lighting and more electrical/data points."],
      "3": ["Premium office fit-out", "$130 – $200+ psf", "Grade A finishes, acoustic treatment, custom carpentry, boardroom, advanced M&E and stronger branding details."]
    },
    cost_drivers_title: "What affects office renovation cost?",
    cost_drivers: {
      "1": { title: "1. Layout and number of enclosed rooms", body: "Open-plan offices are cheaper than layouts with many meeting rooms, manager rooms, phone booths and focus rooms. Every enclosed room adds partitions, doors, lighting, air-conditioning coordination, power points and sometimes acoustic treatment." },
      "2": { title: "2. Electrical and data points", body: "Office renovation cost rises quickly when the project needs many workstation power points, data points, server points, floor boxes, UPS planning or higher electrical loading. This is one of the most commonly underestimated items." },
      "3": { title: "3. Glass partitions and acoustic rooms", body: "Glass meeting rooms improve light and openness, but cost more than basic drywall partitions. Acoustic glass, double-glazed systems and special door hardware increase the budget further." },
      "4": { title: "4. Air-conditioning modification", body: "Office layouts often require aircon diffuser relocation, return air coordination, thermostat changes or additional FCU planning. These works must follow building rules and can affect both cost and timeline." },
      "5": { title: "5. Landlord, MCST and SCDF requirements", body: "Most commercial buildings require submission before work starts. If fire safety systems, exit routes, sprinklers or fire-rated partitions are affected, SCDF-related review may be needed. Delays in approval can affect handover dates." },
      "6": { title: "6. Reinstatement planning", body: "Tenants should plan reinstatement from the start. Some design choices look attractive now but become expensive to remove at lease end. This is especially important for partitions, flooring, ceiling changes and built-in carpentry." }
    },
    timeline_title: "Typical office renovation timeline in Singapore",
    timeline_rows: {
      "1": ["Design and space planning", "2–3 weeks", "Confirm headcount, layout, meeting rooms, pantry, reception and operational needs."],
      "2": ["Landlord / MCST / building submission", "2–4 weeks", "Prepare drawings, method statements, insurance documents and renovation schedules."],
      "3": ["Site renovation works", "4–8 weeks", "Hacking, partitions, M&E, ceiling, flooring, carpentry, painting, cleaning and handover."],
      "4": ["Defects and move-in coordination", "1–2 weeks", "Final touch-ups, furniture coordination, IT setup and staff move-in planning."]
    },
    mistakes_title: "Common office renovation budget mistakes",
    mistakes: {
      "1": "Signing the lease before checking power supply, air-conditioning capacity, floor loading and landlord renovation rules.",
      "2": "Budgeting only for design finishes while underestimating electrical, data cabling, fire safety and air-conditioning works.",
      "3": "Forgetting reinstatement cost at the end of lease.",
      "4": "Assuming all works can be done during office hours when the building may require noisy works after hours.",
      "5": "Buying loose furniture before confirming workstation spacing, power access and circulation clearance."
    },
    cta_title: "Planning an office renovation?",
    cta_body: "Send us your floor plan, current site photos, headcount and preferred move-in date. ID Work Studio can review the practical scope and prepare an itemised office renovation quote based on your actual site conditions.",
    cta_button: "WhatsApp for Office Renovation Quote"
  },
  faq: {
    title: "Office renovation cost FAQ",
    items: {
      "1": { q: "How much does a 1,000 sqft office renovation cost in Singapore?", a: "A 1,000 sqft office renovation commonly costs around $50,000 to $120,000. A simple open-plan office may stay closer to the lower range, while a layout with meeting rooms, pantry, glass partitions and more M&E points will cost more." },
      "2": { q: "How much should I budget per employee for office renovation?", a: "For early planning, many Singapore offices can budget roughly $6,000 to $15,000 per employee depending on workstation density, room requirements, M&E complexity and furniture specification." },
      "3": { q: "Why are office electrical and data works so expensive?", a: "Each workstation may need power, data, cable routing and sometimes floor boxes. Meeting rooms need AV points, lighting control, power, data and sometimes acoustic or conferencing infrastructure. These items add up quickly." },
      "4": { q: "Do I need landlord or MCST approval for office renovation?", a: "Yes. Most Singapore office buildings require landlord, building management or MCST approval before work starts. The submission usually includes layout drawings, work schedule, contractor insurance and method statements." },
      "5": { q: "Does office renovation need SCDF submission?", a: "SCDF submission may be required if the work affects fire safety systems, exit routes, sprinkler layout, fire alarm devices or fire-rated partitions. Larger offices and layouts with many enclosed rooms need closer review." },
      "6": { q: "How long does office renovation take?", a: "Most office renovation projects take 6 to 10 weeks after the main design direction is confirmed. Larger offices or projects requiring more approvals can take 10 to 16 weeks." },
      "7": { q: "Can office renovation be done after working hours?", a: "Yes, but it depends on the building rules. Night or weekend work may require special approval and can increase labour cost because of restricted working hours and coordination requirements." },
      "8": { q: "What is the biggest hidden cost in office renovation?", a: "The biggest hidden costs are usually electrical/data works, air-conditioning modification, fire safety compliance, after-hours work and reinstatement obligations." },
      "9": { q: "Should I include reinstatement in my office renovation budget?", a: "Yes. Reinstatement should be considered from the start because most leases require the tenant to return the unit to landlord handover condition when the lease ends." },
      "10": { q: "What information is needed for an office renovation quote?", a: "Prepare the floor plan, site photos, headcount, number of meeting rooms, pantry requirements, IT/data needs, preferred move-in date and landlord renovation guidelines if available." }
    }
  }
};

zhT["article_office_renovation_cost"] = {
  meta: {
    title: "新加坡办公室翻新费用（2026 指南）| ID Work Studio",
    description: "新加坡办公室装修费用指南，按办公室面积说明预算、机电工程、数据点、大厦审批、工期、常见错误与 FAQ。"
  },
  hero_badge: "办公室费用指南",
  title: "新加坡办公室翻新费用（2026 指南）",
  subtitle: "为新加坡企业规划办公室装修与 fit-out 的实用承包商指南，涵盖真实预算范围、影响费用的关键因素、审批、工期与常见错误。",
  read_time: "约 8 分钟",
  intro: "办公室翻新不同于一般商业翻新，因为费用很大程度取决于员工座位规划、会议室、数据点、电力负荷、空调协调、玻璃隔断、大厦规定及租约结束时的恢复原状责任。一个有用的预算不能只看面积，也要看办公室实际如何运作。",
  direct_answer: {
    title: "新加坡办公室翻新费用是多少？",
    body: "新加坡办公室翻新通常为基础 fit-out 每平方英尺 $50 至 $80，中档办公室每平方英尺 $80 至 $130，高端或 Grade A 办公室每平方英尺 $130 至 $200 以上。1,000 平方英尺办公室常见预算约 $50,000 至 $120,000；3,000 平方英尺 SME 办公室则可能在 $180,000 至 $390,000，视隔断、机电、数据点、会议室和空调工程而定。"
  },
  sections: {
    cost_by_size_title: "按办公室面积划分的装修费用",
    cost_by_size_intro: "以下为新加坡办公室在现场勘查及详细测量前，可用于规划的实际预算范围。",
    size_rows: {
      "1": ["800–1,200 平方英尺小型办公室", "$40,000 – $120,000", "适合初创公司、小团队及简单开放式布局，封闭房间较少。"],
      "2": ["1,500–3,000 平方英尺 SME 办公室", "$120,000 – $390,000", "常见于成长型团队，包含会议室、茶水间、储物区、经理房及更多数据/电源点。"],
      "3": ["3,000–5,000 平方英尺办公室", "$300,000 – $750,000", "通常需要更多机电协调、玻璃隔断、隔音房、接待区特色设计及分阶段移交规划。"],
      "4": ["5,000 平方英尺以上企业办公室", "$650,000 – $1.5M+", "高端材料、职场策略规划、董事会议室、协作区、电话亭及更严格的大厦/合规要求。"]
    },
    psf_title: "办公室 fit-out 每平方英尺费用",
    psf_rows: {
      "1": ["基础办公室 fit-out", "$50 – $80 psf", "开放式布局、简单地板、基础照明、有限木工及标准电气工程。"],
      "2": ["中档办公室 fit-out", "$80 – $130 psf", "更多会议室、玻璃隔断、茶水间、特色墙、更好的照明及更多电源/数据点。"],
      "3": ["高端办公室 fit-out", "$130 – $200+ psf", "Grade A 材料、隔音处理、定制木工、董事会议室、复杂机电及更强品牌设计。"]
    },
    cost_drivers_title: "影响办公室翻新费用的因素",
    cost_drivers: {
      "1": { title: "1. 布局与封闭房间数量", body: "开放式办公室通常比有大量会议室、经理房、电话亭和专注室的布局便宜。每个封闭房间都会增加隔断、门、照明、空调协调、电源点，有时还需要隔音处理。" },
      "2": { title: "2. 电气与数据点", body: "当项目需要大量工作位电源、数据点、服务器点、地插、UPS 规划或更高电力负荷时，费用会快速上升。这是办公室装修最常被低估的项目之一。" },
      "3": { title: "3. 玻璃隔断与隔音房", body: "玻璃会议室能提升采光和通透感，但比普通石膏板隔断更贵。隔音玻璃、双层玻璃系统及特殊门五金会进一步提高预算。" },
      "4": { title: "4. 空调修改", body: "办公室布局常需要移动出风口、协调回风、调整温控器或规划额外 FCU。这些工程必须符合大厦规定，并会影响费用和工期。" },
      "5": { title: "5. 业主、MCST 与 SCDF 要求", body: "大多数商业大厦要求开工前提交申请。若影响消防系统、逃生通道、喷淋或防火隔断，可能需要 SCDF 相关审查。审批延误会影响移交日期。" },
      "6": { title: "6. 恢复原状规划", body: "租户应从一开始就考虑恢复原状。有些设计当前看起来理想，但租约结束时拆除成本很高，特别是隔断、地板、天花改动和固定木工。" }
    },
    timeline_title: "新加坡办公室翻新常见工期",
    timeline_rows: {
      "1": ["设计与空间规划", "2–3 周", "确认员工人数、布局、会议室、茶水间、接待区及运营需求。"],
      "2": ["业主 / MCST / 大厦提交", "2–4 周", "准备图纸、施工方法说明、保险文件及施工时间表。"],
      "3": ["现场装修工程", "4–8 周", "拆除、隔断、机电、天花、地板、木工、油漆、清洁及移交。"],
      "4": ["缺陷修正与搬迁协调", "1–2 周", "最终修补、家具协调、IT 设置及员工搬迁安排。"]
    },
    mistakes_title: "常见办公室装修预算错误",
    mistakes: {
      "1": "签租约前没有检查电力供应、空调容量、楼板承重及大厦装修规定。",
      "2": "只为设计材料做预算，却低估电气、数据布线、消防安全及空调工程。",
      "3": "忘记租约结束时的恢复原状费用。",
      "4": "假设所有工程都能在办公时间进行，但大厦可能规定噪音工程只能在下班后施工。",
      "5": "在确认工作位距离、电源位置及走道空间前就购买办公家具。"
    },
    cta_title: "正在规划办公室翻新？",
    cta_body: "把平面图、现场照片、员工人数和预期搬入日期发给我们。ID Work Studio 可根据实际现场条件评估工程范围，并准备办公室装修明细报价。",
    cta_button: "WhatsApp 获取办公室翻新报价"
  },
  faq: {
    title: "办公室翻新费用常见问题",
    items: {
      "1": { q: "新加坡 1,000 平方英尺办公室翻新多少钱？", a: "1,000 平方英尺办公室翻新通常约 $50,000 至 $120,000。简单开放式办公室会接近较低范围；若包含会议室、茶水间、玻璃隔断和更多机电点位，费用会更高。" },
      "2": { q: "办公室装修每位员工应预算多少？", a: "早期规划时，新加坡办公室可粗略按每位员工 $6,000 至 $15,000 预算，视工作位密度、房间需求、机电复杂度及家具规格而定。" },
      "3": { q: "为什么办公室电气和数据工程费用高？", a: "每个工作位可能需要电源、数据、走线，有时还需要地插。会议室也需要 AV 点、照明控制、电源、数据以及会议设备基础设施，因此费用会快速累积。" },
      "4": { q: "办公室翻新需要业主或 MCST 批准吗？", a: "需要。大多数新加坡办公室大厦在开工前都要求业主、大厦管理或 MCST 批准。提交内容通常包括布局图、施工时间表、承包商保险和施工方法说明。" },
      "5": { q: "办公室翻新需要 SCDF 提交吗？", a: "如果工程影响消防系统、逃生通道、喷淋、火警设备或防火隔断，可能需要 SCDF 提交。面积较大或封闭房间较多的办公室更需要仔细审查。" },
      "6": { q: "办公室翻新需要多久？", a: "大多数办公室翻新在主要设计方向确认后需要 6 至 10 周。较大办公室或审批要求较多的项目可能需要 10 至 16 周。" },
      "7": { q: "办公室翻新可以在下班后施工吗？", a: "可以，但取决于大厦规定。夜间或周末施工可能需要特别批准，并因施工时间受限和协调要求而增加人工费用。" },
      "8": { q: "办公室翻新最大的隐藏成本是什么？", a: "常见隐藏成本包括电气/数据工程、空调修改、消防安全合规、下班后施工及恢复原状责任。" },
      "9": { q: "办公室装修预算需要包含恢复原状吗？", a: "需要。多数租约要求租户在租约结束时把单位恢复至业主要求的交还状态，因此恢复原状应在一开始就纳入考虑。" },
      "10": { q: "办公室装修报价需要提供什么资料？", a: "请准备平面图、现场照片、员工人数、会议室数量、茶水间需求、IT/数据需求、预期搬入日期，以及如有的大厦装修指引。" }
    }
  }
};

enT["article_renovation_cost_2026"] = {
  meta: {
    title: "Renovation Cost in Singapore (2026 Guide) | ID Work Studio",
    description: "A practical 2026 guide to renovation cost in Singapore, covering BTO, resale and condo budgets, key cost drivers, hidden expenses and smarter planning."
  },
  hero_badge: "Cost Guide",
  title: "Renovation Cost in Singapore (2026 Guide)",
  subtitle: "A practical guide to what homeowners in Singapore should realistically budget for BTO, resale and condo renovation in 2026, and what actually drives cost.",
  read_time: "8 min read",
  intro: "Renovation cost in Singapore is not determined by size alone. In practice, the final budget depends on a combination of scope, design complexity, material grade, carpentry detailing, wet works and whether the property is a new BTO flat or an older resale unit.",
  sections: {
    costs_title: "How much does renovation cost in Singapore?",
    costs_intro: "In 2026, most homeowners in Singapore can expect renovation budgets to fall within these broad ranges:",
    table_headers: { type: "Home Type", budget: "Typical Budget Range" },
    table_rows: {
      "1": ["3-room HDB (BTO)", "$40,000 – $52,000"],
      "2": ["4-room HDB (BTO)", "$50,000 – $60,000"],
      "3": ["5-room HDB (BTO)", "$60,000 – $75,000"],
      "4": ["3-room HDB (Resale)", "$55,000 – $68,000"],
      "5": ["4-room HDB (Resale)", "$70,000 – $81,000"],
      "6": ["5-room HDB (Resale)", "$80,000 – $98,000"],
      "7": ["Condo / Private Apartment", "$40,000 – $105,000+"]
    },
    tiers_intro: "In simple terms, many homeowners in Singapore end up in one of three broad tiers:",
    tiers: {
      "1": "$30K–$50K for a more basic renovation",
      "2": "$50K–$80K for a more standard, well-rounded renovation",
      "3": "$80K+ for a premium, design-led renovation with more customisation"
    },
    drivers_title: "What actually drives renovation cost?",
    drivers_intro: "Most homeowners assume renovation cost is mainly about floor area. In reality, the strongest cost drivers are usually carpentry, wet works, material selections and how ambitious the design direction is.",
    carpentry_title: "1. Carpentry",
    carpentry_p1: "Carpentry is often one of the largest cost components in a Singapore renovation. This includes kitchen cabinets, wardrobes, TV consoles, storage walls, study areas and feature-built joinery.",
    carpentry_p2: "But carpentry cost is not just about quantity. It is heavily affected by design complexity and material choice. For example, curved corners or rounded edges require more specialised fabrication and finishing than standard sharp-corner cabinetry, so they cost more.",
    carpentry_p3: "Laminate selection also influences pricing. Most laminates in Singapore come in 4ft x 8ft sheets, while some higher-end options are available in 4ft x 10ft sheets. Larger sheets allow for cleaner, more seamless carpentry because they reduce visible break lines, but they also increase material cost.",
    kitchen_title: "2. Kitchen cabinet systems and worktops",
    kitchen_p1: "Kitchen renovation is one of the most cost-sensitive areas in any home. The cabinet bodies, door finishes, backing area and worktop material all affect price.",
    kitchen_p2: "One key factor is the worktop selection. In the past, quartz was the more common choice. Today, more homeowners are moving toward sintered stone because of its durability, heat resistance and more premium look. In most cases, sintered stone comes at a higher price point than standard quartz.",
    kitchen_p3: "Another cost factor is the backing area — the space between the top and bottom kitchen cabinets. This area may be finished in tiles, glass, quartz or sintered stone. Once the backing is upgraded to a more premium full-height surface, both material and labour costs go up.",
    wetworks_title: "3. Wet works",
    wetworks_p1: "Wet works typically include bathrooms, kitchen tiling, waterproofing, screeding and plumbing-related coordination. These items can take up a meaningful portion of the budget, especially in resale flats where existing conditions are older or less predictable.",
    tiles_title: "4. Tiles, marble and country of origin",
    tiles_p1: "Tile and stone pricing is influenced by origin, finishing and size. Materials imported from Italy, Spain and other European countries generally cost more than tiles from Malaysia or China. The price difference often comes from manufacturing quality, brand positioning and finish consistency.",
    tiles_p2: "Tile size also affects cost. Many homeowners use 600 x 600 mm tiles, while some prefer 600 x 1,200 mm or even larger formats. Larger tiles usually create a cleaner and more premium visual effect, but they also require more precise handling and more skilled labour to install properly. As a result, both the tile price and the laying cost tend to increase when tile sizes become larger.",
    elec_title: "5. Electrical and plumbing upgrades",
    elec_p1: "Additional lighting points, concealed wiring, replacement of older systems and new plumbing runs can all add to the final cost — especially for resale flats.",
    bto_vs_resale_title: "BTO vs resale: why costs differ so much",
    bto_vs_resale_intro: "One of the biggest cost misunderstandings in Singapore is the difference between a BTO renovation and a resale renovation.",
    bto_title: "BTO renovation",
    bto_p1: "BTO flats usually start as a relatively blank canvas. There is generally less demolition, fewer concealed issues and lower site uncertainty. That helps keep renovation budgets more controlled.",
    resale_title: "Resale renovation",
    resale_p1: "Resale flats often come with hidden infrastructure work before aesthetic upgrading can even begin. That may include hacking dated finishes, replacing older wiring, changing water pipes, waterproofing wet areas and levelling surfaces after demolition.",
    resale_p2: "In practice, resale renovation can easily cost 20% to 40% more than a comparable BTO renovation because more of the budget goes into making the unit workable before the design layer is added.",
    callout_title: "A simple way to think about it",
    callout_body: "If a BTO renovation sits around $55,000, the resale equivalent can quickly move into the $70,000 to $80,000 range once hacking, rewiring, plumbing replacement and waterproofing are added in.",
    overspend_title: "Where homeowners overspend",
    overspend_intro: "Based on common renovation patterns in Singapore, homeowners usually overspend in the same few areas:",
    overspend_items: {
      "1": "Overbuilding carpentry that looks impressive on paper but is not truly needed for daily use",
      "2": "Following trends too aggressively without thinking about maintenance, practicality or how quickly those details may date",
      "3": "Changing layout decisions too late, which often leads to variation orders and rework",
      "4": "Choosing the lowest quotation without understanding material specifications, omissions or hidden cost exposure later"
    },
    budget_title: "How to plan your renovation budget more realistically",
    budget_intro: "A better renovation budget usually starts with clarity, not guesswork.",
    budget_cards: {
      "1": "Start with lifestyle needs before design references",
      "2": "Set a budget range, not a single fixed number",
      "3": "Prioritise layout, function and durability first",
      "4": "Keep decorative upgrades proportionate to daily use",
      "5": "Allow for site realities, especially in resale units",
      "6": "Reserve a contingency buffer of 10% to 15%"
    },
    budget_p2: "Instead of saying, “I want to spend $50,000,” it is usually more practical to think in ranges — for example, “I am comfortable between $50,000 and $65,000, depending on design priorities.” That gives the project more room to stay realistic.",
    expectation_title: "A more realistic expectation for Singapore homeowners",
    expectation_intro: "In the current market, many homeowners end up around these practical ranges:",
    expectation_items: {
      "1": "$50,000–$70,000 for a comfortable, well-designed home",
      "2": "$70,000–$90,000 for more customised interiors and stronger material upgrades"
    },
    expectation_p2: "Budgets below that range are still possible, but they usually involve more compromise in carpentry scope, material choice, or wet-work ambition. Budgets above that range often reflect design ambition rather than basic necessity.",
    final_title: "Final perspective",
    final_p1: "Renovation cost in Singapore is not only about square footage or headline price. It reflects how you live, how much customisation you want, how refined the material palette is and how much hidden groundwork the property requires.",
    final_p2: "Most homeowners do not regret spending more when the planning is thoughtful. More often, they regret unclear budgeting, weak early decisions and not understanding where the real cost drivers were from the start.",
    final_p3: "A better renovation does not always mean the most expensive one. It usually means a project where the budget, design priorities and day-to-day lifestyle have been aligned properly from the beginning."
  },
  next_title: "HDB Renovation Timeline in Singapore"
};

zhT["article_renovation_cost_2026"] = {
  meta: {
    title: "新加坡翻新费用（2026 指南）| ID Work Studio",
    description: "2026 年新加坡翻新费用实用指南，涵盖 BTO、转售组屋与私人公寓预算范围、主要成本驱动因素、隐藏费用与更稳妥的预算规划方式。"
  },
  hero_badge: "费用指南",
  title: "新加坡翻新费用（2026 指南）",
  subtitle: "帮助新加坡业主更现实地规划 BTO、转售组屋与私人公寓翻新预算，并理解真正影响费用的关键因素。",
  read_time: "约 8 分钟",
  intro: "新加坡的翻新费用并不单纯由面积决定。实际预算通常取决于工程范围、设计复杂度、材料等级、木作细节、湿作工程，以及房屋是全新 BTO 还是较旧的转售单位。",
  sections: {
    costs_title: "新加坡翻新费用大概是多少？",
    costs_intro: "在 2026 年，新加坡大多数业主的翻新预算大致会落在以下区间：",
    table_headers: { type: "房屋类型", budget: "常见预算范围" },
    table_rows: {
      "1": ["3 房式组屋（BTO）", "$40,000 – $52,000"],
      "2": ["4 房式组屋（BTO）", "$50,000 – $60,000"],
      "3": ["5 房式组屋（BTO）", "$60,000 – $75,000"],
      "4": ["3 房式组屋（转售）", "$55,000 – $68,000"],
      "5": ["4 房式组屋（转售）", "$70,000 – $81,000"],
      "6": ["5 房式组屋（转售）", "$80,000 – $98,000"],
      "7": ["私人公寓 / 住宅公寓", "$40,000 – $105,000+"]
    },
    tiers_intro: "简单来说，新加坡大多数业主最终会落在以下三个预算层级之一：",
    tiers: {
      "1": "$30K–$50K：较基础的翻新",
      "2": "$50K–$80K：较完整、较平衡的翻新",
      "3": "$80K 以上：更高定制度的设计导向翻新"
    },
    drivers_title: "真正推高费用的是什么？",
    drivers_intro: "很多业主以为翻新费用主要看面积。实际上，更大的成本驱动因素通常是木作、湿作工程、材料选择，以及设计方向有多讲究。",
    carpentry_title: "1. 木作",
    carpentry_p1: "在新加坡住宅翻新中，木作往往是最大的成本项目之一，包括厨房橱柜、衣柜、电视柜、储物墙、书桌区以及各类定制柜体。",
    carpentry_p2: "但木作费用并不只取决于数量，更取决于设计复杂度与材料选择。例如，圆角或弧形收边所需的制作与收口工艺，比一般直角柜体更复杂，因此费用也更高。",
    carpentry_p3: "饰面板材的规格也会影响价格。新加坡常见的饰面板多为 4ft x 8ft，也有部分较高端的 4ft x 10ft 规格。板材越大，越能减少接缝，令整体木作看起来更完整、更高级，但材料成本也会相应提高。",
    kitchen_title: "2. 厨房柜体系统与台面材料",
    kitchen_p1: "厨房通常是整屋翻新中最容易拉开预算差距的空间。柜体结构、门板、墙身背板以及台面材料都会影响最终价格。",
    kitchen_p2: "其中一个关键因素是台面选择。过去较常见的是石英石，如今越来越多业主选择岩板，因为它更耐热、耐刮，也更有高级感。大多数情况下，岩板的价格会高于一般石英石。",
    kitchen_p3: "另一个成本因素是厨房上、下柜之间的背板区域。这个区域可以选择瓷砖、玻璃、石英石或岩板。若升级为更高级的全高材质，材料和施工费用都会增加。",
    wetworks_title: "3. 湿作工程",
    wetworks_p1: "湿作工程通常包括浴室、厨房铺砖、防水、找平以及与水喉相关的配合工作。对于转售单位而言，由于原有条件较旧或较难预判，这部分预算往往更高。",
    tiles_title: "4. 瓷砖、大理石与产地差异",
    tiles_p1: "瓷砖和石材的价格会受到产地、表面处理与尺寸影响。来自意大利、西班牙等欧洲国家的材料，通常会比马来西亚或中国的产品更贵，这往往与工艺、品牌定位及表面一致性有关。",
    tiles_p2: "瓷砖尺寸同样会影响价格。很多业主会使用 600 x 600 mm，也有人偏好 600 x 1,200 mm 甚至更大的大板砖。尺寸越大，视觉上越完整高级，但对搬运和铺贴工艺要求也更高，因此材料与人工费用通常都会上升。",
    elec_title: "5. 电气与水喉升级",
    elec_p1: "增加灯位、隐藏式走线、更换旧系统以及新增水喉路线，都会推高最终预算，尤其在转售单位中更为常见。",
    bto_vs_resale_title: "BTO 与转售：为什么费用差这么多？",
    bto_vs_resale_intro: "在新加坡，很多业主最容易误判的，就是 BTO 翻新与转售翻新之间的差异。",
    bto_title: "BTO 翻新",
    bto_p1: "BTO 通常是一张较为空白的画布，拆除工程较少、隐藏问题较少、现场变数也较低，因此整体预算更容易控制。",
    resale_title: "转售翻新",
    resale_p1: "转售单位在进入外观与设计层之前，往往先要处理大量基础问题，例如拆除旧饰面、重做旧电线、更换老化水管、湿区防水以及拆除后的地面找平。",
    resale_p2: "实际操作中，转售翻新的费用往往会比相近规格的 BTO 高出 20% 至 40%，因为预算中更大一部分必须先花在“把单位恢复到可翻新状态”。",
    callout_title: "可以这样理解",
    callout_body: "如果一套 BTO 的翻新预算约为 $55,000，那么当项目加入拆除、重拉电线、更换水管及防水等工程后，对应的转售单位预算很快就会来到 $70,000 至 $80,000。",
    overspend_title: "业主最容易超支的地方",
    overspend_intro: "根据新加坡常见的翻新情况，业主最容易在以下几类项目上超支：",
    overspend_items: {
      "1": "做了太多看起来很厉害、但日常并不真正需要的木作",
      "2": "过度追随趋势，而忽略了保养、实用性以及风格更新速度",
      "3": "太迟才改变布局决策，导致变更单与返工",
      "4": "只选最便宜的报价，而没有看清材料规格、遗漏项目与后续追加风险"
    },
    budget_title: "怎样更现实地规划翻新预算？",
    budget_intro: "更好的翻新预算，通常不是从猜数字开始，而是从清晰度开始。",
    budget_cards: {
      "1": "先从生活方式与实际需求出发，而不是先看图片",
      "2": "设定预算区间，而不是只给一个死数字",
      "3": "优先把预算放在布局、功能与耐用性上",
      "4": "把装饰性升级控制在真正有意义的范围内",
      "5": "尤其在转售单位中，预留应对现场情况的空间",
      "6": "预留 10% 到 15% 的应急备用金"
    },
    budget_p2: "与其说“我只想花 $50,000”，更实际的想法通常是：“如果设计重点合理，我可以接受 $50,000 到 $65,000 的区间。” 这样项目会更容易保持现实与可控。",
    expectation_title: "对新加坡业主来说，更现实的预算预期",
    expectation_intro: "在目前市场中，很多业主最后会落在以下区间：",
    expectation_items: {
      "1": "$50,000–$70,000：舒适、完整且兼顾设计感的住宅",
      "2": "$70,000–$90,000：更高定制度与更明显材料升级的住宅"
    },
    expectation_p2: "低于这个区间并非不可能，但通常意味着在木作范围、材料选择或湿作工程上需要更多取舍。高于这个区间则通常反映的是设计野心，而不只是基本需要。",
    final_title: "最后的观点",
    final_p1: "在新加坡，翻新费用不只是面积或表面报价的问题。它更反映了您的生活方式、定制度、材料质感，以及房屋本身需要多少前期基础处理。",
    final_p2: "大多数业主并不会后悔花得更多；他们更常后悔的是：前期预算不够清晰、决定做得太晚，或一开始没有真正理解费用是如何被推高的。",
    final_p3: "更好的翻新，不一定是最贵的翻新，而是预算、设计重点与日常生活方式从一开始就被妥善对齐的翻新。"
  },
  next_title: "新加坡 HDB 翻新时间表"
};

enT["article_hdb_timeline"] = {
  meta: {
    title: "HDB Renovation Timeline in Singapore (2026 Guide) | ID Work Studio",
    description: "Understand how long HDB renovation takes in Singapore, including real timelines, delays, and when you can actually move in."
  },
  hero_badge: "Planning Guide",
  title: "HDB Renovation Timeline in Singapore (2026 Guide)",
  subtitle: "A practical breakdown of how long renovation really takes, where delays happen, and when you can realistically move in.",
  read_time: "7 min read",
  sections: {
    duration_title: "How long does HDB renovation take?",
    duration_intro: "In Singapore, most renovation timelines fall within these ranges:",
    duration_items: {
      "1": "BTO: 8–12 weeks",
      "2": "Resale: 10–16 weeks"
    },
    duration_p2: "BTO flats are faster due to fewer structural changes, while resale units require additional work such as hacking, rewiring and plumbing upgrades.",
    breakdown_title: "Typical renovation timeline breakdown",
    phases: {
      "1": { title: "1. Planning & Design (2–4 weeks)", desc: "Layout planning, design concept, quotation and material selection." },
      "2": { title: "2. Permit Approval (1–3 weeks)", desc: "Submission of HDB permits, especially for hacking and wet works." },
      "3": { title: "3. Hacking & Demolition (3–7 days)", desc: "Mainly for resale units." },
      "4": { title: "4. Wet Works (2–3 weeks)", desc: "Tiling, waterproofing and floor preparation." },
      "5": { title: "5. Carpentry Production (3–5 weeks)", desc: "Fabrication is done off-site and often overlaps with other phases of the renovation timeline." },
      "6": { title: "6. Installation (2–3 weeks)", desc: "Carpentry, electrical and painting." },
      "7": { title: "7. Final Touch & Handover (1 week)", desc: "Defect rectification and cleaning." }
    },
    movein_title: "When can you actually move in?",
    movein_p1: "Most homeowners cannot move in immediately after completion. You should allow an additional 1–2 weeks for cleaning, airing and final adjustments.",
    delays_title: "Why renovations get delayed",
    delays: {
      "1": {
        title: "1. Project sequencing issues",
        p1: "Renovation follows a Gantt chart sequence. If one stage is delayed, everything after it shifts. For example, if aircon piping is not completed, tiling and carpentry may be delayed as well.",
        p2: "One common example is the kitchen sink. If the project uses an undermount sink, the sink needs to be installed before the countertop can be placed. If the sink is delayed, the kitchen installation is delayed too."
      },
      "2": {
        title: "2. External contractors",
        p1: "Engaging separate vendors often leads to coordination issues and schedule misalignment. If one external contractor cannot keep to the project sequence, the rest of the work can be pushed back."
      },
      "3": {
        title: "3. Owner-supplied materials",
        p1: "Items sourced from overseas can be delayed or incorrect, which stops installation work. This has become increasingly common when homeowners order kitchen systems, taps, accessories or fixtures from overseas platforms."
      },
      "4": {
        title: "4. Late decisions & design changes",
        p1: "Indecision, adding features late or changing cabinet designs midway can cause major delays. When clients continue exploring materials for too long, or cannot agree on finishes, the timeline is affected because drawings, procurement and coordination cannot be finalised.",
        p2: "Small changes can also create large ripple effects. If a cabinet layout is revised after lighting or electrical points have already been planned, those drawings and sequences may need to be redone."
      }
    },
    avoid_title: "How to avoid delays",
    avoid_items: {
      "1": "Finalise design early",
      "2": "Understand project sequencing",
      "3": "Confirm critical materials early",
      "4": "Avoid too many contractors",
      "5": "Align decisions early"
    },
    final_title: "Final perspective",
    final_p1: "Renovation delays are rarely caused by construction itself. More often, they come from decisions, coordination and planning. When the sequence is understood clearly and key materials are confirmed early, the move-in timeline becomes much more predictable."
  },
  next_title: "Biggest Renovation Mistakes Singapore Homeowners Make"
};

zhT["article_hdb_timeline"] = {
  meta: {
    title: "新加坡 HDB 翻新时间表（2026 指南）| ID Work Studio",
    description: "了解新加坡 HDB 翻新一般需要多久、常见延误原因，以及您大概何时可以真正入住。"
  },
  hero_badge: "规划指南",
  title: "新加坡 HDB 翻新时间表（2026 指南）",
  subtitle: "以更实际的角度拆解翻新一般需要多久、延误通常发生在哪里，以及您何时可以较安心地安排入住。",
  read_time: "约 7 分钟",
  sections: {
    duration_title: "HDB 翻新一般需要多久？",
    duration_intro: "在新加坡，大多数住宅翻新时间大致落在以下区间：",
    duration_items: {
      "1": "BTO：8–12 周",
      "2": "转售组屋：10–16 周"
    },
    duration_p2: "BTO 通常较快，因为结构改动较少；转售单位则往往需要额外的拆除、重拉电线与水喉升级工程。",
    breakdown_title: "常见翻新时间拆解",
    phases: {
      "1": { title: "1. 规划与设计（2–4 周）", desc: "包括空间布局、设计方向、报价讨论及材料选择。" },
      "2": { title: "2. 许可证审批（1–3 周）", desc: "提交 HDB 所需许可证，尤其是拆改和湿作工程相关审批。" },
      "3": { title: "3. 拆除与清拆（3–7 天）", desc: "主要发生在转售单位。" },
      "4": { title: "4. 湿作工程（2–3 周）", desc: "包括铺砖、防水及地面处理。" },
      "5": { title: "5. 木作生产（3–5 周）", desc: "木作通常在工厂场外制作，并与其他工程阶段交叉进行。" },
      "6": { title: "6. 安装阶段（2–3 周）", desc: "包括木作安装、电气及油漆等工程。" },
      "7": { title: "7. 收尾与交付（1 周）", desc: "进行修补、清洁及最终交付准备。" }
    },
    movein_title: "什么时候才算真正可以入住？",
    movein_p1: "大多数业主并不能在工程完工当天立刻入住。一般还需要额外预留 1–2 周用于清洁、散味和最后的小修整。",
    delays_title: "翻新为什么会延误？",
    delays: {
      "1": {
        title: "1. 工序衔接问题",
        p1: "翻新通常按甘特图工序推进。如果前一项工作延误，后面的工程就会整体往后推。例如冷气铜管若未及时完成，铺砖和木作安装都可能受到影响。",
        p2: "厨房水槽就是常见例子之一。如果项目使用下嵌式水槽，水槽必须先到位并安装好，台面才能继续施工。若水槽延误，整个厨房安装也会被拖慢。"
      },
      "2": {
        title: "2. 外部承包商介入",
        p1: "当业主分别找不同供应商处理某些项目时，往往更容易出现协调失衡与时间错位。只要其中一方无法按工序配合，后续工作就会被拖延。"
      },
      "3": {
        title: "3. 业主自购材料",
        p1: "从海外采购的材料可能出现延误、规格不合或配件不齐，直接导致安装无法进行。现在越来越多业主会自行购买厨房系统、水龙头、卫浴配件或其他五金，这类问题也因此更常见。"
      },
      "4": {
        title: "4. 太迟做决定或中途改设计",
        p1: "材料一直定不下来、临时加功能，或木作设计做到一半又改变，都会造成明显延误。若夫妻双方迟迟无法对材料、颜色或风格达成一致，图纸、采购与工序安排都难以定案。",
        p2: "很多看似小的改动，其实会带来连锁反应。例如柜体布局一旦改变，原本规划好的灯位与电位往往也要重画重配，整个工序就得重新协调。"
      }
    },
    avoid_title: "怎样减少延误？",
    avoid_items: {
      "1": "尽早确认设计方向",
      "2": "理解项目工序顺序",
      "3": "尽早确认关键材料",
      "4": "避免过多外部承包商",
      "5": "尽早统一决策"
    },
    final_title: "最后的观点",
    final_p1: "翻新延误通常并不是施工本身造成的，更多时候是因为决策、协调与前期规划不足。当工序逻辑被理解清楚，关键材料也能提早确认时，入住时间通常会更可预测。"
  },
  next_title: "新加坡业主最常见的翻新错误"
};

enT["article_renovation_mistakes"] = {
  meta: {
    title: "Biggest Renovation Mistakes Singapore Homeowners Make | ID Work Studio",
    description: "Avoid costly renovation mistakes in Singapore. Learn common pitfalls and how to plan better with this experience-led guide."
  },
  hero_badge: "Strategy Guide",
  title: "Biggest Renovation Mistakes Singapore Homeowners Make",
  subtitle: "A practical guide to avoiding costly renovation mistakes, based on real project experience in Singapore.",
  read_time: "7 min read",
  sections: {
    intro_title: "Why renovation mistakes are so common",
    intro_p1: "Renovation is a one-time major decision for most homeowners. With so many design choices, materials and suppliers available today, mistakes often happen due to unclear decisions early in the process.",
    mistakes_title: "Common renovation mistakes",
    mistakes: {
      "1": { title: "1. Underestimating cost", body: "Many homeowners focus only on the base quotation and overlook hidden costs. A 10–15% buffer is recommended." },
      "2": { title: "2. Choosing based on price", body: "The cheapest quote often leads to unclear scope and additional costs later." },
      "3": { title: "3. Overdesigning", body: "Too many features without considering daily use leads to impractical spaces." },
      "4": { title: "4. Poor storage planning", body: "Insufficient storage is one of the most common long-term regrets." },
      "5": { title: "5. Following trends too closely", body: "Trends change faster than renovation cycles and may not age well." },
      "6": { title: "6. Late decisions and design changes", body: "Indecision, adding features late, or redesigning midway causes delays and rework." },
      "7": { title: "7. Underestimating resale complexity", body: "Resale flats often require more hidden work such as hacking and rewiring." },
      "8": { title: "8. Buying materials without understanding dependencies", body: "Owner-supplied items such as overseas purchases can delay work if not delivered on time or incorrectly specified." }
    },
    avoid_title: "How to avoid these mistakes",
    avoid_items: {
      "1": "Start with a clear design direction",
      "2": "Align expectations early",
      "3": "Finalise key materials before work",
      "4": "Understand sequencing",
      "5": "Focus on function over trends"
    },
    final_title: "Final perspective",
    final_p1: "Most homeowners do not regret spending more. They regret unclear decisions and rushed choices. In practice, clarity early in the process prevents more problems than budget alone ever can."
  },
  next_title: "Renovation Cost Guide"
};

zhT["article_renovation_mistakes"] = {
  meta: {
    title: "新加坡业主最常见的翻新错误 | ID Work Studio",
    description: "通过这篇基于实务经验的指南，了解新加坡住宅翻新中常见的错误，以及如何更稳妥地规划。"
  },
  hero_badge: "策略指南",
  title: "新加坡业主最常见的翻新错误",
  subtitle: "从实际项目经验出发，帮助您避开代价高昂的翻新错误。",
  read_time: "约 7 分钟",
  sections: {
    intro_title: "为什么翻新错误这么常见？",
    intro_p1: "对大多数业主而言，翻新是一项人生中不常发生的重要决定。如今设计、材料与供应商选择太多，许多错误并不是因为判断太差，而是因为前期决策不够清晰。",
    mistakes_title: "常见翻新错误",
    mistakes: {
      "1": { title: "1. 低估整体预算", body: "很多业主只看基础报价，却忽略了隐藏费用。一般建议额外预留 10–15% 的应急预算。" },
      "2": { title: "2. 只按价格做决定", body: "最低报价往往伴随着范围不清，后期更容易出现追加费用。" },
      "3": { title: "3. 过度设计", body: "如果只顾外观、不顾日常使用，空间很容易变得不实用。" },
      "4": { title: "4. 收纳规划不足", body: "收纳不足是许多业主入住后一再后悔的问题之一。" },
      "5": { title: "5. 过度追随潮流", body: "流行变化速度往往快过一次翻新的使用周期，太追潮流未必耐看耐用。" },
      "6": { title: "6. 太迟做决定或中途改设计", body: "迟迟无法定案、临时加功能或中途修改设计，都会造成延误与返工。" },
      "7": { title: "7. 低估转售单位复杂度", body: "转售单位往往隐藏着更多拆除、重拉电线与基础修复工程。" },
      "8": { title: "8. 购买材料时忽略工序依赖", body: "若业主自购材料，尤其是海外采购项目，一旦延误或规格错误，就会直接影响施工安排。" }
    },
    avoid_title: "怎样减少这些错误？",
    avoid_items: {
      "1": "先确立清晰的设计方向",
      "2": "尽早统一彼此期待",
      "3": "在开工前确定关键材料",
      "4": "理解工序顺序",
      "5": "把功能放在潮流之前"
    },
    final_title: "最后的观点",
    final_p1: "大多数业主并不会后悔花得更多，他们更常后悔的是：决定做得太晚、沟通不够清晰，或在一开始没有把真正重要的事情想清楚。很多问题，并不是预算不够，而是前期清晰度不够。"
  },
  next_title: "新加坡翻新费用指南"
};


enT["article_commercial_renovation_cost"] = {
  meta: {
    title: "Commercial Renovation Cost Singapore (2026 Guide) | ID Work Studio",
    description: "Commercial renovation cost Singapore guide by ID Work Studio. Real contractor pricing for office, retail, F&B, MCST permits, compliance, aircon, water supply and hidden renovation costs."
  },
  hero_badge: "Commercial Cost Guide",
  title: "Commercial Renovation Cost Singapore (2026 Guide)",
  subtitle: "Real contractor pricing, approval requirements and hidden cost risks for office, retail, F&B and commercial renovation projects in Singapore.",
  read_time: "10 min read",
  bca_label: "BCA-Registered Firm",
  quick_title: "Commercial renovation cost in Singapore: quick answer",
  quick_p1: "Based on real commercial renovation work in Singapore, most office renovations fall between <strong>$80 to $150 per sqft</strong> for a standard fit-out. Retail renovation is usually higher, and F&B renovation can be significantly more expensive because of exhaust, plumbing, fire safety and kitchen requirements.",
  quick_p2: "For example, a 1,200 sqft office may realistically cost <strong>$100,000 to $180,000</strong>. A 2,000 sqft office with glass meeting rooms, reception carpentry, data points and upgraded lighting can reach <strong>$180,000 to $300,000</strong>.",
  cost_summary: {
    office: { title: "Office renovation", range: "$80 – $150 psf", note: "Most standard SME office fit-outs with partition, electrical, flooring and basic carpentry." },
    retail: { title: "Retail renovation", range: "$120 – $300 psf", note: "Usually higher when shopfront, display carpentry, lighting and mall requirements are involved." },
    fnb: { title: "F&B renovation", range: "$200 – $500+ psf", note: "Higher-risk projects due to exhaust, grease trap, plumbing, fire safety and kitchen requirements." },
    industrial: { title: "Industrial / light commercial", range: "$80 – $250+ psf", note: "Depends heavily on power loading, office-to-warehouse ratio, approvals and M&E works." }
  },
  insight_title: "Contractor insight",
  insight_text: "Most commercial renovation cost overruns do not come from design. They usually come from compliance issues, aircon limitations, electrical loading, water and drainage problems, or late changes after submission.",
  office_title: "Office renovation cost Singapore",
  office_intro: "Most SME offices in Singapore fall between 1,000 to 3,000 sqft. A basic open office setup may stay below $100 psf, but once glass rooms, meeting rooms, reception carpentry, pantry, lighting design and data points are included, the cost commonly moves closer to $120 to $180 psf.",
  office_note: "CBD offices in areas such as Raffles Place, Marina Bay and Tanjong Pagar can be 15% to 25% higher because of stricter loading bay timing, lift protection, security clearance, night-work requirements and building management rules.",
  office_table_headers: { level: "Level", cost: "Cost", scope: "Typical scope" },
  office_rows: {
    "1": ["Basic office fit-out", "$80 – $100 psf", "Open office, basic partition, vinyl or carpet, simple lighting and power points."],
    "2": ["Standard office fit-out", "$100 – $180 psf", "Meeting rooms, glass partition, reception counter, feature wall, data points and improved lighting."],
    "3": ["Premium office fit-out", "$180 – $300 psf", "Higher-end finishes, acoustic rooms, customised carpentry, smart office features and heavier M&E coordination."]
  },
  breakdown_title: "Itemised commercial renovation cost breakdown",
  breakdown_intro: "A proper commercial renovation quote should not only show a total price. It should separate construction, M&E, carpentry, approval-related items and exclusions so the tenant can compare scope properly.",
  breakdown_headers: { item: "Item", cost: "Typical cost", note: "Contractor note" },
  breakdown_rows: {
    "1": ["Partition / drywall", "$8 – $15 psf", "Depends on height, board type and fire-rated requirements."],
    "2": ["Glass partition", "$18 – $35 psf", "Frameless or framed glass, door hardware and acoustic needs affect cost."],
    "3": ["Electrical point", "$60 – $120 per point", "Higher if concealed routing or night work is required."],
    "4": ["Data / TV point", "$120 – $180 per point", "Important for office workstations, meeting rooms and server areas."],
    "5": ["Vinyl flooring", "$5 – $8 psf", "Common for offices because it is fast and cost-effective."],
    "6": ["Carpet tiles", "$6 – $12 psf", "Often used in offices for acoustic comfort and easy replacement."],
    "7": ["Custom carpentry", "$300 – $1,200 per ft", "Reception counters, pantry cabinets, display walls and storage."],
    "8": ["Aircon works", "$8,000 – $30,000+", "Depends on existing provision, after-hours needs and whether separate systems are required."]
  },
  retail_fnb_title: "Retail and F&B renovation cost in Singapore",
  retail_fnb_intro: "Retail renovation cost depends heavily on shopfront design, display carpentry, lighting intensity, mall guidelines and landlord requirements. F&B renovation is usually the most expensive because the project is not just interior works — it also involves mechanical systems, fire safety, kitchen workflow and plumbing.",
  retail_card_title: "Retail renovation",
  retail_items: { "1": "Basic retail: $120 – $180 psf", "2": "Mall fit-out: $180 – $300 psf", "3": "High-end retail: $300+ psf" },
  fnb_card_title: "F&B renovation",
  fnb_items: { "1": "Light F&B: $200 – $300 psf", "2": "Restaurant / kitchen-heavy: $300 – $500+ psf", "3": "Exhaust rectification: $10,000 – $30,000+" },
  lease_warning_title: "Important before signing lease",
  lease_warning_text: "For F&B, always check exhaust routing, grease trap, water supply, drainage, electrical loading and SCDF-related constraints before committing to the unit. If the unit cannot support the business use, renovation cost can increase sharply or approval may not be granted.",
  permits_title: "Permits, MCST approval and compliance",
  permits_intro: "In Singapore, commercial renovation cannot start just because the lease is signed. For most offices, retail shops, industrial units and mall units, the contractor must submit documents to MCST, landlord or building management before the permit to work is approved.",
  permit_reasons_title: "Common reasons permits get delayed",
  permit_reasons: {
    "1": "Drawings are incomplete or not aligned with building requirements.",
    "2": "Method statements, work schedule or insurance documents are missing.",
    "3": "Works affect sprinklers, fire alarm, ceiling, common areas or loading routes.",
    "4": "Contractor details or safety documents do not meet management requirements."
  },
  permits_link_text_before: "For a deeper explanation, read our guide on",
  permits_link: "commercial renovation permits and compliance in Singapore",
  permits_link_text_after: "This is important because without MCST or management approval, renovation cannot legally start and the project schedule may be pushed back.",
  timeline_title: "Commercial renovation timeline in Singapore",
  timeline: {
    "1": { title: "Site check, lease review and feasibility", duration: "1–2 weeks", text: "Before confirming the renovation budget, check aircon provision, water inlet, drainage, electrical loading, exhaust feasibility and building house rules." },
    "2": { title: "Space planning and quotation", duration: "2–4 weeks", text: "Layout, scope, materials and budget should be aligned before submission. Too many decision makers at this stage can delay the whole project." },
    "3": { title: "MCST / landlord / authority approval", duration: "2–6 weeks", text: "Building management may require drawings, method statement, work schedule, contractor documents, insurance and deposit before issuing permit to work." },
    "4": { title: "Renovation and fit-out works", duration: "3–10+ weeks", text: "Office renovation can be faster. Retail and F&B usually take longer due to M&E, fire safety, plumbing, exhaust and landlord inspection requirements." }
  },
  mistakes_title: "Real mistakes that increase commercial renovation cost",
  mistakes: {
    "1": { title: "Not checking the aircon system before taking over the unit", text: "Some Singapore office buildings use centralised aircon controlled by the building. The aircon may stop around 6pm. If the tenant needs to work late, a separate cooling solution may be required. This can add roughly $8,000 to $30,000 or more depending on the unit." },
    "2": { title: "Choosing a unit without water supply or drainage", text: "A unit may look suitable based on size, but some businesses need water inlet and discharge points. Beauty, nail, facial, clinic, cleaning and F&B users must check this early. If there is no proper outlet, a pump system may be needed and can add $3,000 to $10,000+." },
    "3": { title: "Ignoring MCST or building management permit requirements", text: "Commercial renovation cannot start just because the lease is signed. If drawings, method statements, insurance or contractor documents are incomplete, the permit to work may be rejected. This can delay the project by 1 to 4 weeks or more." },
    "4": { title: "Reinstatement miscommunication before takeover", text: "In one real case, an incoming tenant asked through the property agent for the landlord not to reinstate the unit. The message was not passed properly. The unit was reinstated to bare shell, the aircon was removed, and the tenant had to spend about $30,000 to reinstall aircon." },
    "5": { title: "Too many people making decisions", text: "When several owners, partners or managers need to approve every layout and material decision, renovation can stall. Late changes affect quotation, submission drawings, material lead time and site schedule." }
  },
  reinstatement_title: "Reinstatement cost Singapore",
  reinstatement_intro: "Reinstatement is the cost of returning the commercial unit to the landlord’s required handover condition at the end of lease. Many tenants forget to budget for this when they first sign the lease.",
  reinstatement_headers: { level: "Reinstatement level", cost: "Cost range", works: "Typical works" },
  reinstatement_rows: {
    "1": ["Basic", "$10 – $20 psf", "Loose items, simple partition, minor making good."],
    "2": ["Standard", "$20 – $30 psf", "Flooring, ceiling, partition, electrical and general removal."],
    "3": ["Complex", "$30 – $40+ psf", "Aircon, M&E, heavy carpentry, F&B systems or strict landlord requirements."]
  },
  reinstatement_p: "For proper planning, start reinstatement budgeting at least 3 to 4 months before lease expiry. You can also review our",
  reinstatement_link: "commercial reinstatement service",
  faq_title: "Commercial renovation FAQ",
  faqs: {
    "1": { q: "How much does commercial renovation cost in Singapore?", a: "A standard office renovation usually costs around $80 to $150 psf. Retail renovation often ranges from $120 to $300 psf. F&B renovation can reach $200 to $500+ psf because of exhaust, plumbing, grease trap, kitchen and fire safety requirements." },
    "2": { q: "How much does a 1,200 sqft office renovation cost?", a: "A practical budget for a 1,200 sqft office is usually around $100,000 to $180,000 for a standard fit-out with partition, flooring, electrical works, meeting rooms, basic carpentry and lighting." },
    "3": { q: "Why is F&B renovation more expensive than office renovation?", a: "F&B renovation requires heavier M&E works such as exhaust ducting, grease trap, plumbing, waterproofing, kitchen setup and fire safety coordination. These systems can easily add $20,000 to $60,000+ before finishes are even considered." },
    "4": { q: "Do I need approval before starting commercial renovation?", a: "Yes. Most commercial projects require building management, MCST or landlord approval before work starts. Depending on scope, BCA, SCDF, PE, QP or other professional submissions may also be required." },
    "5": { q: "What happens if MCST or building management rejects the permit?", a: "Work cannot start until the submission is accepted. Rejection is usually caused by incomplete drawings, missing method statements, missing insurance, wrong contractor documents, or works that do not follow building rules." },
    "6": { q: "Can I skip SCDF submission for simple renovation?", a: "Possibly, but only if the works are purely cosmetic and do not affect fire safety systems. If the renovation changes partitions, ceilings, sprinkler layout, fire alarm, exit routes or fire-rated elements, SCDF-related submission may be required." },
    "7": { q: "How long does commercial renovation take?", a: "A typical office fit-out may take 3 to 6 weeks after approval. Retail and F&B renovation often take 6 to 10 weeks or more because of M&E, plumbing, exhaust, fire safety and landlord inspection requirements." },
    "8": { q: "What is the biggest hidden cost in commercial renovation?", a: "The biggest hidden costs are usually aircon, exhaust, drainage, electrical loading, fire safety, reinstatement and compliance-related works. These are often missed when tenants only compare design finishes." },
    "9": { q: "Do all commercial units have aircon after office hours?", a: "No. Some buildings use centralised aircon controlled by building management, and it may stop around 6pm. Tenants who need evening operations should check after-hours aircon charges or budget for separate cooling systems." },
    "10": { q: "What if my unit has no water inlet or drainage outlet?", a: "You may need plumbing rerouting or a pump system. This is especially important for F&B, clinics, beauty salons, nail salons, facial rooms and cleaning-related businesses. The added cost can be several thousand dollars." },
    "11": { q: "Can I take over existing renovation to save cost?", a: "Yes, but the takeover condition must be confirmed clearly in writing with the landlord. Do not rely only on verbal communication through an agent. If reinstatement happens before takeover, useful systems such as aircon, partition and wiring may be removed." },
    "12": { q: "What is commercial reinstatement cost in Singapore?", a: "Commercial reinstatement commonly ranges from $10 to $40+ psf depending on the unit size, ceiling, flooring, partition, M&E removal, aircon removal and landlord requirements." },
    "13": { q: "Can commercial renovation be done after office hours?", a: "It depends on building rules. Some buildings restrict noisy works, loading bay use and lift access. Night work may need separate approval and can increase labour cost by 15% to 25%." },
    "14": { q: "What documents are usually needed for commercial renovation approval?", a: "Common documents include layout drawings, reflected ceiling plans, M&E drawings, method statement, work schedule, contractor details, public liability insurance and sometimes PE/QP endorsement depending on the scope." },
    "15": { q: "How can I reduce commercial renovation cost?", a: "Keep existing aircon and M&E where possible, avoid unnecessary hacking, finalise decisions early, check utilities before signing the lease, and compare quotation scope instead of only comparing total price." }
  },
  cta_title: "Get a realistic commercial renovation quote",
  cta_text: "WhatsApp us your floor plan, unit condition and business type. We will advise on estimated cost range, approval requirements, feasibility issues and possible hidden costs before renovation starts.",
  cta_whatsapp: "WhatsApp Floor Plan",
  cta_calculator: "Use Cost Calculator",
  cta_services: "View Commercial Services"
};

zhT["article_commercial_renovation_cost"] = {
  meta: {
    title: "新加坡商业翻新费用（2026 指南）| ID Work Studio",
    description: "ID Work Studio 新加坡商业翻新费用指南，以真实承包商角度说明办公室、零售、餐饮、MCST许可证、合规、空调、供水排水与隐藏成本。"
  },
  hero_badge: "商业费用指南",
  title: "新加坡商业翻新费用（2026 指南）",
  subtitle: "以承包商角度说明新加坡办公室、零售、餐饮与商业空间翻新的真实费用、审批要求与隐藏成本风险。",
  read_time: "约 10 分钟",
  bca_label: "BCA 注册公司",
  quick_title: "新加坡商业翻新费用：直接答案",
  quick_p1: "根据新加坡实际商业翻新项目经验，标准办公室装修多数落在 <strong>每平方英尺 $80 至 $150</strong>。零售空间通常更高，餐饮空间则因排烟、给排水、消防安全与厨房需求而明显更贵。",
  quick_p2: "举例来说，一个 1,200 平方英尺办公室，合理预算通常约 <strong>$100,000 至 $180,000</strong>。若是 2,000 平方英尺办公室，并包含玻璃会议室、接待区木工、网络点位与升级灯光，费用可达 <strong>$180,000 至 $300,000</strong>。",
  cost_summary: {
    office: { title: "办公室翻新", range: "$80 – $150 psf", note: "适用于多数标准中小型办公室，包括隔墙、电工、地板与基础木工。" },
    retail: { title: "零售店翻新", range: "$120 – $300 psf", note: "若涉及店面门头、展示木工、灯光与商场要求，费用通常更高。" },
    fnb: { title: "餐饮翻新", range: "$200 – $500+ psf", note: "因排烟、隔油池、给排水、消防安全与厨房需求，风险与费用较高。" },
    industrial: { title: "工业 / 轻商业空间", range: "$80 – $250+ psf", note: "费用受电力负荷、办公室与仓储比例、审批及机电工程影响很大。" }
  },
  insight_title: "承包商现场经验",
  insight_text: "商业翻新超支多数不是来自设计，而是来自合规问题、空调限制、电力负荷、供水排水问题，或提交后才临时更改设计。",
  office_title: "新加坡办公室翻新费用",
  office_intro: "新加坡多数中小型办公室面积约 1,000 至 3,000 平方英尺。基础开放式办公室可能低于 $100 psf，但一旦加入玻璃房、会议室、接待木工、茶水间、灯光设计与网络点位，费用通常会接近 $120 至 $180 psf。",
  office_note: "莱佛士坊、滨海湾、丹戎巴葛等 CBD 办公楼，费用可能高出 15% 至 25%，原因包括卸货时间限制、电梯保护、安保通行、夜间施工要求与大厦管理规定。",
  office_table_headers: { level: "等级", cost: "费用", scope: "常见范围" },
  office_rows: {
    "1": ["基础办公室装修", "$80 – $100 psf", "开放式办公室、基础隔墙、乙烯基地板或地毯、简单灯光与电源点。"],
    "2": ["标准办公室装修", "$100 – $180 psf", "会议室、玻璃隔墙、接待柜台、特色墙、网络点位与较好的灯光。"],
    "3": ["高端办公室装修", "$180 – $300 psf", "较高端饰面、隔音房、定制木工、智能办公功能与较复杂机电协调。"]
  },
  breakdown_title: "商业翻新费用明细",
  breakdown_intro: "一份合格的商业翻新报价不应只显示总价。它应把施工、机电、木工、审批相关项目与不包含项目分开列明，方便租户真正比较工程范围。",
  breakdown_headers: { item: "项目", cost: "常见费用", note: "承包商说明" },
  breakdown_rows: {
    "1": ["隔墙 / 石膏板", "$8 – $15 psf", "取决于高度、板材类型与是否需要防火等级。"],
    "2": ["玻璃隔墙", "$18 – $35 psf", "无框或有框玻璃、门五金与隔音需求都会影响费用。"],
    "3": ["电源点", "$60 – $120 / 点", "若需隐藏走线或夜间施工，费用会更高。"],
    "4": ["网络 / 电视点", "$120 – $180 / 点", "办公室工位、会议室与服务器区域尤其重要。"],
    "5": ["乙烯基地板", "$5 – $8 psf", "办公室常用，因为施工快且成本相对可控。"],
    "6": ["方块地毯", "$6 – $12 psf", "常用于办公室，可改善脚感与一定程度吸音。"],
    "7": ["定制木工", "$300 – $1,200 / ft", "接待柜台、茶水间柜、展示墙与储物柜。"],
    "8": ["空调工程", "$8,000 – $30,000+", "取决于现有条件、是否需加班使用及是否要另装系统。"]
  },
  retail_fnb_title: "新加坡零售与餐饮翻新费用",
  retail_fnb_intro: "零售翻新费用受店面设计、展示木工、灯光密度、商场指南与业主要求影响很大。餐饮翻新通常最贵，因为项目不只是室内装饰，还涉及机电系统、消防安全、厨房动线与给排水。",
  retail_card_title: "零售翻新",
  retail_items: { "1": "基础零售：$120 – $180 psf", "2": "商场装修：$180 – $300 psf", "3": "高端零售：$300+ psf" },
  fnb_card_title: "餐饮翻新",
  fnb_items: { "1": "轻餐饮：$200 – $300 psf", "2": "餐厅 / 重厨房：$300 – $500+ psf", "3": "排烟整改：$10,000 – $30,000+" },
  lease_warning_title: "签租约前必须确认",
  lease_warning_text: "餐饮单位一定要在签约前确认排烟路线、隔油池、供水、排水、电力负荷与 SCDF 相关限制。若单位无法支持该业态，翻新费用可能大幅增加，甚至无法获得批准。",
  permits_title: "许可证、MCST审批与合规",
  permits_intro: "在新加坡，商业翻新不是签了租约就能开工。多数办公室、零售店、工业单位与商场单位，都需要承包商先向 MCST、业主或大厦管理提交文件，并取得开工许可证。",
  permit_reasons_title: "许可证常见延误原因",
  permit_reasons: {
    "1": "图纸不完整，或不符合大厦管理要求。",
    "2": "缺少施工方法说明、工程时间表或保险文件。",
    "3": "工程影响洒水器、火警系统、天花、公共区域或卸货路线。",
    "4": "承包商资料或安全文件不符合管理处要求。"
  },
  permits_link_text_before: "如需更详细说明，可阅读我们的指南：",
  permits_link: "新加坡商业翻新许可证与合规指南",
  permits_link_text_after: "这很重要，因为若没有 MCST 或大厦管理批准，翻新无法合法开工，整体工期也会被推迟。",
  timeline_title: "新加坡商业翻新时间表",
  timeline: {
    "1": { title: "现场检查、租约审查与可行性确认", duration: "1–2 周", text: "确认预算前，应检查空调条件、供水、排水、电力负荷、排烟可行性与大厦装修规则。" },
    "2": { title: "空间规划与报价", duration: "2–4 周", text: "布局、工程范围、材料与预算应在提交前对齐。若决策者太多，这个阶段很容易拖慢整个项目。" },
    "3": { title: "MCST / 业主 / 相关部门审批", duration: "2–6 周", text: "大厦管理可能要求提交图纸、施工方法说明、工程时间表、承包商文件、保险与押金，才会发出开工许可。" },
    "4": { title: "翻新与装修工程", duration: "3–10+ 周", text: "办公室通常较快。零售与餐饮因机电、消防、给排水、排烟与业主验收要求，工期通常更长。" }
  },
  mistakes_title: "会增加商业翻新费用的真实错误",
  mistakes: {
    "1": { title: "接手单位前没有确认空调系统", text: "有些新加坡办公楼使用由大厦集中控制的中央空调，空调可能在下午 6 点左右停止。若租户需要晚上加班或营业，就可能需要另装冷气系统，费用大约 $8,000 至 $30,000 或更高。" },
    "2": { title: "选择没有供水或排水的单位", text: "一个单位从面积看可能合适，但部分生意需要进水与排水点。美容、美甲、面部护理、诊所、清洁相关业务与餐饮，都必须尽早确认。若没有合适排水口，可能需要安装泵系统，额外费用可达 $3,000 至 $10,000+。" },
    "3": { title: "忽略 MCST 或大厦管理开工许可证", text: "商业翻新不是签了租约就能开工。若图纸、施工方法说明、保险或承包商文件不完整，开工许可证可能被拒，项目可延误 1 至 4 周或更久。" },
    "4": { title: "接手前恢复原状沟通失误", text: "曾有真实案例：新租户通过地产经纪要求业主不要恢复原状，但信息没有正确传达。结果单位被恢复成空壳，空调也被拆除，租户之后花了约 $30,000 重新安装空调。" },
    "5": { title: "太多人参与决策", text: "当多个业主、合伙人或经理都要批准每一个布局与材料决定时，项目很容易停滞。后期更改会影响报价、提交图纸、材料订货与现场工期。" }
  },
  reinstatement_title: "新加坡商业单位恢复原状费用",
  reinstatement_intro: "恢复原状是指在租约结束时，把商业单位还原至业主要求交还状态的费用。很多租户在签租约初期会忘记把这笔费用纳入预算。",
  reinstatement_headers: { level: "恢复原状等级", cost: "费用范围", works: "常见工程" },
  reinstatement_rows: {
    "1": ["基础", "$10 – $20 psf", "拆除松散物品、简单隔墙及少量修补。"],
    "2": ["标准", "$20 – $30 psf", "地板、天花、隔墙、电工及一般拆除。"],
    "3": ["复杂", "$30 – $40+ psf", "空调、机电、重木工、餐饮系统或严格业主要求。"]
  },
  reinstatement_p: "为更稳妥规划，建议在租约到期前至少 3 至 4 个月开始预算恢复原状。您也可以查看我们的",
  reinstatement_link: "商业恢复原状服务",
  faq_title: "商业翻新常见问题",
  faqs: {
    "1": { q: "新加坡商业翻新费用是多少？", a: "标准办公室翻新通常约 $80 至 $150 psf。零售翻新常见为 $120 至 $300 psf。餐饮翻新可能达到 $200 至 $500+ psf，因为涉及排烟、给排水、隔油池、厨房与消防安全要求。" },
    "2": { q: "1,200 平方英尺办公室翻新大概要多少钱？", a: "一个 1,200 平方英尺办公室，若是标准装修，包括隔墙、地板、电工、会议室、基础木工与灯光，合理预算通常约 $100,000 至 $180,000。" },
    "3": { q: "为什么餐饮翻新比办公室翻新贵？", a: "餐饮翻新涉及更重的机电工程，如排烟管、隔油池、给排水、防水、厨房配置与消防安全协调。这些系统在还没计算饰面前，就可能增加 $20,000 至 $60,000+。" },
    "4": { q: "商业翻新开工前需要审批吗？", a: "需要。多数商业项目在开工前需要大厦管理、MCST 或业主批准。视工程范围而定，也可能需要 BCA、SCDF、PE、QP 或其他专业提交。" },
    "5": { q: "如果 MCST 或大厦管理拒批许可证会怎样？", a: "提交被接受前不能开工。常见拒批原因包括图纸不完整、缺少施工方法说明、缺少保险、承包商文件错误，或工程不符合大厦规定。" },
    "6": { q: "简单翻新可以不做 SCDF 提交吗？", a: "有可能，但只限纯装饰工程，且不影响消防安全系统。若工程涉及隔墙、天花、洒水器、火警、逃生路线或防火构件，就可能需要 SCDF 相关提交。" },
    "7": { q: "商业翻新需要多久？", a: "一般办公室装修在批准后约 3 至 6 周。零售与餐饮通常需要 6 至 10 周或更久，因为涉及机电、给排水、排烟、消防安全与业主验收。" },
    "8": { q: "商业翻新最大的隐藏成本是什么？", a: "最大隐藏成本通常是空调、排烟、排水、电力负荷、消防安全、恢复原状与合规相关工程。很多租户只比较设计饰面时会忽略这些项目。" },
    "9": { q: "所有商业单位晚上都有空调吗？", a: "没有。有些大厦采用中央空调，由大厦管理统一控制，可能约下午 6 点停止。需要晚上营业或加班的租户，应先确认加时空调费用，或预算另装冷气系统。" },
    "10": { q: "如果单位没有进水或排水口怎么办？", a: "可能需要重新规划水管或安装泵系统。餐饮、诊所、美容院、美甲店、面部护理室与清洁相关业务尤其要注意。额外费用可能达到数千元。" },
    "11": { q: "我可以接手原有装修来省钱吗？", a: "可以，但必须与业主以书面方式清楚确认接手条件。不要只依赖经纪口头传达。若在接手前已恢复原状，原本有用的空调、隔墙与线路都可能被拆除。" },
    "12": { q: "新加坡商业恢复原状费用是多少？", a: "商业恢复原状通常约 $10 至 $40+ psf，取决于单位面积、天花、地板、隔墙、机电拆除、空调拆除及业主要求。" },
    "13": { q: "商业翻新可以在办公时间后施工吗？", a: "要看大厦规定。有些大厦限制噪音工程、卸货与电梯使用。夜间施工可能需要额外批准，人工费用也可能提高 15% 至 25%。" },
    "14": { q: "商业翻新审批通常需要哪些文件？", a: "常见文件包括平面图、天花图、机电图、施工方法说明、工程时间表、承包商资料、公共责任保险，有些工程还可能需要 PE/QP 签署。" },
    "15": { q: "如何降低商业翻新费用？", a: "尽量保留现有空调与机电系统，避免不必要拆除，尽早定案设计，签租约前确认水电与排水条件，并比较报价范围而不是只看总价。" }
  },
  cta_title: "获取实际商业翻新报价",
  cta_text: "请通过 WhatsApp 发送您的平面图、单位现况与业务类型。我们会先协助判断预算范围、审批要求、可行性问题与潜在隐藏成本。",
  cta_whatsapp: "WhatsApp 发送平面图",
  cta_calculator: "使用费用计算器",
  cta_services: "查看商业服务"
};

enT["article_office_renovation_timeline"] = {
  meta: {
    title: "Office Renovation Timeline Singapore | How Long Fit-Out Takes | ID Work Studio",
    description: "Office renovation timeline Singapore guide. See realistic fit-out timelines, Gantt schedule, landlord approval, MCST, SCDF, M&E coordination, delays and FAQ."
  },
  hero_badge: "Office Timeline Guide",
  hero_alt: "Modern office renovation timeline planning in Singapore",
  title: "Office Renovation Timeline Singapore: How Long an Office Fit-Out Really Takes",
  subtitle: "A practical contractor guide to office renovation scheduling, approvals, site sequencing, delay risks and handover planning in Singapore.",
  read_time: "9 min read",
  intro: "A realistic office renovation timeline in Singapore is not just the number of days spent on site. It must include design confirmation, landlord or MCST approval, possible SCDF/QP review, site works, M&E coordination, furniture delivery, testing and handover. This guide explains the timeline the way a contractor schedules it on a real project.",
  direct_answer: {
    title: "How long does office renovation take in Singapore?",
    body: "As a working guide, a small office usually takes 3 to 6 weeks, a medium office takes 6 to 10 weeks, and a large or corporate office takes 10 to 16 weeks. These ranges include planning, approval, site works and handover. A simple refresh can be faster, but once partition, electrical, data, aircon or fire safety works are involved, the schedule must allow proper coordination."
  },
  timeline_ranges: {
    "1": { title: "Small office", body: "3–6 weeks" },
    "2": { title: "Medium office", body: "6–10 weeks" },
    "3": { title: "Large / corporate", body: "10–16 weeks" }
  },
  client_concerns: {
    eyebrow: "Client concerns",
    title: "What business owners usually worry about",
    items: {
      "1": "How long will the office be down before the team can move in?",
      "2": "Can renovation be done while the business is still operating?",
      "3": "Will landlord, MCST or building management delay approval?",
      "4": "Do sprinkler, fire alarm or exit changes require SCDF/QP review?",
      "5": "Can noisy works be done after office hours or on weekends?",
      "6": "Will electrical, data and aircon works be ready before handover?"
    }
  },
  gantt: {
    title: "Typical office renovation Gantt schedule",
    intro: "Office renovation works overlap. The Gantt chart below is easier for clients to read than a long site schedule, but it still shows the real sequencing: approval before major works, wet and partition works before final finishes, and testing before handover.",
    headers: { stage: "Stage", note: "Contractor note" },
    weeks: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
    rows: {
      "1": { stage: "Planning & design", weeks: ["1", "1", "0", "0", "0", "0", "0", "0"], note: "Site survey, layout, M&E planning and quotation alignment." },
      "2": { stage: "Landlord / MCST / SCDF approval", weeks: ["0", "1", "1", "0", "0", "0", "0", "0"], note: "Runs in parallel after drawings are ready; complex fire safety items can extend this." },
      "3": { stage: "Hacking & dismantling", weeks: ["0", "0", "1", "0", "0", "0", "0", "0"], note: "Removal of existing partition, ceiling, flooring or built-ins where approved." },
      "4": { stage: "Masonry & partition", weeks: ["0", "0", "1", "1", "0", "0", "0", "0"], note: "New layout formation, drywall partition, wet works and base preparation." },
      "5": { stage: "Electrical & data", weeks: ["0", "0", "0", "1", "1", "0", "0", "0"], note: "Power points, lighting points, network cabling, server and workstation coordination." },
      "6": { stage: "Aircon works", weeks: ["0", "0", "0", "1", "1", "0", "0", "0"], note: "Diffuser relocation, thermostat adjustment, FCU coordination or duct changes." },
      "7": { stage: "Carpentry & furniture", weeks: ["0", "0", "0", "0", "1", "1", "0", "0"], note: "Fabrication is usually off-site; final installation depends on confirmed site measurements." },
      "8": { stage: "Finishing works", weeks: ["0", "0", "0", "0", "1", "1", "0", "0"], note: "Painting, flooring, glass works, lighting installation and final touch-ups." },
      "9": { stage: "Testing & handover", weeks: ["0", "0", "0", "0", "0", "1", "1", "0"], note: "Power, data, aircon, defects, cleaning and handover readiness." }
    },
    note: "This is a working schedule, not a fixed promise. In Singapore office renovation, approval delays, after-hours restrictions, aircon shutdown coordination and supplier lead times can shift the programme by 1 to 3 weeks. A proper contractor schedule should always include buffer time."
  },
  phases: {
    title: "Full timeline breakdown",
    intro: "A proper office fit-out should be planned in phases. Each phase affects the next phase, so rushing early decisions usually creates delay later on site.",
    items: {
      "1": { title: "1. Planning & design", duration: "1–3 weeks", body: "This includes site measurement, workspace layout, meeting room planning, pantry planning, electrical and data point planning, ceiling layout, lighting layout and aircon impact review. If the layout keeps changing, the programme will move before site works even start." },
      "2": { title: "2. Submission & approval", duration: "1–4 weeks", body: "Most office projects require landlord or building management approval. Strata offices may require MCST approval. Submission documents can include layout drawings, reflected ceiling plan, M&E details, method statement, work schedule, contractor details, insurance and renovation deposit. If fire safety systems are affected, SCDF-related review by a Qualified Person may be required." },
      "3": { title: "3. Hacking, partition and wet works", duration: "1–3 weeks", body: "This phase covers dismantling, hacking, new partition, pantry wet works, ceiling base works and making good. In occupied buildings, noisy works are often restricted to certain hours, so even simple works can take longer than expected." },
      "4": { title: "4. Electrical, data and aircon coordination", duration: "1–2 weeks", body: "Office renovation depends heavily on power, lighting, data, server, Wi-Fi and aircon routing. These trades must be coordinated together because partition and ceiling changes affect cable routing, diffuser position, return air and lighting placement." },
      "5": { title: "5. Carpentry, furniture and finishing", duration: "2–4 weeks", body: "Carpentry is usually fabricated off-site, but final measurement should only be taken after site conditions are ready. Flooring, painting, glass works, loose furniture, signage and accessories are usually installed toward the end of the project." },
      "6": { title: "6. Testing, defects and handover", duration: "3–7 days", body: "Before handover, power points, lights, data points, aircon, doors, glass works, locks and furniture placement should be checked. Final cleaning and defect rectification should be included before staff move in." }
    }
  },
  delay_factors: {
    title: "Real delay factors in Singapore office renovation",
    intro: "Most office renovation delays do not come from hacking or painting. They usually come from approvals, building restrictions and coordination between different trades.",
    items: {
      "1": { title: "Landlord or MCST approval delays", body: "Building management may request revised drawings, method statements, insurance documents, lift protection details or contractor registration before issuing approval to start work." },
      "2": { title: "After-hours work restrictions", body: "Many commercial buildings limit noisy works to evenings, nights or weekends. This can slow the programme by 30% to 50%, especially when hacking, drilling or material delivery is involved." },
      "3": { title: "Electrical and data coordination", body: "If workstation count, server location, meeting room AV or data point quantity is not confirmed early, wiring may need to be revised after partitions are built." },
      "4": { title: "Aircon modification", body: "Aircon works may require building approval, shutdown timing or coordination with the building's central system. Diffusers, thermostats and return air paths must match the new layout." },
      "5": { title: "SCDF or QP review", body: "If the works affect sprinkler layout, fire alarm, smoke detector, exit route, fire-rated partition or occupant load, SCDF-related submission may be required. This should be checked early, not after site work starts." },
      "6": { title: "Third-party supplier delays", body: "Furniture, glass, signage, access control, IT equipment and loose furniture are often supplied by separate vendors. Late confirmation can delay final handover even when renovation works are nearly completed." }
    }
  },
  mistakes: {
    title: "Common office renovation mistakes",
    intro: "The best way to shorten an office renovation timeline is not to rush site work. It is to avoid decisions that create rework.",
    items: {
      "1": { title: "Confirming move-in date before approval", body: "Do not lock in the staff move-in date until landlord, MCST or building management approval is secured. A one-week approval delay can affect furniture delivery, IT setup and handover." },
      "2": { title: "Treating office renovation like home renovation", body: "Office renovation needs compliance documents, building rules, lift booking, loading bay timing, insurance and M&E coordination. It cannot be planned like a simple residential project." },
      "3": { title: "Not planning data points early", body: "Data points, server rack position, Wi-Fi coverage, meeting room AV and floor boxes should be planned before partition and ceiling works. Late changes create rewiring and patching." },
      "4": { title: "Ignoring aircon and sprinkler impact", body: "Changing partitions can affect aircon airflow, sprinkler coverage and fire safety requirements. These items should be reviewed during planning, not after walls are built." },
      "5": { title: "Ordering furniture too late", body: "Loose furniture often has a separate lead time. If table sizes, workstation count or delivery dates are confirmed too late, the office may be renovated but not ready for operation." }
    }
  },
  faqs: {
    title: "Office renovation timeline FAQ",
    items: {
      "1": { q: "How long does office renovation take in Singapore?", a: "Small offices usually take 3 to 6 weeks, medium offices take 6 to 10 weeks, and large corporate offices take 10 to 16 weeks including planning, approvals, site works, testing and handover." },
      "2": { q: "Can office renovation be completed in 2 weeks?", a: "Only very small cosmetic refresh works can be completed in about 2 weeks. A proper office fit-out with partition, electrical, data, aircon and landlord approval usually needs more time." },
      "3": { q: "Do I need landlord approval for office renovation?", a: "Yes. Most Singapore office renovations require landlord or building management approval before work can start. Required documents may include drawings, work schedule, method statement, contractor details and insurance." },
      "4": { q: "Do I need MCST approval?", a: "If the office is inside a strata-titled building, MCST or managing agent approval is commonly required before renovation works can start." },
      "5": { q: "When is SCDF submission required?", a: "SCDF-related submission may be required if the renovation affects fire safety systems, sprinkler layout, fire alarm, smoke detector, exit route, fire-rated partition or occupant load. A Qualified Person should assess this where applicable." },
      "6": { q: "Can renovation be done after office hours?", a: "Yes, if the building allows it. However, night and weekend work may need separate approval and can slow the schedule or increase labour cost." },
      "7": { q: "Can we operate during renovation?", a: "It is possible for some offices, but the work must be phased with dust control, noise planning, safety barricades and careful power or data cutover. Phased work usually takes longer than renovating a vacant office." },
      "8": { q: "What delays office renovation the most?", a: "Approval delay, after-hours restriction, aircon coordination, electrical and data changes, sprinkler review, late furniture delivery and late client decisions are the most common delay factors." },
      "9": { q: "How early should we start planning before lease start?", a: "Start planning at least 1 to 2 months before lease commencement. For larger offices or projects involving SCDF/QP review, start 2 to 4 months earlier if possible." },
      "10": { q: "Does office size affect timeline?", a: "Yes. Larger offices need more drawings, more M&E coordination, more trades, more approval checks and more handover testing. The timeline is not only based on square footage, but also layout complexity." },
      "11": { q: "How long does handover take?", a: "Testing, defects, cleaning and handover usually take 3 to 7 days. Larger offices may need a longer defects and IT coordination period before staff move in." },
      "12": { q: "How can ID Work Studio reduce downtime?", a: "We review the floor plan, building rules, approval requirements, M&E constraints and target move-in date early. This allows the schedule to be planned around real site constraints instead of an unrealistic handover date." }
    }
  },
  cta: {
    eyebrow: "Plan before you commit",
    title: "Need a realistic office renovation timeline?",
    body: "WhatsApp us your floor plan, lease handover date and target move-in date. ID Work Studio can advise a realistic programme before you commit to your renovation schedule.",
    whatsapp: "WhatsApp Floor Plan",
    office_service: "View Office Renovation Service"
  }
};

zhT["article_office_renovation_timeline"] = {
  meta: {
    title: "新加坡办公室翻新时间表 | 办公室 Fit-Out 需要多久 | ID Work Studio",
    description: "新加坡办公室翻新时间表指南，说明实际工期、甘特图、大厦审批、MCST、SCDF、机电协调、常见延误与 FAQ。"
  },
  hero_badge: "办公室工期指南",
  hero_alt: "新加坡现代办公室翻新时间规划",
  title: "新加坡办公室翻新时间表：办公室 Fit-Out 实际需要多久",
  subtitle: "以承包商角度说明新加坡办公室装修的排期、审批、现场施工顺序、延误风险与移交规划。",
  read_time: "约 9 分钟",
  intro: "新加坡办公室翻新的实际工期，不只是现场施工天数。它还包括设计确认、业主或 MCST 审批、可能涉及的 SCDF/QP 审查、现场施工、机电协调、家具交付、测试与移交。本指南以承包商实际排期方式说明整个流程。",
  direct_answer: {
    title: "新加坡办公室翻新需要多久？",
    body: "作为实际规划参考，小型办公室通常需要 3 至 6 周，中型办公室需要 6 至 10 周，大型或企业办公室需要 10 至 16 周。这些时间包括规划、审批、现场施工与移交。简单翻新可能更快，但只要涉及隔墙、电工、网络、空调或消防安全工程，就必须预留协调时间。"
  },
  timeline_ranges: {
    "1": { title: "小型办公室", body: "3–6 周" },
    "2": { title: "中型办公室", body: "6–10 周" },
    "3": { title: "大型 / 企业办公室", body: "10–16 周" }
  },
  client_concerns: {
    eyebrow: "客户常见顾虑",
    title: "企业负责人通常最担心什么",
    items: {
      "1": "办公室需要停用多久，员工什么时候能搬入？",
      "2": "公司仍在运作时，是否可以分阶段装修？",
      "3": "业主、MCST 或大厦管理会不会拖慢审批？",
      "4": "洒水器、火警或逃生路线改变是否需要 SCDF/QP 审查？",
      "5": "噪音工程是否可以在下班后或周末进行？",
      "6": "电力、网络与空调是否能在移交前全部完成测试？"
    }
  },
  gantt: {
    title: "办公室翻新常见甘特图排期",
    intro: "办公室翻新的工程通常是重叠进行的。以下甘特图比完整现场排期更容易让客户理解，但仍保留实际施工逻辑：先审批、再主要施工，湿作与隔墙先行，最后才做饰面与移交测试。",
    headers: { stage: "阶段", note: "承包商说明" },
    weeks: ["第1周", "第2周", "第3周", "第4周", "第5周", "第6周", "第7周", "第8周"],
    rows: {
      "1": { stage: "规划与设计", weeks: ["1", "1", "0", "0", "0", "0", "0", "0"], note: "现场测量、平面规划、机电规划与报价确认。" },
      "2": { stage: "业主 / MCST / SCDF 审批", weeks: ["0", "1", "1", "0", "0", "0", "0", "0"], note: "图纸完成后同步进行；复杂消防项目会拉长时间。" },
      "3": { stage: "拆除与清拆", weeks: ["0", "0", "1", "0", "0", "0", "0", "0"], note: "按批准范围拆除原有隔墙、天花、地板或固定家具。" },
      "4": { stage: "泥水与隔墙", weeks: ["0", "0", "1", "1", "0", "0", "0", "0"], note: "新格局成型、石膏板隔墙、茶水间湿作与基层处理。" },
      "5": { stage: "电工与网络", weeks: ["0", "0", "0", "1", "1", "0", "0", "0"], note: "电源点、灯光点、网络线、服务器与工位点位协调。" },
      "6": { stage: "空调工程", weeks: ["0", "0", "0", "1", "1", "0", "0", "0"], note: "风口移位、温控器调整、FCU 协调或风管修改。" },
      "7": { stage: "木工与家具", weeks: ["0", "0", "0", "0", "1", "1", "0", "0"], note: "木工通常场外制作；最终安装取决于现场尺寸确认。" },
      "8": { stage: "饰面工程", weeks: ["0", "0", "0", "0", "1", "1", "0", "0"], note: "油漆、地板、玻璃、灯具安装与最终修补。" },
      "9": { stage: "测试与移交", weeks: ["0", "0", "0", "0", "0", "1", "1", "0"], note: "电力、网络、空调、缺陷修补、清洁与移交准备。" }
    },
    note: "这是工作排期，不是固定承诺。新加坡办公室翻新中，审批延误、下班后施工限制、空调停机协调与供应商交期，都可能让整体工期移动 1 至 3 周。专业排期应预留缓冲时间。"
  },
  phases: {
    title: "完整工期拆解",
    intro: "办公室 fit-out 应分阶段规划。每个阶段都会影响下一个阶段，因此前期决策若仓促，后期现场就容易出现延误或返工。",
    items: {
      "1": { title: "1. 规划与设计", duration: "1–3 周", body: "包括现场测量、工位规划、会议室规划、茶水间规划、电力与网络点位规划、天花图、灯光图与空调影响检查。如果平面不断更改，现场还未开工，排期已经会受影响。" },
      "2": { title: "2. 提交与审批", duration: "1–4 周", body: "多数办公室工程需要业主或大厦管理批准。分层产权办公室可能需要 MCST 批准。提交资料可能包括平面图、天花图、机电资料、施工方法说明、工程时间表、承包商资料、保险与装修押金。若影响消防安全系统，可能需要 Qualified Person 处理 SCDF 相关审查。" },
      "3": { title: "3. 拆除、隔墙与湿作", duration: "1–3 周", body: "此阶段包括清拆、拆除、新隔墙、茶水间湿作、天花基层与修补。若办公楼限制噪音工程时间，即使简单工程也可能比预期更久。" },
      "4": { title: "4. 电工、网络与空调协调", duration: "1–2 周", body: "办公室装修非常依赖电力、灯光、网络、服务器、Wi-Fi 与空调走向。这些工种必须一起协调，因为隔墙与天花改变会影响线槽、风口、回风与灯位。" },
      "5": { title: "5. 木工、家具与饰面", duration: "2–4 周", body: "木工多数在场外制作，但最终尺寸应等现场条件稳定后确认。地板、油漆、玻璃、活动家具、招牌与配件通常在项目后段安装。" },
      "6": { title: "6. 测试、修补与移交", duration: "3–7 天", body: "移交前应检查电源点、灯具、网络点、空调、门、玻璃、锁具与家具摆位。最终清洁与缺陷修补应在员工搬入前完成。" }
    }
  },
  delay_factors: {
    title: "新加坡办公室翻新的真实延误因素",
    intro: "多数办公室翻新延误不是来自拆除或油漆，而是来自审批、大厦限制，以及不同工种之间的协调问题。",
    items: {
      "1": { title: "业主或 MCST 审批延误", body: "大厦管理可能要求修改图纸、补交施工方法说明、保险文件、电梯保护细节或承包商资料，才批准开工。" },
      "2": { title: "下班后施工限制", body: "很多商业大厦只允许傍晚、夜间或周末进行噪音工程。这可能让工期放慢 30% 至 50%，尤其是拆除、钻孔与材料运输。" },
      "3": { title: "电力与网络协调", body: "若工位数量、服务器位置、会议室 AV 或网络点数量没有早定，隔墙完成后可能需要重新拉线与修补。" },
      "4": { title: "空调修改", body: "空调工程可能需要大厦批准、停机时间安排，或与中央空调系统协调。风口、温控器与回风路径必须配合新格局。" },
      "5": { title: "SCDF 或 QP 审查", body: "若工程影响洒水器、火警、烟感、逃生路线、防火隔墙或使用人数，可能需要 SCDF 相关提交。这应在前期检查，而不是开工后才处理。" },
      "6": { title: "第三方供应商延误", body: "家具、玻璃、招牌、门禁、IT 设备与活动家具常由不同供应商负责。若确认太迟，即使装修接近完成，也会影响最终移交。" }
    }
  },
  mistakes: {
    title: "办公室翻新常见错误",
    intro: "缩短办公室翻新工期的最好方式，不是盲目催促现场施工，而是避免会造成返工的决策。",
    items: {
      "1": { title: "审批前就确认搬入日期", body: "在业主、MCST 或大厦管理批准前，不建议锁定员工搬入日期。审批延误一周，就可能影响家具、IT 设置与移交。" },
      "2": { title: "把办公室翻新当成住宅翻新", body: "办公室装修需要合规文件、大厦规则、电梯预约、卸货时间、保险与机电协调，不能像简单住宅工程一样安排。" },
      "3": { title: "太迟规划网络点", body: "网络点、服务器机柜、Wi-Fi 覆盖、会议室 AV 与地插应在隔墙和天花前确认。后期更改会造成重新拉线与修补。" },
      "4": { title: "忽略空调与洒水器影响", body: "改变隔墙会影响空调气流、洒水器覆盖与消防安全要求。这些项目应在设计阶段检查，而不是墙体完成后才发现。" },
      "5": { title: "家具订购太迟", body: "活动家具通常有独立交期。若桌子尺寸、工位数量或送货日期太迟确认，办公室可能装修完成但仍无法正式运作。" }
    }
  },
  faqs: {
    title: "办公室翻新时间表 FAQ",
    items: {
      "1": { q: "新加坡办公室翻新需要多久？", a: "小型办公室通常需要 3 至 6 周，中型办公室需要 6 至 10 周，大型企业办公室需要 10 至 16 周，包括规划、审批、现场施工、测试与移交。" },
      "2": { q: "办公室翻新可以 2 周完成吗？", a: "只有非常小型、纯表面更新的工程有可能约 2 周完成。若是包含隔墙、电工、网络、空调与业主审批的完整办公室 fit-out，通常需要更长时间。" },
      "3": { q: "办公室翻新需要业主批准吗？", a: "需要。多数新加坡办公室翻新在开工前都需要业主或大厦管理批准。常见文件包括图纸、工程时间表、施工方法说明、承包商资料与保险。" },
      "4": { q: "是否需要 MCST 批准？", a: "如果办公室位于分层产权大厦，通常需要 MCST 或管理代理批准后才能开工。" },
      "5": { q: "什么时候需要 SCDF 提交？", a: "若工程影响消防安全系统、洒水器、火警、烟感、逃生路线、防火隔墙或使用人数，可能需要 SCDF 相关提交。适用时应由 Qualified Person 评估。" },
      "6": { q: "办公室装修可以下班后施工吗？", a: "可以，但必须视大厦规定而定。夜间或周末施工可能需要额外批准，并可能拉长工期或增加人工费用。" },
      "7": { q: "公司营运期间可以装修吗？", a: "部分办公室可以，但必须分阶段施工，并处理防尘、噪音、安全围挡、电力或网络切换。分阶段施工通常比空置单位装修更久。" },
      "8": { q: "办公室翻新最常见的延误原因是什么？", a: "审批延误、下班后施工限制、空调协调、电力与网络更改、洒水器审查、家具交付延误与客户后期决定，是最常见的延误因素。" },
      "9": { q: "租约开始前多久应开始规划？", a: "建议至少在租约开始前 1 至 2 个月开始规划。若是较大办公室或涉及 SCDF/QP 审查，最好提前 2 至 4 个月。" },
      "10": { q: "办公室面积会影响工期吗？", a: "会。大型办公室需要更多图纸、机电协调、工种配合、审批检查与移交测试。工期不只看面积，也取决于格局复杂度。" },
      "11": { q: "移交通常需要多久？", a: "测试、缺陷修补、清洁与移交通常需要 3 至 7 天。大型办公室可能需要更长的缺陷处理与 IT 协调时间，员工才能搬入。" },
      "12": { q: "ID Work Studio 如何减少停工时间？", a: "我们会尽早审查平面图、大厦规定、审批要求、机电限制与目标搬入日期，让排期建立在真实现场条件上，而不是不切实际的交付日期。" }
    }
  },
  cta: {
    eyebrow: "先规划，再承诺",
    title: "需要实际办公室翻新时间表？",
    body: "请通过 WhatsApp 发送您的平面图、租约交场日期与目标搬入日期。ID Work Studio 可先为您判断实际工期，再确认装修排期。",
    whatsapp: "WhatsApp 发送平面图",
    office_service: "查看办公室翻新服务"
  }
};


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    detection: {
      order: ['localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],
    },
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;