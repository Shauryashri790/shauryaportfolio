import { Code2, Database, Globe, Brain, Boxes, Coffee } from "lucide-react";

const skills = [
  { icon: Coffee, name: "Java", level: 85, tag: "Language" },
  { icon: Code2, name: "Python", level: 65, tag: "Language" },
  { icon: Boxes, name: "DSA in Java", level: 80, tag: "Core" },
  { icon: Globe, name: "HTML & CSS", level: 70, tag: "Web" },
  { icon: Database, name: "SQL", level: 65, tag: "Database" },
  { icon: Brain, name: "Artificial Intelligence", level: 40, tag: "Learning" },
];

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-3 gap-10 mb-14">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-primary mb-4">
              — Skills
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
              My toolkit<span className="text-primary">.</span>
            </h2>
          </div>
          <p className="lg:col-span-2 text-muted-foreground text-lg leading-relaxed lg:pt-10">
            A blend of strong programming fundamentals and a curious mind always exploring new technologies — currently leaning into AI.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((s, i) => (
            <div
              key={s.name}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-surface-elevated text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground px-2 py-1 rounded-full border border-border">
                  {s.tag}
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-3">{s.name}</h3>
              <div className="h-1.5 w-full bg-surface-elevated rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-700"
                  style={{ width: `${s.level}%` }}
                />
              </div>
              <p className="mt-2 text-xs font-mono text-muted-foreground">{s.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
