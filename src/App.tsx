import { useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import type { RouteRecord } from 'vite-react-ssg';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { MapPin, Phone, Mail, Building2 } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Commercial from './components/Commercial';
import Reinstatement from './components/Reinstatement';
import OfficeRenovation from './components/OfficeRenovation';
import RetailMallRenovation from './components/RetailMallRenovation';
import ShophouseRenovation from './components/ShophouseRenovation';
import CompliancePermits from './components/CompliancePermits';
import Residential from './components/Residential';
import Insights from './components/Insights';
import ArticleRenovationCost2026 from './components/ArticleRenovationCostSingapore2026';
import ArticleHDBTimeline from './components/ArticleHDBTimeline';
import ArticleRenovationMistakes from './components/ArticleRenovationMistakes';
import CommercialRenovationCostSingapore from './components/CommercialRenovationCostSingapore';
import OfficeRenovationCostSingapore from './components/OfficeRenovationCostSingapore';
import OfficeRenovationTimelineSingapore from './components/OfficeRenovationTimelineSingapore';
import OverseasRenovationShoppingMistakes from './components/OverseasRenovationShoppingMistakes';
import FengShuiRenovationSingapore from './components/FengShuiRenovationSingapore';
import StickyMobileNav from './components/StickyMobileNav';
import ScrollToHashElement from './components/ScrollToHashElement';

import { useTranslation } from 'react-i18next';

function GARouteTracker() {
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;

    import('react-ga4')
      .then(({ default: ReactGA }) => {
        if (!isMounted) return;

        ReactGA.send({
          hitType: 'pageview',
          page: location.pathname + location.search,
          title: document.title,
        });
      })
      .catch(() => undefined);

    return () => {
      isMounted = false;
    };
  }, [location.pathname, location.search]);

  return null;
}

function QueryParamStripper() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.search) {
      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);

  return null;
}

function LanguagePersistence() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem('i18nextLng');
    if (savedLang && i18n.language !== savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  return null;
}

type HomepageAuthorityContent = {
  quick_answers: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Array<{ title: string; text: string; link: string; label: string }>;
  };
  featured_insights: {
    eyebrow: string;
    title: string;
    subtitle: string;
    read_article: string;
    items: Array<{ title: string; text: string; link: string }>;
  };
  planning_tools: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Array<{ title: string; text: string; href: string; label: string }>;
  };
  internal_links: {
    title: string;
    items: Array<{ label: string; to: string }>;
  };
  trust: {
    eyebrow: string;
    title: string;
    signals: string[];
  };
  project_snippets: {
    eyebrow: string;
    title: string;
    items: Array<{ type: string; size: string; range: string; duration: string }>;
  };
  faq: {
    eyebrow: string;
    title: string;
    learn_more: string;
    items: Array<{ question: string; answer: string; link: string }>;
  };
};

const homepageAuthorityContent: Record<'en' | 'zh', HomepageAuthorityContent> = {
  en: {
        "quick_answers": {
          "eyebrow": "Quick renovation answers",
          "title": "Plan your renovation with clearer cost, timeline and process expectations.",
          "subtitle": "Short answers for homeowners and business owners comparing Singapore renovation options before speaking to a designer.",
          "items": [
            {
              "title": "Renovation cost in Singapore",
              "text": "Most HDB, condo and office renovation budgets depend on property condition, carpentry scope, hacking, electrical works and material selection.",
              "link": "/insights/renovation-cost-singapore-2026",
              "label": "Read cost guide"
            },
            {
              "title": "Residential vs commercial timeline",
              "text": "A typical HDB renovation may take weeks, while office projects depend on approvals, reinstatement needs, landlord rules and fit-out sequencing.",
              "link": "/insights/hdb-renovation-timeline-singapore",
              "label": "View timeline guide"
            },
            {
              "title": "Renovation process",
              "text": "A smoother project usually follows a clear path: consult, space planning, design confirmation, quotation, build, inspection and handover.",
              "link": "#process",
              "label": "See our process"
            }
          ]
        },
        "featured_insights": {
          "eyebrow": "Featured insights",
          "title": "Helpful guides for Singapore renovation planning.",
          "subtitle": "Read the deeper guides after getting the overview. These pages support budget planning, approval awareness and project sequencing.",
          "read_article": "Read article",
          "items": [
            {
              "title": "Renovation Cost Singapore 2026",
              "text": "A practical guide to HDB, condo and home renovation budget planning in Singapore.",
              "link": "/insights/renovation-cost-singapore-2026"
            },
            {
              "title": "HDB Renovation Timeline Singapore",
              "text": "Understand sequencing, approvals, material lead times and common causes of delay.",
              "link": "/insights/hdb-renovation-timeline-singapore"
            },
            {
              "title": "Office Renovation Timeline Singapore",
              "text": "A commercial planning guide for office fit-out, reinstatement and handover timelines.",
              "link": "/insights/office-renovation-timeline-singapore"
            }
          ]
        },
        "planning_tools": {
          "eyebrow": "Planning tools",
          "title": "Start with budget clarity and style direction.",
          "subtitle": "Use these tools before consultation so your renovation discussion starts with clearer expectations.",
          "items": [
            {
              "title": "Renovation Cost Calculator",
              "text": "Estimate your HDB, condo, resale, kitchen or toilet renovation budget before requesting a quotation.",
              "href": "/renovation-cost-calculator",
              "label": "Open calculator"
            },
            {
              "title": "HDB Renovation Style Quiz",
              "text": "Explore suitable interior directions before your consultation, from Japandi to modern luxury and warm minimalism.",
              "href": "/hdb-renovation-style-quiz",
              "label": "Take style quiz"
            }
          ]
        },
        "internal_links": {
          "title": "Explore Our Renovation Services",
          "items": [
            {
              "label": "Residential Renovation Singapore",
              "to": "/residential"
            },
            {
              "label": "Commercial Renovation Singapore",
              "to": "/commercial"
            },
            {
              "label": "Renovation Guides & Insights",
              "to": "/insights"
            },
            {
              "label": "Renovation Cost Calculator Singapore",
              "to": "/renovation-cost-calculator"
            },
            {
              "label": "HDB Renovation Style Quiz",
              "to": "/hdb-renovation-style-quiz"
            },
            {
              "label": "Renovation Portfolio Singapore",
              "to": "/gallery"
            },
            {
              "label": "Contact ID Work Studio",
              "to": "/contact"
            }
          ]
        },
        "trust": {
          "eyebrow": "Why ID Work Studio",
          "title": "Registered, structured and design-led.",
          "signals": [
            "BCA-registered renovation and interior design firm in Singapore.",
            "HDB-approved for residential renovation works and HDB project coordination.",
            "Experience across HDB homes, condos, office fit-outs and commercial reinstatement.",
            "Premium positioning with practical budgeting, sequencing and handover planning."
          ]
        },
        "project_snippets": {
          "eyebrow": "Example project snippets",
          "title": "Budget and timing examples for planning.",
          "items": [
            {
              "type": "HDB Resale Renovation",
              "size": "4-room HDB · about 969 sqft",
              "range": "Planning range: $45k–$70k",
              "duration": "Typical duration: 8–10 weeks"
            },
            {
              "type": "Office Fit-Out",
              "size": "Commercial office · about 1,200 sqft",
              "range": "Planning range: $70–$120 per sqft",
              "duration": "Typical duration: 5–8 weeks"
            }
          ]
        },
        "faq": {
          "eyebrow": "Renovation FAQ",
          "title": "Short answers before you start planning.",
          "learn_more": "Learn more",
          "items": [
            {
              "question": "How much should I budget for renovation in Singapore?",
              "answer": "Budget depends on property type, condition and scope. Start with a planning range, then confirm after floor plan review and site measurement.",
              "link": "/insights/renovation-cost-singapore-2026"
            },
            {
              "question": "How long does an HDB renovation usually take?",
              "answer": "Many HDB renovations take several weeks, with timing affected by hacking, carpentry, permits, material lead time and supplier coordination.",
              "link": "/insights/hdb-renovation-timeline-singapore"
            },
            {
              "question": "Do commercial renovations need more planning?",
              "answer": "Yes. Office and retail projects may involve landlord rules, building management, reinstatement, fire safety and permit requirements.",
              "link": "/commercial"
            },
            {
              "question": "Can I estimate my renovation cost before meeting a designer?",
              "answer": "Yes. Use our calculator as a first planning guide, then request an itemised quotation after scope and measurements are checked.",
              "link": "/renovation-cost-calculator"
            },
            {
              "question": "How do I choose a renovation style?",
              "answer": "Start with lifestyle, storage needs, lighting preference and maintenance level. The style quiz helps narrow your direction before consultation.",
              "link": "/hdb-renovation-style-quiz"
            }
          ]
        }
      },
  zh: {
        "quick_answers": {
          "eyebrow": "翻新快速指南",
          "title": "更清楚掌握翻新预算、工期与流程。",
          "subtitle": "为正在比较新加坡翻新方案的屋主与商业客户，提供简洁清楚的规划重点。",
          "items": [
            {
              "title": "新加坡翻新费用",
              "text": "HDB、公寓与办公室翻新预算，通常取决于房屋状况、木工范围、拆除工程、电工工程与材料选择。",
              "link": "/insights/renovation-cost-singapore-2026",
              "label": "阅读费用指南"
            },
            {
              "title": "住宅与商业翻新工期",
              "text": "HDB 翻新通常需要数周；办公室项目则会受审批、恢复原状、大厦规定与装修流程安排影响。",
              "link": "/insights/hdb-renovation-timeline-singapore",
              "label": "查看工期指南"
            },
            {
              "title": "翻新流程",
              "text": "更顺利的项目通常会经过咨询、空间规划、设计确认、报价、施工、检查与移交。",
              "link": "#process",
              "label": "查看我们的流程"
            }
          ]
        },
        "featured_insights": {
          "eyebrow": "精选见解",
          "title": "帮助您规划新加坡翻新的实用指南。",
          "subtitle": "先了解重点，再阅读更深入的指南。这些内容有助于预算规划、审批意识与项目工期安排。",
          "read_article": "阅读全文",
          "items": [
            {
              "title": "新加坡翻新费用 2026",
              "text": "为 HDB、公寓与住宅翻新预算规划整理的实用指南。",
              "link": "/insights/renovation-cost-singapore-2026"
            },
            {
              "title": "新加坡 HDB 翻新时间表",
              "text": "了解施工顺序、审批、材料交期以及常见延误原因。",
              "link": "/insights/hdb-renovation-timeline-singapore"
            },
            {
              "title": "新加坡办公室翻新时间表",
              "text": "办公室装修、恢复原状与移交工期的商业规划指南。",
              "link": "/insights/office-renovation-timeline-singapore"
            }
          ]
        },
        "planning_tools": {
          "eyebrow": "规划工具",
          "title": "先掌握预算，再确认风格方向。",
          "subtitle": "咨询前先使用这些工具，让翻新讨论从更清楚的预算与设计预期开始。",
          "items": [
            {
              "title": "Renovation Cost Calculator",
              "text": "在索取正式报价前，先估算 HDB、公寓、转售屋、厨房或厕所翻新的预算范围。",
              "href": "/renovation-cost-calculator",
              "label": "打开计算器"
            },
            {
              "title": "HDB Renovation Style Quiz",
              "text": "在咨询前探索适合您的室内风格方向，从 Japandi 到现代奢华与温暖极简。",
              "href": "/hdb-renovation-style-quiz",
              "label": "开始风格测验"
            }
          ]
        },
        "internal_links": {
          "title": "探索我们的翻新服务",
          "items": [
            {
              "label": "新加坡住宅翻新",
              "to": "/residential"
            },
            {
              "label": "新加坡商业翻新",
              "to": "/commercial"
            },
            {
              "label": "翻新指南与见解",
              "to": "/insights"
            },
            {
              "label": "新加坡翻新费用计算器",
              "to": "/renovation-cost-calculator"
            },
            {
              "label": "HDB 翻新风格测验",
              "to": "/hdb-renovation-style-quiz"
            },
            {
              "label": "新加坡翻新作品集",
              "to": "/gallery"
            },
            {
              "label": "联系 ID Work Studio",
              "to": "/contact"
            }
          ]
        },
        "trust": {
          "eyebrow": "为什么选择 ID Work Studio",
          "title": "注册合规、流程清晰、以设计为核心。",
          "signals": [
            "新加坡 BCA 注册室内设计与翻新公司。",
            "HDB 注册承包商，可协调住宅翻新与 HDB 工程事项。",
            "具备 HDB 住宅、公寓、办公室装修与商业恢复原状经验。",
            "以高质感定位结合实际预算、工期安排与移交规划。"
          ]
        },
        "project_snippets": {
          "eyebrow": "项目预算参考",
          "title": "用于前期规划的预算与工期例子。",
          "items": [
            {
              "type": "HDB 转售屋翻新",
              "size": "4房式 HDB · 约 969 sqft",
              "range": "规划预算：$45k–$70k",
              "duration": "典型工期：8–10 周"
            },
            {
              "type": "办公室装修",
              "size": "商业办公室 · 约 1,200 sqft",
              "range": "规划预算：每 sqft $70–$120",
              "duration": "典型工期：5–8 周"
            }
          ]
        },
        "faq": {
          "eyebrow": "翻新常见问题",
          "title": "开始规划前的简短解答。",
          "learn_more": "了解更多",
          "items": [
            {
              "question": "在新加坡翻新应该准备多少预算？",
              "answer": "预算取决于房屋类型、屋况与工程范围。建议先用规划预算开始，再通过平面图审查与现场测量确认。",
              "link": "/insights/renovation-cost-singapore-2026"
            },
            {
              "question": "HDB 翻新通常需要多久？",
              "answer": "许多 HDB 翻新需要数周，实际工期会受拆除、木工、许可证、材料交期与供应商协调影响。",
              "link": "/insights/hdb-renovation-timeline-singapore"
            },
            {
              "question": "商业翻新是否需要更多规划？",
              "answer": "是的。办公室与零售项目可能涉及业主规定、大厦管理、恢复原状、消防安全与许可证要求。",
              "link": "/commercial"
            },
            {
              "question": "见设计师前可以先估算翻新费用吗？",
              "answer": "可以。您可以先使用我们的计算器作为预算参考，再在确认范围与测量后索取详细分项报价。",
              "link": "/renovation-cost-calculator"
            },
            {
              "question": "我应该如何选择翻新风格？",
              "answer": "先从生活习惯、收纳需求、灯光偏好与维护难度开始。风格测验可帮助您在咨询前缩小方向。",
              "link": "/hdb-renovation-style-quiz"
            }
          ]
        }
      },
};


function HomepageAuthoritySections() {
  const { i18n } = useTranslation();
  const lang = i18n.language === 'zh' ? 'zh' : 'en';
  const content = homepageAuthorityContent[lang];

  const quickAnswers = content.quick_answers.items;
  const featuredInsights = content.featured_insights.items;
  const planningTools = content.planning_tools.items;
  const trustSignals = content.trust.signals;
  const projectSnippets = content.project_snippets.items;
  const homepageFaqs = content.faq.items;

  return (
    <main className="bg-[#f8f5ef] text-dark-charcoal">
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl rounded-[2rem] border border-gold/15 bg-white/75 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.05)] md:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">{content.quick_answers.eyebrow}</p>
            <h2 className="font-serif text-3xl font-bold leading-tight md:text-5xl">{content.quick_answers.title}</h2>
            <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base">
              {content.quick_answers.subtitle}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {quickAnswers.map((item) => (
              <article key={item.title} className="flex h-full flex-col rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
                <h3 className="font-serif text-2xl font-semibold text-dark-charcoal">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{item.text}</p>
                <Link to={item.link} className="mt-auto inline-flex pt-5 text-xs font-semibold uppercase tracking-[0.18em] text-gold hover:text-gold-hover">
                  {item.label}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="rounded-[2rem] border border-[#d8c3a0]/40 bg-[#f3ede3]/80 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.05)] md:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">{content.featured_insights.eyebrow}</p>
            <h2 className="font-serif text-3xl font-bold leading-tight md:text-4xl">{content.featured_insights.title}</h2>
            <p className="mt-4 text-sm leading-7 text-gray-600">
              {content.featured_insights.subtitle}
            </p>
          </div>

          <div className="grid gap-4">
            {featuredInsights.map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className="group rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.09)]"
              >
                <h3 className="font-serif text-2xl font-semibold text-dark-charcoal group-hover:text-gold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{item.text}</p>
                <span className="mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-gold">{content.featured_insights.read_article}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-dark-charcoal p-6 text-white shadow-[0_30px_90px_rgba(0,0,0,0.18)] md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">{content.planning_tools.eyebrow}</p>
              <h2 className="font-serif text-3xl font-bold leading-tight md:text-4xl">{content.planning_tools.title}</h2>
              <p className="mt-4 text-sm leading-7 text-white/60">
                {content.planning_tools.subtitle}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {planningTools.map((tool) => (
                <a key={tool.title} href={tool.href} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:bg-gold/10">
                  <h3 className="font-serif text-2xl font-semibold text-white">{tool.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">{tool.text}</p>
                  <span className="mt-5 inline-flex rounded-full bg-gold px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-dark-charcoal transition-colors hover:bg-gold-hover">
                    {tool.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <div className="rounded-[2.5rem] border border-black/5 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">{content.trust.eyebrow}</p>
            <h2 className="font-serif text-3xl font-bold leading-tight md:text-4xl">{content.trust.title}</h2>
            <div className="mt-6 grid gap-3">
              {trustSignals.map((item) => (
                <div key={item} className="rounded-2xl border border-black/5 bg-[#f8f5ef] p-4 text-sm leading-6 text-gray-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-black/5 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">{content.project_snippets.eyebrow}</p>
            <h2 className="font-serif text-3xl font-bold leading-tight md:text-4xl">{content.project_snippets.title}</h2>
            <div className="mt-6 grid gap-4">
              {projectSnippets.map((project) => (
                <article key={project.type} className="rounded-2xl border border-gold/20 bg-[#f8f5ef] p-5">
                  <h3 className="font-serif text-2xl font-semibold text-dark-charcoal">{project.type}</h3>
                  <p className="mt-2 text-sm text-gray-600">{project.size}</p>
                  <p className="mt-2 text-sm font-semibold text-dark-charcoal">{project.range}</p>
                  <p className="mt-1 text-sm text-gray-600">{project.duration}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Process />

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl rounded-[2rem] border border-[#cbb38a]/45 bg-[#eee6d8]/85 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.05)] md:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">{content.faq.eyebrow}</p>
            <h2 className="font-serif text-3xl font-bold leading-tight md:text-4xl">{content.faq.title}</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {homepageFaqs.map((item) => (
              <div key={item.question} className="rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.045)]">
                <h3 className="text-base font-semibold text-dark-charcoal">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{item.answer}</p>
                <Link to={item.link} className="mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-gold hover:text-gold-hover">
                  {content.faq.learn_more}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Primary renovation service pages" className="sr-only">
        <ul>
          <li>
            <Link to="/residential">Residential Renovation Singapore</Link>
          </li>
          <li>
            <Link to="/commercial">Commercial Renovation Singapore</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
function HomepageInternalLinks() {
  const { i18n } = useTranslation();
  const lang = i18n.language === 'zh' ? 'zh' : 'en';
  const content = homepageAuthorityContent[lang];
  const links = content.internal_links.items;

  return (
    <section className="bg-[#f8f5ef] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/5 bg-white/80 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.05)] md:p-8">
        <h2 className="text-center font-serif text-3xl font-bold leading-tight text-dark-charcoal md:text-4xl">
          {content.internal_links.title}
        </h2>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`rounded-2xl border border-black/5 bg-[#f8f5ef] px-5 py-4 text-sm font-semibold text-dark-charcoal transition-colors duration-200 hover:border-gold/40 hover:text-gold ${item.to === '/contact' ? 'lg:col-start-2' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


function LandingPage() {
  return (
    <>
      <Helmet>
        <title>ID Work Studio | Renovation & Interior Design Singapore | Woodlands</title>
        <meta
          name="description"
          content="Planning an office or commercial renovation in Singapore? See 2026 cost ranges, timelines, and real project insights. BCA-registered & HDB-approved."
        />
        <link rel="canonical" href="https://idworkstudio.com/" />
      </Helmet>

      <Hero />
      <Services />
      <HomepageAuthoritySections />
      <Contact />
      <HomepageInternalLinks />
      <StickyMobileNav />
    </>
  );
}

function Layout() {
  const { t } = useTranslation();

  return (
    <HelmetProvider>
      <LanguagePersistence />
      <QueryParamStripper />
      <GARouteTracker />
      <ScrollToHashElement />

      <div className="min-h-screen bg-white font-sans text-charcoal">
        <Navbar />

        <Outlet />

        <footer className="bg-black text-white py-12 border-t border-gray-800 pb-[90px] md:pb-[90px] lg:pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-white font-semibold tracking-[0.2em] uppercase text-sm mb-5">
              ID Work Studio
            </p>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 text-gray-400 text-xs">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-gold/60 flex-shrink-0" />
                11 Woodlands Close #03-10 Woodlands 11 Singapore 737853
              </span>

              <a
                href="tel:+6568162872"
                className="flex items-center gap-1.5 hover:text-gold transition-colors duration-200"
              >
                <Phone className="w-3 h-3 text-gold/60 flex-shrink-0" />
                6816 2872
              </a>

              <a
                href="mailto:contact@idworkstudio.com"
                className="flex items-center gap-1.5 hover:text-gold transition-colors duration-200"
              >
                <Mail className="w-3 h-3 text-gold/60 flex-shrink-0" />
                contact@idworkstudio.com
              </a>

              <span className="flex items-center gap-1.5">
                <Building2 className="w-3 h-3 text-gold/60 flex-shrink-0" />
                UEN 201539658C
              </span>
            </div>

            <div className="mb-6 flex justify-center space-x-8">
              <a
                href="https://services2.hdb.gov.sg/webapp/FI10AWBIZ/"
                target="_blank"
                rel="noopener noreferrer"
                title="Verify ID Work Studio on HDB Renovation Contractor Registry"
                className="text-white text-xs uppercase tracking-[0.12rem] border border-gold/50 px-6 py-2 rounded-full hover:bg-gold hover:text-dark-charcoal transition-all backdrop-blur-sm"
              >
                {t('accreditation.hdb')}
              </a>

              <a
                href="https://www.bca.gov.sg/eBACS/BCA_DIRECTORY/Search/SearchResults?searchKey=id%20work%20s"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xs uppercase tracking-[0.12rem] border border-white/30 px-6 py-2 rounded-full hover:bg-white hover:text-dark-charcoal transition-all backdrop-blur-sm"
              >
                {t('accreditation.bca')}
              </a>
            </div>

            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} ID Work Studio. {t('footer.rights')}{' '}
              <span className="text-xs opacity-50">v1.1</span>
            </p>
          </div>
        </footer>
      </div>
    </HelmetProvider>
  );
}

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <LandingPage /> },

      { path: 'residential', element: <Residential /> },
      { path: 'commercial', element: <Commercial /> },

      { path: 'commercial/reinstatement', element: <Reinstatement /> },
      { path: 'commercial/office-renovation', element: <OfficeRenovation /> },
      { path: 'commercial/retail-mall-renovation', element: <RetailMallRenovation /> },
      { path: 'commercial/shophouse-renovation', element: <ShophouseRenovation /> },
      { path: 'commercial/permits-compliance', element: <CompliancePermits /> },

      { path: 'insights', element: <Insights /> },
      { path: 'insights/renovation-cost-singapore-2026', element: <ArticleRenovationCost2026 /> },
      { path: 'insights/hdb-renovation-timeline-singapore', element: <ArticleHDBTimeline /> },
      { path: 'insights/renovation-mistakes-singapore', element: <ArticleRenovationMistakes /> },
      { path: 'insights/commercial-renovation-cost-singapore', element: <CommercialRenovationCostSingapore /> },
      { path: 'insights/office-renovation-cost-singapore', element: <OfficeRenovationCostSingapore /> },
      { path: 'insights/office-renovation-timeline-singapore', element: <OfficeRenovationTimelineSingapore /> },
      { path: 'insights/overseas-renovation-shopping-singapore', element: <OverseasRenovationShoppingMistakes /> },
      { path: 'insights/feng-shui-renovation-singapore', element: <FengShuiRenovationSingapore /> },

      { path: 'gallery', element: <Gallery /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
];

export default routes;