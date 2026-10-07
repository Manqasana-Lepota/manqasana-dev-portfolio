import Navbar from "./components/Navbar"

function App() {

  return (
    <>
     <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
    <h1 className="text-5xl font-bold">
      Manqasana Lepota
    </h1>

   </div>

   <Navbar />

   <main>
    <section id="home" className="min-h-screen">
      <h1>Home</h1>
    </section>

    <section id="about" className="min-h-screen">
      <h1>About</h1>
    </section>

    <section id="skills" className="min-h-screen">
      <h1>Skills</h1>
    </section>

    <section id="projects" className="min-h-screen">
      <h1>Projects</h1>
    </section>

    <section id="contact" className="min-h-screen">
      <h1>Contact</h1>
    </section>
   </main>
    </>
  
  )
}

export default App
