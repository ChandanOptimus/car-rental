import { useEffect, useState } from "react";
import { useCarStore } from "../../../store/store";
import DropdownModal from "../DropdownModal/DropdownModal";
import "./SearchBar.css";
import { Search, Sliders, CarFront } from "react-bootstrap-icons";

const SearchBar = () => {
  const setCarsStore = useCarStore((state: any) => state.setCarsData);
  const isMenuOpen = useCarStore((state: any) => state.isMenuOpen);
  const [inputValue, setInputValue] = useState("");
  const [searchResult, setSearchResult]: any = useState();

  const filtersClickHandler = () => {
    setCarsStore("isMenuOpen", !isMenuOpen);
  };

  const getSearchResults = async (name: string) => {
    const response = await fetch(
      process.env.API_PREFIX
        ? process.env.API_PREFIX + "/api/cars/search?make="
        : "http://localhost:5000/api/cars/search?make=" +
            encodeURIComponent(name)
    );
    const data = await response.json();
    setSearchResult(data);
  };

  useEffect(() => {
    if (inputValue.length !== 0) {
      getSearchResults(inputValue);
    } else {
      setSearchResult([]);
    }
  }, [inputValue]);
  return (
    <div>
      <div>
        <input
          placeholder="Search for your Favourite Car"
          className="input px-5 py-2"
          value={inputValue}
          onChange={(e: any) => {
            setInputValue(e.target.value);
          }}
        ></input>
        <span className="search-icon">
          <Search></Search>
        </span>
        <span role="button" className="filter-icon">
          <Sliders onClick={filtersClickHandler}></Sliders>
        </span>
      </div>
      {searchResult?.length ? (
        <div className="d-flex justify-content-center justify-content-lg-start">
          <DropdownModal>
            <div className="suggestion-container row-gap-3 d-grid">
              {searchResult?.map((result: any) => {
                return (
                  <div
                    role="button"
                    className="car-list-item align-items-center d-flex"
                  >
                    <div className="car-list-item-inner">
                      <CarFront className="me-4"></CarFront>
                      {result.make + " " + result.model}
                    </div>
                  </div>
                );
              })}
            </div>
          </DropdownModal>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SearchBar;
