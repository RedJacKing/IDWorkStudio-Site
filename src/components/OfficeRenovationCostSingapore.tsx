import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

export default function OfficeRenovationCostSingapore() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("insights.officeCost.meta.title")}</title>
        <meta name="description" content={t("insights.officeCost.meta.desc")} />
        <link
          rel="canonical"
          href="https://idworkstudio.com/insights/office-renovation-cost-singapore"
        />
      </Helmet>

      <main className="max-w-5xl mx-auto px-6 py-12 text-neutral-800 leading-relaxed">
        {/* Title */}
        <h1 className="text-3xl font-semibold mb-6">
          {t("insights.officeCost.title")}
        </h1>

        {/* Intro */}
        <section className="mb-10 space-y-4">
          <p>{t("insights.officeCost.intro.line1")}</p>

          <ul className="list-disc pl-6">
            <li>{t("insights.officeCost.intro.cost1")}</li>
            <li>{t("insights.officeCost.intro.cost2")}</li>
            <li>{t("insights.officeCost.intro.cost3")}</li>
          </ul>

          <p>{t("insights.officeCost.intro.line2")}</p>
        </section>

        {/* Cost by Size */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            {t("insights.officeCost.size.title")}
          </h2>

          <div className="space-y-5">
            <div>
              <strong>{t("insights.officeCost.size.small.title")}</strong>
              <p>{t("insights.officeCost.size.small.cost")}</p>
              <p>{t("insights.officeCost.size.small.desc")}</p>
            </div>

            <div>
              <strong>{t("insights.officeCost.size.mid.title")}</strong>
              <p>{t("insights.officeCost.size.mid.cost")}</p>
              <p>{t("insights.officeCost.size.mid.desc")}</p>
            </div>

            <div>
              <strong>{t("insights.officeCost.size.large.title")}</strong>
              <p>{t("insights.officeCost.size.large.cost")}</p>
              <p>{t("insights.officeCost.size.large.desc")}</p>
            </div>

            <div>
              <strong>{t("insights.officeCost.size.corp.title")}</strong>
              <p>{t("insights.officeCost.size.corp.cost")}</p>
              <p>{t("insights.officeCost.size.corp.desc")}</p>
            </div>
          </div>
        </section>

        {/* Cost Breakdown */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            {t("insights.officeCost.breakdown.title")}
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>{t("insights.officeCost.breakdown.item1")}</li>
            <li>{t("insights.officeCost.breakdown.item2")}</li>
            <li>{t("insights.officeCost.breakdown.item3")}</li>
            <li>{t("insights.officeCost.breakdown.item4")}</li>
            <li>{t("insights.officeCost.breakdown.item5")}</li>
            <li>{t("insights.officeCost.breakdown.item6")}</li>
            <li>{t("insights.officeCost.breakdown.item7")}</li>
          </ul>
        </section>

        {/* Timeline */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            {t("insights.officeCost.timeline.title")}
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>{t("insights.officeCost.timeline.step1")}</li>
            <li>{t("insights.officeCost.timeline.step2")}</li>
            <li>{t("insights.officeCost.timeline.step3")}</li>
          </ul>
        </section>

        {/* Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            {t("insights.officeCost.mistakes.title")}
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>{t("insights.officeCost.mistakes.item1")}</li>
            <li>{t("insights.officeCost.mistakes.item2")}</li>
            <li>{t("insights.officeCost.mistakes.item3")}</li>
            <li>{t("insights.officeCost.mistakes.item4")}</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            {t("insights.officeCost.faq.title")}
          </h2>

          <div className="space-y-4">
            <div>
              <strong>{t("insights.officeCost.faq.q1")}</strong>
              <p>{t("insights.officeCost.faq.a1")}</p>
            </div>

            <div>
              <strong>{t("insights.officeCost.faq.q2")}</strong>
              <p>{t("insights.officeCost.faq.a2")}</p>
            </div>

            <div>
              <strong>{t("insights.officeCost.faq.q3")}</strong>
              <p>{t("insights.officeCost.faq.a3")}</p>
            </div>

            <div>
              <strong>{t("insights.officeCost.faq.q4")}</strong>
              <p>{t("insights.officeCost.faq.a4")}</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t pt-8">
          <p className="mb-4">{t("insights.officeCost.cta.text")}</p>

          <a
            href="https://wa.me/6568162872"
            className="inline-block bg-black text-white px-6 py-3 rounded-md"
          >
            {t("insights.officeCost.cta.button")}
          </a>
        </section>
      </main>
    </>
  );
}