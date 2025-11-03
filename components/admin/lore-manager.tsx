"use client"

import { useState, useEffect } from "react"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Pencil, Trash2, ArrowUp, ArrowDown } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function LoreManager() {
  const [loreItems, setLoreItems] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingLore, setEditingLore] = useState<any>(null)
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    order_index: 0,
  })
  const supabase = getSupabaseBrowserClient()

  useEffect(() => {
    fetchLore()
  }, [])

  const fetchLore = async () => {
    try {
      const { data, error } = await supabase.from("alliance_lore").select("*").order("order_index", { ascending: true })

      if (error) throw error
      setLoreItems(data || [])
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleAdd = () => {
    setEditingLore(null)
    setFormData({
      title: "",
      content: "",
      order_index: loreItems.length,
    })
    setIsDialogOpen(true)
  }

  const handleEdit = (lore: any) => {
    setEditingLore(lore)
    setFormData({
      title: lore.title || "",
      content: lore.content || "",
      order_index: lore.order_index || 0,
    })
    setIsDialogOpen(true)
  }

  const handleSave = async () => {
    try {
      if (editingLore) {
        const { error } = await supabase.from("alliance_lore").update(formData).eq("id", editingLore.id)
        if (error) throw error
      } else {
        const { error } = await supabase.from("alliance_lore").insert([formData])
        if (error) throw error
      }
      setIsDialogOpen(false)
      fetchLore()
    } catch (err: any) {
      setError(err.message)
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

  const moveItem = async (id: string, direction: "up" | "down") => {
    const currentIndex = loreItems.findIndex((item) => item.id === id)
    if (currentIndex === -1) return
    if (direction === "up" && currentIndex === 0) return
    if (direction === "down" && currentIndex === loreItems.length - 1) return

    const newIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1
    const item1 = loreItems[currentIndex]
    const item2 = loreItems[newIndex]

    try {
      await supabase.from("alliance_lore").update({ order_index: newIndex }).eq("id", item1.id)
      await supabase.from("alliance_lore").update({ order_index: currentIndex }).eq("id", item2.id)
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
          <p className="text-slate-400">Manage the history and story of TKT</p>
        </div>
        <Button onClick={handleAdd}>
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
        {loreItems.map((lore, index) => (
          <Card key={lore.id} className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-white">{lore.title}</CardTitle>
                  <p className="text-sm text-slate-400 mt-2 whitespace-pre-wrap">{lore.content}</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => moveItem(lore.id, "up")} disabled={index === 0}>
                    <ArrowUp className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => moveItem(lore.id, "down")}
                    disabled={index === loreItems.length - 1}
                  >
                    <ArrowDown className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleEdit(lore)}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => deleteLore(lore.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-slate-900 border-slate-700 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingLore ? "Edit Lore Entry" : "Add New Lore Entry"}</DialogTitle>
            <DialogDescription>
              {editingLore ? "Update the lore entry details." : "Add a new chapter to the alliance history."}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="bg-slate-800 border-slate-700"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="bg-slate-800 border-slate-700"
                rows={10}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave}>{editingLore ? "Update" : "Create"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
