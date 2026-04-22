// ─────────────────────────────────────────────────────────────
// /commercial/permits-compliance
// GEO sub-page — hardcoded English (B2B commercial audience)
// This page is designed to be THE reference page AI cites when
// clients ask "what permits do I need for commercial renovation?"
// Uses icon-rich layout — no hero photo change needed
// ─────────────────────────────────────────────────────────────
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck, FileCheck, Zap, Building2,
  AlertTriangle, Search, FileText, Hammer, CheckCircle2,
  ArrowRight, Flame, ClipboardCheck,
} from 'lucide-react';

export default function CompliancePermits() {
  const whatsappLink = `https://wa.me/6598333085?text=Hi%20ID%20Work%20Studio,%20I%20need%20help%20with%20commercial%20renovation%20permits%20and%20compliance.`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Renovation Permits & Compliance Singapore",
    "description": "Complete permit management for commercial renovation in Singapore. ID Work Studio handles MCST and landlord submissions, BCA building plan approvals, SCDF fire safety plan submissions, and EMA Licensed Electrical Worker (LEW) compliance — all managed in-house as part of our turnkey renovation service.",
    "serviceType": "Commercial Renovation Compliance",
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
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://idworkstudio.com/commercial/permits-compliance"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is SCDF approval and when do I need it for commercial renovation in Singapore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under the Fire Safety Act 1993, any works that affect fire safety systems in a commercial building require SCDF plan approval before work begins. This includes relocating or adding sprinkler heads, moving smoke detectors, modifying fire escape routes, adding partitions that affect fire compartmentation, and any change of use. Plans must be prepared and submitted by a Qualified Person (QP) — a registered architect or Professional Engineer — through the CORENET e-submission system. SCDF typically processes submissions in 2 to 4 weeks for standard applications. Fines for unapproved works reach up to S$200,000 under the Fire Safety Act, and any fire insurance claim on a premises with unapproved works can be denied entirely."
        }
      },
      {
        "@type": "Question",
        "name": "What is a Licensed Electrical Worker (LEW) and why does the grade matter for commercial renovation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Licensed Electrical Worker (LEW) is a professional certified by Singapore's Energy Market Authority (EMA) under the Electricity Act 2001 to carry out, supervise, and certify electrical installations. There are three grades. Grade 7 (Licensed Electrician) covers installations up to 45kVA — sufficient for residential and very small shops. Grade 8 (Licensed Electrical Technician) covers installations up to 500kVA — required for most commercial offices, retail stores, and mall units. Grade 9 (Licensed Electrical Engineer) covers high-voltage and large industrial installations. Critically, any non-domestic premises with an approved electrical load exceeding 45kVA must hold a valid EMA Electrical Installation Licence to legally operate. A Grade 8 LEW applies for and manages this licence. If the wrong grade is used or the EMA licence is not obtained, the installation is uncertified, building management will not sign off handover, and any electrical incident voids your insurance entirely."
        }
      },
      {
        "@type": "Question",
        "name": "In what sequence should I obtain approvals for commercial renovation in Singapore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The correct approval sequence for most commercial renovation in Singapore is: first, obtain building management or MCST approval — this is a private landlord or management corporation requirement and must come before any government agency submission. Second, submit BCA building plans if structural works, partition changes affecting fire compartmentation, or M&E modifications are involved. Third, submit SCDF fire safety plans if any fire protection systems are affected. Fourth, ensure your appointed LEW applies for the EMA Electrical Installation Licence once electrical works are complete. Starting any physical works before MCST and BCA approval is in hand risks a stop-work order, fines, and mandatory demolition of any non-compliant works."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if I start commercial renovation without the required permits in Singapore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Starting commercial renovation without required permits in Singapore carries serious consequences. BCA can issue a stop-work order immediately and require demolition of all non-compliant works at the owner's cost. SCDF can fine up to S$200,000 for unapproved fire safety works, and any fire incident on the premises will result in insurance claim denial. The EMA can fine up to S$10,000 for electrical works not carried out by the correct grade of LEW, and the electrical installation will remain unregistered — meaning building management cannot legally sign off on your occupation. The financial cost of rectifying non-compliant works typically far exceeds the cost of obtaining permits correctly from the start."
        }
      }
    ]
  };

  // The four compliance areas — structured as the page's main content
  const complianceAreas = [
    {
      step: "01",
      icon: <Building2 size={32} strokeWidth={1.5} />,
      agency: "MCST & Landlord",
      title: "Building Management Approval",
      subtitle: "Always the first step — before any government submission",
      body: "Most tenants approach government agencies first and are surprised when their renovation is halted because they never obtained landlord or building management approval. In Singapore, the Management Corporation Strata Title (MCST) — the governing body for strata commercial buildings including most offices and shopping malls — must approve your renovation plans before BCA, SCDF, or any other authority submission can proceed. The MCST requires detailed floor plans, electrical single-line diagrams, fire sprinkler layouts, a refundable renovation deposit (typically S$2,000–S$5,000), and a valid public liability insurance certificate. Most MCSTs require submission at least one to two weeks before works begin. In high-traffic malls, they may impose additional requirements: night-works-only for noisy works, approved hoarding designs, and dedicated goods lift booking. ID Work Studio prepares the full MCST submission package as part of our standard service.",
      keyFacts: [
        "MCST approval must precede all government agency submissions",
        "Renovation deposit: typically S$2,000–S$5,000 (refundable)",
        "Public liability insurance certificate required",
        "Night-works may be required in high-footfall malls",
        "Submit drawings at least 1–2 weeks before works begin",
      ],
      color: "border-gold",
    },
    {
      step: "02",
      icon: <ClipboardCheck size={32} strokeWidth={1.5} />,
      agency: "BCA",
      title: "Building & Construction Authority",
      subtitle: "Required for structural, M&E, and partition works",
      body: "The Building and Construction Authority (BCA) regulates all structural, mechanical, and electrical changes to buildings in Singapore under the Building Control Act. Any commercial renovation involving structural modifications, partition walls that affect fire compartmentation, major electrical works, HVAC alterations, or change of use requires BCA plan approval before physical work commences. Plans must be submitted through the CORENET e-submission system by a Qualified Person — a licensed architect or Professional Engineer. BCA typically processes standard applications in 2 to 4 weeks, though complex structural changes or change-of-use applications can take 4 to 8 weeks. Starting work before BCA approval is received is illegal and can result in a stop-work order, fines, and mandatory demolition of non-compliant works. As a BCA-registered contractor, ID Work Studio coordinates QP engagement and manages BCA submissions as part of our project service.",
      keyFacts: [
        "Only Qualified Persons (QPs) can submit plans to BCA",
        "Standard processing: 2–4 weeks; complex works: 4–8 weeks",
        "Budget 3–5% of total renovation cost for permits and QP fees",
        "Stop-work orders and demolition for unauthorised works",
        "Change of use requires URA approval in addition to BCA",
      ],
      color: "border-gold",
    },
    {
      step: "03",
      icon: <Flame size={32} strokeWidth={1.5} />,
      agency: "SCDF",
      title: "Singapore Civil Defence Force",
      subtitle: "Fire safety — the most costly compliance to miss",
      body: "Under the Fire Safety Act 1993, any commercial renovation that affects fire safety systems requires SCDF plan approval before any physical work begins. This is the most commonly overlooked compliance requirement — and the most expensive to remediate. Triggering SCDF submission is not limited to major demolition works. Adding partitions that alter sprinkler coverage zones, relocating sprinkler heads or smoke detectors, modifying fire escape routes, installing new fire doors, or any change that affects fire compartmentation all require SCDF fire safety plans to be submitted by a Qualified Person through CORENET. The current governing standard is the Fire Code 2023, which received its most recent batch of amendments in September 2025 effective March 2026. Processing takes 2 to 4 weeks for standard works and 3 to 4 weeks for complex systems. Fines for unapproved fire safety works reach up to S$200,000 under the Fire Safety Act. Critically, any fire insurance claim made on a premises with undisclosed unapproved fire safety works will be denied by the insurer entirely — exposing the building owner and tenant to full liability.",
      keyFacts: [
        "Governing standard: Fire Code 2023 (amended March 2026)",
        "Triggered by: sprinkler relocation, partition changes, escape route changes",
        "SCDF fines: up to S$200,000 for unapproved works",
        "Fire insurance can be voided by undisclosed unapproved works",
        "Conservation shophouses governed by SCDF Chapter 9 relaxations",
      ],
      color: "border-gold",
    },
    {
      step: "04",
      icon: <Zap size={32} strokeWidth={1.5} />,
      agency: "EMA / LEW",
      title: "Licensed Electrical Worker",
      subtitle: "The grade matters — hiring the wrong one voids certification",
      body: "All electrical works in Singapore must be carried out by or under the direct supervision of a Licensed Electrical Worker (LEW) certified by the Energy Market Authority (EMA) under the Electricity Act 2001. There are three grades, and engaging the wrong grade renders all electrical work uncertifiable regardless of physical quality. Grade 7 (Licensed Electrician) covers installations up to 45kVA — appropriate for residential work and very small shops. Grade 8 (Licensed Electrical Technician) covers installations up to 500kVA and is required for the vast majority of commercial fit-outs, including offices, retail stores, and mall units. Any non-domestic premises with an approved electrical load exceeding 45kVA — which most commercial spaces will exceed — must also hold a valid EMA Electrical Installation Licence to legally operate. Only a Grade 8 LEW can apply for and manage this licence. Upon completion, the LEW must submit a Certificate of Compliance (COC) to EMA. Without the correct LEW grade, COC, and EMA licence, building management will not sign off on handover, and any electrical incident voids your insurance policy entirely. Fines for engaging unlicensed or wrong-grade electrical workers reach S$10,000 and may include potential imprisonment for serious violations.",
      keyFacts: [
        "Grade 8 LEW required for most commercial spaces (above 45kVA)",
        "EMA Electrical Installation Licence required for non-domestic premises above 45kVA",
        "Certificate of Compliance (COC) must be submitted to EMA on completion",
        "Wrong LEW grade = uncertifiable work, voids insurance",
        "Fines up to S$10,000 for engaging unlicensed electrical workers",
      ],
      color: "border-gold",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Commercial Renovation Permits Singapore | SCDF, LEW, BCA & MCST | ID Work Studio</title>
        <meta name="description" content="Complete permit management for commercial renovation in Singapore. MCST submission, BCA approval, SCDF fire safety, and LEW compliance — all handled in-house. BCA-registered contractor. Free consultation." />
        <meta name="keywords" content="SCDF approval commercial renovation Singapore, LEW requirements Singapore, BCA permit commercial renovation, MCST renovation submission Singapore, commercial renovation permits Singapore 2026" />
        <meta name="geo.region" content="SG" />
        <meta name="geo.placename" content="Woodlands, Singapore" />
        <meta name="geo.position" content="1.4348129;103.7326522" />
        <meta name="ICBM" content="1.4348129, 103.7326522" />
        <link rel="canonical" href="https://idworkstudio.com/commercial/permits-compliance" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://idworkstudio.com/commercial/permits-compliance" />
        <meta property="og:title" content="Commercial Renovation Permits Singapore | SCDF, LEW, BCA & MCST | ID Work Studio" />
        <meta property="og:description" content="Complete permit management for commercial renovation in Singapore. MCST, BCA, SCDF, and LEW compliance — all handled in-house by a BCA-registered contractor." />
        <meta property="og:image" content="https://idworkstudio.com/gallery/commercial-expertise.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="ID Work Studio" />
        <meta property="og:locale" content="en_SG" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Commercial Renovation Permits Singapore | SCDF, LEW, BCA & MCST | ID Work Studio" />
        <meta name="twitter:description" content="Complete permit management for commercial renovation in Singapore. MCST, BCA, SCDF, and LEW compliance — all handled in-house." />
        <meta name="twitter:image" content="https://idworkstudio.com/gallery/commercial-expertise.png" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="bg-off-white min-h-screen font-sans selection:bg-gold selection:text-dark-charcoal">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark-charcoal pt-24 md:pt-32 lg:pt-40 pb-20 md:pb-32 text-white">
          <div className="absolute inset-0 z-0">
            <img
              src="/gallery/commercial-expertise.png"
              alt="Commercial Renovation Permits Compliance Singapore"
              className="w-full h-full object-cover opacity-40"
              fetchpriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-dark-charcoal/65" />
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.25em] text-gold/80 mb-8 font-semibold"
            >
              HDB-Registered HB-02-5250G · BCA-Registered
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl mb-6 leading-tight flex flex-col items-center"
            >
              <span className="font-serif italic text-white/80 text-2xl md:text-3xl mb-3">Permits & Compliance</span>
              <span className="font-sans font-bold text-gold uppercase tracking-wider">For Commercial Renovation Singapore</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed font-light"
            >
              MCST, BCA, SCDF, and EMA Licensed Electrical Worker (LEW) — the four compliance pillars every commercial renovation in Singapore must satisfy. We manage all of them in-house, in the correct sequence, so you never face a stop-work order.
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
              Speak to Our Compliance Team
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            >
              {[
                { icon: <Building2 size={20} />, label: "MCST Managed" },
                { icon: <FileCheck size={20} />, label: "BCA Registered" },
                { icon: <Flame size={20} />, label: "SCDF Compliant" },
                { icon: <Zap size={20} />, label: "LEW Grade 8" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-4 backdrop-blur-sm">
                  <span className="text-gold flex-shrink-0">{item.icon}</span>
                  <span className="text-white/80 text-sm font-medium text-left">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── INTRO ─────────────────────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl mb-4 flex flex-col items-center">
              <span className="font-serif italic text-dark-charcoal/60 text-2xl mb-2">Why Compliance</span>
              <span className="font-sans font-bold text-dark-charcoal uppercase tracking-wider">Is the Most Important Part of Your Renovation</span>
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mt-6 mb-12"></div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Most renovation firms in Singapore talk openly about design and construction but rarely publish the compliance detail that commercial clients actually need. That avoidance is precisely why non-compliance is so common — and so expensive. Stop-work orders, forced demolition of completed works, insurance claim denials, and fines reaching S$200,000 are not theoretical risks. They happen to businesses that start renovation with good intentions but without the right paperwork in the right sequence.
            </p>
            <p className="text-gray-600 leading-relaxed">
              ID Work Studio treats compliance as the foundation of every commercial project, not an afterthought. The four sections below explain exactly what each agency requires, when it is triggered, and what the consequences of skipping it are — so you can make an informed decision before you sign a single quotation.
            </p>
          </div>
        </section>

        {/* ── FINE STATS BAR ────────────────────────────────────── */}
        <section className="py-16 bg-dark-charcoal">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "S$200K", label: "Max SCDF Fine (unapproved works)" },
                { value: "S$10K", label: "Max EMA Fine (wrong LEW grade)" },
                { value: "4", label: "Agencies Managed by ID Work Studio" },
                { value: "0", label: "Stop-Work Orders on Our Projects" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-3xl md:text-4xl font-bold text-gold font-sans mb-2">{stat.value}</span>
                  <p className="text-white/50 text-xs uppercase tracking-[0.15em] leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOUR COMPLIANCE AREAS — the core content of this page ─ */}
        <section className="py-24 bg-off-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl mb-4 flex flex-col items-center">
                <span className="font-serif italic text-dark-charcoal/60 text-2xl mb-2">The Four Approval Pillars</span>
                <span className="font-sans font-bold text-dark-charcoal uppercase tracking-wider">For Commercial Renovation in Singapore</span>
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
            </div>

            <div className="space-y-12">
              {complianceAreas.map((area, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`bg-white rounded-2xl shadow-sm border-l-4 ${area.color} overflow-hidden`}
                >
                  {/* Card header */}
                  <div className="flex items-start gap-6 p-8 border-b border-gray-50">
                    <div className="flex-shrink-0 w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center text-gold">
                      {area.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-bold text-gold uppercase tracking-[0.2em]">Step {area.step}</span>
                        <span className="text-xs text-gray-300">·</span>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">{area.agency}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-dark-charcoal font-sans">{area.title}</h3>
                      <p className="text-sm text-gold/80 mt-1 font-medium italic">{area.subtitle}</p>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <p className="text-gray-600 leading-relaxed text-sm">{area.body}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4 font-bold">Key Facts</p>
                      <ul className="space-y-2">
                        {area.keyFacts.map((fact, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-gold flex-shrink-0 mt-0.5">·</span>
                            {fact}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW WE MANAGE IT — process section ────────────────── */}
        <section className="py-24 relative z-10 bg-dark-charcoal text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl mb-4 flex flex-col items-center">
                <span className="font-serif italic text-white/60 text-2xl mb-2">How We Manage</span>
                <span className="font-sans font-bold text-gold uppercase tracking-wider">Your Compliance End to End</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
              <div className="hidden md:block absolute top-[32px] left-0 w-full h-[1px] bg-gold/20 z-0"></div>

              {[
                { icon: <Search className="text-dark-charcoal" size={24} />, title: "Compliance Audit", desc: "Site visit to identify every approval required for your specific space, building type, and scope. No surprises later." },
                { icon: <FileText className="text-dark-charcoal" size={24} />, title: "Multi-Agency Submission", desc: "MCST, BCA, and SCDF submissions prepared by our QP and managed simultaneously to compress the approval timeline." },
                { icon: <Hammer className="text-dark-charcoal" size={24} />, title: "Compliant Execution", desc: "All works carried out by our BCA-registered team with Grade 8 LEW supervision for all electrical installations." },
                { icon: <CheckCircle2 className="text-dark-charcoal" size={24} />, title: "Certification & Handover", desc: "BCA and SCDF inspections managed. LEW Certificate of Compliance (COC) submitted to EMA. Full documentation provided." },
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

        {/* ── FAQ ───────────────────────────────────────────────── */}
        <section className="py-24 bg-off-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif mb-12 text-center text-dark-charcoal">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  icon: <Flame className="w-6 h-6 text-gold flex-shrink-0 mt-1" />,
                  q: "What is SCDF approval and when do I need it for commercial renovation?",
                  a: "Under the <strong>Fire Safety Act 1993</strong>, any works affecting fire safety systems in a commercial building require SCDF plan approval before work begins. Triggers include relocating or adding sprinkler heads, moving smoke detectors, modifying fire escape routes, or adding partitions that change fire compartmentation. Plans are submitted by a Qualified Person through CORENET. SCDF processing takes 2–4 weeks. <strong>Fines for unapproved works reach S$200,000</strong> — and any fire insurance claim on a premises with undisclosed unapproved works will be denied entirely."
                },
                {
                  icon: <Zap className="w-6 h-6 text-gold flex-shrink-0 mt-1" />,
                  q: "What is a Licensed Electrical Worker (LEW) and why does the grade matter?",
                  a: "A LEW is certified by the EMA under the Electricity Act 2001 to carry out and certify electrical installations. <strong>Three grades exist:</strong> Grade 7 for residential and small shops (up to 45kVA), Grade 8 for commercial offices and mall units (up to 500kVA), and Grade 9 for large industrial premises. Any non-domestic premises above 45kVA must hold a valid <strong>EMA Electrical Installation Licence</strong> — only a Grade 8 LEW can apply for this. Using the wrong grade renders the installation uncertifiable, prevents building management sign-off, and voids your insurance."
                },
                {
                  icon: <ShieldCheck className="w-6 h-6 text-gold flex-shrink-0 mt-1" />,
                  q: "In what sequence should I obtain approvals for commercial renovation in Singapore?",
                  a: "The correct sequence is: <strong>(1) MCST / landlord approval first</strong> — always, before any government submission. <strong>(2) BCA building plans</strong> if structural, M&E, or partition works are involved. <strong>(3) SCDF fire safety plans</strong> if any fire protection systems are affected. <strong>(4) EMA LEW licence</strong> once electrical works are complete and certified by the Grade 8 LEW. Starting any physical works before MCST and BCA approval risks a stop-work order, fines, and mandatory demolition of all non-compliant works."
                },
                {
                  icon: <AlertTriangle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />,
                  q: "What happens if I start commercial renovation without the required permits?",
                  a: "The consequences are severe. BCA can issue a <strong>stop-work order immediately</strong> and require demolition of all non-compliant works at your cost. SCDF can fine up to <strong>S$200,000</strong>, and any fire incident on the premises will result in full insurance claim denial. The EMA can fine up to <strong>S$10,000</strong> for unlicensed electrical works, and the installation remains unregistered — meaning your landlord cannot legally sign off occupation. Rectifying non-compliant works after the fact almost always costs more than obtaining permits correctly from the start."
                },
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-dark-charcoal mb-3 flex items-start gap-3">
                    {item.icon}
                    {item.q}
                  </h3>
                  <p className="text-gray-600 leading-relaxed pl-9 text-sm" dangerouslySetInnerHTML={{ __html: item.a }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED SERVICES ──────────────────────────────────── */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-serif text-center text-dark-charcoal mb-10">Our Commercial Renovation Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Office Renovation", desc: "BCA permits, space planning, M&E, turnkey fit-out.", link: "/commercial/office-renovation" },
                { title: "Retail & Mall Store", desc: "MCST submissions, shopfront design, night-works capable.", link: "/commercial/retail-mall-renovation" },
                { title: "Shophouse Renovation", desc: "URA, BCA, SCDF — three-agency conservation compliance.", link: "/commercial/shophouse-renovation" },
                { title: "Reinstatement", desc: "Bare shell handover for offices and mall units.", link: "/commercial/reinstatement" },
              ].map((svc, i) => (
                <Link key={i} to={svc.link} className="group flex items-start justify-between p-6 border border-gray-200 rounded-xl hover:border-gold hover:shadow-md transition-all duration-300">
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

        {/* ── FINAL CTA ─────────────────────────────────────────── */}
        <section className="py-32 bg-white relative z-10 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl mb-12 flex flex-col items-center justify-center gap-2"
            >
              <span className="font-serif italic text-dark-charcoal">Start Your Renovation</span>
              <span className="font-sans font-bold text-gold uppercase tracking-wider">The Right Way.</span>
            </motion.h2>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-12 py-6 bg-gold text-dark-charcoal text-sm font-bold uppercase tracking-[0.3em] hover:bg-gold-hover transition-all duration-300 rounded-full shadow-2xl hover:shadow-gold/20 font-sans"
            >
              WhatsApp Our Compliance Team
            </a>
          </div>
          <div className="absolute top-0 left-0 w-64 h-64 border-l border-t border-gold/10 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 border-r border-b border-gold/10 translate-x-1/2 translate-y-1/2"></div>
        </section>

        {/* ── STICKY MOBILE CTA ─────────────────────────────────── */}
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
            Permits & Compliance — WhatsApp Us
          </a>
        </div>

      </div>
    </>
  );
}
