import "./PickupDropForm.css";
import { Geo, GeoFill } from "react-bootstrap-icons";
import { PickupDropFormType } from "./PickupDropForm.types";
import { useCarStore } from "../../../store/store";
import {
  DatePicker,
  Option,
  Picklist,
  TimePicker,
} from "react-rainbow-components";
import { useEffect } from "react";

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
  useEffect(() => {
    const dropdown = document.getElementById("lookup-listbox-5")?.classList;
    console.log(dropdown);
  }, []);

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
            <Picklist
              id="picklist-1"
              onChange={(value) => {
                onLocation?.(value?.label);
              }}
              {...(location ? { value: { label: location } } : {})}
              label="Locations"
              className="location-component  d-block"
            >
              {data?.map((items: any) => {
                return <Option name="header" label={items.label} />;
              })}
            </Picklist>
          </div>

          <div className="col-lg-4 vertical-line">
            <DatePicker
              formatStyle="medium"
              id="datePicker-1"
              value={date}
              onChange={onDatesChange}
              label="Date"
              locale={"en-US"}
              className="date-component d-block"
            />
          </div>

          <div className="col-lg-4">
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
