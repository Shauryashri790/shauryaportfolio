import { Brain, Code2, Globe } from "lucide-react";

const aims = [
  {
    icon: Brain,
    title: "AI Engineer.",
    desc: "Building intelligent systems that learn, reason and solve real-world problems.",
    featured: true,
  },
  {
    icon: Code2,
    title: "Software Developer.",
    desc: "Designing clean, scalable backends in Java with strong DSA foundations.",
  },
  {
    icon: Globe,
    title: "Web Developer.",
    desc: "Crafting responsive, modern interfaces with HTML, CSS and beyond.",
  },
];

export function Aims() {
  return (
    <section className="py-24 bg-surface/40 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-3 gap-10 mb-14">
          <div className="lg:col-span-2">
            <p className="text-xs font-mono uppercase tracking-widest text-primary mb-4">
              — What I aim to do
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight max-w-2xl">
              The future I'm building toward.
            </h2>
          </div>
          <p className="text-muted-foreground self-end">
            Open to opportunities in AI, software development and web — where curiosity meets craft.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {aims.map((a) => (
            <div
              key={a.title}
              className={`group p-8 rounded-2xl border transition-all hover:-translate-y-1 ${
                a.featured
                  ? "bg-primary text-primary-foreground border-primary shadow-[var(--shadow-glow)]"
                  : "bg-card border-border hover:border-primary/50"
              }`}
            >
              <a.icon className="w-8 h-8 mb-8" strokeWidth={1.5} />
              <h3 className="font-display text-2xl font-bold mb-3">{a.title}</h3>
              <p className={`text-sm leading-relaxed ${a.featured ? "opacity-80" : "text-muted-foreground"}`}>
                {a.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
