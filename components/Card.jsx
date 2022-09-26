import { motion } from "framer-motion";

const svgVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
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
    transistion: { duration: 1, ease: "easeInOut" },
  },
};

const Card = (props) => {
  return (
    <div className="flex flex-col justify-evenly items-center bg-[#222222] text-white rounded-lg w-80 h-64 gap-8">
      <motion.svg
        variants={svgVariants}
        initial="hidden"
        animate="visible"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="pt-5 text-white"
      >
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm0-96c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32zM288 96c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z"
        />
      </motion.svg>
      <h2>{props.name}</h2>
      <p className="text-center mx-0.5 mb-4">{props.desc}</p>
    </div>
  );
};

export default Card;
