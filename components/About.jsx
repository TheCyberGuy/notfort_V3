import { motion } from "framer-motion";

import { useState } from "react";

const About = () => {
  const [pos, setPos] = useState(2);
  return (
    <div className="bg-white w-screen h-[30rem] flex flex-col justify-centera items-center">
      <div className="my-6">
        <h2 className="text-black text-5xl text-center pb-16">How We Work</h2>
      </div>
      <motion.div className="bg-slate-400 w-[45%] h-[2rem] rounded-full flex relative items-center">
        <motion.div className="absolute left-[25%]">1</motion.div>
        <motion.div className="absolute left-[50%]">2</motion.div>
        <motion.div className="absolute left-[75%]">3</motion.div>
        <motion.div className="bg-black rounded-full w-[1.8rem] h-[1.8rem] absolute mb-[2px] ml-[2px] "></motion.div>
      </motion.div>
      <div className="flex w-screen h-4 justify-center gap-20 mt-5">
        <motion.button
          className="bg-black text-3xl py-4 px-2  rounded-xl flex items-center text-white"
          onTap={() => {
            if (pos > 1) {
              setPos(pos - 1);
              console.log(pos);
            }
          }}
        >
          -
        </motion.button>
        <motion.button
          className="bg-black text-3xl rounded-xl py-4 px-2 flex items-center text-white"
          onTap={() => {
            if (pos < 3) {
              setPos(pos + 1);
              console;
            }
          }}
        >
          +
        </motion.button>
      </div>
    </div>
  );
};

export default About;
