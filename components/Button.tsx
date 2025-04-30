import React from "react";
import { motion } from "framer-motion";
const Button = () => {
  return (
    <motion.button
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 1,
          ease: "easeIn",
          delay: 1.5,
        },
      }}
      whileHover={{
        scale: [0.9, 1, 0.9],
        transition: {
          repeat: Infinity,
          ease: "easeInOut",
          duration: 0.7,
        },
      }}
      type='button'
      className='w-fit px-8 md:py-3 py-2 rounded-full bg-blue-800 text-white mx-auto flex text-sm md:text-md'
    >
      <a
        href='/assets/My-CV.pdf'
        target='blank'
        download='Fasina-Ayomikun-Resume.pdf'
      >
        Download CV
      </a>
    </motion.button>
  );
};

export default Button;
