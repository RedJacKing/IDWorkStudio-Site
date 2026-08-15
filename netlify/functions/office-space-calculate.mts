// ID Work Studio — Singapore Office Space Planner
// Private server-side calculation engine.
// IMPORTANT: Do not move calculation constants or formulas into the public front end.

type DeskMode = "assigned" | "shared" | "mixed";
type RoomLevel = "efficient" | "standard" | "generous" | "executive";
type MeetingType = "standard" | "boardroom";
type TrainingSetup = "theatre" | "classroom" | "multipurpose";
type Frequency = "rarely" | "regularly" | "very_often";
type PantryType = "none" | "basic" | "quick_meals" | "staff_seating";
type ReceptionType = "none" | "small" | "regular" | "large";
type StorageType = "none" | "minimal" | "normal" | "heavy";
type ItType = "none" | "network_cabinet" | "one_rack" | "two_racks" | "larger";
type PrintType = "none" | "printer_point" | "dedicated";
type CollaborationType = "none" | "four" | "six_to_eight" | "ten_plus";

interface MeetingRoomInput {
  capacity: number;
  type?: MeetingType;
}

interface PlannerInput {
  headcount: number;
  typicalAttendance: number;
  peakAttendance: number;

  deskMode: DeskMode;
  workstations: number;
  deskLengthMm: number;
  deskDepthMm: number;

  directors?: {
    qty: number;
    type?: RoomLevel;
  };

  managers?: {
    qty: number;
    type?: Exclude<RoomLevel, "executive">;
  };

  meetingRooms?: MeetingRoomInput[];
  phoneRooms?: number;

  training?: {
    enabled: boolean;
    capacity?: number;
    setup?: TrainingSetup;
  };

  pantry?: PantryType;
  pantrySeats?: number;

  reception?: ReceptionType;
  storage?: StorageType;
  it?: ItType;
  printArea?: PrintType;
  collaboration?: CollaborationType;

  privateCallFrequency?: Frequency;
  visitorFrequency?: Frequency;

  futureHeadcount?: number | null;
}

interface Range {
  low: number;
  high: number;
}

interface Driver {
  key: string;
  label: string;
  sharePercent: number;
  importance: "largest" | "significant" | "moderate" | "smaller";
}

interface Recommendation {
  id: string;
  title: string;
  message: string;
  impact: "high" | "medium" | "low";
}

const SQM_TO_SQFT = 10.7639;

// ------------------------------
// PRIVATE PLANNING CONSTANTS
// ------------------------------

const MANAGER_ROOM_SQFT = {
  efficient: 70,
  standard: 85,
  generous: 105,
};

const DIRECTOR_ROOM_SQFT = {
  efficient: 90,
  standard: 105,
  generous: 130,
  executive: 200,
};

const MEETING_ROOM_SQFT: Record<number, number> = {
  2: 60,
  4: 90,
  6: 115,
  8: 145,
  10: 190,
  12: 225,
  16: 290,
};

const PHONE_ROOM_SQFT = 15;

const TRAINING_SQFT_PER_PERSON = {
  theatre: 13,
  classroom: 19,
  multipurpose: 21,
};

const PANTRY_SQFT = {
  none: 0,
  basic: 35,
  quick_meals: 70,
};

const RECEPTION_SQFT = {
  none: 0,
  small: 40,
  regular: 68,
  large: 95,
};

const STORAGE_SQFT = {
  none: 0,
  minimal: 15,
  normal: 30,
  heavy: 60,
};

const IT_SQFT = {
  none: 0,
  network_cabinet: 15,
  one_rack: 25,
  two_racks: 40,
  larger: 70,
};

const PRINT_SQFT = {
  none: 0,
  printer_point: 12,
  dedicated: 30,
};

const COLLAB_SQFT = {
  none: 0,
  four: 50,
  six_to_eight: 82,
  ten_plus: 115,
};

const MIN_MICRO_LAYOUT_ALLOWANCE_SQFT = 45;
const RECOMMENDED_DENSITY_GUARDRAIL_SQFT_PER_PEAK_USER = 80;

// ------------------------------
// VALIDATION
// ------------------------------

class InputError extends Error {}

function num(value: unknown, name: string, min: number, max: number): number {
  const n = Number(value);
  if (!Number.isFinite(n) || n < min || n > max) {
    throw new InputError(`${name} must be between ${min} and ${max}.`);
  }
  return n;
}

function integer(value: unknown, name: string, min: number, max: number): number {
  const n = num(value, name, min, max);
  if (!Number.isInteger(n)) {
    throw new InputError(`${name} must be a whole number.`);
  }
  return n;
}

function oneOf<T extends string>(
  value: unknown,
  name: string,
  allowed: readonly T[],
  fallback?: T,
): T {
  if (value === undefined || value === null || value === "") {
    if (fallback !== undefined) return fallback;
    throw new InputError(`${name} is required.`);
  }
  if (!allowed.includes(value as T)) {
    throw new InputError(`${name} has an invalid value.`);
  }
  return value as T;
}

function validateInput(raw: unknown): PlannerInput {
  if (!raw || typeof raw !== "object") {
    throw new InputError("Invalid request body.");
  }

  const r = raw as Record<string, any>;

  const headcount = integer(r.headcount, "headcount", 1, 500);
  const typicalAttendance = integer(r.typicalAttendance, "typicalAttendance", 1, 500);
  const peakAttendance = integer(r.peakAttendance, "peakAttendance", 1, 500);

  if (typicalAttendance > peakAttendance) {
    throw new InputError("Typical attendance cannot exceed peak attendance.");
  }
  if (peakAttendance > headcount) {
    throw new InputError("Peak attendance cannot exceed current headcount.");
  }

  const deskMode = oneOf(
    r.deskMode,
    "deskMode",
    ["assigned", "shared", "mixed"] as const,
  );

  const workstations = integer(r.workstations, "workstations", 1, 500);
  const deskLengthMm = num(r.deskLengthMm, "deskLengthMm", 800, 2500);
  const deskDepthMm = num(r.deskDepthMm, "deskDepthMm", 450, 1200);

  const directorType = oneOf(
    r.directors?.type,
    "directors.type",
    ["efficient", "standard", "generous", "executive"] as const,
    "standard",
  );

  const managerType = oneOf(
    r.managers?.type,
    "managers.type",
    ["efficient", "standard", "generous"] as const,
    "standard",
  );

  const directors = {
    qty: integer(r.directors?.qty ?? 0, "directors.qty", 0, 50),
    type: directorType,
  };

  const managers = {
    qty: integer(r.managers?.qty ?? 0, "managers.qty", 0, 100),
    type: managerType,
  };

  const meetingRooms: MeetingRoomInput[] = Array.isArray(r.meetingRooms)
    ? r.meetingRooms.map((m: any, i: number) => ({
        capacity: integer(m?.capacity, `meetingRooms[${i}].capacity`, 2, 100),
        type: oneOf(
          m?.type,
          `meetingRooms[${i}].type`,
          ["standard", "boardroom"] as const,
          "standard",
        ),
      }))
    : [];

  if (meetingRooms.length > 30) {
    throw new InputError("Too many meeting rooms.");
  }

  const phoneRooms = integer(r.phoneRooms ?? 0, "phoneRooms", 0, 50);

  const trainingEnabled = Boolean(r.training?.enabled);
  const training = trainingEnabled
    ? {
        enabled: true,
        capacity: integer(r.training?.capacity, "training.capacity", 2, 200),
        setup: oneOf(
          r.training?.setup,
          "training.setup",
          ["theatre", "classroom", "multipurpose"] as const,
          "multipurpose",
        ),
      }
    : { enabled: false as const };

  const pantry = oneOf(
    r.pantry,
    "pantry",
    ["none", "basic", "quick_meals", "staff_seating"] as const,
    "none",
  );

  const pantrySeats =
    pantry === "staff_seating"
      ? integer(r.pantrySeats ?? 4, "pantrySeats", 1, 100)
      : 0;

  const reception = oneOf(
    r.reception,
    "reception",
    ["none", "small", "regular", "large"] as const,
    "none",
  );

  const storage = oneOf(
    r.storage,
    "storage",
    ["none", "minimal", "normal", "heavy"] as const,
    "none",
  );

  const it = oneOf(
    r.it,
    "it",
    ["none", "network_cabinet", "one_rack", "two_racks", "larger"] as const,
    "none",
  );

  const printArea = oneOf(
    r.printArea,
    "printArea",
    ["none", "printer_point", "dedicated"] as const,
    "none",
  );

  const collaboration = oneOf(
    r.collaboration,
    "collaboration",
    ["none", "four", "six_to_eight", "ten_plus"] as const,
    "none",
  );

  const privateCallFrequency = oneOf(
    r.privateCallFrequency,
    "privateCallFrequency",
    ["rarely", "regularly", "very_often"] as const,
    "rarely",
  );

  const visitorFrequency = oneOf(
    r.visitorFrequency,
    "visitorFrequency",
    ["rarely", "regularly", "very_often"] as const,
    "rarely",
  );

  const futureHeadcount =
    r.futureHeadcount === undefined ||
    r.futureHeadcount === null ||
    r.futureHeadcount === ""
      ? null
      : integer(r.futureHeadcount, "futureHeadcount", headcount, 750);

  return {
    headcount,
    typicalAttendance,
    peakAttendance,
    deskMode,
    workstations,
    deskLengthMm,
    deskDepthMm,
    directors,
    managers,
    meetingRooms,
    phoneRooms,
    training,
    pantry,
    pantrySeats,
    reception,
    storage,
    it,
    printArea,
    collaboration,
    privateCallFrequency,
    visitorFrequency,
    futureHeadcount,
  };
}

// ------------------------------
// PRIVATE CALCULATION HELPERS
// ------------------------------

function workstationModuleSqft(lengthMm: number, depthMm: number): number {
  const moduleLengthM = (lengthMm + 100) / 1000;
  const moduleDepthM = (depthMm + 875) / 1000;
  return moduleLengthM * moduleDepthM * SQM_TO_SQFT;
}

function meetingRoomSqft(capacity: number, type: MeetingType): number {
  const known = Object.keys(MEETING_ROOM_SQFT)
    .map(Number)
    .sort((a, b) => a - b);

  let base: number;

  if (MEETING_ROOM_SQFT[capacity]) {
    base = MEETING_ROOM_SQFT[capacity];
  } else if (capacity < known[0]) {
    base = MEETING_ROOM_SQFT[known[0]];
  } else if (capacity > known[known.length - 1]) {
    // Larger meeting rooms scale from the 16-person anchor.
    base = MEETING_ROOM_SQFT[16] + (capacity - 16) * 16;
  } else {
    const lower = [...known].reverse().find((n) => n < capacity)!;
    const upper = known.find((n) => n > capacity)!;
    const ratio = (capacity - lower) / (upper - lower);
    base =
      MEETING_ROOM_SQFT[lower] +
      ratio * (MEETING_ROOM_SQFT[upper] - MEETING_ROOM_SQFT[lower]);
  }

  return type === "boardroom" ? base * 1.15 : base;
}

function pantrySqft(type: PantryType, seats: number): number {
  if (type !== "staff_seating") {
    return PANTRY_SQFT[type];
  }
  return 35 + seats * 13.5;
}

function layoutEfficiency(
  netFunctionalArea: number,
  enclosedArea: number,
  enclosedRoomCount: number,
  peakAttendance: number,
): number {
  const enclosedRatio =
    netFunctionalArea > 0 ? enclosedArea / netFunctionalArea : 0;

  const roomDensity =
    enclosedRoomCount / Math.max(peakAttendance, 3);

  let efficiency = 0.83;

  if (enclosedRatio < 0.2 && roomDensity < 0.18) {
    efficiency = 0.85;
  } else if (enclosedRatio < 0.35 && roomDensity < 0.3) {
    efficiency = 0.82;
  } else if (enclosedRatio < 0.5 && roomDensity < 0.45) {
    efficiency = 0.79;
  } else if (enclosedRatio < 0.65 && roomDensity < 0.65) {
    efficiency = 0.75;
  } else {
    efficiency = 0.71;
  }

  // Very small offices often need a little more practical efficiency
  // than a raw room-density ratio suggests, but are still protected by
  // the minimum layout allowance below.
  if (netFunctionalArea < 350) {
    efficiency = Math.max(efficiency, 0.8);
  }

  return efficiency;
}

function totalAreaWithLayout(
  netFunctionalArea: number,
  efficiency: number,
): number {
  const percentageBased = netFunctionalArea / efficiency;
  const minimumProtected = netFunctionalArea + MIN_MICRO_LAYOUT_ALLOWANCE_SQFT;
  return Math.max(percentageBased, minimumProtected);
}

function roundStepForArea(area: number): number {
  if (area < 500) return 25;
  if (area < 1500) return 50;
  return 100;
}

function roundedRange(area: number): Range {
  const step = roundStepForArea(area);
  const low = Math.max(step, Math.floor(area / step) * step);
  const high = Math.ceil((area * 1.06) / step) * step;
  return { low, high: Math.max(high, low + step) };
}

function importanceFromShare(share: number, rank: number): Driver["importance"] {
  if (rank === 0) return "largest";
  if (share >= 0.2) return "significant";
  if (share >= 0.1) return "moderate";
  return "smaller";
}

function nearestFivePercent(value: number): number {
  return Math.max(5, Math.round(value / 5) * 5);
}

function buildDrivers(parts: Array<{ key: string; label: string; area: number }>): Driver[] {
  const total = parts.reduce((sum, part) => sum + part.area, 0) || 1;

  return parts
    .filter((part) => part.area > 0)
    .map((part) => ({
      ...part,
      share: part.area / total,
    }))
    .sort((a, b) => b.area - a.area)
    .slice(0, 5)
    .map((part, index) => ({
      key: part.key,
      label: part.label,
      sharePercent: nearestFivePercent(part.share * 100),
      importance: importanceFromShare(part.share, index),
    }));
}

function estimateFutureWorkstations(input: PlannerInput): number {
  if (!input.futureHeadcount || input.futureHeadcount <= input.headcount) {
    return input.workstations;
  }

  const ratio = input.workstations / input.headcount;
  return Math.max(input.workstations, Math.ceil(input.futureHeadcount * ratio));
}

function buildRecommendations(
  input: PlannerInput,
  drivers: Driver[],
): Recommendation[] {
  const recommendations: Recommendation[] = [];

  if (
    input.workstations >= 4 &&
    (input.deskLengthMm > 1500 || input.deskDepthMm > 750)
  ) {
    recommendations.push({
      id: "desk_optimisation",
      title: "Consider a smaller workstation",
      message:
        "Your selected desk dimensions are a meaningful space driver. A smaller desk may reduce the total office area without changing headcount.",
      impact: "high",
    });
  }

  if ((input.managers?.qty ?? 0) > 0) {
    recommendations.push({
      id: "manager_room_review",
      title: "Review dedicated manager rooms",
      message:
        "Dedicated manager rooms consume both room area and circulation. If some managers can work in the open office or share a room, the total requirement may fall.",
      impact: "medium",
    });
  }

  if (
    input.training?.enabled &&
    (input.meetingRooms?.some((room) => room.capacity >= 8) ?? false)
  ) {
    recommendations.push({
      id: "combine_training_meeting",
      title: "Consider a multipurpose meeting / training room",
      message:
        "Your larger meeting room and training function may be able to share one adaptable room if they are not normally used at the same time.",
      impact: "high",
    });
  }

  if (
    input.privateCallFrequency === "very_often" &&
    (input.phoneRooms ?? 0) === 0
  ) {
    recommendations.push({
      id: "add_phone_room",
      title: "Protect meeting rooms from individual calls",
      message:
        "You selected very frequent private or video calls but no dedicated phone room. A small call room may improve function even though it adds a small amount of area.",
      impact: "medium",
    });
  }

  if (
    input.visitorFrequency === "very_often" &&
    (input.reception === "none" || input.reception === undefined)
  ) {
    recommendations.push({
      id: "visitor_arrival_review",
      title: "Plan for frequent visitors",
      message:
        "Frequent external visitors may create pressure on meeting rooms and arrival space. Check that the final unit can handle visitors without disrupting the work area.",
      impact: "medium",
    });
  }

  const privateDriver = drivers.find((d) => d.key === "private_offices");
  if (privateDriver && privateDriver.sharePercent >= 25) {
    recommendations.push({
      id: "private_room_pressure",
      title: "Private rooms are driving your office size",
      message:
        "A large share of your requirement is tied to enclosed management rooms. Reducing or sharing some private rooms can materially improve overall efficiency.",
      impact: "high",
    });
  }

  return recommendations.slice(0, 5);
}

function calculate(input: PlannerInput) {
  const deskModule = workstationModuleSqft(
    input.deskLengthMm,
    input.deskDepthMm,
  );

  const workstationArea = deskModule * input.workstations;

  const managerArea =
    (input.managers?.qty ?? 0) *
    MANAGER_ROOM_SQFT[input.managers?.type ?? "standard"];

  const directorArea =
    (input.directors?.qty ?? 0) *
    DIRECTOR_ROOM_SQFT[input.directors?.type ?? "standard"];

  const meetingArea = (input.meetingRooms ?? []).reduce(
    (sum, room) =>
      sum + meetingRoomSqft(room.capacity, room.type ?? "standard"),
    0,
  );

  const phoneArea = (input.phoneRooms ?? 0) * PHONE_ROOM_SQFT;

  const trainingArea =
    input.training?.enabled && input.training.capacity
      ? input.training.capacity *
        TRAINING_SQFT_PER_PERSON[input.training.setup ?? "multipurpose"]
      : 0;

  const pantryArea = pantrySqft(
    input.pantry ?? "none",
    input.pantrySeats ?? 0,
  );

  const receptionArea = RECEPTION_SQFT[input.reception ?? "none"];
  const storageArea = STORAGE_SQFT[input.storage ?? "none"];
  const itArea = IT_SQFT[input.it ?? "none"];
  const printArea = PRINT_SQFT[input.printArea ?? "none"];
  const collaborationArea = COLLAB_SQFT[input.collaboration ?? "none"];

  const privateOfficeArea = managerArea + directorArea;
  const meetingAndCallArea = meetingArea + phoneArea + trainingArea;
  const supportArea =
    pantryArea +
    receptionArea +
    storageArea +
    itArea +
    printArea +
    collaborationArea;

  const netFunctionalArea =
    workstationArea +
    privateOfficeArea +
    meetingAndCallArea +
    supportArea;

  const enclosedArea =
    privateOfficeArea +
    meetingAndCallArea +
    receptionArea +
    itArea;

  const enclosedRoomCount =
    (input.managers?.qty ?? 0) +
    (input.directors?.qty ?? 0) +
    (input.meetingRooms?.length ?? 0) +
    (input.phoneRooms ?? 0) +
    (input.training?.enabled ? 1 : 0) +
    (input.reception !== "none" ? 1 : 0) +
    (input.it !== "none" ? 1 : 0);

  const efficiency = layoutEfficiency(
    netFunctionalArea,
    enclosedArea,
    enclosedRoomCount,
    input.peakAttendance,
  );

  const activityBasedRecommendedRaw = totalAreaWithLayout(
    netFunctionalArea,
    efficiency,
  );

  const recommendedDensityGuardrail =
    input.peakAttendance * RECOMMENDED_DENSITY_GUARDRAIL_SQFT_PER_PEAK_USER;

  const recommendedRaw = Math.max(
    activityBasedRecommendedRaw,
    recommendedDensityGuardrail,
  );

  const efficientEfficiency = Math.min(0.86, efficiency + 0.04);
  const spaceEfficientDensityGuardrail =
    recommendedDensityGuardrail * (efficiency / efficientEfficiency);
  const spaceEfficientRaw = Math.max(
    totalAreaWithLayout(
      netFunctionalArea,
      efficientEfficiency,
    ),
    spaceEfficientDensityGuardrail,
  );

  const futureWorkstations = estimateFutureWorkstations(input);
  const futureWorkstationArea = deskModule * futureWorkstations;

  const futureNetFunctionalArea =
    netFunctionalArea - workstationArea + futureWorkstationArea;

  const futureEfficiency = layoutEfficiency(
    futureNetFunctionalArea,
    enclosedArea,
    enclosedRoomCount,
    input.futureHeadcount ?? input.peakAttendance,
  );

  const projectedFuturePeakAttendance =
    input.futureHeadcount && input.futureHeadcount > input.headcount
      ? Math.max(
          input.peakAttendance,
          Math.ceil(
            input.futureHeadcount *
              (input.peakAttendance / Math.max(input.headcount, 1)),
          ),
        )
      : input.peakAttendance;

  const futureDensityGuardrail =
    projectedFuturePeakAttendance *
    RECOMMENDED_DENSITY_GUARDRAIL_SQFT_PER_PEAK_USER;

  const growthReadyRaw =
    input.futureHeadcount && input.futureHeadcount > input.headcount
      ? Math.max(
          totalAreaWithLayout(futureNetFunctionalArea, futureEfficiency),
          futureDensityGuardrail,
        )
      : recommendedRaw;

  const driverParts = [
    { key: "workstations", label: "Workstations", area: workstationArea },
    {
      key: "private_offices",
      label: "Private offices",
      area: privateOfficeArea,
    },
    {
      key: "meeting_space",
      label: "Meeting / call spaces",
      area: meetingAndCallArea,
    },
    {
      key: "support_spaces",
      label: "Support spaces",
      area: supportArea,
    },
    {
      key: "planning_circulation",
      label: "Planning / circulation",
      area: Math.max(0, recommendedRaw - netFunctionalArea),
    },
  ];

  const drivers = buildDrivers(driverParts);
  const recommendations = buildRecommendations(input, drivers);

  return {
    calculationId: crypto.randomUUID(),

    recommended: roundedRange(recommendedRaw),
    spaceEfficient: roundedRange(spaceEfficientRaw),
    growthReady: roundedRange(growthReadyRaw),

    drivers,
    recommendations,

    searchBrief: {
      peakUsers: input.peakAttendance,
      workstations: input.workstations,
      deskSize: `${Math.round(input.deskLengthMm)} × ${Math.round(
        input.deskDepthMm,
      )} mm`,
      directorRooms: input.directors?.qty ?? 0,
      managerRooms: input.managers?.qty ?? 0,
      meetingRooms: (input.meetingRooms ?? []).map((room) => ({
        capacity: room.capacity,
        type: room.type ?? "standard",
      })),
      phoneRooms: input.phoneRooms ?? 0,
      supportSpaces: [
        input.pantry && input.pantry !== "none" ? "Pantry" : null,
        input.reception && input.reception !== "none" ? "Reception / waiting" : null,
        input.storage && input.storage !== "none" ? "Storage" : null,
        input.it && input.it !== "none" ? "Server / IT" : null,
        input.printArea && input.printArea !== "none" ? "Print / utility" : null,
        input.collaboration && input.collaboration !== "none"
          ? "Collaboration area"
          : null,
      ].filter(Boolean),
    },

    notes: [
      "Planning estimate only. Final suitability depends on the actual unit shape, columns, entrances, exits, existing services and circulation.",
      "The result is a search/planning range, not an SCDF compliance assessment.",
    ],
  };
}

// ------------------------------
// NETLIFY FUNCTION
// ------------------------------

export default async (req: Request) => {
  const headers = {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
    "x-content-type-options": "nosniff",
  };

  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        ...headers,
        "access-control-allow-methods": "POST, OPTIONS",
        "access-control-allow-headers": "content-type",
      },
    });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed." }),
      { status: 405, headers },
    );
  }

  try {
    const raw = await req.json();
    const input = validateInput(raw);
    const result = calculate(input);

    return new Response(JSON.stringify(result), {
      status: 200,
      headers,
    });
  } catch (error) {
    if (error instanceof InputError) {
      return new Response(
        JSON.stringify({ error: error.message }),
        { status: 400, headers },
      );
    }

    console.error("office-space-calculate failed", error);

    return new Response(
      JSON.stringify({ error: "Unable to calculate office space right now." }),
      { status: 500, headers },
    );
  }
};
