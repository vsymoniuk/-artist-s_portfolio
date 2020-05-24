import React from "react";
import photo1 from "./photos/1.jpg";
import photo2 from "./photos/2.jpg";
import photo3 from "./photos/3.jpg";
import photo4 from "./photos/4.jpg";
import photo5 from "./photos/5.jpg";
import "./Slider.scss";

export class Slider extends React.Component {
  state = {
    line: null,
    slides: null,
    sliderWidth: 0,
    widthArray: [],
    offset: 0,
    step: 0,
  };

  componentDidMount() {
    const line = document.querySelector(".Slider__line");
    const slides = document.querySelectorAll(".slide");
    const sliderWidth = document
      .querySelector(".Slider")
      ?.getBoundingClientRect().width;
    let widthArray = [0];
    let lineWidth = 0;
    let offset = 0;
    let step = 0;

    console.log( slides[0].getAttribute('width') );
    
    for (let i = 0; i < slides.length; i++) {
      //creates array with slides width
      const currElemWidth = 570;
      widthArray.push(currElemWidth);
      lineWidth += currElemWidth;
    }

    line.style.width = lineWidth + "px";

    this.setState({
      line,
      slides,
      sliderWidth,
      widthArray,
      offset,
      step,
    });
  }

  clickHandler = () => {
    const newOffset = this.state.offset + this.state.widthArray[this.state.step];
    this.setState({
      offset: newOffset,
      step: this.state.step + 1,
    });
    console.log(this.state);
  };

  render() {
    return (
      <div onClick={this.clickHandler} className="Slider">
        <span className="material-icons Slider__arrow arrow-left">keyboard_arrow_left</span>
        <span className="material-icons Slider__arrow arrow-right">keyboard_arrow_right</span>
        <div
          style={{ left: `-${this.state.offset}px` }}
          className="Slider__line"
        >
          <img className="slide" src={photo1} alt="" />
          <img className="slide" src={photo2} alt="" />
          <img className="slide" src={photo3} alt="" />
          <img className="slide" src={photo4} alt="" />
          <img className="slide" src={photo5} alt="" />
        </div>
      </div>
    );
  }
}
