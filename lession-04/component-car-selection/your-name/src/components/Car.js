import React, { useState } from "react";

const carList = ["Mercedes S600", "Volkswagen Viloran", "Tesla Model X"];
const colorList = ["Black", "Red", "White"];

function Car() {
  let [selectedCar, setSelectedCar] = useState({
    car: "",
    color: "",
  });

  const handleCarChange = (event) => {
    setSelectedCar((prevState) => {
      return { ...prevState, car: event.target.value };
    });
  };

  const handleColorChange = (event) => {
    setSelectedCar((prevState) => {
      return { ...prevState, color: event.target.value };
    });
  };

  return (
    <div>
      <h2>Select your car</h2>
      <div>
        Select a car
        <select onChange={handleCarChange}>
          {carList.map((car, index) => (
            <option key={index} value={car}>
              {car}
            </option>
          ))}
        </select>
      </div>
      <div>
        Select a color
        <select onChange={handleColorChange}>
          {colorList.map((color, index) => (
            <option key={index} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
      <p>
        You selected a {selectedCar.color} - {selectedCar.car}
      </p>
    </div>
  );
}

export default Car;
