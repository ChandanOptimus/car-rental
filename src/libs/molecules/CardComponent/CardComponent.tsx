import Button from "../../atoms/Button/Button";
import { CardComponentTypes } from "./CardComponent.types";
import "./CardComponent.css";
import {
  Heart,
  HeartFill,
  FuelPumpFill,
  Activity,
  PeopleFill,
} from "react-bootstrap-icons";

const CardComponent = (props: CardComponentTypes) => {
  const {
    carName,
    favorite,
    carType,
    mileage,
    transmissionType,
    pricePerDay,
    seats,
    discountedPrice,
    carImage,
  } = props;
  return (
    <div className="card-component-container">
      <div className="d-flex justify-content-between">
        <div className="car-name">{carName}</div>
        <div>
          {favorite ? (
            <HeartFill color="red"></HeartFill>
          ) : (
            <Heart color="#90A3BF"></Heart>
          )}
        </div>
      </div>
      <div>
        <span className="car-type">{carType}</span>
      </div>
      <div className="pt-5 d-flex justify-content-center">
        <img height={72} width={232} src={carImage}></img>
      </div>
      <div className="d-flex pt-5 justify-content-between">
        <div style={{ color: "#90A3BF" }} className="d-flex">
          <div style={{ marginRight: 8, marginTop: -2 }}>
            <FuelPumpFill></FuelPumpFill>
          </div>
          <div>{mileage}</div>
        </div>
        <div>
          <div style={{ color: "#90A3BF" }} className="d-flex">
            <div style={{ marginRight: 8, marginTop: -2 }}>
              <Activity></Activity>
            </div>
            <div>{transmissionType}</div>
          </div>
        </div>
        <div>
          <div style={{ color: "#90A3BF" }} className="d-flex">
            <div style={{ marginRight: 8, marginTop: -2 }}>
              <PeopleFill></PeopleFill>
            </div>
            <div>{seats}</div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between pt-3">
        <div className="price-section">INR {pricePerDay} / day</div>
        <div>{discountedPrice}</div>
        <div>
          <Button height={35} width={110} children={"Rent Now"}></Button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
