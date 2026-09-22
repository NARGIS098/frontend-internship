import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

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
import ProjectDetails from "./components/ProjectDetails";
import UsersPage from "./components/UsersPage";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    if (name.trim() === "") {
      setError("Please enter your name.");
      return;
    }

    if (email.trim() === "") {
      setError("Please enter your email.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }

    if (message.trim() === "") {
      setError("Please enter your message.");
      return;
    }

    setSuccess("Message sent successfully!");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="page">
      <h1>Contact Me</h1>

      <p>You can contact me for frontend development opportunities.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        ></textarea>

        <button type="submit">Send Message</button>
      </form>

      {error && <p>{error}</p>}

      {success && <p>{success}</p>}
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

        <Route path="/project/:id" element={<ProjectDetails />} />

        <Route path="/users" element={<UsersPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;