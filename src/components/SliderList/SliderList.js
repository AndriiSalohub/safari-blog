import React from "react";
import Slider from "react-slick/lib/slider";
import { sliderArray } from "./sliderArray";
import "./SliderList.css";
export const SliderList = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="slider">
        <div className="slider-title-img">
          <img
            src="https://themes.muffingroup.com/be/safari2/wp-content/uploads/2019/04/squigly-line.png"
            alt=""
          />
        </div>
        <h3 className="slider-title">
          {" "}
          A LIST OF <br /> OUR NEWEST TRAVELS{" "}
        </h3>
        <Slider {...settings}>
          {sliderArray.map(({ src, title, id }) => (
            <div key={id} className="slider-item">
              <img src={src} alt="" className="slider-item-img" />
              <h3 className="slider-item-title"> {title} </h3>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
