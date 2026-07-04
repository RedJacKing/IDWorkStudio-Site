import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, FileCheck, Clock, HardHat, LayoutPanelLeft, Zap, Ruler, PenTool, Search, FileText, Hammer, CheckCircle2, Building2, AlertTriangle, ArrowRight } from 'lucide-react';

export default function OfficeRenovation() {
  const { t } = useTranslation();
  const p = 'office_reno_page';
  const whatsappLink = `https://wa.me/6598333085?text=Hi%20ID%20Work%20Studio,%20I'd%20like%20a%20free%20site%20survey%20for%20office%20renovation.`;

  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service", "name": "Office Renovation Singapore",
    "description": "BCA-registered office renovation and fit-out contractor in Singapore. Turnkey service: space planning, partitioning, M&E, false ceiling, flooring, and all BCA, SCDF, and MCST permit submissions.",
    "serviceType": "Office Renovation", "areaServed": { "@type": "City", "name": "Singapore" },
    "provider": { "@type": "GeneralContractor", "name": "ID Work Studio", "url": "https://idworkstudio.com", "telephone": "+6568162872", "email": "contact@idworkstudio.com",
      "address": { "@type": "PostalAddress", "streetAddress": "11 Woodlands Close, Woodlands 11, #03-10", "addressLocality": "Woodlands", "addressRegion": "Singapore", "postalCode": "737853", "addressCountry": "SG" } },
    "offers": { "@type": "Offer", "priceCurrency": "SGD", "description": "Office renovation from S$50 to S$180+ per square foot." },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://idworkstudio.com/commercial/office-renovation" }
  };

  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": [1,2,3].map(n => ({ "@type": "Question", "name": t(`${p}.faq.q${n}`), "acceptedAnswer": { "@type": "Answer", "text": t(`${p}.faq.a${n}`) } }))
  };

  const scopeIcons = [<LayoutPanelLeft size={28}/>, <Ruler size={28}/>, <Zap size={28}/>, <HardHat size={28}/>, <PenTool size={28}/>, <FileCheck size={28}/>];
  const challengeIcons = [<AlertTriangle size={48} strokeWidth={1}/>, <Clock size={48} strokeWidth={1}/>, <Building2 size={48} strokeWidth={1}/>];
  const processIcons = [<Search className="text-dark-charcoal" size={24}/>, <FileText className="text-dark-charcoal" size={24}/>, <Hammer className="text-dark-charcoal" size={24}/>, <CheckCircle2 className="text-dark-charcoal" size={24}/>];
  const relatedKeys = ["retail","shophouse","compliance","reinstatement"];
  const relatedLinks = ["/commercial/retail-mall-renovation","/commercial/shophouse-renovation","/commercial/permits-compliance","/commercial/reinstatement"];

  return (
    <>
      <Helmet>
        <title>Office Renovation Singapore | BCA-Registered Fit-Out Contractor | ID Work Studio</title>
        <meta name="description" content="BCA-registered office renovation and fit-out contractor in Singapore. Full turnkey service — space planning, partitioning, M&E, and all permit submissions. From $50 psf. Free site survey." />
        <meta name="keywords" content="office renovation Singapore, office fit-out Singapore, BCA registered office contractor Singapore, office renovation cost Singapore 2026" />
        <meta name="geo.region" content="SG"/><meta name="geo.placename" content="Woodlands, Singapore"/>
        <meta name="geo.position" content="1.4348129;103.7326522"/><meta name="ICBM" content="1.4348129, 103.7326522"/>
        <link rel="canonical" href="https://idworkstudio.com/commercial/office-renovation"/>
        <meta property="og:type" content="website"/><meta property="og:url" content="https://idworkstudio.com/commercial/office-renovation"/>
        <meta property="og:title" content="Office Renovation Singapore | BCA-Registered Fit-Out | ID Work Studio"/>
        <meta property="og:description" content="BCA-registered office renovation contractor in Singapore. Turnkey fit-out from $50 psf. Free site survey."/>
        <meta property="og:image" content="https://idworkstudio.com/gallery/commercial-expertise.png"/>
        <meta property="og:image:width" content="1200"/><meta property="og:image:height" content="630"/>
        <meta property="og:site_name" content="ID Work Studio"/><meta property="og:locale" content="en_SG"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Office Renovation Singapore | BCA-Registered Fit-Out | ID Work Studio"/>
        <meta name="twitter:description" content="BCA-registered office renovation contractor. Turnkey fit-out from $50 psf."/>
        <meta name="twitter:image" content="https://idworkstudio.com/gallery/commercial-expertise.png"/>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="bg-off-white min-h-screen font-sans selection:bg-gold selection:text-dark-charcoal">

        {/* HERO */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark-charcoal pt-24 md:pt-32 lg:pt-40 pb-20 md:pb-32 text-white">
          <div className="absolute inset-0 z-0">
            {/* Replace with your own office project photo */}
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
              alt="Modern Corporate Office Renovation Singapore" className="w-full h-full object-cover opacity-40" fetchpriority="high" decoding="async"/>
            <div className="absolute inset-0 bg-dark-charcoal/60"/>
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-xs uppercase tracking-[0.25em] text-gold/80 mb-8 font-semibold">{t(`${p}.hero.badge`)}</motion.p>
            <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:0.1}} className="text-4xl md:text-6xl mb-6 leading-tight flex flex-col items-center">
              <span className="font-serif italic text-white/80 text-2xl md:text-3xl mb-3">{t(`${p}.hero.serif`)}</span>
              <span className="font-sans font-bold text-gold uppercase tracking-wider">{t(`${p}.hero.bold`)}</span>
            </motion.h1>
            <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:0.2}} className="text-base md:text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed font-light">{t(`${p}.hero.subtitle`)}</motion.p>
            <motion.a href={whatsappLink} target="_blank" rel="noopener noreferrer" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:0.3}} className="inline-flex items-center gap-3 px-10 py-5 bg-gold text-dark-charcoal text-sm font-bold uppercase tracking-[0.2em] hover:bg-gold-hover transition-all duration-300 rounded-full shadow-xl">{t(`${p}.hero.cta`)}</motion.a>
            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:0.5}} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {[<ShieldCheck size={22}/>,<FileCheck size={22}/>,<Clock size={22}/>].map((icon,i)=>(
                <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-5 py-4 backdrop-blur-sm">
                  <span className="text-gold flex-shrink-0">{icon}</span>
                  <span className="text-white/80 text-sm font-medium text-left">{t(`${p}.hero.b${i+1}`)}</span>
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
                <span className="font-serif italic text-dark-charcoal/60 text-2xl mb-2">{t(`${p}.overview.serif`)}</span>
                <span className="font-sans font-bold text-dark-charcoal uppercase tracking-wider">{t(`${p}.overview.bold`)}</span>
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">{t(`${p}.overview.p1`)}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{t(`${p}.overview.p2`)}</p>
                <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{__html:t(`${p}.overview.p3`)}}/>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {[1,2,3].map(n=>(
                  <div key={n} className="bg-off-white border border-gray-100 rounded-xl p-6 hover:border-gold/30 transition-colors">
                    <h3 className="font-bold text-dark-charcoal mb-2 uppercase tracking-wide text-sm">{t(`${p}.overview.c${n}t`)}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{t(`${p}.overview.c${n}d`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* OFFICE RENOVATION PLANNING CHECKS */}
        <section className="py-24 bg-off-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
              <div className="lg:sticky lg:top-28">
                <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-4">Before You Renovate</p>
                <h2 className="text-3xl md:text-5xl leading-tight mb-6 flex flex-col">
                  <span className="font-serif italic text-dark-charcoal/60 text-2xl md:text-3xl mb-2">Office Renovation</span>
                  <span className="font-sans font-bold text-dark-charcoal uppercase tracking-wider">Checks That Affect Cost, Approval & Timeline</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  A good office renovation quotation should not start with carpentry colours or ceiling design. It should start with whether the unit, building rules, authority requirements and M&amp;E capacity can support the way your office needs to operate.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  This is where many commercial projects become expensive later: the first quotation looks acceptable, but the site conditions, landlord requirements, fire safety impact or electrical load were not checked early enough.
                </p>
              </div>

              <div className="space-y-5">
                <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">
                      <Building2 size={22}/>
                    </div>
                    <div>
                      <h3 className="font-bold text-dark-charcoal uppercase tracking-wide text-sm mb-3">1. Confirm the office use before committing to lease or renovation</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        If the premises are not already approved for your intended office use, check whether a change of use or lodgment applies before signing off the renovation direction. This matters especially when the space includes training rooms, clinics, showrooms, customer-facing areas or mixed business functions.
                      </p>
                      <p className="text-gray-500 text-xs leading-relaxed mt-3">
                        Practical next step: ask for the approved use, floor plan, landlord fit-out guide and any existing approval records before design starts.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">
                      <FileCheck size={22}/>
                    </div>
                    <div>
                      <h3 className="font-bold text-dark-charcoal uppercase tracking-wide text-sm mb-3">2. Check fire safety impact before changing partitions and exits</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Office partitions, meeting rooms, server rooms, doors, escape routes, fire-rated elements and ceiling works can affect fire safety compliance. When fire safety works are involved, submissions may need to be handled by a Qualified Person rather than treated as simple decoration.
                      </p>
                      <p className="text-gray-500 text-xs leading-relaxed mt-3">
                        Practical next step: identify whether the proposed layout affects exit access, fire alarm devices, sprinklers, fire hose reels, emergency lighting or fire-rated construction.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">
                      <Zap size={22}/>
                    </div>
                    <div>
                      <h3 className="font-bold text-dark-charcoal uppercase tracking-wide text-sm mb-3">3. Verify electrical load before adding workstations and equipment</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        A modern office may need more than standard power points. Workstations, server racks, pantry appliances, meeting room screens, access control, printers and air-conditioning equipment can change the electrical requirement. This should be checked before finalising layout and quotation.
                      </p>
                      <p className="text-gray-500 text-xs leading-relaxed mt-3">
                        Practical next step: prepare a simple equipment list and workstation count so the electrical scope can be planned with the correct Licensed Electrical Worker involvement where required.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">
                      <Ruler size={22}/>
                    </div>
                    <div>
                      <h3 className="font-bold text-dark-charcoal uppercase tracking-wide text-sm mb-3">4. Compare quotations by scope clarity, not only by price per square foot</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Office renovation cost can look similar on the surface but differ heavily in partition specification, ceiling works, flooring preparation, data cabling, M&amp;E works, after-hours restrictions, protection works, reinstatement responsibility and authority submissions.
                      </p>
                      <p className="text-gray-500 text-xs leading-relaxed mt-3">
                        Practical next step: request a line-item quotation that separates builder works, M&amp;E, authority submission, landlord requirements, optional upgrades and exclusions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-gold/30 bg-gold/10 p-7">
                  <h3 className="font-bold text-dark-charcoal uppercase tracking-wide text-sm mb-3">Consultant note</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    For office renovation, the safest sequence is: confirm use, check building and landlord rules, review fire safety and M&amp;E constraints, then finalise layout and quotation. This prevents a cheap initial estimate from becoming a delayed or heavily varied project later.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* OFFICE RENOVATION QUOTATION COMPARISON */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-14 items-start">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-4">Quotation Review</p>
                <h2 className="text-3xl md:text-5xl leading-tight mb-6 flex flex-col">
                  <span className="font-serif italic text-dark-charcoal/60 text-2xl md:text-3xl mb-2">Compare Office Renovation Quotations</span>
                  <span className="font-sans font-bold text-dark-charcoal uppercase tracking-wider">Before You Compare the Final Price</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Two office renovation quotations can look like they are pricing the same project, but they may be based on very different assumptions. One contractor may include after-hours work, protection, M&amp;E coordination and authority submission support. Another may price only the visible builder works and leave the rest as exclusions or provisional sums.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  The safest way to compare office renovation contractors is not to ask, “Who is cheaper?” first. Ask, “Are they pricing the same scope, same specification, same restrictions and same handover obligations?” That is how commercial clients avoid variation orders after work has started.
                </p>

                <div className="rounded-2xl border border-gold/30 bg-gold/10 p-7">
                  <h3 className="font-bold text-dark-charcoal uppercase tracking-wide text-sm mb-4">Consultant's advice</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-5">
                    Before awarding an office renovation project, request a quotation comparison that separates builder works, M&amp;E works, authority or landlord submission, protection works, after-hours assumptions, reinstatement obligations, provisional sums and exclusions. If these items are not separated, the lowest quotation may only be the lowest because important work has not been priced yet.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link to="/insights/commercial-renovation-cost-singapore" className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 px-5 py-3 text-xs font-bold uppercase tracking-wider text-dark-charcoal hover:bg-gold hover:text-dark-charcoal transition-colors">
                      Read Commercial Cost Guide <ArrowRight size={14}/>
                    </Link>
                    <Link to="/insights/office-renovation-timeline-singapore" className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 px-5 py-3 text-xs font-bold uppercase tracking-wider text-dark-charcoal hover:bg-gold hover:text-dark-charcoal transition-colors">
                      Check Office Timeline <ArrowRight size={14}/>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                {[
                  {
                    icon: <Search size={22}/>,
                    title: '1. Compare scope before comparing price',
                    body: 'Check whether demolition, partition, ceiling, flooring preparation, painting, carpentry, lighting, power points, data cabling, air-conditioning coordination, fire protection adjustment, disposal and final cleaning are all included. A cheaper quotation is not cheaper if several necessary scopes are missing.',
                    next: 'Practical next step: put quotations side by side and mark every item as included, excluded, provisional or unclear.'
                  },
                  {
                    icon: <FileText size={22}/>,
                    title: '2. Watch provisional sums and vague allowances',
                    body: 'Provisional sums are sometimes necessary when site conditions are not fully known, but too many provisional items reduce cost certainty. Common examples include electrical upgrading, air-conditioning modification, ceiling repair, fire safety works, landlord requirements and night-work charges.',
                    next: 'Practical next step: ask which provisional sums are likely to change after site inspection, landlord review or authority submission.'
                  },
                  {
                    icon: <Ruler size={22}/>,
                    title: '3. Compare specifications, not descriptions',
                    body: 'Descriptions such as “partition”, “vinyl flooring”, “glass door” or “office lighting” are not enough. Commercial specifications should clarify partition type, board thickness, acoustic requirement, flooring thickness, ceiling system, lighting model, glass thickness, ironmongery and finish quality.',
                    next: 'Practical next step: request the specification behind each major item, not only the item name.'
                  },
                  {
                    icon: <Zap size={22}/>,
                    title: '4. Check M&E assumptions early',
                    body: 'Office renovation costs often change when the existing electrical capacity, distribution board, air-conditioning layout, sprinkler positions, fire alarm devices, emergency lighting or data requirements are reviewed properly. These items affect cost, approval, timeline and handover readiness.',
                    next: 'Practical next step: provide workstation count, equipment list, server or network requirements, pantry appliance list and meeting room technology needs before final quotation.'
                  },
                  {
                    icon: <Building2 size={22}/>,
                    title: '5. Confirm building and handover restrictions',
                    body: 'Many commercial buildings have fitting-out rules that affect pricing: working hours, noisy work windows, lift booking, loading bay access, protection requirements, deposit conditions, insurance documents and handover checks. These restrictions can change manpower planning and project duration.',
                    next: 'Practical next step: obtain the landlord or MCST fitting-out guide before comparing quotations.'
                  }
                ].map((item, i)=>(
                  <div key={i} className="bg-off-white border border-gray-100 rounded-2xl p-7 hover:border-gold/30 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-full bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-dark-charcoal uppercase tracking-wide text-sm mb-3">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                        <p className="text-gray-500 text-xs leading-relaxed mt-3">{item.next}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>



        {/* OFFICE RENOVATION HIDDEN COST DRIVERS */}
        <section className="py-24 bg-off-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-14 items-start">
              <div className="lg:sticky lg:top-28">
                <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-4">Hidden Cost Drivers</p>
                <h2 className="text-3xl md:text-5xl leading-tight mb-6 flex flex-col">
                  <span className="font-serif italic text-dark-charcoal/60 text-2xl md:text-3xl mb-2">Why Office Renovation Costs Change</span>
                  <span className="font-sans font-bold text-dark-charcoal uppercase tracking-wider">After the First Quotation</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  In office renovation, the biggest cost surprises usually do not come from choosing a nicer laminate or a more expensive carpet tile. They come from constraints that were not checked properly before the quotation was confirmed.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  A responsible office renovation contractor should help you identify these risks early, especially when the layout affects fire safety, electrical load, air-conditioning, building management rules or after-hours work requirements.
                </p>

                <div className="rounded-2xl border border-gold/30 bg-white p-7 shadow-sm">
                  <h3 className="font-bold text-dark-charcoal uppercase tracking-wide text-sm mb-4">Consultant's advice</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Before you sign, ask the contractor to separate confirmed works from risk items. If existing M&amp;E capacity, sprinkler positions, fire alarm devices, landlord rules and working-hour restrictions have not been reviewed, the quotation may look complete but still carry a high variation-order risk.
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {[
                  {
                    icon: <Zap size={22}/>,
                    title: 'Existing electrical capacity',
                    body: 'More workstations, meeting room screens, pantry appliances, printers, server equipment and access-control systems can increase electrical demand. If the distribution board, isolators, loading or Licensed Electrical Worker requirements are only checked after award, cost and timeline can change.'
                  },
                  {
                    icon: <LayoutPanelLeft size={22}/>,
                    title: 'Air-conditioning and ceiling coordination',
                    body: 'New rooms, full-height partitions, enclosed meeting spaces and revised ceiling layouts can affect air-conditioning distribution, return air paths, access panels and condensation risk. This is why layout planning should be coordinated before ceiling and partition pricing is finalised.'
                  },
                  {
                    icon: <ShieldCheck size={22}/>,
                    title: 'Fire safety impact',
                    body: 'Partitions, enclosed rooms, exit routes, emergency lighting, fire alarm devices, sprinklers and fire-rated elements may trigger further review. Where fire safety works are affected, Qualified Person involvement and SCDF approval may be required before works can proceed.'
                  },
                  {
                    icon: <Building2 size={22}/>,
                    title: 'Building management restrictions',
                    body: 'Office buildings often control work hours, noisy works, lift usage, loading bay access, protection requirements, insurance documents and deposits. These rules affect manpower planning, delivery sequence and whether some works must be done after hours.'
                  },
                  {
                    icon: <HardHat size={22}/>,
                    title: 'Existing site condition and making-good works',
                    body: 'Old partitions, uneven floors, damaged ceiling grids, concealed services, previous tenant modifications and landlord handover requirements can create extra works. These are difficult to price accurately without site inspection, as-built information or building management clarification.'
                  }
                ].map((item, i)=>(
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-7 hover:border-gold/30 transition-colors shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-full bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-dark-charcoal uppercase tracking-wide text-sm mb-3">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="rounded-2xl border border-dark-charcoal/10 bg-dark-charcoal p-7 text-white">
                  <h3 className="font-bold uppercase tracking-wide text-sm mb-3">What to do next</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-5">
                    If you are still budgeting, use the commercial renovation cost guide to understand likely cost ranges. If your lease date or move-in date is already fixed, check the office renovation timeline guide before confirming the renovation start date.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link to="/insights/commercial-renovation-cost-singapore" className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-xs font-bold uppercase tracking-wider text-dark-charcoal hover:bg-gold/90 transition-colors">
                      Cost Planning Guide <ArrowRight size={14}/>
                    </Link>
                    <Link to="/insights/office-renovation-timeline-singapore" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-white hover:text-dark-charcoal transition-colors">
                      Timeline Guide <ArrowRight size={14}/>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* OFFICE PLANNING BEFORE RENOVATION */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-14 items-start">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-4">Office Planning</p>
                <h2 className="text-3xl md:text-5xl leading-tight mb-6 flex flex-col">
                  <span className="font-serif italic text-dark-charcoal/60 text-2xl md:text-3xl mb-2">Plan the Office Workflow</span>
                  <span className="font-sans font-bold text-dark-charcoal uppercase tracking-wider">Before Drawing the Layout</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  A good office renovation is not only about making the workplace look newer. The layout must support how the business actually works: who needs quiet focus, who needs quick collaboration, where clients are received, where confidential discussions happen, and where future headcount can grow without another renovation too soon.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  This planning stage affects almost every downstream cost item — partitions, doors, lighting, power points, data points, air-conditioning, meeting room technology, storage and fire safety review. If these decisions are made only after construction starts, the project usually becomes slower and more expensive.
                </p>

                <div className="rounded-2xl border border-gold/30 bg-gold/10 p-7">
                  <h3 className="font-bold text-dark-charcoal uppercase tracking-wide text-sm mb-4">Consultant's advice</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-5">
                    Before requesting a final office renovation quotation, prepare a simple operational brief: current headcount, future headcount, team structure, meeting room requirements, pantry use, storage needs, IT equipment, visitor flow and move-in deadline. A contractor can price more accurately when the business workflow is clear.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link to="/insights/office-renovation-timeline-singapore" className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 px-5 py-3 text-xs font-bold uppercase tracking-wider text-dark-charcoal hover:bg-gold hover:text-dark-charcoal transition-colors">
                      Plan Renovation Timeline <ArrowRight size={14}/>
                    </Link>
                    <Link to="/commercial/reinstatement" className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 px-5 py-3 text-xs font-bold uppercase tracking-wider text-dark-charcoal hover:bg-gold hover:text-dark-charcoal transition-colors">
                      Check Reinstatement Risk <ArrowRight size={14}/>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                {[
                  {
                    icon: <LayoutPanelLeft size={22}/>,
                    title: '1. Map departments before placing desks',
                    body: 'Start with how teams interact, not where furniture looks best. Sales, admin, finance, operations, management and client-facing staff may need different privacy, storage, access and acoustic conditions. A poor department layout creates daily friction long after the renovation is complete.',
                    next: 'Practical next step: list each department, number of users, visitor interaction and whether they need quiet work or fast collaboration.'
                  },
                  {
                    icon: <PenTool size={22}/>,
                    title: '2. Decide which rooms must be enclosed',
                    body: 'Enclosed meeting rooms, director rooms, phone booths, server rooms and storage rooms affect partition cost, door cost, air-conditioning distribution, emergency lighting, fire protection review and acoustic performance. Too many enclosed rooms can also make the office feel smaller and harder to cool.',
                    next: 'Practical next step: separate rooms that are truly required from rooms that can be replaced by flexible open collaboration zones.'
                  },
                  {
                    icon: <Zap size={22}/>,
                    title: '3. Plan power, data and equipment together',
                    body: 'Workstations, printers, server racks, meeting room screens, access control, pantry appliances and video-conference systems should be planned before the electrical and data quotation is confirmed. EMA advises that electrical work at offices should be carried out or supervised by a Licensed Electrical Worker.',
                    next: 'Practical next step: prepare workstation count, equipment list, printer locations, server or network location and meeting room technology needs.'
                  },
                  {
                    icon: <ShieldCheck size={22}/>,
                    title: '4. Check whether the layout affects fire safety',
                    body: 'New partitions, enclosed rooms, ceiling changes and changes around escape routes, fire alarm devices or sprinklers may affect fire safety review. SCDF states that proposed fire safety works require approval with plans submitted by Qualified Persons.',
                    next: 'Practical next step: review the proposed layout before confirming partition and ceiling works, especially for enclosed rooms and modified circulation paths.'
                  },
                  {
                    icon: <Building2 size={22}/>,
                    title: '5. Keep future expansion in the plan',
                    body: 'Many offices renovate for the current team only, then outgrow the layout within a year. Spare power capacity, flexible workstation zones, modular storage and movable furniture can reduce future disruption when the team grows or departments change.',
                    next: 'Practical next step: design around a realistic 12- to 24-month headcount plan instead of only today’s staff count.'
                  }
                ].map((item, i)=>(
                  <div key={i} className="bg-off-white border border-gray-100 rounded-2xl p-7 hover:border-gold/30 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-full bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-dark-charcoal uppercase tracking-wide text-sm mb-3">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                        <p className="text-gray-500 text-xs leading-relaxed mt-3">{item.next}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* OFFICE RENOVATION TECHNICAL SPECIFICATIONS */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-14 items-start">
              <div className="lg:sticky lg:top-28">
                <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-4">Technical Specifications</p>
                <h2 className="text-3xl md:text-5xl leading-tight mb-6 flex flex-col">
                  <span className="font-serif italic text-dark-charcoal/60 text-2xl md:text-3xl mb-2">Office Renovation Specifications</span>
                  <span className="font-sans font-bold text-dark-charcoal uppercase tracking-wider">That Decide Durability, Comfort & Handover Quality</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  In office renovation, the visible design is only one part of the outcome. The technical specifications behind the partition, ceiling, flooring, lighting, glass, doors, power and data works decide whether the office feels solid, stays comfortable and passes handover smoothly.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  This is why a professional office renovation quotation should not describe major items too generally. A line that says “partition works” or “office lighting” is not enough for a serious comparison. The specification should explain what is being supplied, how it will perform and what coordination is required with the building, landlord and relevant specialists.
                </p>

                <div className="rounded-2xl border border-gold/30 bg-gold/10 p-7">
                  <h3 className="font-bold text-dark-charcoal uppercase tracking-wide text-sm mb-4">Consultant's advice</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-5">
                    Before confirming an office renovation contractor, ask for the specifications behind the largest cost items. If the quotation does not define partition build-up, ceiling system, flooring preparation, lighting specification, glass thickness, door hardware, power and data assumptions, you are not comparing workmanship quality — you are comparing incomplete descriptions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link to="/insights/commercial-renovation-cost-singapore" className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 px-5 py-3 text-xs font-bold uppercase tracking-wider text-dark-charcoal hover:bg-gold hover:text-dark-charcoal transition-colors">
                      Compare Cost Drivers <ArrowRight size={14}/>
                    </Link>
                    <Link to="/insights/office-renovation-timeline-singapore" className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 px-5 py-3 text-xs font-bold uppercase tracking-wider text-dark-charcoal hover:bg-gold hover:text-dark-charcoal transition-colors">
                      Plan Timeline Impact <ArrowRight size={14}/>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                {[
                  {
                    icon: <LayoutPanelLeft size={22}/>,
                    title: '1. Partition and acoustic build-up',
                    body: 'Office partitions should be specified by board type, frame system, height, insulation, acoustic expectation, fire-rated requirement where applicable, door type and finish. Meeting rooms, director rooms and phone rooms need more attention than general back-of-house partitions because speech privacy affects daily use.',
                    next: 'Practical next step: identify which rooms need privacy, which walls are only visual separation, and whether any wall affects fire safety or escape routes.'
                  },
                  {
                    icon: <HardHat size={22}/>,
                    title: '2. Ceiling, access panels and M&E coordination',
                    body: 'False ceiling works should consider ceiling height, access panels, lighting layout, air-conditioning diffusers, sprinkler heads, smoke detectors, emergency lighting and maintenance access. A ceiling that looks clean but blocks access to services can create problems during handover and future maintenance.',
                    next: 'Practical next step: review the reflected ceiling plan together with lighting, air-conditioning and fire safety devices before confirming ceiling works.'
                  },
                  {
                    icon: <Ruler size={22}/>,
                    title: '3. Flooring preparation and lifecycle durability',
                    body: 'Commercial flooring should be evaluated by subfloor condition, levelling requirement, thickness, wear layer, slip resistance, office-chair durability, maintenance method and replacement strategy. The cheapest flooring item can become expensive if preparation, trimming, skirting or future replacement is not considered.',
                    next: 'Practical next step: ask whether the quotation includes floor preparation, skirting, transition strips and making-good around existing uneven areas.'
                  },
                  {
                    icon: <Zap size={22}/>,
                    title: '4. Lighting, power and data readiness',
                    body: 'Lighting should support work comfort, meeting rooms, video calls, reception impression and maintenance access. Power and data points should follow actual workstation count, printer locations, meeting room equipment and server or network requirements. Electrical works should be carried out or supervised by the appropriate Licensed Electrical Worker where required.',
                    next: 'Practical next step: finalise workstation count, equipment list and meeting room technology before locking the electrical and data scope.'
                  },
                  {
                    icon: <ShieldCheck size={22}/>,
                    title: '5. Glass, doors and fire safety implications',
                    body: 'Glass partitions, framed doors, frameless doors, ironmongery, access-control doors and fire-rated doors should not be treated as purely aesthetic items. Door swing, escape route, access control, fire safety device positions and glass thickness can affect cost, compliance review and daily usability.',
                    next: 'Practical next step: confirm door schedule, hardware, access-control requirements and whether the layout creates any fire safety submission issue.'
                  },
                  {
                    icon: <Building2 size={22}/>,
                    title: '6. Handover quality and reinstatement thinking',
                    body: 'A good office fit-out should already think about handover: protection works, as-built information, testing, cleaning, defect checks, landlord inspection and future reinstatement obligations. This reduces disputes at completion and prevents the tenant from inheriting hidden responsibilities later.',
                    next: 'Practical next step: request a clear handover checklist covering testing, cleaning, documentation, defects and landlord or building management inspection.'
                  }
                ].map((item, i)=>(
                  <div key={i} className="bg-off-white border border-gray-100 rounded-2xl p-7 hover:border-gold/30 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-full bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-dark-charcoal uppercase tracking-wide text-sm mb-3">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                        <p className="text-gray-500 text-xs leading-relaxed mt-3">{item.next}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* OFFICE RENOVATION DECISION JOURNEY */}
        <section className="py-24 bg-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
              <div className="lg:sticky lg:top-28">
                <span className="text-gold uppercase tracking-[0.25em] text-xs font-bold">Decision Journey</span>
                <h2 className="font-serif text-4xl md:text-5xl text-dark-charcoal mt-4 mb-6">
                  What should you do after reading an office renovation guide?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  A good office renovation page should not leave you with general ideas only. It should help you decide what to check next, depending on where your business is in the renovation process.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Use the steps below to move from broad planning to a practical scope review before you ask any contractor for a final quotation.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  {
                    step: '01',
                    title: 'If you are still budgeting',
                    body: 'Start by understanding the realistic cost range for your office size, layout complexity, landlord condition, M&E condition and required timeline. Do not compare design concepts before you know the cost drivers.',
                    link: '/insights/commercial-renovation-cost-singapore',
                    label: 'Read the commercial renovation cost guide'
                  },
                  {
                    step: '02',
                    title: 'If you already have a lease or unit shortlisted',
                    body: 'Check whether the proposed use, layout, services, fire safety impact and building management requirements are suitable before committing heavily to design or construction.',
                    link: '/commercial/office-renovation',
                    label: 'Review this office renovation guide'
                  },
                  {
                    step: '03',
                    title: 'If you are comparing quotations',
                    body: 'Ask each contractor to clarify exclusions, provisional sums, after-hours assumptions, M&E scope, permit responsibility, handover requirements and reinstatement-related assumptions.',
                    link: '/insights/office-renovation-timeline-singapore',
                    label: 'Check the office renovation timeline'
                  },
                  {
                    step: '04',
                    title: 'If you are moving out of an existing office',
                    body: 'Do not treat reinstatement as an afterthought. Reinstatement requirements can affect budget, schedule, handover planning and the way you sequence your new office renovation.',
                    link: '/commercial/reinstatement',
                    label: 'Read the commercial reinstatement guide'
                  }
                ].map((item)=>(
                  <div key={item.step} className="bg-white border border-gray-100 rounded-2xl p-7 hover:border-gold/40 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center flex-shrink-0 font-serif text-xl">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-bold text-dark-charcoal uppercase tracking-wide text-sm mb-3">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.body}</p>
                        <Link to={item.link} className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-[0.18em] font-bold hover:text-dark-charcoal transition-colors">
                          {item.label}
                          <ArrowRight size={14}/>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="bg-dark-charcoal rounded-2xl p-8 text-white">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-gold/15 text-gold flex items-center justify-center flex-shrink-0">
                      <FileCheck size={22}/>
                    </div>
                    <div>
                      <h3 className="font-bold uppercase tracking-wide text-sm mb-3">Consultant's advice before requesting a quote</h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        The most useful enquiry is not "how much is office renovation?" It is a clear scope review: floor plan, landlord handbook, building restrictions, preferred handover date, staff count, rooms required, power and data needs, and whether the existing unit needs reinstatement. That gives the contractor enough context to advise properly instead of guessing.
                      </p>
                    </div>
                  </div>
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
                <span className="font-serif italic text-dark-charcoal/60 text-2xl mb-2">{t(`${p}.scope.serif`)}</span>
                <span className="font-sans font-bold text-dark-charcoal uppercase tracking-wider">{t(`${p}.scope.bold`)}</span>
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1,2,3,4,5,6].map((n,i)=>(
                <motion.div key={n} whileHover={{y:-6}} className="bg-white p-8 border border-gray-100 rounded-xl hover:border-gold/40 hover:shadow-lg transition-all duration-300">
                  <div className="text-gold mb-5">{scopeIcons[i]}</div>
                  <h3 className="font-bold text-dark-charcoal mb-3 uppercase tracking-wide text-sm">{t(`${p}.scope.i${n}t`)}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{t(`${p}.scope.i${n}d`)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-16 bg-dark-charcoal">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[{v:"$50–$180+",s:"s1"},{v:"6–12",s:"s2"},{v:"2–4",s:"s3"}].map(({v,s})=>(
                <div key={s} className="flex flex-col items-center">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl md:text-5xl font-bold text-gold font-sans">{v}</span>
                    <span className="text-gold/60 text-sm uppercase tracking-wider">{t(`${p}.stats.${s}u`)}</span>
                  </div>
                  <p className="text-white/50 text-xs uppercase tracking-[0.2em]">{t(`${p}.stats.${s}l`)}</p>
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
                <span className="font-serif italic text-dark-charcoal/60 text-2xl mb-2">{t(`${p}.challenges.serif`)}</span>
                <span className="font-sans font-bold text-gold uppercase tracking-wider">{t(`${p}.challenges.bold`)}</span>
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1,2,3].map((n,i)=>(
                <motion.div key={n} whileHover={{y:-10}} className="bg-white p-10 shadow-xl border-b-4 border-gold group flex flex-col items-center text-center">
                  <div className="mb-8 text-gold flex justify-center">{challengeIcons[i]}</div>
                  <div className="mb-6 w-full">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 block mb-2 font-sans">{t(`${p}.challenges.ch_label`)}</span>
                    <h3 className="text-xl font-bold text-dark-charcoal uppercase font-sans leading-tight">{t(`${p}.challenges.p${n}pain`)}</h3>
                  </div>
                  <div className="pt-6 border-t border-gray-100 w-full">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gold block mb-2 font-sans">{t(`${p}.challenges.sol_label`)}</span>
                    <p className="text-gray-600 leading-relaxed text-sm font-sans font-normal">{t(`${p}.challenges.p${n}sol`)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST ROW */}
        <section className="py-12 bg-white border-y border-gray-100 relative z-10">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="font-serif italic text-dark-charcoal/40 text-lg md:text-xl tracking-wide">{t(`${p}.trust.text`)}</p>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-24 relative z-10 bg-dark-charcoal text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl mb-4 flex flex-col items-center">
                <span className="font-serif italic text-white/60 text-2xl mb-2">{t(`${p}.process.serif`)}</span>
                <span className="font-sans font-bold text-gold uppercase tracking-wider">{t(`${p}.process.bold`)}</span>
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
                    <h4 className="text-sm md:text-base lg:text-lg font-bold uppercase tracking-wider text-gold font-sans leading-tight">{t(`${p}.process.s${n}t`)}</h4>
                  </div>
                  <div className="w-full min-h-[4rem] flex flex-col items-center">
                    <p className="text-white/90 text-sm leading-relaxed font-sans font-normal max-w-[200px]">{t(`${p}.process.s${n}d`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* OFFICE RENOVATION GEO ANSWER SUMMARY */}
        <section className="py-24 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-14">
              <span className="text-gold uppercase tracking-[0.25em] text-xs font-bold">Quick Answer</span>
              <h2 className="font-serif text-4xl md:text-5xl text-dark-charcoal mt-4 mb-6">
                What is the right way to plan office renovation in Singapore?
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                The right way to plan an office renovation is to confirm the approved use, review the landlord or building fit-out rules, check fire safety and electrical implications, then compare quotations by scope and specifications rather than by headline price. For most businesses, this sequence reduces variation orders, approval delays and handover disputes.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-off-white shadow-sm mb-10">
              <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.4fr_1.2fr] bg-dark-charcoal text-white text-xs uppercase tracking-[0.18em] font-bold">
                <div className="p-5 border-b md:border-b-0 md:border-r border-white/10">Decision Stage</div>
                <div className="p-5 border-b md:border-b-0 md:border-r border-white/10">What to Check</div>
                <div className="p-5">Why It Matters</div>
              </div>
              {[
                {
                  stage: 'Before leasing or design',
                  check: 'Approved use, landlord guide, building restrictions, handover condition and fit-out deposit requirements.',
                  reason: 'A unit can look suitable but still create renovation limits, submission requirements or reinstatement obligations later.'
                },
                {
                  stage: 'Before layout confirmation',
                  check: 'Staff count, department workflow, enclosed rooms, meeting-room needs, storage, pantry, server or network area, and future expansion.',
                  reason: 'Office layouts are expensive to change after partitions, ceiling, lighting, power and data points are installed.'
                },
                {
                  stage: 'Before quotation comparison',
                  check: 'Partition type, ceiling works, flooring preparation, lighting, power/data, air-conditioning, fire safety impact, after-hours work and exclusions.',
                  reason: 'Two office renovation quotations can look similar while carrying very different scope, specification and compliance assumptions.'
                },
                {
                  stage: 'Before work starts',
                  check: 'Submission responsibility, building management approval, site access, lift protection, noisy-work timing, delivery routes and handover checklist.',
                  reason: 'Commercial renovation delays often come from operational restrictions rather than design issues alone.'
                }
              ].map((row)=> (
                <div key={row.stage} className="grid grid-cols-1 md:grid-cols-[0.9fr_1.4fr_1.2fr] border-t border-gray-200">
                  <div className="p-5 font-bold text-dark-charcoal text-sm border-b md:border-b-0 md:border-r border-gray-200">{row.stage}</div>
                  <div className="p-5 text-gray-600 text-sm leading-relaxed border-b md:border-b-0 md:border-r border-gray-200">{row.check}</div>
                  <div className="p-5 text-gray-600 text-sm leading-relaxed">{row.reason}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-off-white border border-gray-100 rounded-2xl p-7">
                <h3 className="font-bold text-dark-charcoal uppercase tracking-wide text-sm mb-3">Best next step if you are budgeting</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Start with a realistic commercial renovation cost range, then decide which items are must-have, optional or dependent on site condition.
                </p>
                <Link to="/insights/commercial-renovation-cost-singapore" className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-[0.18em] font-bold hover:text-dark-charcoal transition-colors">
                  Cost guide <ArrowRight size={14}/>
                </Link>
              </div>
              <div className="bg-off-white border border-gray-100 rounded-2xl p-7">
                <h3 className="font-bold text-dark-charcoal uppercase tracking-wide text-sm mb-3">Best next step if you need to move in soon</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Check the likely office renovation timeline before confirming a handover date, especially if building approval, after-hours work or M&amp;E coordination is involved.
                </p>
                <Link to="/insights/office-renovation-timeline-singapore" className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-[0.18em] font-bold hover:text-dark-charcoal transition-colors">
                  Timeline guide <ArrowRight size={14}/>
                </Link>
              </div>
              <div className="bg-off-white border border-gray-100 rounded-2xl p-7">
                <h3 className="font-bold text-dark-charcoal uppercase tracking-wide text-sm mb-3">Best next step if you are moving out</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Review reinstatement obligations early so your old office handover does not clash with your new office renovation schedule.
                </p>
                <Link to="/commercial/reinstatement" className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-[0.18em] font-bold hover:text-dark-charcoal transition-colors">
                  Reinstatement guide <ArrowRight size={14}/>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-off-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif mb-12 text-center text-dark-charcoal">{t(`${p}.faq.title`)}</h2>
            <div className="space-y-6">
              {[{n:1,icon:<Clock className="w-6 h-6 text-gold flex-shrink-0 mt-1"/>},{n:2,icon:<ShieldCheck className="w-6 h-6 text-gold flex-shrink-0 mt-1"/>},{n:3,icon:<FileCheck className="w-6 h-6 text-gold flex-shrink-0 mt-1"/>}].map(({n,icon})=>(
                <div key={n} className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-dark-charcoal mb-3 flex items-start gap-3">{icon}{t(`${p}.faq.q${n}`)}</h3>
                  <p className="text-gray-600 leading-relaxed pl-9 text-sm" dangerouslySetInnerHTML={{__html:t(`${p}.faq.a${n}`)}}/>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-serif text-center text-dark-charcoal mb-10">{t(`${p}.related.title`)}</h2>
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
              <span className="font-serif italic text-dark-charcoal">{t(`${p}.cta.serif`)}</span>
              <span className="font-sans font-bold text-gold uppercase tracking-wider">{t(`${p}.cta.bold`)}</span>
            </motion.h2>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 px-12 py-6 bg-gold text-dark-charcoal text-sm font-bold uppercase tracking-[0.3em] hover:bg-gold-hover transition-all duration-300 rounded-full shadow-2xl hover:shadow-gold/20 font-sans">{t(`${p}.cta.btn`)}</a>
          </div>
          <div className="absolute top-0 left-0 w-64 h-64 border-l border-t border-gold/10 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 border-r border-b border-gold/10 translate-x-1/2 translate-y-1/2"></div>
        </section>

        {/* STICKY */}
        <div className="fixed bottom-0 left-0 w-full bg-dark-charcoal/95 backdrop-blur-md border-t border-gold/30 p-4 z-[100] md:hidden">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full bg-gold py-4 rounded-full text-dark-charcoal font-bold text-xs uppercase tracking-widest font-sans">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.408 0 12.044c0 2.123.554 4.197 1.608 6.037L0 24l6.105-1.602a11.834 11.834 0 005.937 1.598h.005c6.637 0 12.048-5.408 12.052-12.044.002-3.218-1.248-6.242-3.514-8.508z"/></svg>
            {t(`${p}.sticky.text`)}
          </a>
        </div>
      </div>
    </>
  );
}
