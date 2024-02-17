import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../Assests/herobanner1.jpg";
import img2 from "../../Assests/herobanner2.jpg";
import img3 from "../../Assests/herobanner3.jpg";
import img4 from "../../Assests/herobanner4.jpg";

export default function Slider() {
  return (
    <Carousel
      autoPlay
      interval={1500}
      infiniteLoop
      showThumbs={false}
      showArrows={true}
      showStatus={false}
    >
      <div>
        <img
          src={img1}
          alt="image 1"
          className="h-[710px] w-full object-cover"
        />
      </div>
      <div>
        <img
          src={img2}
          alt="image 2"
          className="h-[710px] w-full object-cover"
        />
      </div>
      <div>
        <img
          src={img3}
          alt="image 3"
          className="h-[710px] w-full object-cover"
        />
      </div>
      <div>
        <img
          src={img4}
          alt="image 4"
          className="h-[710px] w-full object-cover "
        />
      </div>
    </Carousel>
  );
}
