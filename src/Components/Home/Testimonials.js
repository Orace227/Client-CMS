import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../Assests/testimonial1.jpg";
import img2 from "../../Assests/testimonial2.jpg";
import img3 from "../../Assests/testimonial3.jpg";
import img4 from "../../Assests/testimonial4.jpg";
import img5 from "../../Assests/testimonial5.jpg";
export default function Testimonials() {
  // Sample testimonial data
  const testimonials = [
    {
      name: "Maria Kate",
      role: "Photographer",
      text: "In ac turpis justo. Vivamus auctor quam vitae odio feugiat pulvinar...",
      img: img1,
    },
    {
      name: "Maria Kate",
      role: "Photographer",
      text: "In ac turpis justo. Vivamus auctor quam vitae odio feugiat pulvinar...",
      img: img2,
    },
    {
      name: "Maria Kate",
      role: "Photographer",
      text: "In ac turpis justo. Vivamus auctor quam vitae odio feugiat pulvinar...",
      img: img3,
    },
    {
      name: "Maria Kate",
      role: "Photographer",
      text: "In ac turpis justo. Vivamus auctor quam vitae odio feugiat pulvinar...",
      img: img4,
    },
    {
      name: "Maria Kate",
      role: "Photographer",
      text: "In ac turpis justo. Vivamus auctor quam vitae odio feugiat pulvinar...",
      img: img5,
    },
    // Add more testimonials here
  ];

  return (
    <div className="container mt-16 mx-auto md:px-6">
      <section className=" text-center ">
        <h2 className="mb-12 text-3xl font-bold">Testimonials</h2>
        <Carousel
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          autoPlay
          interval={2500}
          infiniteLoop
        >
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <div className="w-[200px]  ml-24 sm:ml-[180px] md:ml-[240px] lg:ml-[370px] xl:ml-[540px]">
                <img
                  className="rounded-md "
                  src={testimonial.img}
                  alt="avatar"
                />
              </div>
              <div className="flex flex-wrap justify-center">
                <div className="w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
                  <h5 className="mb-2 text-lg font-bold">{testimonial.name}</h5>
                  <p className="mb-4 font-medium text-neutral-700 dark:text-neutral-400">
                    {testimonial.role}
                  </p>
                  <p className="mb-10 text-neutral-500 dark:text-neutral-300">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </section>
    </div>
  );
}
