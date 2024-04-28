import InputField from "../../atoms/InputField/InputField";
import "./PickupDropForm.css";
import { Geo, GeoFill } from "react-bootstrap-icons";
import { PickupDropFormType } from "./PickupDropForm.types";
const PickupDropForm = (props: PickupDropFormType) => {
  const { title, isPickup } = props;
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
          <div className="col-4 vertical-line">
            <InputField label="Locations" placeholder="Select Your City"></InputField>
          </div>

          <div className="col-4 vertical-line">
            <InputField label="Date" placeholder="Select Your Date"></InputField>
          </div>

          <div className="col-4">
            <InputField label="Time" placeholder="Select Your Time"></InputField>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PickupDropForm;
