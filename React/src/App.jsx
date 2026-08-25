function App() {
  const name = "Nargis";
  const profession = "Computer Science Student";

  return (
    <div>
      <header>
        <h1>My Portfolio</h1>
        <p>Welcome to my portfolio.</p>
      </header>

      <section>
        <h2>About Me</h2>
        <p>My name is {name}.</p>
        <p>I am a {profession}.</p>
      </section>

      <section>
        <h2>My Skills</h2>
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>React</p>
      </section>

      <section>
        <h2>My Projects</h2>
        <p>Portfolio Website</p>
        <p>JavaScript Project</p>
      </section>
    </div>
  );
}

export default App;