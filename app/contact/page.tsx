"use client";
import Button from "@/components/Button";
import SocialLinks from "@/components/SocialLinks";
import Image from "next/image";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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
    <section>
      <section className='w-full h-[79vh] grid   items-center mx-auto max-w-6xl '>
        <form onSubmit={sendEmail} className='w-10/12 mx-auto'>
          <input
            name='user_name'
            type='text'
            required
            value={value.user_name}
            placeholder='Name'
            onChange={handleChange}
            className='border border-white my-4 px-4 w-full py-3 text-white bg-transparent'
          />
          <input
            value={value.user_email}
            onChange={handleChange}
            name='user_email'
            type='text'
            required
            placeholder='Email'
            className='border border-white my-4 px-4 w-full py-3 text-white bg-transparent'
          />
          <textarea
            value={value.message}
            onChange={handleChange}
            name='message'
            required
            placeholder='Send me a message'
            className='border border-white min-h-32 my-4 px-4 w-full py-3 text-white bg-transparent'
          />

          <button
            type='submit'
            disabled={submitting}
            className='w-fit px-8 md:py-3 py-2 rounded-full bg-blue-800 text-white mx-auto flex text-sm md:text-md'
          >
            {submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>
      <SocialLinks />
    </section>
  );
};

export default Contact;
