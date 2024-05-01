import { DropdownModalType } from "./DropdownModal.types";
import "./DropdownModal.css";
const DropdownModal = (props: DropdownModalType) => {
  const { children } = props;
  return <div className="dropdown-modal mt-lg-2">{children}</div>;
};

export default DropdownModal;
