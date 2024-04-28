import { useCarStore } from "../../../store/store";
import "./SearchBar.css";
import { Search, Sliders } from "react-bootstrap-icons";

const SearchBar = () => {
  const setCarsStore = useCarStore((state: any) => state.setCarsData);
  const isMenuOpen = useCarStore((state: any) => state.isMenuOpen);

  const filtersClickHandler = () => {
    setCarsStore("isMenuOpen", !isMenuOpen);
  };
  return (
    <div>
      <input
        placeholder="Search for your Favourite Car"
        className="input px-5 py-2"
      ></input>
      <span className="search-icon">
        <Search></Search>
      </span>
      <span role="button" className="filter-icon">
        <Sliders onClick={filtersClickHandler}></Sliders>
      </span>
    </div>
  );
};

export default SearchBar;
