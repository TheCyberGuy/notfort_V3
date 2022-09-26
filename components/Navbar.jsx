import Image from "next/image";

import Logo from "../assets/notfort.svg";
import { Sling as Hamburger } from "hamburger-react";

import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <nav className="w-screen px-4 bg-black bg-opacity-90 flex h-full sticky top-0 justify-between items-center">
      <div className="mb-1">
        <Image src={Logo} alt="notfort Logo" width={132} height={132} />
      </div>
      <div className="text-white text-xl md:block hidden">
        <ul className="flex justify-evenly gap-4">
          <li className="hover:text-secondary-100 duration-300 hover:cursor-pointer">
            About Us
          </li>
          <li className="hover:text-secondary-100 duration-300 hover:cursor-pointer">
            How We Work
          </li>
          <li className="hover:text-secondary-100 duration-300 hover:cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
      <div className="md:block hidden">
        <button className="text-white border border-white p-3 rounded-lg hover:text-secondary-100 duration-300 hover:border-[#cccccc]">
          Contact Us!
        </button>
      </div>
      <div className="md:hidden block">
        <Hamburger color="white" toggled={nav} toggle={setNav} duration={0.5} />
      </div>
      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "fixed top-0 z-20 left-0 w-[52.5%] h-screen duration-500 flex bg-black flex-col justify-start items-center"
            : "fixed top-0 z-20 left-[-100%] w-[52.5%] h-screen duration-500 bg-black flex flex-col justify-start items-center"
        }
      >
        <div className="relative top-[-1rem] left-[-.5rem]">
          <Image src={Logo} alt="notfort Logo" width={164} height={164} />
        </div>
        <div className="text-white text-xl">
          <ul className="flex flex-col text-center justify-evenly gap-8">
            <li className="hover:text-gray-200 duration-300">About Us</li>
            <li className="hover:text-gray-200 duration-300">How We Work</li>
            <li className="hover:text-gray-200 duration-300">Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
