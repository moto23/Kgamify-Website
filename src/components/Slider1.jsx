import React from "react";
import Slider from "react-slick";
import screen1 from "../assets/kgamify-screen1.png";
import screen2 from "../assets/kgamify-screen2.png";
import screen3 from "../assets/kgamify-screen3.png";
import screen4 from "../assets/kgamify-screen4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css" ; // Import custom CSS

const Slider1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  return (
    <Slider {...settings} className="gap-2 justify-between flex ">
      <div className="w-full  flex flex-col items-center justify-center">
        <img src={screen1} alt="image" className="img-fluid" />
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <img src={screen2} alt="image" className="img-fluid" />
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <img src={screen3} alt="image" className="img-fluid" />
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <img src={screen4} alt="image" className="img-fluid" />
      </div>
    </Slider>
  );
};

export default Slider1;