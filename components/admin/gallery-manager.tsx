"use client"

import { useState, useEffect } from "react"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, Pencil, Trash2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Image from "next/image"
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

export function GalleryManager() {
  const [items, setItems] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<any>(null)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image_url: "",
    category: "",
  })
  const supabase = getSupabaseBrowserClient()

  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    try {
      const { data, error } = await supabase.from("gallery").select("*").order("created_at", { ascending: false })

      if (error) throw error
      setItems(data || [])
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleAdd = () => {
    setEditingItem(null)
    setFormData({
      title: "",
      description: "",
      image_url: "",
      category: "",
    })
    setIsDialogOpen(true)
  }

  const handleEdit = (item: any) => {
    setEditingItem(item)
    setFormData({
      title: item.title || "",
      description: item.description || "",
      image_url: item.image_url || "",
      category: item.category || "",
    })
    setIsDialogOpen(true)
  }

  const handleSave = async () => {
    try {
      if (editingItem) {
        const { error } = await supabase.from("gallery").update(formData).eq("id", editingItem.id)
        if (error) throw error
      } else {
        const { error } = await supabase.from("gallery").insert([formData])
        if (error) throw error
      }
      setIsDialogOpen(false)
      fetchItems()
    } catch (err: any) {
      setError(err.message)
    }
  }

  const deleteItem = async (id: string) => {
    if (!confirm("Are you sure you want to delete this gallery item?")) return

    try {
      const { error } = await supabase.from("gallery").delete().eq("id", id)
      if (error) throw error
      fetchItems()
    } catch (err: any) {
      setError(err.message)
    }
  }

  if (loading) {
    return <div className="text-center py-8">Loading gallery...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white">Gallery Management</h2>
          <p className="text-slate-400">Manage screenshots and images</p>
        </div>
        <Button onClick={handleAdd}>
          <Plus className="mr-2 h-4 w-4" />
          Add Image
        </Button>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Card key={item.id} className="bg-slate-800/50 border-slate-700 overflow-hidden">
            <div className="relative aspect-video">
              <Image src={item.image_url || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
            </div>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.description}</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(item)}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => deleteItem(item.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-slate-900 border-slate-700 text-white max-w-2xl">
          <DialogHeader>
            <DialogTitle>{editingItem ? "Edit Gallery Item" : "Add New Gallery Item"}</DialogTitle>
            <DialogDescription>
              {editingItem ? "Update the gallery item details." : "Add a new image to the gallery."}
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
              <Label htmlFor="image_url">Image URL</Label>
              <Input
                id="image_url"
                value={formData.image_url}
                onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                className="bg-slate-800 border-slate-700"
                placeholder="/gallery-image.jpg"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="category">Category</Label>
              <Input
                id="category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="bg-slate-800 border-slate-700"
                placeholder="e.g., Rallies, Wars, Captures"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave}>{editingItem ? "Update" : "Create"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
