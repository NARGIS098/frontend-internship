function ContactPage() {
  return (
    <section className="page">
      <h1>Contact Me</h1>

      <p>
        You can contact me for frontend development and other
        professional opportunities.
      </p>

      <form>
        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Your Email"
        />

        <textarea
          placeholder="Your Message"
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default ContactPage;