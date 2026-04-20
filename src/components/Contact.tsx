import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const contacts = [
  { icon: Mail, label: "Email", value: "shauryashri9@gmail.com", href: "mailto:shauryashri9@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 8318511266", href: "tel:+918318511266" },
  { icon: Linkedin, label: "LinkedIn", value: "shaurya-shrivastava", href: "https://www.linkedin.com/in/shaurya-shrivastava-aba436297" },
  { icon: Github, label: "GitHub", value: "Shauryashri790", href: "https://github.com/Shauryashri790" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Message sent! I'll reply soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-4">
            — Contact
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight accent-underline inline-block">
            Let's build something.
          </h2>
          <p className="mt-12 text-muted-foreground text-lg leading-relaxed max-w-md">
            Got a project, an opportunity, or just want to say hi? My inbox is always open.
          </p>

          <div className="mt-10 space-y-4">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="w-11 h-11 rounded-lg bg-surface-elevated text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <c.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{c.label}</p>
                  <p className="font-medium">{c.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={submit}
          className="p-8 sm:p-10 rounded-3xl bg-card border border-border h-fit lg:sticky lg:top-24"
        >
          <h3 className="font-display text-2xl font-bold mb-8">Send a message</h3>
          <div className="space-y-5">
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Your name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className="mt-2 w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Your email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                className="mt-2 w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                rows={4}
                className="mt-2 w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="mt-4 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all hover:shadow-[var(--shadow-glow)]"
            >
              Send message <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
