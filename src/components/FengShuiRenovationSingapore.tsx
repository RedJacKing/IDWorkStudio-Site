import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, CheckCircle2, Lightbulb, Moon, Route, ShieldCheck, Sparkles } from 'lucide-react';

type FaqItem = {
  question: string;
  answer: string;
};

type ImageBlock = {
  src: string;
  alt: string;
  caption: string;
};

type SectionBlock = {
  eyebrow: string;
  title: string;
  intro: string;
  image: ImageBlock;
  points: string[];
  takeaway: string;
};

type LinkCard = {
  title: string;
  text: string;
  href: string;
  label: string;
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
  heroAlt: string;
  heroCaption: string;
  quickAnswerTitle: string;
  quickAnswer: string;
  summaryCards: Array<{ title: string; text: string }>;
  introTitle: string;
  introParagraphs: string[];
  sections: SectionBlock[];
  styleTitle: string;
  styleIntro: string;
  styleImages: ImageBlock[];
  mistakesTitle: string;
  mistakesIntro: string;
  mistakes: Array<{ title: string; text: string }>;
  checklistTitle: string;
  checklistIntro: string;
  checklist: Array<{ title: string; text: string }>;
  interlinkTitle: string;
  interlinkText: string;
  linkCards: LinkCard[];
  faqTitle: string;
  faqIntro: string;
  faqs: FaqItem[];
  ctaTitle: string;
  ctaText: string;
  ctaPrimary: string;
  ctaSecondary: string;
  breadcrumbCurrent: string;
};

const content: Record<'en' | 'zh', ArticleContent> = {
  en: {
    metaTitle: 'Feng Shui Renovation Singapore: Data-Driven Wellness Design | ID Work Studio',
    metaDescription:
      'A practical Singapore guide to feng shui renovation through environmental psychology, stress-reduction layouts, lighting, storage, Japandi interiors and HDB or condo planning.',
    canonical: 'https://idworkstudio.com/insights/feng-shui-renovation-singapore',
    eyebrow: 'Wellness-Focused Renovation Design',
    title: 'Beyond Superstition: A Data-Driven Guide to Feng Shui Renovations in Singapore',
    subtitle:
      'Modern feng shui renovation is less about mystical symbols and more about how layout, clutter, lighting and workflow affect stress, sleep and daily comfort in Singapore homes.',
    readTime: '11 min read',
    category: 'Wellness Design Guide',
    heroAlt:
      'Singapore renovation team reviewing feng shui planning drawings inside a compact HDB interior with warm Japandi finishes',
    heroCaption:
      'Modern feng shui can be treated as practical spatial planning: sightlines, flow, lighting, storage and daily routines before decoration.',
    quickAnswerTitle: 'Quick answer',
    quickAnswer:
      'For Singapore HDB and condo renovation, a modern feng shui approach works best when it is translated into practical design decisions: calmer layouts, better storage, clearer circulation, layered lighting and comfortable bedroom planning. The goal is not superstition. The goal is to reduce visual stress, improve daily routines and avoid renovation regrets that are expensive to fix later.',
    summaryCards: [
      {
        title: 'Think psychology before symbolism',
        text: 'Clutter, blocked walkways, poor lighting and cramped furniture placement affect how a home feels long before decorative style matters.',
      },
      {
        title: 'Plan for compact Singapore homes',
        text: 'HDB and condo layouts need careful circulation, storage and lighting because small mistakes become obvious in daily living.',
      },
      {
        title: 'Use Japandi as a wellness language',
        text: 'Warm oak tones, soft neutrals, hidden storage and calm material palettes support low-visual-noise interiors.',
      },
    ],
    introTitle: 'Why Singapore homeowners are rethinking feng shui',
    introParagraphs: [
      'Many homeowners still associate feng shui with superstition, lucky objects or symbolic rules. But when the mystical layer is removed, many ideas overlap with environmental psychology: how humans respond to light, clutter, movement, safety and visual order.',
      'This matters in Singapore because HDB and condo homes are compact. A poor layout can make the home feel heavier, darker and more stressful even if the renovation looks good in photos. A good layout makes daily living smoother without needing excessive decoration.',
      'For ID Work Studio, the useful question is not whether a mirror, coin or ornament brings luck. The useful question is whether the home supports calmer routines, better sleep, smoother cooking, easier storage and less renovation regret.',
    ],
    sections: [
      {
        eyebrow: 'Clutter Psychology',
        title: 'Clutter, cortisol and mental fatigue',
        intro:
          'A cluttered home is not just visually messy. It creates more things for the brain to process, which can make the space feel noisy, unfinished and harder to relax in.',
        image: {
          src: '/fengshui/CLUTTER VS MINIMAL.webp',
          alt: 'Side by side comparison of cluttered and minimal Singapore HDB living room layouts',
          caption: 'Clutter versus calm: the same HDB-scale space can feel stressful or composed depending on storage, sightlines and visual noise.',
        },
        points: [
          'Open shelves without discipline can create constant visual reminders of unfinished tasks.',
          'Poor storage planning pushes items onto dining tables, bay windows, kitchen counters and bedroom corners.',
          'Too many competing materials, colours and feature walls make compact homes feel smaller.',
          'A calmer renovation starts with storage zones, not with buying more decorative items.',
        ],
        takeaway:
          'Practical feng shui translation: reduce visual noise, protect clear surfaces and design storage before choosing styling accessories.',
      },
      {
        eyebrow: 'Bedroom Safety',
        title: 'The bedroom command position is really about psychological safety',
        intro:
          'The classic “command position” works because people rest better when the entrance is visible, the bed feels protected and movement in the room is predictable.',
        image: {
          src: '/fengshui/BEDROOM COMMAND POSITION.webp',
          alt: 'Bedroom command position diagram for Singapore HDB feng shui renovation planning',
          caption: 'The useful design principle is not mysticism. It is visibility, predictability and a sense of protection while resting.',
        },
        points: [
          'Avoid placing the bed where the door opens directly into the sleeping zone if alternatives are available.',
          'Keep walking paths around the bed simple and comfortable, especially in smaller HDB bedrooms.',
          'Use soft lighting and quiet materials to reduce overstimulation before sleep.',
          'Prioritise wardrobe access and bedside clearance instead of forcing a layout that looks good only on plan.',
        ],
        takeaway:
          'Practical feng shui translation: create a bedroom that feels safe, visually calm and easy to move through at night.',
      },
      {
        eyebrow: 'Lighting Biology',
        title: 'Lighting affects mood, circadian rhythm and how spacious the home feels',
        intro:
          'In many Singapore homes, lighting is treated too late. But lighting changes how finishes look, how relaxed the home feels and how usable each zone becomes after sunset.',
        image: {
          src: '/fengshui/LIGHTING LAYERS EXPLAINER.webp',
          alt: 'Layered lighting explainer for warm Japandi Singapore HDB renovation',
          caption: 'A calm home usually needs more than one ceiling light: ambient light, task light and soft accent light should work together.',
        },
        points: [
          'Warm ambient lighting helps the home feel calmer in the evening.',
          'Task lighting reduces eye strain at kitchens, vanities, study desks and wardrobes.',
          'Overly bright white lighting can make beige, taupe and oak finishes feel flat or clinical.',
          'Subtle indirect lighting should support the architecture, not become dramatic hotel-style cove lighting.',
        ],
        takeaway:
          'Practical feng shui translation: use layered lighting to support energy levels in the day and relaxation at night.',
      },
      {
        eyebrow: 'Daily Workflow',
        title: 'Kitchen workflow is feng shui in its most practical form',
        intro:
          'A kitchen that looks beautiful but forces awkward movement will create daily irritation. The sink, preparation area, hob, fridge and storage need to support a natural sequence.',
        image: {
          src: '/fengshui/KITCHEN WORKFLOW.webp',
          alt: 'Kitchen workflow diagram showing sink prep hob and storage planning in a Singapore HDB kitchen',
          caption: 'Good kitchen planning reduces repeated movement, counter clutter and daily friction during cooking.',
        },
        points: [
          'Keep enough preparation space between washing and cooking zones where possible.',
          'Do not let tall cabinets, fridge doors or island placement block the main working path.',
          'Plan power points and appliance locations before carpentry confirmation.',
          'Avoid buying sinks, hobs or taps too early without checking dimensions and installation requirements.',
        ],
        takeaway:
          'Practical feng shui translation: a smooth kitchen flow reduces stress because the body does not need to fight the layout every day.',
      },
      {
        eyebrow: 'Arrival Flow',
        title: 'The entryway sets the emotional tone of the home',
        intro:
          'The first few steps into a home matter. A cramped entryway full of shoes, bags and visual clutter can make the home feel stressful before anyone reaches the living room.',
        image: {
          src: '/fengshui/ENTRYWAY FLOW COMPARISON.webp',
          alt: 'Entryway flow comparison showing cluttered versus calm arrival zones in Singapore HDB renovation',
          caption: 'Entryway planning is about decompression: where shoes, keys, bags, parcels and daily items go when you enter the home.',
        },
        points: [
          'Plan shoe storage, daily bags and cleaning tools near the entrance without blocking the walkway.',
          'Use closed storage where clutter builds up quickly.',
          'Keep the first view into the home calm instead of overloaded with cabinets or loose items.',
          'For compact HDB entries, shallow cabinets often work better than deep storage that narrows circulation.',
        ],
        takeaway:
          'Practical feng shui translation: the entrance should make the home feel easy to enter, not crowded before daily life begins.',
      },
    ],
    styleTitle: 'Japandi interiors work because they reduce visual noise',
    styleIntro:
      'Japandi is popular in Singapore not only because it looks warm and premium. It also supports many wellness design goals: lower contrast, natural textures, concealed storage, softer lighting and furniture that does not overwhelm compact rooms.',
    styleImages: [
      {
        src: '/fengshui/Living room.webp',
        alt: 'Warm Japandi Singapore HDB living room with oak flooring and calm neutral palette',
        caption: 'Living room: calm sightlines, warm oak, soft neutrals and compact HDB proportions.',
      },
      {
        src: '/fengshui/master bedroom.webp',
        alt: 'Japandi master bedroom for Singapore HDB renovation with soft lighting and oak carpentry',
        caption: 'Master bedroom: protected sleeping zone, soft textures and reduced visual stimulation.',
      },
      {
        src: '/fengshui/Dinning.webp',
        alt: 'Warm Japandi dining space in Singapore HDB with ambient lighting and light oak finishes',
        caption: 'Dining space: warm ambient lighting and a practical family-friendly layout.',
      },
      {
        src: '/fengshui/Commen bedroom.webp',
        alt: 'Common bedroom in a Singapore HDB with Japandi study and storage planning',
        caption: 'Common bedroom: compact work, rest and storage zones without visual heaviness.',
      },
      {
        src: '/fengshui/Lighting.webp',
        alt: 'Close-up of warm recessed and indirect lighting detail in Japandi Singapore HDB interior',
        caption: 'Lighting detail: subtle architectural shadow instead of dramatic cove lighting.',
      },
    ],
    mistakesTitle: 'Feng shui renovation mistakes Singapore homeowners still make',
    mistakesIntro:
      'The most expensive mistakes usually happen when homeowners copy a rule or a trend without checking whether it works for their actual floor plan, habits and budget.',
    mistakes: [
      {
        title: 'Forcing symbolism over function',
        text: 'A layout should first solve storage, movement, lighting and comfort. Symbolic placement cannot rescue a home that is hard to live in.',
      },
      {
        title: 'Overbuilding carpentry in small rooms',
        text: 'Too much full-height storage can make a compact HDB bedroom or entryway feel compressed. Storage must be balanced with breathing space.',
      },
      {
        title: 'Choosing dark finishes without lighting planning',
        text: 'Dark laminate, dark feature walls and poor light placement can make the home feel heavy, especially in rooms with limited daylight.',
      },
      {
        title: 'Buying overseas items before site checks',
        text: 'Oversized furniture, incompatible taps, wrong appliance voltage or delayed shipping can affect renovation flow and create unnecessary stress.',
      },
      {
        title: 'Ignoring daily maintenance',
        text: 'Open shelving, textured surfaces and decorative niches can look beautiful in renders but become clutter zones if the household routine is not considered.',
      },
    ],
    checklistTitle: 'Practical feng shui renovation checklist',
    checklistIntro:
      'Use this checklist before confirming your layout, carpentry and lighting plan. It keeps the discussion practical and renovation-safe.',
    checklist: [
      { title: 'Sightlines', text: 'Can you see the main door, windows and key movement paths clearly without visual clutter?' },
      { title: 'Circulation', text: 'Are walkways comfortable after furniture, cabinets and appliances are installed?' },
      { title: 'Storage', text: 'Are daily items designed into proper zones instead of left to loose baskets and temporary shelves?' },
      { title: 'Lighting', text: 'Does each area have ambient, task or accent lighting based on how the space is used?' },
      { title: 'Bedroom calm', text: 'Does the bed position feel protected while still allowing practical wardrobe and bedside access?' },
      { title: 'Kitchen flow', text: 'Can washing, preparation, cooking and serving happen without unnecessary backtracking?' },
      { title: 'Material restraint', text: 'Are there too many laminates, colours, trims or feature details competing in one room?' },
      { title: 'Future regret', text: 'Would the layout still feel comfortable after the trend or novelty wears off?' },
    ],
    interlinkTitle: 'Plan the renovation around how you actually live',
    interlinkText:
      'A calmer home is planned before renovation starts. These related ID Work Studio resources help you connect wellness design with cost, mistakes, buying decisions and style direction.',
    linkCards: [
      {
        title: 'Renovation Cost in Singapore',
        text: 'Understand how scope, hacking, carpentry, electrical works and material choices affect your renovation budget.',
        href: '/insights/renovation-cost-singapore-2026',
        label: 'Read cost guide',
      },
      {
        title: 'Common Renovation Mistakes',
        text: 'See why layout confusion, rushed purchases and unclear decisions often lead to rework and regret.',
        href: '/insights/renovation-mistakes-singapore',
        label: 'Avoid mistakes',
      },
      {
        title: 'Buying Renovation Items Overseas',
        text: 'Check sizing, compatibility, shipping and warranty risks before buying furniture, lighting, taps or appliances overseas.',
        href: '/insights/overseas-renovation-shopping-singapore',
        label: 'Check before buying',
      },
      {
        title: 'Renovation Cost Calculator',
        text: 'Estimate your HDB, condo or resale renovation budget before confirming the full design direction.',
        href: '/renovation-cost-calculator',
        label: 'Open calculator',
      },
      {
        title: 'HDB Renovation Style Quiz',
        text: 'Explore which renovation style best fits your lifestyle, habits and preferred level of visual calm.',
        href: '/hdb-renovation-style-quiz',
        label: 'Take style quiz',
      },
    ],
    faqTitle: 'FAQ: Feng shui renovation, wellness design and Singapore homes',
    faqIntro:
      'Short answers for homeowners who want a practical, modern interpretation of feng shui before renovating an HDB or condo in Singapore.',
    faqs: [
      {
        question: 'Is feng shui still relevant for modern Singapore homes?',
        answer:
          'Yes, if it is treated as practical spatial planning rather than superstition. Many useful feng shui ideas overlap with environmental psychology: clear circulation, comfortable light, visual calm, storage discipline and a sense of safety in bedrooms. For Singapore HDB and condo homes, these ideas are especially useful because compact layouts leave less room for poor planning.',
      },
      {
        question: 'Why do cluttered homes feel mentally stressful?',
        answer:
          'Clutter creates visual noise. The brain has to process more objects, colours and unfinished tasks, which can make a home feel heavier and harder to relax in. In renovation planning, the practical solution is not only to declutter after moving in, but to design proper storage, closed cabinets and clear surfaces from the start.',
      },
      {
        question: 'Does bedroom layout affect sleep quality?',
        answer:
          'Bedroom layout can affect how safe and calm the room feels. A bed with a clear view of the entrance, comfortable walking space and reduced visual clutter usually feels more restful. This is the practical interpretation of the command position: it supports psychological safety and reduces subconscious alertness before sleep.',
      },
      {
        question: 'What renovation layouts reduce stress in small Singapore homes?',
        answer:
          'Stress-reducing layouts usually have clear walkways, concealed storage, soft lighting, calm material palettes and furniture sized correctly for the room. In HDB and compact condo layouts, avoiding oversized carpentry and keeping movement paths open is often more important than adding more decorative features.',
      },
      {
        question: 'Is Japandi design good for wellness-focused interiors?',
        answer:
          'Japandi design works well for wellness-focused interiors because it uses warm neutrals, natural textures, low visual contrast and practical storage. For Singapore homeowners, it can create a premium but calm home without making the space feel overly decorative or visually busy.',
      },
      {
        question: 'Does lighting really affect mood and well-being?',
        answer:
          'Yes. Lighting affects how a room feels, how finishes appear and how comfortable the home is at different times of day. Warm ambient lighting supports evening calm, task lighting improves usability and layered lighting prevents the flat, harsh feeling that often happens when a room relies on only one bright ceiling light.',
      },
      {
        question: 'Can poor renovation planning affect mental wellness?',
        answer:
          'Poor planning can increase daily frustration. Examples include blocked walkways, insufficient storage, dark rooms, awkward kitchen workflow and furniture that is too large for the space. These issues may seem small during design, but they affect daily routines after moving in.',
      },
      {
        question: 'What are the most common feng shui renovation mistakes in Singapore?',
        answer:
          'Common mistakes include focusing too much on symbolic items, copying Pinterest layouts that do not fit HDB proportions, using dark finishes without lighting planning, overbuilding carpentry and buying furniture or fittings before checking site dimensions. Practical comfort should come before decoration.',
      },
      {
        question: 'Should feng shui be considered before renovation starts?',
        answer:
          'Yes. If feng shui is interpreted as layout, lighting, storage and flow, it should be discussed before carpentry and electrical plans are finalised. It is much easier to plan calm circulation, bedroom placement, lighting points and storage zones before renovation begins than to correct them after handover.',
      },
    ],
    ctaTitle: 'Design a home that supports how you live',
    ctaText:
      'A well-designed Singapore home should not only look beautiful. It should support better rest, smoother routines, clearer storage and long-term emotional comfort.',
    ctaPrimary: 'WhatsApp ID Work Studio',
    ctaSecondary: 'View residential services',
    breadcrumbCurrent: 'Feng Shui Renovation Singapore',
  },
  zh: {
    metaTitle: '新加坡风水装修：以环境心理学打造疗愈型家居 | ID Work Studio',
    metaDescription:
      '新加坡风水装修实用指南：从环境心理学、减压空间规划、灯光、收纳、Japandi风格与HDB/公寓装修角度，重新理解现代风水。',
    canonical: 'https://idworkstudio.com/insights/feng-shui-renovation-singapore',
    eyebrow: '疗愈型装修设计',
    title: '超越迷信：新加坡风水装修的数据化与实用设计指南',
    subtitle:
      '现代风水装修不应只看符号与摆设，而应关注布局、杂乱、灯光与动线如何影响压力、睡眠和日常舒适度。',
    readTime: '约 11 分钟',
    category: '疗愈设计指南',
    heroAlt: '新加坡装修团队在带有Japandi元素的HDB空间内查看风水平面规划图',
    heroCaption: '现代风水可以被理解为实用空间规划：视线、动线、灯光、收纳与日常习惯，比装饰符号更重要。',
    quickAnswerTitle: '快速答案',
    quickAnswer:
      '对新加坡HDB与公寓装修来说，现代风水最有效的做法，是把它转化为实际设计决定：更安定的布局、更好的收纳、更清晰的动线、分层灯光和舒适的卧室规划。重点不是迷信，而是减少视觉压力、改善日常习惯，并避免日后昂贵的装修后悔。',
    summaryCards: [
      { title: '先考虑心理感受，再考虑象征', text: '杂乱、阻塞动线、灯光不足与家具摆放不当，会比风格本身更早影响家的感受。' },
      { title: '针对新加坡紧凑户型规划', text: 'HDB和公寓空间较紧凑，动线、收纳与灯光的小错误，在日常生活中会很快被放大。' },
      { title: '用Japandi表达疗愈感', text: '温润木色、柔和中性色、隐藏式收纳与低视觉噪音的材质组合，更适合长期居住。' },
    ],
    introTitle: '为什么新加坡屋主正在重新理解风水',
    introParagraphs: [
      '很多人仍然把风水联想到迷信、幸运物或传统禁忌。但如果去掉神秘化的部分，不少风水原则其实与环境心理学相通：人如何回应光线、杂乱、动线、安全感与视觉秩序。',
      '这对新加坡家庭尤其重要，因为HDB和公寓空间普遍紧凑。一个不好的布局，即使照片看起来漂亮，实际居住也可能显得压抑、昏暗和不方便。好的布局则能让日常生活更顺畅，不需要过度装饰。',
      '对ID Work Studio而言，真正有价值的问题不是镜子、钱币或摆件是否带来好运，而是这个家能否支持更安定的作息、更好的睡眠、更顺手的厨房、更清晰的收纳，以及更少的装修后悔。',
    ],
    sections: [
      {
        eyebrow: '杂乱心理学',
        title: '杂乱、压力荷尔蒙与精神疲劳',
        intro: '杂乱的家不只是视觉上凌乱。它会让大脑处理更多信息，让空间感觉吵杂、未完成，也更难真正放松。',
        image: {
          src: '/fengshui/CLUTTER VS MINIMAL.webp',
          alt: '新加坡HDB客厅杂乱与极简对比图',
          caption: '杂乱与安定的差别：同样HDB比例的空间，会因为收纳、视线与视觉噪音而产生完全不同的感受。',
        },
        points: [
          '没有规划的开放式层架，会不断提醒人还有未整理的物品。',
          '收纳不足会让餐桌、飘窗、厨房台面和卧室角落变成临时堆放区。',
          '太多材质、颜色和特色墙，会让紧凑户型看起来更小。',
          '真正安定的装修，应先规划收纳，而不是先购买装饰品。',
        ],
        takeaway: '实用风水转化：减少视觉噪音，保留清爽台面，并在选择软装之前先设计收纳。',
      },
      {
        eyebrow: '卧室安全感',
        title: '卧室“靠山位”本质上是心理安全感',
        intro: '传统所谓的“床位有靠”，实用层面的意义是：人更容易在看得到入口、床位有保护感、房间动线可预测的环境中休息。',
        image: {
          src: '/fengshui/BEDROOM COMMAND POSITION.webp',
          alt: '新加坡HDB卧室风水床位规划示意图',
          caption: '真正有用的设计原则不是神秘感，而是可见性、可预测性和休息时的保护感。',
        },
        points: [
          '如有选择，避免房门一打开就直接冲向睡眠区。',
          '在小型HDB卧室中，床边走道与衣柜开启空间必须实际可用。',
          '使用柔和灯光与安静材质，降低睡前刺激。',
          '不要为了平面图好看而牺牲衣柜、床头柜和日常使用空间。',
        ],
        takeaway: '实用风水转化：打造一个安全、安静、容易移动且有助睡眠的卧室。',
      },
      {
        eyebrow: '灯光生理学',
        title: '灯光会影响情绪、昼夜节律以及空间感',
        intro: '很多新加坡装修太迟才考虑灯光。但灯光会改变材质质感、居家放松感，以及每个区域在晚上是否真正好用。',
        image: {
          src: '/fengshui/LIGHTING LAYERS EXPLAINER.webp',
          alt: '新加坡HDB Japandi风格分层灯光说明图',
          caption: '安定的家通常不只靠一盏主灯，而是由基础照明、功能照明与柔和重点照明共同组成。',
        },
        points: [
          '温暖的环境光有助于晚上放松。',
          '厨房、梳妆区、书桌和衣柜需要功能照明，减少眼睛疲劳。',
          '过白过亮的灯光，可能让米色、taupe和橡木材质显得平淡或冷硬。',
          '间接灯光应支持建筑层次，而不是变成夸张酒店式灯槽。',
        ],
        takeaway: '实用风水转化：用分层灯光支持白天精神状态与夜晚放松感。',
      },
      {
        eyebrow: '日常动线',
        title: '厨房动线是最实用的风水',
        intro: '一个看起来漂亮、但每天都让人走来走去的厨房，会制造长期烦躁。水槽、备餐区、炉灶、冰箱和收纳必须形成自然顺序。',
        image: {
          src: '/fengshui/KITCHEN WORKFLOW.webp',
          alt: '新加坡HDB厨房水槽备餐炉灶与收纳动线规划图',
          caption: '好的厨房规划能减少重复移动、台面杂乱和每天煮饭时的摩擦。',
        },
        points: [
          '如空间允许，洗、切、煮之间应保留足够备餐台面。',
          '高柜、冰箱门或岛台不应阻塞主要工作路径。',
          '电源点与电器位置应在确认木工前规划。',
          '水槽、炉灶、水龙头不应在未核对尺寸与安装要求前太早购买。',
        ],
        takeaway: '实用风水转化：顺畅的厨房动线能减少压力，因为身体每天不需要和布局对抗。',
      },
      {
        eyebrow: '入户动线',
        title: '玄关决定回家的第一情绪',
        intro: '进入家中的前几步非常重要。若玄关堆满鞋子、包包和杂物，人还没走到客厅就已经感到拥挤和烦躁。',
        image: {
          src: '/fengshui/ENTRYWAY FLOW COMPARISON.webp',
          alt: '新加坡HDB玄关动线与杂乱对比图',
          caption: '玄关规划的重点是卸下压力：鞋子、钥匙、包包、包裹和日用品进入家后应该放在哪里。',
        },
        points: [
          '鞋柜、日常包包和清洁工具应靠近入口，但不能阻碍动线。',
          '容易杂乱的区域，更适合使用封闭式收纳。',
          '回家的第一眼应尽量安定，而不是充满柜体或零散物品。',
          '对紧凑HDB玄关来说，浅柜往往比让走道变窄的深柜更实用。',
        ],
        takeaway: '实用风水转化：入口应该让人轻松进入家，而不是在日常生活开始前就感到拥挤。',
      },
    ],
    styleTitle: 'Japandi之所以疗愈，是因为它降低视觉噪音',
    styleIntro:
      'Japandi在新加坡受欢迎，不只是因为看起来温暖高级。它也符合许多疗愈型设计目标：较低的视觉对比、自然质感、隐藏式收纳、柔和灯光，以及不会压迫紧凑空间的家具比例。',
    styleImages: [
      { src: '/fengshui/Living room.webp', alt: '温暖Japandi新加坡HDB客厅，橡木地板与柔和中性色', caption: '客厅：清晰视线、温润木色、柔和中性色与真实HDB比例。' },
      { src: '/fengshui/master bedroom.webp', alt: '新加坡HDB Japandi主卧，柔和灯光与浅木木工', caption: '主卧：有保护感的睡眠区、柔软材质与低刺激视觉环境。' },
      { src: '/fengshui/Dinning.webp', alt: '新加坡HDB温暖Japandi餐厅，环境灯光与浅木色细节', caption: '餐厅：温暖环境光与适合家庭日常使用的布局。' },
      { src: '/fengshui/Commen bedroom.webp', alt: '新加坡HDB普通房，结合Japandi书桌与收纳规划', caption: '普通房：工作、休息和收纳在紧凑空间中保持轻盈。' },
      { src: '/fengshui/Lighting.webp', alt: '新加坡HDB Japandi室内温暖嵌灯与间接照明细节', caption: '灯光细节：柔和建筑阴影，而不是夸张灯槽效果。' },
    ],
    mistakesTitle: '新加坡屋主仍然常犯的风水装修错误',
    mistakesIntro: '最昂贵的错误，通常发生在屋主只照搬规则或流行趋势，却没有检查是否适合自己的平面图、生活习惯和预算。',
    mistakes: [
      { title: '重象征，轻功能', text: '布局必须先解决收纳、动线、灯光与舒适度。象征性摆设无法弥补一个难住的家。' },
      { title: '在小房间中过度做木工', text: '太多到顶柜会让紧凑HDB卧室或玄关显得压迫。收纳必须与空间呼吸感平衡。' },
      { title: '选择深色饰面却没有灯光规划', text: '深色板材、深色特色墙与不合理灯位，会让采光不足的空间显得沉重。' },
      { title: '现场检查前太早购买海外用品', text: '过大家具、不兼容水龙头、电压不适合的电器或运输延误，都会影响装修节奏并增加压力。' },
      { title: '忽略日常维护', text: '开放层架、纹理表面和装饰凹位在效果图中很美，但若不符合家庭习惯，入住后容易变成杂物区。' },
    ],
    checklistTitle: '实用风水装修检查清单',
    checklistIntro: '在确认布局、木工和灯光前，可用这份清单进行讨论，让风水规划保持实用且安全。',
    checklist: [
      { title: '视线', text: '主门、窗户和主要动线是否清晰，没有被杂物或柜体压迫？' },
      { title: '动线', text: '家具、柜体和电器安装后，走道是否仍然舒适？' },
      { title: '收纳', text: '日常用品是否有固定收纳区域，而不是依赖临时篮子和层架？' },
      { title: '灯光', text: '每个区域是否根据使用方式安排了环境光、功能光或重点光？' },
      { title: '卧室安定感', text: '床位是否有保护感，同时不影响衣柜和床边使用？' },
      { title: '厨房流程', text: '洗、切、煮、上菜是否顺畅，不需要反复折返？' },
      { title: '材质克制', text: '同一个房间内是否有太多颜色、板材、线条或特色元素互相竞争？' },
      { title: '未来后悔', text: '当流行感过去后，这个布局是否仍然舒服好住？' },
    ],
    interlinkTitle: '围绕真实生活方式规划装修',
    interlinkText: '安定的家，在装修开始前就已经被规划好。以下ID Work Studio资源可帮助您把疗愈设计与费用、错误、购买决策和风格方向联系起来。',
    linkCards: [
      { title: '新加坡翻新费用', text: '了解工程范围、拆除、木工、电气和材料选择如何影响装修预算。', href: '/insights/renovation-cost-singapore-2026', label: '阅读费用指南' },
      { title: '常见装修错误', text: '了解布局不清、仓促购买和决策不明确，为什么容易导致返工和后悔。', href: '/insights/renovation-mistakes-singapore', label: '避免错误' },
      { title: '海外购买翻新用品', text: '购买家具、灯具、水龙头或电器前，先检查尺寸、兼容性、运输和保修风险。', href: '/insights/overseas-renovation-shopping-singapore', label: '购买前先了解' },
      { title: '装修费用计算器', text: '在确认完整设计方向前，先估算HDB、公寓或转售屋装修预算。', href: '/renovation-cost-calculator', label: '打开计算器' },
      { title: 'HDB装修风格测验', text: '探索哪一种装修风格更符合您的生活习惯、视觉安定感和日常需求。', href: '/hdb-renovation-style-quiz', label: '开始风格测验' },
    ],
    faqTitle: '常见问题：风水装修、疗愈设计与新加坡住宅',
    faqIntro: '给准备装修HDB或公寓的新加坡屋主的简短答案，以更实用、现代的方式理解风水。',
    faqs: [
      { question: '风水对现代新加坡住宅还有意义吗？', answer: '有，但前提是把它视为实用空间规划，而不是迷信。许多有用的风水概念与环境心理学相通，包括清晰动线、舒适灯光、视觉安定、收纳纪律以及卧室安全感。对HDB和公寓来说，这些原则尤其重要，因为紧凑户型容错率较低。' },
      { question: '为什么杂乱的家会让人精神压力大？', answer: '杂乱会制造视觉噪音。大脑需要处理更多物件、颜色和未完成的任务，让家显得沉重且难以放松。装修上的实际解决方法，不只是入住后整理，而是在一开始就设计好收纳、封闭柜和清爽台面。' },
      { question: '卧室布局会影响睡眠质量吗？', answer: '卧室布局会影响房间的安全感和安定感。能看到入口、有舒适走道、视觉杂乱较少的床位，通常更适合休息。这就是“靠山位”的实用解释：它帮助建立心理安全感，并降低睡前潜意识警觉。' },
      { question: '小型新加坡住宅什么布局较能减少压力？', answer: '较能减压的布局通常有清晰走道、隐藏式收纳、柔和灯光、安定材质和尺寸合适的家具。在HDB和紧凑公寓中，避免过大木工并保留动线，往往比增加更多装饰特色更重要。' },
      { question: 'Japandi设计适合疗愈型室内设计吗？', answer: '适合。Japandi使用温暖中性色、自然质感、低视觉对比和实用收纳，很适合疗愈型家居。对新加坡屋主而言，它能营造高级但安定的居家感，而不会让空间过度装饰或视觉拥挤。' },
      { question: '灯光真的会影响情绪和身心状态吗？', answer: '会。灯光会影响房间感受、材质呈现以及不同时间的舒适度。温暖环境光有助晚上放松，功能照明提升实用性，而分层灯光能避免只靠一盏强白主灯所产生的扁平和刺眼感。' },
      { question: '不良装修规划会影响心理舒适度吗？', answer: '会。不良规划会增加日常烦躁，例如走道被挡、收纳不足、房间偏暗、厨房动线不顺和家具过大。这些问题在设计阶段看似很小，但入住后会不断影响日常生活。' },
      { question: '新加坡最常见的风水装修错误是什么？', answer: '常见错误包括过度关注象征摆设、复制不符合HDB比例的Pinterest布局、使用深色饰面却没有灯光规划、过度做木工，以及未检查现场尺寸就购买家具或五金。实用舒适应先于装饰。' },
      { question: '风水应该在装修开始前就考虑吗？', answer: '应该。如果把风水理解为布局、灯光、收纳和动线，它就应该在木工和电气图确认前讨论。装修前规划清楚卧室位置、灯位、储物区和动线，比交屋后再修改容易得多。' },
    ],
    ctaTitle: '打造一个真正支持生活方式的家',
    ctaText: '好的新加坡住宅设计不只要漂亮，也应该支持更好的休息、更顺畅的日常、更清晰的收纳与长期情绪舒适。',
    ctaPrimary: 'WhatsApp 联系 ID Work Studio',
    ctaSecondary: '查看住宅服务',
    breadcrumbCurrent: '新加坡风水装修',
  },
};

export default function FengShuiRenovationSingapore() {
  const { i18n } = useTranslation();
  const lang = i18n.language === 'zh' ? 'zh' : 'en';
  const t = content[lang];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: t.title,
    description: t.metaDescription,
    image: 'https://idworkstudio.com/fengshui/FS-hero.webp',
    url: t.canonical,
    datePublished: '2026-05-11',
    dateModified: '2026-05-11',
    author: {
      '@type': 'Organization',
      name: 'ID Work Studio',
      url: 'https://idworkstudio.com/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ID Work Studio',
      url: 'https://idworkstudio.com/',
    },
    mainEntityOfPage: t.canonical,
    inLanguage: lang === 'zh' ? 'zh-SG' : 'en-SG',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: lang === 'zh' ? '首页' : 'Home', item: 'https://idworkstudio.com/' },
      { '@type': 'ListItem', position: 2, name: lang === 'zh' ? '见解' : 'Insights', item: 'https://idworkstudio.com/insights' },
      { '@type': 'ListItem', position: 3, name: t.breadcrumbCurrent, item: t.canonical },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDescription} />
        <link rel="canonical" href={t.canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={t.canonical} />
        <meta property="og:title" content={t.metaTitle} />
        <meta property="og:description" content={t.metaDescription} />
        <meta property="og:image" content="https://idworkstudio.com/fengshui/FS-hero.webp" />
        <meta property="og:site_name" content="ID Work Studio" />
        <meta property="og:locale" content={lang === 'zh' ? 'zh_SG' : 'en_SG'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.metaTitle} />
        <meta name="twitter:description" content={t.metaDescription} />
        <meta name="twitter:image" content="https://idworkstudio.com/fengshui/FS-hero.webp" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <article className="bg-[#f7f2ea] text-[#1f1a17] selection:bg-gold selection:text-dark-charcoal">
        <section className="relative min-h-[72vh] overflow-hidden bg-black pt-28 md:pt-32 text-white">
          <div className="absolute inset-0">
            <img
              src="/fengshui/FS-hero.webp"
              alt={t.heroAlt}
              className="h-full w-full object-cover object-center opacity-70"
              fetchPriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/25" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl py-16 md:py-20">
              <span className="mb-5 inline-flex rounded-full border border-gold/60 bg-black/25 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-gold backdrop-blur-sm">
                {t.eyebrow}
              </span>
              <h1 className="max-w-4xl font-serif text-4xl font-bold leading-[0.98] tracking-tight md:text-6xl lg:text-7xl">
                {t.title}
              </h1>
              <p className="mt-7 max-w-2xl text-base font-light leading-8 text-white/82 md:text-lg">
                {t.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-white/75">
                <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-sm">{t.category}</span>
                <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-sm">{t.readTime}</span>
                <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-sm">HDB · Condo · Singapore</span>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#d8c8b1] bg-[#efe5d6] px-4 py-5 sm:px-6 lg:px-8">
          <p className="mx-auto max-w-5xl text-center text-xs leading-6 text-[#6f6257] md:text-sm">
            {t.heroCaption}
          </p>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="rounded-[2rem] border border-[#d8c8b1] bg-white/80 p-7 shadow-sm md:p-10">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold">{t.quickAnswerTitle}</span>
              <p className="mt-4 text-lg leading-8 text-[#3a322d] md:text-xl">{t.quickAnswer}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
              {t.summaryCards.map((card) => (
                <div key={card.title} className="rounded-3xl border border-[#dfd0be] bg-[#fffaf3] p-6">
                  <h2 className="font-serif text-2xl text-[#241f1b]">{card.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[#6f6257]">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Environmental Psychology</span>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-[#241f1b] md:text-5xl">{t.introTitle}</h2>
            <div className="mt-8 space-y-5 text-left text-base leading-8 text-[#5f554d] md:text-lg">
              {t.introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-14 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          {t.sections.map((section, index) => (
            <div
              key={section.title}
              className={`mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-[#dfd0be] bg-white/75 p-4 shadow-sm md:p-6 lg:grid-cols-2 lg:items-center ${
                index % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
              }`}
            >
              <div className="overflow-hidden rounded-[1.6rem] bg-[#eadfce]">
                <img src={section.image.src} alt={section.image.alt} className="h-full w-full object-cover" loading="lazy" decoding="async" />
              </div>
              <div className="p-4 md:p-8">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold">{section.eyebrow}</span>
                <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-[#241f1b] md:text-4xl">{section.title}</h2>
                <p className="mt-5 text-base leading-8 text-[#5f554d]">{section.intro}</p>
                <ul className="mt-6 space-y-3">
                  {section.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-7 text-[#5f554d]">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-gold" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 rounded-2xl border border-gold/30 bg-gold/10 p-5 text-sm leading-7 text-[#5e4b2c]">
                  {section.takeaway}
                </div>
                <p className="mt-4 text-xs leading-6 text-[#8b7c6d]">{section.image.caption}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="bg-[#1f1a17] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-10 max-w-4xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Japandi Wellness</span>
              <h2 className="mt-4 font-serif text-3xl font-bold leading-tight md:text-5xl">{t.styleTitle}</h2>
              <p className="mt-6 text-base leading-8 text-white/70 md:text-lg">{t.styleIntro}</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {t.styleImages.map((image, index) => (
                <figure key={image.src} className={`${index === 0 ? 'lg:col-span-2' : ''} overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/5`}>
                  <img src={image.src} alt={image.alt} className="h-72 w-full object-cover md:h-80" loading="lazy" decoding="async" />
                  <figcaption className="p-5 text-sm leading-7 text-white/68">{image.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Renovation Regret Prevention</span>
                <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-[#241f1b] md:text-5xl">{t.mistakesTitle}</h2>
                <p className="mt-6 text-base leading-8 text-[#5f554d]">{t.mistakesIntro}</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {t.mistakes.map((mistake) => (
                  <div key={mistake.title} className="rounded-3xl border border-[#dfd0be] bg-white/80 p-6 shadow-sm">
                    <h3 className="font-serif text-2xl text-[#241f1b]">{mistake.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#5f554d]">{mistake.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#efe5d6] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Practical Checklist</span>
              <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-[#241f1b] md:text-5xl">{t.checklistTitle}</h2>
              <p className="mt-6 text-base leading-8 text-[#5f554d]">{t.checklistIntro}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {t.checklist.map((item, index) => (
                <div key={item.title} className="rounded-3xl border border-[#d5c4ad] bg-white/70 p-6">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#241f1b] text-xs font-bold text-gold">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-serif text-2xl text-[#241f1b]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5f554d]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#dfd0be] bg-white/80 p-6 shadow-sm md:p-10">
            <div className="mb-8 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Related Planning Guides</span>
              <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-[#241f1b] md:text-5xl">{t.interlinkTitle}</h2>
              <p className="mt-6 text-base leading-8 text-[#5f554d]">{t.interlinkText}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {t.linkCards.map((card) => (
                <Link key={card.href} to={card.href} className="group rounded-3xl border border-[#dfd0be] bg-[#fffaf3] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <h3 className="font-serif text-2xl leading-tight text-[#241f1b] group-hover:text-gold">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5f554d]">{card.text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#241f1b] group-hover:text-gold">
                    {card.label}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-gold">FAQ</span>
              <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-[#241f1b] md:text-5xl">{t.faqTitle}</h2>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#5f554d]">{t.faqIntro}</p>
            </div>
            <div className="space-y-3">
              {t.faqs.map((faq, index) => (
                <details key={faq.question} className="group rounded-2xl border border-[#dfd0be] bg-white/80 p-5 shadow-sm" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-serif text-xl text-[#241f1b]">
                    {faq.question}
                    <span className="text-gold transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-[#5f554d]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#1f1a17] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="flex gap-4 text-gold">
              <ShieldCheck className="h-8 w-8" />
              <Route className="h-8 w-8" />
              <Lightbulb className="h-8 w-8" />
              <Moon className="h-8 w-8" />
              <Sparkles className="h-8 w-8" />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold leading-tight md:text-5xl">{t.ctaTitle}</h2>
              <p className="mt-5 text-base leading-8 text-white/70 md:text-lg">{t.ctaText}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://wa.me/6598333085"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-dark-charcoal transition-all duration-300 hover:bg-gold-hover"
                >
                  {t.ctaPrimary}
                </a>
                <Link
                  to="/residential"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:border-gold hover:text-gold"
                >
                  {t.ctaSecondary}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
