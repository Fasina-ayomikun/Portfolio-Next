"use client";
import Loading from "@/components/Loading";
import SocialLinks from "@/components/SocialLinks";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CldImage } from "next-cloudinary";
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

const SingleProject = ({ params }: { params: { id: string } }) => {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["projectId"],
    queryFn: async () => {
      const resp = await axios.get(`/api/project/${params.id}`);

      return resp;
    },
  });

  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className='px-3'>
      <section className=' w-full h-full md:h-[79vh] grid grid-cols-1 md:grid-cols-2  justify-center items-center mx-auto max-w-6xl gap-10'>
        <CldImage
          src={data?.data.project.image}
          alt={"image"}
          width={1400}
          height={1400}
          className='object-cover w-full h-96  rounded-md'
        />
        <div className='w-full'>
          <h1 className='text-3xl font-bold uppercase  text-white tracking-wide'>
            {data?.data.project.name}
          </h1>
          <hr className='border-dashed my-3' />
          <p className='text-gray-200 my-4'>{data?.data.project.description}</p>
          <hr className='border-dashed my-5' />
          <p className='flex items-start justify-start md:justify-between gap-2 md:gap-5 my-4 text-white text-sm'>
            <span>Preview</span>
            <Link
              href={data?.data.project.github_link}
              target='/blank'
              className='text-xs break-all'
            >
              {data?.data.project.github_link}
            </Link>
          </p>
          <hr className='border-dashed my-5' />
          <p className='flex items-start text-sm justify-start md:justify-between gap-2 md:gap-5 my-4 text-white '>
            <span>Preview</span>
            <Link
              href={data?.data.project.preview_link}
              target='/blank'
              className='text-xs break-all'
            >
              {data?.data.project.preview_link}lorem30
            </Link>
          </p>
        </div>
      </section>
      <SocialLinks />
    </section>
  );
};

export default SingleProject;
