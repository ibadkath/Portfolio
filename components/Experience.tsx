export default function Experience() {
  const experiences = [
    {
      company: "Atompoint",
      role: "Frontend Intern",
      duration: "June 2026– Sep 2026",
      descriptionPoints: [
        "Developed and maintained production-ready, responsive web interfaces using React.js, Next.js, TypeScript, and JavaScript.",
        "Built interactive UI components and animations using Tailwind CSS, Magic UI, and Framer Motion, ensuring responsive and engaging user experiences.",
        "Integrated APIs and third-party services, including Resend for form submission and email functionality.",
        "Worked with Supabase for authentication and database integration, while also gaining hands-on experience in full stack development."
      ],
    },
    {
      company: "Breakthrough Pulse",
      role: "Frontend Developer",
      duration: "Oct 2025 - Dec 2025",
      descriptionPoints: [
        "Developed and maintain responsive user interfaces using React.js, Next.js, and Shadcn UI.",
        "Integrating REST APIs and handling dynamic data across the application.",
        "Collaborating with the team to fix bugs and improve features in a production-level project.",
        "Enhancing user experience by implementing clean UI components, smooth workflows, and optimized frontend performance."
      ],
    },
    {
      company: "Freelance",
      role: "Full Stack Developer",
      duration: "Nov 2024 - Present",
      descriptionPoints: [
        "Developed scalable, high-performance web applications using React.js, Next.js, and TypeScript, delivering responsive and accessible UI from Figma designs.",
        "Engineered robust form systems and data validation using Zod, improving data accuracy and maintaining strict type safety across applications.",
        "Implemented role-based dashboards and complex workflows, enhancing user experience and system efficiency."
      ],
    }
  ];

  return (
    <section id="experience" className="scroll-mt-32 w-full py-12 md:py-24">
      
      <div className="mx-auto max-w-[90%] md:max-w-full">
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-white tracking-tight">Work Experience</h2>
          <div className="mt-2 h-1 w-20 bg-indigo-600 rounded-full"></div>
        </div>

        <div className="flex flex-col gap-8 w-full">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="group w-full p-8 md:p-10 rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm transition-all hover:border-indigo-500/50 flex flex-col"
            >
             
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 shrink-0">
                    <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg font-medium text-slate-400">{exp.company}</h4>
                  </div>
                </div>
                
                <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/5 border border-indigo-500/10 text-indigo-500 font-mono text-sm font-bold self-start md:self-auto">
                  {exp.duration}
                </span>
              </div>

            
              <ul className="space-y-4 mb-10">
                {exp.descriptionPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 leading-relaxed text-lg">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(79,70,229,0.6)]" />
                    {point}
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}