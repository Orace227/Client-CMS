import React from "react";
import NavBar from "../NavBar";
import Slider from "./Slider";
import Footer from "../Footer";
import WhyChooseUs from "./WhyChooseUs";
import ClientLogos from "./ClientLogos";
import AllCard from "./AllCard";
import Testimonials from "./Testimonials";
import WeOffer from "./WeOffer";
import "./global.css";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Slider />
      <AllCard packageType="destination" title="Curated Destinations" />
      <AllCard packageType="Wellness Resorts" title="Wellness Resorts" />
      <AllCard packageType="Cruise Vacations" title="Cruise Vacations" />

      <WhyChooseUs />
      <AllCard packageType="Wildlife Drives" title="Wildlife Drives" />
      <AllCard packageType="Sustainable paths" title="Sustainable Paths" />
      <WeOffer />
      <ClientLogos />
      <Testimonials />
      <Footer />
    </>
  );
}
