"use client";
import Button from "@/components/Button";
import SocialLinks from "@/components/SocialLinks";
import Image from "next/image";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    setValue((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const sendEmail = (e: any) => {
    e.preventDefault();
    setSubmitting(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID as string,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      .then(
        (result) => {
          console.log(result);
          alert("Message sent successfully");
          setSubmitting(false);
          setValue({ user_name: "", user_email: "", message: "" });
        },
        (error) => {
          console.log(error);
          alert(error.text);
          setSubmitting(false);
        }
      );
  };
  return (
    <motion.section
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
      <section className='w-full h-[79vh] grid   items-center mx-auto max-w-6xl '>
        <form onSubmit={sendEmail} className='w-10/12 mx-auto'>
          <motion.input
            whileHover={{
              borderStyle: "dashed",
              transition: {
                ease: "easeIn",
              },
            }}
            name='user_name'
            type='text'
            required
            value={value.user_name}
            placeholder='Name'
            onChange={handleChange}
            className='border cursor-pointer border-white my-4 px-4 w-full py-3 text-white bg-transparent'
          />
          <motion.input
            whileHover={{
              borderStyle: "dashed",
              transition: {
                ease: "easeIn",
              },
            }}
            value={value.user_email}
            onChange={handleChange}
            name='user_email'
            type='text'
            required
            placeholder='Email'
            className='border cursor-pointer border-white my-4 px-4 w-full py-3 text-white bg-transparent'
          />
          <motion.textarea
            whileHover={{
              borderStyle: "dashed",
              transition: {
                ease: "easeIn",
              },
            }}
            value={value.message}
            onChange={handleChange}
            name='message'
            required
            placeholder='Send me a message'
            className='border cursor-pointer border-white min-h-32 my-4 px-4 w-full py-3 text-white bg-transparent'
          />

          <motion.button
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 1,
                ease: "easeIn",
              },
            }}
            whileHover={{
              scale: [0.9, 1, 0.9],
              transition: {
                repeat: Infinity,
                ease: "easeInOut",
                duration: 0.7,
              },
            }}
            type='submit'
            disabled={submitting}
            className='w-fit px-8 md:py-3 py-2 rounded-full bg-blue-800 text-white mx-auto flex text-sm md:text-md'
          >
            {submitting ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </section>
      <SocialLinks />
    </motion.section>
  );
};

export default Contact;
