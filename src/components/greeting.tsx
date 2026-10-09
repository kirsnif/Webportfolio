import Link from "next/link";

export default function Greeting() {
    return(
      <section className="flex flex-col-reverse items-center gap-10 py-20 md:flex-row md:justify-between">
        <div className="max-w-xl">
          <p className="text-violet-400">Application Developer Apprentice EFZ</p>
          <h1 className="mt-2 text-4xl font-bold md:text-6xl">
            Hi, I&apos;m Kiera
          </h1>
          <p className="mt-4 text-gray-400">
            smth about me 
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="/projects"
              className="rounded-lg bg-violet-500 px-5 py-3 font-semibold text-black hover:bg-violet-300"
            >
              View projects
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-white/20 px-5 py-3 hover:border-white/50"
            >
              Contact me
            </Link>
          </div>
        </div>

        <div className="flex h-64 w-64 items-center justify-center rounded-full border border-dashed border-white/30 text-gray-500">
          Photo
        </div>
      </section>
    );
}