import { Head } from 'vite-react-ssg';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

/**
 * ============================================================================
 * KNOWLEDGE METADATA (AUTHOR ONLY)
 * ============================================================================
 *
 * Knowledge Metadata
 *
 * Primary Section
 * ☑ Residential
 * □ Commercial
 * □ Both
 *
 * Primary Knowledge Topic:
 * Home Lighting Design
 *
 * Primary Entity:
 * Residential Lighting Design
 *
 * Related Planning Tool:
 * None
 *
 * Related Service Page:
 * /residential
 *
 * Related Guides:
 * /insights/hdb-renovation-timeline-singapore
 * /insights/renovation-mistakes-singapore
 * /insights/renovation-cost-singapore-2026
 *
 * ============================================================================
 *
 * VERIFIED BASIS (checked 26 Aug 2026)
 *
 * HDB renovation guidance:
 * - False ceilings must maintain at least 2.4 m clear height from finished floor
 *   level, subject to HDB's stated exceptions.
 * - Ceiling-fan blades must maintain at least 2.4 m clear height from finished
 *   floor level.
 *
 * Lighting guidance:
 * - Kelvin describes colour appearance, not brightness.
 * - Lumens describe source output; lux describes light arriving on a surface.
 * - No universal downlight-to-fan spacing is stated because fan diameter,
 *   blade height, ceiling height, beam angle and target surface all matter.
 * - Residential lighting should be personalised to task, age and preference.
 *
 * ============================================================================
 */

type VisualItem = {
  src: string;
  alt: string;
  caption: string;
};

type SectionLink = {
  label: string;
  to: string;
  text: string;
};

type ArticleSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  visual?: VisualItem;
  links?: SectionLink[];
  callout?: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type SourceItem = {
  label: string;
  href: string;
};

type ArticleContent = {
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  heroAlt: string;
  quickAnswerTitle: string;
  quickAnswer: string;
  principleTitle: string;
  principleText: string;
  temperatureTitle: string;
  temperatureIntro: string;
  temperatureRows: { temperature: string; character: string; use: string }[];
  sections: ArticleSection[];
  checklistTitle: string;
  checklistIntro: string;
  checklistItems: string[];
  mistakesTitle: string;
  mistakes: { title: string; text: string }[];
  midCtaTitle: string;
  midCtaText: string;
  midCtaButton: string;
  faqTitle: string;
  faqs: FaqItem[];
  finalCtaTitle: string;
  finalCtaText: string;
  finalCtaPrimary: string;
  finalCtaSecondary: string;
  sourcesTitle: string;
  sourcesNote: string;
  sources: SourceItem[];
  breadcrumbCurrent: string;
};

const content: Record<"en" | "zh", ArticleContent> = {
  en: {
    metaTitle:
      "Home Lighting Design Singapore: HDB Renovation Guide | ID Work Studio",
    metaDescription:
      "Plan home lighting for a Singapore HDB renovation: downlight placement, ceiling fans, colour temperature, task lighting, concealed LEDs and smart GU10s.",
    canonical:
      "https://idworkstudio.com/insights/home-lighting-design-singapore",
    eyebrow: "Singapore Home Lighting Guide · 2026",
    title:
      "How to Plan Home Lighting for Your Renovation in Singapore",
    subtitle:
      "Good lighting is not about filling the ceiling with downlights. Plan around people, furniture, task surfaces, ceiling fans, colour temperature and how each part of the home is actually used.",
    category: "Residential · Lighting Design",
    readTime: "14 min read",
    heroAlt:
      "Warm Japandi living room illustrating people-first home lighting design for a Singapore renovation",

    quickAnswerTitle: "Quick answer: plan the room before the lights",
    quickAnswer:
      "A good home lighting plan starts with how people use the space, not with a fixed number of downlights. First settle the important furniture and carpentry positions, then identify the surfaces that need light, the direction that light should come from, the colour temperature and brightness that suit the occupants, and how each lighting layer will be controlled. In Singapore homes, ceiling fans, false ceilings, compact HDB layouts and multi-generation preferences make this coordination especially important.",

    principleTitle: "The IDWS lighting sequence",
    principleText:
      "People → Activity → Furniture / Architecture → Target Surface → Light Direction → Fitting → Output / Colour → Control",

    temperatureTitle: "A practical colour-temperature starting point",
    temperatureIntro:
      "Colour temperature is personal. These ranges are useful starting points, not universal rules. A warmer home can still have brighter neutral task lighting exactly where work happens.",
    temperatureRows: [
      {
        temperature: "2700K–3000K",
        character: "Warm, calm, residential",
        use: "Living rooms, bedrooms, ambient and mood lighting",
      },
      {
        temperature: "3500K–4000K",
        character: "Neutral, functional",
        use: "Kitchen worktops, studies, grooming and selected task surfaces",
      },
      {
        temperature: "5000K–6000K",
        character: "Cooler / whiter appearance",
        use: "Where occupants strongly prefer a very white visual environment",
      },
    ],

    sections: [
      {
        title: "Start with people, not light fittings",
        paragraphs: [
          "A common lighting mistake is to open a floor plan and distribute downlights neatly across the ceiling. The drawing may look balanced, but people do not live according to a ceiling grid.",
          "Someone sits on a sofa to read. Someone prepares food at a kitchen counter. Someone works at a desk. Someone gets ready in front of a mirror. Those activities tell us where useful light is actually needed.",
          "Before choosing a fitting, ask who uses the space, what they do there, where the furniture will sit, what surface needs illumination and from which direction the light should arrive. Only then decide which fitting can do the job comfortably.",
        ],
        callout:
          "So what? Lighting planning should happen together with space planning, not after the furniture and carpentry decisions have already been fixed.",
      },
      {
        title: "Different activities need different light",
        paragraphs: [
          "A home does not have one lighting requirement. The same person may relax on the sofa at night, work on a laptop in the afternoon, prepare food in the kitchen and get dressed in front of a mirror in the morning.",
          "Relaxing usually suits softer ambient light. Reading needs useful light on the page. Cooking needs stronger task light on the worktop. Grooming needs even light reaching the face. Dining benefits from light that relates to the table and people rather than simply the room centre.",
          "The mistake is expecting one ceiling-light arrangement to perform all these jobs equally well.",
        ],
        visual: {
          src: "/insights/home-lighting-visual-02-activity-lighting.webp",
          alt: "Person reading under focused task lighting in a warm Japandi living room",
          caption:
            "Activity changes the lighting requirement: relaxing, reading, cooking and grooming do not need the same light.",
        },
      },
      {
        title: "Finalise important furniture before finalising the lights",
        paragraphs: [
          "Furniture position affects lighting position. A pendant should relate to the dining table, not simply the geometric centre of the room. A reading light should relate to the chair. Display lighting should know what it is meant to highlight.",
          "The same principle applies to built-in carpentry. If your renovation includes a television feature, study desk, display shelves, full-height cabinet or kitchen wall cabinets, coordinate their lighting before electrical and ceiling works are completed.",
          "Moving a dining table slightly after renovation is easy. Moving a ceiling point or reopening completed carpentry because the lighting was planned too late is not.",
        ],
        visual: {
          src: "/insights/home-lighting-visual-03-furniture-lighting.webp",
          alt: "Japandi dining area showing pendant lighting coordinated with furniture placement",
          caption:
            "Furniture should guide lighting positions. A dining light belongs to the table, not automatically to the centre of the room.",
        },
        links: [
          {
            label: "HDB renovation timeline",
            to: "/insights/hdb-renovation-timeline-singapore",
            text: "See when design, electrical and carpentry decisions should be finalised during renovation",
          },
        ],
      },
      {
        title: "Light the surface that actually needs light",
        paragraphs: [
          "A room can look bright while the area where you actually need to see remains poorly illuminated. The better question is not only “Is this room bright enough?” but “Is the right surface receiving useful light?”",
          "If you are preparing food, the target is the countertop. If you are reading, it is the page. If you are working, it is the desk. If you are grooming, it is your face.",
          "Lumens describe how much light a lamp produces; lux describes how much of that light actually reaches a surface. That is why two fittings with similar output can perform differently depending on beam angle, distance and where the light is aimed.",
          "Sometimes the right solution is not another ceiling downlight. It is bringing the light closer to the task and directing it properly.",
        ],
        visual: {
          src: "/insights/home-lighting-visual-04-target-surface-lighting.webp",
          alt: "Kitchen worktop illuminated by focused under-cabinet task lighting",
          caption:
            "Good lighting targets what needs to be seen, not simply the room around it.",
        },
      },
      {
        title: "Ambient, task and accent lighting have different jobs",
        paragraphs: [
          "Ambient lighting provides general illumination so the room is comfortably usable. Task lighting gives more useful light where something specific is being done. Accent lighting draws attention to a material, object or architectural detail.",
          "These layers do not need to be equally bright. A comfortable home can use restrained ambient lighting with additional light exactly where it is needed.",
          "Not every lighting layer needs to be switched on at the same time. The value of layering is that the same room can support relaxing, entertaining, reading or cleaning without one permanent lighting condition.",
        ],
        visual: {
          src: "/insights/home-lighting-visual-05-lighting-layers.webp",
          alt: "Warm Japandi living room demonstrating ambient, task and accent lighting layers",
          caption:
            "Layered lighting gives different lights different jobs instead of asking one ceiling grid to do everything.",
        },
      },
      {
        title: "Kitchen task lighting: do not let your own body block the light",
        paragraphs: [
          "Kitchen lighting is one of the clearest examples of the difference between a bright room and a well-lit task. If the main light is behind or above you while you prepare food, your body can partially block the beam and cast a shadow onto the worktop.",
          "Under-cabinet lighting can place useful light much closer to the countertop and reduce dependence on ceiling lighting alone. A neutral-white setting around 3500K–4000K can feel functional at the work surface while the surrounding kitchen remains warmer.",
          "When reviewing your kitchen plan, mentally stand at the sink, hob and preparation area and ask where your shadow will fall. That question is often more useful than asking how many downlights are in the room.",
        ],
        visual: {
          src: "/insights/home-lighting-visual-06-kitchen-task-lighting.webp",
          alt: "Woman preparing food under neutral-white under-cabinet task lighting in a Japandi kitchen",
          caption:
            "Working light should reach the countertop without the person standing there blocking it.",
        },
      },
      {
        title: "Accent lighting gives a home depth",
        paragraphs: [
          "Not every light needs to make the room brighter. Some lights are there to reveal materials and create visual hierarchy.",
          "A carefully positioned spotlight can bring out wall texture. Concealed light can make carpentry feel lighter. A small amount of illumination in a display cabinet can give an otherwise dark corner depth.",
          "Lighting a wall, curtain or textured vertical surface can also make a room feel brighter and more spacious without simply adding more downward-facing ceiling lights.",
          "The common mistake is highlighting everything. Accent lighting works because some areas are allowed to remain quieter.",
        ],
        visual: {
          src: "/insights/home-lighting-visual-07-accent-lighting.webp",
          alt: "Japandi console and wall detail illuminated with selective accent lighting",
          caption:
            "Accent light works best when it selectively reveals texture, objects or architectural details.",
        },
      },
      {
        title: "Mood lighting is about comfort, not simply making everything dim",
        paragraphs: [
          "For many living rooms and bedrooms, ID Work Studio often starts around 3000K where the intention is a warmer residential atmosphere. It tends to suit timber, fabric and warm neutral interiors well.",
          "But 3000K is not a universal rule. Some homeowners, including some older occupants we meet, genuinely prefer much whiter light. A beautiful lighting scheme that the people living there find uncomfortable is not successful design.",
          "The important distinction is that colour temperature and brightness are separate. A 3000K lamp can be bright, and a 6000K lamp can be dim. Kelvin describes colour appearance; it does not tell you how much useful light reaches the task surface.",
        ],
        visual: {
          src: "/insights/home-lighting-visual-08-mood-lighting.webp",
          alt: "Warm Japandi bedroom using soft 3000K-style ambient mood lighting",
          caption:
            "Warm ambient lighting can create a calm residential atmosphere, but occupant preference should still guide the final choice.",
        },
      },
      {
        title: "A warm home still needs proper working light",
        paragraphs: [
          "The danger of focusing only on beautiful mood lighting is that the home photographs well but becomes frustrating to use. A warm home can still have proper working light by localising brighter task illumination where the work happens.",
          "A study can keep warm general illumination in the background while the desk receives brighter neutral task light. That gives someone useful light for writing or working without turning the whole room into an office.",
          "This is the same design principle used in the kitchen: keep the atmosphere comfortable, then strengthen the light where the task requires it.",
        ],
        visual: {
          src: "/insights/home-lighting-visual-09-study-task-lighting.webp",
          alt: "Home study with warm ambient lighting and brighter task light on the desk",
          caption:
            "Functional lighting can be localised. The desk can be brighter without making the whole room cool or harsh.",
        },
      },
      {
        title: "Layered lighting changes how a home feels at night",
        paragraphs: [
          "Lighting design becomes most obvious after sunset. During the day, windows contribute natural light. At night, every visible layer of illumination comes from the decisions made during renovation.",
          "A living room might combine restrained general light, concealed lighting at the television console, a floor or table lamp and selective accent lighting. Watching television may need one scene; entertaining guests may need another; cleaning may require considerably more light.",
          "A good lighting scheme gives you choices instead of one permanent all-on condition.",
        ],
        visual: {
          src: "/insights/home-lighting-visual-10-layered-lighting-night.webp",
          alt: "Japandi living room at night with layered ceiling, lamp, shelf and concealed lighting",
          caption:
            "At night, separate lighting layers let the same room shift between relaxing, entertaining and practical use.",
        },
      },
      {
        title: "Vanity lighting: your face is the task surface",
        paragraphs: [
          "Bathroom lighting can be bright while still giving poor grooming light. A downlight positioned directly above a person can create shadows beneath the eyebrows, eyes, nose and chin.",
          "Where the design allows, more frontal or side illumination can produce more even light on the face for shaving, skincare, makeup and checking attire. A neutral-white setting around 3500K–4000K can be a practical preference for this task area.",
          "This is one of the situations where we deliberately allow useful light to reach the person directly because the person is effectively the task surface.",
        ],
        visual: {
          src: "/insights/home-lighting-visual-11-vanity-task-lighting.webp",
          alt: "Bathroom vanity with balanced frontal and side lighting for grooming",
          caption:
            "Vanity lighting should illuminate the face evenly instead of relying only on one overhead downlight.",
        },
      },
      {
        title: "Ceiling fans and downlights need to be planned together",
        paragraphs: [
          "Ceiling fans are common in Singapore homes, but their relationship with downlights is often overlooked. If a rotating blade repeatedly crosses a useful light beam, the interruption can create moving shadows or a flicker-like effect.",
          "There is no single safe distance that works for every fan. Fan diameter, blade height, ceiling height, downlight position, beam angle and the target area all affect the result. The correct approach is to look at the actual fan sweep and the light beam together rather than relying on one arbitrary spacing rule.",
          "HDB currently requires false ceilings to maintain at least 2.4 m clear height from finished floor level, subject to its stated exceptions, and ceiling-fan blades must also maintain at least 2.4 m clear height from finished floor level. Check the actual site and chosen fan model before finalising the ceiling and lighting arrangement.",
        ],
        callout:
          "So what? Choose the fan model and approximate fan position early enough for the designer to coordinate the lighting around its actual dimensions.",
      },
      {
        title: "Concealed LED lighting: see the effect, not the LED",
        paragraphs: [
          "LED strips can be integrated below a television console, inside display cabinets, beneath shelves, within niches, around selected mirror details, inside ceiling coves and within carpentry.",
          "For most ambient applications, the result is more refined when the source is concealed and you see the illuminated surface rather than individual LED points. A suitable profile and diffuser can also help create a more continuous line of light and reduce glare.",
          "Display cabinets need extra care because glass can reflect the source and shelves can block light. Integrated LED positions should therefore be coordinated with the carpentry detail before the cabinet is built.",
        ],
      },
      {
        title: "Smart GU10 lighting can solve a real household problem",
        paragraphs: [
          "One option ID Work Studio increasingly recommends considering is a replaceable smart GU10 lamp that allows brightness and white colour temperature to be adjusted. The main everyday value is not novelty RGB colour; it is adaptability.",
          "The same living space can be warmer and dimmer in the evening, brighter for cleaning, or more neutral for detailed tasks. This is also useful when family members prefer different lighting conditions.",
          "Smart does not automatically mean good. Check beam angle, output, dimming range, colour rendering, physical fit, control reliability and what happens when the wall switch is turned off. The lamp still needs to perform well as a light source; the app is secondary.",
        ],
        links: [
          {
            label: "Renovation cost guide",
            to: "/insights/renovation-cost-singapore-2026",
            text: "See how lighting, ceiling and carpentry choices can affect your overall renovation budget",
          },
        ],
      },
      {
        title: "Lighting should work with your materials",
        paragraphs: [
          "Light changes how finishes appear. Light timber, dark timber, stone, paint, fabric, glass and mirror do not respond in exactly the same way.",
          "Darker finishes generally absorb more light than pale surfaces. Glossy materials can produce reflections. Directional light can emphasise texture. Colour temperature can noticeably change how timber and warm neutral finishes are perceived.",
          "This is another reason lighting should be planned as part of the interior design rather than selected independently at the end. A material sample that looks beautiful under showroom lighting may feel very different in the finished home.",
        ],
      },
      {
        title: "Put everything together on the lighting plan",
        paragraphs: [
          "A complete lighting plan coordinates much more than downlight positions. It should consider furniture, carpentry, activities, task surfaces, ceiling design, fans, lighting layers and electrical controls together.",
          "The example below is based on an actual ID Work Studio HDB floor-plan reference, simplified for homeowner education. It is not a template telling every 4-room HDB owner where to install lights.",
          "Two flats with the same original floor plan can need different lighting because the families use them differently. One may need a work-from-home area, another may have elderly parents, one may use a large ceiling fan and another may prioritise display carpentry. The floor plan gives us the geometry; the occupants give us the lighting brief.",
        ],
        visual: {
          src: "/insights/home-lighting-visual-12-hdb-lighting-plan.webp",
          alt: "Simplified coordinated lighting plan for an anonymous 4-room HDB layout",
          caption:
            "Example only: a lighting plan should coordinate the actual furniture, tasks, fans, carpentry and controls for the household using the home.",
        },
        links: [
          {
            label: "Renovation mistakes guide",
            to: "/insights/renovation-mistakes-singapore",
            text: "Avoid the late design changes and coordination mistakes that create rework during renovation",
          },
          {
            label: "Residential renovation services",
            to: "/residential",
            text: "See how ID Work Studio plans HDB and condo renovation around daily living",
          },
        ],
      },
      {
        title: "Do not forget the switches and controls",
        paragraphs: [
          "Layered lighting is useful only if it is practical to control. If every ambient, task and accent light turns on from the same switch, much of the flexibility is lost.",
          "You may want general lighting, concealed ambient lighting, a dining pendant, task lighting and selected accent lights to operate separately. Two-way switching can also help where the same light needs to be controlled from different locations.",
          "The goal is not to install the maximum number of switches. It is to create a small number of useful lighting scenes that match how you actually live.",
        ],
      },
      {
        title: "Do you need a false ceiling to have good lighting?",
        paragraphs: [
          "No. A false ceiling can make recessed downlights and concealed lighting easier to integrate, but it is only one design tool.",
          "Track lights, surface-mounted fittings, pendant lights, wall lights, floor lamps, table lamps and carpentry-integrated lighting can all form part of a good scheme. In some homes, reducing the amount of false ceiling can also preserve a greater sense of height.",
          "The useful question is not “How many downlights can we fit?” but “What does this area need, and what is the cleanest way to provide it?”",
        ],
      },
    ],

    checklistTitle: "Before you approve the lighting plan: 12 questions to ask",
    checklistIntro:
      "Use this checklist before electrical work, ceiling construction and integrated carpentry lighting make changes more difficult.",
    checklistItems: [
      "Who uses each space?",
      "What activities happen there?",
      "Where will the major furniture actually sit?",
      "Which surfaces need proper task lighting?",
      "Where is softer ambient lighting enough?",
      "Could a ceiling fan interrupt an important light beam?",
      "Does the kitchen worktop receive direct useful light?",
      "Does the study have proper working light?",
      "Does the vanity illuminate the face rather than only the top of the head?",
      "Are concealed LED sources actually concealed?",
      "Can important lighting layers be controlled separately?",
      "Are the colour temperature and brightness comfortable for the people who will actually live there?",
    ],

    mistakesTitle: "Common home-lighting mistakes to avoid",
    mistakes: [
      {
        title: "Designing a ceiling grid before the furniture",
        text:
          "A symmetrical plan can still put light in the wrong place when the sofa, dining table, worktop or fan position is considered later.",
      },
      {
        title: "Using one lighting layer for everything",
        text:
          "Ambient, task and accent lighting have different jobs. Asking one ceiling system to do all three usually creates compromise.",
      },
      {
        title: "Making every part of the home equally bright",
        text:
          "Uniform brightness can remove depth and still fail to provide useful task light where people actually work.",
      },
      {
        title: "Confusing higher Kelvin with greater brightness",
        text:
          "Changing from 3000K to 6000K changes colour appearance. It does not automatically solve inadequate task illumination.",
      },
      {
        title: "Ignoring fan and beam interaction",
        text:
          "A downlight beam repeatedly interrupted by rotating blades can create distracting moving shadows.",
      },
      {
        title: "Adding LED strips after the carpentry is built",
        text:
          "Late LED decisions often expose the source, create hotspots or produce reflections that could have been avoided in the carpentry detail.",
      },
    ],

    midCtaTitle: "Unsure whether your lighting plan will actually work?",
    midCtaText:
      "Send us your floor plan and tell us how your household uses the home. ID Work Studio can help review the furniture, ceiling fans, task areas, carpentry and lighting decisions together before the electrical and ceiling works lock them in.",
    midCtaButton: "Send Your Floor Plan on WhatsApp",

    faqTitle: "Frequently asked questions about home lighting design",
    faqs: [
      {
        question: "How many downlights do I need for an HDB living room?",
        answer:
          "There is no reliable number based only on floor area. The number depends on furniture layout, ceiling height, fitting output, beam angle, ceiling-fan position, other lighting layers and the occupants' preferences. Start with what needs illumination rather than a fixed downlight count.",
      },
      {
        question: "How far should a downlight be from a ceiling fan?",
        answer:
          "There is no universal distance. Fan diameter, blade height, ceiling height, beam angle and the position of the light all affect whether the blades interrupt the beam and create moving shadows. Coordinate the actual fan and lighting layout rather than relying on one fixed spacing rule.",
      },
      {
        question: "Is 3000K or 4000K better for home lighting?",
        answer:
          "Neither is universally better. Around 3000K generally creates a warmer residential atmosphere, while 4000K feels more neutral and functional. Many homes can use warmer ambient lighting together with more neutral task lighting in kitchens, studies or grooming areas.",
      },
      {
        question: "Is 6000K too white for an HDB home?",
        answer:
          "Some homeowners find 6000K harsh for general residential ambience, while others genuinely prefer very white light. Personal preference matters. If the concern is visibility rather than colour preference, consider stronger task lighting before changing the entire home to a cooler colour temperature.",
      },
      {
        question: "Do I need a false ceiling for good home lighting?",
        answer:
          "No. False ceilings make recessed and concealed lighting easier to integrate, but track lights, surface-mounted fittings, pendants, wall lights and lamps can create an effective scheme without a full false ceiling.",
      },
      {
        question: "What lighting is best for a kitchen countertop?",
        answer:
          "Task lighting that directly illuminates the countertop is usually more useful than relying only on ceiling lighting. Under-cabinet lighting is common because it places the light close to the work surface and reduces the chance of your body blocking the useful light.",
      },
      {
        question: "What lighting should I use for a study or home office?",
        answer:
          "Use comfortable general illumination for the room and provide brighter task lighting at the desk. This allows the work surface to be well lit without making the entire room unnecessarily bright or cool.",
      },
      {
        question: "What is the best lighting for a bathroom vanity?",
        answer:
          "Lighting reaching the face from the front or sides generally produces more even grooming illumination than relying only on a downlight directly overhead, which can create shadows around the eyes, nose and chin.",
      },
      {
        question: "Should concealed LED strip lights be visible?",
        answer:
          "Usually not when the purpose is indirect or ambient lighting. Concealing the LED source lets you see the illuminated surface rather than individual bright points and generally creates a more refined result.",
      },
      {
        question: "Are smart GU10 bulbs worth using during renovation?",
        answer:
          "They can be worthwhile where adjustable brightness and colour temperature would be useful. They are especially useful in multi-use spaces or households where occupants have different lighting preferences. Beam angle, output, dimming quality and physical compatibility still matter.",
      },
      {
        question: "Should all the lights in my home use the same colour temperature?",
        answer:
          "No. Different functional zones can deliberately use different colour temperatures. What matters is that the transitions feel planned rather than accidental and that the occupants are comfortable with them.",
      },
      {
        question: "When should I finalise my lighting plan during renovation?",
        answer:
          "Ideally after the major furniture and carpentry layout is sufficiently resolved but before electrical wiring, ceiling construction and integrated carpentry lighting are finalised. This gives the design and electrical teams enough information to coordinate the lights with how the finished home will actually be used.",
      },
    ],

    finalCtaTitle: "Plan the lighting before the renovation locks it in",
    finalCtaText:
      "If you are unsure about downlight positions, ceiling fans, 3000K vs 4000K, kitchen task lighting, concealed LED details or how the lighting should work with your furniture and carpentry, send ID Work Studio your floor plan. We can help coordinate the lighting together with the space planning, electrical layout, ceiling design, carpentry and renovation works so the finished home is comfortable to live in—not only attractive in photographs.",
    finalCtaPrimary: "WhatsApp Your Floor Plan",
    finalCtaSecondary: "View Residential Renovation Services",

    sourcesTitle: "Primary references used for this guide",
    sourcesNote:
      "Regulatory statements are based on current HDB guidance. Lighting references are used to explain principles, not to create universal residential formulas.",
    sources: [
      {
        label: "HDB — Renovation Guidelines: Building Works",
        href: "https://www.hdb.gov.sg/managing-my-home/renovation-and-maintenance/renovation/renovation-guidelines/building-works",
      },
      {
        label: "HDB — Renovation Guidelines: Electrical Works",
        href: "https://www.hdb.gov.sg/managing-my-home/renovation-and-maintenance/renovation/renovation-guidelines/electrical-works",
      },
      {
        label: "CIE — Lighting for Older People and People with Visual Impairment",
        href: "https://cie.co.at/publications/lighting-older-people-and-people-visual-impairment-buildings",
      },
      {
        label: "IES — Residential Lighting Committee / RP-11",
        href: "https://ies.org/committee/residential-lighting/",
      },
      {
        label: "ERCO — Indirect Lighting",
        href: "https://www.erco.com/en/designing-with-light/lighting-knowledge/lighting-design/indirect-lighting-7497/",
      },
      {
        label: "Philips Hue Singapore — GU10 Smart Lighting",
        href: "https://www.philips-hue.com/en-sg/p/hue-white-ambiance-gu10-smart-spotlight/8720169247109",
      },
    ],

    breadcrumbCurrent: "Home Lighting Design Singapore",
  },

  zh: {
    metaTitle:
      "新加坡家居灯光设计：HDB 装修照明指南 | ID Work Studio",
    metaDescription:
      "新加坡 HDB 装修灯光设计指南：涵盖筒灯位置、吊扇、色温、厨房与梳妆台工作照明、隐藏式 LED 和智能 GU10。",
    canonical:
      "https://idworkstudio.com/insights/home-lighting-design-singapore",
    eyebrow: "新加坡家居灯光设计指南 · 2026",
    title: "新加坡装修应该怎样规划家居灯光？",
    subtitle:
      "好的灯光不是把天花板塞满筒灯，而是根据人、家具、工作面、吊扇、色温，以及每一个区域真正怎样使用来规划。",
    category: "住宅装修 · 灯光设计",
    readTime: "约14分钟阅读",
    heroAlt:
      "温暖 Japandi 客厅，示范新加坡住宅装修以人为本的家居灯光设计",

    quickAnswerTitle: "快速答案：先规划空间，再规划灯",
    quickAnswer:
      "好的家居灯光规划不是先决定要装多少盏筒灯，而是先看人怎样使用空间。先确认主要家具与木工位置，再找出真正需要照亮的工作面、光线应该从哪个方向来、住户喜欢什么亮度与色温，以及不同灯光应该怎样分组控制。对新加坡住宅来说，HDB 空间、吊扇、假天花和多代同住的不同偏好，都让这些协调更重要。",

    principleTitle: "IDWS 灯光规划顺序",
    principleText:
      "人 → 活动 → 家具 / 建筑条件 → 目标表面 → 光线方向 → 灯具 → 输出 / 色温 → 控制",

    temperatureTitle: "实用色温起点",
    temperatureIntro:
      "色温很个人化。以下只是实用起点，不是硬性标准。一个温暖的家，也完全可以在工作区域加入更明亮、较中性的任务照明。",
    temperatureRows: [
      {
        temperature: "2700K–3000K",
        character: "温暖、放松、住宅感",
        use: "客厅、卧室、环境光与气氛灯",
      },
      {
        temperature: "3500K–4000K",
        character: "较中性、较功能性",
        use: "厨房工作台、书房、梳妆及指定工作面",
      },
      {
        temperature: "5000K–6000K",
        character: "较冷、较白的视觉效果",
        use: "适合本身强烈喜欢很白灯光的住户",
      },
    ],

    sections: [
      {
        title: "先看人，不要先看灯具",
        paragraphs: [
          "很常见的做法，是打开平面图后把筒灯整齐地平均排在天花板上。图纸看起来很平衡，但人并不是按照天花网格生活的。",
          "有人坐在沙发阅读，有人在厨房台面备餐，有人在书桌工作，也有人在镜子前整理仪容。这些活动才告诉我们真正需要灯的地方。",
          "在选择灯具之前，先问：谁使用这个空间？在这里做什么？家具放在哪里？真正需要照亮的是什么表面？光应该从哪个方向来？最后才决定哪一种灯具最适合。",
        ],
        callout:
          "这对装修意味着什么？灯光应该跟空间规划一起做，而不是家具和木工都决定以后才补上。",
      },
      {
        title: "不同活动需要不同的灯",
        paragraphs: [
          "一个家不是只有一种灯光需求。同一个人晚上可能在沙发放松，下午用电脑工作，在厨房准备食物，早上又在镜子前整理仪容。",
          "放松通常适合较柔和的环境光；阅读需要书页有足够工作光；煮食需要台面有更直接的任务照明；梳妆则需要光均匀照到脸部；餐厅灯光也应该跟餐桌和坐着的人有关系，而不是只对准房间正中央。",
          "常见错误，是希望同一组天花灯同时把所有事情都做好。",
        ],
        visual: {
          src: "/insights/home-lighting-visual-02-activity-lighting.webp",
          alt: "温暖 Japandi 客厅里，住户在阅读，并有针对活动的工作照明",
          caption:
            "活动不同，灯光需求也不同：放松、阅读、煮食和梳妆不应该使用完全一样的照明方式。",
        },
      },
      {
        title: "重要家具确定后，再确定最终灯位",
        paragraphs: [
          "家具位置会影响灯位。吊灯应该跟餐桌有关系，不是单纯跟房间几何中心对齐；阅读灯应该跟座椅位置有关；展示灯也应该先知道自己要照什么。",
          "内置木工也是一样。如果装修包含电视墙、书桌、展示层架、通顶柜或厨房吊柜，灯光最好在电路和天花工程完成之前一起协调。",
          "装修后把餐桌移动一点很容易；为了移动电源点而重新开天花，或因为灯光规划太迟而拆已完成的木工，就完全是另一回事。",
        ],
        visual: {
          src: "/insights/home-lighting-visual-03-furniture-lighting.webp",
          alt: "Japandi 餐厅示范吊灯与餐桌和家具位置协调",
          caption:
            "家具应该引导灯位。餐厅灯应该跟餐桌对齐，而不是自动对准房间中心。",
        },
        links: [
          {
            label: "HDB 装修时间指南",
            to: "/insights/hdb-renovation-timeline-singapore",
            text: "了解装修过程中，设计、电路与木工应该在什么时候确认",
          },
        ],
      },
      {
        title: "照亮真正需要看清楚的地方",
        paragraphs: [
          "一个房间看起来很亮，不代表真正需要使用的地方就有足够光。更好的问题不是只有“这个房间够不够亮？”，而是“真正需要使用的表面有没有得到合适的光？”",
          "准备食物时，目标是厨房台面；阅读时，是书页；工作时，是书桌；梳妆时，则是脸部。",
          "流明（lumens）表示灯具产生多少光；照度（lux）表示这些光有多少真正到达某个表面。所以两盏输出相近的灯，也可能因为光束角度、距离和照射方向不同，在工作面产生完全不同的效果。",
          "有时候解决方法不是再加一盏筒灯，而是把灯拉近工作面，并让光线从正确方向到达。",
        ],
        visual: {
          src: "/insights/home-lighting-visual-04-target-surface-lighting.webp",
          alt: "厨房台面由隐藏式工作灯直接照亮",
          caption:
            "好的照明应该照亮真正需要使用的表面，而不是只让整个房间看起来很亮。",
        },
      },
      {
        title: "环境光、工作光和重点光各有不同任务",
        paragraphs: [
          "环境光让整个空间基本舒适可用；工作光针对煮食、阅读、工作或梳妆等具体活动；重点光则用来突出材质、物件或建筑细节。",
          "这些灯不需要一样亮。一个舒服的家可以把环境光控制得比较克制，然后在真正需要的地方补上更有用的光。",
          "也不需要每一层灯光同时全部开启。分层的价值，就是让同一个空间可以在放松、招待客人、阅读或打扫时有不同状态。",
        ],
        visual: {
          src: "/insights/home-lighting-visual-05-lighting-layers.webp",
          alt: "温暖 Japandi 客厅展示环境光、工作光与重点照明层次",
          caption:
            "分层照明让不同灯具承担不同任务，而不是要求一整排天花灯完成所有事情。",
        },
      },
      {
        title: "厨房工作照明：不要让自己的身体挡住光",
        paragraphs: [
          "厨房最能说明“房间很亮”和“工作面照得好”是两回事。如果主要光源在你身后或上方，备餐时身体可能挡住部分光线，把阴影投到台面上。",
          "吊柜下方的工作灯可以把有用的光直接带到台面，并减少只依赖天花灯的需要。工作面使用约 3500K–4000K 的中性白光，可以让功能感更清楚，同时周围厨房仍然可以保持较温暖的气氛。",
          "检查厨房灯光时，可以想象自己站在水槽、炉灶和备餐区，然后问：我的影子会落在哪里？这通常比单纯问厨房有多少筒灯更实用。",
        ],
        visual: {
          src: "/insights/home-lighting-visual-06-kitchen-task-lighting.webp",
          alt: "住户在 Japandi 厨房准备食物，台面有中性白的吊柜下工作照明",
          caption:
            "工作光应该直接到达台面，而不是被站在台前的人挡住。",
        },
      },
      {
        title: "重点照明让空间更有层次",
        paragraphs: [
          "不是每一盏灯都需要让房间变得更亮。有些灯的任务，是把材质和空间层次显现出来。",
          "合适角度的重点灯可以带出墙面纹理；隐藏灯可以让木工显得更轻；展示柜内少量灯光，也可以让原本较暗的角落有深度。",
          "适当照亮墙面、窗帘或有纹理的垂直表面，也可以让空间感觉更明亮、更有延伸感，而不只是继续增加向下照的天花灯。",
          "常见错误是每一个地方都要突出。当所有墙、柜和摆设都变成重点，就没有真正的重点了。",
        ],
        visual: {
          src: "/insights/home-lighting-visual-07-accent-lighting.webp",
          alt: "Japandi 电视柜和墙面细节使用克制的重点照明",
          caption:
            "重点光应该有选择地突出纹理、物件或建筑细节，而不是把所有东西一起照亮。",
        },
      },
      {
        title: "气氛灯不是把所有灯都调暗",
        paragraphs: [
          "如果目标是较温暖的住宅气氛，ID Work Studio 在很多客厅与卧室会先从约 3000K 开始考虑。它通常跟木色、布料和暖中性色较容易配合。",
          "但 3000K 不是所有人的标准答案。实际项目里，我们也会遇到一些住户，特别是部分年长家庭成员，更喜欢明显更白的灯光。设计看起来漂亮，但住的人觉得不舒服，就不能算成功。",
          "最重要的是分清楚：色温和亮度不是同一件事。3000K 可以很亮，6000K 也可以很暗。Kelvin 说的是光的颜色感觉，不是有多少光真正到达工作面。",
        ],
        visual: {
          src: "/insights/home-lighting-visual-08-mood-lighting.webp",
          alt: "温暖 Japandi 卧室使用约 3000K 氛围照明",
          caption:
            "温暖环境光可以营造住宅舒适感，但最终仍然应该以住户本身的视觉偏好为准。",
        },
      },
      {
        title: "温暖的家，也必须有真正可工作的灯",
        paragraphs: [
          "如果太强调漂亮的气氛灯，最后可能是房子拍照很好看，却不好用。温暖的住宅完全可以通过把较明亮的工作灯集中在需要的位置，同时兼顾功能。",
          "书房可以保留温暖的整体环境光，同时让书桌得到较中性、更有用的工作照明。这样写字或使用电脑时够用，却不需要把整间房变成明亮的办公室。",
          "这跟厨房的逻辑一样：整体保持舒服，然后在真正做事的地方把照明加强。",
        ],
        visual: {
          src: "/insights/home-lighting-visual-09-study-task-lighting.webp",
          alt: "家中书房保持温暖环境光，同时书桌上有较明亮的工作灯",
          caption:
            "功能照明可以集中在书桌，不需要为了工作而把整个空间都变冷、变亮。",
        },
      },
      {
        title: "晚上最能看出分层灯光的价值",
        paragraphs: [
          "灯光设计在太阳下山后最明显。白天有自然光加入；到了晚上，空间里的每一层光都来自装修时做过的决定。",
          "客厅可以有克制的整体照明、电视柜隐藏灯、落地灯或台灯，以及少量重点照明。看电视可能需要一种状态，招待客人需要另一种，打扫时则需要明显更多的光。",
          "好的灯光规划给你选择，而不是永远只有“全部开”这一种模式。",
        ],
        visual: {
          src: "/insights/home-lighting-visual-10-layered-lighting-night.webp",
          alt: "夜间 Japandi 客厅有天花、台灯、层架与隐藏照明的分层效果",
          caption:
            "到了晚上，不同灯光层次可以让同一个空间在放松、招待客人和实际使用之间切换。",
        },
      },
      {
        title: "梳妆台照明：脸就是工作面",
        paragraphs: [
          "浴室看起来很亮，也不代表梳妆照明就一定好。一个只在头顶的筒灯，容易在眉骨、眼睛、鼻子和下巴下面形成阴影。",
          "如果设计条件允许，从前方或两侧到达脸部的光，通常更适合刮胡子、护肤、化妆或整理仪容。约 3500K–4000K 的中性白光，可以作为这类工作区的实用偏好。",
          "这也是少数我们会刻意让有用的光直接到达人的地方，因为这里的人本身就是需要被照亮的目标。",
        ],
        visual: {
          src: "/insights/home-lighting-visual-11-vanity-task-lighting.webp",
          alt: "浴室梳妆镜前使用均匀的正面与侧面照明",
          caption:
            "梳妆照明应该均匀照到脸部，而不是只依赖头顶一盏筒灯。",
        },
      },
      {
        title: "吊扇和筒灯必须一起规划",
        paragraphs: [
          "新加坡住宅很常见吊扇，但吊扇跟筒灯的关系经常被忽略。如果旋转中的扇叶反复穿过主要光束，光线就会不断被切断，产生移动阴影或类似闪烁的不适感。",
          "不存在一个适合所有吊扇的万能距离。吊扇直径、扇叶高度、天花高度、筒灯位置、光束角度，以及真正要照亮的区域都会影响结果。正确做法是把真实的扇叶扫动范围和光束一起看，而不是套用一个固定距离。",
          "HDB 目前要求假天花在相关规定下，从完成地面起保留至少 2.4 m 净高；吊扇扇叶同样需要从完成地面起至少保留 2.4 m 净高。最终仍应该根据实际现场和选定的吊扇型号确认天花与灯光安排。",
        ],
        callout:
          "这对你有什么影响？最好较早确定吊扇型号和大概位置，让设计师可以根据真实尺寸协调灯位。",
      },
      {
        title: "隐藏式 LED：最好看到光的效果，而不是看到 LED 本身",
        paragraphs: [
          "LED 灯带可以用在电视柜底部、展示柜内、层板下、壁龛、指定镜子细节、天花灯槽，以及各种木工细节里面。",
          "如果用途是环境光，通常把光源隐藏起来，让你看到被照亮的墙面、地面或柜体，而不是直接看到一颗一颗 LED，会显得更精致。合适的铝槽和扩散罩，也有助于让灯带看起来更连续、减少刺眼。",
          "展示柜要特别注意玻璃反射和层板遮挡。LED 位置应该在木工设计阶段一起确定，而不是柜子做好以后才想办法补灯。",
        ],
      },
      {
        title: "智能 GU10 可以解决家庭成员偏好不同的问题",
        paragraphs: [
          "ID Work Studio 近来会建议部分住户考虑可更换的智能 GU10，让亮度和白光色温可以调整。真正实用的价值不是 RGB 彩色效果，而是适应不同时间和不同人的需要。",
          "同一个客厅晚上可以调得较暖、较暗；打扫时变得更亮；需要细节工作时再变得较中性。家里如果不同成员喜欢不同灯光，这种弹性也很有用。",
          "但智能并不代表灯本身一定好。仍然要检查光束角度、亮度输出、调光范围、显色、尺寸是否适合灯具、控制稳定性，以及墙上开关关闭后系统会怎样。App 只是附加功能，灯本身首先要好用。",
        ],
        links: [
          {
            label: "装修费用指南",
            to: "/insights/renovation-cost-singapore-2026",
            text: "了解灯光、天花与木工选择怎样影响整体装修预算",
          },
        ],
      },
      {
        title: "灯光应该跟材质一起设计",
        paragraphs: [
          "灯会改变材料最后呈现出来的感觉。浅木、深木、石材、油漆、布料、玻璃和镜面，对光线的反应都不完全一样。",
          "深色表面通常吸收更多光；有光泽的表面容易产生反射；方向性较强的光可以强化纹理；不同色温也会明显改变木色和暖中性色的感觉。",
          "所以灯光最好跟室内设计一起规划，而不是最后才单独挑灯。材料样板在展厅灯光下很好看，放到实际家里不一定会有同样效果。",
        ],
      },
      {
        title: "最后把所有决定放回同一张灯光图",
        paragraphs: [
          "完整的灯光图不只是标筒灯位置。它应该同时考虑家具、木工、活动、工作面、天花、吊扇、灯光层次和控制方式。",
          "下面的例子是根据 ID Work Studio 实际 HDB 平面参考，再简化成给屋主阅读的教学图。它不是说所有 4 房式 HDB 都应该照着同样位置安装灯。",
          "即使原始户型一样，不同家庭也可能需要完全不同的灯光。有人需要在家办公，有人跟年长父母同住，有人使用大型吊扇，也有人重点做展示木工。Floor plan 给我们几何条件，真正的住户才给我们灯光 brief。",
        ],
        visual: {
          src: "/insights/home-lighting-visual-12-hdb-lighting-plan.webp",
          alt: "匿名 4 房式 HDB 的简化协调灯光平面示例",
          caption:
            "示例用途：灯光规划应该根据实际家具、活动、吊扇、木工与控制方式来协调，而不是直接照抄别人的灯位。",
        },
        links: [
          {
            label: "装修常见错误指南",
            to: "/insights/renovation-mistakes-singapore",
            text: "避免装修中因为太迟改设计与协调不足而产生返工",
          },
          {
            label: "住宅装修服务",
            to: "/residential",
            text: "了解 ID Work Studio 怎样按实际生活方式规划 HDB 与公寓装修",
          },
        ],
      },
      {
        title: "不要忘记开关和控制方式",
        paragraphs: [
          "分层灯光只有在容易控制时才真正有用。如果环境光、工作光和重点光永远跟同一个开关一起开，很多弹性都会消失。",
          "整体照明、隐藏环境灯、餐桌吊灯、工作灯和部分重点灯，可以根据实际使用方式分开控制。需要在两个位置控制同一组灯时，也可以考虑 two-way switching。",
          "目标不是装最多的开关，而是做出少量真正符合生活方式的灯光场景。",
        ],
      },
      {
        title: "好的灯光一定需要假天花吗？",
        paragraphs: [
          "不需要。假天花可以比较容易整合嵌入式筒灯和隐藏照明，但它只是其中一种设计工具。",
          "轨道灯、明装灯、吊灯、壁灯、落地灯、台灯，以及木工内置照明，都可以组成好的家居灯光。有些住宅减少假天花范围，反而可以保留更好的空间高度感。",
          "真正应该问的不是“假天花可以塞多少筒灯？”，而是“这个区域真正需要什么光，用什么方式最干净？”",
        ],
      },
    ],

    checklistTitle: "确认灯光图之前，先问这 12 个问题",
    checklistIntro:
      "最好在电路、假天花与内置木工照明都还没把设计固定之前，用这个清单重新检查一次。",
    checklistItems: [
      "谁会使用每一个空间？",
      "这个空间最常进行什么活动？",
      "主要家具最后会放在哪里？",
      "哪些表面需要真正的工作照明？",
      "哪些地方只需要较柔和的环境光？",
      "有没有重要光束会被吊扇扇叶切过？",
      "厨房台面有没有直接而有用的工作光？",
      "书桌有没有真正够用的工作照明？",
      "梳妆台有没有照到脸，而不是只照头顶？",
      "隐藏 LED 是否真的被隐藏？",
      "重要灯光层次是否可以分开控制？",
      "最终亮度与色温，真正住在里面的人是否觉得舒服？",
    ],

    mistakesTitle: "常见家居灯光错误",
    mistakes: [
      {
        title: "家具还没确定，就先做整齐天花网格",
        text:
          "平面看起来很整齐，但当沙发、餐桌、工作台或吊扇后来确定后，灯位可能全部不对。",
      },
      {
        title: "用同一层灯光解决所有需求",
        text:
          "环境光、工作光和重点光任务不同，只靠一套天花灯通常会造成妥协。",
      },
      {
        title: "让整个家每一个地方都一样亮",
        text:
          "平均亮度会失去空间层次，也不代表真正工作的位置就一定够亮。",
      },
      {
        title: "把高 Kelvin 当成更亮",
        text:
          "从 3000K 换到 6000K 改变的是颜色感觉，不会自动解决工作面照明不足。",
      },
      {
        title: "忽略吊扇和光束的关系",
        text:
          "扇叶反复切过筒灯光束，可能形成令人不舒服的移动阴影。",
      },
      {
        title: "木工做好后才决定加 LED",
        text:
          "太迟决定灯带位置，很容易看到灯珠、出现热点，或产生原本可以避免的玻璃反射。",
      },
    ],

    midCtaTitle: "不确定你的灯光图实际住进去会不会好用？",
    midCtaText:
      "把 floor plan 发给我们，再告诉我们家里的人怎样使用空间。ID Work Studio 可以在电路和天花工程把设计固定之前，一起检查家具、吊扇、工作区、木工与灯光决定。",
    midCtaButton: "WhatsApp 发送 Floor Plan",

    faqTitle: "家居灯光设计常见问题",
    faqs: [
      {
        question: "HDB 客厅到底需要多少盏筒灯？",
        answer:
          "不能只按面积给一个可靠数字。数量会受到家具布局、天花高度、灯具输出、光束角度、吊扇位置、其他灯光层次及住户喜好影响。应该先看真正需要照亮什么，而不是先决定固定筒灯数量。",
      },
      {
        question: "筒灯应该离吊扇多远？",
        answer:
          "没有一个适用于所有吊扇的万能距离。吊扇直径、扇叶高度、天花高度、光束角度和灯位都会影响扇叶是否切过光束并产生移动阴影。应该根据实际吊扇与灯光布局协调，而不是套一个固定距离。",
      },
      {
        question: "家里用 3000K 还是 4000K 比较好？",
        answer:
          "两者没有绝对谁比较好。3000K 通常较温暖、有住宅气氛；4000K 较中性、功能感更强。很多家庭可以用较温暖的环境光，再在厨房、书房或梳妆区加入较中性的任务照明。",
      },
      {
        question: "6000K 对 HDB 来说会不会太白？",
        answer:
          "有些住户会觉得 6000K 在住宅环境太冷，但也有人真心喜欢很白的灯。个人习惯很重要。如果主要问题是看不清楚，而不是喜欢白光，可以先加强指定工作面的照明，不一定要把整间屋换成更冷的色温。",
      },
      {
        question: "好的家居灯光一定需要假天花吗？",
        answer:
          "不需要。假天花比较容易整合嵌入式和隐藏照明，但轨道灯、明装灯、吊灯、壁灯和落地灯，同样可以组成有效的家居灯光。",
      },
      {
        question: "厨房台面最适合什么灯？",
        answer:
          "比起只依赖天花灯，直接照到台面的任务照明通常更实用。吊柜下灯很常见，因为光源靠近工作面，也比较不容易被站在台前的人挡住。",
      },
      {
        question: "书房或在家办公应该怎样做灯光？",
        answer:
          "房间整体可以保持舒服的环境光，再在书桌加入更明亮的工作照明。这样工作面足够使用，却不需要把整间房变得很亮或很冷。",
      },
      {
        question: "浴室梳妆镜最好用什么灯？",
        answer:
          "从前方或两侧到达脸部的光，通常比只依赖头顶筒灯更均匀。头顶单一光源容易在眼睛、鼻子和下巴下方产生阴影。",
      },
      {
        question: "隐藏式 LED 灯带应该看得到灯珠吗？",
        answer:
          "如果用途是间接或环境照明，通常不应该直接看到。把 LED 隐藏起来，让你看到被照亮的表面，会比较舒服，也通常更精致。",
      },
      {
        question: "装修时值得用智能 GU10 吗？",
        answer:
          "如果你重视可调亮度和色温，它可以很值得，尤其适合多用途空间或家里不同成员喜欢不同灯光的情况。但光束角度、输出、调光质量和尺寸是否适合灯具仍然很重要。",
      },
      {
        question: "全屋灯光一定要使用同一个色温吗？",
        answer:
          "不一定。不同功能区域可以有意使用不同色温。重点是过渡要有设计感，而且真正住的人觉得舒服，而不是每一个区域随意不同。",
      },
      {
        question: "装修到什么时候应该确认最终灯光图？",
        answer:
          "最好在主要家具和木工布局已经足够明确之后，但在电路施工、假天花和木工内置灯最终确认之前。这样设计与电工团队才有足够资料，把灯位跟真正完成后的生活方式协调起来。",
      },
    ],

    finalCtaTitle: "在装修把灯位固定之前，先把它规划正确",
    finalCtaText:
      "如果你还不确定筒灯位置、吊扇、3000K 与 4000K、厨房工作照明、隐藏 LED，或灯光怎样跟家具和木工一起设计，把 floor plan 发给 ID Work Studio。我们可以把灯光与空间规划、电路、天花、木工和整体装修一起协调，让完成后的家不只是照片漂亮，而是真正舒服好住。",
    finalCtaPrimary: "WhatsApp 发送 Floor Plan",
    finalCtaSecondary: "查看住宅装修服务",

    sourcesTitle: "本指南主要参考资料",
    sourcesNote:
      "法规内容依据当前 HDB 指引；灯光资料用于解释设计原则，不用于制造所谓适用于所有住宅的固定公式。",
    sources: [
      {
        label: "HDB — Renovation Guidelines: Building Works",
        href: "https://www.hdb.gov.sg/managing-my-home/renovation-and-maintenance/renovation/renovation-guidelines/building-works",
      },
      {
        label: "HDB — Renovation Guidelines: Electrical Works",
        href: "https://www.hdb.gov.sg/managing-my-home/renovation-and-maintenance/renovation/renovation-guidelines/electrical-works",
      },
      {
        label: "CIE — Lighting for Older People and People with Visual Impairment",
        href: "https://cie.co.at/publications/lighting-older-people-and-people-visual-impairment-buildings",
      },
      {
        label: "IES — Residential Lighting Committee / RP-11",
        href: "https://ies.org/committee/residential-lighting/",
      },
      {
        label: "ERCO — Indirect Lighting",
        href: "https://www.erco.com/en/designing-with-light/lighting-knowledge/lighting-design/indirect-lighting-7497/",
      },
      {
        label: "Philips Hue Singapore — GU10 Smart Lighting",
        href: "https://www.philips-hue.com/en-sg/p/hue-white-ambiance-gu10-smart-spotlight/8720169247109",
      },
    ],

    breadcrumbCurrent: "新加坡家居灯光设计",
  },
};

const HERO_IMAGE = "/insights/lightinghero.webp";

const WHATSAPP_URL =
  "https://wa.me/6598333085?text=Hi%20ID%20Work%20Studio%2C%20I%27m%20planning%20my%20home%20renovation%20and%20would%20like%20help%20reviewing%20the%20lighting%20layout.%20I%20can%20share%20my%20floor%20plan%20and%20requirements.";

export default function HomeLightingDesignSingapore() {
  const { i18n } = useTranslation();
  const lang = i18n.language === "zh" ? "zh" : "en";
  const t = content[lang];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: t.title,
    description: t.metaDescription,
    url: t.canonical,
    image: `https://idworkstudio.com${HERO_IMAGE}`,
    datePublished: "2026-08-26",
    dateModified: "2026-08-26",
    author: {
      "@type": "Organization",
      name: "ID Work Studio",
      url: "https://idworkstudio.com/",
    },
    publisher: {
      "@type": "Organization",
      name: "ID Work Studio",
      url: "https://idworkstudio.com/",
    },
    mainEntityOfPage: t.canonical,
    inLanguage: lang === "zh" ? "zh-SG" : "en-SG",
    about: [
      { "@type": "Thing", name: "Home lighting design Singapore" },
      { "@type": "Thing", name: "HDB lighting plan" },
      { "@type": "Thing", name: "Residential renovation lighting" },
      { "@type": "Thing", name: "Downlight placement" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: lang === "zh" ? "首页" : "Home",
        item: "https://idworkstudio.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: lang === "zh" ? "装修文章" : "Insights",
        item: "https://idworkstudio.com/insights",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: t.breadcrumbCurrent,
        item: t.canonical,
      },
    ],
  };

  return (
    <>
      <Head>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDescription} />
        <link rel="canonical" href={t.canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={t.metaTitle} />
        <meta property="og:description" content={t.metaDescription} />
        <meta property="og:url" content={t.canonical} />
        <meta
          property="og:image"
          content={`https://idworkstudio.com${HERO_IMAGE}`}
        />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Head>

      <main className="bg-[#F7F3EC] text-[#2C2C2C]">
        <section className="relative isolate min-h-[620px] overflow-hidden bg-[#111]">
          <img
            src={HERO_IMAGE}
            alt={t.heroAlt}
            className="absolute inset-0 h-full w-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(197,160,89,0.22),transparent_38%)]" />

          <div className="relative z-10 mx-auto flex min-h-[620px] max-w-6xl flex-col justify-end px-6 pb-16 pt-32 md:px-8 md:pb-20">
            <p className="mb-5 w-fit rounded-full border border-[#C5A059]/50 bg-black/25 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D6B26B] backdrop-blur">
              {t.eyebrow}
            </p>
            <h1 className="max-w-5xl font-serif text-4xl font-semibold leading-[1.08] text-white md:text-6xl">
              {t.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/80 md:text-lg">
              {t.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-white/55">
              <span>{t.category}</span>
              <span className="text-[#C5A059]">•</span>
              <span>{t.readTime}</span>
              <span className="text-[#C5A059]">•</span>
              <span>ID Work Studio · Singapore</span>
            </div>
          </div>
        </section>

        <section className="border-b border-[#e5ddd1] bg-white/90 px-6 py-5 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
            <Link
              to="/insights"
              className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f6a63] hover:text-[#C5A059]"
            >
              ← {lang === "zh" ? "返回装修文章" : "Back to insights"}
            </Link>
            <Link
              to="/residential"
              className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-[#6f6a63] hover:text-[#C5A059] sm:block"
            >
              {lang === "zh" ? "住宅装修服务" : "Residential renovation services"} →
            </Link>
          </div>
        </section>

        <article className="mx-auto max-w-5xl px-6 py-12 md:px-8 md:py-20">
          <section className="rounded-[30px] border border-[#e4dbcf] bg-white p-6 shadow-[0_18px_50px_rgba(34,29,23,0.06)] md:p-9">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A9864D]">
                  {t.quickAnswerTitle}
                </p>
                <p className="mt-4 text-base leading-8 text-[#5B5650]">
                  {t.quickAnswer}
                </p>
              </div>
              <div className="rounded-3xl bg-[#171514] p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.17em] text-[#C5A059]">
                  {t.principleTitle}
                </p>
                <p className="mt-4 font-serif text-2xl leading-9">
                  {t.principleText}
                </p>
              </div>
            </div>
          </section>

          {t.sections.map((section, index) => (
            <section key={section.title} className="mt-14">
              <div className="grid gap-7 lg:grid-cols-[220px_1fr]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A9864D]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight">
                    {section.title}
                  </h2>
                </div>
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-[#5B5650]">
                      {paragraph}
                    </p>
                  ))}

                  {section.bullets && (
                    <ul className="grid gap-3 pt-2 sm:grid-cols-2">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="rounded-2xl border border-[#e4dbcf] bg-white p-4 text-sm leading-6 text-[#5B5650]"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.callout && (
                    <div className="rounded-2xl border border-[#C5A059]/30 bg-[#FFF9ED] px-5 py-4 text-sm leading-7 text-[#6C5A3B]">
                      {section.callout}
                    </div>
                  )}

                  {section.visual && (
                    <figure className="overflow-hidden rounded-[28px] border border-[#e4dbcf] bg-white shadow-sm">
                      <img
                        src={section.visual.src}
                        alt={section.visual.alt}
                        loading="lazy"
                        className="w-full object-cover"
                      />
                      <figcaption className="border-t border-[#eee7dd] px-5 py-4 text-xs leading-6 text-[#756D64]">
                        {section.visual.caption}
                      </figcaption>
                    </figure>
                  )}

                  {section.links?.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="mt-3 inline-flex rounded-full border border-[#C5A059]/45 bg-[#FFF9ED] px-5 py-3 text-sm font-semibold text-[#8D6B35] transition hover:bg-[#C5A059] hover:text-white"
                    >
                      {link.text} →
                    </Link>
                  ))}
                </div>
              </div>

              {index === 7 && (
                <div className="mt-10 overflow-hidden rounded-3xl border border-[#e4dbcf] bg-white shadow-sm">
                  <div className="border-b border-[#e4dbcf] bg-[#F1EBE1] px-6 py-5">
                    <h3 className="font-serif text-2xl font-semibold">
                      {t.temperatureTitle}
                    </h3>
                    <p className="mt-2 max-w-3xl text-sm leading-7 text-[#655E56]">
                      {t.temperatureIntro}
                    </p>
                  </div>
                  <div className="hidden grid-cols-[.7fr_1fr_1.5fr] gap-4 border-b border-[#e4dbcf] bg-[#FCFAF6] px-6 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#756D64] md:grid">
                    <span>{lang === "zh" ? "色温" : "Colour temperature"}</span>
                    <span>{lang === "zh" ? "感觉" : "Character"}</span>
                    <span>{lang === "zh" ? "常见用途" : "Common use"}</span>
                  </div>
                  {t.temperatureRows.map((row) => (
                    <div
                      key={row.temperature}
                      className="grid gap-2 border-b border-[#eee7dd] px-6 py-5 last:border-b-0 md:grid-cols-[.7fr_1fr_1.5fr] md:gap-4"
                    >
                      <div className="text-lg font-bold text-[#A17B3E]">
                        {row.temperature}
                      </div>
                      <div className="font-semibold text-[#2C2C2C]">
                        {row.character}
                      </div>
                      <div className="text-sm leading-6 text-[#686159]">
                        {row.use}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {index === 13 && (
                <section className="mt-10 rounded-[34px] bg-[#1A1917] p-7 text-white md:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C5A059]">
                    ID Work Studio · Lighting Review
                  </p>
                  <h2 className="mt-3 font-serif text-3xl font-semibold">
                    {t.midCtaTitle}
                  </h2>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70 md:text-base">
                    {t.midCtaText}
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex rounded-full bg-[#C5A059] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#D6B26B]"
                  >
                    {t.midCtaButton}
                  </a>
                </section>
              )}
            </section>
          ))}

          <section className="mt-16">
            <div className="grid gap-7 lg:grid-cols-[.85fr_1.15fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A9864D]">
                  {lang === "zh" ? "确认前检查" : "Before approval"}
                </p>
                <h2 className="mt-3 font-serif text-3xl font-semibold md:text-4xl">
                  {t.checklistTitle}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#5B5650]">
                  {t.checklistIntro}
                </p>
              </div>
              <ol className="grid gap-3">
                {t.checklistItems.map((item, index) => (
                  <li
                    key={item}
                    className="grid grid-cols-[38px_1fr] gap-4 rounded-2xl border border-[#e4dbcf] bg-white p-4"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F0E5D1] text-sm font-bold text-[#8D6B35]">
                      {index + 1}
                    </span>
                    <span className="self-center text-sm leading-6 text-[#5B5650]">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="mt-14">
            <h2 className="font-serif text-3xl font-semibold md:text-4xl">
              {t.mistakesTitle}
            </h2>
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {t.mistakes.map((mistake) => (
                <div
                  key={mistake.title}
                  className="rounded-3xl border border-[#e4dbcf] bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold">{mistake.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5B5650]">
                    {mistake.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <h2 className="font-serif text-3xl font-semibold md:text-4xl">
              {t.faqTitle}
            </h2>
            <div className="mt-7 space-y-3">
              {t.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-[#e4dbcf] bg-white p-5 shadow-sm"
                >
                  <summary className="cursor-pointer list-none pr-8 text-base font-semibold">
                    {faq.question}
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-[#5B5650]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <section className="mt-16 rounded-[34px] bg-[#111] p-7 text-white md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C5A059]">
              ID Work Studio
            </p>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl font-semibold md:text-4xl">
              {t.finalCtaTitle}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70 md:text-base">
              {t.finalCtaText}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#C5A059] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#D6B26B]"
              >
                {t.finalCtaPrimary}
              </a>
              <Link
                to="/residential"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#C5A059] hover:text-[#C5A059]"
              >
                {t.finalCtaSecondary}
              </Link>
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-[#e4dbcf] bg-white p-6">
            <h2 className="font-serif text-2xl font-semibold">{t.sourcesTitle}</h2>
            <p className="mt-3 text-xs leading-6 text-[#756D64]">{t.sourcesNote}</p>
            <div className="mt-5 grid gap-2 md:grid-cols-2">
              {t.sources.map((source) => (
                <a
                  key={source.href}
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-[#eee7dd] bg-[#FCFAF6] px-4 py-3 text-xs leading-5 text-[#655E56] transition hover:border-[#C5A059]/60 hover:text-[#8D6B35]"
                >
                  {source.label} ↗
                </a>
              ))}
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
