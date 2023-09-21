import React from "react";
import Navbar from "../NavBar";
import CardSlider from "./CardSlider";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <CardSlider Endpoint="GetCountries" />
    </>
  );
}
