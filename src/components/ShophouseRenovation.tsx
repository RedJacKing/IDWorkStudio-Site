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
    p1: "Singapore's conserved shophouses present a unique renovation challenge — every modification must balance heritage preservation requirements with modern functional needs, navigating the tripartite approval process of URA, BCA, and SCDF.",
    p2: "ID Work Studio has completed shophouse renovation and F&B fit-out projects across Singapore's major conservation districts. Our team understands the specific URA guidelines applicable to each conservation area and style classification.",
    p3: "We manage the complete approval process — from <strong>URA Conservation Permission</strong> application to BCA structural submission and SCDF fire safety approval — delivering compliant, beautifully restored spaces.",
    districts_title: "Conservation Districts We Serve",
    uses_title: "Common Shophouse Uses",
    uses_desc: "F&B restaurants and cafés, boutique retail, professional offices, boutique hotels, creative studios, and mixed-use residential above commercial."
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
  faq: {
    title: "Shophouse Renovation FAQs",
    q1: "Do I need URA approval to renovate a Singapore shophouse?",
    a1: "Yes. Conserved shophouses are protected under the URA Conservation Guidelines. Any external changes — and many internal alterations — require <strong>URA Conservation Permission</strong> before works can commence. This includes changes to facades, windows, roofing, five-foot ways, and structural elements. ID Work Studio manages the full URA application process on your behalf.",
    q2: "How much does a shophouse renovation cost in Singapore?",
    a2: "Shophouse renovation costs typically start from <strong>S$150 per square foot</strong> for a basic fit-out, and can reach S$300+ psf for full heritage restoration with premium F&B or hospitality fit-out. Key cost drivers include structural works, M&E complexity, heritage restoration requirements, and specialist conservation materials.",
    q3: "How long does a shophouse renovation take in Singapore?",
    a3: "A typical shophouse renovation takes <strong>6–9 months</strong> from initial consultation to handover. The timeline is primarily driven by the URA Conservation Permission approval process (typically 2–4 months), followed by BCA structural approval and SCDF fire safety clearance. Physical renovation works usually take 3–5 months depending on scope."
  },
  related: { title: "Explore Our Other Commercial Services" },
  cta: {
    serif: "Ready for Your",
    bold: "SHOPHOUSE RENOVATION?",
    btn: "WhatsApp for a Free Consultation"
  },
  sticky: { text: "Free Shophouse Renovation Consultation — WhatsApp Us" }
},
  zh: {
  hero: { badge:"新加坡 URA 保育店屋翻新专家", serif:"店屋翻新", bold:"专业之选", subtitle:"为新加坡店屋提供完整的URA保育许可证、BCA结构及SCDF消防安全合规服务。专注于丹戎巴葛、牛车水、甘榜格南及驳船码头地区。", cta:"获取免费咨询", b1:"URA 保育许可证", b2:"符合 BCA 及 SCDF 标准", b3:"全程代办提交" },
  overview: { serif:"新加坡", bold:"店屋翻新专家", p1:"新加坡保育店屋的翻新面临独特挑战——每项改动都必须在遗产保育要求与现代功能需求之间取得平衡，同时应对URA、BCA和SCDF的三方审批流程。", p2:"ID Work Studio 已在新加坡各主要保育区完成多个店屋翻新及餐饮装修项目。我们团队深入了解各保育区及风格分类适用的具体URA指引。", p3:"我们管理整个审批流程——从<strong>URA保育许可证</strong>申请，到BCA结构提交及SCDF消防安全审批——为您交付合规且精美修复的空间。", districts_title:"我们服务的保育区", uses_title:"店屋常见用途", uses_desc:"餐饮餐厅与咖啡馆、精品零售、专业办公室、精品酒店、创意工作室及商住混合用途。" },
  scope: { serif:"店屋翻新", bold:"涵盖范围", i1t:"URA保育许可证提交", i1d:"为新加坡所有类别保育店屋代办完整的URA保育许可证申请及联络工作。", i2t:"外立面与遗产修复", i2d:"对原有外立面构件、五脚基、天井及遗产建筑细节进行敏感性修复。", i3t:"结构工程", i3d:"BCA审批的结构改造，包括夹层添建、楼板开孔及承重评估。", i4t:"机电及消防安全", i4d:"全套机电及符合SCDF标准的消防安全安装，包括抑制系统及应急照明。", i5t:"餐饮集油井与通风", i5d:"符合NEA标准的集油井安装、工业厨房通风及餐饮运营排气系统设计。", i6t:"室内装修", i6d:"定制木工、特色墙、地板及照明设计，在尊重遗产特色的同时满足现代运营需求。" },
  stats: { s1u:"每平方英尺起", s1l:"店屋翻新费用", s2u:"个部门", s2l:"代办许可证（URA、BCA、SCDF）", s3u:"个月", s3l:"典型项目工期" },
  challenges: { serif:"应对", bold:"店屋翻新挑战", ch_label:"难题", sol_label:"我们的解决方案", p1pain:"复杂的URA审批", p1sol:"我们团队在各保育区分类的URA保育许可证申请方面经验丰富。", p2pain:"遗产保育与现代功能的平衡", p2sol:"我们设计既满足URA遗产要求，又能实现您所需现代餐饮或办公功能的室内方案。", p3pain:"多部门合规", p3sol:"我们同步协调BCA结构、SCDF消防安全及URA保育提交，最大程度减少延误。" },
  trust: { text:"深受丹戎巴葛、牛车水、甘榜格南及驳船码头保育店屋项目业主信赖。" },
  process: { serif:"我们的", bold:"店屋翻新流程", s1t:"免费咨询", s1d:"现场评估、遗产分级审查与报价。", s2t:"设计与URA提交", s2d:"建筑图纸及完整URA保育许可证申请。", s3t:"BCA及SCDF审批", s3d:"结构及消防安全提交同步处理。", s4t:"翻新与移交", s4d:"注重遗产保育的施工与完整现场移交。" },
  faq: { title:"店屋翻新常见问题", q1:"翻新新加坡店屋是否需要URA批准？", a1:"是的。新加坡保育店屋受URA保育指引保护。任何外部变更——以及许多内部改动——在施工前均需取得<strong>URA保育许可证</strong>。这包括对外立面、窗户、屋顶、五脚基及结构构件的改动。ID Work Studio代您全程管理URA申请流程。", q2:"新加坡店屋翻新费用是多少？", a2:"店屋翻新费用通常从<strong>每平方英尺S$150</strong>起（基础装修），全面遗产修复加高端餐饮或酒店装修可达每平方英尺S$300以上。主要费用影响因素包括结构工程范围、机电复杂程度、遗产修复要求及专业保育材料。", q3:"新加坡店屋翻新需要多长时间？", a3:"典型店屋翻新从初步咨询到移交通常需要<strong>6至9个月</strong>。工期主要取决于URA保育许可证审批流程（通常2至4个月），其次是BCA结构审批及SCDF消防安全许可。实体翻新施工通常需要3至5个月，视工程范围而定。" },
  related: { title:"探索我们的其他商业服务" },
  cta: { serif:"准备好开始您的", bold:"店屋翻新了吗？", btn:"WhatsApp 获取免费咨询" },
  sticky: { text:"免费店屋翻新咨询 — 立即WhatsApp联系我们" }
}
};

export default function ShophouseRenovation() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'zh' ? 'zh' : 'en';
  const c = shophouseRenoContent[lang];
  const whatsappLink = `https://wa.me/6598333085?text=Hi%20ID%20Work%20Studio,%20I'd%20like%20a%20free%20consultation%20for%20shophouse%20renovation.`;

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
  const relatedKeys = ["office","retail","compliance","reinstatement"];
  const relatedLinks = ["/commercial/office-renovation","/commercial/retail-mall-renovation","/commercial/permits-compliance","/commercial/reinstatement"];
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

        {/* RELATED */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-serif text-center text-dark-charcoal mb-10">{c.related.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedKeys.map((key,i)=>(
                <Link key={key} to={relatedLinks[i]} className="group flex items-start justify-between p-6 border border-gray-200 rounded-xl hover:border-gold hover:shadow-md transition-all duration-300">
                  <div>
                    <h3 className="font-bold text-dark-charcoal mb-2 text-sm uppercase tracking-wide group-hover:text-gold transition-colors">{t(`commercial_page.subpages.${key}.title`)}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">{t(`commercial_page.subpages.${key}.desc`)}</p>
                  </div>
                  <ArrowRight size={16} className="text-gray-300 group-hover:text-gold transition-colors flex-shrink-0 mt-1 ml-3"/>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-white relative z-10 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-4xl md:text-6xl mb-12 flex flex-col items-center justify-center gap-2">
              <span className="font-serif italic text-dark-charcoal">{c.cta.serif}</span>
              <span className="font-sans font-bold text-gold uppercase tracking-wider">{c.cta.bold}</span>
            </motion.h2>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 px-12 py-6 bg-gold text-dark-charcoal text-sm font-bold uppercase tracking-[0.3em] hover:bg-gold-hover transition-all duration-300 rounded-full shadow-2xl hover:shadow-gold/20 font-sans">{c.cta.btn}</a>
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
