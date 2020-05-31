import React, { useState, useEffect } from "react";
import "./Slider.scss";

export const Slider = () => {
  const [state, setState] = useState({
    photos: [
      "/pictures/1.jpg",
      "/pictures/2.jpg",
      "/pictures/3.jpg",
      "/pictures/4.jpg",
      "/pictures/5.jpg",
    ],
    sliderWidth: 0,
    widthArray: [],
    lineWidth: 0,
    offset: 0,
    step: 0,
  });

  useEffect(() => {
    const line = document.querySelector(".Slider__line");
    const slides = document.querySelectorAll(".slide");
    const sliderWidth = document
      .querySelector(".Slider")
      .getBoundingClientRect().width;

    let widthArray = [];
    let lineWidth = 0;

    for (let i = 0; i < slides.length; i++) {
      //creates array with slides width
      const currElemWidth = sliderWidth > 580 ? 570 : 285;
      widthArray.push(currElemWidth);
      lineWidth += currElemWidth;
    }

    line.style.width = lineWidth + "px";

    setState((prev) => ({
      ...prev,
      widthArray,
      lineWidth,
      sliderWidth,
    }));
  }, []);

  const clickHandler = (direction) => {
    const stepOffset = direction === "right" ? 1 : -1;

    const { lineWidth, offset, widthArray, step, sliderWidth } = state;
    let nextStep = step + stepOffset;

    const restRight =
      lineWidth - (offset + sliderWidth + stepOffset * widthArray[step]);
    const restLeft = offset + stepOffset * widthArray[step];
    let newOffset = 0;

    if (restRight >= 0 && restLeft >= 0) {
      newOffset = offset + widthArray[nextStep] * stepOffset;
    } else if (restRight < 0) {
      newOffset = lineWidth - sliderWidth;
    } else if (restLeft < 0) {
      newOffset = 0;
    }

    if (nextStep >= widthArray.length) {
      newOffset = 0;
      nextStep = 0;
    }
    if (nextStep <= -1) {
      newOffset = lineWidth - sliderWidth;
      nextStep = 9;
    }

    setState((prev) => ({
      ...prev,
      offset: newOffset,
      step: nextStep,
    }));
  };

  const renderPhoto = () => {
    return state.photos.map((photo, index) => (
      <img
        className="slide"
        src={photo}
        alt={`${index}`}
        key={`${index}${Date.now()}`}
      />
    ));
  };

  return (
    <div className="Slider">
      <span
        onClick={clickHandler.bind(null, "left")}
        className="material-icons Slider__arrow arrow-left"
      >
        keyboard_arrow_left
      </span>
      <span
        onClick={clickHandler.bind(null, "right")}
        className="material-icons Slider__arrow arrow-right"
      >
        keyboard_arrow_right
      </span>

      <div style={{ left: `-${state.offset}px` }} className="Slider__line">
        {renderPhoto()}
        {renderPhoto()}
      </div>
    </div>
  );
};
