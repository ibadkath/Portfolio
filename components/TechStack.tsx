export default function TechStack() {
  
const technologies = [
    {
      name: "Next.js",
      icon: "https://cdn.worldvectorlogo.com/logos/next-js.svg", 
      invert: true, 
    },
    {
      name: "React",
      icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    },
    {
      name: "JavaScript",
      
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", 
    },
    {
      name: "Node.js",
      icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    },
    {
      name: "Supabase",
      // Supabase logo needs to be the horizontal or icon version
      icon: "https://raw.githubusercontent.com/supabase/supabase/master/packages/common/assets/images/supabase-logo-icon.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
    },
    {
      name: "Sanity",
      icon: "https://cdn.worldvectorlogo.com/logos/sanity.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
    },
    {
      name: "Figma",
      
      icon: "icons/figma-icon.png",
    },
    {
      name: "Git",
      icon: "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
    },
    {
      name: "Vercel",
     
      icon: "icons/vercel.svg",
      invert: true, 
    },
  ];
  return (
    <section id="skills" className="scroll-mt-32 w-full py-12 md:py-24">
      {/* - max-w-[85%] on mobile screens
          - md:max-w-full on desktop
      */}
      <div className="mx-auto max-w-[85%] md:max-w-full">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Tech Stack</h2>
          <div className="mt-2 h-1 w-16 bg-indigo-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-6">
          {technologies.map((tech) => (
            <div 
              key={tech.name}
              className="group flex flex-col items-center justify-center p-4 md:p-8 rounded-xl md:rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm"
            >
              <div className="relative w-8 h-8 md:w-12 md:h-12 mb-2 md:mb-4">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className={`object-contain h-full w-full ${tech.invert ? "brightness-0 invert" : ""}`}
                />
              </div>
              <span className="text-[9px] md:text-xs font-medium text-slate-500 text-center uppercase tracking-tighter group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}