import Image from "next/image";
import Coding from "../assets/coding.svg";
import Head from "next/head";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div id="home" className="pb-8">
      <Head>
        <link rel="preload" href={Coding} as="image" />
      </Head>
      <div className="flex flex-col md:flex-row pt-20 justify-evenly items-center w-screen h-[47.5rem]">
        <div className="flex flex-col md:items-start flex-1 items-center mx-2 md:mx-0 gap-1">
          <h2 className="text-3xl text-center mx-auto">
            Making Your Business
            <span className="font-semibold mx-auto">
              <br />
              Come True
            </span>
          </h2>
          <p className="font-extralight text-center text-xl mx-auto md:text-start md:w-[45%] w-[80%]">
            Notfort is here to help you achieve your dream business. We can put
            your business online and help you reach more customers. We offer web
            design and development services that will help you get started.
            Contact us today to get started!
          </p>
          <motion.button
            className="bg-black w-max text-white mt-2 rounded-lg p-2 mx-auto"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.1 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
            More About Us
          </motion.button>
        </div>
        <div className="relative -z-10  w-[75%] h-[75%] lg:w-[50%] lg:h-[50%]">
          <Image
            src={Coding}
            alt="Coding Illustration"
            layout="fill"
            objectFit="contain"
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
