import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../Assests/Logo1.png";
import logo2Text from "../Assests/logo2Text.png";
import { Link } from "react-router-dom";
function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="large"
        color="blue-gray"
        className="p-2 font-bold text-lg transition transform hover:text-white hover:bg-blue-900 rounded-lg lg:hover:scale-105 hover:shadow-lg"
      >
        <Link to="/" className="flex items-center transition-colors">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="large"
        color="blue-gray"
        className="p-2 font-bold text-lg transition transform hover:text-white hover:bg-blue-900 rounded-lg lg:hover:scale-105 hover:shadow-lg"
      >
        <Link to="/Countries" className="flex items-center transition-colors">
          Destinations
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="large"
        color="blue-gray"
        className="p-2 font-bold text-lg transition transform hover:text-white hover:bg-blue-900 rounded-lg lg:hover:scale-105 hover:shadow-lg"
      >
        <Link to="/AboutUs" className="flex items-center transition-colors">
          About Us
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="large"
        color="blue-gray"
        className="p-2 font-bold text-lg transition transform hover:text-white hover:bg-blue-900 rounded-lg lg:hover:scale-105 hover:shadow-lg"
      >
        <Link to="/AboutUs" className="flex items-center transition-colors">
          Contact Us
        </Link>
      </Typography>
    </ul>
  );
}

export default function NavBar(props) {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="sticky -top-2 z-50 bg-opacity-60 backdrop-blur-lg py-2">
      <Navbar className="px-6 max-w-screen-3xl py-2 shadow-none rounded-none border-none">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 flex items-center"
          >
            <img src={logo} style={{ height: "50px" }} />
            <img
              src={logo2Text}
              style={{ height: "35px", marginTop: "10px" }}
            />
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
      {props.border == "true" && <hr />}
    </div>
  );
}
