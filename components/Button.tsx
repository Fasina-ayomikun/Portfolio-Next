import React from "react";

const Button = () => {
  return (
    <button
      type='button'
      className='w-fit px-8 md:py-3 py-2 rounded-full bg-blue-800 text-white mx-auto flex text-sm md:text-md'
    >
      {/* FIXME:The link */}
      <a href='/assets/resume.jpg' target='blank' download='resume.jpg'>
        Download CV
      </a>
    </button>
  );
};

export default Button;
