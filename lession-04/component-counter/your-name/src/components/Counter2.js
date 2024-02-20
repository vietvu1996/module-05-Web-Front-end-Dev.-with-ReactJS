import React from "react";
import UsedCounter from "../hooks/UsedCounter";

function Counter2() {
  const [count, increase] = UsedCounter(2);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increase}>Add 2</button>
    </div>
  );
}

export default Counter2;
