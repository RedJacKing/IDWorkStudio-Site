// ─────────────────────────────────────────────────────────────
// /commercial/office-renovation
// GEO sub-page — hardcoded English (B2B commercial audience)
// Design mirrors Reinstatement.tsx exactly
// Hero image: replace Unsplash URL with your own project photo
// ─────────────────────────────────────────────────────────────
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck, FileCheck, Clock, HardHat,
  LayoutPanelLeft, Zap, Ruler, PenTool,
  Search, FileText, Hammer, CheckCircle2,
  Building2, AlertTriangle, ArrowRight,
} from 'lucide-react';

export default function OfficeRenovation() {
  const whatsappLink = `https://wa.me/6598333085?text=Hi%20ID%20Work%20Studio,%20I'd%20like%20a%20free%20site%20survey%20for%20office%20renovation.`;

  // ── Schema.org: Service ──────────────────────────────────────
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Office Renovation Singapore",
    "description": "BCA-registered office renovation and fit-out contractor in Singapore. Turnkey service: space planning, partitioning, M&E, false ceiling, flooring, and all BCA, SCDF, and MCST permit submissions. Serving offices across all Singapore districts from our Woodlands studio.",
    "serviceType": "Office Renovation",
    "areaServed": { "@type": "City", "name": "Singapore" },
    "provider": {
      "@type": "GeneralContractor",
      "name": "ID Work Studio",
      "url": "https://idworkstudio.com",
      "telephone": "+6568162872",
      "email": "contact@idworkstudio.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "11 Woodlands Close, Woodlands 11, #03-10",
        "addressLocality": "Woodlands",
        "addressRegion": "Singapore",
        "postalCode": "737853",
        "addressCountry": "SG"
      }
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "SGD",
      "description": "Office renovation from S$50 to S$180+ per square foot depending on scope and finishes."
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://idworkstudio.com/commercial/office-renovation"
    }
  };

  // ── Schema.org: FAQPage (visible answers below AND in schema) ─
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does office renovation cost in Singapore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Office renovation in Singapore costs S$50–S$100 psf for a budget fit-out (open plan, vinyl flooring, basic M&E), S$100–S$180 psf for a mid-range office with glass partitions and custom carpentry, and S$180+ psf for premium design-build. For a 1,500 sq ft office, budget S$75,000–S$270,000 before furniture and IT. Add 3–5% for permits and professional fees."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a BCA permit for office renovation in Singapore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Any structural changes, partition works affecting fire compartmentation, or M&E modifications require BCA plan approval before work starts. SCDF fire safety submission is also required if sprinkler heads, smoke detectors, or escape routes are affected. Building management (MCST) approval must come before any government authority submission. As a BCA-registered contractor, ID Work Studio handles all submissions as part of our turnkey service."
        }
      },
      {
        "@type": "Question",
        "name": "How long does office renovation take in Singapore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard office renovation for 1,000–3,000 sq ft takes 6–12 weeks for construction, plus 2–4 weeks for BCA permit processing before works begin. Offices in CBD Grade A buildings typically add 2–4 weeks due to restricted goods lift hours and night-works requirements. Total from first site survey to key handover: allow 10–18 weeks."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Office Renovation Singapore | BCA-Registered Fit-Out Contractor | ID Work Studio</title>
        <meta name="description" content="BCA-registered office renovation and fit-out contractor in Singapore. Full turnkey service — space planning, partitioning, M&E, and all permit submissions. From $50 psf. Free site survey." />
        <meta name="keywords" content="office renovation Singapore, office fit-out Singapore, office interior design Singapore, BCA registered office contractor Singapore, office renovation cost Singapore 2026" />
        <meta name="geo.region" content="SG" />
        <meta name="geo.placename" content="Woodlands, Singapore" />
        <meta name="geo.position" content="1.4348129;103.7326522" />
        <meta name="ICBM" content="1.4348129, 103.7326522" />
        <link rel="canonical" href="https://idworkstudio.com/commercial/office-renovation" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://idworkstudio.com/commercial/office-renovation" />
        <meta property="og:title" content="Office Renovation Singapore | BCA-Registered Fit-Out | ID Work Studio" />
        <meta property="og:description" content="BCA-registered office renovation contractor in Singapore. Turnkey fit-out from $50 psf. Free site survey. Woodlands-based, serving all of Singapore." />
        <meta property="og:image" content="https://idworkstudio.com/gallery/commercial-expertise.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="ID Work Studio" />
        <meta property="og:locale" content="en_SG" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Office Renovation Singapore | BCA-Registered Fit-Out | ID Work Studio" />
        <meta name="twitter:description" content="BCA-registered office renovation contractor in Singapore. Turnkey fit-out from $50 psf. Free site survey." />
        <meta name="twitter:image" content="https://idworkstudio.com/gallery/commercial-expertise.png" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="bg-off-white min-h-screen font-sans selection:bg-gold selection:text-dark-charcoal">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark-charcoal pt-24 md:pt-32 lg:pt-40 pb-20 md:pb-32 text-white">
          <div className="absolute inset-0 z-0">
            {/* Replace this Unsplash URL with your own office project photo */}
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
              alt="Modern Corporate Office Renovation Singapore"
              className="w-full h-full object-cover opacity-40"
              fetchpriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-dark-charcoal/60" />
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">

            {/* Credentials badge */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.25em] text-gold/80 mb-8 font-semibold"
            >
              HDB-Registered HB-02-5250G · BCA-Registered
            </motion.p>

            {/* H1 — two-line serif/bold split matching Reinstatement */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl mb-6 leading-tight flex flex-col items-center"
            >
              <span className="font-serif italic text-white/80 text-2xl md:text-3xl mb-3">Singapore's Trusted</span>
              <span className="font-sans font-bold text-gold uppercase tracking-wider">Office Renovation Contractor</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed font-light"
            >
              Full turnkey office fit-out — space planning, partitioning, M&E, and every permit submission managed in-house. Offices from 500 to 10,000 sq ft across all Singapore districts.
            </motion.p>

            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-gold text-dark-charcoal text-sm font-bold uppercase tracking-[0.2em] hover:bg-gold-hover transition-all duration-300 rounded-full shadow-xl"
            >
              Get a Free Site Survey
            </motion.a>

            {/* Three trust badges at hero bottom — matches Reinstatement hero trust row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
            >
              {[
                { icon: <ShieldCheck size={22} />, label: "BCA-Registered Contractor" },
                { icon: <FileCheck size={22} />, label: "Full Permit Management" },
                { icon: <Clock size={22} />, label: "On-Time Delivery Guarantee" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-5 py-4 backdrop-blur-sm">
                  <span className="text-gold flex-shrink-0">{item.icon}</span>
                  <span className="text-white/80 text-sm font-medium text-left">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── OVERVIEW ──────────────────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl mb-4 flex flex-col items-center">
                <span className="font-serif italic text-dark-charcoal/60 text-2xl mb-2">What Does</span>
                <span className="font-sans font-bold text-dark-charcoal uppercase tracking-wider">Office Renovation Cover?</span>
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left: answer-first content — the detail AI needs to cite you */}
              <div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Office renovation in Singapore is the process of transforming a leased or owned commercial space into a functional, brand-aligned workspace. Unlike residential renovation, it requires managing government authority submissions — BCA, SCDF, and sometimes URA — in addition to your building management's own fit-out requirements, all before the first wall goes up.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  As a BCA-registered contractor with over 10 years of commercial fit-out experience, ID Work Studio handles every step: space planning and layout, partition systems, mechanical and electrical (M&E) works, false ceiling, flooring, custom carpentry, and all authority submissions. One firm, one point of contact, from site survey to key handover.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Office renovation costs in Singapore typically range from <strong className="text-dark-charcoal">S$50–S$100 psf</strong> for a budget fit-out, <strong className="text-dark-charcoal">S$100–S$180 psf</strong> for a mid-range office with glass partitions and custom M&E, and <strong className="text-dark-charcoal">S$180+ psf</strong> for a premium design-build. Set aside a further 3–5% of your total budget for permits and professional fees — a cost most tenants overlook until it's too late.
                </p>
              </div>

              {/* Right: "who we work with" cards */}
              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    title: "SMEs & Growing Businesses",
                    desc: "First office fit-out or expansion fit-out. We help you design for today's headcount while planning for growth."
                  },
                  {
                    title: "MNCs & Regional Offices",
                    desc: "Fit-outs in Grade A CBD buildings with restricted working hours and complex M&E requirements. We know the process."
                  },
                  {
                    title: "Businesses Relocating",
                    desc: "Moving office? We coordinate the new fit-out and reinstatement of your existing space simultaneously to reduce lease overlap costs."
                  },
                ].map((card, i) => (
                  <div key={i} className="bg-off-white border border-gray-100 rounded-xl p-6 hover:border-gold/30 transition-colors">
                    <h3 className="font-bold text-dark-charcoal mb-2 uppercase tracking-wide text-sm">{card.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SCOPE OF WORKS ────────────────────────────────────── */}
        <section className="py-24 bg-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl mb-4 flex flex-col items-center">
                <span className="font-serif italic text-dark-charcoal/60 text-2xl mb-2">Everything</span>
                <span className="font-sans font-bold text-dark-charcoal uppercase tracking-wider">Included in Our Office Fit-Out</span>
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <LayoutPanelLeft size={28} />, title: "Space Planning & Layout", desc: "Optimised floor plans for workflow, collaboration zones, private offices, and breakout areas — designed around your headcount and brand." },
                { icon: <Ruler size={28} />, title: "Partition Systems", desc: "Drywall, frameless glass, and acoustic partitions. Full-height, partial-height, and demountable systems to suit any floor plate." },
                { icon: <Zap size={28} />, title: "Mechanical & Electrical", desc: "Electrical distribution, data and power cabling, aircon (FCU/VRV/cassette), LED lighting design, and PA/AV rough-in." },
                { icon: <HardHat size={28} />, title: "False Ceiling & Flooring", desc: "Grid and open-plan ceilings, vinyl plank, carpet tiles, raised access floors, and epoxy finishes for server or storage rooms." },
                { icon: <PenTool size={28} />, title: "Custom Carpentry", desc: "Reception counters, workstation joinery, storage walls, pantry cabinetry, and feature walls built to your brand specifications." },
                { icon: <FileCheck size={28} />, title: "All Permit Submissions", desc: "BCA building plans, SCDF fire safety, MCST and landlord submissions — managed start to finish so you can focus on your business." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  className="bg-white p-8 border border-gray-100 rounded-xl hover:border-gold/40 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-gold mb-5">{item.icon}</div>
                  <h3 className="font-bold text-dark-charcoal mb-3 uppercase tracking-wide text-sm">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AT-A-GLANCE STATS ─────────────────────────────────── */}
        <section className="py-16 bg-dark-charcoal">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { value: "$50–$180+", unit: "psf", label: "Typical Cost Range" },
                { value: "6–12", unit: "weeks", label: "Construction Duration" },
                { value: "2–4", unit: "weeks", label: "BCA Permit Processing" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl md:text-5xl font-bold text-gold font-sans">{stat.value}</span>
                    <span className="text-gold/60 text-sm uppercase tracking-wider">{stat.unit}</span>
                  </div>
                  <p className="text-white/50 text-xs uppercase tracking-[0.2em]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CHALLENGES VS SOLUTIONS ───────────────────────────── */}
        {/* This section matches Reinstatement.tsx exactly */}
        <section className="py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl mb-4 flex flex-col items-center">
                <span className="font-serif italic text-dark-charcoal/60 text-2xl mb-2">Overcoming</span>
                <span className="font-sans font-bold text-gold uppercase tracking-wider">Office Renovation Challenges</span>
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <AlertTriangle size={48} strokeWidth={1} />,
                  pain: "Permit Delays & Stop-Work Orders",
                  solution: "We submit BCA, SCDF, and MCST in the legally required sequence. Work never starts until every sign-off is in hand — preventing costly stop-work orders.",
                },
                {
                  icon: <Clock size={48} strokeWidth={1} />,
                  pain: "Business Disruption During Works",
                  solution: "Phased renovation strategies and after-hours scheduling keep your team operational throughout the fit-out — no forced office closures.",
                },
                {
                  icon: <Building2 size={48} strokeWidth={1} />,
                  pain: "Grade A Building Complexity",
                  solution: "We work regularly in CapitaLand, Keppel, and Mapletree buildings. Restricted lift hours, hoarding requirements, insurance certificates — all managed.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="bg-white p-10 shadow-xl border-b-4 border-gold group flex flex-col items-center text-center"
                >
                  <div className="mb-8 text-gold flex justify-center">{item.icon}</div>
                  <div className="mb-6 w-full">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 block mb-2 font-sans">The Challenge</span>
                    <h3 className="text-xl font-bold text-dark-charcoal uppercase font-sans leading-tight">{item.pain}</h3>
                  </div>
                  <div className="pt-6 border-t border-gray-100 w-full">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gold block mb-2 font-sans">Our Solution</span>
                    <p className="text-gray-600 leading-relaxed text-sm font-sans font-normal">{item.solution}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TRUST ROW — matches Reinstatement ─────────────────── */}
        <section className="py-12 bg-white border-y border-gray-100 relative z-10">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="font-serif italic text-dark-charcoal/40 text-lg md:text-xl tracking-wide">
              Trusted by Singapore businesses for over 10 years of on-time, fully compliant office fit-outs.
            </p>
          </div>
        </section>

        {/* ── PROCESS — matches Reinstatement exactly ───────────── */}
        <section className="py-24 relative z-10 bg-dark-charcoal text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl mb-4 flex flex-col items-center">
                <span className="font-serif italic text-white/60 text-2xl mb-2">Our Seamless</span>
                <span className="font-sans font-bold text-gold uppercase tracking-wider">4-Step Process</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
              <div className="hidden md:block absolute top-[32px] left-0 w-full h-[1px] bg-gold/20 z-0"></div>

              {[
                { icon: <Search className="text-dark-charcoal" size={24} />, title: "Free Site Survey", desc: "We visit your space, assess scope, and deliver a detailed fixed-price quotation within 3 working days." },
                { icon: <FileText className="text-dark-charcoal" size={24} />, title: "Design & Permits", desc: "Space planning, 3D visuals, and simultaneous MCST, BCA, and SCDF submissions — no agency chasing required." },
                { icon: <Hammer className="text-dark-charcoal" size={24} />, title: "Renovation Works", desc: "Our site team executes with precision. Weekly progress updates keep you informed without site visits." },
                { icon: <CheckCircle2 className="text-dark-charcoal" size={24} />, title: "Snagging & Handover", desc: "Final walkthrough, defect rectification, and handover with all compliance certificates." },
              ].map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center px-4 mb-12 md:mb-0">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(197,160,89,0.3)] hover:scale-110 transition-transform relative">
                    {step.icon}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-dark-charcoal text-gold rounded-full flex items-center justify-center text-[10px] font-bold font-sans border border-gold/50">0{i + 1}</div>
                  </div>
                  <div className="w-full min-h-[3.5rem] flex items-center justify-center mb-4">
                    <h4 className="text-sm md:text-base lg:text-lg font-bold uppercase tracking-wider text-gold font-sans leading-tight">{step.title}</h4>
                  </div>
                  <div className="w-full min-h-[4rem] flex flex-col items-center">
                    <p className="text-white/90 text-sm leading-relaxed font-sans font-normal max-w-[200px]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ — visible on page + in schema above ───────────── */}
        <section className="py-24 bg-off-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif mb-12 text-center text-dark-charcoal">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  icon: <Clock className="w-6 h-6 text-gold flex-shrink-0 mt-1" />,
                  q: "How much does office renovation cost in Singapore?",
                  a: "Office renovation typically costs <strong>S$50–S$100 psf</strong> for a budget fit-out, <strong>S$100–S$180 psf</strong> for a mid-range office with glass partitions and custom M&E, and <strong>S$180+ psf</strong> for premium design-build. For a 1,500 sq ft office, budget S$75,000–S$270,000 excluding furniture, IT, and signage. Add 3–5% of your total budget for permits and professional fees."
                },
                {
                  icon: <ShieldCheck className="w-6 h-6 text-gold flex-shrink-0 mt-1" />,
                  q: "Do I need a BCA permit for office renovation in Singapore?",
                  a: "Yes — for any structural changes, partition works affecting fire compartmentation, or M&E modifications. <strong>SCDF fire safety plan submission</strong> is also required if sprinkler heads, smoke detectors, or escape routes are affected. Importantly, <strong>building management (MCST) approval must come first</strong>, before any government authority submission. As a BCA-registered contractor, ID Work Studio handles all submissions as part of our service."
                },
                {
                  icon: <FileCheck className="w-6 h-6 text-gold flex-shrink-0 mt-1" />,
                  q: "How long does office renovation take in Singapore?",
                  a: "A standard office fit-out for 1,000–3,000 sq ft takes <strong>6–12 weeks for construction</strong>, plus <strong>2–4 weeks for BCA permit processing</strong> before any physical work begins. Offices in CBD Grade A buildings add a further 2–4 weeks due to restricted goods lift hours and night-works-only requirements. From first site survey to key handover, allow <strong>10–18 weeks</strong> in total."
                },
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-dark-charcoal mb-3 flex items-start gap-3">
                    {item.icon}
                    {item.q}
                  </h3>
                  <p
                    className="text-gray-600 leading-relaxed pl-9 text-sm"
                    dangerouslySetInnerHTML={{ __html: item.a }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED SERVICES — internal linking for GEO ───────── */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-serif text-center text-dark-charcoal mb-10">Explore Our Other Commercial Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Retail & Mall Store Renovation", desc: "MCST submissions, shopfront design, night-works capable.", link: "/commercial/retail-mall-renovation" },
                { title: "Shophouse Renovation", desc: "URA conservation compliance + modern interior fit-out.", link: "/commercial/shophouse-renovation" },
                { title: "Permits & Compliance", desc: "SCDF, LEW, BCA, and MCST — all submissions managed.", link: "/commercial/permits-compliance" },
                { title: "Reinstatement", desc: "Bare shell handover for offices and mall units.", link: "/commercial/reinstatement" },
              ].map((svc, i) => (
                <Link
                  key={i}
                  to={svc.link}
                  className="group flex items-start justify-between p-6 border border-gray-200 rounded-xl hover:border-gold hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <h3 className="font-bold text-dark-charcoal mb-2 text-sm uppercase tracking-wide group-hover:text-gold transition-colors">{svc.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">{svc.desc}</p>
                  </div>
                  <ArrowRight size={16} className="text-gray-300 group-hover:text-gold transition-colors flex-shrink-0 mt-1 ml-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA — matches Reinstatement exactly ─────────── */}
        <section className="py-32 bg-white relative z-10 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl mb-12 flex flex-col items-center justify-center gap-2"
            >
              <span className="font-serif italic text-dark-charcoal">Ready to Transform</span>
              <span className="font-sans font-bold text-gold uppercase tracking-wider">Your Workspace?</span>
            </motion.h2>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-12 py-6 bg-gold text-dark-charcoal text-sm font-bold uppercase tracking-[0.3em] hover:bg-gold-hover transition-all duration-300 rounded-full shadow-2xl hover:shadow-gold/20 font-sans"
            >
              WhatsApp for a Free Site Survey
            </a>
          </div>
          <div className="absolute top-0 left-0 w-64 h-64 border-l border-t border-gold/10 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 border-r border-b border-gold/10 translate-x-1/2 translate-y-1/2"></div>
        </section>

        {/* ── STICKY MOBILE CTA — matches Reinstatement exactly ─── */}
        <div className="fixed bottom-0 left-0 w-full bg-dark-charcoal/95 backdrop-blur-md border-t border-gold/30 p-4 z-[100] md:hidden">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-gold py-4 rounded-full text-dark-charcoal font-bold text-xs uppercase tracking-widest font-sans"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.408 0 12.044c0 2.123.554 4.197 1.608 6.037L0 24l6.105-1.602a11.834 11.834 0 005.937 1.598h.005c6.637 0 12.048-5.408 12.052-12.044.002-3.218-1.248-6.242-3.514-8.508z"/>
            </svg>
            Free Office Survey — WhatsApp Us
          </a>
        </div>

      </div>
    </>
  );
}
