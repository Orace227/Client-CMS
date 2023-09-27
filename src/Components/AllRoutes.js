import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Home/HomePage";
import CountryPage from "./Country/CountryPage";
import PackagePage from "./Package/PackagePage";
import PackagesPage from "./PackageOfCuntry/PackagePage";
import AboutPage from "./About/AboutPage";
export default function AllRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Countries" element={<CountryPage />} />
          <Route path="/Package/:packageId" element={<PackagePage />} />
          <Route path="/Packages/:country" element={<PackagesPage />} />
          <Route path="/AboutUs" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
