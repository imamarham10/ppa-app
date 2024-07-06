import Hero from '../assets/hero2.png';

const Hero2 = () => {
  return (
    <div className="h-full flex flex-col md:flex-row items-center bg-secondary dark:bg-darkBackground p-4 md:p-8 lg:p-12 xl:p-16 2xl:p-20 justify-evenly">
      <div className='flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0'>
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-tprimary dark:text-darkTextPrimary font-semibold">
          Elevate Your Photography
        </h1>
        <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-primary font-semibold mt-2'>
          Business with Proven Insights
        </h1>
        <h2 className='text-base md:text-lg lg:text-xl xl:text-2xl text-tsecondary dark:text-darkTextSecondary font-normal mt-4'>
          Where Should Your Photography Brand Thrive?
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

export default Hero2;
