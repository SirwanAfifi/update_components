import React from "react";
import { useState, useEffect } from "react";
import { envService } from "./event";

const App = () => {
  const [name, setName] = useState("Sirwan");
  useEffect(() => {
    envService.on("change", () => {
      setName("Kaywan");
    });
  }, []);

  return <h1>Hello {name}</h1>;
};

export default App;
