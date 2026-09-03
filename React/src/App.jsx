import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <Header />

      <About
        name="Nargis Sheikh"
        description="I am a Computer Science student and Frontend Development Intern."
      />

      <Skills />

      <Projects />

      <Contact />

      <Footer />
      
      <Counter />

    </div>
  );
}

export default App;