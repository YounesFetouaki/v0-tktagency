import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { EventsTable } from "@/components/events-table"
import { HeroesSection } from "@/components/heroes-section"
import { StrategyNotes } from "@/components/strategy-notes"
import { TroopGuide } from "@/components/troop-guide"
import { NAPRules } from "@/components/nap-rules"
import { CommunityHighlights } from "@/components/community-highlights"
import { MemberWall } from "@/components/member-wall"
import { Announcements } from "@/components/announcements"
import { EventCountdown } from "@/components/event-countdown"
import { BattleLog } from "@/components/battle-log"
import { Leaderboard } from "@/components/leaderboard"
import { AllianceLore } from "@/components/alliance-lore"
import { Gallery } from "@/components/gallery"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <EventCountdown />
        <EventsTable />
        <HeroesSection />
        <MemberWall />
        <Announcements />
        <StrategyNotes />
        <TroopGuide />
        <Leaderboard />
        <BattleLog />
        <NAPRules />
        <AllianceLore />
        <Gallery />
        <CommunityHighlights />
      </main>
    </div>
  )
}
