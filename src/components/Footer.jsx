import logo from "../assets/FooterLogo.png";
import socialicon1 from "../assets/Social Icons.png";
import socialicon2 from "../assets/Social Icons1.png";
import socialicon3 from "../assets/Social Icons2.png";
import socialicon4 from "../assets/Social Icons3.png";
import vector from "../assets/Vector.png";

const Footer = () => {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-around bg-[#263238] dark:bg-darkBackground px-16 py-20">
      <div className="flex flex-col items-center md:items-start mb-10 md:mb-0">
        <img src={logo} alt="Logo" className="mb-4" />
        <h2 className="text-sm font-normal text-secondary mt-4 mb-1 text-center md:text-left">
          Copyright © 2020 Nexcent ltd.
        </h2>
        <h2 className="text-sm font-normal text-secondary mb-5 text-center md:text-left">
          All rights reserved
        </h2>
        <div className="flex gap-4 mt-5">
          <img src={socialicon1} alt="Instagram" />
          <img src={socialicon3} alt="Twitter" />
          <img src={socialicon4} alt="LinkedIn" />
          <img src={socialicon2} alt="Facebook" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-start items-center gap-10 md:gap-20">
        <div className="flex flex-col gap-3 items-center md:items-start">
          <h2 className="font-inter font-semibold text-xl text-secondary">Company</h2>
          <h3 className="font-inter text-sm font-normal text-secondary">About us</h3>
          <h3 className="font-inter text-sm font-normal text-secondary">Blog</h3>
          <h3 className="font-inter text-sm font-normal text-secondary">Contact us</h3>
          <h3 className="font-inter text-sm font-normal text-secondary">Pricing</h3>
          <h3 className="font-inter text-sm font-normal text-secondary">Testimonials</h3>
        </div>
        <div className="flex flex-col gap-3 items-center md:items-start">
          <h2 className="font-inter font-semibold text-xl text-secondary">Support</h2>
          <h3 className="font-inter text-sm font-normal text-secondary">Help center</h3>
          <h3 className="font-inter text-sm font-normal text-secondary">Terms of service</h3>
          <h3 className="font-inter text-sm font-normal text-secondary">Legal</h3>
          <h3 className="font-inter text-sm font-normal text-secondary">Privacy policy</h3>
          <h3 className="font-inter text-sm font-normal text-secondary">Status</h3>
        </div>
        <div className="flex flex-col gap-3 items-center md:items-start">
          <h2 className="font-inter font-semibold text-xl text-secondary">Stay up to date</h2>
          <div className="flex items-center justify-between px-3 bg-gray-700 py-3 rounded-lg w-[255px]">
            <input
              placeholder="Your email address"
              className="bg-gray-700 text-secondary outline-none text-center"
            />
            <img src={vector} className="w-[12.5px] h-[12.5px]" alt="Submit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
