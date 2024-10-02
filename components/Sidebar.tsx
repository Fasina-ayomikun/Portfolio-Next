"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { FaRegTimesCircle, FaTimesCircle } from "react-icons/fa";

const Sidebar = () => {
  const pathname = usePathname();
  const open = useSearchParams().get("open");
  console.log(open);
  const router = useRouter();
  return (
    <section
      className={`fixed transition-all top-0 z-40 left-0 right-0 bottom-0 w-screen px-10 py-12 flex flex-col items-center gap-10 bg-black bg-opacity-95 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <FaRegTimesCircle
        className='hover:text-blue-700 text-4xl text-white self-end'
        onClick={() => {
          router.back();
        }}
      />
      <ul className='flex flex-col  items-center justify-between gap-12 text-xl  text-white'>
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
    </section>
  );
};

export default Sidebar;
