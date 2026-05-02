import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

export default function CommercialRenovationCostSingapore() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("insights.article4.meta.title")}</title>
        <meta name="description" content={t("insights.article4.meta.description")} />
        <link rel="canonical" href="https://idworkstudio.com/insights/commercial-renovation-cost-singapore" />

        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: t("insights.article4.meta.title"),
            description: t("insights.article4.meta.description"),
            author: { "@type": "Organization", name: "ID Work Studio" },
            publisher: { "@type": "Organization", name: "ID Work Studio" }
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: t("insights.article4.faq.q1"),
                acceptedAnswer: { "@type": "Answer", text: t("insights.article4.faq.a1") }
              },
              {
                "@type": "Question",
                name: t("insights.article4.faq.q2"),
                acceptedAnswer: { "@type": "Answer", text: t("insights.article4.faq.a2") }
              },
              {
                "@type": "Question",
                name: t("insights.article4.faq.q3"),
                acceptedAnswer: { "@type": "Answer", text: t("insights.article4.faq.a3") }
              },
              {
                "@type": "Question",
                name: t("insights.article4.faq.q4"),
                acceptedAnswer: { "@type": "Answer", text: t("insights.article4.faq.a4") }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* HERO */}
      <section className="bg-[#111] text-white text-center px-6 py-20">
        <span className="border border-[#C5A059]/50 text-[#C5A059] px-4 py-1 rounded-full text-xs tracking-widest uppercase">
          {t("insights.article4.hero.badge")}
        </span>

        <h1 className="mt-6 text-4xl md:text-6xl font-serif leading-tight max-w-4xl mx-auto">
          {t("insights.article4.hero.title")}
        </h1>

        <p className="mt-4 text-gray-300 max-w-2xl mx-auto leading-relaxed">
          {t("insights.article4.hero.subtitle")}
        </p>

        <div className="mt-6 text-xs uppercase tracking-widest text-gray-400 flex flex-col md:flex-row gap-2 justify-center">
          <span>{t("insights.article4.hero.meta1")}</span>
          <span>{t("insights.article4.hero.meta2")}</span>
        </div>
      </section>

      {/* BACK */}
      <div className="border-b px-6 py-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <a href="/insights" className="text-xs uppercase tracking-widest font-bold">
            ← {t("insights.article4.back")}
          </a>
        </div>
      </div>

      {/* ARTICLE */}
      <main className="bg-white px-5 py-12">
        <article className="max-w-3xl mx-auto text-[#2C2C2C]">

          {/* SECTION */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif border-b pb-3 mb-4">
              {t("insights.article4.quick.title")}
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              {t("insights.article4.quick.desc")}
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {["office","retail","fnb","industrial"].map((key) => (
                <div key={key} className="border rounded-xl p-5 bg-[#fffdf8]">
                  <p>{t(`insights.article4.quick.${key}`)}</p>
                  <strong className="block text-xl mt-2">
                    {t(`insights.article4.quick.${key}Cost`)}
                  </strong>
                </div>
              ))}
            </div>
          </section>

          {/* TIMELINE */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif border-b pb-3 mb-4">
              {t("insights.article4.timeline.title")}
            </h2>

            <div className="space-y-3">
              {[1,2,3,4].map((n)=>(
                <div key={n} className="flex gap-3 border rounded-xl p-4 bg-[#fffdf8]">
                  <div className="w-8 h-8 bg-[#C5A059] text-white rounded-full flex items-center justify-center font-bold">
                    {n}
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      {t(`insights.article4.timeline.p${n}.title`)}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {t(`insights.article4.timeline.p${n}.desc`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif border-b pb-3 mb-4">FAQ</h2>

            {[1,2,3,4].map((n)=>(
              <details key={n} className="border rounded-lg p-4 mb-2 bg-[#fffdf8]">
                <summary className="font-semibold cursor-pointer">
                  {t(`insights.article4.faq.q${n}`)}
                </summary>
                <p className="mt-2 text-sm text-gray-600">
                  {t(`insights.article4.faq.a${n}`)}
                </p>
              </details>
            ))}
          </section>

          {/* CTA */}
          <section className="bg-[#151515] text-white rounded-2xl p-6 mt-10">
            <h2 className="text-2xl font-serif mb-3">
              {t("insights.article4.cta.title")}
            </h2>

            <p className="text-gray-300">
              {t("insights.article4.cta.desc")}
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <a href="/renovation-cost-calculator" className="bg-[#C5A059] px-4 py-2 rounded-full text-sm font-bold">
                {t("insights.article4.cta.btn1")}
              </a>

              <a href="/commercial" className="bg-[#C5A059] px-4 py-2 rounded-full text-sm font-bold">
                {t("insights.article4.cta.btn2")}
              </a>
            </div>
          </section>

        </article>
      </main>
    </>
  );
}