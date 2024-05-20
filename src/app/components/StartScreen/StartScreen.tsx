import React from "react";
import "./StartScreen.css";

function StartScreen() {
  const signs = [
    "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", 
    "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
  ];

  return (
    <div className="pie-chart">
        <img src="/birth-chart.png" alt="Background Image" className="background-image" />
        {signs.map((sign, index) => (
          <div key={index} className={`slice slice-${index + 1}`}>
            <button className="starsign">{sign}</button>
          </div>
        ))}
    </div>
  );
}

export default StartScreen;
