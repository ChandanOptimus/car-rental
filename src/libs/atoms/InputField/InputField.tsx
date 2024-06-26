import { ChevronDown } from "react-bootstrap-icons";
import "./InputField.css";
import { InputFieldTypes } from "./InputField.types";
const InputField = (props: InputFieldTypes) => {
  const { label, placeholder, value, onChange } = props;
  return (
    <div className="">
      <div>
        <label className="input-label">{label}</label>
      </div>
      <div className="d-flex">
        <input
          className="input-field col-8"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
        ></input>
        <span className="col-2 justify-content-start d-flex">
          <ChevronDown></ChevronDown>
        </span>
      </div>
    </div>
  );
};

export default InputField;
