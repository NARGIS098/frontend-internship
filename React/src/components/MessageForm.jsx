import { useState } from "react";

function MessageForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submittedMessage, setSubmittedMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmittedMessage(`${name} says: ${message}`);

    setName("");
    setMessage("");
  };

  return (
    <section className="message-form">
      <h2>Send Me a Message</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          type="text"
          placeholder="Your Message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />

        <button type="submit">Send Message</button>
      </form>

      {submittedMessage && (
        <p className="submitted-message">{submittedMessage}</p>
      )}
    </section>
  );
}

export default MessageForm;