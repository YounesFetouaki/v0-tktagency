"use client"

import { useState, useEffect } from "react"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Pencil, Trash2 } from "lucide-react"
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

export function HeroesManager() {
  const [heroes, setHeroes] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingHero, setEditingHero] = useState<any>(null)
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    description: "",
    strengths: "",
    best_for: "",
    image_url: "",
  })
  const supabase = getSupabaseBrowserClient()

  useEffect(() => {
    fetchHeroes()
  }, [])

  const fetchHeroes = async () => {
    try {
      const { data, error } = await supabase.from("heroes").select("*").order("created_at", { ascending: false })

      if (error) throw error
      setHeroes(data || [])
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleAdd = () => {
    setEditingHero(null)
    setFormData({
      name: "",
      role: "",
      description: "",
      strengths: "",
      best_for: "",
      image_url: "",
    })
    setIsDialogOpen(true)
  }

  const handleEdit = (hero: any) => {
    setEditingHero(hero)
    setFormData({
      name: hero.name || "",
      role: hero.role || "",
      description: hero.description || "",
      strengths: hero.strengths || "",
      best_for: hero.best_for || "",
      image_url: hero.image_url || "",
    })
    setIsDialogOpen(true)
  }

  const handleSave = async () => {
    try {
      if (editingHero) {
        const { error } = await supabase.from("heroes").update(formData).eq("id", editingHero.id)
        if (error) throw error
      } else {
        const { error } = await supabase.from("heroes").insert([formData])
        if (error) throw error
      }
      setIsDialogOpen(false)
      fetchHeroes()
    } catch (err: any) {
      setError(err.message)
    }
  }

  const deleteHero = async (id: string) => {
    if (!confirm("Are you sure you want to delete this hero?")) return

    try {
      const { error } = await supabase.from("heroes").delete().eq("id", id)
      if (error) throw error
      fetchHeroes()
    } catch (err: any) {
      setError(err.message)
    }
  }

  if (loading) {
    return <div className="text-center py-8">Loading heroes...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white">Heroes Management</h2>
          <p className="text-slate-400">Manage hero information and stats</p>
        </div>
        <Button onClick={handleAdd}>
          <Plus className="mr-2 h-4 w-4" />
          Add Hero
        </Button>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {heroes.map((hero) => (
          <Card key={hero.id} className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-white">{hero.name}</CardTitle>
                  <CardDescription>{hero.role}</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(hero)}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => deleteHero(hero.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-400">{hero.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-slate-900 border-slate-700 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingHero ? "Edit Hero" : "Add New Hero"}</DialogTitle>
            <DialogDescription>
              {editingHero ? "Update the hero information below." : "Fill in the details to create a new hero."}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Hero Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-slate-800 border-slate-700"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="role">Role</Label>
              <Input
                id="role"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="bg-slate-800 border-slate-700"
                placeholder="e.g., Tank, DPS, Support"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="bg-slate-800 border-slate-700"
                rows={3}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="strengths">Strengths</Label>
              <Textarea
                id="strengths"
                value={formData.strengths}
                onChange={(e) => setFormData({ ...formData, strengths: e.target.value })}
                className="bg-slate-800 border-slate-700"
                rows={3}
                placeholder="List hero strengths..."
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="best_for">Best For</Label>
              <Input
                id="best_for"
                value={formData.best_for}
                onChange={(e) => setFormData({ ...formData, best_for: e.target.value })}
                className="bg-slate-800 border-slate-700"
                placeholder="e.g., Bear Hunt, PvP, Defense"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="image_url">Image URL (Optional)</Label>
              <Input
                id="image_url"
                value={formData.image_url}
                onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                className="bg-slate-800 border-slate-700"
                placeholder="/hero-image.jpg"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave}>{editingHero ? "Update" : "Create"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
