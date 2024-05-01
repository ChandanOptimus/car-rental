import CardComponent from "../CardComponent/CardComponent";
import Car2 from "../../../images/carad1.png";
import "./PopularCarSection.css";
import { useCarStore } from "../../../store/store";
import clsx from "clsx";
const PopularCarSection = () => {
  const carsData = useCarStore((state: any) => state.carsData);
  const isMenuOpen = useCarStore((state: any) => state.isMenuOpen);
  const popularCars = [...carsData]?.splice(-4, 4);
  return (
    <div>
      <div className="d-flex justify-content-between px-2 pb-3">
        <span>Popular Car</span>
        <span className="view-all-button">View All</span>
      </div>
      <div className="d-lg-flex row row-gap-4">
        {popularCars?.map((carDetails: any) => {
          return (
            <div
              key={carDetails.id}
              id={carDetails.id}
              className={clsx(isMenuOpen ? "col-lg-4" : "col-lg-3")}
            >
              <CardComponent
                carName={carDetails.make + " " + carDetails.model}
                favorite={true}
                carType={carDetails.fueltype1}
                carImage={Car2}
                mileage={carDetails.city08 + "-" + carDetails.highway08 + "L"}
                transmissionType={carDetails.trany}
                seats={2}
                pricePerDay={carDetails.fuelcost08}
              ></CardComponent>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularCarSection;
