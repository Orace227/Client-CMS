import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { useParams } from "react-router-dom";
import PackageDetails from "./PackageDetails";
import Accordion from "./Accordian";
export default function PackagePage() {
  const { packageId } = useParams();

  return (
    <>
      <NavBar />
      
      <div className="hidden md:block">
        <PackageDetails packageId={packageId} />
      </div>
      <div className="md:hidden flex justify-center m-3">
        <Accordion packageId={packageId} />;
      </div>
      <Footer />
    </>
  );
}
