import About from "./components/about";
import Skills from "./components/skills";
import Experiences from "./components/experiences";

export default function Home() {
  return (
    <main className="bg-white">
      <About />
      <Skills />
      <Experiences />
    </main>
  )
}
