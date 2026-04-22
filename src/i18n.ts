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
          "title": "What Our Homeowners Say",
          "subtitle": "Real feedback from Singapore families who trusted us with their homes.",
          "items": {
            "1": {
              "quote": "ID Work Studio transformed our 4-room resale flat in Tampines into a stunning Japandi home. The HDB permit was handled within 10 days and the entire renovation was completed in 10 weeks. Zero hidden costs — the final bill matched the quote exactly.",
              "name": "Mr & Mrs Tan",
              "flat": "4-Room Resale HDB, Tampines"
            },
            "2": {
              "quote": "We were nervous about our BTO renovation budget, but the team gave us a detailed itemised quote with zero surprises. The final result exceeded our expectations — our Tengah flat looks like a showflat. Highly recommend for first-timers.",
              "name": "Sarah & James Lim",
              "flat": "5-Room BTO, Tengah"
            },
            "3": {
              "quote": "As a first-time homeowner, I had a hundred questions. The ID Work Studio team patiently walked me through every decision — carpentry layout, tile selection, smart lighting. My 3-room came out beautifully, within budget and on time.",
              "name": "Miss Chen",
              "flat": "3-Room BTO, Bidadari"
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
          "title": "业主真实评价",
          "subtitle": "来自信任我们的新加坡家庭的真实反馈。",
          "items": {
            "1": {
              "quote": "ID Work Studio 将我们在淡滨尼的四房式转售组屋打造成令人惊艳的日式北欧风格家居。HDB 许可证在 10 天内办妥，整个翻新在 10 周内完成。费用透明，最终账单与报价完全一致。",
              "name": "陈先生与陈太太",
              "flat": "四房式转售组屋，淡滨尼"
            },
            "2": {
              "quote": "我们最初对翻新预算感到忧虑，但团队提供了详细的明细报价，完全没有额外惊喜。最终效果超出预期——我们的登加组屋看起来像展示单位。强烈推荐给首次置业者。",
              "name": "Sarah 与 James Lim",
              "flat": "五房式 BTO，登加"
            },
            "3": {
              "quote": "作为首次置业者，我有很多问题。ID Work Studio 的团队耐心引导我完成每一个决定——木工布局、瓷砖选择、智能灯光。我的三房式组屋在预算内准时完工，效果非常美观。",
              "name": "陈小姐",
              "flat": "三房式 BTO，比达达里"
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