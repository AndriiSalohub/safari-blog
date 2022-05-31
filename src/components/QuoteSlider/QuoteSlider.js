import React from "react";
import Slider from "react-slick/lib/slider";
import { quoteSliderArray } from "./quoteSliderArray";
import "./QuoteSlider.css";

export const QuoteSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <>
      <div className="quote-slider-container">
        <Slider {...settings}>
          {quoteSliderArray.map(({ id, img, description, name, tag }) => (
            <div key={id} className="quote-slider">
              <img src={img} alt="" className="quote-slider-img" />
              <p className="quote-slider-description">{description}</p>
              <div className="quote-slider-dots">
                <span className="quote-slider-dots-span"></span>
                <span className="quote-slider-dots-span"></span>
                <span className="quote-slider-dots-span"></span>
              </div>
              <p className="quote-slider-name"> {name} </p>
              <p className="quote-slider-tag"> {tag} </p>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
