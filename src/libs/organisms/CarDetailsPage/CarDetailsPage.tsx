import AdvertisementCards from "../../molecules/AdvertisementCards/AdvertisementCards";
import CarAd2 from "../../../images/carad2.png";
import { Heart, HeartFill } from "react-bootstrap-icons";
import "./CarDetailsPage.css";
import { useCarStore } from "../../../store/store";
const CarDetailsPage = () => {
  const selectedCarData = useCarStore((state: any) => state.selectedCarData);
  const { favorite, carName, carType, carImage } = selectedCarData;
  return (
    <div className="row">
      <div className="photo-section col-6 row row-gap-3">
        <div>
          <AdvertisementCards
            bgColor="#3563E9"
            buttonBgColor="#54A6FF"
            imageSrc={CarAd2}
          ></AdvertisementCards>
        </div>
        <div>
          <div className="col-11 d-flex gap-3">
            <div className="col-4 car-details-sub-pics"></div>
            <div className="col-4 car-details-sub-pics"></div>
            <div className="col-4 car-details-sub-pics"></div>
          </div>
        </div>
      </div>
      <div className="details-section col-6">
        <div className="card-details-container">
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
          <div>{carType}</div>
          <div className="pt-5 d-flex justify-content-center">
            <img height={72} width={232} src={carImage}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;
