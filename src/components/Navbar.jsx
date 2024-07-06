/* eslint-disable react/prop-types */
import logo from '../assets/Logo .png';
import logo1 from '../assets/FooterLogo.png';
import ThemeToggleSlider from '../components/ThemeSlide';

const Navbar = ({ toggleTheme, isDarkTheme, theme }) => {
  return (
    <div className={`${theme === "light" ? "bg-white text-tprimary" : "bg-gray-900 text-white"}`}>
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-4">
        {/* Logo */}
        <div className={`flex items-center ${theme === "light" ? "hover:text-primary" : "hover:text-gray-300"} ${theme === "light" ? "bg-white" : ""}`}>
          <img src={theme === "light" ? logo : logo1} alt="Nexcent" className="w-auto h-7" />
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-8 my-4 md:my-0">
          {["Home", "About", "Services", "Blog", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className={`hover:text-primary text-base font-medium font-inter ${
                theme === "light" ? "text-tprimary" : "text-gray-300"
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Toggle Slider and Buttons */}
        <div className="flex flex-row gap-5 md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <ThemeToggleSlider isDarkTheme={isDarkTheme} toggleTheme={toggleTheme}/>
          <button
            className="px-4 py-2 bg-secondary text-primary rounded-md hover:bg-gray-200"
            aria-label="Login"
          >
            Login
          </button>
          <button
            className="px-4 py-2 bg-primary text-darkBackground rounded-md hover:bg-green-600"
            aria-label="Sign Up"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;