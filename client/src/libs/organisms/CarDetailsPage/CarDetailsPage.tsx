import AdvertisementCards from "../../molecules/AdvertisementCards/AdvertisementCards";
import CarAd2 from "../../../images/carad2.png";
import { Heart, HeartFill } from "react-bootstrap-icons";
import "./CarDetailsPage.css";
import { useCarStore } from "../../../store/store";
import Button from "../../atoms/Button/Button";
import Reviews from "../../atoms/Reviews/Reviews";
const CarDetailsPage = () => {
  const selectedCarData = useCarStore((state: any) => state.selectedCarData);
  const {
    favorite,
    carName,
    carType,
    mileage,
    transmissionType,
    pricePerDay,
    seats,
    carImage,
  } = selectedCarData;
  return (
    <div className="d-lg-flex d-grid justify-content-between row-gap-3 row-gap-lg-0">
      <div className="photo-section col-lg-6 row row-gap-3">
        <div>
          <AdvertisementCards
            bgColor="#3563E9"
            buttonBgColor="#54A6FF"
            imageSrc={carImage}
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
      <div className="details-section col-lg-6">
        <div className="card-details-container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="details-page-car-name">{carName}</div>
            <div>
              {favorite ? (
                <HeartFill color="red"></HeartFill>
              ) : (
                <Heart color="#90A3BF"></Heart>
              )}
            </div>
          </div>
          <div className="display-page_review">
            <Reviews></Reviews>
          </div>
          <div className="pt-4  justify-content-center">
            <div className="display-page_summary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              earum nihil laborum dolore facilis perspiciatis similique pariatur
              corporis totam eum, sed adipisci et voluptate commodi, magni in
              porro laboriosam obcaecati. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Minus asperiores cum, natus ad
              sapiente nostrum, qui aut quam dolores non quidem similique atque
              voluptates, incidunt suscipit autem soluta optio quasi?
            </div>
            <div className="d-flex flex-wrap col-12 demo pt-5 row-gap-4">
              <div className="col-6 d-flex ">
                <span className="col-6 details-subtype">Transmission</span>
                <span className="col-6 details-value">{transmissionType}</span>
              </div>
              <div className="col-6 d-flex">
                <span className="col-6 details-subtype">Mileage</span>
                <span className="col-6 details-value">{mileage}</span>
              </div>
              <div className="col-6 d-flex">
                <span className="col-6 details-subtype">Seat Capacity</span>
                <span className="col-6 details-value">{seats}</span>
              </div>
              <div className="col-6 d-flex">
                <span className="col-6 details-subtype">Fuel Type</span>
                <span className="col-6 details-value">{carType}</span>
              </div>
            </div>
            <div className="d-flex pt-5 justify-content-between align-items-center">
              <div className="price-details-page">INR {pricePerDay}/ day</div>
              <div>
                <Button height={46} width={140} children={"Rent Now"}></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;
