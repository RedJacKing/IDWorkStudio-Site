import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

type RiskCard = {
  label: string;
  value: string;
  note: string;
};

type SectionBlock = {
  title: string;
  kicker?: string;
  paragraphs?: string[];
  bullets?: string[];
  highlight?: string;
};

type ChecklistItem = {
  title: string;
  text: string;
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
  heroAlt: string;
  quickAnswerTitle: string;
  quickAnswer: string;
  riskCards: RiskCard[];
  introTitle: string;
  introParagraphs: string[];
  sections: SectionBlock[];
  tileTitle: string;
  tileIntro: string;
  tileCards: ChecklistItem[];
  safeBuyTitle: string;
  safeBuyIntro: string;
  saferItems: string[];
  riskyItems: string[];
  checklistTitle: string;
  checklistIntro: string;
  checklist: ChecklistItem[];
  internalLinksTitle: string;
  internalLinks: {
    title: string;
    text: string;
    href: string;
  }[];
  faqTitle: string;
  faqs: FaqItem[];
  ctaTitle: string;
  ctaText: string;
  ctaPrimary: string;
  ctaSecondary: string;
  breadcrumbCurrent: string;
};

const content: Record<"en" | "zh", ArticleContent> = {
  en: {
    metaTitle:
      "Buying Renovation Items Overseas: Singapore Homeowner Mistakes | ID Work Studio",
    metaDescription:
      "Before buying furniture, taps, tiles, lighting or appliances from Taobao, Amazon or overseas suppliers, learn the Singapore-specific risks involving sizing, voltage, Safety Mark, WELS, shipping, warranty and renovation delays.",
    canonical:
      "https://idworkstudio.com/insights/buying-renovation-items-overseas-singapore",
    eyebrow: "Singapore Renovation Planning Guide",
    title:
      "Buying Renovation Items Overseas? What Singapore Homeowners Should Check First",
    subtitle:
      "Buying from Taobao, Amazon or overseas suppliers can save money, but the wrong sofa, tap, tile or appliance can delay your renovation, fail local compatibility checks or become impossible to repair later.",
    readTime: "10 min read",
    category: "Renovation Planning",
    heroAlt:
      "Singapore home renovation site with overseas furniture, tiles, sanitary fittings and appliances being checked before installation",
    quickAnswerTitle: "Quick answer",
    quickAnswer:
      "Yes, Singapore homeowners can buy selected renovation items overseas, but bulky furniture, plumbing fittings, electrical appliances, tiles and fragile sanitary items carry higher risk. Before ordering, check lift access, exact measurements, Singapore voltage, SAFETY Mark requirements, PUB WELS rating, warranty support, spare parts, shipping protection and delivery timing with your renovation schedule.",
    riskCards: [
      {
        label: "Furniture",
        value: "Size & delivery risk",
        note:
          "A sofa or dining table may look perfect online but fail to fit into an HDB lift, condo service lift, staircase turning point or actual living room layout.",
      },
      {
        label: "Taps & showers",
        value: "Fitting & WELS risk",
        note:
          "Imported mixers, taps and rain shower sets may not match local pipe fittings, water pressure expectations or Singapore water-efficiency labelling requirements.",
      },
      {
        label: "Appliances",
        value: "Voltage & SAFETY Mark risk",
        note:
          "US and Japan appliances may run on different voltage, while certain controlled goods sold in Singapore require a valid SAFETY Mark.",
      },
      {
        label: "Tiles & fragile items",
        value: "Delay & damage risk",
        note:
          "Damaged tiles, basins, vanity cabinets or wrong quantities can stop work on site and push back tiling, carpentry and handover dates.",
      },
    ],
    introTitle: "Why this matters for Singapore renovation projects",
    introParagraphs: [
      "Overseas shopping is not automatically a bad idea. Many homeowners use Taobao, Amazon US, China suppliers or overseas platforms because the designs are wider and the prices can look attractive before shipping.",
      "The real issue is that renovation items are not like normal online shopping. Once hacking, tiling, plumbing, carpentry or electrical work depends on an item, a wrong dimension or incompatible fitting can affect the whole project sequence.",
      "For BTO, resale HDB, condo and landed homes in Singapore, the safest approach is not to avoid overseas purchases entirely. The safer approach is to separate what can be bought freely from what must be checked carefully before ordering.",
    ],
    sections: [
      {
        title: "1. Furniture: the online photo does not show whether it fits your home",
        kicker: "Oversized furniture is one of the most common overseas-buying mistakes.",
        paragraphs: [
          "A sofa, bed frame, dining table or long TV console may look proportionate in a showroom photo, but overseas listings are often photographed in larger homes. A piece that looks normal online can feel oversized inside a 4-room HDB living room or a compact condo layout.",
          "The bigger problem is delivery access. Length, depth and height are not enough. You also need to consider lift size, corridor width, staircase turning radius, entrance door clearance and whether condo management requires service-lift booking.",
        ],
        bullets: [
          "Check the packed carton size, not only the assembled product size.",
          "Measure lift depth, lift door width, main door width and corridor turning space.",
          "For L-shaped sofas and marble tables, confirm whether the item can be split into smaller parts.",
          "Mark the furniture footprint on the floor plan before ordering, especially walkway clearance and chair pull-out space.",
        ],
        highlight:
          "A sofa that cannot enter the lift can become more expensive than buying locally, because staircase delivery, return shipping or disposal may cost more than the original saving.",
      },
      {
        title: "2. Product quality: “item not as described” is harder to solve overseas",
        paragraphs: [
          "For loose furniture and accessories, the common risk is not only damage. It is the difference between what the listing promises and what arrives. The colour may be different, the fabric may feel thinner, the foam may be softer than expected, or the wood may be veneer instead of solid wood.",
          "This is easier to accept for small decorative items. It is much harder when the item is a sofa, dining set, vanity cabinet or built-in-looking feature piece that your renovation design has already been planned around.",
        ],
        bullets: [
          "Ask for real buyer photos, not only catalogue images.",
          "Check whether the seller shows actual material thickness and close-up finishing.",
          "Avoid relying only on translated descriptions for material quality.",
          "For expensive items, ask your designer or contractor whether the scale and material make sense before ordering.",
        ],
      },
      {
        title: "3. Plumbing fittings: taps and rain shower sets may not match local requirements",
        kicker: "A beautiful fitting is useless if it cannot connect properly or perform safely.",
        paragraphs: [
          "Imported taps, mixers, rain shower sets and concealed shower systems can create problems when thread size, connector type or installation depth does not suit Singapore site conditions. Some US products may use different fitting conventions, while some overseas products need adapters that affect finishing or long-term maintenance.",
          "Singapore also has water-efficiency requirements. PUB’s Mandatory Water Efficiency Labelling Scheme uses a 0, 1, 2 and 3 tick rating to show water efficiency for covered products. Taps, mixers, flushing cisterns and some water fittings may need to meet local labelling and compliance requirements before they can be offered, displayed or advertised for sale and installation in Singapore.",
        ],
        bullets: [
          "Check whether the tap, mixer or flushing product has Singapore PUB WELS information.",
          "Confirm with your plumber before buying concealed mixers or wall-mounted fittings.",
          "Do not assume an adapter will solve every pipe-connection problem neatly.",
          "For concealed shower mixers, wrong body depth can cause hacking or retiling later.",
        ],
        highlight:
          "For exposed accessories, a mismatch may be inconvenient. For concealed plumbing, a wrong purchase can become a wall-hacking problem after tiles are already installed.",
      },
      {
        title: "4. Electrical appliances: voltage, frequency and SAFETY Mark must be checked",
        paragraphs: [
          "Singapore’s standard household electricity supply is commonly 230V at 50Hz. Appliances from the US are often designed for around 110V to 120V, while Japan commonly uses 100V. A plug adapter only changes the plug shape; it does not automatically make the voltage suitable.",
          "For certain household electrical and gas appliances sold in Singapore, the SAFETY Mark is part of the local consumer product safety framework. Controlled goods must be tested to specified safety standards and affixed with a SAFETY Mark before they can be sold in Singapore.",
          "Homeowners should be careful with ovens, hobs, electric stoves, water heaters, smart toilets, wine chillers, coffee machines, designer lights and motorised appliances. If an imported item is not locally supported, repair technicians may not carry parts or may decline to service it.",
        ],
        bullets: [
          "Check input voltage and frequency on the product label before buying.",
          "Do not assume a step-up or step-down transformer is ideal for long-term daily use.",
          "For controlled goods, check whether the product requires and carries a valid Singapore SAFETY Mark.",
          "Ask whether local warranty, servicing and spare parts are available in Singapore.",
        ],
        highlight:
          "In the event of an electrical fire, insurers may investigate whether a non-compliant or unsuitable appliance contributed to the incident. Homeowners should not assume insurance treatment will be the same for every imported item.",
      },
      {
        title: "5. Warranty and repair: overseas savings can disappear later",
        paragraphs: [
          "The upfront price of an imported appliance, tap or smart toilet may be lower, but warranty is often where the real difference appears. Some sellers only support warranty in the country of purchase. Some require the product to be shipped back. Some cannot provide parts after a few years.",
          "This becomes frustrating when the item is installed into your renovation. A faulty tap, concealed mixer, smart toilet, cooker hood or built-in appliance is not always easy to remove without affecting surrounding carpentry, tiles or plumbing.",
        ],
        bullets: [
          "Ask whether warranty is valid in Singapore before ordering.",
          "Check whether the brand has a local service centre or parts supplier.",
          "Keep invoices, product model numbers and installation manuals.",
          "Avoid unknown brands for items that are difficult to uninstall later.",
        ],
      },
      {
        title: "6. Shipping damage: fragile items need better protection",
        paragraphs: [
          "Vanity cabinets, ceramic basins, mirrors, sintered stone tops, marble tables, glass lights and tiles can be damaged during international shipping. Even if the seller agrees to compensate, the timeline loss may still affect your renovation schedule.",
          "For fragile or expensive items, wooden crating is usually worth considering. It costs more, but it reduces the chance of cracks, chips and crushed corners during handling.",
        ],
        bullets: [
          "Ask for wooden crating for ceramic, glass, stone or mirror items.",
          "Check whether shipping insurance covers visible damage and concealed damage.",
          "Inspect items immediately when they arrive at the warehouse or home.",
          "Photograph the packaging before opening if there are signs of damage.",
        ],
        highlight:
          "A broken basin is not only a refund problem. It can delay plumbing, countertop measurement and final handover.",
      },
      {
        title: "7. Delivery timing: bulky items should not arrive too early",
        paragraphs: [
          "Many homeowners order early because they are afraid of shipping delays. That is understandable, but early delivery creates another problem. If the home is still under renovation, large furniture and fragile items can become obstacles on site.",
          "Workers still need space for tiling, carpentry, painting, electrical work and cleaning. A bulky sofa, dining table or vanity cabinet sitting in the middle of the home can be scratched, covered in dust or accidentally damaged.",
        ],
        bullets: [
          "Use a forwarder or warehouse that can hold bulky items until the site is ready.",
          "Coordinate delivery after dusty works, painting and major carpentry movement are completed.",
          "Avoid delivering loose furniture before final cleaning unless storage is properly protected.",
          "Book condo or MCST delivery slots early if service lift access is required.",
        ],
      },
      {
        title: "8. Soft decoration: do not rush to complete everything before moving in",
        kicker: "A home can look better when it evolves slowly.",
        paragraphs: [
          "Many homeowners want the completed home to look perfect on handover day. This often leads to buying too many cushions, lamps, rugs, side tables, display items and wall decor before living in the space.",
          "The more practical approach is to move in first, understand your actual habits, then decorate gradually. After a few weeks, you will know where you really need a lamp, which corner feels empty, whether the sofa needs cushions, and how much display storage you actually use.",
        ],
        bullets: [
          "Cushions, lamps, rugs and display decor can be added later without affecting renovation quality.",
          "Avoid buying all decorative items in one shipment just to make the home look complete immediately.",
          "Live in the home first before deciding on final layers of styling.",
          "Spend more attention on permanent items first: layout, electrical points, lighting plan, carpentry and waterproofing.",
        ],
        highlight:
          "Good homes do not need to be fully decorated on day one. They become more personal when the styling follows how the family actually lives.",
      },
    ],
    tileTitle: "Special warning: buying tiles from overseas",
    tileIntro:
      "Tiles are one of the riskiest renovation items to import because they affect site sequence, quantity planning, colour consistency and breakage allowance.",
    tileCards: [
      {
        title: "If you buy too many",
        text:
          "You pay for extra tiles, extra shipping and may need storage space for unused boxes. Large-format tiles can be difficult to store safely after renovation.",
      },
      {
        title: "If you buy too few",
        text:
          "Reordering can delay tiling work. The tiler may not be able to continue, and later carpentry, doors, shower screens or sanitary installation may also be pushed back.",
      },
      {
        title: "If the batch is different",
        text:
          "Tiles from a later production batch may have slight shade or texture differences. Patchwork can become obvious, especially on feature walls or large open areas.",
      },
      {
        title: "If tiles arrive damaged",
        text:
          "Broken corners, cracked pieces or insufficient replacements can stop work. International claims may take longer than the renovation schedule can afford.",
      },
    ],
    safeBuyTitle: "What is safer to buy overseas — and what needs more caution?",
    safeBuyIntro:
      "The safest rule is simple: the more permanent, technical, fragile or schedule-critical an item is, the more carefully it should be checked before buying overseas.",
    saferItems: [
      "Loose cushions and decorative objects",
      "Non-critical display accessories",
      "Loose side tables that are easy to replace",
      "Rugs and soft furnishings after size is confirmed",
      "Simple decorative lights only after voltage and installation are checked",
    ],
    riskyItems: [
      "Tiles and stone materials",
      "Concealed shower mixers and built-in plumbing fittings",
      "Water heaters, ovens, hobs and other controlled electrical goods",
      "Oversized sofas, dining tables and bed frames",
      "Vanity cabinets with ceramic basins or fragile tops",
    ],
    checklistTitle: "Checklist before ordering renovation items overseas",
    checklistIntro:
      "Use this checklist before paying a deposit or confirming sea shipping. It can prevent many expensive mistakes.",
    checklist: [
      {
        title: "Confirm actual dimensions",
        text:
          "Check product size, packed size, weight, assembly method and whether the item can be separated for delivery.",
      },
      {
        title: "Check access route",
        text:
          "Measure lift, corridor, staircase, main door and service lift restrictions before buying bulky furniture.",
      },
      {
        title: "Verify plumbing compatibility",
        text:
          "Ask your plumber about thread size, connector type, water pressure and whether PUB WELS information is relevant.",
      },
      {
        title: "Verify electrical safety",
        text:
          "Check voltage, frequency, plug type, SAFETY Mark requirement, local warranty and repair support.",
      },
      {
        title: "Plan shipping protection",
        text:
          "Use wooden crating for fragile ceramic, glass, stone, mirror or vanity items where possible.",
      },
      {
        title: "Coordinate delivery timing",
        text:
          "Avoid sending bulky items to the home before dusty works, painting and major installation works are completed.",
      },
    ],
    internalLinksTitle: "Related renovation planning guides",
    internalLinks: [
      {
        title: "Renovation Cost Singapore 2026",
        text:
          "Understand how overseas purchases can affect your total renovation budget and contingency planning.",
        href: "/insights/renovation-cost-singapore-2026",
      },
      {
        title: "HDB Renovation Timeline Singapore",
        text:
          "See how late deliveries, damaged tiles and missing fittings can delay the renovation sequence.",
        href: "/insights/hdb-renovation-timeline-singapore",
      },
      {
        title: "Biggest Renovation Mistakes Singapore Homeowners Make",
        text:
          "Compare this overseas-shopping checklist with other common renovation planning mistakes.",
        href: "/insights/renovation-mistakes-singapore",
      },
      {
        title: "Renovation Cost Calculator",
        text:
          "Use the calculator to plan your main renovation budget before adding overseas-purchase risk buffers.",
        href: "/renovation-cost-calculator",
      },
    ],
    faqTitle: "FAQ: buying renovation items overseas",
    faqs: [
      {
        question: "Is it worth buying renovation items from Taobao or overseas platforms?",
        answer:
          "It can be worth it for selected loose furniture and decorative items, but high-risk items such as tiles, concealed plumbing fittings, electrical appliances and oversized furniture should be checked carefully before ordering.",
      },
      {
        question: "Can US or Japan appliances be used in Singapore?",
        answer:
          "Not always. Singapore commonly uses 230V at 50Hz, while many US appliances use around 110V to 120V and Japan commonly uses 100V. A plug adapter does not solve voltage incompatibility. Check the appliance label and local safety requirements first.",
      },
      {
        question: "Do imported electrical appliances need a Singapore SAFETY Mark?",
        answer:
          "Certain controlled goods sold in Singapore require a valid SAFETY Mark. Homeowners should check whether the appliance category is regulated and avoid assuming that overseas certification is the same as Singapore compliance.",
      },
      {
        question: "Will home insurance cover a fire caused by an imported appliance?",
        answer:
          "Insurance terms vary. In a fire investigation, insurers may look at whether a non-compliant, unsuitable or wrongly installed appliance contributed to the incident. Homeowners should check their policy and avoid using appliances that do not suit Singapore electrical conditions.",
      },
      {
        question: "Why do overseas taps or rain shower sets sometimes not fit in Singapore?",
        answer:
          "Fitting size, thread type, connector design, water pressure and installation depth can differ. For concealed fittings, the risk is higher because rectification may require hacking after tiles are installed.",
      },
      {
        question: "What is WELS and why does it matter for taps and flushing products?",
        answer:
          "WELS is Singapore’s Water Efficiency Labelling Scheme. It uses tick ratings to show water efficiency for covered products such as taps, mixers and flushing fittings. Homeowners should check whether imported water fittings are suitable for Singapore requirements.",
      },
      {
        question: "Should I buy tiles from China for my Singapore renovation?",
        answer:
          "It is possible, but risky. You must plan quantity, wastage, shipping damage, batch variation and replacement timeline carefully. If you buy too few or receive damaged tiles, tiling work may be delayed.",
      },
      {
        question: "How many extra tiles should I order?",
        answer:
          "The exact allowance depends on tile size, layout, cutting pattern and site condition. Homeowners should ask the tiler or contractor before ordering. Buying too little may delay the job, while buying too much creates waste and storage problems.",
      },
      {
        question: "Should bulky furniture arrive before renovation is completed?",
        answer:
          "Usually no. Bulky furniture can block workers, collect dust or get damaged during painting, carpentry or electrical work. It is better to use warehouse holding and deliver after major works are completed.",
      },
      {
        question: "What renovation items should I not rush to buy?",
        answer:
          "Do not rush cushions, lamps, rugs, display items and other soft decoration. These can be added after moving in, when you understand your lifestyle, lighting habits and storage needs better.",
      },
      {
        question: "What should I ask my contractor before buying overseas?",
        answer:
          "Ask whether the item fits the design, whether it affects plumbing or electrical works, whether it can be installed safely, whether delivery timing suits the schedule and whether spare parts or replacements are available locally.",
      },
    ],
    ctaTitle: "Planning to mix local renovation works with overseas purchases?",
    ctaText:
      "ID Work Studio helps Singapore homeowners plan renovation sequencing, site measurements, material decisions and installation risks before costly items are ordered.",
    ctaPrimary: "Get Renovation Advice",
    ctaSecondary: "View Residential Services",
    breadcrumbCurrent: "Buying Renovation Items Overseas",
  },
  zh: {
    metaTitle:
      "从海外购买装修用品：新加坡屋主常犯错误 | ID Work Studio",
    metaDescription:
      "在 Taobao、Amazon 或海外平台购买家具、水龙头、瓷砖、灯具和电器前，了解新加坡装修常见风险：尺寸、电压、Safety Mark、WELS、水电安装、运输、保修与工期延误。",
    canonical:
      "https://idworkstudio.com/insights/buying-renovation-items-overseas-singapore",
    eyebrow: "新加坡装修规划指南",
    title: "从海外购买装修用品？新加坡屋主下单前必须先检查这些事项",
    subtitle:
      "从 Taobao、Amazon 或海外供应商购买装修用品可能省钱，但如果家具尺寸不对、水件不兼容、电器电压不符或瓷砖延误，反而会影响装修进度和后期维修。",
    readTime: "约10分钟阅读",
    category: "装修规划",
    heroAlt:
      "新加坡装修现场正在检查从海外购买的家具、瓷砖、卫浴配件和电器",
    quickAnswerTitle: "快速答案",
    quickAnswer:
      "可以从海外购买部分装修用品，但大型家具、水件、电器、瓷砖和易碎卫浴产品风险较高。下单前应确认电梯和搬运尺寸、实际测量、新加坡电压、SAFETY Mark、PUB WELS 节水标签、保修、零件、运输保护和送货时间是否配合装修进度。",
    riskCards: [
      {
        label: "家具",
        value: "尺寸与搬运风险",
        note:
          "沙发或餐桌在网上看起来合适，但可能进不了 HDB 电梯、公寓货梯、楼梯转角，或放进客厅后比例不对。",
      },
      {
        label: "龙头与花洒",
        value: "接头与 WELS 风险",
        note:
          "进口龙头、混水器、雨淋花洒可能不适合本地水管接头、水压要求，或没有新加坡节水标签资料。",
      },
      {
        label: "电器",
        value: "电压与 SAFETY Mark 风险",
        note:
          "美国和日本电器电压可能与新加坡不同，而部分在新加坡销售的受管制电器需要有效的 SAFETY Mark。",
      },
      {
        label: "瓷砖与易碎品",
        value: "延误与破损风险",
        note:
          "瓷砖、陶瓷盆、浴室柜或易碎台面如破损或数量不足，可能直接影响泥水、水电、木工和交屋时间。",
      },
    ],
    introTitle: "为什么这对新加坡装修很重要",
    introParagraphs: [
      "海外购物不一定不好。很多屋主选择 Taobao、Amazon US、中国供应商或海外平台，是因为款式更多，价格在未计算运输前也比较吸引。",
      "真正的问题是，装修用品不是普通网购。一旦水电、泥水、木工或安装进度依赖某个产品，尺寸错误或规格不兼容就会影响整个装修流程。",
      "对 BTO、转售 HDB、公寓或有地住宅来说，重点不是完全避免海外购买，而是分清楚哪些可以买，哪些必须先让设计师、承包商、水电师傅确认。",
    ],
    sections: [
      {
        title: "1. 家具：网上照片看不出是否真的适合你家",
        kicker: "大型家具尺寸错误，是海外购买最常见的问题之一。",
        paragraphs: [
          "沙发、床架、餐桌或长电视柜在照片里可能很好看，但海外卖场的照片常常是在较大的空间拍摄。放到 4-room HDB 或紧凑型公寓客厅时，比例可能完全不同。",
          "更大的问题是搬运路线。不能只看长、宽、高，也要看电梯深度、电梯门宽、走廊宽度、楼梯转角、入户门净宽，以及公寓是否需要预订货梯。",
        ],
        bullets: [
          "确认包装后的纸箱尺寸，不只看组装后的尺寸。",
          "测量电梯深度、电梯门宽、大门宽度和走廊转角空间。",
          "L 型沙发和大理石餐桌，要确认是否可以拆分搬运。",
          "下单前在平面图上标出家具占地，特别是走道和餐椅拉出的空间。",
        ],
        highlight:
          "如果沙发进不了电梯，楼梯搬运、退货或处理费用可能远高于一开始省下的钱。",
      },
      {
        title: "2. 品质落差：海外购买更难处理“货不对版”",
        paragraphs: [
          "松散家具和配饰的风险不只是破损，也包括实物与照片不同。颜色可能有偏差，布料可能较薄，沙发海绵可能太软，木材可能只是贴皮而不是实木。",
          "如果只是小摆设，影响还可以接受。但如果是沙发、餐桌、浴室柜或设计核心单品，而装修方案已经围绕它来规划，问题就会变得麻烦。",
        ],
        bullets: [
          "要求卖家提供真实买家照片，不只看目录图。",
          "查看材料厚度、封边、五金和细节近照。",
          "不要只依赖翻译后的产品描述判断材料品质。",
          "高价单品下单前，先让设计师或承包商判断比例和材质是否合理。",
        ],
      },
      {
        title: "3. 水件：龙头和雨淋花洒未必适合新加坡安装",
        kicker: "外观漂亮没有用，能否安全安装和长期维修更重要。",
        paragraphs: [
          "进口龙头、混水器、雨淋花洒和暗藏式花洒系统，可能因为牙纹尺寸、接头方式或安装深度不适合新加坡现场而产生问题。有些美国产品的规格习惯不同，有些海外产品即使用转接头，也可能影响美观和后期维修。",
          "新加坡也有节水要求。PUB 的 Mandatory Water Efficiency Labelling Scheme 会用 0、1、2、3 tick 来标示相关产品的节水效率。龙头、混水器、冲水水箱和部分水件在新加坡销售和安装前，可能需要符合本地标签和合规要求。",
        ],
        bullets: [
          "确认龙头、混水器或冲水产品是否有新加坡 PUB WELS 资料。",
          "购买暗藏式混水器或墙出水件前，先让水喉师傅确认。",
          "不要假设转接头可以漂亮地解决所有接管问题。",
          "暗藏式花洒如果主体深度不对，后期可能需要敲墙或重贴瓷砖。",
        ],
        highlight:
          "外露配件不兼容只是麻烦；暗藏水件不兼容，可能在瓷砖完成后变成敲墙问题。",
      },
      {
        title: "4. 电器：电压、频率和 SAFETY Mark 必须先检查",
        paragraphs: [
          "新加坡住宅常用电压为 230V、50Hz。美国许多电器约为 110V 至 120V，日本常见为 100V。插头转换器只改变插头形状，并不代表电压已经适合。",
          "在新加坡销售的某些家用电器和燃气产品属于受管制产品，SAFETY Mark 是本地消费品安全制度的一部分。受管制产品在新加坡销售前，需要经过指定安全标准测试并贴上 SAFETY Mark。",
          "屋主要特别注意烤箱、炉具、电炉、热水器、智能马桶、酒柜、咖啡机、设计灯具和带马达的电器。如果进口产品没有本地支持，维修师傅可能没有零件，也可能不愿意维修。",
        ],
        bullets: [
          "购买前查看产品标签上的输入电压和频率。",
          "不要假设长期使用升压或降压变压器一定理想。",
          "受管制产品应确认是否需要有效的新加坡 SAFETY Mark。",
          "确认新加坡是否有保修、维修和零件供应。",
        ],
        highlight:
          "如果发生电器火灾，保险公司可能会调查不合规或不适合本地使用的电器是否造成事故。不同保险条款处理方式不一定一样，屋主不应自行假设。",
      },
      {
        title: "5. 保修与维修：省下的钱可能在后期消失",
        paragraphs: [
          "进口电器、水龙头或智能马桶的前期价格可能较低，但真正差别常常出现在保修和维修。一些卖家只在购买国家提供保修，有些要求寄回原产地，有些几年后已经无法提供零件。",
          "如果产品已经安装进装修里，问题会更麻烦。坏掉的龙头、暗藏混水器、智能马桶、抽油烟机或嵌入式电器，不一定能轻易拆除，而且可能影响周边木工、瓷砖或水电。",
        ],
        bullets: [
          "下单前确认保修是否适用于新加坡。",
          "确认品牌是否有本地维修中心或零件供应。",
          "保留发票、型号和安装说明书。",
          "难以拆除的产品，不建议选择无名或无本地支持的品牌。",
        ],
      },
      {
        title: "6. 运输破损：易碎品需要更好的保护",
        paragraphs: [
          "浴室柜、陶瓷盆、镜柜、岩板台面、大理石餐桌、玻璃灯和瓷砖，在国际运输中都可能受损。即使卖家愿意赔偿，时间损失仍然会影响装修进度。",
          "对于易碎或高价产品，通常建议考虑木架包装。虽然成本较高，但能降低运输中裂纹、崩角或压坏的风险。",
        ],
        bullets: [
          "陶瓷、玻璃、石材、镜子和浴室柜尽量使用木架包装。",
          "确认运输保险是否涵盖明显破损和隐藏破损。",
          "货到仓库或家里后尽快检查。",
          "如包装外观已有损坏，开箱前先拍照留证。",
        ],
        highlight:
          "一个破掉的陶瓷盆不只是退款问题，它可能影响水电安装、台面测量和最终交屋时间。",
      },
      {
        title: "7. 送货时间：大型物品不应太早送到工地",
        paragraphs: [
          "很多屋主因为担心海运延误，所以很早下单。这可以理解，但太早送到也会产生另一个问题。如果屋子还在装修，大型家具和易碎物品会阻碍现场施工。",
          "泥水、木工、油漆、电工和清洁都需要空间。沙发、餐桌或浴室柜太早放在屋内，可能会被刮花、沾满灰尘或被意外碰坏。",
        ],
        bullets: [
          "选择可以暂存货物的转运仓或仓库。",
          "尽量安排在大灰尘工程、油漆和主要安装完成后送货。",
          "除非有妥善保护，否则不要在最后清洁前送入松散家具。",
          "公寓或 MCST 如需预订货梯，应提前安排送货时段。",
        ],
      },
      {
        title: "8. 软装：不要急着在入住前一次买齐",
        kicker: "一个家的美感，可以慢慢长出来。",
        paragraphs: [
          "很多屋主希望交屋当天家里就像样板房一样完整，所以在入住前一次买了很多抱枕、灯、地毯、边几、摆设和墙面装饰。",
          "更实际的做法是先入住，了解自己的生活习惯后再慢慢补齐。住几个星期后，你会更清楚哪里真的需要灯、哪个角落空、沙发是否需要抱枕，以及展示收纳到底需要多少。",
        ],
        bullets: [
          "抱枕、灯、地毯和摆设可以后期慢慢添加，不影响装修品质。",
          "不要为了让家一开始看起来完整，就一次过买太多装饰。",
          "先住进去，再根据实际生活决定最后的软装层次。",
          "优先把预算放在永久性项目：布局、电位、灯光、木工和防水。",
        ],
        highlight:
          "好的家不一定要第一天就完全布置好。跟着家人的真实生活慢慢调整，反而更有温度。",
      },
    ],
    tileTitle: "特别提醒：从海外购买瓷砖风险较高",
    tileIntro:
      "瓷砖是最不建议随便进口的装修材料之一，因为它会影响施工顺序、数量预估、色差和破损备用。",
    tileCards: [
      {
        title: "买太多",
        text:
          "你会多付瓷砖、运输和仓储成本。大规格瓷砖在装修后也不容易安全存放。",
      },
      {
        title: "买太少",
        text:
          "补货会拖慢泥水工程，之后木工、门、淋浴屏和洁具安装也可能跟着延迟。",
      },
      {
        title: "批次不同",
        text:
          "后补的瓷砖可能与原批次有轻微色差或纹理差异，特别是在大面积地面或特色墙上会更明显。",
      },
      {
        title: "运输破损",
        text:
          "崩角、裂砖或备用数量不足都会停工。国际索赔时间往往比装修工期更难控制。",
      },
    ],
    safeBuyTitle: "哪些较适合海外买？哪些要特别小心？",
    safeBuyIntro:
      "越固定、越技术性、越易碎、越影响工期的项目，越需要在海外购买前仔细确认。",
    saferItems: [
      "松散抱枕和装饰物",
      "不影响施工的展示配件",
      "容易替换的小边几",
      "确认尺寸后的地毯和软装",
      "已确认电压和安装方式的简单装饰灯",
    ],
    riskyItems: [
      "瓷砖和石材",
      "暗藏式花洒混水器和嵌入式水件",
      "热水器、烤箱、炉具等受管制电器",
      "超大沙发、餐桌和床架",
      "带陶瓷盆或易碎台面的浴室柜",
    ],
    checklistTitle: "海外下单前检查清单",
    checklistIntro:
      "在付款或确认海运前，先用这份清单检查，可以避免很多昂贵错误。",
    checklist: [
      {
        title: "确认实际尺寸",
        text:
          "确认产品尺寸、包装尺寸、重量、组装方式，以及是否可以拆分搬运。",
      },
      {
        title: "检查搬运路线",
        text:
          "购买大型家具前，测量电梯、走廊、楼梯、大门和公寓货梯限制。",
      },
      {
        title: "确认水件兼容",
        text:
          "向水喉师傅确认牙纹、接头、水压，以及是否需要考虑 PUB WELS 资料。",
      },
      {
        title: "确认电器安全",
        text:
          "检查电压、频率、插头、SAFETY Mark 要求、本地保修和维修支持。",
      },
      {
        title: "规划运输保护",
        text:
          "陶瓷、玻璃、石材、镜子和浴室柜等易碎品，尽量考虑木架包装。",
      },
      {
        title: "安排合适送货时间",
        text:
          "避免在灰尘工程、油漆和主要安装未完成前，把大型物品送到家里。",
      },
    ],
    internalLinksTitle: "相关装修规划文章",
    internalLinks: [
      {
        title: "新加坡装修费用 2026",
        text:
          "了解海外购买项目如何影响整体装修预算和备用金规划。",
        href: "/insights/renovation-cost-singapore-2026",
      },
      {
        title: "HDB 装修时间表",
        text:
          "了解迟到的材料、破损瓷砖和缺少水件如何影响装修顺序。",
        href: "/insights/hdb-renovation-timeline-singapore",
      },
      {
        title: "新加坡屋主常见装修错误",
        text:
          "把海外购物清单与其他常见装修规划错误一起检查。",
        href: "/insights/renovation-mistakes-singapore",
      },
      {
        title: "装修费用计算器",
        text:
          "先规划主要装修预算，再为海外购买风险预留缓冲。",
        href: "/renovation-cost-calculator",
      },
    ],
    faqTitle: "常见问题：从海外购买装修用品",
    faqs: [
      {
        question: "从 Taobao 或海外平台买装修用品值得吗？",
        answer:
          "部分松散家具和装饰品可以考虑，但瓷砖、暗藏水件、电器和大型家具风险较高，下单前必须确认尺寸、规格、安装和保修。",
      },
      {
        question: "美国或日本电器可以在新加坡使用吗？",
        answer:
          "不一定。新加坡常用 230V、50Hz，美国许多电器约 110V 至 120V，日本常见 100V。插头转换器不能解决电压不兼容问题。",
      },
      {
        question: "进口电器需要新加坡 SAFETY Mark 吗？",
        answer:
          "某些在新加坡销售的受管制产品需要有效 SAFETY Mark。屋主应先确认产品类别是否受管制，不要假设海外认证等同新加坡合规。",
      },
      {
        question: "如果进口电器引发火灾，保险会赔吗？",
        answer:
          "保险条款因保单而异。如发生火灾调查，保险公司可能会关注不合规、不适合本地使用或安装不当的电器是否造成事故。建议屋主先查看保单并避免使用不适合新加坡电压的产品。",
      },
      {
        question: "为什么海外龙头或雨淋花洒有时装不上？",
        answer:
          "牙纹尺寸、接头设计、水压要求和安装深度可能不同。暗藏式水件风险更高，因为后期修改可能需要敲墙和重贴瓷砖。",
      },
      {
        question: "WELS 是什么？为什么和龙头有关？",
        answer:
          "WELS 是新加坡节水标签制度，用 tick rating 标示相关水件的节水效率，例如龙头、混水器和冲水配件。进口水件应确认是否适合新加坡要求。",
      },
      {
        question: "可以从中国购买瓷砖做新加坡装修吗？",
        answer:
          "可以，但风险较高。必须规划数量、损耗、破损、批次色差和补货时间。若数量不足或破损，泥水工程可能延误。",
      },
      {
        question: "瓷砖应该多买多少？",
        answer:
          "具体备用量取决于瓷砖尺寸、铺法、切割、图案和现场情况。应先问泥水师傅或承包商。买太少会延误，买太多会浪费和占空间。",
      },
      {
        question: "大型家具可以在装修完成前送到家里吗？",
        answer:
          "通常不建议。大型家具会阻碍施工、积灰或被刮花。最好等主要工程完成后，再从仓库安排送货。",
      },
      {
        question: "哪些装修物品不应该太早买？",
        answer:
          "抱枕、灯、地毯、摆设和软装不需要太早买。这些可以入住后，根据真实生活习惯慢慢添加。",
      },
      {
        question: "下单前应该问承包商什么？",
        answer:
          "应询问产品是否适合设计、是否影响水电安装、是否能安全安装、送货时间是否配合工期，以及新加坡是否有维修和替换零件。",
      },
    ],
    ctaTitle: "准备把本地装修和海外采购结合起来？",
    ctaText:
      "ID Work Studio 协助新加坡屋主在下单前规划装修顺序、现场尺寸、材料选择和安装风险，减少不必要的延误和损失。",
    ctaPrimary: "咨询装修建议",
    ctaSecondary: "查看住宅装修服务",
    breadcrumbCurrent: "从海外购买装修用品",
  },
};

const heroImage = "/insights/overseas-renovation-shopping-singapore-hero.webp";

export default function OverseasRenovationShoppingMistakes() {
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
    mainEntityOfPage: t.canonical,
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
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(faqSchema),
  }}
/>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <main className="bg-[#FAF8F3] text-[#2C2C2C]">
        <section className="relative overflow-hidden bg-[#111] px-6 py-20 text-white md:py-28">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt={t.heroAlt}
              className="h-full w-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#111]/80 via-[#111]/72 to-[#111]" />
          </div>
          <div className="relative mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <p className="mb-5 inline-flex rounded-full border border-[#C5A059]/40 bg-[#C5A059]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#D6B26B]">
                {t.eyebrow}
              </p>
              <h1 className="font-serif text-4xl font-semibold leading-tight md:text-6xl">
                {t.title}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
                {t.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.16em] text-white/55">
                <span>{t.category}</span>
                <span>•</span>
                <span>{t.readTime}</span>
              </div>
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
          <section className="mb-12 rounded-3xl border border-[#e8e1d7] bg-white p-6 shadow-sm md:p-8">
            <h2 className="font-serif text-3xl font-semibold">{t.quickAnswerTitle}</h2>
            <p className="mt-4 text-base leading-8 text-[#5f5a54]">{t.quickAnswer}</p>
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {t.riskCards.map((card) => (
                <div
                  key={card.label}
                  className="rounded-2xl border border-[#e8e1d7] bg-[#fffdf8] p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C5A059]">
                    {card.label}
                  </p>
                  <p className="mt-2 text-xl font-bold text-[#2C2C2C]">{card.value}</p>
                  <p className="mt-2 text-sm leading-6 text-[#6f6a63]">{card.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14 rounded-3xl bg-[#151515] p-7 text-white md:p-9">
            <h2 className="font-serif text-3xl font-semibold">{t.introTitle}</h2>
            <div className="mt-5 space-y-4">
              {t.introParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-white/70">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {t.sections.map((section) => (
            <section key={section.title} className="mb-14">
              <div className="rounded-3xl border border-[#e8e1d7] bg-white p-6 shadow-sm md:p-8">
                {section.kicker && (
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#C5A059]">
                    {section.kicker}
                  </p>
                )}
                <h2 className="font-serif text-3xl font-semibold leading-tight">
                  {section.title}
                </h2>
                <div className="mt-6 space-y-4">
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-[#5f5a54]">
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="grid gap-3 md:grid-cols-2">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-3 rounded-2xl bg-[#FAF8F3] p-4 text-sm leading-7 text-[#5f5a54]"
                        >
                          <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#C5A059]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.highlight && (
                    <div className="rounded-2xl border border-[#C5A059]/30 bg-[#C5A059]/10 p-5 text-sm font-medium leading-7 text-[#5f5138]">
                      {section.highlight}
                    </div>
                  )}
                </div>
              </div>
            </section>
          ))}

          <section className="mb-14 rounded-3xl border border-[#C5A059]/30 bg-[#fff9eb] p-6 shadow-sm md:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#C5A059]">
              {lang === "zh" ? "高风险材料" : "High-risk material"}
            </p>
            <h2 className="font-serif text-3xl font-semibold">{t.tileTitle}</h2>
            <p className="mt-4 text-base leading-8 text-[#5f5a54]">{t.tileIntro}</p>
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {t.tileCards.map((item) => (
                <div key={item.title} className="rounded-2xl bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#5f5a54]">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="border-b border-[#e8e1d7] pb-4 font-serif text-3xl font-semibold">
              {t.safeBuyTitle}
            </h2>
            <p className="mt-5 text-base leading-8 text-[#5f5a54]">{t.safeBuyIntro}</p>
            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl border border-[#e8e1d7] bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">
                  {lang === "zh" ? "相对适合海外购买" : "Generally safer to buy overseas"}
                </h3>
                <ul className="mt-4 space-y-3">
                  {t.saferItems.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-7 text-[#5f5a54]">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#C5A059]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-[#e8e1d7] bg-[#151515] p-6 text-white shadow-sm">
                <h3 className="text-lg font-semibold">
                  {lang === "zh" ? "需要特别小心" : "Needs extra caution"}
                </h3>
                <ul className="mt-4 space-y-3">
                  {t.riskyItems.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-7 text-white/70">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#C5A059]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-14 rounded-3xl border border-[#e8e1d7] bg-white p-6 shadow-sm md:p-8">
            <h2 className="font-serif text-3xl font-semibold">{t.checklistTitle}</h2>
            <p className="mt-4 text-base leading-8 text-[#5f5a54]">{t.checklistIntro}</p>
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {t.checklist.map((item, index) => (
                <div key={item.title} className="grid grid-cols-[42px_1fr] gap-4 rounded-2xl bg-[#FAF8F3] p-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C5A059] text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-7 text-[#5f5a54]">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="border-b border-[#e8e1d7] pb-4 font-serif text-3xl font-semibold">
              {t.internalLinksTitle}
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {t.internalLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="rounded-2xl border border-[#e8e1d7] bg-white p-5 shadow-sm transition hover:border-[#C5A059] hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold text-[#2C2C2C]">{link.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#5f5a54]">{link.text}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="border-b border-[#e8e1d7] pb-4 font-serif text-3xl font-semibold">
              {t.faqTitle}
            </h2>
            <div className="mt-6 space-y-3">
              {t.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-2xl border border-[#e8e1d7] bg-[#fffdf8] p-5"
                >
                  <summary className="cursor-pointer text-base font-semibold">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-[#5f5a54]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="rounded-3xl bg-[#151515] p-7 text-white md:p-9">
            <h2 className="font-serif text-3xl font-semibold">{t.ctaTitle}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">{t.ctaText}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-full bg-[#C5A059] px-6 py-3 text-sm font-semibold text-white hover:bg-[#D6B26B]"
              >
                {t.ctaPrimary}
              </Link>
              <Link
                to="/residential"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-[#C5A059] hover:text-[#C5A059]"
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
