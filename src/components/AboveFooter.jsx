const AboveFooter = () => {
  return (
    <div className="flex flex-col dark:bg-darkBackground items-center justify-center p-10 text-center md:text-left">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-inter leading-tight">
        Pellentesque suscipit
      </h1>
      <h1 className="text-3xl my-2 md:text-4xl lg:text-5xl font-semibold font-inter leading-tight">
        fringilla libero eu.
      </h1>
      <div className="flex justify-center md:justify-start mt-10">
        <button className="bg-primary text-secondary dark:text-darkBackground font-inter rounded w-40 h-12 md:w-44 md:h-14">
          Get a Demo
        </button>
      </div>
    </div>
  );
};

export default AboveFooter;
