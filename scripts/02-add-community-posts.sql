-- Community posts table for member discussions
CREATE TABLE IF NOT EXISTS community_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  author_name TEXT NOT NULL,
  author_id TEXT,
  category TEXT NOT NULL DEFAULT 'general',
  title TEXT,
  content TEXT NOT NULL,
  is_approved BOOLEAN DEFAULT false,
  likes INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_community_posts_created_at ON community_posts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_community_posts_category ON community_posts(category);
CREATE INDEX IF NOT EXISTS idx_community_posts_approved ON community_posts(is_approved);

-- Enable Row Level Security
ALTER TABLE community_posts ENABLE ROW LEVEL SECURITY;

-- Public can read approved posts
CREATE POLICY "Public read access for approved posts" ON community_posts 
  FOR SELECT USING (is_approved = true);

-- Anyone can insert posts (they need approval)
CREATE POLICY "Anyone can insert posts" ON community_posts 
  FOR INSERT WITH CHECK (true);

-- Authenticated users (admins) can update/delete
CREATE POLICY "Authenticated users can update posts" ON community_posts 
  FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Authenticated users can delete posts" ON community_posts 
  FOR DELETE TO authenticated USING (true);
