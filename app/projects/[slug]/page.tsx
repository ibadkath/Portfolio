// import { client } from "@/sanity/lib/client";
// import { PROJECT_SINGLE_QUERY } from "@/sanity/lib/queries";
// import { PortableText } from "@portabletext/react";
// import Image from "next/image";
// import Link from "next/link";

// // Next.js 15 requires params to be treated as a Promise
// export default async function ProjectPage({ 
//   params 
// }: { 
//   params: Promise<{ slug: string }> 
// }) {
  
//   // 1. You MUST await the params object itself first
//   const resolvedParams = await params;
//   const slug = resolvedParams.slug;

//   // 2. Now pass that resolved slug to Sanity
//   const project = await client.fetch(PROJECT_SINGLE_QUERY, { slug });

//   if (!project) {
//     return (
//       <div className="py-24 text-center text-white">
//         <h1 className="text-2xl font-bold">Project not found</h1>
//         <Link href="/#projects" className="text-indigo-400 underline">Return Home</Link>
//       </div>
//     );
//   }

//   return (
//     <main className="min-h-screen pt-32 pb-24 px-6 bg-[#020617]">
//       <div className="container mx-auto max-w-4xl">
//         <Link href="/#projects" className="text-indigo-400 hover:text-indigo-300 mb-8 inline-block">
//           ← Back to Portfolio
//         </Link>
        
//         <h1 className="text-5xl font-extrabold text-white mb-8">{project.title}</h1>
        
//         <div className="aspect-video relative rounded-3xl overflow-hidden mb-12 border border-slate-800">
//           {project.image && (
//              <Image src={project.image} alt={project.title} fill className="object-cover" />
//           )}
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//           {/* Main Content */}
//           <div className="md:col-span-2 prose prose-invert prose-indigo max-w-none text-slate-300">
//             <PortableText value={project.content} />
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-8">
//             <div>
//               <h3 className="text-white font-bold mb-4">Technologies</h3>
//               <div className="flex flex-wrap gap-2">
//                 {project.technologies?.map((tech: string) => (
//                   <span key={tech} className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-sm text-indigo-400 font-medium">
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             <div className="flex flex-col gap-4">
//               {project.liveUrl && (
//                 <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="w-full text-center py-3 bg-indigo-600 rounded-xl font-bold text-white hover:bg-indigo-500 transition-all">
//                   View Live Site
//                 </a>
//               )}
//               {project.github && (
//                 <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-full text-center py-3 bg-slate-800 rounded-xl font-bold hover:bg-slate-700 transition-all text-slate-300">
//                   GitHub Repository
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

import { client } from "@/sanity/lib/client";
import { PROJECT_SINGLE_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

const LAKEMINE_FALLBACK_PROJECT = {
  title: "Lakemine",
  slug: "lakemine",
  image: "/lakemine.png",
  introduction: "Databricks FinOps platform for reducing cloud waste",
  liveUrl: "https://lakemine.ai/",
  technologies: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "ShadCN UI", "Zod", "Resend", "API Integration", "Responsive Design"],
  content: [
    {
      _type: "block",
      style: "normal",
      children: [
        {
          _type: "span",
          text: "Lakemine is a Databricks FinOps platform that helps organizations identify and reduce unnecessary cloud costs by analyzing Databricks usage, workloads, and resource configurations. I contributed to the frontend by building responsive UI sections, implementing product pages and forms with Zod validation and Resend integration, improving mobile responsiveness and performance, and working on content-driven sections such as pricing, blogs, and Terms & Privacy pages.",
        },
      ],
      markDefs: [],
    },
  ],
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  let project = await client.fetch(PROJECT_SINGLE_QUERY, { slug });

  if (!project && slug === "lakemine") {
    project = LAKEMINE_FALLBACK_PROJECT;
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-[#020617]">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Project Not Found</h1>
          <Link href="/#projects" className="text-indigo-400 mt-4 block underline">Return Home</Link>
        </div>
      </div>
    );
  }

  const isLakemineProject = project.title === "Lakemine" || slug === "lakemine";
  const projectImage = isLakemineProject ? "/lakemine.png" : project.image;

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 bg-[#020617]">
      <div className="container mx-auto max-w-4xl">
        <Link href="/#projects" className="text-indigo-400 hover:text-indigo-300 mb-8 inline-flex items-center gap-2 transition-colors">
          <span>←</span> Back to Projects
        </Link>

        <div className="mb-8">
          <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">
            {project.title}: {project.introduction}
          </h1>
          {isLakemineProject && (
            <p className="text-lg font-medium text-indigo-400">Frontend Developer • Atompoint</p>
          )}
        </div>

        <div className="flex flex-wrap gap-4 mb-12">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/20"
            >
              <ExternalLink size={18} />
              Live Site
            </a>
          )}
          {!isLakemineProject && project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-slate-200 rounded-xl font-bold hover:bg-slate-700 transition-all border border-slate-700"
            >
              <Github size={18} />
              GitHub Repo
            </a>
          )}
        </div>

        <div className="aspect-video relative rounded-3xl overflow-hidden mb-16 border border-slate-800 shadow-2xl">
          {projectImage && (
            <Image 
              src={projectImage} 
              alt={project.title} 
              fill 
              className="object-cover"
              priority 
            />
          )}
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            Project Description
            <div className="h-px grow bg-slate-800"></div>
          </h2>
          <div className="prose prose-invert prose-indigo max-w-none text-slate-300 leading-7">
            <PortableText value={project.content || LAKEMINE_FALLBACK_PROJECT.content} />
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800">
          <h3 className="text-xl font-bold text-white mb-6">Technologies Used</h3>
          <div className="flex flex-wrap gap-3">
            {project.technologies?.map((tech: string) => (
              <div 
                key={tech} 
                className="px-4 py-2 bg-slate-900/50 border border-slate-800 text-indigo-400 rounded-xl text-sm font-semibold hover:border-indigo-500/30 transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}