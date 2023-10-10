import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";

const Packages = () => {
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    try {
      const response = await axios.get(`/GetCountries`);
      console.log("response", response.data);
      // const allCountries = response.data.allCountries?.map((country) => ({
      //   ...country,
      //   countryImgPath: `http://localhost:7000/${country.countryImgPath
      //     .replace("\\", "/")
      //     .replace(/\s+/g, "")}`,
      // }));

      const allCountries = response.data.allCountries?.map((country) => ({
        ...country,
        countryImgPath: `https://travelling-cms-backend.onrender.com/${country.countryImgPath
          .replace("\\", "/")
          .replace(/\s+/g, "")}`,
      }));
      // Sort the countries alphabetically by name
      const sortedCountries = allCountries.sort((a, b) => {
        return a.countryName.localeCompare(b.countryName);
      });

      console.log(sortedCountries);
      setCountries(sortedCountries);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  // Create an object to group countries by continent
  const countriesByContinent = {};
  countries.forEach((country) => {
    if (!countriesByContinent[country.continent]) {
      countriesByContinent[country.continent] = [];
    }
    countriesByContinent[country.continent].push(country);
  });

  return (
    <div className="flex  mb-10  flex-wrap md:ml-16 md:mr-16">
      <div className="w-full flex">
        <div className="w-full">
          <div className="ml-3 mt-5 text-4xl md:text-4xl flex justify-center font-bold">
            <h1>All Packages</h1>
          </div>
        </div>
      </div>

      {Object.keys(countriesByContinent).map((continent, index) => (
        <div key={continent} className="w-full mt-4 ">
          <Typography variant="h4" className="ml-2  mb-2">
            <div className="mt-10 ml-6">
              {index + 1}.{continent}
            </div>
          </Typography>
          <Grid container spacing={3}>
            {countriesByContinent[continent].map((country) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={country._id}>
                <Card
                  className="mt-4 ml-5 mr-5 sm:ml-2 sm:mr-2"
                  style={{
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    borderRadius: "21px",
                  }}
                >
                  <Link to={`/Packages/${country.countryName}`}>
                    <CardMedia
                      style={{ height: "180px" }}
                      component="img"
                      alt={country.countryImgPath}
                      image={country.countryImgPath}
                    />
                    <CardContent>
                      <Typography component="div">
                        <div className="font-bold  text-center  text-[#183b83] text-3xl Card-title">
                          {country.countryName}
                        </div>
                      </Typography>
                    </CardContent>
                  </Link>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      ))}
    </div>
  );
};

export default Packages;
