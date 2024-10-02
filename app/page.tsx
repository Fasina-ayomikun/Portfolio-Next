import Button from "@/components/Button";
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

const Home = () => {
  return (
    <section>
      <section className='w-full h-[79vh] grid justify-center items-center '>
        <div className='w-full px-2 md:px-4'>
          <h1 className='md:text-5xl text-3xl lg:text-6xl font-black uppercase text-center text-white tracking-wide'>
            Fasina <span className='text-blue-700'>Ayomikun</span>
          </h1>
          <p className='capitalize text-center text-white text-md md:text-2xl mt-2  font-medium my-4'>
            Frontend developer
          </p>
          <Button />
        </div>
      </section>
      <SocialLinks />
    </section>
  );
};

export default Home;
