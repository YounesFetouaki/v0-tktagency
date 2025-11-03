"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  LogOut,
  Users,
  Calendar,
  Trophy,
  ImageIcon,
  MessageSquare,
  MessageCircle,
  Scroll,
  Sparkles,
} from "lucide-react"
import { EventsManager } from "./events-manager"
import { HeroesManager } from "./heroes-manager"
import { MembersManager } from "./members-manager"
import { AnnouncementsManager } from "./announcements-manager"
import { BattleLogsManager } from "./battle-logs-manager"
import { GalleryManager } from "./gallery-manager"
import { HighlightsManager } from "./highlights-manager"
import { LoreManager } from "./lore-manager"
import { PostsManager } from "./posts-manager"

interface AdminDashboardProps {
  user: any
}

export function AdminDashboard({ user }: AdminDashboardProps) {
  const router = useRouter()
  const supabase = getSupabaseBrowserClient()
  const [loading, setLoading] = useState(false)

  const handleLogout = async () => {
    setLoading(true)
    await supabase.auth.signOut()
    router.push("/admin/login")
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">TKT Admin Dashboard</h1>
            <p className="text-sm text-slate-400">Logged in as {user.email}</p>
          </div>
          <Button onClick={handleLogout} disabled={loading} variant="outline">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="events" className="space-y-6">
          <TabsList className="grid grid-cols-4 lg:grid-cols-9 gap-2 h-auto p-2 bg-slate-800/50">
            <TabsTrigger value="events" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="hidden sm:inline">Events</span>
            </TabsTrigger>
            <TabsTrigger value="heroes" className="flex items-center gap-2">
              <Trophy className="h-4 w-4" />
              <span className="hidden sm:inline">Heroes</span>
            </TabsTrigger>
            <TabsTrigger value="members" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Members</span>
            </TabsTrigger>
            <TabsTrigger value="announcements" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              <span className="hidden sm:inline">Announcements</span>
            </TabsTrigger>
            <TabsTrigger value="battle-logs" className="flex items-center gap-2">
              <Scroll className="h-4 w-4" />
              <span className="hidden sm:inline">Battle Logs</span>
            </TabsTrigger>
            <TabsTrigger value="gallery" className="flex items-center gap-2">
              <ImageIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Gallery</span>
            </TabsTrigger>
            <TabsTrigger value="highlights" className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              <span className="hidden sm:inline">Highlights</span>
            </TabsTrigger>
            <TabsTrigger value="lore" className="flex items-center gap-2">
              <Scroll className="h-4 w-4" />
              <span className="hidden sm:inline">Lore</span>
            </TabsTrigger>
            <TabsTrigger value="posts" className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Posts</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="events">
            <EventsManager />
          </TabsContent>

          <TabsContent value="heroes">
            <HeroesManager />
          </TabsContent>

          <TabsContent value="members">
            <MembersManager />
          </TabsContent>

          <TabsContent value="announcements">
            <AnnouncementsManager />
          </TabsContent>

          <TabsContent value="battle-logs">
            <BattleLogsManager />
          </TabsContent>

          <TabsContent value="gallery">
            <GalleryManager />
          </TabsContent>

          <TabsContent value="highlights">
            <HighlightsManager />
          </TabsContent>

          <TabsContent value="lore">
            <LoreManager />
          </TabsContent>

          <TabsContent value="posts">
            <PostsManager />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
