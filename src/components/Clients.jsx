import Logo1 from "../assets/Logo (1).png";
import Logo2 from "../assets/Logo (2).png";
import Logo3 from "../assets/Logo (3).png";
import Logo4 from "../assets/Logo (4).png";
import Logo5 from "../assets/Logo (5).png";
import Logo6 from "../assets/Logo (6).png";
import Logo7 from "../assets/Logo (7).png";

const Clients = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-secondary dark:bg-darkBackground p-2 md:p-6 lg:p-10 xl:p-14 2xl:p-18 text-ttertiary dark:text-darkTextPrimary">
      <h1 className="text-4xl font-semibold font-inter text-center">
        Our Clients
      </h1>
      <h2 className="mt-2 text-tsecondary dark:text-darkTextSecondary font-normal font-inter text-center">
        We have been working with some Fortune 500+ clients
      </h2>
      <div className="flex flex-wrap justify-center md:justify-between items-center space-x-4 space-y-4 mt-6 w-full px-4 md:px-32">
        <div className="p-2 bg-secondary dark:bg-darkSecondary rounded-md">
          <img src={Logo1} alt="Logo1" className="h-12 w-12"/>
        </div>
        <div className="p-2 bg-secondary dark:bg-darkSecondary rounded-md">
          <img src={Logo2} alt="Logo2" className="h-7 w-10"/>
        </div>
        <div className="p-2 bg-secondary dark:bg-darkSecondary rounded-md">
          <img src={Logo3} alt="Logo3" className="h-8 w-12"/>
        </div>
        <div className="p-2 bg-secondary dark:bg-darkSecondary rounded-md">
          <img src={Logo4} alt="Logo4" className="h-12 w-12"/>
        </div>
        <div className="p-2 bg-secondary dark:bg-darkSecondary rounded-md">
          <img src={Logo5} alt="Logo5" className="h-8 w-12"/>
        </div>
        <div className="p-2 bg-secondary dark:bg-darkSecondary rounded-md">
          <img src={Logo6} alt="Logo6" className="h-12 w-12"/>
        </div>
        <div className="p-2 bg-secondary dark:bg-darkSecondary rounded-md">
          <img src={Logo7} alt="Logo7" className="h-8 w-12"/>
        </div>
      </div>
    </div>
  );
};

export default Clients;
