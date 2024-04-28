import CardComponent from "../CardComponent/CardComponent";
import Car1 from "../../../images/Car.png";
import Car2 from "../../../images/carad1.png";
import Car3 from "../../../images/carad2.png";
import "./PopularCarSection.css";
import { useCarStore } from "../../../store/store";
import clsx from "clsx";
const PopularCarSection = () => {
  const carsData = useCarStore((state: any) => state.carsData);
  const isMenuOpen = useCarStore((state: any) => state.isMenuOpen);
  const popularCars = [...carsData]?.splice(0, 5);
  return (
    <div>
      <div className="d-flex justify-content-between px-2 pb-3">
        <span>Popular Car</span>
        <span className="view-all-button">View All</span>
      </div>
      <div className="d-flex row row-gap-4">
        {popularCars?.map((carDetails: any) => {
          return (
            <div
              key={carDetails.id}
              id={carDetails.id}
              className={clsx(isMenuOpen ? "col-4" : "col-3")}
            >
              <CardComponent
                carName={carDetails.make + " " + carDetails.model}
                favorite={true}
                carType={carDetails.fuelType}
                carImage={Car1}
                mileage={carDetails.mileage + "L"}
                transmissionType={carDetails.transmission}
                seats={2}
                pricePerDay={carDetails.price / 10}
              ></CardComponent>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularCarSection;
