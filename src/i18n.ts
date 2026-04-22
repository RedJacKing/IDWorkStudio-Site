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
        "gallery": "Gallery",
        "contact": "Contact"
      },
      "accreditation": {
        "hdb": "HDB-Registered",
        "bca": "BCA-Registered",
        "firm": "Firm"
      },
      "hero": {
        "title_main": "Interior Design & Renovation",
        "title_sub": "For the Modern Visionary",
        "subtitle": "BCA-registered and HDB-registered renovation contractor in Woodlands, Singapore. Over 10 years delivering residential renovations — HDB BTO, resale flats, condominiums, landed homes — and commercial fit-outs for offices, retail shops, and mall stores across all Singapore districts.",
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
        "title": "Our Renovation Services",
        "subtitle": "BCA-registered and HDB-registered contractor for office fit-out, retail and mall renovation, and residential works across all Singapore districts.",
        "residential": {
          "title": "Residential Renovation",
          "desc": "Transforming HDBs, Condos, and Landed properties into dream homes. Specialized in space planning and lifestyle-centric designs."
        },
        "commercial": {
          "title": "Office & Retail Renovation",
          "desc": "BCA-registered fit-out contractor for offices, retail shops, and mall stores across Singapore. We handle space planning, partitioning, M&E, MCST submissions, and all permit applications. Office renovation from $50 psf · Retail fit-out from $65 psf."
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
          "title": "Modern Visionary Living for Singapore Homeowners",
          "subtitle": "BCA-Registered & HDB-Registered Partner. We handle all HDB permits and structural submissions for your peace of mind.",
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
          "title": "HDB Registered Contractor Singapore",
          "items": {
            "1": {
              "title": "BTO Renovation Ideas",
              "desc": "Expert solutions for Tengah, Bidadari, and Tampines North. Turnkey delivery from defect checking to HDB permit handling."
            },
            "2": {
              "title": "Condo Interior Design Singapore",
              "desc": "Elevating private living with premium finishes and structural re-configuration. Specialized in Modern Luxury and Warm Minimalism."
            },
            "3": {
              "title": "Landed Property A&A Works",
              "desc": "Comprehensive Addition & Alteration works. We manage structural submissions and architectural enhancements for landed homes."
            }
          },
          "testimonial": {
            "quote": "HDB & BCA Registered Interior Design specializing in Modern BTO & Resale Renovation in Singapore.",
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
          "subtitle": "Secure your slot for 2026. Consult with our HDB-registered design experts today.",
          "button": "Book a Home Consultation"
        }
      },
      "commercial_page": {
        "hero": {
          "title": "Expert Office Renovations & Commercial Fit-outs in Singapore",
          "subtitle": "Retail, F&B, and Reinstatement Services by BCA-Registered Contractors",
          "cta": "Request Site Survey",
          "cta_reinstatement": "LEARN MORE ABOUT REINSTATEMENT"
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
              "desc": "Registered contractor for all necessary Building and Construction Authority permits."
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
          "title": "Frequently Asked Questions",
          "q1": { "q": "What is the average timeline for an office fit-out in Singapore?", "a": "For a standard office fit-out in Singapore (approx. 2,000–5,000 sqft), the timeline typically ranges from <strong>4 to 8 weeks</strong>. This includes 1–2 weeks for design and material selection, 1–2 weeks for BCA/SCDF submissions, and 4–6 weeks for renovation works. Complex projects requiring extensive M&E works or structural changes may take 8–12 weeks." },
          "q2": { "q": "How does a BCA-registered firm ensure commercial safety compliance?", "a": "As a BCA-registered firm, we ensure compliance through a rigorous 3-step process:<br/><br/>1. <strong>Pre-Submission Checks:</strong> Our QPs review all designs against current SCDF Fire Code and BCA accessibility standards.<br/>2. <strong>Permit Management:</strong> We handle all necessary submissions to BCA, URA, and FSSD before work commences.<br/>3. <strong>Site Supervision:</strong> Licensed CoreTrade personnel supervise critical works to ensure they meet approved specifications and safety regulations." },
          "q3": { "q": "How much does commercial renovation cost in Singapore?", "a": "<strong>Office fit-out:</strong> S$50–S$180+ psf. <strong>Retail/mall store:</strong> S$65–S$150 psf. <strong>Shophouse renovation:</strong> from S$150 psf for interior works, excluding facade restoration. All budgets should include 3–5% for permits and professional fees. These figures cover carpentry, flooring, ceiling works, lighting, and basic M&E — furniture, IT, and signage are additional." },
          "q4": { "q": "Do I need MCST approval before BCA or SCDF submissions?", "a": "Yes — and this is the most common mistake tenants make. <strong>MCST (building management) approval must come first</strong>, before any government authority submission. MCST requires floor plans, electrical single-line diagrams, fire sprinkler layouts, a renovation deposit (typically S$2,000–S$5,000), and a public liability insurance certificate — submitted at least 1–2 weeks before works begin." },
          "q5": { "q": "What is a Licensed Electrical Worker (LEW) and do I need one?", "a": "A LEW is certified by the Energy Market Authority (EMA) to carry out and certify electrical installations. For most commercial renovation, you need a <strong>Grade 8 LEW</strong> (authorised up to 500kVA). Any non-domestic premises with an approved load exceeding 45kVA must hold a valid EMA Electrical Installation Licence — applied for by your Grade 8 LEW. Without this, your landlord cannot legally sign off on handover." },
          "q6": { "q": "Can ID Work Studio handle both design and construction?", "a": "Yes. We are a <strong>design-and-build firm</strong> — interior design, space planning, and the full renovation build are managed under one contract. This single-point accountability compresses timelines, eliminates miscommunication between design and build teams, and gives you one project manager responsible for delivery from concept to key handover, including all permit submissions." }
        },
        "process": {
          "title": "Commercial Renovation Process",
          "subtitle": "From first call to key handover — here is exactly how we work.",
          "steps": {
            "1": { "title": "Free Site Survey & Brief", "detail": "Week 1", "desc": "We visit your space, understand your business requirements, and assess the BCA, SCDF, and MCST obligations specific to your building and scope." },
            "2": { "title": "Design & Fixed Quotation", "detail": "Weeks 1–2", "desc": "Space planning, 3D visuals, material selection, and a detailed fixed-price quotation. No open-ended contracts, no hidden costs." },
            "3": { "title": "Permit Submissions", "detail": "Weeks 2–4", "desc": "Simultaneous MCST, BCA, and SCDF submissions managed by our team. Physical work does not begin until all approvals are in hand." },
            "4": { "title": "Renovation Works", "detail": "Weeks 4–14", "desc": "Our site team executes to programme with weekly progress updates. LEW-supervised electrical works certified on completion." },
            "5": { "title": "Snagging & Handover", "detail": "Final week", "desc": "Joint walkthrough, defect rectification, all compliance certificates issued, EMA COC submitted, and keys handed over." }
          }
        },
        "partners": {
          "title": "Trusted by Singapore's Leading Brands",
          "subtitle": "From MNCs and retail chains to F&B concepts and healthcare providers — our clients trust us to deliver on time and on budget."
        },
        "subpages": {
          "section_title": "Our Commercial Specialisations",
          "section_subtitle": "Every commercial space type has its own approval process, its own compliance requirements, and its own design logic. Select your project type below.",
          "office": {
            "title": "Office Renovation",
            "desc": "Full turnkey fit-out — space planning, partitioning, M&E, and all BCA, SCDF, and MCST permit submissions. From $50 psf.",
            "detail": "6–12 weeks · BCA registered"
          },
          "retail": {
            "title": "Retail & Mall Store",
            "desc": "MCST submission experts. Shopfront design, display systems, night-works capable. Serving CapitaLand, Frasers, and Mapletree malls.",
            "detail": "6–12 weeks · Night-works capable"
          },
          "shophouse": {
            "title": "Shophouse Renovation",
            "desc": "URA Conservation Permission, BCA structural, and SCDF fire safety — the three-agency process most contractors cannot navigate.",
            "detail": "Tanjong Pagar · Chinatown · Kampong Glam"
          },
          "compliance": {
            "title": "Permits & Compliance",
            "desc": "MCST, BCA, SCDF fire safety, and EMA Licensed Electrical Worker (LEW) requirements — explained and managed in full.",
            "detail": "SCDF · LEW Grade 8 · BCA · MCST"
          },
          "reinstatement_row": "Office & Mall Reinstatement — Bare Shell Handover",
          "reinstatement_detail": "100% deposit return · MCST & SCDF compliant · Free site survey",
          "reinstatement_label": "Also Available",
          "btn": "Learn More"
        },
        "cta": {
          "title": "Ready to Transform Your Business Space?",
          "subtitle": "Partner with a trusted, BCA-registered commercial contractor for your next project.",
          "button": "Get Commercial Quote"
        }
      },
      "office_reno_page": {
        "hero": {
          "badge": "HDB-Registered HB-02-5250G · BCA-Registered",
          "serif": "Singapore's Trusted",
          "bold": "Office Renovation Contractor",
          "subtitle": "Full turnkey office fit-out — space planning, partitioning, M&E, and every permit submission managed in-house. Offices from 500 to 10,000 sq ft across all Singapore districts.",
          "cta": "Get a Free Site Survey",
          "b1": "BCA-Registered Contractor",
          "b2": "Full Permit Management",
          "b3": "On-Time Delivery Guarantee"
        },
        "overview": {
          "serif": "What Does",
          "bold": "Office Renovation Cover?",
          "p1": "Office renovation in Singapore is the process of transforming a leased or owned commercial space into a functional, brand-aligned workspace. Unlike residential renovation, it requires managing government authority submissions — BCA, SCDF, and sometimes URA — in addition to your building management's own fit-out requirements, all before the first wall goes up.",
          "p2": "As a BCA-registered contractor with over 10 years of commercial fit-out experience, ID Work Studio handles every step: space planning and layout, partition systems, mechanical and electrical (M&E) works, false ceiling, flooring, custom carpentry, and all authority submissions. One firm, one point of contact, from site survey to key handover.",
          "p3": "Office renovation costs in Singapore typically range from <strong>S$50–S$100 psf</strong> for a budget fit-out, <strong>S$100–S$180 psf</strong> for a mid-range office with glass partitions and custom M&E, and <strong>S$180+ psf</strong> for a premium design-build. Set aside a further 3–5% of your total budget for permits and professional fees.",
          "c1t": "SMEs & Growing Businesses",
          "c1d": "First office fit-out or expansion fit-out. We help you design for today's headcount while planning for growth.",
          "c2t": "MNCs & Regional Offices",
          "c2d": "Fit-outs in Grade A CBD buildings with restricted working hours and complex M&E requirements. We know the process.",
          "c3t": "Businesses Relocating",
          "c3d": "Moving office? We coordinate the new fit-out and reinstatement of your existing space simultaneously to reduce lease overlap costs."
        },
        "scope": {
          "serif": "Everything",
          "bold": "Included in Our Office Fit-Out",
          "i1t": "Space Planning & Layout",
          "i1d": "Optimised floor plans for workflow, collaboration zones, private offices, and breakout areas — designed around your headcount and brand.",
          "i2t": "Partition Systems",
          "i2d": "Drywall, frameless glass, and acoustic partitions. Full-height, partial-height, and demountable systems to suit any floor plate.",
          "i3t": "Mechanical & Electrical",
          "i3d": "Electrical distribution, data and power cabling, aircon (FCU/VRV/cassette), LED lighting design, and PA/AV rough-in.",
          "i4t": "False Ceiling & Flooring",
          "i4d": "Grid and open-plan ceilings, vinyl plank, carpet tiles, raised access floors, and epoxy finishes for server or storage rooms.",
          "i5t": "Custom Carpentry",
          "i5d": "Reception counters, workstation joinery, storage walls, pantry cabinetry, and feature walls built to your brand specifications.",
          "i6t": "All Permit Submissions",
          "i6d": "BCA building plans, SCDF fire safety, MCST and landlord submissions — managed start to finish so you can focus on your business."
        },
        "stats": {
          "s1u": "psf",
          "s1l": "Typical Cost Range",
          "s2u": "weeks",
          "s2l": "Construction Duration",
          "s3u": "weeks",
          "s3l": "BCA Permit Processing"
        },
        "challenges": {
          "serif": "Overcoming",
          "bold": "Office Renovation Challenges",
          "ch_label": "The Challenge",
          "sol_label": "Our Solution",
          "p1pain": "Permit Delays & Stop-Work Orders",
          "p1sol": "We submit BCA, SCDF, and MCST in the legally required sequence. Work never starts until every sign-off is in hand — preventing costly stop-work orders.",
          "p2pain": "Business Disruption During Works",
          "p2sol": "Phased renovation strategies and after-hours scheduling keep your team operational throughout the fit-out — no forced office closures.",
          "p3pain": "Grade A Building Complexity",
          "p3sol": "We work regularly in CapitaLand, Keppel, and Mapletree buildings. Restricted lift hours, hoarding requirements, insurance certificates — all managed."
        },
        "trust": { "text": "Trusted by Singapore businesses for over 10 years of on-time, fully compliant office fit-outs." },
        "process": {
          "serif": "Our Seamless",
          "bold": "4-Step Process",
          "s1t": "Free Site Survey",
          "s1d": "We visit your space, assess scope, and deliver a detailed fixed-price quotation within 3 working days.",
          "s2t": "Design & Permits",
          "s2d": "Space planning, 3D visuals, and simultaneous MCST, BCA, and SCDF submissions — no agency chasing required.",
          "s3t": "Renovation Works",
          "s3d": "Our site team executes with precision. Weekly progress updates keep you informed without site visits.",
          "s4t": "Snagging & Handover",
          "s4d": "Final walkthrough, defect rectification, and handover with all compliance certificates."
        },
        "faq": {
          "title": "Frequently Asked Questions",
          "q1": "How much does office renovation cost in Singapore?",
          "a1": "Office renovation typically costs <strong>S$50–S$100 psf</strong> for a budget fit-out, <strong>S$100–S$180 psf</strong> for a mid-range office with glass partitions and custom M&E, and <strong>S$180+ psf</strong> for premium design-build. For a 1,500 sq ft office, budget S$75,000–S$270,000 excluding furniture, IT, and signage. Add 3–5% of your total budget for permits and professional fees.",
          "q2": "Do I need a BCA permit for office renovation in Singapore?",
          "a2": "Yes — for any structural changes, partition works affecting fire compartmentation, or M&E modifications. <strong>SCDF fire safety plan submission</strong> is also required if sprinkler heads, smoke detectors, or escape routes are affected. Importantly, <strong>building management (MCST) approval must come first</strong>, before any government authority submission. As a BCA-registered contractor, ID Work Studio handles all submissions as part of our service.",
          "q3": "How long does office renovation take in Singapore?",
          "a3": "A standard office fit-out for 1,000–3,000 sq ft takes <strong>6–12 weeks for construction</strong>, plus <strong>2–4 weeks for BCA permit processing</strong> before any physical work begins. Offices in CBD Grade A buildings add a further 2–4 weeks due to restricted goods lift hours and night-works-only requirements. From first site survey to key handover, allow <strong>10–18 weeks</strong> in total."
        },
        "related": { "title": "Explore Our Other Commercial Services" },
        "cta": {
          "serif": "Ready to Transform",
          "bold": "Your Workspace?",
          "btn": "WhatsApp for a Free Site Survey"
        },
        "sticky": { "text": "Free Office Survey — WhatsApp Us" }
      },
      "retail_reno_page": {
        "hero": {
          "badge": "HDB-Registered HB-02-5250G · BCA-Registered",
          "serif": "Singapore's Specialist",
          "bold": "Retail & Mall Store Renovation",
          "subtitle": "From MCST submission and shopfront design to full store fit-out — we handle the mall management process that most contractors overlook. Night-works capable for zero-disruption renovations.",
          "cta": "Get a Free Site Survey",
          "b1": "MCST Submission Experts",
          "b2": "Night-Works Capable",
          "b3": "Opening Deadline Driven"
        },
        "overview": {
          "serif": "Why Mall Store Renovation",
          "bold": "Is Different From Other Commercial Work",
          "p1": "Renovating a store inside a Singapore shopping mall involves a layer of approvals that simply does not exist for standalone retail or office renovation. The Management Corporation Strata Title — the MCST — sits between you and the government authorities, and their fit-out requirements must be satisfied before BCA or SCDF submissions can even begin.",
          "p2": "Before any wall is touched, mall management requires detailed floor plans, electrical single-line diagrams, and fire sprinkler layouts to be submitted at least one to two weeks before works commence, along with a refundable renovation deposit (typically S$2,000–S$5,000 depending on the mall) and a valid public liability insurance certificate.",
          "p3": "Many malls in Singapore also impose <strong>night-works restrictions</strong> — requiring all noisy works (hacking, drilling, tiling) to be completed between 10pm and 6am to avoid disrupting trading. This significantly affects project scheduling and cost. ID Work Studio identifies these requirements during MCST pre-screening, so there are no surprises.",
          "c1t": "Fashion & Apparel Brands",
          "c1d": "Shopfront-led design with premium lighting and display systems that communicate brand positioning from 10 metres away.",
          "c2t": "Beauty & Wellness Retailers",
          "c2d": "Product display design, consultation nook layouts, and specialist lighting for colour-accurate product presentation.",
          "c3t": "F&B, Lifestyle & Concept Stores",
          "c3d": "Mixed-use retail spaces with service counters, storage integration, and brand experience design from entrance to back-of-house."
        },
        "scope": {
          "serif": "Everything",
          "bold": "Included in Our Retail Fit-Out",
          "i1t": "Shopfront Design",
          "i1d": "Entrance feature walls, shopfront fascia, display windows, and signage coordination with mall management guidelines.",
          "i2t": "Lighting System Design",
          "i2d": "Task, ambient, and accent lighting layered for maximum product visibility and brand atmosphere. LED track, cove, and downlight specification.",
          "i3t": "Display & Fixture Systems",
          "i3d": "Custom shelving, display tables, wall-mounted display rails, and gondola systems designed for your product category and brand language.",
          "i4t": "Flooring & Ceiling Works",
          "i4d": "Vinyl, timber effect, stone tile, and epoxy flooring. Feature ceilings, grid ceilings, and open soffit treatments with concealed M&E.",
          "i5t": "M&E & Power Provisions",
          "i5d": "Retail power layout, display lighting circuits, POS terminal points, aircon, and data provisions all coordinated with your operations team.",
          "i6t": "MCST & Permit Management",
          "i6d": "Full MCST submission package — drawings, insurance certificate, and renovation deposit processing. BCA and SCDF submissions where required."
        },
        "stats": {
          "s1u": "psf",
          "s1l": "Typical Cost Range",
          "s2u": "weeks",
          "s2l": "Full Fit-Out Duration",
          "s3u": "weeks",
          "s3l": "MCST Pre-Approval Lead Time"
        },
        "challenges": {
          "serif": "Overcoming",
          "bold": "Retail Renovation Challenges",
          "ch_label": "The Challenge",
          "sol_label": "Our Solution",
          "p1pain": "MCST Rejection & Resubmission Delays",
          "p1sol": "We pre-screen your renovation plans against the specific mall's fit-out manual before submission, eliminating the most common causes of MCST rejection.",
          "p2pain": "Night-Works Scheduling & Cost",
          "p2sol": "Our experienced night crews work efficiently in tight after-hours windows. We build night-works costs and scheduling into your initial quotation — no surprises.",
          "p3pain": "Fixed Opening Dates & Lease Pressure",
          "p3sol": "We parallel-track design finalisation and MCST submission to compress timelines. Many clients achieve MCST approval before renovation design is fully signed off."
        },
        "trust": { "text": "Experienced in CapitaLand, Frasers, Mapletree, Lendlease, and HDB shopfront fit-outs across Singapore." },
        "process": {
          "serif": "Our Seamless",
          "bold": "4-Step Retail Fit-Out Process",
          "s1t": "Site Survey & MCST Pre-Screen",
          "s1d": "We visit your unit, review the mall's fit-out manual, and identify any night-works or material restrictions before design begins.",
          "s2t": "Design & MCST Submission",
          "s2d": "Shopfront and interior concept, technical drawings, and full MCST submission package including insurance certificate and renovation deposit.",
          "s3t": "Fit-Out Works",
          "s3d": "Day or night works as required by the mall. Hoarding, protection of common areas, and daily cleaning maintained throughout.",
          "s4t": "Snagging & Store Opening",
          "s4d": "Final walkthrough with your team, defect rectification, and handover ready for your opening date."
        },
        "faq": {
          "title": "Frequently Asked Questions",
          "q1": "What approvals do I need to renovate a store in a Singapore shopping mall?",
          "a1": "You need approvals in sequence from three parties. First, <strong>MCST (mall management)</strong> — detailed floor plans, electrical single-line diagrams, fire sprinkler layouts, a renovation deposit, and a public liability insurance certificate, submitted at least 1–2 weeks before works begin. Second, <strong>BCA</strong> if structural changes are involved. Third, <strong>SCDF fire safety</strong> if sprinklers, smoke detectors, or escape routes are affected. ID Work Studio manages the full submission sequence.",
          "q2": "How long does retail shop renovation take in Singapore?",
          "a2": "A full retail fit-out typically takes <strong>6–12 weeks</strong> from design finalisation to handover. A minor refresh or rebranding can be done in <strong>2–3 weeks</strong>. Critically, MCST approval must be obtained <strong>before construction begins</strong> — allow 1–2 weeks for this. If your opening date is fixed by your tenancy commencement, build MCST lead time into your pre-renovation planning.",
          "q3": "What are night-works and do they apply to my mall store renovation?",
          "a3": "Night-works are a requirement imposed by certain mall managements that restrict noisy renovation works — hacking, drilling, tiling — to after-hours only (<strong>typically 10pm–6am</strong>). Not all malls impose this; it depends on the mall's fit-out guidelines and the nature of your works. ID Work Studio identifies these requirements during MCST pre-screening, so you know the scheduling and cost implications before committing to a renovation budget."
        },
        "related": { "title": "Explore Our Other Commercial Services" },
        "cta": {
          "serif": "Ready to Open Your",
          "bold": "Dream Store?",
          "btn": "WhatsApp for a Free Site Survey"
        },
        "sticky": { "text": "Free Retail Store Survey — WhatsApp Us" }
      },
      "shophouse_reno_page": {
        "hero": {
          "badge": "HDB-Registered HB-02-5250G · BCA-Registered",
          "serif": "Singapore's Specialist",
          "bold": "Shophouse Renovation Contractor",
          "subtitle": "URA Conservation Permission, BCA structural approval, and SCDF fire safety — the three-agency submission process that most contractors cannot navigate. We manage all of it. Serving Tanjong Pagar, Chinatown, Kampong Glam, Boat Quay, Little India, and Emerald Hill.",
          "cta": "Get a Free Consultation",
          "b1": "URA Conservation Compliant",
          "b2": "SCDF Fire Safety Managed",
          "b3": "BCA Structural Submissions"
        },
        "overview": {
          "serif": "Why Shophouse Renovation",
          "bold": "Demands a Different Specialist",
          "p1": "Renovating a conserved shophouse in Singapore is not simply a construction project — it is a tripartite negotiation between the Urban Redevelopment Authority (URA), the Building and Construction Authority (BCA), and the Singapore Civil Defence Force (SCDF). Each agency has its own requirements, and the three sets of requirements frequently conflict with one another in ways that only experienced shophouse contractors know how to resolve.",
          "p2": "The URA mandates that the facade, roof profile, cornices, original windows, shutters, decorative plasterwork, Peranakan tiles, and the five-foot way must all be preserved or restored like-for-like. The BCA requires structural plan approval for any changes to load-bearing walls and a Professional Engineer endorsement. And SCDF requires fire safety compliance — but applies special relaxation provisions under Chapter 9 of the Fire Code 2023 specifically because strict adherence would require demolishing the timber structures the URA mandates you preserve.",
          "p3": "ID Work Studio has experience navigating this three-agency submission process across Singapore's major conservation districts. We coordinate URA, BCA, and SCDF submissions simultaneously to compress the approval timeline — critical for clients facing lease commencement deadlines or business opening targets.",
          "districts_title": "Conservation Districts We Serve",
          "uses_title": "Typical Uses We Renovate For",
          "uses_desc": "F&B restaurants and cafes, boutique hotels and serviced apartments, professional offices, retail concept stores, creative studios and galleries, and mixed-use live-work spaces."
        },
        "scope": {
          "serif": "Our Shophouse",
          "bold": "Renovation Scope & Expertise",
          "i1t": "URA Conservation Submission",
          "i1d": "Conservation Permission application prepared and submitted by our Qualified Person (QP). We identify what requires Permission and what qualifies as minor works before you spend a dollar.",
          "i2t": "Facade Preservation & Restoration",
          "i2d": "Like-for-like repair of lime plaster, timber lintels, Peranakan tiles, decorative cornices, and original shutters. We have the specialist contractor network for heritage materials.",
          "i3t": "Interior Reconfiguration",
          "i3d": "Layout changes, new partitions, staircase modifications, and attic additions — all designed within URA's conservation constraints and BCA structural requirements.",
          "i4t": "M&E Modernisation",
          "i4d": "Full electrical rewire, aircon system installation, plumbing upgrade, and data infrastructure — all routed to minimise visual impact on original fabric.",
          "i5t": "SCDF Fire Safety",
          "i5d": "Fire safety strategy prepared under SCDF Chapter 9 relaxation provisions for conservation buildings. Sprinkler systems, smoke detection, means of escape — all coordinated with URA constraints.",
          "i6t": "Modern Interior Fit-Out",
          "i6d": "Contemporary commercial interior design that contrasts sensitively with heritage character. We balance original charm with modern operational requirements."
        },
        "stats": {
          "s1u": "psf",
          "s1l": "Interior Fit-Out Cost",
          "s2u": "weeks",
          "s2l": "URA / BCA / SCDF Approvals",
          "s3u": "months",
          "s3l": "Typical Total Project Duration"
        },
        "challenges": {
          "serif": "Overcoming",
          "bold": "Shophouse Renovation Challenges",
          "ch_label": "The Challenge",
          "sol_label": "Our Solution",
          "p1pain": "URA Conservation Restrictions",
          "p1sol": "We identify precisely what requires Conservation Permission and what can proceed as minor works — saving weeks of unnecessary submission and approval time.",
          "p2pain": "Three-Agency Submission Complexity",
          "p2sol": "We coordinate simultaneous submissions to URA, BCA, and SCDF, compressing the approval phase. Most clients don't know these can overlap — we do.",
          "p3pain": "Heritage Materials & Specialist Works",
          "p3sol": "Lime plaster, timber joist repairs, Peranakan tile sourcing, decorative plasterwork — we have the specialist contractor network that standard renovation firms do not."
        },
        "trust": { "text": "Navigating URA, BCA, and SCDF for conservation shophouses across Tanjong Pagar, Chinatown, Kampong Glam, and Boat Quay." },
        "process": {
          "serif": "Our Seamless",
          "bold": "Shophouse Renovation Process",
          "s1t": "Conservation Assessment",
          "s1d": "Free site visit and review of URA status, conservation category, and preliminary scope. We flag what requires Permission before you commit.",
          "s2t": "Multi-Agency Submission",
          "s2d": "Simultaneous submission to URA, BCA, and SCDF — coordinated by our QP to compress the approval phase as much as possible.",
          "s3t": "Specialist & Fit-Out Works",
          "s3d": "Heritage restoration works (facade, timber, tiles) followed by modern interior fit-out — sequenced to avoid programme conflicts.",
          "s4t": "Inspection & Handover",
          "s4d": "BCA and SCDF inspections managed, Fire Safety Certificate obtained, and final handover with full compliance documentation."
        },
        "faq": {
          "title": "Frequently Asked Questions",
          "q1": "What can and cannot be changed in a conserved shophouse in Singapore?",
          "a1": "Under URA conservation guidelines, <strong>protected elements</strong> include the facade, roof profile, parapet, cornices, pilasters, original windows, shutters, decorative plasterwork, Peranakan tiles, and the five-foot way — all must be preserved or restored like-for-like. <strong>What can be changed</strong> includes interior layouts, internal fittings and utilities (aircon, plumbing, electrical), and rear extensions in specific areas subject to height restrictions. Any structural change requires BCA approval and a Professional Engineer endorsement.",
          "q2": "Do I need URA Conservation Permission for shophouse renovation?",
          "a2": "Yes — if your shophouse is in a designated conservation area. URA Conservation Permission is required for any works affecting externally visible elements or significant internal features. Structural changes additionally require <strong>BCA Building Plan and Structural Plan approval</strong>. SCDF fire safety submission is required for any changes affecting fire systems, means of escape, or fire compartmentation — and SCDF applies <strong>Chapter 9 relaxation provisions</strong> specifically for conservation shophouses.",
          "q3": "How long does shophouse renovation take in Singapore?",
          "a3": "Allow <strong>4–8 weeks</strong> for URA, BCA, and SCDF approvals before construction begins. Construction then takes <strong>8–16 weeks</strong> depending on scope and whether specialist heritage works are required. For projects with significant structural works or change of use, <strong>total timelines of 6–9 months</strong> are common."
        },
        "related": { "title": "Explore Our Other Commercial Services" },
        "cta": {
          "serif": "Ready to Restore Your",
          "bold": "Shophouse Heritage?",
          "btn": "WhatsApp for a Free Consultation"
        },
        "sticky": { "text": "Free Shophouse Consultation" }
      },
      "compliance_reno_page": {
        "hero": {
          "badge": "HDB-Registered HB-02-5250G · BCA-Registered",
          "serif": "Permits & Compliance",
          "bold": "For Commercial Renovation Singapore",
          "subtitle": "MCST, BCA, SCDF, and EMA Licensed Electrical Worker (LEW) — the four compliance pillars every commercial renovation in Singapore must satisfy. We manage all of them in-house, in the correct sequence, so you never face a stop-work order.",
          "cta": "Speak to Our Compliance Team",
          "b1": "MCST Managed",
          "b2": "BCA Registered",
          "b3": "SCDF Compliant",
          "b4": "LEW Grade 8"
        },
        "intro": {
          "serif": "Why Compliance",
          "bold": "Is the Most Important Part of Your Renovation",
          "p1": "Most renovation firms in Singapore talk openly about design and construction but rarely publish the compliance detail that commercial clients actually need. That avoidance is precisely why non-compliance is so common — and so expensive. Stop-work orders, forced demolition of completed works, insurance claim denials, and fines reaching S$200,000 are not theoretical risks. They happen to businesses that start renovation with good intentions but without the right paperwork in the right sequence.",
          "p2": "ID Work Studio treats compliance as the foundation of every commercial project, not an afterthought. The four sections below explain exactly what each agency requires, when it is triggered, and what the consequences of skipping it are — so you can make an informed decision before you sign a single quotation."
        },
        "stats": {
          "s1": "Max SCDF Fine (unapproved works)",
          "s2": "Max EMA Fine (wrong LEW grade)",
          "s3": "Agencies Managed by ID Work Studio",
          "s4": "Stop-Work Orders on Our Projects"
        },
        "pillars": {
          "serif": "The Four Approval Pillars",
          "bold": "For Commercial Renovation in Singapore",
          "step_label": "Step",
          "facts_label": "Key Facts",
          "p1": {
            "agency": "MCST & Landlord",
            "title": "Building Management Approval",
            "subtitle": "Always the first step — before any government submission",
            "body": "Most tenants approach government agencies first and are surprised when their renovation is halted because they never obtained landlord or building management approval. In Singapore, the MCST must approve your renovation plans before BCA, SCDF, or any other authority submission can proceed. The MCST requires detailed floor plans, electrical single-line diagrams, fire sprinkler layouts, a refundable renovation deposit (typically S$2,000–S$5,000), and a valid public liability insurance certificate.",
            "f1": "MCST approval must precede all government agency submissions",
            "f2": "Renovation deposit: typically S$2,000–S$5,000 (refundable)",
            "f3": "Public liability insurance certificate required",
            "f4": "Night-works may be required in high-footfall malls",
            "f5": "Submit drawings at least 1–2 weeks before works begin"
          },
          "p2": {
            "agency": "BCA",
            "title": "Building & Construction Authority",
            "subtitle": "Required for structural, M&E, and partition works",
            "body": "The Building and Construction Authority (BCA) regulates all structural, mechanical, and electrical changes to buildings in Singapore under the Building Control Act. Any commercial renovation involving structural modifications, partition walls that affect fire compartmentation, major electrical works, HVAC alterations, or change of use requires BCA plan approval before physical work commences. Plans must be submitted through CORENET by a Qualified Person — a licensed architect or Professional Engineer.",
            "f1": "Only Qualified Persons (QPs) can submit plans to BCA",
            "f2": "Standard processing: 2–4 weeks; complex works: 4–8 weeks",
            "f3": "Budget 3–5% of total renovation cost for permits and QP fees",
            "f4": "Stop-work orders and demolition for unauthorised works",
            "f5": "Change of use requires URA approval in addition to BCA"
          },
          "p3": {
            "agency": "SCDF",
            "title": "Singapore Civil Defence Force",
            "subtitle": "Fire safety — the most costly compliance to miss",
            "body": "Under the Fire Safety Act 1993, any commercial renovation that affects fire safety systems requires SCDF plan approval before any physical work begins. Triggers include adding partitions that alter sprinkler coverage zones, relocating sprinkler heads or smoke detectors, modifying fire escape routes, or any change that affects fire compartmentation. The current governing standard is the Fire Code 2023 (amended March 2026). Fines for unapproved fire safety works reach up to S$200,000, and any fire insurance claim on a premises with undisclosed unapproved works will be denied entirely.",
            "f1": "Governing standard: Fire Code 2023 (amended March 2026)",
            "f2": "Triggered by: sprinkler relocation, partition changes, escape route changes",
            "f3": "SCDF fines: up to S$200,000 for unapproved works",
            "f4": "Fire insurance can be voided by undisclosed unapproved works",
            "f5": "Conservation shophouses governed by SCDF Chapter 9 relaxations"
          },
          "p4": {
            "agency": "EMA / LEW",
            "title": "Licensed Electrical Worker",
            "subtitle": "The grade matters — hiring the wrong one voids certification",
            "body": "All electrical works in Singapore must be carried out by or under the direct supervision of a Licensed Electrical Worker (LEW) certified by the Energy Market Authority (EMA). There are three grades. Grade 7 covers installations up to 45kVA — for residential and very small shops. Grade 8 covers installations up to 500kVA — required for most commercial offices, retail stores, and mall units. Any non-domestic premises with an approved electrical load exceeding 45kVA must also hold a valid EMA Electrical Installation Licence. Without the correct LEW grade, Certificate of Compliance (COC), and EMA licence, building management will not sign off on handover, and any electrical incident voids your insurance entirely.",
            "f1": "Grade 8 LEW required for most commercial spaces (above 45kVA)",
            "f2": "EMA Electrical Installation Licence required for non-domestic premises above 45kVA",
            "f3": "Certificate of Compliance (COC) must be submitted to EMA on completion",
            "f4": "Wrong LEW grade = uncertifiable work, voids insurance",
            "f5": "Fines up to S$10,000 for engaging unlicensed electrical workers"
          }
        },
        "process": {
          "serif": "How We Manage",
          "bold": "Your Compliance End to End",
          "s1t": "Compliance Audit",
          "s1d": "Site visit to identify every approval required for your specific space, building type, and scope. No surprises later.",
          "s2t": "Multi-Agency Submission",
          "s2d": "MCST, BCA, and SCDF submissions prepared by our QP and managed simultaneously to compress the approval timeline.",
          "s3t": "Compliant Execution",
          "s3d": "All works carried out by our BCA-registered team with Grade 8 LEW supervision for all electrical installations.",
          "s4t": "Certification & Handover",
          "s4d": "BCA and SCDF inspections managed. LEW Certificate of Compliance (COC) submitted to EMA. Full documentation provided."
        },
        "faq": {
          "title": "Frequently Asked Questions",
          "q1": "What is SCDF approval and when do I need it for commercial renovation?",
          "a1": "Under the <strong>Fire Safety Act 1993</strong>, any works affecting fire safety systems in a commercial building require SCDF plan approval before work begins. Triggers include relocating or adding sprinkler heads, moving smoke detectors, modifying fire escape routes, or adding partitions that change fire compartmentation. Plans are submitted by a Qualified Person through CORENET. SCDF processing takes 2–4 weeks. <strong>Fines for unapproved works reach S$200,000</strong> — and any fire insurance claim on a premises with undisclosed unapproved works will be denied entirely.",
          "q2": "What is a Licensed Electrical Worker (LEW) and why does the grade matter?",
          "a2": "A LEW is certified by the EMA under the Electricity Act 2001 to carry out and certify electrical installations. <strong>Three grades exist:</strong> Grade 7 for residential and small shops (up to 45kVA), Grade 8 for commercial offices and mall units (up to 500kVA), and Grade 9 for large industrial premises. Any non-domestic premises above 45kVA must hold a valid <strong>EMA Electrical Installation Licence</strong> — only a Grade 8 LEW can apply for this. Using the wrong grade renders the installation uncertifiable, prevents building management sign-off, and voids your insurance.",
          "q3": "In what sequence should I obtain approvals for commercial renovation in Singapore?",
          "a3": "The correct sequence is: <strong>(1) MCST / landlord approval first</strong> — always, before any government submission. <strong>(2) BCA building plans</strong> if structural, M&E, or partition works are involved. <strong>(3) SCDF fire safety plans</strong> if any fire protection systems are affected. <strong>(4) EMA LEW licence</strong> once electrical works are complete and certified by the Grade 8 LEW.",
          "q4": "What happens if I start commercial renovation without the required permits?",
          "a4": "The consequences are severe. BCA can issue a <strong>stop-work order immediately</strong> and require demolition of all non-compliant works at your cost. SCDF can fine up to <strong>S$200,000</strong>, and any fire incident on the premises will result in full insurance claim denial. The EMA can fine up to <strong>S$10,000</strong> for unlicensed electrical works, and the installation remains unregistered — meaning your landlord cannot legally sign off occupation."
        },
        "related": { "title": "Our Commercial Renovation Services" },
        "cta": {
          "serif": "Start Your Renovation",
          "bold": "The Right Way.",
          "btn": "WhatsApp Our Compliance Team"
        },
        "sticky": { "text": "Permits & Compliance — WhatsApp Us" }
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
        "subtext": "Professional, BCA/HDB compliant reinstatement for offices and shopping mall units. Get your deposit back with our 100% pass-rate solutions.",
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
        "gallery": "作品集",
        "contact": "联系我们"
      },
      "accreditation": {
        "hdb": "HDB 注册",
        "bca": "BCA 注册",
        "firm": "公司"
      },
     "hero": {
        "title_main": "室内设计与翻新",
        "title_sub": "致敬现代有识之士",
        "subtitle": "坐落于兀兰的BCA注册及HDB注册装修承包商。逾10年诚信交付，服务涵盖HDB组屋、公寓、有地房产及办公室、零售店铺、商场翻新，遍及新加坡全岛各区。",
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
        "title": "我们的翻新服务",
        "subtitle": "BCA注册及HDB注册承包商，专业承接办公室装修、零售店面及商场翻新，以及全岛住宅装修工程。",
        "residential": {
          "title": "住宅翻新",
          "desc": "将组屋、公寓和有地房产改造成梦想家园。专注于空间规划和以生活方式为中心的设计。"
        },
        "commercial": {
          "title": "办公室与零售翻新",
          "desc": "BCA注册装修承包商，承接新加坡各类办公室、零售店面及商场翻新工程。服务涵盖空间规划、隔间、机电工程、MCST提交及全套许可证申请。办公室翻新从每平方尺$50起 · 零售翻新从每平方尺$65起。"
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
          "title": "现代远见生活 为新加坡业主打造",
          "subtitle": "BCA 注册与 HDB 注册的合作伙伴。我们处理所有 HDB 许可证和结构提交，让您高枕无忧。",
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
          "title": "新加坡 HDB 注册承包商",
          "items": {
            "1": {
              "title": "BTO 装修灵感",
              "desc": "为 Tengah、Bidadari 和 Tampines North 提供专家解决方案。从缺陷检查到 HDB 许可证处理的一站式交付。"
            },
            "2": {
              "title": "新加坡公寓室内设计",
              "desc": "通过优质饰面和结构重新配置提升私人生活。专注于现代奢华和温暖极简主义。"
            },
            "3": {
              "title": "有地房产改建及加建工程",
              "desc": "全面的加建与改建工程。我们为有地住宅管理结构提交和建筑增强。"
            }
          },
          "testimonial": {
            "quote": "HDB 和 BCA 注册室内设计，专注于新加坡现代 BTO 和转售组屋翻新。",
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
          "title": "开始您的家居改造",
          "subtitle": "确保您在2026年的名额。立即咨询我们的 HDB 注册设计专家。",
          "button": "预约家居咨询"
        }
      },
      "commercial_page": {
        "hero": {
          "title": "新加坡专业办公室翻新\n与商业空间装修服务",
          "subtitle": "由 BCA 注册的承包商提供零售、餐饮和恢复原状服务",
          "cta": "预约现场勘察",
          "cta_reinstatement": "了解更多原状修复服务"
        },
        "solutions": {
          "title": "商业翻新解决方案",
          "items": {
            "1": {
              "title": "提高生产力的办公室翻新解决方案",
              "desc": "优化混合办公布局、符合人体工程学的工作站和协作区。我们处理办公室恢复原状和全面装修。",
              "point1": "办公室恢复原状",
              "point2": "系统家具"
            },
            "2": {
              "title": "高人流量零售与店面设计",
              "desc": "吸引人的零售室内设计，推动客流量和销售。从奢侈品精品店到高街零售装修。",
              "point1": "视觉营销",
              "point2": "照明设计"
            },
            "3": {
              "title": "符合 BCA/HDB 标准的商业翻新",
              "desc": "完全符合新加坡严格的建筑规范。我们管理餐饮、工业和商业空间的所有提交文件。",
              "point1": "FSSD (消防安全) 提交",
              "point2": "大厦管理 (MA) 联络"
            }
          }
        },
        "project_management": {
          "title": "战略项目管理",
          "subtitle": "通过精准的规划和执行，最大限度地减少业务停机时间。",
          "items": {
            "1": {
              "title": "停机时间最小化",
              "desc": "分阶段翻新策略，确保您的业务在装修过程中保持运营。"
            },
            "2": {
              "title": "甘特图透明度",
              "desc": "详细的项目时间表和每周进度报告，确保按时交付。"
            },
            "3": {
              "title": "一站式交付",
              "desc": "从最初的现场勘察到最终交付，我们管理商业项目的每一个细节。"
            }
          }
        },
        "trust": {
          "title": "项目管理与合规",
          "subtitle": "我们处理繁文缛节，让您专注于您的业务。",
          "items": {
            "1": {
              "title": "消防安全 (SCDF)",
              "desc": "全面处理消防安全法规的提交和批准。"
            },
            "2": {
              "title": "BCA 许可证",
              "desc": "所有必要的建筑和建设局许可证的注册承包商。"
            },
            "3": {
              "title": "商场管理",
              "desc": "在与新加坡主要商场管理团队协调方面经验丰富。"
            },
            "4": {
              "title": "现场安全",
              "desc": "严格遵守工作场所安全与健康 (WSH) 标准。"
            }
          }
        },
        "faq": {
          "title": "常见问题",
          "q1": {
            "q": "新加坡办公室装修的平均时间表是怎样的？",
            "a": "对于新加坡的标准办公室装修（约2,000 - 5,000平方英尺），时间表通常在<strong>4到8周</strong>之间。这包括1-2周的设计 and 材料选择，1-2周的BCA/消防安全提交，以及4-6周的翻新工程。需要大量机电工程或结构更改的复杂项目可能需要8-12周。"
          },
          "q2": { "q": "BCA注册公司如何确保商业安全合规？", "a": "作为BCA注册公司，我们通过严格的3步流程确保合规性：<br/><br/>1. <strong>提交前检查：</strong>我们的合格人员(QP)根据当前的SCDF消防规范和BCA无障碍标准审查所有设计。<br/>2. <strong>许可证管理：</strong>在工作开始前，我们处理向BCA、URA和FSSD的所有必要提交。<br/>3. <strong>现场监督：</strong>持牌CoreTrade人员监督关键工程，确保其符合批准的规范和安全法规。" },
          "q3": { "q": "新加坡商业翻新的费用是多少？", "a": "<strong>办公室装修：</strong>每平方尺S$50至S$180以上。<strong>零售/商场店面：</strong>每平方尺S$65至S$150。<strong>店屋翻新：</strong>室内工程每平方尺S$150起（不含外立面修复）。所有预算须额外预留3至5%用于许可证及专业费用。以上数字涵盖木工、地板、天花工程、照明及基本机电，不含家具、IT及标识。" },
          "q4": { "q": "是否需要先获得MCST批准，才能向BCA或SCDF提交申请？", "a": "是的——这是租户最常见的错误。<strong>MCST（大厦管理层）批准必须先于所有政府机构申请</strong>。MCST要求提交平面图、电气单线图、消防喷淋布局、装修押金（通常为S$2,000至S$5,000）及公众责任险证书——须在开工前至少1至2周提交。" },
          "q5": { "q": "什么是持牌电气工程师（LEW），我需要聘用吗？", "a": "LEW由能源市场管理局（EMA）认证，负责执行和认证电气装置。大多数商业翻新需要<strong>8级LEW</strong>（授权范围500kVA以下）。任何核准用电负荷超过45kVA的非住宅场所还须持有有效的EMA电气装置许可证——由8级LEW申请办理。没有此许可证，业主将无法合法签署您的入住手续。" },
          "q6": { "q": "ID Work Studio能否同时负责设计与施工？", "a": "可以。我们是一家<strong>设计施工一体化公司</strong>——室内设计、空间规划及全套翻新施工均在同一合同下管理。单一责任主体压缩工期、消除设计与施工团队之间的沟通障碍，并为您提供一位从概念到交钥匙（含所有许可证提交）全程负责的项目经理。" }
        },
        "process": {
          "title": "商业翻新流程",
          "subtitle": "从第一通电话到交钥匙——我们的工作方式一览。",
          "steps": {
            "1": { "title": "免费现场勘察及需求确认", "detail": "第1周", "desc": "我们上门查看您的空间，了解您的业务需求，并评估您的大厦及工程范围所需的BCA、SCDF及MCST合规义务。" },
            "2": { "title": "设计与固定报价", "detail": "第1至2周", "desc": "空间规划、3D效果图、材料选择，以及详细的固定总价报价。无开放式合同，无隐藏费用。" },
            "3": { "title": "许可证提交", "detail": "第2至4周", "desc": "由我们的团队同步管理MCST、BCA及SCDF申请。所有批准到位前，实体工程不得开始。" },
            "4": { "title": "翻新施工", "detail": "第4至14周", "desc": "我们的现场团队按计划执行，每周提供进度更新。所有电气工程由LEW监督，竣工后提供认证。" },
            "5": { "title": "查验与交付", "detail": "最后一周", "desc": "联合验收走查、缺陷修复、所有合规证书颁发、EMA合规证书（COC）提交，并正式移交钥匙。" }
          }
        },
        "partners": {
          "title": "深受新加坡知名品牌信赖",
          "subtitle": "从跨国企业、零售连锁到餐饮品牌及医疗机构——我们的客户信任我们准时、按预算交付。"
        },
        "subpages": {
          "section_title": "我们的商业专业服务",
          "section_subtitle": "每种商业空间类型都有其独特的审批流程、合规要求和设计逻辑。请在下方选择您的项目类型。",
          "office": {
            "title": "办公室翻新",
            "desc": "全套一站式翻新服务——空间规划、隔间、机电工程，以及所有BCA、SCDF和MCST许可证提交。从每平方尺$50起。",
            "detail": "6–12周 · BCA注册"
          },
          "retail": {
            "title": "零售与商场店面",
            "desc": "MCST提交专家。店面设计、陈列系统、可承接夜间施工。服务凯德、星狮及丰树旗下商场。",
            "detail": "6–12周 · 可承接夜间施工"
          },
          "shophouse": {
            "title": "店屋翻新",
            "desc": "URA保护区许可、BCA结构审批及SCDF消防安全——大多数承包商无法驾驭的三机构审批流程，我们全程管理。",
            "detail": "丹戎巴葛 · 牛车水 · 甘榜格南"
          },
          "compliance": {
            "title": "许可证与合规",
            "desc": "MCST、BCA、SCDF消防安全及EMA持牌电气工程师(LEW)要求——全程解释与管理。",
            "detail": "SCDF · LEW 8级 · BCA · MCST"
          },
          "reinstatement_row": "办公室及商场单位恢复原状——清水房移交",
          "reinstatement_detail": "100%押金退还 · 符合MCST及SCDF规定 · 免费现场勘察",
          "reinstatement_label": "另可提供",
          "btn": "了解更多"
        },
        "cta": {
          "title": "准备好改造您的商业空间了吗？",
          "subtitle": "为您的下一个项目与值得信赖的、BCA 注册的商业承包商合作。",
          "button": "获取商业报价"
        }
      },
      "office_reno_page": {
        "hero": {
          "badge": "HDB注册 HB-02-5250G · BCA注册",
          "serif": "新加坡信赖的",
          "bold": "办公室翻新承包商",
          "subtitle": "全套一站式办公室装修——空间规划、隔间、机电工程，以及所有许可证提交，全程统一管理。承接全岛各区500至10,000平方尺办公室。",
          "cta": "预约免费现场勘察",
          "b1": "BCA注册承包商",
          "b2": "全套许可证管理",
          "b3": "准时交付保证"
        },
        "overview": {
          "serif": "办公室翻新",
          "bold": "包含哪些内容？",
          "p1": "新加坡的办公室翻新，是将租赁或自有商业空间改造为功能性、符合品牌形象工作空间的过程。与住宅翻新不同，它需要向BCA、SCDF乃至URA提交政府审批文件，以及满足大厦管理层的独立装修要求——所有这些工作都必须在第一面墙动工之前完成。",
          "p2": "ID Work Studio是一家拥有逾10年商业装修经验的BCA注册承包商，我们全程管理每一个环节：空间规划与布局、隔间系统、机电工程、假天花、地板、定制木工及所有政府审批提交。一家公司、一个联络人，从现场勘察到交钥匙。",
          "p3": "新加坡办公室翻新费用通常介于<strong>每平方尺S$50至S$100</strong>（基础装修）、<strong>S$100至S$180</strong>（含玻璃隔间及定制机电的中档装修），以及<strong>S$180以上</strong>（高端设计施工）。请额外预留总预算的3至5%用于许可证及专业人员费用。",
          "c1t": "中小企业与成长型企业",
          "c1d": "首次办公室装修或扩张装修。我们帮您按当前员工人数设计，同时为未来增长预留空间。",
          "c2t": "跨国企业与区域办公室",
          "c2d": "甲级CBD大厦装修，涉及限制工作时间及复杂机电要求。我们熟悉整个流程。",
          "c3t": "搬迁企业",
          "c3d": "需要搬迁办公室？我们同步协调新址装修与旧址恢复原状，有效减少双租期重叠成本。"
        },
        "scope": {
          "serif": "我们办公室装修",
          "bold": "的全套服务内容",
          "i1t": "空间规划与布局",
          "i1d": "根据您的团队人数及品牌形象，优化工作流程、协作区、独立办公室及休息区的平面布局。",
          "i2t": "隔间系统",
          "i2d": "干墙、无框玻璃及隔音隔间，提供全高、半高及可拆卸系统，适用于各种楼层格局。",
          "i3t": "机电工程",
          "i3d": "电力配电、数据及电源布线、空调（风机盘管/VRV/卡式机）、LED照明设计及PA/AV预埋。",
          "i4t": "假天花与地板",
          "i4d": "格栅式及开放式天花，乙烯基木板、地毯砖、架空地板及适用于服务器室或储物室的环氧地坪。",
          "i5t": "定制木工",
          "i5d": "前台柜台、工作站木工、储物墙、厨房橱柜及特色墙，按照您的品牌规格定制制作。",
          "i6t": "全套许可证提交",
          "i6d": "BCA建筑图则、SCDF消防安全、MCST及业主提交——全程管理，让您专注于业务。"
        },
        "stats": {
          "s1u": "每平方尺",
          "s1l": "典型费用范围",
          "s2u": "周",
          "s2l": "施工工期",
          "s3u": "周",
          "s3l": "BCA许可证审批时间"
        },
        "challenges": {
          "serif": "克服",
          "bold": "办公室翻新挑战",
          "ch_label": "挑战",
          "sol_label": "我们的解决方案",
          "p1pain": "许可证延误及停工令",
          "p1sol": "我们按法定顺序提交BCA、SCDF及MCST申请，确保所有审批到位后才开工，杜绝昂贵的停工令风险。",
          "p2pain": "施工期间业务中断",
          "p2sol": "分阶段翻新策略及错峰施工安排，让您的团队在装修期间保持正常运营，无需强制停业。",
          "p3pain": "甲级大厦的复杂要求",
          "p3sol": "我们长期服务凯德、吉宝及丰树旗下大厦。货梯使用限制、围挡要求、保险证书——一切均由我们管理。"
        },
        "trust": { "text": "逾10年来，深受新加坡各类企业信赖，准时交付、全面合规。" },
        "process": {
          "serif": "我们的无缝",
          "bold": "四步流程",
          "s1t": "免费现场勘察",
          "s1d": "我们上门查看您的空间，评估工程范围，并在3个工作日内提供详细固定报价。",
          "s2t": "设计与许可证",
          "s2d": "空间规划、3D效果图，以及同步提交MCST、BCA及SCDF申请——无需您追赶各政府部门。",
          "s3t": "翻新施工",
          "s3d": "我们的现场团队精准执行，每周进度更新让您无需亲临现场即可掌握项目进展。",
          "s4t": "查验与交付",
          "s4d": "最终验收走查、缺陷修复，以及附带所有合规证书的正式移交。"
        },
        "faq": {
          "title": "常见问题",
          "q1": "新加坡办公室翻新费用是多少？",
          "a1": "办公室翻新费用通常为<strong>每平方尺S$50至S$100</strong>（基础装修）、<strong>S$100至S$180</strong>（含玻璃隔间及定制机电的中档装修），以及<strong>S$180以上</strong>（高端设计施工）。1,500平方尺办公室的预算约为S$75,000至S$270,000（不含家具、IT及标识）。另需预留总预算的3至5%用于许可证及专业费用。",
          "q2": "新加坡办公室翻新是否需要BCA许可证？",
          "a2": "是的——凡涉及结构改动、影响防火分区的隔间工程或机电改装均需获得BCA图则批准才能动工。若喷淋头、烟雾探测器或逃生路线受影响，还须提交<strong>SCDF消防安全图则</strong>。重要的是，<strong>大厦管理层（MCST）的批准必须先于所有政府部门申请</strong>。作为BCA注册承包商，ID Work Studio将所有提交纳入我们的服务范围。",
          "q3": "新加坡办公室翻新需要多长时间？",
          "a3": "1,000至3,000平方尺的标准办公室装修，<strong>施工工期为6至12周</strong>，加上动工前<strong>2至4周的BCA许可证审批</strong>时间。CBD甲级大厦的项目因货梯使用限制及仅限夜间施工的要求，通常需额外增加2至4周。从首次现场勘察到交钥匙，请预留<strong>10至18周</strong>的总工期。"
        },
        "related": { "title": "了解我们的其他商业服务" },
        "cta": {
          "serif": "准备好改造",
          "bold": "您的工作空间了吗？",
          "btn": "WhatsApp 预约免费现场勘察"
        },
        "sticky": { "text": "免费办公室勘察——WhatsApp 联系我们" }
      },
      "retail_reno_page": {
        "hero": {
          "badge": "HDB注册 HB-02-5250G · BCA注册",
          "serif": "新加坡专业",
          "bold": "零售与商场店面翻新",
          "subtitle": "从MCST提交、店面设计到全套店面装修——我们全程处理大多数承包商忽视的商场管理流程，可承接夜间施工，实现零干扰翻新。",
          "cta": "预约免费现场勘察",
          "b1": "MCST提交专家",
          "b2": "可承接夜间施工",
          "b3": "以开业截止日期为驱动"
        },
        "overview": {
          "serif": "商场店面翻新",
          "bold": "为何与其他商业工程截然不同",
          "p1": "在新加坡商场内翻新店面，涉及独立零售或办公室翻新中完全不存在的一个审批层级——管理法团（MCST）。MCST介于您与政府部门之间，其装修要求必须在BCA或SCDF申请提交之前全部满足。",
          "p2": "在动任何一面墙之前，商场管理层要求在开工前至少一至两周提交详细平面图、电气单线图及消防喷淋布局，同时附上可退还装修押金（视商场而定，通常为S$2,000至S$5,000）及有效的公众责任险证书。",
          "p3": "新加坡许多商场还实施<strong>夜间施工限制</strong>——要求噪音较大的工程（凿墙、钻孔、铺砖）须在营业时间后进行，通常为晚上10时至清晨6时，以免影响购物者及邻近租户。ID Work Studio在MCST预审阶段即识别此类要求，确保无意外。",
          "c1t": "时装与服饰品牌",
          "c1d": "以店面为核心的设计，辅以优质照明与陈列系统，令品牌定位在10米外即清晰可见。",
          "c2t": "美容与健康零售商",
          "c2d": "产品陈列设计、咨询区布局，以及专业色彩还原照明规格，精准呈现产品效果。",
          "c3t": "餐饮、生活方式与概念店",
          "c3d": "融合服务台、储物一体化设计，以及从入口到后场的品牌体验设计，打造复合型零售空间。"
        },
        "scope": {
          "serif": "我们零售装修",
          "bold": "的全套服务内容",
          "i1t": "店面设计",
          "i1d": "入口特色墙、店面外观、橱窗展示，以及符合商场管理规范的标识协调。",
          "i2t": "照明系统设计",
          "i2d": "任务照明、环境照明与重点照明的多层次设计，最大化产品展示效果与品牌氛围，涵盖LED轨道灯、灯槽及筒灯规格。",
          "i3t": "陈列与货架系统",
          "i3d": "定制货架、展示台、墙挂式陈列轨道及岛式陈列架，按您的产品类别及品牌语言量身设计。",
          "i4t": "地板与天花工程",
          "i4d": "乙烯基、木纹效果、石材砖及环氧地坪，特色天花、格栅天花及隐藏机电的开放式天花处理。",
          "i5t": "机电及电源配置",
          "i5d": "零售电源布局、展示照明回路、收银机终端点位、空调及数据预留，全部与您的运营团队协调。",
          "i6t": "MCST及许可证管理",
          "i6d": "完整MCST提交套件——图纸、保险证书及装修押金处理，以及所需的BCA和SCDF申请。"
        },
        "stats": {
          "s1u": "每平方尺",
          "s1l": "典型费用范围",
          "s2u": "周",
          "s2l": "全套装修工期",
          "s3u": "周",
          "s3l": "MCST预审批所需时间"
        },
        "challenges": {
          "serif": "克服",
          "bold": "零售翻新挑战",
          "ch_label": "挑战",
          "sol_label": "我们的解决方案",
          "p1pain": "MCST拒批及重新提交延误",
          "p1sol": "我们在提交前对照特定商场的装修手册预审您的翻新方案，从源头消除最常见的MCST拒批原因。",
          "p2pain": "夜间施工排期与成本",
          "p2sol": "我们经验丰富的夜班团队能在紧凑的错峰时段内高效作业，夜间施工的费用与排期均在初始报价中明确列出——无隐藏成本。",
          "p3pain": "固定开业日期与租约压力",
          "p3sol": "我们并行推进设计定稿与MCST提交，有效压缩总工期。许多客户在装修设计最终确认前即完成MCST批准。"
        },
        "trust": { "text": "经验涵盖凯德、星狮、丰树、领展旗下商场及组屋店面装修，足迹遍及新加坡全岛。" },
        "process": {
          "serif": "我们的无缝",
          "bold": "四步零售装修流程",
          "s1t": "现场勘察及MCST预审",
          "s1d": "我们到访您的单位，审阅商场装修手册，在设计开始前识别夜间施工或材料限制要求。",
          "s2t": "设计与MCST提交",
          "s2d": "店面及室内概念方案、技术图纸，以及含保险证书和装修押金的完整MCST提交套件。",
          "s3t": "装修施工",
          "s3d": "按商场要求进行日间或夜间施工，全程设置围挡、保护公共区域并保持每日清洁。",
          "s4t": "查验与开业移交",
          "s4d": "与您的团队进行最终验收走查，修复缺陷，并在您预定开业日前完成移交。"
        },
        "faq": {
          "title": "常见问题",
          "q1": "在新加坡商场翻新店面需要哪些审批？",
          "a1": "您需要按顺序获得三方批准。首先是<strong>MCST（商场管理）</strong>——在开工前至少1至2周提交详细平面图、电气单线图、消防喷淋布局、装修押金及公众责任险证书。其次是<strong>BCA</strong>（如涉及结构改动）。第三是<strong>SCDF消防安全</strong>（如喷淋头、烟雾探测器或逃生路线受影响）。ID Work Studio全程管理完整提交流程。",
          "q2": "新加坡零售店面翻新需要多长时间？",
          "a2": "全套零售装修从设计定稿到移交通常需要<strong>6至12周</strong>。局部翻新或品牌更新可在<strong>2至3周</strong>内完成。关键是MCST批准必须在施工开始<strong>前</strong>取得——请预留1至2周。若您的开业日期由租约生效日固定，请在翻新规划阶段提前将MCST审批时间纳入考量。",
          "q3": "什么是夜间施工？是否适用于我的商场店面翻新？",
          "a3": "夜间施工是部分商场管理层规定的要求，将噪音较大的翻新工程（凿墙、钻孔、铺砖）限制在营业时间后进行（<strong>通常为晚上10时至清晨6时</strong>）。并非所有商场均有此规定，视商场装修手册及工程性质而定。ID Work Studio在MCST预审阶段即识别相关要求，确保您在承诺翻新预算前充分了解排期与成本影响。"
        },
        "related": { "title": "了解我们的其他商业服务" },
        "cta": {
          "serif": "准备好开设",
          "bold": "您的理想店面了吗？",
          "btn": "WhatsApp 预约免费现场勘察"
        },
        "sticky": { "text": "免费零售店面勘察——WhatsApp 联系我们" }
      },
      "shophouse_reno_page": {
        "hero": {
          "badge": "HDB注册 HB-02-5250G · BCA注册",
          "serif": "新加坡专业",
          "bold": "店屋翻新承包商",
          "subtitle": "URA保护区许可、BCA结构审批及SCDF消防安全——大多数承包商无法驾驭的三机构审批流程，我们全程管理。服务范围涵盖丹戎巴葛、牛车水、甘榜格南、驳船码头、小印度及翡翠山。",
          "cta": "预约免费咨询",
          "b1": "符合URA保护区规定",
          "b2": "SCDF消防安全管理",
          "b3": "BCA结构图则提交"
        },
        "overview": {
          "serif": "店屋翻新",
          "bold": "为何需要专业的专家",
          "p1": "在新加坡翻新保护区店屋，绝非单纯的建筑工程——而是市区重建局（URA）、建设局（BCA）与新加坡民防部队（SCDF）之间的三方谈判。每个机构都有独特的要求，而这三套要求之间经常产生冲突，只有经验丰富的店屋承包商才知道如何化解。",
          "p2": "URA规定外立面、屋顶轮廓、檐口、原有窗户、百叶门、装饰灰泥、峇峇娘惹瓷砖及五脚基（有盖走廊）必须按原样保留或修复。BCA要求任何承重墙改动须获得结构图则批准及专业工程师背书。SCDF则要求消防安全合规——但针对保护区店屋适用《消防规范2023》第9章的特殊豁免条款，因为严格遵守标准规范将意味着拆除URA强制保留的木结构。",
          "p3": "ID Work Studio拥有在新加坡主要保护区同步协调URA、BCA及SCDF提交的实战经验，有效压缩审批阶段工期——对于面临租约生效截止日期或开业目标的客户而言至关重要。",
          "districts_title": "我们服务的保护区",
          "uses_title": "我们承接的典型用途",
          "uses_desc": "餐饮餐厅与咖啡厅、精品酒店与服务式公寓、专业办公室、零售概念店、创意工作室与画廊，以及混合用途住商空间。"
        },
        "scope": {
          "serif": "我们的店屋翻新",
          "bold": "专业范围与核心优势",
          "i1t": "URA保护区申请提交",
          "i1d": "由我们的合格人员（QP）准备并提交保护区许可申请，在您投入任何费用前，明确界定哪些工程需要许可、哪些属于轻微改动。",
          "i2t": "外立面保护与修复",
          "i2d": "石灰灰泥、木门楣、峇峇娘惹瓷砖、装饰檐口及原有百叶门的原样修复。我们拥有专业的遗产材料承包商网络。",
          "i3t": "室内重新配置",
          "i3d": "布局调整、新增隔间、楼梯改造及阁楼增建——所有方案均在URA保护区约束及BCA结构要求框架内设计。",
          "i4t": "机电现代化改造",
          "i4d": "全面电气重新布线、空调系统安装、管道升级及数据基础设施——所有管线均以最小化对原有建筑结构视觉影响的方式敷设。",
          "i5t": "SCDF消防安全",
          "i5d": "依据SCDF第9章保护区建筑豁免条款制定消防安全方案，喷淋系统、烟雾探测及疏散路线均在URA约束条件下统一协调。",
          "i6t": "现代室内装修",
          "i6d": "与遗产特色形成敏锐对话的现代商业室内设计，平衡原有历史韵味与现代运营需求。"
        },
        "stats": {
          "s1u": "每平方尺起",
          "s1l": "室内装修费用",
          "s2u": "周",
          "s2l": "URA / BCA / SCDF审批时间",
          "s3u": "个月",
          "s3l": "典型总工期"
        },
        "challenges": {
          "serif": "克服",
          "bold": "店屋翻新挑战",
          "ch_label": "挑战",
          "sol_label": "我们的解决方案",
          "p1pain": "URA保护区限制",
          "p1sol": "我们精准界定哪些工程需要保护区许可、哪些可按轻微改动处理，节省不必要的申请等待时间。",
          "p2pain": "三机构提交的复杂性",
          "p2sol": "我们同步协调向URA、BCA及SCDF的提交，压缩审批阶段工期。大多数客户不知道这些申请可以并行——我们知道。",
          "p3pain": "遗产材料及专业工程",
          "p3sol": "石灰灰泥、木搁栅修复、峇峇娘惹瓷砖采购、装饰灰泥——我们拥有普通翻新公司所没有的专业承包商网络。"
        },
        "trust": { "text": "为丹戎巴葛、牛车水、甘榜格南及驳船码头的保护区店屋协调URA、BCA及SCDF审批。" },
        "process": {
          "serif": "我们的无缝",
          "bold": "店屋翻新流程",
          "s1t": "保护区评估",
          "s1d": "免费现场探访，审查URA状态、保护区类别及初步工程范围，在您决策前明确哪些工程需要许可。",
          "s2t": "多机构同步提交",
          "s2d": "由我们的QP统筹协调，向URA、BCA及SCDF同步提交，尽可能压缩审批阶段工期。",
          "s3t": "专业及装修施工",
          "s3d": "遗产修复工程（外立面、木结构、瓷砖）与现代室内装修按序进行，避免工序冲突。",
          "s4t": "验收与移交",
          "s4d": "管理BCA及SCDF检查，取得消防安全证书，并附带完整合规文件正式移交。"
        },
        "faq": {
          "title": "常见问题",
          "q1": "新加坡保护区店屋哪些可以改动，哪些不可以？",
          "a1": "根据URA保护区指南，<strong>受保护元素</strong>包括外立面、屋顶轮廓、女儿墙、檐口、壁柱、原有窗户、百叶门、装饰灰泥、峇峇娘惹瓷砖及五脚基——均须原样保留或修复。<strong>可以改动的内容</strong>包括室内布局（在一定范围内）、内部设备与公用设施（空调、管道、电气可升级），以及特定区域的后方扩建（须符合高度限制）。任何结构改动均须获得BCA批准及专业工程师背书。",
          "q2": "店屋翻新是否需要URA保护区许可？",
          "a2": "是的——若您的店屋位于指定保护区内。URA保护区许可适用于任何影响外部可见元素或重要内部特征的工程。结构改动还需额外获得<strong>BCA建筑图则及结构图则批准</strong>。SCDF消防安全提交适用于任何影响消防系统、疏散路线或防火分区的改动——SCDF针对保护区店屋专门适用<strong>第9章豁免条款</strong>，因为严格遵守标准规范将需要拆除URA强制保留的木结构。",
          "q3": "新加坡店屋翻新需要多长时间？",
          "a3": "施工前请预留<strong>4至8周</strong>用于URA、BCA及SCDF审批。施工阶段视工程范围及是否需要专业遗产工程，需<strong>8至16周</strong>。对于涉及重大结构工程或用途变更的项目，<strong>总工期6至9个月</strong>属正常范围。ID Work Studio统筹向三个机构同步提交，尽可能压缩审批阶段工期。"
        },
        "related": { "title": "了解我们的其他商业服务" },
        "cta": {
          "serif": "准备好修缮您的",
          "bold": "历史店屋遗产了吗？",
          "btn": "WhatsApp 预约免费咨询"
        },
        "sticky": { "text": "免费店屋咨询" }
      },
      "compliance_reno_page": {
        "hero": {
          "badge": "HDB注册 HB-02-5250G · BCA注册",
          "serif": "许可证与合规",
          "bold": "新加坡商业翻新全指南",
          "subtitle": "MCST、BCA、SCDF及EMA持牌电气工程师（LEW）——新加坡每一个商业翻新项目必须满足的四大合规支柱。我们全程按正确顺序在内部管理，确保您从不面对停工令。",
          "cta": "联系我们的合规团队",
          "b1": "MCST全程管理",
          "b2": "BCA注册",
          "b3": "SCDF合规",
          "b4": "LEW 8级"
        },
        "intro": {
          "serif": "为何合规",
          "bold": "是您翻新项目最重要的一环",
          "p1": "新加坡大多数翻新公司会公开谈论设计与施工，却鲜少披露商业客户真正需要的合规细节。正是这种回避，导致违规现象如此普遍——也如此昂贵。停工令、已完工程被强制拆除、保险索赔被拒以及高达S$20万的罚款，并非纸上谈兵的风险，而是真实发生在那些动工时准备不足的企业身上。",
          "p2": "ID Work Studio将合规视为每个商业项目的根基，而非事后补救。以下四个板块详细说明每个政府机构的具体要求、触发时机及忽视后果，帮助您在签署任何报价单之前做出知情决策。"
        },
        "stats": {
          "s1": "最高SCDF罚款（未经批准工程）",
          "s2": "最高EMA罚款（LEW级别不符）",
          "s3": "由ID Work Studio管理的机构数量",
          "s4": "我们项目中发生的停工令次数"
        },
        "pillars": {
          "serif": "四大审批支柱",
          "bold": "新加坡商业翻新合规框架",
          "step_label": "步骤",
          "facts_label": "关键事实",
          "p1": {
            "agency": "MCST & 业主",
            "title": "大厦管理层批准",
            "subtitle": "始终是第一步——先于所有政府机构申请",
            "body": "大多数租户先行联系政府机构，结果因未获得业主或大厦管理层批准而遭遇翻新停工。在新加坡，管理法团（MCST）——商业建筑（包括大多数办公楼和商场）的管理机构——必须在BCA、SCDF或任何其他机构申请提交前批准您的翻新方案。MCST要求提交详细平面图、电气单线图、消防喷淋布局、可退还装修押金（通常为S$2,000至S$5,000）及有效的公众责任险证书。",
            "f1": "MCST批准必须先于所有政府机构申请",
            "f2": "装修押金：通常为S$2,000至S$5,000（可退还）",
            "f3": "须提供公众责任险证书",
            "f4": "高人流量商场可能要求夜间施工",
            "f5": "须在开工前至少1至2周提交图纸"
          },
          "p2": {
            "agency": "BCA",
            "title": "建设局",
            "subtitle": "结构、机电及隔间工程均须申请",
            "body": "建设局（BCA）依据《建筑管理法》监管新加坡所有建筑的结构、机电改动。任何涉及结构改动、影响防火分区的隔间、重大电气工程、暖通空调改造或用途变更的商业翻新，须在实体工程开始前取得BCA图则批准。图则须由合格人员（持牌建筑师或专业工程师）通过CORENET系统提交。",
            "f1": "只有合格人员（QP）方可向BCA提交图则",
            "f2": "标准审批：2至4周；复杂工程：4至8周",
            "f3": "预留总翻新费用的3至5%用于许可证及QP费用",
            "f4": "未经批准工程将面临停工令及强制拆除",
            "f5": "用途变更还须额外获得URA批准"
          },
          "p3": {
            "agency": "SCDF",
            "title": "新加坡民防部队",
            "subtitle": "消防安全——违规代价最为高昂",
            "body": "根据《消防安全法》（1993年），任何影响建筑消防安全系统的商业翻新均须在动工前取得SCDF图则批准。触发申请的情形包括：新增影响喷淋覆盖区域的隔间、迁移喷淋头或烟雾探测器、改动消防疏散路线，或任何影响防火分区的改动。现行规范为《消防规范2023》（2026年3月最新修订）。未经批准工程最高罚款达S$20万，且任何涉及未披露未经批准工程的火灾保险索赔将被完全拒绝。",
            "f1": "现行规范：《消防规范2023》（2026年3月修订）",
            "f2": "触发条件：喷淋迁移、隔间改动、疏散路线变更",
            "f3": "SCDF罚款：未经批准工程最高S$20万",
            "f4": "未披露的未经批准工程可导致火险保险失效",
            "f5": "保护区店屋适用SCDF第9章豁免条款"
          },
          "p4": {
            "agency": "EMA / LEW",
            "title": "持牌电气工程师",
            "subtitle": "级别至关重要——聘用错误级别将导致认证无效",
            "body": "新加坡所有电气工程须由能源市场管理局（EMA）依据《电力法》（2001年）认证的持牌电气工程师（LEW）执行或直接监督。共分三个级别：7级（持牌电工）适用于住宅及极小型店面（45kVA以下）；8级（持牌电气技术员）适用于大多数商业办公室、零售店面及商场单位（500kVA以下）；9级（持牌电气工程师）适用于大型工业设施。任何核准用电负荷超过45kVA的非住宅场所须持有有效的EMA电气装置许可证方可合法运营，只有8级LEW方可申请该许可证。若无正确级别的LEW、合规证书（COC）及EMA许可证，大厦管理层将无法签署移交，且任何电气事故将导致您的保险全面失效。",
            "f1": "大多数商业场所（45kVA以上）须由8级LEW负责",
            "f2": "45kVA以上的非住宅场所须持有EMA电气装置许可证",
            "f3": "完工后须向EMA提交合规证书（COC）",
            "f4": "LEW级别错误 = 工程认证无效，保险失效",
            "f5": "聘用无牌电气工程师最高罚款S$10,000"
          }
        },
        "process": {
          "serif": "我们如何",
          "bold": "全程管理您的合规事务",
          "s1t": "合规审查",
          "s1d": "现场探访，识别您的特定空间、大厦类型及工程范围所需的每一项审批，杜绝后期意外。",
          "s2t": "多机构同步提交",
          "s2d": "由我们的QP准备MCST、BCA及SCDF申请，同步推进以压缩审批工期。",
          "s3t": "合规施工",
          "s3d": "所有工程由我们的BCA注册团队执行，所有电气装置均由8级LEW全程监督。",
          "s4t": "认证与移交",
          "s4d": "管理BCA及SCDF检查，由LEW向EMA提交合规证书（COC），并提供完整合规文件正式移交。"
        },
        "faq": {
          "title": "常见问题",
          "q1": "什么是SCDF审批？新加坡商业翻新何时需要申请？",
          "a1": "根据<strong>《消防安全法》（1993年）</strong>，任何影响商业建筑消防安全系统的工程须在动工前取得SCDF图则批准。触发条件包括迁移或新增喷淋头、移动烟雾探测器、改动疏散路线，或新增改变防火分区的隔间。图则由合格人员通过CORENET提交，SCDF审批时间为2至4周。<strong>未经批准工程最高罚款S$20万</strong>——且任何涉及未披露未经批准工程的火灾保险索赔将被完全拒绝。",
          "q2": "什么是持牌电气工程师（LEW）？为何级别至关重要？",
          "a2": "LEW是依据《电力法》（2001年）由EMA认证，负责执行和认证电气装置的专业人员。<strong>共分三个级别：</strong>7级适用于住宅及小型店面（45kVA以下），8级适用于商业办公室及商场单位（500kVA以下），9级适用于大型工业场所。45kVA以上的非住宅场所须持有有效的<strong>EMA电气装置许可证</strong>——只有8级LEW方可申请。聘用错误级别将导致工程认证无效、大厦管理层无法签署移交，以及保险全面失效。",
          "q3": "新加坡商业翻新的正确审批顺序是什么？",
          "a3": "正确顺序为：<strong>（1）首先取得MCST/业主批准</strong>——始终如此，先于任何政府机构申请。<strong>（2）BCA建筑图则</strong>（如涉及结构、机电或隔间工程）。<strong>（3）SCDF消防安全图则</strong>（如任何消防保护系统受影响）。<strong>（4）EMA LEW许可证</strong>（电气工程竣工并由8级LEW认证后）。",
          "q4": "未经许可进行商业翻新会有什么后果？",
          "a4": "后果十分严重。BCA可立即发出<strong>停工令</strong>，并要求您自费拆除所有不合规工程。SCDF可罚款高达<strong>S$20万</strong>，且任何火灾事故均将导致保险索赔被完全拒绝。EMA可就无牌电气工程罚款高达<strong>S$10,000</strong>，且装置将无法登记注册——意味着业主无法合法签署您的入住手续。"
        },
        "related": { "title": "我们的商业翻新服务" },
        "cta": {
          "serif": "正确地开始",
          "bold": "您的翻新项目。",
          "btn": "WhatsApp 联系我们的合规团队"
        },
        "sticky": { "text": "许可证与合规——WhatsApp 联系我们" }
      },
      "footer": {
        "rights": "版权所有。"
      },
      "sticky_nav": {
        "consult": "免费咨询",
        "contact": "联系我们"
      },
      "reinstatement_section": {
        "headline_serif": "专业的",
        "headline_bold": "商业与商场原状修复服务",
        "subtext": "专业且符合 BCA/HDB 标准的办公室和商场单位原状修复。凭借我们 100% 的通过率方案，助您顺利取回押金。",
        "button": "了解更多关于原状修复"
      },
      "reinstatement_page": {
        "hero": {
          "headline_serif": "专业的",
          "headline_bold": "商业与商场原状修复服务"
        },
        "challenges": {
          "title_serif": "克服",
          "title_bold": "原状修复挑战",
          "items": {
            "1": {
              "pain": "担心押金被没收",
              "solution": "100% 移交成功保证。我们为您管理业主的清单，让您高枕无忧。"
            },
            "2": {
              "pain": "严格的商场管理 (MCST)",
              "solution": "我们是购物中心和甲级写字楼原状修复合规方面的专家。"
            },
            "3": {
              "pain": "复杂的消防安全 (SCDF)",
              "solution": "专业移位洒水器和烟雾探测器，并提供认证背书。"
            }
          }
        },
        "process": {
          "title_serif": "我们的无缝",
          "title_bold": "四步流程",
          "steps": {
            "1": {
              "title": "现场勘察",
              "desc": "免费现场评估与报价。"
            },
            "2": {
              "title": "许可证管理",
              "desc": "我们处理所有 MCST 和 SCDF 提交。"
            },
            "3": {
              "title": "施工阶段",
              "desc": "专业拆除和“清水房”还原。"
            },
            "4": {
              "title": "完工移交",
              "desc": "与您的房东进行最终联合检查，100% 通过。"
            }
          }
        },
        "trust": {
          "bca": "BCA 注册",
          "hdb": "HDB 注册",
          "scdf": "SCDF 合规"
        },
        "trust_row": {
          "text": "深受新加坡各大甲级写字楼与商场租户信赖"
        },
        "footer": {
          "headline_serif": "您的安心",
          "headline_bold": "是我们的首要任务",
          "whatsapp_btn": "WhatsApp 获取免费现场勘察"
        },
        "sticky_footer": {
          "text": "拿回您的押金 – WhatsApp 预约免费勘察"
        }
      }
    }
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