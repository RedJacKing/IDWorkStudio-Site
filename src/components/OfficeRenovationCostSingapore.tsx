import { Helmet } from 'react-helmet-async';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Building2, CalendarDays, CheckCircle2, Clock3, DollarSign, HelpCircle, MessageCircle, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type SizeCard = {
  title: string;
  cost: string;
  desc: string;
};

type FAQItem = {
  q: string;
  a: string;
};

const officeRenovationCostContent = {
  "en": {
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
      "a6": "It is usually not part of the initial renovation cost, but it should be planned from the start. Reinstatement can cost around $10 to $40+ psf depending on landlord handover requirements and how much was built during the fit-out.",
      "q7": "How long does an office renovation take in Singapore?",
      "a7": "Most office renovations in Singapore take around 6 to 10 weeks, including design, landlord approval, site works, M&E coordination and handover. Larger offices or stricter buildings may take longer.",
      "q8": "What is included in an office renovation quotation?",
      "a8": "An office renovation quotation usually includes partition works, flooring, ceiling, lighting, electrical points, data cabling, carpentry, pantry works, painting and project coordination. M&E and authority-related items should be clearly stated.",
      "q9": "Do office renovation costs include furniture?",
      "a9": "Loose furniture is usually quoted separately from renovation works. Built-in carpentry, reception counters, pantry cabinets and storage cabinets may be included if they are part of the confirmed scope.",
      "q10": "Can I renovate an office while staff are still working?",
      "a10": "It is possible for some partial office renovations, but it requires careful phasing, dust control, noise planning and after-hours work. Full office fit-outs are usually easier when the space is vacant.",
      "q11": "What hidden costs should I prepare for?",
      "a11": "Common hidden costs include extra electrical loading, aircon modification, after-hours work, landlord requirements, protection works, fire safety adjustments, reinstatement obligations and changes after site inspection.",
      "q12": "How can I reduce office renovation cost without making it look cheap?",
      "a12": "Keep the layout efficient, reuse suitable existing services where possible, focus premium finishes on key areas such as reception or meeting rooms, and avoid unnecessary custom details in low-visibility zones."
    },
    "cta": {
      "text": "Planning an office renovation? Send us your floor plan, lease condition and rough headcount. We can help you estimate a practical office fit-out budget before work starts.",
      "button": "WhatsApp for Office Renovation Quote"
    }
  },
  "zh": {
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
      "a6": "通常不包含在初期装修费用内，但应该从一开始就规划。还原费用大约$10至$40+每平方英尺，取决于业主交还要求以及装修时建造了多少固定工程。",
      "q7": "新加坡办公室装修通常需要多久？",
      "a7": "新加坡办公室装修通常需要约6到10周，包括设计、业主审批、现场施工、机电协调与交付。较大型办公室或规定较严格的大厦可能需要更长时间。",
      "q8": "办公室装修报价通常包括什么？",
      "a8": "办公室装修报价通常包括隔间、地面、天花、灯光、电源点、网络布线、木工、茶水间工程、油漆与项目协调。机电和审批相关项目应在报价中清楚列明。",
      "q9": "办公室装修费用是否包括家具？",
      "a9": "活动家具通常会与装修工程分开报价。如果接待台、茶水间柜、储物柜或其他固定木工属于确认范围，则可能包含在装修报价内。",
      "q10": "员工还在办公时可以进行办公室装修吗？",
      "a10": "部分办公室翻新可以分阶段施工，但需要仔细安排施工区域、防尘、噪音控制与下班后施工。完整办公室装修通常在空置状态下更容易进行。",
      "q11": "办公室装修有哪些隐藏费用需要预留？",
      "a11": "常见隐藏费用包括额外电力负荷、空调调整、夜间或周末施工、业主要求、保护工程、消防调整、还原责任以及现场检查后的变更。",
      "q12": "如何降低办公室装修费用但不显得廉价？",
      "a12": "保持布局高效，尽量保留合适的现有设备，把较好的材料集中在接待区或会议室等重点区域，并减少低曝光区域的不必要定制细节。"
    },
    "cta": {
      "text": "准备办公室装修？把平面图、租约条件和预计员工人数发给我们，我们可以在开工前协助你估算实际办公室装修预算。",
      "button": "WhatsApp 咨询办公室装修报价"
    }
  }
} as const;

export default function OfficeRenovationCostSingapore() {
  const { t, i18n } = useTranslation();

  const lang = i18n.language === 'zh' ? 'zh' : 'en';
  const content = officeRenovationCostContent[lang];

  const articleUrl = 'https://idworkstudio.com/insights/office-renovation-cost-singapore';

  const costItems = [
    content.intro.cost1,
    content.intro.cost2,
    content.intro.cost3,
  ];

  const sizeCards: SizeCard[] = [
    content.size.small,
    content.size.mid,
    content.size.large,
    content.size.corp,
  ];

  const breakdownItems = [
    content.breakdown.item1,
    content.breakdown.item2,
    content.breakdown.item3,
    content.breakdown.item4,
    content.breakdown.item5,
    content.breakdown.item6,
    content.breakdown.item7,
  ];

  const timelineItems = [
    content.timeline.step1,
    content.timeline.step2,
    content.timeline.step3,
  ];

  const mistakeItems = [
    content.mistakes.item1,
    content.mistakes.item2,
    content.mistakes.item3,
    content.mistakes.item4,
  ];

  const faqs: FAQItem[] = [
    { q: content.faq.q1, a: content.faq.a1 },
    { q: content.faq.q2, a: content.faq.a2 },
    { q: content.faq.q3, a: content.faq.a3 },
    { q: content.faq.q4, a: content.faq.a4 },
    { q: content.faq.q5, a: content.faq.a5 },
    { q: content.faq.q6, a: content.faq.a6 },
    { q: content.faq.q7, a: content.faq.a7 },
    { q: content.faq.q8, a: content.faq.a8 },
    { q: content.faq.q9, a: content.faq.a9 },
    { q: content.faq.q10, a: content.faq.a10 },
    { q: content.faq.q11, a: content.faq.a11 },
    { q: content.faq.q12, a: content.faq.a12 },
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: content.title,
    description: content.meta.desc,
    author: { '@type': 'Organization', name: 'ID Work Studio' },
    publisher: {
      '@type': 'Organization',
      name: 'ID Work Studio',
      logo: { '@type': 'ImageObject', url: 'https://idworkstudio.com/logo192.png' },
    },
    datePublished: '2026-05-04',
    dateModified: '2026-05-04',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://idworkstudio.com' },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://idworkstudio.com/insights' },
      { '@type': 'ListItem', position: 3, name: content.title, item: articleUrl },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  const SectionH2 = ({ children }: { children: ReactNode }) => (
    <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mt-16 mb-5 pb-4 border-b border-gray-200">
      {children}
    </h2>
  );

  const P = ({ children }: { children: ReactNode }) => (
    <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85] mb-5">{children}</p>
  );

  return (
    <>
      <Helmet>
        <title>{content.meta.title}</title>
        <meta name="description" content={content.meta.desc} />
        <link rel="canonical" href={articleUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={content.meta.title} />
        <meta property="og:description" content={content.meta.desc} />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:image" content="https://idworkstudio.com/images/insights-hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={content.meta.title} />
        <meta name="twitter:description" content={content.meta.desc} />
        <meta name="twitter:image" content="https://idworkstudio.com/images/insights-hero.jpg" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="bg-off-white min-h-screen selection:bg-gold selection:text-dark-charcoal">
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-black pt-28 md:pt-32 pb-20 text-white">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/insights-hero.jpg"
              alt={content.title}
              className="w-full h-full object-cover object-center opacity-55 scale-105"
              fetchPriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/45" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <span className="inline-block py-1 px-4 border border-champagne text-champagne rounded-full text-xs uppercase tracking-[0.25em] mb-5">
              {t('insights.article4.hero.badge')}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif mb-6 uppercase tracking-tight leading-tight">
              {content.title}
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed font-light">
              {content.meta.desc}
            </p>
            <div className="flex items-center justify-center gap-6 mt-8 text-xs uppercase tracking-[0.2em] text-gray-300 font-bold flex-wrap">
              <span className="inline-flex items-center gap-2"><CalendarDays className="w-4 h-4" />2026-05-04</span>
              <span className="inline-flex items-center gap-2"><Clock3 className="w-4 h-4" />{t('insights.article4.hero.meta2')}</span>
            </div>
          </div>
        </section>

        <section className="py-8 bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-charcoal hover:text-gold text-xs uppercase tracking-[0.22em] font-bold transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('insights.article4.back')}
            </Link>
          </div>
        </section>

        <article className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xl md:text-2xl text-charcoal font-light leading-relaxed mb-12 pb-10 border-b border-gray-100">
              {content.intro.line2}
            </p>

            <SectionH2>{content.intro.line1}</SectionH2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
              {costItems.map((item) => (
                <div key={item} className="rounded-2xl border border-gray-200 bg-off-white p-6 shadow-sm">
                  <DollarSign className="w-6 h-6 text-gold mb-4" />
                  <p className="text-lg font-serif text-charcoal font-semibold leading-snug mb-0">{item}</p>
                </div>
              ))}
            </div>

            <div className="bg-dark-charcoal text-white rounded-2xl p-7 md:p-8 my-10">
              <p className="text-xs uppercase tracking-[0.24em] text-gold font-bold mb-3">
                {content.timeline.title}
              </p>
              <h3 className="text-2xl md:text-3xl font-serif mb-5">
                {content.size.title}
              </h3>
              <div className="space-y-3">
                {timelineItems.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-gray-200 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <SectionH2>{content.size.title}</SectionH2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
              {sizeCards.map((item) => (
                <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <Building2 className="w-6 h-6 text-gold mb-4" />
                  <h3 className="text-lg font-bold text-charcoal leading-snug mb-2">{item.title}</h3>
                  <p className="text-xl font-serif text-charcoal font-semibold mb-3">{item.cost}</p>
                  <p className="text-gray-600 text-sm leading-[1.8] mb-0">{item.desc}</p>
                </div>
              ))}
            </div>

            <SectionH2>{content.breakdown.title}</SectionH2>
            <P>{content.meta.desc}</P>
            <div className="space-y-4 my-8">
              {breakdownItems.map((item) => (
                <div key={item} className="rounded-2xl border border-gray-200 bg-off-white p-5 flex items-start gap-4">
                  <ShieldCheck className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm leading-[1.8] mb-0">{item}</p>
                </div>
              ))}
            </div>

            <SectionH2>{content.mistakes.title}</SectionH2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              {mistakeItems.map((item) => (
                <div key={item} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <HelpCircle className="w-5 h-5 text-gold mb-4" />
                  <p className="text-gray-600 text-sm leading-[1.8] mb-0">{item}</p>
                </div>
              ))}
            </div>

            <SectionH2>{content.faq.title}</SectionH2>
            <div className="space-y-3 my-8">
              {faqs.map((faq, index) => (
                <details key={faq.q} className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm" open={index === 0}>
                  <summary className="cursor-pointer list-none text-base font-bold text-charcoal flex items-start justify-between gap-4">
                    <span>{faq.q}</span>
                    <span className="text-gold group-open:rotate-45 transition-transform duration-200">+</span>
                  </summary>
                  <p className="text-gray-600 text-sm leading-[1.8] mt-4 mb-0">{faq.a}</p>
                </details>
              ))}
            </div>

            <div className="mt-16 rounded-3xl border border-gray-200 bg-off-white p-7 md:p-8">
              <p className="text-xs uppercase tracking-[0.24em] text-gold font-bold mb-3">
                {t('insights.commercial.content_cluster.eyebrow')}
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-4">
                {t('insights.commercial.content_cluster.title')}
              </h2>
              <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85] mb-6">
                {t('insights.commercial.content_cluster.body')}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  to="/insights/office-renovation-timeline-singapore"
                  className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:border-gold hover:shadow-md transition-all duration-200"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-gold font-bold mb-2">
                    {t('insights.commercial.content_cluster.timeline_card.eyebrow')}
                  </p>
                  <h3 className="text-xl font-serif text-charcoal mb-2 group-hover:text-gold transition-colors">
                    {t('insights.commercial.content_cluster.timeline_card.title')}
                  </h3>
                  <p className="text-gray-600 text-sm leading-[1.8] mb-4">
                    {t('insights.commercial.content_cluster.timeline_card.desc')}
                  </p>
                  <span className="inline-flex items-center gap-2 text-charcoal group-hover:text-gold text-xs uppercase tracking-[0.2em] font-bold">
                    {t('insights.article4.next.cta')}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>

                <Link
                  to="/commercial/office-renovation"
                  className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:border-gold hover:shadow-md transition-all duration-200"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-gold font-bold mb-2">
                    {t('insights.article4.quick.office')}
                  </p>
                  <h3 className="text-xl font-serif text-charcoal mb-2 group-hover:text-gold transition-colors">
                    {t('insights.commercial.solutions.items.1.title')}
                  </h3>
                  <p className="text-gray-600 text-sm leading-[1.8] mb-4">
                    {t('insights.commercial.solutions.items.1.desc')}
                  </p>
                  <span className="inline-flex items-center gap-2 text-charcoal group-hover:text-gold text-xs uppercase tracking-[0.2em] font-bold">
                    {t('insights.article4.next.cta')}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </div>

            <div className="bg-dark-charcoal text-white rounded-3xl p-8 md:p-10 mt-16">
              <div className="flex items-start gap-4 mb-5">
                <MessageCircle className="w-8 h-8 text-gold flex-shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-gold font-bold mb-3">
                    {t('insights.article4.hero.meta2')}
                  </p>
                  <h2 className="text-2xl md:text-4xl font-serif mb-4">
                    {content.cta.button}
                  </h2>
                  <p className="text-gray-300 text-base leading-[1.8] mb-0">
                    {content.cta.text}
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <a
                  href="https://wa.me/6598333085?text=Hi%20ID%20Work%20Studio%2C%20I%20am%20planning%20an%20office%20renovation.%20Can%20you%20advise%20a%20practical%20fit-out%20budget%20from%20my%20floor%20plan%20and%20lease%20condition%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-dark-charcoal text-xs uppercase tracking-[0.22em] hover:bg-gold-hover transition-all duration-300 font-bold rounded-full"
                >
                  {content.cta.button}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/commercial/office-renovation"
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white text-xs uppercase tracking-[0.22em] hover:border-gold hover:text-gold transition-all duration-300 font-bold rounded-full"
                >
                  {t('insights.article4.quick.office')}
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
