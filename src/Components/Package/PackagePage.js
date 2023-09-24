import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { useParams } from "react-router-dom";
import PackageDetails from "./PackageDetails";
export default function PackagePage() {
  const { packageId } = useParams();
  return (
    <>
      <NavBar />
      <PackageDetails packageId={packageId} />

      <Footer />
    </>
  );
}
