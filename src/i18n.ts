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
        "subtitle": "BCA-Registered & HDB-Approved interior design and renovation services in Singapore. Specialized in turning homes and offices into visionary masterpieces.",
        "cta": "View Our Work"
      },
      "process": {
        "title": "Our Process",
        "subtitle": "A seamless journey from concept to reality.",
        "steps": {
          "1": {
            "title": "Consult & Design",
            "desc": "We translate your lifestyle needs into professional design concepts and detailed layouts."
          },
          "2": {
            "title": "Accredited Execution",
            "desc": "Our HDB & BCA registered team manages the renovation with precision, ensuring full regulatory compliance."
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
          "desc": "Transforming HDBs, Condos, and Landed properties. Specialized in BCA-compliant space planning."
        },
        "commercial": {
          "title": "Commercial & Retail",
          "desc": "Strategic workspace design enhancing operational efficiency. FSSD and BCA compliant solutions."
        },
        "custom": {
          "title": "Custom Carpentry",
          "desc": "Bespoke joinery and furniture design tailored to your space with premium craftsmanship."
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
          "badge": "HDB Approved & BCA Registered",
          "title": "Modern Visionary Living <br/> & HDB Specialist",
          "subtitle": "We handle all HDB Renovation Permits and structural submissions for your peace of mind.",
          "cta": "Book a Home Consultation",
          "alt": "ID Work Studio Residential Interior Design Singapore"
        },
        "specialists": {
          "title": "Residential Renovation Experts",
          "items": {
            "1": {
              "title": "HDB & BTO Renovations",
              "desc": "Expert handling of HDB layouts. We specialize in hacking, re-wiring, and modernizing BTO units."
            },
            "2": {
              "title": "Condo & Landed Design",
              "desc": "Bespoke interior styling for premium residences, focusing on luxury finishes and smart integration."
            },
            "3": {
              "title": "Space-Saving Carpentry",
              "desc": "Multi-functional carpentry that hides clutter. Specialized in hidden storage and smart layouts."
            }
          },
          "testimonial": {
            "quote": "\"Professional, compliant, and visionary. They handled our BTO permits effortlessly.\"",
            "author": "- Residential Client, Singapore"
          }
        },
        "insights": {
          "title": "Expert Insights for 2026",
          "q1": {
            "q": "What is the cost of a 4-room BTO renovation in 2026?",
            "a": "In 2026, a comprehensive 4-room BTO renovation typically ranges from <strong>$45,000 to $65,000</strong> for essential works. Premium finishes and smart integrations may vary."
          },
          "q2": {
            "q": "How can I maximize storage in a small HDB layout?",
            "a": "Utilize <strong>vertical space</strong> with floor-to-ceiling carpentry. Lived-in Japandi designs often use concealed cabinetry to maintain a minimalist aesthetic."
          },
          "q3": {
            "q": "Why is an HDB-registered contractor important?",
            "a": "Registered contractors strictly adhere to <strong>HDB structural safety protocols</strong>, ensuring no critical pillars are compromised during your renovation."
          }
        },
        "cta": {
          "title": "Start Your Home Transformation",
          "subtitle": "Partner with a BCA-registered designer for a stress-free renovation.",
          "button": "Book a Home Consultation"
        }
      },
      "commercial_page": {
        "hero": {
          "title": "Commercial Renovation Singapore <br/> & Office Fit-Outs",
          "subtitle": "FSSD-Compliant Retail and Office Solutions by BCA-Registered Contractors",
          "cta": "Get a Commercial Quote"
        },
        "solutions": {
          "title": "Compliance & Efficiency Solutions",
          "items": {
            "1": {
              "title": "Office Fit-Outs & Reinstatement",
              "desc": "Optimized layouts to minimize business downtime. We handle full fit-outs and office reinstatement.",
              "point1": "Gantt Chart Management",
              "point2": "MA Liaison"
            },
            "2": {
              "title": "Retail & F&B Design",
              "desc": "Captivating interiors that drive traffic while meeting strict SCDF and Building Management codes.",
              "point1": "SCDF Submissions",
              "point2": "F&B Licensing Support"
            },
            "3": {
              "title": "BCA Compliant Project Management",
              "desc": "We manage all technical submissions and safety permits for industrial and commercial spaces.",
              "point1": "FSSD Approvals",
              "point2": "Site Safety (WSH)"
            }
          }
        },
        "trust": {
          "title": "Project Management & Compliance",
          "subtitle": "We handle the red tape so you can focus on your business.",
          "items": {
            "1": {
              "title": "Fire Safety (SCDF)",
              "desc": "Full submission and approval handling for FSSD regulations."
            },
            "2": {
              "title": "BCA Permits",
              "desc": "Registered contractor for all building and construction authority permits."
            },
            "3": {
              "title": "Mall Management",
              "desc": "Experienced in coordinating with Singapore mall management (MA) teams."
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
            "q": "What is the timeline for an office fit-out?",
            "a": "A standard fit-out typically takes <strong>4 to 8 weeks</strong>, including 1-2 weeks for BCA/Fire Safety submissions."
          },
          "q2": {
            "q": "How do you ensure commercial compliance?",
            "a": "Our Qualified Persons (QP) review all designs against current SCDF Fire Codes and handle all necessary URA/BCA submissions."
          }
        },
        "cta": {
          "title": "Ready to Transform Your Business Space?",
          "subtitle": "Partner with a trusted, BCA-approved commercial contractor today.",
          "button": "Get a Commercial Quote"
        }
      },
      "footer": {
        "rights": "All rights reserved."
      },
      "sticky_nav": {
        "consult": "Contact Us",
        "contact": "WhatsApp"
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
        "hdb": "HDB认证",
        "bca": "BCA注册",
        "firm": "公司"
      },
      "hero": {
        "title_main": "精心打造的室内设计 ",
        "title_sub": "致敬现代有识之士",
        "subtitle": "新加坡BCA注册与HDB认证的室内设计公司。凭借十多年的信誉，我们将住宅与办公室转化为杰作。",
        "cta": "查看作品"
      },
      "process": {
        "title": "我们的流程",
        "subtitle": "从概念到现实的无缝体验。",
        "steps": {
          "1": {
            "title": "咨询与设计",
            "desc": "我们将您的生活需求转化为专业的 3D 设计概念和详细布局。"
          },
          "2": {
            "title": "专业施工",
            "desc": "我们的 HDB 和 BCA 注册团队精准管理翻新工程，确保完全符合法规。"
          },
          "3": {
            "title": "完美交付",
            "desc": "走进您梦想的空间，完美竣工、清洁完毕，准备好迎接新篇章。"
          }
        }
      },
      "services": {
        "title": "我们的专长",
        "subtitle": "为住宅和商业空间提供全面的解决方案。",
        "residential": {
          "title": "住宅翻新",
          "desc": "改造 HDB、公寓和有地房产。专注于符合 BCA 标准的空间规划。"
        },
        "commercial": {
          "title": "商业与零售",
          "desc": "提升运营效率的工作空间设计。提供符合 FSSD 和 BCA 标准的方案。"
        },
        "custom": {
          "title": "定制木工",
          "desc": "为您量身定制的精细木工，采用优质材料和精湛工艺。"
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
          "badge": "HDB 认证 & BCA 注册",
          "title": "现代愿景家居 <br/> 与组屋翻新专家",
          "subtitle": "我们处理所有 HDB 翻新许可和结构提交，让您安心无忧。",
          "cta": "预约家居咨询",
          "alt": "ID Work Studio 新加坡住宅室内设计"
        },
        "specialists": {
          "title": "住宅翻新专家",
          "items": {
            "1": {
              "title": "组屋翻新配套",
              "desc": "精通 HDB 布局处理。我们专注于 BTO 单位的拆除、重新布线和现代化改造。"
            },
            "2": {
              "title": "公寓与有地房产设计",
              "desc": "为高级住宅提供定制室内造型，专注于豪华饰面和智能集成。"
            },
            "3": {
              "title": "节省空间的定制木工",
              "desc": "隐藏杂物的多功能木工。专注于隐藏式存储和智能布局。"
            }
          },
          "testimonial": {
            "quote": "\"专业且合规。他们毫不费力地处理了我们的 BTO 许可证。\"",
            "author": "- 新加坡住宅客户"
          }
        },
        "insights": {
          "title": "2026 年专家见解",
          "q1": {
            "q": "2026 年四房式 BTO 翻新的成本是多少？",
            "a": "在 2026 年，新加坡全面的四房式 BTO 翻新基本工程通常在 <strong>$45,000 到 $65,000</strong> 之间。"
          },
          "q2": {
            "q": "如何在小型组屋中最大化存储空间？",
            "a": "利用带有落地木工的<strong>垂直空间</strong>。Japandi 设计通常使用隐藏式橱柜以保持美感。"
          },
          "q3": {
            "q": "为什么选择 HDB 注册承包商很重要？",
            "a": "注册承包商严格遵守<strong>结构安全协议</strong>，确保在翻新期间不会损坏关键结构柱。"
          }
        },
        "cta": {
          "title": "开始您的家居改造",
          "subtitle": "与 BCA 注册设计师合作，享受无忧翻新。",
          "button": "预约家居咨询"
        }
      },
      "commercial_page": {
        "hero": {
          "title": "新加坡专业办公室翻新 <br/> 与商业装修",
          "subtitle": "由 BCA 注册承包商提供符合 FSSD 标准的零售与办公室方案",
          "cta": "获取商业报价"
        },
        "solutions": {
          "title": "合规与效率方案",
          "items": {
            "1": {
              "title": "办公室装修与恢复原状",
              "desc": "优化布局以减少业务停工时间。我们处理全面装修和办公室恢复原状工程。",
              "point1": "甘特图管理",
              "point2": "商场管理协调"
            },
            "2": {
              "title": "零售与餐饮设计",
              "desc": "打造吸引流量的室内设计，同时符合严格的 SCDF 消防规范和建筑管理要求。",
              "point1": "SCDF 消防提交",
              "point2": "餐饮许可支持"
            },
            "3": {
              "title": "符合 BCA 标准的项目管理",
              "desc": "我们管理工业和商业空间的所有技术提交和安全许可。",
              "point1": "FSSD 审批",
              "point2": "现场安全 (WSH)"
            }
          }
        },
        "trust": {
          "title": "项目管理与合规",
          "subtitle": "我们处理繁文缛节，让您专注于业务发展。",
          "items": {
            "1": {
              "title": "消防安全 (SCDF)",
              "desc": "全面处理符合 FSSD 法规的提交和审批。"
            },
            "2": {
              "title": "BCA 许可证",
              "desc": "所有必要建筑和建设局许可证的注册承包商。"
            },
            "3": {
              "title": "商场管理",
              "desc": "在与新加坡商场管理 (MA) 团队协调方面经验丰富。"
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
            "q": "办公室装修的时间表是多久？",
            "a": "标准装修通常需要 <strong>4 到 8 周</strong>，包括 1-2 周的 BCA/消防安全提交。"
          },
          "q2": {
            "q": "如何确保商业合规性？",
            "a": "我们的合资格人员 (QP) 根据当前的消防规范审查所有设计，并处理所有 URA/BCA 提交。"
          }
        },
        "cta": {
          "title": "准备好改造您的商业空间了吗？",
          "subtitle": "立即与值得信赖的 BCA 认证商业承包商合作。",
          "button": "获取商业报价"
        }
      },
      "footer": {
        "rights": "版权所有。"
      },
      "sticky_nav": {
        "consult": "联系我们",
        "contact": "WhatsApp"
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
      escapeValue: false 
    }
  });

export default i18n;