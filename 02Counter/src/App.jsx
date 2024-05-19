import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);

  // let counter = 5;

  const addValue = () => {
    if (counter >= 20) {
      return;
    }
    setCounter(counter + 1);
  };
  const remValue = () => {
    if (counter <= 0) {
      return;
    }
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={remValue}>Remove value</button>
      <p>footer : {counter}</p>
    </>
  );
}

export default App;
