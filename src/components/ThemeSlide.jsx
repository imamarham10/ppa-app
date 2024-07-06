/* eslint-disable react/prop-types */
const ThemeToggleSlider = ({ isDarkTheme, toggleTheme }) => {
  const handleToggle = () => {
    const newTheme = isDarkTheme ? 'light' : 'dark';
    localStorage.setItem('hs_theme', newTheme);
    toggleTheme();
  };

  return (
    <div className="relative inline-flex items-center cursor-pointer" onClick={handleToggle}>
      <div
        className={`block w-14 h-8 rounded-full ${
          isDarkTheme ? 'bg-gray-800' : 'bg-gray-300'
        }`}
      >
        <div
          className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${
            isDarkTheme ? 'translate-x-full' : 'translate-x-0'
          }`}
        />
      </div>
    </div>
  );
};

export default ThemeToggleSlider;
