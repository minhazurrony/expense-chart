import { useState } from "react";
function App() {
  const [activeFilter, setActiveFilter] = useState("ALL TIME");

  const handleFilter = (event) => {
    setActiveFilter(event.target.value);
  };
  return (
    <div className="bg-dark_purple h-[100dvh] flex flex-col align-middle justify-center">
      <h1 className="capitalize font-sans text-[42px] text-neutral_white font-bold text-center mb-[34px]">
        expense chart
      </h1>

      <div className="p-8 bg-neutral_white h-[561px] w-[545px] my-0 mx-[auto] rounded-[40px]">
        <h2 className="capitalize text-neutral_black text-[24px] text-center mb-[42px] font-bold">
          expenses
        </h2>

        <div className="w-[291px] h-[56px] mx-[auto] px-8 py-3 bg-light_grey_2 flex flex-row justify-between align-middle rounded-[32px]">
          <button
            value={"1M"}
            type="button"
            className={`tracking-[0.84px] uppercase py-1 px-2 text-[12px] font-medium text-dark_grey focus:outline-none ${
              activeFilter === "1M" && "bg-neutral_white"
            }  rounded-full hover:bg-neutral_white hover:text-blue`}
            onClick={handleFilter}
          >
            1m
          </button>
          <button
            value={"6M"}
            type="button"
            className={`tracking-[0.84px] uppercase py-1 px-2 text-[12px] font-medium text-dark_grey focus:outline-none ${
              activeFilter === "6M" && "bg-neutral_white"
            }  rounded-full hover:bg-neutral_white hover:text-blue`}
            onClick={handleFilter}
          >
            6m
          </button>
          <button
            value={"1Y"}
            type="button"
            className={`tracking-[0.84px] uppercase py-1 px-2 text-[12px] font-medium text-dark_grey focus:outline-none ${
              activeFilter === "1Y" && "bg-neutral_white"
            }  rounded-full hover:bg-neutral_white hover:text-blue`}
            onClick={handleFilter}
          >
            1y
          </button>
          <button
            value={"ALL TIME"}
            type="button"
            className={`tracking-[0.84px] uppercase py-1 px-2 text-[12px] font-medium text-dark_grey focus:outline-none ${
              activeFilter === "ALL TIME" && "bg-neutral_white"
            }  rounded-full hover:bg-neutral_white hover:text-blue`}
            onClick={handleFilter}
          >
            all time
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
