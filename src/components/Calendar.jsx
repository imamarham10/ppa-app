import pana from '../assets/pana.png';

const Calendar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-secondary dark:bg-darkBackground text-ttertiary dark:text-darkTextPrimary px-4 md:px-8 lg:px-20 py-8">
      <img 
        src={pana} 
        alt="frame" 
        className="w-80 h-80 md:w-96 md:h-96 mb-8 md:mb-0 md:mr-8 p-2 dark:bg-darkSecondary rounded-md" 
      />
      <div className="flex flex-col flex-wrap w-full md:w-1/2 px-8">
        <h1 className="font-inter text-2xl md:text-4xl lg:text-4xl font-semibold mb-4 text-center md:text-left">
          How to design your site footer like
          <span className="hidden lg:block"></span> {/* Line break for large screens */}
          we did
        </h1>
        <p className="font-inter text-sm md:text-base lg:text-lg mb-4 text-center md:text-left text-tsecondary dark:text-darkTextSecondary">
        Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.        </p>
        <div className="flex justify-center md:justify-start mt-4">
          <button
            className="bg-primary text-secondary dark:text-darkBackground font-inter rounded"
            style={{ width: '151px', height: '52px', padding: '0' }}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
