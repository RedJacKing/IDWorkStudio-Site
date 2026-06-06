import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

type ChecklistItem = {
  item: string;
  reason: string;
};

type DefectCategory = {
  title: string;
  intro: string;
  checks: string[];
  note?: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type ArticleContent = {
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  readTime: string;
  category: string;
  quickAnswerTitle: string;
  quickAnswer: string;
  heroBadges: string[];
  toolkitTitle: string;
  toolkitIntro: string;
  toolkit: ChecklistItem[];
  beforeStartTitle: string;
  beforeStart: string[];
  categoriesTitle: string;
  categoriesIntro: string;
  categories: DefectCategory[];
  districtCoolingTitle: string;
  districtCoolingIntro: string;
  districtCoolingChecks: ChecklistItem[];
  renovationSensitiveTitle: string;
  renovationSensitiveIntro: string;
  renovationSensitive: ChecklistItem[];
  interlinkTitle: string;
  interlinks: { text: string; to: string; label: string }[];
  pdfTitle: string;
  pdfText: string;
  pdfButton: string;
  faqTitle: string;
  faqs: FaqItem[];
  ctaTitle: string;
  ctaText: string;
  ctaPrimary: string;
  ctaSecondary: string;
  breadcrumbCurrent: string;
};

const pdfDownloadPath = "/hdb-defect-checklist.html";

const content: Record<"en" | "zh", ArticleContent> = {
  en: {
    metaTitle: "HDB Defect Checklist Before Renovation Singapore (2026 Guide) | ID Work Studio",
    metaDescription:
      "A practical HDB defect checklist for Singapore BTO and resale homeowners before renovation starts, including tools to bring, floor gradient, window water tests, Tengah district cooling checks and renovation-sensitive defects.",
    canonical: "https://idworkstudio.com/insights/hdb-defect-checklist-before-renovation-singapore",
    eyebrow: "Singapore HDB Renovation Guide",
    title: "HDB Defect Checklist Before Renovation Starts in Singapore",
    subtitle:
      "Inspect defects before renovation begins. Once hacking, carpentry or tiling starts, it becomes harder to prove whether a problem came from the original handover or from renovation work.",
    readTime: "13 min read",
    category: "HDB Planning Guide",
    quickAnswerTitle: "Quick answer",
    quickAnswer:
      "Before starting renovation, HDB owners should activate SP utilities, bring basic inspection tools, test water flow, check hollow tiles, inspect windows and doors, photograph meters, and document every defect clearly. BTO owners should do this before defect submission and before major renovation works begin.",
    heroBadges: ["BTO & Resale", "Before Renovation", "PDF Checklist"],
    toolkitTitle: "What tools should you bring for an HDB defect inspection?",
    toolkitIntro:
      "A defect inspection is easier when you bring the right tools. Do not rely only on eyesight. Some defects only appear when you tap tiles, test water flow, switch on power points or inspect darker corners with a torchlight.",
    toolkit: [
      { item: "Mobile phone with camera", reason: "Take clear photos and videos for defect submission." },
      { item: "Power bank", reason: "Inspection can take longer than expected, especially if you are recording videos." },
      { item: "Phone charger", reason: "Test every electrical power socket in the flat." },
      { item: "Torchlight", reason: "Check ceiling lines, pipe areas, window tracks, cabinet recesses and dark corners." },
      { item: "Painter's tape or Post-it notes", reason: "Mark each defect location so it is easy to find later." },
      { item: "Marker pen", reason: "Label tape clearly, for example: Toilet 2 floor ponding or Bedroom wall crack." },
      { item: "Metal rod, coin or screwdriver handle", reason: "Tap tiles gently to listen for hollow sounds." },
      { item: "Spirit level or laser level", reason: "Check wall alignment, floor level and areas where carpentry will be installed." },
      { item: "Measuring tape", reason: "Check dimensions, door gaps and basic layout measurements." },
      { item: "Small pail", reason: "Carry water for toilet, kitchen and service yard water-flow tests." },
      { item: "Spray bottle", reason: "Test window seals and frame joints for possible water seepage." },
      { item: "Marble or golf ball", reason: "Quickly detect obvious floor gradient issues, but use this together with water testing." },
      { item: "Tissue paper", reason: "Dab suspected leakage points to detect moisture more clearly." },
      { item: "Small mirror", reason: "Inspect under sink areas, pipe corners and hard-to-see spaces." },
      { item: "Notebook or printed checklist", reason: "Record location, defect type and action needed." },
      { item: "Floor plan", reason: "Mark defects by room so submission is clearer." },
      { item: "Extension cord", reason: "Useful when testing socket locations quickly." },
      { item: "Step ladder if safe", reason: "Optional for checking higher ceiling corners, access panels and top window areas." }
    ],
    beforeStartTitle: "Before you start: activate utilities and document meters",
    beforeStart: [
      "Apply for SP Services before the inspection whenever possible. Without electricity and water, you cannot properly test power sockets, switches, water pressure, toilet flushing, kitchen drainage or window water leakage.",
      "Photograph the electrical meter, water meter and gas meter if applicable. Record the meter numbers and readings before renovation starts.",
      "Take overview photos of every room before marking defects. These photos help separate original handover condition from future renovation works.",
      "Use painter's tape or Post-it notes at the exact defect location. Write a short label so the issue is not forgotten during submission or joint inspection.",
      "Create one folder in your phone for the unit inspection. Save photos by area such as living room, kitchen, toilet 1, toilet 2, bedrooms and service yard."
    ],
    categoriesTitle: "HDB defect checklist by area",
    categoriesIntro:
      "The checklist below focuses on defects that matter before renovation. Some items are cosmetic. Others can affect waterproofing, carpentry, electrical planning, floor levels and future renovation cost.",
    categories: [
      {
        title: "1. Flooring and tile defects",
        intro:
          "Flooring defects should be checked before carpentry and furniture block access. For wet areas, do not only check tile appearance; test how water moves.",
        checks: [
          "Tap tiles gently with a metal rod, coin or screwdriver handle to identify hollow sounds.",
          "Look for cracked, chipped, stained or uneven tiles.",
          "Check tile lippage where one tile edge sits higher than the next.",
          "Check tile shade and pattern consistency under daylight.",
          "Inspect grout lines for gaps, cracks, pinholes or uneven depth.",
          "For toilets, pour water in different areas and confirm water flows naturally to the floor trap.",
          "For the kitchen and service yard, test whether water flows towards the floor trap and does not pond around the sink or washing machine area."
        ],
        note:
          "Improper grout lines and poor floor gradient are renovation-sensitive defects. Once overlay, cabinets or shower screens are installed, rectification becomes harder."
      },
      {
        title: "2. Wall alignment, cracks and surface defects",
        intro:
          "Walls affect more than paint. Uneven walls can affect full-height wardrobes, kitchen cabinets, feature walls, quartz tops and glass partitions.",
        checks: [
          "Use a spirit level or laser level to check key walls where carpentry will be installed.",
          "Look for hairline cracks, wide cracks, uneven plaster and bubbling paint.",
          "Check wall corners for squareness, especially kitchen corners and wardrobe walls.",
          "Use torchlight from the side to reveal uneven plaster or waves in the wall surface.",
          "Photograph cracks with a nearby reference such as tape or ruler so the size is clear."
        ]
      },
      {
        title: "3. Ceiling defects",
        intro:
          "Ceiling defects are easy to miss because owners usually focus on the floor. Check before false ceiling or lighting works begin.",
        checks: [
          "Look for hairline cracks, joint lines, uneven ceiling patches and water stains.",
          "Check around toilet ceilings, window corners, aircon ledges and service yard areas.",
          "Use a torchlight to inspect high corners and darker areas.",
          "Check access panels, if any, for alignment, loose covers and damage."
        ]
      },
      {
        title: "4. Window, seal and water leakage checks",
        intro:
          "Singapore rain can expose window defects that are not obvious during a dry inspection. Check the window frame, track, seal and closing mechanism.",
        checks: [
          "Open and close every window panel. Check for smooth movement and proper locking.",
          "Inspect glass for scratches, cracks and chips.",
          "Check rubber seals and silicone sealant for gaps, cracks or loose areas.",
          "Use a spray bottle or light water spray around the frame, corners and joints to test for seepage.",
          "Use tissue paper on the inner frame after spraying to detect hidden moisture.",
          "Check window tracks for drainage blockage, debris or poor alignment."
        ],
        note:
          "Do not use high-pressure spraying. The aim is to simulate rain exposure safely without forcing water into areas unnaturally."
      },
      {
        title: "5. Toilet and bathroom defects",
        intro:
          "Toilet defects are among the most important checks because waterproofing, drainage and gradient problems can become expensive once renovation starts.",
        checks: [
          "Run all taps and shower points to test water pressure and drainage.",
          "Flush each toilet and check for slow flushing, leakage or running cistern water.",
          "Pour water across the floor and observe whether it flows to the floor trap.",
          "Check for ponding at corners, near the shower area and around the toilet bowl base.",
          "Inspect floor traps for cracks, smell, poor drainage or loose covers.",
          "Check grout lines on floor and wall tiles, especially around the shower zone and wall-floor junctions.",
          "Inspect basin, bottle trap, exposed pipes and joints for leakage.",
          "Check shower kerb level if the unit has one, and whether water can escape from the intended wet area."
        ]
      },
      {
        title: "6. Kitchen and service yard defects",
        intro:
          "Kitchen defects can affect future cabinet planning, worktop installation, sink location, hob position and washing machine area.",
        checks: [
          "Test water flow at the kitchen sink point and check drainage speed.",
          "Pour water near wet zones and confirm it flows to the floor trap where applicable.",
          "Inspect grout lines near the sink area and floor trap.",
          "Check gas pipe position, pipe condition and whether it conflicts with cabinet planning.",
          "Check wall alignment where bottom and top kitchen cabinets will be installed.",
          "Inspect service yard drainage, floor gradient and window or louvre operation.",
          "Check washing machine area for water point, discharge point and accessibility."
        ]
      },
      {
        title: "7. Main door, bedroom doors and HDB gate",
        intro:
          "Newer HDB flats often come with main door and gate. These should be inspected before renovation protection sheets, dust and site works make scratches harder to identify.",
        checks: [
          "Check main door for scratches, dents, chips and uneven gaps.",
          "Open and close the door several times to detect rubbing against the floor or frame.",
          "Test lockset, keys, handle and door closer if provided.",
          "Check the gate for alignment, lock function, paint defects, rust spots and welding defects.",
          "Inspect bedroom and toilet doors for frame alignment, scratches, swollen edges and smooth closing."
        ]
      },
      {
        title: "8. Electrical, data points and DB box",
        intro:
          "Electricity must be activated to do this properly. A simple phone charger can help test whether sockets are live.",
        checks: [
          "Use a phone charger to test every power socket.",
          "Test every light switch and provided lighting point where possible.",
          "Check data points and TV points visually for damage or missing covers.",
          "Open the DB box and check whether circuit labels are present and readable.",
          "Look for loose DB box covers, tripped breakers or missing labels.",
          "Test doorbell, exhaust fan points or water heater points where applicable."
        ]
      },
      {
        title: "9. Plumbing, water pressure and smell checks",
        intro:
          "Some plumbing defects only show when multiple outlets are used or when floor traps are inspected closely.",
        checks: [
          "Run taps at the kitchen and toilets to compare water pressure.",
          "Check under basins and exposed pipe joints for leaks after water runs for a while.",
          "Look for foul smell from floor traps or dry traps.",
          "Check toilet bowl base, basin area and service yard for slow seepage.",
          "Use tissue paper to confirm whether a suspected joint is actually wet."
        ]
      },
      {
        title: "10. Aircon ledge, balcony and exposed rain areas",
        intro:
          "External wall defects are difficult and unsafe for owners to inspect directly. The practical method is to inspect from inside the unit and observe during or after rain.",
        checks: [
          "Check internal walls facing outside for damp patches, bubbling paint, peeling paint or water stains.",
          "Inspect around window frames, balcony doors and external wall corners after heavy rain where possible.",
          "Check aircon ledge area visually for ponding, cracks or drainage issues from safe accessible areas only.",
          "For balcony areas, test sliding door operation, drainage, floor gradient and water ponding.",
          "Do not climb out or inspect unsafe external areas. Report suspected external seepage with internal photo evidence."
        ]
      },
      {
        title: "11. Structural warning signs",
        intro:
          "Most defects are minor, but some signs should be documented carefully and escalated instead of ignored.",
        checks: [
          "Photograph wide cracks, repeated cracks across multiple surfaces or unusual floor settlement.",
          "Look for concrete spalling, rust stains, damp patches or recurring seepage.",
          "Do not attempt to repair structural-looking defects yourself before reporting them.",
          "Mark the location clearly and include overview photos plus close-up photos."
        ]
      }
    ],
    districtCoolingTitle: "Special checks for Tengah and HDB projects with district cooling systems",
    districtCoolingIntro:
      "Some newer HDB projects, especially in Tengah, use a district cooling or central cooling system instead of a traditional outdoor condenser for each flat. This is relevant for homeowners in developments such as Plantation Grange, Plantation Edge, Plantation Village, Garden Court and Garden Vines. The inspection should include cooling performance, condensation, access panels and future renovation clearance.",
    districtCoolingChecks: [
      { item: "Fan coil visual condition", reason: "Check every indoor unit for dents, scratches, loose panels, missing covers and visible water stains." },
      { item: "Operation test", reason: "Turn on every unit and test fan speed, swing function, remote or wall controller, and error codes." },
      { item: "Cooling performance", reason: "Let the system run and compare whether rooms cool consistently without sudden shutdowns." },
      { item: "Condensation and dripping", reason: "Check ceiling, trunking, access panels and nearby walls for dampness or water dripping." },
      { item: "Chilled water pipe insulation", reason: "Look for damaged insulation, loose wrapping, corrosion marks or suspected leakage where visible." },
      { item: "Condensate drainage", reason: "Confirm no dripping sound, ponding or leakage near drainage areas." },
      { item: "Noise and vibration", reason: "Stand in each room and listen for rattling, vibration, grinding or high-pitched sounds." },
      { item: "Access panel clearance", reason: "Before false ceiling or carpentry design, ensure servicing access remains reachable." },
      { item: "Filter removal clearance", reason: "Do not design a ceiling, pelmet or built-in cabinet that blocks future filter servicing." }
    ],
    renovationSensitiveTitle: "Defects that can affect renovation cost later",
    renovationSensitiveIntro:
      "These defects should be highlighted before you confirm your renovation scope. They may affect hacking, carpentry, waterproofing, electrical planning, ceiling works or final quotation clarity.",
    renovationSensitive: [
      { item: "Poor toilet or kitchen floor gradient", reason: "May require rectification before overlay, waterproofing or shower screen work." },
      { item: "Window leakage or failed seals", reason: "Can damage carpentry, curtains, paint and vinyl flooring later." },
      { item: "Uneven wall or out-of-square corners", reason: "Can affect full-height carpentry, kitchen cabinets and worktop installation." },
      { item: "Cracked or missing grout", reason: "May allow water to enter below tiles and create future maintenance issues." },
      { item: "Electrical point or DB box issue", reason: "Should be resolved before electrical planning and renovation concealment works." },
      { item: "District cooling access blocked by design", reason: "Future servicing may require hacking if access panels or filters are covered." },
      { item: "Damp patches or seepage marks", reason: "May indicate water ingress that should be clarified before painting or carpentry." }
    ],
    interlinkTitle: "Related renovation planning guides",
    interlinks: [
      { text: "Complete defect rectification before locking in your renovation schedule.", to: "/insights/hdb-renovation-timeline-singapore", label: "Read the HDB renovation timeline guide" },
      { text: "Some defects can affect the final renovation budget if they are only discovered after works begin.", to: "/insights/renovation-cost-singapore-2026", label: "Compare renovation cost ranges" },
      { text: "When reviewing quotations, separate original defects from actual renovation works to avoid unclear scope disputes.", to: "/insights/renovation-quotation-singapore", label: "Learn how to compare renovation quotations" },
      { text: "If you are also planning furniture, appliances and move-in cashflow, use a full home budget view instead of looking at renovation alone.", to: "/total-home-budget-calculator", label: "Use the Total Home Budget Calculator" }
    ],
    pdfTitle: "Download the HDB defect inspection checklist",
    pdfText:
      "Use the printable checklist during key collection or before your renovation starts. It includes the inspection toolkit, room-by-room checks, meter documentation and renovation-sensitive defect notes.",
    pdfButton: "Download Free HDB Defect Checklist (PDF)",
    faqTitle: "HDB defect inspection FAQ",
    faqs: [
      { question: "Should I inspect HDB defects before renovation starts?", answer: "Yes. Inspect and document defects before renovation starts so it is clearer whether the issue came from the original handover condition or from renovation work." },
      { question: "Do I need to activate SP Services before inspection?", answer: "It is strongly recommended. Without electricity and water, you cannot properly test sockets, switches, water pressure, toilet flushing, drainage and window water checks." },
      { question: "What tool should I use to check hollow tiles?", answer: "Use a metal rod, coin or screwdriver handle and tap gently. Hollow tiles often sound different from solid tiles. Mark and photograph the location clearly." },
      { question: "How do I check toilet floor gradient?", answer: "Pour water at different areas of the toilet floor and observe whether water flows naturally to the floor trap. Ponding or water flowing away from the trap should be documented." },
      { question: "Should I check kitchen floor drainage too?", answer: "Yes. Kitchens and service yards can have wet zones near the sink, washing machine and floor trap. Poor drainage can affect future usage and renovation planning." },
      { question: "How do I test window leakage?", answer: "Inspect seals and silicone first, then use a spray bottle or light water spray around frame joints. Use tissue paper inside the frame to detect moisture. Do not use high-pressure water." },
      { question: "Why should I photograph water and electrical meters?", answer: "Meter photos help record the starting condition and usage before renovation begins. They may also help detect unusual water or electricity consumption later." },
      { question: "What should Tengah BTO owners check for district cooling?", answer: "Check fan coil operation, cooling performance, condensation, water dripping, access panels, noise, controller function and whether future false ceiling or carpentry will block servicing access." },
      { question: "Can renovation affect defect claims?", answer: "It can make responsibility harder to prove if original conditions are altered. Major works should ideally start after key defects are documented and submitted." },
      { question: "Should I hire a professional defect inspector?", answer: "For homeowners who are unsure, a professional defect inspector can be useful. However, a structured checklist still helps owners understand what matters before meeting their contractor." }
    ],
    ctaTitle: "Planning renovation after key collection?",
    ctaText:
      "ID Work Studio helps Singapore homeowners plan renovation with practical site advice, clear scope separation and realistic budgeting after defects are reviewed.",
    ctaPrimary: "WhatsApp Us",
    ctaSecondary: "View Residential Services",
    breadcrumbCurrent: "HDB Defect Checklist"
  },
  zh: {
    metaTitle: "新加坡 HDB 验屋缺陷清单：装修前必须检查什么（2026指南） | ID Work Studio",
    metaDescription:
      "新加坡 BTO、转售组屋装修前的 HDB 验屋缺陷清单，涵盖工具准备、地面斜水、窗户防水测试、Tengah 集中冷气系统、门与铁门、电表水表记录等重点。",
    canonical: "https://idworkstudio.com/insights/hdb-defect-checklist-before-renovation-singapore",
    eyebrow: "新加坡 HDB 装修指南",
    title: "新加坡 HDB 装修前验屋缺陷清单",
    subtitle:
      "验屋应在装修开始前完成。一旦开始拆除、木工、贴砖或安装工程，日后就更难证明问题是原本交屋缺陷，还是装修过程中造成的。",
    readTime: "约13分钟阅读",
    category: "HDB 规划指南",
    quickAnswerTitle: "快速答案",
    quickAnswer:
      "HDB 屋主在装修前应先开通 SP 水电，带齐基本检查工具，测试水流方向、空鼓砖、窗户密封、门与铁门、电源插座，并清楚拍照记录每一项缺陷。BTO 屋主尤其应在提交缺陷和正式装修前完成检查。",
    heroBadges: ["BTO 与转售组屋", "装修前检查", "PDF 清单"],
    toolkitTitle: "HDB 验屋需要带什么工具？",
    toolkitIntro:
      "验屋不只是用眼睛看。很多问题只有在敲砖、试水、开电、测试插座或用手电筒照暗角时才会发现。",
    toolkit: [
      { item: "手机与相机", reason: "拍摄缺陷照片和视频，方便提交记录。" },
      { item: "充电宝", reason: "验屋时间可能较长，尤其需要拍很多照片和视频。" },
      { item: "手机充电器", reason: "测试每一个电源插座是否有电。" },
      { item: "手电筒", reason: "检查天花、管位、窗槽、暗角和较暗位置。" },
      { item: "油漆胶带或便利贴", reason: "贴在缺陷位置，避免之后忘记。" },
      { item: "马克笔", reason: "在胶带上写明缺陷，例如：厕所2积水、房间墙裂。" },
      { item: "金属棒、硬币或螺丝刀柄", reason: "轻敲瓷砖，听是否有空鼓声。" },
      { item: "水平尺或激光水平仪", reason: "检查墙面、地面、木工安装墙和柜体位置。" },
      { item: "卷尺", reason: "检查尺寸、门缝和基本空间尺寸。" },
      { item: "小水桶", reason: "用于厕所、厨房和服务阳台的水流测试。" },
      { item: "喷水瓶", reason: "测试窗户密封和窗框接缝是否渗水。" },
      { item: "弹珠或高尔夫球", reason: "快速发现明显斜水问题，但仍应配合实际倒水测试。" },
      { item: "纸巾", reason: "检查疑似渗水点是否真的潮湿。" },
      { item: "小镜子", reason: "查看洗手盆下方、管道后方和不易看到的位置。" },
      { item: "笔记本或打印清单", reason: "记录位置、缺陷类型和需要处理的事项。" },
      { item: "平面图", reason: "在图上标记缺陷位置，提交时更清楚。" },
      { item: "延长线", reason: "协助更快测试不同插座。" },
      { item: "安全梯（如需要）", reason: "可检查较高天花、检修口和窗户上方位置。" }
    ],
    beforeStartTitle: "开始前：先开通水电，并记录电表水表",
    beforeStart: [
      "尽可能在验屋前开通 SP Services。没有水电，就无法完整测试插座、开关、水压、冲水、排水和窗户喷水测试。",
      "拍下电表、水表，以及如适用的煤气表。记录表号和读数，作为装修前的起点记录。",
      "在贴标记前，先拍每个空间的整体照片。这样日后更容易区分原本交屋状态与装修后的状态。",
      "用油漆胶带或便利贴贴在缺陷位置，并写上简短说明，避免联合检查或提交时遗漏。",
      "在手机建立一个验屋相册，按客厅、厨房、厕所1、厕所2、房间、服务阳台等分类保存。"
    ],
    categoriesTitle: "按区域检查 HDB 缺陷",
    categoriesIntro:
      "以下清单专注于装修前真正会影响工程的缺陷。有些只是外观问题，有些则可能影响防水、木工、电工、地面水平和后续装修费用。",
    categories: [
      {
        title: "1. 地砖与地面缺陷",
        intro: "地面应在木工和家具遮挡前检查。湿区不能只看瓷砖表面，也要测试水流方向。",
        checks: [
          "用金属棒、硬币或螺丝刀柄轻敲瓷砖，听是否有空鼓声。",
          "检查瓷砖是否破裂、崩角、污渍或不平。",
          "检查相邻瓷砖是否有明显高低差。",
          "在自然光下检查瓷砖色差和纹路是否一致。",
          "检查填缝是否有缺口、裂缝、小孔或深浅不一。",
          "厕所地面应从不同位置倒水，确认水会自然流向地漏。",
          "厨房和服务阳台也应测试水是否流向地漏，不应在水槽或洗衣机区域附近积水。"
        ],
        note: "填缝不良和斜水问题都属于会影响装修的重点缺陷。贴砖、安装柜体或淋浴屏后，处理会更麻烦。"
      },
      {
        title: "2. 墙面水平、裂缝与表面问题",
        intro: "墙面不只是油漆问题。墙不平会影响到高柜、厨房柜、电视墙、石英石台面和玻璃隔断。",
        checks: [
          "使用水平尺或激光水平仪检查准备做木工的墙面。",
          "检查发丝裂缝、较宽裂缝、批荡不平和油漆起泡。",
          "检查墙角是否方正，尤其是厨房角落和衣柜墙。",
          "用手电筒从侧面照墙面，更容易看出波浪和不平。",
          "拍裂缝时可放上胶带或尺作为比例参考。"
        ]
      },
      {
        title: "3. 天花缺陷",
        intro: "很多屋主容易忽略天花。应在假天花和灯具工程开始前检查。",
        checks: [
          "检查天花裂缝、接缝线、不平整补灰和水渍。",
          "重点查看厕所天花、窗边、冷气位和服务阳台。",
          "用手电筒检查高处角落和较暗区域。",
          "如有检修口，检查是否平整、松动或损坏。"
        ]
      },
      {
        title: "4. 窗户、密封与渗水检查",
        intro: "新加坡雨水多，窗户问题有时只有在下雨或喷水测试时才发现。",
        checks: [
          "每一扇窗都应开关测试，确认滑动顺畅并能锁好。",
          "检查玻璃是否有刮花、裂痕或崩角。",
          "检查胶条和硅胶是否有裂缝、脱落或空隙。",
          "用喷水瓶或轻度水流喷窗框、角位和接缝，观察是否渗水。",
          "喷水后用纸巾在室内窗框位置轻按，确认是否潮湿。",
          "检查窗槽是否堵塞、积尘或排水不顺。"
        ],
        note: "不要使用高压水枪。测试目的是模拟雨水，不是强行把水压进窗缝。"
      },
      {
        title: "5. 厕所与浴室缺陷",
        intro: "厕所是最重要的验屋区域之一，因为防水、排水和斜水问题一旦装修后才发现，处理成本会更高。",
        checks: [
          "打开所有水龙头和花洒点，测试水压与排水。",
          "测试每个马桶冲水，观察是否冲水慢、漏水或水箱一直进水。",
          "在地面不同位置倒水，看水是否流向地漏。",
          "检查角落、淋浴区和马桶底部是否积水。",
          "检查地漏是否破裂、有异味、排水慢或盖子松动。",
          "检查地砖与墙砖填缝，尤其是淋浴区和墙地交界。",
          "检查洗手盆、存水弯、外露水管和接口是否漏水。",
          "如有淋浴挡水条，检查高度和水是否会流出湿区。"
        ]
      },
      {
        title: "6. 厨房与服务阳台缺陷",
        intro: "厨房缺陷会影响柜体、台面、水槽、炉具位置和洗衣机区域。",
        checks: [
          "测试厨房水槽水流和排水速度。",
          "在湿区倒水，确认水会流向地漏（如适用）。",
          "检查水槽附近和地漏周围的填缝质量。",
          "检查煤气管位置、管道状态以及是否影响柜体规划。",
          "检查上下柜安装墙是否平直。",
          "检查服务阳台排水、斜水、窗户或百叶窗操作。",
          "检查洗衣机位置的进水、排水和维修可达性。"
        ]
      },
      {
        title: "7. 大门、房门与 HDB 铁门",
        intro: "现在不少 HDB 单位交屋时已有大门和铁门，应在装修保护、粉尘和施工前先检查清楚。",
        checks: [
          "检查大门是否刮花、凹陷、崩角或门缝不均。",
          "反复开关大门，确认没有磨地或卡门框。",
          "测试门锁、钥匙、把手和闭门器（如有）。",
          "检查铁门是否对位、锁具顺畅、油漆缺陷、锈点或焊接问题。",
          "检查房门和厕所门的门框、刮花、膨胀和开关顺畅度。"
        ]
      },
      {
        title: "8. 电源、网络点与电箱",
        intro: "电力必须开通后才可完整检查。一个手机充电器就能帮助测试插座是否有电。",
        checks: [
          "用手机充电器测试每一个电源插座。",
          "测试每一个开关和可测试的灯点。",
          "检查网络点和电视点面板是否损坏或缺失。",
          "打开电箱，检查回路标签是否存在并清楚可读。",
          "检查电箱盖是否松动、跳掣或标签缺失。",
          "如适用，测试门铃、排气扇点或热水器点。"
        ]
      },
      {
        title: "9. 水喉、水压与异味检查",
        intro: "部分水管问题只有在多个出水点使用，或仔细检查地漏时才会发现。",
        checks: [
          "打开厨房和厕所水龙头，比较水压是否稳定。",
          "让水流一段时间后，检查洗手盆下方和接口是否渗水。",
          "检查地漏是否有异味或排水不顺。",
          "检查马桶底部、洗手盆区域和服务阳台是否有慢性渗水。",
          "用纸巾确认疑似漏水点是否真的潮湿。"
        ]
      },
      {
        title: "10. 冷气台、阳台与外墙雨水位置",
        intro: "外墙缺陷一般不适合屋主自行外部检查。实际做法是从室内观察，并在下雨后检查可见位置。",
        checks: [
          "检查面向外墙的室内墙是否有潮湿、油漆起泡、脱皮或水渍。",
          "如有机会，在大雨后检查窗边、阳台门和外墙角落。",
          "从安全可达位置观察冷气台是否积水、裂缝或排水异常。",
          "阳台区域应测试推拉门、排水、斜水和积水情况。",
          "不要爬出窗外或到危险位置检查外墙。若怀疑渗水，应以室内照片提交。"
        ]
      },
      {
        title: "11. 结构性警示",
        intro: "大多数缺陷是小问题，但有些迹象应认真记录并提交，不要自行处理。",
        checks: [
          "拍下较宽裂缝、重复裂缝或异常地面沉降。",
          "留意混凝土剥落、锈迹、水渍或反复渗水。",
          "不要在提交前自行修补疑似结构性问题。",
          "清楚标记位置，并拍摄近照与整体照片。"
        ]
      }
    ],
    districtCoolingTitle: "Tengah 与采用集中冷气系统的 HDB 项目特别检查",
    districtCoolingIntro:
      "部分较新的 HDB 项目，尤其是 Tengah，采用 district cooling / 中央冷却系统，而不是每户传统室外冷凝机。Plantation Grange、Plantation Edge、Plantation Village、Garden Court、Garden Vines 等项目的屋主，应额外检查冷气表现、冷凝水、检修口和日后装修是否会挡住维修空间。",
    districtCoolingChecks: [
      { item: "风机盘管外观", reason: "检查每台室内机是否有凹陷、刮花、面板松动、盖板缺失或水渍。" },
      { item: "开机测试", reason: "测试每台机的风速、摆风、遥控器或墙控，以及是否出现错误代码。" },
      { item: "制冷表现", reason: "让系统运行一段时间，比较各房间是否制冷均匀、没有突然停机。" },
      { item: "冷凝水与滴水", reason: "检查天花、线槽、检修口和附近墙面是否潮湿或滴水。" },
      { item: "冷冻水管保温", reason: "在可见位置查看保温层是否破损、松脱、腐蚀或疑似渗漏。" },
      { item: "冷凝水排水", reason: "确认没有滴水声、积水或排水位置漏水。" },
      { item: "噪音与震动", reason: "在安静环境听是否有异响、震动、摩擦声或高频声音。" },
      { item: "检修口空间", reason: "设计假天花或木工前，必须保留可维修空间。" },
      { item: "滤网拆洗空间", reason: "不要让天花、窗帘盒或柜体挡住日后清洗滤网的位置。" }
    ],
    renovationSensitiveTitle: "会影响装修费用的缺陷",
    renovationSensitiveIntro:
      "以下问题应在确认装修范围前特别提出，因为它们可能影响拆除、木工、防水、电工、天花或报价范围。",
    renovationSensitive: [
      { item: "厕所或厨房斜水不良", reason: "可能需要在铺砖、防水或安装淋浴屏前先处理。" },
      { item: "窗户漏水或密封不良", reason: "日后可能损坏木工、窗帘、油漆或地板。" },
      { item: "墙面不平或墙角不方正", reason: "会影响高柜、厨房柜和台面安装。" },
      { item: "填缝开裂或缺失", reason: "水可能进入瓷砖下方，造成日后维修问题。" },
      { item: "电源点或电箱问题", reason: "应在电工规划和隐藏工程前解决。" },
      { item: "集中冷气检修空间被设计挡住", reason: "日后维修可能需要拆天花或拆柜。" },
      { item: "潮湿或渗水痕迹", reason: "油漆和木工前应先确认渗水原因。" }
    ],
    interlinkTitle: "相关装修规划指南",
    interlinks: [
      { text: "应先完成主要缺陷处理，再确认装修进度。", to: "/insights/hdb-renovation-timeline-singapore", label: "阅读 HDB 翻新时间表" },
      { text: "有些缺陷如果装修后才发现，可能会影响最终预算。", to: "/insights/renovation-cost-singapore-2026", label: "查看新加坡装修费用指南" },
      { text: "比较报价时，应把原本缺陷与真正装修工程分清楚。", to: "/insights/renovation-quotation-singapore", label: "了解如何比较装修报价" },
      { text: "如果你也在规划家具、电器和搬家现金流，应看整体入住预算，而不只是装修费。", to: "/total-home-budget-calculator", label: "使用 Total Home Budget Calculator" }
    ],
    pdfTitle: "下载 HDB 验屋缺陷清单",
    pdfText:
      "这份可打印 PDF 可在拿钥匙或装修前使用，包含工具清单、各区域检查、电表水表记录，以及会影响装修的缺陷提醒。",
    pdfButton: "下载免费 HDB 验屋清单（PDF）",
    faqTitle: "HDB 验屋常见问题",
    faqs: [
      { question: "HDB 装修前一定要验屋吗？", answer: "强烈建议。装修前先验屋和记录，日后更容易分辨问题是原本交屋缺陷，还是装修过程造成。" },
      { question: "验屋前需要开通 SP 水电吗？", answer: "建议开通。没有水电，就无法完整测试插座、开关、水压、冲水、排水和窗户喷水测试。" },
      { question: "检查空鼓砖要用什么？", answer: "可用金属棒、硬币或螺丝刀柄轻敲。空鼓砖声音通常不同。应贴标签并拍照记录。" },
      { question: "厕所斜水怎样检查？", answer: "在厕所地面不同位置倒水，观察水是否自然流向地漏。如果积水或流向错误，应记录。" },
      { question: "厨房也需要检查排水吗？", answer: "需要。厨房和服务阳台靠近水槽、洗衣机和地漏的湿区，也可能有排水和积水问题。" },
      { question: "窗户漏水怎么测试？", answer: "先检查胶条和硅胶，再用喷水瓶或轻水流喷窗框接缝，并用纸巾在室内窗框处确认是否潮湿。不要用高压水。" },
      { question: "为什么要拍电表和水表？", answer: "照片可记录装修前的起点读数和状态，之后若出现异常用水或用电，也更容易追踪。" },
      { question: "Tengah BTO 的集中冷气要检查什么？", answer: "应检查风机盘管、制冷表现、冷凝水、滴水、检修口、噪音、控制器，以及装修设计是否会挡住维修空间。" },
      { question: "装修会影响缺陷索赔吗？", answer: "如果原本状态被改变，责任会更难证明。因此主要装修工程最好在缺陷记录和提交后才开始。" },
      { question: "需要请专业验屋师吗？", answer: "如果屋主不熟悉现场检查，专业验屋师会有帮助。但结构化清单仍可帮助屋主知道装修前哪些问题最重要。" }
    ],
    ctaTitle: "拿钥匙后准备装修？",
    ctaText:
      "ID Work Studio 协助新加坡屋主在缺陷检查后，更清楚规划装修范围、预算和现场施工细节。",
    ctaPrimary: "WhatsApp 联系我们",
    ctaSecondary: "查看住宅装修服务",
    breadcrumbCurrent: "HDB 验屋缺陷清单"
  }
};

function trackPdfDownload() {
  const analyticsWindow = window as unknown as {
    gtag?: (command: string, eventName: string, params?: Record<string, string>) => void;
  };

  analyticsWindow.gtag?.("event", "defect_checklist_download", {
    file_name: "hdb-defect-inspection-checklist-id-work-studio.pdf",
    article: "hdb_defect_checklist_before_renovation"
  });
}

export default function HDBDefectChecklistBeforeRenovationSingapore() {
  const { i18n } = useTranslation();
  const lang = i18n.language === "zh" ? "zh" : "en";
  const t = content[lang];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: t.title,
    description: t.metaDescription,
    url: t.canonical,
    author: {
      "@type": "Organization",
      name: "ID Work Studio",
      url: "https://idworkstudio.com/"
    },
    publisher: {
      "@type": "Organization",
      name: "ID Work Studio",
      url: "https://idworkstudio.com/"
    },
    inLanguage: lang === "zh" ? "zh-SG" : "en-SG"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: lang === "zh" ? "首页" : "Home",
        item: "https://idworkstudio.com/"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: lang === "zh" ? "装修文章" : "Insights",
        item: "https://idworkstudio.com/insights"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: t.breadcrumbCurrent,
        item: t.canonical
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDescription} />
        <link rel="canonical" href={t.canonical} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <main className="bg-[#FAF8F3] text-[#2C2C2C]">
        <section className="relative overflow-hidden bg-[#111] px-6 py-20 text-center text-white md:py-28">
          <div className="absolute inset-0">
            <img
              src="/insights/hdb-defect-checklist-before-renovation-singapore-hero.webp"
              alt="HDB defect inspection checklist before renovation in Singapore"
              className="h-full w-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/75" />
          </div>
          <div className="relative z-10 mx-auto max-w-5xl">
            <p className="mb-5 inline-flex rounded-full border border-[#C5A059]/40 bg-black/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#C5A059] backdrop-blur">
              {t.eyebrow}
            </p>
            <h1 className="font-serif text-4xl font-semibold leading-tight md:text-6xl">
              {t.title}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/78 md:text-lg">
              {t.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs uppercase tracking-[0.16em] text-white/70">
              {t.heroBadges.map((badge) => (
                <span key={badge} className="rounded-full border border-white/15 bg-white/[0.08] px-4 py-2">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[#e8e1d7] bg-white px-6 py-5">
          <div className="mx-auto max-w-5xl">
            <Link to="/insights" className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f6a63] hover:text-[#C5A059]">
              ← {lang === "zh" ? "返回装修文章" : "Back to insights"}
            </Link>
          </div>
        </section>

        <article className="mx-auto max-w-5xl px-6 py-12 md:py-16">
          <section className="mb-10 rounded-3xl border border-[#e8e1d7] bg-white p-6 shadow-sm md:p-8">
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em] text-[#8a8178]">
              <span>{t.category}</span>
              <span>•</span>
              <span>{t.readTime}</span>
            </div>
            <h2 className="mt-5 font-serif text-3xl font-semibold md:text-4xl">{t.quickAnswerTitle}</h2>
            <p className="mt-4 text-base leading-8 text-[#5f5a54]">{t.quickAnswer}</p>
          </section>

          <section className="mb-12 rounded-3xl border border-[#dccfbf] bg-[#151515] p-6 text-white shadow-sm md:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C5A059]">PDF Checklist</p>
                <h2 className="mt-3 font-serif text-3xl font-semibold md:text-4xl">{t.pdfTitle}</h2>
                <p className="mt-4 text-sm leading-7 text-white/72">{t.pdfText}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                <a
                  href={pdfDownloadPath}
                  download
                  onClick={trackPdfDownload}
                  className="block rounded-full bg-[#C5A059] px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-[#D6B26B]"
                >
                  {t.pdfButton}
                </a>
                <p className="mt-3 text-center text-xs leading-5 text-white/50">
                  {lang === "zh" ? "下载按钮已设置 GA4 追踪事件。" : "Download button is configured with a GA4 tracking event."}
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="rounded-3xl border border-[#e8e1d7] bg-white p-6 shadow-sm md:p-8">
              <h2 className="font-serif text-3xl font-semibold md:text-4xl">{t.toolkitTitle}</h2>
              <p className="mt-4 text-base leading-8 text-[#5f5a54]">{t.toolkitIntro}</p>
              <div className="mt-7 grid gap-3 md:grid-cols-2">
                {t.toolkit.map((tool) => (
                  <div key={tool.item} className="rounded-2xl border border-[#e8e1d7] bg-[#fffdf8] p-5">
                    <h3 className="text-base font-semibold text-[#2C2C2C]">{tool.item}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#6f6a63]">{tool.reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-12 rounded-3xl border border-[#e8e1d7] bg-white p-6 shadow-sm md:p-8">
            <h2 className="font-serif text-3xl font-semibold md:text-4xl">{t.beforeStartTitle}</h2>
            <div className="mt-6 grid gap-3">
              {t.beforeStart.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-[#fffdf8] p-4 text-sm leading-7 text-[#5f5a54]">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#C5A059]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <div className="mb-7">
              <h2 className="font-serif text-3xl font-semibold md:text-4xl">{t.categoriesTitle}</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[#5f5a54]">{t.categoriesIntro}</p>
            </div>
            <div className="space-y-5">
              {t.categories.map((category) => (
                <section key={category.title} className="rounded-3xl border border-[#e8e1d7] bg-white p-6 shadow-sm md:p-8">
                  <h3 className="font-serif text-2xl font-semibold md:text-3xl">{category.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5f5a54]">{category.intro}</p>
                  <ul className="mt-5 grid gap-3 md:grid-cols-2">
                    {category.checks.map((check) => (
                      <li key={check} className="flex gap-3 rounded-2xl bg-[#fffdf8] p-4 text-sm leading-7 text-[#5f5a54]">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#C5A059]" />
                        <span>{check}</span>
                      </li>
                    ))}
                  </ul>
                  {category.note && (
                    <p className="mt-5 rounded-2xl border border-[#C5A059]/25 bg-[#C5A059]/10 p-4 text-sm leading-7 text-[#6f5830]">
                      {category.note}
                    </p>
                  )}
                </section>
              ))}
            </div>
          </section>

          <section className="mb-12 rounded-3xl border border-[#dccfbf] bg-[#111] p-6 text-white shadow-sm md:p-8">
            <h2 className="font-serif text-3xl font-semibold md:text-4xl">{t.districtCoolingTitle}</h2>
            <p className="mt-4 text-base leading-8 text-white/72">{t.districtCoolingIntro}</p>
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {t.districtCoolingChecks.map((check) => (
                <div key={check.item} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                  <h3 className="text-base font-semibold text-[#C5A059]">{check.item}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/70">{check.reason}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 rounded-3xl border border-[#e8e1d7] bg-white p-6 shadow-sm md:p-8">
            <h2 className="font-serif text-3xl font-semibold md:text-4xl">{t.renovationSensitiveTitle}</h2>
            <p className="mt-4 text-base leading-8 text-[#5f5a54]">{t.renovationSensitiveIntro}</p>
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {t.renovationSensitive.map((item) => (
                <div key={item.item} className="rounded-2xl border border-[#C5A059]/25 bg-[#fffaf1] p-5">
                  <h3 className="text-base font-semibold text-[#2C2C2C]">{item.item}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#6f6a63]">{item.reason}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 rounded-3xl border border-[#e8e1d7] bg-white p-6 shadow-sm md:p-8">
            <h2 className="font-serif text-3xl font-semibold md:text-4xl">{t.interlinkTitle}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {t.interlinks.map((link) => (
                <div key={link.to} className="rounded-2xl border border-[#e8e1d7] bg-[#fffdf8] p-5">
                  <p className="text-sm leading-7 text-[#5f5a54]">{link.text}</p>
                  <Link to={link.to} className="mt-3 inline-flex text-sm font-semibold text-[#9a792f] hover:text-[#C5A059]">
                    {link.label} →
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="border-b border-[#e8e1d7] pb-4 font-serif text-3xl font-semibold md:text-4xl">
              {t.faqTitle}
            </h2>
            <div className="mt-6 space-y-3">
              {t.faqs.map((faq) => (
                <details key={faq.question} className="rounded-2xl border border-[#e8e1d7] bg-[#fffdf8] p-5">
                  <summary className="cursor-pointer text-base font-semibold">{faq.question}</summary>
                  <p className="mt-3 text-sm leading-7 text-[#5f5a54]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="rounded-3xl bg-[#151515] p-7 text-white md:p-9">
            <h2 className="font-serif text-3xl font-semibold">{t.ctaTitle}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">{t.ctaText}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://wa.me/6598333085"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#C5A059] px-6 py-3 text-sm font-semibold text-white hover:bg-[#D6B26B]"
              >
                {t.ctaPrimary}
              </a>
              <Link to="/residential" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-[#C5A059] hover:text-[#C5A059]">
                {t.ctaSecondary}
              </Link>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
