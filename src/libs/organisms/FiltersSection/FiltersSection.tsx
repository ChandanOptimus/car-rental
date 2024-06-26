import "./FiltersSection.css";
import { useCarStore } from "../../../store/store";
import { useEffect, useState } from "react";

const FiltersSection = () => {
  const [checkedNames, setCheckedNames]: any = useState([]);
  const setCarsStore = useCarStore((state: any) => state.setCarsData);
  const [filterData, setFilterData]: any = useState([]);

  const getFilters = async () => {
    const response = await fetch("http://localhost:5000/api/cars/allFilters");
    const data = await response.json();
    setFilterData(data);
  };

  const getFilteredData = async (name: string) => {
    const response = await fetch(
      "http://localhost:5000/api/cars?make=" + encodeURIComponent(name)
    );
    const data = await response.json();
    setCarsStore("carsData", data);
  };
  useEffect(() => {
    getFilters();
  }, []);

  useEffect(() => {
    console.log(checkedNames);
    getFilteredData(checkedNames);
  }, [checkedNames]);
  return (
    <div className="filter-section pt-4 px-3">
      <div>
        <div className="filter-category pb-3">MODEL</div>
        {filterData?.map((data: any) => {
          return (
            <div>
              <div className="d-flex align-items-center mb-3">
                <input
                  onClick={() => {
                    let filterdArray = checkedNames;
                    if (checkedNames?.includes(data.make)) {
                      filterdArray = checkedNames?.filter((name: string) => {
                        return name !== data.make;
                      });
                    } else {
                      filterdArray?.push(data.make);
                    }
                    setCheckedNames([...filterdArray]);
                  }}
                  className="custom-checkbox"
                  type="checkbox"
                ></input>
                <label className="ps-2">
                  {data.make} ({data.count})
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FiltersSection;
