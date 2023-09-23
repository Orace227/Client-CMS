import whyChooseUsImage from "../../Assests/tourist.png"; // Import your image
import React from "react";
import { Grid, Typography, Card, CardContent, CardMedia } from "@mui/material";

const WhyChooseUs = () => {
  return (
    <section className=" py-16 m-4">
      <div className="container mx-auto">
        <div className="lg:flex lg:justify-around lg:ml-[420px]">
          <Typography className="mb-4 ">
            <div className="text-4xl font-bold">Why Choose Us</div>
            <div className="text-md text-gray-500 w-[340px] mb-5 sm:w-[300px] md:w-[392px] font-light">
              Enjoy different experiences in every place you visit & discover
              new and affordable adventures of course.{" "}
            </div>
          </Typography>
        </div>
        <Grid container spacing={2}>
          {/* Image */}
          <Grid xs={12} sm={6} className="flex justify-center">
            <img
              className=" h-[300px] sm:h-[380px] md:h-[460px] lg:h-[450px] lg:-mt-14"
              alt="Why Choose Us"
              src={whyChooseUsImage}
            />
          </Grid>

          {/* Reasons */}
          <Grid item xs={12} sm={6}>
            <div className="grid gap-4 sm:-mt-32 md:m-0">
              {/* Reason 1 */}
              <Card>
                <CardContent>
                  <Typography gutterBottom>
                    <div className="text-xl font-bold md:text-3xl">
                      Quality Service
                    </div>
                  </Typography>
                  <Typography>
                    <div className="text-md text-gray-500 ">
                      We are dedicated to providing high-quality service to our
                      customers. Your satisfaction is our priority.
                    </div>
                  </Typography>
                </CardContent>
              </Card>

              {/* Reason 2 */}
              <Card>
                <CardContent>
                  <Typography>
                    <div className="text-xl font-bold md:text-3xl">
                      Expert Team
                    </div>
                  </Typography>
                  <Typography>
                    <div className="text-gray-500 text-md">
                      Our team consists of experienced professionals who are
                      passionate about what they do.
                    </div>
                  </Typography>
                </CardContent>
              </Card>

              {/* Reason 3 */}
              <Card>
                <CardContent>
                  <Typography>
                    <div className=" text-xl font-bold md:text-3xl">
                      Custom Solutions
                    </div>
                  </Typography>

                  <Typography variant="body2">
                    <div className="text-gray-500 text-md">
                      We tailor our services to meet your specific needs,
                      providing customized solutions.
                    </div>
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default WhyChooseUs;
