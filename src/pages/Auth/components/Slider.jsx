import React, { useRef } from "react";
import { Carousel, Typography } from "antd";
import rectangleSlide from "../../../assets/images/rectangle-slide.png";
import left from "../../../assets/images/icons/left.svg";
import right from "../../../assets/images/icons/right.svg";

const carousels = [
  {
    key: "slide_1",
    image: rectangleSlide,
    description:
      "Hỗ trợ đầy đủ toàn diện quá trình bán hàng, chăm sóc khách hàng và phát triển mạng lưới đại lý",
  },
  {
    key: "slide_2",
    image: rectangleSlide,
    description:
      "Hỗ trợ đầy đủ toàn diện quá trình bán hàng, chăm sóc khách hàng và phát triển mạng lưới đại lý",
  },
];
const Slider = () => {
  const carouselRef = useRef(null);

  return (
    <Carousel ref={carouselRef}>
      {carousels.map((i) => (
        <div key={i.key}>
          <div className="login__right__carosel">
            <div className="login__right__carosel__image">
              <img className="login__left__logo" src={i.image} />
              <div className="login__right__context">
                <Typography className="login__right__description">
                  {i.description}
                </Typography>
                <div className="login__right__event">
                  <div
                    onClick={() => carouselRef.current.prev()}
                    className="login__right__event__left"
                  >
                    <img src={left} />
                  </div>

                  <div
                    onClick={() => carouselRef.current.next()}
                    className="login__right__event__right"
                  >
                    <img src={right} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
