import searchIcon from "../../public/assets/search.svg";

const Home = () => {
  return (
    <>
      <div className="input-div flex flex-col items-center mt-[24px] ">
        <input
          type="text"
          className="w-[343px] pl-[74px] py-[14px] shadow-input rounded-[5px] relative"
          placeholder="Search for a country…"
        />
        <img
          src={searchIcon}
          alt="search icon"
          className="relative top-[-34px] right-[130px]"
        />
      </div>
    </>
  );
};

export default Home;
