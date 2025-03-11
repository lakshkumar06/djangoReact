import React, { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    fetch("/api/message/")
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/message/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: inputMessage }),
    })
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  };

  return (
    <div>
      <h1>{message}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="message"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;