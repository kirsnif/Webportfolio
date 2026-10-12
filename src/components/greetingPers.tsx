import Link from "next/link";

export default function GreetingPers() {
    return(
      <section className="flex flex-col-reverse items-center gap-10 py-20 md:flex-row md:justify-between">
        <div className="max-w-xl">
          <p className="text-violet-400">Beyond the code</p>
          <h1 className="mt-2 text-4xl font-bold md:text-6xl">
            Get to know me
          </h1>
          <p className="mt-4 text-gray-400">
            Apprentice developer | Zürich based | English at home, German at work | always learning something new
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="/"
              className="rounded-lg bg-violet-500 px-5 py-3 font-semibold text-black hover:bg-violet-300"
            >
              Professional
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-white/20 px-5 py-3 hover:border-white/50"
            >
              Contact me
            </Link>
          </div>
        </div>
      </section>
    );
}