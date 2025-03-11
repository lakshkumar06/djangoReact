import React, { useState, useEffect } from "react";

function App() {
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  const [inputData, setInputData] = useState({
    name: "",
    username: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    fetch("/api/user/")
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/user/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputData),
    })
      .then((response) => response.json())
      .then((data) => setUserData(data));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  return (
    <div>
      <h1>User Data</h1>
      
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={inputData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={inputData.username}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={inputData.phoneNumber}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={inputData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={inputData.password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;