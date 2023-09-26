import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import PackageOfCountry from "./PackageOfCountry";
import { useParams } from "react-router-dom";

export default function PackagesPage() {
  const { country } = useParams();
  return (
    <>
      <NavBar border="true"/>
      <PackageOfCountry link={country} />
      <Footer />
    </>
  );
}
