import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import ProjectGrid from "@/components/ProjectGrid";
import Contact from "@/components/Contact";

export default function Home() {
  return (
   
    <main className="min-h-screen  max-w-7xl mx-auto">
     
       <Hero />
      <Experience />
      <TechStack />
      <ProjectGrid />
      <Contact />
    </main>
  );
}