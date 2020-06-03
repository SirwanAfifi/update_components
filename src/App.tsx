import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  const [name, setName] = useState("Sirwan");
  useEffect(() => {}, []);

  return <h1>Hello {name}</h1>;
};

export default App;
