import Link from "next/link";

export default function Greeting() {
    return(
      <section className="flex flex-col-reverse items-center gap-10 py-15 md:flex-row md:justify-between">
        <div className="max-w-xl">
          <p className="text-violet-400">Application Developer Apprentice EFZ</p>
          <h1 className="mt-2 text-4xl font-bold md:text-6xl">
            Hi, I&apos;m Kiera
          </h1>
          <p className="mt-4 text-gray-400">
            Problem Solving | Connecting Ideas | Developing Solutions
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="/projects"
              className="flex-1 whitespace-nowrap rounded-lg bg-violet-500 px-4 py-3 text-center text-sm font-semibold text-black hover:bg-violet-300 sm:flex-none sm:px-5 sm:text-base"
            >
              View projects
            </Link>
            <Link
              href="/contact"
              className="flex-1 whitespace-nowrap rounded-lg border border-white/20 px-4 py-3 text-center text-sm hover:border-white/50 sm:flex-none sm:px-5 sm:text-base"
            >
              Contact me
            </Link>
          </div>
          <div className="mt-8 flex">
            <Link
              href="/contact"
              className="rounded-full border border-white/20 px-5 py-1 hover:border-white/50"
            >
              My CV
            </Link>
          </div>
        </div>
        <img src="/images/catSketch.jpg" alt="Profile picture" className="flex h-64 w-64 items-center justify-center rounded-full border border-dashed border-white/30 text-gray-500" />
      </section>
    );
}