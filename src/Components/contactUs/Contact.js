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

function Contact() {
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
      {/* <div
        className="Page1 mx-6 lg:mx-20 flex flex-col justify-center  gap-6 "
        name="scroll-target"
      >
        <div className="lg:flex lg:gap-8 lg:justify-between mb-14 md:mb-4 ">
          <div className="">
            <div className="mt-10 lg:mt-16 flex left1 tracking-[2px] font-semibold mb-10">
              <span class="text-[7.6vw] rounded-full text-[#183B83] mr-6 border-l-4  border-[#183B83] py-2 lg:text-[3vw] animated-text4" />
              <h1 className="text-[5vw] text-[#183B83] font-semibold left1  tracking-[2px] lg:text-[2.1vw]">
                Contact Us
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
              <p className="typewriter">
                Welcome,<span className="typewriter1"></span>
              </p>
              <p className="animated-text ">
                to the world of Blue Escape Holidays, where we transform your
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
      </div> */}

      <div className="my-[9%]  hidden  lg:mt-[15%] xl:mt-[11%] 2xl:w-[55%] ">
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
        <div className="mx-[7%] sm:mx-[8%] md:mx-[8%] lg:mx-[6%]   ">
          <h1 className="font-bold text-[6.6vw] sm:text-[6.2vw] md:text-[6vw] lg:text-[5vw] xl:text-[4.7vw]  my-4 ">
            Contact Us
          </h1>
          <p className="text-[3vw]  sm:text-[2.9vw] md:text-[2.6vw] lg:text-[1.5vw] xl:text-[1.6vw] font-semibold my-2">
            We're delighted to help you plan your dream getaway. Whether you
            have questions, need assistance with your bookings, or just want to
            chat about travel, we're here for you.
          </p>
          <p className="text-[3.2vw] text-center sm:text-[3vw] md:text-[2.8vw] lg:text-[2vw] xl:text-[1.9vw] font-bold mb-10">
            Reach out to us using the following contact options:
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-5 mx-10  mb-10">
          <div className="rounded-3xl flex flex-col items-center  bg-[#F4F4F4] p-3 py-10">
            <div className="flex flex-col items-center ">
              <img
                src={Hotline}
                alt=""
                srcset=""
                className="w-[200px] min-[550px]:w-[250px]  min-[700px]:w-[270px] min-[920px]:w-[280px] lg:w-[282px] xl:w-[285px] "
              />
              <h3 className="font-semibold mb-1  text-[4.5vw] min-[550px]:text-[4.1vw]  min-[700px]:text-[3.8vw] min-[850px]:text-[2.7vw] lg:text-[2.2vw] xl:text-[1.9vw] 2xl:text-[1.7vw] ">
                Wanderlust Hotline
              </h3>
            </div>
            <div className="flex">
              <img
                src={Call}
                alt=""
                srcset=""
                className="h-[23px] mx-1 bg-[#F4F4F4]"
              />
              <p className="text-[3.7vw] flex  items-center mb-3  min-[550px]:text-[3.3vw]  min-[700px]:text-[3vw] min-[850px]:text-[2.2vw] min-[1024px]:text-[1.2vw] lg:text-[1.2vw] 2xl:text-[1.1vw]  font-semibold">
                Phone: +91 7600014939
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-[3.2vw] text-justify min-[550px]:text-[3vw]  min-[700px]:text-[2.6vw] min-[850px]:text-[2vw] lg:text-[1.5vw] xl:text-[1.1vw] flex items-center  w-[300px] min-[450px]:w-[350px] min-[550px]:w-[450px] min-[700px]:w-[550px]  min-[850px]:w-[650px] min-[920px]:w-[500px] lg:w-[350px] xl:w-[330px]  ">
                Our travel experts are just a phone call away, ready to assist
                you with any inquiries, booking requests, or travel advice you
                may need. Don't hesitate to give us a ring and let the adventure
                begin!
              </p>
            </div>
          </div>
          <div className="rounded-3xl flex flex-col   bg-[#F4F4F4] p-3 py-10">
            <div className="flex flex-col items-center ">
              <img
                src={Digital}
                alt=""
                srcset=""
                className="w-[200px] min-[550px]:w-[250px]  min-[700px]:w-[270px] min-[920px]:w-[280px] lg:w-[282px] xl:w-[285px] "
              />
              <h3 className="font-semibold mb-1  text-[4.5vw] min-[550px]:text-[4.1vw]  min-[700px]:text-[3.8vw] min-[850px]:text-[2.7vw] lg:text-[2.2vw] xl:text-[1.9vw] 2xl:text-[1.7vw] ">
                Digital Dispatch
              </h3>
            </div>
            <div className=" flex items-center justify-center">
              {/* <img
                src={Mail}
                alt=""
                srcset=""
                className="w-[24px] h-[23px]  bg-[#F4F4F4]  "
              /> */}
              <p className="text-[3.7vw] flex items-center  mb-3  min-[550px]:text-[3.3vw]  min-[700px]:text-[3vw] min-[850px]:text-[2.2vw] min-[1024px]:text-[1.5vw] lg:text-[1.1vw] xl:text-[1.2vw] 2xl:text-[1.1vw] font-semibold ">
                Email:
                <br />
                info@blueescapetravel.com
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-[3.2vw] text-justify min-[550px]:text-[3vw]  min-[700px]:text-[2.6vw] min-[850px]:text-[2vw] lg:text-[1.5vw] xl:text-[1.1vw] flex items-center  w-[300px] min-[450px]:w-[350px] min-[550px]:w-[450px] min-[700px]:w-[550px]  min-[850px]:w-[650px] min-[920px]:w-[500px] lg:w-[350px] xl:w-[330px]  ">
                Drop us an email anytime, day or night, and our team will get
                back to you promptly. Whether you're looking for detailed
                itineraries, destination recommendations, or just want to share
                your travel aspirations, our inbox is open 24/7.
              </p>
            </div>
          </div>
          <div className="rounded-3xl flex flex-col items-center  bg-[#F4F4F4] p-3 py-10">
            <div className="flex flex-col items-center ">
              <img
                src={Virtual}
                alt=""
                srcset=""
                className="w-[200px] min-[550px]:w-[250px]  min-[700px]:w-[270px] min-[920px]:w-[280px] lg:w-[200px] xl:w-[200px]  "
              />
              <h3 className="font-semibold mb-1  text-[4.5vw] min-[550px]:text-[4.1vw]  min-[700px]:text-[3.8vw] min-[850px]:text-[2.7vw] lg:text-[2.2vw] xl:text-[1.9vw] 2xl:text-[1.6vw]">
                Virtual Consultations
              </h3>
            </div>
            <div className="">
              <img src="" alt="" srcset="" className="" />
              <p className="text-[3.7vw] mb-3  min-[550px]:text-[3.3vw]  min-[700px]:text-[3vw] min-[850px]:text-[2.2vw] min-[1024px]:text-[1.2vw]  lg:text-[1vw]  2xl:text-[1vw] font-semibold">
                Video Call:
                <br /> Schedule a virtual consultation
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-[3.2vw] text-justify min-[550px]:text-[3vw]  min-[700px]:text-[2.6vw] min-[850px]:text-[2vw] lg:text-[1.5vw] xl:text-[1.1vw] flex items-center  w-[300px] min-[450px]:w-[350px] min-[550px]:w-[450px] min-[700px]:w-[550px]  min-[850px]:w-[650px] min-[920px]:w-[500px] lg:w-[350px] xl:w-[330px]  ">
                Want a face-to-face chat with one of our travel experts? We
                offer virtual consultations, so you can discuss your travel
                plans from the comfort of your own home. Schedule a video call,
                and we'll be there to assist you.
              </p>
            </div>
          </div>
          <div className="rounded-3xl flex flex-col items-center  bg-[#F4F4F4] p-3 py-10">
            <div className="flex flex-col items-center ">
              <img
                src={Social}
                alt=""
                srcset=""
                className="w-[200px] min-[550px]:w-[250px]  min-[700px]:w-[270px] min-[920px]:w-[280px] lg:w-[228px] xl:w-[225px] mb-5"
              />
              <h3 className="font-semibold mb-1  text-[4.5vw] min-[550px]:text-[4.1vw]  min-[700px]:text-[3.8vw] min-[850px]:text-[2.7vw] lg:text-[2.2vw] xl:text-[1.9vw] 2xl:text-[1.7vw]">
                Social Adventurers
              </h3>
            </div>
            <div className="">
              <p className="text-[3.7vw] mb-1  min-[550px]:text-[3.3vw]  min-[700px]:text-[3vw] min-[850px]:text-[2.2vw] min-[1024px]:text-[1.2vw] lg:text-[1.2vw] 2xl:text-[1vw]  font-semibold">
                Social Media: Connect
                <br /> with us on
              </p>
              <div className="flex justify-center gap-2 mb-3">
                <img src={FD} alt="" srcset="" className="w-[20px]" />
                <img src={Insta} alt="" srcset="" className="w-[20px]" />
                <img src={X} alt="" srcset="" className="w-[20px]" />
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-[3.2vw] text-justify min-[550px]:text-[3vw]  min-[700px]:text-[2.6vw] min-[850px]:text-[2vw] lg:text-[1.5vw] xl:text-[1.1vw] flex items-center  w-[300px] min-[450px]:w-[350px] min-[550px]:w-[450px] min-[700px]:w-[550px]  min-[850px]:w-[650px] min-[920px]:w-[500px] lg:w-[350px] xl:w-[330px]  ">
                Join our online community of fellow travelers, where you can
                find travel inspiration, tips, and engage in discussions about
                your favorite destinations. Follow us on social media to stay
                updated with the latest travel trends and promotions.
              </p>
            </div>
          </div>
          <div className="rounded-3xl flex flex-col items-center  bg-[#F4F4F4] p-3 py-10">
            <div className="flex flex-col items-center ">
              <img
                src={CupofTea}
                alt=""
                srcset=""
                className="w-[200px] min-[550px]:w-[250px]  min-[700px]:w-[270px] min-[920px]:w-[280px] lg:w-[282px] xl:w-[310px] mb-5 "
              />
              <h3 className="font-semibold mb-1  text-[4.5vw] min-[550px]:text-[4.1vw]  min-[700px]:text-[3.8vw] min-[850px]:text-[2.7vw] lg:text-[1.2vw] xl:text-[1.7vw] 2xl:text-[1.4vw]">
                Lets have a cup of <br />
                tea together
              </h3>
            </div>
            <div className="flex">
              <img src={Location} alt="" srcset="" className="h-[20px] " />
              <p className="ml-1 text-[3.6vw] mb-3  min-[550px]:text-[3.3vw]  min-[700px]:text-[2.9vw] min-[850px]:text-[2.2vw] min-[1024px]:text-[1.9vw] lg:text-[1.1vw] xl:text-[1.2vw] 2xl:text-[1vw] font-semibold">
                507, Chimanlal Girdharlal Rd, opp, Eventi,
                <br /> Lords Eco Inn Hotel, Navrangpura, <br />
                Ahmedabad Gujarat 380009
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-[3.2vw] text-justify min-[550px]:text-[3vw]  min-[700px]:text-[2.6vw] min-[850px]:text-[2vw] lg:text-[1.5vw] xl:text-[1.1vw] flex items-center  w-[300px] min-[450px]:w-[350px] min-[550px]:w-[450px] min-[700px]:w-[550px]  min-[850px]:w-[650px] min-[920px]:w-[500px] lg:w-[350px] xl:w-[330px]  ">
                If you prefer a more personal touch, feel free to visit our
                office. Our travel enthusiasts will be thrilled to meet you in
                person, share stories, and plan your next adventure together.
              </p>
            </div>
          </div>
          <div className="rounded-3xl flex flex-col items-center  bg-[#F4F4F4] p-3 py-10">
            <div className="flex flex-col items-center ">
              <img
                src={Feedback}
                alt=""
                srcset=""
                className="w-[200px] min-[550px]:w-[250px]  min-[700px]:w-[270px] min-[920px]:w-[280px] lg:w-[212px] xl:w-[230px] mb-5"
              />
              <h3 className="font-semibold mb-1  text-[4.5vw] min-[550px]:text-[4.1vw]  min-[700px]:text-[3.8vw] min-[850px]:text-[2.7vw] lg:text-[2.2vw] xl:text-[1.9vw] 2xl:text-[1.7vw]">
                Feedback
              </h3>
            </div>
            <div className="">
              <img src="" alt="" srcset="" className="" />
              <p className="text-[3.7vw] mb-3  min-[550px]:text-[3.3vw]  min-[700px]:text-[3vw] min-[850px]:text-[2.2vw] min-[1024px]:text-[1.3vw] lg:text-[1.3vw] 2xl:[1.1vw ] font-semibold">
                Share your thoughts
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-[3.2vw] text-justify min-[550px]:text-[3vw]  min-[700px]:text-[2.6vw] min-[850px]:text-[2vw] lg:text-[1.5vw] xl:text-[1.1vw] flex items-center  w-[300px] min-[450px]:w-[350px] min-[550px]:w-[450px] min-[700px]:w-[550px]  min-[850px]:w-[650px] min-[920px]:w-[500px] lg:w-[350px] xl:w-[330px]  ">
                Your feedback is invaluable to us. Whether you've already
                experienced a Blue Escape journey or just have suggestions to
                make our services even better, use our feedback portal to share
                your thoughts. We're always striving to improve.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col p-5 md:grid md:grid-cols-2 justify-center text-[2.8vw] sm:text-[2.7vw] md:text-[2.6vw] lg:text-[2vw] xl:text-[1.1vw] mt-[-22px] sm:mt-10  xl:m-auto">
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
        </div> */}
      </div>
    </div>
  );
}

export default Contact;
