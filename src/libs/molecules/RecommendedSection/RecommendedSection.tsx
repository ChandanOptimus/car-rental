import CardComponent from "../CardComponent/CardComponent";
import Car1 from "../../../images/Car.png";
import "./RecommendedSection.css";
import { useCarStore } from "../../../store/store";
import clsx from "clsx";

const RecommendedSection = () => {
  const carsData = useCarStore((state: any) => state.carsData);
  const isMenuOpen = useCarStore((state: any) => state.isMenuOpen);
  return (
    <div>
      <div className=" px-2 pb-3">
        <span>Recommended Cars</span>
      </div>
      <div className="d-lg-flex row row-gap-4">
        {carsData?.map((carDetails: any) => {
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
                carImage={Car1}
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

export default RecommendedSection;
