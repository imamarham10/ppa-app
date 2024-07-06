import image1 from "../assets/image 18.png";
import image2 from "../assets/image 19.png";
import image3 from "../assets/image 20.png";
import right from "../assets/Right.png";

const CommunityUpdates = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center p-10 dark:bg-darkBackground bg-lightBackground">
      <h1 className="font-semibold font-inter text-2xl md:text-3xl lg:text-4xl text-center dark:text-secondary text-ttertiary">
        Caring is the new marketing
      </h1>
      <p className="font-inter font-normal mt-4 text-sm md:text-base lg:text-lg text-center dark:text-darkTextSecondary text-tsecondary max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl">
        The Nexcent blog is the best place to read about the latest membership
        insights, trends, and more. See who joining the community, read about
        how our community is increasing their membership income, and lots more.
      </p>
      <div className="flex flex-wrap justify-center gap-5 my-5">
        {/* First Card */}
        <div className="relative flex flex-col mb-20 items-center w-[368px] h-[366px] md:w-[368px] md:h-[366px]">
          <img
            src={image1}
            alt="image1"
            className="w-full h-full rounded-lg object-cover"
          />
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center shadow-md bg-secondary rounded-lg w-80 p-4 max-w-[368px]">
            <div className="relative z-10 mb-2">
              <p className="font-inter font-semibold text-xl text-tsecondary md:text-lg lg:text-xl text-center">
                Creating Streamlined Safeguarding Processes with OneRen
              </p>
            </div>
            <a
              href="#"
              className="flex items-center font-inter font-semibold text-primary mt-2"
            >
              Read More
              <img src={right} alt="arrow" className="ml-2" />
            </a>
          </div>
        </div>

        {/* Second Card */}
        <div className="relative flex flex-col mb-20 items-center w-[368px] h-[366px] md:w-[368px] md:h-[366px]">
          <img
            src={image2}
            alt="image2"
            className="w-full h-full rounded-lg object-cover"
          />
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center shadow-md bg-secondary rounded-lg w-80 p-4 max-w-[368px]">
            <div className="relative z-10 mb-2">
              <p className="font-inter font-semibold text-xl text-tsecondary md:text-lg lg:text-xl text-center">
                What are your safeguarding responsibilities and how can you
                manage them?
              </p>
            </div>
            <a
              href="#"
              className="flex items-center font-inter font-semibold text-primary mt-2"
            >
              Read More
              <img src={right} alt="arrow" className="ml-2" />
            </a>
          </div>
        </div>

        {/* Third Card */}
        <div className="relative flex flex-col mb-20 items-center w-[368px] h-[366px] md:w-[368px] md:h-[366px]">
          <img
            src={image3}
            alt="image3"
            className="w-full h-full rounded-lg object-cover"
          />
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center shadow-md bg-secondary rounded-lg w-80 p-4 max-w-[368px]">
            <div className="relative z-10 mb-2">
              <p className="font-inter font-semibold text-xl text-tsecondary md:text-lg lg:text-xl text-center">
                Revamping the Membership Model with Triathlon Australia
              </p>
            </div>
            <a
              href="#"
              className="flex items-center font-inter font-semibold text-primary mt-2"
            >
              Read More
              <img src={right} alt="arrow" className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityUpdates;
