import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";

const LAKEMINE_FALLBACK_PROJECT = {
  _id: "lakemine-fallback",
  title: "Lakemine",
  slug: "lakemine",
  image: "/lakemine.png",
  introduction: "Databricks FinOps platform for reducing cloud waste",
  technologies: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "ShadCN UI", "Zod", "Resend", "API Integration", "Responsive Design"],
};

export default async function ProjectGrid() {
  const fetchedProjects = (await client.fetch(PROJECTS_QUERY)) || [];
  const projects = Array.isArray(fetchedProjects)
    ? [
        ...fetchedProjects.filter((project: any) => project?.slug !== "lakemine"),
        ...(fetchedProjects.some((project: any) => project?.slug === "lakemine") ? [] : [LAKEMINE_FALLBACK_PROJECT]),
      ]
    : [LAKEMINE_FALLBACK_PROJECT];

  if (!projects || projects.length === 0) {
    return (
      <section className="py-24 px-6 text-center">
        <p className="text-slate-500">No projects found. Add some in Sanity Studio!</p>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 container mx-auto" id="projects">
      <div className="mb-16">
        <h2 className="text-4xl font-extrabold text-white tracking-tight">
          Featured Work
        </h2>
        
        <p className="mt-6 text-slate-400 max-w-xl">
          A collection of projects built with modern technologies. Click any project to view full details.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project: any) => {
          const projectImage = project?.slug === "lakemine" ? "/lakemine.png" : project.image;

          return (
            <Link
              href={`/projects/${project.slug}`}
              key={project._id}
              className="group flex flex-col h-full rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm overflow-hidden transition-all hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2"
            >

              <div className="aspect-video relative overflow-hidden bg-slate-800">
                {projectImage ? (
                  <Image
                    src={projectImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-slate-500 italic">
                    Image coming soon
                  </div>
                )}
              </div>

            <div className="flex flex-col grow p-7">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies?.map((tech: string) => (
                  <span
                    key={tech}
                    className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-indigo-500/10 text-white border border-indigo-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold text-white mb-3  transition-colors">
                {project.title}: {project.introduction}
              </h3>

              <div className="flex items-center text-sm font-bold text-indigo-400 pt-4 border-t border-slate-800/50">
                View Project Details
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          </Link>
          );
        })}
      </div>
    </section>
  );
}