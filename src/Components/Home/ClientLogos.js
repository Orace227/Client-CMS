import React from "react";
import { Container, Typography } from "@mui/material";
import img1 from "../../Assests/client1.png";
import img2 from "../../Assests/client2.png";
import img3 from "../../Assests/client3.png";
import img4 from "../../Assests/client4.png";
import img5 from "../../Assests/client5.png";

const ClientLogos = () => {
  // Sample client logos (replace with your own)
  const clientLogos = [
    { name: "Client 1", imageUrl: img1 },
    { name: "Client 2", imageUrl: img2 },
    { name: "Client 3", imageUrl: img3 },
    { name: "Client 4", imageUrl: img4 },
    { name: "Client 5", imageUrl: img5 },
  ];

  return (
    <section className="bg-gray-200 py-5  pb-8">
      <Container>
        <Typography align="center" gutterBottom>
          <div className="p-4  text-2xl sm:text-3xl md:text-4xl ">
            Our Clients
          </div>
        </Typography>
        <div className="client-logos-container ">
          {clientLogos.map((client, index) => (
            <img
              className="client-logo1 mx-[10px] sm:mx-[5px] md:mx-[20px] lg:mx-[30px] w-[50px] sm:w-[100px] lg:w-[130px]"
              src={client.imageUrl}
              alt={client.name}
              key={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ClientLogos;
