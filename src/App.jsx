import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import MyProjects from "./components/MyProjects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {

  return (
    <>

      <Navbar />
      <div className="wrapper">

        <Hero />

        <div className="panel">

          <About />

          <Skills />

          <MyProjects />

          <Contact />

          <Footer />
        </div>

      </div>
    </>
  )
}

export default App
