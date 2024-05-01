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
  return (
    <div className="col-12 d-grid d-lg-flex header align-items-center p-4 p-lg-0 justify-content-center">
      <div className="col-lg-3 logo justify-content-center d-flex d-lg-block">
        <a href="http://localhost:3000/">
          <img src={logo}></img>
        </a>
      </div>
      <div className=" menu-section-mobile d-flex justify-content-center d-lg-none">
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
      <div className="col-lg-6">
        <SearchBar></SearchBar>
      </div>
      <div className="col-3 d-none d-lg-flex justify-content-end">
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
