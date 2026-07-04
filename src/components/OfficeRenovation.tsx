import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, FileCheck, Clock, HardHat, LayoutPanelLeft, Zap, Ruler, PenTool, Search, FileText, Hammer, CheckCircle2, Building2, AlertTriangle, ArrowRight } from 'lucide-react';

export default function OfficeRenovation() {
  const { t, i18n } = useTranslation();
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

  const lang = i18n.language === 'zh' ? 'zh' : 'en';
  const content = {
    en: {
      planning: {
        eyebrow: 'Before You Renovate', serif: 'Office Renovation', bold: 'Checks That Affect Cost, Approval & Timeline',
        p1: 'A good office renovation quotation should not start with carpentry colours or ceiling design. It should start with whether the unit, building rules, authority requirements and M&E capacity can support the way your office needs to operate.',
        p2: 'This is where many commercial projects become expensive later: the first quotation looks acceptable, but the site conditions, landlord requirements, fire safety impact or electrical load were not checked early enough.',
        cards: [
          ['1. Confirm the office use before committing to lease or renovation','If the premises are not already approved for your intended office use, check whether a change of use or lodgment applies before signing off the renovation direction. This matters especially when the space includes training rooms, clinics, showrooms, customer-facing areas or mixed business functions.','Practical next step: ask for the approved use, floor plan, landlord fit-out guide and any existing approval records before design starts.'],
          ['2. Check fire safety impact before changing partitions and exits','Office partitions, meeting rooms, server rooms, doors, escape routes, fire-rated elements and ceiling works can affect fire safety compliance. When fire safety works are involved, submissions may need to be handled by a Qualified Person rather than treated as simple decoration.','Practical next step: identify whether the proposed layout affects exit access, fire alarm devices, sprinklers, fire hose reels, emergency lighting or fire-rated construction.'],
          ['3. Verify electrical load before adding workstations and equipment','A modern office may need more than standard power points. Workstations, server racks, pantry appliances, meeting room screens, access control, printers and air-conditioning equipment can change the electrical requirement. This should be checked before finalising layout and quotation.','Practical next step: prepare a simple equipment list and workstation count so the electrical scope can be planned with the correct Licensed Electrical Worker involvement where required.'],
          ['4. Compare quotations by scope clarity, not only by price per square foot','Office renovation cost can look similar on the surface but differ heavily in partition specification, ceiling works, flooring preparation, data cabling, M&E works, after-hours restrictions, protection works, reinstatement responsibility and authority submissions.','Practical next step: request a line-item quotation that separates builder works, M&E, authority submission, landlord requirements, optional upgrades and exclusions.']
        ],
        noteTitle: 'Consultant note', note: 'For office renovation, the safest sequence is: confirm use, check building and landlord rules, review fire safety and M&E constraints, then finalise layout and quotation. This prevents a cheap initial estimate from becoming a delayed or heavily varied project later.'
      },
      quotation: {
        eyebrow: 'Quotation Review', serif: 'Compare Office Renovation Quotations', bold: 'Before You Compare the Final Price',
        p1: 'Two office renovation quotations can look like they are pricing the same project, but they may be based on very different assumptions. One contractor may include after-hours work, protection, M&E coordination and authority submission support. Another may price only the visible builder works and leave the rest as exclusions or provisional sums.',
        p2: 'The safest way to compare office renovation contractors is not to ask, “Who is cheaper?” first. Ask, “Are they pricing the same scope, same specification, same restrictions and same handover obligations?” That is how commercial clients avoid variation orders after work has started.',
        adviceTitle: "Consultant's advice", advice: 'Before awarding an office renovation project, request a quotation comparison that separates builder works, M&E works, authority or landlord submission, protection works, after-hours assumptions, reinstatement obligations, provisional sums and exclusions. If these items are not separated, the lowest quotation may only be the lowest because important work has not been priced yet.',
        costCta: 'Read Commercial Cost Guide', timelineCta: 'Check Office Timeline',
        cards: [
          ['1. Compare scope before comparing price','Check whether demolition, partition, ceiling, flooring preparation, painting, carpentry, lighting, power points, data cabling, air-conditioning coordination, fire protection adjustment, disposal and final cleaning are all included. A cheaper quotation is not cheaper if several necessary scopes are missing.','Practical next step: put quotations side by side and mark every item as included, excluded, provisional or unclear.'],
          ['2. Watch provisional sums and vague allowances','Provisional sums are sometimes necessary when site conditions are not fully known, but too many provisional items reduce cost certainty. Common examples include electrical upgrading, air-conditioning modification, ceiling repair, fire safety works, landlord requirements and night-work charges.','Practical next step: ask which provisional sums are likely to change after site inspection, landlord review or authority submission.'],
          ['3. Compare specifications, not descriptions','Descriptions such as “partition”, “vinyl flooring”, “glass door” or “office lighting” are not enough. Commercial specifications should clarify partition type, board thickness, acoustic requirement, flooring thickness, ceiling system, lighting model, glass thickness, ironmongery and finish quality.','Practical next step: request the specification behind each major item, not only the item name.'],
          ['4. Check M&E assumptions early','Office renovation costs often change when the existing electrical capacity, distribution board, air-conditioning layout, sprinkler positions, fire alarm devices, emergency lighting or data requirements are reviewed properly. These items affect cost, approval, timeline and handover readiness.','Practical next step: provide workstation count, equipment list, server or network requirements, pantry appliance list and meeting room technology needs before final quotation.'],
          ['5. Confirm building and handover restrictions','Many commercial buildings have fitting-out rules that affect pricing: working hours, noisy work windows, lift booking, loading bay access, protection requirements, deposit conditions, insurance documents and handover checks. These restrictions can change manpower planning and project duration.','Practical next step: obtain the landlord or MCST fitting-out guide before comparing quotations.']
        ]
      },
      hidden: {
        eyebrow: 'Cost Risk', serif: 'Hidden Cost Drivers', bold: 'That Commonly Affect Office Renovation',
        p1: 'Office renovation costs rarely increase because of one decorative item alone. The larger cost movements usually come from site constraints, M&E assumptions, authority requirements, landlord rules or work that was not visible during the first discussion.',
        p2: 'These items should be clarified before a quotation is accepted, especially when the project has a fixed move-in date or business downtime cost.',
        cards: [
          ['Existing electrical capacity and distribution board condition','If the office needs more workstations, pantry equipment, meeting room screens, server equipment or access control, the existing electrical capacity may not be enough. Upgrading or rebalancing electrical works can affect cost and timeline.'],
          ['Air-conditioning and ceiling coordination','Changing meeting rooms, enclosed offices or ceiling layout can affect air-conditioning distribution, access panels, condensate piping, diffuser positions and ceiling works. These items are often missed when only furniture layout is discussed.'],
          ['Fire safety devices and escape route impact','New partitions, doors, enclosed rooms or ceiling works may affect sprinklers, detectors, fire alarm devices, exit signs, emergency lighting or escape access. If fire safety works are affected, additional professional coordination may be required.'],
          ['Building management restrictions','Lift booking, loading bay hours, noisy work windows, protection requirements, insurance documents and security registration can all affect manpower planning. These restrictions may also create after-hours or weekend work costs.'],
          ['Existing site condition and making-good works','Old flooring adhesive, uneven slabs, damaged ceiling grids, concealed defects, previous tenant works and landlord handover requirements can create additional preparation or making-good works after site inspection.']
        ],
        noteTitle: 'Consultant note', note: 'If a quotation looks unusually low, check whether these risk items are included, excluded, provisional or not mentioned. A clear quotation reduces dispute risk more than a short quotation with a low total.'
      },
      officePlan: {
        eyebrow: 'Before Layout Approval', serif: 'Plan the Office Around Work', bold: 'Not Around Furniture Alone',
        p1: 'A functional office renovation starts with how the business works every day. Furniture layout is only one layer. The more important question is how staff, clients, managers, storage, meetings, equipment, sound and privacy need to interact.',
        p2: 'When these decisions are delayed, the renovation programme becomes unstable because partitions, electrical points, data points, lighting, air-conditioning and furniture orders all depend on the approved layout.',
        cards: [
          ['1. Confirm departments and workflow first','Map which teams need to sit together, which teams need privacy, who receives clients, who handles confidential discussions and which areas need quick access to printers, storage or pantry. This avoids rebuilding the layout after the first draft.'],
          ['2. Decide enclosed rooms before M&E planning','Meeting rooms, director rooms, phone booths, server rooms and training rooms affect partitions, glass, doors, air-conditioning, sprinklers, lighting, acoustic treatment and data cabling. These rooms should be confirmed before detailed costing.'],
          ['3. Plan power and data from actual working behaviour','Do not count power points only by desk quantity. Consider monitors, docking stations, printers, meeting screens, AV equipment, pantry appliances, access control, server equipment and future hires. Under-planning this area causes expensive rework.'],
          ['4. Allow for growth, not only current headcount','A layout that fits today but has no expansion logic can become obsolete quickly. Where possible, plan spare power capacity, flexible seating, modular furniture, adaptable meeting rooms and storage that can grow with the team.']
        ],
        noteTitle: 'Consultant note', note: 'Before approving any office renovation layout, confirm workflow, room functions, headcount, equipment list and future growth assumptions. That gives the contractor a stable base for quotation, timeline and technical coordination.'
      },
      specs: {
        eyebrow: 'Specification Quality', serif: 'Office Renovation Specifications', bold: 'That Affect Durability and Handover Quality',
        p1: 'Office renovation specifications should not be vague. Commercial spaces receive heavier use than most homes, so the details behind partitions, flooring, ceiling, lighting, glass, doors and M&E coordination affect durability, maintenance and long-term cost.',
        p2: 'A professional quotation should make these specifications visible enough for the client to compare quality, not only total price.',
        rows: [
          ['Partition systems','Check board type, thickness, insulation, height, acoustic expectation, fire-rated requirement where applicable, door frame coordination and whether the partition stops at ceiling or slab level.'],
          ['Ceiling systems','Clarify whether works involve existing ceiling repair, new grid ceiling, plasterboard ceiling, access panels, air-conditioning diffusers, sprinkler coordination, emergency lighting and maintenance access.'],
          ['Flooring','Compare vinyl thickness, carpet tile grade, floor preparation, self-levelling, skirting, transition strips, adhesive type and suitability for office traffic. Cheap flooring may cost more if preparation is not included.'],
          ['Lighting and power','Clarify lighting model, colour temperature, switching zones, emergency lighting impact, power point quantity, data point quantity, DB works and whether electrical works require Licensed Electrical Worker involvement.'],
          ['Glass, doors and hardware','Check glass thickness, frame profile, film, lockset, door closer, acoustic expectation, safety requirement and whether hardware is commercial grade. These details affect daily use and maintenance.'],
          ['Handover quality','Confirm testing, commissioning, touch-up, cleaning, defect rectification, as-built information, manuals and landlord handover requirements before work starts.']
        ],
        noteTitle: 'Consultant note', note: 'When comparing office renovation quotations, ask for the specification behind each major line item. A quotation that says “partition” or “lighting” without detail is not enough for a proper commercial comparison.'
      },
      journey: {
        eyebrow: 'What To Do Next', serif: 'Office Renovation Decision Journey', bold: 'Choose the Right Next Step',
        p1: 'Most business owners do not need more generic renovation information. They need to know what decision comes next. The right next step depends on whether you are still budgeting, comparing contractors, planning a move-in date or preparing to exit an existing office.',
        cards: [
          ['If you are still budgeting','Start with the commercial renovation cost guide before comparing contractors. This helps you understand typical cost drivers, why office quotations vary and what should be included before you ask for a site survey.','Commercial Renovation Cost','/insights/commercial-renovation-cost-singapore'],
          ['If you are planning your move-in date','Read the office renovation timeline guide before committing to an opening date, lease date or staff relocation date. Timeline planning should happen before final contractor appointment.','Office Renovation Timeline','/insights/office-renovation-timeline-singapore'],
          ['If you are leaving an existing office','Check commercial reinstatement requirements before you finalise the new renovation. Reinstatement obligations, landlord handover and lease-end deadlines can affect both budget and schedule.','Commercial Reinstatement','/commercial/reinstatement']
        ],
        noteTitle: 'Consultant note', note: 'If your office renovation involves a fixed move-in date, landlord approval, M&E changes or business downtime, the next step should be a scope review rather than a rough price request. A proper review gives you a clearer budget, timeline and approval path before work begins.',
        cta: 'Discuss Office Renovation Scope'
      },
      geo: {
        eyebrow: 'Direct Answer', serif: 'Office Renovation Singapore', bold: 'What Business Owners Should Know First',
        intro: 'Office renovation in Singapore usually involves more than interior design. A proper project should consider approved use, landlord or MCST fitting-out rules, fire safety impact, electrical capacity, air-conditioning coordination, building access, renovation timeline, reinstatement obligations and business continuity.',
        rows: [
          ['First decision','Confirm whether the premises, lease, landlord rules and approved use support your intended office operation before committing to design.'],
          ['Main cost risk','The biggest cost differences usually come from M&E works, partition and ceiling changes, landlord requirements, after-hours work, authority submission support and unclear exclusions.'],
          ['Main timeline risk','Timeline delays usually come from late layout decisions, building approval, fire safety coordination, electrical changes, long-lead materials, furniture delay and IT relocation.'],
          ['Best next step','Prepare your floor plan, intended headcount, equipment list, landlord fitting-out guide and move-in target before requesting a detailed quotation.']
        ],
        quote: 'The right office renovation contractor should help you clarify scope, timeline, approvals and operational risk before asking you to commit to a final design direction.',
        cta1: 'Estimate Commercial Renovation Cost', cta2: 'Plan Office Renovation Timeline', cta3: 'Discuss Scope With ID Work Studio'
      }
    },
    zh: {
      planning: {
        eyebrow: '装修前先确认', serif: '办公室装修', bold: '会影响预算、审批与工期的关键检查',
        p1: '一份可靠的办公室装修报价，不应该先从木色、天花造型或设计风格开始，而应该先确认这个单位、楼宇规定、相关审批要求和机电容量，是否能够支持你的办公室实际运作方式。',
        p2: '很多商业装修后期变贵，并不是因为一开始设计得太复杂，而是因为第一次报价时没有及早检查现场条件、业主要求、消防影响或用电负荷。',
        cards: [
          ['1. 租下或装修前，先确认办公室用途','如果该单位还没有获准作为你计划中的办公室用途，应该先确认是否需要用途更改或申报，尤其是空间包含培训室、诊所、展示区、客户接待区或混合业务功能时。','实际下一步：在设计开始前，先向业主或管理方索取核准用途、平面图、装修手册和现有审批记录。'],
          ['2. 改隔间和出口前，先检查消防影响','办公室隔间、会议室、服务器房、门、逃生路线、防火构件和天花工程，都可能影响消防合规。如果涉及消防安全工程，可能需要由合资格人士处理提交，而不能当成普通装饰工程。','实际下一步：先确认新布局是否影响出口通道、火警设备、喷淋、消防喉辘、紧急照明或防火结构。'],
          ['3. 增加工位和设备前，先确认用电负荷','现代办公室需要的不只是普通插座。工位、服务器、茶水间电器、会议屏幕、门禁、打印机和冷气设备，都会影响用电需求。这个部分应在确定布局和报价前先检查。','实际下一步：准备设备清单和工位数量，让电力范围能在需要时配合持牌电工规划。'],
          ['4. 比较报价时看范围清晰度，不只是每平方尺价格','办公室装修表面价格可能接近，但实际差异很大，例如隔间规格、天花工程、地面处理、数据布线、机电工程、非办公时间施工、保护工程、还原责任和审批提交是否包含。','实际下一步：要求逐项报价，把建筑工程、机电、审批、业主要求、可选升级和不包含项目分开列明。']
        ],
        noteTitle: '顾问提醒', note: '办公室装修最安全的顺序是：确认用途，检查楼宇和业主规则，审查消防与机电限制，然后才确定布局和报价。这样可以避免低价初步报价，最后变成延误和大量追加费用。'
      },
      quotation: {
        eyebrow: '报价审核', serif: '比较办公室装修报价', bold: '先不要只比较最终总价',
        p1: '两份办公室装修报价看起来可能是在报同一个项目，但背后的假设可能完全不同。一份报价可能包含非办公时间施工、现场保护、机电协调和审批协助；另一份可能只报看得见的建筑工程，把其他项目列为不包含或暂定金额。',
        p2: '比较办公室装修承包商时，最安全的做法不是先问“谁比较便宜”，而是先问“他们是否在报同一个范围、同一个规格、同一个限制和同一个交付责任？” 这才是商业客户避免开工后追加费用的方法。',
        adviceTitle: '顾问建议', advice: '在决定办公室装修承包商前，要求对方把建筑工程、机电工程、审批或业主提交、保护工程、非办公时间施工假设、还原责任、暂定金额和不包含项目分开列明。如果这些项目没有分开，最低报价可能只是因为很多必要工程还没有被报进去。',
        costCta: '阅读商业装修费用指南', timelineCta: '查看办公室装修时间表',
        cards: [
          ['1. 先比较范围，再比较价格','确认拆除、隔间、天花、地面处理、油漆、木作、灯具、插座、数据布线、冷气协调、消防调整、清运和最终清洁是否包含。少了必要范围的报价，并不是真的便宜。','实际下一步：把报价并排比较，把每一项标为包含、不包含、暂定或不清楚。'],
          ['2. 留意暂定金额和模糊 allowance','有些暂定金额在现场条件未明时是合理的，但太多暂定项目会降低成本确定性。常见例子包括电力升级、冷气修改、天花修补、消防工程、业主要求和夜间施工费。','实际下一步：询问哪些暂定金额最可能在现场检查、业主审核或审批提交后改变。'],
          ['3. 比较规格，不只是项目名称','“隔间”“vinyl 地板”“玻璃门”“办公室灯具”这些描述并不足够。商业规格应说明隔间类型、板材厚度、隔音要求、地板厚度、天花系统、灯具型号、玻璃厚度、五金和饰面质量。','实际下一步：要求每个主要项目背后的具体规格，而不只是项目名称。'],
          ['4. 尽早检查机电假设','当现有电力容量、配电箱、冷气布局、喷淋位置、火警设备、紧急照明或数据需求被认真审查后，办公室装修费用经常会改变。这些项目会影响成本、审批、工期和交付。','实际下一步：在最终报价前提供工位数量、设备清单、服务器或网络需求、茶水间电器和会议室科技需求。'],
          ['5. 确认楼宇和交付限制','许多商业楼宇都有装修规则，会影响价格：施工时间、噪音工程时段、电梯预订、loading bay、保护要求、押金、保险文件和交付检查。这些限制会影响人手安排和工期。','实际下一步：在比较报价前，先取得业主或 MCST 的装修手册。']
        ]
      },
      hidden: {
        eyebrow: '成本风险', serif: '隐藏成本因素', bold: '常见影响办公室装修的项目',
        p1: '办公室装修费用很少只是因为某一个装饰项目而大幅增加。真正造成较大变化的，通常是现场限制、机电假设、审批要求、业主规则，或第一次讨论时看不见的工程。',
        p2: '这些项目应该在接受报价前确认，尤其是项目有固定搬入日期或停业成本时。',
        cards: [
          ['现有电力容量和配电箱状态','如果办公室需要更多工位、茶水间设备、会议屏幕、服务器、门禁或其他设备，现有电力容量可能不足。升级或重新分配电力会影响费用和工期。'],
          ['冷气与天花协调','更改会议室、独立办公室或天花布局，可能影响冷气送风、检修口、冷凝水管、风口位置和天花工程。只讨论家具布局时，这些项目很容易被忽略。'],
          ['消防设备和逃生路线影响','新隔间、门、封闭房间或天花工程，可能影响喷淋、探测器、火警设备、出口灯、紧急照明或逃生通道。若涉及消防安全工程，可能需要额外专业协调。'],
          ['楼宇管理限制','电梯预订、loading bay 时间、噪音工程时段、现场保护、保险文件和保安登记，都会影响人手安排，也可能产生非办公时间或周末施工成本。'],
          ['现有现场状况和修补工程','旧地板胶、地面不平、天花损坏、隐藏缺陷、前租户工程和业主交付要求，都可能在现场检查后产生额外准备或修补工程。']
        ],
        noteTitle: '顾问提醒', note: '如果一份报价明显偏低，要检查这些风险项目是包含、不包含、暂定，还是完全没有提到。清楚的报价比低总价但范围简短的报价，更能降低争议风险。'
      },
      officePlan: {
        eyebrow: '布局确认前', serif: '办公室要围绕工作方式规划', bold: '不能只围绕家具摆放',
        p1: '实用的办公室装修，应从企业每天如何运作开始。家具布局只是其中一层，更重要的是员工、客户、管理层、储物、会议、设备、声音和隐私之间如何配合。',
        p2: '这些决定一旦拖延，装修进度就会不稳定，因为隔间、插座、数据点、灯光、冷气和家具下单，都依赖已确认的布局。',
        cards: [
          ['1. 先确认部门和工作流程','先规划哪些团队需要坐在一起，哪些团队需要隐私，谁接待客户，谁处理机密讨论，哪些区域需要接近打印机、储物或茶水间。这样可以避免第一版布局后又大改。'],
          ['2. 机电规划前先决定封闭房间','会议室、老板房、电话间、服务器房和培训室，会影响隔间、玻璃、门、冷气、喷淋、灯光、隔音和数据布线。这些房间应在详细报价前确认。'],
          ['3. 根据实际工作行为规划电源和数据','不要只按桌子数量计算插座。还要考虑显示器、扩展坞、打印机、会议屏幕、影音设备、茶水间电器、门禁、服务器和未来员工。这个部分规划不足，后期返工会很贵。'],
          ['4. 预留增长，而不只是当前人数','一个只适合今天人数、没有扩展逻辑的布局，很快会过时。可以的话，应规划备用电力容量、灵活座位、模块化家具、可调整会议室和可扩展储物。']
        ],
        noteTitle: '顾问提醒', note: '批准办公室装修布局前，先确认工作流程、房间功能、人数、设备清单和未来增长假设。这样承包商才能更稳定地报价、排期和协调技术细节。'
      },
      specs: {
        eyebrow: '规格质量', serif: '办公室装修规格', bold: '会影响耐用度和交付质量',
        p1: '办公室装修规格不能模糊。商业空间的使用强度通常比住宅高，所以隔间、地板、天花、灯光、玻璃、门和机电协调的细节，会影响耐用度、维修和长期成本。',
        p2: '专业报价应把这些规格写得足够清楚，让客户比较质量，而不是只比较总价。',
        rows: [
          ['隔间系统','检查板材类型、厚度、隔音棉、高度、隔音要求、适用时的防火要求、门框协调，以及隔间是做到天花还是楼板。'],
          ['天花系统','确认是现有天花修补、新 grid ceiling、石膏板天花、检修口、冷气风口、喷淋协调、紧急照明和维修通道。'],
          ['地板','比较 vinyl 厚度、方块地毯等级、地面处理、自流平、踢脚线、收口条、胶水类型和是否适合办公室人流。若地面准备未包含，便宜地板反而可能更贵。'],
          ['灯光与电源','确认灯具型号、色温、开关分区、紧急照明影响、插座数量、数据点数量、配电箱工程，以及是否需要持牌电工参与。'],
          ['玻璃、门和五金','检查玻璃厚度、框料、贴膜、锁具、闭门器、隔音期望、安全要求，以及五金是否为商业等级。这些细节会影响日常使用和维护。'],
          ['交付质量','开工前确认测试、调试、修补、清洁、缺陷处理、竣工资料、说明书和业主交付要求。']
        ],
        noteTitle: '顾问提醒', note: '比较办公室装修报价时，应要求每个主要项目背后的规格。只写“隔间”或“灯具”的报价，不足以进行商业项目比较。'
      },
      journey: {
        eyebrow: '下一步怎么做', serif: '办公室装修决策路径', bold: '选择正确的下一步',
        p1: '大多数企业主需要的不是更多普通装修资讯，而是知道下一个该做什么决定。正确的下一步，取决于你还在预算阶段、比较承包商、规划搬入日期，还是准备退出旧办公室。',
        cards: [
          ['如果你还在预算阶段','先阅读商业装修费用指南，再比较承包商。这样可以了解常见成本因素、为什么办公室报价差异大，以及安排现场勘查前应包含哪些项目。','商业装修费用','/insights/commercial-renovation-cost-singapore'],
          ['如果你正在规划搬入日期','在承诺开业日期、租约日期或员工搬迁日期前，先阅读办公室装修时间表。工期规划应在最终委任承包商前完成。','办公室装修时间表','/insights/office-renovation-timeline-singapore'],
          ['如果你要退出现有办公室','在确定新办公室装修前，先检查商业还原要求。还原责任、业主交付和租约结束期限，会同时影响预算和工期。','商业还原','/commercial/reinstatement']
        ],
        noteTitle: '顾问提醒', note: '如果你的办公室装修涉及固定搬入日期、业主审批、机电更改或营业停顿，下一步不应该只是问一个大概价格，而应该先做范围审核。正确的审核能在开工前给你更清楚的预算、工期和审批路径。',
        cta: '讨论办公室装修范围'
      },
      geo: {
        eyebrow: '直接答案', serif: '新加坡办公室装修', bold: '企业主应先知道什么',
        intro: '新加坡办公室装修通常不只是室内设计。一个完整项目应考虑核准用途、业主或 MCST 装修规定、消防影响、电力容量、冷气协调、楼宇通行、装修工期、还原责任和业务连续性。',
        rows: [
          ['第一个决定','在确定设计前，先确认单位、租约、业主规则和核准用途，是否支持你的办公室实际运作。'],
          ['主要成本风险','最大的费用差异通常来自机电工程、隔间和天花变化、业主要求、非办公时间施工、审批协助和不清楚的不包含项目。'],
          ['主要工期风险','常见延误来自布局决定太迟、楼宇审批、消防协调、电力更改、长交期材料、家具延误和 IT 搬迁。'],
          ['最佳下一步','在要求详细报价前，准备平面图、预计人数、设备清单、业主装修手册和目标搬入日期。']
        ],
        quote: '合适的办公室装修承包商，应在你承诺最终设计前，先帮你理清范围、工期、审批和营运风险。',
        cta1: '估算商业装修费用', cta2: '规划办公室装修时间表', cta3: '与 ID Work Studio 讨论范围'
      }
    }
  };
  const c = content[lang];

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
                <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-4">{c.planning.eyebrow}</p>
                <h2 className="text-3xl md:text-5xl leading-tight mb-6 flex flex-col">
                  <span className="font-serif italic text-dark-charcoal/60 text-2xl md:text-3xl mb-2">{c.planning.serif}</span>
                  <span className="font-sans font-bold text-dark-charcoal uppercase tracking-wider">{c.planning.bold}</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">{c.planning.p1}</p>
                <p className="text-gray-600 leading-relaxed">{c.planning.p2}</p>
              </div>

              <div className="space-y-5">
                {c.planning.cards.map((item, i) => {
                  const icons = [<Building2 size={22}/>, <FileCheck size={22}/>, <Zap size={22}/>, <Ruler size={22}/>];
                  return (
                    <div key={i} className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-full bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">{icons[i]}</div>
                        <div>
                          <h3 className="font-bold text-dark-charcoal uppercase tracking-wide text-sm mb-3">{item[0]}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{item[1]}</p>
                          <p className="text-gray-500 text-xs leading-relaxed mt-3">{item[2]}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="rounded-2xl border border-gold/30 bg-gold/10 p-7">
                  <h3 className="font-bold text-dark-charcoal uppercase tracking-wide text-sm mb-3">{c.planning.noteTitle}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{c.planning.note}</p>
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
                <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-4">{c.quotation.eyebrow}</p>
                <h2 className="text-3xl md:text-5xl leading-tight mb-6 flex flex-col">
                  <span className="font-serif italic text-dark-charcoal/60 text-2xl md:text-3xl mb-2">{c.quotation.serif}</span>
                  <span className="font-sans font-bold text-dark-charcoal uppercase tracking-wider">{c.quotation.bold}</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">{c.quotation.p1}</p>
                <p className="text-gray-600 leading-relaxed mb-8">{c.quotation.p2}</p>

                <div className="rounded-2xl border border-gold/30 bg-gold/10 p-7">
                  <h3 className="font-bold text-dark-charcoal uppercase tracking-wide text-sm mb-4">{c.quotation.adviceTitle}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-5">{c.quotation.advice}</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link to="/insights/commercial-renovation-cost-singapore" className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 px-5 py-3 text-xs font-bold uppercase tracking-wider text-dark-charcoal hover:bg-gold hover:text-dark-charcoal transition-colors">
                      {c.quotation.costCta} <ArrowRight size={14}/>
                    </Link>
                    <Link to="/insights/office-renovation-timeline-singapore" className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 px-5 py-3 text-xs font-bold uppercase tracking-wider text-dark-charcoal hover:bg-gold hover:text-dark-charcoal transition-colors">
                      {c.quotation.timelineCta} <ArrowRight size={14}/>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                {c.quotation.cards.map((item, i) => {
                  const icons = [<Search size={22}/>, <FileText size={22}/>, <Ruler size={22}/>, <Zap size={22}/>, <Building2 size={22}/>];
                  return (
                    <div key={i} className="bg-off-white border border-gray-100 rounded-2xl p-7 hover:border-gold/30 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-full bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">{icons[i]}</div>
                        <div>
                          <h3 className="font-bold text-dark-charcoal uppercase tracking-wide text-sm mb-3">{item[0]}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{item[1]}</p>
                          <p className="text-gray-500 text-xs leading-relaxed mt-3">{item[2]}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>


        {/* OFFICE RENOVATION HIDDEN COST DRIVERS */}
        <section className="py-24 bg-off-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-14 items-start">
              <div className="lg:sticky lg:top-28">
                <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-4">{c.hidden.eyebrow}</p>
                <h2 className="text-3xl md:text-5xl leading-tight mb-6 flex flex-col">
                  <span className="font-serif italic text-dark-charcoal/60 text-2xl md:text-3xl mb-2">{c.hidden.serif}</span>
                  <span className="font-sans font-bold text-dark-charcoal uppercase tracking-wider">{c.hidden.bold}</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">{c.hidden.p1}</p>
                <p className="text-gray-600 leading-relaxed">{c.hidden.p2}</p>
              </div>

              <div className="space-y-5">
                {c.hidden.cards.map((item, i) => {
                  const icons = [<Zap size={22}/>, <LayoutPanelLeft size={22}/>, <FileCheck size={22}/>, <Building2 size={22}/>, <HardHat size={22}/>];
                  return (
                    <div key={i} className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-full bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">{icons[i]}</div>
                        <div>
                          <h3 className="font-bold text-dark-charcoal uppercase tracking-wide text-sm mb-3">{item[0]}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{item[1]}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="rounded-2xl border border-gold/30 bg-gold/10 p-7">
                  <h3 className="font-bold text-dark-charcoal uppercase tracking-wide text-sm mb-3">{c.hidden.noteTitle}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{c.hidden.note}</p>
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
                <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-4">{c.officePlan.eyebrow}</p>
                <h2 className="text-3xl md:text-5xl leading-tight mb-6 flex flex-col">
                  <span className="font-serif italic text-dark-charcoal/60 text-2xl md:text-3xl mb-2">{c.officePlan.serif}</span>
                  <span className="font-sans font-bold text-dark-charcoal uppercase tracking-wider">{c.officePlan.bold}</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">{c.officePlan.p1}</p>
                <p className="text-gray-600 leading-relaxed mb-8">{c.officePlan.p2}</p>
                <div className="rounded-2xl border border-gold/30 bg-gold/10 p-7">
                  <h3 className="font-bold text-dark-charcoal uppercase tracking-wide text-sm mb-3">{c.officePlan.noteTitle}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{c.officePlan.note}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5">
                {c.officePlan.cards.map((item, i) => {
                  const icons = [<LayoutPanelLeft size={22}/>, <FileCheck size={22}/>, <Zap size={22}/>, <Ruler size={22}/>];
                  return (
                    <div key={i} className="bg-off-white border border-gray-100 rounded-2xl p-7 hover:border-gold/30 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-full bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">{icons[i]}</div>
                        <div>
                          <h3 className="font-bold text-dark-charcoal uppercase tracking-wide text-sm mb-3">{item[0]}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{item[1]}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>


        {/* OFFICE RENOVATION TECHNICAL SPECIFICATIONS */}
        <section className="py-24 bg-off-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-4">{c.specs.eyebrow}</p>
              <h2 className="text-3xl md:text-5xl leading-tight mb-6 flex flex-col">
                <span className="font-serif italic text-dark-charcoal/60 text-2xl md:text-3xl mb-2">{c.specs.serif}</span>
                <span className="font-sans font-bold text-dark-charcoal uppercase tracking-wider">{c.specs.bold}</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">{c.specs.p1}</p>
              <p className="text-gray-600 leading-relaxed">{c.specs.p2}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {c.specs.rows.map((item, i)=>(
                <div key={i} className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:border-gold/30 transition-colors">
                  <h3 className="font-bold text-dark-charcoal uppercase tracking-wide text-sm mb-3">{item[0]}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item[1]}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-gold/30 bg-gold/10 p-7">
              <h3 className="font-bold text-dark-charcoal uppercase tracking-wide text-sm mb-3">{c.specs.noteTitle}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{c.specs.note}</p>
            </div>
          </div>
        </section>


        {/* OFFICE RENOVATION DECISION JOURNEY */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-4">{c.journey.eyebrow}</p>
              <h2 className="text-3xl md:text-5xl leading-tight mb-6 flex flex-col items-center">
                <span className="font-serif italic text-dark-charcoal/60 text-2xl md:text-3xl mb-2">{c.journey.serif}</span>
                <span className="font-sans font-bold text-dark-charcoal uppercase tracking-wider">{c.journey.bold}</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">{c.journey.p1}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              {c.journey.cards.map((item, i)=>(
                <div key={i} className="bg-off-white border border-gray-100 rounded-2xl p-7 hover:border-gold/30 transition-colors flex flex-col">
                  <h3 className="font-bold text-dark-charcoal uppercase tracking-wide text-sm mb-3">{item[0]}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{item[1]}</p>
                  <Link to={item[3]} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold hover:text-dark-charcoal transition-colors">
                    {item[2]} <ArrowRight size={14}/>
                  </Link>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-gold/30 bg-gold/10 p-7 text-center">
              <h3 className="font-bold text-dark-charcoal uppercase tracking-wide text-sm mb-3">{c.journey.noteTitle}</h3>
              <p className="text-gray-700 text-sm leading-relaxed max-w-3xl mx-auto mb-6">{c.journey.note}</p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-xs font-bold uppercase tracking-wider text-dark-charcoal hover:bg-gold-hover transition-colors">
                {c.journey.cta} <ArrowRight size={14}/>
              </a>
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
        <section className="py-24 bg-off-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-14 items-start">
              <div className="lg:sticky lg:top-28">
                <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-4">{c.geo.eyebrow}</p>
                <h2 className="text-3xl md:text-5xl leading-tight mb-6 flex flex-col">
                  <span className="font-serif italic text-dark-charcoal/60 text-2xl md:text-3xl mb-2">{c.geo.serif}</span>
                  <span className="font-sans font-bold text-dark-charcoal uppercase tracking-wider">{c.geo.bold}</span>
                </h2>
                <p className="text-gray-600 leading-relaxed">{c.geo.intro}</p>
              </div>

              <div className="space-y-5">
                <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
                  {c.geo.rows.map((row, i)=>(
                    <div key={i} className="grid grid-cols-1 md:grid-cols-[0.35fr_0.65fr] border-b border-gray-100 last:border-b-0">
                      <div className="bg-dark-charcoal text-white px-6 py-5 text-xs font-bold uppercase tracking-wider">{row[0]}</div>
                      <div className="px-6 py-5 text-sm text-gray-600 leading-relaxed">{row[1]}</div>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-gold/30 bg-gold/10 p-7">
                  <p className="text-gray-700 text-sm leading-relaxed font-medium">{c.geo.quote}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <Link to="/insights/commercial-renovation-cost-singapore" className="rounded-2xl border border-gray-100 bg-white p-5 text-xs font-bold uppercase tracking-wider text-dark-charcoal hover:border-gold/40 transition-colors">
                    {c.geo.cta1}
                  </Link>
                  <Link to="/insights/office-renovation-timeline-singapore" className="rounded-2xl border border-gray-100 bg-white p-5 text-xs font-bold uppercase tracking-wider text-dark-charcoal hover:border-gold/40 transition-colors">
                    {c.geo.cta2}
                  </Link>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-gold p-5 text-xs font-bold uppercase tracking-wider text-dark-charcoal hover:bg-gold-hover transition-colors">
                    {c.geo.cta3}
                  </a>
                </div>
              </div>
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
