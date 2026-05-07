import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CalendarDays, Clock3, ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const articleRenovationMistakesContent = {
  en: {

      meta: {
        title: "Biggest Renovation Mistakes Singapore Homeowners Make | ID Work Studio",
        description: "Avoid costly renovation mistakes in Singapore. Learn common pitfalls and how to plan better with this experience-led guide."
      },
      hero_badge: "Strategy Guide",
      title: "Biggest Renovation Mistakes Singapore Homeowners Make",
      subtitle: "A practical guide to avoiding costly renovation mistakes, based on real project experience in Singapore.",
      read_time: "7 min read",
      sections: {
        intro_title: "Why renovation mistakes are so common",
        intro_p1: "Renovation is a one-time major decision for most homeowners. With so many design choices, materials and suppliers available today, mistakes often happen due to unclear decisions early in the process.",
        mistakes_title: "Common renovation mistakes",
        mistakes: {
          "1": { title: "1. Underestimating cost", body: "Many homeowners focus only on the base quotation and overlook hidden costs. A 10–15% buffer is recommended." },
          "2": { title: "2. Choosing based on price", body: "The cheapest quote often leads to unclear scope and additional costs later." },
          "3": { title: "3. Overdesigning", body: "Too many features without considering daily use leads to impractical spaces." },
          "4": { title: "4. Poor storage planning", body: "Insufficient storage is one of the most common long-term regrets." },
          "5": { title: "5. Following trends too closely", body: "Trends change faster than renovation cycles and may not age well." },
          "6": { title: "6. Late decisions and design changes", body: "Indecision, adding features late, or redesigning midway causes delays and rework." },
          "7": { title: "7. Underestimating resale complexity", body: "Resale flats often require more hidden work such as hacking and rewiring." },
          "8": { title: "8. Buying materials without understanding dependencies", body: "Owner-supplied items such as overseas purchases can delay work if not delivered on time or incorrectly specified." }
        },
        avoid_title: "How to avoid these mistakes",
        avoid_items: {
          "1": "Start with a clear design direction",
          "2": "Align expectations early",
          "3": "Finalise key materials before work",
          "4": "Understand sequencing",
          "5": "Focus on function over trends"
        },
        final_title: "Final perspective",
        final_p1: "Most homeowners do not regret spending more. They regret unclear decisions and rushed choices. In practice, clarity early in the process prevents more problems than budget alone ever can."
      },
      next_title: "Renovation Cost Guide",
    faq: {
    title: "Renovation mistakes FAQ",
    items: {
      "1": { q: "What is the most common renovation mistake in Singapore?", a: "The most common renovation mistake is confirming a quotation before the scope is clear. Homeowners may compare only the total price without checking carpentry length, electrical quantity, hacking scope, material grade, waterproofing and exclusions." },
      "2": { q: "Why do renovation budgets exceed the original quotation?", a: "Budgets usually increase because of unclear scope, late design changes, hidden resale conditions, additional electrical points, upgraded materials, extra carpentry or items that were not included in the original quotation." },
      "3": { q: "Is choosing the cheapest renovation quote risky?", a: "It can be risky if the quotation leaves out important work. A cheaper quote may exclude hacking, haulage, waterproofing, electrical points, soft-closing hardware, internal cabinet finishing or proper site protection." },
      "4": { q: "What should I check before signing a renovation contract?", a: "Check the itemised scope, payment schedule, material specifications, carpentry measurements, timeline, warranty, variation rules, HDB approval responsibilities and whether important exclusions are clearly stated." },
      "5": { q: "Why is storage planning so important for HDB homes?", a: "Most Singapore homes have limited floor area. Poor storage planning causes daily clutter even if the renovation looks good. Storage should be planned around luggage, cleaning tools, appliances, kids items, documents and long-term lifestyle needs." },
      "6": { q: "Can following renovation trends become a mistake?", a: "Yes. Trend-heavy designs can look dated quickly or be hard to maintain. A better approach is to keep fixed renovation elements practical and timeless, then use loose furniture, lighting and styling for trend expression." },
      "7": { q: "What mistakes happen when homeowners buy their own materials?", a: "Owner-supplied items can create problems when dimensions are wrong, delivery is late, fittings are missing or warranty responsibility is unclear. Sinks, taps, lights, fans and bathroom accessories should be checked before installation dates." },
      "8": { q: "How do late design changes affect renovation?", a: "Late design changes can affect drawings, carpentry fabrication, electrical points, lighting layout, tile orders and site sequence. A small change can trigger rework if the related trade has already completed its part." },
      "9": { q: "What is a smart renovation buffer for Singapore homeowners?", a: "A practical buffer is 10% to 15% for BTO projects and 15% to 25% for resale projects. Resale homes need more buffer because concealed site conditions are only fully known after hacking starts." },
      "10": { q: "How can I avoid renovation delays?", a: "Confirm layout early, decide key materials before work starts, avoid too many separate vendors, order long-lead items early and keep communication centralised. Delays often come from coordination gaps rather than construction speed alone." },
      "11": { q: "Should I prioritise design or function first?", a: "Function should come first. Good design should support daily use, cleaning, storage, lighting and maintenance. Once function is clear, the visual design can be built around it without wasting budget." },
      "12": { q: "How do I know if a renovation quotation is complete?", a: "A complete quotation should clearly list quantities, materials, assumptions, exclusions and work stages. If many items are described only as lump sum or optional, ask for clarification before comparing it with another quote." }
    }
  },
    internal_links: {
    eyebrow: "Related renovation planning guides",
    title: "Plan your renovation with clearer cost, timeline and scope control",
    cost_prefix: "Before setting your budget, read our",
    cost_link: "Singapore renovation cost guide",
    cost_suffix: "so you can compare BTO, resale and condo renovation budgets more realistically.",
    timeline_prefix: "To avoid delays from late decisions, owner-supplied items or unclear quotation scope, read our",
    timeline_link: "HDB renovation timeline guide",
    timeline_suffix: "before renovation work starts."
  },
    cta: {
    eyebrow: "Avoid Costly Renovation Mistakes",
    title: "Need a clearer renovation scope before signing?",
    button: "WhatsApp for Scope Review"
  }
  },
  zh: {

      meta: {
        title: "新加坡业主最常见的翻新错误 | ID Work Studio",
        description: "通过这篇基于实务经验的指南，了解新加坡住宅翻新中常见的错误，以及如何更稳妥地规划。"
      },
      hero_badge: "策略指南",
      title: "新加坡业主最常见的翻新错误",
      subtitle: "从实际项目经验出发，帮助您避开代价高昂的翻新错误。",
      read_time: "约 7 分钟",
      sections: {
        intro_title: "为什么翻新错误这么常见？",
        intro_p1: "对大多数业主而言，翻新是一项人生中不常发生的重要决定。如今设计、材料与供应商选择太多，许多错误并不是因为判断太差，而是因为前期决策不够清晰。",
        mistakes_title: "常见翻新错误",
        mistakes: {
          "1": { title: "1. 低估整体预算", body: "很多业主只看基础报价，却忽略了隐藏费用。一般建议额外预留 10–15% 的应急预算。" },
          "2": { title: "2. 只按价格做决定", body: "最低报价往往伴随着范围不清，后期更容易出现追加费用。" },
          "3": { title: "3. 过度设计", body: "如果只顾外观、不顾日常使用，空间很容易变得不实用。" },
          "4": { title: "4. 收纳规划不足", body: "收纳不足是许多业主入住后一再后悔的问题之一。" },
          "5": { title: "5. 过度追随潮流", body: "流行变化速度往往快过一次翻新的使用周期，太追潮流未必耐看耐用。" },
          "6": { title: "6. 太迟做决定或中途改设计", body: "迟迟无法定案、临时加功能或中途修改设计，都会造成延误与返工。" },
          "7": { title: "7. 低估转售单位复杂度", body: "转售单位往往隐藏着更多拆除、重拉电线与基础修复工程。" },
          "8": { title: "8. 购买材料时忽略工序依赖", body: "若业主自购材料，尤其是海外采购项目，一旦延误或规格错误，就会直接影响施工安排。" }
        },
        avoid_title: "怎样减少这些错误？",
        avoid_items: {
          "1": "先确立清晰的设计方向",
          "2": "尽早统一彼此期待",
          "3": "在开工前确定关键材料",
          "4": "理解工序顺序",
          "5": "把功能放在潮流之前"
        },
        final_title: "最后的观点",
        final_p1: "大多数业主并不会后悔花得更多，他们更常后悔的是：决定做得太晚、沟通不够清晰，或在一开始没有把真正重要的事情想清楚。很多问题，并不是预算不够，而是前期清晰度不够。"
      },
      next_title: "新加坡翻新费用指南",
    faq: {
    title: "翻新错误 FAQ",
    items: {
      "1": { q: "新加坡最常见的翻新错误是什么？", a: "最常见的错误是在工程范围还不清楚时就确认报价。业主往往只比较总价，却没有检查木作长度、电位数量、拆除范围、材料等级、防水和排除项目。" },
      "2": { q: "为什么翻新预算会超过原本报价？", a: "预算增加通常是因为范围不清、后期改设计、转售单位隐藏问题、增加电位、升级材料、增加木作，或原报价没有包含某些项目。" },
      "3": { q: "选择最便宜的装修报价有风险吗？", a: "如果报价漏掉重要工程，就会有风险。较低报价可能不包括拆除、搬运、防水、电位、缓冲五金、柜内饰面或适当的现场保护。" },
      "4": { q: "签装修合约前应检查什么？", a: "应检查详细项目范围、付款进度、材料规格、木作尺寸、工期、保修、追加工程规则、HDB 审批责任，以及重要排除项目是否清楚列明。" },
      "5": { q: "为什么 HDB 收纳规划很重要？", a: "多数新加坡住宅面积有限。收纳规划不好，即使装修看起来漂亮，日常也容易杂乱。应按行李、清洁工具、电器、儿童用品、文件和长期生活需求规划收纳。" },
      "6": { q: "过度追流行会成为翻新错误吗？", a: "会。过度依赖流行元素容易很快过时，也可能难维护。较好的做法是让固定装修保持实用耐看，再用家具、灯具和软装表达风格。" },
      "7": { q: "业主自购材料常出现什么问题？", a: "自购材料可能因尺寸错误、迟到、配件不齐或保修责任不清而造成问题。水槽、水龙头、灯具、风扇和卫浴配件应在安装日前确认。" },
      "8": { q: "后期改设计会怎样影响翻新？", a: "后期改动会影响图纸、木作生产、电位、灯位、瓷砖订单和现场工序。即使是小改动，如果相关工种已完成，也可能造成返工。" },
      "9": { q: "新加坡业主应预留多少应急预算？", a: "BTO 项目可预留 10% 至 15%，转售项目可预留 15% 至 25%。转售单位隐藏问题较多，很多情况要拆除后才看得清。" },
      "10": { q: "如何避免翻新延误？", a: "尽早确认布局，开工前决定关键材料，避免太多独立供应商，提早订购长交期项目，并集中沟通。延误往往来自协调问题，而不只是施工速度。" },
      "11": { q: "应先重视设计还是功能？", a: "应先重视功能。好的设计应支持日常使用、清洁、收纳、照明和维护。功能清楚后，再围绕它打造视觉效果，预算才不容易浪费。" },
      "12": { q: "怎样判断装修报价是否完整？", a: "完整报价应清楚列出数量、材料、假设、排除项目和工程阶段。如果很多项目只写成笼统总价或选择项，应先问清楚再比较。" }
    }
  },
    internal_links: {
    eyebrow: "相关翻新规划指南",
    title: "用更清晰的预算、时间与范围控制规划翻新",
    cost_prefix: "设定预算前，可先阅读我们的",
    cost_link: "新加坡翻新费用指南",
    cost_suffix: "以更实际地比较 BTO、转售组屋和公寓翻新预算。",
    timeline_prefix: "若要避免因决定太迟、自购物品或报价范围不清而造成延误，可先阅读我们的",
    timeline_link: "HDB 翻新时间指南",
    timeline_suffix: "再开始安排翻新工程。"
  },
    cta: {
    eyebrow: "避开昂贵翻新错误",
    title: "签约前需要更清楚的工程范围吗？",
    button: "WhatsApp 咨询范围检查"
  }
  }
} as const;

export default function ArticleRenovationMistakes() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'zh' ? 'zh' : 'en';
  const content = articleRenovationMistakesContent[lang];
  const mistakes = content.sections.mistakes;
  const avoidItems = content.sections.avoid_items;
  const renovationMistakesFaqs = Object.values(content.faq.items);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": content.title,
    "description": content.meta.description,
    "author": { "@type": "Organization", "name": "ID Work Studio" },
    "publisher": {
      "@type": "Organization",
      "name": "ID Work Studio",
      "logo": { "@type": "ImageObject", "url": "https://idworkstudio.com/logo192.png" }
    },
    "datePublished": "2026-04-23",
    "dateModified": "2026-04-23",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://idworkstudio.com/insights/renovation-mistakes-singapore"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://idworkstudio.com" },
      { "@type": "ListItem", "position": 2, "name": "Insights", "item": "https://idworkstudio.com/insights" },
      { "@type": "ListItem", "position": 3, "name": content.title, "item": "https://idworkstudio.com/insights/renovation-mistakes-singapore" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://idworkstudio.com/insights/renovation-mistakes-singapore#faq",
    "mainEntity": renovationMistakesFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>{content.meta.title}</title>
        <meta name="description" content={content.meta.description} />
        <link rel="canonical" href="https://idworkstudio.com/insights/renovation-mistakes-singapore" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={content.meta.title} />
        <meta property="og:description" content={content.meta.description} />
        <meta property="og:url" content="https://idworkstudio.com/insights/renovation-mistakes-singapore" />
        <meta property="og:image" content="https://idworkstudio.com/images/insights-hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={content.meta.title} />
        <meta name="twitter:description" content={content.meta.description} />
        <meta name="twitter:image" content="https://idworkstudio.com/images/insights-hero.jpg" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-off-white selection:bg-gold selection:text-dark-charcoal">
        <section className="relative flex min-h-[72vh] items-center justify-center overflow-hidden bg-black pt-28 pb-20 text-white md:pt-32">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/insights-hero.jpg"
              alt="Renovation planning mistakes in Singapore homes"
              className="h-full w-full scale-105 object-cover object-center opacity-50"
              fetchPriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
            <span className="mb-5 inline-block rounded-full border border-champagne px-4 py-1 text-xs uppercase tracking-[0.25em] text-champagne">
              {content.hero_badge}
            </span>

            <h1 className="mb-6 font-serif text-4xl uppercase leading-tight tracking-tight sm:text-5xl md:text-7xl">
              {content.title}
            </h1>

            <p className="mx-auto max-w-3xl text-lg font-light leading-relaxed text-gray-200 md:text-xl">
              {content.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-bold uppercase tracking-[0.2em] text-gray-300">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                2026-04-23
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4" />
                {content.read_time}
              </span>
            </div>
          </div>
        </section>

        <section className="border-b border-gray-100 bg-white py-8">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-charcoal transition-colors duration-200 hover:text-gold"
            >
              <ArrowLeft className="h-4 w-4" />
              {t('article_common.back_to_insights')}
            </Link>
          </div>
        </section>

        <article className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <section className="mb-16">
              <h2 className="mb-5 border-b border-gray-200 pb-4 font-serif text-2xl font-semibold text-charcoal md:text-3xl">
                {content.sections.intro_title}
              </h2>
              <div className="rounded-2xl border-l-4 border-gold bg-[#fbf6ec] p-6">
                <p className="mb-0 text-base leading-[1.85] text-gray-700 md:text-[1.05rem]">
                  {content.sections.intro_p1}
                </p>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="mb-8 border-b border-gray-200 pb-4 font-serif text-2xl font-semibold text-charcoal md:text-3xl">
                {content.sections.mistakes_title}
              </h2>

              <div className="space-y-5">
                {Object.entries(mistakes).map(([key, item], index) => (
                  <div
                    key={key}
                    className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
                  >
                    <div className="p-6 md:p-7">
                      <div className="mb-5 flex items-start gap-4">
                        <span
                          className="mt-0.5 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#fbf6ec] text-base font-bold text-gold"
                          aria-hidden="true"
                        >
                          {index + 1}
                        </span>
                        <div>
                          <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-gold">
                            <AlertTriangle className="h-4 w-4" />
                            {content.hero_badge}
                          </p>
                          <h3 className="font-serif text-xl leading-snug text-charcoal md:text-2xl">
                            {item.title.replace(/^\s*\d+\.\s*/, '')}
                          </h3>
                        </div>
                      </div>

                      {key === '3' && (
                        <div className="mb-6 overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
                          <img
                            src="/images/article3-overdesign.jpg"
                            alt="Overdesigned living room with excessive features reducing usability"
                            className="h-[280px] w-full object-cover md:h-[420px]"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      )}

                      {key === '4' && (
                        <div className="mb-6 overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
                          <img
                            src="/images/article3-storage.jpg"
                            alt="Example of poor storage planning leading to clutter in a compact home"
                            className="h-[280px] w-full object-cover md:h-[420px]"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      )}

                      <p className="mb-0 text-base leading-[1.85] text-gray-600 md:text-[1.05rem]">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="mb-8 border-b border-gray-200 pb-4 font-serif text-2xl font-semibold text-charcoal md:text-3xl">
                {content.sections.avoid_title}
              </h2>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {Object.values(avoidItems).map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-[#fffdf8] p-5 shadow-sm transition-all duration-200 hover:border-gold hover:shadow-md"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <p className="mb-0 text-sm leading-7 text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="mb-5 border-b border-gray-200 pb-4 font-serif text-2xl font-semibold text-charcoal md:text-3xl">
                {content.sections.final_title}
              </h2>
              <p className="text-base leading-[1.85] text-gray-600 md:text-[1.05rem]">
                {content.sections.final_p1}
              </p>
            </section>

            <section className="mb-16 rounded-3xl border border-gray-200 bg-[#fffdf8] p-7 shadow-sm md:p-9">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-gold">
                {content.internal_links.eyebrow}
              </p>
              <h2 className="mb-5 font-serif text-2xl font-semibold text-charcoal md:text-3xl">
                {content.internal_links.title}
              </h2>
              <div className="space-y-4 text-base leading-[1.85] text-gray-600 md:text-[1.05rem]">
                <p>
                  {content.internal_links.cost_prefix}{' '}
                  <Link
                    to="/insights/renovation-cost-singapore-2026"
                    className="text-charcoal underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold"
                  >
                    {content.internal_links.cost_link}
                  </Link>
                  {content.internal_links.cost_suffix}
                </p>
                <p>
                  {content.internal_links.timeline_prefix}{' '}
                  <Link
                    to="/insights/hdb-renovation-timeline-singapore"
                    className="text-charcoal underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold"
                  >
                    {content.internal_links.timeline_link}
                  </Link>
                  {content.internal_links.timeline_suffix}
                </p>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="mb-5 border-b border-gray-200 pb-4 font-serif text-2xl font-semibold text-charcoal md:text-3xl">
                {content.faq.title}
              </h2>
              <div className="space-y-3 my-8">
                {renovationMistakesFaqs.map((faq, index) => (
                  <details
                    key={faq.q}
                    className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                    open={index === 0}
                  >
                    <summary className="cursor-pointer list-none text-base font-bold text-charcoal flex items-start justify-between gap-4">
                      <span>{faq.q}</span>
                      <span className="text-gold group-open:rotate-45 transition-transform duration-200">+</span>
                    </summary>
                    <p className="text-gray-600 text-sm leading-[1.8] mt-4 mb-0">{faq.a}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="rounded-3xl bg-[#151515] p-7 text-white md:p-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-gold">
                    {content.cta.eyebrow}
                  </p>
                  <h3 className="font-serif text-2xl text-white">
                    {content.cta.title}
                  </h3>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://wa.me/6598333085"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-gold-hover"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {content.cta.button}
                  </a>

                  <Link
                    to="/insights/renovation-cost-singapore-2026"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-charcoal"
                  >
                    {t('article_common.read_article')}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </article>
      </div>
    </>
  );
}
