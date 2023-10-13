import React, { useEffect, useState } from "react";
import "./Package.css"; // Import your CSS file for styling
import axios from "axios";
import TravelInquiryForm from "./TravelInquiryForm";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function PackageDetails(props) {
  const [hoverDiv, setHoverDiv] = useState(0);
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
      const PackageData = res.data.allPackages.map((Package) => ({
        ...Package,
        packageImgPath: `http://localhost:7000/${Package.packageImgPath.replace(
          "\\",
          "/"
        )}`,
      }));
      // const PackageData = res.data.allPackages.map((Package) => ({
      //   ...Package,
      //   packageImgPath: `https://travelling-cms-backend.onrender.com/${Package.packageImgPath.replace(
      //     "\\",
      //     "/"
      //   )}`,
      // }));
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
  }, []);

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
          className={`nav-toggle m-3 relative md:hidden `}
          onClick={toggleMobileNav}
        >
          <i className="fa fa-bars absolute right-4 my-1 cursor-pointer ">
            {showMobileNav ? (
              <XMarkIcon className="h-7 w-7" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-7 w-7" strokeWidth={2} />
            )}
          </i>
        </div>
        <nav className="nav-container mt-7">
          <div
            className={` hidden gap-7 md:flex md:flex-row ${
              showMobileNav ? "show" : ""
            }`}
          >
            <div
              className={`nav-item ${hoverDiv === 0 ? "active" : ""}`}
              onClick={() => handleButtonClick(0)}
            >
              Tour Details
            </div>
            <div
              className={`nav-item ${hoverDiv === 1 ? "active" : ""}`}
              onClick={() => handleButtonClick(1)}
            >
              Inclusions & Exclusions
            </div>
            <div
              className={`nav-item ${hoverDiv === 2 ? "active" : ""}`}
              onClick={() => handleButtonClick(2)}
            >
              Terms & Conditions
            </div>
            <div
              className={`nav-item md:hidden ${hoverDiv === 3 ? "active" : ""}`}
              onClick={() => handleButtonClick(3)}
            >
              Enquiry
            </div>
          </div>
        </nav>
      </header>
      <div className="relative">
        <div
          className={`hidden md:block z-50 md:fixed md:top-[520px] rounded-md md:right-6 bg-blue-900 text-white p-4 ${
            hoverDiv === 3 ? "active" : ""
          }`}
          onClick={() => handleButtonClick(3)}
        >
          Enquiry
        </div>
      </div>
      <section>
        <div className={`section-container ${hoverDiv === 0 ? "active" : ""}`}>
          <div className="content">
            {/* {console.log(Package[0].packageBody)} */}
            {Package[0]?.packageBody?.tourDetails?.map((tourDetail, index) => (
              <div key={index}>
                <div className="text-2xl ">
                  Day {tourDetail?.day} :{"  "} {tourDetail?.title}
                </div>
                <div
                  className="ml-8"
                  key={index}
                  dangerouslySetInnerHTML={{ __html: tourDetail.description }}
                />
                <br></br>
                {/* <div>{tourDetail?.description}</div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className={`section-container ${hoverDiv === 1 ? "active" : ""}`}>
          <div className="content">
            <h3 className="text-3xl mb-3">Inclusions</h3>
            <p>
              {Package[0]?.packageBody?.inclusionsAndExclusions?.inclusions.map(
                (inclusion, index) => (
                  <span key={index}>
                    <div className="ml-5  font-thin">
                      {index + 1}. {inclusion}
                    </div>
                  </span>
                )
              )}
            </p>

            <h3 className="text-3xl mt-5 mb-3">Exclusions</h3>
            <p>
              {Package[0]?.packageBody?.inclusionsAndExclusions?.exclusions.map(
                (exclusion, index) => (
                  <span key={index}>
                    <div className="ml-5">
                      {index + 1}. {exclusion}
                    </div>
                  </span>
                )
              )}
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className={`section-container ${hoverDiv === 2 ? "active" : ""}`}>
          <div className="content">
            <h3 className="text-3xl mb-3">Terms</h3>
            <p>
              {Package[0]?.packageBody?.termsAndConditions?.terms.map(
                (term, index) => (
                  <span key={index}>
                    <div className="ml-5 my-2">
                      {index + 1}. {"  "}
                      {term}
                      {/* <br /> */}
                    </div>
                  </span>
                )
              )}
            </p>

            <h3 className="text-3xl mt-7 mb-3">Conditions</h3>

            <p>
              {Package[0]?.packageBody?.termsAndConditions?.conditions.map(
                (condition, index) => (
                  <span key={index}>
                    <div className="ml-5 my-2">
                      {index + 1}. {"  "}
                      {condition}
                      {/* <br /> */}
                    </div>
                  </span>
                )
              )}
            </p>
          </div>
        </div>
      </section>

      <section>
        <div
          className={`section-container section-container-Inquiry ${
            hoverDiv === 3 ? "active " : ""
          }`}
        >
          <div className="content">
            <TravelInquiryForm packageId={props.packageId} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default PackageDetails;
