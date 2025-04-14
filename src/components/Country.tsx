import { useParams, Link } from "react-router-dom";
import arrow from "../../public/assets/Shape.png";
import data from "../data.json";

const Country = () => {
  const { country } = useParams();
  const chosenCountry = data.filter((item) => item.name == country);

  return (
    <div className="">
      <div className="div pl-[28px]">
        <Link to={"/home"}>
          <button className="flex items-center justify-center w-[104px] bg-white mt-[40px] gap-[8px] shadow-back py-[6px] rounded-[2px] dark:bg-header-dark ">
            <img
              src={arrow}
              alt="arrow icon"
              className="dark:filter dark:invert fill-black dark:fill-white"
            />
            <span className="text-[#111517] font-normal text-[14px] dark:text-[#fff] ">
              Back
            </span>
          </button>
        </Link>
      </div>

      <div className="more-info flex flex-col items-center pl-[28px]">
        {chosenCountry.map((country) => {
          return (
            <div className="div">
              <div
                key={country.name}
                className="image flex flex-col items-center mt-[64px]"
              >
                <img
                  src={country.flags.svg}
                  alt="country flag"
                  className="w-[320px]"
                />
              </div>
              <div className="name">
                <p className="mt-[30px] text-[#111517] text-[22px] font-extrabold">
                  {country.name}
                </p>
              </div>
              <div className="more-info mt-[16px]">
                <p className="text-[#111517] text-[14px] font-semibold">
                  Native Name:{" "}
                  <span className="text-[#111517] text-[14px] font-light">
                    {country.nativeName}
                  </span>
                </p>
                <p className="text-[#111517] text-[14px] font-semibold">
                  Population:
                  <span className="text-[#111517] text-[14px] font-light">{` ${new Intl.NumberFormat(
                    "en-US"
                  ).format(country.population)}`}</span>
                </p>
                <p className="text-[#111517] text-[14px] font-semibold">
                  Region:{" "}
                  <span className="text-[#111517] text-[14px] font-light">
                    {country.region}
                  </span>
                </p>
                <p className="text-[#111517] text-[14px] font-semibold">
                  Sub Region:{" "}
                  <span className="text-[#111517] text-[14px] font-light">
                    {" "}
                    {country.subregion}
                  </span>
                </p>
                <p className="text-[#111517] text-[14px] font-semibold">
                  Capital:{" "}
                  <span className="text-[#111517] text-[14px] font-light">
                    {country.capital}
                  </span>
                </p>
              </div>
              <div className="currency mt-[32px]">
                <p className="text-[#111517] text-[14px] font-semibold">
                  Top Level Domain:{" "}
                  <span className="text-[#111517] text-[14px] font-light">
                    {country.topLevelDomain}
                  </span>
                </p>
                <p className="text-[#111517] text-[14px] font-semibold">
                  Currencies:
                  <span className="text-[#111517] text-[14px] font-light">
                    {country.currencies?.map((currency) => currency.name)}
                  </span>
                </p>
                <p className="text-[#111517] text-[14px] font-semibold">
                  Languages:
                  <span className="text-[#111517] text-[14px] font-light">
                    {country.languages
                      .map((language) => language.name)
                      .join(", ")}
                  </span>
                </p>
              </div>
              <div className="borderss flex flex-col">
                <div className="text mt-[34px]">
                  <p className="text-[#111517] text-[16px] font-semibold">
                    Border Countries:
                  </p>
                </div>
                <div className="countries-list flex flex-row flex-wrap gap-[10px] max-w-[375px] mt-[16px]">
                  {country.borders?.map((country) => {
                    return (
                      <div className="w-[96px] bg-white shadow-borders rounded-[2px] text-center text-[#111517] font-lights text-[12px]">
                        {country ? country : "No Border Countries"}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Country;
