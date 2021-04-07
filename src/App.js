import "./App.css";
import { useState } from "react";

function App() {
  // Add states and eventHandlers here

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [checkbox, setCheckbox] = useState(true);

  function handleNameChange(event) {
    const newName = event.target.value;
    if (newName > 1) {
      window.alert("That name is too long, try again!");
    } else {
      setName(newName);
    }
  }

  function handleLastNameChange(event) {
    const newLastName = event.target.value;
    setLastName(newLastName);
  }

  function handleAgeChange(event) {
    const newAge = event.target.value;

    if (newAge < 18) {
      alert("age is too low!");
    } else {
      setAge(newAge);
    }
  }
  function handleEmailChange(event) {
    const newEmail = event.target.value;
    setEmail(newEmail);
  }

  function handleCheckboxChange(event) {
    const newCheckbox = event.target.value;
    console.log(newCheckbox);
    if (newCheckbox === true) {
      setCheckbox(true);
    } else if (newCheckbox === false) {
      setCheckbox(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    const form = event.target;
    console.log(name);
    console.log(lastName);
    console.log(age);
    console.log(email);
    console.log(checkbox);
    form.reset();
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
          onChange={handleNameChange}
          value={name}
        />
        <label htmlFor="lastName">Surname:</label>
        <input
          type="text"
          name="lastName"
          onChange={handleLastNameChange}
          value={lastName}
        />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          name="age"
          onChange={handleAgeChange}
          value={age}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          onChange={handleEmailChange}
          value={email}
        />
        <div className="newsletter">
          <input
            type="checkbox"
            name="newsletter"
            onChange={handleCheckboxChange}
            value={checkbox}
          />
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
