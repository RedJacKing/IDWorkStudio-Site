import { Helmet } from 'react-helmet-async';
import type { ReactNode } from 'react';
import { CalendarDays, Clock3, ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type TimelineRow = {
  stage: string;
  weeks: string[];
  note: string;
};

type TimelineCard = {
  title: string;
  duration: string;
  body: string;
};

type TextCard = {
  title: string;
  body: string;
};

type FAQItem = {
  q: string;
  a: string;
};

const officeRenovationTimelineContent = {
  en: {
  meta: {
    title: "Office Renovation Timeline Singapore | How Long Fit-Out Takes | ID Work Studio",
    description: "Office renovation timeline Singapore guide. See realistic fit-out timelines, Gantt schedule, landlord approval, MCST, SCDF, M&E coordination, delays and FAQ."
  },
  hero_badge: "Office Timeline Guide",
  hero_alt: "Modern office renovation timeline planning in Singapore",
  title: "Office Renovation Timeline Singapore: How Long an Office Fit-Out Really Takes",
  subtitle: "A practical contractor guide to office renovation scheduling, approvals, site sequencing, delay risks and handover planning in Singapore.",
  read_time: "9 min read",
  intro: "A realistic office renovation timeline in Singapore is not just the number of days spent on site. It must include design confirmation, landlord or MCST approval, possible SCDF/QP review, site works, M&E coordination, furniture delivery, testing and handover. This guide explains the timeline the way a contractor schedules it on a real project.",
  direct_answer: {
    title: "How long does office renovation take in Singapore?",
    body: "As a working guide, a small office usually takes 3 to 6 weeks, a medium office takes 6 to 10 weeks, and a large or corporate office takes 10 to 16 weeks. These ranges include planning, approval, site works and handover. A simple refresh can be faster, but once partition, electrical, data, aircon or fire safety works are involved, the schedule must allow proper coordination."
  },
  internal_links: {
    cost_intro: "If you are planning your office renovation timeline based on budget, read our",
    cost_link: "office renovation cost guide in Singapore",
    cost_outro: "to understand how scope, M&E works, landlord requirements and approvals affect your total project cost.",
    service_intro: "For a full overview of office renovation requirements, including landlord approval, MCST submission and SCDF coordination where applicable, refer to our",
    service_link: "office renovation Singapore service page",
    service_outro: "before confirming your lease handover and move-in schedule."
  },
  timeline_ranges: {
    "1": { title: "Small office", body: "3–6 weeks" },
    "2": { title: "Medium office", body: "6–10 weeks" },
    "3": { title: "Large / corporate", body: "10–16 weeks" }
  },
  client_concerns: {
    eyebrow: "Client concerns",
    title: "What business owners usually worry about",
    items: {
      "1": "How long will the office be down before the team can move in?",
      "2": "Can renovation be done while the business is still operating?",
      "3": "Will landlord, MCST or building management delay approval?",
      "4": "Do sprinkler, fire alarm or exit changes require SCDF/QP review?",
      "5": "Can noisy works be done after office hours or on weekends?",
      "6": "Will electrical, data and aircon works be ready before handover?"
    }
  },
  gantt: {
    title: "Typical office renovation Gantt schedule",
    intro: "Office renovation works overlap. The Gantt chart below is easier for clients to read than a long site schedule, but it still shows the real sequencing: approval before major works, wet and partition works before final finishes, and testing before handover.",
    headers: { stage: "Stage", note: "Contractor note" },
    weeks: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
    rows: {
      "1": { stage: "Planning & design", weeks: ["1", "1", "0", "0", "0", "0", "0", "0"], note: "Site survey, layout, M&E planning and quotation alignment." },
      "2": { stage: "Landlord / MCST / SCDF approval", weeks: ["0", "1", "1", "0", "0", "0", "0", "0"], note: "Runs in parallel after drawings are ready; complex fire safety items can extend this." },
      "3": { stage: "Hacking & dismantling", weeks: ["0", "0", "1", "0", "0", "0", "0", "0"], note: "Removal of existing partition, ceiling, flooring or built-ins where approved." },
      "4": { stage: "Masonry & partition", weeks: ["0", "0", "1", "1", "0", "0", "0", "0"], note: "New layout formation, drywall partition, wet works and base preparation." },
      "5": { stage: "Electrical & data", weeks: ["0", "0", "0", "1", "1", "0", "0", "0"], note: "Power points, lighting points, network cabling, server and workstation coordination." },
      "6": { stage: "Aircon works", weeks: ["0", "0", "0", "1", "1", "0", "0", "0"], note: "Diffuser relocation, thermostat adjustment, FCU coordination or duct changes." },
      "7": { stage: "Carpentry & furniture", weeks: ["0", "0", "0", "0", "1", "1", "0", "0"], note: "Fabrication is usually off-site; final installation depends on confirmed site measurements." },
      "8": { stage: "Finishing works", weeks: ["0", "0", "0", "0", "1", "1", "0", "0"], note: "Painting, flooring, glass works, lighting installation and final touch-ups." },
      "9": { stage: "Testing & handover", weeks: ["0", "0", "0", "0", "0", "1", "1", "0"], note: "Power, data, aircon, defects, cleaning and handover readiness." }
    },
    note: "This is a working schedule, not a fixed promise. In Singapore office renovation, approval delays, after-hours restrictions, aircon shutdown coordination and supplier lead times can shift the programme by 1 to 3 weeks. A proper contractor schedule should always include buffer time."
  },
  phases: {
    title: "Full timeline breakdown",
    intro: "A proper office fit-out should be planned in phases. Each phase affects the next phase, so rushing early decisions usually creates delay later on site.",
    items: {
      "1": { title: "1. Planning & design", duration: "1–3 weeks", body: "This includes site measurement, workspace layout, meeting room planning, pantry planning, electrical and data point planning, ceiling layout, lighting layout and aircon impact review. If the layout keeps changing, the programme will move before site works even start." },
      "2": { title: "2. Submission & approval", duration: "1–4 weeks", body: "Most office projects require landlord or building management approval. Strata offices may require MCST approval. Submission documents can include layout drawings, reflected ceiling plan, M&E details, method statement, work schedule, contractor details, insurance and renovation deposit. If fire safety systems are affected, SCDF-related review by a Qualified Person may be required." },
      "3": { title: "3. Hacking, partition and wet works", duration: "1–3 weeks", body: "This phase covers dismantling, hacking, new partition, pantry wet works, ceiling base works and making good. In occupied buildings, noisy works are often restricted to certain hours, so even simple works can take longer than expected." },
      "4": { title: "4. Electrical, data and aircon coordination", duration: "1–2 weeks", body: "Office renovation depends heavily on power, lighting, data, server, Wi-Fi and aircon routing. These trades must be coordinated together because partition and ceiling changes affect cable routing, diffuser position, return air and lighting placement." },
      "5": { title: "5. Carpentry, furniture and finishing", duration: "2–4 weeks", body: "Carpentry is usually fabricated off-site, but final measurement should only be taken after site conditions are ready. Flooring, painting, glass works, loose furniture, signage and accessories are usually installed toward the end of the project." },
      "6": { title: "6. Testing, defects and handover", duration: "3–7 days", body: "Before handover, power points, lights, data points, aircon, doors, glass works, locks and furniture placement should be checked. Final cleaning and defect rectification should be included before staff move in." }
    }
  },
  delay_factors: {
    title: "Real delay factors in Singapore office renovation",
    intro: "Most office renovation delays do not come from hacking or painting. They usually come from approvals, building restrictions and coordination between different trades.",
    items: {
      "1": { title: "Landlord or MCST approval delays", body: "Building management may request revised drawings, method statements, insurance documents, lift protection details or contractor registration before issuing approval to start work." },
      "2": { title: "After-hours work restrictions", body: "Many commercial buildings limit noisy works to evenings, nights or weekends. This can slow the programme by 30% to 50%, especially when hacking, drilling or material delivery is involved." },
      "3": { title: "Electrical and data coordination", body: "If workstation count, server location, meeting room AV or data point quantity is not confirmed early, wiring may need to be revised after partitions are built." },
      "4": { title: "Aircon modification", body: "Aircon works may require building approval, shutdown timing or coordination with the building's central system. Diffusers, thermostats and return air paths must match the new layout." },
      "5": { title: "SCDF or QP review", body: "If the works affect sprinkler layout, fire alarm, smoke detector, exit route, fire-rated partition or occupant load, SCDF-related submission may be required. This should be checked early, not after site work starts." },
      "6": { title: "Third-party supplier delays", body: "Furniture, glass, signage, access control, IT equipment and loose furniture are often supplied by separate vendors. Late confirmation can delay final handover even when renovation works are nearly completed." }
    }
  },
  mistakes: {
    title: "Common office renovation mistakes",
    intro: "The best way to shorten an office renovation timeline is not to rush site work. It is to avoid decisions that create rework.",
    items: {
      "1": { title: "Confirming move-in date before approval", body: "Do not lock in the staff move-in date until landlord, MCST or building management approval is secured. A one-week approval delay can affect furniture delivery, IT setup and handover." },
      "2": { title: "Treating office renovation like home renovation", body: "Office renovation needs compliance documents, building rules, lift booking, loading bay timing, insurance and M&E coordination. It cannot be planned like a simple residential project." },
      "3": { title: "Not planning data points early", body: "Data points, server rack position, Wi-Fi coverage, meeting room AV and floor boxes should be planned before partition and ceiling works. Late changes create rewiring and patching." },
      "4": { title: "Ignoring aircon and sprinkler impact", body: "Changing partitions can affect aircon airflow, sprinkler coverage and fire safety requirements. These items should be reviewed during planning, not after walls are built." },
      "5": { title: "Ordering furniture too late", body: "Loose furniture often has a separate lead time. If table sizes, workstation count or delivery dates are confirmed too late, the office may be renovated but not ready for operation." }
    }
  },
  faqs: {
    title: "Office renovation timeline FAQ",
    items: {
      "1": { q: "How long does office renovation take in Singapore?", a: "Small offices usually take 3 to 6 weeks, medium offices take 6 to 10 weeks, and large corporate offices take 10 to 16 weeks including planning, approvals, site works, testing and handover." },
      "2": { q: "Can office renovation be completed in 2 weeks?", a: "Only very small cosmetic refresh works can be completed in about 2 weeks. A proper office fit-out with partition, electrical, data, aircon and landlord approval usually needs more time." },
      "3": { q: "Do I need landlord approval for office renovation?", a: "Yes. Most Singapore office renovations require landlord or building management approval before work can start. Required documents may include drawings, work schedule, method statement, contractor details and insurance." },
      "4": { q: "Do I need MCST approval?", a: "If the office is inside a strata-titled building, MCST or managing agent approval is commonly required before renovation works can start." },
      "5": { q: "When is SCDF submission required?", a: "SCDF-related submission may be required if the renovation affects fire safety systems, sprinkler layout, fire alarm, smoke detector, exit route, fire-rated partition or occupant load. A Qualified Person should assess this where applicable." },
      "6": { q: "Can renovation be done after office hours?", a: "Yes, if the building allows it. However, night and weekend work may need separate approval and can slow the schedule or increase labour cost." },
      "7": { q: "Can we operate during renovation?", a: "It is possible for some offices, but the work must be phased with dust control, noise planning, safety barricades and careful power or data cutover. Phased work usually takes longer than renovating a vacant office." },
      "8": { q: "What delays office renovation the most?", a: "Approval delay, after-hours restriction, aircon coordination, electrical and data changes, sprinkler review, late furniture delivery and late client decisions are the most common delay factors." },
      "9": { q: "How early should we start planning before lease start?", a: "Start planning at least 1 to 2 months before lease commencement. For larger offices or projects involving SCDF/QP review, start 2 to 4 months earlier if possible." },
      "10": { q: "Does office size affect timeline?", a: "Yes. Larger offices need more drawings, more M&E coordination, more trades, more approval checks and more handover testing. The timeline is not only based on square footage, but also layout complexity." },
      "11": { q: "How long does handover take?", a: "Testing, defects, cleaning and handover usually take 3 to 7 days. Larger offices may need a longer defects and IT coordination period before staff move in." },
      "12": { q: "How can ID Work Studio reduce downtime?", a: "We review the floor plan, building rules, approval requirements, M&E constraints and target move-in date early. This allows the schedule to be planned around real site constraints instead of an unrealistic handover date." }
    }
  },
  cta: {
    eyebrow: "Plan before you commit",
    title: "Need a realistic office renovation timeline?",
    body: "WhatsApp us your floor plan, lease handover date and target move-in date. ID Work Studio can advise a realistic programme before you commit to your renovation schedule.",
    whatsapp: "WhatsApp Floor Plan",
    office_service: "View Office Renovation Service"
  }
},
  zh: {
  meta: {
    title: "新加坡办公室翻新时间表 | 办公室 Fit-Out 需要多久 | ID Work Studio",
    description: "新加坡办公室翻新时间表指南，说明实际工期、甘特图、大厦审批、MCST、SCDF、机电协调、常见延误与 FAQ。"
  },
  hero_badge: "办公室工期指南",
  hero_alt: "新加坡现代办公室翻新时间规划",
  title: "新加坡办公室翻新时间表：办公室 Fit-Out 实际需要多久",
  subtitle: "以承包商角度说明新加坡办公室装修的排期、审批、现场施工顺序、延误风险与移交规划。",
  read_time: "约 9 分钟",
  intro: "新加坡办公室翻新的实际工期，不只是现场施工天数。它还包括设计确认、业主或 MCST 审批、可能涉及的 SCDF/QP 审查、现场施工、机电协调、家具交付、测试与移交。本指南以承包商实际排期方式说明整个流程。",
  direct_answer: {
    title: "新加坡办公室翻新需要多久？",
    body: "作为实际规划参考，小型办公室通常需要 3 至 6 周，中型办公室需要 6 至 10 周，大型或企业办公室需要 10 至 16 周。这些时间包括规划、审批、现场施工与移交。简单翻新可能更快，但只要涉及隔墙、电工、网络、空调或消防安全工程，就必须预留协调时间。"
  },
  internal_links: {
    cost_intro: "如果你是根据预算来规划办公室翻新工期，也可以先阅读我们的",
    cost_link: "新加坡办公室翻新费用指南",
    cost_outro: "了解工程范围、机电工程、大厦要求和审批如何影响整体项目费用。",
    service_intro: "如果你需要了解办公室翻新的完整要求，包括业主审批、MCST 申请以及适用情况下的 SCDF 协调，可以参考我们的",
    service_link: "新加坡办公室翻新服务页面",
    service_outro: "再确认租约交接日期和搬入时间。"
  },
  timeline_ranges: {
    "1": { title: "小型办公室", body: "3–6 周" },
    "2": { title: "中型办公室", body: "6–10 周" },
    "3": { title: "大型 / 企业办公室", body: "10–16 周" }
  },
  client_concerns: {
    eyebrow: "客户常见顾虑",
    title: "企业负责人通常最担心什么",
    items: {
      "1": "办公室需要停用多久，员工什么时候能搬入？",
      "2": "公司仍在运作时，是否可以分阶段装修？",
      "3": "业主、MCST 或大厦管理会不会拖慢审批？",
      "4": "洒水器、火警或逃生路线改变是否需要 SCDF/QP 审查？",
      "5": "噪音工程是否可以在下班后或周末进行？",
      "6": "电力、网络与空调是否能在移交前全部完成测试？"
    }
  },
  gantt: {
    title: "办公室翻新常见甘特图排期",
    intro: "办公室翻新的工程通常是重叠进行的。以下甘特图比完整现场排期更容易让客户理解，但仍保留实际施工逻辑：先审批、再主要施工，湿作与隔墙先行，最后才做饰面与移交测试。",
    headers: { stage: "阶段", note: "承包商说明" },
    weeks: ["第1周", "第2周", "第3周", "第4周", "第5周", "第6周", "第7周", "第8周"],
    rows: {
      "1": { stage: "规划与设计", weeks: ["1", "1", "0", "0", "0", "0", "0", "0"], note: "现场测量、平面规划、机电规划与报价确认。" },
      "2": { stage: "业主 / MCST / SCDF 审批", weeks: ["0", "1", "1", "0", "0", "0", "0", "0"], note: "图纸完成后同步进行；复杂消防项目会拉长时间。" },
      "3": { stage: "拆除与清拆", weeks: ["0", "0", "1", "0", "0", "0", "0", "0"], note: "按批准范围拆除原有隔墙、天花、地板或固定家具。" },
      "4": { stage: "泥水与隔墙", weeks: ["0", "0", "1", "1", "0", "0", "0", "0"], note: "新格局成型、石膏板隔墙、茶水间湿作与基层处理。" },
      "5": { stage: "电工与网络", weeks: ["0", "0", "0", "1", "1", "0", "0", "0"], note: "电源点、灯光点、网络线、服务器与工位点位协调。" },
      "6": { stage: "空调工程", weeks: ["0", "0", "0", "1", "1", "0", "0", "0"], note: "风口移位、温控器调整、FCU 协调或风管修改。" },
      "7": { stage: "木工与家具", weeks: ["0", "0", "0", "0", "1", "1", "0", "0"], note: "木工通常场外制作；最终安装取决于现场尺寸确认。" },
      "8": { stage: "饰面工程", weeks: ["0", "0", "0", "0", "1", "1", "0", "0"], note: "油漆、地板、玻璃、灯具安装与最终修补。" },
      "9": { stage: "测试与移交", weeks: ["0", "0", "0", "0", "0", "1", "1", "0"], note: "电力、网络、空调、缺陷修补、清洁与移交准备。" }
    },
    note: "这是工作排期，不是固定承诺。新加坡办公室翻新中，审批延误、下班后施工限制、空调停机协调与供应商交期，都可能让整体工期移动 1 至 3 周。专业排期应预留缓冲时间。"
  },
  phases: {
    title: "完整工期拆解",
    intro: "办公室 fit-out 应分阶段规划。每个阶段都会影响下一个阶段，因此前期决策若仓促，后期现场就容易出现延误或返工。",
    items: {
      "1": { title: "1. 规划与设计", duration: "1–3 周", body: "包括现场测量、工位规划、会议室规划、茶水间规划、电力与网络点位规划、天花图、灯光图与空调影响检查。如果平面不断更改，现场还未开工，排期已经会受影响。" },
      "2": { title: "2. 提交与审批", duration: "1–4 周", body: "多数办公室工程需要业主或大厦管理批准。分层产权办公室可能需要 MCST 批准。提交资料可能包括平面图、天花图、机电资料、施工方法说明、工程时间表、承包商资料、保险与装修押金。若影响消防安全系统，可能需要 Qualified Person 处理 SCDF 相关审查。" },
      "3": { title: "3. 拆除、隔墙与湿作", duration: "1–3 周", body: "此阶段包括清拆、拆除、新隔墙、茶水间湿作、天花基层与修补。若办公楼限制噪音工程时间，即使简单工程也可能比预期更久。" },
      "4": { title: "4. 电工、网络与空调协调", duration: "1–2 周", body: "办公室装修非常依赖电力、灯光、网络、服务器、Wi-Fi 与空调走向。这些工种必须一起协调，因为隔墙与天花改变会影响线槽、风口、回风与灯位。" },
      "5": { title: "5. 木工、家具与饰面", duration: "2–4 周", body: "木工多数在场外制作，但最终尺寸应等现场条件稳定后确认。地板、油漆、玻璃、活动家具、招牌与配件通常在项目后段安装。" },
      "6": { title: "6. 测试、修补与移交", duration: "3–7 天", body: "移交前应检查电源点、灯具、网络点、空调、门、玻璃、锁具与家具摆位。最终清洁与缺陷修补应在员工搬入前完成。" }
    }
  },
  delay_factors: {
    title: "新加坡办公室翻新的真实延误因素",
    intro: "多数办公室翻新延误不是来自拆除或油漆，而是来自审批、大厦限制，以及不同工种之间的协调问题。",
    items: {
      "1": { title: "业主或 MCST 审批延误", body: "大厦管理可能要求修改图纸、补交施工方法说明、保险文件、电梯保护细节或承包商资料，才批准开工。" },
      "2": { title: "下班后施工限制", body: "很多商业大厦只允许傍晚、夜间或周末进行噪音工程。这可能让工期放慢 30% 至 50%，尤其是拆除、钻孔与材料运输。" },
      "3": { title: "电力与网络协调", body: "若工位数量、服务器位置、会议室 AV 或网络点数量没有早定，隔墙完成后可能需要重新拉线与修补。" },
      "4": { title: "空调修改", body: "空调工程可能需要大厦批准、停机时间安排，或与中央空调系统协调。风口、温控器与回风路径必须配合新格局。" },
      "5": { title: "SCDF 或 QP 审查", body: "若工程影响洒水器、火警、烟感、逃生路线、防火隔墙或使用人数，可能需要 SCDF 相关提交。这应在前期检查，而不是开工后才处理。" },
      "6": { title: "第三方供应商延误", body: "家具、玻璃、招牌、门禁、IT 设备与活动家具常由不同供应商负责。若确认太迟，即使装修接近完成，也会影响最终移交。" }
    }
  },
  mistakes: {
    title: "办公室翻新常见错误",
    intro: "缩短办公室翻新工期的最好方式，不是盲目催促现场施工，而是避免会造成返工的决策。",
    items: {
      "1": { title: "审批前就确认搬入日期", body: "在业主、MCST 或大厦管理批准前，不建议锁定员工搬入日期。审批延误一周，就可能影响家具、IT 设置与移交。" },
      "2": { title: "把办公室翻新当成住宅翻新", body: "办公室装修需要合规文件、大厦规则、电梯预约、卸货时间、保险与机电协调，不能像简单住宅工程一样安排。" },
      "3": { title: "太迟规划网络点", body: "网络点、服务器机柜、Wi-Fi 覆盖、会议室 AV 与地插应在隔墙和天花前确认。后期更改会造成重新拉线与修补。" },
      "4": { title: "忽略空调与洒水器影响", body: "改变隔墙会影响空调气流、洒水器覆盖与消防安全要求。这些项目应在设计阶段检查，而不是墙体完成后才发现。" },
      "5": { title: "家具订购太迟", body: "活动家具通常有独立交期。若桌子尺寸、工位数量或送货日期太迟确认，办公室可能装修完成但仍无法正式运作。" }
    }
  },
  faqs: {
    title: "办公室翻新时间表 FAQ",
    items: {
      "1": { q: "新加坡办公室翻新需要多久？", a: "小型办公室通常需要 3 至 6 周，中型办公室需要 6 至 10 周，大型企业办公室需要 10 至 16 周，包括规划、审批、现场施工、测试与移交。" },
      "2": { q: "办公室翻新可以 2 周完成吗？", a: "只有非常小型、纯表面更新的工程有可能约 2 周完成。若是包含隔墙、电工、网络、空调与业主审批的完整办公室 fit-out，通常需要更长时间。" },
      "3": { q: "办公室翻新需要业主批准吗？", a: "需要。多数新加坡办公室翻新在开工前都需要业主或大厦管理批准。常见文件包括图纸、工程时间表、施工方法说明、承包商资料与保险。" },
      "4": { q: "是否需要 MCST 批准？", a: "如果办公室位于分层产权大厦，通常需要 MCST 或管理代理批准后才能开工。" },
      "5": { q: "什么时候需要 SCDF 提交？", a: "若工程影响消防安全系统、洒水器、火警、烟感、逃生路线、防火隔墙或使用人数，可能需要 SCDF 相关提交。适用时应由 Qualified Person 评估。" },
      "6": { q: "办公室装修可以下班后施工吗？", a: "可以，但必须视大厦规定而定。夜间或周末施工可能需要额外批准，并可能拉长工期或增加人工费用。" },
      "7": { q: "公司营运期间可以装修吗？", a: "部分办公室可以，但必须分阶段施工，并处理防尘、噪音、安全围挡、电力或网络切换。分阶段施工通常比空置单位装修更久。" },
      "8": { q: "办公室翻新最常见的延误原因是什么？", a: "审批延误、下班后施工限制、空调协调、电力与网络更改、洒水器审查、家具交付延误与客户后期决定，是最常见的延误因素。" },
      "9": { q: "租约开始前多久应开始规划？", a: "建议至少在租约开始前 1 至 2 个月开始规划。若是较大办公室或涉及 SCDF/QP 审查，最好提前 2 至 4 个月。" },
      "10": { q: "办公室面积会影响工期吗？", a: "会。大型办公室需要更多图纸、机电协调、工种配合、审批检查与移交测试。工期不只看面积，也取决于格局复杂度。" },
      "11": { q: "移交通常需要多久？", a: "测试、缺陷修补、清洁与移交通常需要 3 至 7 天。大型办公室可能需要更长的缺陷处理与 IT 协调时间，员工才能搬入。" },
      "12": { q: "ID Work Studio 如何减少停工时间？", a: "我们会尽早审查平面图、大厦规定、审批要求、机电限制与目标搬入日期，让排期建立在真实现场条件上，而不是不切实际的交付日期。" }
    }
  },
  cta: {
    eyebrow: "先规划，再承诺",
    title: "需要实际办公室翻新时间表？",
    body: "请通过 WhatsApp 发送您的平面图、租约交场日期与目标搬入日期。ID Work Studio 可先为您判断实际工期，再确认装修排期。",
    whatsapp: "WhatsApp 发送平面图",
    office_service: "查看办公室翻新服务"
  }
},
} as const;

export default function OfficeRenovationTimelineSingapore() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'zh' ? 'zh' : 'en';
  const article = officeRenovationTimelineContent[lang];

  const timelineRanges = article.timeline_ranges as unknown as Record<string, TextCard>;
  const ganttRows = article.gantt.rows as unknown as Record<string, TimelineRow>;
  const phases = article.phases.items as unknown as Record<string, TimelineCard>;
  const delayFactors = article.delay_factors.items as unknown as Record<string, TextCard>;
  const mistakes = article.mistakes.items as unknown as Record<string, TextCard>;
  const faqs = article.faqs.items as unknown as Record<string, FAQItem>;
  const clientConcernItems = article.client_concerns.items as unknown as Record<string, string>;
  const ganttWeeks = article.gantt.weeks as unknown as string[];

  const articleUrl = 'https://idworkstudio.com/insights/office-renovation-timeline-singapore';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.meta.description,
    author: { '@type': 'Organization', name: 'ID Work Studio' },
    publisher: {
      '@type': 'Organization',
      name: 'ID Work Studio',
      logo: { '@type': 'ImageObject', url: 'https://idworkstudio.com/logo192.png' },
    },
    datePublished: '2026-05-04',
    dateModified: '2026-05-04',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: Object.values(faqs).map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://idworkstudio.com' },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://idworkstudio.com/insights' },
      { '@type': 'ListItem', position: 3, name: article.title, item: articleUrl },
    ],
  };

  const SectionH2 = ({ children }: { children: ReactNode }) => (
    <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mt-16 mb-5 pb-4 border-b border-gray-200">
      {children}
    </h2>
  );

  const SectionH3 = ({ children }: { children: ReactNode }) => (
    <h3 className="text-xl md:text-[1.4rem] font-bold text-charcoal leading-snug mt-12 mb-4 pl-4 border-l-4 border-gold">
      {children}
    </h3>
  );

  const P = ({ children }: { children: ReactNode }) => (
    <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85] mb-5">{children}</p>
  );

  return (
    <>
      <Helmet>
        <title>{article.meta.title}</title>
        <meta name="description" content={article.meta.description} />
        <link rel="canonical" href={articleUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={article.meta.title} />
        <meta property="og:description" content={article.meta.description} />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:image" content="https://idworkstudio.com/images/insights-hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.meta.title} />
        <meta name="twitter:description" content={article.meta.description} />
        <meta name="twitter:image" content="https://idworkstudio.com/images/insights-hero.jpg" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="bg-off-white min-h-screen selection:bg-gold selection:text-dark-charcoal">
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-black pt-28 md:pt-32 pb-20 text-white">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/insights-hero.jpg"
              alt={article.hero_alt}
              className="w-full h-full object-cover object-center opacity-55 scale-105"
              fetchPriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/45" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <span className="inline-block py-1 px-4 border border-champagne text-champagne rounded-full text-xs uppercase tracking-[0.25em] mb-5">
              {article.hero_badge}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif mb-6 uppercase tracking-tight leading-tight">
              {article.title}
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed font-light">
              {article.subtitle}
            </p>
            <div className="flex items-center justify-center gap-6 mt-8 text-xs uppercase tracking-[0.2em] text-gray-300 font-bold flex-wrap">
              <span className="inline-flex items-center gap-2"><CalendarDays className="w-4 h-4" />2026-05-04</span>
              <span className="inline-flex items-center gap-2"><Clock3 className="w-4 h-4" />{article.read_time}</span>
            </div>
          </div>
        </section>

        <section className="py-8 bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <a
              href="/insights"
              className="inline-flex items-center gap-2 text-charcoal hover:text-gold text-xs uppercase tracking-[0.22em] font-bold transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('article_common.back_to_insights')}
            </a>
          </div>
        </section>

        <article className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xl md:text-2xl text-charcoal font-light leading-relaxed mb-12 pb-10 border-b border-gray-100">
              {article.intro}
            </p>

            <SectionH2>{article.direct_answer.title}</SectionH2>
            <P>{article.direct_answer.body}</P>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
              {Object.values(timelineRanges).map((item) => (
                <div key={item.title} className="rounded-2xl border border-gray-200 bg-off-white p-6 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.24em] text-gold font-bold mb-3">{item.title}</p>
                  <p className="text-2xl font-serif text-charcoal font-semibold mb-3">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-gray-200 bg-off-white p-6 my-8">
              <p className="text-gray-600 text-base leading-[1.8] mb-0">
                {article.internal_links.cost_intro}{' '}
                <a href="/insights/office-renovation-cost-singapore" className="text-charcoal underline underline-offset-4 decoration-gold hover:text-gold transition-colors">
                  {article.internal_links.cost_link}
                </a>{' '}
                {article.internal_links.cost_outro}
              </p>
            </div>

            <div className="bg-dark-charcoal text-white rounded-2xl p-7 md:p-8 my-10">
              <p className="text-xs uppercase tracking-[0.24em] text-gold font-bold mb-3">
                {article.client_concerns.eyebrow}
              </p>
              <h3 className="text-2xl md:text-3xl font-serif mb-5">
                {article.client_concerns.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {Object.values(clientConcernItems).map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-gray-200 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <SectionH2>{article.gantt.title}</SectionH2>
            <P>{article.gantt.intro}</P>

            <div className="my-8 overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full min-w-[760px] border-collapse text-sm bg-white">
                <thead>
                  <tr className="bg-off-white">
                    <th className="text-left px-4 py-4 border-b border-gray-200 text-charcoal uppercase tracking-[0.18em] text-xs font-bold w-[220px]">
                      {article.gantt.headers.stage}
                    </th>
                    {ganttWeeks.map((week) => (
                      <th key={week} className="text-center px-3 py-4 border-b border-gray-200 text-charcoal uppercase tracking-[0.18em] text-xs font-bold">
                        {week}
                      </th>
                    ))}
                    <th className="text-left px-4 py-4 border-b border-gray-200 text-charcoal uppercase tracking-[0.18em] text-xs font-bold w-[220px]">
                      {article.gantt.headers.note}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.values(ganttRows).map((row, index) => (
                    <tr key={row.stage} className={index % 2 === 1 ? 'bg-off-white/40' : 'bg-white'}>
                      <td className="px-4 py-3.5 border-b border-gray-100 text-charcoal font-semibold">{row.stage}</td>
                      {row.weeks.map((active, weekIndex) => (
                        <td key={`${row.stage}-${weekIndex}`} className="px-3 py-3.5 border-b border-gray-100 text-center">
                          {active === '1' ? <span className="inline-block h-3 w-10 rounded-full bg-gold" /> : <span className="inline-block h-3 w-10 rounded-full bg-gray-100" />}
                        </td>
                      ))}
                      <td className="px-4 py-3.5 border-b border-gray-100 text-gray-500 text-xs leading-relaxed">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded-2xl border border-gold/30 bg-gold/10 p-6 my-8">
              <p className="text-charcoal text-base leading-[1.8] mb-0">
                {article.gantt.note}
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 my-8 shadow-sm">
              <p className="text-gray-600 text-base leading-[1.8] mb-0">
                {article.internal_links.service_intro}{' '}
                <a href="/commercial/office-renovation" className="text-charcoal underline underline-offset-4 decoration-gold hover:text-gold transition-colors">
                  {article.internal_links.service_link}
                </a>{' '}
                {article.internal_links.service_outro}
              </p>
            </div>

            <SectionH2>{article.phases.title}</SectionH2>
            <P>{article.phases.intro}</P>

            {Object.values(phases).map((phase) => (
              <div key={phase.title}>
                <SectionH3>{phase.title}</SectionH3>
                <p className="inline-flex items-center rounded-full bg-gold/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold font-bold mb-4">
                  {phase.duration}
                </p>
                <P>{phase.body}</P>
              </div>
            ))}

            <SectionH2>{article.delay_factors.title}</SectionH2>
            <P>{article.delay_factors.intro}</P>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              {Object.values(delayFactors).map((item) => (
                <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-3 mb-3">
                    <AlertTriangle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                    <h3 className="text-lg font-bold text-charcoal leading-snug">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-[1.8] mb-0">{item.body}</p>
                </div>
              ))}
            </div>

            <SectionH2>{article.mistakes.title}</SectionH2>
            <P>{article.mistakes.intro}</P>
            <div className="space-y-4 my-8">
              {Object.values(mistakes).map((item) => (
                <div key={item.title} className="rounded-2xl border border-gray-200 bg-off-white p-6">
                  <h3 className="text-lg font-bold text-charcoal mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-[1.8] mb-0">{item.body}</p>
                </div>
              ))}
            </div>

            <SectionH2>{article.faqs.title}</SectionH2>
            <div className="space-y-3 my-8">
              {Object.values(faqs).map((faq, index) => (
                <details key={faq.q} className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm" open={index === 0}>
                  <summary className="cursor-pointer list-none text-base font-bold text-charcoal flex items-start justify-between gap-4">
                    <span>{faq.q}</span>
                    <span className="text-gold group-open:rotate-45 transition-transform duration-200">+</span>
                  </summary>
                  <p className="text-gray-600 text-sm leading-[1.8] mt-4 mb-0">{faq.a}</p>
                </details>
              ))}
            </div>

            <div className="bg-dark-charcoal text-white rounded-3xl p-8 md:p-10 mt-16">
              <div className="flex items-start gap-4 mb-5">
                <MessageCircle className="w-8 h-8 text-gold flex-shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-gold font-bold mb-3">
                    {article.cta.eyebrow}
                  </p>
                  <h2 className="text-2xl md:text-4xl font-serif mb-4">
                    {article.cta.title}
                  </h2>
                  <p className="text-gray-300 text-base leading-[1.8] mb-0">
                    {article.cta.body}
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <a
                  href="https://wa.me/6598333085?text=Hi%20ID%20Work%20Studio%2C%20I%20am%20planning%20an%20office%20renovation.%20Can%20you%20advise%20a%20realistic%20timeline%20from%20my%20floor%20plan%20and%20target%20move-in%20date%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-dark-charcoal text-xs uppercase tracking-[0.22em] hover:bg-gold-hover transition-all duration-300 font-bold rounded-full"
                >
                  {article.cta.whatsapp}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/commercial/office-renovation"
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white text-xs uppercase tracking-[0.22em] hover:border-gold hover:text-gold transition-all duration-300 font-bold rounded-full"
                >
                  {article.cta.office_service}
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
