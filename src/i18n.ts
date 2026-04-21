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
      "services": {
        "title": "Our Expertise",
        "residential": {
          "title": "Residential",
          "desc": "Bespoke living spaces designed for comfort and elegance."
        },
        "commercial": {
          "title": "Commercial",
          "desc": "High-performance environments tailored for business success."
        },
        "reinstatement": {
          "title": "Reinstatement",
          "desc": "Professional end-of-lease services for a seamless handover."
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
            "title": "Quality Craftsmanship",
            "desc": "Every detail is handled by skilled artisans, using premium materials to deliver a flawless finish."
          },
          "4": {
            "title": "Handover & Beyond",
            "desc": "We ensure a perfect delivery, followed by dedicated post-renovation support for your peace of mind."
          }
        }
      },
      "commercial_page": {
        "hero": {
          "title_serif": "Strategic Spaces",
          "title_bold": "for Business Excellence",
          "subtitle": "BCA & HDB registered commercial specialist. We create high-performance offices, retail boutiques, and F&B environments that drive growth."
        },
        "stats": {
          "years": "Years of Expertise",
          "projects": "Commercial Projects",
          "retention": "Client Retention"
        },
        "sectors": {
          "title": "Industry Expertise",
          "office": "Corporate Offices",
          "retail": "Retail Boutiques",
          "fnb": "F&B Environments",
          "medical": "Medical & Wellness"
        },
        "cta": {
          "title": "Ready to Transform Your Business Space?",
          "subtitle": "Contact our commercial team for a professional consultation and site assessment."
        }
      },
      "residential_page": {
        "hero": {
          "title_serif": "Crafting Your",
          "title_bold": "Ideal Sanctuary",
          "subtitle": "Specializing in HDB BTO/Resale, Condominiums, and Landed Properties. We blend aesthetics with functionality to create homes that reflect your soul."
        },
        "stats": {
          "homes": "Homes Transformed",
          "hdb": "HDB Licensed",
          "satisfaction": "Client Satisfaction"
        }
      },
      "why_us": {
        "title": "Why Choose Us",
        "subtitle": "Excellence in every detail, trust in every project.",
        "features": {
          "1": {
            "title": "BCA & HDB Registered",
            "desc": "Fully licensed for absolute peace of mind."
          },
          "2": {
            "title": "10+ Years Experience",
            "desc": "A decade of transforming Singaporean spaces."
          },
          "3": {
            "title": "Direct Contractor Pricing",
            "desc": "Transparent costs with no hidden agency fees."
          },
          "4": {
            "title": "Award-Winning Quality",
            "desc": "Craftsmanship that stands the test of time."
          }
        }
      },
      "testimonials": {
        "title": "Client Stories",
        "subtitle": "Voices of satisfaction from those we've served.",
        "items": {
          "1": {
            "name": "David Chen",
            "role": "Condo Owner",
            "text": "ID Work Studio transformed our resale condo beyond our expectations. Their attention to detail is remarkable."
          },
          "2": {
            "name": "Sarah Lim",
            "role": "Business Owner",
            "text": "The commercial fit-out was completed ahead of schedule. Professional, efficient, and highly recommended."
          },
          "3": {
            "name": "James Tan",
            "role": "Landed Homeowner",
            "text": "A seamless experience from design to handover. Their craftsmanship is truly premium."
          }
        }
      },
      "trust": {
        "bca": "BCA-Registered",
        "hdb": "HDB-Registered",
        "scdf": "SCDF-Compliant"
      },
      "trust_row": {
        "text": "Trusted by tenants in Singapore's leading Grade A offices and malls."
      },
      "footer": {
        "headline_serif": "Your Peace",
        "headline_bold": "of Mind is Our Priority",
        "whatsapp_btn": "WhatsApp for Free Site Survey",
        "rights": "All Rights Reserved."
      },
      "sticky_footer": {
        "text": "Secure Your Deposit – Fast 7-Day Reinstatement Available."
      },
      "reinstatement_section": {
        "headline_serif": "End-of-Lease",
        "headline_bold": "Reinstatement",
        "subtext": "Fast-track 7-day bare shell handover for offices and retail units. We handle SCDF, MCST, and landlord compliance to secure your deposit.",
        "button": "View Reinstatement Services"
      },
      "reinstatement": {
        "hero": {
          "badge": "HDB Licensed: HB-02-5250G • BCA Registered",
          "title_main": "Office & Shopping Mall",
          "title_italic": "Unit Reinstatement",
          "subtitle": "Professional handover management for Singapore CBD offices and retail malls. Reliable estimates and compliant bare shell restoration.",
          "whatsapp": "Request Site Survey",
          "email": "Email Lease Clause"
        },
        "stats": {
          "cost_label": "Typical Cost PSF",
          "timeline_label": "Typical Timeline"
        },
        "faq": {
          "title": "Expert Knowledge Base",
          "q1": "What is the typical cost for office reinstatement in Singapore?",
          "a1": "For 2026, market estimates generally range between S$5 to S$30 per square foot. Standard office reinstatements involving partition and flooring removal typically fall within S$8–S$15 psf.",
          "q2": "Do you handle SCDF fire safety and sprinkler reinstatement?",
          "a2": "Yes. As an HDB-licensed (HB-02-5250G) contractor, we ensure fire sprinklers, smoke detectors, and emergency lighting are reinstated to their original as-built positions to pass landlord inspections.",
          "q3": "What does 'Bare Shell' condition require in a commercial lease?",
          "a3": "A bare shell handover typically requires the removal of all tenant-installed fixtures, including partitions and built-in furniture. Walls must be patched and painted white, and M&E services made safe."
        },
        "cta": {
          "title": "Secure Your Deposit Return.",
          "subtitle": "Early planning avoids unnecessary landlord disputes. Send us your lease clause for a same-day professional assessment.",
          "button": "WhatsApp Us For Quote"
        }
      }
    }
  },
  zh: {
    translation: {
      "nav": {
        "home": "首页",
        "residential": "住宅装修",
        "commercial": "商业装修",
        "gallery": "案例展示",
        "contact": "联系我们"
      },
      "accreditation": {
        "hdb": "HDB 注册",
        "bca": "BCA 注册",
        "firm": "装修商"
      },
      "hero": {
        "title_main": "为现代远见者",
        "title_sub": "精心打造的室内空间",
        "subtitle": "新加坡优质室内设计与装修服务。凭借十余年备受信任的卓越表现，我们将住宅、办公和商业空间转化为杰作。",
        "cta": "查看我们的作品",
        "whatsapp": "联系我们"
      },
      "services": {
        "title": "我们的专长",
        "residential": {
          "title": "住宅装修",
          "desc": "为您量身定制舒适优雅的居住空间。"
        },
        "commercial": {
          "title": "商业装修",
          "desc": "助力业务成功的专业办公与商业环境。"
        },
        "reinstatement": {
          "title": "原状恢复",
          "desc": "专业高效的租约期满移交服务。"
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
      "commercial_page": {
        "hero": {
          "title_serif": "打造卓越业务的",
          "title_bold": "战略空间",
          "subtitle": "BCA & HDB 注册商业专家。我们打造高效的办公室、零售精品店和餐饮环境，助力业务增长。"
        },
        "stats": {
          "years": "多年专业经验",
          "projects": "商业项目",
          "retention": "客户留存率"
        },
        "sectors": {
          "title": "行业专长",
          "office": "企业办公室",
          "retail": "零售精品店",
          "fnb": "餐饮环境",
          "medical": "医疗与康养"
        },
        "cta": {
          "title": "准备好改造您的业务空间了吗？",
          "subtitle": "联系我们的商业团队，进行专业咨询和现场评估。"
        }
      },
      "residential_page": {
        "hero": {
          "title_serif": "打造您的",
          "title_bold": "理想避风港",
          "subtitle": "专注于 HDB 新房/转售、公寓及有地住宅。我们将美学与功能完美结合，打造体现您灵魂的家园。"
        },
        "stats": {
          "homes": "房屋改造数量",
          "hdb": "HDB 注册执照",
          "satisfaction": "客户满意度"
        }
      },
      "why_us": {
        "title": "为什么选择我们",
        "subtitle": "精益求精的细节，值得信赖的项目。",
        "features": {
          "1": {
            "title": "BCA & HDB 注册",
            "desc": "合法合规，让您绝对安心。"
          },
          "2": {
            "title": "10年以上经验",
            "desc": "十年磨一剑，专注打造新加坡空间。"
          },
          "3": {
            "title": "直属承包商价格",
            "desc": "价格透明，无隐藏中介费。"
          },
          "4": {
            "title": "屡获殊荣的品质",
            "desc": "经得起时间考验的精湛工艺。"
          }
        }
      },
      "testimonials": {
        "title": "客户评价",
        "subtitle": "来自我们服务对象的真实声音。",
        "items": {
          "1": {
            "name": "陈先生",
            "role": "公寓业主",
            "text": "ID Work Studio 对转售公寓的改造超出了我们的预期，细节把控非常到位。"
          },
          "2": {
            "name": "林小姐",
            "role": "企业主",
            "text": "商业装修提前完工。专业、高效，非常推荐。"
          },
          "3": {
            "name": "谭先生",
            "role": "有地住宅业主",
            "text": "从设计到移交，体验非常顺畅。他们的工艺确实是顶级的。"
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
        "whatsapp_btn": "WhatsApp 获取免费现场勘察",
        "rights": "版权所有。"
      },
      "sticky_footer": {
        "text": "拿回您的押金 – 快速 7 天原状恢复服务。"
      },
      "reinstatement_section": {
        "headline_serif": "租约期满",
        "headline_bold": "原状恢复",
        "subtext": "为办公室和零售单位提供快速 7 天“清水房”移交。我们处理 SCDF、MCST 和房东合规事务，确保您的押金退回。",
        "button": "查看原状恢复服务"
      },
      "reinstatement": {
        "hero": {
          "badge": "HDB 执照: HB-02-5250G • BCA 注册",
          "title_main": "办公室与商场单位",
          "title_italic": "原状恢复服务",
          "subtitle": "为您提供新加坡 CBD 办公室和各大商场的专业移交管理。可靠的成本估算，确保符合法规的清水房还原。",
          "whatsapp": "预约现场勘察",
          "email": "电邮租约条款"
        },
        "stats": {
          "cost_label": "每平方英尺成本",
          "timeline_label": "典型工期"
        },
        "faq": {
          "title": "专家见解与常见问题",
          "q1": "新加坡办公室原状恢复的典型成本是多少？",
          "a1": "在2026年，市场价格通常在每平方英尺 S$5 到 S$30 之间。标准办公室（拆除隔断和地板）通常在 S$8–S$15 之间。",
          "q2": "你们处理 SCDF 消防安全和洒水系统还原吗？",
          "a2": "是的。作为 HDB 执照 (HB-02-5250G) 承包商，我们确保洒水器、烟雾探测器和应急灯根据原始布局进行还原，以通过检查。",
          "q3": "什么是“清水房” (Bare Shell) 移交标准？",
          "a3": "清水房移交通常要求拆除租户安装的所有设施，包括隔断、定制家具和地板。墙壁必须修补并涂成中性白色，确保所有机电服务符合原始交付状态。"
        },
        "cta": {
          "title": "确保您的押金安全退回",
          "subtitle": "提早规划可避免不必要的房东纠纷。请将您的租约条款发送给我们，进行当天的专业评估。",
          "button": "WhatsApp 咨询报价"
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
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;