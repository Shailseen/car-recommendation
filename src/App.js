import "./styles.css";
import React, { useState } from "react";
// import ReactDOM from "react-dom";

const buttons = ["suvCar", "hatchBack", "sedan", "miniSuv"];

const car = {
  suvCar: {
    variants: [
      "Land Rover Defender",
      "Volvo XC90",
      "Thar Mahindra",
      "Tata harrier"
    ],
    rating: ["5*", "4.98*", "4.75*", "4.9*"]
  },
  hatchBack: {
    variants: ["Citroen C3", "Maruti suzuki swift", "Tata altroz"],
    rating: ["4.8*", "4*", "4.9*"]
  },
  sedan: {
    variants: ["Hyundai elantra", "Skoda Octovia", "Honda City"],
    rating: ["4.5*", "4.8*", "4.1*"]
  },
  miniSuv: {
    variants: ["Tata Nexon", "hyundai Venue", "Mahindra xuv300","Tata Punch"],
    rating: ["5*", "4.5*", "4.5*","4.5*"]
  }
};
export default function App() {
  const [carType, setCarType] = useState("suvCar");
  return (
    <div className="Apps">
      <div className="topsItems">
        <span className="car">CAR</span> Variants
        <p>
          <span className="first">SOME CAR VARIANTS</span>
          <span className="middle"> Which are best in</span>{" "}
          <span className="first">INDIA</span>
        </p>
      </div>
      <hr></hr>

      <main>
        <div className="firstColm">
          {buttons.map((item, index) => {
            return (
              <button
                className="buttons"
                key={index}
                onClick={() => setCarType(item)}
              >
                {item}
              </button>
            );
          })}
        </div>

        <div className="listArrangement">
          <ul>
            {car[carType].variants.map((item, index) => {
              return (
                <li key={index}>
                  {item}
                  <span> {car[carType].rating[index]} </span>
                </li>
              );
            })}
          </ul>
          <small>
            Note: * Are rating give under overall <strong>5.</strong>
          </small>
        </div>
      </main>
    </div>
  );
}
