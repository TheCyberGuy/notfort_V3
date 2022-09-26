import Image from "next/image";
import Coding from "../assets/coding.svg";
import Card from "./Card";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div className="pb-8">
      <div className="flex flex-col md:flex-row justify-evenly items-center w-screen h-[47.5rem]">
        <div className="flex flex-col md:items-start items-center mx-2 md:mx-0 gap-1">
          <h2 className="text-3xl text-center md:text-start">
            Making Your Business
            <span className="font-semibold">
              <br />
              Come True
            </span>
          </h2>
          <p className="font-extralight text-center md:text-start md:w-[55%] w-[65%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            impedit ea corrupti nulla illum.
          </p>
          <motion.button
            className="bg-black w-max text-white mt-2 rounded-lg p-2 "
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.1 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
            More About Us
          </motion.button>
        </div>
        <div className="relative -z-10">
          <Image
            src={Coding}
            alt="Coding Illustration"
            width={512}
            height={512}
          />
        </div>
      </div>
      {/* <div className="flex flex-col md:flex-row justify-evenly gap-4 items-center">
        <Card
          name="Test"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            impedit ea corrupti nulla illum."
        />
        <Card
          name="Test"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            impedit ea corrupti nulla illum."
        />
        <Card
          name="Test"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            impedit ea corrupti nulla illum."
        />
      </div> */}
    </div>
  );
};

export default Landing;
