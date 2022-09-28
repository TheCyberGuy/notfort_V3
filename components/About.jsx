import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import Interview from "../assets/interview.svg";
import PairProgramming from "../assets/pair_programming.svg";
import Rocket from "../assets/rocket.svg";

const About = () => {
  const svgVariants = {
    hidden: { rotate: -180 },
    visible: {
      rotate: 0,
      transistion: { duration: 1 },
    },
  };
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transistion: {
        duration: 2,
      },
    },
  };
  const [pos, setPos] = useState(2);
  return (
    <>
      <div
        id="about"
        className="bg-white w-screen h-[67rem] md:h-[45rem] flex flex-col justify-centera items-center"
      >
        <div className="my-6">
          <h2 className="text-black text-5xl text-center pb-16">How We Work</h2>
        </div>
        <motion.div className="flex flex-col md:flex-row md:gap-28 justify-evenly items-center">
          <div className="flex-1 flex-col justify-center gap-12">
            <h3 className="text-center text-4xl pb-4">
              {pos === 1
                ? "Preparing"
                : pos === 2
                ? "Working"
                : "Skyrocket your business"}
            </h3>
            <motion.p
              className="text-center text-sm  md:text-xl w-[80%] mx-auto"
              animate={{
                opacity: pos === 1 ? 1 : 0,
                display: pos === 1 ? "block" : "none",
              }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et earum
              fuga architecto. Quisquam sequi dolorum minima ex ipsum excepturi
              eligendi, officiis sed doloremque reiciendis earum quasi fuga
              iusto illum corrupti aliquid quaerat vero ratione similique!
              Beatae sequi nesciunt voluptas atque illum reprehenderit modi,
              dolore minus.Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Et earum fuga architecto. Quisquam sequi dolorum minima ex
              ipsum excepturi eligendi, officiis sed doloremque reiciendis earum
              quasi fuga iusto illum corrupti aliquid quaerat vero ratione
              similique! Beatae sequi nesciunt voluptas atque illum
              reprehenderit modi, dolore minus.Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Et earum fuga architecto. Quisquam
              sequi dolorum minima ex ipsum excepturi eligendi, officiis sed
              doloremque reiciendis earum quasi fuga iusto illum corrupti
              aliquid quaerat vero ratione similique! Beatae sequi nesciunt
              voluptas atque illum reprehenderit modi, dolore minus.
            </motion.p>
            <motion.p
              className="text-center text-xl w-[80%] mx-auto"
              animate={{
                opacity: pos === 2 ? 1 : 0,
                display: pos === 2 ? "block" : "none",
              }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et earum
              fuga architecto. Quisquam sequi dolorum minima ex ipsum excepturi
              eligendi, officiis sed doloremque reiciendis earum quasi fuga
              iusto illum corrupti aliquid quaerat vero ratione similique!
              Beatae sequi nesciunt voluptas atque illum reprehenderit modi,
              dolore minus.
            </motion.p>
            <motion.p
              className="text-center text-xl w-[80%] mx-auto"
              animate={{
                opacity: pos === 3 ? 1 : 0,
                display: pos === 3 ? "block" : "none",
              }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et earum
              fuga architecto. Quisquam sequi dolorum minima ex ipsum excepturi
              eligendi, officiis sed doloremque reiciendis earum quasi fuga
              iusto illum corrupti aliquid quaerat vero ratione similique!
              Beatae sequi nesciunt voluptas atque illum reprehenderit modi,
              dolore minus.
            </motion.p>
          </div>
          <div className="flex-1 md:h-[512px] md:w-[512px] w-[20rem] flex items-center justify-center ">
            <Image
              src={pos === 1 ? Interview : pos === 2 ? PairProgramming : Rocket}
              alt={
                pos === 1
                  ? "Weboldal Tervezes"
                  : pos === 2
                  ? "Weboldal keszites"
                  : "Business is online"
              }
              width={512}
              height={512}
            />
          </div>
        </motion.div>
      </div>
      <div className="sticky w-screen h-4 gap-20 mb-16">
        <div className="flex w-screen justify-center gap-20">
          <motion.button
            alt="Lapozas balra"
            className="bg-transparent text-3xl py-4 px-2  rounded-xl flex items-center text-white"
            onTap={() => {
              if (pos > 1) {
                setPos(pos - 1);
                console.log(pos);
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="h-[2rem] w-[2rem] mb-6"
            >
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
            </svg>
          </motion.button>
          <motion.button
            alt="Lapozas jobbra"
            className="bg-transparent text-3xl rounded-xl py-4 px-2 flex items-center text-white"
            onTap={() => {
              if (pos < 3) {
                setPos(pos + 1);
                console.log(pos);
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="h-[2rem] w-[2rem] mb-6"
            >
              <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default About;
