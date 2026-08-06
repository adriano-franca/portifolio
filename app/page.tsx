import { Navbar } from "@/src/components/Navbar";
import { Hero } from "@/src/sections/Hero";
import { About } from "@/src/sections/About";
import { Experience } from "@/src/sections/Experience";
import { Projects } from "@/src/sections/Projects";
import { Footer } from "@/src/components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-950 min-h-screen text-gray-50 font-sans selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}