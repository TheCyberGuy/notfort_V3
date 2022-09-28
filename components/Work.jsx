import Image from "next/image";

import Adam from "../assets/adam.jpg";
import Csanad from "../assets/csanad.jpg";
import Startup from "../assets/annie-spratt-QckxruozjRg-unsplash.jpg";

import { motion } from "framer-motion";
import { useState } from "react";
const Work = () => {
  const [us, setUs] = useState(false);
  return (
    <div
      id="work"
      className="bg-black w-screen lg:h-[30rem] h-[86rem] flex relative  flex-col md:flex-row justify-evenly items-center"
    >
      <div className="mx-5 flex-1 pb-12">
        <h3 className="text-white text-center text-5xl py-6">Our Work</h3>
        <p className="text-white mx-auto md:w-[75%] w-[90%] text-center lg:hover:scale-110 duration-300 ease-in-out">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque iste
          ab maiores fuga natus pariatur provident, atque dolor eius!
          Exercitationem ducimus modi aut ratione vel facilis velit quod autem
          inventore alias tempora blanditiis porro consequatur ipsam atque
          voluptatem commodi, omnis rem? Mollitia optio saepe soluta eos nihil
          repudiandae atque consequuntur sapiente, ad est inventore. Ullam,
          alias error. Velit, cumque exercitationem. Placeat molestias incidunt
          minus accusamus ex dicta tempore ullam ad delectus quis perferendis
          enim, aspernatur quo asperiores at, neque vel magni quaerat, sed
          voluptas modi doloremque ratione quasi consectetur. Minima minus totam
          deserunt quas fuga asperiores odit distinctio corrupti ipsum.
        </p>
      </div>
      <div className="flex-col items-center justify-evenly flex-1">
        <div className="bg-white  relative h-[60%] mx-auto w-[75%] rounded-lg flex flex-col">
          <motion.div
            style={{ flexDirection: "column" }}
            animate={{
              opacity: !us ? 0 : 1,
              display: !us ? "none" : "flex",
              transition: { duration: 0.2 },
            }}
          >
            <div className="w-[8rem] h-[8rem] mx-auto">
              <Image src={us ? Adam : Csanad} alt="" />
            </div>
            <div className="flex flex-col items-center">
              <p className="text-center w-[80%] mx-auto m-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                ullam ducimus similique exercitationem maiores mollitia
                consequuntur aperiam modi dolore quo.
              </p>
              <button className="text-center bg-black text-white rounded-lg p-2 mb-2 hover:bg-secondary-200 duration-300 ease-in-out hover:text-black">
                Download CV
              </button>
            </div>
          </motion.div>
          <motion.div
            style={{ flexDirection: "column" }}
            animate={{
              opacity: us ? 0 : 1,
              display: us ? "none" : "flex",
              transition: { duration: 0.2 },
            }}
          >
            <div className="w-[8rem] h-[8rem] mx-auto">
              <Image src={us ? Adam : Csanad} alt="" />
            </div>
            <div className="flex flex-col items-center">
              <p className="text-center w-[80%] mx-auto m-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                ullam ducimus similique exercitationem maiores mollitia
                consequuntur aperiam modi dolore quo.
              </p>
              <button className="text-center bg-black text-white rounded-lg p-2 mb-2 hover:bg-secondary-200 duration-300 ease-in-out hover:text-black">
                Download CV
              </button>
            </div>
          </motion.div>
        </div>
        <div className="relative z-10">
          <motion.div
            className="w-[64px] mx-auto pt-4 h-[64px]"
            animate={{
              rotateY: us ? -180 : -360,
              transition: { duration: 0.075, repeat: false },
            }}
            onTap={() => setUs(!us)}
          >
            <Image
              src={us ? Adam : Csanad}
              width={64}
              height={64}
              style={{ borderRadius: 999 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
