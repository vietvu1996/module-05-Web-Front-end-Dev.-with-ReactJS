import { useState } from "react";

function UsedCounter(addCount) {
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count + addCount);
  }

  return [count, increase];
}

export default UsedCounter;
