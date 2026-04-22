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
        "title_main": "Curated Interiors ",
        "title_sub": "for the Modern Visionary",
        "subtitle": "Premium interior design and renovation services in Singapore. With over a decade of trusted excellence, we transform homes, offices, and retail spaces into masterpieces.",
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
          "title": "HDB & Condo Renovation Singapore — Modern Visionary Living",
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
              "title": "Full HDB Permit Handling",
              "desc": "As an HDB-registered contractor (Reg: HB-02-5250G), we manage all HDB renovation permits, neighbour notifications and structural submissions on your behalf."
            }
          },
          "cta": "Plan My Resale Renovation"
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
              "a": "Yes. Most HDB renovation works — including <strong>hacking, tiling, electrical and plumbing</strong> — require an HDB Renovation Permit before physical work begins. The permit typically takes 1–3 weeks to approve. As an HDB-registered contractor, ID Work Studio handles all permit submissions on your behalf."
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
              "q": "Why is choosing an HDB-registered contractor important?",
              "a": "HDB-registered contractors are trained to adhere to <strong>HDB's renovation guidelines</strong> and structural safety protocols. They ensure no critical structural pillars are compromised during hacking and that all electrical and plumbing works meet Singapore's safety standards. Only HDB-registered contractors can apply for HDB Renovation Permits on your behalf."
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
          "q1": {
            "q": "What is the average timeline for an office fit-out in Singapore?",
            "a": "For a standard office fit-out in Singapore (approx. 2,000 - 5,000 sqft), the timeline typically ranges from <strong>4 to 8 weeks</strong>. This includes 1-2 weeks for design and material selection, 1-2 weeks for BCA/Fire Safety submissions, and 4-6 weeks for renovation works. Complex projects requiring extensive M&E works or structural changes may take 8-12 weeks."
          },
          "q2": {
            "q": "How does a BCA-registered firm ensure commercial safety compliance?",
            "a": "As a BCA-registered firm, we ensure compliance through a rigorous 3-step process:<br/><br/>1. <strong>Pre-Submission Checks:</strong> Our Qualified Persons (QP) review all designs against current SCDF Fire Code and BCA accessibility standards.<br/>2. <strong>Permit Management:</strong> We handle all necessary submissions to BCA, URA, and FSSD before work commences.<br/>3. <strong>Site Supervision:</strong> Licensed CoreTrade personnel supervise critical works to ensure they meet approved specifications and safety regulations."
          },
          "q3": {
            "q": "What are the permit requirements for commercial renovation in Singapore?",
            "a": "Commercial renovation in Singapore typically requires submissions to multiple authorities depending on scope: <strong>BCA</strong> for structural works, <strong>SCDF</strong> for fire safety modifications (sprinklers, fire doors, emergency lighting), <strong>URA</strong> for change of use, and <strong>MCST</strong> for mall or office tower fit-outs. As a BCA-registered contractor, we manage all submissions in-house to keep your project on schedule."
          },
          "q4": {
            "q": "How much does a commercial renovation cost in Singapore?",
            "a": "Commercial renovation costs in Singapore vary by space type and fit-out level:<br/><br/>• <strong>Office renovation:</strong> S$50–S$180 per sqft<br/>• <strong>Retail / mall fit-out:</strong> S$65–S$150 per sqft<br/>• <strong>F&B / shophouse:</strong> S$80–S$200 per sqft<br/>• <strong>Office reinstatement:</strong> S$8–S$25 per sqft<br/><br/>These ranges cover M&E works, false ceilings, partitioning, flooring, joinery, and permit fees. Request a free itemised quotation for your specific project."
          },
          "q5": {
            "q": "What is the difference between office reinstatement and renovation?",
            "a": "Office <strong>renovation</strong> involves fitting out a space to your requirements — partitions, flooring, ceilings, M&E, and joinery. Office <strong>reinstatement</strong> is the reverse process: stripping a space back to its original bare-shell condition as required by your lease agreement at the end of tenancy. Reinstatement typically includes demolition of all tenant-installed works, restoration of original flooring and walls, and relocation of fire safety systems back to their original positions."
          },
          "q6": {
            "q": "How do I choose the right commercial renovation contractor in Singapore?",
            "a": "Key criteria when selecting a commercial renovation contractor in Singapore:<br/><br/>1. <strong>BCA Registration:</strong> Verify the contractor is listed on the BCA Directory — required for all structural works.<br/>2. <strong>Track Record:</strong> Ask for references and photos of completed commercial projects of similar scope.<br/>3. <strong>In-house Permit Management:</strong> Choose a contractor who handles MCST, BCA, and SCDF submissions in-house rather than outsourcing.<br/>4. <strong>Fixed-Price Contract:</strong> Avoid contractors who provide vague quotations without full itemisation.<br/>5. <strong>Insurance:</strong> Ensure the contractor carries Public Liability Insurance and Work Injury Compensation coverage."
          }
        },
        "subpages": {
          "section_title": "Commercial Renovation Solutions",
          "section_subtitle": "Specialist services for every commercial space in Singapore — from offices to F&B outlets.",
          "btn": "Learn More",
          "office": {
            "badge": "Office Renovation",
            "title": "Office & Workspace Renovation",
            "desc": "Turnkey office fit-outs for Singapore businesses. Hybrid work layouts, system furniture, and full BCA/SCDF compliance."
          },
          "retail": {
            "badge": "Retail Fit-Out",
            "title": "Retail & Mall Store Design",
            "desc": "High-impact retail interiors that drive footfall and sales. MCST submission management for major Singapore malls."
          },
          "shophouse": {
            "badge": "Shophouse Renovation",
            "title": "F&B & Shophouse Renovation",
            "desc": "Heritage-sensitive shophouse renovations and F&B fit-outs with full URA and SCDF compliance."
          },
          "compliance": {
            "badge": "Permits & Compliance",
            "title": "Permits & Compliance",
            "desc": "BCA, SCDF, MCST and LEW permit management. We handle all submissions so you can focus on your business."
          },
          "reinstatement": {
            "badge": "Reinstatement",
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
          "subtitle": "Partner with a trusted, BCA-registered commercial contractor for your next project.",
          "button": "Get Commercial Quote"
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
          "title": "新加坡 HDB 及公寓翻新 — 现代远见生活",
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
              "title": "全程 HDB 许可证代办",
              "desc": "作为 HDB 注册承包商（注册编号：HB-02-5250G），我们代您处理所有 HDB 翻新许可证、邻居通知及结构提交事宜。"
            }
          },
          "cta": "规划我的转售组屋翻新"
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
              "a": "是的。大多数组屋翻新工程——包括<strong>拆除、铺砖、电气及管道</strong>——在实体施工前均需取得 HDB 翻新许可证。许可证审批通常需要 1–3 周。作为 HDB 注册承包商，ID Work Studio 代您处理所有许可证申请。"
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
              "q": "为什么选择 HDB 注册承包商至关重要？",
              "a": "HDB 注册承包商经过培训，严格遵守<strong> HDB 的翻新指南</strong>和结构安全协议。他们确保拆除过程中不损坏关键结构柱，并确保所有电气和管道工程符合新加坡安全标准。只有 HDB 注册承包商才能代表您申请 HDB 翻新许可证。"
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
          "q2": {
            "q": "BCA注册公司如何确保商业安全合规？",
            "a": "作为BCA注册公司，我们通过严格的3步流程确保合规性：<br/><br/>1. <strong>提交前检查：</strong> 我们的合格人员(QP)根据当前的SCDF消防规范和BCA无障碍标准审查所有设计。<br/>2. <strong>许可证管理：</strong> 在工作开始前，我们处理向BCA、URA和FSSD的所有必要提交。<br/>3. <strong>现场监督：</strong> 持牌CoreTrade人员监督关键工程，确保其符合批准的规范和安全法规。"
          },
          "q3": {
            "q": "新加坡商业翻新的许可证要求是什么？",
            "a": "新加坡商业翻新通常需要根据施工范围向多个部门提交申请：结构工程需提交 <strong>BCA</strong>，消防安全修改（洒水器、防火门、应急照明）需提交 <strong>SCDF</strong>，用途变更需提交 <strong>URA</strong>，商场或写字楼装修需提交 <strong>MCST</strong>。作为 BCA 注册承包商，我们内部处理所有提交，确保项目按时推进。"
          },
          "q4": {
            "q": "新加坡商业翻新费用是多少？",
            "a": "新加坡商业翻新费用因空间类型和装修标准而异：<br/><br/>• <strong>办公室翻新：</strong>每平方英尺 S$50–S$180<br/>• <strong>零售/商场装修：</strong>每平方英尺 S$65–S$150<br/>• <strong>餐饮/店屋：</strong>每平方英尺 S$80–S$200<br/>• <strong>办公室原状修复：</strong>每平方英尺 S$8–S$25<br/><br/>以上范围涵盖机电工程、假天花、隔断、地板、木工及许可证费用。请联系我们获取针对您项目的免费分项报价。"
          },
          "q5": {
            "q": "办公室原状修复与翻新有什么区别？",
            "a": "办公室<strong>翻新</strong>是根据您的需求装修空间，包括隔断、地板、天花板、机电及木工工程。办公室<strong>原状修复</strong>则是相反的过程：在租约结束时，按照租约规定将空间恢复至原始清水房状态。原状修复通常包括拆除所有租户安装的装修，恢复原始地板和墙面，以及将消防安全系统恢复至原始位置。"
          },
          "q6": {
            "q": "如何在新加坡选择合适的商业翻新承包商？",
            "a": "选择新加坡商业翻新承包商的关键标准：<br/><br/>1. <strong>BCA 注册：</strong>核实承包商已在 BCA 目录中注册——所有结构性工程均要求此资质。<br/>2. <strong>项目记录：</strong>要求提供同类规模商业项目的参考资料和照片。<br/>3. <strong>内部许可证管理：</strong>选择能够内部处理 MCST、BCA 和 SCDF 提交的承包商，而非外包给第三方。<br/>4. <strong>固定价格合同：</strong>避免选择提供模糊报价而无详细分项的承包商。<br/>5. <strong>保险：</strong>确保承包商持有公共责任险和工伤赔偿保险。"
          }
        },
        "subpages": {
          "section_title": "商业翻新解决方案",
          "section_subtitle": "专为新加坡各类商业空间打造的专业服务——从办公室到餐饮场所。",
          "btn": "了解更多",
          "office": {
            "badge": "办公室翻新",
            "title": "办公室与工作空间翻新",
            "desc": "为新加坡企业提供一站式办公室装修服务。混合办公布局、系统家具及完整 BCA/SCDF 合规。"
          },
          "retail": {
            "badge": "零售装修",
            "title": "零售与商场店面设计",
            "desc": "高影响力的零售室内设计，提升客流量与销售额。负责主要新加坡商场的 MCST 提交管理。"
          },
          "shophouse": {
            "badge": "店屋翻新",
            "title": "餐饮与店屋翻新",
            "desc": "注重传统风貌的店屋翻新及餐饮装修，完全符合 URA 和 SCDF 要求。"
          },
          "compliance": {
            "badge": "许可证与合规",
            "title": "许可证与合规管理",
            "desc": "BCA、SCDF、MCST 和 LEW 许可证管理。我们代您处理所有提交，让您专注于业务。"
          },
          "reinstatement": {
            "badge": "原状修复",
            "title": "办公室与商场原状修复",
            "desc": "专业清水房移交，100% 通过率保证。符合 SCDF 和 MCST 标准。"
          }
        },
        "process": {
          "title": "我们的商业翻新流程",
          "subtitle": "透明、逐步推进的方案，专为最大限度减少业务停机时间而设计。",
          "steps": {
            "1": {
              "title": "免费现场勘察",
              "detail": "免费",
              "desc": "我们进行详细的现场评估，并免费提供全面的分项报价。"
            },
            "2": {
              "title": "设计与规划",
              "detail": "1–2 周",
              "desc": "我们的设计师根据您的品牌形象制定空间方案、材料计划和 3D 效果图。"
            },
            "3": {
              "title": "许可证提交",
              "detail": "1–3 周",
              "desc": "我们在施工开始前处理所有 BCA、SCDF、MCST 和 URA 提交。"
            },
            "4": {
              "title": "翻新施工",
              "detail": "4–8 周",
              "desc": "我们持牌的 CoreTrade 团队按分阶段计划执行装修，最大限度减少业务干扰。"
            },
            "5": {
              "title": "交付与验收",
              "detail": "第 1 天",
              "desc": "与大厦管理方联合检查、缺陷修正及完整现场交付。"
            }
          }
        },
        "cta": {
          "title": "准备好改造您的商业空间了吗？",
          "subtitle": "为您的下一个项目与值得信赖的、BCA 注册的商业承包商合作。",
          "button": "获取商业报价"
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