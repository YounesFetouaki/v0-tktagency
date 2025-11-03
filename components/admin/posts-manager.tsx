"use client"

import { useState, useEffect } from "react"
import { createBrowserClient } from "@supabase/ssr"
import { Trash2, Check, X, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface CommunityPost {
  id: string
  author_name: string
  author_id: string | null
  category: string
  title: string | null
  content: string
  is_approved: boolean
  likes: number
  created_at: string
}

export function PostsManager() {
  const [posts, setPosts] = useState<CommunityPost[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedPost, setSelectedPost] = useState<CommunityPost | null>(null)
  const [viewDialogOpen, setViewDialogOpen] = useState(false)
  const { toast } = useToast()

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    try {
      const { data, error } = await supabase
        .from("community_posts")
        .select("*")
        .order("created_at", { ascending: false })

      if (error) throw error
      setPosts(data || [])
    } catch (error) {
      console.error("Error fetching posts:", error)
      toast({
        title: "Error",
        description: "Failed to load posts",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  async function handleApprove(id: string) {
    try {
      const { error } = await supabase.from("community_posts").update({ is_approved: true }).eq("id", id)

      if (error) throw error

      toast({
        title: "Success",
        description: "Post approved successfully",
      })
      fetchPosts()
    } catch (error) {
      console.error("Error approving post:", error)
      toast({
        title: "Error",
        description: "Failed to approve post",
        variant: "destructive",
      })
    }
  }

  async function handleReject(id: string) {
    try {
      const { error } = await supabase.from("community_posts").update({ is_approved: false }).eq("id", id)

      if (error) throw error

      toast({
        title: "Success",
        description: "Post rejected",
      })
      fetchPosts()
    } catch (error) {
      console.error("Error rejecting post:", error)
      toast({
        title: "Error",
        description: "Failed to reject post",
        variant: "destructive",
      })
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Are you sure you want to delete this post?")) return

    try {
      const { error } = await supabase.from("community_posts").delete().eq("id", id)

      if (error) throw error

      toast({
        title: "Success",
        description: "Post deleted successfully",
      })
      fetchPosts()
    } catch (error) {
      console.error("Error deleting post:", error)
      toast({
        title: "Error",
        description: "Failed to delete post",
        variant: "destructive",
      })
    }
  }

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  if (loading) {
    return <div>Loading posts...</div>
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Community Posts</CardTitle>
          <CardDescription>Moderate member posts and discussions</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Author</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Title/Content</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {posts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{post.author_name}</div>
                      {post.author_id && <div className="text-xs text-muted-foreground">ID: {post.author_id}</div>}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{post.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="max-w-xs">
                      {post.title && <div className="font-medium mb-1">{post.title}</div>}
                      <div className="text-sm text-muted-foreground truncate">{post.content}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    {post.is_approved ? (
                      <Badge className="bg-green-500">Approved</Badge>
                    ) : (
                      <Badge variant="secondary">Pending</Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-sm">{formatDate(post.created_at)}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          setSelectedPost(post)
                          setViewDialogOpen(true)
                        }}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      {!post.is_approved && (
                        <Button variant="ghost" size="icon" onClick={() => handleApprove(post.id)}>
                          <Check className="h-4 w-4 text-green-500" />
                        </Button>
                      )}
                      {post.is_approved && (
                        <Button variant="ghost" size="icon" onClick={() => handleReject(post.id)}>
                          <X className="h-4 w-4 text-orange-500" />
                        </Button>
                      )}
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(post.id)}>
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={viewDialogOpen} onOpenChange={setViewDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedPost?.title || "Post Details"}</DialogTitle>
            <DialogDescription>
              By {selectedPost?.author_name} • {selectedPost?.created_at && formatDate(selectedPost.created_at)}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Badge variant="outline">{selectedPost?.category}</Badge>
            </div>
            <div className="whitespace-pre-wrap">{selectedPost?.content}</div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
