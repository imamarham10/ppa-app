import { useEffect, useRef } from "react";
import { CountUp } from "countup.js";
import icon1 from "../assets/Icon1.png";
import icon2 from "../assets/Icon2.png";
import icon3 from "../assets/Icon3.png";
import icon4 from "../assets/Icon4.png";

const Achievement = () => {
  const countUpRefs = useRef([]);
  countUpRefs.current = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const options = {
      threshold: 0.1,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const countUp = new CountUp(entry.target, entry.target.getAttribute('data-count'), {
            startVal: 0,
            duration: 2, // Animation duration
            useEasing: true,
            useGrouping: true,
            separator: ',',
            decimal: '.',
          });
          if (!countUp.error) {
            countUp.start();
          } else {
            console.error(countUp.error);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    countUpRefs.current.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      countUpRefs.current.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center bg-secondary dark:bg-darkBackground text-ttertiary dark:text-secondary px-4 md:px-16 lg:px-48 py-10">
      <div className="flex flex-col mb-8 md:mb-0 md:mr-8 w-full md:w-1/2">
        <h1 className="font-inter text-ttertiary dark:text-secondary text-2xl md:text-4xl lg:text-4xl font-semibold mb-4 text-center md:text-left">
          Helping a local
        </h1>
        <h1 className="font-inter text-primary  text-2xl md:text-4xl lg:text-4xl font-semibold mb-4 text-center md:text-left">
          business reinvent itself
        </h1>
        <h2 className="font-inter font-normal text-base text-tprimary dark:text-darkTextSecondary text-center md:text-left">
          We reached here with our hard work and dedication
        </h2>
      </div>
      <div className="flex flex-col w-full md:w-1/2">
        <div className="flex justify-around mb-8">
          <div className="flex items-center space-x-4">
            <img src={icon1} alt="Members" className="w-12 h-12" />
            <div className="flex flex-col" style={{ width: '120px' }}>
              <h1 
                ref={countUpRefs.current[0]} 
                data-count="2245341" 
                className="font-inter text-ttertiary dark:text-secondary text-xl md:text-2xl lg:text-3xl font-semibold">
                0
              </h1>
              <h2 className="font-inter font-normal text-base text-tprimary dark:text-darkTextSecondary">
                Members
              </h2>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img src={icon3} alt="Awards" className="w-12 h-12" />
            <div className="flex flex-col" style={{ width: '120px' }}>
              <h1 
                ref={countUpRefs.current[1]} 
                data-count="828867" 
                className="font-inter text-ttertiary dark:text-secondary text-xl md:text-2xl lg:text-3xl font-semibold">
                0
              </h1>
              <h2 className="font-inter font-normal text-base text-tprimary dark:text-darkTextSecondary">
                Clubs
              </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-around">
          <div className="flex items-center space-x-4">
            <img src={icon2} alt="Members" className="w-12 h-12" />
            <div className="flex flex-col" style={{ width: '120px' }}>
              <h1 
                ref={countUpRefs.current[2]} 
                data-count="46328" 
                className="font-inter text-ttertiary dark:text-secondary text-xl md:text-2xl lg:text-3xl font-semibold">
                0
              </h1>
              <h2 className="font-inter font-normal text-base text-tprimary dark:text-darkTextSecondary">
                Event Bookings
              </h2>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img src={icon4} alt="Countries" className="w-12 h-12" />
            <div className="flex flex-col" style={{ width: '120px' }}>
              <h1 
                ref={countUpRefs.current[3]} 
                data-count="1926436" 
                className="font-inter text-ttertiary dark:text-secondary text-xl md:text-2xl lg:text-3xl font-semibold">
                0
              </h1>
              <h2 className="font-inter font-normal text-base text-tprimary dark:text-darkTextSecondary">
                Payments
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
