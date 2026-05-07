import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, FileCheck, Clock, Lightbulb, LayoutPanelLeft, Package, Zap, Store, Search, FileText, Hammer, CheckCircle2, AlertTriangle, ArrowRight, Moon } from 'lucide-react';

const retailRenoPageContent = {
  en: {
  hero: {
    badge: "Singapore Retail & Mall Store Renovation Specialist",
    serif: "Retail Fit-Out That",
    bold: "DRIVES SALES",
    subtitle: "MCST-compliant retail renovation for Singapore shopping malls. Night-works capable, shopfront-to-stockroom specialists with proven mall management relationships.",
    cta: "Get a Free Site Survey",
    b1: "MCST Submission Managed",
    b2: "Night-Works Capable",
    b3: "Fast Mall Turnaround"
  },
  overview: {
    serif: "Singapore's",
    bold: "RETAIL FIT-OUT SPECIALISTS",
    p1: "ID Work Studio specialises in retail and mall store renovation across Singapore's major shopping centres. We understand the strict MCST fit-out requirements, limited working hour windows, and brand-standard compliance that mall retail demands.",
    p2: "From luxury boutiques in Orchard Road to food hall units and neighbourhood mall stores, our team delivers high-quality retail interiors that maximise sales floor efficiency and brand impact within your MCST timeline.",
    p3: "As an experienced retail contractor, we manage all <strong>MCST fit-out submissions, building plan approvals, and SCDF fire safety requirements</strong> — and we are capable of executing night works to meet your mall's restricted hours.",
    c1t: "MCST Submission Experts",
    c1d: "Full management of mall fit-out permit packages, tenant coordination, and MCST compliance documentation for major Singapore malls.",
    c2t: "Night-Works Capability",
    c2d: "Our team is certified for and experienced in after-hours and overnight renovation works to comply with mall trading hour restrictions.",
    c3t: "Brand-Standard Delivery",
    c3d: "We work directly with brand guidelines and head office specifications to deliver compliant, brand-accurate store environments."
  },
  scope: {
    serif: "What's Included in",
    bold: "RETAIL FIT-OUT",
    i1t: "Shopfront & Display Design",
    i1d: "High-impact shopfronts, window displays, and entrance signage designed to maximise footfall from mall common areas.",
    i2t: "Sales Floor Layout",
    i2d: "Customer journey mapping and floor layout optimised for product discovery, dwell time, and sales conversion.",
    i3t: "Custom Joinery & Displays",
    i3d: "Bespoke display fixtures, shelving, counters, and fitting rooms built to brand specifications and MCST guidelines.",
    i4t: "Lighting Design",
    i4d: "Layered retail lighting — ambient, accent, and task — designed to showcase products and enhance the in-store experience.",
    i5t: "M&E & ACMV Works",
    i5d: "Air-conditioning, electrical, and data works coordinated with the mall's central building management system.",
    i6t: "MCST & Permit Management",
    i6d: "Full MCST fit-out submission, BCA permit applications, and SCDF fire safety approval managed in-house."
  },
  stats: {
    s1u: "per sqft",
    s1l: "Retail fit-out cost range",
    s2u: "weeks",
    s2l: "Typical fit-out timeline",
    s3u: "day",
    s3l: "MCST submission turnaround"
  },
  challenges: {
    serif: "Overcoming",
    bold: "RETAIL RENOVATION CHALLENGES",
    ch_label: "The Challenge",
    sol_label: "Our Solution",
    p1pain: "MCST Compliance",
    p1sol: "We have established relationships with major Singapore mall management teams and understand each mall's specific fit-out requirements.",
    p2pain: "Night-Works Restrictions",
    p2sol: "Our certified night-works team operates during mall off-hours to complete your fit-out without impacting neighbouring tenants.",
    p3pain: "Tight Mall Timelines",
    p3sol: "Detailed Gantt chart planning and dedicated site supervisors ensure your store opens on time, every time."
  },
  trust: { text: "Trusted by retail brands and F&B operators in Singapore's major shopping malls." },
  process: {
    serif: "How We",
    bold: "DELIVER YOUR RETAIL FIT-OUT",
    s1t: "Free Site Survey",
    s1d: "Onsite assessment, MCST requirement review, and full quotation.",
    s2t: "Design & MCST Submission",
    s2d: "Shopfront design, floor plans, and full MCST fit-out permit submission.",
    s3t: "Fit-Out Works",
    s3d: "Night-capable construction by our licensed retail fit-out team.",
    s4t: "Handover & Opening",
    s4d: "MCST joint inspection, defect rectification, and store opening support."
  },
  faq: {
    title: "Retail Renovation FAQs",
    q1: "How much does a retail store fit-out cost in Singapore?",
    a1: "Retail fit-out in Singapore typically costs between <strong>S$65 and S$150 per square foot</strong> for a standard mall store. A basic fit-out starts from S$65 psf. A premium brand-standard fit-out with custom displays and high-end finishes can reach S$150 psf or more. F&B fit-outs with kitchen equipment and NEA compliance add further to the cost.",
    q2: "How long does a mall store fit-out take in Singapore?",
    a2: "A standard mall store fit-out (200–500 sqft) typically takes <strong>6–12 weeks</strong> from design sign-off to store opening. This includes 1–2 weeks for MCST submission review and 4–8 weeks for the physical fit-out. We provide a full Gantt chart timeline before work commences.",
    q3: "Can you do night works for mall renovation in Singapore?",
    a3: "Yes. ID Work Studio is experienced in and certified for night works in Singapore shopping malls. Most major mall management companies (CapitaLand, Frasers, Lendlease) require renovation works outside trading hours. Our night-works team is fully equipped and compliant with MOM Workplace Safety and Health regulations for after-hours construction."
  },
  related: { title: "Explore Our Other Commercial Services" },
  cta: {
    serif: "Ready to Open",
    bold: "YOUR STORE?",
    btn: "WhatsApp for a Free Site Survey"
  },
  sticky: { text: "Free Retail Fit-Out Quote — WhatsApp Us Now" }
},
  zh: {
  hero: { badge:"新加坡零售及商场店面翻新专家", serif:"推动销售增长的", bold:"零售装修", subtitle:"符合MCST标准的新加坡商场店面翻新。具备夜间施工能力，从店面到储物间全程专业服务，拥有成熟的商场管理关系网络。", cta:"获取免费现场勘察", b1:"代办MCST提交", b2:"具备夜间施工能力", b3:"快速商场交付" },
  overview: { serif:"新加坡", bold:"零售装修专家", p1:"ID Work Studio 专注于新加坡各大购物中心的零售及商场店面翻新。我们深刻理解商场零售所要求的严格MCST装修规范、有限施工时间窗口及品牌标准合规要求。", p2:"从乌节路奢侈品精品店到美食广场单位及邻里商场店面，我们团队在您的MCST工期内交付高质量零售室内设计，最大化销售区效率和品牌影响力。", p3:"作为经验丰富的零售装修承包商，我们管理所有<strong>MCST装修许可证提交、建筑方案审批及SCDF消防安全要求</strong>——并具备在商场限制时间内执行夜间施工的能力。", c1t:"MCST提交专家", c1d:"为新加坡主要商场提供完整的装修许可证包管理、租户协调及MCST合规文件服务。", c2t:"夜间施工能力", c2d:"我们团队持证并擅长在商场营业时间外进行下班后及通宵翻新施工，符合商场营业限制规定。", c3t:"品牌标准交付", c3d:"我们直接与品牌指引及总部规格配合，交付符合合规要求且准确呈现品牌形象的店面环境。" },
  scope: { serif:"零售装修", bold:"包含哪些工程", i1t:"店面与橱窗设计", i1d:"高冲击力店面、橱窗陈列及入口标识设计，最大化来自商场公共区域的客流量。", i2t:"销售区布局", i2d:"客户动线规划及地板布局优化，提升商品发现率、停留时间及销售转化率。", i3t:"定制木工与陈列", i3d:"按品牌规格和MCST指引定制的陈列架、货架、收银台及试衣间。", i4t:"照明设计", i4d:"分层式零售照明——环境光、重点照明及功能照明——旨在展示商品并提升店内体验。", i5t:"机电及空调工程", i5d:"与商场中央大厦管理系统协调的空调、电气及数据工程。", i6t:"MCST及许可证管理", i6d:"全程代办MCST装修许可证提交、BCA许可证申请及SCDF消防安全审批。" },
  stats: { s1u:"每平方英尺", s1l:"零售装修费用范围", s2u:"周", s2l:"典型装修工期", s3u:"天", s3l:"MCST提交周转时间" },
  challenges: { serif:"克服", bold:"零售翻新难题", ch_label:"难题", sol_label:"我们的解决方案", p1pain:"MCST合规", p1sol:"我们与新加坡主要商场管理团队建立了成熟关系，深入了解各商场的具体装修要求。", p2pain:"夜间施工限制", p2sol:"我们持证的夜间施工团队在商场营业时间外作业，不影响邻近租户。", p3pain:"紧张的商场工期", p3sol:"详细的甘特图规划及专属现场监督员确保您的店面按时开业。" },
  trust: { text:"深受新加坡各大购物中心零售品牌及餐饮运营商信赖。" },
  process: { serif:"我们如何", bold:"交付您的零售装修", s1t:"免费现场勘察", s1d:"现场评估、MCST要求审查与完整报价。", s2t:"设计与MCST提交", s2d:"店面设计、平面图及完整MCST装修许可证提交。", s3t:"装修施工", s3d:"由我们持牌零售装修团队进行夜间施工。", s4t:"移交与开业", s4d:"MCST联合验收、缺陷修正及开业支持。" },
  faq: { title:"零售翻新常见问题", q1:"新加坡零售店面装修费用是多少？", a1:"新加坡零售装修标准商场店面通常在<strong>每平方英尺S$65至S$150</strong>之间。基础装修从S$65每平方英尺起。配备定制陈列及高端装饰的品牌标准装修可达S$150每平方英尺或以上。含厨房设备及NEA合规要求的餐饮装修费用另行追加。", q2:"新加坡商场店面装修需要多长时间？", a2:"标准商场店面装修（200至500平方英尺）从设计确认到开业通常需要<strong>6至12周</strong>，包括1至2周MCST提交审查及4至8周实体装修施工。我们在施工前提供完整的甘特图时间表。", q3:"你们能在新加坡商场进行夜间施工吗？", a3:"可以。ID Work Studio 在新加坡购物商场夜间施工方面经验丰富并持有相关资质。凯德、Fraser及Lendlease等主要商场管理公司要求在营业时间外进行翻新施工。我们的夜间施工团队完全符合人力部工作场所安全与卫生法规。" },
  related: { title:"探索我们的其他商业服务" },
  cta: { serif:"准备好开设", bold:"您的店面了吗？", btn:"WhatsApp 获取免费现场勘察" },
  sticky: { text:"免费零售装修报价 — 立即WhatsApp联系我们" }
}
};

export default function RetailMallRenovation() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'zh' ? 'zh' : 'en';
  const c = retailRenoPageContent[lang];
  const whatsappLink = `https://wa.me/6598333085?text=Hi%20ID%20Work%20Studio,%20I'd%20like%20a%20free%20site%20survey%20for%20retail%20renovation.`;

  const serviceSchema = {
    "@context":"https://schema.org","@type":"Service","name":"Retail & Mall Store Renovation Singapore",
    "description":"Specialist retail fit-out contractor for shopping mall stores in Singapore. MCST submission management, shopfront design, night-works capability.",
    "serviceType":"Retail Renovation","areaServed":{"@type":"City","name":"Singapore"},
    "provider":{"@type":"GeneralContractor","name":"ID Work Studio","url":"https://idworkstudio.com","telephone":"+6568162872","email":"contact@idworkstudio.com",
      "address":{"@type":"PostalAddress","streetAddress":"11 Woodlands Close, Woodlands 11, #03-10","addressLocality":"Woodlands","addressRegion":"Singapore","postalCode":"737853","addressCountry":"SG"}},
    "offers":{"@type":"Offer","priceCurrency":"SGD","description":"Retail and mall store renovation from S$65 to S$150 per square foot."},
    "mainEntityOfPage":{"@type":"WebPage","@id":"https://idworkstudio.com/commercial/retail-mall-renovation"}
  };
  const faqItems = [
    { q: c.faq.q1, a: c.faq.a1, icon: <FileCheck className="w-6 h-6 text-gold flex-shrink-0 mt-1"/> },
    { q: c.faq.q2, a: c.faq.a2, icon: <Clock className="w-6 h-6 text-gold flex-shrink-0 mt-1"/> },
    { q: c.faq.q3, a: c.faq.a3, icon: <Moon className="w-6 h-6 text-gold flex-shrink-0 mt-1"/> }
  ];
  const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":faqItems.map(item=>({ "@type":"Question","name":item.q,"acceptedAnswer":{"@type":"Answer","text":item.a}  }))};

  const scopeIcons = [<Store size={28}/>,<Lightbulb size={28}/>,<Package size={28}/>,<LayoutPanelLeft size={28}/>,<Zap size={28}/>,<FileCheck size={28}/>];
  const challengeIcons = [<AlertTriangle size={48} strokeWidth={1}/>,<Moon size={48} strokeWidth={1}/>,<Clock size={48} strokeWidth={1}/>];
  const processIcons = [<Search className="text-dark-charcoal" size={24}/>,<FileText className="text-dark-charcoal" size={24}/>,<Hammer className="text-dark-charcoal" size={24}/>,<CheckCircle2 className="text-dark-charcoal" size={24}/>];
  const relatedKeys = ["office","shophouse","compliance","reinstatement"];
  const relatedLinks = ["/commercial/office-renovation","/commercial/shophouse-renovation","/commercial/permits-compliance","/commercial/reinstatement"];

  return (
    <>
      <Helmet>
        <title>Retail & Mall Store Renovation Singapore | MCST Fit-Out Specialist | ID Work Studio</title>
        <meta name="description" content="Specialist retail and mall store renovation contractor in Singapore. MCST submissions, shopfront design, night-works capable. From $65 psf. Free site survey."/>
        <meta name="keywords" content="retail renovation Singapore, mall store renovation Singapore, shop fit-out Singapore, MCST renovation Singapore, shopping mall renovation Singapore 2026"/>
        <meta name="geo.region" content="SG"/><meta name="geo.placename" content="Woodlands, Singapore"/>
        <meta name="geo.position" content="1.4348129;103.7326522"/><meta name="ICBM" content="1.4348129, 103.7326522"/>
        <link rel="canonical" href="https://idworkstudio.com/commercial/retail-mall-renovation"/>
        <meta property="og:type" content="website"/><meta property="og:url" content="https://idworkstudio.com/commercial/retail-mall-renovation"/>
        <meta property="og:title" content="Retail & Mall Store Renovation Singapore | ID Work Studio"/>
        <meta property="og:description" content="Specialist retail fit-out for Singapore shopping malls. MCST submissions, night-works capable. From $65 psf."/>
        <meta property="og:image" content="https://idworkstudio.com/gallery/commercial-expertise.png"/>
        <meta property="og:image:width" content="1200"/><meta property="og:image:height" content="630"/>
        <meta property="og:site_name" content="ID Work Studio"/><meta property="og:locale" content="en_SG"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Retail & Mall Store Renovation Singapore | ID Work Studio"/>
        <meta name="twitter:description" content="Specialist retail fit-out for Singapore shopping malls. MCST submissions, night-works capable."/>
        <meta name="twitter:image" content="https://idworkstudio.com/gallery/commercial-expertise.png"/>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="bg-off-white min-h-screen font-sans selection:bg-gold selection:text-dark-charcoal">

        {/* HERO */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark-charcoal pt-24 md:pt-32 lg:pt-40 pb-20 md:pb-32 text-white">
          <div className="absolute inset-0 z-0">
            {/* Replace with your own retail project photo */}
            <img src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1920&q=80" alt="Retail Store Mall Renovation Singapore" className="w-full h-full object-cover opacity-40" fetchpriority="high" decoding="async"/>
            <div className="absolute inset-0 bg-dark-charcoal/60"/>
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
              {[<FileCheck size={22}/>,<Moon size={22}/>,<Clock size={22}/>].map((icon,i)=>(
                <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-5 py-4 backdrop-blur-sm">
                  <span className="text-gold flex-shrink-0">{icon}</span>
                  <span className="text-white/80 text-sm font-medium text-left">{(c.hero as Record<string, string>)[`b${i + 1}`]}</span>
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
                <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{__html:c.overview.p3}}/>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {[1,2,3].map(n=>(
                  <div key={n} className="bg-off-white border border-gray-100 rounded-xl p-6 hover:border-gold/30 transition-colors">
                    <h3 className="font-bold text-dark-charcoal mb-2 uppercase tracking-wide text-sm">{(c.overview as Record<string, string>)[`c${n}t`]}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{(c.overview as Record<string, string>)[`c${n}d`]}</p>
                  </div>
                ))}
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
                  <h3 className="font-bold text-dark-charcoal mb-3 uppercase tracking-wide text-sm">{(c.scope as Record<string, string>)[`i${n}t`]}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{(c.scope as Record<string, string>)[`i${n}d`]}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-16 bg-dark-charcoal">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[{v:"$65–$150",s:"s1"},{v:"6–12",s:"s2"},{v:"1–2",s:"s3"}].map(({v,s})=>(
                <div key={s} className="flex flex-col items-center">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl md:text-5xl font-bold text-gold font-sans">{v}</span>
                    <span className="text-gold/60 text-sm uppercase tracking-wider">{(c.stats as Record<string, string>)[`${s}u`]}</span>
                  </div>
                  <p className="text-white/50 text-xs uppercase tracking-[0.2em]">{(c.stats as Record<string, string>)[`${s}l`]}</p>
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
                    <h3 className="text-xl font-bold text-dark-charcoal uppercase font-sans leading-tight">{(c.challenges as Record<string, string>)[`p${n}pain`]}</h3>
                  </div>
                  <div className="pt-6 border-t border-gray-100 w-full">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gold block mb-2 font-sans">{c.challenges.sol_label}</span>
                    <p className="text-gray-600 leading-relaxed text-sm font-sans font-normal">{(c.challenges as Record<string, string>)[`p${n}sol`]}</p>
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
                    <h4 className="text-sm md:text-base lg:text-lg font-bold uppercase tracking-wider text-gold font-sans leading-tight">{(c.process as Record<string, string>)[`s${n}t`]}</h4>
                  </div>
                  <div className="w-full min-h-[4rem] flex flex-col items-center">
                    <p className="text-white/90 text-sm leading-relaxed font-sans font-normal max-w-[200px]">{(c.process as Record<string, string>)[`s${n}d`]}</p>
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
              {faqItems.map((item)=>(
                <div key={item.q} className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-dark-charcoal mb-3 flex items-start gap-3">{item.icon}{item.q}</h3>
                  <p className="text-gray-600 leading-relaxed pl-9 text-sm" dangerouslySetInnerHTML={{__html:item.a}}/>
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
