import InputField from "../../atoms/InputField/InputField";
import "./PickupDropForm.css";
import { Geo, GeoFill } from "react-bootstrap-icons";
import { PickupDropFormType } from "./PickupDropForm.types";
import { useCarStore } from "../../../store/store";
import { DatePicker, Lookup, TimePicker } from "react-rainbow-components";

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
  const data = [
    { label: "Paris" },
    { label: "New York" },
    { label: "San Fransisco" },
    { label: "Madrid" },
    { label: "Miami" },
    { label: "London" },
    { label: "Tokyo" },
    { label: "Barcelona" },
    { label: "La Habana" },
    { label: "Buenos Aires" },
    { label: "Sao Paulo" },
    { label: "Toronto" },
  ];

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
            {/* <InputField
              label="Locations"
              placeholder="Select Your City"
              value={location}
              onChange={onLocation}
            ></InputField> */}
            <Lookup
              id="lookup-1"
              label="Locations"
              placeholder="Find"
              options={data}
              {...(location ? { value: { label: location } } : {})}
              // value={location ? { label: location } : {}}
              onChange={(value) => {
                onLocation?.(value?.label);
              }}
              // onSearch={search}
              className="location-component  d-block"
            />
          </div>

          <div className="col-lg-4 vertical-line">
            {/* <InputField
              label="Date"
              placeholder="Select Your Date"
              value={date}
              onChange={onDatesChange}
            ></InputField> */}
            <DatePicker
              formatStyle="medium"
              id="datePicker-1"
              value={date}
              onChange={onDatesChange}
              label="Date"
              // formatStyle="large"
              locale={"en-US"}
              className="date-component d-block"
            />
          </div>

          <div className="col-lg-4">
            {/* <InputField
              label="Time"
              placeholder="Select Your Time"
              value={time}
              onChange={onTimeChange}
            ></InputField> */}
            <TimePicker
              label="Time"
              id="time-picker-1"
              value={time}
              onChange={onTimeChange}
              className="time-component d-block"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default PickupDropForm;
