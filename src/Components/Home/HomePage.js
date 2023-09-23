import React from "react";
import NavBar from "../NavBar";
import CuratedDestinations from "./CuratedDestinations";
import WellnessResorts from "./WellnessResorts";

import Slider from "./Slider";
import Footer from "../Footer";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Slider />
      <CuratedDestinations Endpoint="GetCountries" />
      <WellnessResorts Endpoint="GetCountries" />
      <Footer />
    </>
  );
}
