function About({ name, description }) {
  return (
    <section id="about">
      <h2>About Me</h2>

      <h3>{name}</h3>

      <p>{description}</p>
    </section>
  );
}

export default About;