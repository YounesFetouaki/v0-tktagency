"use client"

import { useState, useEffect } from "react"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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

export function BattleLogsManager() {
  const [logs, setLogs] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingLog, setEditingLog] = useState<any>(null)
  const [formData, setFormData] = useState({
    event_name: "",
    date: "",
    rally_leader: "",
    participants: "",
    damage_dealt: "",
    result: "",
    notes: "",
  })
  const supabase = getSupabaseBrowserClient()

  useEffect(() => {
    fetchLogs()
  }, [])

  const fetchLogs = async () => {
    try {
      const { data, error } = await supabase.from("battle_logs").select("*").order("date", { ascending: false })

      if (error) throw error
      setLogs(data || [])
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleAdd = () => {
    setEditingLog(null)
    setFormData({
      event_name: "",
      date: new Date().toISOString().split("T")[0],
      rally_leader: "",
      participants: "",
      damage_dealt: "",
      result: "",
      notes: "",
    })
    setIsDialogOpen(true)
  }

  const handleEdit = (log: any) => {
    setEditingLog(log)
    setFormData({
      event_name: log.event_name || "",
      date: log.date ? new Date(log.date).toISOString().split("T")[0] : "",
      rally_leader: log.rally_leader || "",
      participants: Array.isArray(log.participants) ? log.participants.join(", ") : "",
      damage_dealt: log.damage_dealt?.toString() || "",
      result: log.result || "",
      notes: log.notes || "",
    })
    setIsDialogOpen(true)
  }

  const handleSave = async () => {
    try {
      const dataToSave = {
        event_name: formData.event_name,
        date: formData.date,
        rally_leader: formData.rally_leader,
        participants: formData.participants
          .split(",")
          .map((p) => p.trim())
          .filter(Boolean),
        damage_dealt: Number.parseInt(formData.damage_dealt) || 0,
        result: formData.result,
        notes: formData.notes,
      }

      if (editingLog) {
        const { error } = await supabase.from("battle_logs").update(dataToSave).eq("id", editingLog.id)
        if (error) throw error
      } else {
        const { error } = await supabase.from("battle_logs").insert([dataToSave])
        if (error) throw error
      }
      setIsDialogOpen(false)
      fetchLogs()
    } catch (err: any) {
      setError(err.message)
    }
  }

  const deleteLog = async (id: string) => {
    if (!confirm("Are you sure you want to delete this battle log?")) return

    try {
      const { error } = await supabase.from("battle_logs").delete().eq("id", id)
      if (error) throw error
      fetchLogs()
    } catch (err: any) {
      setError(err.message)
    }
  }

  if (loading) {
    return <div className="text-center py-8">Loading battle logs...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white">Battle Logs Management</h2>
          <p className="text-slate-400">Track rally results and battle records</p>
        </div>
        <Button onClick={handleAdd}>
          <Plus className="mr-2 h-4 w-4" />
          Add Battle Log
        </Button>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid gap-4">
        {logs.map((log) => (
          <Card key={log.id} className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-white">{log.event_name}</CardTitle>
                  <p className="text-sm text-slate-400 mt-1">
                    {new Date(log.date).toLocaleDateString()} • Led by {log.rally_leader}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(log)}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => deleteLog(log.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <p className="text-slate-400">
                  Damage: <span className="text-white">{log.damage_dealt?.toLocaleString()}</span>
                </p>
                <p className="text-slate-400">
                  Result: <span className="text-white">{log.result}</span>
                </p>
                {log.notes && <p className="text-slate-400">Notes: {log.notes}</p>}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-slate-900 border-slate-700 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingLog ? "Edit Battle Log" : "Add New Battle Log"}</DialogTitle>
            <DialogDescription>
              {editingLog ? "Update the battle log details." : "Record a new battle or rally result."}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="event_name">Event Name</Label>
              <Input
                id="event_name"
                value={formData.event_name}
                onChange={(e) => setFormData({ ...formData, event_name: e.target.value })}
                className="bg-slate-800 border-slate-700"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="bg-slate-800 border-slate-700"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="rally_leader">Rally Leader</Label>
              <Input
                id="rally_leader"
                value={formData.rally_leader}
                onChange={(e) => setFormData({ ...formData, rally_leader: e.target.value })}
                className="bg-slate-800 border-slate-700"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="participants">Participants (comma-separated)</Label>
              <Input
                id="participants"
                value={formData.participants}
                onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
                className="bg-slate-800 border-slate-700"
                placeholder="Player1, Player2, Player3"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="damage_dealt">Damage Dealt</Label>
              <Input
                id="damage_dealt"
                type="number"
                value={formData.damage_dealt}
                onChange={(e) => setFormData({ ...formData, damage_dealt: e.target.value })}
                className="bg-slate-800 border-slate-700"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="result">Result</Label>
              <Input
                id="result"
                value={formData.result}
                onChange={(e) => setFormData({ ...formData, result: e.target.value })}
                className="bg-slate-800 border-slate-700"
                placeholder="Victory, Defeat, etc."
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="notes">Notes (Optional)</Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="bg-slate-800 border-slate-700"
                rows={3}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave}>{editingLog ? "Update" : "Create"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
