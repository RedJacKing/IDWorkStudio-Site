import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, FileCheck, Clock, Landmark, LayoutPanelLeft, Zap, PenTool, Layers, KeyRound, Search, FileText, Hammer, CheckCircle2, AlertTriangle, ArrowRight, ScrollText } from 'lucide-react';

const shophouseRenoContent = {
  en: {
  hero: {
    badge: "Singapore URA Conservation Shophouse Specialist",
    serif: "Shophouse Renovation",
    bold: "DONE RIGHT",
    subtitle: "Full URA Conservation Permission, BCA structural, and SCDF fire safety compliance for Singapore shophouses. Specialists in Tanjong Pagar, Chinatown, Kampong Glam, and Boat Quay.",
    cta: "Get a Free Consultation",
    b1: "URA Conservation Permission",
    b2: "BCA & SCDF Compliant",
    b3: "All Submissions Managed"
  },
  overview: {
    serif: "Singapore's",
    bold: "SHOPHOUSE RENOVATION SPECIALISTS",
    p1: "Singapore shophouse renovation is not the same as a normal office or retail fit-out. Before design begins, owners and tenants need to confirm whether the property is conserved, what can legally be altered, and whether building condition, narrow staircases, old services or F&B requirements will affect cost, approval and timeline.",
    p2: "Many expensive mistakes happen before renovation starts — signing a lease without checking conservation limits, underestimating fire safety or exhaust requirements, or discovering hidden timber, dampness or M&E issues only after works begin. Our role is to assess feasibility first, so clients understand the risks before committing serious renovation budget.",
    p3: "We manage the complete approval process — from <strong>URA Conservation Permission</strong> application to BCA structural submission and SCDF fire safety approval — delivering compliant, beautifully restored spaces.",
    districts_title: "Conservation Districts We Serve",
    uses_title: "Common Shophouse Uses",
    uses_desc: "F&B restaurants and cafés, boutique retail, professional offices, boutique hotels, creative studios, and mixed-use residential above commercial."
  },
  beforeLease: {
    serif: "Before You Commit",
    bold: "CHECK THE SHOPHOUSE FIRST",
    intro: "Before signing a lease, purchase option or renovation agreement, the most important question is not the design style. It is whether the shophouse can support the intended use without approval delays, hidden repair costs or technical constraints.",
    cta_title: "Already considering a shophouse unit?",
    cta_desc: "Send us the listing, floor plan or site photos. We can highlight renovation risks such as conservation restrictions, access constraints, F&B exhaust feasibility, fire safety issues and hidden building-condition concerns before you commit.",
    cta_btn: "Request a Shophouse Feasibility Review",
    i1t: "Conservation status",
    i1d: "Check whether the unit is conserved and whether changes to the facade, windows, roof, shopfront, five-foot way or external services need URA Conservation Permission.",
    i2t: "Access and staircase limits",
    i2d: "Upper-floor shophouses often have narrow timber staircases. Full-height glass, long carpentry, large panels or heavy equipment may need special delivery and installation planning.",
    i3t: "Timber, termite and dampness risk",
    i3d: "Inspect timber floors, staircases, roof members, skirting, door frames, damp walls and previous built-ins before committing, especially in older or poorly maintained units.",
    i4t: "Power, plumbing and gas",
    i4d: "Confirm electrical loading, water supply, drainage points, floor traps, gas availability and grease trap feasibility before planning kitchens, toilets or F&B works.",
    i5t: "F&B exhaust feasibility",
    i5d: "For cafés, restaurants and bars, confirm whether exhaust can be routed and discharged acceptably without conflicting with conservation, neighbours, roof access or authority requirements.",
    i6t: "Fire safety and escape",
    i6d: "Review staircase access, means of escape, occupant load, fire-rated doors, emergency lighting and SCDF requirements early, especially for upper floors or F&B use."
  },
  conservation: {
    title: "Conservation & Technical Constraints",
    intro: "Not every shophouse follows the same renovation rules. Understanding conservation requirements early can prevent costly redesigns and approval delays.",
    p1: "For conserved shophouses, the facade, roof profile, timber windows, five-foot way, shopfront and external services cannot be treated like a normal commercial unit. Before proposing design changes, confirm what is protected and what requires URA Conservation Permission.",
    p2: "Interior upgrading is usually possible, but it must be planned together with structural safety, fire safety, landlord requirements and the existing building condition. A concept that looks simple on drawings may still fail if exhaust routing, staircase access, service capacity or conservation limits are not checked early.",
    points: [
      "Confirm whether the unit is conserved or non-conserved before design starts.",
      "Do not assume windows, facade colours, signage, roof, shopfront or five-foot way details can be changed freely.",
      "Check whether previous alterations were approved, especially on upper floors, rear extensions and service penetrations.",
      "Review F&B exhaust, grease management and ventilation feasibility before committing to a lease.",
      "Assess conservation, structural, fire safety and landlord requirements together instead of treating them as separate issues."
    ]
  },
  scope: {
    serif: "What We Cover in",
    bold: "SHOPHOUSE RENOVATION",
    i1t: "URA Conservation Submissions",
    i1d: "Full URA Conservation Permission application and liaison for all categories of conserved shophouses in Singapore.",
    i2t: "Facade & Heritage Restoration",
    i2d: "Sensitive restoration of original facade elements, five-foot ways, air wells, and heritage architectural details.",
    i3t: "Structural Works",
    i3d: "BCA-approved structural modifications including mezzanine additions, floor openings, and load-bearing assessments.",
    i4t: "M&E & Fire Safety",
    i4d: "Full mechanical, electrical, and SCDF-compliant fire safety installation including suppression systems and emergency lighting.",
    i5t: "F&B Grease Trap & Ventilation",
    i5d: "NEA-compliant grease trap installation, industrial kitchen ventilation, and exhaust system design for F&B operations.",
    i6t: "Interior Fit-Out",
    i6d: "Custom joinery, feature walls, flooring, and lighting design that honours heritage character while meeting modern operational needs."
  },
  stats: {
    s1u: "per sqft",
    s1l: "Shophouse renovation from",
    s2u: "agencies",
    s2l: "Permits managed (URA, BCA, SCDF)",
    s3u: "months",
    s3l: "Typical project timeline"
  },
  challenges: {
    serif: "Navigating",
    bold: "SHOPHOUSE RENOVATION CHALLENGES",
    ch_label: "The Challenge",
    sol_label: "Our Solution",
    p1pain: "Complex URA Approvals",
    p1sol: "Our team is experienced in URA Conservation Permission applications across all conservation area classifications.",
    p2pain: "Heritage vs Modern Function",
    p2sol: "We design interiors that satisfy URA heritage requirements while delivering the modern F&B or office functionality you need.",
    p3pain: "Multi-Agency Compliance",
    p3sol: "We coordinate BCA structural, SCDF fire safety, and URA conservation submissions concurrently to minimise delays."
  },
  trust: { text: "Trusted for conservation shophouse projects in Tanjong Pagar, Chinatown, Kampong Glam, and Boat Quay." },
  process: {
    serif: "Our",
    bold: "SHOPHOUSE RENOVATION PROCESS",
    s1t: "Free Consultation",
    s1d: "Onsite assessment, heritage classification review, and quotation.",
    s2t: "Design & URA Submission",
    s2d: "Architectural drawings and full URA Conservation Permission application.",
    s3t: "BCA & SCDF Approval",
    s3d: "Structural and fire safety submissions managed in parallel.",
    s4t: "Renovation & Handover",
    s4d: "Heritage-sensitive construction and full site handover."
  },

  costDrivers: {
    title: "Why Shophouse Renovation Costs Vary More Than Most Commercial Projects",
    intro: "Two shophouses with similar floor areas can have very different renovation costs. Unlike a modern commercial unit, the final budget is often influenced by age, conservation requirements, existing condition and technical constraints rather than size alone.",
    i1t: "Existing condition",
    i1d: "Roof leaks, dampness, timber deterioration, old wiring, weak plumbing and previous unauthorised works can surface only after inspection or opening-up works.",
    i2t: "Access and logistics",
    i2d: "Narrow staircases, limited rear access, long material routes and upper-floor works can increase labour, sequencing and installation complexity.",
    i3t: "Conservation and approvals",
    i3d: "Additional conservation submissions, specialist restoration, structural review or fire-safety upgrades can affect both cost and timeline.",
    i4t: "F&B infrastructure",
    i4d: "Restaurants, cafés and bars may need exhaust, grease management, gas, ventilation and fire-protection planning before a realistic budget can be confirmed.",
    note: "For this reason, a shophouse quotation should not be judged by floor area alone. A site assessment is usually the most reliable way to identify hidden risks before finalising the renovation budget."
  },
faq: {
    title: "Shophouse Renovation FAQs",
    q1: "Do I need URA approval to renovate a Singapore shophouse?",
    a1: "Yes. Conserved shophouses are protected under the URA Conservation Guidelines. Any external changes — and many internal alterations — require <strong>URA Conservation Permission</strong> before works can commence. This includes changes to facades, windows, roofing, five-foot ways, and structural elements. ID Work Studio manages the full URA application process on your behalf.",
    q2: "How much does a shophouse renovation cost in Singapore?",
    a2: "Shophouse renovation costs typically start from <strong>S$150 per square foot</strong> for a basic fit-out, and can reach S$300+ psf for full heritage restoration with premium F&B or hospitality fit-out. Key cost drivers include structural works, M&E complexity, heritage restoration requirements, and specialist conservation materials.",
    q3: "How long does a shophouse renovation take in Singapore?",
    a3: "A typical shophouse renovation takes <strong>6–9 months</strong> from initial consultation to handover. The timeline is primarily driven by the URA Conservation Permission approval process (typically 2–4 months), followed by BCA structural approval and SCDF fire safety clearance. Physical renovation works usually take 3–5 months depending on scope."
  },
  related: {
    title: "Your Next Shophouse Renovation Decision",
    d1_label: "Still evaluating a unit?",
    d1_title: "Start with a feasibility review",
    d1_desc: "Send us the listing, floor plan or site photos before you sign. We can highlight conservation, access, exhaust, fire safety and hidden-condition risks early.",
    d1_cta: "Request Review",
    d2_label: "Planning your budget?",
    d2_title: "Understand commercial renovation costs",
    d2_desc: "Use the cost guide to compare how office, retail, F&B and shophouse scopes differ before you rely on a quotation.",
    d2_cta: "Read Cost Guide",
    d3_label: "Checking programme risk?",
    d3_title: "Estimate timeline and approval impact",
    d3_desc: "Shophouse timelines can be affected by URA, BCA, SCDF, landlord review and site-condition discoveries. Plan the sequence before construction.",
    d3_cta: "Review Timeline",
    d4_label: "Leasing a commercial unit?",
    d4_title: "Understand reinstatement obligations",
    d4_desc: "Before fitting out a shophouse, check what must be reinstated when the lease ends so the initial renovation does not create future exit costs.",
    d4_cta: "Read Reinstatement Guide"
  },
  cta: {
    serif: "Before You Commit To A",
    bold: "SHOPHOUSE UNIT",
    desc: "Send us the unit details, floor plan, listing or site photos. We will help you identify practical renovation risks before you commit to lease terms, purchase terms or a full renovation budget.",
    btn: "Request a Shophouse Feasibility Review",
    note: "Best suited for owners, tenants and business operators evaluating a Singapore shophouse for office, retail, F&B or hospitality use."
  },
  sticky: { text: "Shophouse Feasibility Review — WhatsApp Us" }
},
  zh: {
  hero: { badge:"新加坡 URA 保育店屋翻新专家", serif:"店屋翻新", bold:"专业之选", subtitle:"为新加坡店屋提供完整的URA保育许可证、BCA结构及SCDF消防安全合规服务。专注于丹戎巴葛、牛车水、甘榜格南及驳船码头地区。", cta:"获取免费咨询", b1:"URA 保育许可证", b2:"符合 BCA 及 SCDF 标准", b3:"全程代办提交" },
  overview: { serif:"新加坡", bold:"店屋翻新专家", p1:"新加坡店屋翻新与一般办公室或零售单位截然不同。在设计开始之前，业主和租户首先应确认店屋是否属于保育建筑、哪些部分可以合法改动，以及建筑现况、狭窄楼梯、老旧机电系统或餐饮用途等因素会否影响预算、审批及工期。", p2:"许多最昂贵的错误并不是发生在施工期间，而是在签约之前，例如未确认保育限制、低估消防或排烟要求，或施工后才发现隐藏缺陷。我们会先进行可行性评估，帮助客户在投入大量装修预算前识别潜在风险。", p3:"我们管理整个审批流程——从<strong>URA保育许可证</strong>申请，到BCA结构提交及SCDF消防安全审批——为您交付合规且精美修复的空间。", districts_title:"我们服务的保育区", uses_title:"店屋常见用途", uses_desc:"餐饮餐厅与咖啡馆、精品零售、专业办公室、精品酒店、创意工作室及商住混合用途。" },
  beforeLease: { serif:"签约之前", bold:"先检查店屋是否适合翻新", intro:"在签租约、购买意向书或装修合约之前，最重要的问题不是设计风格，而是这间店屋是否真的适合你的用途，是否会出现审批延误、隐藏维修费用或技术限制。", cta_title:"已经在考虑某间店屋？", cta_desc:"你可以把房源资料、平面图或现场照片发给我们。我们会先帮你查看可能影响装修的风险，例如保育限制、楼梯及搬运限制、餐饮排烟可行性、消防安全问题和隐藏建筑状况。", cta_btn:"申请店屋可行性评估", i1t:"保育状态", i1d:"确认单位是否属于保育建筑，以及外立面、窗户、屋顶、店面、五脚基或外部机电是否需要URA保育许可证。", i2t:"楼梯与搬运限制", i2d:"二楼或三楼店屋常见狭窄木楼梯。全高玻璃、长尺寸木工、大型板材或重型设备可能需要特别规划搬运和安装方式。", i3t:"木结构、白蚁与潮湿风险", i3d:"签约前应检查木地板、楼梯、屋顶构件、踢脚线、门框、潮湿墙面及旧有固定家具，尤其是年久或维护不足的单位。", i4t:"电力、给排水与燃气", i4d:"在规划厨房、厕所或餐饮工程前，应确认电力容量、供水、排水点、地漏、燃气供应及隔油池可行性。", i5t:"餐饮排烟可行性", i5d:"咖啡馆、餐厅和酒吧应先确认排烟是否可以合理走管及排放，并避免与保育要求、邻里影响、屋顶通道或相关审批冲突。", i6t:"消防安全与逃生", i6d:"应尽早检查楼梯通道、逃生路线、容纳人数、防火门、应急照明及SCDF要求，尤其是高楼层或餐饮用途。" },
  scope: { serif:"店屋翻新", bold:"涵盖范围", i1t:"URA保育许可证提交", i1d:"为新加坡所有类别保育店屋代办完整的URA保育许可证申请及联络工作。", i2t:"外立面与遗产修复", i2d:"对原有外立面构件、五脚基、天井及遗产建筑细节进行敏感性修复。", i3t:"结构工程", i3d:"BCA审批的结构改造，包括夹层添建、楼板开孔及承重评估。", i4t:"机电及消防安全", i4d:"全套机电及符合SCDF标准的消防安全安装，包括抑制系统及应急照明。", i5t:"餐饮集油井与通风", i5d:"符合NEA标准的集油井安装、工业厨房通风及餐饮运营排气系统设计。", i6t:"室内装修", i6d:"定制木工、特色墙、地板及照明设计，在尊重遗产特色的同时满足现代运营需求。" },
  stats: { s1u:"每平方英尺起", s1l:"店屋翻新费用", s2u:"个部门", s2l:"代办许可证（URA、BCA、SCDF）", s3u:"个月", s3l:"典型项目工期" },
  challenges: { serif:"应对", bold:"店屋翻新挑战", ch_label:"难题", sol_label:"我们的解决方案", p1pain:"复杂的URA审批", p1sol:"我们团队在各保育区分类的URA保育许可证申请方面经验丰富。", p2pain:"遗产保育与现代功能的平衡", p2sol:"我们设计既满足URA遗产要求，又能实现您所需现代餐饮或办公功能的室内方案。", p3pain:"多部门合规", p3sol:"我们同步协调BCA结构、SCDF消防安全及URA保育提交，最大程度减少延误。" },
  trust: { text:"深受丹戎巴葛、牛车水、甘榜格南及驳船码头保育店屋项目业主信赖。" },
  process: { serif:"我们的", bold:"店屋翻新流程", s1t:"免费咨询", s1d:"现场评估、遗产分级审查与报价。", s2t:"设计与URA提交", s2d:"建筑图纸及完整URA保育许可证申请。", s3t:"BCA及SCDF审批", s3d:"结构及消防安全提交同步处理。", s4t:"翻新与移交", s4d:"注重遗产保育的施工与完整现场移交。" },
  conservation: { title:"保育与技术限制", intro:"不是每一间店屋都适用同样的装修规则。越早了解保育限制，越能避免重新设计和审批延误。", p1:"对于保育店屋，外立面、屋顶轮廓、木窗、五脚基、店面及外部机电不能像普通商业单位一样随意更改。设计前应先确认哪些部分受保护，哪些改动需要URA保育许可证。", p2:"室内升级通常是可行的，但必须同时考虑结构安全、消防安全、业主要求及现有建筑状况。图纸上看似简单的设计，如果没有提前检查排烟路径、楼梯通道、机电容量或保育限制，仍可能无法执行。", points:["设计开始前先确认单位是否属于保育或非保育店屋。","不要假设窗户、外立面颜色、招牌、屋顶、店面或五脚基细节可以自由更改。","检查过往改动是否已获批准，尤其是高楼层、后方扩建及机电穿孔。","餐饮业者在签约前应确认排烟、隔油、通风及相关审批可行性。","保育、结构、消防及业主要求应一起审查，而不是分开处理。"] },
  costDrivers: { title:"为什么店屋翻新费用差异特别大", intro:"两间面积相近的店屋，装修费用可能相差很远。与现代商业单位不同，店屋预算往往受建筑年份、保育要求、现有状况及技术限制影响，而不只是面积。", i1t:"现有建筑状况", i1d:"屋顶漏水、潮湿、木结构老化、旧电线、弱给排水及未经批准的旧改动，可能要在检查或拆开后才发现。", i2t:"搬运与施工通道", i2d:"狭窄楼梯、后巷限制、长距离搬运及高楼层施工，会增加人工、施工顺序及安装难度。", i3t:"保育与审批", i3d:"额外保育提交、专业修复、结构审核或消防升级，都会影响预算和工期。", i4t:"餐饮基础设施", i4d:"餐厅、咖啡馆和酒吧可能需要排烟、隔油、燃气、通风及消防规划，才能确认真实预算。", note:"因此，店屋报价不应只按面积判断。现场评估通常是确认隐藏风险及真实预算最可靠的方法。" },
  faq: { title:"店屋翻新常见问题", q1:"翻新新加坡店屋是否需要URA批准？", a1:"是的。新加坡保育店屋受URA保育指引保护。任何外部变更——以及许多内部改动——在施工前均需取得<strong>URA保育许可证</strong>。这包括对外立面、窗户、屋顶、五脚基及结构构件的改动。ID Work Studio代您全程管理URA申请流程。", q2:"新加坡店屋翻新费用是多少？", a2:"店屋翻新费用通常从<strong>每平方英尺S$150</strong>起（基础装修），全面遗产修复加高端餐饮或酒店装修可达每平方英尺S$300以上。主要费用影响因素包括结构工程范围、机电复杂程度、遗产修复要求及专业保育材料。", q3:"新加坡店屋翻新需要多长时间？", a3:"典型店屋翻新从初步咨询到移交通常需要<strong>6至9个月</strong>。工期主要取决于URA保育许可证审批流程（通常2至4个月），其次是BCA结构审批及SCDF消防安全许可。实体翻新施工通常需要3至5个月，视工程范围而定。" },
  related: {
    title:"您的下一步店屋翻新决策",
    d1_label:"还在评估单位？",
    d1_title:"先做可行性评估",
    d1_desc:"在签约前，把房源资料、平面图或现场照片发给我们。我们会先查看保育限制、搬运通道、排烟、消防安全及隐藏建筑状况等风险。",
    d1_cta:"申请评估",
    d2_label:"正在规划预算？",
    d2_title:"了解商业装修费用",
    d2_desc:"通过费用指南比较办公室、零售、餐饮及店屋装修范围的差异，不要只依赖单一报价判断预算。",
    d2_cta:"阅读费用指南",
    d3_label:"担心工期风险？",
    d3_title:"预估工期与审批影响",
    d3_desc:"店屋工期可能受URA、BCA、SCDF、业主审核及现场隐藏问题影响。施工前应先规划整体流程。",
    d3_cta:"查看工期指南",
    d4_label:"正在租商业单位？",
    d4_title:"了解退租还原责任",
    d4_desc:"店屋装修前，应先确认租约结束时需要还原哪些项目，避免今天的装修变成未来的退场成本。",
    d4_cta:"阅读还原指南"
  },
  cta: {
    serif:"在承诺租下或购买",
    bold:"店屋单位之前",
    desc:"你可以把单位资料、平面图、房源链接或现场照片发给我们。我们会先帮你识别可能影响租约、购买决定或装修预算的实际风险。",
    btn:"申请店屋可行性评估",
    note:"适合正在评估新加坡店屋作为办公室、零售、餐饮或精品商业空间的业主、租户及经营者。"
  },
  sticky: { text:"店屋可行性评估 — 立即WhatsApp联系我们" }
}
};

export default function ShophouseRenovation() {
  const { i18n } = useTranslation();
  const lang = i18n.language === 'zh' ? 'zh' : 'en';
  const c = shophouseRenoContent[lang];
  const whatsappLink = `https://wa.me/6598333085?text=Hi%20ID%20Work%20Studio,%20I%27d%20like%20a%20shophouse%20feasibility%20review.%20I%20can%20share%20the%20unit%20details,%20floor%20plan%20or%20site%20photos.`;

  const serviceSchema = {
    "@context":"https://schema.org","@type":"Service","name":"Shophouse Renovation Singapore",
    "description":"Specialist shophouse renovation contractor in Singapore. URA Conservation Permission, BCA structural, and SCDF fire safety compliance — the tripartite approval process unique to conserved shophouses.",
    "serviceType":"Shophouse Renovation",
    "areaServed":[{"@type":"Place","name":"Tanjong Pagar, Singapore"},{"@type":"Place","name":"Chinatown, Singapore"},{"@type":"Place","name":"Kampong Glam, Singapore"},{"@type":"Place","name":"Boat Quay, Singapore"},{"@type":"Place","name":"Little India, Singapore"},{"@type":"Place","name":"Emerald Hill, Singapore"}],
    "provider":{"@type":"GeneralContractor","name":"ID Work Studio","url":"https://idworkstudio.com","telephone":"+6568162872","email":"contact@idworkstudio.com",
      "address":{"@type":"PostalAddress","streetAddress":"11 Woodlands Close, Woodlands 11, #03-10","addressLocality":"Woodlands","addressRegion":"Singapore","postalCode":"737853","addressCountry":"SG"}},
    "mainEntityOfPage":{"@type":"WebPage","@id":"https://idworkstudio.com/commercial/shophouse-renovation"}
  };
  const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[1,2,3].map(n=>({ "@type":"Question","name":c.faq[`q${n}` as keyof typeof c.faq],"acceptedAnswer":{"@type":"Answer","text":c.faq[`a${n}` as keyof typeof c.faq]} }))};

  const scopeIcons = [<ScrollText size={28}/>,<Layers size={28}/>,<Landmark size={28}/>,<Zap size={28}/>,<ShieldCheck size={28}/>,<PenTool size={28}/>];
  const challengeIcons = [<ScrollText size={48} strokeWidth={1}/>,<AlertTriangle size={48} strokeWidth={1}/>,<Landmark size={48} strokeWidth={1}/>];
  const processIcons = [<Search className="text-dark-charcoal" size={24}/>,<FileText className="text-dark-charcoal" size={24}/>,<Hammer className="text-dark-charcoal" size={24}/>,<CheckCircle2 className="text-dark-charcoal" size={24}/>];
  const districts = ["Tanjong Pagar","Chinatown","Kampong Glam","Boat Quay","Little India","Emerald Hill","Blair Plain","Joo Chiat"];

  return (
    <>
      <Helmet>
        <title>Shophouse Renovation Singapore | URA Conservation Compliance | ID Work Studio</title>
        <meta name="description" content="Specialist shophouse renovation contractor in Singapore. URA Conservation Permission, BCA structural approval, and SCDF fire safety — all managed. Tanjong Pagar, Chinatown, Kampong Glam. Free consultation."/>
        <meta name="keywords" content="shophouse renovation Singapore, URA conservation renovation Singapore, conservation shophouse contractor Singapore, shophouse fit-out Tanjong Pagar, shophouse renovation Chinatown"/>
        <meta name="geo.region" content="SG"/><meta name="geo.placename" content="Woodlands, Singapore"/>
        <meta name="geo.position" content="1.4348129;103.7326522"/><meta name="ICBM" content="1.4348129, 103.7326522"/>
        <link rel="canonical" href="https://idworkstudio.com/commercial/shophouse-renovation"/>
        <meta property="og:type" content="website"/><meta property="og:url" content="https://idworkstudio.com/commercial/shophouse-renovation"/>
        <meta property="og:title" content="Shophouse Renovation Singapore | URA Conservation Experts | ID Work Studio"/>
        <meta property="og:description" content="Shophouse renovation with full URA, BCA, and SCDF compliance. Tanjong Pagar, Chinatown, Kampong Glam specialists."/>
        <meta property="og:image" content="https://idworkstudio.com/gallery/commercial-expertise.png"/>
        <meta property="og:image:width" content="1200"/><meta property="og:image:height" content="630"/>
        <meta property="og:site_name" content="ID Work Studio"/><meta property="og:locale" content="en_SG"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Shophouse Renovation Singapore | URA Conservation Experts | ID Work Studio"/>
        <meta name="twitter:description" content="Shophouse renovation with full URA, BCA, and SCDF compliance."/>
        <meta name="twitter:image" content="https://idworkstudio.com/gallery/commercial-expertise.png"/>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="bg-off-white min-h-screen font-sans selection:bg-gold selection:text-dark-charcoal">

        {/* HERO */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark-charcoal pt-24 md:pt-32 lg:pt-40 pb-20 md:pb-32 text-white">
          <div className="absolute inset-0 z-0">
            {/* Replace with your own shophouse project photo */}
            <img src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1920&q=80" alt="Singapore Shophouse Renovation" className="w-full h-full object-cover opacity-40" fetchpriority="high" decoding="async"/>
            <div className="absolute inset-0 bg-dark-charcoal/65"/>
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-xs uppercase tracking-[0.25em] text-gold/80 mb-8 font-semibold">{c.hero.badge}</motion.p>
            <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:0.1}} className="text-4xl md:text-6xl mb-6 leading-tight flex flex-col items-center">
              <span className="font-serif italic text-white/80 text-2xl md:text-3xl mb-3">{c.hero.serif}</span>
              <span className="font-sans font-bold text-gold uppercase tracking-wider">{c.hero.bold}</span>
            </motion.h1>
            <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:0.2}} className="text-base md:text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed font-light">{c.hero.subtitle}</motion.p>
            <motion.a href={whatsappLink} target="_blank" rel="noopener noreferrer" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:0.3}} className="inline-flex items-center gap-3 px-10 py-5 bg-gold text-dark-charcoal text-sm font-bold uppercase tracking-[0.2em] hover:bg-gold-hover transition-all duration-300 rounded-full shadow-xl">{c.hero.cta}</motion.a>
            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:0.5}} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {[<ScrollText size={22}/>,<ShieldCheck size={22}/>,<FileCheck size={22}/>].map((icon,i)=>(
                <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-5 py-4 backdrop-blur-sm">
                  <span className="text-gold flex-shrink-0">{icon}</span>
                  <span className="text-white/80 text-sm font-medium text-left">{c.hero[`b${i + 1}` as keyof typeof c.hero]}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl mb-4 flex flex-col items-center">
                <span className="font-serif italic text-dark-charcoal/60 text-2xl mb-2">{c.overview.serif}</span>
                <span className="font-sans font-bold text-dark-charcoal uppercase tracking-wider">{c.overview.bold}</span>
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">{c.overview.p1}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{c.overview.p2}</p>
                <p className="text-gray-600 leading-relaxed">{c.overview.p3}</p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-off-white border border-gray-100 rounded-xl p-6">
                  <h3 className="font-bold text-dark-charcoal mb-3 uppercase tracking-wide text-sm">{c.overview.districts_title}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {districts.map(d=>(
                      <div key={d} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0"></div>{d}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-off-white border border-gray-100 rounded-xl p-6">
                  <h3 className="font-bold text-dark-charcoal mb-2 uppercase tracking-wide text-sm">{c.overview.uses_title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.overview.uses_desc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BEFORE LEASE OR BUY */}
        <section className="py-24 bg-off-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
              <div className="lg:sticky lg:top-28">
                <p className="font-serif italic text-dark-charcoal/50 text-2xl mb-3">{c.beforeLease.serif}</p>
                <h2 className="text-3xl md:text-5xl font-bold text-dark-charcoal uppercase tracking-wider leading-tight mb-6">{c.beforeLease.bold}</h2>
                <div className="w-24 h-1 bg-gold mb-8"></div>
                <p className="text-gray-600 leading-relaxed mb-8">{c.beforeLease.intro}</p>
                <div className="bg-white border border-gold/30 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-dark-charcoal mb-2 uppercase tracking-wide text-sm">{c.beforeLease.cta_title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{c.beforeLease.cta_desc}</p>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 bg-gold text-dark-charcoal text-xs font-bold uppercase tracking-[0.18em] hover:bg-gold-hover transition-all duration-300 rounded-full">
                    {c.beforeLease.cta_btn}
                    <ArrowRight size={15}/>
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[1,2,3,4,5,6].map((n)=> (
                  <div key={n} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:border-gold/40 hover:shadow-md transition-all duration-300">
                    <div className="w-9 h-9 rounded-full bg-gold/10 text-gold flex items-center justify-center text-sm font-bold mb-4">0{n}</div>
                    <h3 className="font-bold text-dark-charcoal mb-3 uppercase tracking-wide text-sm">{c.beforeLease[`i${n}t` as keyof typeof c.beforeLease]}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{c.beforeLease[`i${n}d` as keyof typeof c.beforeLease]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONSERVATION & TECHNICAL CONSTRAINTS */}
        <section className="py-24 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
              <div>
                <p className="text-gold uppercase tracking-[0.25em] text-xs font-bold mb-4 font-sans">Approval Risk</p>
                <h2 className="text-3xl md:text-5xl font-bold text-dark-charcoal uppercase tracking-wider leading-tight mb-6">{c.conservation.title}</h2>
                <div className="w-24 h-1 bg-gold mb-8"></div>
                <p className="text-gray-600 leading-relaxed mb-6">{c.conservation.intro}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{c.conservation.p1}</p>
                <p className="text-gray-600 leading-relaxed">{c.conservation.p2}</p>
              </div>
              <div className="bg-off-white border border-gray-100 rounded-2xl p-6 md:p-8">
                <div className="space-y-4">
                  {c.conservation.points.map((point, index)=>(
                    <div key={point} className="flex gap-4">
                      <div className="w-7 h-7 rounded-full bg-gold/10 text-gold flex items-center justify-center text-xs font-bold flex-shrink-0">{index + 1}</div>
                      <p className="text-gray-600 text-sm leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COST DRIVERS */}
        <section className="py-24 bg-off-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-gold uppercase tracking-[0.25em] text-xs font-bold mb-4 font-sans">Budget Reality</p>
              <h2 className="text-3xl md:text-5xl font-bold text-dark-charcoal uppercase tracking-wider leading-tight mb-6">{c.costDrivers.title}</h2>
              <p className="text-gray-600 leading-relaxed">{c.costDrivers.intro}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
              {[1,2,3,4].map((n)=>(
                <div key={n} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-dark-charcoal mb-3 uppercase tracking-wide text-sm">{c.costDrivers[`i${n}t` as keyof typeof c.costDrivers]}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{c.costDrivers[`i${n}d` as keyof typeof c.costDrivers]}</p>
                </div>
              ))}
            </div>
            <div className="max-w-4xl mx-auto bg-white border border-gold/30 rounded-2xl p-6 md:p-8 text-center">
              <p className="text-gray-600 leading-relaxed">{c.costDrivers.note}</p>
              <Link to="/insights/commercial-renovation-cost-singapore" className="inline-flex items-center gap-2 mt-6 text-xs font-bold uppercase tracking-[0.18em] text-gold hover:text-dark-charcoal transition-colors font-sans">
                {lang === 'zh' ? '查看商业装修费用指南' : 'Read the commercial renovation cost guide'}
                <ArrowRight size={14}/>
              </Link>
            </div>
          </div>
        </section>

        {/* SCOPE */}
        <section className="py-24 bg-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl mb-4 flex flex-col items-center">
                <span className="font-serif italic text-dark-charcoal/60 text-2xl mb-2">{c.scope.serif}</span>
                <span className="font-sans font-bold text-dark-charcoal uppercase tracking-wider">{c.scope.bold}</span>
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1,2,3,4,5,6].map((n,i)=>(
                <motion.div key={n} whileHover={{y:-6}} className="bg-white p-8 border border-gray-100 rounded-xl hover:border-gold/40 hover:shadow-lg transition-all duration-300">
                  <div className="text-gold mb-5">{scopeIcons[i]}</div>
                  <h3 className="font-bold text-dark-charcoal mb-3 uppercase tracking-wide text-sm">{c.scope[`i${n}t` as keyof typeof c.scope]}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{c.scope[`i${n}d` as keyof typeof c.scope]}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-16 bg-dark-charcoal">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[{v:"from $150",s:"s1"},{v:"4–8",s:"s2"},{v:"6–9",s:"s3"}].map(({v,s})=>(
                <div key={s} className="flex flex-col items-center">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl md:text-5xl font-bold text-gold font-sans">{v}</span>
                    <span className="text-gold/60 text-sm uppercase tracking-wider">{c.stats[`${s}u` as keyof typeof c.stats]}</span>
                  </div>
                  <p className="text-white/50 text-xs uppercase tracking-[0.2em]">{c.stats[`${s}l` as keyof typeof c.stats]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CHALLENGES */}
        <section className="py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl mb-4 flex flex-col items-center">
                <span className="font-serif italic text-dark-charcoal/60 text-2xl mb-2">{c.challenges.serif}</span>
                <span className="font-sans font-bold text-gold uppercase tracking-wider">{c.challenges.bold}</span>
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1,2,3].map((n,i)=>(
                <motion.div key={n} whileHover={{y:-10}} className="bg-white p-10 shadow-xl border-b-4 border-gold group flex flex-col items-center text-center">
                  <div className="mb-8 text-gold flex justify-center">{challengeIcons[i]}</div>
                  <div className="mb-6 w-full">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 block mb-2 font-sans">{c.challenges.ch_label}</span>
                    <h3 className="text-xl font-bold text-dark-charcoal uppercase font-sans leading-tight">{c.challenges[`p${n}pain` as keyof typeof c.challenges]}</h3>
                  </div>
                  <div className="pt-6 border-t border-gray-100 w-full">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gold block mb-2 font-sans">{c.challenges.sol_label}</span>
                    <p className="text-gray-600 leading-relaxed text-sm font-sans font-normal">{c.challenges[`p${n}sol` as keyof typeof c.challenges]}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST ROW */}
        <section className="py-12 bg-white border-y border-gray-100 relative z-10">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="font-serif italic text-dark-charcoal/40 text-lg md:text-xl tracking-wide">{c.trust.text}</p>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-24 relative z-10 bg-dark-charcoal text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl mb-4 flex flex-col items-center">
                <span className="font-serif italic text-white/60 text-2xl mb-2">{c.process.serif}</span>
                <span className="font-sans font-bold text-gold uppercase tracking-wider">{c.process.bold}</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
              <div className="hidden md:block absolute top-[32px] left-0 w-full h-[1px] bg-gold/20 z-0"></div>
              {[1,2,3,4].map((n,i)=>(
                <div key={n} className="relative z-10 flex flex-col items-center text-center px-4 mb-12 md:mb-0">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(197,160,89,0.3)] hover:scale-110 transition-transform relative">
                    {processIcons[i]}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-dark-charcoal text-gold rounded-full flex items-center justify-center text-[10px] font-bold font-sans border border-gold/50">0{n}</div>
                  </div>
                  <div className="w-full min-h-[3.5rem] flex items-center justify-center mb-4">
                    <h4 className="text-sm md:text-base lg:text-lg font-bold uppercase tracking-wider text-gold font-sans leading-tight">{c.process[`s${n}t` as keyof typeof c.process]}</h4>
                  </div>
                  <div className="w-full min-h-[4rem] flex flex-col items-center">
                    <p className="text-white/90 text-sm leading-relaxed font-sans font-normal max-w-[200px]">{c.process[`s${n}d` as keyof typeof c.process]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-off-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif mb-12 text-center text-dark-charcoal">{c.faq.title}</h2>
            <div className="space-y-6">
              {[{n:1,icon:<ScrollText className="w-6 h-6 text-gold flex-shrink-0 mt-1"/>},{n:2,icon:<ShieldCheck className="w-6 h-6 text-gold flex-shrink-0 mt-1"/>},{n:3,icon:<Clock className="w-6 h-6 text-gold flex-shrink-0 mt-1"/>}].map(({n,icon})=>(
                <div key={n} className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-dark-charcoal mb-3 flex items-start gap-3">{icon}{c.faq[`q${n}` as keyof typeof c.faq]}</h3>
                  <p className="text-gray-600 leading-relaxed pl-9 text-sm" dangerouslySetInnerHTML={{__html:c.faq[`a${n}` as keyof typeof c.faq]}}/>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEXT DECISION + CTA */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-gold uppercase tracking-[0.25em] text-xs font-bold mb-4 font-sans">Commercial Renovation Journey</p>
              <h2 className="text-2xl md:text-4xl font-serif text-dark-charcoal">{c.related.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {n:1, to:"#shophouse-feasibility-review"},
                {n:2, to:"/insights/commercial-renovation-cost-singapore"},
                {n:3, to:"/insights/office-renovation-timeline-singapore"},
                {n:4, to:"/commercial/reinstatement"}
              ].map(({n,to})=>(
                <Link key={n} to={to} className="group flex items-start justify-between p-6 md:p-7 border border-gray-200 rounded-2xl hover:border-gold hover:shadow-md transition-all duration-300 bg-white">
                  <div>
                    <p className="text-gold text-[10px] uppercase tracking-[0.22em] font-bold mb-3 font-sans">{c.related[`d${n}_label` as keyof typeof c.related]}</p>
                    <h3 className="font-bold text-dark-charcoal mb-3 text-sm md:text-base uppercase tracking-wide group-hover:text-gold transition-colors">{c.related[`d${n}_title` as keyof typeof c.related]}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{c.related[`d${n}_desc` as keyof typeof c.related]}</p>
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-dark-charcoal group-hover:text-gold transition-colors font-sans">
                      {c.related[`d${n}_cta` as keyof typeof c.related]}
                      <ArrowRight size={14}/>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="shophouse-feasibility-review" className="py-32 bg-white relative z-10 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-4xl md:text-6xl mb-8 flex flex-col items-center justify-center gap-2">
              <span className="font-serif italic text-dark-charcoal">{c.cta.serif}</span>
              <span className="font-sans font-bold text-gold uppercase tracking-wider">{c.cta.bold}</span>
            </motion.h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10 font-sans">{c.cta.desc}</p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 px-8 md:px-12 py-5 md:py-6 bg-gold text-dark-charcoal text-xs md:text-sm font-bold uppercase tracking-[0.22em] md:tracking-[0.3em] hover:bg-gold-hover transition-all duration-300 rounded-full shadow-2xl hover:shadow-gold/20 font-sans">{c.cta.btn}</a>
            <p className="text-gray-400 text-xs leading-relaxed max-w-xl mx-auto mt-6 font-sans">{c.cta.note}</p>
          </div>
          <div className="absolute top-0 left-0 w-64 h-64 border-l border-t border-gold/10 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 border-r border-b border-gold/10 translate-x-1/2 translate-y-1/2"></div>
        </section>

        {/* STICKY */}
        <div className="fixed bottom-0 left-0 w-full bg-dark-charcoal/95 backdrop-blur-md border-t border-gold/30 p-4 z-[100] md:hidden">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full bg-gold py-4 rounded-full text-dark-charcoal font-bold text-xs uppercase tracking-widest font-sans">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.408 0 12.044c0 2.123.554 4.197 1.608 6.037L0 24l6.105-1.602a11.834 11.834 0 005.937 1.598h.005c6.637 0 12.048-5.408 12.052-12.044.002-3.218-1.248-6.242-3.514-8.508z"/></svg>
            {c.sticky.text}
          </a>
        </div>
      </div>
    </>
  );
}
