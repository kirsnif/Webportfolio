import Link from "next/link";

export default function ContactCall(){
    return(
        <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">Let&apos;s talk</h2>
        <p className="mt-3 text-gray-400">
          What brought you here? I'd love to know!
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-lg bg-violet-500 px-6 py-3 font-semibold text-black hover:bg-violet-300"
        >
          Get in touch
        </Link>
      </section>
    );
}
