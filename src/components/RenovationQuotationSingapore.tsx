import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

type SummaryRow = {
  label: string;
  value: string;
  note: string;
};

type ComparisonRow = {
  item: string;
  impact?: string;
  cost?: string;
  note: string;
};

type Section = {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

type Scenario = {
  title: string;
  problem: string;
  advice: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type ArticleContent = {
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  readTime: string;
  category: string;
  heroImageAlt: string;
  quickAnswerTitle: string;
  quickAnswer: string;
  summaryRows: SummaryRow[];
  comparisonTitle: string;
  comparisonIntro: string;
  comparisonRows: ComparisonRow[];
  sections: Section[];
  checklistTitle: string;
  checklistIntro: string;
  checklist: string[];
  scenarioTitle: string;
  scenarios: Scenario[];
  internalLinksTitle: string;
  internalLinks: { label: string; to: string; text: string }[];
  faqTitle: string;
  faqs: FaqItem[];
  ctaTitle: string;
  ctaText: string;
  ctaPrimary: string;
  ctaSecondary: string;
  breadcrumbCurrent: string;
};

const heroImage = "/insights/renovation-quotation-singapore-hero.webp";

const content: Record<"en" | "zh", ArticleContent> = {
  "en": {
    "metaTitle": "Why Renovation Quotations in Singapore Vary So Much | ID Work Studio",
    "metaDescription": "A practical Singapore guide explaining why renovation quotations differ so much, including hidden exclusions, resale risks, variation orders, material specifications and how homeowners should compare quotes.",
    "canonical": "https://idworkstudio.com/insights/renovation-quotation-singapore",
    "eyebrow": "Singapore Renovation Planning Guide",
    "title": "Why Renovation Quotations in Singapore Vary So Much",
    "subtitle": "Renovation quotations in Singapore can differ by tens of thousands of dollars because contractors may price different scopes, risk levels, material grades, site conditions and exclusions. The cheapest quote is not always the cheapest renovation once variation orders and hidden items are added.",
    "readTime": "9 min read",
    "category": "Quotation Guide",
    "heroImageAlt": "Singapore homeowner reviewing renovation quotation with material samples and floor plan",
    "quickAnswerTitle": "Quick answer",
    "quickAnswer": "If two renovation quotes look very different, it usually means they are not pricing the same renovation. One contractor may include hacking, haulage, electrical rewiring, wall skimming, protection works and realistic contingency for resale conditions, while another may quote a bare-minimum baseline first and add missing items later through variation orders.",
    "summaryRows": [
      {
        "label": "Common quote gap",
        "value": "S$10k–S$40k+",
        "note": "Large differences are common when one quote includes risk and the other excludes major works."
      },
      {
        "label": "Main risk area",
        "value": "Older resale units",
        "note": "Hidden wiring, uneven walls, hollow tiles and plumbing conditions may only appear after hacking."
      },
      {
        "label": "Most overlooked item",
        "value": "Exclusions",
        "note": "Haulage, debris disposal, protection, cleaning, electrical points and rectification may be omitted."
      },
      {
        "label": "Best comparison method",
        "value": "Line-by-line",
        "note": "Compare scope, materials, quantities, warranty and assumptions, not just the final total."
      }
    ],
    "comparisonTitle": "Why two renovation quotes can differ so much",
    "comparisonIntro": "A renovation quotation is not only a price list. It is also a reflection of what the contractor assumes, includes, excludes and is prepared to take responsibility for. This is why two quotations for the same HDB or condo can look completely different.",
    "comparisonRows": [
      {
        "item": "Scope included",
        "impact": "High",
        "note": "One quote may include hacking, haulage, electrical rewiring, plumbing replacement and cleaning, while another only includes visible finish works."
      },
      {
        "item": "Risk allowance",
        "impact": "High",
        "note": "Older resale homes carry more uncertainty. Some contractors price this realistically; others leave it out to appear cheaper."
      },
      {
        "item": "Material grade",
        "impact": "Medium to high",
        "note": "Laminate brand, internal plywood, worktop material, tile size, hardware and paint system can all change the final price."
      },
      {
        "item": "Project management",
        "impact": "Medium",
        "note": "A quote that includes coordination, site protection, supplier checking and after-sales support may cost more but reduce problems later."
      }
    ],
    "sections": [
      {
        "eyebrow": "Real concern",
        "title": "Different contractors make different assumptions",
        "paragraphs": [
          "Especially in older resale HDB flats and condos, contractors cannot fully see what is behind your walls, under existing tiles or above the ceiling before work starts. This means every quotation contains assumptions.",
          "One contractor may price conservatively by allowing for electrical rewiring, wall skimming, uneven flooring, waterproofing rectification or concealed plumbing changes. Another may quote a lower baseline to win the job, then only address these items after demolition exposes the actual site condition.",
          "This does not always mean the higher quotation is inflated. Sometimes, it simply means the contractor has priced in risks that are likely to appear in a resale renovation."
        ],
        "bullets": [
          "Old electrical wiring hidden behind walls",
          "Uneven wall surfaces after hacking",
          "Hollow floor tiles or weak screed",
          "Concealed plumbing that needs replacement",
          "Waterproofing or floor trap issues in older wet areas"
        ]
      },
      {
        "eyebrow": "Hidden exclusions",
        "title": "The cheaper quote may be missing important items",
        "paragraphs": [
          "Many Singapore homeowners compare only the final number at the bottom of the quotation. That is dangerous because a lower total may simply mean that important items have been excluded.",
          "One quote may include haulage, debris disposal, floor protection, post-renovation cleaning and site coordination. Another may exclude these items or place them as optional charges. The first quote looks more expensive at first, but the second quote may catch up later."
        ],
        "bullets": [
          "Haulage and debris disposal",
          "Floor and lift protection",
          "Hacking permits or submission-related coordination",
          "Post-renovation cleaning",
          "Electrical point additions",
          "Aircon dismantling or patching works",
          "Appliance installation and cut-outs",
          "Wall rectification after hacking"
        ]
      },
      {
        "eyebrow": "Variation order risk",
        "title": "The variation order trap",
        "paragraphs": [
          "Variation orders are additional charges added after renovation has started. Not all variation orders are unethical. Some happen because hidden site conditions were genuinely impossible to confirm before hacking.",
          "However, homeowners should be cautious when a quotation is suspiciously low compared with the market. In some cases, essential items are under-scoped at the quotation stage, creating a false sense of affordability. The missing work then returns later as mandatory add-ons.",
          "Extremely low quotations can make the renovation feel cheaper at the beginning, but more stressful during construction when every missing item becomes a new cost discussion."
        ],
        "bullets": [
          "Ask what is excluded before signing",
          "Clarify unit rates for future additions",
          "Request quantities for electrical, carpentry and wet works",
          "Check whether rectification works are allowed for or excluded",
          "Do not compare only the final total"
        ]
      },
      {
        "eyebrow": "Risk pricing",
        "title": "Risk and uncertainty are priced in",
        "paragraphs": [
          "Renovation is not the same as buying a fixed retail product. In many Singapore projects, especially older resale units, some site conditions cannot be fully confirmed until demolition begins.",
          "More experienced contractors may quote more conservatively because they have encountered hidden site problems many times before. They may include buffer amounts for uncertain electrical, plumbing, wall, flooring or supplier risks.",
          "Overseas special-order items can also create uncertainty. Long lead times, shipping damage, wrong dimensions, batch differences or replacement delays may affect the project schedule and cost."
        ],
        "bullets": [
          "Resale flats with older concealed wiring",
          "Bathrooms with ageing waterproofing",
          "Walls that need more skimming after hacking",
          "Overseas tiles or fittings with long replacement lead times",
          "Custom carpentry dependent on exact appliance dimensions"
        ]
      },
      {
        "eyebrow": "Apples-to-apples comparison",
        "title": "Compare quotations line by line, not by total price",
        "paragraphs": [
          "A proper quotation comparison should look at what is included, how each item is specified and whether the quantities are realistic. A S$55,000 quote may be better value than a S$42,000 quote if the lower quote excludes important site works.",
          "Homeowners should compare material specifications, carpentry details, electrical point quantities, wet-work scope, warranty responsibility, project timeline and after-sales support. This is where many quotation differences become clearer."
        ],
        "bullets": [
          "Carpentry internal material and hardware",
          "Worktop brand, thickness and cut-out costs",
          "Tile size, origin and laying method",
          "Number of electrical and data points",
          "Painting system and number of coats",
          "Hacking, haulage and protection works",
          "Warranty and after-sales responsibility"
        ]
      },
      {
        "eyebrow": "Practical advice",
        "title": "When a lower quotation may still be acceptable",
        "paragraphs": [
          "A lower renovation quote is not automatically bad. It may be suitable if the scope is genuinely simpler, the materials are more basic, or the homeowner wants to control cost by reducing built-in carpentry and decorative features.",
          "The key is transparency. A lower quote is acceptable when exclusions are clearly stated, quantities are realistic and the homeowner understands what may be added later. The problem is not low pricing itself; the problem is unclear pricing."
        ],
        "bullets": [
          "Good for simpler BTO refresh works",
          "Acceptable when fewer built-ins are required",
          "Useful when homeowners already have clear material choices",
          "Safer when exclusions and unit rates are clearly documented"
        ]
      }
    ],
    "checklistTitle": "Quotation comparison checklist for Singapore homeowners",
    "checklistIntro": "Before choosing a renovation contractor, use this checklist to make sure you are comparing the same scope.",
    "checklist": [
      "Does the quote include hacking, haulage and debris disposal?",
      "Are electrical points counted individually or listed as a vague allowance?",
      "Is plumbing replacement included or only basic installation?",
      "Are carpentry lengths, internal materials and hardware specified?",
      "Are worktop, sink, hob and appliance cut-outs included?",
      "Does the quote include floor protection, lift protection or common-area requirements?",
      "Are wall skimming, patching and making-good works included?",
      "Are payment stages and variation order rules clearly stated?",
      "Is the project timeline realistic for HDB, condo or MCST requirements?",
      "Is warranty or after-sales rectification clearly explained?"
    ],
    "scenarioTitle": "Realistic Singapore scenarios",
    "scenarios": [
      {
        "title": "4-room BTO with simple scope",
        "problem": "The quote gap may be smaller because the site condition is newer and easier to predict.",
        "advice": "Compare carpentry, electrical points, vinyl or tile scope, paint system and whether appliance installation is included."
      },
      {
        "title": "Older 4-room resale HDB",
        "problem": "The quote gap can be much larger because hacking may reveal old wiring, uneven walls, plumbing issues or flooring problems.",
        "advice": "Do not choose based on total price alone. Check whether rectification and risk items are included or excluded."
      },
      {
        "title": "Condo renovation",
        "problem": "MCST rules, lift protection, working hours, delivery restrictions and management requirements can affect both cost and schedule.",
        "advice": "Check whether the contractor has allowed for building management coordination and protection requirements."
      }
    ],
    "internalLinksTitle": "Related guides to help you compare better",
    "internalLinks": [
      {
        "label": "Renovation Cost Singapore 2026",
        "to": "/insights/renovation-cost-singapore-2026",
        "text": "Understand realistic overall renovation budget ranges before comparing quotations."
      },
      {
        "label": "Kitchen Renovation Cost Singapore",
        "to": "/insights/kitchen-renovation-cost-singapore-2026",
        "text": "See how kitchen-specific items like carpentry, worktops, hacking and plumbing affect pricing."
      },
      {
        "label": "Renovation Mistakes Singapore Homeowners Make",
        "to": "/insights/renovation-mistakes-singapore",
        "text": "Avoid common decisions that lead to delays, rework and unnecessary variation orders."
      },
      {
        "label": "Renovation Cost Calculator",
        "to": "/renovation-cost-calculator",
        "text": "Use the calculator as a first planning guide before requesting an itemised quote."
      }
    ],
    "faqTitle": "Renovation quotation FAQ",
    "faqs": [
      {
        "question": "Why do renovation quotations in Singapore vary so much?",
        "answer": "They vary because contractors may include different scopes, material grades, assumptions, risk allowances, site protection, project management and exclusions. Two quotes that look similar on the surface may not be pricing the same work."
      },
      {
        "question": "Is the cheapest renovation quote always risky?",
        "answer": "Not always. A lower quote can be fine if the scope is simple and exclusions are clearly explained. It becomes risky when important items are missing, quantities are vague or the price is far below market without a clear reason."
      },
      {
        "question": "What is a variation order in renovation?",
        "answer": "A variation order is an additional charge for work that was not included in the original quotation. It can be caused by homeowner changes, hidden site conditions or missing scope in the initial quote."
      },
      {
        "question": "Are all variation orders unfair?",
        "answer": "No. Some variation orders are reasonable when hidden conditions appear after hacking or when the homeowner changes the design. The concern is when essential items were intentionally left out to make the initial quote look cheaper."
      },
      {
        "question": "What should I check before accepting a renovation quote?",
        "answer": "Check hacking, haulage, protection, electrical quantities, plumbing scope, carpentry specifications, worktop details, painting system, cleaning, warranty and payment stages. Ask what is excluded."
      },
      {
        "question": "Why do resale HDB renovation quotes usually vary more?",
        "answer": "Resale HDB flats often have older wiring, plumbing, tiles, waterproofing and wall conditions. Different contractors price these risks differently, which can create a large gap between quotations."
      },
      {
        "question": "Should I ask every contractor to quote the same scope?",
        "answer": "Yes. To compare fairly, provide the same floor plan, design direction, material expectation and work scope to each contractor. Otherwise, each quote may be based on different assumptions."
      },
      {
        "question": "Can a higher quote be better value?",
        "answer": "Yes, if it includes more complete scope, better material specifications, clearer project management, realistic risk allowance and fewer likely surprises later."
      },
      {
        "question": "How can I reduce the risk of hidden costs?",
        "answer": "Request itemised pricing, clarify exclusions, confirm quantities, review site conditions, keep design decisions clear and avoid last-minute material changes after work starts."
      },
      {
        "question": "When should I request a detailed renovation quotation?",
        "answer": "Request a detailed quote when you have a floor plan, property condition, rough design direction, key material preferences and a realistic move-in timeline. For resale homes, a site visit is especially important."
      }
    ],
    "ctaTitle": "Need help checking if a renovation quote is realistic?",
    "ctaText": "Send us your floor plan, property type and quotation scope. We can help you understand whether the pricing is complete, whether key items are missing and what questions to ask before committing.",
    "ctaPrimary": "WhatsApp ID Work Studio",
    "ctaSecondary": "Use Renovation Cost Calculator",
    "breadcrumbCurrent": "Renovation Quotation Singapore"
  },
  "zh": {
    "metaTitle": "为什么新加坡装修报价差这么多 | ID Work Studio",
    "metaDescription": "一篇实用的新加坡装修报价指南，说明为什么不同装修报价差距很大，包括隐藏遗漏、转售屋风险、追加费用、材料规格，以及业主应如何比较报价。",
    "canonical": "https://idworkstudio.com/insights/renovation-quotation-singapore",
    "eyebrow": "新加坡装修规划指南",
    "title": "为什么新加坡装修报价差这么多？",
    "subtitle": "新加坡装修报价可能相差几万块，并不一定只是因为谁比较贵或比较便宜。很多时候，差异来自工程范围、材料规格、现场风险、隐藏遗漏，以及承包商对不确定因素的处理方式。",
    "readTime": "约 9 分钟",
    "category": "报价指南",
    "heroImageAlt": "新加坡屋主查看装修报价、平面图与材料样板",
    "quickAnswerTitle": "快速答案",
    "quickAnswer": "如果两份装修报价差很多，通常代表它们并不是在报价同一件事。一方可能已包括拆除、清运、电线重拉、墙面修补、保护工程和转售屋风险；另一方可能先报一个较低的基础价，再通过追加项目补回遗漏工程。",
    "summaryRows": [
      {
        "label": "常见报价差距",
        "value": "S$10k–S$40k+",
        "note": "当一份报价包含风险，另一份遗漏重要工程时，差距会很大。"
      },
      {
        "label": "主要风险来源",
        "value": "较旧转售单位",
        "note": "隐藏电线、不平墙面、空鼓地砖和旧水管，常在拆除后才发现。"
      },
      {
        "label": "最容易忽略",
        "value": "隐藏遗漏",
        "note": "清运、保护、清洁、电工点位、修补工程，可能没有列入报价。"
      },
      {
        "label": "最佳比较方式",
        "value": "逐项比较",
        "note": "不要只看总价，应比较范围、材料、数量、保修和假设。"
      }
    ],
    "comparisonTitle": "为什么两份装修报价会差这么多",
    "comparisonIntro": "装修报价不只是价格表，也反映了承包商包括了什么、排除了什么、承担了什么责任，以及对现场风险作出什么假设。所以同一个 HDB 或公寓项目，报价也可能非常不同。",
    "comparisonRows": [
      {
        "item": "包含的工程范围",
        "impact": "高",
        "note": "一份报价可能包括拆除、清运、电线、水喉和清洁；另一份可能只包括表面装修。"
      },
      {
        "item": "风险预留",
        "impact": "高",
        "note": "转售屋的不确定性更高。有些承包商会实际预留风险，有些则为了价格好看先不列入。"
      },
      {
        "item": "材料规格",
        "impact": "中至高",
        "note": "饰面板、夹板、台面、瓷砖尺寸、五金和油漆系统都会影响价格。"
      },
      {
        "item": "项目管理",
        "impact": "中",
        "note": "包括现场协调、保护工程、供应商检查和售后责任的报价，通常会更完整。"
      }
    ],
    "sections": [
      {
        "eyebrow": "真实顾虑",
        "title": "不同承包商会作出不同假设",
        "paragraphs": [
          "特别是较旧的转售 HDB 和公寓，在开工前没有人能完全看到墙内、地砖下方或天花上的实际情况。因此，每份报价都会带有一定假设。",
          "有些承包商会较保守地预留电线重拉、墙面批灰、地面不平、防水修补或隐藏水管更换等费用。另一些承包商则可能先报较低基础价，等拆除后发现问题再追加。",
          "这不代表较高的报价一定是乱开价。有时，它只是把转售屋常见风险较实际地反映出来。"
        ],
        "bullets": [
          "墙内旧电线",
          "拆除后不平整的墙面",
          "空鼓地砖或较弱的水泥找平层",
          "需要更换的隐藏水管",
          "旧厕所或湿区防水问题"
        ]
      },
      {
        "eyebrow": "隐藏遗漏",
        "title": "较便宜的报价可能少了重要项目",
        "paragraphs": [
          "很多新加坡业主比较报价时，只看最后总额。这其实很危险，因为较低的总价可能只是因为一些重要项目没有被列入。",
          "一份报价可能已包括清运、垃圾处理、地面保护、装修后清洁和现场协调。另一份报价则可能把这些项目排除或列为可选费用。前者看起来较贵，但后者后期可能会慢慢追上。"
        ],
        "bullets": [
          "清运与垃圾处理",
          "地面和电梯保护",
          "拆除许可证或相关协调",
          "装修后清洁",
          "电工点位增加",
          "空调拆除或修补工程",
          "电器安装与台面开孔",
          "拆除后的墙面修补"
        ]
      },
      {
        "eyebrow": "追加费用风险",
        "title": "Variation Order 追加费用陷阱",
        "paragraphs": [
          "Variation Order 是开工后新增的追加费用。并不是所有追加费用都不合理。有些确实是因为拆除后才发现隐藏现场问题，开工前无法完全确认。",
          "但如果某份报价明显低于市场，业主就要小心。有些必要工程可能在报价阶段被刻意缩小范围，让最初价格看起来较低，之后再以必须追加的形式出现。",
          "过低的报价会让装修一开始看起来比较轻松，但施工阶段每一个遗漏项目都可能变成新的费用讨论。"
        ],
        "bullets": [
          "签约前先问清楚不包括什么",
          "确认后续追加项目的单价",
          "检查电工、木作和湿作的数量",
          "确认修补工程是包含还是排除",
          "不要只比较总价"
        ]
      },
      {
        "eyebrow": "风险定价",
        "title": "风险和不确定性也会被算进报价",
        "paragraphs": [
          "装修不是购买固定零售商品。很多新加坡住宅项目，尤其是较旧转售单位，部分现场情况必须等拆除后才能确认。",
          "经验较多的承包商有时会报价更保守，因为他们过去遇过许多隐藏现场问题。他们可能会预留电线、水喉、墙面、地面或供应商风险。",
          "海外特殊订购材料也会带来不确定性，例如交期长、运输损坏、尺寸错误、批次色差或补货延误，这些都可能影响工期和费用。"
        ],
        "bullets": [
          "较旧转售屋的隐藏电线",
          "旧厕所防水老化",
          "拆除后需要更多批灰修补",
          "海外瓷砖或配件补货时间长",
          "木作需配合电器实际尺寸"
        ]
      },
      {
        "eyebrow": "公平比较",
        "title": "装修报价应逐项比较，而不是只看总价",
        "paragraphs": [
          "真正公平的报价比较，应该看每个项目包括什么、规格写得多清楚、数量是否合理。一份 S$55,000 的报价，可能比 S$42,000 的报价更值得，因为较低报价可能少了重要现场工程。",
          "业主应比较材料规格、木作细节、电工数量、湿作范围、保修责任、工期安排和售后支持。很多报价差距，其实在这些地方就会变得很清楚。"
        ],
        "bullets": [
          "木作内部材料和五金",
          "台面品牌、厚度和开孔费用",
          "瓷砖尺寸、产地和铺贴方式",
          "电工和网线点位数量",
          "油漆系统和涂刷层数",
          "拆除、清运和保护工程",
          "保修与售后责任"
        ]
      },
      {
        "eyebrow": "实际建议",
        "title": "较低报价什么时候可以接受",
        "paragraphs": [
          "较低报价不一定不好。如果工程范围确实较简单、材料较基础，或业主希望减少固定木作和装饰细节来控制预算，较低报价也可以是合理选择。",
          "关键在于透明。只要遗漏项目清楚、数量实际、业主知道后续可能增加什么，较低报价是可以接受的。问题不在于价格低，而在于价格不清楚。"
        ],
        "bullets": [
          "适合简单 BTO 基础翻新",
          "固定木作较少时可行",
          "业主已有明确材料选择时较安全",
          "排除项目和后续单价清楚列明时较可靠"
        ]
      }
    ],
    "checklistTitle": "新加坡业主装修报价比较清单",
    "checklistIntro": "选择装修承包商前，可以用这份清单检查自己是否在比较同一个工程范围。",
    "checklist": [
      "报价是否包括拆除、清运和垃圾处理？",
      "电工点位是逐项计算，还是只写笼统 allowance？",
      "水喉工程是否包括更换，还是只是基本安装？",
      "木作长度、内部材料和五金是否写清楚？",
      "台面、水槽、炉具和电器开孔是否包括？",
      "是否包括地面保护、电梯保护或公共区域要求？",
      "墙面批灰、修补和 making-good 是否包括？",
      "付款阶段和追加费用规则是否清楚？",
      "工期是否符合 HDB、公寓或 MCST 要求？",
      "保修和售后修补责任是否说明？"
    ],
    "scenarioTitle": "新加坡常见真实场景",
    "scenarios": [
      {
        "title": "四房式 BTO，简单工程",
        "problem": "因为房屋较新、现场情况较容易预测，报价差距通常较小。",
        "advice": "重点比较木作、电工点位、地板或瓷砖范围、油漆系统，以及电器安装是否包括。"
      },
      {
        "title": "较旧四房式转售 HDB",
        "problem": "拆除后可能发现旧电线、不平墙面、水管问题或地面问题，报价差距会更大。",
        "advice": "不要只看总价。应检查修补工程和风险项目是否已包括。"
      },
      {
        "title": "公寓装修",
        "problem": "MCST 规定、电梯保护、施工时间、送货限制和管理处要求都会影响费用与工期。",
        "advice": "确认承包商是否已考虑大厦管理协调和保护工程。"
      }
    ],
    "internalLinksTitle": "帮助你更好比较报价的相关指南",
    "internalLinks": [
      {
        "label": "新加坡翻新费用 2026",
        "to": "/insights/renovation-cost-singapore-2026",
        "text": "先了解整体翻新预算范围，再比较各家报价。"
      },
      {
        "label": "新加坡厨房翻新费用",
        "to": "/insights/kitchen-renovation-cost-singapore-2026",
        "text": "了解厨房木作、台面、拆除和水喉工程如何影响报价。"
      },
      {
        "label": "新加坡业主常见翻新错误",
        "to": "/insights/renovation-mistakes-singapore",
        "text": "避免导致延误、返工和追加费用的常见决定。"
      },
      {
        "label": "翻新费用计算器",
        "to": "/renovation-cost-calculator",
        "text": "索取正式报价前，可先用计算器做初步预算。"
      }
    ],
    "faqTitle": "装修报价常见问题",
    "faqs": [
      {
        "question": "为什么新加坡装修报价差这么多？",
        "answer": "因为不同承包商可能包含不同工程范围、材料规格、现场假设、风险预留、保护工程、项目管理和排除项目。表面看起来相似的报价，未必是在报价同一件事。"
      },
      {
        "question": "最便宜的装修报价一定有风险吗？",
        "answer": "不一定。如果工程简单、排除项目清楚，较低报价可以是合理的。风险在于重要项目没有列明、数量模糊，或价格明显低于市场却没有清楚解释。"
      },
      {
        "question": "装修中的 Variation Order 是什么？",
        "answer": "Variation Order 是原报价之外的追加费用，可能来自业主更改设计、隐藏现场问题，或原始报价遗漏项目。"
      },
      {
        "question": "所有追加费用都不合理吗？",
        "answer": "不是。有些追加费用是拆除后才发现的真实现场问题，或业主临时更改设计造成的。需要注意的是，必要工程是否一开始就被刻意遗漏。"
      },
      {
        "question": "接受装修报价前应该检查什么？",
        "answer": "应检查拆除、清运、保护、电工数量、水喉范围、木作规格、台面细节、油漆系统、清洁、保修和付款阶段，并明确询问不包括什么。"
      },
      {
        "question": "为什么转售 HDB 报价差距通常更大？",
        "answer": "转售 HDB 常有旧电线、水管、瓷砖、防水和墙面问题。不同承包商对这些风险的预估不同，因此报价差距会较大。"
      },
      {
        "question": "是否应该要求每家公司按同一个范围报价？",
        "answer": "是。为了公平比较，应提供相同平面图、设计方向、材料期望和工程范围。否则每份报价都可能基于不同假设。"
      },
      {
        "question": "较高报价是否可能更值得？",
        "answer": "有可能。如果它包括更完整的工程范围、更清楚的材料规格、项目管理、实际风险预留和较少后期惊喜，整体价值可能更高。"
      },
      {
        "question": "如何降低隐藏费用风险？",
        "answer": "要求逐项报价、确认排除项目、检查数量、安排现场查看、尽早确认设计决定，并避免开工后频繁更换材料。"
      },
      {
        "question": "什么时候适合要求详细装修报价？",
        "answer": "当你已有平面图、房屋状况、初步设计方向、主要材料偏好和现实搬入时间后，就适合要求详细报价。转售屋尤其需要现场查看。"
      }
    ],
    "ctaTitle": "想知道你的装修报价是否实际？",
    "ctaText": "把你的平面图、房屋类型和报价范围发给我们。我们可以帮你判断报价是否完整、有没有遗漏关键项目，以及签约前应该问哪些问题。",
    "ctaPrimary": "WhatsApp 联系 ID Work Studio",
    "ctaSecondary": "使用翻新费用计算器",
    "breadcrumbCurrent": "新加坡装修报价指南"
  }
};

export default function RenovationQuotationSingapore() {
  const { i18n } = useTranslation();
  const lang = i18n.language === "zh" ? "zh" : "en";
  const t = content[lang];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: t.title,
    description: t.metaDescription,
    url: t.canonical,
    image: `https://idworkstudio.com${heroImage}`,
    author: {
      "@type": "Organization",
      name: "ID Work Studio",
      url: "https://idworkstudio.com/",
    },
    publisher: {
      "@type": "Organization",
      name: "ID Work Studio",
      url: "https://idworkstudio.com/",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": t.canonical,
    },
    inLanguage: lang === "zh" ? "zh-SG" : "en-SG",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: lang === "zh" ? "首页" : "Home",
        item: "https://idworkstudio.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: lang === "zh" ? "装修文章" : "Insights",
        item: "https://idworkstudio.com/insights",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: t.breadcrumbCurrent,
        item: t.canonical,
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDescription} />
        <link rel="canonical" href={t.canonical} />
        <meta property="og:title" content={t.metaTitle} />
        <meta property="og:description" content={t.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={t.canonical} />
        <meta property="og:image" content={`https://idworkstudio.com${heroImage}`} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <main className="bg-[#FAF8F3] text-[#2C2C2C]">
        <section className="relative flex min-h-[720px] items-center justify-center overflow-hidden bg-[#111] px-6 py-24 text-white md:min-h-[820px] md:py-32">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt={t.heroImageAlt}
              className="h-full w-full object-cover object-center opacity-70"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-[#111]/80" />
          </div>
          <div className="relative z-10 mx-auto max-w-6xl text-center">
            <p className="mb-7 inline-flex rounded-full border border-[#C5A059]/45 bg-black/25 px-6 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#C5A059] backdrop-blur">
              {t.eyebrow}
            </p>
            <h1 className="mx-auto max-w-5xl font-serif text-4xl font-semibold leading-[1.08] md:text-7xl">
              {t.title}
            </h1>
            <p className="mx-auto mt-7 max-w-4xl text-base leading-8 text-white/80 md:text-xl md:leading-9">
              {t.subtitle}
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3 text-xs uppercase tracking-[0.18em] text-white/65">
              <span>{t.category}</span>
              <span>•</span>
              <span>{t.readTime}</span>
            </div>
          </div>
        </section>

        <section className="border-b border-[#e8e1d7] bg-white px-6 py-5">
          <div className="mx-auto max-w-5xl">
            <Link
              to="/insights"
              className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f6a63] hover:text-[#C5A059]"
            >
              ← {lang === "zh" ? "返回装修文章" : "Back to insights"}
            </Link>
          </div>
        </section>

        <article className="mx-auto max-w-5xl px-6 py-14 md:py-20">
          <section className="mb-14 rounded-3xl border border-[#e8e1d7] bg-white p-6 shadow-sm md:p-8">
            <h2 className="font-serif text-3xl font-semibold">{t.quickAnswerTitle}</h2>
            <p className="mt-4 text-base leading-8 text-[#5f5a54]">{t.quickAnswer}</p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {t.summaryRows.map((row) => (
                <div key={row.label} className="rounded-2xl border border-[#e8e1d7] bg-[#fffdf8] p-5">
                  <p className="text-sm font-semibold text-[#6f6a63]">{row.label}</p>
                  <p className="mt-2 text-2xl font-bold text-[#2C2C2C]">{row.value}</p>
                  <p className="mt-2 text-sm leading-6 text-[#6f6a63]">{row.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="border-b border-[#e8e1d7] pb-4 font-serif text-3xl font-semibold">
              {t.comparisonTitle}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5f5a54]">{t.comparisonIntro}</p>
            <div className="mt-6 overflow-hidden rounded-3xl border border-[#e8e1d7] bg-white shadow-sm">
              {t.comparisonRows.map((row) => (
                <div key={row.item} className="grid gap-2 border-b border-[#e8e1d7] p-5 last:border-b-0 md:grid-cols-[1.1fr_0.7fr_1.7fr] md:gap-5">
                  <p className="font-semibold text-[#2C2C2C]">{row.item}</p>
                  <p className="font-bold text-[#9a7a3f]">{row.impact}</p>
                  <p className="text-sm leading-6 text-[#6f6a63]">{row.note}</p>
                </div>
              ))}
            </div>
          </section>

          {t.sections.map((section) => (
            <section key={section.title} className="mb-14">
              {section.eyebrow && (
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#C5A059]">
                  {section.eyebrow}
                </p>
              )}
              <h2 className="border-b border-[#e8e1d7] pb-4 font-serif text-3xl font-semibold">
                {section.title}
              </h2>
              <div className="mt-6 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-[#5f5a54]">
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="space-y-3 pt-2">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-base leading-7 text-[#5f5a54]">
                        <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#C5A059]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}

          <section className="mb-14 rounded-3xl border border-[#e8e1d7] bg-white p-6 shadow-sm md:p-8">
            <h2 className="font-serif text-3xl font-semibold">{t.checklistTitle}</h2>
            <p className="mt-4 text-base leading-8 text-[#5f5a54]">{t.checklistIntro}</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {t.checklist.map((item) => (
                <div key={item} className="rounded-2xl border border-[#e8e1d7] bg-[#fffdf8] p-4 text-sm leading-6 text-[#5f5a54]">
                  <span className="mr-2 text-[#C5A059]">✓</span>{item}
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="border-b border-[#e8e1d7] pb-4 font-serif text-3xl font-semibold">
              {t.scenarioTitle}
            </h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {t.scenarios.map((scenario) => (
                <div key={scenario.title} className="rounded-3xl border border-[#e8e1d7] bg-white p-6 shadow-sm">
                  <h3 className="font-serif text-2xl font-semibold">{scenario.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#5f5a54]">{scenario.problem}</p>
                  <p className="mt-4 rounded-2xl bg-[#FAF8F3] p-4 text-sm leading-7 text-[#5f5a54]">
                    {scenario.advice}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14 rounded-3xl border border-[#e8e1d7] bg-white p-6 shadow-sm md:p-8">
            <h2 className="font-serif text-3xl font-semibold">{t.internalLinksTitle}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {t.internalLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="rounded-2xl border border-[#e8e1d7] bg-[#fffdf8] p-5 transition hover:border-[#C5A059] hover:shadow-md"
                >
                  <p className="text-sm font-semibold text-[#9a7a3f]">{link.label}</p>
                  <p className="mt-2 text-sm leading-6 text-[#5f5a54]">{link.text}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="border-b border-[#e8e1d7] pb-4 font-serif text-3xl font-semibold">
              {t.faqTitle}
            </h2>
            <div className="mt-6 space-y-4">
              {t.faqs.map((faq) => (
                <details key={faq.question} className="rounded-2xl border border-[#e8e1d7] bg-white p-5 shadow-sm">
                  <summary className="cursor-pointer font-semibold text-[#2C2C2C]">{faq.question}</summary>
                  <p className="mt-4 text-sm leading-7 text-[#5f5a54]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="rounded-3xl bg-[#111] p-8 text-white md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C5A059]">
              ID Work Studio
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold md:text-4xl">{t.ctaTitle}</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/70">{t.ctaText}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/6598333085"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#C5A059] px-7 py-3 text-center text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#d8b76c]"
              >
                {t.ctaPrimary}
              </a>
              <Link
                to="/renovation-cost-calculator"
                className="rounded-full border border-white/30 px-7 py-3 text-center text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:border-[#C5A059] hover:text-[#C5A059]"
              >
                {t.ctaSecondary}
              </Link>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
