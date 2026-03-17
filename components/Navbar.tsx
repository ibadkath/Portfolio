"use client";
import { Briefcase, FolderCode, Lightbulb, Mail } from "lucide-react";

export default function Navbar() {
  const navLinks = [
    { name: "Experience", href: "#experience", icon: <Briefcase size={20} /> },
    { name: "Skills", href: "#skills", icon: <Lightbulb size={20} /> },
    { name: "Projects", href: "#projects", icon: <FolderCode size={20} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={20} /> },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-800/60 bg-[#020617]/80 backdrop-blur-md">
      <div className="container mx-auto max-w-5xl px-4 h-16 flex items-center justify-between">
        
      
        <div className="shrink-0">
          <a href="#" className="text-xl font-bold text-white tracking-tighter">
          <span className="text-indigo-500"></span>
          </a>
        </div>

     
        <nav className="flex items-center gap-5 md:gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="group flex items-center gap-2 transition-colors"
              title={link.name}
            >
              <span className="text-slate-400 group-hover:text-indigo-400 transition-colors md:hidden">
                {link.icon}
              </span>
              
              <span className="hidden md:block text-sm font-medium text-slate-400 group-hover:text-white transition-colors">
                {link.name}
              </span>
            </a>
          ))}
        </nav>

        <div className="flex shrink-0">
          <a 
            href="#contact" 
            className="px-4 py-1.5 md:px-6 md:py-2 rounded-full bg-indigo-600 text-[12px] md:text-sm font-bold text-white hover:bg-indigo-500 transition-all active:scale-95 shadow-lg shadow-indigo-500/20"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}