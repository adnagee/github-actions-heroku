import React, { useState } from "react";
import "./App.css";
import { square } from "./helpers";

function App() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");

  const handleNumChange = (e) => {
    setNum(e.target.value);
  };

  const handleCalculate = () => {
    const n1 = parseFloat(num);
    setResult(square(n1));
  };

  return (
    <div className="App">
      <h1>Simple Calculator</h1>
      <div>
        <label htmlFor="num">Number</label>
        <input
          id="num"
          type="text"
          value={num}
          onChange={handleNumChange}
          placeholder="Number"
        />
        <br></br>

        <button onClick={handleCalculate}>Calculate Square</button>
      </div>
      <h2 id="result">{`Result: ${result}`}</h2>
    </div>
  );
}

export default App;
