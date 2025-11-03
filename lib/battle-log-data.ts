export interface BattleLog {
  id: string
  eventType: string
  target: string
  rallyLeader: string
  participants: string[]
  damageDealt: number
  result: "victory" | "defeat" | "draw"
  date: string
  notes: string
}

export const battleLogs: BattleLog[] = [
  {
    id: "1",
    eventType: "Bear Hunt",
    target: "Level 9 Bear",
    rallyLeader: "[TKT]ᴬᴳᴱᴺᵀ Younes",
    participants: ["[TKT]ᴬᴳᴱᴺᵀ Kornik", "[TKT]ᴬᴳᴱᴺᵀ Patriot", "[TKT] Spoiikee", "[TKT] Steel"],
    damageDealt: 8500000,
    result: "victory",
    date: "2025-03-26",
    notes: "Perfect execution, all participants used correct heroes",
  },
  {
    id: "2",
    eventType: "Sanctuary Raid",
    target: "Sanctuary Level 7",
    rallyLeader: "[TKT] Steel",
    participants: ["[TKT] Shadow", "[TKT] Phoenix", "[TKT] Viper"],
    damageDealt: 0,
    result: "defeat",
    date: "2025-03-25",
    notes: "Steel rallied a goose instead. Epic fail but legendary meme.",
  },
  {
    id: "3",
    eventType: "Viking Vengeance",
    target: "Wave 20 - HQ Defense",
    rallyLeader: "[TKT]ᴬᴳᴱᴺᵀ Kornik",
    participants: ["[TKT]ᴬᴳᴱᴺᵀ Younes", "[TKT]ᴬᴳᴱᴺᵀ Patriot", "[TKT] Shadow"],
    damageDealt: 12000000,
    result: "victory",
    date: "2025-03-24",
    notes: "Successfully defended final wave, high reinforcement points earned",
  },
]
