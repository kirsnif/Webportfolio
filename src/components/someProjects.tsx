import ProjectCard from "./projectCard";
import { projects } from "./allProjects";

export default function SomeProjects(){
    return(
    <section className="py-12">
    <h2 className="text-2xl font-bold">Some of my projects</h2>
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {projects.slice(0, 3).map((project) => (
        <ProjectCard key={project.slug} project={project} />
    ))}
    </div>
    </section>
    );
}