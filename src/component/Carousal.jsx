import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../assets/carousel1.png";
import img2 from "../assets/carousel2.jpg";
import img3 from "../assets/carousel3.jpg";

const Carousal = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          style={{ height: "100vh", objectFit: 'cover' }}
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          style={{ height: "100vh", objectFit: 'cover' }}
          className="d-block w-100"
          src={img2}
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          style={{ height: "100vh", objectFit: 'cover' }}
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousal;
