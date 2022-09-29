import Image from "next/image";

import Logo from "../assets/notfort.svg";
import { Sling as Hamburger } from "hamburger-react";
import { SocialIcon } from "react-social-icons";

import { useState } from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <nav className="w-screen px-4 bg-black flex h-full sticky z-50 top-0 justify-between items-center">
      <div className="mb-1 ">
        <Image
          className=""
          src={Logo}
          alt="notfort Logo"
          width={132}
          height={132}
        />
      </div>
      <div className="text-white text-xl md:block hidden">
        <ul className="flex justify-evenly gap-4">
          <Link to="about" smooth={true}>
            <li className="hover:text-secondary-100 duration-300 hover:cursor-pointer">
              About Us
            </li>
          </Link>
          <Link to="work" smooth={true}>
            <li className="hover:text-secondary-100 duration-300 hover:cursor-pointer">
              How We Work
            </li>
          </Link>
          <Link to="contact" smooth={true}>
            <li className="hover:text-secondary-100 duration-300 hover:cursor-pointer">
              Contact
            </li>
          </Link>
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
            ? "fixed top-0 z-50 left-0 w-[52.5%] h-screen duration-500 flex bg-black flex-col justify-start items-center"
            : "fixed top-0 z-50 left-[-100%] w-[52.5%] h-screen duration-500 bg-black flex flex-col justify-start items-center"
        }
      >
        <div className="relative top-[-1rem] left-[-.5rem]">
          <Link to="home" smooth={true}>
            <Image src={Logo} alt="notfort Logo" width={164} height={164} />
          </Link>
        </div>
        <div className="text-white text-xl">
          <ul className="flex flex-col text-center justify-evenly gap-8">
            <Link to="work" smooth={true}>
              <li className="hover:text-gray-200 duration-300">How We Work</li>
            </Link>
            <Link to="about" smooth={true}>
              <li className="hover:text-gray-200 duration-300">About Us</li>
            </Link>

            <Link to="contact" smooth={true}>
              <li className="hover:text-gray-200 duration-300">Contact</li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-row h-full items-end pb-2 justify-between ">
          <SocialIcon
            url="https://www.facebook.com/profile.php?id=100085942994474"
            bgColor="black"
            fgColor="white"
            className="scale-75"
          />
          <SocialIcon
            url="https://www.instagram.com/notfort.official/"
            bgColor="black"
            fgColor="white"
            className="scale-75"
          />
          <SocialIcon
            url="https://www.linkedin.com/company/notfort/about/"
            bgColor="black"
            fgColor="white"
            className="scale-75"
          />
          <SocialIcon
            url="contact@notfort.com"
            network="email"
            bgColor="black"
            fgColor="white"
            className="scale-75"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
