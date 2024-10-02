"use client";
import SocialLinks from "@/components/SocialLinks";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaGithub,
  FaGithubAlt,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
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
    <section className='px-5'>
      <section className='w-full h-full md:h-[79vh] grid grid-cols-1 md:grid-cols-2 justify-center items-center mx-auto max-w-6xl gap-10'>
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
            I am a self taught frontend developer, a lady working towards
            significant self development, a passionate and dedicated web
            developer and Youtuber. I am currently skilled in HTML,CSS,
            JavaScript, React and some other frontend frameworks. I am working
            towards incremental knowledge and skill acquisition in web
            development and other interesting programming languages.
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
            <span>ayomikunfasina240@gmail.com</span>
          </p>
        </div>
      </section>
      <SocialLinks />
    </section>
  );
};

export default About;
