import Link from "next/link";

export default function GreetingPers() {
    return(
      <section className=" py-12 md:py-20">
        <div className="max-w-xl">
          <p className="text-violet-400">Beyond the code</p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl md:text-6xl">
            Get to know me
          </h1>
          <p className="mt-4 text-gray-400">
            Apprentice developer | Zürich based | English at home, German at work | always learning something new
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/"
              className="flex-1 whitespace-nowrap rounded-lg bg-violet-500 px-4 py-3 text-center text-sm font-semibold text-black hover:bg-violet-300 sm:flex-none sm:px-5 sm:text-base"
            >
              Professional
            </Link>
            <Link
              href="/contact"
              className="flex-1 whitespace-nowrap rounded-lg border border-white/20 px-4 py-3 text-center text-sm hover:border-white/50 sm:flex-none sm:px-5 sm:text-base"
            >
              Contact me
            </Link>
          </div>
        </div>
      </section>
    );
}