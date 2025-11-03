"use client"

import { useState, useEffect } from "react"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function MembersManager() {
  const [members, setMembers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingMember, setEditingMember] = useState<any>(null)
  const [formData, setFormData] = useState({
    nickname: "",
    player_id: "",
    role: "Member",
    power: 0,
    event_points: 0,
    rally_contributions: 0,
    status: "offline",
  })
  const supabase = getSupabaseBrowserClient()

  useEffect(() => {
    fetchMembers()
  }, [])

  const fetchMembers = async () => {
    try {
      const { data, error } = await supabase.from("members").select("*").order("power", { ascending: false })

      if (error) throw error
      setMembers(data || [])
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleAdd = () => {
    setEditingMember(null)
    setFormData({
      nickname: "",
      player_id: "",
      role: "Member",
      power: 0,
      event_points: 0,
      rally_contributions: 0,
      status: "offline",
    })
    setIsDialogOpen(true)
  }

  const handleEdit = (member: any) => {
    setEditingMember(member)
    setFormData({
      nickname: member.nickname || "",
      player_id: member.player_id || "",
      role: member.role || "Member",
      power: member.power || 0,
      event_points: member.event_points || 0,
      rally_contributions: member.rally_contributions || 0,
      status: member.status || "offline",
    })
    setIsDialogOpen(true)
  }

  const handleSave = async () => {
    try {
      if (editingMember) {
        const { error } = await supabase.from("members").update(formData).eq("id", editingMember.id)
        if (error) throw error
      } else {
        const { error } = await supabase.from("members").insert([formData])
        if (error) throw error
      }
      setIsDialogOpen(false)
      fetchMembers()
    } catch (err: any) {
      setError(err.message)
    }
  }

  const deleteMember = async (id: string) => {
    if (!confirm("Are you sure you want to delete this member?")) return

    try {
      const { error } = await supabase.from("members").delete().eq("id", id)
      if (error) throw error
      fetchMembers()
    } catch (err: any) {
      setError(err.message)
    }
  }

  if (loading) {
    return <div className="text-center py-8">Loading members...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white">Members Management</h2>
          <p className="text-slate-400">Manage alliance members and stats</p>
        </div>
        <Button onClick={handleAdd}>
          <Plus className="mr-2 h-4 w-4" />
          Add Member
        </Button>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Card className="bg-slate-800/50 border-slate-700">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left p-4 text-white">Nickname</th>
                <th className="text-left p-4 text-white">Role</th>
                <th className="text-left p-4 text-white">Power</th>
                <th className="text-left p-4 text-white">Event Points</th>
                <th className="text-left p-4 text-white">Status</th>
                <th className="text-right p-4 text-white">Actions</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id} className="border-b border-slate-700/50">
                  <td className="p-4 text-white">{member.nickname}</td>
                  <td className="p-4 text-slate-400">{member.role}</td>
                  <td className="p-4 text-slate-400">{member.power.toLocaleString()}</td>
                  <td className="p-4 text-slate-400">{member.event_points.toLocaleString()}</td>
                  <td className="p-4">
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                        member.status === "online" ? "bg-green-500/20 text-green-400" : "bg-slate-500/20 text-slate-400"
                      }`}
                    >
                      {member.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex gap-2 justify-end">
                      <Button size="sm" variant="outline" onClick={() => handleEdit(member)}>
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => deleteMember(member.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-slate-900 border-slate-700 text-white max-w-2xl">
          <DialogHeader>
            <DialogTitle>{editingMember ? "Edit Member" : "Add New Member"}</DialogTitle>
            <DialogDescription>
              {editingMember ? "Update the member information below." : "Fill in the details to add a new member."}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="nickname">Nickname</Label>
              <Input
                id="nickname"
                value={formData.nickname}
                onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
                className="bg-slate-800 border-slate-700"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="player_id">Player ID</Label>
              <Input
                id="player_id"
                value={formData.player_id}
                onChange={(e) => setFormData({ ...formData, player_id: e.target.value })}
                className="bg-slate-800 border-slate-700"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="role">Role</Label>
              <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value })}>
                <SelectTrigger className="bg-slate-800 border-slate-700">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700">
                  <SelectItem value="Leader">Leader (R5)</SelectItem>
                  <SelectItem value="Officer">Officer (R4)</SelectItem>
                  <SelectItem value="Elite">Elite (R3)</SelectItem>
                  <SelectItem value="Member">Member (R2)</SelectItem>
                  <SelectItem value="Recruit">Recruit (R1)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="power">Power</Label>
              <Input
                id="power"
                type="number"
                value={formData.power}
                onChange={(e) => setFormData({ ...formData, power: Number.parseInt(e.target.value) || 0 })}
                className="bg-slate-800 border-slate-700"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="event_points">Event Points</Label>
              <Input
                id="event_points"
                type="number"
                value={formData.event_points}
                onChange={(e) => setFormData({ ...formData, event_points: Number.parseInt(e.target.value) || 0 })}
                className="bg-slate-800 border-slate-700"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="rally_contributions">Rally Contributions</Label>
              <Input
                id="rally_contributions"
                type="number"
                value={formData.rally_contributions}
                onChange={(e) =>
                  setFormData({ ...formData, rally_contributions: Number.parseInt(e.target.value) || 0 })
                }
                className="bg-slate-800 border-slate-700"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="status">Status</Label>
              <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value })}>
                <SelectTrigger className="bg-slate-800 border-slate-700">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700">
                  <SelectItem value="online">Online</SelectItem>
                  <SelectItem value="offline">Offline</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave}>{editingMember ? "Update" : "Create"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
