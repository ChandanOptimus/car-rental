import AdvertisementCards from "../../molecules/AdvertisementCards/AdvertisementCards";
import CarAd1 from "../../../images/carad1.png";
import CarAd2 from "../../../images/carad2.png";
import PickupDropForm from "../../molecules/PickupDropForm/PickupDropForm";
import Button from "../../atoms/Button/Button";
import { ArrowDownUp } from "react-bootstrap-icons";
import PopularCarSection from "../../molecules/PopularCarSection/PopularCarSection";
import RecommendedSection from "../../molecules/RecommendedSection/RecommendedSection";
import React, { useEffect } from "react";
import { useCarStore } from "../../../store/store";

const MainContent = () => {
  const setCarsStore = useCarStore((state: any) => state.setCarsData);

  const buttonChildren = () => {
    return <ArrowDownUp width={20} height={20}></ArrowDownUp>;
  };
  const getAllCarDetails = async () => {
    const response = await fetch("https://freetestapi.com/api/v1/cars");
    const data = await response.json();
    setCarsStore("carsData", data);
    console.log(data);
  };
  useEffect(() => {
    getAllCarDetails();
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-between gap-4">
        <AdvertisementCards
          imageSrc={CarAd1}
          bgColor="#54A6FF"
          buttonBgColor="#3563E9"
        ></AdvertisementCards>
        <AdvertisementCards
          imageSrc={CarAd2}
          bgColor="#3563E9"
          buttonBgColor="#54A6FF"
        ></AdvertisementCards>
      </div>
      <div className="d-flex pt-4">
        <div className="col-5">
          <PickupDropForm title="Pick-Up" isPickup={true}></PickupDropForm>
        </div>
        <div className="col-2 justify-content-center d-flex align-items-center">
          <Button children={buttonChildren()} height={60} width={60}></Button>
        </div>
        <div className="col-5">
          <PickupDropForm title="Drop-Off" isPickup={false}></PickupDropForm>
        </div>
      </div>
      <div className=" pt-4">
        <PopularCarSection></PopularCarSection>
      </div>
      <div className=" pt-4">
        <RecommendedSection></RecommendedSection>
      </div>
      <div className="mt-4 pt-4 d-flex justify-content-center">
        <Button height={50} width={140} children={"Show more cars"}></Button>
      </div>
    </div>
  );
};

export default MainContent;
