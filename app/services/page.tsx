"use client";
import Loading from "@/components/Loading";
import SocialLinks from "@/components/SocialLinks";
import React, { useState } from "react";
import {
  FaChalkboardTeacher,
  FaChevronLeft,
  FaChevronRight,
  FaIntercom,
  FaReact,
  FaVideo,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { MdBuild } from "react-icons/md";

const Services = () => {
  return (
    <motion.section className='overflow-x-hidden'>
      <section className='w-4/5  h-[70vh] md:h-[75vh] grid  justify-center items-center mx-auto max-w-4xl  overflow-hidden gap-10'>
        <motion.div
          initial={{
            x: 0,
          }}
          animate={{
            x: ["90%", 0, "-90%"],
            transition: {
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              type: "keyframes",
              mass: 40,
            },
          }}
          className=' '
        >
          <div className=' overflow-hidden  py-4 '>
            <div className='whitespace-nowrap flex gap-8 text-gray-200'>
              <p className='flex-col text-md md:text-2xl uppercase font-black flex items-center gap-2'>
                <FaReact className='text-5xl text-blue-700' />{" "}
                <span>
                  <span className='text-blue-700'> &lt; </span>Frontend
                  Development <span className='text-blue-700'>/&gt;</span>
                </span>
              </p>
              <p className='flex-col text-md md:text-2xl uppercase font-black flex items-center gap-2'>
                <FaChalkboardTeacher className='text-5xl text-blue-700' />{" "}
                <span>
                  <span className='text-blue-700'> &lt; </span>1-on-1 Coaching{" "}
                  <span className='text-blue-700'>/&gt;</span>
                </span>
              </p>
              <p className='flex-col text-md md:text-2xl uppercase font-black flex items-center gap-2'>
                <FaVideo className='text-5xl text-blue-700' />{" "}
                <span>
                  <span className='text-blue-700'> &lt; </span>Tech Content
                  Creation
                  <span className='text-blue-700'>/&gt;</span>
                </span>
              </p>
              <p className='flex-col text-md md:text-2xl uppercase font-black flex items-center gap-2'>
                <MdBuild className='text-5xl text-blue-700' />{" "}
                <span>
                  <span className='text-blue-700'> &lt; </span>Website
                  Improvement
                  <span className='text-blue-700'>/&gt;</span>
                </span>
              </p>
            </div>
          </div>
        </motion.div>
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
  );
};

export default Services;
