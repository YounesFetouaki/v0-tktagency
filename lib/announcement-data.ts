export interface Announcement {
  id: string
  title: string
  content: string
  author: string
  date: string
  priority: "high" | "medium" | "low"
}

export const announcements: Announcement[] = [
  {
    id: "1",
    title: "Viking Vengeance Event - Tuesday & Thursday",
    content:
      "Remember to empty your cities and reinforce online members! Keep only your top 3 defense heroes at home. Use Bear Hunt joiner heroes when reinforcing.",
    author: "[TKT]ᴬᴳᴱᴺᵀ Younes",
    date: "2025-03-26",
    priority: "high",
  },
  {
    id: "2",
    title: "NAP Rules Reminder",
    content:
      "All Top 10 alliances are under NAP. Do not attack alliance buildings, farms, or block outposts. Violations will result in warnings and potential collective action.",
    author: "[TKT]ᴬᴳᴱᴺᵀ Kornik",
    date: "2025-03-25",
    priority: "high",
  },
  {
    id: "3",
    title: "Bear Hunt Strategy Update",
    content:
      "New strategy posted! Check the Bear Hunt section for updated rally formation tips. Set up formations 1 hour before event starts.",
    author: "[TKT]ᴬᴳᴱᴺᵀ Patriot",
    date: "2025-03-24",
    priority: "medium",
  },
  {
    id: "4",
    title: "Troop Training Focus",
    content:
      "Save your promotions for HoG, KvK, and Strongest Governor events. Train T6 troops now and promote to T7 during events for maximum points.",
    author: "[TKT]ᴬᴳᴱᴺᵀ Younes",
    date: "2025-03-23",
    priority: "medium",
  },
]
