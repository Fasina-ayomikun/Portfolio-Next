"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { FaAlignCenter, FaAlignJustify } from "react-icons/fa";
import { motion, scale } from "framer-motion";
const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const headerVariant = {
    initial: {
      y: -100,
    },
    animate: {
      y: 0,
      transition: {
        ease: "easeIn",
        damping: 25,
        mass: 4,
        duration: 0.5,
        type: "spring",
        when: "beforeChild",
      },
    },
  };
  const linkVariant = {
    whileHover: {
      scale: 1.1,
    },
  };
  return (
    <motion.header
      variants={headerVariant}
      animate='animate'
      initial='initial'
      className=' flex items-center justify-between gap-8 md:px-5  text-white  px-5 py-8 mx-auto  max-w-7xl '
    >
      <motion.h3
        className='text-2xl font-bold uppercase cursor-pointer'
        onClick={() => {
          router.push("/");
        }}
        whileHover={{
          scale: 1.2,
        }}
      >
        FASH
      </motion.h3>
      <FaAlignJustify
        className='text-2xl md:hidden block'
        onClick={() => {
          router.push(`${pathname}?open=true`);
        }}
      />
      <ul className='md:flex md:gap-8 items-center justify-between lg:gap-12 text-xl  hidden'>
        <li
          className={`font-medium hover:border-b-2 border-blue-800 ${
            pathname === "/" && "border-b-2 "
          }`}
        >
          <Link href={"/"}>Home</Link>
        </li>
        <li
          className={`font-medium hover:border-b-2 border-blue-800 ${
            pathname === "/about" && "border-b-2 "
          }`}
        >
          <Link href={"/about"}>About</Link>
        </li>
        <li
          className={`font-medium hover:border-b-2 border-blue-800 ${
            pathname === "/projects" && "border-b-2 "
          }`}
        >
          <Link href={"/projects"}>Projects</Link>
        </li>
        <li
          className={`font-medium hover:border-b-2 border-blue-800 ${
            pathname === "/contact" && "border-b-2 "
          }`}
        >
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
    </motion.header>
  );
};

export default Navbar;
