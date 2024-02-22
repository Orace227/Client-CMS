import React, { useEffect, useState } from "react";
import axios from "axios";
import { IconPlus, IconSend } from "@tabler/icons-react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const AllCard = (props) => {
  const [packages, setPackages] = useState([]);
  const [error, setError] = useState(null);

  const fetchPackages = async () => {
    try {
      const response = await axios.get(
        `/GetPackages?packageType=${props.packageType}&isLive=true&isShown=true`
      );
      // const allPackages = response.data.allPackages.map((Package) => ({
      //   ...Package,
      //   packageImgPath: `http://localhost:7000/${Package.packageImgPath.replace(
      //     "\\",
      //     "/"
      //   )}`,
      // }));
      // const allPackages = response.data.allPackages.map((Package) => ({
      //   ...Package,
      //   packageImgPath: `https://travelling-cms-backend.onrender.com/${Package.packageImgPath.replace(
      //     "\\",
      //     "/"
      //   )}`,
      // }));
      const allPackages = response.data.allPackages.map((Package) => ({
        ...Package,
        packageImgPath: `https://blueescapeholidays.com/${Package.packageImgPath.replace(
          "\\",
          "/"
        )}`,
      }));
      setPackages(allPackages);
    } catch (error) {
      setError("Error fetching packages.");
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  const numPackagesToShow = 4;

  return (
    <div className="flex mt-16 flex-wrap md:ml-16 md:mr-16 mb-10">
      <div className="w-full flex">
        <div className="w-[300px]">
          <div className="ml-3 w-[160%] text-3xl md:text-4xl flex justify-start font-bold">
            <h1 className="">{props.title}</h1>
          </div>
          <div
            className="ml-4 mt-1 text-gray-500 w-[200px] md:w-[400px]"
            style={{ lineHeight: "1.2" }}
          >
            <span>Vacations to make your experience enjoyable!</span>
          </div>
        </div>
        <div className=" w-full flex justify-end items-end">
          <Link to={`/Countries`}>
            <button className="hover:bg-blue-800 mr-4 hover:text-white text-black font-bold my-2 py-2 px-1 rounded flex items-center">
              {"Explore More"}
              <IconPlus size={20} />
            </button>
          </Link>
        </div>
      </div>

      {packages.length === 0 && !error ? (
        <div className="mt-auto mx-auto">
          <p className="text-center text-xl font-bold my-10">
            No packages available at the moment.
          </p>
        </div>
      ) : (
        <Grid container spacing={3}>
          {packages.slice(0, numPackagesToShow).map((card) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={card._id} className="">
              <Card
                className="mt-4 ml-5 mr-3 sm:ml-2 sm:mr-2 "
                style={{
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                  width: "auto",
                  borderRadius: "21px",
                }}
              >
                <Link to={`/Package/${card.PackageId}`} className="">
                  <CardMedia
                    style={{ height: "170px" }}
                    component="img"
                    alt={card.packageName}
                    image={card.packageImgPath}
                  />
                  <CardContent>
                    <Typography component="div">
                      <div className="font-bold text-2xl text-[#183b83] Card-title text-center ">
                        {card.packageName}
                      </div>
                    </Typography>
                    <Typography component="div">
                      <div className="flex justify-center ">
                        <div className=" w-[160px] truncate  text-[#183b83] font-light Card-desc">
                          {card.packageDesc}
                        </div>
                      </div>
                    </Typography>
                  </CardContent>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default AllCard;
