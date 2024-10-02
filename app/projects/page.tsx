"use client";
import Loading from "@/components/Loading";
import SocialLinks from "@/components/SocialLinks";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  FaGithub,
  FaGithubAlt,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Projects = () => {
  const [endSlice, setEndSlice] = useState(2);
  const [startSlice, setStartSlice] = useState(0);
  const router = useRouter();
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const resp = await axios.get("/api/project");

      return resp;
    },
  });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className=''>
      <section className='w-full h-full md:h-[79vh] grid  justify-center items-center mx-auto max-w-6xl gap-10'>
        <div className='hidden md:flex items-center justify-center gap-20'>
          <FaChevronLeft
            className='text-6xl text-white hover:text-blue-700 '
            onClick={() => {
              setStartSlice((prevSlice) => {
                if (prevSlice === 0) {
                  return 0;
                }
                return prevSlice - 1;
              });
              setEndSlice((prevSlice) => {
                if (prevSlice === 2) {
                  return 2;
                }
                return prevSlice - 1;
              });
            }}
          />
          <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-7 w-full'>
            {data?.data.projects
              .slice(startSlice, endSlice)
              .map((item: { _id: string; name: string; image: string }) => {
                return (
                  <div key={item._id} className='relative w-full h-80 projects'>
                    <CldImage
                      src={item.image}
                      alt={"image"}
                      width={400}
                      height={400}
                      className='object-cover w-full h-full  rounded-md'
                    />
                    <div className='project absolute top-0 left-0 right-0 bottom-0 hidden bg-black bg-opacity-90  place-content-center'>
                      <p
                        className='uppercase text-white text-3xl font-bold cursor-pointer'
                        onClick={() => {
                          router.push(`/projects/${item._id}`);
                        }}
                      >
                        {item.name}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
          <FaChevronRight
            className='text-6xl text-white hover:text-blue-700'
            onClick={() => {
              setStartSlice((prevSlice) => {
                if (prevSlice === data?.data.projects.length - 2) {
                  return data?.data.projects.length - 2;
                }
                return prevSlice + 1;
              });
              setEndSlice((prevSlice) => {
                if (prevSlice === data?.data.projects.length) {
                  return data?.data.projects.length;
                }
                return prevSlice + 1;
              });
            }}
          />
        </div>

        {/* Mobile video */}
        <div className='my-9 grid grid-cols-1 md:grid-cols-2 items-center md:hidden  justify-center gap-7 w-full min-h-screen'>
          {data?.data.projects.map(
            (item: { _id: string; name: string; image: string }) => {
              return (
                <div
                  key={item._id}
                  className='relative w-full h-80 projects max-w-md'
                >
                  <CldImage
                    src={item.image}
                    alt={"image"}
                    width={400}
                    height={400}
                    className='object-cover w-full h-full  rounded-md'
                  />
                  <div className='absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70  place-content-center'>
                    <p
                      className='hover:underline  uppercase text-white text-3xl text-center font-bold cursor-pointer'
                      onClick={() => {
                        router.push(`/projects/${item._id}`);
                      }}
                    >
                      {item.name}
                    </p>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </section>
      <SocialLinks />
    </section>
  );
};

export default Projects;
