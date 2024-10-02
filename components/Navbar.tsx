"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaAlignCenter, FaAlignJustify } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className=' flex items-center justify-between gap-8 md:px-5  text-white  px-5 py-8 mx-auto  max-w-7xl '>
      <h3 className='text-2xl font-bold uppercase'>FASH</h3>
      <FaAlignJustify className='text-2xl md:hidden block' />
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
    </header>
  );
};

export default Navbar;
