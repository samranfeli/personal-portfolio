import About from "./components/about";
import Skills from "./components/skills";
import Experiences from "./components/experiences";
import Projects from "./components/projects";
import Contact from "./components/contact";

export default function Home() {
  return (
    <main className="bg-white">
      <About />
      <Skills />
      <Experiences />
      <Projects />
      <Contact/>
    </main>
  )
}
