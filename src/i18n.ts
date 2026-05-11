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
        "styleQuiz": "Style Quiz",
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
        "supporting_line": "Singapore interior design and renovation firm for HDB, condo and commercial spaces, with expertise in bespoke home interiors, office fit-outs and reinstatement works.",
        "cta": "View Our Work",
        "whatsapp": "WhatsApp Us"
      },
      "homepage_authority": {
        "quick_answers": {
          "eyebrow": "Quick renovation answers",
          "title": "Plan your renovation with clearer cost, timeline and process expectations.",
          "subtitle": "Short answers for homeowners and business owners comparing Singapore renovation options before speaking to a designer.",
          "items": [
            {
              "title": "Renovation cost in Singapore",
              "text": "Most HDB, condo and office renovation budgets depend on property condition, carpentry scope, hacking, electrical works and material selection.",
              "link": "/insights/renovation-cost-singapore-2026",
              "label": "Read cost guide"
            },
            {
              "title": "Residential vs commercial timeline",
              "text": "A typical HDB renovation may take weeks, while office projects depend on approvals, reinstatement needs, landlord rules and fit-out sequencing.",
              "link": "/insights/hdb-renovation-timeline-singapore",
              "label": "View timeline guide"
            },
            {
              "title": "Renovation process",
              "text": "A smoother project usually follows a clear path: consult, space planning, design confirmation, quotation, build, inspection and handover.",
              "link": "#process",
              "label": "See our process"
            }
          ]
        },
        "featured_insights": {
          "eyebrow": "Featured insights",
          "title": "Helpful guides for Singapore renovation planning.",
          "subtitle": "Read the deeper guides after getting the overview. These pages support budget planning, approval awareness and project sequencing.",
          "read_article": "Read article",
          "items": [
            {
              "title": "Renovation Cost Singapore 2026",
              "text": "A practical guide to HDB, condo and home renovation budget planning in Singapore.",
              "link": "/insights/renovation-cost-singapore-2026"
            },
            {
              "title": "HDB Renovation Timeline Singapore",
              "text": "Understand sequencing, approvals, material lead times and common causes of delay.",
              "link": "/insights/hdb-renovation-timeline-singapore"
            },
            {
              "title": "Office Renovation Timeline Singapore",
              "text": "A commercial planning guide for office fit-out, reinstatement and handover timelines.",
              "link": "/insights/office-renovation-timeline-singapore"
            }
          ]
        },
        "planning_tools": {
          "eyebrow": "Planning tools",
          "title": "Start with budget clarity and style direction.",
          "subtitle": "Use these tools before consultation so your renovation discussion starts with clearer expectations.",
          "items": [
            {
              "title": "Renovation Cost Calculator",
              "text": "Estimate your HDB, condo, resale, kitchen or toilet renovation budget before requesting a quotation.",
              "href": "/renovation-cost-calculator",
              "label": "Open calculator"
            },
            {
              "title": "HDB Renovation Style Quiz",
              "text": "Explore suitable interior directions before your consultation, from Japandi to modern luxury and warm minimalism.",
              "href": "/hdb-renovation-style-quiz",
              "label": "Take style quiz"
            }
          ]
        },
        "internal_links": {
          "title": "Explore Our Renovation Services",
          "items": [
            {
              "label": "Residential Renovation Singapore",
              "to": "/residential"
            },
            {
              "label": "Commercial Renovation Singapore",
              "to": "/commercial"
            },
            {
              "label": "Renovation Guides & Insights",
              "to": "/insights"
            },
            {
              "label": "Renovation Cost Calculator Singapore",
              "to": "/renovation-cost-calculator"
            },
            {
              "label": "HDB Renovation Style Quiz",
              "to": "/hdb-renovation-style-quiz"
            },
            {
              "label": "Renovation Portfolio Singapore",
              "to": "/gallery"
            },
            {
              "label": "Contact ID Work Studio",
              "to": "/contact"
            }
          ]
        },
        "trust": {
          "eyebrow": "Why ID Work Studio",
          "title": "Registered, structured and design-led.",
          "signals": [
            "BCA-registered renovation and interior design firm in Singapore.",
            "HDB-approved for residential renovation works and HDB project coordination.",
            "Experience across HDB homes, condos, office fit-outs and commercial reinstatement.",
            "Premium positioning with practical budgeting, sequencing and handover planning."
          ]
        },
        "project_snippets": {
          "eyebrow": "Example project snippets",
          "title": "Budget and timing examples for planning.",
          "items": [
            {
              "type": "HDB Resale Renovation",
              "size": "4-room HDB · about 969 sqft",
              "range": "Planning range: $45k–$70k",
              "duration": "Typical duration: 8–10 weeks"
            },
            {
              "type": "Office Fit-Out",
              "size": "Commercial office · about 1,200 sqft",
              "range": "Planning range: $70–$120 per sqft",
              "duration": "Typical duration: 5–8 weeks"
            }
          ]
        },
        "faq": {
          "eyebrow": "Renovation FAQ",
          "title": "Short answers before you start planning.",
          "learn_more": "Learn more",
          "items": [
            {
              "question": "How much should I budget for renovation in Singapore?",
              "answer": "Budget depends on property type, condition and scope. Start with a planning range, then confirm after floor plan review and site measurement.",
              "link": "/insights/renovation-cost-singapore-2026"
            },
            {
              "question": "How long does an HDB renovation usually take?",
              "answer": "Many HDB renovations take several weeks, with timing affected by hacking, carpentry, permits, material lead time and supplier coordination.",
              "link": "/insights/hdb-renovation-timeline-singapore"
            },
            {
              "question": "Do commercial renovations need more planning?",
              "answer": "Yes. Office and retail projects may involve landlord rules, building management, reinstatement, fire safety and permit requirements.",
              "link": "/commercial"
            },
            {
              "question": "Can I estimate my renovation cost before meeting a designer?",
              "answer": "Yes. Use our calculator as a first planning guide, then request an itemised quotation after scope and measurements are checked.",
              "link": "/renovation-cost-calculator"
            },
            {
              "question": "How do I choose a renovation style?",
              "answer": "Start with lifestyle, storage needs, lighting preference and maintenance level. The style quiz helps narrow your direction before consultation.",
              "link": "/hdb-renovation-style-quiz"
            }
          ]
        }
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
        "commercial": {
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
              }
            }
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
          "next": {
            "cta": "Read Guide"
          },
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
          },
          "6": {
            "category": "Office Renovation Guide",
            "title": "Office Renovation Timeline Singapore: How Long an Office Fit-Out Really Takes",
            "excerpt": "A realistic breakdown of office renovation timelines in Singapore, including approvals, coordination delays, and what actually affects project completion.",
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
        "styleQuiz": "风格测验",
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
        "supporting_line": "新加坡室内设计与翻新公司，服务 HDB、私人公寓与商业空间，专注于定制住宅室内设计、办公室装修及恢复原状工程。",
        "cta": "查看我们的作品",
        "whatsapp": "WhatsApp 立即咨询"
      },
      "homepage_authority": {
        "quick_answers": {
          "eyebrow": "翻新快速指南",
          "title": "更清楚掌握翻新预算、工期与流程。",
          "subtitle": "为正在比较新加坡翻新方案的屋主与商业客户，提供简洁清楚的规划重点。",
          "items": [
            {
              "title": "新加坡翻新费用",
              "text": "HDB、公寓与办公室翻新预算，通常取决于房屋状况、木工范围、拆除工程、电工工程与材料选择。",
              "link": "/insights/renovation-cost-singapore-2026",
              "label": "阅读费用指南"
            },
            {
              "title": "住宅与商业翻新工期",
              "text": "HDB 翻新通常需要数周；办公室项目则会受审批、恢复原状、大厦规定与装修流程安排影响。",
              "link": "/insights/hdb-renovation-timeline-singapore",
              "label": "查看工期指南"
            },
            {
              "title": "翻新流程",
              "text": "更顺利的项目通常会经过咨询、空间规划、设计确认、报价、施工、检查与移交。",
              "link": "#process",
              "label": "查看我们的流程"
            }
          ]
        },
        "featured_insights": {
          "eyebrow": "精选见解",
          "title": "帮助您规划新加坡翻新的实用指南。",
          "subtitle": "先了解重点，再阅读更深入的指南。这些内容有助于预算规划、审批意识与项目工期安排。",
          "read_article": "阅读全文",
          "items": [
            {
              "title": "新加坡翻新费用 2026",
              "text": "为 HDB、公寓与住宅翻新预算规划整理的实用指南。",
              "link": "/insights/renovation-cost-singapore-2026"
            },
            {
              "title": "新加坡 HDB 翻新时间表",
              "text": "了解施工顺序、审批、材料交期以及常见延误原因。",
              "link": "/insights/hdb-renovation-timeline-singapore"
            },
            {
              "title": "新加坡办公室翻新时间表",
              "text": "办公室装修、恢复原状与移交工期的商业规划指南。",
              "link": "/insights/office-renovation-timeline-singapore"
            }
          ]
        },
        "planning_tools": {
          "eyebrow": "规划工具",
          "title": "先掌握预算，再确认风格方向。",
          "subtitle": "咨询前先使用这些工具，让翻新讨论从更清楚的预算与设计预期开始。",
          "items": [
            {
              "title": "Renovation Cost Calculator",
              "text": "在索取正式报价前，先估算 HDB、公寓、转售屋、厨房或厕所翻新的预算范围。",
              "href": "/renovation-cost-calculator",
              "label": "打开计算器"
            },
            {
              "title": "HDB Renovation Style Quiz",
              "text": "在咨询前探索适合您的室内风格方向，从 Japandi 到现代奢华与温暖极简。",
              "href": "/hdb-renovation-style-quiz",
              "label": "开始风格测验"
            }
          ]
        },
        "internal_links": {
          "title": "探索我们的翻新服务",
          "items": [
            {
              "label": "新加坡住宅翻新",
              "to": "/residential"
            },
            {
              "label": "新加坡商业翻新",
              "to": "/commercial"
            },
            {
              "label": "翻新指南与见解",
              "to": "/insights"
            },
            {
              "label": "新加坡翻新费用计算器",
              "to": "/renovation-cost-calculator"
            },
            {
              "label": "HDB 翻新风格测验",
              "to": "/hdb-renovation-style-quiz"
            },
            {
              "label": "新加坡翻新作品集",
              "to": "/gallery"
            },
            {
              "label": "联系 ID Work Studio",
              "to": "/contact"
            }
          ]
        },
        "trust": {
          "eyebrow": "为什么选择 ID Work Studio",
          "title": "注册合规、流程清晰、以设计为核心。",
          "signals": [
            "新加坡 BCA 注册室内设计与翻新公司。",
            "HDB 注册承包商，可协调住宅翻新与 HDB 工程事项。",
            "具备 HDB 住宅、公寓、办公室装修与商业恢复原状经验。",
            "以高质感定位结合实际预算、工期安排与移交规划。"
          ]
        },
        "project_snippets": {
          "eyebrow": "项目预算参考",
          "title": "用于前期规划的预算与工期例子。",
          "items": [
            {
              "type": "HDB 转售屋翻新",
              "size": "4房式 HDB · 约 969 sqft",
              "range": "规划预算：$45k–$70k",
              "duration": "典型工期：8–10 周"
            },
            {
              "type": "办公室装修",
              "size": "商业办公室 · 约 1,200 sqft",
              "range": "规划预算：每 sqft $70–$120",
              "duration": "典型工期：5–8 周"
            }
          ]
        },
        "faq": {
          "eyebrow": "翻新常见问题",
          "title": "开始规划前的简短解答。",
          "learn_more": "了解更多",
          "items": [
            {
              "question": "在新加坡翻新应该准备多少预算？",
              "answer": "预算取决于房屋类型、屋况与工程范围。建议先用规划预算开始，再通过平面图审查与现场测量确认。",
              "link": "/insights/renovation-cost-singapore-2026"
            },
            {
              "question": "HDB 翻新通常需要多久？",
              "answer": "许多 HDB 翻新需要数周，实际工期会受拆除、木工、许可证、材料交期与供应商协调影响。",
              "link": "/insights/hdb-renovation-timeline-singapore"
            },
            {
              "question": "商业翻新是否需要更多规划？",
              "answer": "是的。办公室与零售项目可能涉及业主规定、大厦管理、恢复原状、消防安全与许可证要求。",
              "link": "/commercial"
            },
            {
              "question": "见设计师前可以先估算翻新费用吗？",
              "answer": "可以。您可以先使用我们的计算器作为预算参考，再在确认范围与测量后索取详细分项报价。",
              "link": "/renovation-cost-calculator"
            },
            {
              "question": "我应该如何选择翻新风格？",
              "answer": "先从生活习惯、收纳需求、灯光偏好与维护难度开始。风格测验可帮助您在咨询前缩小方向。",
              "link": "/hdb-renovation-style-quiz"
            }
          ]
        }
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
        "commercial": {
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
              }
            }
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
          "next": {
            "cta": "阅读指南"
          },
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
          },
          "6": {
            "category": "办公室翻新指南",
            "title": "新加坡办公室翻新时间表：办公室装修实际需要多久",
            "excerpt": "详细解析新加坡办公室翻新时间，包括审批流程、现场协调以及常见延误因素。",
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
      category: "Office Renovation Guide",
      title: "Office Renovation Timeline Singapore: How Long an Office Fit-Out Really Takes",
      excerpt: "A realistic breakdown of office renovation timelines in Singapore, including approvals, coordination delays, and what actually affects project completion.",
      read_time: "8 min read"
    },
    "7": {
      category: "Home Planning Guide",
      title: "Mistakes Singapore Homeowners Make When Buying Renovation Items Overseas",
      excerpt: "A practical Singapore guide to buying furniture, tiles, taps, shower sets, appliances and decor from overseas platforms — including sizing, voltage, WELS, SAFETY Mark, warranty and shipping risks.",
      read_time: "10 min read"
    },
    "8": {
      category: "Wellness Design Guide",
      title: "Beyond Superstition: A Data-Driven Guide to Feng Shui Renovations in Singapore",
      excerpt: "A practical Singapore guide to modern feng shui through environmental psychology, stress-reduction layouts, lighting, storage, Japandi interiors and HDB or condo planning.",
      read_time: "11 min read"
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
      category: "办公室翻新指南",
      title: "新加坡办公室翻新时间表：办公室装修实际需要多久",
      excerpt: "详细解析新加坡办公室翻新时间，包括审批流程、现场协调以及常见延误因素。",
      read_time: "约 8 分钟"
    },
    "7": {
      category: "住宅规划指南",
      title: "新加坡业主海外购买翻新用品常见错误",
      excerpt: "从海外平台购买家具、瓷砖、水龙头、花洒、电器与软装前应注意的实用指南，涵盖尺寸、电压、WELS 节水标签、SAFETY Mark、安全、保修与运输风险。",
      read_time: "约 10 分钟"
    },
    "8": {
      category: "疗愈设计指南",
      title: "超越迷信：新加坡风水装修的数据化与实用设计指南",
      excerpt: "从环境心理学、减压空间规划、灯光、收纳、Japandi风格与HDB或公寓装修角度，重新理解现代风水。",
      read_time: "约 11 分钟"
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








// Renovation Cost Singapore 2026 article: affected keys added for FAQ and related links.
// Critical SEO FAQ content is rendered statically in the TSX article so raw HTML remains crawlable.
enT["article_renovation_cost_2026"].internal_links = {
  eyebrow: "Related renovation guides",
  title: "Plan your renovation with clearer cost, timeline and risk control",
  timeline_intro: "If you are comparing renovation budget against the actual project schedule, read our",
  timeline_link: "HDB renovation timeline guide",
  timeline_outro: "to understand approval, delivery sequencing, carpentry lead time and common move-in delays.",
  mistakes_intro: "To avoid unnecessary variation orders, also read our",
  mistakes_link: "renovation mistakes Singapore homeowners should avoid",
  mistakes_outro: "before confirming materials, layout and quotation items.",
  calculator_intro: "For a quick starting estimate, use the",
  calculator_link: "Singapore renovation cost calculator",
  calculator_outro: "before sending your floor plan for a detailed contractor quotation."
};

zhT["article_renovation_cost_2026"].internal_links = {
  eyebrow: "相关翻新指南",
  title: "用更清楚的费用、工期和风险规划翻新",
  timeline_intro: "如果你想把翻新预算和实际工期一起规划，可以阅读我们的",
  timeline_link: "HDB 翻新时间表指南",
  timeline_outro: "了解审批、施工顺序、木作交期和常见搬入延误。",
  mistakes_intro: "为了避免不必要的追加费用，也建议阅读",
  mistakes_link: "新加坡业主常见翻新错误",
  mistakes_outro: "再确认材料、布局和报价项目。",
  calculator_intro: "如果需要先做初步预算，可以使用",
  calculator_link: "新加坡翻新费用计算器",
  calculator_outro: "再把平面图发给我们准备更详细的承包商报价。"
};

enT["article_renovation_cost_2026"].faq = {
  title: "Renovation cost FAQ",
  items: {
    "1": { q: "How much should I budget for a 4-room HDB renovation in Singapore in 2026?", a: "For a 4-room HDB in Singapore, a practical 2026 renovation budget is usually around $50,000 to $60,000 for a BTO and $70,000 to $81,000 for a resale flat. The resale range is higher because hacking, disposal, rewiring, plumbing replacement and waterproofing are more common." },
    "2": { q: "Why is resale renovation more expensive than BTO renovation?", a: "Resale renovation usually costs more because the contractor must first remove old finishes, check existing wiring and plumbing, repair uneven surfaces, redo waterproofing in wet areas and handle more site-condition risks. These works happen before the new design finishes are installed." },
    "3": { q: "What are the biggest renovation cost drivers in Singapore homes?", a: "The biggest cost drivers are usually carpentry, kitchen worktops, bathroom wet works, tile selection, electrical rewiring, plumbing upgrades and design complexity. Full-height cabinets, curved carpentry, large-format tiles and sintered stone surfaces can push the budget up quickly." },
    "4": { q: "Is $50,000 enough for a home renovation in Singapore?", a: "$50,000 can be enough for a practical BTO renovation or a lighter resale scope, but it may not be enough for a full resale renovation with extensive hacking, rewiring, plumbing, carpentry and premium finishes. The key is to decide which areas matter most before confirming the scope." },
    "5": { q: "How much buffer should homeowners set aside for renovation?", a: "A sensible buffer is 10% to 15% for BTO or newer homes and 15% to 25% for resale homes. Older resale units have more unknowns, especially after hacking starts and concealed wiring, pipe condition or floor levels become clearer." },
    "6": { q: "Does renovation cost include furniture, appliances and curtains?", a: "Not always. Many renovation quotations cover built-in works such as carpentry, masonry, electrical, plumbing, painting and ceiling works. Loose furniture, appliances, curtains, blinds, mattresses and decorative lighting may be separate, so homeowners should check the quotation line by line." },
    "7": { q: "Why do quotations from different renovation companies vary so much?", a: "Quotations can vary because of material specifications, carpentry dimensions, worktop grade, tile size, electrical quantity, wet-work scope, warranty responsibility and whether important items are omitted. The cheapest quote is not always cheaper after variations are added." },
    "8": { q: "Should I choose quartz or sintered stone for my kitchen worktop?", a: "Quartz is still a practical and common option for many Singapore homes. Sintered stone usually costs more but gives a more premium look and better heat resistance. The right choice depends on cooking habits, design expectations and how much of the budget is allocated to the kitchen." },
    "9": { q: "Can I reduce renovation cost without making the home look cheap?", a: "Yes. Keep the layout practical, avoid unnecessary built-in carpentry, use feature finishes only where they are most visible, choose durable mid-range materials and avoid late design changes. Good space planning often matters more than using the most expensive material everywhere." },
    "10": { q: "When should I ask for a renovation quotation?", a: "Ask for a quotation after you have a floor plan, rough design direction, budget range, preferred move-in date and clear priorities. For resale homes, a site visit is important because existing conditions can change the cost significantly." },
    "11": { q: "Do HDB renovation works need approval?", a: "Some HDB renovation works require approval, especially hacking, wet-area works, wall changes and certain plumbing or window-related works. Homeowners should work with an HDB-registered renovation contractor and confirm approval requirements before starting site work." },
    "12": { q: "How can I avoid renovation cost overruns?", a: "Avoid cost overruns by confirming the scope early, checking quotation inclusions, planning electrical and carpentry properly, avoiding last-minute material changes and keeping a realistic contingency buffer. Most overruns come from unclear scope or late changes, not from one single item." }
  }
};

zhT["article_renovation_cost_2026"].faq = {
  title: "翻新费用常见问题",
  items: {
    "1": { q: "2026 年新加坡 4 房式 HDB 翻新应预算多少？", a: "新加坡 4 房式 HDB 的实际预算，BTO 通常约 $50,000 至 $60,000，转售组屋通常约 $70,000 至 $81,000。转售单位较高，是因为更常涉及拆除、清运、重拉电线、更换水喉和防水工程。" },
    "2": { q: "为什么转售组屋翻新比 BTO 贵？", a: "转售翻新通常更贵，因为承包商需要先拆除旧饰面、检查原有电线和水喉、修补不平整表面、重做湿区防水，并处理更多现场不确定因素。这些工程通常在新设计安装前就已经产生费用。" },
    "3": { q: "新加坡住宅翻新最大的费用驱动因素是什么？", a: "最大费用驱动因素通常是木作、厨房台面、浴室湿作、瓷砖选择、电线重拉、水喉升级和设计复杂度。全高柜、弧形木作、大板砖和岩板台面都会快速提高预算。" },
    "4": { q: "$50,000 够不够做新加坡住宅翻新？", a: "$50,000 可以适用于实用型 BTO 翻新或较轻量的转售工程，但如果是完整转售翻新并包含大量拆除、电线、水喉、木作和较高等级饰面，通常不够。关键是先确认哪些空间和项目最重要。" },
    "5": { q: "业主应预留多少翻新备用金？", a: "BTO 或较新的住宅建议预留 10% 至 15%，转售单位建议预留 15% 至 25%。较旧的转售单位在拆除后更容易发现隐藏问题，例如电线、水管或地面水平问题。" },
    "6": { q: "翻新费用包括家具、电器和窗帘吗？", a: "不一定。许多翻新报价主要包括固定工程，例如木作、泥水、电工、水喉、油漆和天花。活动家具、电器、窗帘、百叶帘、床垫和装饰灯具可能另计，业主应逐项检查报价。" },
    "7": { q: "为什么不同装修公司的报价差这么多？", a: "报价差异可能来自材料规格、木作尺寸、台面等级、瓷砖尺寸、电工数量、湿作范围、保修责任，以及是否遗漏重要项目。最便宜的报价不一定在追加费用后仍然便宜。" },
    "8": { q: "厨房台面应该选石英石还是岩板？", a: "石英石仍然是许多新加坡家庭实用且常见的选择。岩板通常费用更高，但视觉更高级，也有较好的耐热表现。选择应根据烹饪习惯、设计要求和厨房预算来决定。" },
    "9": { q: "如何降低翻新费用但不让家看起来廉价？", a: "可以。保持布局实用、避免不必要的固定木作、把重点饰面用在最显眼的位置、选择耐用的中档材料，并避免后期更改设计。好的空间规划往往比到处使用最贵材料更重要。" },
    "10": { q: "什么时候应该要求装修报价？", a: "当你已有平面图、初步设计方向、预算范围、预期搬入日期和主要优先事项后，就可以要求报价。对于转售单位，现场查看很重要，因为现场条件会明显影响费用。" },
    "11": { q: "HDB 翻新工程需要申请批准吗？", a: "部分 HDB 翻新工程需要批准，特别是拆墙、湿区工程、墙体改动，以及某些水喉或窗户相关工程。业主应选择 HDB 注册承包商，并在开工前确认审批要求。" },
    "12": { q: "如何避免翻新超支？", a: "避免超支的方法包括尽早确认工程范围、检查报价包含项目、提前规划电工和木作、避免临时更换材料，并预留现实的备用金。多数超支来自范围不清或后期更改，而不是单一项目。" }
  }
};



// HDB timeline article: affected keys added for FAQ, related links and CTA.
// Critical SEO FAQ content is rendered statically in the TSX article so raw HTML remains crawlable.








// Renovation mistakes article: affected keys added for FAQ, related links and CTA.
// Critical SEO FAQ content is rendered statically in the TSX article so raw HTML remains crawlable.


enT["article_renovation_cost_2026"].cta = {
  eyebrow: "Renovation Budget Planning",
  title: "Want a more accurate renovation estimate?",
  body: "Send us your floor plan, property type and preferred renovation scope. We can help you check whether your budget is realistic before you commit to materials, carpentry and site works.",
  button: "WhatsApp for Renovation Budget Review"
};
zhT["article_renovation_cost_2026"].cta = {
  eyebrow: "翻新预算规划",
  title: "想获得更准确的翻新预算吗？",
  body: "把您的平面图、房屋类型和预计翻新范围发给我们。我们可以在您确认材料、木作和现场工程前，协助判断预算是否实际。",
  button: "WhatsApp 咨询翻新预算"
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