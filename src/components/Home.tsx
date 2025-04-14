import { useState } from "react";
import searchIcon from "../../public/assets/search.svg";
import arrowIcon from "../../public/assets/Group 2.svg";
import data from "../data.json";

const Home = () => {
  const [open, setOpen] = useState<boolean>(false);
  const regions: string[] = ["Africa", "America", "Asia", "Europe", "Oceania"];

  return (
    <div className="px-[16px] ">
      <div className="input-filter dk:flex dk:flex-row dk:justify-between dk:items-center dk:px-[80px]">
        <div className="input-div flex flex-col items-center mt-[24px] ">
          <input
            type="text"
            className="w-[343px] pl-[74px] py-[14px] shadow-input rounded-[5px] relative dark:bg-header-dark dark:text-[#fff] dk:w-[480px]"
            placeholder="Search for a country… "
          />
          <img
            src={searchIcon}
            alt="search icon"
            className="relative top-[-34px] right-[130px] dk:right-[200px]"
          />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="filter flex items-center justify-between w-[200px] py-[14px] shadow-filter px-[20px] rounded-[5px] dark:bg-header-dark"
        >
          <p className="text-[#111517] text-[12px] font-normal dark:text-[#fff]">
            Filter by Region
          </p>
          <img src={arrowIcon} alt="arrow down icon" />
        </div>
      </div>

      <div className="countries mt-[32px] px-[55px] flex flex-col items-center gap-[40px] dk:flex-row dk:flex-wrap dk:justify-center dk:gap-[61px] dk:px-0">
        {data.map((country) => {
          return (
            <div
              key={country.name}
              className="shadow-country dark:bg-header-dark pb-[46px] rounded-[5px] w-[264px] "
            >
              <img src={country.flags.svg} alt="country image " />
              <div className="basic-info pl-[24px]">
                <p className="mt-[24px] text-[#111517] text-[18px] font-extrabold dark:text-[#fff]">
                  {country.name}
                </p>
                <p className="text-[#111517] font-semibold text-[14px] mt-[16px] dark:text-[#fff]">
                  Population:
                  <span className="text-[#111517] font-light text-[14px] dark:text-[#fff]">{` ${new Intl.NumberFormat(
                    "en-US"
                  ).format(country.population)}`}</span>
                </p>
                <p className="text-[#111517] font-semibold text-[14px] dark:text-[#fff]">
                  Region:{" "}
                  <span className="text-[#111517] font-light text-[14px]  dark:text-[#fff]">
                    {country.region}
                  </span>
                </p>
                <p className="text-[#111517] font-semibold text-[14px] dark:text-[#fff]">
                  Capital:{" "}
                  <span className="text-[#111517] font-light text-[14px] dark:text-[#fff]">
                    {country.capital}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
