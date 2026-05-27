import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Frontend Development Trainee Intern",
    type: "Internship",
    company: "Codveda",
    period: "",
    bullets: [
      "Worked on real-world frontend development tasks and feature builds.",
      "Gained practical exposure to modern web development workflows.",
      "Collaborated with a team, learning communication and code-review etiquette.",
    ],
  },
  {
    role: "Backend Developer Intern",
    type: "Internship",
    company: "Softech Infinite Solution, Indore",
    period: "25/04/2026 — 25/06/2026 · Stipend ₹5,000/month",
    bullets: [
      "Working on backend design and deployment for production-grade applications.",
      "Building scalable APIs and handling server-side architecture decisions.",
      "Managing deployment workflows and ensuring reliable service delivery.",
    ],
  },
];

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
          <div className="space-y-10">
            {experiences.map((exp) => (
              <div key={exp.company} className="relative pl-20">
                <div className="absolute left-0 top-0 w-12 h-12 rounded-xl bg-primary text-primary-foreground grid place-items-center">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="font-display text-xl font-semibold">{exp.role}</h3>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-primary font-medium mb-1">{exp.company}</p>
                  {exp.period && (
                    <p className="text-xs font-mono text-muted-foreground mb-4">{exp.period}</p>
                  )}
                  <ul className={`space-y-2 text-muted-foreground text-sm leading-relaxed ${exp.period ? "" : "mt-4"}`}>
                    {exp.bullets.map((b) => (
                      <li key={b}>• {b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
