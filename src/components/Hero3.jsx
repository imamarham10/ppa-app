/* eslint-disable no-unused-vars */
import React from 'react';
import Hero from '../assets/hero3.png';

const Hero3 = () => {
  return (
    <div className="h-full flex flex-col md:flex-row items-center bg-secondary dark:bg-darkBackground p-4 md:p-8 lg:p-12 xl:p-16 2xl:p-20 justify-evenly">
      <div className='flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0'>
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-tprimary dark:text-darkTextPrimary font-semibold">
          From Experience to Success:
        </h1>
        <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-primary font-semibold mt-2'>
          Mastering Photography Marketing
        </h1>
        <h2 className='text-base md:text-lg lg:text-xl xl:text-2xl text-tsecondary dark:text-darkTextSecondary font-normal mt-4'>
          Maximize Your Reach: Choosing the Right Platform for Your Photography Business
        </h2>
        <button className='bg-primary py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 text-secondary dark:text-darkBackground font-inter rounded mt-8'>
          Register
        </button>
      </div>
      <div className="flex justify-center">
        <img src={Hero} alt='Hero' className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96"/>
      </div>
    </div>
  );
};

export default Hero3;
