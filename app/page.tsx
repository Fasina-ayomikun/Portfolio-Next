"use client";
import Button from "@/components/Button";
import SocialLinks from "@/components/SocialLinks";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaChevronRight,
  FaGithub,
  FaGithubAlt,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";
const Home = () => {
  return (
    <AnimatePresence>
      <motion.section
        exit={{
          translateX: "-100vw",
          transition: {
            ease: "easeInOut",
            duration: 5,
          },
        }}
      >
        <section className='w-full md:h-[72vh] h-[70vh] grid justify-center items-center '>
          <div className='w-full px-2 md:px-4'>
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                ease: "easeIn",
                duration: 0.5,
                type: "spring",
                damping: 22,
                mass: 5,
              }}
              className='md:text-5xl text-3xl lg:text-6xl font-black uppercase text-center text-white tracking-wide'
            >
              Fasina <span className='text-blue-700'>Ayomikun</span>
            </motion.h1>
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  ease: "easeIn",
                  delay: 1,
                },
              }}
              className='capitalize text-center text-white text-md md:text-2xl mt-2  font-medium my-4'
            >
              Frontend developer
            </motion.p>
            <Button />
          </div>
        </section>
        <motion.p
          initial={{
            scale: 0,
          }}
          animate={{
            scale: [1.1, 1, 1.1],
            transition: {
              duration: 0.5,
              repeat: Infinity,
            },
          }}
          className='mb-2 text-center text-sm md:hidden text-gray-200 mt-2'
        >
          Swipe left or right to navigate
        </motion.p>
        <SocialLinks />
      </motion.section>
    </AnimatePresence>
  );
};

export default Home;
