import { FormEvent, useMemo, useState } from 'react';
import { Search, ArrowRight, MessageCircle } from 'lucide-react';

export type AnswerFinderEntry = {
  id: string;
  question: string;
  answer: string;
  href: string;
  linkLabel: string;
  keywords: string[];
  category?: string;
  relatedIds?: string[];
  projectSpecific?: boolean;
};

type AnswerFinderProps = {
  entries: AnswerFinderEntry[];
  title?: string;
  subtitle?: string;
  placeholder?: string;
  suggestedIds?: string[];
  whatsappNumber?: string;
};

type MatchIntent =
  | 'cost'
  | 'timeline'
  | 'approval'
  | 'feasibility'
  | 'comparison'
  | 'preparation'
  | 'planning'
  | 'calculation'
  | 'risk'
  | 'handover';

type RankedEntry = {
  entry: AnswerFinderEntry;
  score: number;
};

type MatchConfidence = 'high' | 'medium' | 'low';
type SafetyClass = 'general' | 'conditional' | 'project_specific';
type ResolutionMode = 'direct' | 'choices' | 'fallback' | 'multi';

type QueryResolution = {
  mode: ResolutionMode;
  confidence: MatchConfidence;
  safety: SafetyClass;
  primary?: RankedEntry;
  related: RankedEntry[];
};

type MatcherProfile = {
  contexts?: string[];
  topics?: string[];
  intents: MatchIntent[];
  entities?: string[];
};

type QuerySignals = {
  normalized: string;
  contexts: string[];
  topics: string[];
  intents: MatchIntent[];
  entities: string[];
};

const contextAliases: Record<string, string[]> = {
  hdb: ['hdb', 'bto', 'resale flat', 'resale hdb', '3 room', '4 room', '5 room'],
  condo: ['condo', 'condominium'],
  office: ['office', 'workplace', 'workspace', 'office fit out', 'office fitout'],
  retail: ['retail', 'storefront', 'shopfront', 'mall unit', 'retail unit'],
  fnb: [
    'f&b',
    'fnb',
    'cafe',
    'café',
    'restaurant',
    'food outlet',
    'coffee shop',
    'qsr',
    'commercial kitchen',
  ],
  shophouse: ['shophouse', 'conserved shophouse', 'conservation house', 'heritage building'],
  clinic: ['clinic', 'medical clinic', 'healthcare'],
  industrial: ['industrial', 'warehouse', 'factory', 'jtc'],
  childcare: ['childcare', 'preschool', 'kindergarten', 'ecda'],
  wellness: ['beauty salon', 'beauty', 'wellness', 'gym', 'fitness studio', 'massage'],
  cleaning: ['cleaning business', 'cleaning company'],
  commercial: ['commercial unit', 'commercial renovation', 'business premises', 'shop'],
};

const topicAliases: Record<string, string[]> = {
  kitchen: ['kitchen', 'worktop', 'countertop', 'kitchen cabinet'],
  quotation: ['quotation', 'quote', 'contractor quote', 'variation order', 'vo'],
  budget: ['move in budget', 'total budget', 'cash needed', 'cash to prepare'],
  overseas: ['taobao', 'overseas', 'imported', 'buy from china', 'china light', 'china tap'],
  reinstatement: [
    'reinstatement',
    'reinstate',
    'restore unit',
    'restore back',
    'hand back',
    'return unit',
    'original condition',
    'strip out',
    'end of lease',
  ],
  defects: ['defect', 'defects', 'hollow tile', 'water leak'],
  fengshui: ['feng shui', 'fengshui'],
  officeSpace: ['office space', 'office size', 'headcount', 'workstation'],
  approval: ['approval', 'permit', 'submission', 'licence', 'license', 'clearance'],
};

const intentAliases: Record<MatchIntent, string[]> = {
  cost: ['how much', 'cost', 'price', 'budget', 'estimate', 'psf', 'per sqft', 'per square foot'],
  timeline: ['how long', 'duration', 'weeks', 'how fast', 'when ready', 'when open', 'completion', 'finish'],
  approval: ['approval', 'permit', 'submission', 'permission', 'licence', 'license', 'clearance'],
  feasibility: ['can i', 'can this', 'possible', 'suitable', 'allowed', 'support', 'can use', 'can install', 'can remove'],
  comparison: ['compare', 'cheaper', 'more expensive', 'why different', 'versus', 'vs', 'better'],
  preparation: [
    'what to prepare',
    'what should i check',
    'before signing',
    'before starting',
    'what info',
    'what information',
    'documents needed',
    'what to send',
    'what details',
  ],
  planning: ['plan', 'planning', 'layout', 'how big', 'enough', 'rent free', 'fit out period'],
  calculation: ['calculate', 'calculator'],
  risk: ['hidden cost', 'delay', 'problem', 'lose deposit', 'top up', 'extra charge', 'additional charge', 'unexpected'],
  handover: ['handover', 'hand back', 'return unit', 'landlord inspect', 'lease end'],
};

const authorityEntities = ['scdf', 'bca', 'ura', 'mcst', 'qp', 'lew', 'sfa', 'pub', 'ecda'];
const fireSafetyEntities = ['sprinkler', 'fire alarm', 'smoke detector', 'escape route', 'fire rated'];
const structuralEntities = ['hack wall', 'hacking wall', 'remove wall', 'structural wall', 'demolish wall'];

const matcherProfiles: Record<string, MatcherProfile> = {
  'renovation-cost-singapore': { contexts: ['hdb', 'condo'], topics: ['residential'], intents: ['cost'] },
  'hdb-renovation-timeline': { contexts: ['hdb'], intents: ['timeline'] },
  'quotation-differences': { topics: ['quotation'], intents: ['comparison'] },
  'variation-orders': { topics: ['quotation'], intents: ['risk'] },
  'hdb-defects-before-renovation': { contexts: ['hdb'], topics: ['defects'], intents: ['preparation'] },
  'overseas-renovation-items': { topics: ['overseas'], intents: ['feasibility', 'preparation'] },
  'feng-shui-before-renovation': { topics: ['fengshui'], intents: ['planning'] },
  'kitchen-renovation-cost': { topics: ['kitchen'], intents: ['cost'] },
  'total-home-budget': { topics: ['budget'], intents: ['cost', 'planning'] },
  'hdb-wall-hacking': {
    contexts: ['hdb'],
    intents: ['feasibility', 'approval'],
    entities: ['wall'],
  },
  'commercial-renovation-cost': { contexts: ['commercial'], intents: ['cost'] },
  'office-renovation-cost': { contexts: ['office'], intents: ['cost'] },
  'fnb-renovation-cost': { contexts: ['fnb'], intents: ['cost', 'comparison'] },
  'office-renovation-timeline': { contexts: ['office'], intents: ['timeline'] },
  'office-two-week-renovation': { contexts: ['office'], intents: ['timeline'], entities: ['rush'] },
  'office-operate-during-renovation': { contexts: ['office'], intents: ['feasibility', 'planning'], entities: ['occupied'] },
  'office-after-hours-renovation': { contexts: ['office'], intents: ['feasibility', 'planning'], entities: ['after-hours'] },
  'office-landlord-approval': { contexts: ['office'], intents: ['approval'], entities: ['landlord'] },
  'office-mcst-approval': { contexts: ['office'], intents: ['approval'], entities: ['mcst'] },
  'office-scdf-approval': { contexts: ['office'], intents: ['approval'], entities: ['scdf'] },
  'commercial-skip-scdf': { contexts: ['commercial'], intents: ['approval'], entities: ['scdf'] },
  'commercial-permit-rejected': { contexts: ['commercial'], intents: ['approval', 'risk'] },
  'commercial-rent-free-period': { contexts: ['commercial'], intents: ['planning'], entities: ['lease'] },
  'commercial-before-lease': { contexts: ['commercial'], intents: ['preparation'], entities: ['lease'] },
  'office-space-needed': { contexts: ['office'], topics: ['officeSpace'], intents: ['planning'] },
  'office-space-planner': { contexts: ['office'], topics: ['officeSpace'], intents: ['calculation'] },
  'fnb-before-signing-lease': { contexts: ['fnb'], intents: ['preparation'], entities: ['lease'] },
  'fnb-former-fnb-unit': { contexts: ['fnb'], intents: ['feasibility'], entities: ['former-fnb'] },
  'fnb-heavy-cooking': { contexts: ['fnb'], intents: ['feasibility'], entities: ['heavy-cooking'] },
  'fnb-exhaust-feasibility': { contexts: ['fnb'], intents: ['feasibility'], entities: ['exhaust'] },
  'fnb-grease-trap': { contexts: ['fnb'], intents: ['approval', 'feasibility'], entities: ['grease-trap'] },
  'fnb-gas-options': { contexts: ['fnb'], intents: ['feasibility'], entities: ['gas'] },
  'fnb-sfa-licence': { contexts: ['fnb'], intents: ['approval'], entities: ['sfa'] },
  'commercial-reinstatement': {
    topics: ['reinstatement'],
    intents: ['cost', 'timeline', 'preparation', 'planning', 'handover'],
  },
  'reinstatement-deposit': { topics: ['reinstatement'], intents: ['risk', 'handover'], entities: ['deposit'] },
  'clinic-renovation-approval': { contexts: ['clinic'], intents: ['approval', 'feasibility'] },
  'industrial-unit-approval': { contexts: ['industrial'], intents: ['approval', 'preparation'] },
  'cleaning-business-premises': { contexts: ['cleaning'], intents: ['approval'] },
  'childcare-premises': { contexts: ['childcare'], intents: ['approval', 'feasibility'] },
  'beauty-gym-wellness': { contexts: ['wellness'], intents: ['approval', 'feasibility'] },
};

function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/[&]/g, ' & ')
    .replace(/[^\p{L}\p{N}&\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokenize(value: string) {
  return normalize(value)
    .split(' ')
    .filter((token) => token.length > 1);
}

function includesAlias(value: string, alias: string) {
  const normalizedAlias = normalize(alias);
  return normalizedAlias.length > 0 && (` ${value} `).includes(` ${normalizedAlias} `);
}

function detectAliases(value: string, aliases: Record<string, string[]>) {
  return Object.entries(aliases)
    .filter(([, terms]) => terms.some((term) => includesAlias(value, term)))
    .map(([key]) => key);
}

function detectIntents(value: string): MatchIntent[] {
  const found = (Object.entries(intentAliases) as [MatchIntent, string[]][])
    .filter(([, terms]) => terms.some((term) => includesAlias(value, term)))
    .map(([intent]) => intent);

  if (/(?:need|required|must)\s+(?:scdf|bca|ura|mcst|qp|lew|sfa|pub|ecda)/.test(value)) {
    found.push('approval');
  }

  if (/(?:need|required|must).*(?:grease trap|grease interceptor)/.test(value)) {
    found.push('approval');
  }

  if (/(?:contractor|quote|quotation).*(?:top up|add money|extra charge|additional charge|pay more)/.test(value)) {
    found.push('risk');
  }

  return [...new Set(found)];
}

function classifyQuery(query: string): QuerySignals {
  const normalized = normalize(query);
  let contexts = detectAliases(normalized, contextAliases);
  const topics = detectAliases(normalized, topicAliases);
  const intents = detectIntents(normalized);
  const entities = [
    ...authorityEntities.filter((entity) => includesAlias(normalized, entity)),
    ...(fireSafetyEntities.some((entity) => includesAlias(normalized, entity)) ? ['fire-safety'] : []),
    ...((structuralEntities.some((entity) => includesAlias(normalized, entity)) || /\b(?:hack|hacking|remove|demolish)\b(?:\s+[\p{L}\p{N}-]+){0,4}\s+wall\b/u.test(normalized) || /\bwall\b(?:\s+[\p{L}\p{N}-]+){0,4}\s+(?:hack|hacking|remove|demolish)\b/u.test(normalized)) ? ['wall'] : []),
    ...(/\b(?:exhaust|hood|duct|ducting)\b/.test(normalized) ? ['exhaust'] : []),
    ...(/\b(?:grease trap|grease interceptor)\b/.test(normalized) ? ['grease-trap'] : []),
    ...(/\b(?:lpg|gas|town gas|gas cylinder)\b/.test(normalized) ? ['gas'] : []),
    ...(/\b(?:heavy cooking|wok cooking|hotpot|bbq)\b/.test(normalized) ? ['heavy-cooking'] : []),
    ...(/\b(?:occupied office|staff still inside|while working|continue operating)\b/.test(normalized) ? ['occupied'] : []),
    ...(/\b(?:after hours|at night|night renovation|weekend|weekends)\b/.test(normalized) ? ['after-hours'] : []),
    ...(/\b(?:rush|urgent|urgently|2 weeks|two weeks)\b/.test(normalized) ? ['rush'] : []),
    ...(/\bdeposit\b/.test(normalized) ? ['deposit'] : []),
    ...(/\b(?:previous|former|old|existing)\b.*\b(?:restaurant|cafe|f&b|fnb)\b/.test(normalized) ? ['former-fnb'] : []),
    ...(/\blandlord\b/.test(normalized) ? ['landlord'] : []),
    ...(/\b(?:lease|rent free|fit out period)\b/.test(normalized) ? ['lease'] : []),
  ];

  if (/(?:contractor|quote|quotation).*(?:top up|add money|extra charge|additional charge|pay more)/.test(normalized)) {
    if (!topics.includes('quotation')) topics.push('quotation');
  }

  const hasSize = /\b\d{2,5}\s*(?:sq\s*ft|sqft|sf|square feet|square foot)\b/.test(normalized);
  const hasPeople = /\b(?:staff|employee|employees|people|pax|headcount)\b/.test(normalized);
  const hasFoodInfrastructure = /\b(?:exhaust|hood|duct|ducting|grease trap|grease interceptor|lpg|gas)\b/.test(normalized);
  const hasFoodContext = contexts.includes('fnb') || /\b(?:kitchen equipment|heavy cooking|wok cooking)\b/.test(normalized);

  if (hasSize && hasPeople) {
    if (!contexts.includes('office')) contexts.push('office');
    if (!topics.includes('officeSpace')) topics.push('officeSpace');
    if (!intents.includes('planning')) intents.push('planning');
  }

  if (
    hasPeople &&
    contexts.includes('office') &&
    /\b(?:how big|bigger|space|size|enough)\b/.test(normalized)
  ) {
    if (!topics.includes('officeSpace')) topics.push('officeSpace');
    if (!intents.includes('planning')) intents.push('planning');
  }

  if (hasFoodInfrastructure && hasFoodContext && !contexts.includes('fnb')) {
    contexts.push('fnb');
  }

  if (/\b(?:reinstatement|reinstate|hand back|return unit|original condition|strip out|end of lease)\b/.test(normalized)) {
    if (!topics.includes('reinstatement')) topics.push('reinstatement');
  }

  if (/\b(?:cash|money)\b.*\b(?:besides|beyond|outside|plus)\b.*\b(?:contract|quote|quotation|renovation)\b/.test(normalized)) {
    if (!topics.includes('budget')) topics.push('budget');
    if (!intents.includes('cost')) intents.push('cost');
  }

  if (/\b(?:landlord|lease)\b.*\b(?:rent free|fit out period|handover|hand back|return unit)\b/.test(normalized)) {
    if (!contexts.some((context) => ['office', 'retail', 'fnb', 'shophouse'].includes(context))) {
      contexts.push('commercial');
    }
  }

  if (/\bresale\b/.test(normalized) && /\b(?:reno|renovation|flat|hdb|bto|move in)\b/.test(normalized)) {
    if (!contexts.includes('hdb')) contexts.push('hdb');
  }

  const specialistContexts = ['clinic', 'industrial', 'childcare', 'wellness', 'cleaning'];
  if (contexts.some((context) => specialistContexts.includes(context))) {
    contexts = contexts.filter((context) => specialistContexts.includes(context));
  } else if (contexts.some((context) => context !== 'commercial')) {
    contexts = contexts.filter((context) => context !== 'commercial');
  }

  return {
    normalized,
    contexts: [...new Set(contexts)],
    topics: [...new Set(topics)],
    intents: [...new Set(intents)],
    entities: [...new Set(entities)],
  };
}

function lexicalSupport(query: string, entry: AnswerFinderEntry) {
  const normalizedQuery = normalize(query);
  const queryTokens = tokenize(query);
  const searchableTokens = new Set(
    tokenize([entry.question, entry.category || '', ...entry.keywords].join(' '))
  );
  const matchedTokens = queryTokens.filter((token) => searchableTokens.has(token)).length;
  const keywordPhraseMatch = entry.keywords.some((keyword) => {
    const normalizedKeyword = normalize(keyword);
    return normalizedKeyword === normalizedQuery || includesAlias(normalizedQuery, normalizedKeyword);
  });

  return Math.min(5, matchedTokens) + (keywordPhraseMatch ? 8 : 0);
}

function rankEntry(query: string, entry: AnswerFinderEntry): number {
  const signals = classifyQuery(query);
  if (!signals.normalized) return 0;
  if (normalize(entry.question) === signals.normalized) return 200;

  const profile = matcherProfiles[entry.id];
  if (!profile) return 0;

  let score = lexicalSupport(query, entry);
  const profileContexts = profile.contexts || [];
  const profileTopics = profile.topics || [];
  const profileEntities = profile.entities || [];
  const specificContexts = signals.contexts.filter((context) => context !== 'commercial');

  if (signals.contexts.length > 0) {
    const contextMatches = profileContexts.some((context) => signals.contexts.includes(context));
    const genericCommercialCandidate =
      profileContexts.includes('commercial') && specificContexts.length > 0;

    if (contextMatches) {
      score += 40;
    } else if (genericCommercialCandidate) {
      score += 10;
    } else if (profileContexts.some((context) => context !== 'commercial') && specificContexts.length > 0) {
      score -= 45;
    }
  } else if (profileContexts.some((context) => context !== 'commercial')) {
    score -= 35;
  }

  const topicMatches = profileTopics.filter((topic) => signals.topics.includes(topic)).length;
  score += topicMatches * 35;

  if (signals.topics.includes('reinstatement') && !profileTopics.includes('reinstatement')) {
    score -= 40;
  }

  if (signals.topics.includes('budget') && !profileTopics.includes('budget')) {
    score -= 20;
  }

  const intentMatches = profile.intents.filter((intent) => signals.intents.includes(intent)).length;
  score += intentMatches * 30;

  if (signals.intents.length > 0 && intentMatches === 0) {
    score -= 18;
  }

  const entityMatches = profileEntities.filter((entity) => signals.entities.includes(entity)).length;
  score += entityMatches * 25;

  const authorityWithoutContext =
    signals.entities.some((entity) => authorityEntities.includes(entity)) &&
    signals.contexts.length === 0;
  const structuralWithoutHdb = signals.entities.includes('wall') && !signals.contexts.includes('hdb');
  const ambiguousShopGas =
    /\bshop\b/.test(signals.normalized) &&
    signals.entities.includes('gas') &&
    !signals.contexts.includes('fnb');

  if (authorityWithoutContext || structuralWithoutHdb || ambiguousShopGas) {
    score = Math.min(score, 20);
  }

  return Math.max(0, score);
}

const contextChoiceIds: Record<string, string[]> = {
  hdb: [
    'renovation-cost-singapore',
    'hdb-renovation-timeline',
    'hdb-defects-before-renovation',
    'hdb-wall-hacking',
  ],
  office: [
    'office-renovation-cost',
    'office-space-needed',
    'office-space-planner',
    'office-renovation-timeline',
  ],
  fnb: [
    'fnb-renovation-cost',
    'fnb-before-signing-lease',
    'fnb-heavy-cooking',
    'fnb-exhaust-feasibility',
  ],
  retail: [
    'commercial-renovation-cost',
    'commercial-before-lease',
    'commercial-skip-scdf',
  ],
  commercial: [
    'commercial-renovation-cost',
    'commercial-before-lease',
    'commercial-rent-free-period',
    'commercial-reinstatement',
  ],
};

const topicChoiceIds: Record<string, string[]> = {
  quotation: ['quotation-differences', 'variation-orders'],
  budget: ['total-home-budget', 'renovation-cost-singapore'],
  reinstatement: ['commercial-reinstatement', 'reinstatement-deposit'],
  officeSpace: ['office-space-needed', 'office-space-planner'],
  defects: ['hdb-defects-before-renovation'],
  overseas: ['overseas-renovation-items'],
  kitchen: ['kitchen-renovation-cost'],
};

function getCuratedChoices(signals: QuerySignals, rankedResults: RankedEntry[]) {
  const rankedById = new Map(rankedResults.map((result) => [result.entry.id, result]));
  const ids = [
    ...signals.topics.flatMap((topic) => topicChoiceIds[topic] || []),
    ...signals.contexts.flatMap((context) => contextChoiceIds[context] || []),
  ];

  const choices: RankedEntry[] = [];

  ids.forEach((id) => {
    const result = rankedById.get(id);
    if (result && !choices.some((choice) => choice.entry.id === id)) {
      choices.push(result);
    }
  });

  return choices.slice(0, 4);
}

function isProfileCompatible(profile: MatcherProfile, signals: QuerySignals) {
  const profileContexts = profile.contexts || [];
  const profileTopics = profile.topics || [];
  const specificContexts = signals.contexts.filter((context) => context !== 'commercial');

  if (signals.topics.length > 0 && profileTopics.some((topic) => signals.topics.includes(topic))) {
    return true;
  }

  if (signals.contexts.length > 0) {
    if (profileContexts.some((context) => signals.contexts.includes(context))) {
      return true;
    }

    const canUseGenericCommercial =
      profileContexts.includes('commercial') &&
      specificContexts.some((context) =>
        ['office', 'retail', 'fnb', 'shophouse'].includes(context)
      );

    if (canUseGenericCommercial) {
      return true;
    }
  }

  return signals.contexts.length === 0 && signals.topics.length === 0;
}

function getSafetyClass(signals: QuerySignals, primary?: RankedEntry): SafetyClass {
  if (primary?.entry.projectSpecific) return 'project_specific';

  const hasAuthority = signals.entities.some((entity) => authorityEntities.includes(entity));
  const hasFireSafety = signals.entities.includes('fire-safety');
  const hasStructural = signals.entities.includes('wall');
  const hasFoodSystem = signals.entities.some((entity) =>
    ['exhaust', 'grease-trap', 'gas', 'heavy-cooking'].includes(entity)
  );

  const lacksRequiredContext =
    (hasAuthority && signals.contexts.length === 0) ||
    (hasFireSafety && signals.contexts.length === 0) ||
    (hasStructural && !signals.contexts.includes('hdb')) ||
    (hasFoodSystem && !signals.contexts.includes('fnb'));

  if (lacksRequiredContext) return 'project_specific';

  if (
    hasAuthority ||
    hasFireSafety ||
    hasStructural ||
    hasFoodSystem ||
    signals.intents.includes('approval') ||
    signals.intents.includes('feasibility')
  ) {
    return 'conditional';
  }

  return 'general';
}

function getCanonicalRelatedResults(
  primary: RankedEntry | undefined,
  entries: AnswerFinderEntry[],
  rankedResults: RankedEntry[],
  excludeIds: string[] = []
): RankedEntry[] {
  if (!primary?.entry.relatedIds?.length) return [];

  const rankedById = new Map(rankedResults.map((result) => [result.entry.id, result]));
  const entryById = new Map(entries.map((entry) => [entry.id, entry]));
  const excluded = new Set([primary.entry.id, ...excludeIds]);

  return primary.entry.relatedIds
    .filter((id) => !excluded.has(id))
    .map((id) => {
      const ranked = rankedById.get(id);
      if (ranked) return ranked;

      const entry = entryById.get(id);
      return entry ? { entry, score: 0 } : undefined;
    })
    .filter((result): result is RankedEntry => Boolean(result))
    .slice(0, 3);
}

function resolveQuery(
  query: string,
  rankedResults: RankedEntry[],
  entries: AnswerFinderEntry[]
): QueryResolution {
  const normalizedQuery = normalize(query);
  const signals = classifyQuery(query);
  const exactResult = rankedResults.find(
    (result) => normalize(result.entry.question) === normalizedQuery
  );

  if (exactResult) {
    return {
      mode: 'direct',
      confidence: 'high',
      safety: getSafetyClass(signals, exactResult),
      primary: exactResult,
      related: getCanonicalRelatedResults(exactResult, entries, rankedResults),
    };
  }

  const authorityWithoutContext =
    signals.entities.some((entity) => authorityEntities.includes(entity)) &&
    signals.contexts.length === 0;
  const structuralWithoutHdb =
    signals.entities.includes('wall') && !signals.contexts.includes('hdb');
  const ambiguousShopGas =
    /\bshop\b/.test(signals.normalized) &&
    signals.entities.includes('gas') &&
    !signals.contexts.includes('fnb');
  const fireSafetyWithoutContext =
    signals.entities.includes('fire-safety') && signals.contexts.length === 0;
  const foodSystemWithoutFnb =
    signals.entities.some((entity) =>
      ['exhaust', 'grease-trap', 'gas', 'heavy-cooking'].includes(entity)
    ) && !signals.contexts.includes('fnb');

  if (
    authorityWithoutContext ||
    structuralWithoutHdb ||
    ambiguousShopGas ||
    fireSafetyWithoutContext ||
    foodSystemWithoutFnb
  ) {
    return {
      mode: 'fallback',
      confidence: 'low',
      safety: 'project_specific',
      related: [],
    };
  }

  const compatibleResults = rankedResults.filter((result) => {
    const profile = matcherProfiles[result.entry.id];
    return profile ? isProfileCompatible(profile, signals) : false;
  });

  const hasKnownSubject =
    signals.contexts.length > 0 ||
    signals.topics.length > 0 ||
    signals.entities.length > 0;

  const structuralHdbQuestion =
    signals.contexts.includes('hdb') && signals.entities.includes('wall');

  if (signals.intents.length > 1 && hasKnownSubject) {
    const multiResults: RankedEntry[] = [];

    signals.intents.forEach((intent) => {
      const result = compatibleResults.find((candidate) =>
        matcherProfiles[candidate.entry.id]?.intents.includes(intent)
      );

      if (result && !multiResults.some((item) => item.entry.id === result.entry.id)) {
        multiResults.push(result);
      }
    });

    if (multiResults.length > 1) {
      return {
        mode: 'multi',
        confidence: 'high',
        safety: getSafetyClass(signals, multiResults[0]),
        primary: multiResults[0],
        related: multiResults.slice(1, 4),
      };
    }
  }

  if ((hasKnownSubject && signals.intents.length > 0) || structuralHdbQuestion) {
    const primary = compatibleResults[0] || rankedResults[0];

    if (primary) {
      const primaryProfile = matcherProfiles[primary.entry.id];
      const specificContexts = signals.contexts.filter((context) => context !== 'commercial');
      const genericAuthorityBridge =
        signals.entities.some((entity) => authorityEntities.includes(entity)) &&
        specificContexts.length > 0 &&
        Boolean(primaryProfile?.contexts?.includes('commercial')) &&
        !primaryProfile?.contexts?.some((context) => specificContexts.includes(context));

      if (genericAuthorityBridge) {
        const choices = getCuratedChoices(signals, rankedResults);
        const resolvedChoices = choices.length > 0 ? choices : [primary];

        return {
          mode: 'choices',
          confidence: 'medium',
          safety: getSafetyClass(signals, resolvedChoices[0]),
          primary: resolvedChoices[0],
          related: resolvedChoices.slice(1),
        };
      }

      return {
        mode: 'direct',
        confidence: 'high',
        safety: getSafetyClass(signals, primary),
        primary,
        related: getCanonicalRelatedResults(primary, entries, rankedResults),
      };
    }
  }

  if (hasKnownSubject && signals.intents.length === 0) {
    const curatedChoices = getCuratedChoices(signals, rankedResults);
    const choices = curatedChoices.length > 0 ? curatedChoices : compatibleResults.slice(0, 4);

    if (choices.length > 0) {
      return {
        mode: 'choices',
        confidence: 'medium',
        safety: getSafetyClass(signals, choices[0]),
        primary: choices[0],
        related: choices.slice(1),
      };
    }
  }

  const genericRenovationCost =
    signals.intents.length === 1 &&
    signals.intents[0] === 'cost' &&
    /\b(?:reno|renovation)\b/.test(signals.normalized);

  if (genericRenovationCost) {
    const primary = rankedResults.find(
      (result) => result.entry.id === 'renovation-cost-singapore'
    );

    if (primary) {
      return {
        mode: 'direct',
        confidence: 'high',
        safety: getSafetyClass(signals, primary),
        primary,
        related: getCanonicalRelatedResults(primary, entries, rankedResults),
      };
    }
  }

  if (rankedResults.length > 0) {
    return {
      mode: 'choices',
      confidence: 'medium',
      safety: getSafetyClass(signals, rankedResults[0]),
      primary: rankedResults[0],
      related: rankedResults.slice(1, 4),
    };
  }

  return {
    mode: 'fallback',
    confidence: 'low',
    safety: getSafetyClass(signals),
    related: [],
  };
}

function buildWhatsAppUrl(number: string, question: string, isChinese = false) {
  const message = encodeURIComponent(
    isChinese
      ? `你好 ID Work Studio，我正在使用你们的装修答案查找器。我的问题是：“${question}”`
      : `Hi ID Work Studio, I was using your renovation answer finder. My question is: "${question}"`
  );

  return `https://wa.me/${number}?text=${message}`;
}

export default function AnswerFinder({
  entries,
  title = 'What would you like to know about your renovation?',
  subtitle = 'Ask about renovation cost, timeline, approvals, office planning, HDB works or commercial renovation.',
  placeholder = 'Type your renovation question...',
  suggestedIds = [],
  whatsappNumber = '6598333085',
}: AnswerFinderProps) {
  const [query, setQuery] = useState('');
  const [submittedQuery, setSubmittedQuery] = useState('');

  const suggestedEntries = useMemo(
    () =>
      suggestedIds
        .map((id) => entries.find((entry) => entry.id === id))
        .filter((entry): entry is AnswerFinderEntry => Boolean(entry)),
    [entries, suggestedIds]
  );

  const rankedResults = useMemo<RankedEntry[]>(() => {
    if (!submittedQuery.trim()) return [];

    return entries
      .map((entry) => ({
        entry,
        score: rankEntry(submittedQuery, entry),
      }))
      .filter((result) => result.score > 0)
      .sort((a, b) => b.score - a.score);
  }, [entries, submittedQuery]);

  const resolution = useMemo(
    () => resolveQuery(submittedQuery, rankedResults, entries),
    [entries, rankedResults, submittedQuery]
  );

  const bestResult = resolution.primary;
  const relatedResults = resolution.related;

  const hasProjectSpecificMatch = Boolean(
    bestResult &&
    resolution.safety === 'project_specific' &&
    (resolution.mode === 'direct' || resolution.mode === 'multi')
  );
  const hasStrongMatch = Boolean(
    bestResult &&
    resolution.safety !== 'project_specific' &&
    (resolution.mode === 'direct' || resolution.mode === 'multi')
  );
  const hasRelatedMatch = resolution.mode === 'choices' && Boolean(bestResult);

  const isChinese = entries.some((entry) => /[\u3400-\u9fff]/.test(entry.question));
  const copy = isChinese
    ? {
        eyebrow: '装修答案查找器',
        searchLabel: '输入装修问题',
        ask: '询问',
        popularQuestions: '热门问题',
        bestAnswer: '最佳答案',
        closestInformation: '最接近的资料',
        closestDescription: '我们找到了相关资料，但它可能无法完全回答你的具体问题。',
        projectSpecificLabel: '这个问题需要根据具体项目判断',
        projectSpecificFallbackTitle: '这个问题暂时没有可靠的通用答案。',
        projectSpecificFallbackDescription:
          '有些装修问题取决于单位情况、获批图纸、建筑要求或拟进行的工程。与其给你一个可能不准确的通用答案，我们更希望先了解你的实际情况。',
        askIdws: '询问 ID Work Studio',
        relatedAnswers: '相关答案',
        askAnother: '询问另一个问题',
      }
    : {
        eyebrow: 'Renovation Answer Finder',
        searchLabel: 'Ask a renovation question',
        ask: 'Ask',
        popularQuestions: 'Popular questions',
        bestAnswer: 'Best answer',
        closestInformation: 'Closest information',
        closestDescription:
          'We found related information, but it may not fully answer your exact question.',
        projectSpecificLabel: 'This needs a project-specific answer',
        projectSpecificFallbackTitle: 'We do not have a reliable general answer for that yet.',
        projectSpecificFallbackDescription:
          'Some renovation questions depend on the unit, approved plans, building requirements or proposed works. We would rather clarify your situation than give you a generic answer that may be wrong.',
        askIdws: 'Ask ID Work Studio',
        relatedAnswers: 'Related answers',
        askAnother: 'Ask another question',
      };

  const submitQuestion = (value: string) => {
    const cleanValue = value.trim();
    if (!cleanValue) return;

    setQuery(cleanValue);
    setSubmittedQuery(cleanValue);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitQuestion(query);
  };

  return (
    <section
      id="ask"
      aria-labelledby="answer-finder-title"
      className="bg-[#f8f5ef] px-4 py-10 sm:px-6 lg:px-8 md:py-12"
    >
      <div className="mx-auto max-w-5xl">
        <div className="rounded-[2rem] border border-gold/20 bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:p-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              {copy.eyebrow}
            </p>
            <h2
              id="answer-finder-title"
              className="font-serif text-3xl font-bold leading-tight text-dark-charcoal md:text-4xl"
            >
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 md:text-base">
              {subtitle}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mx-auto mt-6 max-w-2xl">
            <label htmlFor="answer-finder-search" className="sr-only">
              {copy.searchLabel}
            </label>
            <div className="flex items-center gap-2 rounded-2xl border border-black/10 bg-[#fbfaf7] p-1.5 focus-within:border-gold/50">
              <Search className="ml-2 h-5 w-5 flex-shrink-0 text-gold" aria-hidden="true" />
              <input
                id="answer-finder-search"
                type="search"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setSubmittedQuery(event.target.value.trim());
                }}
                placeholder={placeholder}
                className="min-w-0 flex-1 bg-transparent px-1 py-2.5 text-base text-dark-charcoal outline-none placeholder:text-gray-400"
              />
              <button
                type="submit"
                disabled={!query.trim()}
                className="inline-flex min-h-10 items-center gap-2 rounded-xl bg-dark-charcoal px-4 py-2 text-xs font-bold uppercase tracking-[0.13em] text-white transition-colors hover:bg-gold disabled:cursor-not-allowed disabled:opacity-40"
              >
                {copy.ask}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </form>

          <p className="mx-auto mt-2 max-w-2xl text-center text-xs leading-5 text-gray-500">
            For best results, search in English. 中文可使用下方常见问题快速查找。
          </p>

          {!submittedQuery && suggestedEntries.length > 0 && (
            <div className="mx-auto mt-4 max-w-2xl">
              <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
                {copy.popularQuestions}
              </p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {suggestedEntries.map((entry) => (
                  <button
                    key={entry.id}
                    type="button"
                    onClick={() => submitQuestion(entry.question)}
                    className="flex min-h-12 items-center justify-between rounded-xl border border-gold/20 bg-[#f8f5ef] px-4 py-3 text-left text-sm leading-5 text-dark-charcoal transition-colors hover:border-gold/50 hover:text-gold"
                  >
                    {entry.question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {submittedQuery && (
            <div className="mx-auto mt-7 max-w-3xl" aria-live="polite">
              {hasProjectSpecificMatch && bestResult && (
                <div className="rounded-[1.75rem] border border-gold/20 bg-[#fbfaf7] p-5 md:p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                    {copy.projectSpecificLabel}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-semibold leading-snug text-dark-charcoal">
                    {bestResult.entry.question}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {bestResult.entry.answer}
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-4">
                    <a
                      href={bestResult.entry.href}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-gold hover:text-gold-hover"
                    >
                      {bestResult.entry.linkLabel}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                    <a
                      href={buildWhatsAppUrl(whatsappNumber, submittedQuery, isChinese)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-gold/50 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-dark-charcoal transition-colors hover:bg-gold hover:text-white"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      {copy.askIdws}
                    </a>
                  </div>
                </div>
              )}

              {hasStrongMatch && bestResult && (
                <div className="rounded-[1.75rem] border border-black/5 bg-[#fbfaf7] p-5 md:p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                    {copy.bestAnswer}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-semibold leading-snug text-dark-charcoal">
                    {bestResult.entry.question}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {bestResult.entry.answer}
                  </p>

                  <a
                    href={bestResult.entry.href}
                    className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-gold hover:text-gold-hover"
                  >
                    {bestResult.entry.linkLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              )}

              {hasRelatedMatch && bestResult && (
                <div className="rounded-[1.75rem] border border-gold/20 bg-[#fbfaf7] p-5 md:p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                    {copy.closestInformation}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-semibold leading-snug text-dark-charcoal">
                    {bestResult.entry.question}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {copy.closestDescription}
                  </p>
                  <a
                    href={bestResult.entry.href}
                    className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-gold hover:text-gold-hover"
                  >
                    {bestResult.entry.linkLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              )}

              {!bestResult && (
                <div className="rounded-[1.75rem] border border-gold/20 bg-[#fbfaf7] p-5 md:p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                    {copy.projectSpecificLabel}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-semibold leading-snug text-dark-charcoal">
                    {copy.projectSpecificFallbackTitle}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {copy.projectSpecificFallbackDescription}
                  </p>
                  <a
                    href={buildWhatsAppUrl(whatsappNumber, submittedQuery, isChinese)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full border border-gold/50 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-dark-charcoal transition-colors hover:bg-gold hover:text-white"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    {copy.askIdws}
                  </a>
                </div>
              )}

              {relatedResults.length > 0 && (hasStrongMatch || hasProjectSpecificMatch || hasRelatedMatch) && (
                <div className="mt-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
                    {copy.relatedAnswers}
                  </p>
                  <div className="grid gap-3">
                    {relatedResults.map(({ entry }) => (
                      <a
                        key={entry.id}
                        href={entry.href}
                        className="group flex items-center justify-between gap-4 rounded-2xl border border-black/5 bg-white px-4 py-4 transition-colors hover:border-gold/30"
                      >
                        <span className="text-sm font-semibold text-dark-charcoal group-hover:text-gold">
                          {entry.question}
                        </span>
                        <ArrowRight className="h-4 w-4 flex-shrink-0 text-gold" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-5 text-center">
                <button
                  type="button"
                  onClick={() => {
                    setQuery('');
                    setSubmittedQuery('');
                  }}
                  className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500 hover:text-gold"
                >
                  {copy.askAnother}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
