import logo from "../../../images/logo.png";
import "./Header.css";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import {
  HeartFill,
  BellFill,
  GearFill,
  PersonFill,
} from "react-bootstrap-icons";

const Header = () => {
  const test = "";
  return (
    <div className="col-12 d-flex header align-items-center">
      <div className="col-3 logo">
        <img src={logo}></img>
      </div>
      <div className="col-6">
        <SearchBar></SearchBar>
      </div>
      <div className="col-3 d-flex justify-content-end">
        <div className="d-flex justify-content-around icon-group">
          <div className="right-icons d-flex justify-content-center align-items-center">
            <HeartFill color="#596780"></HeartFill>
          </div>
          <div className="right-icons d-flex justify-content-center align-items-center">
            <BellFill color="#596780"></BellFill>
          </div>
          <div className="right-icons d-flex justify-content-center align-items-center">
            <GearFill color="#596780"></GearFill>
          </div>
          <div className="right-icons d-flex justify-content-center align-items-center">
            <PersonFill color="#596780"></PersonFill>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
