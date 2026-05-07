import { Helmet } from 'react-helmet-async';
import { CalendarDays, Clock3, ArrowLeft, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type StringMap = Record<string, string>;

const articleHdbTimelineContent = {
  en: {
  meta: {
    title: "HDB Renovation Timeline in Singapore (2026 Guide) | ID Work Studio",
    description: "Understand how long HDB renovation takes in Singapore, including real timelines, delays, and when you can actually move in."
  },
  hero_badge: "Planning Guide",
  title: "HDB Renovation Timeline in Singapore (2026 Guide)",
  subtitle: "A practical breakdown of how long renovation really takes, where delays happen, and when you can realistically move in.",
  read_time: "7 min read",
  sections: {
    duration_title: "How long does HDB renovation take?",
    duration_intro: "In Singapore, most renovation timelines fall within these ranges:",
    duration_items: {
      "1": "BTO: 8–12 weeks",
      "2": "Resale: 10–16 weeks"
    },
    duration_p2: "BTO flats are faster due to fewer structural changes, while resale units require additional work such as hacking, rewiring and plumbing upgrades.",
    breakdown_title: "Typical renovation timeline breakdown",
    phases: {
      "1": { title: "1. Planning & Design (2–4 weeks)", desc: "Layout planning, design concept, quotation and material selection." },
      "2": { title: "2. Permit Approval (1–3 weeks)", desc: "Submission of HDB permits, especially for hacking and wet works." },
      "3": { title: "3. Hacking & Demolition (3–7 days)", desc: "Mainly for resale units." },
      "4": { title: "4. Wet Works (2–3 weeks)", desc: "Tiling, waterproofing and floor preparation." },
      "5": { title: "5. Carpentry Production (3–5 weeks)", desc: "Fabrication is done off-site and often overlaps with other phases of the renovation timeline." },
      "6": { title: "6. Installation (2–3 weeks)", desc: "Carpentry, electrical and painting." },
      "7": { title: "7. Final Touch & Handover (1 week)", desc: "Defect rectification and cleaning." }
    },
    movein_title: "When can you actually move in?",
    movein_p1: "Most homeowners cannot move in immediately after completion. You should allow an additional 1–2 weeks for cleaning, airing and final adjustments.",
    delays_title: "Why renovations get delayed",
    delays: {
      "1": {
        title: "1. Project sequencing issues",
        p1: "Renovation follows a Gantt chart sequence. If one stage is delayed, everything after it shifts. For example, if aircon piping is not completed, tiling and carpentry may be delayed as well.",
        p2: "One common example is the kitchen sink. If the project uses an undermount sink, the sink needs to be installed before the countertop can be placed. If the sink is delayed, the kitchen installation is delayed too."
      },
      "2": {
        title: "2. External contractors",
        p1: "Engaging separate vendors often leads to coordination issues and schedule misalignment. If one external contractor cannot keep to the project sequence, the rest of the work can be pushed back."
      },
      "3": {
        title: "3. Owner-supplied materials",
        p1: "Items sourced from overseas can be delayed or incorrect, which stops installation work. This has become increasingly common when homeowners order kitchen systems, taps, accessories or fixtures from overseas platforms."
      },
      "4": {
        title: "4. Late decisions & design changes",
        p1: "Indecision, adding features late or changing cabinet designs midway can cause major delays. When clients continue exploring materials for too long, or cannot agree on finishes, the timeline is affected because drawings, procurement and coordination cannot be finalised.",
        p2: "Small changes can also create large ripple effects. If a cabinet layout is revised after lighting or electrical points have already been planned, those drawings and sequences may need to be redone."
      }
    },
    avoid_title: "How to avoid delays",
    avoid_items: {
      "1": "Finalise design early",
      "2": "Understand project sequencing",
      "3": "Confirm critical materials early",
      "4": "Avoid too many contractors",
      "5": "Align decisions early"
    },
    final_title: "Final perspective",
    final_p1: "Renovation delays are rarely caused by construction itself. More often, they come from decisions, coordination and planning. When the sequence is understood clearly and key materials are confirmed early, the move-in timeline becomes much more predictable."
  },
  next_title: "Biggest Renovation Mistakes Singapore Homeowners Make",
  faq: {
  title: "HDB renovation timeline FAQ",
  items: {
    "1": { q: "How long does HDB renovation usually take in Singapore?", a: "Most HDB renovations in Singapore take about 8 to 12 weeks for a BTO flat and 10 to 16 weeks for a resale flat. Resale projects usually take longer because hacking, rewiring, plumbing checks, waterproofing and making-good works are more common." },
    "2": { q: "Why does resale HDB renovation take longer than BTO renovation?", a: "Resale HDB renovation takes longer because the existing condition must be removed and checked first. Old tiles, cabinets, wiring, pipes, uneven floors and hidden defects can affect the sequence before new renovation work starts." },
    "3": { q: "When should I start planning before collecting my HDB keys?", a: "Start planning 4 to 8 weeks before key collection if your floor plan is ready. This gives time to confirm layout, budget, material direction and quotation so the project can move faster after site measurements and HDB approval." },
    "4": { q: "Which HDB renovation works commonly need approval?", a: "Hacking, wet-area works, certain wall changes, window-related works and some plumbing works may need HDB approval. A HDB-registered renovation contractor should check the scope before work starts." },
    "5": { q: "Can carpentry start before tiles and electrical work are completed?", a: "Carpentry measurement usually depends on completed site conditions, especially after tiling, ceiling and electrical points are confirmed. Fabrication can overlap with site work, but wrong early measurements can cause fitting issues." },
    "6": { q: "What causes the most common HDB renovation delays?", a: "Common delays include late material selection, delayed HDB approval, owner-supplied items arriving late, changes to carpentry layout, aircon piping coordination, countertop measurement delays and external vendor scheduling issues." },
    "7": { q: "Can I move in immediately after renovation handover?", a: "It is better to allow 1 to 2 extra weeks after handover for cleaning, airing, minor touch-ups, furniture delivery and appliance setup. Moving in too tightly after completion can make defect checking and adjustment harder." },
    "8": { q: "How do Taobao or overseas purchases affect renovation timeline?", a: "Owner-supplied overseas purchases can delay renovation if items arrive late, arrive damaged, have wrong dimensions or miss fittings. Items such as sinks, taps, lights and accessories should be ordered early and checked before installation dates." },
    "9": { q: "Should I confirm kitchen appliances before carpentry starts?", a: "Yes. Hob, hood, oven, fridge, sink and dishwasher dimensions should be confirmed before carpentry fabrication. Late appliance changes can affect cabinet sizes, ventilation space, electrical points and countertop cut-outs." },
    "10": { q: "How can homeowners keep the renovation timeline under control?", a: "Confirm the layout early, avoid late design changes, decide materials before site work, appoint one main coordinator, check long-lead items and keep the renovation sequence clear. Most delays come from decision and coordination gaps." },
    "11": { q: "How long should I buffer for defects and touch-ups?", a: "A practical buffer is 1 week for smaller BTO projects and 1 to 2 weeks for larger or resale projects. This allows time for paint touch-ups, carpentry alignment, silicone works, cleaning and small rectifications." },
    "12": { q: "What should I prepare before asking for a HDB renovation timeline estimate?", a: "Prepare your floor plan, key collection date, target move-in date, renovation scope, appliance list, preferred materials and any owner-supplied items. These details help the contractor give a more realistic timeline." }
  }
},
  internal_links: {
  eyebrow: "Related HDB renovation guides",
  title: "Plan your HDB renovation with clearer budget and fewer delays",
  cost_intro: "Before confirming your scope, compare your expected timeline with our",
  cost_link: "Singapore renovation cost guide",
  cost_outro: "so you can plan budget, carpentry, wet works and material decisions together.",
  mistakes_intro: "To avoid delays from late decisions, owner-supplied items or unclear quotation scope, read our",
  mistakes_link: "renovation mistakes Singapore homeowners should avoid",
  mistakes_outro: "before renovation work starts."
},
  cta: {
  eyebrow: "HDB Renovation Planning",
  title: "Need a realistic move-in timeline?",
  body: "Send us your floor plan, key collection date and target move-in period. We can help you review the renovation sequence, likely approval items and practical timeline before work starts.",
  button: "WhatsApp for HDB Timeline Advice"
},
},
  zh: {
  meta: {
    title: "新加坡 HDB 翻新时间表（2026 指南）| ID Work Studio",
    description: "了解新加坡 HDB 翻新一般需要多久、常见延误原因，以及您大概何时可以真正入住。"
  },
  hero_badge: "规划指南",
  title: "新加坡 HDB 翻新时间表（2026 指南）",
  subtitle: "以更实际的角度拆解翻新一般需要多久、延误通常发生在哪里，以及您何时可以较安心地安排入住。",
  read_time: "约 7 分钟",
  sections: {
    duration_title: "HDB 翻新一般需要多久？",
    duration_intro: "在新加坡，大多数住宅翻新时间大致落在以下区间：",
    duration_items: {
      "1": "BTO：8–12 周",
      "2": "转售组屋：10–16 周"
    },
    duration_p2: "BTO 通常较快，因为结构改动较少；转售单位则往往需要额外的拆除、重拉电线与水喉升级工程。",
    breakdown_title: "常见翻新时间拆解",
    phases: {
      "1": { title: "1. 规划与设计（2–4 周）", desc: "包括空间布局、设计方向、报价讨论及材料选择。" },
      "2": { title: "2. 许可证审批（1–3 周）", desc: "提交 HDB 所需许可证，尤其是拆改和湿作工程相关审批。" },
      "3": { title: "3. 拆除与清拆（3–7 天）", desc: "主要发生在转售单位。" },
      "4": { title: "4. 湿作工程（2–3 周）", desc: "包括铺砖、防水及地面处理。" },
      "5": { title: "5. 木作生产（3–5 周）", desc: "木作通常在工厂场外制作，并与其他工程阶段交叉进行。" },
      "6": { title: "6. 安装阶段（2–3 周）", desc: "包括木作安装、电气及油漆等工程。" },
      "7": { title: "7. 收尾与交付（1 周）", desc: "进行修补、清洁及最终交付准备。" }
    },
    movein_title: "什么时候才算真正可以入住？",
    movein_p1: "大多数业主并不能在工程完工当天立刻入住。一般还需要额外预留 1–2 周用于清洁、散味和最后的小修整。",
    delays_title: "翻新为什么会延误？",
    delays: {
      "1": {
        title: "1. 工序衔接问题",
        p1: "翻新通常按甘特图工序推进。如果前一项工作延误，后面的工程就会整体往后推。例如冷气铜管若未及时完成，铺砖和木作安装都可能受到影响。",
        p2: "厨房水槽就是常见例子之一。如果项目使用下嵌式水槽，水槽必须先到位并安装好，台面才能继续施工。若水槽延误，整个厨房安装也会被拖慢。"
      },
      "2": {
        title: "2. 外部承包商介入",
        p1: "当业主分别找不同供应商处理某些项目时，往往更容易出现协调失衡与时间错位。只要其中一方无法按工序配合，后续工作就会被拖延。"
      },
      "3": {
        title: "3. 业主自购材料",
        p1: "从海外采购的材料可能出现延误、规格不合或配件不齐，直接导致安装无法进行。现在越来越多业主会自行购买厨房系统、水龙头、卫浴配件或其他五金，这类问题也因此更常见。"
      },
      "4": {
        title: "4. 太迟做决定或中途改设计",
        p1: "材料一直定不下来、临时加功能，或木作设计做到一半又改变，都会造成明显延误。若夫妻双方迟迟无法对材料、颜色或风格达成一致，图纸、采购与工序安排都难以定案。",
        p2: "很多看似小的改动，其实会带来连锁反应。例如柜体布局一旦改变，原本规划好的灯位与电位往往也要重画重配，整个工序就得重新协调。"
      }
    },
    avoid_title: "怎样减少延误？",
    avoid_items: {
      "1": "尽早确认设计方向",
      "2": "理解项目工序顺序",
      "3": "尽早确认关键材料",
      "4": "避免过多外部承包商",
      "5": "尽早统一决策"
    },
    final_title: "最后的观点",
    final_p1: "翻新延误通常并不是施工本身造成的，更多时候是因为决策、协调与前期规划不足。当工序逻辑被理解清楚，关键材料也能提早确认时，入住时间通常会更可预测。"
  },
  next_title: "新加坡业主最常见的翻新错误",
  faq: {
  title: "HDB 翻新时间 FAQ",
  items: {
    "1": { q: "新加坡 HDB 翻新通常需要多久？", a: "大多数新加坡 HDB 翻新，BTO 通常约 8 至 12 周，转售组屋通常约 10 至 16 周。转售单位一般较久，因为更常涉及拆除、重拉电线、水喉检查、防水和修补工程。" },
    "2": { q: "为什么转售 HDB 翻新比 BTO 更久？", a: "转售 HDB 需要先拆除和检查原有状况。旧瓷砖、旧柜、旧电线、水管、地面不平和隐藏问题，都会影响新工程开始前的工序。" },
    "3": { q: "拿钥匙前应提前多久开始规划？", a: "如果已有平面图，建议在拿钥匙前 4 至 8 周开始规划。这能让布局、预算、材料方向和报价更早确定，现场量尺和 HDB 审批后就能更顺利推进。" },
    "4": { q: "哪些 HDB 翻新工程通常需要审批？", a: "拆墙、湿区工程、部分墙体改动、窗户相关工程以及某些水喉工程，可能需要 HDB 审批。应由 HDB 注册装修商在开工前检查范围。" },
    "5": { q: "木作可以在瓷砖和电工完成前开始吗？", a: "木作量尺通常依赖现场完成后的实际尺寸，尤其是瓷砖、天花和电位确认后。生产可以与现场工程重叠，但过早量尺可能造成安装误差。" },
    "6": { q: "HDB 翻新最常见的延误原因是什么？", a: "常见原因包括材料迟迟未定、HDB 审批延迟、业主自购材料迟到、木作布局修改、冷气铜管协调、台面量尺延误以及外部供应商时间配合问题。" },
    "7": { q: "翻新交付后可以马上入住吗？", a: "建议额外预留 1 至 2 周用于清洁、散味、小修补、家具送货和电器安装。太赶着入住会让检查和修整变得更困难。" },
    "8": { q: "淘宝或海外自购材料会怎样影响时间表？", a: "若自购海外材料迟到、损坏、尺寸不对或配件不齐，就会延误安装。水槽、水龙头、灯具和卫浴配件应提早购买并在安装日前检查。" },
    "9": { q: "厨房电器是否应在木作开始前确认？", a: "是的。炉具、抽油烟机、烤箱、冰箱、水槽和洗碗机尺寸应在木作生产前确认。迟改电器会影响柜体尺寸、散热空间、电位和台面开孔。" },
    "10": { q: "业主如何控制翻新时间？", a: "尽早确认布局，避免后期改设计，在开工前定好材料，指定一个主要协调方，检查长交期项目，并保持清楚的工序安排。多数延误来自决策与协调问题。" },
    "11": { q: "缺陷修补应预留多久？", a: "较小的 BTO 项目可预留约 1 周，较大或转售项目可预留 1 至 2 周，用于油漆修补、木作调整、玻璃胶收口、清洁和小项目整改。" },
    "12": { q: "询问 HDB 翻新时间前应准备什么？", a: "准备平面图、拿钥匙日期、目标入住日期、翻新范围、电器清单、材料偏好和自购项目。资料越完整，装修商越能给出实际时间表。" }
  }
},
  internal_links: {
  eyebrow: "相关 HDB 翻新指南",
  title: "用更清晰的预算与时间规划 HDB 翻新",
  cost_intro: "确认工程范围前，建议先参考我们的",
  cost_link: "新加坡翻新费用指南",
  cost_outro: "这样能把预算、木作、湿区工程和材料决定一起规划清楚。",
  mistakes_intro: "若要减少因决定太迟、自购材料或报价范围不清而造成的延误，可先阅读",
  mistakes_link: "新加坡业主应避免的翻新错误",
  mistakes_outro: "再开始安排翻新工程。"
},
  cta: {
  eyebrow: "HDB 翻新规划",
  title: "需要更实际的入住时间表？",
  body: "把您的平面图、拿钥匙日期和目标入住时间发给我们。我们可以协助您预估工序、可能的审批项目和实际施工时间。",
  button: "WhatsApp 咨询 HDB 翻新时间"
},
}
};

export default function ArticleHDBTimeline() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'zh' ? 'zh' : 'en';
  const article = articleHdbTimelineContent[lang];
  const durationItems = article.sections.duration_items as StringMap;
  const phases = article.sections.phases as Record<string, { title: string; desc: string }>;
  const avoidItems = article.sections.avoid_items as StringMap;
  const hdbTimelineFaqs = Array.from({ length: 12 }, (_, index) => {
    const itemNo = String(index + 1) as keyof typeof article.faq.items;
    return article.faq.items[itemNo];
  });


  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.meta.description,
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
      "@id": "https://idworkstudio.com/insights/hdb-renovation-timeline-singapore"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://idworkstudio.com" },
      { "@type": "ListItem", "position": 2, "name": "Insights", "item": "https://idworkstudio.com/insights" },
      { "@type": "ListItem", "position": 3, "name": article.title, "item": "https://idworkstudio.com/insights/hdb-renovation-timeline-singapore" }
    ]
  };


  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://idworkstudio.com/insights/hdb-renovation-timeline-singapore#faq",
    "mainEntity": hdbTimelineFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const delayKeys = ['1', '2', '3', '4'] as const;

  return (
    <>
      <Helmet>
        <title>{article.meta.title}</title>
        <meta name="description" content={article.meta.description} />
        <link rel="canonical" href="https://idworkstudio.com/insights/hdb-renovation-timeline-singapore" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={article.meta.title} />
        <meta property="og:description" content={article.meta.description} />
        <meta property="og:url" content="https://idworkstudio.com/insights/hdb-renovation-timeline-singapore" />
        <meta property="og:image" content="https://idworkstudio.com/images/insights-hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.meta.title} />
        <meta name="twitter:description" content={article.meta.description} />
        <meta name="twitter:image" content="https://idworkstudio.com/images/insights-hero.jpg" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="bg-off-white min-h-screen selection:bg-gold selection:text-dark-charcoal">

        {/* ── HERO ── */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-black text-white pt-28 pb-20">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/insights-hero.jpg"
              alt="HDB renovation planning timeline in Singapore"
              className="w-full h-full object-cover object-center opacity-55 scale-105"
              fetchPriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/45" />
          </div>
          <div className="relative z-10 max-w-4xl text-center px-4">
            <span className="text-xs tracking-[0.25em] uppercase border px-4 py-1 mb-5 inline-block">
              {article.hero_badge}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif uppercase mb-6">
              {article.title}
            </h1>
            <p className="text-lg text-gray-200">{article.subtitle}</p>
            <div className="flex justify-center gap-6 mt-6 text-xs uppercase">
              <span className="flex items-center gap-2"><CalendarDays className="w-4 h-4" />2026-04-23</span>
              <span className="flex items-center gap-2"><Clock3 className="w-4 h-4" />{article.read_time}</span>
            </div>
          </div>
        </section>

        {/* ── BACK NAV ── */}
        <section className="py-8 border-b bg-white border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <a
              href="/insights"
              className="inline-flex items-center gap-2 text-charcoal hover:text-gold text-xs uppercase tracking-[0.22em] font-bold transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('article_common.back_to_insights')}
            </a>
          </div>
        </section>

        {/* ── ARTICLE BODY ── */}
        <article className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* ── HOW LONG SECTION ── */}
            <div className="mb-14">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-5 pb-4 border-b border-gray-200">
                {article.sections.duration_title}
              </h2>
              <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85] mb-6">
                {article.sections.duration_intro}
              </p>
              <ul className="space-y-2 mb-6 pl-1">
                {Object.values(durationItems).map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600 text-base leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85]">
                {article.sections.duration_p2}
              </p>
            </div>

            {/* ── PHASE BREAKDOWN ── */}
            <div className="mb-14">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-8 pb-4 border-b border-gray-200">
                {article.sections.breakdown_title}
              </h2>

              {/* Gantt image */}
              <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm mb-10">
                <img
                  src="/images/article2-gantt.jpg"
                  alt="Renovation Gantt chart showing sequencing of works in Singapore renovation"
                  className="w-full h-[280px] md:h-[400px] object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Numbered phases - compact timeline layout */}
              <div className="space-y-4">
                {Object.entries(phases).map(([key, phase]) => (
                  <div
                    key={key}
                    className="rounded-2xl border border-gray-200 bg-[#fffdf8] p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <h3 className="text-lg md:text-xl font-bold text-charcoal leading-snug">
                      {phase.title}
                    </h3>
                    <p className="mt-3 text-gray-600 text-sm md:text-base leading-7 md:leading-8">
                      {phase.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── MOVE-IN ── */}
            <div className="mb-14">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-5 pb-4 border-b border-gray-200">
                {article.sections.movein_title}
              </h2>
              <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85]">
                {article.sections.movein_p1}
              </p>
            </div>

            {/* ── DELAYS ── */}
            <div className="mb-14">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-8 pb-4 border-b border-gray-200">
                {article.sections.delays_title}
              </h2>

              <div className="space-y-0">
                {delayKeys.map((key, index) => (
                  <div key={key} className="pb-10 mb-10 border-b border-gray-100 last:border-b-0 last:mb-0 last:pb-0">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full bg-gold flex items-center justify-center text-sm font-bold text-white mt-0.5 shadow-sm" aria-hidden="true">
                        {index + 1}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-charcoal leading-snug pt-1">
                        {article.sections.delays[key].title}
                      </h3>
                    </div>

                    {/* Sink image inside delay 1 */}
                    {key === '1' && (
                      <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm mb-6 md:ml-14">
                        <img
                          src="/images/article2-sink.jpg"
                          alt="Undermount kitchen sink installation before countertop placement"
                          className="w-full h-[240px] md:h-[380px] object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    )}

                    <div className="pl-0 md:pl-14 space-y-4">
                      <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85]">
                        {article.sections.delays[key].p1}
                      </p>
                      {key === '1' && (
                        <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85]">
                          {article.sections.delays[key].p2}
                        </p>
                      )}
                      {key === '4' && (
                        <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85]">
                          {article.sections.delays[key].p2}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── AVOID SECTION ── */}
            <div className="mb-14">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-8 pb-4 border-b border-gray-200">
                {article.sections.avoid_title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.values(avoidItems).map((item) => (
                  <div
                    key={item}
                    className="bg-white border border-gray-200 rounded-2xl p-5 flex items-start gap-3 shadow-sm hover:border-gold hover:shadow-md transition-all duration-200"
                  >
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <p className="text-sm text-gray-600 leading-7">{item}</p>
                  </div>
                ))}
              </div>
            </div>



            {/* ── RELATED PLANNING LINKS ── */}
            <div className="mb-14 rounded-3xl border border-gray-200 bg-off-white p-7 md:p-8 shadow-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-gold font-bold mb-3">
                {article.internal_links.eyebrow}
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-5">
                {article.internal_links.title}
              </h2>
              <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85] mb-5">
                {article.internal_links.cost_intro}{' '}
                <a href="/insights/renovation-cost-singapore-2026" className="text-charcoal underline underline-offset-4 decoration-gold hover:text-gold transition-colors">
                  {article.internal_links.cost_link}
                </a>{' '}
                {article.internal_links.cost_outro}
              </p>
              <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85] mb-0">
                {article.internal_links.mistakes_intro}{' '}
                <a href="/insights/renovation-mistakes-singapore" className="text-charcoal underline underline-offset-4 decoration-gold hover:text-gold transition-colors">
                  {article.internal_links.mistakes_link}
                </a>{' '}
                {article.internal_links.mistakes_outro}
              </p>
            </div>

            {/* ── FINAL ── */}
            <div className="mb-14">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-5 pb-4 border-b border-gray-200">
                {article.sections.final_title}
              </h2>
              <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85]">
                {article.sections.final_p1}
              </p>
            </div>

            {/* ── FAQ ── */}
            <div className="mb-14">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mt-16 mb-5 pb-4 border-b border-gray-200">
                {article.faq.title}
              </h2>
              <div className="space-y-3 my-8">
                {hdbTimelineFaqs.map((faq, index) => (
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
            </div>

            {/* ── CTA ── */}
            <div className="mb-14 rounded-3xl bg-dark-charcoal p-8 md:p-10 text-white">
              <div className="flex items-start gap-4 mb-5">
                <MessageCircle className="w-8 h-8 text-gold flex-shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-gold font-bold mb-3">{article.cta.eyebrow}</p>
                  <h2 className="text-2xl md:text-4xl font-serif mb-4">{article.cta.title}</h2>
                  <p className="text-gray-300 text-base leading-[1.8] mb-0">
                    {article.cta.body}
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/6598333085?text=Hi%20ID%20Work%20Studio%2C%20I%20am%20planning%20an%20HDB%20renovation.%20Can%20you%20help%20me%20estimate%20a%20realistic%20renovation%20timeline%20from%20my%20floor%20plan%20and%20move-in%20date%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-dark-charcoal text-xs uppercase tracking-[0.22em] hover:bg-gold-hover transition-all duration-300 font-bold rounded-full"
              >
                {article.cta.button}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* ── NEXT ARTICLE FOOTER ── */}
            <div className="mt-14 border-t pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold font-bold mb-2">
                  {t('article_common.next_article')}
                </p>
                <h3 className="text-2xl font-serif text-charcoal">
                  {article.next_title}
                </h3>
              </div>
              <a
                href="/insights/renovation-mistakes-singapore"
                className="inline-flex items-center gap-2 text-charcoal hover:text-gold text-xs uppercase tracking-[0.22em] font-bold transition-colors duration-200 whitespace-nowrap"
              >
                {t('article_common.continue_reading')}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </article>
      </div>
    </>
  );
}
