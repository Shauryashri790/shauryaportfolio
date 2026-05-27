import { GraduationCap, Download } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-surface/40 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-4">
            — About
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight accent-underline inline-block">
            About me.
          </h2>
          <div className="mt-12 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I'm a dedicated and motivated student with a strong interest in software development and Artificial Intelligence. My programming journey started with <span className="text-foreground">Java</span>, which gradually led me deep into the world of Data Structures & Algorithms.
            </p>
            <p>
              I have a basic foundation in web technologies (HTML, CSS) and a working knowledge of SQL. Currently, I'm focused on building intelligent systems and learning the principles of AI to solve real-world problems.
            </p>
          </div>
          <a
            href="/Shaurya_Shrivastava_Resume.docx"
            download="Shaurya_Shrivastava_Resume.docx"
            className="mt-10 inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            <Download className="w-4 h-4" /> Download Resume
          </a>
        </div>

        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-4">
            — Education
          </p>
          <div className="space-y-5">
            {[
              {
                title: "B.Tech in Computer Science Engineering",
                place: "Bansal Group of Institutions, Bhopal",
                meta: "Expected 2027 · CGPA 7.0",
              },
              {
                title: "Class 12th — Senior Secondary",
                place: "Maharishi Vidya Mandir, Hamirpur, U.P.",
                meta: "70%",
              },
              {
                title: "Class 10th — Secondary",
                place: "Maharishi Vidya Mandir, Hamirpur, U.P.",
                meta: "70%",
              },
            ].map((edu) => (
              <div
                key={edu.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary grid place-items-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{edu.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{edu.place}</p>
                    <p className="text-xs font-mono text-primary mt-2">{edu.meta}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
