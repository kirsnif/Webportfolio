const skills = ["Python", "C#", "Blazor", "Next.js", "TypeScript", "SQL"];

export default function About(){
    return(
        <section className="py-12">
        <h2 className="text-2xl font-bold">About me</h2>
        <p className="mt-4 max-w-2xl text-gray-400">
          I love learning new things, which is why I chose software development.   
        </p>
        <ul className="mt-6 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-white/20 px-4 py-1 text-sm text-gray-300"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

    );
}