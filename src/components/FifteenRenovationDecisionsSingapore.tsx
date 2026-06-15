import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

type Decision = {
  number: string;
  title: string;
  usual: string;
  reality: string;
  singapore: string;
  budget: string;
  change: string;
  choose: string[];
  avoid: string[];
  recommendation: string;
};

type FaqItem = { question: string; answer: string };

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
  regretTitle: string;
  regretIntro: string;
  regrets: string[];
  summaryTitle: string;
  summaryRows: { decision: string; bestFor: string; regret: string }[];
  decisions: Decision[];
  hardTitle: string;
  hardRows: { item: string; difficulty: string; note: string }[];
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

const heroImage = "/insights/15-renovation-decisions-singapore-hero.webp";

const content: Record<"en" | "zh", ArticleContent> = {
  en: {
    metaTitle: "15 Renovation Decisions Singapore Homeowners Should Not Get Wrong | ID Work Studio",
    metaDescription: "A practical Singapore renovation guide covering 15 decisions HDB, BTO, resale HDB and condo homeowners should make carefully before renovation to avoid regret after moving in.",
    canonical: "https://idworkstudio.com/insights/15-renovation-decisions-singapore-homeowners-should-not-get-wrong",
    eyebrow: "Singapore Home Renovation Guide",
    title: "15 Renovation Decisions Singapore Homeowners Should Not Get Wrong",
    subtitle: "The most expensive renovation regret is not always a defect or a bad finish. It is often a lifestyle decision that looked good during design stage, but became inconvenient after the family moved in.",
    readTime: "16 min read",
    category: "Home Planning Guide",
    heroImageAlt: "Warm Singapore HDB living room renovation with premium interior design details",
    quickAnswerTitle: "Quick answer",
    quickAnswer: "Singapore homeowners should decide renovation choices based on how they cook, host, clean, work, store items and live every day — not only on showroom looks. The choices that deserve the most attention are power points, kitchen layout, flooring, storage, built-in carpentry, countertop material, kitchen ventilation and whether certain features can be added later without hacking or visible trunking.",
    regretTitle: "The 5 renovation regrets we hear most often after moving in",
    regretIntro: "Many regrets only appear after the home is lived in for a few months. These are the ones that tend to affect daily comfort the most.",
    regrets: [
      "Not enough power points where daily appliances, chargers and work-from-home setups are actually used.",
      "Too little storage, or storage planned in the wrong places.",
      "Kitchen smells spreading into the living area after choosing an open kitchen without realistic ventilation planning.",
      "A dining table, island or feature wall that looked good in design renders but is rarely used.",
      "Spending heavily on visual features before solving flooring, lighting, wall colour, furniture and maintenance needs."
    ],
    summaryTitle: "Quick decision matrix",
    summaryRows: [
      { decision: "Interior designer vs contractor", bestFor: "Coordination clarity", regret: "Communication gaps between trades" },
      { decision: "Vinyl vs tiles", bestFor: "Daily comfort", regret: "Wrong underfoot feel or heat exposure issues" },
      { decision: "Quartz vs sintered stone", bestFor: "Kitchen worktop planning", regret: "Paying for material while ignoring fabrication quality" },
      { decision: "Open vs closed kitchen", bestFor: "Cooking and hosting habits", regret: "Smell control problems" },
      { decision: "Built-in vs loose furniture", bestFor: "Storage and flexibility", regret: "Too much fixed carpentry or unsafe tall loose cabinets" },
      { decision: "Extra power points", bestFor: "Future lifestyle", regret: "Visible trunking or extension cords later" }
    ],
    decisions: [
      {
        number: "01",
        title: "Interior Designer vs Contractor",
        usual: "Many homeowners compare this as design versus price, assuming a contractor is cheaper and an interior designer only provides drawings.",
        reality: "The bigger difference is coordination. A contractor usually does the scope you ask for, while an ID coordinates space planning, drawings, site sequence, suppliers and multiple trades.",
        singapore: "For HDB projects, homeowners are still responsible for ensuring renovation works follow HDB guidelines and permitted contractor requirements. When false ceilings, electrical points, carpentry, aircon piping and plumbing overlap, coordination becomes a real project-management issue.",
        budget: "Medium to High",
        change: "✅ Hard to fix once work starts",
        choose: ["You need design direction, project management and supplier coordination.", "Your project involves several trades such as electrician, carpenter, plumber, aircon contractor, glass contractor and painter."],
        avoid: ["You already know exactly what you want and can coordinate trades yourself.", "You expect the lowest possible execution cost and are comfortable managing site details."],
        recommendation: "You are not only paying an ID for drawings. You are paying for fewer communication gaps, better sequencing and someone to think through the renovation as a whole."
      },
      {
        number: "02",
        title: "Vinyl Flooring vs Tiles",
        usual: "Most people compare only cost, durability and appearance.",
        reality: "The daily difference is comfort. Tiles feel cooler, harder and more solid. Vinyl feels warmer, softer and quieter under bare feet.",
        singapore: "In sunny HDB or condo units with strong afternoon sun, vinyl quality, installation and expansion allowance matter. Vinyl does not automatically fail, but heat and direct sunlight can contribute to movement, gaps, peaking or edge curl if the system is poorly installed.",
        budget: "Medium to High",
        change: "✅ Hard to change later",
        choose: ["Choose tiles if you want a cooler, more durable and heat-resistant floor.", "Choose vinyl if barefoot comfort, softer walking and quieter flooring matter more."],
        avoid: ["Avoid vinyl in harsh sun areas if product quality and installation details are uncertain.", "Avoid tiles if your family dislikes cold, hard flooring underfoot."],
        recommendation: "Do not choose flooring from a sample board alone. Imagine stepping on it every morning, cleaning it weekly and living with it for years."
      },
      {
        number: "03",
        title: "Quartz vs Sintered Stone",
        usual: "Marketing often makes sintered stone sound automatically superior and quartz sound basic.",
        reality: "For many Singapore homes, the practical difference is less dramatic than homeowners expect. The bigger risk is poor measurement, fabrication, support, edge detail and installation.",
        singapore: "Quartz is practical and usually more affordable. Sintered stone can give a premium look with stronger heat and UV resistance, but it is harder to fabricate and can chip at edges if workmanship is poor.",
        budget: "Medium to High",
        change: "⚠ Partially hard to change later",
        choose: ["Choose quartz for a practical, budget-conscious kitchen with many colour options.", "Choose sintered stone if the look, heat resistance and premium finish justify the cost."],
        avoid: ["Avoid choosing only by brand name without checking edge details and fabrication quality.", "Avoid very thin or poorly supported worktops in heavy-use kitchens."],
        recommendation: "A well-fabricated quartz top can serve better than a poorly fabricated premium material. Installation quality matters as much as the surface name."
      },
      {
        number: "04",
        title: "Open Kitchen vs Closed Kitchen",
        usual: "Open kitchens look brighter and bigger in showflats, so many young couples assume open is the modern choice.",
        reality: "After moving in, cooking smell, heat, noise and cleaning habits become more important than the showflat feeling.",
        singapore: "In HDB living, smells may also enter through windows, service yards or airflow from neighbouring units. Sliding or folding glass doors help reduce smell transfer, but they are not airtight because panel overlaps and track gaps remain.",
        budget: "Medium to High",
        change: "✅ Hard to change later",
        choose: ["Choose open kitchen if you cook lightly, host casually and want a brighter social space.", "Choose closed kitchen if you do frequent Asian cooking, frying or strong-smell cooking."],
        avoid: ["Avoid relying on sliding doors as a complete smell-control solution.", "Avoid a closed kitchen that feels dark, hot and isolated without ventilation and lighting planning."],
        recommendation: "Open kitchen is a lifestyle decision, not just a design decision. Be honest about cooking frequency before choosing."
      },
      {
        number: "05",
        title: "Built-In Carpentry vs Loose Furniture",
        usual: "Many homeowners assume built-in carpentry is always more premium.",
        reality: "Built-in is excellent where exact fit, safety and vertical storage matter, but it reduces flexibility and costs more.",
        singapore: "Full-height wardrobes, kitchen cabinets, shoe cabinets and tall storage often benefit from built-in planning. Loose sideboards, shelves and low furniture are easier to move, replace and upgrade later. Tall loose cabinets should be anchored properly, especially around children.",
        budget: "High",
        change: "⚠ Depends on item",
        choose: ["Use built-in for high storage, awkward corners and areas where exact fit matters.", "Use loose furniture when budget flexibility and future changes matter."],
        avoid: ["Avoid fixing too much carpentry before your lifestyle is clear.", "Avoid tall unsecured loose cabinets in homes with children."],
        recommendation: "Built-in is not automatically better. Use it where it solves space, safety or storage problems that loose furniture cannot solve well."
      },
      {
        number: "06",
        title: "Gas Hob vs Induction",
        usual: "Some homeowners think induction is better simply because it looks modern.",
        reality: "Gas gives cooking feel and flame control. Induction gives cleaning convenience, less surrounding heat and a sleeker surface.",
        singapore: "Smaller BTO kitchens can feel hot quickly. Induction suits light to medium cooking and easier cleaning, while gas remains preferred by many who cook heavily or use wok-style techniques.",
        budget: "Low to Medium",
        change: "⚠ Partially hard to change later",
        choose: ["Choose gas if you cook often and want flame control for wok-style cooking.", "Choose induction if you value easy cleaning, safety and lower surrounding heat."],
        avoid: ["Avoid induction if you strongly prefer traditional fire cooking and do not want cookware restrictions.", "Avoid gas if cleaning grease and heat discomfort bother you."],
        recommendation: "Gas gives cooking feel. Induction gives convenience. The right choice depends on the person cooking, not the showroom trend."
      },
      {
        number: "07",
        title: "Ceiling Fan vs Aircon",
        usual: "People often frame this as fan versus aircon.",
        reality: "In Singapore, most homes still need aircon for real cooling. A ceiling fan supports airflow, reduces stuffiness and can help distribute cool air.",
        singapore: "Bedrooms usually need aircon. Living room aircon is strongly worth considering if you host guests, because a crowded living room can feel warm even with a fan.",
        budget: "Medium",
        change: "⚠ Partially hard to change later",
        choose: ["Install aircon where real cooling is needed.", "Add ceiling fans where airflow, comfort and lower aircon temperature settings matter."],
        avoid: ["Avoid treating a fan as a full aircon replacement for Singapore weather.", "Avoid fan placement that clashes with lights, wardrobes, cabinet doors or bunk beds."],
        recommendation: "Think aircon first, fan as support. Comfort comes from cooling plus airflow, not one item alone."
      },
      {
        number: "08",
        title: "Feature Wall vs No Feature Wall",
        usual: "A feature wall feels like the item that completes the living room.",
        reality: "Flooring, wall colour, lighting, furniture and material palette usually affect the home’s overall feel more than a feature wall.",
        singapore: "A feature wall can often be added later. But if you may want LED strips, wall wash lighting or concealed wiring, plan the electrical points and switches during renovation to avoid hacking, trunking or surface wiring later.",
        budget: "Low to Medium",
        change: "❌ Usually easier to add later",
        choose: ["Choose it now if the wall requires concealed wiring, lighting or integrated carpentry.", "Delay it if budget is tight and the home can still look complete through paint, lighting and furniture."],
        avoid: ["Avoid spending on a feature wall before solving flooring, lighting and furniture proportions.", "Avoid highly trendy designs that may date quickly."],
        recommendation: "Feature wall is optional. Lighting provision is not optional if you may want the feature later."
      },
      {
        number: "09",
        title: "Kitchen Island vs More Space",
        usual: "Kitchen islands feel premium and social, especially for young couples.",
        reality: "In many HDB layouts, the island is more of a lifestyle feature than a cooking necessity. It may become a breakfast counter, wine corner, worktop or parcel zone.",
        singapore: "Because many HDB kitchens have layout limits, islands often do not include a sink or hob. Clearance, storage and movement matter more than the Instagram look.",
        budget: "Medium to High",
        change: "✅ Hard to change later",
        choose: ["Choose an island if movement clearance is comfortable and you host or use the kitchen socially.", "Skip it if storage, dining space or walkway clearance is more important."],
        avoid: ["Avoid copying a condo showroom island into a tight HDB layout.", "Avoid building both island and dining table if one will be unused."],
        recommendation: "Ask whether you will use the island weekly. If not, it may be expensive floor-space decoration."
      },
      {
        number: "10",
        title: "More Storage vs Larger Bedroom",
        usual: "Some homeowners want a larger bedroom and assume they will keep belongings under control.",
        reality: "Storage is partly a design problem and partly a behaviour problem. A larger wardrobe does not create a tidier home if buying and keeping habits never change.",
        singapore: "Online shopping makes it easy to accumulate clothes, appliances and household items. Many homeowners keep old clothing for years thinking they may wear it again, but it simply becomes hidden clutter.",
        budget: "Medium to High",
        change: "✅ Hard to change later",
        choose: ["Choose more storage if you own many clothes, luggage, hobby items or cleaning supplies.", "Choose a larger bedroom if you declutter regularly and prefer visual breathing space."],
        avoid: ["Avoid building storage as permission to hoard more.", "Avoid reducing wardrobe space too much if you already struggle to clear items."],
        recommendation: "A messy house is not always caused by poor renovation design. Sometimes the real issue is that the home is storing too many things."
      },
      {
        number: "11",
        title: "Dining Table vs Island Dining",
        usual: "A dining table feels like a default item every home should have.",
        reality: "Many young couples eat out, order delivery, work irregular hours or eat separately on weekdays. The dining table can become a parcel area or laptop desk.",
        singapore: "Island dining works for one to two occupants and casual meals. A proper dining table is still better for children, elderly parents, family meals and hosting.",
        budget: "Medium",
        change: "⚠ Depends on built-in work",
        choose: ["Choose island dining for small households, quick meals and limited space.", "Choose a dining table for family routines, children, elderly parents and proper hosting."],
        avoid: ["Avoid building both if your space is tight and one will become a dumping zone.", "Avoid bar-height dining if elderly family members will use it often."],
        recommendation: "Do not ask which looks better. Ask how your household actually eats from Monday to Sunday."
      },
      {
        number: "12",
        title: "Service Yard Door vs Open Service Yard",
        usual: "Removing the service yard door makes the kitchen look brighter and larger.",
        reality: "After moving in, the service yard holds laundry, detergent, mop, cleaning tools and washing-machine noise.",
        singapore: "In compact HDB homes, the service yard is one of the most visible practical zones. Leaving it open can make daily laundry and cleaning items part of the kitchen view.",
        budget: "Low to Medium",
        change: "⚠ Partially hard to change later",
        choose: ["Keep or add a door if you want to hide laundry and reduce washing-machine noise.", "Keep it open if brightness and airflow matter more than visual concealment."],
        avoid: ["Avoid removing the door only because it looks good before laundry exists.", "Avoid fully closing the area without thinking about airflow and drying."],
        recommendation: "This is the showflat look versus daily-life practicality decision. Be honest about laundry visibility."
      },
      {
        number: "13",
        title: "Single Sink vs Double Sink",
        usual: "Double sinks look more functional in showrooms.",
        reality: "In many BTO kitchens, double sinks create two small basins, neither large enough for a wok or large pot.",
        singapore: "Single sinks are cleaner-looking and easier for large cookware. Double sinks can help with washing and rinsing if you cook heavily and have enough countertop length.",
        budget: "Low",
        change: "⚠ Partially hard to change later",
        choose: ["Choose a single large sink if you wash woks, large pots or oven trays.", "Choose a double sink if you do heavy prep and have enough counter space."],
        avoid: ["Avoid a double sink that sacrifices practical basin size.", "Avoid choosing sink style before checking cabinet width and countertop layout."],
        recommendation: "Choose based on cookware and washing habits, not showroom appearance."
      },
      {
        number: "14",
        title: "Extra Power Points vs Standard Provision",
        usual: "Homeowners think power points can always be added later.",
        reality: "Adding later can mean hacking, repainting, trunking or visible wiring. The regret is rarely installing too many points; it is usually installing too few.",
        singapore: "Plan for phone charging, robot vacuum, coffee machine, air fryer, water dispenser, router, smart hubs, bedside charging, hairdryer, standing fans, gaming consoles and work-from-home needs.",
        budget: "Low",
        change: "✅ Very hard to change cleanly later",
        choose: ["Add points where appliances, charging and future routines are likely.", "Add spare points around TV, bedside, kitchen counter, work desk and robot vacuum zones."],
        avoid: ["Avoid relying on extension cords in permanent living areas.", "Avoid placing points only for current appliances while ignoring future lifestyle."],
        recommendation: "This is one of the highest-regret decisions. Spend time planning power points before carpentry and wall finishes are confirmed."
      },
      {
        number: "15",
        title: "Built-In TV Console vs Loose TV Console",
        usual: "A built-in TV console looks seamless on handover day.",
        reality: "Technology changes faster than carpentry. TV size, soundbar, gaming setup, router and cable needs may change within a few years.",
        singapore: "A built-in console can hide cables and integrate storage, but a loose console is cheaper, replaceable and easier to adapt when devices change.",
        budget: "Medium",
        change: "⚠ Depends on design",
        choose: ["Choose built-in if cable concealment, wall integration and storage are important.", "Choose loose if you value flexibility, easier replacement and lower cost."],
        avoid: ["Avoid overly customised TV walls that only fit one TV size.", "Avoid blocking access to router, power points and future device cables."],
        recommendation: "Ask whether the setup will still work in 10 years, not only whether it looks beautiful on handover day."
      }
    ],
    hardTitle: "Which renovation decisions are hardest to change later?",
    hardRows: [
      { item: "Power points and wiring", difficulty: "Very hard", note: "Usually affects walls, carpentry, hacking, repainting or trunking." },
      { item: "Kitchen layout", difficulty: "Very hard", note: "Affects plumbing, electrical, carpentry, worktop and appliance placement." },
      { item: "Flooring", difficulty: "Hard", note: "Changing later disrupts the whole home and may affect carpentry." },
      { item: "Storage planning", difficulty: "Hard", note: "Insufficient storage becomes visible after move-in." },
      { item: "Feature wall", difficulty: "Easier", note: "Can often be added later if electrical provision was planned." },
      { item: "Loose furniture", difficulty: "Easy", note: "Most pieces can be changed without renovation works." }
    ],
    internalLinksTitle: "Related planning tools and guides",
    internalLinks: [
      { label: "Renovation Cost Calculator", to: "/renovation-cost-calculator", text: "Estimate how decisions like carpentry, flooring, electrical works and kitchen scope may affect your renovation budget." },
      { label: "Move-In Budget Planner", to: "/total-home-budget-calculator", text: "Plan renovation together with furniture, appliances, lighting, curtains and move-in costs so the home works after handover." },
      { label: "Renovation Quotation Guide", to: "/insights/renovation-quotation-singapore", text: "Understand why quotations differ and how to compare scope before committing." },
      { label: "HDB Defect Checklist", to: "/insights/hdb-defect-checklist-before-renovation-singapore", text: "Check defects before renovation starts so rectification issues do not clash with your contractor’s work." },
      { label: "HDB Renovation Timeline", to: "/insights/hdb-renovation-timeline-singapore", text: "See how approvals, sequencing and material decisions affect renovation timing." }
    ],
    faqTitle: "Renovation decision FAQ for Singapore homeowners",
    faqs: [
      { question: "What is the most common renovation regret in Singapore homes?", answer: "One of the most common regrets is not planning enough power points and storage before carpentry, walls and finishes are completed." },
      { question: "Should I hire an interior designer or contractor?", answer: "Choose a contractor if you know exactly what you want and can coordinate trades yourself. Choose an interior designer if you need space planning, supplier coordination and project management." },
      { question: "Is vinyl flooring suitable for Singapore homes?", answer: "Vinyl can be suitable if product quality, subfloor condition, installation and expansion allowance are handled well. Strong direct sun areas need more care." },
      { question: "Are tiles better than vinyl?", answer: "Tiles are more solid, cooler and more heat-resistant. Vinyl feels warmer, softer and quieter. The better choice depends on comfort, maintenance and sunlight exposure." },
      { question: "Is sintered stone worth it over quartz?", answer: "Sintered stone can be worth it for premium appearance and heat or UV resistance, but fabrication quality is critical. Quartz remains practical for many homes." },
      { question: "Is an open kitchen suitable for HDB heavy cooking?", answer: "It can work with good ventilation and realistic expectations, but a closed kitchen usually controls smell better for frequent frying, wok cooking and strong-smell dishes." },
      { question: "Can sliding kitchen doors fully stop cooking smells?", answer: "No. Sliding and folding glass doors reduce smell movement but are not airtight because of track gaps and panel overlaps." },
      { question: "Should I build a kitchen island in a 4-room BTO?", answer: "Only if movement clearance remains comfortable and the island supports your lifestyle. In tight layouts, storage or dining space may be more useful." },
      { question: "Is built-in carpentry always better?", answer: "No. Built-in is useful for exact fit, height, safety and space efficiency, but loose furniture gives better flexibility and lower cost." },
      { question: "Can I add a feature wall later?", answer: "Usually yes, but lighting points, concealed wiring and switches should be planned during renovation if you may want LED strips or wall-wash lighting later." },
      { question: "Is a ceiling fan enough without aircon in Singapore?", answer: "A ceiling fan improves airflow but does not cool the room like aircon. In Singapore, most bedrooms still need aircon for comfort." },
      { question: "Single sink or double sink for HDB kitchen?", answer: "A single large sink is usually more practical for woks and large pots. A double sink works only if the kitchen has enough width for two usable basins." },
      { question: "How many power points should I plan?", answer: "Plan by lifestyle zones: bedside, work desk, TV area, kitchen counter, router, robot vacuum, hairdryer, water dispenser and future smart home devices." },
      { question: "Should I choose a built-in TV console?", answer: "Choose built-in for a seamless look and cable concealment. Choose loose if you expect to change TV size, soundbar, gaming devices or router setup in future." },
      { question: "What renovation choices can wait until later?", answer: "Feature walls, loose furniture, decor, some sideboards and non-essential display shelves can usually wait. Flooring, wiring, kitchen layout and storage should be decided early." }
    ],
    ctaTitle: "Need help choosing what matters most for your renovation?",
    ctaText: "Share your floor plan, lifestyle priorities and budget range with ID Work Studio. We can help you decide what should be built now, what can wait and which choices are most likely to affect daily living after move-in.",
    ctaPrimary: "WhatsApp ID Work Studio",
    ctaSecondary: "Estimate Renovation Cost",
    breadcrumbCurrent: "15 Renovation Decisions Singapore Homeowners Should Not Get Wrong"
  },
  zh: {
    metaTitle: "新加坡屋主不应选错的 15 个装修决定 | ID Work Studio",
    metaDescription: "为新加坡 HDB、BTO、转售组屋与公寓屋主整理的实用装修决策指南，帮助屋主在入住后少后悔。",
    canonical: "https://idworkstudio.com/insights/15-renovation-decisions-singapore-homeowners-should-not-get-wrong",
    eyebrow: "新加坡住宅装修指南",
    title: "新加坡屋主不应选错的 15 个装修决定",
    subtitle: "最贵的装修后悔，往往不是瑕疵或手工问题，而是入住后才发现某个生活决定不适合自己。",
    readTime: "约 16 分钟",
    category: "住宅规划指南",
    heroImageAlt: "新加坡 HDB 温暖高级住宅装修客厅",
    quickAnswerTitle: "快速答案",
    quickAnswer: "新加坡屋主做装修决定时，应先考虑自己怎样煮饭、招待客人、打扫、工作、收纳和生活，而不是只看样板屋效果。最需要认真规划的是插座、厨房布局、地板、收纳、固定木作、台面、厨房通风，以及哪些项目以后能否不敲墙再加。",
    regretTitle: "入住后最常听到的 5 个装修后悔",
    regretIntro: "很多问题不是交屋当天出现，而是住了几个月后才每天感受到。",
    regrets: [
      "插座不够，日常电器、充电和居家办公位置不方便。",
      "收纳不够，或收纳位置规划错误。",
      "开放式厨房入住后才发现油烟和味道容易进入客厅。",
      "餐桌、中岛或电视墙在设计图很好看，但实际很少使用。",
      "太早把预算花在视觉项目，却没有先解决地板、灯光、墙色、家具和维护问题。"
    ],
    summaryTitle: "快速决策表",
    summaryRows: [
      { decision: "设计师 vs 承包商", bestFor: "协调与规划", regret: "工种之间沟通断层" },
      { decision: "Vinyl vs 瓷砖", bestFor: "日常脚感", regret: "脚感不适或日晒区域问题" },
      { decision: "石英石 vs 岩板", bestFor: "厨房台面", regret: "只看材料名，忽略加工品质" },
      { decision: "开放 vs 封闭厨房", bestFor: "煮饭与招待习惯", regret: "味道控制不理想" },
      { decision: "固定木作 vs 活动家具", bestFor: "收纳与弹性", regret: "木作过多或高柜不安全" },
      { decision: "额外插座", bestFor: "未来生活", regret: "之后只能走明线或用延长线" }
    ],
    decisions: [
      {
        number: "01",
        title: "设计师 vs 承包商",
        usual: "很多屋主把它理解成设计与价格的差别，觉得承包商便宜，设计师只是画图。",
        reality: "真正差别在协调。承包商通常执行你指定的范围；设计师则要同时处理空间规划、图纸、工序、供应商与多个工种。",
        singapore: "HDB 装修需要遵守相关指引，屋主也有责任确保工程合规。当假天花、电工点位、木作、冷气管和水喉互相影响时，协调就变成关键。",
        budget: "中至高",
        change: "✅ 开工后难补救",
        choose: ["需要设计方向、项目管理和供应商协调。", "工程涉及电工、木工、水喉、冷气、玻璃、油漆等多个工种。"],
        avoid: ["你非常清楚自己要什么，也能自己协调现场。", "你只追求最低施工成本，并愿意自己管理细节。"],
        recommendation: "你付给设计师的不只是图纸，而是减少沟通断层、安排工序和整体规划。"
      },
      {
        number: "02",
        title: "Vinyl 地板 vs 瓷砖",
        usual: "多数人只比较价格、耐用度和外观。",
        reality: "每天住进去后，脚感很重要。瓷砖较冷、较硬、较稳；vinyl 较温暖、较软、较安静。",
        singapore: "如果单位有强烈西晒或落地窗日晒，vinyl 的品质、施工和伸缩预留很重要。它不会自动坏，但热胀冷缩和长期日晒可能造成缝隙或边缘翘起。",
        budget: "中至高",
        change: "✅ 以后难更换",
        choose: ["想要更凉、更稳、更耐热，可选瓷砖。", "重视赤脚舒适、较软脚感和安静，可选 vinyl。"],
        avoid: ["日晒很强又不确定施工品质时，避免草率选 vinyl。", "家人很不喜欢冰冷硬地板时，避免只看瓷砖耐用。"],
        recommendation: "不要只看样板。想象每天早上赤脚踩上去、每周清洁和住几年后的感受。"
      },
      {
        number: "03",
        title: "石英石 vs 岩板",
        usual: "营销常让人觉得岩板一定高级，石英石就是普通。",
        reality: "对很多新加坡家庭来说，差别没有想象中夸张。更大的风险是测量、加工、支撑、边角和安装品质。",
        singapore: "石英石实用且价格通常较低。岩板外观高级、耐热和抗 UV 较好，但加工难度高，边角手工不好会更容易出问题。",
        budget: "中至高",
        change: "⚠ 部分难更换",
        choose: ["想要实用和控制预算，可选石英石。", "若外观、耐热和高级感值得预算，可选岩板。"],
        avoid: ["不要只看品牌或材料名。", "重度使用厨房时，避免支撑不足或过薄细节。"],
        recommendation: "好的石英石加工，可能比差的高级材料更实用。"
      },
      {
        number: "04",
        title: "开放式厨房 vs 封闭式厨房",
        usual: "开放式厨房让家更亮更大，所以很多年轻屋主觉得它更现代。",
        reality: "入住后，味道、热气、噪音和清洁习惯会比样板屋感觉更重要。",
        singapore: "HDB 生活中，味道有时也可能通过窗户、服务阳台或气流进入。滑门或折叠玻璃门能减少味道，但因为轨道和重叠缝隙，并不是真正密封。",
        budget: "中至高",
        change: "✅ 以后难改",
        choose: ["轻煮、喜欢社交和明亮空间，可选开放式。", "经常煎炒、重口味或爆炒，封闭式更稳妥。"],
        avoid: ["不要把滑门当成完全隔味方案。", "不要做一个又暗又热、让煮饭的人被隔离的封闭厨房。"],
        recommendation: "开放厨房是生活方式决定，不只是设计决定。"
      },
      {
        number: "05",
        title: "固定木作 vs 活动家具",
        usual: "很多屋主觉得固定木作一定比较高级。",
        reality: "固定木作适合精准尺寸、安全和垂直收纳，但成本高，也减少未来弹性。",
        singapore: "全高衣柜、厨房柜、鞋柜和高收纳通常适合固定规划。矮柜、边柜和低家具则可用活动家具。高的活动柜应固定在墙上，尤其家里有小孩。",
        budget: "高",
        change: "⚠ 看项目",
        choose: ["高收纳、异形角落和需要精准尺寸时，用固定木作。", "预算和未来变化更重要时，用活动家具。"],
        avoid: ["生活方式还不清楚前，不要做太多固定木作。", "有小孩时，避免未固定的高柜。"],
        recommendation: "固定木作不是越多越好。它应该解决空间、安全或收纳问题。"
      },
      {
        number: "06",
        title: "煤气炉 vs 电磁炉",
        usual: "有人觉得电磁炉看起来现代，所以一定更好。",
        reality: "煤气炉有火候感和控制感；电磁炉容易清洁、周围热量少、台面更简洁。",
        singapore: "较小 BTO 厨房容易闷热。电磁炉适合轻中度煮饭；经常爆炒或重度下厨的人，仍可能更喜欢煤气。",
        budget: "低至中",
        change: "⚠ 部分难改",
        choose: ["经常煮饭和需要火候控制，可选煤气。", "重视清洁、安全和减少厨房热气，可选电磁炉。"],
        avoid: ["非常在意明火煮法时，不要只因潮流选电磁炉。", "讨厌油污和热气时，不要忽略煤气炉的清洁负担。"],
        recommendation: "煤气给煮饭感觉，电磁给便利。重点是煮饭的人是谁。"
      },
      {
        number: "07",
        title: "吊扇 vs 冷气",
        usual: "很多人把它当成风扇和冷气二选一。",
        reality: "在新加坡，大多数家庭仍需要冷气真正降温。吊扇是增加气流、减少闷热和辅助冷气。",
        singapore: "卧室通常仍需要冷气。如果常招待客人，客厅冷气也很值得考虑，人多时只靠吊扇未必舒服。",
        budget: "中",
        change: "⚠ 部分难改",
        choose: ["需要真正降温的空间先规划冷气。", "需要气流和舒适度的空间加吊扇。"],
        avoid: ["不要把吊扇当成新加坡天气下的完整冷气替代。", "避免吊扇位置与灯、衣柜门或上下床冲突。"],
        recommendation: "先想冷气，再想风扇辅助。舒适来自降温加气流。"
      },
      {
        number: "08",
        title: "电视墙 / 特色墙 vs 不做特色墙",
        usual: "很多人觉得特色墙是让客厅完整的项目。",
        reality: "地板、墙色、灯光、家具和材料搭配，通常比特色墙更影响整体感觉。",
        singapore: "特色墙以后通常还能加。但如果将来要 LED 灯带、洗墙灯或隐藏电线，装修阶段就应先预留电点和开关。",
        budget: "低至中",
        change: "❌ 通常较容易后加",
        choose: ["需要隐藏电线、灯带或整合木作时，现在就规划。", "预算紧时，可先靠油漆、灯光和家具完成效果。"],
        avoid: ["不要在地板、灯光和家具比例还没解决前，先把钱花在特色墙。", "避免太流行、容易过时的设计。"],
        recommendation: "特色墙可选；但如果未来可能需要灯光，电点预留不可省。"
      },
      {
        number: "09",
        title: "厨房中岛 vs 更多空间",
        usual: "中岛看起来高级、社交感强，年轻屋主很容易被吸引。",
        reality: "很多 HDB 中岛其实不是煮饭必需，而是早餐台、聊天区、临时工作台或放包裹的位置。",
        singapore: "HDB 布局有限，很多中岛不能放水槽或炉具。走道、收纳和动线，比照片效果更重要。",
        budget: "中至高",
        change: "✅ 以后难改",
        choose: ["空间足够、常招待客人或厨房是社交区域，可考虑中岛。", "如果收纳、餐桌或走道更重要，就不要勉强。"],
        avoid: ["不要把公寓样板间中岛硬套进小 HDB。", "空间紧时不要同时做中岛和餐桌。"],
        recommendation: "问自己每周会不会用中岛。如果不会，它可能只是昂贵的地面装饰。"
      },
      {
        number: "10",
        title: "更多收纳 vs 更大卧室",
        usual: "有人想要更大的卧室，并相信自己会控制物品数量。",
        reality: "收纳既是设计问题，也是习惯问题。买东西和囤东西习惯不变，再大的衣柜也会满。",
        singapore: "网购让衣服、电器和杂物累积很快。很多旧衣服放了几年，想着有一天会穿，最后只是隐藏杂物。",
        budget: "中至高",
        change: "✅ 以后难改",
        choose: ["衣服、行李、清洁用品和兴趣物品多，就需要更多收纳。", "定期断舍离、喜欢空间感，就可保留较大卧室。"],
        avoid: ["不要把更多收纳当成继续囤物的许可。", "本来就很难清物品时，不要把衣柜做得太少。"],
        recommendation: "家乱不一定只是装修问题，有时是东西太多。"
      },
      {
        number: "11",
        title: "餐桌 vs 中岛用餐",
        usual: "很多人觉得餐桌是家里必备。",
        reality: "年轻夫妻可能常外食、叫外卖、作息不同或分开吃饭，餐桌最后变成包裹区和电脑桌。",
        singapore: "中岛用餐适合一至两人、快速用餐和小空间。真正餐桌更适合家庭、孩子、长辈和正式招待。",
        budget: "中",
        change: "⚠ 看是否固定木作",
        choose: ["小家庭、快速用餐和空间有限，可用中岛用餐。", "有孩子、长辈或常家庭聚餐，餐桌更实用。"],
        avoid: ["空间紧时，不要同时做中岛和餐桌。", "长辈常用时，避免只做高脚吧台式用餐。"],
        recommendation: "不要问哪个更好看，要问家人平日到底怎么吃饭。"
      },
      {
        number: "12",
        title: "服务阳台门 vs 开放式服务阳台",
        usual: "拆掉服务阳台门会让厨房看起来更大更亮。",
        reality: "入住后，服务阳台会有衣服、洗衣液、拖把、清洁用品和洗衣机声音。",
        singapore: "HDB 空间紧凑，服务阳台是很实际也很显眼的区域。开放后，日常洗衣和清洁物品会直接进入厨房视线。",
        budget: "低至中",
        change: "⚠ 部分难改",
        choose: ["想隐藏衣物和降低洗衣机声音，可保留或加门。", "更重视采光和通风，可保持开放。"],
        avoid: ["不要只因为空屋好看就拆门。", "也不要完全封闭却忽略通风和晾晒。"],
        recommendation: "这是样板屋效果与真实生活之间的取舍。"
      },
      {
        number: "13",
        title: "单槽 vs 双槽水槽",
        usual: "双槽在展厅看起来更有功能。",
        reality: "很多 BTO 厨房空间有限，双槽最后变成两个都不够大的小槽，锅和炒锅放不下。",
        singapore: "单大槽更适合洗锅和大件。双槽适合重度备餐，但必须有足够台面和柜体宽度。",
        budget: "低",
        change: "⚠ 部分难改",
        choose: ["常洗炒锅、大锅和烤盘，选单大槽。", "重度备餐且空间足够，可选双槽。"],
        avoid: ["不要选两个都太小的双槽。", "不要未确认柜体宽度就决定水槽。"],
        recommendation: "按锅具和清洗习惯选，不按展厅外观选。"
      },
      {
        number: "14",
        title: "额外插座 vs 标准插座",
        usual: "很多屋主以为插座以后随时能加。",
        reality: "以后加可能要敲墙、补漆、走明线或做线槽。很少人后悔插座太多，更多人后悔插座太少。",
        singapore: "要考虑手机充电、扫地机器人、咖啡机、气炸锅、饮水机、路由器、智能家居、床头、吹风机、风扇、游戏机和居家办公。",
        budget: "低",
        change: "✅ 以后很难漂亮地加",
        choose: ["在日常电器、充电和未来生活区多规划。", "电视区、床头、厨房台面、工作桌和扫地机器人位置要特别考虑。"],
        avoid: ["不要长期依赖延长线。", "不要只按现在电器数量规划。"],
        recommendation: "这是最高后悔率的决定之一。木作和墙面完成前一定要认真规划。"
      },
      {
        number: "15",
        title: "固定电视柜 vs 活动电视柜",
        usual: "固定电视柜交屋时看起来很完整。",
        reality: "科技变化比木作快。电视尺寸、soundbar、游戏机、路由器和线材需求几年内就可能改变。",
        singapore: "固定电视柜可隐藏线材和整合收纳；活动电视柜较便宜、可替换，也更容易配合设备变化。",
        budget: "中",
        change: "⚠ 看设计",
        choose: ["重视隐藏线材、整体墙面和收纳，可选固定。", "重视弹性、低成本和未来更换，可选活动。"],
        avoid: ["避免做只能适合一个电视尺寸的设计。", "避免挡住路由器、电点和未来线材。"],
        recommendation: "不要只看交屋当天好不好看，要问十年后还好不好用。"
      }
    ],
    hardTitle: "哪些装修决定以后最难改？",
    hardRows: [
      { item: "插座与电线", difficulty: "非常难", note: "通常影响墙面、木作、敲墙、补漆或线槽。" },
      { item: "厨房布局", difficulty: "非常难", note: "影响水喉、电工、木作、台面和电器位置。" },
      { item: "地板", difficulty: "难", note: "以后更换会影响全屋和部分木作。" },
      { item: "收纳规划", difficulty: "难", note: "收纳不足入住后会马上显现。" },
      { item: "特色墙", difficulty: "较容易", note: "如果电点已预留，通常以后还能加。" },
      { item: "活动家具", difficulty: "容易", note: "多数家具可不动装修直接更换。" }
    ],
    internalLinksTitle: "相关规划工具与指南",
    internalLinks: [
      { label: "翻新费用计算器", to: "/renovation-cost-calculator", text: "先估算木作、地板、电工和厨房工程如何影响预算。" },
      { label: "入住预算规划器", to: "/total-home-budget-calculator", text: "把装修、家具、电器、灯具、窗帘和入住成本一起规划。" },
      { label: "装修报价指南", to: "/insights/renovation-quotation-singapore", text: "了解为什么报价差距大，以及如何比较工程范围。" },
      { label: "HDB 缺陷检查清单", to: "/insights/hdb-defect-checklist-before-renovation-singapore", text: "装修前先检查缺陷，避免维修与施工互相冲突。" },
      { label: "HDB 装修时间表", to: "/insights/hdb-renovation-timeline-singapore", text: "了解审批、工序和材料决定如何影响工期。" }
    ],
    faqTitle: "新加坡屋主装修决策 FAQ",
    faqs: [
      { question: "新加坡住宅最常见的装修后悔是什么？", answer: "最常见之一是插座和收纳规划不足，尤其当木作、墙面和地板完成后才发现不方便。" },
      { question: "应该找设计师还是承包商？", answer: "如果你很清楚自己要什么并能自己协调工种，可找承包商。如果需要空间规划、供应商协调和项目管理，设计师更适合。" },
      { question: "Vinyl 地板适合新加坡吗？", answer: "可以，但要看产品品质、地面情况、施工和伸缩预留。强烈日晒区域需要更谨慎。" },
      { question: "瓷砖一定比 vinyl 好吗？", answer: "不一定。瓷砖更稳、更凉、更耐热；vinyl 更温暖、较软、较安静。取决于生活习惯。" },
      { question: "岩板比石英石值得吗？", answer: "如果你重视外观、耐热和高级感，岩板可以值得。但加工和安装品质非常关键。" },
      { question: "HDB 重度煮饭适合开放式厨房吗？", answer: "可以，但要有良好通风和现实期待。经常煎炒或爆炒，封闭式厨房通常更好控制味道。" },
      { question: "滑门可以完全挡住油烟味吗？", answer: "不能。滑门和折叠门能减少味道扩散，但轨道和门片缝隙不会完全密封。" },
      { question: "四房式 BTO 适合做中岛吗？", answer: "只有在走道足够、收纳和餐桌不受影响时才适合。否则中岛可能只是占空间。" },
      { question: "固定木作一定比较好吗？", answer: "不是。固定木作适合精准尺寸、高收纳和安全；活动家具更有弹性、成本较低。" },
      { question: "特色墙可以以后再加吗？", answer: "多数可以，但如果将来需要灯带、洗墙灯或隐藏电线，应在装修阶段先预留电点。" },
      { question: "新加坡家里只装吊扇够吗？", answer: "吊扇改善气流，但不能像冷气一样降温。多数卧室仍需要冷气。" },
      { question: "HDB 厨房水槽选单槽还是双槽？", answer: "如果常洗炒锅和大锅，单大槽通常更实用。双槽要有足够柜体和台面宽度才好用。" },
      { question: "插座应该怎样规划？", answer: "按生活区域规划：床头、工作桌、电视区、厨房台面、路由器、扫地机器人、吹风机、饮水机和未来智能设备。" },
      { question: "固定电视柜值得做吗？", answer: "如果你重视整体感和隐藏线材，可以做。若你常换电视或设备，活动电视柜更有弹性。" },
      { question: "哪些装修项目可以以后再决定？", answer: "特色墙、活动家具、装饰、部分边柜和展示架通常可以等。地板、电线、厨房布局和收纳应尽早决定。" }
    ],
    ctaTitle: "需要帮你判断哪些装修决定最重要？",
    ctaText: "把你的平面图、生活习惯和预算范围发给 ID Work Studio。我们可以帮你判断哪些应该现在做，哪些可以以后加，以及哪些决定最可能影响入住后的日常生活。",
    ctaPrimary: "WhatsApp 联系 ID Work Studio",
    ctaSecondary: "估算装修费用",
    breadcrumbCurrent: "新加坡屋主不应选错的 15 个装修决定"
  }
};

export default function FifteenRenovationDecisionsSingapore() {
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
    author: { "@type": "Organization", name: "ID Work Studio", url: "https://idworkstudio.com/" },
    publisher: { "@type": "Organization", name: "ID Work Studio", url: "https://idworkstudio.com/" },
    mainEntityOfPage: { "@type": "WebPage", "@id": t.canonical },
    inLanguage: lang === "zh" ? "zh-SG" : "en-SG",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: lang === "zh" ? "首页" : "Home", item: "https://idworkstudio.com/" },
      { "@type": "ListItem", position: 2, name: lang === "zh" ? "装修文章" : "Insights", item: "https://idworkstudio.com/insights" },
      { "@type": "ListItem", position: 3, name: t.breadcrumbCurrent, item: t.canonical },
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
            <img src={heroImage} alt={t.heroImageAlt} className="h-full w-full object-cover object-center opacity-45" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/60 to-[#111]/88" />
          </div>
          <div className="relative z-10 mx-auto max-w-6xl text-center">
            <p className="mb-7 inline-flex rounded-full border border-[#C5A059]/45 bg-black/30 px-6 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#C5A059] backdrop-blur">{t.eyebrow}</p>
            <h1 className="mx-auto max-w-5xl font-serif text-4xl font-semibold leading-[1.08] md:text-7xl">{t.title}</h1>
            <p className="mx-auto mt-7 max-w-4xl text-base leading-8 text-white/85 md:text-xl md:leading-9">{t.subtitle}</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3 text-xs uppercase tracking-[0.18em] text-white/70"><span>{t.category}</span><span>•</span><span>{t.readTime}</span></div>
          </div>
        </section>

        <section className="border-b border-[#e8e1d7] bg-white px-6 py-5">
          <div className="mx-auto max-w-5xl">
            <Link to="/insights" className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f6a63] hover:text-[#C5A059]">← {lang === "zh" ? "返回装修文章" : "Back to insights"}</Link>
          </div>
        </section>

        <article className="mx-auto max-w-5xl px-6 py-14 md:py-20">
          <section className="mb-14 rounded-3xl border border-[#e8e1d7] bg-white p-6 shadow-sm md:p-8">
            <h2 className="font-serif text-3xl font-semibold">{t.quickAnswerTitle}</h2>
            <p className="mt-4 text-base leading-8 text-[#5f5a54]">{t.quickAnswer}</p>
          </section>

          <section className="mb-14 rounded-3xl border border-[#e8e1d7] bg-[#111] p-6 text-white shadow-sm md:p-8">
            <h2 className="font-serif text-3xl font-semibold">{t.regretTitle}</h2>
            <p className="mt-4 text-base leading-8 text-white/70">{t.regretIntro}</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {t.regrets.map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-sm leading-6 text-white/78"><span className="mr-2 text-[#C5A059]">✓</span>{item}</div>)}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="border-b border-[#e8e1d7] pb-4 font-serif text-3xl font-semibold">{t.summaryTitle}</h2>
            <div className="mt-6 overflow-hidden rounded-3xl border border-[#e8e1d7] bg-white shadow-sm">
              {t.summaryRows.map((row) => (
                <div key={row.decision} className="grid gap-2 border-b border-[#e8e1d7] p-5 last:border-b-0 md:grid-cols-[1.1fr_1fr_1.4fr] md:gap-5">
                  <p className="font-semibold text-[#2C2C2C]">{row.decision}</p><p className="text-sm font-bold text-[#9a7a3f]">{row.bestFor}</p><p className="text-sm leading-6 text-[#6f6a63]">{row.regret}</p>
                </div>
              ))}
            </div>
          </section>

          {t.decisions.map((decision) => (
            <section key={decision.number} className="mb-14 rounded-3xl border border-[#e8e1d7] bg-white p-6 shadow-sm md:p-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#C5A059]">{decision.number}</p>
              <h2 className="font-serif text-3xl font-semibold">{decision.title}</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-[#FAF8F3] p-5"><h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a7a3f]">{lang === "zh" ? "通常想法" : "What homeowners usually think"}</h3><p className="mt-3 text-sm leading-7 text-[#5f5a54]">{decision.usual}</p></div>
                <div className="rounded-2xl bg-[#FAF8F3] p-5"><h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a7a3f]">{lang === "zh" ? "入住后发现" : "What they realise after moving in"}</h3><p className="mt-3 text-sm leading-7 text-[#5f5a54]">{decision.reality}</p></div>
                <div className="rounded-2xl bg-[#FAF8F3] p-5"><h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a7a3f]">{lang === "zh" ? "新加坡重点" : "Singapore-specific consideration"}</h3><p className="mt-3 text-sm leading-7 text-[#5f5a54]">{decision.singapore}</p></div>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-[#e8e1d7] p-5"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a7a3f]">{lang === "zh" ? "预算影响" : "Budget impact"}</p><p className="mt-2 font-semibold">{decision.budget}</p></div>
                <div className="rounded-2xl border border-[#e8e1d7] p-5"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a7a3f]">{lang === "zh" ? "以后难改吗？" : "Hard to change later?"}</p><p className="mt-2 font-semibold">{decision.change}</p></div>
              </div>
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <div><h3 className="font-serif text-2xl font-semibold">{lang === "zh" ? "适合选择，如果……" : "Choose this if..."}</h3><ul className="mt-4 space-y-3">{decision.choose.map((item) => <li key={item} className="flex gap-3 text-sm leading-7 text-[#5f5a54]"><span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#C5A059]" />{item}</li>)}</ul></div>
                <div><h3 className="font-serif text-2xl font-semibold">{lang === "zh" ? "避免这样选，如果……" : "Avoid this if..."}</h3><ul className="mt-4 space-y-3">{decision.avoid.map((item) => <li key={item} className="flex gap-3 text-sm leading-7 text-[#5f5a54]"><span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#C5A059]" />{item}</li>)}</ul></div>
              </div>
              <p className="mt-6 rounded-2xl bg-[#111] p-5 text-sm leading-7 text-white/78"><span className="font-semibold text-[#C5A059]">{lang === "zh" ? "顾问建议：" : "Designer recommendation: "}</span>{decision.recommendation}</p>
            </section>
          ))}

          <section className="mb-14 rounded-3xl border border-[#e8e1d7] bg-white p-6 shadow-sm md:p-8">
            <h2 className="font-serif text-3xl font-semibold">{t.hardTitle}</h2>
            <div className="mt-6 overflow-hidden rounded-3xl border border-[#e8e1d7]">
              {t.hardRows.map((row) => <div key={row.item} className="grid gap-2 border-b border-[#e8e1d7] p-5 last:border-b-0 md:grid-cols-[1fr_0.8fr_1.5fr]"><p className="font-semibold">{row.item}</p><p className="font-bold text-[#9a7a3f]">{row.difficulty}</p><p className="text-sm leading-6 text-[#6f6a63]">{row.note}</p></div>)}
            </div>
          </section>

          <section className="mb-14 rounded-3xl border border-[#e8e1d7] bg-white p-6 shadow-sm md:p-8">
            <h2 className="font-serif text-3xl font-semibold">{t.internalLinksTitle}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {t.internalLinks.map((link) => <Link key={link.to} to={link.to} className="rounded-2xl border border-[#e8e1d7] bg-[#fffdf8] p-5 transition hover:border-[#C5A059] hover:shadow-md"><p className="text-sm font-semibold text-[#9a7a3f]">{link.label}</p><p className="mt-2 text-sm leading-6 text-[#5f5a54]">{link.text}</p></Link>)}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="border-b border-[#e8e1d7] pb-4 font-serif text-3xl font-semibold">{t.faqTitle}</h2>
            <div className="mt-6 space-y-4">
              {t.faqs.map((faq) => <details key={faq.question} className="rounded-2xl border border-[#e8e1d7] bg-white p-5 shadow-sm"><summary className="cursor-pointer font-semibold text-[#2C2C2C]">{faq.question}</summary><p className="mt-4 text-sm leading-7 text-[#5f5a54]">{faq.answer}</p></details>)}
            </div>
          </section>

          <section className="rounded-3xl bg-[#111] p-8 text-white md:p-10">
            <h2 className="font-serif text-3xl font-semibold md:text-4xl">{t.ctaTitle}</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/72">{t.ctaText}</p>
            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <a href="https://wa.me/6598333085" target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#C5A059] px-7 py-4 text-center text-xs font-bold uppercase tracking-[0.18em] text-[#111] transition hover:bg-[#d6b26b]">{t.ctaPrimary}</a>
              <Link to="/renovation-cost-calculator" className="rounded-full border border-white/20 px-7 py-4 text-center text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:border-[#C5A059] hover:text-[#C5A059]">{t.ctaSecondary}</Link>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
