import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

type CostRow = {
  label: string;
  value: string;
  note: string;
};

type TableRow = {
  item: string;
  cost: string;
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
  amount: string;
  details: string[];
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
  costRows: CostRow[];
  threeCostsTitle: string;
  threeCostsIntro: string;
  threeCosts: TableRow[];
  loanTitle: string;
  loanIntro: string;
  loanRows: TableRow[];
  sections: Section[];
  mopTitle: string;
  mopIntro: string;
  mopRows: TableRow[];
  scenariosTitle: string;
  scenarios: Scenario[];
  priorityTitle: string;
  priorityRows: TableRow[];
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

const heroImage = "/insights/real-cost-moving-home-singapore-hero.webp";

const content: Record<"en" | "zh", ArticleContent> = {
  en: {
    metaTitle: "The Real Cost of Moving Into a New Home in Singapore | ID Work Studio",
    metaDescription:
      "A realistic Singapore move-in budget guide covering renovation, appliances, furniture, renovation loans, MOP resale value and what homeowners should plan before spending.",
    canonical: "https://idworkstudio.com/insights/real-cost-moving-home-singapore",
    eyebrow: "Singapore Homeowner Budget Guide",
    title: "The Real Cost of Moving Into a New Home in Singapore",
    subtitle:
      "The real cost of moving into a new home is not only the renovation quotation. Singapore homeowners also need to plan for appliances, furniture, styling, loan repayments, resale value after MOP and what happens if they cannot sell as planned.",
    readTime: "10 min read",
    category: "Renovation Budget",
    heroImageAlt:
      "Premium warm neutral Singapore home interior showing living, dining and move-in ready renovation planning",
    quickAnswerTitle: "Quick answer",
    quickAnswer:
      "A realistic move-in budget should separate renovation works, appliances, and furniture instead of treating everything as one renovation number. Renovation creates the foundation of the home, appliances make it functional, and furniture or styling can often be added gradually. If a homeowner spends S$100,000 before moving in, they should not assume the full S$100,000 will be recovered when selling after the 5-year MOP.",
    costRows: [
      {
        label: "Renovation works",
        value: "Foundation cost",
        note: "Carpentry, flooring, hacking, tiling, plumbing, electrical and painting. These are harder to change later.",
      },
      {
        label: "Appliances",
        value: "Move-in essentials",
        note: "Aircon, fridge, TV, washing machine, lighting and fans are often forgotten when planning the total budget.",
      },
      {
        label: "Furniture and styling",
        value: "Lifestyle layer",
        note: "Sofa, dining furniture, rugs, art and decor can usually be added slowly after living in the home.",
      },
      {
        label: "Renovation loan",
        value: "Cashflow pressure",
        note: "Monthly repayment, interest and loan tenure affect the real cost of renovation after key collection.",
      },
    ],
    threeCostsTitle: "The three budgets homeowners should separate",
    threeCostsIntro:
      "Many homeowners say they have a renovation budget, but what they really mean is a move-in budget. These are not the same. Separating the three categories helps prevent overspending and makes the financial decision clearer.",
    threeCosts: [
      {
        item: "Renovation works",
        cost: "Usually the largest fixed cost",
        note: "Spend carefully on layout, storage, electrical planning, waterproofing, tiling, flooring and carpentry quality.",
      },
      {
        item: "Electrical appliances and essentials",
        cost: "Often S$8,000–S$25,000+",
        note: "Air conditioners, fridge, washer, dryer, TV, lighting, fans and kitchen appliances should be planned before move-in.",
      },
      {
        item: "Furniture and soft styling",
        cost: "Can be phased",
        note: "Sofa, dining chairs, rugs, lamps, artwork and decorative pieces do not always need to be completed on day one.",
      },
    ],
    loanTitle: "Renovation loans: the cost after the renovation is over",
    loanIntro:
      "A renovation loan can make the upfront payment feel manageable, but it also creates a monthly commitment after moving in. In Singapore, bank renovation loans are commonly capped at up to 6 times monthly income or S$30,000, whichever is lower, with tenures commonly up to 5 years. Promotional rates change, and the effective interest rate is more important than the headline flat rate.",
    loanRows: [
      {
        item: "Typical tenure",
        cost: "1–5 years",
        note: "A 5-year tenure matches the HDB MOP period for many young BTO owners, but it also means the loan may follow them through the full first phase of home ownership.",
      },
      {
        item: "Common loan cap",
        cost: "Up to S$30,000 or 6× monthly income",
        note: "If the total move-in cost is S$80,000–S$120,000, the remaining amount may still need to come from savings, instalments or other financing.",
      },
      {
        item: "Interest reality",
        cost: "EIR matters",
        note: "The effective interest rate reflects the true borrowing cost better than the advertised flat rate. Homeowners should compare total repayment, not just monthly instalment.",
      },
      {
        item: "Cashflow risk",
        cost: "Monthly pressure",
        note: "A repayment that looks comfortable during key collection may feel different after mortgage, utilities, children, job changes or unexpected expenses.",
      },
    ],
    sections: [
      {
        eyebrow: "Budget psychology",
        title: "Why most move-in budgets fail",
        paragraphs: [
          "Most budgets fail because homeowners only look at the renovation quotation. They plan for carpentry, flooring and tiling, but forget that they still need to buy the things that make the home liveable.",
          "This is why a S$70,000 renovation can quietly become a S$100,000 move-in decision. The extra cost may come from air conditioners, fridge, washer, dryer, fans, lighting, TV, sofa, mattress, curtains and small daily items that were never included in the renovation quote.",
        ],
        bullets: [
          "The renovation quote is not the full move-in cost.",
          "Appliances are functional essentials, not optional decoration.",
          "Furniture and styling should not be rushed just to complete the house for photos.",
          "A beautiful home should reduce stress, not create long-term financial pressure.",
        ],
      },
      {
        eyebrow: "Renovation works",
        title: "Renovation creates the foundation of the home",
        paragraphs: [
          "Renovation works are the parts that are expensive and disruptive to change later. This includes layout planning, electrical points, plumbing, flooring, hacking, tiling, ceiling works and built-in carpentry.",
          "These areas deserve careful planning because they affect daily living for years. It is usually better to spend properly on the foundation than to over-spend on styling pieces that can be changed easily later.",
        ],
        bullets: [
          "Prioritise practical layout and circulation.",
          "Plan enough storage before building feature walls.",
          "Confirm lighting and electrical positions before carpentry fabrication.",
          "Use materials suitable for Singapore humidity and daily maintenance.",
        ],
      },
      {
        eyebrow: "Appliances",
        title: "Appliances are often forgotten until the final stage",
        paragraphs: [
          "Many homeowners remember the renovation cost, but underestimate appliances. Air conditioners, fridge, washing machine, fans, lighting and TV can add a large amount to the move-in budget.",
          "This matters because some appliance choices affect renovation planning. Aircon piping, power points, hood points, oven points, fridge dimensions and washer location should be discussed early, not after carpentry is already fabricated.",
        ],
        bullets: [
          "Air conditioners should be planned together with piping, drainage and trunking routes.",
          "Fridge, washer and dryer dimensions should be confirmed before carpentry and space planning.",
          "Lighting is both an appliance cost and a renovation planning issue.",
          "Fans, TV points and hood points should be included in the electrical discussion.",
        ],
      },
      {
        eyebrow: "Furniture and styling",
        title: "A home does not need to be fully styled on day one",
        paragraphs: [
          "In Singapore, many homeowners feel pressured to complete everything before moving in. The home must look ready for photos, ready for guests and ready for social media. That pressure often leads to rushed purchases and unnecessary spending.",
          "In many European homes, personality develops slowly. People live in the space first, understand how light enters the room, how they use the dining area, where they naturally sit, and what pieces they actually need. The home becomes more personal because it is built through living, not through one rushed shopping list.",
          "Good renovation creates the foundation of the home. Personality is built gradually through living in the space.",
        ],
        bullets: [
          "Buy essential furniture first: mattress, basic dining, sofa if needed.",
          "Add rugs, artwork, lamps and decor only after understanding the space.",
          "Avoid buying everything from one trend or one showroom at once.",
          "Leave room for the home to develop character over time.",
        ],
      },
      {
        eyebrow: "Loan risk",
        title: "Why renovation loans feel manageable at first",
        paragraphs: [
          "A renovation loan can feel comfortable because the monthly instalment looks smaller than the full renovation amount. During key collection, the homeowner may also assume future bonuses, salary increments or resale profits will make the decision easier later.",
          "The danger is that the loan is only one part of the pressure. Mortgage, utilities, maintenance, insurance, children, job changes and lifestyle costs continue after the renovation is completed. A home that looks beautiful should not leave the owner with no breathing space.",
        ],
        bullets: [
          "Do not borrow based only on the maximum amount approved.",
          "Compare total repayment, not just monthly repayment.",
          "Avoid using loans for non-essential styling items.",
          "Keep emergency savings even after paying deposits and renovation progress claims.",
        ],
      },
      {
        eyebrow: "Resale value",
        title: "Renovation is not a savings account",
        paragraphs: [
          "Some young couples plan to sell their BTO after the 5-year MOP and upgrade. That is a normal Singapore mindset, but the renovation budget should not be planned as if every dollar will return during resale.",
          "A well-renovated flat may attract stronger interest and make the unit feel more move-in ready. But buyers still care about location, floor level, remaining lease, layout, nearby amenities, market sentiment and their own taste. After five years, the renovation is no longer new, appliances have depreciated, and design trends may have changed.",
          "Spend on renovation for the way you live, not because you expect every dollar to return when you sell.",
        ],
        bullets: [
          "Neutral, practical renovation usually ages better than trend-heavy renovation.",
          "Functional storage and good maintenance help resale appeal.",
          "Loose furniture and appliances usually have weak resale recovery.",
          "Over-customised carpentry may not suit the next buyer.",
        ],
      },
      {
        eyebrow: "If selling fails",
        title: "What if you cannot sell after 5 years?",
        paragraphs: [
          "The risk is not only whether the renovation adds value. The deeper question is whether the renovation decision still makes sense if the homeowner cannot sell immediately after MOP.",
          "A weak resale market, low offers, valuation gap, buyer preference mismatch or personal timing issue can delay the upgrade plan. If that happens, the home should still be comfortable, functional and financially sustainable to continue living in.",
        ],
        bullets: [
          "Do not renovate only for a future resale story.",
          "Avoid designs that look impressive but are difficult to live with daily.",
          "Make sure loan repayment remains manageable even if the sale is delayed.",
          "Choose a renovation plan that works whether you stay 5 years or 10 years.",
        ],
      },
    ],
    mopTitle: "After 5-year MOP: what value is actually left?",
    mopIntro:
      "A S$100,000 move-in spend does not become S$100,000 of resale value. Some parts improve the home experience and buyer appeal; other parts depreciate quickly or may not matter to the next buyer.",
    mopRows: [
      {
        item: "Practical layout and storage",
        cost: "Better value retention",
        note: "Useful planning can make the home easier to sell because it solves real living problems.",
      },
      {
        item: "Neutral carpentry and good workmanship",
        cost: "Some value retention",
        note: "Well-kept built-ins may help buyers feel the home is move-in ready, but taste still matters.",
      },
      {
        item: "Appliances",
        cost: "Depreciates quickly",
        note: "Aircon, fridge, washer and TV lose value with age, warranty status and usage condition.",
      },
      {
        item: "Loose furniture and decor",
        cost: "Low resale recovery",
        note: "These are mainly lifestyle purchases and rarely return their original value during resale.",
      },
      {
        item: "Trend-heavy features",
        cost: "Uncertain value",
        note: "Feature walls, bold themes and niche carpentry may impress some buyers but turn others away.",
      },
    ],
    scenariosTitle: "Relatable Singapore scenarios",
    scenarios: [
      {
        title: "Young BTO couple planning to sell after MOP",
        amount: "S$90,000–S$120,000 total move-in spend",
        details: [
          "They renovate nicely, buy new appliances and furnish everything before moving in.",
          "The renovation loan may be cleared by year five if structured over 5 years and paid consistently.",
          "But the renovation itself may not return dollar-for-dollar value during resale.",
          "A safer plan is to prioritise foundation works and phase non-essential styling later.",
        ],
      },
      {
        title: "Resale HDB owner with hidden site costs",
        amount: "Initial budget S$60,000, final spend S$85,000+",
        details: [
          "Old tiles, wiring, plumbing and damaged surfaces may only become clear after hacking.",
          "If appliances and furniture were not budgeted separately, cashflow becomes tight near move-in.",
          "A proper buffer is more important for resale homes than for new BTO flats.",
        ],
      },
      {
        title: "Condo upgrader influenced by hotel-style interiors",
        amount: "High spend on finishes and styling",
        details: [
          "The owner may spend heavily on stone-look finishes, fluted panels, designer lights and custom furniture.",
          "Some choices improve daily enjoyment, but not all improve resale value.",
          "A mature budget separates long-term infrastructure from aesthetic upgrades that can be added later.",
        ],
      },
    ],
    priorityTitle: "A smarter way to prioritise the move-in budget",
    priorityRows: [
      {
        item: "Spend earlier",
        cost: "Layout, storage, electrical, lighting positions, plumbing and carpentry quality",
        note: "These affect daily living and are harder to change after move-in.",
      },
      {
        item: "Plan carefully",
        cost: "Aircon, fridge, washer, TV, fans and lighting",
        note: "These are essential, but specifications and dimensions should be coordinated early.",
      },
      {
        item: "Spend later",
        cost: "Artwork, rugs, side tables, decorative lamps, display items and styling pieces",
        note: "These can evolve as the family understands how they use the home.",
      },
      {
        item: "Avoid financing",
        cost: "Non-essential decor and trend-led upgrades",
        note: "Borrowing for items that depreciate quickly can create unnecessary financial pressure.",
      },
    ],
    internalLinksTitle: "Useful planning tools and related guides",
    internalLinks: [
      {
        label: "Renovation cost calculator",
        to: "/renovation-cost-calculator",
        text: "Estimate your renovation works separately before adding appliances and furniture to your move-in budget.",
      },
      {
        label: "Renovation quotation guide",
        to: "/insights/renovation-quotation-singapore",
        text: "Understand what is included or excluded in a Singapore renovation quotation before comparing prices.",
      },
      {
        label: "Renovation mistakes guide",
        to: "/insights/renovation-mistakes-singapore",
        text: "Avoid common budgeting and planning mistakes that cause renovation costs to increase.",
      },
      {
        label: "HDB renovation timeline",
        to: "/insights/hdb-renovation-timeline-singapore",
        text: "Plan your renovation timeline around approvals, carpentry lead time and move-in readiness.",
      },
    ],
    faqTitle: "Move-in budget FAQ",
    faqs: [
      {
        question: "What is the real cost of moving into a new home in Singapore?",
        answer:
          "The real cost includes renovation works, appliances, furniture, styling, moving expenses and possible loan repayments. The renovation quotation alone is not the full move-in budget.",
      },
      {
        question: "Should appliances be included in my renovation budget?",
        answer:
          "They should be planned separately but included in the total move-in budget. Aircon, fridge, washer, dryer, TV, fans and lighting can add a significant amount after the renovation quote is confirmed.",
      },
      {
        question: "Should furniture be included in my renovation budget?",
        answer:
          "Furniture should be separated from renovation works. Essential items such as mattress, sofa and dining furniture may be needed early, but decorative pieces, rugs, art and styling items can usually be added slowly after moving in.",
      },
      {
        question: "How long is a renovation loan in Singapore?",
        answer:
          "Many renovation loans in Singapore have tenures of 1 to 5 years. The exact tenure, interest rate and approval amount depend on the bank, borrower profile and prevailing promotion.",
      },
      {
        question: "How much renovation loan can I borrow in Singapore?",
        answer:
          "Many bank renovation loans are commonly capped at up to 6 times monthly income or S$30,000, whichever is lower. This means a larger move-in budget may still require cash savings or other financing.",
      },
      {
        question: "Does renovation increase HDB resale value after MOP?",
        answer:
          "Renovation can improve buyer appeal and make the flat feel more move-in ready, but it does not automatically add the full renovation cost to the resale price. Location, lease, layout, market demand and buyer taste still matter.",
      },
      {
        question: "If I spend S$100,000 on renovation and move-in costs, will I recover it after 5 years?",
        answer:
          "Not necessarily. Some value may remain in practical layout, storage and well-kept finishes, but appliances, furniture and trend-heavy features usually depreciate. Homeowners should not treat renovation as a savings account.",
      },
      {
        question: "What if I cannot sell my HDB after MOP?",
        answer:
          "If the sale is delayed, the renovation should still make sense as a home to continue living in. This is why the budget should remain financially sustainable even if the homeowner stays longer than planned.",
      },
      {
        question: "What should I prioritise before moving in?",
        answer:
          "Prioritise layout, storage, electrical planning, lighting positions, plumbing, flooring and durable carpentry. Styling items and decorative furniture can usually be added later.",
      },
      {
        question: "Is it better to fully furnish the home before moving in?",
        answer:
          "Not always. Many homes become more personal when furniture and decor are added gradually after the owner has lived in the space and understands daily habits better.",
      },
    ],
    ctaTitle: "Planning your renovation and move-in budget?",
    ctaText:
      "Start by separating renovation works from appliances and furniture. ID Work Studio can help you plan the renovation foundation clearly, identify practical priorities and avoid spending heavily on items that do not improve daily living.",
    ctaPrimary: "Use renovation calculator",
    ctaSecondary: "Request a quote",
    breadcrumbCurrent: "Real Cost of Moving Into a New Home",
  },
  zh: {
    metaTitle: "新加坡搬入新家的真实费用 | ID Work Studio",
    metaDescription:
      "新加坡屋主搬入新家的真实预算指南，涵盖装修、电器、家具、装修贷款、五年MOP后的转售价值，以及搬家前应如何规划预算。",
    canonical: "https://idworkstudio.com/insights/real-cost-moving-home-singapore",
    eyebrow: "新加坡屋主预算指南",
    title: "新加坡搬入新家的真实费用",
    subtitle:
      "搬入新家的真实费用，不只是装修报价。新加坡屋主还需要规划电器、家具、软装、装修贷款、五年MOP后的转售价值，以及如果不能如期卖房时的财务压力。",
    readTime: "10分钟阅读",
    category: "装修预算",
    heroImageAlt: "新加坡高级暖色系住家室内设计，客厅与餐厅展示搬入前预算规划",
    quickAnswerTitle: "快速答案",
    quickAnswer:
      "实际搬入预算应该把装修工程、电器和家具分开计算，而不是全部混在一个装修数字里。装修建立家的基础，电器让生活可以运作，家具和软装则可以在入住后慢慢增加。如果屋主搬入前花了 S$100,000，也不应该假设五年MOP后卖房时可以全数回收。",
    costRows: [
      {
        label: "装修工程",
        value: "家的基础费用",
        note: "包括木工、地板、拆除、瓷砖、水电和油漆。这些项目入住后要更改会比较麻烦。",
      },
      {
        label: "电器",
        value: "入住必需品",
        note: "冷气、冰箱、电视、洗衣机、灯具和风扇，常常是屋主预算时忘记计算的项目。",
      },
      {
        label: "家具与软装",
        value: "生活风格层次",
        note: "沙发、餐桌椅、地毯、艺术品和装饰品，通常可以入住后慢慢添加。",
      },
      {
        label: "装修贷款",
        value: "现金流压力",
        note: "月供、利息和贷款年限，会影响拿钥匙后真正的装修成本。",
      },
    ],
    threeCostsTitle: "屋主应该分开的三个预算",
    threeCostsIntro:
      "很多屋主说自己有装修预算，但其实他们真正需要的是搬入预算。这两者不一样。把三个类别分开，才能更清楚判断自己是否花得太快、太满或太重。",
    threeCosts: [
      {
        item: "装修工程",
        cost: "通常是最大的固定费用",
        note: "应该认真规划格局、收纳、电位、防水、瓷砖、地板和木工质量。",
      },
      {
        item: "电器与功能性必需品",
        cost: "常见约 S$8,000–S$25,000+",
        note: "冷气、冰箱、洗衣机、烘干机、电视、灯具、风扇和厨房电器，都应该在入住前规划。",
      },
      {
        item: "家具与软装",
        cost: "可以分阶段完成",
        note: "沙发、餐椅、地毯、灯饰、艺术品和装饰品，不一定要在第一天全部完成。",
      },
    ],
    loanTitle: "装修贷款：装修结束后的真实成本",
    loanIntro:
      "装修贷款可以让前期付款看起来比较轻松，但入住后会变成每月固定负担。在新加坡，银行装修贷款常见上限是月收入6倍或 S$30,000，以较低者为准，贷款年限通常最高5年。促销利率会变化，屋主更应该看有效利率和总还款，而不只是表面利率。",
    loanRows: [
      {
        item: "常见贷款年限",
        cost: "1–5年",
        note: "5年贷款期和很多年轻BTO屋主的MOP时间相近，但也代表贷款可能贯穿整个入住初期。",
      },
      {
        item: "常见贷款上限",
        cost: "最高 S$30,000 或月收入6倍",
        note: "如果整体搬入费用是 S$80,000–S$120,000，其余金额仍可能需要现金、分期付款或其他融资方式。",
      },
      {
        item: "利息现实",
        cost: "有效利率更重要",
        note: "有效利率比广告上的表面利率更能反映真实借贷成本。比较时应看总还款，而不只是月供。",
      },
      {
        item: "现金流风险",
        cost: "每月压力",
        note: "拿钥匙时看似轻松的月供，在房贷、水电、孩子、工作变动或突发开支出现后，感受可能完全不同。",
      },
    ],
    sections: [
      {
        eyebrow: "预算心理",
        title: "为什么多数搬入预算会失控",
        paragraphs: [
          "多数预算失控，是因为屋主只看装修报价。他们规划了木工、地板和瓷砖，却忘记还需要购买让家真正可以入住的物品。",
          "所以一个 S$70,000 的装修，很容易变成 S$100,000 的搬入决定。额外费用可能来自冷气、冰箱、洗衣机、烘干机、风扇、灯具、电视、沙发、床垫、窗帘和日常小物，而这些一开始未必包含在装修报价内。",
        ],
        bullets: [
          "装修报价不是完整搬入费用。",
          "电器是功能性必需品，不是可有可无的装饰。",
          "家具和软装不应为了拍照而一次买齐。",
          "漂亮的家应该降低压力，而不是制造长期财务压力。",
        ],
      },
      {
        eyebrow: "装修工程",
        title: "装修建立家的基础",
        paragraphs: [
          "装修工程是入住后更改起来最贵、最麻烦的部分。包括格局规划、电位、水管、地板、拆除、瓷砖、天花和内置木工。",
          "这些项目会影响日常生活很多年，因此值得认真规划。通常，把预算花在基础工程上，比过早花在容易更换的软装上更实际。",
        ],
        bullets: [
          "优先规划实用动线和空间流动。",
          "先解决收纳，再考虑造型墙。",
          "木工制作前确认灯位和电位。",
          "选择适合新加坡湿度和日常保养的材料。",
        ],
      },
      {
        eyebrow: "电器",
        title: "电器常常到最后才被发现超预算",
        paragraphs: [
          "很多屋主记得装修费用，却低估电器费用。冷气、冰箱、洗衣机、风扇、灯具和电视，都可能让搬入预算增加不少。",
          "更重要的是，有些电器会影响装修规划。冷气管线、电位、抽油烟机电位、烤箱电位、冰箱尺寸和洗衣机位置，都应该早期讨论，而不是木工做好后才处理。",
        ],
        bullets: [
          "冷气应连同管线、排水和管槽路线一起规划。",
          "冰箱、洗衣机和烘干机尺寸，应在木工和空间规划前确认。",
          "灯具既是电器费用，也是装修规划问题。",
          "风扇、电视点和抽油烟机电位，应纳入电工讨论。",
        ],
      },
      {
        eyebrow: "家具与软装",
        title: "一个家不需要在第一天就完全布置好",
        paragraphs: [
          "在新加坡，很多屋主觉得搬进去之前必须把所有东西都完成。家要能拍照、能招待客人，也要看起来像社交媒体上的成品。这种压力很容易导致冲动购买和不必要支出。",
          "许多欧洲家庭的个性，是慢慢形成的。他们先住进去，了解光线怎么进入空间、餐厅怎么使用、家人自然会坐在哪里、真正需要什么家具。家变得有个性，是因为它跟着生活成长，而不是一次性购物清单完成。",
          "好的装修建立家的基础；家的个性，是在生活中慢慢累积出来的。",
        ],
        bullets: [
          "先买必需家具：床垫、基本餐桌椅、必要沙发。",
          "地毯、艺术品、灯饰和装饰品可以入住后慢慢加。",
          "不要一次性按照某个趋势或展厅风格买齐所有东西。",
          "给家一点时间，让它自然形成自己的性格。",
        ],
      },
      {
        eyebrow: "贷款风险",
        title: "为什么装修贷款一开始看起来很容易负担",
        paragraphs: [
          "装修贷款会让人感觉轻松，因为月供看起来比总装修金额小很多。拿钥匙时，屋主也可能假设未来花红、加薪或五年后转售利润会让决定更轻松。",
          "真正的风险是，贷款只是压力的一部分。房贷、水电、保险、孩子、工作变化和生活开销，都会在装修结束后继续出现。一个漂亮的家，不应该让屋主完全没有喘息空间。",
        ],
        bullets: [
          "不要因为银行批准最高金额就借满。",
          "比较总还款，而不只是月供。",
          "不要为了非必要软装而贷款。",
          "付了定金和装修进度款后，仍应保留紧急现金。",
        ],
      },
      {
        eyebrow: "转售价值",
        title: "装修不是储蓄户口",
        paragraphs: [
          "一些年轻夫妻会计划BTO五年MOP后出售再升级。这是很常见的新加坡想法，但装修预算不应该建立在每一块钱都会回来的假设上。",
          "装修良好的单位可能更吸引买家，也会让房子感觉更容易入住。但买家仍然会看地点、楼层、剩余屋契、格局、附近设施、市场情绪和个人喜好。五年后，装修已经不是全新的，电器已经折旧，设计趋势也可能改变。",
          "装修应该是为了你的生活方式，而不是因为你期待卖房时每一块钱都回来。",
        ],
        bullets: [
          "中性、实用的装修通常比重口味趋势更耐看。",
          "功能性收纳和良好保养有助于转售吸引力。",
          "活动家具和电器通常很难回收原价。",
          "过度定制的木工未必适合下一个买家。",
        ],
      },
      {
        eyebrow: "无法出售时",
        title: "如果五年后不能卖房怎么办？",
        paragraphs: [
          "风险不只是装修有没有增值。更深的问题是，如果屋主五年MOP后不能马上卖房，当初的装修决定是否仍然合理。",
          "转售市场疲弱、买家出价低、估价差距、买家不喜欢装修风格，或个人时间安排变化，都可能延迟升级计划。如果发生这种情况，这个家仍然应该舒适、实用，并且财务上可以继续承担。",
        ],
        bullets: [
          "不要只为了未来转售故事而装修。",
          "避免看起来很厉害，但日常不好住的设计。",
          "即使卖房延迟，贷款月供也应保持可承受。",
          "选择一个住5年或10年都合理的装修方案。",
        ],
      },
    ],
    mopTitle: "五年MOP后：装修还剩多少价值？",
    mopIntro:
      "S$100,000 的搬入支出，不会自动变成 S$100,000 的转售价值。有些部分能提升居住体验和买家印象，有些则会快速折旧，或对下一位买家并不重要。",
    mopRows: [
      {
        item: "实用格局和收纳",
        cost: "保值较好",
        note: "好的规划能解决真实生活问题，因此对转售吸引力有帮助。",
      },
      {
        item: "中性木工和良好做工",
        cost: "部分保值",
        note: "保养良好的内置木工能让买家觉得可以直接入住，但喜好仍然很主观。",
      },
      {
        item: "电器",
        cost: "折旧较快",
        note: "冷气、冰箱、洗衣机和电视，会因为年份、保修和使用情况而折旧。",
      },
      {
        item: "活动家具和装饰",
        cost: "回收价值低",
        note: "这些主要是生活消费，转售时很少能回到原价。",
      },
      {
        item: "强趋势设计",
        cost: "价值不确定",
        note: "造型墙、强烈主题和小众木工可能吸引部分买家，也可能让其他买家却步。",
      },
    ],
    scenariosTitle: "新加坡屋主常见情境",
    scenarios: [
      {
        title: "准备五年MOP后卖房的年轻BTO夫妻",
        amount: "整体搬入支出 S$90,000–S$120,000",
        details: [
          "他们装修得很完整，购买全新电器，并在入住前把家具买齐。",
          "如果贷款是5年期，并且每月正常还款，装修贷款可能在第五年还清。",
          "但装修本身未必能在转售时逐元回收。",
          "更稳妥的做法，是优先做好基础工程，非必要软装分阶段完成。",
        ],
      },
      {
        title: "遇到隐藏现场费用的二手HDB屋主",
        amount: "原本预算 S$60,000，最后支出 S$85,000+",
        details: [
          "旧瓷砖、电线、水管和损坏表面，可能拆除后才真正看见。",
          "如果电器和家具没有分开预算，临近入住时现金流会很紧。",
          "二手房比新BTO更需要预留缓冲预算。",
        ],
      },
      {
        title: "受酒店风格影响的公寓升级屋主",
        amount: "大量预算花在饰面和软装",
        details: [
          "屋主可能大量使用石材感饰面、格栅板、设计灯具和定制家具。",
          "有些选择能提升日常享受，但不一定提高转售价值。",
          "成熟的预算应把长期基础工程和后期美学升级分开。",
        ],
      },
    ],
    priorityTitle: "更聪明的搬入预算优先顺序",
    priorityRows: [
      {
        item: "先花",
        cost: "格局、收纳、电位、灯位、水管和木工质量",
        note: "这些影响日常生活，而且入住后比较难更改。",
      },
      {
        item: "认真规划",
        cost: "冷气、冰箱、洗衣机、电视、风扇和灯具",
        note: "这些是必需品，但尺寸和规格要提早协调。",
      },
      {
        item: "后花",
        cost: "艺术品、地毯、边几、装饰灯、摆设和软装",
        note: "这些可以在家人了解生活习惯后慢慢增加。",
      },
      {
        item: "避免贷款",
        cost: "非必要装饰和流行趋势升级",
        note: "为快速折旧的物品借钱，会制造不必要的财务压力。",
      },
    ],
    internalLinksTitle: "实用预算工具与相关指南",
    internalLinks: [
      {
        label: "装修费用计算器",
        to: "/renovation-cost-calculator",
        text: "先估算装修工程费用，再把电器和家具加入整体搬入预算。",
      },
      {
        label: "新加坡装修报价指南",
        to: "/insights/renovation-quotation-singapore",
        text: "比较装修价格前，先了解新加坡装修报价通常包含和不包含什么。",
      },
      {
        label: "新加坡装修错误指南",
        to: "/insights/renovation-mistakes-singapore",
        text: "避免常见预算和规划错误，减少装修费用增加的风险。",
      },
      {
        label: "HDB装修时间表",
        to: "/insights/hdb-renovation-timeline-singapore",
        text: "根据审批、木工制作和入住时间来规划装修流程。",
      },
    ],
    faqTitle: "搬入预算常见问题",
    faqs: [
      {
        question: "新加坡搬入新家的真实费用包括什么？",
        answer:
          "真实费用包括装修工程、电器、家具、软装、搬家费用和可能的贷款还款。装修报价本身不是完整搬入预算。",
      },
      {
        question: "电器应该算进装修预算吗？",
        answer:
          "电器应该分开规划，但必须算进整体搬入预算。冷气、冰箱、洗衣机、烘干机、电视、风扇和灯具，都会在装修报价确认后增加不少费用。",
      },
      {
        question: "家具应该算进装修预算吗？",
        answer:
          "家具应该和装修工程分开。床垫、沙发和餐桌椅可能需要较早购买，但装饰品、地毯、艺术品和软装通常可以入住后慢慢增加。",
      },
      {
        question: "新加坡装修贷款一般多久？",
        answer:
          "许多新加坡装修贷款年限是1至5年。实际年限、利率和批准金额取决于银行、借款人条件和当时促销。",
      },
      {
        question: "新加坡装修贷款可以借多少？",
        answer:
          "很多银行装修贷款常见上限是月收入6倍或 S$30,000，以较低者为准。因此较大的搬入预算，仍可能需要现金储蓄或其他融资。",
      },
      {
        question: "装修会提高HDB五年MOP后的转售价值吗？",
        answer:
          "装修可以提高买家兴趣，让单位感觉更容易入住，但不会自动把完整装修费用加进转售价。地点、屋契、格局、市场需求和买家喜好仍然重要。",
      },
      {
        question: "如果我花 S$100,000 装修和搬入，五年后能回收吗？",
        answer:
          "不一定。实用格局、收纳和保养良好的饰面可能仍有价值，但电器、家具和强趋势设计通常会折旧。屋主不应把装修当成储蓄户口。",
      },
      {
        question: "如果五年MOP后卖不掉HDB怎么办？",
        answer:
          "如果卖房延迟，这个装修仍然应该适合作为继续居住的家。因此预算必须可持续，而不是完全依赖五年后顺利卖房。",
      },
      {
        question: "搬入前应该先花钱在哪些项目？",
        answer:
          "优先规划格局、收纳、电位、灯位、水管、地板和耐用木工。软装和装饰家具通常可以之后再慢慢增加。",
      },
      {
        question: "搬家前一定要把家具全部买齐吗？",
        answer:
          "不一定。很多家是在屋主住进去、了解生活习惯后，慢慢添加家具和装饰，反而更有个性。",
      },
    ],
    ctaTitle: "正在规划装修和搬入预算？",
    ctaText:
      "先把装修工程、电器和家具分开。ID Work Studio 可以协助你清楚规划装修基础、判断实用优先顺序，并避免把预算过度花在不改善日常生活的项目上。",
    ctaPrimary: "使用费用计算器",
    ctaSecondary: "索取装修报价",
    breadcrumbCurrent: "新加坡搬入新家的真实费用",
  },
};

export default function RealCostMovingIntoNewHomeSingapore() {
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
              {t.costRows.map((row) => (
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
              {t.threeCostsTitle}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5f5a54]">{t.threeCostsIntro}</p>
            <div className="mt-6 overflow-hidden rounded-3xl border border-[#e8e1d7] bg-white shadow-sm">
              {t.threeCosts.map((row) => (
                <div key={row.item} className="grid gap-2 border-b border-[#e8e1d7] p-5 last:border-b-0 md:grid-cols-[1fr_1fr_1.7fr] md:gap-5">
                  <p className="font-semibold text-[#2C2C2C]">{row.item}</p>
                  <p className="text-sm font-semibold text-[#C5A059]">{row.cost}</p>
                  <p className="text-sm leading-7 text-[#5f5a54]">{row.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14 rounded-3xl border border-[#e8e1d7] bg-white p-6 shadow-sm md:p-8">
            <h2 className="font-serif text-3xl font-semibold">{t.loanTitle}</h2>
            <p className="mt-5 text-base leading-8 text-[#5f5a54]">{t.loanIntro}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {t.loanRows.map((row) => (
                <div key={row.item} className="rounded-2xl border border-[#e8e1d7] bg-[#fffdf8] p-5">
                  <p className="text-sm font-semibold text-[#6f6a63]">{row.item}</p>
                  <p className="mt-2 text-xl font-bold text-[#2C2C2C]">{row.cost}</p>
                  <p className="mt-2 text-sm leading-7 text-[#5f5a54]">{row.note}</p>
                </div>
              ))}
            </div>
          </section>

          {t.sections.map((section) => (
            <section key={section.title} className="mb-14">
              {section.eyebrow && (
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
                  {section.eyebrow}
                </p>
              )}
              <h2 className="font-serif text-3xl font-semibold leading-tight md:text-4xl">{section.title}</h2>
              <div className="mt-5 space-y-4 text-base leading-8 text-[#5f5a54]">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.bullets && (
                <ul className="mt-6 grid gap-3 md:grid-cols-2">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="rounded-2xl border border-[#e8e1d7] bg-white p-4 text-sm leading-7 text-[#5f5a54] shadow-sm">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section className="mb-14">
            <h2 className="border-b border-[#e8e1d7] pb-4 font-serif text-3xl font-semibold">
              {t.mopTitle}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5f5a54]">{t.mopIntro}</p>
            <div className="mt-6 overflow-hidden rounded-3xl border border-[#e8e1d7] bg-white shadow-sm">
              {t.mopRows.map((row) => (
                <div key={row.item} className="grid gap-2 border-b border-[#e8e1d7] p-5 last:border-b-0 md:grid-cols-[1fr_0.9fr_1.7fr] md:gap-5">
                  <p className="font-semibold text-[#2C2C2C]">{row.item}</p>
                  <p className="text-sm font-semibold text-[#C5A059]">{row.cost}</p>
                  <p className="text-sm leading-7 text-[#5f5a54]">{row.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="font-serif text-3xl font-semibold">{t.scenariosTitle}</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {t.scenarios.map((scenario) => (
                <div key={scenario.title} className="rounded-3xl border border-[#e8e1d7] bg-white p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C5A059]">{scenario.amount}</p>
                  <h3 className="mt-3 font-serif text-2xl font-semibold leading-tight">{scenario.title}</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[#5f5a54]">
                    {scenario.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14 rounded-3xl border border-[#e8e1d7] bg-[#fffdf8] p-6 shadow-sm md:p-8">
            <h2 className="font-serif text-3xl font-semibold">{t.priorityTitle}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {t.priorityRows.map((row) => (
                <div key={row.item} className="rounded-2xl border border-[#e8e1d7] bg-white p-5">
                  <p className="text-sm font-semibold text-[#C5A059]">{row.item}</p>
                  <p className="mt-2 font-semibold leading-7 text-[#2C2C2C]">{row.cost}</p>
                  <p className="mt-2 text-sm leading-7 text-[#5f5a54]">{row.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="font-serif text-3xl font-semibold">{t.internalLinksTitle}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {t.internalLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-2xl border border-[#e8e1d7] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#C5A059] hover:shadow-md"
                >
                  <p className="font-semibold text-[#2C2C2C]">{item.label}</p>
                  <p className="mt-2 text-sm leading-7 text-[#5f5a54]">{item.text}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="font-serif text-3xl font-semibold">{t.faqTitle}</h2>
            <div className="mt-6 space-y-3">
              {t.faqs.map((faq) => (
                <details key={faq.question} className="rounded-2xl border border-[#e8e1d7] bg-[#fffdf8] p-5">
                  <summary className="cursor-pointer text-base font-semibold">{faq.question}</summary>
                  <p className="mt-3 text-sm leading-7 text-[#5f5a54]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="rounded-3xl bg-[#151515] p-7 text-white md:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C5A059]">ID Work Studio</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold md:text-4xl">{t.ctaTitle}</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/75">{t.ctaText}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/renovation-cost-calculator"
                className="inline-flex items-center justify-center rounded-full bg-[#C5A059] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#d6b36c]"
              >
                {t.ctaPrimary}
              </Link>
              <a
                href="https://wa.me/6598333085"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#C5A059] hover:text-[#C5A059]"
              >
                {t.ctaSecondary}
              </a>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
