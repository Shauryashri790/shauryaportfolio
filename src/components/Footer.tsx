import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Shaurya Shrivastava. Crafted with care.
        </p>
        <div className="flex items-center gap-5 text-muted-foreground">
          <a href="https://github.com/Shauryashri790" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>
          <a href="https://www.linkedin.com/in/shaurya-shrivastava-aba436297" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
          <a href="mailto:shauryashri9@gmail.com" className="hover:text-primary transition-colors"><Mail className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
}
