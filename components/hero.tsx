export function Hero() {
  return (
    <section className="relative border-b border-primary/20 bg-gradient-to-b from-card/50 to-background overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(100,200,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,200,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="container relative mx-auto px-4 py-16 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5">
          <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-mono tracking-wider text-accent-foreground">MISSION BRIEFING</span>
        </div>
        <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Intelligence <span className="text-primary">Database</span>
        </h2>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Classified event intelligence for TKT operatives. Monitor mission schedules, analyze reward structures, and
          execute strategic operations in the Kingshot theater.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 text-xs font-mono text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span>REAL-TIME INTEL</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span>TACTICAL ANALYSIS</span>
          </div>
        </div>
      </div>
    </section>
  )
}
