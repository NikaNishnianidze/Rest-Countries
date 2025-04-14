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
    <div className="px-[16px] py-[30px] flex justify-between items-center shadow-header">
      <div className="word">
        <p className="text-[#111517] text-[14px] font-extrabold">
          Where in the world?
        </p>
      </div>
      <div
        className="dark flex items-center gap-[8px]"
        onClick={handleDarkMode}
      >
        <img src={moonIcon} alt="moon icon" className="w-[16px] h-[16px]" />
        <p className="text-[#111517] text-[12px] font-semibold">Dark Mode</p>
      </div>
    </div>
  );
};

export default Header;
