"use client"

import { Shield, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const navItems = [
    { label: "Events", href: "#events" },
    { label: "Heroes", href: "#heroes" },
    { label: "Members", href: "#members" },
    { label: "Community", href: "/community" },
    { label: "Leaderboard", href: "#leaderboard" },
    { label: "Gallery", href: "#gallery" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-primary/20 bg-card/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Shield className="h-8 w-8 text-primary" />
              <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-accent animate-pulse" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-wider text-foreground font-mono">
                TKT <span className="text-primary">AGENCY</span>
              </h1>
              <p className="text-xs text-muted-foreground tracking-widest font-mono">CLASSIFIED // KINGSHOT OPS</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 rounded border border-primary/30 bg-primary/5 px-3 py-1.5">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono text-muted-foreground">DIRECTOR:</span>
              <span className="text-sm font-mono text-foreground">[TKT]ᴬᴳᴱᴺᵀ Younes</span>
            </div>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-lg font-mono text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
