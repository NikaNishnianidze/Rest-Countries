import { useState } from "react";
import moonIcon from "../../public/assets/Path.png";

const Header = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);

    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return (
    <div className="px-[16px] py-[30px] flex justify-between items-center shadow-header dark:bg-header-dark dk:py-[24px] dk:px-[80px]">
      <div className="word">
        <p className="text-[#111517] text-[14px] font-extrabold dark:text-[#Fff] dk:text-[24px]">
          Where in the world?
        </p>
      </div>
      <div
        className="dark flex items-center gap-[8px]"
        onClick={handleDarkMode}
      >
        <img src={moonIcon} alt="moon icon" className="w-[16px] h-[16px]" />

        <p
          className={`darkmode  text-[12px] font-semibold ${
            darkMode ? "text-[#111517]" : "text-[#fff]"
          } dk:text-[16px]`}
        >
          Dark Mode
        </p>
      </div>
    </div>
  );
};

export default Header;
