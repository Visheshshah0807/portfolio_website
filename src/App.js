import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SocialMedia from "./components/SocialMedia";
import Home from "./Home";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Contact/>

      <SocialMedia />
    </div>
  );
}

export default App;
