import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import Counter from "./components/Counter";
import MessageForm from "./components/MessageForm";
import TodoList from "./components/TodoList";

function Home() {
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

      <MessageForm />

      <TodoList />
    </div>
  );
}

function AboutPage() {
  return (
    <div className="page">
      <h1>About Me</h1>
      <p>
        I am a Computer Science student and Frontend Development Intern.
      </p>
      <p>
        I am learning React and Frontend Development to improve my skills.
      </p>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="page">
      <h1>Contact Me</h1>
      <p>You can contact me for frontend development opportunities.</p>

      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;