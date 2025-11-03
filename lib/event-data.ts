import { Crown, Swords, Users, Target, Castle, Heart, Shield } from "lucide-react"

export const eventDetails: Record<string, any> = {
  "batch-healing": {
    name: "Batch Healing Guide",
    description:
      "Essential healing strategy for all battle events. Heal troops in small batches to maximize alliance Timer Helps and save speedups.",
    category: "Strategy",
    frequency: "Always Active",
    rewards: "Speedup Savings, Faster Recovery",
    icon: Heart,
    image: "/batch-healing-medical-troops-recovery.jpg",
    quickFacts: [
      { label: "STRATEGY TYPE", value: "Healing Optimization" },
      { label: "APPLIES TO", value: "All Battle Events" },
      { label: "DIFFICULTY", value: "Easy" },
      { label: "BENEFIT", value: "Save Speedups" },
    ],
    tips: [
      "Check Embassy → Timer Help Duration to find your batch size",
      "Start with 1 hour batches, adjust based on alliance activity",
      "Strong alliances with many online can do 2-3 hour batches",
      "Test different batch sizes to find what works best",
    ],
    sections: [
      {
        title: "WHY BATCH HEALING?",
        content: [
          {
            text: "In KingShot, your troops get hurt in battles like Sanctuaries, Fortresses, King's Castle, and Kingdom vs Kingdom. Instead of healing all wounded troops at once, use Batch Healing (also called Micro Healing) to heal in small groups so you can use instant-heal more often with alliance help.",
          },
        ],
      },
      {
        title: "HOW IT WORKS",
        content: [
          {
            text: "Your alliance can speed up healing with Timer Helps. The trick is to heal only as many troops as your allies can help with instantly.",
          },
          {
            subtitle: "Finding Your Batch Size",
            list: [
              "Check your Embassy → Timer Help Duration & Helps",
              "Good starting point: 1 hour of healing per batch",
              "Strong alliance with many online: try 2-3 hours per batch",
            ],
          },
        ],
      },
      {
        title: "EXAMPLE CALCULATION",
        content: [
          {
            subtitle: "Level 28 Embassy",
            list: [
              "Gets 39 Timer Helps",
              "Each help reduces healing by 4 min 1 sec",
              "Total time reduction: 2 hours 36 min",
              "Keep each batch under 2 hours 36 min for instant-heal",
            ],
          },
          {
            text: "Test different batch sizes to see what works best for your alliance!",
          },
        ],
      },
    ],
  },
  "swordland-showdown": {
    name: "Swordland Showdown",
    description:
      "Top 20 alliances battle for Relic Points by capturing and holding strategic buildings. Requires excellent teamwork and coordination.",
    category: "Alliance",
    frequency: "Regular",
    rewards: "Swordland Tokens, Shop Items",
    icon: Target,
    image: "/swordland-showdown-tactical-map-buildings.jpg",
    images: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swordland-showdown-map-xSbrVL3kDfLDn9vMH4emWAzDJqdCxw.webp",
        alt: "Swordland Showdown Map by Daryl",
        caption:
          "Complete map showing all buildings: Swordshrine, Sanctums, Abbeys, Bell Tower, Royal Stables, Mercenary Camp, Hall of Reformation, and Undercellers",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Amadeus-01Z2s5Rfm64ZAR3Mph48cA5dq6BfjR.png",
        alt: "Amadeus Hero Stats",
        caption: "Recommended hero for rally captain and joining",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jabel-HHTkp4CxXUTCE3g7t9LAW3rZBPHw3a.png",
        alt: "Jabel Hero Stats",
        caption: "Essential hero for rally captains",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Saul-4TTLz1V1S6j7tJtAOOvN355bxi2tSd.png",
        alt: "Saul Hero Stats",
        caption: "Strong Gen 1 hero for rallies",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Helga-cgOf0m4Pu7oSOC5BRIdneYaBsyONBj.png",
        alt: "Helga Hero Stats",
        caption: "Alternative rally captain with Lethality widget",
      },
    ],
    quickFacts: [
      { label: "EVENT TYPE", value: "Alliance Territory Control" },
      { label: "DURATION", value: "3 Phases" },
      { label: "PARTICIPATION", value: "Top 20 Alliances" },
      { label: "DIFFICULTY", value: "High" },
    ],
    tips: [
      "Only register members who will actually show up",
      "Use labels/markers to coordinate attacks",
      "Set up Discord voice chat for real-time coordination",
      "Don't rush Swordshrine—wait until last 10 minutes",
    ],
    sections: [
      {
        title: "ELIGIBILITY",
        content: [
          {
            subtitle: "Alliance Requirements",
            list: [
              "Only Top 20 alliances (by Alliance Power before event) can participate",
              "Each alliance can register two Legions",
              "Each Legion: 30 main fighters + 10 substitutes",
              "Alliance leaders or R4s handle registrations",
              "Regular members can only join one Legion but can switch until registration ends",
            ],
          },
          {
            subtitle: "Personal Requirements",
            list: [
              "Must be in alliance before registration closes",
              "Troops must not be marching, healing, or reinforcing",
              "Free up your army to enter the battlefield",
            ],
          },
        ],
      },
      {
        title: "BATTLE PHASES",
        content: [
          {
            subtitle: "Phase 1: Basic Buildings",
            text: "Fight for Sanctums, Abbeys, Bell Tower, and Royal Stables.",
          },
          {
            subtitle: "Phase 2: Advanced Buildings",
            text: "Swordshrine, Hall of Reformation, and Mercenary Camp become available.",
          },
          {
            subtitle: "Phase 3: Undercellers",
            text: "Undercellers appear randomly—loot them for big point boosts.",
          },
          {
            subtitle: "Victory Condition",
            list: [
              "Collect Relic Points by capturing and holding buildings",
              "Alliance with most Relic Points at end wins",
              "Rewards depend on Legion 1 result and personal performance",
            ],
          },
        ],
      },
      {
        title: "KEY BUILDINGS",
        content: [
          {
            list: [
              "Swordshrine (Center): Produces continuous Relic Points",
              "Sanctums: Near Swordshrine, control both for more points",
              "Abbeys: Give points over time",
              "Hall of Reformation: Boosts combat power",
              "Belltower: Speeds up building captures",
              "Royal Stables: Shortens teleport cooldown by 50%",
              "Mercenary Camp: Send mercenaries to hit enemy buildings",
              "Undercellers: Appear in waves for big point boosts",
            ],
          },
          {
            text: "Buildings give temporary Relic Points. If you lose a building, temp points drop as Arsenal Supplies on the ground and can be collected by either side.",
          },
        ],
      },
      {
        title: "WINNING STRATEGY",
        content: [
          {
            subtitle: "1. Register Active Members Only",
            text: "Only register members who will actually show up. If you sign up 30 and only 15 log in, it messes up matchmaking and you'll have a much harder time winning.",
          },
          {
            subtitle: "2. Use Labels to Coordinate",
            text: "Alliance leaders should use labels or markers to guide players on what to attack and which buildings to go for. Helps a ton when people get lost mid-battle.",
          },
          {
            subtitle: "3. Set Up Teams Properly",
            text: "Before event, organize into three teams: Attackers, Support, Defenders. Split roughly 1/3 per team. Use Discord or voice chat.",
          },
          {
            list: [
              "Top players → Attack team (e.g., if 24 join, 8 strongest go here)",
              "Absolute strongest player (whale) → Support team with 7 solid players",
              "Rest → Defenders",
            ],
          },
        ],
      },
      {
        title: "PHASE 1 STRATEGY",
        content: [
          {
            list: [
              "Support team helps Defenders capture key buildings",
              "Priority targets: Belltower and Royal Stables",
              "Attack team focuses on hitting enemy players to weaken troops",
              "When Attack team runs low, they retreat to heal (12 min cooldown)",
              "During that time, Support takes over attacking",
              "Once Attackers healed, everyone switches back to original roles",
            ],
          },
        ],
      },
      {
        title: "PHASE 2 STRATEGY",
        content: [
          {
            text: "Swordshrine opens but ignore it for now (wait for Phase 3). Goal: control buildings and rack up Relic Points.",
          },
          {
            subtitle: "Defender Team Split",
            list: [
              "Half hold: Belltower + 1 Sanctum + 2 Abbeys",
              "Other half hold: Royal Stables + other Sanctum + 2 Abbeys",
            ],
          },
          {
            list: ["Attackers keep pressuring enemy", "Support helps capture or defend buildings as needed"],
          },
        ],
      },
      {
        title: "PHASE 3 STRATEGY (FINAL)",
        content: [
          {
            text: "Time to target Swordshrine (center). Not necessary to win but helps a lot.",
          },
          {
            subtitle: "Swordshrine Capture",
            list: [
              "Don't rush—wait until last 10 minutes when enemy has 15-30k points",
              "Teleport around Swordshrine in a circle",
              "Use coordinated rallies:",
              "  • Attack team starts rally",
              "  • Support team follows with rally a few seconds later",
              "Keep doing this until you capture shrine and steal gathering points",
            ],
          },
        ],
      },
      {
        title: "FINAL TIPS",
        content: [
          {
            list: [
              "Attack team's job: reduce enemy troop numbers—makes it easier for others",
              "Focus on taking down enemy's strongest player first",
              "Plan ahead on Discord or voice chat",
              "Watch for scattered points when buildings are lost",
              "Grab Undercellers for bonus points when they appear",
              "Activate all buffs, pet skills, and best gear before battle",
              "Don't waste teleports! Hold Royal Stables to lower cooldown from 10 to 5 min",
              "Save healing speedups. Batch healing doesn't work here",
              "If troops wiped, retreat and come back after 12 min to get them all back",
            ],
          },
        ],
      },
    ],
  },
  "tri-alliance-clash": {
    name: "Tri-Alliance Clash",
    description:
      "Three alliances fight to capture buildings and earn points in a one-hour battle. Strategic building control and Temple capture determine victory.",
    category: "Alliance",
    frequency: "Weekly",
    rewards: "Clash Tokens, Alliance Rewards",
    icon: Swords,
    image: "/tri-alliance-clash-three-way-battle.jpg",
    images: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tri-alliance-clash-map-by-daryl-2048x1494-KSfb4tb8YOghj7VbpgIhWsRkha781f.webp",
        alt: "Tri-Alliance Clash Map by Daryl",
        caption:
          "Complete map showing all three alliance territories (A1-A31, B1-B31, C1-C31), Garrisons (A24, B24, C24), key buildings (A29, B29, C29), Transit Hubs, and Temple of Tides in the center",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Amadeus-01Z2s5Rfm64ZAR3Mph48cA5dq6BfjR.png",
        alt: "Amadeus Hero Stats",
        caption: "Best hero for Gen 1 and Gen 2 squads",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jabel-HHTkp4CxXUTCE3g7t9LAW3rZBPHw3a.png",
        alt: "Jabel Hero Stats",
        caption: "Recommended for Gen 1 squads",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Saul-4TTLz1V1S6j7tJtAOOvN355bxi2tSd.png",
        alt: "Saul Hero Stats",
        caption: "Recommended for Gen 1 squads",
      },
    ],
    quickFacts: [
      { label: "EVENT TYPE", value: "3-Alliance Territory Battle" },
      { label: "DURATION", value: "1 Hour (4 Stages)" },
      { label: "PARTICIPATION", value: "Alliance" },
      { label: "DIFFICULTY", value: "High" },
    ],
    tips: [
      "Only register active members who will actually show up",
      "R4s must be present to assign Captains",
      "Set up Discord voice chat before event",
      "Defend A29/B29/C29 to maintain Temple access",
    ],
    sections: [
      {
        title: "OVERVIEW",
        content: [
          {
            text: "Tri-Alliance Clash is an event where three alliances fight to capture buildings and earn points. The alliance with the most points after a one-hour battle wins. Battle takes place on Saturday during chosen time slot.",
          },
        ],
      },
      {
        title: "BATTLE STAGES",
        content: [
          {
            subtitle: "Stage 1: Preparation (3 minutes)",
            text: "Prepare your team and coordinate strategy.",
          },
          {
            subtitle: "Stage 2: Seize & Conquer (17 minutes)",
            text: "Capture your own buildings and move into enemy territory to take their smaller buildings. Garrisons stay shielded during this stage.",
          },
          {
            subtitle: "Stage 3: Garrison Occupation (20 minutes)",
            text: "At 20-minute mark, Garrisons open and can be captured. Garrisons give +1800 points/min (3x more than Cluster of Ruins).",
          },
          {
            subtitle: "Stage 4: Temple Onslaught (20 minutes)",
            text: "At 40-minute mark, Temple of Tides becomes available. Gives massive first-capture points and solid holding points.",
          },
        ],
      },
      {
        title: "EVENT MAP",
        content: [
          {
            text: "Map is split into three sections. Your alliance starts at Headquarters (A1, B1, or C1).",
          },
          {
            subtitle: "Key Buildings",
            list: [
              "Garrisons (A24, B24, C24): Unlock at 20 min, give +1800 points/min",
              "A29, B29, C29: Connect to Transit Hubs leading to Temple",
              "Temple of Tides: Opens at 40 min, massive first-capture bonus",
            ],
          },
          {
            text: "If enemy captures A29/B29/C29, you lose Temple access. Defend them and recapture quickly if taken.",
          },
        ],
      },
      {
        title: "REGISTRATION & SETUP",
        content: [
          {
            list: [
              "Only register members who will actually show up",
              "R4s must be present to assign Captains (Captains regenerate way more energy)",
              "Set up Discord voice chat before event",
              "Get alliance leaders in voice to manage the fight",
            ],
          },
        ],
      },
      {
        title: "HERO SELECTION",
        content: [
          {
            text: "Choose 3 pairs of heroes (9 heroes total, or 3 squads). Pick your strongest heroes. Avoid Diana (no battle skills) and Blue heroes.",
          },
          {
            subtitle: "Example Strong Squads",
            list: ["Gen 1: Amadeus, Jabel, Saul", "Gen 2: Amadeus, Hilde, Marlin"],
          },
          {
            text: "Build one squad with your absolute strongest trio for toughest opponents.",
          },
        ],
      },
      {
        title: "ENERGY MANAGEMENT",
        content: [
          {
            text: "Energy is everything. You need it to move, conscript, revive, retreat, and attack. It regenerates slowly, but Captains inside buildings get a big boost. Assign Captains early.",
          },
        ],
      },
      {
        title: "STAGE 1: SEIZE & CONQUER",
        content: [
          {
            text: "Quickly occupy all buildings on your side and secure Transit Hubs. Main goal: highest points per minute by defending your buildings while stealing from enemy.",
          },
          {
            subtitle: "Team Setup Example",
            list: [
              "Attack Team: pushes into enemy territory, captures buildings, aims for enemy Garrisons",
              "Defender Team 1 & 2: protect key routes and defend your Garrison",
              "Floaters: backup team, helps where needed, conserves energy for quick reactions",
            ],
          },
        ],
      },
      {
        title: "STAGE 2: GARRISON OCCUPATION",
        content: [
          {
            text: "Once Garrisons open (A24, B24, C24), defending yours is critical (+1800 points/min). Losing it can flip score fast.",
          },
          {
            list: [
              "Attack Team tries to capture enemy Garrison for point advantage",
              "Floaters step in wherever needed—reinforcing defenders or helping attackers",
            ],
          },
        ],
      },
      {
        title: "STAGE 3: TEMPLE ONSLAUGHT",
        content: [
          {
            text: "At 40-minute mark, Temple of Tides opens. First capture gives massive 50k points.",
          },
          {
            subtitle: "Strategy",
            list: [
              "Attack Team rushes Temple",
              "While holding Temple, Floaters cut off enemy reinforcements by taking A29/B29/C29",
              "Cutting these off reduces pressure on your team",
              "Watch out—enemy can do same to you, so defend your cutoff buildings",
            ],
          },
        ],
      },
      {
        title: "GENERAL TIPS",
        content: [
          {
            list: [
              "Save buffs (from pets and city bonuses) for this event",
              "Use conscript button (heart + icon near march bar) to heal troops when no battle happening",
              "If badly wounded but team has enough players in building, retreat to previous building, heal, then come back",
              "Balance teams: make Attack Team slightly stronger, but also put solid players in Defense",
              "Defenders score fewer points—that's the sacrifice. Rotate team roles in future events for fairness",
            ],
          },
        ],
      },
    ],
  },
  "alliance-championship": {
    name: "Alliance Championship",
    description:
      "Weekly alliance PvP event. Register strategically, analyze opponents, and coordinate to win 2 out of 3 lanes for victory.",
    category: "Alliance",
    frequency: "Weekly",
    rewards: "Alliance Tokens, Buffs",
    icon: Users,
    image: "/alliance-championship-team-battle-arena.jpg",
    images: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Amadeus-01Z2s5Rfm64ZAR3Mph48cA5dq6BfjR.png",
        alt: "Amadeus Hero Stats",
        caption: "Best hero for all generations",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jabel-HHTkp4CxXUTCE3g7t9LAW3rZBPHw3a.png",
        alt: "Jabel Hero Stats",
        caption: "Recommended for Gen 1 and Gen 2",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Saul-4TTLz1V1S6j7tJtAOOvN355bxi2tSd.png",
        alt: "Saul Hero Stats",
        caption: "Recommended for Gen 1",
      },
    ],
    quickFacts: [
      { label: "EVENT TYPE", value: "Alliance PvP" },
      { label: "DURATION", value: "Multiple Rounds" },
      { label: "PARTICIPATION", value: "Alliance" },
      { label: "DIFFICULTY", value: "Medium" },
    ],
    tips: [
      "Register all members in same lane initially",
      "Analyze opponent lane setups after first battle",
      "Use counter-strategy: weak vs strong, strong vs medium, medium vs weak",
      "Activate pet skills and buffs before registering",
    ],
    sections: [
      {
        title: "REGISTRATION STRATEGY",
        content: [
          {
            subtitle: "Step 1: Same Lane Registration",
            text: "Ask all alliance members to register in the same lane during registration. There's a theory that when everyone registers in one lane, the game gives you easier opponents. Even if not guaranteed, it's worth trying.",
          },
          {
            subtitle: "Step 2: Rearrange After Matchmaking",
            text: "Once matchmaking is done, leaders should split members into 3 lanes: two strong lanes and one weak lane.",
          },
        ],
      },
      {
        title: "BATTLE STRATEGY",
        content: [
          {
            subtitle: "Analyze and Counter Opponents",
            text: "First battle is mostly luck since you don't know how enemy split lanes. After that, use battle history to see how alliances arranged teams.",
          },
          {
            subtitle: "Counter Strategy",
            list: [
              "Your weakest lane → vs. their strongest lane",
              "Your strongest lane → vs. their second strongest lane",
              "Your second strongest lane → vs. their weakest lane",
            ],
          },
          {
            text: "This gives you a good chance of winning 2 out of 3 lanes. Note: This strategy mostly works against alliances that don't change lanes. At higher tiers, most alliances shuffle lanes regularly—and you should too! Keep your lane setup unpredictable to avoid being countered.",
          },
        ],
      },
      {
        title: "MEMBER PREPARATION",
        content: [
          {
            subtitle: "1. Use Your Strongest Heroes",
            text: "Send your best combat heroes. These battles are like PvP, so power matters.",
          },
          {
            subtitle: "Best Heroes by Generation",
            list: ["Gen 1: Amadeus, Jabel, Saul", "Gen 2: Amadeus, Hilde, Marlin", "Gen 3: Amadeus, Petra, Marlin"],
          },
          {
            subtitle: "2. Use the Best Troop Formation",
            text: "Recommended setup: 50:20:30 (50% Infantry, 20% Cavalry, 30% Archers). This formation works well in most situations.",
          },
          {
            subtitle: "3. Activate Buffs Before Registering",
            list: [
              "Use pet skills and bonus buffs before registering",
              "Once you register, buffs stay active for entire event",
              "Pro Tip: If another big event like Swordland Showdown is happening at same time, use buffs and register for both—you'll get benefit in both events",
            ],
          },
        ],
      },
    ],
  },
  "bear-hunt": {
    name: "Bear Hunt Expert Guide",
    description:
      "Alliance event providing free Forgehammers and resources. Deal maximum damage to Raging Bear within 30 minutes for best rewards.",
    category: "Alliance",
    frequency: "Every 2 Days",
    rewards: "Forgehammers, Resources",
    icon: Target,
    image: "/bear-hunt-raging-bear-alliance-rally.jpg",
    images: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bear%20join-pF1KP5AWwtN5uqhXHfAMBKNwuzmvBU.png",
        alt: "Bear Hunt Rally Joining Guide",
        caption:
          "Event overview showing preparation, rally setup, and hero recommendations. Use Chenko, Yeonwoo, Amane, or Amadeus as first hero when joining rallies for Lethality boost",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/joining%20principles-uIT5uWQuSOHGQl83RMhXwFTRdW6Cd3.png",
        alt: "Rally Joining Principles",
        caption:
          "CORRECT: Send heroes with Lethality skills (Chenko, Amadeus, Yeonwoo) as first hero. NEVER: Send heroes with chance-based skills or wrong hero types as first hero",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Amadeus-01Z2s5Rfm64ZAR3Mph48cA5dq6BfjR.png",
        alt: "Amadeus Hero Stats",
        caption: "Best rally captain for Gen 1 and Gen 2, or use as rally joiner for Lethality boost",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Helga-cgOf0m4Pu7oSOC5BRIdneYaBsyONBj.png",
        alt: "Helga Hero Stats",
        caption: "Alternative rally captain with Lethality widget, good for Gen 1 and Gen 2",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jabel-HHTkp4CxXUTCE3g7t9LAW3rZBPHw3a.png",
        alt: "Jabel Hero Stats",
        caption: "Essential for rally captains, avoid as rally joiner (chance-based skill)",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Saul-4TTLz1V1S6j7tJtAOOvN355bxi2tSd.png",
        alt: "Saul Hero Stats",
        caption: "Good for Gen 1 rallies, better than Quinn at 4 stars",
      },
    ],
    quickFacts: [
      { label: "EVENT TYPE", value: "Alliance PvE Rally" },
      { label: "DURATION", value: "30 Minutes" },
      { label: "MAX REWARDS AT", value: "1.2 Billion Damage" },
      { label: "DIFFICULTY", value: "Medium" },
    ],
    tips: [
      "Always upgrade Pitfall to level 5 before event",
      "Focus on Lethality over Attack for bigger damage boost",
      "Use Battle Simulator to test hero combinations",
      "Send Chenko/Amadeus/Yeonwoo as first hero when joining rallies",
    ],
    sections: [
      {
        title: "TKT PERSONAL BEAR STRATEGY",
        content: [
          {
            subtitle: "Rally Leadership",
            text: "For leading your own rallies, use your best 3 heroes.",
          },
          {
            subtitle: "Joining Rallies",
            list: [
              "If joining someone else's rally, use only Amadeus, Yeonwoo, Chenko, or Amane in the left slot",
              "If joining someone else's rally and none of the heroes listed are available, send your troops without a hero",
            ],
          },
          {
            subtitle: "Bonus Tip: Formation Setup",
            text: "Set up your formations in the hour before bear trap starts for easier joining during the event. Go to Profile > Squad > Formations to prepare in advance.",
          },
          {
            text: "Strategy developed by [TKT]ᴬᴳᴱᴺᵀ Kornik and [TKT]ᴬᴳᴱᴺᵀ Patriot",
          },
        ],
      },
      {
        title: "BASIC DAMAGE MECHANICS",
        content: [
          {
            text: "Understanding these mechanics will help you build stronger rallies and pick the right troops when joining.",
          },
          {
            list: [
              "Lethality really matters: Game has two damage stats (Attack and Lethality). Both multiply in damage formula, but Lethality is usually much lower and harder to boost. Focus on increasing Lethality for bigger damage boost.",
              "Chance-based skills don't stack: Avoid joining rally with heroes like Jabel (her first skill is chance-based). Jabel is still solid for launching your own rally though.",
              "Only 4 additional hero skills counted from rally joiners: If rally already has 4 strong heroes, better to not place hero in first slot when joining.",
              "Expedition skills are additive, Exclusive Skills (from widgets) can be both additive and multiplicative",
              "Use Battle Simulator to test different hero combinations and troop formations",
            ],
          },
        ],
      },
      {
        title: "ALWAYS UPGRADE THE PITFALL",
        content: [
          {
            text: "Bear Hunt can be activated every two days. Between spawns, collect Hunting Arrows by hunting beasts in Intel Missions and use them to upgrade Pitfall up to level 5. Each level gives +5% Attack bonus to everyone.",
          },
          {
            subtitle: "Pitfall Levels",
            list: [
              "Level 1: 200 arrows, +5% Attack",
              "Level 2: 300 arrows, +10% Attack",
              "Level 3: 400 arrows, +15% Attack",
              "Level 4: 500 arrows, +20% Attack",
              "Level 5: 500 arrows, +25% Attack",
            ],
          },
          {
            text: "Takes 1,900 Hunting Arrows to fully upgrade. Each member can earn 24 arrows per day from Intel Missions. If 40 members do it every day, you'll have enough to max out Pitfall every two days.",
          },
        ],
      },
      {
        title: "PREPARING YOUR CITY",
        content: [
          {
            subtitle: "Focus on These Upgrades",
            list: [
              "Research: Prioritize Lethality and troop deployment capacity",
              "Building Upgrades: Boost Command Center (higher deployment capacity)",
              "Hero Gears: Upgrade smartly (goggles/boots)",
              "Governor Charms: Enhance for additional unit Lethality",
            ],
          },
        ],
      },
      {
        title: "BEST HEROES FOR RALLY CAPTAINS",
        content: [
          {
            text: "When you start a rally, you become Rally Captain—your hero skills matter most. Pick the right heroes and use right troop ratio for best results.",
          },
          {
            subtitle: "Best Rally Heroes by Generation",
            list: [
              "Gen-1 (Best): Amadeus, Jabel, Saul",
              "Gen-1 (Medium): Helga, Jabel, Quinn/Saul*",
              "Gen-1 (F2P): Howard, Jabel, Quinn",
              "Gen-2 (Best): Amadeus, Hilde, Marlin",
              "Gen-2 (Medium): Helga, Jabel, Quinn or Marlin",
              "Gen-2 (F2P): Zoe, Jabel, Quinn",
            ],
          },
          {
            text: "*Saul becomes better option than Quinn once upgraded to 4 stars.",
          },
          {
            subtitle: "Recommended Troop Formation",
            text: "10% Infantry, 10% Cavalry, 80% Archers",
          },
        ],
      },
      {
        title: "AMADEUS VS HELGA FOR RALLIES",
        content: [
          {
            text: "Amadeus is best pick for launching rallies in both Gen 1 and Gen 2—his stats are better than Gen 2 heroes. Only issue is there aren't many good joiner heroes early on.",
          },
          {
            text: "If you want decent damage score in event, it's better not to use Amadeus to launch rallies. Saving him for rally joining will help you get more overall damage points since his first expedition skill is a good joiner skill.",
          },
          {
            text: "So if your Helga is strong enough, it's better to let her launch rally instead. She has solid widget that boosts Lethality, which helps cover for what you lose by not using Amadeus.",
          },
        ],
      },
      {
        title: "F2P STRATEGY",
        content: [
          {
            text: "For F2P players looking to do well in Bear Trap during Gen 1 and 2, focus on upgrading Jabel and Quinn. For third hero, go with Howard in Gen 1 and switch to Zoe in Gen 2.",
          },
        ],
      },
      {
        title: "WHY MORE ARCHERS?",
        content: [
          {
            text: "Try using formation with more Archers. Since you're fighting Bear, you want to deal as much damage as possible, and Archers hit hardest. Bear doesn't really kill your troops, so defense isn't that important.",
          },
          {
            text: "But you should still send at least 10% Infantry and 10% Cavalry. That's because your rally includes Infantry and Cavalry heroes, and they give big Attack and Defense boosts to their own troop types.",
          },
          {
            text: "For example, if you're using Gen 1 heroes like Helga, Jabel, and Saul in rally, each gives +200% Attack boost to their own troop type. If you don't send Infantry or Cavalry, you're losing out on total of +400% Attack from Helga and Jabel alone—that's massive boost to skip.",
          },
        ],
      },
      {
        title: "HERO CAPTAINS: KEY TO RALLY DAMAGE",
        content: [
          {
            text: "Each rally can receive up to four additional skills from players who join. Most important heroes to send:",
          },
          {
            subtitle: "Best Rally Joiners",
            list: [
              "Chenko: Provides +25% damage boost if first Expedition skill is Level 5. Must be first hero in formation and among first four to join rally.",
              "Amadeus: If your Helga has better stats (often case early on), use Helga to launch rally and send Amadeus as joiner—his first skill is similar to Chenko's.",
              "Yeonwoo: Gives 25% Lethality boost when she reaches star level 4.",
              "Amane: Boosts Attack instead of Lethality. Since Attack and Lethality multiply together in damage formula, she's still good rally joiner—just not as strong as Chenko, Amadeus, or Yeonwoo.",
            ],
          },
        ],
      },
      {
        title: "RALLY JOINING RULES",
        content: [
          {
            list: [
              "If fewer than four Chenkos already in rally, send Chenko as your first hero",
              "If four Chenkos already present, send blue hero as first hero, or don't send heroes at all, just send troops",
              "If you send blue hero with maxed-out first skill, and there are already 4 Chenkos but their first skills aren't at level 5, your blue hero's skill can override one of Chenkos' skills. That can mess up rally, so be careful.",
            ],
          },
          {
            text: "Check if rally is correctly set up by tapping yellow flag icon on rally page and scrolling down. Once Level 5 skill is locked in, it cannot be changed unless that player is kicked from rally.",
          },
        ],
      },
    ],
  },
  "viking-vengeance": {
    name: "Viking Vengeance Expert Guide",
    description:
      "Defend against 20 waves of Viking troops every two weeks. Maximize points by reinforcing allies and using proper hero selection.",
    category: "PvE",
    frequency: "Every 2 Weeks (Tuesday & Thursday)",
    rewards: "Event Points, Resources",
    icon: Shield,
    image: "/viking-vengeance-defense-waves-battle.jpg",
    quickFacts: [
      { label: "EVENT TYPE", value: "Alliance Defense" },
      { label: "DURATION", value: "20 Waves" },
      { label: "FREQUENCY", value: "Tuesday & Thursday" },
      { label: "DIFFICULTY", value: "Medium" },
    ],
    tips: [
      "Empty your city and reinforce others for maximum points",
      "Use Bear Hunt Joiner heroes when reinforcing",
      "Don't heal during the event to avoid stealing points",
      "Recall marches to HQ before Wave 10 and 20",
    ],
    sections: [
      {
        title: "OVERVIEW",
        content: [
          {
            text: "The Viking Vengeance event in Kingshot takes place every two weeks, on Tuesday and Thursday. Players must defend against 20 waves of AI-controlled Viking troops.",
          },
          {
            subtitle: "Attack Targets",
            list: ["All alliance members", "Online members only", "Your HQ (Plains HQ is preferred)"],
          },
          {
            text: "To successfully defend a wave, you must kill at least 50% of the attacking troops. If you lose two battles, Vikings stop attacking you, but you can still earn points by reinforcing allies. The event can start automatically if a time is set, or manually by R5/R4 leaders.",
          },
        ],
      },
      {
        title: "HOW POINTS WORK",
        content: [
          {
            text: "Your personal points depend on how many Viking troops die in your city. Killing 100% of enemy troops gives you 100% of possible points.",
          },
          {
            text: "Reinforcing others does not steal their points—instead, it creates extra reinforcement points for you. This allows both you and your allies to maximize your event points.",
          },
        ],
      },
      {
        title: "WAVE STRUCTURE",
        content: [
          {
            subtitle: "Wave Targets",
            list: [
              "Wave 1-6: All Members",
              "Wave 7: Online Members",
              "Wave 8-9: All Members",
              "Wave 10: HQ",
              "Wave 11-13: All Members",
              "Wave 14: Online Members",
              "Wave 15-16: All Members",
              "Wave 17: Online Members",
              "Wave 18-19: All Members",
              "Wave 20: HQ",
            ],
          },
        ],
      },
      {
        title: "WINNING STRATEGY",
        content: [
          {
            subtitle: "1. Be Online and Active",
            text: "Make sure you're online during the event. Try to pick a time when most of your alliance can be active. Some waves only target players who are online, so it's important to have people around.",
          },
          {
            subtitle: "2. Empty Your City and Reinforce Others",
            text: "The trick to scoring high is to reinforce others and keep your city empty. If you have more troops than your marches can carry, send out only Infantry and Cavalry, since they do most of the killing. You can leave Archers at home if they don't fit in your marches.",
          },
          {
            text: "Archers don't get many kills during the event, except maybe in a few higher waves. So they won't steal reinforcement points from your reinforcers. If you leave troops at home, they'll fight the Vikings and steal kills from the players reinforcing you. That lowers their points. So, clear out your Infantry and Cavalry if possible to help your teammates earn more.",
          },
          {
            subtitle: "3. Best Heroes to Keep at Home",
            text: "Keep your top 3 heroes at home.",
          },
          {
            list: [
              "For F2P players: Leave Jabel, Howard, and Quinn at home",
              "For P2W players: Leave Amadeus/Helga, Jabel, and Saul at home",
            ],
          },
          {
            subtitle: "4. Waves 10 and 20 – HQ Only",
            text: "After Wave 9 and Wave 19 are done, recall one strong march with your best heroes and send it to the HQ, because Wave 10 and 20 only attack HQ. Once those waves are over, recall that march from HQ and send it back to reinforce the player you were helping earlier. Just make sure Wave 9 and 19 are completely done before you recall—if you recall too early, you'll lose out on reinforcement points.",
          },
          {
            subtitle: "5. Don't Heal During the Event",
            text: "Avoid healing your defeated troops during the event. If you do, they'll return to your base and might start stealing reinforcement points from the people helping you.",
          },
          {
            subtitle: "6. Reinforce Online Members First",
            text: "It's better to reinforce online players since some waves only target them. Also, offline players usually have troops sitting in their city, which can steal your kills and reduce the points you earn.",
          },
          {
            subtitle: "7. Use Bear Hunt Joiner Heroes when Reinforcing",
            text: "Viking troops have low health and usually die fast, especially against Infantry. Since the goal of this event is to get the most kills for more points, it's better to use Bear Hunt Joiner heroes when you're reinforcing others.",
          },
          {
            text: "So when you're sending reinforcements, put heroes like Chenko, Amadeus, Yeonwoo, or Amane in the first slot of your Reinforcement Rally to get more points and better results. Avoid using defensive heroes like Howard, Gordon, Fahd, or others—they're not great for this event.",
          },
        ],
      },
      {
        title: "QUICK SUMMARY",
        content: [
          {
            list: [
              "Clear your base – Send out all your troops, especially Infantry and Cavalry. Don't leave them at home or they'll steal points from allies",
              "Reinforce others – That's how you earn the most points in this event",
              "Keep only 3 strong defense heroes at home – Choose your best based on your lineup",
              "After wave 9 and 19 – Recall one strong march and send it to defend HQ for wave 10 and 20, then send it back to reinforce others once HQ is defended",
            ],
          },
        ],
      },
    ],
  },
  "kingdom-of-power": {
    name: "Kingdom of Power (KvK)",
    description: "Massive cross-kingdom battle event. Form mega alliances and fight for kingdom supremacy.",
    category: "War",
    frequency: "Seasonal",
    rewards: "Rare Items, Honor, Kingdom Titles",
    icon: Crown,
    image: "/kingdom-battle-war-epic-castle-siege.jpg",
    quickFacts: [
      { label: "EVENT TYPE", value: "Cross-Kingdom War" },
      { label: "DURATION", value: "Multiple Days" },
      { label: "PARTICIPATION", value: "Kingdom-Wide" },
      { label: "DIFFICULTY", value: "Very High" },
    ],
    tips: [
      "Form Mega Alliance with strongest players before event",
      "Set up kingdom-wide Discord for coordination",
      "Prepare healing speedups and resources in advance",
      "Coordinate with current King for strategy",
    ],
    sections: [
      {
        title: "OVERVIEW",
        content: [
          {
            text: "Kingdom of Power (KvK) is the most intense event in Kingshot. Kingdoms are matched against each other in massive battles that determine supremacy. Success requires kingdom-wide coordination and strategic planning.",
          },
        ],
      },
      {
        title: "PREPARATION",
        content: [
          {
            subtitle: "Before the Event",
            list: [
              "Form Mega Alliances during matchmaking phase",
              "Set up kingdom-wide communication channels",
              "Stock up on healing speedups and resources",
              "Coordinate with top alliances for unified strategy",
            ],
          },
        ],
      },
      {
        title: "STRATEGY",
        content: [
          {
            subtitle: "Key Tactics",
            list: [
              "Coordinate castle attacks with multiple alliances",
              "Assign roles: rally leaders, turret teams, defenders",
              "Use voice chat for real-time coordination",
              "Focus on holding key strategic points",
            ],
          },
        ],
      },
    ],
  },
  "kings-castle-battle": {
    name: "King's Castle Battle",
    description:
      "Biweekly 6-hour battle to control the castle. Hold for 3 hours straight or longest total time to appoint the Kingdom King.",
    category: "War",
    frequency: "Biweekly",
    rewards: "King Title, Charm Materials",
    icon: Castle,
    image: "/kings-castle-battle-siege-fortress-medieval.jpg",
    quickFacts: [
      { label: "EVENT TYPE", value: "Castle Siege" },
      { label: "DURATION", value: "6 Hours" },
      { label: "WIN CONDITION", value: "3 Hours Hold or Longest Time" },
      { label: "DIFFICULTY", value: "Very High" },
    ],
    tips: [
      "Set up Discord voice chat for coordination",
      "Check hero widgets before sending rallies",
      "Save healing speedups days before event",
      "Use batch healing to save speedups",
    ],
    sections: [
      {
        title: "OVERVIEW",
        content: [
          {
            text: "King's Castle Battle happens every 2 weeks and lasts 6 hours. To win, hold the castle for 3 hours straight or have the longest total hold time. Winner appoints the Kingdom King.",
          },
        ],
      },
    ],
  },
}

export const events = [
  {
    name: "Batch Healing Guide",
    slug: "batch-healing",
    description: "Essential healing strategy for all battle events. Save speedups by healing in small batches.",
    category: "Strategy",
    frequency: "Always Active",
    rewards: "Speedup Savings",
    icon: Heart,
    image: "/batch-healing-medical-troops-recovery.jpg",
  },
  {
    name: "Swordland Showdown",
    slug: "swordland-showdown",
    description:
      "Top 20 alliances battle for Relic Points. Capture buildings, control Swordshrine, and coordinate teams.",
    category: "Alliance",
    frequency: "Regular",
    rewards: "Swordland Tokens, Shop Items",
    icon: Target,
    image: "/swordland-showdown-tactical-map-buildings.jpg",
  },
  {
    name: "Tri-Alliance Clash",
    slug: "tri-alliance-clash",
    description: "Three alliances fight for buildings and points. Control Garrisons and capture Temple for victory.",
    category: "Alliance",
    frequency: "Weekly",
    rewards: "Clash Tokens, Alliance Rewards",
    icon: Swords,
    image: "/tri-alliance-clash-three-way-battle.jpg",
  },
  {
    name: "Alliance Championship",
    slug: "alliance-championship",
    description: "Weekly alliance PvP event. Register in same lane, analyze opponents, and win 2 out of 3 lanes.",
    category: "Alliance",
    frequency: "Weekly",
    rewards: "Alliance Tokens, Buffs",
    icon: Users,
    image: "/alliance-championship-team-battle-arena.jpg",
  },
  {
    name: "Bear Hunt Expert Guide",
    slug: "bear-hunt",
    description: "Deal maximum damage to Raging Bear. Focus on Lethality, upgrade Pitfall, and coordinate rallies.",
    category: "Alliance",
    frequency: "Every 2 Days",
    rewards: "Forgehammers, Resources",
    icon: Target,
    image: "/bear-hunt-raging-bear-alliance-rally.jpg",
  },
  {
    name: "Viking Vengeance",
    slug: "viking-vengeance",
    description: "Defend against 20 waves of Vikings. Reinforce allies and use proper heroes for maximum points.",
    category: "PvE",
    frequency: "Every 2 Weeks",
    rewards: "Event Points, Resources",
    icon: Shield,
    image: "/viking-vengeance-defense-waves-battle.jpg",
  },
  {
    name: "Kingdom of Power (KvK)",
    slug: "kingdom-of-power",
    description: "Massive cross-kingdom battle event. Form mega alliances and fight for kingdom supremacy.",
    category: "War",
    frequency: "Seasonal",
    rewards: "Rare Items, Honor, Kingdom Titles",
    icon: Crown,
    image: "/kingdom-battle-war-epic-castle-siege.jpg",
  },
  {
    name: "King's Castle Battle",
    slug: "kings-castle-battle",
    description: "Biweekly 6-hour battle. Hold castle for 3 hours or longest time. Appoint the Kingdom King.",
    category: "War",
    frequency: "Biweekly",
    rewards: "King Title, Charm Materials",
    icon: Castle,
    image: "/kings-castle-battle-siege-fortress-medieval.jpg",
  },
]
