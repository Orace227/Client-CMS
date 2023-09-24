import React, { useEffect, useState } from "react";
import "./Package.css"; // Import your CSS file for styling
import axios from "axios";

function PackageDetails(props) {
  const [hoverDiv, setHoverDiv] = useState(0);
  const [Package, setPackage] = useState([]);

  const handleButtonClick = (index) => {
    setHoverDiv(index);
  };

  const fetchPackageDetails = async () => {
    try {
      const res = await axios.get(`/GetPackages?PackageId=${props.packageId}`);
      console.log("package data", res.data);
      // const PackageData = res.data.allPackages.map((Package) => ({
      //   ...Package,
      //   packageImgPath: `http://localhost:7000/${Package.packageImgPath.replace(
      //     "\\",
      //     "/"
      //   )}`,
      // }));
      const PackageData = res.data.allPackages.map((Package) => ({
        ...Package,
        packageImgPath: `https://travelling-cms-backend.onrender.com/${Package.packageImgPath.replace(
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
    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth",
    // });
    fetchPackageDetails();
  }, []);

  return (
    <div className="package-details-container">
      <header>
        <div className="header-image-container ">
          <img
            src={Package[0]?.packageImgPath}
            className="header-image"
            alt="Tour"
          />
        </div>
        <nav className="nav-container mt-5">
          <div className="nav-items">
            <div
              className={`nav-item ${
                hoverDiv === 0 ? "active" : ""
              } hover:cursor-pointer`}
              onClick={() => handleButtonClick(0)}
            >
              Tour Details
            </div>
            <div
              className={`nav-item ${
                hoverDiv === 1 ? "active" : ""
              } hover:cursor-pointer`}
              onClick={() => handleButtonClick(1)}
            >
              Inclusions & Exclusions
            </div>
            <div
              className={`nav-item ${
                hoverDiv === 2 ? "active" : ""
              } hover:cursor-pointer`}
              onClick={() => handleButtonClick(2)}
            >
              Terms & Conditions
            </div>
            <div
              className={`nav-item ${
                hoverDiv === 3 ? "active" : ""
              } hover:cursor-pointer`}
              onClick={() => handleButtonClick(3)}
            >
              Enquiry
            </div>
          </div>
        </nav>
      </header>
      <section>
        <div className={`section-container ${hoverDiv === 0 ? "active" : ""}`}>
          <div className="content">
            {Package[0]?.packageBody?.tourDetails?.map((tourDetail, index) => (
              <div key={index}>
                <div className="text-2xl mb-2">
                  {`day ${index + 1}`} : {"  "}
                  <span>{tourDetail.title}</span>
                </div>
                <p className="ml-5 mb-5"> {tourDetail.description}</p>
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
    </div>
  );
}

export default PackageDetails;
