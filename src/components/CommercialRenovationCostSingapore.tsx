import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  AlertTriangle,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Droplets,
  Fan,
  FileCheck2,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';

const ARTICLE_KEY = 'article_commercial_renovation_cost';
const KEYS_3 = ['1', '2', '3'];
const KEYS_4 = ['1', '2', '3', '4'];
const KEYS_5 = ['1', '2', '3', '4', '5'];
const KEYS_8 = ['1', '2', '3', '4', '5', '6', '7', '8'];
const KEYS_15 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];
const COST_KEYS = ['office', 'retail', 'fnb', 'industrial'];

const mistakeIcons = [
  <Fan className="h-5 w-5" />,
  <Droplets className="h-5 w-5" />,
  <FileCheck2 className="h-5 w-5" />,
  <AlertTriangle className="h-5 w-5" />,
  <Building2 className="h-5 w-5" />,
];

const articleContent = {
  en: {
  meta: {
    title: "Commercial Renovation Cost Singapore (2026 Guide) | ID Work Studio",
    description: "Commercial renovation cost Singapore guide by ID Work Studio. Real contractor pricing for office, retail, F&B, MCST permits, compliance, aircon, water supply and hidden renovation costs."
  },
  hero_badge: "Commercial Cost Guide",
  title: "Commercial Renovation Cost Singapore (2026 Guide)",
  subtitle: "Real contractor pricing, approval requirements and hidden cost risks for office, retail, F&B and commercial renovation projects in Singapore.",
  read_time: "10 min read",
  bca_label: "BCA-Registered Firm",
  quick_title: "Commercial renovation cost in Singapore: quick answer",
  quick_p1: "Based on real commercial renovation work in Singapore, most office renovations fall between <strong>$80 to $150 per sqft</strong> for a standard fit-out. Retail renovation is usually higher, and F&B renovation can be significantly more expensive because of exhaust, plumbing, fire safety and kitchen requirements.",
  quick_p2: "For example, a 1,200 sqft office may realistically cost <strong>$100,000 to $180,000</strong>. A 2,000 sqft office with glass meeting rooms, reception carpentry, data points and upgraded lighting can reach <strong>$180,000 to $300,000</strong>.",
  cost_summary: {
    office: { title: "Office renovation", range: "$80 – $150 psf", note: "Most standard SME office fit-outs with partition, electrical, flooring and basic carpentry." },
    retail: { title: "Retail renovation", range: "$120 – $300 psf", note: "Usually higher when shopfront, display carpentry, lighting and mall requirements are involved." },
    fnb: { title: "F&B renovation", range: "$200 – $500+ psf", note: "Higher-risk projects due to exhaust, grease trap, plumbing, fire safety and kitchen requirements." },
    industrial: { title: "Industrial / light commercial", range: "$80 – $250+ psf", note: "Depends heavily on power loading, office-to-warehouse ratio, approvals and M&E works." }
  },
  insight_title: "Contractor insight",
  insight_text: "Most commercial renovation cost overruns do not come from design. They usually come from compliance issues, aircon limitations, electrical loading, water and drainage problems, or late changes after submission.",
  office_title: "Office renovation cost Singapore",
  office_intro: "Most SME offices in Singapore fall between 1,000 to 3,000 sqft. A basic open office setup may stay below $100 psf, but once glass rooms, meeting rooms, reception carpentry, pantry, lighting design and data points are included, the cost commonly moves closer to $120 to $180 psf.",
  office_note: "CBD offices in areas such as Raffles Place, Marina Bay and Tanjong Pagar can be 15% to 25% higher because of stricter loading bay timing, lift protection, security clearance, night-work requirements and building management rules.",
  office_table_headers: { level: "Level", cost: "Cost", scope: "Typical scope" },
  office_rows: {
    "1": ["Basic office fit-out", "$80 – $100 psf", "Open office, basic partition, vinyl or carpet, simple lighting and power points."],
    "2": ["Standard office fit-out", "$100 – $180 psf", "Meeting rooms, glass partition, reception counter, feature wall, data points and improved lighting."],
    "3": ["Premium office fit-out", "$180 – $300 psf", "Higher-end finishes, acoustic rooms, customised carpentry, smart office features and heavier M&E coordination."]
  },
  breakdown_title: "Itemised commercial renovation cost breakdown",
  breakdown_intro: "A proper commercial renovation quote should not only show a total price. It should separate construction, M&E, carpentry, approval-related items and exclusions so the tenant can compare scope properly.",
  breakdown_headers: { item: "Item", cost: "Typical cost", note: "Contractor note" },
  breakdown_rows: {
    "1": ["Partition / drywall", "$8 – $15 psf", "Depends on height, board type and fire-rated requirements."],
    "2": ["Glass partition", "$18 – $35 psf", "Frameless or framed glass, door hardware and acoustic needs affect cost."],
    "3": ["Electrical point", "$60 – $120 per point", "Higher if concealed routing or night work is required."],
    "4": ["Data / TV point", "$120 – $180 per point", "Important for office workstations, meeting rooms and server areas."],
    "5": ["Vinyl flooring", "$5 – $8 psf", "Common for offices because it is fast and cost-effective."],
    "6": ["Carpet tiles", "$6 – $12 psf", "Often used in offices for acoustic comfort and easy replacement."],
    "7": ["Custom carpentry", "$300 – $1,200 per ft", "Reception counters, pantry cabinets, display walls and storage."],
    "8": ["Aircon works", "$8,000 – $30,000+", "Depends on existing provision, after-hours needs and whether separate systems are required."]
  },
  retail_fnb_title: "Retail and F&B renovation cost in Singapore",
  retail_fnb_intro: "Retail renovation cost depends heavily on shopfront design, display carpentry, lighting intensity, mall guidelines and landlord requirements. F&B renovation is usually the most expensive because the project is not just interior works — it also involves mechanical systems, fire safety, kitchen workflow and plumbing.",
  retail_card_title: "Retail renovation",
  retail_items: { "1": "Basic retail: $120 – $180 psf", "2": "Mall fit-out: $180 – $300 psf", "3": "High-end retail: $300+ psf" },
  fnb_card_title: "F&B renovation",
  fnb_items: { "1": "Light F&B: $200 – $300 psf", "2": "Restaurant / kitchen-heavy: $300 – $500+ psf", "3": "Exhaust rectification: $10,000 – $30,000+" },
  lease_warning_title: "Important before signing lease",
  lease_warning_text: "For F&B, always check exhaust routing, grease trap, water supply, drainage, electrical loading and SCDF-related constraints before committing to the unit. If the unit cannot support the business use, renovation cost can increase sharply or approval may not be granted.",
  permits_title: "Permits, MCST approval and compliance",
  permits_intro: "In Singapore, commercial renovation cannot start just because the lease is signed. For most offices, retail shops, industrial units and mall units, the contractor must submit documents to MCST, landlord or building management before the permit to work is approved.",
  permit_reasons_title: "Common reasons permits get delayed",
  permit_reasons: {
    "1": "Drawings are incomplete or not aligned with building requirements.",
    "2": "Method statements, work schedule or insurance documents are missing.",
    "3": "Works affect sprinklers, fire alarm, ceiling, common areas or loading routes.",
    "4": "Contractor details or safety documents do not meet management requirements."
  },
  permits_link_text_before: "For a deeper explanation, read our guide on",
  permits_link: "commercial renovation permits and compliance in Singapore",
  permits_link_text_after: "This is important because without MCST or management approval, renovation cannot legally start and the project schedule may be pushed back.",
  timeline_title: "Commercial renovation timeline in Singapore",
  timeline: {
    "1": { title: "Site check, lease review and feasibility", duration: "1–2 weeks", text: "Before confirming the renovation budget, check aircon provision, water inlet, drainage, electrical loading, exhaust feasibility and building house rules." },
    "2": { title: "Space planning and quotation", duration: "2–4 weeks", text: "Layout, scope, materials and budget should be aligned before submission. Too many decision makers at this stage can delay the whole project." },
    "3": { title: "MCST / landlord / authority approval", duration: "2–6 weeks", text: "Building management may require drawings, method statement, work schedule, contractor documents, insurance and deposit before issuing permit to work." },
    "4": { title: "Renovation and fit-out works", duration: "3–10+ weeks", text: "Office renovation can be faster. Retail and F&B usually take longer due to M&E, fire safety, plumbing, exhaust and landlord inspection requirements." }
  },
  mistakes_title: "Real mistakes that increase commercial renovation cost",
  mistakes: {
    "1": { title: "Not checking the aircon system before taking over the unit", text: "Some Singapore office buildings use centralised aircon controlled by the building. The aircon may stop around 6pm. If the tenant needs to work late, a separate cooling solution may be required. This can add roughly $8,000 to $30,000 or more depending on the unit." },
    "2": { title: "Choosing a unit without water supply or drainage", text: "A unit may look suitable based on size, but some businesses need water inlet and discharge points. Beauty, nail, facial, clinic, cleaning and F&B users must check this early. If there is no proper outlet, a pump system may be needed and can add $3,000 to $10,000+." },
    "3": { title: "Ignoring MCST or building management permit requirements", text: "Commercial renovation cannot start just because the lease is signed. If drawings, method statements, insurance or contractor documents are incomplete, the permit to work may be rejected. This can delay the project by 1 to 4 weeks or more." },
    "4": { title: "Reinstatement miscommunication before takeover", text: "In one real case, an incoming tenant asked through the property agent for the landlord not to reinstate the unit. The message was not passed properly. The unit was reinstated to bare shell, the aircon was removed, and the tenant had to spend about $30,000 to reinstall aircon." },
    "5": { title: "Too many people making decisions", text: "When several owners, partners or managers need to approve every layout and material decision, renovation can stall. Late changes affect quotation, submission drawings, material lead time and site schedule." }
  },
  reinstatement_title: "Reinstatement cost Singapore",
  reinstatement_intro: "Reinstatement is the cost of returning the commercial unit to the landlord’s required handover condition at the end of lease. Many tenants forget to budget for this when they first sign the lease.",
  reinstatement_headers: { level: "Reinstatement level", cost: "Cost range", works: "Typical works" },
  reinstatement_rows: {
    "1": ["Basic", "$10 – $20 psf", "Loose items, simple partition, minor making good."],
    "2": ["Standard", "$20 – $30 psf", "Flooring, ceiling, partition, electrical and general removal."],
    "3": ["Complex", "$30 – $40+ psf", "Aircon, M&E, heavy carpentry, F&B systems or strict landlord requirements."]
  },
  reinstatement_p: "For proper planning, start reinstatement budgeting at least 3 to 4 months before lease expiry. You can also review our",
  reinstatement_link: "commercial reinstatement service",
  related_label: "Related Guides",
  related_title: "Continue Your Renovation Planning",
  related_office_cost: "<officeCostLink>Office Renovation Cost Singapore (2026 Guide)</officeCostLink>",
  related_office_timeline: "<officeTimelineLink>Office Renovation Timeline Singapore: How Long an Office Fit-Out Really Takes</officeTimelineLink>",
  faq_title: "Commercial renovation FAQ",
  faqs: {
    "1": { q: "How much does commercial renovation cost in Singapore?", a: "A standard office renovation usually costs around $80 to $150 psf. Retail renovation often ranges from $120 to $300 psf. F&B renovation can reach $200 to $500+ psf because of exhaust, plumbing, grease trap, kitchen and fire safety requirements." },
    "2": { q: "How much does a 1,200 sqft office renovation cost?", a: "A practical budget for a 1,200 sqft office is usually around $100,000 to $180,000 for a standard fit-out with partition, flooring, electrical works, meeting rooms, basic carpentry and lighting." },
    "3": { q: "Why is F&B renovation more expensive than office renovation?", a: "F&B renovation requires heavier M&E works such as exhaust ducting, grease trap, plumbing, waterproofing, kitchen setup and fire safety coordination. These systems can easily add $20,000 to $60,000+ before finishes are even considered." },
    "4": { q: "Do I need approval before starting commercial renovation?", a: "Yes. Most commercial projects require building management, MCST or landlord approval before work starts. Depending on scope, BCA, SCDF, PE, QP or other professional submissions may also be required." },
    "5": { q: "What happens if MCST or building management rejects the permit?", a: "Work cannot start until the submission is accepted. Rejection is usually caused by incomplete drawings, missing method statements, missing insurance, wrong contractor documents, or works that do not follow building rules." },
    "6": { q: "Can I skip SCDF submission for simple renovation?", a: "Possibly, but only if the works are purely cosmetic and do not affect fire safety systems. If the renovation changes partitions, ceilings, sprinkler layout, fire alarm, exit routes or fire-rated elements, SCDF-related submission may be required." },
    "7": { q: "How long does commercial renovation take?", a: "A typical office fit-out may take 3 to 6 weeks after approval. Retail and F&B renovation often take 6 to 10 weeks or more because of M&E, plumbing, exhaust, fire safety and landlord inspection requirements." },
    "8": { q: "What is the biggest hidden cost in commercial renovation?", a: "The biggest hidden costs are usually aircon, exhaust, drainage, electrical loading, fire safety, reinstatement and compliance-related works. These are often missed when tenants only compare design finishes." },
    "9": { q: "Do all commercial units have aircon after office hours?", a: "No. Some buildings use centralised aircon controlled by building management, and it may stop around 6pm. Tenants who need evening operations should check after-hours aircon charges or budget for separate cooling systems." },
    "10": { q: "What if my unit has no water inlet or drainage outlet?", a: "You may need plumbing rerouting or a pump system. This is especially important for F&B, clinics, beauty salons, nail salons, facial rooms and cleaning-related businesses. The added cost can be several thousand dollars." },
    "11": { q: "Can I take over existing renovation to save cost?", a: "Yes, but the takeover condition must be confirmed clearly in writing with the landlord. Do not rely only on verbal communication through an agent. If reinstatement happens before takeover, useful systems such as aircon, partition and wiring may be removed." },
    "12": { q: "What is commercial reinstatement cost in Singapore?", a: "Commercial reinstatement commonly ranges from $10 to $40+ psf depending on the unit size, ceiling, flooring, partition, M&E removal, aircon removal and landlord requirements." },
    "13": { q: "Can commercial renovation be done after office hours?", a: "It depends on building rules. Some buildings restrict noisy works, loading bay use and lift access. Night work may need separate approval and can increase labour cost by 15% to 25%." },
    "14": { q: "What documents are usually needed for commercial renovation approval?", a: "Common documents include layout drawings, reflected ceiling plans, M&E drawings, method statement, work schedule, contractor details, public liability insurance and sometimes PE/QP endorsement depending on the scope." },
    "15": { q: "How can I reduce commercial renovation cost?", a: "Keep existing aircon and M&E where possible, avoid unnecessary hacking, finalise decisions early, check utilities before signing the lease, and compare quotation scope instead of only comparing total price." }
  },
  cta_title: "Get a realistic commercial renovation quote",
  cta_text: "WhatsApp us your floor plan, unit condition and business type. We will advise on estimated cost range, approval requirements, feasibility issues and possible hidden costs before renovation starts.",
  cta_whatsapp: "WhatsApp Floor Plan",
  cta_calculator: "Use Cost Calculator",
  cta_services: "View Commercial Services"
},
  zh: {
  meta: {
    title: "新加坡商业翻新费用（2026 指南）| ID Work Studio",
    description: "ID Work Studio 新加坡商业翻新费用指南，以真实承包商角度说明办公室、零售、餐饮、MCST许可证、合规、空调、供水排水与隐藏成本。"
  },
  hero_badge: "商业费用指南",
  title: "新加坡商业翻新费用（2026 指南）",
  subtitle: "以承包商角度说明新加坡办公室、零售、餐饮与商业空间翻新的真实费用、审批要求与隐藏成本风险。",
  read_time: "约 10 分钟",
  bca_label: "BCA 注册公司",
  quick_title: "新加坡商业翻新费用：直接答案",
  quick_p1: "根据新加坡实际商业翻新项目经验，标准办公室装修多数落在 <strong>每平方英尺 $80 至 $150</strong>。零售空间通常更高，餐饮空间则因排烟、给排水、消防安全与厨房需求而明显更贵。",
  quick_p2: "举例来说，一个 1,200 平方英尺办公室，合理预算通常约 <strong>$100,000 至 $180,000</strong>。若是 2,000 平方英尺办公室，并包含玻璃会议室、接待区木工、网络点位与升级灯光，费用可达 <strong>$180,000 至 $300,000</strong>。",
  cost_summary: {
    office: { title: "办公室翻新", range: "$80 – $150 psf", note: "适用于多数标准中小型办公室，包括隔墙、电工、地板与基础木工。" },
    retail: { title: "零售店翻新", range: "$120 – $300 psf", note: "若涉及店面门头、展示木工、灯光与商场要求，费用通常更高。" },
    fnb: { title: "餐饮翻新", range: "$200 – $500+ psf", note: "因排烟、隔油池、给排水、消防安全与厨房需求，风险与费用较高。" },
    industrial: { title: "工业 / 轻商业空间", range: "$80 – $250+ psf", note: "费用受电力负荷、办公室与仓储比例、审批及机电工程影响很大。" }
  },
  insight_title: "承包商现场经验",
  insight_text: "商业翻新超支多数不是来自设计，而是来自合规问题、空调限制、电力负荷、供水排水问题，或提交后才临时更改设计。",
  office_title: "新加坡办公室翻新费用",
  office_intro: "新加坡多数中小型办公室面积约 1,000 至 3,000 平方英尺。基础开放式办公室可能低于 $100 psf，但一旦加入玻璃房、会议室、接待木工、茶水间、灯光设计与网络点位，费用通常会接近 $120 至 $180 psf。",
  office_note: "莱佛士坊、滨海湾、丹戎巴葛等 CBD 办公楼，费用可能高出 15% 至 25%，原因包括卸货时间限制、电梯保护、安保通行、夜间施工要求与大厦管理规定。",
  office_table_headers: { level: "等级", cost: "费用", scope: "常见范围" },
  office_rows: {
    "1": ["基础办公室装修", "$80 – $100 psf", "开放式办公室、基础隔墙、乙烯基地板或地毯、简单灯光与电源点。"],
    "2": ["标准办公室装修", "$100 – $180 psf", "会议室、玻璃隔墙、接待柜台、特色墙、网络点位与较好的灯光。"],
    "3": ["高端办公室装修", "$180 – $300 psf", "较高端饰面、隔音房、定制木工、智能办公功能与较复杂机电协调。"]
  },
  breakdown_title: "商业翻新费用明细",
  breakdown_intro: "一份合格的商业翻新报价不应只显示总价。它应把施工、机电、木工、审批相关项目与不包含项目分开列明，方便租户真正比较工程范围。",
  breakdown_headers: { item: "项目", cost: "常见费用", note: "承包商说明" },
  breakdown_rows: {
    "1": ["隔墙 / 石膏板", "$8 – $15 psf", "取决于高度、板材类型与是否需要防火等级。"],
    "2": ["玻璃隔墙", "$18 – $35 psf", "无框或有框玻璃、门五金与隔音需求都会影响费用。"],
    "3": ["电源点", "$60 – $120 / 点", "若需隐藏走线或夜间施工，费用会更高。"],
    "4": ["网络 / 电视点", "$120 – $180 / 点", "办公室工位、会议室与服务器区域尤其重要。"],
    "5": ["乙烯基地板", "$5 – $8 psf", "办公室常用，因为施工快且成本相对可控。"],
    "6": ["方块地毯", "$6 – $12 psf", "常用于办公室，可改善脚感与一定程度吸音。"],
    "7": ["定制木工", "$300 – $1,200 / ft", "接待柜台、茶水间柜、展示墙与储物柜。"],
    "8": ["空调工程", "$8,000 – $30,000+", "取决于现有条件、是否需加班使用及是否要另装系统。"]
  },
  retail_fnb_title: "新加坡零售与餐饮翻新费用",
  retail_fnb_intro: "零售翻新费用受店面设计、展示木工、灯光密度、商场指南与业主要求影响很大。餐饮翻新通常最贵，因为项目不只是室内装饰，还涉及机电系统、消防安全、厨房动线与给排水。",
  retail_card_title: "零售翻新",
  retail_items: { "1": "基础零售：$120 – $180 psf", "2": "商场装修：$180 – $300 psf", "3": "高端零售：$300+ psf" },
  fnb_card_title: "餐饮翻新",
  fnb_items: { "1": "轻餐饮：$200 – $300 psf", "2": "餐厅 / 重厨房：$300 – $500+ psf", "3": "排烟整改：$10,000 – $30,000+" },
  lease_warning_title: "签租约前必须确认",
  lease_warning_text: "餐饮单位一定要在签约前确认排烟路线、隔油池、供水、排水、电力负荷与 SCDF 相关限制。若单位无法支持该业态，翻新费用可能大幅增加，甚至无法获得批准。",
  permits_title: "许可证、MCST审批与合规",
  permits_intro: "在新加坡，商业翻新不是签了租约就能开工。多数办公室、零售店、工业单位与商场单位，都需要承包商先向 MCST、业主或大厦管理提交文件，并取得开工许可证。",
  permit_reasons_title: "许可证常见延误原因",
  permit_reasons: {
    "1": "图纸不完整，或不符合大厦管理要求。",
    "2": "缺少施工方法说明、工程时间表或保险文件。",
    "3": "工程影响洒水器、火警系统、天花、公共区域或卸货路线。",
    "4": "承包商资料或安全文件不符合管理处要求。"
  },
  permits_link_text_before: "如需更详细说明，可阅读我们的指南：",
  permits_link: "新加坡商业翻新许可证与合规指南",
  permits_link_text_after: "这很重要，因为若没有 MCST 或大厦管理批准，翻新无法合法开工，整体工期也会被推迟。",
  timeline_title: "新加坡商业翻新时间表",
  timeline: {
    "1": { title: "现场检查、租约审查与可行性确认", duration: "1–2 周", text: "确认预算前，应检查空调条件、供水、排水、电力负荷、排烟可行性与大厦装修规则。" },
    "2": { title: "空间规划与报价", duration: "2–4 周", text: "布局、工程范围、材料与预算应在提交前对齐。若决策者太多，这个阶段很容易拖慢整个项目。" },
    "3": { title: "MCST / 业主 / 相关部门审批", duration: "2–6 周", text: "大厦管理可能要求提交图纸、施工方法说明、工程时间表、承包商文件、保险与押金，才会发出开工许可。" },
    "4": { title: "翻新与装修工程", duration: "3–10+ 周", text: "办公室通常较快。零售与餐饮因机电、消防、给排水、排烟与业主验收要求，工期通常更长。" }
  },
  mistakes_title: "会增加商业翻新费用的真实错误",
  mistakes: {
    "1": { title: "接手单位前没有确认空调系统", text: "有些新加坡办公楼使用由大厦集中控制的中央空调，空调可能在下午 6 点左右停止。若租户需要晚上加班或营业，就可能需要另装冷气系统，费用大约 $8,000 至 $30,000 或更高。" },
    "2": { title: "选择没有供水或排水的单位", text: "一个单位从面积看可能合适，但部分生意需要进水与排水点。美容、美甲、面部护理、诊所、清洁相关业务与餐饮，都必须尽早确认。若没有合适排水口，可能需要安装泵系统，额外费用可达 $3,000 至 $10,000+。" },
    "3": { title: "忽略 MCST 或大厦管理开工许可证", text: "商业翻新不是签了租约就能开工。若图纸、施工方法说明、保险或承包商文件不完整，开工许可证可能被拒，项目可延误 1 至 4 周或更久。" },
    "4": { title: "接手前恢复原状沟通失误", text: "曾有真实案例：新租户通过地产经纪要求业主不要恢复原状，但信息没有正确传达。结果单位被恢复成空壳，空调也被拆除，租户之后花了约 $30,000 重新安装空调。" },
    "5": { title: "太多人参与决策", text: "当多个业主、合伙人或经理都要批准每一个布局与材料决定时，项目很容易停滞。后期更改会影响报价、提交图纸、材料订货与现场工期。" }
  },
  reinstatement_title: "新加坡商业单位恢复原状费用",
  reinstatement_intro: "恢复原状是指在租约结束时，把商业单位还原至业主要求交还状态的费用。很多租户在签租约初期会忘记把这笔费用纳入预算。",
  reinstatement_headers: { level: "恢复原状等级", cost: "费用范围", works: "常见工程" },
  reinstatement_rows: {
    "1": ["基础", "$10 – $20 psf", "拆除松散物品、简单隔墙及少量修补。"],
    "2": ["标准", "$20 – $30 psf", "地板、天花、隔墙、电工及一般拆除。"],
    "3": ["复杂", "$30 – $40+ psf", "空调、机电、重木工、餐饮系统或严格业主要求。"]
  },
  reinstatement_p: "为更稳妥规划，建议在租约到期前至少 3 至 4 个月开始预算恢复原状。您也可以查看我们的",
  reinstatement_link: "商业恢复原状服务",
  related_label: "相关文章",
  related_title: "继续规划您的商业翻新",
  related_office_cost: "<officeCostLink>新加坡办公室翻新费用（2026 指南）</officeCostLink>",
  related_office_timeline: "<officeTimelineLink>新加坡办公室翻新时间表：办公室装修实际需要多久</officeTimelineLink>",
  faq_title: "商业翻新常见问题",
  faqs: {
    "1": { q: "新加坡商业翻新费用是多少？", a: "标准办公室翻新通常约 $80 至 $150 psf。零售翻新常见为 $120 至 $300 psf。餐饮翻新可能达到 $200 至 $500+ psf，因为涉及排烟、给排水、隔油池、厨房与消防安全要求。" },
    "2": { q: "1,200 平方英尺办公室翻新大概要多少钱？", a: "一个 1,200 平方英尺办公室，若是标准装修，包括隔墙、地板、电工、会议室、基础木工与灯光，合理预算通常约 $100,000 至 $180,000。" },
    "3": { q: "为什么餐饮翻新比办公室翻新贵？", a: "餐饮翻新涉及更重的机电工程，如排烟管、隔油池、给排水、防水、厨房配置与消防安全协调。这些系统在还没计算饰面前，就可能增加 $20,000 至 $60,000+。" },
    "4": { q: "商业翻新开工前需要审批吗？", a: "需要。多数商业项目在开工前需要大厦管理、MCST 或业主批准。视工程范围而定，也可能需要 BCA、SCDF、PE、QP 或其他专业提交。" },
    "5": { q: "如果 MCST 或大厦管理拒批许可证会怎样？", a: "提交被接受前不能开工。常见拒批原因包括图纸不完整、缺少施工方法说明、缺少保险、承包商文件错误，或工程不符合大厦规定。" },
    "6": { q: "简单翻新可以不做 SCDF 提交吗？", a: "有可能，但只限纯装饰工程，且不影响消防安全系统。若工程涉及隔墙、天花、洒水器、火警、逃生路线或防火构件，就可能需要 SCDF 相关提交。" },
    "7": { q: "商业翻新需要多久？", a: "一般办公室装修在批准后约 3 至 6 周。零售与餐饮通常需要 6 至 10 周或更久，因为涉及机电、给排水、排烟、消防安全与业主验收。" },
    "8": { q: "商业翻新最大的隐藏成本是什么？", a: "最大隐藏成本通常是空调、排烟、排水、电力负荷、消防安全、恢复原状与合规相关工程。很多租户只比较设计饰面时会忽略这些项目。" },
    "9": { q: "所有商业单位晚上都有空调吗？", a: "没有。有些大厦采用中央空调，由大厦管理统一控制，可能约下午 6 点停止。需要晚上营业或加班的租户，应先确认加时空调费用，或预算另装冷气系统。" },
    "10": { q: "如果单位没有进水或排水口怎么办？", a: "可能需要重新规划水管或安装泵系统。餐饮、诊所、美容院、美甲店、面部护理室与清洁相关业务尤其要注意。额外费用可能达到数千元。" },
    "11": { q: "我可以接手原有装修来省钱吗？", a: "可以，但必须与业主以书面方式清楚确认接手条件。不要只依赖经纪口头传达。若在接手前已恢复原状，原本有用的空调、隔墙与线路都可能被拆除。" },
    "12": { q: "新加坡商业恢复原状费用是多少？", a: "商业恢复原状通常约 $10 至 $40+ psf，取决于单位面积、天花、地板、隔墙、机电拆除、空调拆除及业主要求。" },
    "13": { q: "商业翻新可以在办公时间后施工吗？", a: "要看大厦规定。有些大厦限制噪音工程、卸货与电梯使用。夜间施工可能需要额外批准，人工费用也可能提高 15% 至 25%。" },
    "14": { q: "商业翻新审批通常需要哪些文件？", a: "常见文件包括平面图、天花图、机电图、施工方法说明、工程时间表、承包商资料、公共责任保险，有些工程还可能需要 PE/QP 签署。" },
    "15": { q: "如何降低商业翻新费用？", a: "尽量保留现有空调与机电系统，避免不必要拆除，尽早定案设计，签租约前确认水电与排水条件，并比较报价范围而不是只看总价。" }
  },
  cta_title: "获取实际商业翻新报价",
  cta_text: "请通过 WhatsApp 发送您的平面图、单位现况与业务类型。我们会先协助判断预算范围、审批要求、可行性问题与潜在隐藏成本。",
  cta_whatsapp: "WhatsApp 发送平面图",
  cta_calculator: "使用费用计算器",
  cta_services: "查看商业服务"
},
};

const renderStrongHtml = (html: string) => (
  <span dangerouslySetInnerHTML={{ __html: html }} />
);

const extractTaggedText = (value: string, tag: string) =>
  value.replace(new RegExp(`<${tag}>(.*?)</${tag}>`, 's'), '$1');

export default function CommercialRenovationCostSingapore() {
  const { i18n } = useTranslation();
  const lang = i18n.language === 'zh' ? 'zh' : 'en';
  const article = articleContent[lang];

  const t = (key: string, _options?: unknown): any => {
    const localKey = key.startsWith(`${ARTICLE_KEY}.`) ? key.slice(ARTICLE_KEY.length + 1) : key;
    return localKey.split('.').reduce<any>((value, segment) => value?.[segment], article);
  };

  const getArray = (key: string) => t(key, { returnObjects: true }) as string[];
  const getFaq = (key: string) =>
    t(`${ARTICLE_KEY}.faqs.${key}`, { returnObjects: true }) as { q: string; a: string };

  const faqs = KEYS_15.map((key) => getFaq(key));

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://idworkstudio.com/insights/commercial-renovation-cost-singapore#article',
        headline: t(`${ARTICLE_KEY}.title`),
        description: t(`${ARTICLE_KEY}.meta.description`),
        author: {
          '@type': 'Organization',
          name: 'ID Work Studio',
          url: 'https://idworkstudio.com/',
        },
        publisher: {
          '@type': 'Organization',
          name: 'ID Work Studio',
          url: 'https://idworkstudio.com/',
          logo: {
            '@type': 'ImageObject',
            url: 'https://idworkstudio.com/og-preview.jpg',
          },
        },
        datePublished: '2026-05-03',
        dateModified: '2026-05-03',
        mainEntityOfPage: 'https://idworkstudio.com/insights/commercial-renovation-cost-singapore',
        about: [
          'commercial renovation Singapore',
          'office renovation cost Singapore',
          'retail renovation Singapore',
          'F&B renovation Singapore',
          'MCST renovation permit Singapore',
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://idworkstudio.com/insights/commercial-renovation-cost-singapore#faq',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://idworkstudio.com/insights/commercial-renovation-cost-singapore#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://idworkstudio.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Insights',
            item: 'https://idworkstudio.com/insights',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: t(`${ARTICLE_KEY}.title`),
            item: 'https://idworkstudio.com/insights/commercial-renovation-cost-singapore',
          },
        ],
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Commercial Renovation Cost Singapore (2026 Guide) | ID Work Studio</title>
        <meta name="description" content="Real contractor pricing, approval requirements and hidden cost risks for office, retail, F&B and commercial renovation projects in Singapore." />
        <meta
          name="keywords"
          content="commercial renovation cost Singapore, office renovation cost Singapore, retail renovation Singapore, F&B renovation cost Singapore, MCST permit to work Singapore, commercial fit out Singapore"
        />
        <link
          rel="canonical"
          href="https://idworkstudio.com/insights/commercial-renovation-cost-singapore"
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Commercial Renovation Cost Singapore (2026 Guide) | ID Work Studio" />
        <meta property="og:description" content="Real contractor pricing, approval requirements and hidden cost risks for office, retail, F&B and commercial renovation projects in Singapore." />
        <meta
          property="og:url"
          content="https://idworkstudio.com/insights/commercial-renovation-cost-singapore"
        />
        <meta property="og:image" content="https://idworkstudio.com/og-preview.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <div className="bg-off-white min-h-screen selection:bg-gold selection:text-dark-charcoal">
        <section className="relative min-h-[72vh] flex items-center justify-center overflow-hidden bg-black pt-28 md:pt-32 pb-20 text-white">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/insights-hero.jpg"
              alt="Commercial renovation cost planning in Singapore office"
              className="w-full h-full object-cover object-center opacity-50 scale-105"
              fetchPriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
            <span className="inline-block py-1 px-4 border border-champagne text-champagne rounded-full text-xs uppercase tracking-[0.25em] mb-5">
              {t(`${ARTICLE_KEY}.hero_badge`)}
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif mb-6 uppercase tracking-tight leading-tight">
              {t(`${ARTICLE_KEY}.title`)}
            </h1>

            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed font-light">
              {t(`${ARTICLE_KEY}.subtitle`)}
            </p>

            <div className="flex items-center justify-center gap-6 mt-8 text-xs uppercase tracking-[0.2em] text-gray-300 font-bold flex-wrap">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                2026 Guide
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 className="w-4 h-4" />
                {t(`${ARTICLE_KEY}.read_time`)}
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                {t(`${ARTICLE_KEY}.bca_label`)}
              </span>
            </div>
          </div>
        </section>

        <section className="py-8 border-b bg-white border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-charcoal hover:text-gold text-xs uppercase tracking-[0.22em] font-bold transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Insights
            </Link>
          </div>
        </section>

        <article className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-5 pb-4 border-b border-gray-200">
                {t(`${ARTICLE_KEY}.quick_title`)}
              </h2>

              <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85] mb-5">
                {renderStrongHtml(t(`${ARTICLE_KEY}.quick_p1`) as string)}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                {COST_KEYS.map((key) => (
                  <div
                    key={key}
                    className="rounded-2xl border border-gray-200 bg-[#fffdf8] p-6 shadow-sm"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-500 mb-2">
                      {t(`${ARTICLE_KEY}.cost_summary.${key}.title`)}
                    </p>
                    <p className="text-2xl font-serif font-semibold text-charcoal mb-3">
                      {t(`${ARTICLE_KEY}.cost_summary.${key}.range`)}
                    </p>
                    <p className="text-sm leading-7 text-gray-600 mb-0">
                      {t(`${ARTICLE_KEY}.cost_summary.${key}.note`)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border-l-4 border-gold bg-[#fbf6ec] p-6 my-8">
                <p className="text-charcoal font-bold mb-2">{t(`${ARTICLE_KEY}.insight_title`)}</p>
                <p className="text-gray-700 leading-8 mb-0">
                  {t(`${ARTICLE_KEY}.insight_text`)}
                </p>
              </div>

              <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85]">
                {renderStrongHtml(t(`${ARTICLE_KEY}.quick_p2`) as string)}
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-5 pb-4 border-b border-gray-200">
                {t(`${ARTICLE_KEY}.office_title`)}
              </h2>

              <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85] mb-6">
                {t(`${ARTICLE_KEY}.office_intro`)}
              </p>

              <div className="overflow-hidden rounded-2xl border border-gray-200 mb-8">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-[#f4eee4]">
                    <tr>
                      <th className="p-4 text-xs uppercase tracking-[0.16em] text-charcoal">
                        {t(`${ARTICLE_KEY}.office_table_headers.level`)}
                      </th>
                      <th className="p-4 text-xs uppercase tracking-[0.16em] text-charcoal">
                        {t(`${ARTICLE_KEY}.office_table_headers.cost`)}
                      </th>
                      <th className="p-4 text-xs uppercase tracking-[0.16em] text-charcoal">
                        {t(`${ARTICLE_KEY}.office_table_headers.scope`)}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {KEYS_3.map((key) => {
                      const row = getArray(`${ARTICLE_KEY}.office_rows.${key}`);
                      return (
                        <tr key={key} className="border-t border-gray-200">
                          <td className="p-4 align-top text-sm font-semibold text-charcoal">
                            {row[0]}
                          </td>
                          <td className="p-4 align-top text-sm text-gray-700">{row[1]}</td>
                          <td className="p-4 align-top text-sm leading-7 text-gray-600">
                            {row[2]}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="rounded-2xl border-l-4 border-gold bg-[#fbf6ec] p-6">
                <p className="text-gray-700 leading-8 mb-0">{t(`${ARTICLE_KEY}.office_note`)}</p>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-5 pb-4 border-b border-gray-200">
                {t(`${ARTICLE_KEY}.breakdown_title`)}
              </h2>

              <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85] mb-6">
                {t(`${ARTICLE_KEY}.breakdown_intro`)}
              </p>

              <div className="overflow-hidden rounded-2xl border border-gray-200">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-[#f4eee4]">
                    <tr>
                      <th className="p-4 text-xs uppercase tracking-[0.16em] text-charcoal">
                        {t(`${ARTICLE_KEY}.breakdown_headers.item`)}
                      </th>
                      <th className="p-4 text-xs uppercase tracking-[0.16em] text-charcoal">
                        {t(`${ARTICLE_KEY}.breakdown_headers.cost`)}
                      </th>
                      <th className="p-4 text-xs uppercase tracking-[0.16em] text-charcoal">
                        {t(`${ARTICLE_KEY}.breakdown_headers.note`)}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {KEYS_8.map((key) => {
                      const row = getArray(`${ARTICLE_KEY}.breakdown_rows.${key}`);
                      return (
                        <tr key={key} className="border-t border-gray-200">
                          <td className="p-4 align-top text-sm font-semibold text-charcoal">
                            {row[0]}
                          </td>
                          <td className="p-4 align-top text-sm text-gray-700">{row[1]}</td>
                          <td className="p-4 align-top text-sm leading-7 text-gray-600">
                            {row[2]}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-5 pb-4 border-b border-gray-200">
                {t(`${ARTICLE_KEY}.retail_fnb_title`)}
              </h2>

              <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85] mb-5">
                {t(`${ARTICLE_KEY}.retail_fnb_intro`)}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
                <div className="rounded-2xl border border-gray-200 bg-[#fffdf8] p-6">
                  <h3 className="font-serif text-xl text-charcoal mb-3">
                    {t(`${ARTICLE_KEY}.retail_card_title`)}
                  </h3>
                  <ul className="space-y-3 text-gray-600 text-sm leading-7">
                    {KEYS_3.map((key) => (
                      <li key={key}>{t(`${ARTICLE_KEY}.retail_items.${key}`)}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-[#fffdf8] p-6">
                  <h3 className="font-serif text-xl text-charcoal mb-3">
                    {t(`${ARTICLE_KEY}.fnb_card_title`)}
                  </h3>
                  <ul className="space-y-3 text-gray-600 text-sm leading-7">
                    {KEYS_3.map((key) => (
                      <li key={key}>{t(`${ARTICLE_KEY}.fnb_items.${key}`)}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl border-l-4 border-gold bg-[#fbf6ec] p-6">
                <p className="text-charcoal font-bold mb-2">
                  {t(`${ARTICLE_KEY}.lease_warning_title`)}
                </p>
                <p className="text-gray-700 leading-8 mb-0">
                  {t(`${ARTICLE_KEY}.lease_warning_text`)}
                </p>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-5 pb-4 border-b border-gray-200">
                {t(`${ARTICLE_KEY}.permits_title`)}
              </h2>

              <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85] mb-5">
                {t(`${ARTICLE_KEY}.permits_intro`)}
              </p>

              <div className="rounded-2xl border border-gray-200 bg-[#fffdf8] p-6 mb-8">
                <h3 className="font-serif text-xl text-charcoal mb-4">
                  {t(`${ARTICLE_KEY}.permit_reasons_title`)}
                </h3>
                <ul className="space-y-3 text-gray-600 leading-7">
                  {KEYS_4.map((key) => (
                    <li key={key} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                      {t(`${ARTICLE_KEY}.permit_reasons.${key}`)}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85]">
                {t(`${ARTICLE_KEY}.permits_link_text_before`)}{' '}
                <Link
                  to="/commercial/permits-compliance"
                  className="text-gold font-semibold underline underline-offset-4"
                >
                  {t(`${ARTICLE_KEY}.permits_link`)}
                </Link>
                . {t(`${ARTICLE_KEY}.permits_link_text_after`)}
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-5 pb-4 border-b border-gray-200">
                {t(`${ARTICLE_KEY}.timeline_title`)}
              </h2>

              <div className="space-y-4">
                {KEYS_4.map((key, index) => (
                  <div
                    key={key}
                    className="grid grid-cols-[46px_1fr] gap-4 rounded-2xl border border-gray-200 bg-[#fffdf8] p-5"
                  >
                    <div className="w-10 h-10 rounded-full bg-gold text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                        <h3 className="font-serif text-xl text-charcoal">
                          {t(`${ARTICLE_KEY}.timeline.${key}.title`)}
                        </h3>
                        <span className="text-xs uppercase tracking-[0.16em] text-gold font-bold">
                          {t(`${ARTICLE_KEY}.timeline.${key}.duration`)}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-7 mb-0">
                        {t(`${ARTICLE_KEY}.timeline.${key}.text`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-5 pb-4 border-b border-gray-200">
                {t(`${ARTICLE_KEY}.mistakes_title`)}
              </h2>

              <div className="space-y-5">
                {KEYS_5.map((key, index) => (
                  <div
                    key={key}
                    className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-full bg-[#fbf6ec] text-gold flex items-center justify-center flex-shrink-0">
                        {mistakeIcons[index]}
                      </div>
                      <div>
                        <h3 className="font-serif text-xl text-charcoal mb-3">
                          {t(`${ARTICLE_KEY}.mistakes.${key}.title`)}
                        </h3>
                        <p className="text-gray-600 leading-8 mb-0">
                          {t(`${ARTICLE_KEY}.mistakes.${key}.text`)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-5 pb-4 border-b border-gray-200">
                {t(`${ARTICLE_KEY}.reinstatement_title`)}
              </h2>

              <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85] mb-6">
                {t(`${ARTICLE_KEY}.reinstatement_intro`)}
              </p>

              <div className="overflow-hidden rounded-2xl border border-gray-200 mb-6">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-[#f4eee4]">
                    <tr>
                      <th className="p-4 text-xs uppercase tracking-[0.16em] text-charcoal">
                        {t(`${ARTICLE_KEY}.reinstatement_headers.level`)}
                      </th>
                      <th className="p-4 text-xs uppercase tracking-[0.16em] text-charcoal">
                        {t(`${ARTICLE_KEY}.reinstatement_headers.cost`)}
                      </th>
                      <th className="p-4 text-xs uppercase tracking-[0.16em] text-charcoal">
                        {t(`${ARTICLE_KEY}.reinstatement_headers.works`)}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {KEYS_3.map((key) => {
                      const row = getArray(`${ARTICLE_KEY}.reinstatement_rows.${key}`);
                      return (
                        <tr key={key} className="border-t border-gray-200">
                          <td className="p-4 text-sm font-semibold text-charcoal">{row[0]}</td>
                          <td className="p-4 text-sm text-gray-700">{row[1]}</td>
                          <td className="p-4 text-sm leading-7 text-gray-600">{row[2]}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <p className="text-gray-600 leading-8">
                {t(`${ARTICLE_KEY}.reinstatement_p`)}{' '}
                <Link
                  to="/commercial/reinstatement"
                  className="text-gold font-semibold underline underline-offset-4"
                >
                  {t(`${ARTICLE_KEY}.reinstatement_link`)}
                </Link>
                .
              </p>
            </section>

            <section className="mb-16 rounded-3xl border border-gray-200 bg-[#fffdf8] p-7 md:p-9 shadow-sm">
              <p className="text-xs uppercase tracking-[0.22em] text-gold font-bold mb-3">
                {t(`${ARTICLE_KEY}.related_label`)}
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-5">
                {t(`${ARTICLE_KEY}.related_title`)}
              </h2>
              <div className="space-y-5 text-gray-600 text-base md:text-[1.05rem] leading-[1.85]">
                <p>
                  <Link
                    to="/insights/office-renovation-cost-singapore"
                    className="text-charcoal font-semibold underline underline-offset-4 hover:text-gold transition-colors"
                  >
                    {extractTaggedText(t(`${ARTICLE_KEY}.related_office_cost`) as string, 'officeCostLink')}
                  </Link>
                </p>
                <p>
                  <Link
                    to="/insights/office-renovation-timeline-singapore"
                    className="text-charcoal font-semibold underline underline-offset-4 hover:text-gold transition-colors"
                  >
                    {extractTaggedText(t(`${ARTICLE_KEY}.related_office_timeline`) as string, 'officeTimelineLink')}
                  </Link>
                </p>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-5 pb-4 border-b border-gray-200">
                {t(`${ARTICLE_KEY}.faq_title`)}
              </h2>

              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <details
                    key={faq.q}
                    open={index === 0}
                    className="group rounded-2xl border border-gray-200 bg-[#fffdf8] p-5"
                  >
                    <summary className="cursor-pointer list-none font-semibold text-charcoal flex items-start justify-between gap-4">
                      <span>{faq.q}</span>
                      <span className="text-gold group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <p className="text-gray-600 leading-8 mt-4 mb-0">{faq.a}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="rounded-3xl bg-[#151515] text-white p-7 md:p-10">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center flex-shrink-0">
                  <ClipboardCheck className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-3">
                    {t(`${ARTICLE_KEY}.cta_title`)}
                  </h2>
                  <p className="text-gray-300 leading-8 mb-0">{t(`${ARTICLE_KEY}.cta_text`)}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-7">
                <a
                  href="https://wa.me/6598333085?text=Hi%20ID%20Work%20Studio%2C%20I%20would%20like%20to%20check%20commercial%20renovation%20cost%20for%20my%20unit."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white hover:bg-gold-hover transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  {t(`${ARTICLE_KEY}.cta_whatsapp`)}
                </a>

                <Link
                  to="/renovation-cost-calculator"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white hover:bg-white hover:text-charcoal transition-colors"
                >
                  {t(`${ARTICLE_KEY}.cta_calculator`)}
                </Link>

                <Link
                  to="/commercial"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white hover:bg-white hover:text-charcoal transition-colors"
                >
                  {t(`${ARTICLE_KEY}.cta_services`)}
                </Link>
              </div>
            </section>
          </div>
        </article>
      </div>
    </>
  );
}
