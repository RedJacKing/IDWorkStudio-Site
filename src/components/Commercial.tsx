import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Building2, ShieldCheck, FileCheck, HardHat, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type CommercialFaqKey = 'q1' | 'q2' | 'q3' | 'q4' | 'q5' | 'q6' | 'q7' | 'q8' | 'q9' | 'q10' | 'q11' | 'q12';

const commercialPageContent = {
  "en": {
    "direct_answer": {
      "eyebrow": "Direct answer for Singapore business owners",
      "title": "Commercial renovation in Singapore: cost, timeline and approvals",
      "p1": "Commercial renovation in Singapore typically costs <strong>$30 to $180 psf for offices</strong>, <strong>$80 to $150 psf for retail shops</strong>, and <strong>$120 to $250 psf for F&B outlets</strong>. Most projects take <strong>6 to 12 weeks</strong> including design, landlord or MCST approval, authority checks and renovation works.",
      "p2": "The main difference from residential renovation is compliance. Commercial projects may involve landlord fitting-out rules, MCST requirements, fire safety checks, exhaust requirements, working-hour restrictions and reinstatement obligations at lease end.",
      "cards": {
        "1": {
          "label": "Office renovation",
          "range": "$30 – $180 psf",
          "note": "Basic office refresh to premium fit-out"
        },
        "2": {
          "label": "Retail renovation",
          "range": "$80 – $150 psf",
          "note": "Shopfront, lighting, display and storage works"
        },
        "3": {
          "label": "F&B renovation",
          "range": "$120 – $250 psf",
          "note": "Kitchen, exhaust, plumbing and fire safety factors"
        }
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
        "1": {
          "title": "Design and planning",
          "time": "2 – 3 weeks",
          "desc": "Site visit, layout planning, design direction, budget alignment and material direction."
        },
        "2": {
          "title": "Landlord / MCST / authority submission",
          "time": "2 – 4 weeks",
          "desc": "Submission of drawings, contractor documents, insurance, method statements and fire-safety-related checks where needed."
        },
        "3": {
          "title": "Renovation works and handover",
          "time": "4 – 8 weeks",
          "desc": "Protection, demolition, M&E, ceiling, flooring, carpentry, painting, cleaning and final handover."
        }
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
    }
  },
  "zh": {
    "direct_answer": {
      "eyebrow": "给新加坡商业业主的直接答案",
      "title": "新加坡商业翻新：费用、时间表与审批",
      "p1": "新加坡商业翻新通常为：<strong>办公室每平方英尺 $30 至 $180</strong>、<strong>零售店每平方英尺 $80 至 $150</strong>、<strong>餐饮空间每平方英尺 $120 至 $250</strong>。多数项目连同设计、业主或 MCST 审批、相关检查与施工，通常需要 <strong>6 至 12 周</strong>。",
      "p2": "商业翻新与住宅翻新的主要差别在于合规要求。商业项目可能涉及业主装修指南、MCST 要求、消防安全检查、排气系统、施工时段限制，以及租约结束时的原状修复责任。",
      "cards": {
        "1": {
          "label": "办公室翻新",
          "range": "$30 – $180 / 平方英尺",
          "note": "从基础办公室更新到高级办公室装修"
        },
        "2": {
          "label": "零售店翻新",
          "range": "$80 – $150 / 平方英尺",
          "note": "店面、灯光、陈列与储物工程"
        },
        "3": {
          "label": "餐饮空间翻新",
          "range": "$120 – $250 / 平方英尺",
          "note": "厨房、排气、给排水与消防安全因素"
        }
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
        "1": {
          "title": "设计与规划",
          "time": "2 – 3 周",
          "desc": "现场勘察、布局规划、设计方向、预算确认与材料方向。"
        },
        "2": {
          "title": "业主 / MCST / 相关单位提交",
          "time": "2 – 4 周",
          "desc": "提交图纸、承包商文件、保险、施工方法说明，以及必要的消防安全相关检查。"
        },
        "3": {
          "title": "翻新施工与交付",
          "time": "4 – 8 周",
          "desc": "现场保护、拆除、机电、天花、地面、木作、油漆、清洁与最终交付。"
        }
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
    }
  }
} as const;

export default function Commercial() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'zh' ? 'zh' : 'en';
  const commercialContent = commercialPageContent[lang];
  const whatsappNumber = "6598333085";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20ID%20Work%20Studio,%20I'd%20like%20a%20free%20consultation%20for%20my%20commercial%20project.`;

  const faqIconMap = [Clock, Building2, Clock, ShieldCheck, FileCheck, HardHat, CheckCircle, FileCheck, Building2, HardHat, CheckCircle, ShieldCheck];

  const commercialFaqs = Array.from({ length: 12 }, (_, index) => {
    const Icon = faqIconMap[index];
    const key = `q${index + 1}` as CommercialFaqKey;
    const item = commercialContent.faq[key];
    return {
      q: item.q,
      a: item.a,
      icon: <Icon className="w-5 h-5 text-champagne flex-shrink-0 mt-0.5" />,
    };
  });

  const stripHtmlForSchema = (html: string) =>
    html
      .replace(/<br\s*\/?>/gi, ' ')
      .replace(/<[^>]*>/g, '')
      .replace(/&nbsp;/gi, ' ')
      .replace(/&amp;/gi, '&')
      .replace(/&quot;/gi, '"')
      .replace(/&#39;/gi, "'")
      .trim();

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Renovation Singapore | Office Renovation Contractor",
    "description": "BCA-registered commercial renovation and office renovation services in Singapore. Practical cost guidance, timeline planning, landlord and MCST coordination, SCDF-aware renovation support, office fit-out, retail renovation and F&B renovation.",
    "serviceType": "Commercial Renovation",
    "areaServed": {
      "@type": "City",
      "name": "Singapore"
    },
    "provider": {
      "@type": "LocalBusiness",
      "name": "ID Work Studio",
      "url": "https://idworkstudio.com",
      "telephone": "+6568162872",
      "email": "contact@idworkstudio.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "11 Woodlands Close, Woodlands 11, #03-10",
        "addressLocality": "Woodlands",
        "addressRegion": "Singapore",
        "postalCode": "737853",
        "addressCountry": "SG"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Commercial Renovation Services Singapore",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Office Renovation Singapore" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Fit-Out Singapore" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Retail Interior Fit-Out Singapore" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "F&B Renovation Singapore" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Office Interior Design Singapore" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Interior Design Woodlands Singapore" } }
      ]
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://idworkstudio.com/commercial"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": commercialFaqs.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": stripHtmlForSchema(item.a) }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Commercial Renovation Singapore | Office Renovation Contractor | ID Work Studio</title>
        <meta
          name="description"
          content="Commercial renovation Singapore guide by ID Work Studio. Office renovation, retail fit-out and F&B renovation cost, timeline, process, landlord approval, MCST and SCDF-aware renovation support."
        />
        <meta
          name="keywords"
          content="commercial renovation Singapore, office renovation Singapore, office renovation contractor Singapore, commercial contractor Singapore, retail renovation Singapore, F&B renovation Singapore, commercial fit-out Singapore, BCA registered renovation company Singapore, ID Work Studio"
        />

        <meta name="geo.region" content="SG" />
        <meta name="geo.placename" content="Woodlands, Singapore" />
        <meta name="geo.position" content="1.4348129;103.7326522" />
        <meta name="ICBM" content="1.4348129, 103.7326522" />

        <link rel="canonical" href="https://idworkstudio.com/commercial" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://idworkstudio.com/commercial" />
        <meta property="og:title" content="Commercial Renovation Singapore | Office Renovation Contractor | ID Work Studio" />
        <meta
          property="og:description"
          content="BCA-registered commercial renovation services in Singapore for offices, retail shops and F&B spaces. Includes cost guidance, timeline, approval process and practical contractor advice."
        />
        <meta property="og:image" content="https://idworkstudio.com/WALANDING.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="ID Work Studio" />
        <meta property="og:locale" content="en_SG" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Commercial Renovation Singapore | Office Renovation Contractor | ID Work Studio" />
        <meta
          name="twitter:description"
          content="Commercial renovation Singapore guide for offices, retail spaces and F&B environments. Cost, timeline, landlord approval and contractor process."
        />
        <meta name="twitter:image" content="https://idworkstudio.com/WALANDING.jpg" />

        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="bg-off-white min-h-screen">
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-24 md:pt-32 lg:pt-40 pb-20 md:pb-32 text-white">
          <div className="absolute inset-0 z-0">
            <img
              src="/gallery/commercial-expertise.png"
              alt="Refined commercial interior design and office fit-out in Singapore"
              className="w-full h-full object-cover object-center opacity-60"
              fetchpriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-8 md:mt-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-title-break text-3xl sm:text-4xl md:text-6xl font-serif mb-6 leading-tight text-white uppercase tracking-tight px-2"
            >
              {t('commercial_page.hero.title')}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light tracking-wide leading-relaxed px-4"
            >
              {t('commercial_page.hero.subtitle')}
            </motion.h2>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center justify-center w-full px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full sm:w-auto"
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-gold text-dark-charcoal text-[11px] md:text-sm uppercase tracking-[0.2em] hover:bg-gold-hover hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] transition-all duration-300 font-bold rounded-full text-center"
                >
                  {t('commercial_page.hero.cta')}
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/commercial/reinstatement"
                  className="inline-block w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-transparent text-white text-[11px] md:text-sm uppercase tracking-[0.2em] hover:bg-white/10 transition-all duration-300 font-bold border border-white/50 rounded-full text-center backdrop-blur-sm"
                >
                  {t('commercial_page.hero.cta_reinstatement')}
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-off-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-stretch">
              <div className="bg-white rounded-2xl p-7 md:p-10 border border-gray-100 shadow-sm">
                <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-bold mb-4">{commercialContent.direct_answer.eyebrow}</p>
                <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-5 leading-tight">{commercialContent.direct_answer.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  <span dangerouslySetInnerHTML={{ __html: commercialContent.direct_answer.p1 }} />
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {commercialContent.direct_answer.p2}
                </p>
              </div>

              <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-4">
                {Object.values(commercialContent.direct_answer.cards).map((item) => {
                  return (
                  <div key={item.label} className="bg-charcoal text-white rounded-2xl p-6 border border-white/10">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-gold font-bold mb-2">{item.label}</p>
                    <p className="text-2xl font-serif mb-2">{item.range}</p>
                    <p className="text-sm text-gray-300 leading-relaxed">{item.note}</p>
                  </div>
                );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-serif mb-4 text-charcoal">{commercialContent.cost_breakdown.title}</h2>
              <div className="w-24 h-1 bg-champagne mx-auto mb-4"></div>
              <p className="text-gray-500 text-sm max-w-2xl mx-auto">{commercialContent.cost_breakdown.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {Object.values(commercialContent.cost_breakdown.items).map((item) => {
                const points = Object.values(item.points);
                return (
                <div key={item.title} className="rounded-2xl border border-gray-100 bg-off-white p-6 hover:border-gold/40 transition-colors">
                  <h3 className="font-bold text-charcoal text-lg mb-2">{item.title}</h3>
                  <p className="text-2xl font-serif text-gold mb-4">{item.cost}</p>
                  <ul className="space-y-3 text-sm text-gray-600 leading-relaxed">
                    {points.map((point) => (
                      <li key={point} className="flex gap-3"><CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" /> <span>{point}</span></li>
                    ))}
                  </ul>
                </div>
              );
              })}
            </div>

            <div className="mt-8 rounded-2xl border border-gold/30 bg-gold/5 p-6 md:p-8">
              <h3 className="font-serif text-2xl text-charcoal mb-3">{commercialContent.cost_breakdown.retail_fnb.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                <span dangerouslySetInnerHTML={{ __html: commercialContent.cost_breakdown.retail_fnb.body }} />
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-off-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-serif mb-4 text-charcoal">{commercialContent.timeline_guide.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-8">{commercialContent.timeline_guide.subtitle}</p>
                <div className="space-y-4">
                  {Object.values(commercialContent.timeline_guide.steps).map((item, index) => {
                    const step = `0${index + 1}`;
                    return (
                    <div key={step} className="flex gap-5 bg-white rounded-2xl p-5 border border-gray-100">
                      <div className="w-12 h-12 rounded-full bg-gold text-dark-charcoal flex items-center justify-center font-bold flex-shrink-0">{step}</div>
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                          <h3 className="font-bold text-charcoal">{item.title}</h3>
                          <span className="text-[10px] text-gold uppercase tracking-[0.15em] font-semibold bg-gold/10 px-2 py-0.5 rounded-full">{item.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                  })}
                </div>
              </div>

              <div className="bg-charcoal rounded-2xl p-7 md:p-9 text-white self-start">
                <h3 className="font-serif text-3xl mb-5">{commercialContent.timeline_guide.approval_title}</h3>
                <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
                  {Object.values(commercialContent.timeline_guide.approval_items).map((item) => {
                    return (
                    <div key={item} className="flex gap-3"><FileCheck className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" /> <span>{item}</span></div>
                  );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-bold mb-4">{commercialContent.content_cluster.eyebrow}</p>
                <h2 className="text-3xl font-serif mb-4 text-charcoal">{commercialContent.content_cluster.title}</h2>
                <p className="text-gray-600 leading-relaxed">{commercialContent.content_cluster.body}</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link to="/insights/commercial-renovation-cost-singapore" className="group rounded-2xl border border-gray-100 bg-off-white p-6 hover:border-gold/40 transition-colors">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-gold font-bold mb-2">{commercialContent.content_cluster.cost_card.eyebrow}</p>
                  <h3 className="font-bold text-charcoal mb-2 group-hover:text-gold transition-colors">{commercialContent.content_cluster.cost_card.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{commercialContent.content_cluster.cost_card.desc}</p>
                </Link>
                <Link to="/insights/office-renovation-timeline-singapore" className="group rounded-2xl border border-gray-100 bg-off-white p-6 hover:border-gold/40 transition-colors">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-gold font-bold mb-2">{commercialContent.content_cluster.timeline_card.eyebrow}</p>
                  <h3 className="font-bold text-charcoal mb-2 group-hover:text-gold transition-colors">{commercialContent.content_cluster.timeline_card.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{commercialContent.content_cluster.timeline_card.desc}</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-serif mb-4 text-charcoal">{t('commercial_page.solutions.title')}</h2>
              <div className="w-24 h-1 bg-champagne mx-auto mb-4"></div>
              <p className="text-gray-500 text-sm">{t('commercial_page.subpages.section_subtitle')}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
                  alt: "Office interior design Singapore",
                  title: t('commercial_page.subpages.office.title'),
                  desc: t('commercial_page.subpages.office.desc'),
                  detail: t('commercial_page.subpages.office.detail'),
                  link: "/commercial/office-renovation",
                },
                {
                  img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=800&auto=format&fit=crop",
                  alt: "Retail interior fit-out Singapore",
                  title: t('commercial_page.subpages.retail.title'),
                  desc: t('commercial_page.subpages.retail.desc'),
                  detail: t('commercial_page.subpages.retail.detail'),
                  link: "/commercial/retail-mall-renovation",
                },
                {
                  img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=800&auto=format&fit=crop",
                  alt: "Shophouse interior renovation Singapore",
                  title: t('commercial_page.subpages.shophouse.title'),
                  desc: t('commercial_page.subpages.shophouse.desc'),
                  detail: t('commercial_page.subpages.shophouse.detail'),
                  link: "/commercial/shophouse-renovation",
                },
                {
                  img: "/gallery/commercial-expertise.png",
                  alt: "Commercial permits and compliance Singapore",
                  title: t('commercial_page.subpages.compliance.title'),
                  desc: t('commercial_page.subpages.compliance.desc'),
                  detail: t('commercial_page.subpages.compliance.detail'),
                  link: "/commercial/permits-compliance",
                },
              ].map((svc) => (
                <Link
                  key={svc.link}
                  to={svc.link}
                  className="group flex flex-col bg-white shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-transparent hover:border-gold/30 rounded-xl"
                >
                  <div className="relative h-44 overflow-hidden rounded-t-xl">
                    <img
                      src={svc.img}
                      alt={svc.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal/70 via-transparent to-transparent" />
                  </div>

                  <div className="flex flex-col flex-1 p-5">
                    <h3 className="font-bold text-charcoal text-sm uppercase tracking-wide mb-2 group-hover:text-gold transition-colors leading-snug">
                      {svc.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed flex-1 mb-4">
                      {svc.desc}
                    </p>
                    <div className="w-full bg-gold text-dark-charcoal rounded-full py-2.5 text-center text-xs font-bold uppercase tracking-[0.15em] group-hover:bg-gold-hover transition-colors flex items-center justify-center gap-1.5">
                      {t('commercial_page.subpages.btn')} <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif mb-4 text-charcoal">{t('commercial_page.trust.title')}</h2>
              <div className="w-24 h-1 bg-champagne mx-auto"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center p-6 border border-gray-100 rounded-lg hover:border-champagne transition-colors">
                <ShieldCheck className="w-12 h-12 text-champagne mx-auto mb-4" />
                <h4 className="font-bold text-charcoal mb-2">{t('commercial_page.trust.items.1.title')}</h4>
                <p className="text-sm text-gray-500">{t('commercial_page.trust.items.1.desc')}</p>
              </div>
              <div className="text-center p-6 border border-gray-100 rounded-lg hover:border-champagne transition-colors">
                <FileCheck className="w-12 h-12 text-champagne mx-auto mb-4" />
                <h4 className="font-bold text-charcoal mb-2">{t('commercial_page.trust.items.2.title')}</h4>
                <p className="text-sm text-gray-500">{t('commercial_page.trust.items.2.desc')}</p>
              </div>
              <div className="text-center p-6 border border-gray-100 rounded-lg hover:border-champagne transition-colors">
                <Building2 className="w-12 h-12 text-champagne mx-auto mb-4" />
                <h4 className="font-bold text-charcoal mb-2">{t('commercial_page.trust.items.3.title')}</h4>
                <p className="text-sm text-gray-500">{t('commercial_page.trust.items.3.desc')}</p>
              </div>
              <div className="text-center p-6 border border-gray-100 rounded-lg hover:border-champagne transition-colors">
                <HardHat className="w-12 h-12 text-champagne mx-auto mb-4" />
                <h4 className="font-bold text-charcoal mb-2">{t('commercial_page.trust.items.4.title')}</h4>
                <p className="text-sm text-gray-500">{t('commercial_page.trust.items.4.desc')}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-off-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif mb-3 text-charcoal">{t('commercial_page.partners.title')}</h2>
            <div className="w-24 h-1 bg-champagne mx-auto mb-4"></div>
            <p className="text-gray-500 text-sm mb-10 max-w-xl mx-auto">{t('commercial_page.partners.subtitle')}</p>
            <img
              src="/Partners_Logo.png"
              alt="ID Work Studio clients including ST Engineering, Estée Lauder, Simply Toys, Koong Woh Tong, Chiropractic First, Otter Pizza and House of KPOP"
              className="w-full max-w-5xl mx-auto"
              loading="lazy"
            />
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-serif mb-3 text-charcoal">{t('commercial_page.process.title')}</h2>
              <div className="w-24 h-1 bg-champagne mx-auto mb-4"></div>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">{t('commercial_page.process.subtitle')}</p>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute left-[28px] top-0 bottom-0 w-[1px] bg-gold/20"></div>

              <div className="space-y-0">
                {[1,2,3,4,5].map((n) => (
                  <motion.div
                    key={n}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: n * 0.08 }}
                    className="flex items-start gap-6 pb-8"
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-gold rounded-full flex flex-col items-center justify-center shadow-[0_0_20px_rgba(197,160,89,0.2)] relative z-10">
                      <span className="text-dark-charcoal font-bold text-lg font-sans leading-none">0{n}</span>
                    </div>
                    <div className="flex-1 bg-off-white rounded-xl p-5 border border-gray-100">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-bold text-charcoal text-sm uppercase tracking-wide">{t(`commercial_page.process.steps.${n}.title`)}</h3>
                        <span className="text-[10px] text-gold/70 uppercase tracking-[0.15em] font-semibold bg-gold/10 px-2 py-0.5 rounded-full">{t(`commercial_page.process.steps.${n}.detail`)}</span>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">{t(`commercial_page.process.steps.${n}.desc`)}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif mb-4 text-charcoal">{commercialContent.project_management.title}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">{commercialContent.project_management.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-gold">
                <Clock className="w-10 h-10 text-gold mb-4" />
                <h3 className="text-xl font-bold text-charcoal mb-3">{commercialContent.project_management.items["1"].title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{commercialContent.project_management.items["1"].desc}</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-gold">
                <FileCheck className="w-10 h-10 text-gold mb-4" />
                <h3 className="text-xl font-bold text-charcoal mb-3">{commercialContent.project_management.items["2"].title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{commercialContent.project_management.items["2"].desc}</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-gold">
                <CheckCircle className="w-10 h-10 text-gold mb-4" />
                <h3 className="text-xl font-bold text-charcoal mb-3">{commercialContent.project_management.items["3"].title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{commercialContent.project_management.items["3"].desc}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif mb-4 text-charcoal">{commercialContent.faq.title}</h2>
              <div className="w-24 h-1 bg-champagne mx-auto mb-4"></div>
              <p className="text-gray-500 text-sm max-w-2xl mx-auto">{commercialContent.faq.subtitle}</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {commercialFaqs.map((item) => (
                <div key={item.q} className="bg-off-white p-6 rounded-xl border border-gray-100">
                  <h3 className="font-bold text-charcoal mb-2 flex items-start gap-3 text-sm md:text-base">
                    {item.icon}
                    {item.q}
                  </h3>
                  <p className="text-gray-600 leading-relaxed pl-8 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]"
               style={{ backgroundImage: 'linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gold">
                <path d="M3 3H21V21H3V3Z" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 9H21" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 15H21" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 3V21" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 3V21" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 3L21 21" stroke="currentColor" strokeWidth="0.25" strokeDasharray="2 2"/>
                <path d="M21 3L3 21" stroke="currentColor" strokeWidth="0.25" strokeDasharray="2 2"/>
              </svg>
            </motion.div>

            <h2 className="text-3xl md:text-5xl mb-8 leading-tight flex flex-col items-center justify-center">
              <span className="font-serif italic text-dark-charcoal/60 text-2xl mb-2">{t('reinstatement_section.headline_serif')}</span>
              <span className="font-sans font-bold text-gold uppercase tracking-[0.15em]">{t('reinstatement_section.headline_bold')}</span>
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg leading-relaxed font-sans">
              {t('reinstatement_section.subtext')}
            </p>

            <Link
              to="/commercial/reinstatement"
              className="px-12 py-6 bg-gold text-dark-charcoal text-sm font-bold uppercase tracking-[0.3em] hover:bg-gold-hover transition-all duration-300 rounded-full shadow-xl hover:shadow-gold/20"
            >
              {t('reinstatement_section.button')}
            </Link>
          </div>
        </section>

        <section id="contact" className="py-20 bg-charcoal text-white text-center scroll-mt-24">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-serif mb-6">{t('commercial_page.cta.title')}</h2>
            <p className="text-gray-300 mb-8">
              {t('commercial_page.cta.subtitle')}
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gold text-dark-charcoal text-sm uppercase tracking-[0.12rem] hover:bg-gold-hover hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] transition-all duration-300 font-bold rounded-[30px]"
            >
              {t('commercial_page.cta.button')}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}