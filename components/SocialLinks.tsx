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

const SocialLinks = () => {
  return (
    <ul className='text-white h-full flex items-center justify-center gap-4 text-xl  md:text-3xl pb-4'>
      <Link
        href={"https://www.linkedin.com/in/ayomikun-fasina"}
        target='/blank'
      >
        <FaLinkedinIn className='text-white hover:text-blue-700' />
      </Link>
      <Link href={"https://x.com/fasinaayomikun"} target='/blank'>
        <FaTwitter className='text-white hover:text-blue-700' />
      </Link>
      <Link href={"https://www.github.com/Fasina-ayomikun"} target='/blank'>
        <FaGithub className='text-white hover:text-blue-700' />
      </Link>
      <Link href={"https://www.youtube.com/@webDevIn10"} target='/blank'>
        <FaYoutube className='text-white hover:text-blue-700' />
      </Link>
    </ul>
  );
};

export default SocialLinks;
