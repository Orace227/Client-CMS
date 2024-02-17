import { Typography } from "@material-tailwind/react";
import logo from "../Assests/logo.png";
import { Link } from "react-router-dom";

const LINKS = [
  {
    items: [{ Destinations: "Destinations", link: "/Countries" }],
  },
  {
    items: [{ Destinations: "About Us", link: "/AboutUs" }],
  },
  {
    items: [{ Destinations: "Contact Us", link: "/ContactUs" }],
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-gray-200 p-4 md:p-10 relative w-full">
      <div className="mx-auto w-full max-w-7xl px-8 flex flex-wrap items-center justify-between">
        <div className="w-full md:w-auto mb-4 md:mb-0 md:mr-4">
          <Typography variant="h5">
            <img src={logo} alt="footer logo" />
          </Typography>
        </div>
        <div className="w-full  mb-4 md:mb-0 md:w-auto">
          {LINKS.map(({ items }) => (
            <ul key={items[0].Destinations} className="mb-2 md:mb-0">
              <Typography
                as={Link}
                to={items[0].link}
                variant="small"
                color="gray"
                className="py-1 font-bold text-md transition-colors hover:text-blue-900"
              >
                {items[0].Destinations}
              </Typography>
            </ul>
          ))}
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-black">
            507, Chimanlal Girdharlal Rd, opp. Lords Eco Inn Hotel, Eventi,
            Navrangpura, Ahmedabad, Gujarat 380009
          </h1>
          <h1 className="mt-2 text-black">+91 7600014939</h1>
        </div>
      </div>
      <div className="mt-4 md:mt-10 w-full mx-auto border-t border-black py-4 relative top-4">
        <Typography className="font-normal text-blue-gray-900">
          &copy; {currentYear} <a href="/">Blue Escape Ltd</a>. All Rights
          Reserved.
        </Typography>
      </div>
    </footer>
  );
}
