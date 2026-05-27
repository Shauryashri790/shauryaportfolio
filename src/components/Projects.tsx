import { Github, ExternalLink, Trophy, Users, Train, Zap } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-primary mb-4">
              — Projects
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
              Featured work<span className="text-primary">.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A selection of things I've built — from hackathons to coursework.
          </p>
        </div>

        <article className="group relative grid lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all">
          {/* Visual side */}
          <div className="lg:col-span-2 relative bg-gradient-to-br from-primary/20 via-surface-elevated to-surface p-10 min-h-[280px] flex items-center justify-center">
            <Train className="w-32 h-32 text-primary/80 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.2} />
            <div className="absolute top-6 left-6 inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full bg-background/80 backdrop-blur border border-primary/30 text-primary">
              <Trophy className="w-3.5 h-3.5" /> SIH National Level
            </div>
          </div>

          {/* Content side */}
          <div className="lg:col-span-3 p-8 lg:p-10">
            <div className="flex flex-wrap items-center gap-3 mb-4 text-xs font-mono">
              <span className="px-2.5 py-1 rounded-full bg-surface-elevated text-muted-foreground">Hackathon</span>
              <span className="px-2.5 py-1 rounded-full bg-surface-elevated text-muted-foreground">Java</span>
              <span className="px-2.5 py-1 rounded-full bg-surface-elevated text-muted-foreground">Backend</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3">
              Secure Ticket Resell System
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A platform to securely resell unused IRCTC tickets — designed to reduce ticket wastage and improve resource utilization across the railway network. Built and selected at the Smart India Hackathon (national level).
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
              <span className="inline-flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" /> Team of 6
              </span>
              <span className="inline-flex items-center gap-2">
                <Trophy className="w-4 h-4 text-primary" /> National finalist
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/Shauryashri790"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm font-medium hover:border-primary hover:text-primary transition-colors"
              >
                <Github className="w-4 h-4" /> Code
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <ExternalLink className="w-4 h-4" /> Live demo
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
