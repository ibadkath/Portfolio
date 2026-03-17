import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-32 px-6 text-center" id="contact">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Let's Connect
        </h2>
        
        <p className="text-slate-400 text-lg md:text-xl mb-12">
          Have a project in mind or just want to say hello? I'd love to hear from you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
         
          <a 
            href="mailto:ibadkath88@gmail.com"
            className="flex items-center gap-3 px-8 py-4 rounded-xl bg-red-600 text-white font-bold transition-all hover:bg-red-500 hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
          >
            <Mail size={20} />
            Email Me
          </a>

          
          <a 
            href="https://linkedin.com/in/ibad-kath"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-xl bg-slate-900 border border-slate-800 text-white font-bold transition-all hover:bg-slate-800 hover:border-slate-700 hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
          >
            
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </a>
        </div>

        <p className="mt-24 text-slate-600 text-sm">
          © {new Date().getFullYear()}Ibad Kath. All rights reserved.
        </p>
      </div>
    </section>
  );
}