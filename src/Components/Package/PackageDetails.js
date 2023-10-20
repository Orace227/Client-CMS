import React, { useEffect, useState } from "react";
import "./Package.css";
import axios from "axios";
import TravelInquiryForm from "./TravelInquiryForm";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function PackageDetails(props) {
  const [hoverDiv, setHoverDiv] = useState(0);
  const [hoverInquiry, setHoverInquiry] = useState(true);
  const [Package, setPackage] = useState([]);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleButtonClick = (index) => {
    setHoverDiv(index);
    setShowMobileNav(false);
  };

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  const fetchPackageDetails = async () => {
    try {
      const res = await axios.get(`/GetPackages?PackageId=${props.packageId}`);
      console.log("package data", res.data);
      // const PackageData = res.data.allPackages.map((packageItem) => ({
      //   // Renamed to packageItem to avoid conflict
      //   ...packageItem,
      //   packageImgPath: `http://localhost:7000/${packageItem.packageImgPath.replace(
      //     "\\",
      //     "/"
      //   )}`,
      // }));

      const PackageData = res.data.allPackages.map((packageItem) => ({
        ...packageItem,
        packageImgPath: `https://travelling-cms-backend.onrender.com/${packageItem.packageImgPath.replace(
          "\\",
          "/"
        )}`,
      }));
      console.log(PackageData);
      setPackage(PackageData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    fetchPackageDetails();
  }, [props.packageId]); // Added props.packageId to dependency array

  return (
    <div className="package-details-container">
      <header>
        <div className="header-image-container">
          <img
            src={Package[0]?.packageImgPath}
            className="header-image"
            alt="Tour"
          />
        </div>
        <div
          className={`nav-toggle m-3 relative md:hidden border-black`}
          onClick={toggleMobileNav}
        >
          <button className="cursor-pointer">
            {" "}
            {/* Replaced <i> with <button> */}
            {showMobileNav ? (
              <XMarkIcon className="h-7 w-7" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-7 w-7" strokeWidth={2} />
            )}
          </button>
        </div>
        <nav className="nav-container mt-7">
          <div
            className={`hidden gap-1  md:flex md:flex-row w-full ${
              showMobileNav ? "show" : ""
            }`}
          >
            <div
              className={`nav-item rounded-t-md rounded-b-none  ${
                hoverDiv === 0 ? "active" : ""
              }`}
              onClick={() => handleButtonClick(0)}
            >
              Tour Details
            </div>
            <div
              className={`nav-item rounded-t-md rounded-b-none ${
                hoverDiv === 1 ? "active" : ""
              }`}
              onClick={() => handleButtonClick(1)}
            >
              Inclusions & Exclusions
            </div>
            <div
              className={`nav-item rounded-t-md rounded-b-none ${
                hoverDiv === 2 ? "active" : ""
              }`}
              onClick={() => handleButtonClick(2)}
            >
              Terms & Conditions
            </div>
            <div
              className={`nav-item xl:hidden mb-4 md:mb-0 rounded-t-md rounded-b-none ${
                hoverDiv === 3 ? "active" : ""
              }`}
              onClick={() => handleButtonClick(3)}
            >
              Enquiry
            </div>
          </div>
        </nav>
      </header>

      <div className="md:flex ">
        <div className="">
          <section>
            <div
              className={`section-container rounded-md ${
                hoverDiv === 0 ? "active" : ""
              }`}
            >
              <div className="content">
                {Package[0]?.packageBody?.tourDetails?.map(
                  (tourDetail, index) => (
                    <div key={index}>
                      <div className="text-2xl">
                        Day {tourDetail?.day} : {"  "} {tourDetail?.title}
                      </div>
                      <div
                        className="ml-8"
                        key={index}
                        dangerouslySetInnerHTML={{
                          __html: tourDetail.description,
                        }}
                      />
                      <br></br>
                    </div>
                  )
                )}
              </div>
            </div>
          </section>

          <section></section>
          <section></section>
          <section className=" xl:hidden">
            <div
              className={`section-container section-container-Inquiry ${
                hoverDiv === 3 ? "active " : ""
              }`}
            >
              <div
                className="content1"
                style={{ maxHeight: "100%", overflowY: "auto" }}
              >
                <TravelInquiryForm packageId={props.packageId} />
              </div>
            </div>
          </section>
        </div>
        <div>
          <section className="hidden xl:block Inquiry ">
            <div
              className={`section-container section-container-Inquiry   ${
                hoverInquiry === true ? "active " : ""
              }`}
            >
              <div className="content1" style={{ maxHeight: "100%" }}>
                <TravelInquiryForm packageId={props.packageId} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PackageDetails;
