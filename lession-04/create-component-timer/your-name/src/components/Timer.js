import { useState, useEffect } from "react";

function Timer() {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    if (timer === 0) {
      alert("Time is up");
      clearInterval(countdown);
    }

    return () => clearInterval(countdown);
  }, [timer]);

  return <div>Count down from {timer}</div>;
}

export default Timer;
