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
      text: "In ac turpis justo. Vivamus auctor quam vitae odio feugiat pulvinar Vivamus auctor quam vitae odio feugiat pulvinar. Vivamus auctor quam vitae odio feugiat pulvinar. Vivamus auctor quam vitae odio feugiat pulvinar. Vivamus auctor quam vitae odio feugiat pulvinar.",
      img: img5,
    },
    // Add more testimonials here
  ];

  // Function to truncate text after a certain number of words
  const truncateText = (text, wordCount) => {
    const words = text.split(" ");
    if (words.length > wordCount) {
      return words.slice(0, wordCount).join(" ") + "...";
    }
    return text;
  };

  return (
    <div className="bg-gray-100 py-10 ">
      <div className="container mx-auto px-6">
        <section className="text-center ">
          <h2 className="text-5xl font-bold mb-12">Testimonials</h2>
          <Carousel
            showThumbs={false}
            showStatus={false}
            showArrows={true}
            autoPlay
            interval={2500}
            infiniteLoop
          >
            {testimonials.map((testimonial, index) => (
              <div className="flex justify-center">
                <div
                  key={index}
                  className="w-[500px] bg-white dark:bg-gray-700 p-6 rounded-lg"
                >
                  <div className="flex flex-col items-center justify-center">
                    <h5 className="text-4xl font-semibold">
                      {testimonial.name}
                    </h5>
                    <p className="text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                  <p className="text-gray-700 mb-5 dark:text-gray-300 mt-3">
                    {truncateText(testimonial.text, 15)}{" "}
                    {/* Truncate after 30 words */}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </section>
      </div>
    </div>
  );
}
