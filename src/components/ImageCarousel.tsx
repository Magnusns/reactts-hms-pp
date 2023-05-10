// src/components/ImageSlider.js

import { useState } from "react";
// 1.
import Slider from "react-slick";
import { GrNext, GrPrevious } from "react-icons/gr";

import "./ImageCarouselle.css";

// 2.
const NextArrow = ({ onClick }: any) => {
  return (
    <div className="nextArrow" onClick={onClick}>
      <GrNext />
    </div>
  );
};

const PrevArrow = ({ onClick }: any) => {
  return (
    <div className="prevArrow" onClick={onClick}>
      <GrPrevious />
    </div>
  );
};

const ImageSlider = ({ images, slidesToShow = 3 }: any) => {
  // 3.
  const [imageIndex, setImageIndex] = useState(0);

  // 4.
  const settings = {
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 300,
    slidesToShow: slidesToShow,
    centerPadding: "0",
    swipeToSlide: true,
    focusOnSelect: true,
    nextArrow: <NextArrow onClick />,
    prevArrow: <PrevArrow onClick />,
    slidesToScroll: 1,

    beforeChange: (current: any, next: any) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // 5.
  const templateImages = images.map((image: any, idx: any) => {
    return (
      <div
        className={idx === imageIndex ? "activeSlide" : "slide"}
        key={image.id}
      >
        <div className="slideWrapper">
          {image.code ? (
            image.code
          ) : (
            <img className="slideimage" src={image.src} alt={image.alt} />
          )}
        </div>
        <button onClick={() => (window.location.href = image.url)}>
          {" "}
          Mer Info
        </button>
      </div>
    );
  });

  return <Slider {...settings}>{templateImages}</Slider>;
};

export default ImageSlider;
