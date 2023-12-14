// I M P O R T:   F I L E S
import "../styles/welcome.css";

// I M P O R T:   P A C K A G E S
import { useContext, useState } from "react";
import UserNameContext from "../context/UserNameContext.jsx";

// I M P O R T:   F U N C T I O N S

// C O D E
const Welcome = () => {
  const [userName, setUserName] = useContext(UserNameContext);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName(inputValue);
    setInputValue("");
  };

  return (
    <>
      {inputValue || userName ? (
        <p>{`Welcome, ${inputValue ? inputValue : userName}!`}</p>
      ) : (
        <></>
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Your name: </label>
        <input
          type="text"
          id="username"
          name="username"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Welcome;
