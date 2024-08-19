import About from "./components/About";
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
      <Projects/>
      
      <SocialMedia />
    </div>
  );
}

export default App;
