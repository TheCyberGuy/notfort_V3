import { SocialIcon } from "react-social-icons";

import { useState } from "react";

import { motion } from "framer-motion";

const Contact = () => {
  const textVariants = {
    hidden: {
      opacity: 0,
      display: "none",
      x: "-200vw",
    },
    visible: {
      opacity: 1,
      display: "block",
      x: 0,
    },
  };
  const socialVariants = {
    hidden: { opacity: 0, display: "none", x: "200vw" },
    visible: { opacity: 1, display: "block", x: 0 },
  };

  const [contact, setContact] = useState(false);
  return (
    <>
      <div
        id="contact, "
        className="w-screen h-[25rem] bg-black flex flex-col justify-center  items-center gap-24"
      >
        <motion.div className="flex h-[40px]">
          <motion.h3
            className="text-white text-4xl"
            variants={textVariants}
            animate={contact ? "hidden" : "visible"}
          >
            Get In <span className="text-secondary-200">Touch</span>.
          </motion.h3>
          <motion.div
            variants={socialVariants}
            animate={!contact ? "hidden" : "visible"}
          >
            <SocialIcon
              url="https://www.facebook.com/profile.php?id=100085942994474"
              bgColor="black"
              fgColor="white"
              style={{}}
              className="scale-105 fill-secondary-200"
            />
            <SocialIcon
              url="https://www.instagram.com/notfort.official/"
              bgColor="black"
              fgColor="white"
              style={{}}
              className="scale-105 fill-secondary-200"
            />
            <SocialIcon
              url="https://www.linkedin.com/company/notfort/about/"
              bgColor="black"
              fgColor="white"
              style={{}}
              className="scale-105 fill-secondary-200"
            />
            <SocialIcon
              url="contact@notfort.com"
              network="email"
              bgColor="black"
              fgColor="white"
              style={{}}
              className="scale-105 fill-secondary-200"
            />
          </motion.div>
        </motion.div>
        <motion.button
          className="bg-secondary-200 text-black rounded-xl p-4"
          onTap={() => setContact(!contact)}
        >
          Contact
        </motion.button>
      </div>
    </>
  );
};

export default Contact;
