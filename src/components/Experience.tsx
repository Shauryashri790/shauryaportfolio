import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-surface/40 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <p className="text-xs font-mono uppercase tracking-widest text-primary mb-4">
          — Experience
        </p>
        <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-14 accent-underline inline-block">
          Where I've worked.
        </h2>

        <div className="relative max-w-3xl">
          <div className="absolute left-6 top-6 bottom-0 w-px bg-border" />
          <div className="relative pl-20">
            <div className="absolute left-0 top-0 w-12 h-12 rounded-xl bg-primary text-primary-foreground grid place-items-center">
              <Briefcase className="w-5 h-5" />
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <h3 className="font-display text-xl font-semibold">
                  Frontend Development Trainee Intern
                </h3>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 text-primary">
                  Internship
                </span>
              </div>
              <p className="text-primary font-medium mb-4">Codveda</p>
              <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed">
                <li>• Worked on real-world frontend development tasks and feature builds.</li>
                <li>• Gained practical exposure to modern web development workflows.</li>
                <li>• Collaborated with a team, learning communication and code-review etiquette.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
