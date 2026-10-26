import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import CurrentLearning from "./components/CurrentLearning";
import Experience from "./components/Experience"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CurrentLearning />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

export default App