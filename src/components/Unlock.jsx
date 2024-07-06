import frame from "../assets/Frame 35.png";

const Unlock = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-secondary dark:bg-darkBackground text-ttertiary dark:text-darkTextPrimary px-4 md:px-8 lg:px-20 py-8">
      <img 
        src={frame} 
        alt="frame" 
        className="w-80 h-80 md:w-96 md:h-96 mb-8 md:mb-0 md:mr-8 p-2 dark:bg-darkSecondary rounded-md" 
      />
      <div className="flex flex-col flex-wrap w-full md:w-1/2 px-8">
        <h1 className="font-inter text-2xl md:text-4xl lg:text-4xl font-semibold mb-4 text-center md:text-left">
          The unseen of spending three<br/> years at Pixelgrade
        </h1>
        <p className="font-inter text-sm md:text-base lg:text-lg mb-4 text-center md:text-left text-tsecondary dark:text-darkTextSecondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
        </p>
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
};

export default Unlock;
