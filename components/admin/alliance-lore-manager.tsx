"use client"

import { useState, useEffect } from "react"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Pencil, Trash2, ArrowUp, ArrowDown } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function AllianceLoreManager() {
  const [lore, setLore] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const supabase = getSupabaseBrowserClient()

  useEffect(() => {
    fetchLore()
  }, [])

  const fetchLore = async () => {
    try {
      const { data, error } = await supabase.from("alliance_lore").select("*").order("order_index", { ascending: true })

      if (error) throw error
      setLore(data || [])
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const deleteLore = async (id: string) => {
    if (!confirm("Are you sure you want to delete this lore entry?")) return

    try {
      const { error } = await supabase.from("alliance_lore").delete().eq("id", id)
      if (error) throw error
      fetchLore()
    } catch (err: any) {
      setError(err.message)
    }
  }

  if (loading) {
    return <div className="text-center py-8">Loading alliance lore...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white">Alliance Lore Management</h2>
          <p className="text-slate-400">Manage the story and history of TKT</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Lore Entry
        </Button>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid gap-4">
        {lore.map((entry, index) => (
          <Card key={entry.id} className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-white">{entry.title}</CardTitle>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" disabled={index === 0}>
                    <ArrowUp className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" disabled={index === lore.length - 1}>
                    <ArrowDown className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => deleteLore(entry.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-400 whitespace-pre-wrap">{entry.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
