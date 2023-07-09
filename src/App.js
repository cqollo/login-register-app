import React, { useState } from "react";
import "./App.css";
import Login from "./Login";
import Register from "./Register";

function App() {
  const [currentform, setCurrentform] = useState("login");
  const toggleForm = (formState) => {
    setCurrentform(formState);
  };

  return (
    <div className="App">
      {currentform === "login" ? (
        <Login onFormswitch={toggleForm} />
      ) : (
        <Register onFormswitch={toggleForm} />
      )}
    </div>
  );
}

export default App;
