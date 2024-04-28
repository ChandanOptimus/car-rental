import Button from "../../atoms/Button/Button";
import "./AdvertisementCards.css";
import { AdvertisementCardsTypes } from "./AdvertisementCards.type";
const AdvertisementCards = (props: AdvertisementCardsTypes) => {
  const { imageSrc, bgColor, buttonBgColor } = props;
  return (
    <div style={{ backgroundColor: bgColor }} className="main-card">
      <div className="title">
        <div className="col-5">The Best Platform for Car Rental</div>
        <div className="col-7"></div>
      </div>
      <div className="sub-title">
        <div className="col-5">
          Ease of doing a car rental safely and reliably. Of course at a low
          price.
        </div>
        <div className="col-7"></div>
      </div>
      <div className="button-container">
        <Button
          children="Rental Car"
          height={44}
          width={120}
          color={buttonBgColor}
        ></Button>
      </div>
      <div className="image-container d-none d-lg-flex justify-content-end">
        <img src={imageSrc}></img>
      </div>
    </div>
  );
};

export default AdvertisementCards;
