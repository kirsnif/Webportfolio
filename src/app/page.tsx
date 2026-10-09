import Projects from "@/components/projects"
import Timeline from "@/components/timeline";
import Greeting from "@/components/greeting";
import About from "@/components/about";
import ContactCall from "@/components/contactCall";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6">
      <Greeting />
      <About />
      <Projects />
      <Timeline />
      <ContactCall />
    </main>
  );
}