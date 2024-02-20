import React, { useState } from "react";

function Calculator() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (operation) => {
    const num1 = parseInt(value1);
    const num2 = parseInt(value2);

    switch (operation) {
      case "+":
        setResult(num1 + num2);
        break;
      case "-":
        setResult(num1 - num2);
        break;
      case "*":
        setResult(num1 * num2);
        break;
      case "/":
        setResult(num1 / num2);
        break;
      default:
        setResult("");
    }
  };

  return (
    <div>
      <input
        type="number"
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
      />
      <input
        type="number"
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
      />
      <button onClick={() => calculate("+")}>+</button>
      <button onClick={() => calculate("-")}>-</button>
      <button onClick={() => calculate("*")}>*</button>
      <button onClick={() => calculate("/")}>/</button>
      <div>Result: {result}</div>
    </div>
  );
}

export default Calculator;
