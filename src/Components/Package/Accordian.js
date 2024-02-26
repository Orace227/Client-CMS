import React, { useEffect, useState } from "react";
import TravelInquiryForm from "./TravelInquiryForm";
import axios from "axios";

const Accordion = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [Package, setPackage] = useState([]);

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
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

      // const PackageData = res.data.allPackages.map((packageItem) => ({
      //   ...packageItem,
      //   packageImgPath: `https://travelling-cms-backend.onrender.com/${packageItem.packageImgPath.replace(
      //     "\\",
      //     "/"
      //   )}`,
      // }));
      const PackageData = res.data.allPackages.map((packageItem) => ({
        ...packageItem,
        packageImgPath: `https://admin.blueescapeholidays.com/api/${packageItem.packageImgPath.replace(
          "\\",
          "/"
        )}`,
      }));
      console.log(PackageData[0].packageBody.tourDetails);
      setPackage(PackageData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPackageDetails();
  }, []);
  console.log(Package);
  return (
    <div className="w-full max-w-md">
      <div className="header-image-container mb-10">
        <img
          src={Package[0]?.packageImgPath}
          className="header-image"
          alt="Tour"
        />
      </div>
      <div className="mb-4">
        <button
          onClick={() => toggleAccordion(1)}
          className="w-full flex items-center justify-between p-4 bg-gray-200 hover:bg-gray-300"
        >
          <span className="font-semibold">Tour Details</span>
          <svg
            className={`w-6 h-6 ${
              activeIndex == 1 ? "transform rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {activeIndex == 1 && (
          <div className="p-4 bg-white border">
            <div>
              <div className="">
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
          </div>
        )}
      </div>

      <div className="mb-4">
        <button
          onClick={() => toggleAccordion(2)}
          className="w-full flex items-center justify-between p-4 bg-gray-200 hover:bg-gray-300"
        >
          <span className="font-semibold">Inclusion And Exclusion</span>
          <svg
            className={`w-6 h-6 ${
              activeIndex == 2 ? "transform rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {activeIndex == 2 && (
          <div className="p-4 bg-white border">
            <div>
              <div>
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
          </div>
        )}
      </div>

      <div className="mb-4">
        <button
          onClick={() => toggleAccordion(3)}
          className="w-full flex items-center justify-between p-4 bg-gray-200 hover:bg-gray-300"
        >
          <span className="font-semibold">Terms And Conditions</span>
          <svg
            className={`w-6 h-6 ${
              activeIndex == 3 ? "transform rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {activeIndex == 3 && (
          <div className="p-4 bg-white border">
            <div>
              <div>
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
          </div>
        )}
      </div>

      <div className="mb-4">
        <button
          onClick={() => toggleAccordion(4)}
          className="w-full flex items-center justify-between p-4 bg-gray-200 hover:bg-gray-300"
        >
          <span className="font-semibold">Inquiry Form</span>
          <svg
            className={`w-6 h-6 ${
              activeIndex == 4 ? "transform rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {activeIndex == 4 && (
          <div className="p-4 bg-white border">
            <TravelInquiryForm packageId={"1234"} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
