import React from "react";
import NavBar from "../NavBar";
import CuratedDestinations from "./CuratedDestinations";
import WellnessResorts from "./WellnessResorts";

import Slider from "./Slider";
import Footer from "../Footer";
import CruiseVacations from "./CruiseVacations";
import WhyChooseUs from "./WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Slider />
      <CuratedDestinations />
      <WellnessResorts />
      <CruiseVacations />
      <WhyChooseUs />
      <Footer />
    </>
  );
}
