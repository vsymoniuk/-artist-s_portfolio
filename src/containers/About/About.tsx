import React from "react";
import image from './images/1.jpg'

export default function About() {
  return (
    <div className="parallax-container">
      <div className="parallax">
        <img src={image} />
      </div>
    </div>
  );
}
