import useClock from "../hooks/useClock";
import "./Clock.css";

function MyClock() {
  const [time, ampm] = useClock();
  return (
    <div id="clock-style">
      {time}
      <span>{ampm}</span>
    </div>
  );
}

export default MyClock;
