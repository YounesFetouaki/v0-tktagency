# TKT Agency - Deployment Guide

This guide will walk you through deploying your TKT Agency website from GitHub to Vercel with Supabase database.

## Prerequisites

- GitHub account
- Vercel account (free tier works)
- Supabase account (free tier works)

---

## Step 1: Push Code to GitHub

1. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Name it `tktagency` (or any name you prefer)
   - Make it Public or Private
   - Don't initialize with README (we already have code)

2. **Push your code to GitHub**
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit - TKT Agency website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/tktagency.git
   git push -u origin main
   \`\`\`

---

## Step 2: Set Up Supabase Database

1. **Create a Supabase Project**
   - Go to https://supabase.com
   - Click "New Project"
   - Choose organization (or create one)
   - Project name: `tktagency`
   - Database password: Create a strong password (save it!)
   - Region: Choose closest to your users
   - Click "Create new project" (takes ~2 minutes)

2. **Run Database Schema**
   - Once project is ready, go to SQL Editor (left sidebar)
   - Click "New Query"
   - Copy the entire content from `scripts/01-create-tables.sql`
   - Paste it into the SQL editor
   - Click "Run" or press Ctrl+Enter
   - You should see "Success. No rows returned"

3. **Get Your Supabase Credentials**
   - Go to Project Settings (gear icon in sidebar)
   - Click "API" section
   - Copy these values (you'll need them for Vercel):
     - **Project URL** (looks like: `https://xxxxx.supabase.co`)
     - **anon/public key** (long string starting with `eyJ...`)

4. **Create Admin User**
   - Go to Authentication → Users (left sidebar)
   - Click "Add user" → "Create new user"
   - Email: `admin@tktagency.com` (or your preferred email)
   - Password: Create a strong password (save it!)
   - Auto Confirm User: ✅ Check this box
   - Click "Create user"
   - **Save these credentials** - you'll use them to login to `/admin`

---

## Step 3: Deploy to Vercel

1. **Connect GitHub to Vercel**
   - Go to https://vercel.com
   - Click "Add New..." → "Project"
   - Click "Import Git Repository"
   - Find your `tktagency` repository
   - Click "Import"

2. **Configure Project**
   - Framework Preset: Next.js (should auto-detect)
   - Root Directory: `./` (leave as default)
   - Build Command: `next build` (default)
   - Output Directory: `.next` (default)

3. **Add Environment Variables**
   Click "Environment Variables" and add these:

   \`\`\`
   NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...your-anon-key
   SUPABASE_URL=https://xxxxx.supabase.co
   SUPABASE_ANON_KEY=eyJhbGc...your-anon-key
   \`\`\`

   Replace with your actual Supabase credentials from Step 2.

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - You'll get a URL like: `https://tktagency.vercel.app`

---

## Step 4: Access Admin Dashboard

1. **Visit your admin login page**
   \`\`\`
   https://your-site.vercel.app/admin/login
   \`\`\`

2. **Login with credentials from Step 2.4**
   - Email: `admin@tktagency.com`
   - Password: (the password you created)

3. **Start managing content!**
   - Add/edit events
   - Manage heroes
   - Update member roster
   - Post announcements
   - Log battle records
   - Upload gallery images

---

## Step 5: Enable Row Level Security (RLS) - IMPORTANT!

For production security, enable RLS on your tables:

1. Go to Supabase Dashboard → Authentication → Policies
2. For each table, add these policies:

**For public read access (events, heroes, members, etc.):**
\`\`\`sql
-- Allow public read access
CREATE POLICY "Allow public read access" ON events
FOR SELECT USING (true);

-- Allow authenticated users to insert/update/delete
CREATE POLICY "Allow authenticated users full access" ON events
FOR ALL USING (auth.role() = 'authenticated');
\`\`\`

Repeat for all tables: `heroes`, `members`, `announcements`, `battle_logs`, `gallery_items`, `community_highlights`, `leaderboard_entries`, `alliance_lore`

---

## Troubleshooting

### Admin page shows "Loading..." forever
- Check browser console for errors
- Verify environment variables are set in Vercel
- Make sure you ran the SQL schema in Supabase

### Can't login to admin
- Verify admin user was created in Supabase Authentication
- Check that "Auto Confirm User" was enabled
- Try resetting password in Supabase dashboard

### Database connection errors
- Double-check environment variables match Supabase credentials
- Ensure Supabase project is active (not paused)
- Check Supabase project status page

### Images not loading
- Make sure images are in the `public` folder
- Check image paths start with `/` (e.g., `/hero-image.png`)
- Verify images were committed to GitHub

---

## Updating Your Site

After making changes:

\`\`\`bash
git add .
git commit -m "Description of changes"
git push
\`\`\`

Vercel will automatically rebuild and deploy your changes!

---

## Custom Domain (Optional)

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain (e.g., `tktagency.com`)
3. Follow DNS configuration instructions
4. Update Supabase redirect URLs if using authentication

---

## Support

If you encounter issues:
- Check Vercel deployment logs
- Check Supabase logs
- Verify all environment variables are set correctly
- Make sure SQL schema was executed successfully

---

**Congratulations! Your TKT Agency website is now live! 🎉**

Admin Dashboard: `https://your-site.vercel.app/admin`
