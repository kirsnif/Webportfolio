import Timeline from "@/components/timeline";
import Greeting from "@/components/greeting";
import About from "@/components/about";
import ContactCall from "@/components/contactCall";
import SomeProjects from "@/components/someProjects";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6">
      <Greeting />
      <About />
      <SomeProjects />
      <Timeline />
      <ContactCall />
    </main>
  );
}