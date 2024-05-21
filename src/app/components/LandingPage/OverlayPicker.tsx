/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./OverlayPicker.css";

export default function OverlayPicker() {
  const signs = [
    "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", 
    "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius"
  ];

  function handleClick(sign: string) {
    console.log("You clicked on" + sign); 
    localStorage.setItem("selectedStarsign", sign);

  }
  

  return (
    <div className="pie-chart">
        <img src="/birth-chart.png" alt="Background Image" className="background-image" />
        {signs.map((sign, index) => (
          <div key={index} className={`slice slice-${index + 1}`}>
            <button onClick={() => handleClick(sign)} className="starsign">{sign}</button>           
          </div>
        ))}
    </div>
  );
}

