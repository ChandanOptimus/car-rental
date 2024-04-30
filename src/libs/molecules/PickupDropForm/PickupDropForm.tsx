import InputField from "../../atoms/InputField/InputField";
import "./PickupDropForm.css";
import { Geo, GeoFill } from "react-bootstrap-icons";
import { PickupDropFormType } from "./PickupDropForm.types";
import { useCarStore } from "../../../store/store";
const PickupDropForm = (props: PickupDropFormType) => {
  const {
    title,
    isPickup,
    location,
    date,
    time,
    onLocation,
    onDatesChange,
    onTimeChange,
  } = props;
  const setCarsStore = useCarStore((state: any) => state.setCarsData);

  return (
    <div className="pickup-drop-form">
      <form>
        <div>
          {isPickup ? (
            <span>
              <Geo color="#3563E9" height={20} width={20}></Geo>
            </span>
          ) : (
            <span>
              <GeoFill color="#54A6FF" height={20} width={20}></GeoFill>
            </span>
          )}
          <span className="form-title">{title}</span>
        </div>
        <div className="d-flex pt-2">
          <div className="col-lg-4 vertical-line">
            <InputField
              label="Locations"
              placeholder="Select Your City"
              value={location}
              onChange={onLocation}
            ></InputField>
          </div>

          <div className="col-lg-4 vertical-line">
            <InputField
              label="Date"
              placeholder="Select Your Date"
              value={date}
              onChange={onDatesChange}
            ></InputField>
          </div>

          <div className="col-lg-4">
            <InputField
              label="Time"
              placeholder="Select Your Time"
              value={time}
              onChange={onTimeChange}
            ></InputField>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PickupDropForm;
