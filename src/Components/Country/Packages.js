import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
const Packages = () => {
  const [packages, setPackages] = useState([]);
  const { country } = useParams();

  const fetchCountries = async () => {
    try {
      // console.log(props.Endpoint);
      const response = await axios.get(`/GetPackages?country=${country}`);
      console.log("responce", response.data);
      // const allPackages = response.data.allPackages?.map((Package) => ({
      //   ...Package,
      //   packageImgPath: `http://localhost:7000/${Package.packageImgPath
      //     .replace("\\", "/")
      //     .replace(/\s+/g, "")}`,
      // }));
      const allPackages = response.data.allPackages?.map((Package) => ({
        ...Package,
        packageImgPath: `https://travelling-cms-backend.onrender.com/${Package.packageImgPath
          .replace("\\", "/")
          .replace(/\s+/g, "")}`,
      }));

      console.log(allPackages);
      setPackages(allPackages);
    } catch (error) {
      console.error("Error fetching packages:", error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div className="flex flex-wrap md:ml-16 md:mr-16">
      <div className="w-full text-2xl md:text-4xl flex justify-center font-bold text-blue-900">
        <h1>
          All Packages of {country.charAt(0).toUpperCase() + country.slice(1)}
        </h1>
      </div>

      {packages?.map((card) => (
        <div
          key={card._id}
          className="flex mt-8 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-4"
        >
          <div
            className="relative w-full h-64 bg-white rounded-lg shadow-xl p-4"
            style={{
              backgroundImage: `url(${card.packageImgPath})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2 className="text-3xl font-semibold w-[280px] truncate text-blue-900 absolute bottom-7">
              {card.packageName}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Packages;
