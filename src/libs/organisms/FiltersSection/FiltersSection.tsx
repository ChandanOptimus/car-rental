import "./FiltersSection.css";
import { useCarStore } from "../../../store/store";
import { useEffect, useState } from "react";

const FiltersSection = () => {
  const [checkedNames, setCheckedNames]: any = useState([]);
  const setCarsStore = useCarStore((state: any) => state.setCarsData);

  const getFilteredData = async (name: string) => {
    const response = await fetch(
      "https://freetestapi.com/api/v1/cars" +
        "?search=" +
        encodeURIComponent(name)
    );
    const data = await response.json();
    setCarsStore("carsData", data);
    console.log(data);
  };

  useEffect(() => {
    getFilteredData(checkedNames);
  }, [checkedNames]);
  return (
    <div className="filter-section pt-4 px-3">
      <div>
        <div className="filter-category pb-3">MODEL</div>
        <div>
          <div className="d-flex align-items-center mb-3">
            <input
              onClick={() => {
                let filterdArray = checkedNames;
                if (checkedNames?.includes("Silver")) {
                  filterdArray = checkedNames?.filter((name: string) => {
                    return name !== "Silver";
                  });
                } else {
                  filterdArray?.push("Silver");
                }
                setCheckedNames([...filterdArray]);
              }}
              className="custom-checkbox"
              type="checkbox"
            ></input>
            <label className="ps-2"> Silver (1)</label>
          </div>
          <div className="d-flex align-items-center mb-3">
            <input
              onClick={() => {
                let filterdArray = checkedNames;
                if (checkedNames?.includes("Civic")) {
                  filterdArray = checkedNames?.filter((name: string) => {
                    return name !== "Civic";
                  });
                } else {
                  filterdArray?.push("Civic");
                }
                setCheckedNames([...filterdArray]);
              }}
              className="custom-checkbox"
              type="checkbox"
            ></input>
            <label className="ps-2"> Civic (1) </label>
          </div>
          <div className="d-flex align-items-center mb-3">
            <input
              onClick={() => {
                let filterdArray = checkedNames;
                if (checkedNames?.includes("Mustang")) {
                  filterdArray = checkedNames?.filter((name: string) => {
                    return name !== "Mustang";
                  });
                } else {
                  filterdArray?.push("Mustang");
                }
                setCheckedNames([...filterdArray]);
              }}
              className="custom-checkbox"
              type="checkbox"
            ></input>
            <label className="ps-2"> Mustang (1) </label>
          </div>
          <div className="d-flex align-items-center mb-3">
            <input
              onClick={() => {
                let filterdArray = checkedNames;
                if (checkedNames?.includes("Equinox")) {
                  filterdArray = checkedNames?.filter((name: string) => {
                    return name !== "Equinox";
                  });
                } else {
                  filterdArray?.push("Equinox");
                }
                setCheckedNames([...filterdArray]);
              }}
              className="custom-checkbox"
              type="checkbox"
            ></input>
            <label className="ps-2"> Equinox (1) </label>
          </div>
          <div className="d-flex align-items-center mb-3">
            <input
              onClick={() => {
                let filterdArray = checkedNames;
                if (checkedNames?.includes("3 Series")) {
                  filterdArray = checkedNames?.filter((name: string) => {
                    return name !== "3 Series";
                  });
                } else {
                  filterdArray?.push("3 Series");
                }
                setCheckedNames([...filterdArray]);
              }}
              className="custom-checkbox"
              type="checkbox"
            ></input>
            <label className="ps-2"> 3 Series (1) </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersSection;
