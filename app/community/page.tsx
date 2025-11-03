"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { createBrowserClient } from "@supabase/ssr"
import { MessageSquare, ThumbsUp, Send, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"

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

const categories = [
  { value: "general", label: "General Discussion" },
  { value: "suggestion", label: "Suggestions" },
  { value: "strategy", label: "Strategy Tips" },
  { value: "question", label: "Questions" },
]

export default function CommunityPage() {
  const [posts, setPosts] = useState<CommunityPost[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [authorName, setAuthorName] = useState("")
  const [authorId, setAuthorId] = useState("")
  const [postTitle, setPostTitle] = useState("")
  const [postContent, setPostContent] = useState("")
  const [postCategory, setPostCategory] = useState("general")
  const [submitting, setSubmitting] = useState(false)
  const { toast } = useToast()

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )

  useEffect(() => {
    fetchPosts()
  }, [selectedCategory])

  async function fetchPosts() {
    try {
      let query = supabase
        .from("community_posts")
        .select("*")
        .eq("is_approved", true)
        .order("created_at", { ascending: false })

      if (selectedCategory !== "all") {
        query = query.eq("category", selectedCategory)
      }

      const { data, error } = await query

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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!authorName.trim() || !postContent.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and message",
        variant: "destructive",
      })
      return
    }

    setSubmitting(true)

    try {
      const { error } = await supabase.from("community_posts").insert({
        author_name: authorName,
        author_id: authorId || null,
        category: postCategory,
        title: postTitle || null,
        content: postContent,
        is_approved: false,
      })

      if (error) throw error

      toast({
        title: "Post Submitted!",
        description: "Your post is pending approval and will appear soon.",
      })

      // Reset form
      setPostTitle("")
      setPostContent("")
      setPostCategory("general")
    } catch (error) {
      console.error("Error submitting post:", error)
      toast({
        title: "Error",
        description: "Failed to submit post",
        variant: "destructive",
      })
    } finally {
      setSubmitting(false)
    }
  }

  function formatDate(dateString: string) {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 font-mono">Community Board</h1>
          <p className="text-muted-foreground">Share your thoughts, suggestions, and strategies with the alliance</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Post Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  New Post
                </CardTitle>
                <CardDescription>Share with the community</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="authorName">Your Name *</Label>
                    <Input
                      id="authorName"
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      placeholder="[TKT]ᴬᴳᴱᴺᵀ YourName"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="authorId">Game ID (Optional)</Label>
                    <Input
                      id="authorId"
                      value={authorId}
                      onChange={(e) => setAuthorId(e.target.value)}
                      placeholder="12345678"
                    />
                  </div>

                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select value={postCategory} onValueChange={setPostCategory}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat.value} value={cat.value}>
                            {cat.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="title">Title (Optional)</Label>
                    <Input
                      id="title"
                      value={postTitle}
                      onChange={(e) => setPostTitle(e.target.value)}
                      placeholder="Post title..."
                    />
                  </div>

                  <div>
                    <Label htmlFor="content">Message *</Label>
                    <Textarea
                      id="content"
                      value={postContent}
                      onChange={(e) => setPostContent(e.target.value)}
                      placeholder="Share your thoughts..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={submitting}>
                    <Send className="h-4 w-4 mr-2" />
                    {submitting ? "Submitting..." : "Submit Post"}
                  </Button>

                  <p className="text-xs text-muted-foreground">
                    Posts require admin approval before appearing publicly
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Posts List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold font-mono">Recent Posts</h2>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((cat) => (
                      <SelectItem key={cat.value} value={cat.value}>
                        {cat.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {loading ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Loading posts...</p>
              </div>
            ) : posts.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <MessageSquare className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">No posts yet. Be the first to share!</p>
                </CardContent>
              </Card>
            ) : (
              posts.map((post) => (
                <Card key={post.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        {post.title && <CardTitle className="mb-2">{post.title}</CardTitle>}
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="font-semibold text-foreground">{post.author_name}</span>
                          {post.author_id && (
                            <>
                              <span>•</span>
                              <span>ID: {post.author_id}</span>
                            </>
                          )}
                          <span>•</span>
                          <span>{formatDate(post.created_at)}</span>
                        </div>
                      </div>
                      <Badge variant="outline">
                        {categories.find((c) => c.value === post.category)?.label || post.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="whitespace-pre-wrap text-foreground">{post.content}</p>
                    <div className="mt-4 flex items-center gap-4">
                      <Button variant="ghost" size="sm" className="gap-2">
                        <ThumbsUp className="h-4 w-4" />
                        {post.likes}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
