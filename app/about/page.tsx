"use client";
import SocialLinks from "@/components/SocialLinks";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const email = "ayomikunfasina240@gmail.com";
const About = () => {
  const handleCopyToClipboard = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      alert("Copied to Clipboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <motion.section
      className='px-5'
      exit={{
        translateX: "-100vw",
        transition: {
          ease: "easeInOut",
          duration: 5,
        },
      }}
      initial={{
        x: "100vw",
      }}
      animate={{
        x: 0,
      }}
      transition={{
        ease: "easeIn",
        duration: 0.5,
        damping: 15,
        type: "spring",
      }}
    >
      <section className='w-full h-full md:h-[75vh] grid grid-cols-1 md:grid-cols-2 justify-center items-center mx-auto max-w-6xl gap-10'>
        <Image
          src={"/assets/profile2.jpg"}
          alt={"image"}
          width={600}
          height={600}
          className='w-full object-cover object-bottom h-full min-h-96 max-h-64 rounded-md'
        />
        <div className='w-full'>
          <h1 className='text-2xl md:text-3xl font-bold uppercase  text-white tracking-wide'>
            Fasina <span className='text-blue-700'>Ayomikun</span>
          </h1>
          <p className='capitalize  text-white text-md md:text-xl font-medium my-2'>
            Frontend developer
          </p>
          <hr className='border-dashed my-8' />
          <p className='text-gray-200 my-4'>
            Hi, I'm Fasina Ayomikun, a frontend developer with over 4 years of
            experience working with modern web technologies. I’m passionate
            about continuous learning, content creation, and sharing knowledge
            through YouTube. As a tech influencer and a problem solver, I love
            decoding bugs and building user-friendly experiences.{" "}
          </p>
          <p className='text-gray-200 my-4'>
            <strong>Skills: </strong>
            Html, Css, Javascript, TypeScript, React, Nextjs, Tailwind,
            Bootstrap
          </p>
          <p
            className='cursor-pointer text-gray-200 my-4'
            onClick={() => handleCopyToClipboard(email)}
          >
            <strong>Email: </strong>
            <span className='underline underline-offset-4 hover:text-blue-500'>
              ayomikunfasina240@gmail.com
            </span>
          </p>
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
  );
};

export default About;
