import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "static"
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "static"
      }}
      onClick={onClick}
    />
  );
}
export default class Carousel extends React.Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 2000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    let style = {
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    };
    return (
      <div className="sliderBox">
        <Slider {...settings} style={style}>
          <div className="sliderBox__item">
            <h3 className="sliderBox__item-subtitle">
              Lorem ipsum dolor sit amet
            </h3>
            <p className="sliderBox__item-paragraph">
              consectetur adipiscing elit. Pellentesque sed neque suscipit,
              egestas velit sed, suscipit lorem magna aliqua.
            </p>
          </div>
          <div className="sliderBox__item">
            <h3 className="sliderBox__item-subtitle">
              Lorem ipsum dolor sit amet
            </h3>
            <p className="sliderBox__item-paragraph">
              consectetur adipiscing elit. Pellentesque sed neque suscipit,
              egestas velit sed, suscipit lorem magna aliqua.
            </p>
          </div>
          <div className="sliderBox__item">
            <h3 className="sliderBox__item-subtitle">
              Lorem ipsum dolor sit amet
            </h3>
            <p className="sliderBox__item-paragraph">
              consectetur adipiscing elit. Pellentesque sed neque suscipit,
              egestas velit sed, suscipit lorem magna aliqua.
            </p>
          </div>
        </Slider>
      </div>
    );
  }
}
