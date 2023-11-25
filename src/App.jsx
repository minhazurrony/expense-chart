import { useState, useEffect } from "react";
import data from "./data/expense-data.json";
import { colorMapper } from "./utils/colorMapper";
import { DonutChart } from "./components/DonutChart";

function App() {
  const [activeFilter, setActiveFilter] = useState(data[3].period);
  const [modifiedData, setModifiedData] = useState([]);

  useEffect(() => {
    const foundData = data.find((item) => item.period === activeFilter);

    const formattedData = Object.keys(foundData)
      .filter((key) => key !== "period")
      .map((key) => {
        return {
          category: key,
          value: foundData[key],
          color: colorMapper(key),
        };
      });
    setModifiedData(formattedData);
  }, [activeFilter]);

  const handleFilter = (event) => {
    setActiveFilter(event.target.value);
  };
  return (
    <div className="bg-dark_purple h-[100dvh] flex flex-col align-middle justify-center">
      <h1 className="capitalize font-sans text-[42px] text-neutral_white font-bold text-center mb-[34px]">
        expense chart
      </h1>

      <div className="p-8 bg-neutral_white  w-[calc(100vw-32px)] my-0 mx-[auto] rounded-[40px] md:w-[80vw] lg:w-[60vw] xl:w-[40vw] 2xl:w-[35vw]">
        <h2 className="capitalize text-neutral_black text-[24px] text-center mb-[42px] font-bold">
          expenses
        </h2>

        <div className="mx-[auto] px-8 py-3 bg-light_grey_2 flex flex-row flex-wrap justify-between items-center rounded-[32px] md:w-[65%] lg:w-[60%]">
          <button
            value={"1M"}
            type="button"
            className={`tracking-[0.84px] uppercase py-1 px-2 text-[12px] font-medium text-dark_grey focus:outline-none ${
              activeFilter === "1M" && "bg-neutral_white text-blue"
            }  rounded-full hover:bg-neutral_white hover:text-blue`}
            onClick={handleFilter}
          >
            1m
          </button>
          <button
            value={"6M"}
            type="button"
            className={`tracking-[0.84px] uppercase py-1 px-2 text-[12px] font-medium text-dark_grey focus:outline-none ${
              activeFilter === "6M" && "bg-neutral_white text-blue"
            }  rounded-full hover:bg-neutral_white hover:text-blue`}
            onClick={handleFilter}
          >
            6m
          </button>
          <button
            value={"1Y"}
            type="button"
            className={`tracking-[0.84px] uppercase py-1 px-2 text-[12px] font-medium text-dark_grey focus:outline-none ${
              activeFilter === "1Y" && "bg-neutral_white text-blue"
            }  rounded-full hover:bg-neutral_white hover:text-blue`}
            onClick={handleFilter}
          >
            1y
          </button>
          <button
            value={"ALL TIME"}
            type="button"
            className={`tracking-[0.84px] uppercase py-1 px-2 text-[12px] font-medium text-dark_grey focus:outline-none ${
              activeFilter === "ALL TIME" && "bg-neutral_white text-blue"
            }  rounded-full hover:bg-neutral_white hover:text-blue`}
            onClick={handleFilter}
          >
            all time
          </button>
        </div>

        <DonutChart
          width={300}
          height={300}
          items={modifiedData}
          innerRadius={100}
          outerRadius={125}
        />
        <div className="mt-[47px] flex flex-row flex-wrap">
          {modifiedData.map((item, idx) => {
            return (
              <div
                className="flex flex-row items-center mr-[22px]"
                key={`${item.category}-${idx}`}
              >
                <div
                  className={`w-[37px] h-[13px] rounded-[33px] mr-[13px]`}
                  style={{ backgroundColor: `${item.color}` }}
                ></div>
                <p className="text-[16px] text-light_grey_1 font-medium tracking-[-0.32px] capitalize">
                  {item?.category}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
