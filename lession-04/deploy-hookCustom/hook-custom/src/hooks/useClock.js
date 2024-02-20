import { useState } from "react";

export default function useClock() {
  const [time, setTime] = useState("");
  const [ampm, setAmpm] = useState("");

  const updateTime = function () {
    let dateInfo = new Date();
    let hour = 0;

    if (dateInfo.getHours() === 0) {
      hour = 12;
    } else if (dateInfo.getHours() > 12) {
      hour = dateInfo.getHours() - 12;
    } else {
      hour = dateInfo.getHours();
    }

    let minute =
      dateInfo.getMinutes() < 10
        ? parseInt("0" + dateInfo.getMinutes())
        : dateInfo.getMinutes();

    let second =
      dateInfo.getSeconds() < 10
        ? "0" + dateInfo.getSeconds()
        : dateInfo.getSeconds();

    let ampm = dateInfo.getHours() <= 12 ? "AM" : "PM";

    setAmpm(ampm);
    setTime(`${hour}: ${minute}: ${second}`);
  };

  setInterval(function () {
    updateTime();
  }, 1000);

  return [time, ampm];
}
