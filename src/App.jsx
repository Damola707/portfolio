import Header from "./components/header"
import Hero from "./components/hero"
import About from "./components/about"
import Experience from "./components/experience"
import Projects from "./components/projects"
import Contact from "./components/contact"

export default function App() {
  return (
    <main className="bg-deep text-mist antialiased scroll-smooth">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  )
}
