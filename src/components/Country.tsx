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

      <div className="more-info flex flex-col items-center pl-[28px] dk:px-[80px]">
        {chosenCountry.map((country) => {
          return (
            <div className="div">
              <div
                key={country.name}
                className="image flex flex-col items-center mt-[64px] dk:flex-row dk:gap-[120px]"
              >
                <div className="image">
                  <img
                    src={country.flags.svg}
                    alt="country flag"
                    className="w-[320px]"
                  />
                </div>
                <div className="all-other-info">
                  <div className="name">
                    <p className="mt-[30px] text-[#111517] text-[22px] font-extrabold dk:text-[32px] dark:text-[#fff]">
                      {country.name}
                    </p>
                  </div>
                  <div className="row dk:flex dk:flex-row dk:items-start dk:gap-[141px] dk:mt-[23px]">
                    <div className="more-info mt-[16px] dk:mt-0">
                      <p className="text-[#111517] text-[14px] font-semibold dk:text-[16px] dark:text-[#fff]">
                        Native Name:{" "}
                        <span className="text-[#111517] text-[14px] font-light dk:text-[16px] dark:text-[#fff]">
                          {country.nativeName}
                        </span>
                      </p>
                      <p className="text-[#111517] text-[14px] font-semibold dk:text-[16px] dark:text-[#fff]">
                        Population:
                        <span className="text-[#111517] text-[14px] font-light dk:text-[16px] dark:text-[#fff]">{` ${new Intl.NumberFormat(
                          "en-US"
                        ).format(country.population)}`}</span>
                      </p>
                      <p className="text-[#111517] text-[14px] font-semibold dk:text-[16px] dark:text-[#fff]">
                        Region:{" "}
                        <span className="text-[#111517] text-[14px] font-light dk:text-[16px] dark:text-[#fff]">
                          {country.region}
                        </span>
                      </p>
                      <p className="text-[#111517] text-[14px] font-semibold dk:text-[16px] dark:text-[#fff]">
                        Sub Region:{" "}
                        <span className="text-[#111517] text-[14px] font-light dk:text-[16px] dark:text-[#fff]">
                          {" "}
                          {country.subregion}
                        </span>
                      </p>
                      <p className="text-[#111517] text-[14px] font-semibold dk:text-[16px] dark:text-[#fff]">
                        Capital:{" "}
                        <span className="text-[#111517] text-[14px] font-light dk:text-[16px] dark:text-[#fff]">
                          {country.capital}
                        </span>
                      </p>
                    </div>
                    <div className="currency mt-[32px] dk:mt-0">
                      <p className="text-[#111517] text-[14px] font-semibold dk:text-[16px] dark:text-[#fff]">
                        Top Level Domain:{" "}
                        <span className="text-[#111517] text-[14px] font-light dk:text-[16px] dark:text-[#fff]">
                          {country.topLevelDomain}
                        </span>
                      </p>
                      <p className="text-[#111517] text-[14px] font-semibold dk:text-[16px] dark:text-[#fff]">
                        Currencies:
                        <span className="text-[#111517] text-[14px] font-light dk:text-[16px] dark:text-[#fff]">
                          {country.currencies?.map((currency) => currency.name)}
                        </span>
                      </p>
                      <p className="text-[#111517] text-[14px] font-semibold dk:text-[16px] dark:text-[#fff]">
                        Languages:
                        <span className="text-[#111517] text-[14px] font-light dk:text-[16px] dark:text-[#fff]">
                          {country.languages
                            .map((language) => language.name)
                            .join(", ")}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="borderss flex flex-col dk:flex-row dk:items-center dk:justify-center dk:gap-[16px] dk:mt-[70px]">
                    <div className="text mt-[34px] dk:mt-0">
                      <p className="text-[#111517] text-[16px] font-semibold dark:text-[#fff]">
                        Border Countries:
                      </p>
                    </div>
                    <div className="countries-list flex flex-row flex-wrap gap-[10px] max-w-[375px] mt-[16px] dk:max-w-[460px] dk:items-center dk:mt-0">
                      {country.borders?.map((country) => {
                        return (
                          <div className="w-[96px] bg-white shadow-borders rounded-[2px] text-center text-[#111517] font-lights text-[12px] dk:text-[14px] dark:bg-header-dark dark:text-[#fff]">
                            {country ? country : "No Border Countries"}
                          </div>
                        );
                      })}
                    </div>
                  </div>
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
