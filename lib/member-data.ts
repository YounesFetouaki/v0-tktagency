export interface Member {
  id: string
  nickname: string
  role: string
  power: number
  eventPoints: number
  contributions: number
  status: "online" | "offline"
}

export const members: Member[] = [
  {
    id: "001",
    nickname: "[TKT]ᴬᴳᴱᴺᵀ Younes",
    role: "R5 - Leader",
    power: 125000000,
    eventPoints: 45000,
    contributions: 98,
    status: "online",
  },
  {
    id: "002",
    nickname: "[TKT]ᴬᴳᴱᴺᵀ Kornik",
    role: "R4 - Officer",
    power: 98000000,
    eventPoints: 38000,
    contributions: 92,
    status: "online",
  },
  {
    id: "003",
    nickname: "[TKT]ᴬᴳᴱᴺᵀ Patriot",
    role: "R4 - Officer",
    power: 95000000,
    eventPoints: 36000,
    contributions: 89,
    status: "online",
  },
  {
    id: "004",
    nickname: "[TKT] Spoiikee",
    role: "R3 - Elite",
    power: 87000000,
    eventPoints: 32000,
    contributions: 85,
    status: "online",
  },
  {
    id: "005",
    nickname: "[TKT] Steel",
    role: "R3 - Elite",
    power: 82000000,
    eventPoints: 29000,
    contributions: 81,
    status: "offline",
  },
  {
    id: "006",
    nickname: "[TKT] Shadow",
    role: "R3 - Elite",
    power: 79000000,
    eventPoints: 27000,
    contributions: 78,
    status: "online",
  },
  {
    id: "007",
    nickname: "[TKT] Phoenix",
    role: "Member",
    power: 72000000,
    eventPoints: 24000,
    contributions: 74,
    status: "online",
  },
  {
    id: "008",
    nickname: "[TKT] Viper",
    role: "Member",
    power: 68000000,
    eventPoints: 22000,
    contributions: 70,
    status: "offline",
  },
]
