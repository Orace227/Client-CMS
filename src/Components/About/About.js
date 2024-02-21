// import React from "react";
import React, { useState, useEffect } from "react";
import "./About.css";
import Cap from "./img/Cap.png";
import Tourist from "./img/Tourist.png";
import SignBord from "./img/SignBoard.png";
import Map from "./img/Map.png";
import Hotel from "./img/Hotel.png";
import Itenaries from "./img/Itenaries.png";
import Road from "./img/Road.png";
import Transport from "./img/Transport.png";
import Traveller from "./img/Traveller.png";
import Expert from "./img/Expert.png";
import Hand from "./img/Handshake-removebg-preview.png";
import Plane from "./img/Plane-preview.png";
import Flex from "./img/flex.png";
import Hotline from "./img/Hotline.gif";
import Digital from "./img/Digital Dispatch.gif";
import Virtual from "./img/Virtual.gif";
import Social from "./img/Social.png";
import CupofTea from "./img/CupofTea.png";
import Feedback from "./img/Feedback.png";
import Hours from "./img/Hours-removebg-preview.png";
import Calendar from "./img/Calendar-removebg-preview.png";
import Sunday from "./img/Sunday-removebg-preview.png";
import Time from "./img/Time-removebg-preview.png";
import Call from "./img/call.png";
import FD from "./img/fb.png";
import Insta from "./img/Instagram.png";
import X from "./img/X-Logo.png";
// import Mail from "../img/Mail-removebg-preview (1).png";
import Location from "./img/Location-removebg-preview (1).png";

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const triggerOffset = window.innerHeight * 0.75; // Adjust this value as needed

      if (!isVisible && scrollTop > triggerOffset) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);
  return (
    <div className={`box ${isVisible ? "visible" : ""}`}>
      <div
        className="Page1 mx-6 lg:mx-20 flex flex-col justify-center  gap-6 "
        name="scroll-target"
      >
        <div className="lg:flex lg:gap-8 lg:justify-between mb-14 md:mb-4 ">
          <div className="">
            <div className="mt-10 lg:mt-16 flex left1 tracking-[2px] font-semibold mb-10">
              <span class="text-[7.6vw] rounded-full text-[#183B83] mr-6 border-l-4  border-[#183B83] py-2 lg:text-[3vw] animated-text4" />
              <h1 className="text-[5vw] text-[#183B83] font-semibold left1  tracking-[2px] lg:text-[2.1vw]">
                About Us
              </h1>
            </div>

            <div className="text-[10vw] lg:text-[5.5vw] mt-4  text-[#183B83] font-semibold ">
              <h1 className="mb-[-16px] up1 ">
                <img
                  src={Cap}
                  className="left animated-text  h-[%] w-[13%] z-10  ml-[-12px] mb-[-22px] min-[400px]:ml-[-16px] min-[400px]:mb-[-30px] min-[500px]:mb-[-36px] min-[650px]:ml-[-26px] min-[650px]:mb-[-44px] min-[750px]:mb-[-48px] min-[850px]:mb-[-50px]  relative  "
                  alt="logo"
                />
                Why
              </h1>
              <h1 className="up2 ">Blue Escape?</h1>
            </div>
            <div className="text-[5vw] lg:text-[2vw] text-[#183c83] font-semibold  lg:w-[550px]">
              {/* <p className="typewriter">
                Welcome,<span className="typewriter1"></span>
              </p> */}
              <p className="animated-text text-2xl">
                To the world of Blue Escape Holidays, where we transform your
                travel dreams into unforgettable realities.
              </p>
            </div>
            <div className=" animated-text mt-[5%] mb-10">
              <input
                type="button"
                value="LEARN MORE"
                className="bg-[#F2B725]   cursor-pointer shadow-md  tracking-[2px] lg:text-[1.3vw] rounded-full text-[3vw] text-[#183c83]  border-none font-semibold p-[2%] px-[5%] sm:p-[1%] sm:px-[4%] "
              />
            </div>
          </div>
          <div className="mt-[9%] lg:mt-[15%] xl:mt-[11%] 2xl:w-[55%] ">
            <div className="flex justify-center animated-text1 ">
              <img
                src={Tourist}
                className=" h-[56%]  w-[58%] ml-[px]  z-10 right  "
                alt="logo"
              />
              <img
                src={SignBord}
                className=" h-60%] w-[58%] ml-[-50px] left "
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="Page2 my-10 flex flex-col lg:flex-row  gap-6 lg:gap-10 max-w-[1025px] mx-auto max-[600px]:mx-6">
        <div className="text-[#183B83] flex flex-col justify-center p-5">
          <h2 className="text-[5vw] sm:text-[4vw] md:text-[3vw] lg:text-[2.5vw] xl:text-[2vw] font-semibold">
            At Blue Escape Holidays,
          </h2>
          <p className="text-[3vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.3vw]">
            we understand that discerning travelers seek more than just a
            vacation; they yearn for immersive experiences that touch the heart
            and soul.
          </p>
          <p className="text-[3vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.3vw]">
            That's why we specialize in crafting bespoke journeys across the
            globe, meticulously curated to cater to your every desire.
          </p>
        </div>
        <div className="right m-4 mt-8 flex justify-center">
          <img src={Map} alt="" />
        </div>
      </div>
      <div className="flex justify-center flex-wrap gap-6 2xl:gap-10 mx-6 mt-[-30px]  m-4">
        <div className="bg-[#183B83]  rounded-3xl text-white flex flex-col items-center text-center text-[3.2vw]    py-[30px] px-[10px] min-[450px]:text-[2.8vw] md:text-[1.8vw] lg:text-[1.3vw] xl:text-[1.2vw] 2xl:text-[1.1vw] gap-1 shadow-xl  animated-text ">
          <img src={Hotel} alt="" className="w-[19%] my-2" />
          <h1 className="font-semibold text-[3.5vw] min-[450px]:text-[3vw] md:text-[2.3vw] lg:text-[1.5vw] xl:text-[1.3vw] 2xl:text-[1.2vw]">
            HANDPICKED HOTELS
          </h1>
          <p className="w-[300px]  text-justify min-[450px]:w-[450px]  min-[650px]:w-[620px] md:w-[660px] lg:w-[380px] xl:w-[345px] xl:mx-2 2xl:w-[490px] 2xl:mx-3">
            Our commitment to excellence is evident in every facet of our
            service. We handpick hotels that are more than just places to stay;
            they are havens of luxury, comfort, and character. Each property is
            chosen with utmost care to ensure it aligns with your preferences,
            whether you seek opulence, serenity, or authenticity.
          </p>
        </div>

        <div className="bg-[#183B83]  rounded-3xl text-white flex flex-col items-center text-center text-[3.2vw]  py-[30px] px-[10px] min-[450px]:text-[2.8vw] md:text-[1.8vw] lg:text-[1.3vw] xl:text-[1.2vw] 2xl:text-[1.1vw] gap-1 shadow-xl  animated-text ">
          <img src={Expert} alt="" className="w-[12%] my-2 " />
          <h1 className="font-semibold text-[3.5vw] min-[450px]:text-[3vw] md:text-[2.3vw] lg:text-[1.5vw] xl:text-[1.3vw] 2xl:text-[1.2vw]">
            EXPERT GUIDES{" "}
          </h1>
          <p className="w-[300px]    text-justify min-[450px]:w-[450px]  min-[650px]:w-[620px] md:w-[660px]  lg:w-[380px]  xl:w-[345px] xl:mx-2 2xl:w-[490px] 2xl:mx-3">
            Our experienced guides are your local experts, passionate about
            sharing their knowledge and enthusiasm for the destinations we
            explore. They add depth and context to your journey, making each day
            an opportunity for discovery and enlightenment.
          </p>
        </div>

        <div className="bg-[#183B83]  rounded-3xl text-white flex flex-col items-center text-center text-[3.2vw]    py-[30px] px-[10px] min-[450px]:text-[2.8vw] md:text-[1.8vw] lg:text-[1.3vw] xl:text-[1.2vw] 2xl:text-[1.1vw] gap-1 shadow-xl  animated-text ">
          <img src={Transport} alt="" className="w-[24%] my-4 mt-6 " />
          <h1 className="font-semibold text-[3.5vw] min-[450px]:text-[3vw] md:text-[2.3vw] lg:text-[1.5vw] xl:text-[1.3vw] 2xl:text-[1.2vw]">
            BEST TRANSPORTATION
          </h1>
          <p className="w-[300px]  text-justify min-[450px]:w-[450px]  min-[650px]:w-[620px] md:w-[660px]      lg:w-[380px] xl:w-[345px] xl:mx-2 2xl:w-[490px] 2xl:mx-3">
            Efficiency and convenience are paramount when it comes to
            transportation. We take care of all the logistics, ensuring seamless
            transitions between destinations. Whether it's a private chauffeur,
            a scenic train ride, or a well-planned flight itinerary, you can
            trust us to get you where you want to go efficiently and
            comfortably.
          </p>
        </div>

        <div className="bg-[#183B83]  rounded-3xl text-white flex flex-col items-center text-center text-[3.2vw]   py-[30px] px-[10px] min-[450px]:text-[2.8vw] md:text-[1.8vw] lg:text-[1.3vw] xl:text-[1.2vw] 2xl:text-[1.1vw] gap-1 shadow-xl  animated-text  ">
          <img src={Flex} alt="" className="w-[95px] " />
          <h1 className="font-semibold text-[3.5vw] min-[450px]:text-[3vw] md:text-[2.3vw] lg:text-[1.5vw] xl:text-[1.3vw] 2xl:text-[1.2vw]">
            UNIQUE EXPERIENCES
          </h1>
          <p className="w-[300px]  text-justify min-[450px]:w-[450px]  min-[650px]:w-[620px] md:w-[660px]    min-[650px]:w-[620px]  lg:w-[380px] xl:w-[345px] xl:mx-2 2xl:w-[490px] 2xl:mx-3">
            At Blue Escape Holidays, we understand that no two travelers are
            alike, and no two vacations should be either. We pride ourselves on
            creating tailor-made experiences that reflect your unique interests
            and desires, ensuring that your journey is a reflection of your
            dreams and aspirations. With us, you're not just a traveler; you're
            an explorer, an adventurer, and a connoisseur of the world.
          </p>
        </div>

        <div className="bg-[#183B83]  rounded-3xl text-white flex flex-col items-center text-center text-[3.2vw] py-[30px] px-[10px] min-[450px]:text-[2.8vw] md:text-[1.8vw] lg:text-[1.3vw] xl:text-[1.2vw] 2xl:text-[1.1vw] gap-1 shadow-xl  animated-text ">
          <div className="flex flex-col items-center text-center z-10">
            <img src={Itenaries} alt="" className="w-[18%] my-2 " />
            <h1 className="font-semibold text-[3.5vw] min-[450px]:text-[3vw] md:text-[2.3vw] lg:text-[1.5vw] xl:text-[1.3vw] 2xl:text-[1.2vw]">
              THOUGHTFULL ITINERARIES
            </h1>
            <p className="w-[300px]  text-justify min-[450px]:w-[450px]  min-[650px]:w-[620px] md:w-[660px]     lg:w-[380px] xl:w-[345px] xl:mx-2 2xl:w-[490px] 2xl:mx-3">
              We believe that travel should be meaningful, leaving you with
              memories that last a lifetime. That's why our itineraries are
              thoughtfully designed to immerse you in the culture, history, and
              natural beauty of your chosen destination. Whether you're
              exploring ancient ruins, savoring local cuisine, or embarking on
              once-in-a-lifetime adventures, we ensure that every moment of your
              journey is rich in significance.
            </p>
          </div>
        </div>
        {/* <div className="flex justify-center z-[-1] ">
              <img
                src={Traveller}
                className=" w-[30vw] ml-[px]  z-10 rightTow  "
                alt="logo"
              />
              <img
                src={Road}
                className="  w-[30vw] ml-[-50px] leftTow "
                alt="logo"
              />
            </div> */}
      </div>

      <div className="my-[9%]  lg:hidden  lg:mt-[15%] xl:mt-[11%] 2xl:w-[55%] ">
        <div className="flex justify-center  ">
          <img
            src={Traveller}
            className=" w-[40vw] ml-[px]  z-10 right  "
            alt="logo"
          />
          <img src={Road} className="  w-[40vw] ml-[-50px] left " alt="logo" />
        </div>
      </div>

      <div className="page-4 flex flex-col justify-center text-center text-[#183c83]">
        <div className="flex flex-col p-5 md:grid md:grid-cols-2 justify-center text-[2.8vw] sm:text-[2.7vw] md:text-[2.6vw] lg:text-[2vw] xl:text-[1.1vw] mt-[-22px] sm:mt-10  xl:m-auto">
          <div className="text-white flex items-center my-1 mb-2 sm:mb-5 md:mb-10">
            <img
              src={Hours}
              alt=""
              className="w-[26%] sm:w-[20%] md:w-[100px] bg-white z-10 mr-2 md:ml-0"
            />
            <div className="z-0 bg-[#183B83] rounded-full flex items-center text-sm py-3 px-9 xl:text-lg">
              Hours Of Operation : **
            </div>
          </div>

          <div className="text-white flex items-center text-start">
            <img
              src={Calendar}
              alt=""
              className="w-[26%] sm:w-[20%] md:w-[100px] bg-white z-10 mr-3 md:ml-0"
            />
            <div className="z-0 bg-[#183B83] rounded-full flex text-sm items-center py-3 px-5 xl:text-lg">
              Monday to Friday: 10:00 AM - 7:00 PM (Local Time)
            </div>
          </div>

          <div className="text-white flex items-center my-1">
            <img
              src={Sunday}
              alt=""
              className="w-[26%] sm:w-[20%] md:w-[120px] md:-ml-4 bg-white z-10 mr-1"
            />
            <div className="z-0 bg-[#183B83] rounded-full flex text-sm items-center py-3 px-3 xl:text-lg">
              Sunday: Closed (Because even explorers need a day off!)
            </div>
          </div>

          <div className="text-white flex items-center">
            <img
              src={Time}
              alt=""
              className="w-[26%] sm:w-[20%] md:w-[100px] md:ml-0 bg-white z-10 mr-4"
            />
            <div className="z-0 bg-[#183B83] rounded-full text-sm flex items-center py-3 px-5 xl:text-lg">
              Saturday: 10:00 AM - 4:00 PM (Local Time)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
