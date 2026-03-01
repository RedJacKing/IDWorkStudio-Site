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
        "hdb": "HDB-Approved",
        "bca": "BCA-Registered",
        "firm": "Firm"
      },
      "hero": {
        "title_main": "Curated Interiors ",
        "title_sub": "for the Modern Visionary",
        "subtitle": "Premium interior design and renovation services in Singapore. With over a decade of trusted excellence, we transform homes, offices, and retail spaces into masterpieces.",
        "cta": "View Our Work"
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
        "commercial": "Commercial",
        "residential": "Residential"
      },
      "residential_page": {
        "hero": {
          "badge": "2026 Design Trends",
          "title": "Premium Condo Interior Design <br/> & HDB Renovation",
          "subtitle": "Tailored BTO & Resale Solutions for Modern Singapore Living",
          "cta": "WhatsApp for Free Floorplan Consult"
        },
        "specialists": {
          "title": "HDB BTO & Resale Specialists",
          "items": {
            "1": {
              "title": "HDB BTO Renovation Packages",
              "desc": "Turnkey solutions for new homeowners. From defect checking to final styling, we handle it all."
            },
            "2": {
              "title": "Condo Interior Design & Styling",
              "desc": "Complete overhauls for older units. We specialize in hacking, re-wiring, and modernizing layouts."
            },
            "3": {
              "title": "Landed Property A&A Works",
              "desc": "Custom carpentry that hides clutter. Think hidden household shelters and multi-function platforms."
            }
          },
          "testimonial": {
            "quote": "\"The broken-plan layout completely changed how we use our 5-room flat.\"",
            "author": "- Sarah & James, Bidadari"
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
          "subtitle": "Secure your slot for 2026. Consult with our award-winning designers today.",
          "button": "Book Free Design Consultation"
        }
      },
      "commercial_page": {
        "hero": {
          "title": "Expert Office Renovation Singapore <br/> & Commercial Fit-Outs",
          "subtitle": "Retail, F&B, and Reinstatement Services by BCA-Approved Contractors",
          "cta": "Get a Commercial Quote"
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
              "point1": "SCDF Submissions",
              "point2": "F&B Licensing Support"
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
          "subtitle": "Partner with a trusted, BCA-approved commercial contractor for your next project.",
          "button": "WhatsApp Us for a Consultation"
        }
      },
      "footer": {
        "rights": "All rights reserved."
      },
      "sticky_nav": {
        "consult": "Free Consult",
        "contact": "Contact Us"
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
        "hdb": "建屋局认证",
        "bca": "建设局注册",
        "firm": "公司"
      },
      "hero": {
        "title_main": "精心打造的室内设计 ",
        "title_sub": "致敬现代有识之士",
        "subtitle": "新加坡优质室内设计与翻新服务。凭借十多年的卓越信誉，我们将住宅、办公室和零售空间转化为杰作。",
        "cta": "查看我们的作品"
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
            "desc": "我们拥有建屋局(HDB)和建设局(BCA)注册的团队，精准管理翻新工程，确保质量和合规性。"
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
        "commercial": "商业空间",
        "residential": "住宅设计"
      },
      "residential_page": {
        "hero": {
          "badge": "2026 设计趋势",
          "title": "高级公寓室内设计 <br/> 与组屋翻新",
          "subtitle": "为现代新加坡生活量身定制的BTO和转售解决方案",
          "cta": "WhatsApp 免费平面图咨询"
        },
        "specialists": {
          "title": "组屋 BTO 和转售专家",
          "items": {
            "1": {
              "title": "组屋 BTO 翻新配套",
              "desc": "为新房主提供一站式解决方案。从缺陷检查到最终造型，我们包揽一切。"
            },
            "2": {
              "title": "公寓室内设计与造型",
              "desc": "旧单位的全面翻新。我们专注于拆除、重新布线和现代化布局。"
            },
            "3": {
              "title": "有地房产改建及加建工程",
              "desc": "隐藏杂物的定制木工。想想隐藏的防空壕和多功能平台。"
            }
          },
          "testimonial": {
            "quote": "\"打破常规的布局彻底改变了我们使用五房式组屋的方式。\"",
            "author": "- Sarah & James, Bidadari"
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
            "q": "为什么选择建屋局注册承包商对安全很重要？",
            "a": "选择建屋局注册承包商至关重要，因为他们受过培训，严格遵守<strong>建屋局的翻新指南</strong>和结构安全协议。他们确保在拆除过程中不会损坏关键的结构柱，并且所有电气和管道工程均符合新加坡的安全标准，从而保护您免受责任和安全隐患。"
          }
        },
        "cta": {
          "title": "开始您的家居改造",
          "subtitle": "确保您在2026年的名额。立即咨询我们屡获殊荣的设计师。",
          "button": "预约免费设计咨询"
        }
      },
      "commercial_page": {
        "hero": {
          "title": "新加坡专业办公室翻新 <br/> 与商业装修",
          "subtitle": "由建设局(BCA)认可的承包商提供零售、餐饮和恢复原状服务",
          "cta": "获取商业报价"
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
              "title": "符合BCA/HDB标准的商业翻新",
              "desc": "完全符合新加坡严格的建筑规范。我们管理餐饮、工业和商业空间的所有提交文件。",
              "point1": "SCDF 提交",
              "point2": "餐饮许可支持"
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
            "a": "对于新加坡的标准办公室装修（约2,000 - 5,000平方英尺），时间表通常在<strong>4到8周</strong>之间。这包括1-2周的设计和材料选择，1-2周的BCA/消防安全提交，以及4-6周的翻新工程。需要大量机电工程或结构更改的复杂项目可能需要8-12周。"
          },
          "q2": {
            "q": "BCA注册公司如何确保商业安全合规？",
            "a": "作为BCA注册公司，我们通过严格的3步流程确保合规性：<br/><br/>1. <strong>提交前检查：</strong> 我们的合格人员(QP)根据当前的SCDF消防规范和BCA无障碍标准审查所有设计。<br/>2. <strong>许可证管理：</strong> 在工作开始前，我们处理向BCA、URA和FSSD的所有必要提交。<br/>3. <strong>现场监督：</strong> 持牌CoreTrade人员监督关键工程，确保其符合批准的规范和安全法规。"
          }
        },
        "cta": {
          "title": "准备好改造您的商业空间了吗？",
          "subtitle": "为您的下一个项目与值得信赖的、BCA认可的商业承包商合作。",
          "button": "WhatsApp 我们进行咨询"
        }
      },
      "footer": {
        "rights": "版权所有。"
      },
      "sticky_nav": {
        "consult": "免费咨询",
        "contact": "联系我们"
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
