import { Download, ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center py-24 px-6 text-center md:py-32 ">
      <div className="z-10 flex flex-col items-center">
       
        <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-white md:text-7xl mb-4">
          Hi, I'm <span className="text-indigo-500">Ibad Kath.</span>
        </h1>
        
        <h2 className="max-w-4xl text-5xl font-extrabold tracking-tight text-white md:text-7xl">
          Building digital experiences that matter.
        </h2>
        
        <p className="mt-8 max-w-2xl mx-auto text-lg text-slate-400 md:text-xl">
          I'm a Full-stack Developer based in Karachi, specializing in Next.js, 
          Type-safe code, and high-fidelity UI implementations.
        </p>

      
        <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row justify-center">
          
          <a
            href="/Ibad_Resume.pdf"
            download
            className="flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-bold text-black transition-all hover:bg-slate-200 active:scale-95 shadow-lg shadow-white/5"
          >
            <Download size={18} />
            Download Resume
          </a>
          
          
          <a
            href="#projects"
            className="flex items-center gap-2 text-indigo-400 font-bold hover:text-indigo-300 transition-colors group"
          >
            View Projects
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

       
        <div className="mt-12 flex items-center justify-center gap-8 text-slate-400">
          <a 
            href="https://github.com/ibadkath" 
            target="_blank" 
            className="hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://linkedin.com/in/ibad-kath" 
            target="_blank" 
            className="hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:ibadkath88@gmail.com" 
            className="hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}