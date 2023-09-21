import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const CardSlider = () => {
  const [showMore, setShowMore] = useState(false);
  const [packages, setPackages] = useState([]);

  const fetchPackages = async (props) => {
    try {
      const response = await axios.get(`/GetCountries`);
      // const allPackages = response.data.allCountries.map((Package) => ({
      //   ...Package,
      //   countryImgPath: `http://localhost:7000/${Package.countryImgPath.replace(
      //     "\\",
      //     "/"
      //   )}`, // Decode HTML entities
      // }));
      const allPackages = response.data.allCountries.map((Package) => ({
        ...Package,
        countryImgPath: `https://travelling-cms-backend.onrender.com/${Package.countryImgPath.replace(
          "\\",
          "/"
        )}`, // Decode HTML entities
      }));
      console.log(allPackages);
      setPackages(allPackages);
    } catch (error) {
      console.error("Error fetching packages:", error);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  const numPackagesToShow = showMore ? packages.length : 4;

  return (
    <div className="flex flex-wrap md:ml-16 md:mr-16">
      <div className="w-full text-2xl md:text-4xl flex justify-center font-bold text-blue-900">
        <h1>Countries</h1>
      </div>
      <div className="w-full mt-3 flex justify-end mr-4">
        <button
          onClick={() => setShowMore(!showMore)}
          className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-3 rounded"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
      {packages.slice(0, numPackagesToShow).map((card) => (
        <div
          key={card._id}
          className="flex mt-8 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-4"
        >
          <div
            className="relative w-full h-64 bg-white rounded-lg shadow-xl p-4"
            style={{
              backgroundImage: `url(${card.countryImgPath})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Link to={`/Countries/${card.countryName}`}>
              <h2 className="text-3xl font-semibold  text-blue-900 absolute bottom-7">
                {card.countryName}
              </h2>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSlider;
