import image from "../assets/image 9.png";
import Logo1 from "../assets/Logo (1).png";
import Logo2 from "../assets/Logo (2).png";
import Logo3 from "../assets/Logo (3).png";
import Logo4 from "../assets/Logo (4).png";
import Logo5 from "../assets/Logo (5).png";
import Logo6 from "../assets/Logo (6).png";
import Right from "../assets/Right.png";

const Customers = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-secondary dark:bg-darkBackground text-ttertiary dark:text-darkTextPrimary px-4 md:px-8 lg:px-20 py-8">
      <img
        src={image}
        alt="frame"
        className="w-80 h-80 md:w-96 md:h-96 mb-8 md:mb-0 md:mr-8 p-2 dark:bg-darkSecondary rounded-md"
      />
      <div className="flex flex-col flex-wrap w-full md:w-1/2 px-8">
        <p className="font-inter font-medium text-sm md:text-base lg:text-lg mb-4 text-center md:text-left text-tsecondary dark:text-darkTextSecondary">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <h2 className="text-primary my-1 text-xl font-semibold">Tim Smith</h2>
        <h3 className="text-base font-inter text-[#89939E]">
          British Dragon Boat Racing Association
        </h3>
        <div className="hidden md:flex flex-wrap justify-center lg:justify-start items-center mt-4">
          <div className="p-2">
            <img src={Logo1} alt="Logo1" className="h-12 w-12" />
          </div>
          <div className="p-2">
            <img src={Logo2} alt="Logo2" className="h-7 w-10" />
          </div>
          <div className="p-2">
            <img src={Logo3} alt="Logo3" className="h-8 w-12" />
          </div>
          <div className="p-2 ">
            <img src={Logo4} alt="Logo4" className="h-12 w-12" />
          </div>
          <div className="p-2 ">
            <img src={Logo5} alt="Logo5" className="h-8 w-12" />
          </div>
          <div className="p-2">
            <img src={Logo6} alt="Logo6" className="h-12 w-12" />
          </div>
          <a
            href="#"
            className="font-inter text-xl font-semibold text-primary flex items-center ml-4 mt-4 lg:mt-0"
          >
            Meet all customers
            <img src={Right} alt="open" className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Customers;
