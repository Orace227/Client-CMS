import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { IconPlus } from "@tabler/icons-react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
} from "@mui/material";

const CruiseVacations = () => {
  const [showMore, setShowMore] = useState(false);
  const [packages, setPackages] = useState([]);

  const fetchPackages = async () => {
    try {
      const response = await axios.get(
        `/GetPackages?packageType=Cruise Vacations`
      );
    //   const allPackages = response.data.allPackages.map((Package) => ({
    //     ...Package,
    //     packageImgPath: `http://localhost:7000/${Package.packageImgPath.replace(
    //       "\\",
    //       "/"
    //     )}`,
    //   }));
      const allPackages = response.data.allPackages.map((Package) => ({
        ...Package,
        packageImgPath: `https://travelling-cms-backend.onrender.com/${Package.packageImgPath.replace(
          "\\",
          "/"
        )}`,
      }));
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
    <div className="flex mt-16 flex-wrap md:ml-16 md:mr-16">
      <div className="w-full flex">
        <div className="w-[300px]">
          <div className="ml-3 w-[160%] text-3xl md:text-4xl flex justify-start font-bold">
            <h1>Cruise Vacations</h1>
          </div>
          <div
            className="ml-4 mt-1 text-gray-500 w-[200px] md:w-[400px]"
            style={{ lineHeight: "1.2" }}
          >
            <span>Vacations to make your experience enjoyable!</span>
          </div>
        </div>
        <div className=" w-full flex justify-end items-end">
          <button
            onClick={() => setShowMore(!showMore)}
            className="hover:bg-blue-800 mr-4 hover:text-white text-black font-bold my-2 py-2 px-1 rounded flex items-center"
          >
            {showMore ? "Explore Less" : "Explore More"}
            <IconPlus size={20} />
          </button>
        </div>
      </div>

      <Grid container spacing={3}>
        {packages.slice(0, numPackagesToShow).map((card) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={card._id}>
            <Card
              className="mt-4 ml-5 mr-5 sm:ml-2 sm:mr-2"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
            >
              <CardMedia
                style={{ height: "200px" }}
                component="img"
                alt={card.packageName}
                image={card.packageImgPath}
              />
              <CardContent>
                <Typography component="div">
                  <div className="font-bold text-xl">{card.packageName}</div>
                </Typography>
                <Typography component="div">
                  <div className="text-gray-700 font-light">
                    {card.packageDesc}
                  </div>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CruiseVacations;
