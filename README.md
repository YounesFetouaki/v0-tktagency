# TKT Agency - Kingshot Alliance Website

A comprehensive alliance management website for the TKT gaming alliance, featuring event guides, hero strategies, member management, and an admin dashboard.

## Features

- 📅 **Event Guides** - Detailed strategies for Bear Hunt, Viking Vengeance, and more
- 🦸 **Hero Database** - Complete hero information with roles and strategies
- 👥 **Member Wall** - Alliance roster with roles and IDs
- 📢 **Announcements** - Leadership updates and important notices
- ⚔️ **Battle Log** - Rally records and performance tracking
- 🏆 **Leaderboard** - Rankings by power, events, and contributions
- 🖼️ **Gallery** - Screenshots of epic moments and victories
- 😄 **Community Highlights** - Funny moments and memes
- 🔒 **Admin Dashboard** - Easy content management with authentication

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Deployment**: Vercel
- **Language**: TypeScript

## Quick Start

### Prerequisites

- Node.js 18+ installed
- Supabase account
- Vercel account (for deployment)

### Local Development

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/YOUR_USERNAME/tktagency.git
   cd tktagency
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**
   Create a `.env.local` file:
   \`\`\`env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   \`\`\`

4. **Run development server**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open browser**
   Navigate to `http://localhost:3000`

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete deployment instructions including:
- GitHub setup
- Supabase database configuration
- Vercel deployment
- Admin user creation
- Environment variables

## Admin Dashboard

Access the admin dashboard at `/admin/login`

Default credentials are set up during deployment (see DEPLOYMENT.md)

### Admin Features

- ✏️ Create, edit, and delete events
- 🦸 Manage hero database
- 👥 Update member roster
- 📢 Post announcements
- ⚔️ Log battle results
- 🖼️ Upload gallery images
- 😄 Add community highlights
- 📊 Update leaderboard

## Project Structure

\`\`\`
tktagency/
├── app/                    # Next.js app directory
│   ├── admin/             # Admin dashboard pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── admin/            # Admin-specific components
│   └── ui/               # shadcn/ui components
├── lib/                   # Utility functions
│   ├── supabase/         # Supabase client setup
│   └── *-data.ts         # Data type definitions
├── public/               # Static assets (images)
├── scripts/              # Database migration scripts
└── middleware.ts         # Auth middleware
\`\`\`

## Database Schema

The database includes tables for:
- Events
- Heroes
- Members
- Announcements
- Battle Logs
- Gallery Items
- Community Highlights
- Leaderboard Entries
- Alliance Lore

See `scripts/01-create-tables.sql` for complete schema.

## Contributing

This is a private alliance website. If you're a TKT member and want to contribute:

1. Contact alliance leadership
2. Get admin access
3. Use the admin dashboard to update content

## License

Private - TKT Alliance Only

## Credits

Created by TKT Alliance Leadership
- Strategy guides by [TKT]ᴬᴳᴱᴺᵀ Kornik and [TKT]ᴬᴳᴱᴺᵀ Patriot
- Community highlights featuring Steel and Spoiikee
- Built with ❤️ for the TKT gaming community

---

**For deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)**
