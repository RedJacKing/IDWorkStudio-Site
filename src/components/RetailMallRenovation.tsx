import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, FileCheck, Clock, Lightbulb, LayoutPanelLeft, Package, Zap, Store, Search, FileText, Hammer, CheckCircle2, AlertTriangle, ArrowRight, Moon } from 'lucide-react';

export default function RetailMallRenovation() {
  const { t } = useTranslation();
  const p = 'retail_reno_page';
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
  const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[1,2,3].map(n=>({ "@type":"Question","name":t(`${p}.faq.q${n}`),"acceptedAnswer":{"@type":"Answer","text":t(`${p}.faq.a${n}`)}  }))};

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
            <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-xs uppercase tracking-[0.25em] text-gold/80 mb-8 font-semibold">{t(`${p}.hero.badge`)}</motion.p>
            <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:0.1}} className="text-4xl md:text-6xl mb-6 leading-tight flex flex-col items-center">
              <span className="font-serif italic text-white/80 text-2xl md:text-3xl mb-3">{t(`${p}.hero.serif`)}</span>
              <span className="font-sans font-bold text-gold uppercase tracking-wider">{t(`${p}.hero.bold`)}</span>
            </motion.h1>
            <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:0.2}} className="text-base md:text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed font-light">{t(`${p}.hero.subtitle`)}</motion.p>
            <motion.a href={whatsappLink} target="_blank" rel="noopener noreferrer" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:0.3}} className="inline-flex items-center gap-3 px-10 py-5 bg-gold text-dark-charcoal text-sm font-bold uppercase tracking-[0.2em] hover:bg-gold-hover transition-all duration-300 rounded-full shadow-xl">{t(`${p}.hero.cta`)}</motion.a>
            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:0.5}} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {[<FileCheck size={22}/>,<Moon size={22}/>,<Clock size={22}/>].map((icon,i)=>(
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
              {[{v:"$65–$150",s:"s1"},{v:"6–12",s:"s2"},{v:"1–2",s:"s3"}].map(({v,s})=>(
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

        {/* FAQ */}
        <section className="py-24 bg-off-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif mb-12 text-center text-dark-charcoal">{t(`${p}.faq.title`)}</h2>
            <div className="space-y-6">
              {[{n:1,icon:<FileCheck className="w-6 h-6 text-gold flex-shrink-0 mt-1"/>},{n:2,icon:<Clock className="w-6 h-6 text-gold flex-shrink-0 mt-1"/>},{n:3,icon:<Moon className="w-6 h-6 text-gold flex-shrink-0 mt-1"/>}].map(({n,icon})=>(
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
