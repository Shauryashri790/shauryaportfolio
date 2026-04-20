import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Aims } from "@/components/Aims";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shaurya Shrivastava — Aspiring AI Engineer & CSE Student" },
      { name: "description", content: "Portfolio of Shaurya Shrivastava — Computer Science Engineering student at Bansal Group of Institutions, passionate about Java, DSA, and Artificial Intelligence." },
      { property: "og:title", content: "Shaurya Shrivastava — Aspiring AI Engineer" },
      { property: "og:description", content: "CSE student & aspiring AI Engineer based in Bhopal. Java, DSA, and AI enthusiast." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Aims />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
