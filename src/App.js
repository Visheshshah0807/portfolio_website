import About from "./components/About";
import Navbar from "./components/Navbar";
import SocialMedia from "./components/SocialMedia";
import Home from "./Home";

function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      <SocialMedia/>
    </div>
  );
}

export default App;
