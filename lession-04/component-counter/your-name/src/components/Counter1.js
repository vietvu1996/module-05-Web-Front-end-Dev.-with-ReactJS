import React from "react";
import UsedCounter from "../hooks/UsedCounter";

function Counter1() {
  const [count, increase] = UsedCounter(1);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increase}>Add 1</button>
    </div>
  );
}

export default Counter1;
