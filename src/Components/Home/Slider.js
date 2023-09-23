import { Carousel } from "@material-tailwind/react";
import img1 from "../../Assests/img1.jpg";
import img2 from "../../Assests/img2.jpg";
import img3 from "../../Assests/img3.jpg";
import img4 from "../../Assests/img4.jpg";

export default function Slider() {
  return (
    <Carousel className="">
      <img src={img1} alt="image 1" className="h-[610px] w-full object-cover" />
      <img src={img2} alt="image 2" className="h-[610px] w-full object-cover" />
      <img src={img3} alt="image 3" className="h-[610px] w-full object-cover" />
      <img src={img4} alt="image 4" className="h-[610px] w-full object-cover" />
    </Carousel>
  );
}
