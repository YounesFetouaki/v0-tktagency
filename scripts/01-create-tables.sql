-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Events table
CREATE TABLE IF NOT EXISTS events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  category TEXT,
  frequency TEXT,
  rewards TEXT,
  image TEXT,
  quick_facts JSONB,
  tips TEXT[],
  sections JSONB,
  images JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Heroes table
CREATE TABLE IF NOT EXISTS heroes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  role TEXT,
  generation TEXT,
  description TEXT,
  image TEXT,
  strengths TEXT[],
  best_for TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Members table
CREATE TABLE IF NOT EXISTS members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  game_id TEXT UNIQUE NOT NULL,
  nickname TEXT NOT NULL,
  role TEXT,
  power BIGINT DEFAULT 0,
  event_points INTEGER DEFAULT 0,
  contributions INTEGER DEFAULT 0,
  status TEXT DEFAULT 'offline',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Announcements table
CREATE TABLE IF NOT EXISTS announcements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  author TEXT NOT NULL,
  priority TEXT DEFAULT 'normal',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Battle logs table
CREATE TABLE IF NOT EXISTS battle_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  event_name TEXT NOT NULL,
  date TIMESTAMP WITH TIME ZONE NOT NULL,
  rally_leader TEXT NOT NULL,
  participants TEXT[],
  damage_dealt BIGINT,
  result TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Gallery table
CREATE TABLE IF NOT EXISTS gallery (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  category TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Community highlights table
CREATE TABLE IF NOT EXISTS community_highlights (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT NOT NULL,
  member_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Alliance lore table
CREATE TABLE IF NOT EXISTS alliance_lore (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_events_slug ON events(slug);
CREATE INDEX IF NOT EXISTS idx_members_game_id ON members(game_id);
CREATE INDEX IF NOT EXISTS idx_announcements_created_at ON announcements(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_battle_logs_date ON battle_logs(date DESC);
CREATE INDEX IF NOT EXISTS idx_gallery_category ON gallery(category);

-- Enable Row Level Security
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE heroes ENABLE ROW LEVEL SECURITY;
ALTER TABLE members ENABLE ROW LEVEL SECURITY;
ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE battle_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE community_highlights ENABLE ROW LEVEL SECURITY;
ALTER TABLE alliance_lore ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Public read access for events" ON events FOR SELECT USING (true);
CREATE POLICY "Public read access for heroes" ON heroes FOR SELECT USING (true);
CREATE POLICY "Public read access for members" ON members FOR SELECT USING (true);
CREATE POLICY "Public read access for announcements" ON announcements FOR SELECT USING (true);
CREATE POLICY "Public read access for battle_logs" ON battle_logs FOR SELECT USING (true);
CREATE POLICY "Public read access for gallery" ON gallery FOR SELECT USING (true);
CREATE POLICY "Public read access for community_highlights" ON community_highlights FOR SELECT USING (true);
CREATE POLICY "Public read access for alliance_lore" ON alliance_lore FOR SELECT USING (true);

-- Fixed INSERT policies to use WITH CHECK instead of USING
-- Create policies for authenticated users (admins) to insert/update/delete
CREATE POLICY "Authenticated users can insert events" ON events FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update events" ON events FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Authenticated users can delete events" ON events FOR DELETE TO authenticated USING (true);

CREATE POLICY "Authenticated users can insert heroes" ON heroes FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update heroes" ON heroes FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Authenticated users can delete heroes" ON heroes FOR DELETE TO authenticated USING (true);

CREATE POLICY "Authenticated users can insert members" ON members FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update members" ON members FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Authenticated users can delete members" ON members FOR DELETE TO authenticated USING (true);

CREATE POLICY "Authenticated users can insert announcements" ON announcements FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update announcements" ON announcements FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Authenticated users can delete announcements" ON announcements FOR DELETE TO authenticated USING (true);

CREATE POLICY "Authenticated users can insert battle_logs" ON battle_logs FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update battle_logs" ON battle_logs FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Authenticated users can delete battle_logs" ON battle_logs FOR DELETE TO authenticated USING (true);

CREATE POLICY "Authenticated users can insert gallery" ON gallery FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update gallery" ON gallery FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Authenticated users can delete gallery" ON gallery FOR DELETE TO authenticated USING (true);

CREATE POLICY "Authenticated users can insert community_highlights" ON community_highlights FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update community_highlights" ON community_highlights FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Authenticated users can delete community_highlights" ON community_highlights FOR DELETE TO authenticated USING (true);

CREATE POLICY "Authenticated users can insert alliance_lore" ON alliance_lore FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update alliance_lore" ON alliance_lore FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Authenticated users can delete alliance_lore" ON alliance_lore FOR DELETE TO authenticated USING (true);
