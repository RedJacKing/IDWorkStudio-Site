import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

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
          "1": { "title": "Consult & Visualize", "desc": "We begin by understanding your vision and lifestyle, translating them into detailed 3D concepts." },
          "2": { "title": "Accredited Execution", "desc": "Our HDB & BCA registered team manages the renovation with precision, ensuring quality and compliance." },
          "3": { "title": "Quality Craftsmanship", "desc": "Every detail is handled by skilled artisans, using premium materials to deliver a flawless finish." },
          "4": { "title": "Handover & Beyond", "desc": "We ensure a perfect delivery, followed by dedicated post-renovation support for your peace of mind." }
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
      // PRESERVING YOUR ORIGINAL KEYS FOR COMMERCIAL/HOME PAGE
      "reinstatement_section": {
        "headline_serif": "End-of-Lease",
        "headline_bold": "Reinstatement",
        "subtext": "Fast-track 7-day bare shell handover for offices and retail units. We handle SCDF, MCST, and landlord compliance to secure your deposit.",
        "button": "View Reinstatement Services"
      },
      "reinstatement_page": {
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
          "timeline_label": "Typical Timeline",
          "compliance_label": "Compliance Rate",
          "licensed_label": "HDB Licensed"
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
      },
      "footer": { "rights": "All Rights Reserved." }
    }
  },
  zh: {
    translation: {
      "nav": { "home": "首页", "residential": "住宅装修", "commercial": "商业装修", "gallery": "案例展示", "contact": "联系我们" },
      "accreditation": { "hdb": "HDB 注册", "bca": "BCA 注册", "firm": "装修商" },
      "hero": {
        "title_main": "为现代远见者",
        "title_sub": "精心打造的室内空间",
        "subtitle": "新加坡优质室内设计与装修服务。凭借十余年备受信任的卓越表现，我们将住宅、办公和商业空间转化为杰作。",
        "cta": "查看我们的作品",
        "whatsapp": "联系我们"
      },
      "commercial_page": {
        "hero": {
          "title_serif": "打造卓越业务的",
          "title_bold": "战略空间",
          "subtitle": "BCA & HDB 注册商业专家。我们打造高效的办公室、零售精品店和餐饮环境，助力业务增长。"
        },
        "stats": { "years": "多年专业经验", "projects": "商业项目", "retention": "客户留存率" },
        "sectors": { "title": "行业专长", "office": "企业办公室", "retail": "零售精品店", "fnb": "餐饮环境", "medical": "医疗与康养" },
        "cta": { "title": "准备好改造您的业务空间了吗？", "subtitle": "联系我们的商业团队，进行专业咨询和现场评估。" }
      },
      // PRESERVING YOUR ORIGINAL CHINESE KEYS
      "reinstatement_section": {
        "headline_serif": "租约期满",
        "headline_bold": "原状恢复",
        "subtext": "为办公室和零售单位提供快速 7 天“清水房”移交。我们处理 SCDF、MCST 和房东合规事务，确保您的押金退回。",
        "button": "查看原状恢复服务"
      },
      "reinstatement_page": {
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
          "timeline_label": "典型工期",
          "compliance_label": "合规率",
          "licensed_label": "HDB 注册执照"
        },
        "faq": {
          "title": "专家见解与常见问题",
          "q1": "新加坡办公室原状恢复的典型成本是多少？",
          "a1": "在2026年，市场价格通常在每平方英尺 S$5 到 S$30 之间。标准办公室（拆除隔断和地板）通常在 S$8–S$15 之间。具体取决于单位大小和房东要求。",
          "q2": "你们处理 SCDF 消防安全和洒水系统还原吗？",
          "a2": "是的。作为 HDB 执照 (HB-02-5250G) 承包商，我们确保洒水器、烟雾探测器和应急灯根据原始布局进行还原，以通过房东和管理处的最终检查。",
          "q3": "什么是“清水房” (Bare Shell) 移交标准？",
          "a3": "清水房移交通常要求拆除租户安装的所有设施，包括隔断、定制家具和地板。墙壁必须修补并涂成中性白色，确保所有机电服务符合原始交付状态。"
        },
        "cta": {
          "title": "确保您的押金安全退回",
          "subtitle": "提早规划可避免不必要的房东纠纷。请将您的租约条款发送给我们，进行当天的专业评估。",
          "button": "WhatsApp 咨询报价"
        }
      },
      "footer": { "rights": "版权所有。" }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;