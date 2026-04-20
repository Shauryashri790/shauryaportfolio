import portrait from "@/assets/shaurya-portrait.jpg";
import { Github, Instagram, Linkedin, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative pt-28 lg:pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-center">
        {/* Left: name */}
        <div className="lg:col-span-5 fade-in-up">
          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
            Shaurya<br />Shrivastava<span className="text-primary">.</span>
          </h1>
          <div className="mt-6 h-1 w-16 bg-primary rounded-full" />
          <div className="mt-10 flex items-center gap-4 text-muted-foreground">
            <a href="https://github.com/Shauryashri790" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/shaurya-shrivastava-aba436297" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#contact" className="hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Center: portrait */}
        <div className="lg:col-span-4 flex justify-center order-first lg:order-none">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl" />
            <img
              src={portrait}
              alt="Shaurya Shrivastava portrait"
              className="relative w-64 sm:w-80 lg:w-full max-w-sm aspect-[3/4] object-cover rounded-2xl shadow-[var(--shadow-card)] float"
            />
          </div>
        </div>

        {/* Right: intro */}
        <div className="lg:col-span-3 fade-in-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-4">
            — Introduction
          </p>
          <h2 className="font-display text-2xl font-semibold leading-snug mb-4">
            CSE Student & aspiring AI Engineer, based in Bhopal, India.
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed font-mono">
            3rd-year Computer Science student at Bansal Group of Institutions. Passionate about Java, Data Structures & Algorithms, and currently exploring Artificial Intelligence.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-all hover:shadow-[var(--shadow-glow)]"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium hover:border-primary hover:text-primary transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
