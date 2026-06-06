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
import KitchenRenovationCostSingapore from './components/KitchenRenovationCostSingapore';
import RenovationQuotationSingapore from './components/RenovationQuotationSingapore';
import RealCostMovingIntoNewHomeSingapore from './components/RealCostMovingIntoNewHomeSingapore';
import HDBDefectChecklistBeforeRenovationSingapore from './components/HDBDefectChecklistBeforeRenovationSingapore';
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
  planning_authority: {
    eyebrow: string;
    title: string;
    text: string;
    signals: string[];
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
          "title": "Clearer Singapore renovation planning, without the guesswork.",
          "subtitle": "Fast planning links for cost, common mistakes and process clarity before consultation.",
          "items": [
            {
              "title": "Renovation cost in Singapore",
              "text": "Cost depends on site condition, hacking, carpentry, electrical works, permits and materials.",
              "link": "/insights/renovation-cost-singapore-2026",
              "label": "Read cost guide"
            },
            {
              "title": "Renovation mistakes to avoid",
              "text": "Avoid unclear scopes, weak budget planning, late material decisions and permit assumptions.",
              "link": "/insights/renovation-mistakes-singapore",
              "label": "Read mistakes guide"
            },
            {
              "title": "Renovation process",
              "text": "A smoother project starts with floor plan review, budget discussion, quotation, permits and coordinated handover.",
              "link": "#process",
              "label": "See our process"
            }
          ]
        },
        "featured_insights": {
          "eyebrow": "Featured insights",
          "title": "Renovation planning guides for Singapore homes, offices and commercial spaces.",
          "subtitle": "Deeper guides for budget planning, approvals and project sequencing.",
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
          "title": "Plan cost, cashflow and design direction clearly.",
          "subtitle": "Three focused tools for renovation budget, full move-in cost and style direction.",
          "items": [
            {
              "title": "Renovation Cost Estimator",
              "text": "Estimate renovation contract costs before requesting a quotation.",
              "href": "/renovation-cost-calculator",
              "label": "Estimate costs"
            },
            {
              "title": "Move-In Budget Planner",
              "text": "Plan renovation, furniture, appliances and safety buffer together.",
              "href": "/total-home-budget-calculator",
              "label": "Plan budget"
            },
            {
              "title": "Style Discovery Quiz",
              "text": "Narrow your style direction before consultation.",
              "href": "/hdb-renovation-style-quiz",
              "label": "Discover style"
            }
          ]
        },
        "planning_authority": {
          "eyebrow": "Planning clarity",
          "title": "Renovation planning is more than choosing finishes.",
          "text": "Singapore homeowners often underestimate furniture, appliances, delivery and contingency. Our tools help you see the full picture before work begins.",
          "signals": [
            "BCA Registered",
            "HDB Registered",
            "Residential & Commercial",
            "Singapore-based since 2015"
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
              "label": "Renovation Cost Estimator",
              "to": "/renovation-cost-calculator"
            },
            {
              "label": "Move-In Budget Planner",
              "to": "/total-home-budget-calculator"
            },
            {
              "label": "Style Discovery Quiz",
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
          "title": "Registered, design-led and familiar with Singapore renovation requirements.",
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
          "title": "Short answers on renovation cost, timeline, permits and planning.",
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
          "title": "更清楚规划新加坡翻新预算、流程与风格方向。",
          "subtitle": "用较短的路径了解费用、常见错误与翻新流程。",
          "items": [
            {
              "title": "新加坡翻新费用",
              "text": "费用通常受屋况、拆除、木工、电工、许可证与材料选择影响。",
              "link": "/insights/renovation-cost-singapore-2026",
              "label": "阅读费用指南"
            },
            {
              "title": "应避免的翻新错误",
              "text": "避免范围不清、预算不足、材料决定太迟、许可证假设与施工顺序混乱。",
              "link": "/insights/renovation-mistakes-singapore",
              "label": "阅读错误指南"
            },
            {
              "title": "翻新流程",
              "text": "顺利翻新通常从平面图审查、预算、报价、许可证与现场协调开始。",
              "link": "#process",
              "label": "查看我们的流程"
            }
          ]
        },
        "featured_insights": {
          "eyebrow": "精选见解",
          "title": "适用于新加坡住宅、办公室与商业空间的翻新规划指南。",
          "subtitle": "更深入了解预算、审批与项目工期安排。",
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
          "title": "更清楚规划费用、现金流与风格方向。",
          "subtitle": "三个工具分别协助预算、完整入住成本与风格判断。",
          "items": [
            {
              "title": "Renovation Cost Estimator",
              "text": "先估算翻新工程费用，再索取详细报价。",
              "href": "/renovation-cost-calculator",
              "label": "估算费用"
            },
            {
              "title": "Move-In Budget Planner",
              "text": "同时规划翻新、家具、电器与安全缓冲。",
              "href": "/total-home-budget-calculator",
              "label": "规划预算"
            },
            {
              "title": "Style Discovery Quiz",
              "text": "咨询前先缩小适合您的风格方向。",
              "href": "/hdb-renovation-style-quiz",
              "label": "开始测验"
            }
          ]
        },
        "planning_authority": {
          "eyebrow": "规划清晰度",
          "title": "翻新规划不只是选择材料与风格。",
          "text": "许多屋主会低估家具、电器、配送与备用预算。我们的工具帮助您在开工前看清完整费用。",
          "signals": [
            "BCA 注册",
            "HDB 注册",
            "住宅与商业项目",
            "2015 年起服务新加坡"
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
              "label": "完整入住预算规划器",
              "to": "/total-home-budget-calculator"
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
          "title": "注册合规、以设计为核心，并熟悉新加坡翻新要求。",
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
          "title": "关于翻新费用、工期、许可证与规划的简短解答。",
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
  const planningAuthority = content.planning_authority;
  const trustSignals = content.trust.signals;
  const projectSnippets = content.project_snippets.items;
  const homepageFaqs = content.faq.items;

  return (
    <main className="bg-[#f8f5ef] text-dark-charcoal">
      <section className="px-4 py-10 sm:px-6 lg:px-8 md:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 max-w-3xl rounded-[2rem] border border-gold/15 bg-white/75 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.05)] md:p-7">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">{content.quick_answers.eyebrow}</p>
            <h2 className="font-serif text-3xl font-bold leading-tight md:text-4xl">{content.quick_answers.title}</h2>
            <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base">
              {content.quick_answers.subtitle}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {quickAnswers.map((item) => (
              <article key={item.title} className="flex h-full flex-col rounded-[1.75rem] border border-black/5 bg-white p-5 shadow-[0_16px_45px_rgba(0,0,0,0.05)]">
                <h3 className="font-serif text-2xl font-semibold text-dark-charcoal">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{item.text}</p>
                <Link to={item.link} className="mt-auto inline-flex pt-5 text-xs font-semibold uppercase tracking-[0.18em] text-gold hover:text-gold-hover">
                  {item.label}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-10 sm:px-6 lg:px-8 md:pb-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="rounded-[2rem] border border-[#d8c3a0]/40 bg-[#f3ede3]/80 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.05)] md:p-7">
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

      <section className="px-4 pb-10 sm:px-6 lg:px-8 md:pb-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-gray-100 bg-[#FBFAF7] p-5 shadow-[0_20px_60px_rgba(44,44,44,0.07)] md:p-7">
          <div className="mb-6 text-center md:mb-8">
            <div className="mx-auto mb-4 h-px w-12 bg-gold" />
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">{content.planning_tools.eyebrow}</p>
            <h2 className="mx-auto max-w-3xl font-serif text-3xl font-bold leading-tight text-dark-charcoal md:text-4xl">{content.planning_tools.title}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-600">
              {content.planning_tools.subtitle}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {planningTools.map((tool, index) => (
              <a
                key={tool.title}
                href={tool.href}
                className={`group flex h-full flex-col rounded-[1.75rem] border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_18px_45px_rgba(44,44,44,0.10)] ${
                  index === 1 ? 'border-gold/30 md:scale-[1.015]' : 'border-gray-100'
                }`}
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="h-px w-10 bg-gold/70 transition-all duration-300 group-hover:w-16" />
                  <span className="rounded-full bg-[#f8f5ef] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-gold">
                    {index === 0 ? 'Cost' : index === 1 ? 'Budget' : 'Style'}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-semibold leading-snug text-dark-charcoal">{tool.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">{tool.text}</p>
                <span className="mt-5 inline-flex w-fit rounded-full border border-gold/60 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-dark-charcoal transition-colors group-hover:bg-gold group-hover:text-white">
                  {tool.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-10 sm:px-6 lg:px-8 md:pb-12">
        <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-gold/15 bg-white/80 px-5 py-5 shadow-[0_14px_40px_rgba(0,0,0,0.04)] md:px-7">
          <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">{planningAuthority.eyebrow}</p>
              <h2 className="font-serif text-2xl font-bold leading-tight text-dark-charcoal md:text-3xl">{planningAuthority.title}</h2>
              <p className="mt-3 text-sm leading-6 text-gray-600">{planningAuthority.text}</p>
            </div>
            <div className="flex flex-wrap gap-2 lg:justify-end">
              {planningAuthority.signals.map((signal) => (
                <span key={signal} className="rounded-full border border-gold/25 bg-[#f8f5ef] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-dark-charcoal">
                  {signal}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-10 sm:px-6 lg:px-8 md:pb-12">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-black/5 bg-white p-5 shadow-[0_16px_45px_rgba(0,0,0,0.05)] md:p-7">
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

          <div className="rounded-[2rem] border border-black/5 bg-white p-5 shadow-[0_16px_45px_rgba(0,0,0,0.05)] md:p-7">
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

      <section className="px-4 pb-14 sm:px-6 lg:px-8 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 max-w-3xl rounded-[2rem] border border-[#cbb38a]/45 bg-[#eee6d8]/85 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.05)] md:p-7">
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
    <section className="bg-[#f8f5ef] px-4 py-12 sm:px-6 lg:px-8 md:py-14">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/5 bg-white/80 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.05)] md:p-7">
        <h2 className="text-center font-serif text-3xl font-bold leading-tight text-dark-charcoal md:text-4xl">
          {content.internal_links.title}
        </h2>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
      { path: 'insights/kitchen-renovation-cost-singapore-2026', element: <KitchenRenovationCostSingapore /> },
      { path: 'insights/renovation-quotation-singapore', element: <RenovationQuotationSingapore /> },
      { path: 'insights/real-cost-moving-home-singapore', element: <RealCostMovingIntoNewHomeSingapore /> },
      { path: 'insights/hdb-defect-checklist-before-renovation-singapore', element: <HDBDefectChecklistBeforeRenovationSingapore /> },

      { path: 'gallery', element: <Gallery /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
];

export default routes;