import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

/**
 * ============================================================================
 * KNOWLEDGE METADATA (AUTHOR ONLY)
 * ============================================================================
 *
 * Knowledge Metadata
 *
 * Primary Section
 * □ Residential
 * ☑ Commercial
 * □ Both
 *
 * Primary Knowledge Topic:
 * Commercial Renovation Approvals
 *
 * Primary Entity:
 * Commercial Renovation Approvals Singapore
 *
 * Related Planning Tool:
 * None
 *
 * Related Service Page:
 * /commercial
 *
 * Related Guides:
 * /insights/commercial-renovation-cost-singapore
 * /insights/office-renovation-timeline-singapore
 * /commercial/reinstatement
 *
 * ============================================================================
 */

type FaqItem = {
  question: string;
  answer: string;
};

type SummaryCard = {
  label: string;
  value: string;
  note: string;
};

type Section = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  scenario?: string;
  link?: {
    to: string;
    label: string;
  };
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
  quickAnswerTitle: string;
  quickAnswer: string;
  summaryCards: SummaryCard[];
  sections: Section[];
  comparisonTitle: string;
  comparisonIntro: string;
  comparisonRows: {
    project: string;
    mainChecks: string;
    timelineRisk: string;
  }[];
  reviewCtaTitle: string;
  reviewCtaText: string;
  reviewCtaPrimary: string;
  reviewCtaSecondary: string;
  timelineTitle: string;
  timelineIntro: string;
  timeline: {
    step: string;
    title: string;
    text: string;
  }[];
  mistakesTitle: string;
  mistakes: {
    title: string;
    text: string;
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
      "Commercial Renovation Approvals Singapore (2026) | ID Work Studio",
    metaDescription:
      "Understand the approvals, landlord requirements, permits, timeline risks and hidden costs before commercial renovation starts in Singapore.",
    canonical:
      "https://idworkstudio.com/insights/commercial-renovation-approvals-singapore",
    eyebrow: "Singapore Commercial Renovation Guide",
    title:
      "Commercial Renovation Approvals in Singapore: What You Need Before Work Can Start",
    subtitle:
      "Commercial renovation usually needs more than a signed quotation. Depending on the unit and scope, you may need building approval, authority approval, insurance, contractor registration and a formal work permit before renovation begins.",
    readTime: "10 min read",
    category: "Commercial Renovation",
    quickAnswerTitle: "Quick answer",
    quickAnswer:
      "There is no single commercial renovation permit in Singapore. The exact requirements depend on the building, the intended business use and the proposed work. In many projects, the contractor must first coordinate drawings, management approval, professional review, insurance, deposits and a permit to start work. These steps should be included in the total move-in or opening timeline, not treated as an afterthought.",
    summaryCards: [
      {
        label: "Most common client question",
        value: "How long will it take?",
        note:
          "The answer must include planning, approvals, renovation, testing and handover—not construction alone.",
      },
      {
        label: "Important distinction",
        value: "Approval is not one step",
        note:
          "Building approval, government approval and permission to start work are different things.",
      },
      {
        label: "Main risk",
        value: "Late changes",
        note:
          "Design, material or equipment changes can affect price, drawings and completion date.",
      },
      {
        label: "Best first action",
        value: "Review the building guide",
        note:
          "The landlord or management fit-out guide often controls what must be submitted before work can start.",
      },
    ],
    sections: [
      {
        title: "Why can’t renovation start immediately after signing the lease?",
        paragraphs: [
          "Signing the lease gives you the right to occupy the unit, but it does not automatically give your contractor permission to begin renovation.",
          "Before work starts, the building management may need to review your layout, electrical plan, air-conditioning changes, fire-safety work, contractor details, insurance and work schedule. Some projects may also need approval from government authorities or review by a registered architect or engineer.",
          "For the business owner, this means the preparation stage is part of the real project timeline. A renovation that takes six weeks on site may still require additional time before the first worker is allowed into the unit.",
        ],
        scenario:
          "Example: an office contractor may be ready to start on Monday, but the building has not yet issued the work permit because the insurance certificate and electrical drawing are still outstanding. The site remains closed even though the quotation has already been signed.",
        bullets: [
          "Lease signed",
          "Design and drawings prepared",
          "Building management review",
          "Authority or professional review where required",
          "Insurance, deposits and contractor registration",
          "Formal permission to start work",
          "Renovation, testing and handover",
        ],
      },
      {
        title: "Why is there no single commercial renovation permit?",
        paragraphs: [
          "Different approvals serve different purposes. One party may check whether your business use is allowed. Another checks fire safety. The building management checks whether the work affects common systems, neighbouring tenants or the building’s own rules.",
          "This is why one approval does not automatically replace another. A landlord may approve your design, but a government authority may still require changes. The reverse is also true: government approval does not force the landlord to accept a design that breaks the building’s fit-out rules.",
          "The practical lesson is simple: ask what must be approved, who approves it, and what must happen before work can actually begin.",
        ],
      },
      {
        title: "The four approval groups every business owner should understand",
        paragraphs: [
          "The easiest way to understand the process is to group the requirements into four simple categories.",
        ],
        bullets: [
          "Building or landlord approval: the owner, landlord or Management Corporation Strata Title (MCST) checks whether your proposal follows the building’s rules.",
          "Government approval: depending on the work, authorities may review planning use, building work, fire safety, electrical work, plumbing or business licensing.",
          "Professional review: some work must be prepared, checked or certified by a registered architect, engineer or licensed specialist.",
          "Site permission: even after drawings are approved, the building may still require insurance, deposits, contractor registration and a formal work permit.",
        ],
      },
      {
        title: "Which Singapore authorities may be involved?",
        paragraphs: [
          "Not every project needs every authority. The right question is not “Which agencies exist?” but “Which part of my project triggers their involvement?”",
          "The Urban Redevelopment Authority (URA) deals mainly with whether the premises can be used for the intended business. The Singapore Civil Defence Force (SCDF) is responsible for fire safety. The Building and Construction Authority (BCA) oversees building and structural work. Electrical work may require a Licensed Electrical Worker (LEW), while plumbing work may require a licensed plumber.",
          "Some renovations also require a Qualified Person (QP). This is a registered architect or engineer who is authorised to prepare and submit certain plans. Your renovation company should identify early when such a professional is needed, because this can affect both cost and time.",
        ],
      },
      {
        title: "How do you know which approvals apply to your project?",
        paragraphs: [
          "Start with five questions: what business will operate in the unit, what the unit is currently approved for, what physical changes are proposed, which building systems will be affected, and what the landlord’s fit-out guide requires.",
          "If the business use changes, planning or fire-safety review may be needed. If walls, escape routes, sprinklers, alarms, electrical capacity, plumbing, exhaust or structural elements are affected, additional professional or authority review may be triggered.",
          "The safest approach is to identify these triggers before the quotation and programme are finalised. This gives the client a more realistic cost and move-in date.",
        ],
        bullets: [
          "Change of business use",
          "Changes to escape routes or fire protection",
          "Structural work, heavy equipment or floor loading",
          "Electrical upgrading, plumbing, exhaust or ventilation changes",
          "Shopfront, signage or common-property work",
        ],
      },
      {
        title: "What does building management usually ask for?",
        paragraphs: [
          "A building management team usually needs more than a simple floor plan. The exact list differs from one property to another, but common submissions include layout drawings, ceiling plans, electrical plans, air-conditioning plans, sprinkler layouts, contractor details, insurance and work schedules.",
          "Retail malls may also control shopfront design, signage, shutters and the first part of the shop entrance. Industrial properties may focus more on machinery weight, vibration, exhaust and electrical load. Office buildings often pay close attention to partitions, fire protection, air-conditioning and power distribution.",
          "This is why a fit-out guide from another building should never be treated as a universal rule. The current guide for your actual unit must be reviewed before the design is finalised.",
        ],
      },
      {
        title: "How approvals affect the move-in or opening date",
        paragraphs: [
          "The question clients ask most often is: “How long will it take?” The answer should include the whole journey, not only the physical renovation.",
          "A complete programme may include design confirmation, management review, drawing revisions, professional or authority approval, material ordering, site work, testing, final inspection and handover.",
          "A straightforward office may move faster than a restaurant, clinic or unit with major structural or electrical work. The timeline also changes when a building only allows noisy work at night or requires separate bookings for sprinkler shutdown, loading bays or service lifts.",
        ],
        scenario:
          "Example: the physical office renovation may take six weeks, but management review, revisions and final inspection add another two weeks. The practical move-in programme is therefore eight weeks, not six.",
        link: {
          to: "/insights/office-renovation-timeline-singapore",
          label: "Read the office renovation timeline guide",
        },
      },
      {
        title: "What usually causes delay?",
        paragraphs: [
          "Approval is not always the main source of delay. In real projects, late design decisions, material changes and equipment changes often create more disruption than the initial submission.",
          "When the client changes the agreed scope, the additional work should be recorded as a variation order. A variation order is a formal change to the original contract and may affect the price, completion date or both.",
          "For example, moving a room after the electrical and air-conditioning plans are coordinated may require new drawings, revised quantities and rework. The change may look small to the client but affect several trades at the same time.",
        ],
        bullets: [
          "Late confirmation of materials or finishes",
          "Design changes after drawings are submitted",
          "Equipment specifications arriving late",
          "Incomplete management documents",
          "Additional building comments or resubmission",
          "Electrical capacity or structural issues discovered late",
          "Restricted work hours or specialist contractor availability",
        ],
        scenario:
          "Example: changing the selected flooring after installation dates are booked may delay procurement, affect the work sequence and create a variation order. The cost is not limited to the material difference alone.",
      },
      {
        title: "Hidden costs that may sit outside the main renovation quotation",
        paragraphs: [
          "Commercial renovation cost is not limited to carpentry, partitions, flooring and electrical work. Some buildings require additional payments that may not appear in the main construction price.",
          "These costs may include professional consultant fees, submission fees, renovation deposits, insurance, management charges, electrical upgrading, fire-system shutdown, nominated contractor work, night-work charges, lift protection and temporary utilities.",
          "Before accepting a quotation, ask which of these costs are included, excluded or still unknown. A lower quotation is not always cheaper if key responsibilities have been left out.",
        ],
        link: {
          to: "/insights/commercial-renovation-cost-singapore",
          label: "See the commercial renovation cost guide",
        },
      },
      {
        title: "Office, retail, F&B and industrial projects are not the same",
        paragraphs: [
          "The building type and business activity change the approval risk.",
          "An office fit-out may focus on partitions, meeting rooms, fire protection, air-conditioning and electrical points. A retail unit may have strict shopfront and signage rules. A food and beverage (F&B) project may involve exhaust, drainage, grease control, heavy equipment, additional fire-safety work and business licensing. An industrial project may involve machinery loading, vibration, waste discharge and workplace safety.",
          "This means advice from a friend who renovated an office may not apply to a café, clinic or workshop. The safest approach is to assess the actual unit, intended use and landlord requirements together.",
        ],
        scenario:
          "Example: a simple office pantry may only need basic plumbing and power. A café in the same building may need kitchen exhaust, grease control, heavier electrical loading, fire-safety coordination and additional licensing.",
      },
      {
        title: "What must happen after construction is finished?",
        paragraphs: [
          "Finishing the physical work does not always mean the business can move in immediately.",
          "The building may require a final inspection, testing, updated drawings showing what was actually built, and proof that electrical or fire-safety work has been completed properly. Some businesses must also pass separate licensing inspections before opening.",
          "The renovation deposit may only be released after defects are rectified, common areas are cleared and all required documents are submitted. This final stage should be included in the move-in plan.",
        ],
      },
      {
        title: "Who is responsible for commercial renovation approvals?",
        paragraphs: [
          "The tenant remains responsible for making sure the premises is used lawfully and that the required approvals are obtained. The landlord or building management checks compliance with the property’s own rules, while registered professionals handle submissions that legally require their involvement.",
          "The renovation contractor can coordinate drawings, documents, nominated contractors and the site programme, but should not claim to replace a registered architect, engineer or licensed specialist where one is required.",
          "Before signing the renovation contract, the quotation should clearly state who prepares each drawing, who submits it, who pays the fees, and who follows up on comments or inspections.",
        ],
      },
      {
        title: "How ID Work Studio helps coordinate the process",
        paragraphs: [
          "Most business owners do not want to manage every drawing, contractor, building comment and work permit themselves. They want one team to keep the renovation moving and explain what is needed.",
          "ID Work Studio can review the unit, intended business use, landlord fit-out guide, proposed layout and target move-in date. We then help coordinate the renovation scope, management submissions, relevant specialists, nominated contractors and site programme.",
          "Where regulated work requires a registered professional, ID Work Studio coordinates with the appropriate architect, engineer or licensed specialist rather than pretending that every approval can be handled by the main contractor alone.",
        ],
        link: {
          to: "/commercial",
          label: "Explore ID Work Studio’s commercial renovation services",
        },
      },
      {
        title: "Plan reinstatement before the first renovation decision",
        paragraphs: [
          "Commercial tenants often focus only on getting into the unit. The lease may also require the unit to be returned to its original condition when the tenancy ends.",
          "Keeping records of the original condition, approved alterations and landlord-agreed items can reduce disputes later. Design choices made today may also affect future reinstatement cost.",
        ],
        link: {
          to: "/commercial/reinstatement",
          label: "Understand commercial reinstatement requirements",
        },
      },
    ],
    comparisonTitle: "How approval risks differ by project type",
    comparisonIntro:
      "The table below is not a complete legal checklist. It shows why different commercial projects should not be planned with the same assumptions.",
    comparisonRows: [
      {
        project: "Office",
        mainChecks:
          "Partitions, escape routes, fire protection, air-conditioning distribution and electrical points",
        timelineRisk:
          "Late layout changes, management revisions and move-in coordination",
      },
      {
        project: "Retail",
        mainChecks:
          "Shopfront, signage, shutters, display area, lighting and mall design rules",
        timelineRisk:
          "Design approval cycles, night work and common-area restrictions",
      },
      {
        project: "Food & beverage",
        mainChecks:
          "Kitchen exhaust, drainage, grease control, heavy equipment, power and fire safety",
        timelineRisk:
          "Specialist coordination, equipment confirmation and licensing",
      },
      {
        project: "Industrial",
        mainChecks:
          "Machinery weight, floor loading, vibration, ventilation, power and waste discharge",
        timelineRisk:
          "Structural review, equipment data and operational restrictions",
      },
    ],
    reviewCtaTitle: "Already received a landlord fit-out guide?",
    reviewCtaText:
      "Send ID Work Studio the fit-out guide together with your floor plan, intended business use and target move-in date. We can help identify the requirements that may affect the design, approval steps, renovation cost and overall programme before the quotation is finalised.",
    reviewCtaPrimary: "Request a Fit-Out Review",
    reviewCtaSecondary: "View Commercial Services",
    timelineTitle: "A practical commercial renovation approval timeline",
    timelineIntro:
      "The sequence below is a planning framework, not a promise that every project follows the same duration. The actual timing depends on the building, business use and work scope.",
    timeline: [
      {
        step: "1",
        title: "Check the unit and business use",
        text:
          "Confirm that the premises can support the intended operation, including power, air-conditioning, exhaust, drainage, signage and permitted use.",
      },
      {
        step: "2",
        title: "Prepare the design and technical drawings",
        text:
          "Develop the layout and identify the electrical, air-conditioning, plumbing, fire-safety and structural changes that may need review.",
      },
      {
        step: "3",
        title: "Submit to building management",
        text:
          "The landlord or MCST reviews the proposal against the building’s fit-out guide and may request revisions.",
      },
      {
        step: "4",
        title: "Obtain other approvals where required",
        text:
          "Registered professionals or government authorities may need to review certain works before construction starts.",
      },
      {
        step: "5",
        title: "Complete pre-start requirements",
        text:
          "Submit insurance, deposits, contractor registration, risk documents and applications for temporary services or specialist work.",
      },
      {
        step: "6",
        title: "Receive permission to start",
        text:
          "Only begin work after the building issues the relevant fit-out or renovation permit.",
      },
      {
        step: "7",
        title: "Renovate, test and inspect",
        text:
          "Complete the work, manage any approved variation orders, test the systems and arrange final inspections.",
      },
      {
        step: "8",
        title: "Handover and move in",
        text:
          "Submit completion documents, rectify outstanding items and confirm that the premises is ready for occupation or business opening.",
      },
    ],
    mistakesTitle: "Common mistakes that delay commercial renovation",
    mistakes: [
      {
        title: "Assuming landlord approval is enough",
        text:
          "The building may approve the layout but separate authority or professional approval may still be required.",
      },
      {
        title: "Planning only the site-work duration",
        text:
          "A six-week construction period does not include design, review, resubmission, inspection or business licensing.",
      },
      {
        title: "Changing the design too late",
        text:
          "Late changes can affect drawings, materials, specialist systems, price and completion date.",
      },
      {
        title: "Buying equipment before checking capacity",
        text:
          "Kitchen, clinic or industrial equipment may exceed the available electrical, drainage, exhaust or structural capacity.",
      },
      {
        title: "Ignoring nominated contractors",
        text:
          "Some buildings require their own fire, electrical or air-conditioning contractors for specific work, adding cost and coordination time.",
      },
      {
        title: "Treating every building the same",
        text:
          "Rules from another office, mall or industrial building may not apply to the current premises.",
      },
    ],
    faqTitle: "Frequently asked questions",
    faqs: [
      {
        question: "Do I need a permit for commercial renovation in Singapore?",
        answer:
          "Usually, you need written approval from the landlord or building management before work starts. Additional authority or professional approval depends on the unit, business use and renovation scope.",
      },
      {
        question: "How long does commercial renovation take in Singapore?",
        answer:
          "It depends on the project. The total programme should include design, approvals, construction, testing and handover. A straightforward office is usually faster than an F&B, clinic or technically complex project.",
      },
      {
        question: "Is landlord approval enough to start renovation?",
        answer:
          "Not always. The building may also require insurance, deposits, contractor registration and a work permit. Certain works may need separate authority or professional approval.",
      },
      {
        question: "Does every office renovation need SCDF approval?",
        answer:
          "No. The Singapore Civil Defence Force (SCDF) becomes relevant when the work affects fire safety, such as escape routes, fire-rated partitions, sprinklers, alarms or the approved use of the premises.",
      },
      {
        question: "What is a Qualified Person?",
        answer:
          "A Qualified Person (QP) is a registered architect or engineer authorised to prepare and submit certain regulated drawings. Not every renovation needs one.",
      },
      {
        question: "What is a Licensed Electrical Worker?",
        answer:
          "A Licensed Electrical Worker (LEW) is a licensed professional responsible for certain electrical design, testing, certification and supply-turn-on work.",
      },
      {
        question: "Can renovation begin while approval is pending?",
        answer:
          "Do not assume so. Many building manuals state that work can only start after all required approvals, insurance, deposits and permits are in place.",
      },
      {
        question: "What is a fit-out work permit?",
        answer:
          "It is the building management’s formal permission for the contractor to begin approved renovation work. Drawing approval alone may not be enough.",
      },
      {
        question: "What is a variation order?",
        answer:
          "A variation order is a formal change to the agreed renovation scope. It records the additional or reduced work and any effect on price or completion date.",
      },
      {
        question: "What costs may be excluded from the quotation?",
        answer:
          "Possible exclusions include consultant fees, authority fees, management deposits, insurance, nominated contractors, electrical upgrading, specialist testing and after-hours work.",
      },
      {
        question: "Can I move in as soon as construction finishes?",
        answer:
          "Not always. The building may require inspection, testing, updated drawings and completion documents. Some businesses also need operating licences before opening.",
      },
      {
        question: "Can ID Work Studio handle the submissions?",
        answer:
          "ID Work Studio can coordinate the renovation drawings, management requirements, specialists and project programme. Where regulated submissions require a registered professional, we coordinate with the appropriate architect, engineer or licensed specialist.",
      },
    ],
    ctaTitle: "Need clarity before you commit to the renovation?",
    ctaText:
      "ID Work Studio can review your floor plan, intended business use, landlord fit-out guide and target move-in date, then help you understand the likely approval steps, responsibilities, cost risks and realistic project programme before you commit to the final scope.",
    ctaPrimary: "Review My Commercial Project",
    ctaSecondary: "View Commercial Services",
    breadcrumbCurrent: "Commercial Renovation Approvals",
  },
  zh: {
    metaTitle:
      "新加坡商业装修审批与开工要求（2026）| ID Work Studio",
    metaDescription:
      "了解新加坡商业装修开工前可能需要的管理处审批、政府批准、施工准证、时间风险与隐藏费用。",
    canonical:
      "https://idworkstudio.com/insights/commercial-renovation-approvals-singapore",
    eyebrow: "新加坡商业装修指南",
    title: "新加坡商业装修审批：开工前需要完成什么？",
    subtitle:
      "商业装修通常不只是签了报价就能开工。视单位和工程范围而定，您可能还需要管理处批准、相关政府审批、保险、承包商登记以及正式施工准证。",
    readTime: "约10分钟阅读",
    category: "商业装修",
    quickAnswerTitle: "快速答案",
    quickAnswer:
      "新加坡并没有一张适用于所有商业装修的统一准证。实际要求取决于大厦、营业用途和装修范围。许多项目在开工前需要完成图纸协调、管理处审批、专业审核、保险、保证金和施工准证。这些步骤应纳入整体搬迁或开业时间，而不是等到装修前才处理。",
    summaryCards: [
      {
        label: "客户最常问的问题",
        value: "需要多久？",
        note:
          "答案必须包括规划、审批、施工、测试和交付，不只是现场施工时间。",
      },
      {
        label: "重要区别",
        value: "审批不是一个步骤",
        note:
          "大厦批准、政府批准和允许开工，是三件不同的事。",
      },
      {
        label: "主要风险",
        value: "后期改动",
        note:
          "设计、材料或设备改变，可能影响价格、图纸和完工日期。",
      },
      {
        label: "最佳第一步",
        value: "先看装修指南",
        note:
          "业主或管理处的装修指南，通常决定开工前必须提交什么。",
      },
    ],
    sections: [
      {
        title: "为什么签租约后不能马上开始装修？",
        paragraphs: [
          "签署租约代表您取得使用单位的权利，但并不等于承包商可以立即进场施工。",
          "开工前，管理处可能需要审核平面布局、电气图、空调改动、消防工程、承包商资料、保险和施工时间。部分项目也需要政府部门批准，或由注册建筑师、工程师进行专业审核。",
          "对商家来说，这代表准备阶段也是实际工期的一部分。即使现场施工只需六周，正式进场前仍可能需要额外时间。",
        ],
        bullets: [
          "签署租约",
          "准备设计与图纸",
          "管理处审核",
          "需要时进行政府或专业审核",
          "提交保险、保证金和承包商登记",
          "取得正式开工许可",
          "施工、测试与交付",
        ],
        scenario:
          "例子：办公室承包商已经准备星期一开工，但管理处仍未签发施工准证，因为保险证明和电气图尚未交齐。即使报价已经签署，工人仍不能进场。",
      },
      {
        title: "为什么没有一张统一的商业装修准证？",
        paragraphs: [
          "不同批准负责不同事项。有的检查营业用途是否合法，有的检查消防安全，而管理处则关注工程是否影响大厦系统、其他租户或物业规定。",
          "因此，一项批准不能自动取代另一项。业主可以接受您的设计，但政府部门仍可能要求修改。反过来，即使取得政府批准，若设计违反大厦装修指南，管理处仍可不允许施工。",
          "最实际的做法是先确认：需要批准什么、由谁批准，以及正式开工前还要完成哪些步骤。",
        ],
      },
      {
        title: "商家需要了解的四类审批",
        paragraphs: [
          "最容易理解的方法，是把要求分为四个类别。",
        ],
        bullets: [
          "业主或管理处批准：业主、房东或分层地契管理机构（Management Corporation Strata Title，简称MCST）检查方案是否符合大厦规定。",
          "政府批准：视工程而定，相关部门可能审核土地用途、建筑工程、消防、电气、给排水或营业执照。",
          "专业审核：部分工程必须由注册建筑师、工程师或持牌专业人士准备、检查或认证。",
          "现场开工许可：即使图纸获批，管理处仍可能要求保险、保证金、承包商登记和正式施工准证。",
        ],
      },
      {
        title: "哪些新加坡政府部门可能涉及？",
        paragraphs: [
          "并不是每个项目都需要所有部门。正确的问题不是“有哪些部门”，而是“我的工程哪一部分会触发审核”。",
          "市区重建局（Urban Redevelopment Authority，URA）主要处理单位是否可用于计划中的营业用途。新加坡民防部队（Singapore Civil Defence Force，SCDF）负责消防安全。建设局（Building and Construction Authority，BCA）负责建筑和结构工程。部分电气工程需要持牌电气人员（Licensed Electrical Worker，LEW），给排水工程则可能需要持牌水喉匠。",
          "某些项目还需要合格专业人士（Qualified Person，QP）。QP是获授权准备并提交特定图纸的注册建筑师或工程师。装修公司应尽早确认是否需要QP，因为这会影响费用和时间。",
        ],
      },
      {
        title: "如何判断您的项目需要哪些审批？",
        paragraphs: [
          "先回答五个问题：单位将经营什么业务、目前批准用途是什么、计划进行哪些改动、会影响哪些大厦系统，以及管理处装修指南要求什么。",
          "若营业用途改变，可能需要规划或消防审核。若工程影响墙体、逃生路线、喷淋、火警、电力容量、给排水、排气或结构，也可能触发额外专业或政府审批。",
          "最稳妥的做法，是在报价和时间表定案前识别这些触发点。这样客户才能更准确掌握费用和搬迁日期。",
        ],
        bullets: [
          "营业用途改变",
          "影响逃生路线或消防系统",
          "结构工程、重型设备或楼板荷载",
          "电力升级、给排水、排气或通风改动",
          "店面、招牌或公共区域工程",
        ],
      },
      {
        title: "管理处通常要求提交什么？",
        paragraphs: [
          "管理处通常不只需要一张平面图。不同物业要求不同，但常见资料包括布局图、天花图、电气图、空调图、喷淋图、承包商资料、保险和施工时间表。",
          "商场可能进一步限制店面、招牌、卷闸和入口区域设计。工业物业更关注机器重量、震动、排气和电力负荷。办公楼则常检查隔间、消防、空调和电力分配。",
          "因此，其他大厦的装修指南不能当作通用标准。正式设计前，应先阅读当前单位最新的管理处要求。",
        ],
      },
      {
        title: "审批如何影响搬迁或开业时间？",
        paragraphs: [
          "客户最常问的是：“需要多久？”正确答案必须包括整个流程，而不只是现场装修。",
          "完整时间表可能包括设计确认、管理处审核、图纸修改、专业或政府审批、材料订购、现场施工、测试、最终检查和交付。",
          "一般办公单位可能比餐饮、诊所或涉及复杂结构和电力工程的单位更快。若大厦只允许夜间噪音工程，或喷淋停水、装卸区和货梯必须预约，工期也会受到影响。",
        ],
        scenario:
          "例子：办公室现场施工可能需要六周，但管理处审核、修改和最终检查再增加两周。实际搬迁计划应按八周安排，而不是六周。",
        link: {
          to: "/insights/office-renovation-timeline-singapore",
          label: "阅读办公室装修时间指南",
        },
      },
      {
        title: "商业装修通常为什么延误？",
        paragraphs: [
          "审批不一定是最大延误来源。真实项目中，后期设计决定、材料更换和设备更改，往往比最初提交更容易打乱工程。",
          "当客户改变原定工程范围时，应使用变更单（Variation Order）记录。变更单是对原合同的正式修改，可能影响价格、完工日期，或两者同时受影响。",
          "例如，电气和空调图完成协调后才移动房间位置，可能需要重新出图、调整数量和返工。客户看来只是小改动，但可能同时影响多个工种。",
        ],
        bullets: [
          "材料或饰面确认太迟",
          "图纸提交后更改设计",
          "设备规格太迟提供",
          "管理处文件不完整",
          "需要重新提交或回复额外意见",
          "后期才发现电力或结构限制",
          "工作时间受限或指定承包商档期不足",
        ],
        scenario:
          "例子：施工日期已安排后才更换地板材料，可能影响订货、施工顺序并产生变更单。额外费用不只是两种材料之间的差价。",
      },
      {
        title: "主装修报价以外的隐藏费用",
        paragraphs: [
          "商业装修费用不只包括木工、隔间、地板和电气工程。有些大厦会要求额外付款，而这些费用未必列在主施工报价内。",
          "可能包括专业顾问费、申请费、装修保证金、保险、管理费、电力升级、消防系统停用、指定承包商、夜间施工、货梯保护和临时水电。",
          "接受报价前，应确认哪些费用已包括、哪些排除、哪些仍无法确定。报价较低，不代表最终总成本一定较低。",
        ],
        link: {
          to: "/insights/commercial-renovation-cost-singapore",
          label: "查看商业装修费用指南",
        },
      },
      {
        title: "办公室、零售、餐饮和工业装修并不相同",
        paragraphs: [
          "物业类型和营业活动会改变审批风险。",
          "办公室通常关注隔间、会议室、消防、空调和电气点位。零售单位可能有严格的店面和招牌规定。餐饮单位（Food and Beverage，F&B）可能涉及排气、排水、油脂处理、重型设备、额外消防工程和营业执照。工业项目则可能涉及机器荷载、震动、废水排放和工作场所安全。",
          "因此，朋友装修办公室的经验，不一定适用于咖啡店、诊所或工场。最稳妥的方法，是把实际单位、营业用途和业主要求一起评估。",
        ],
        scenario:
          "例子：一般办公室茶水间可能只需基本水电；同一栋大厦内的咖啡店则可能需要厨房排气、油脂处理、更高电力负荷、消防协调和额外营业执照。",
      },
      {
        title: "施工完成后还需要做什么？",
        paragraphs: [
          "完成现场工程，不一定代表商家可以马上搬入。",
          "管理处可能要求最终检查、系统测试、显示实际施工结果的更新图纸，以及电气或消防工程已经正确完成的证明。部分行业还必须通过营业执照检查后才能开业。",
          "装修保证金通常要在缺陷修好、公共区域清理及所有文件交齐后才退还。这一阶段也应纳入搬迁计划。",
        ],
      },
      {
        title: "商业装修审批由谁负责？",
        paragraphs: [
          "租户仍须确保单位合法使用，并取得所需批准。业主或管理处负责检查是否符合物业本身的规定，而法律规定必须由注册专业人士处理的提交，则应由相关专业人士负责。",
          "装修承包商可以协调图纸、文件、指定承包商和现场时间表，但不应在法律要求建筑师、工程师或持牌人员时，声称可以取代这些专业人士。",
          "签订装修合约前，报价应清楚列明：谁准备每份图纸、谁提交、谁承担费用，以及谁负责跟进意见和检查。",
        ],
      },
      {
        title: "ID Work Studio如何协调整个过程",
        paragraphs: [
          "大多数商家不想亲自管理每一张图纸、每一个承包商、每一项管理处意见和施工准证。他们更希望由一个团队推进工程，并清楚说明下一步要做什么。",
          "ID Work Studio可审核单位、营业用途、管理处装修指南、拟议布局和目标搬迁日期，并协调装修范围、管理处提交、相关专业人士、指定承包商和现场时间表。",
          "若受监管工程必须由注册专业人士处理，ID Work Studio会与适合的建筑师、工程师或持牌人员协调，而不会误导客户认为所有批准都能由主承包商独自完成。",
        ],
        link: {
          to: "/commercial",
          label: "了解ID Work Studio商业装修服务",
        },
      },
      {
        title: "第一次装修决定前，就应考虑复原工程",
        paragraphs: [
          "商业租户通常只关注如何尽快搬入，但租约可能要求在租期结束时把单位恢复原状。",
          "保留原始状况、获批改动和业主同意保留项目的记录，可减少日后争议。今天的设计决定，也可能影响未来的复原成本。",
        ],
        link: {
          to: "/commercial/reinstatement",
          label: "了解商业复原工程要求",
        },
      },
    ],
    comparisonTitle: "不同商业项目的审批风险",
    comparisonIntro:
      "以下比较并不是完整法律清单，而是帮助商家理解为什么不同项目不能用同一套假设来规划。",
    comparisonRows: [
      {
        project: "办公室",
        mainChecks:
          "隔间、逃生路线、消防、空调分配和电气点位",
        timelineRisk:
          "后期布局修改、管理处意见和搬迁协调",
      },
      {
        project: "零售",
        mainChecks:
          "店面、招牌、卷闸、陈列区域、照明和商场设计规定",
        timelineRisk:
          "设计审批轮次、夜间施工和公共区域限制",
      },
      {
        project: "餐饮",
        mainChecks:
          "厨房排气、排水、油脂处理、重型设备、电力和消防",
        timelineRisk:
          "专业协调、设备确认和营业执照",
      },
      {
        project: "工业",
        mainChecks:
          "机器重量、楼板荷载、震动、通风、电力和废水排放",
        timelineRisk:
          "结构审核、设备资料和营运限制",
      },
    ],
    reviewCtaTitle: "已经收到业主或管理处的装修指南？",
    reviewCtaText:
      "把装修指南、平面图、营业用途和目标搬迁日期交给ID Work Studio。我们可在报价定案前，协助识别可能影响设计、审批步骤、装修费用和整体时间表的要求。",
    reviewCtaPrimary: "申请装修指南审核",
    reviewCtaSecondary: "查看商业装修服务",
    timelineTitle: "商业装修审批的实际流程",
    timelineIntro:
      "以下是规划框架，并不是所有项目的固定时长。实际时间取决于大厦、营业用途和工程范围。",
    timeline: [
      {
        step: "1",
        title: "检查单位和营业用途",
        text:
          "确认单位能否支持计划中的业务，包括电力、空调、排气、排水、招牌和批准用途。",
      },
      {
        step: "2",
        title: "准备设计和技术图纸",
        text:
          "完成布局，并识别可能需要审核的电气、空调、给排水、消防和结构改动。",
      },
      {
        step: "3",
        title: "提交管理处审核",
        text:
          "房东或MCST根据大厦装修指南审核，并可能要求修改。",
      },
      {
        step: "4",
        title: "取得其他必要批准",
        text:
          "部分工程需要注册专业人士或政府部门审核后才能开工。",
      },
      {
        step: "5",
        title: "完成开工前要求",
        text:
          "提交保险、保证金、承包商登记、风险文件，以及临时水电或特殊工程申请。",
      },
      {
        step: "6",
        title: "取得正式开工许可",
        text:
          "只有在管理处签发相关装修或施工准证后才开始工作。",
      },
      {
        step: "7",
        title: "施工、测试和检查",
        text:
          "完成工程、管理获批变更、测试系统并安排最终检查。",
      },
      {
        step: "8",
        title: "交付和搬入",
        text:
          "提交完工文件、修正未完成项目，并确认单位可用于营业或搬迁。",
      },
    ],
    mistakesTitle: "常见延误错误",
    mistakes: [
      {
        title: "以为业主批准就足够",
        text:
          "管理处可以接受布局，但部分工程仍可能需要政府或专业审核。",
      },
      {
        title: "只计算现场施工时间",
        text:
          "六周施工并不包括设计、审核、重新提交、检查或营业执照。",
      },
      {
        title: "太迟更改设计",
        text:
          "后期改动可能影响图纸、材料、专业系统、价格和完工日期。",
      },
      {
        title: "未检查容量就购买设备",
        text:
          "厨房、诊所或工业设备可能超过现有电力、排水、排气或结构容量。",
      },
      {
        title: "忽略指定承包商",
        text:
          "部分大厦规定消防、电气或空调工程必须由其指定承包商执行，会增加费用和协调时间。",
      },
      {
        title: "把所有大厦当成一样",
        text:
          "其他办公室、商场或工业大厦的规定，未必适用于当前单位。",
      },
    ],
    faqTitle: "常见问题",
    faqs: [
      {
        question: "新加坡商业装修需要准证吗？",
        answer:
          "通常需要房东或管理处书面批准。是否还需要政府或专业审批，则取决于单位、营业用途和装修范围。",
      },
      {
        question: "新加坡商业装修通常需要多久？",
        answer:
          "取决于项目。完整时间应包括设计、审批、施工、测试和交付。一般办公室通常比餐饮、诊所或技术复杂的项目更快。",
      },
      {
        question: "有了业主批准就可以开工吗？",
        answer:
          "不一定。大厦还可能要求保险、保证金、承包商登记和施工准证。部分工程也需要额外政府或专业批准。",
      },
      {
        question: "每个办公室装修都需要SCDF批准吗？",
        answer:
          "不需要。新加坡民防部队（SCDF）通常在工程影响消防安全时介入，例如逃生路线、防火隔间、喷淋、火警系统或单位批准用途。",
      },
      {
        question: "什么是QP？",
        answer:
          "合格专业人士（Qualified Person，QP）是获授权准备并提交特定受监管图纸的注册建筑师或工程师。并非每项装修都需要QP。",
      },
      {
        question: "什么是LEW？",
        answer:
          "持牌电气人员（Licensed Electrical Worker，LEW）负责部分电气设计、测试、认证及通电工作。",
      },
      {
        question: "审批期间可以先开始装修吗？",
        answer:
          "不要自行假设可以。许多大厦规定，必须在所有批准、保险、保证金和施工准证完成后才能开工。",
      },
      {
        question: "什么是装修施工准证？",
        answer:
          "这是管理处正式允许承包商开始获批工程的文件。单纯图纸获批，未必足以开工。",
      },
      {
        question: "什么是变更单？",
        answer:
          "变更单是对原定装修范围的正式修改，用于记录增加或减少的工程，以及对价格和工期的影响。",
      },
      {
        question: "哪些费用可能不在报价内？",
        answer:
          "可能包括顾问费、政府申请费、管理处保证金、保险、指定承包商、电力升级、专业测试和夜间施工。",
      },
      {
        question: "施工完成后可以马上搬入吗？",
        answer:
          "不一定。管理处可能要求检查、测试、更新图纸和完工文件。部分行业也需要营业执照后才能开业。",
      },
      {
        question: "ID Work Studio可以处理提交吗？",
        answer:
          "ID Work Studio可协调装修图纸、管理处要求、专业人士和项目时间。若受监管提交必须由注册专业人士处理，我们会协调适合的建筑师、工程师或持牌人员。",
      },
    ],
    ctaTitle: "在正式确认装修前，需要更清楚的判断？",
    ctaText:
      "ID Work Studio可审核您的平面图、营业用途、管理处装修指南和目标搬迁日期，并在您确认最终工程范围前，说明可能涉及的审批步骤、各方责任、费用风险和较实际的项目时间表。",
    ctaPrimary: "审核我的商业装修项目",
    ctaSecondary: "查看商业装修服务",
    breadcrumbCurrent: "商业装修审批",
  },
};

export default function CommercialRenovationApprovalsSingapore() {
  const { i18n } = useTranslation();
  const lang = i18n.language === "zh" ? "zh" : "en";
  const t = content[lang];
  const heroImagePath =
    "/insights/commercial-renovation-approvals-singapore-hero.webp";
  const heroImageUrl =
    "https://idworkstudio.com/insights/commercial-renovation-approvals-singapore-hero.webp";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: t.title,
    description: t.metaDescription,
    url: t.canonical,
    image: heroImageUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": t.canonical,
    },
    keywords:
      lang === "zh"
        ? ["新加坡商业装修审批", "商业装修准证", "管理处装修批准", "商业装修时间"]
        : [
            "commercial renovation approvals Singapore",
            "commercial renovation permit Singapore",
            "landlord fit-out approval",
            "commercial renovation timeline",
          ],
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
    articleSection: t.category,
    isPartOf: {
      "@type": "WebSite",
      name: "ID Work Studio",
      url: "https://idworkstudio.com/",
    },
    about: {
      "@type": "Thing",
      name:
        lang === "zh"
          ? "新加坡商业装修审批"
          : "Commercial renovation approvals in Singapore",
    },
    mentions: [
      {
        "@type": "GovernmentOrganization",
        name: "Urban Redevelopment Authority",
      },
      {
        "@type": "GovernmentOrganization",
        name: "Singapore Civil Defence Force",
      },
      {
        "@type": "GovernmentOrganization",
        name: "Building and Construction Authority",
      },
    ],
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
        name: lang === "zh" ? "装修指南" : "Insights",
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
        <meta property="og:type" content="article" />
        <meta property="og:title" content={t.metaTitle} />
        <meta property="og:description" content={t.metaDescription} />
        <meta property="og:url" content={t.canonical} />
        <meta property="og:image" content={heroImageUrl} />
        <meta
          property="og:image:alt"
          content={lang === "zh" ? "新加坡商业装修审批指南" : "Commercial renovation approvals in Singapore"}
        />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.metaTitle} />
        <meta name="twitter:description" content={t.metaDescription} />
        <meta name="twitter:image" content={heroImageUrl} />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <main className="bg-[#FAF8F3] text-[#2C2C2C]">
        <section className="relative overflow-hidden bg-[#111] px-6 py-20 text-center text-white md:py-28">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImagePath})` }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background:
                "radial-gradient(circle at 20% 20%, rgba(197,160,89,0.55), transparent 34%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.12), transparent 30%)",
            }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-5xl">
            <p className="mb-5 inline-flex rounded-full border border-[#C5A059]/40 bg-black/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#D6B26B]">
              {t.eyebrow}
            </p>
            <h1 className="font-serif text-4xl font-semibold leading-tight md:text-6xl">
              {t.title}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
              {t.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs uppercase tracking-[0.16em] text-white/50">
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
              ← {lang === "zh" ? "返回装修指南" : "Back to insights"}
            </Link>
          </div>
        </section>

        <article className="mx-auto max-w-5xl px-6 py-14 md:py-20">
          <section className="mb-14 rounded-3xl border border-[#e8e1d7] bg-white p-6 shadow-sm md:p-8">
            <h2 className="font-serif text-3xl font-semibold">
              {t.quickAnswerTitle}
            </h2>
            <p className="mt-4 text-base leading-8 text-[#5f5a54]">
              {t.quickAnswer}
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {t.summaryCards.map((card) => (
                <div
                  key={card.label}
                  className="rounded-2xl border border-[#e8e1d7] bg-[#fffdf8] p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8b8176]">
                    {card.label}
                  </p>
                  <p className="mt-2 font-serif text-2xl font-semibold text-[#2C2C2C]">
                    {card.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#6f6a63]">
                    {card.note}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {t.sections.map((section) => (
            <section key={section.title} className="mb-14">
              <h2 className="border-b border-[#e8e1d7] pb-4 font-serif text-3xl font-semibold">
                {section.title}
              </h2>
              <div className="mt-6 space-y-4">
                {section.paragraphs?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base leading-8 text-[#5f5a54]"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="grid gap-3 md:grid-cols-2">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 rounded-2xl border border-[#e8e1d7] bg-white p-4 text-sm leading-7 text-[#5f5a54]"
                      >
                        <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#C5A059]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.scenario && (
                  <div className="rounded-2xl border-l-4 border-[#C5A059] bg-[#f4eee4] px-5 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8a6e36]">
                      {lang === "zh" ? "实际情境" : "Real-world scenario"}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[#5f5a54]">
                      {section.scenario}
                    </p>
                  </div>
                )}
                {section.link && (
                  <Link
                    to={section.link.to}
                    className="inline-flex items-center rounded-full border border-[#C5A059]/45 bg-[#fffaf0] px-5 py-2.5 text-sm font-semibold text-[#7c642f] hover:border-[#C5A059] hover:bg-white"
                  >
                    {section.link.label} →
                  </Link>
                )}
              </div>
            </section>
          ))}

          <section className="mb-14">
            <h2 className="border-b border-[#e8e1d7] pb-4 font-serif text-3xl font-semibold">
              {t.comparisonTitle}
            </h2>
            <p className="mt-5 text-base leading-8 text-[#5f5a54]">
              {t.comparisonIntro}
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-[#e8e1d7] bg-white">
              <div className="hidden grid-cols-[0.8fr_1.6fr_1.4fr] gap-4 border-b border-[#e8e1d7] bg-[#efe6d8] px-5 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#6f6a63] md:grid">
                <span>{lang === "zh" ? "项目类型" : "Project type"}</span>
                <span>{lang === "zh" ? "主要检查" : "Main checks"}</span>
                <span>{lang === "zh" ? "常见时间风险" : "Common timeline risk"}</span>
              </div>
              {t.comparisonRows.map((row) => (
                <div
                  key={row.project}
                  className="grid gap-3 border-b border-[#e8e1d7] p-5 last:border-b-0 md:grid-cols-[0.8fr_1.6fr_1.4fr] md:gap-4"
                >
                  <h3 className="font-semibold text-[#2C2C2C]">{row.project}</h3>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#8b8176] md:hidden">
                      {lang === "zh" ? "主要检查" : "Main checks"}
                    </p>
                    <p className="text-sm leading-7 text-[#5f5a54]">{row.mainChecks}</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#8b8176] md:hidden">
                      {lang === "zh" ? "常见时间风险" : "Common timeline risk"}
                    </p>
                    <p className="text-sm leading-7 text-[#5f5a54]">{row.timelineRisk}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14 rounded-3xl border border-[#d9c7aa] bg-[#fffaf0] p-6 shadow-sm md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6e36]">
              {lang === "zh" ? "管理处文件审核" : "Fit-out guide review"}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-[#2C2C2C]">
              {t.reviewCtaTitle}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#5f5a54]">
              {t.reviewCtaText}
            </p>
            <div className="mt-5 grid gap-3 text-sm text-[#5f5a54] sm:grid-cols-3">
              <div className="rounded-2xl border border-[#dfd4c4] bg-white px-4 py-3">
                {lang === "zh" ? "先看实际单位与营业用途" : "Review the actual unit and business use"}
              </div>
              <div className="rounded-2xl border border-[#dfd4c4] bg-white px-4 py-3">
                {lang === "zh" ? "说明审批与各方责任" : "Clarify approvals and responsibilities"}
              </div>
              <div className="rounded-2xl border border-[#dfd4c4] bg-white px-4 py-3">
                {lang === "zh" ? "规划较实际的搬迁时间" : "Plan a realistic move-in programme"}
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-full bg-[#C5A059] px-6 py-3 text-sm font-semibold text-white hover:bg-[#D6B26B]"
              >
                {t.reviewCtaPrimary}
              </Link>
              <Link
                to="/commercial"
                className="rounded-full border border-[#C5A059]/45 bg-white px-6 py-3 text-sm font-semibold text-[#7c642f] hover:border-[#C5A059]"
              >
                {t.reviewCtaSecondary}
              </Link>
            </div>
          </section>

          <section className="mb-14">
            <h2 className="border-b border-[#e8e1d7] pb-4 font-serif text-3xl font-semibold">
              {t.timelineTitle}
            </h2>
            <p className="mt-5 text-base leading-8 text-[#5f5a54]">
              {t.timelineIntro}
            </p>
            <div className="mt-6 grid gap-3">
              {t.timeline.map((item) => (
                <div
                  key={item.step}
                  className="grid grid-cols-[42px_1fr] gap-4 rounded-2xl border border-[#e8e1d7] bg-[#fffdf8] p-5 shadow-sm"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C5A059] text-sm font-bold text-white">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-7 text-[#5f5a54]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="border-b border-[#e8e1d7] pb-4 font-serif text-3xl font-semibold">
              {t.mistakesTitle}
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {t.mistakes.map((mistake) => (
                <div
                  key={mistake.title}
                  className="rounded-2xl border border-[#e8e1d7] bg-white p-5 shadow-sm"
                >
                  <h3 className="text-lg font-semibold">{mistake.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#5f5a54]">
                    {mistake.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14 rounded-3xl border border-[#dfd4c4] bg-[#efe6d8] p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6e36]">
              {lang === "zh" ? "项目规划提示" : "Project planning note"}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold">
              {lang === "zh"
                ? "不要只问施工需要多久"
                : "Do not ask only how long construction takes"}
            </h2>
            <p className="mt-4 text-base leading-8 text-[#5f5a54]">
              {lang === "zh"
                ? "更有用的问题是：从设计确认到审批、施工、检查和正式搬入，整个过程需要多久？这才是安排租金、搬迁、员工和开业日期时真正需要的时间。"
                : "The more useful question is: how long will the whole journey take from design confirmation to approvals, construction, inspection and actual move-in? That is the timeline needed to plan rent, relocation, staff and business opening."}
            </p>
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
                  <p className="mt-3 text-sm leading-7 text-[#5f5a54]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <section className="rounded-3xl bg-[#151515] p-7 text-white md:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C5A059]">
              ID Work Studio
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold">
              {t.ctaTitle}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70">
              {t.ctaText}
            </p>
            <div className="mt-5 grid gap-3 text-sm text-white/75 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                {lang === "zh" ? "审核实际单位与营业用途" : "Review the actual unit and business use"}
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                {lang === "zh" ? "厘清审批步骤与责任" : "Clarify approval steps and responsibilities"}
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                {lang === "zh" ? "规划现实的搬迁时间" : "Plan a realistic move-in programme"}
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-full bg-[#C5A059] px-6 py-3 text-sm font-semibold text-white hover:bg-[#D6B26B]"
              >
                {t.ctaPrimary}
              </Link>
              <Link
                to="/commercial"
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
