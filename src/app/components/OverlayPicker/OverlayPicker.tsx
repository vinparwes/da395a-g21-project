/* eslint-disable @next/next/no-img-element */
import "./OverlayPicker.css";
import React from "react";
import StaggerText from "react-stagger-text";

interface OverlayPickerProps {
  setOpenModal: () => void;
}

const signs = [
  "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo",
  "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius"
];

export default function OverlayPicker({ setOpenModal: toggleModal }: OverlayPickerProps) {

  function handleClick(sign: string) {
    localStorage.setItem("selectedStarSign", sign);
    toggleModal();
  }

  return (
    <>
      <div id="wheel-container">
        <div className="stagger-text-container">
          <StaggerText staggerType="letter" staggerDuration={0.9} startDelay={0.6}>
            Choose your Sign...
          </StaggerText>

        </div>
        <div id="mobile-overlay-picker">
        {signs.map((sign, index) => (
          <button key={index} onClick={() => handleClick(sign)} className="starsign">{sign}</button>
        ))}
      </div>
        <div className="pie-chart">
          <img src="/birth-chart.png" alt="Background Image" className="background-image" />
          {signs.map((sign, index) => (
            <div key={index} className={`slice slice-${index + 1}`}>
              <button onClick={() => handleClick(sign)} className="starsign">{sign}</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
