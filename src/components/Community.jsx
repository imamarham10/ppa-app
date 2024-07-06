import icon1 from "../assets/Icon.png";
import icon2 from "../assets/Icon (1).png";
import icon3 from "../assets/Icon (2).png";

const Community = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-secondary dark:bg-darkBackground text-ttertiary dark:text-darkTextPrimary font-inter px-4 md:px-10 lg:px-20 py-8">
      <h1 className="font-semibold text-3xl sm:text-4xl text-center">
        Manage your entire community <br className="hidden sm:block" /> in a single system
      </h1>
      <h2 className="font-normal text-tsecondary dark:text-darkTextSecondary text-base mt-4 text-center">
        Who is Nextcent suitable for?
      </h2>
      <div className="flex flex-wrap justify-evenly items-center w-full mt-4 space-y-6 md:space-y-0">
        <div className='flex flex-col shadow-sm items-center text-center px-5 py-8 w-full sm:w-1/2 md:w-72'>
          <img src={icon1} alt="member" className="w-16 h-14 mb-4 bg-secondary p-1 dark:bg-darkSecondary rounded-md"/>
          <h2 className="font-semibold text-2xl text-ttertiary dark:text-darkTextPrimary">Membership<br/> Organisations</h2>
          <p className="text-sm text-tsecondary mt-2 dark:text-darkTextSecondary">
            Our membership management software provides full automation of membership renewals and payments.
          </p>
        </div>
        <div className='flex flex-col shadow-sm items-center text-center px-5 py-8 w-full sm:w-1/2 md:w-72'>
          <img src={icon2} alt="member" className="w-16 h-14 mb-4 bg-secondary p-2 dark:bg-darkSecondary rounded-md"/>
          <h2 className="font-semibold text-2xl text-ttertiary dark:text-darkTextPrimary">National<br/>Associations</h2>
          <p className="text-sm mt-2 text-tsecondary dark:text-darkTextSecondary">
            Our membership management software provides full automation of membership renewals and payments.
          </p>
        </div>
        <div className='flex flex-col shadow-sm items-center text-center px-5 py-8 w-full sm:w-1/2 md:w-72'>
          <img src={icon3} alt="member" className="w-16 h-14 mb-4 bg-secondary p-2 dark:bg-darkSecondary rounded-md"/>
          <h2 className="font-semibold text-2xl text-ttertiary dark:text-darkTextPrimary">Clubs And <br/> Groups</h2>
          <p className="text-sm mt-2 text-tsecondary dark:text-darkTextSecondary">
            Our membership management software provides full automation of membership renewals and payments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Community;
