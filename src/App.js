import { useState } from "react";
import "./App.css";

function App() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    age: undefined,
    email: "",
    newsletter: false,
  });

  function handleChange(event) {
    const { value, name, type } = event.target;
    if (type === "number") {
      setUserData({ ...userData, [name]: Number(value) });
    } else if (type === "text") {
      setUserData({ ...userData, [name]: value });
    } else if (type === "email") {
      setUserData({ ...userData, [name]: value });
    } else if (type === "checkbox") {
      setUserData({ ...userData });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (userData.age < 18) {
      console.log("only age over 18");
    } else {
      console.log("submitted");
      console.log(userData);
      setUserData({
        firstName: "",
        lastName: "",
        age: "",
        email: "",
        newsletter: false,
      });
    }
  }

  return (
    <div className="App">
      <h1>More USERS!</h1>
      <h2>Enter user credentials below:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">Name:</label>
        <input
          type="text"
          name="firstName"
          value={userData.firstName}
          onChange={handleChange}
        />
        <label htmlFor="lastName">Surname:</label>
        <input
          type="text"
          name="lastName"
          value={userData.lastName}
          onChange={handleChange}
        />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          name="age"
          value={userData.age}
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <div className="newsletter">
          <input type="checkbox" name="newsletter" onChange={handleChange} />
          <label htmlFor="newsletter">
            Yes, I would like many more emails!
          </label>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
