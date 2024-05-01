import { StarFill, Star } from "react-bootstrap-icons";

const Reviews = () => {
  return (
    <div className="gap-1 d-flex align-items-center">
      <StarFill color="darkorange"></StarFill>
      <StarFill color="darkorange"></StarFill>
      <StarFill color="darkorange"></StarFill>
      <StarFill color="darkorange"></StarFill>
      <Star color="darkorange"></Star>
      <div className="ms-2"> +440 Reviewers</div>
    </div>
  );
};

export default Reviews;
