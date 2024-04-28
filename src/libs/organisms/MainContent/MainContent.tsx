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
import CarDetailsPage from "../CarDetailsPage/CarDetailsPage";

const MainContent = () => {
  const setCarsStore = useCarStore((state: any) => state.setCarsData);
  const selectedCarData = useCarStore((state: any) => state.selectedCarData);

  const buttonChildren = () => {
    return <ArrowDownUp width={20} height={20}></ArrowDownUp>;
  };
  const getAllCarDetails = async () => {
    const response = await fetch("http://localhost:5000/api/cars");
    const data = await response.json();
    setCarsStore("carsData", data);
  };
  useEffect(() => {
    getAllCarDetails();
  }, []);
  useEffect(() => {
    console.log(selectedCarData);
  }, [selectedCarData]);

  return (
    <div>
      {selectedCarData ? (
        <div>
          <CarDetailsPage></CarDetailsPage>
        </div>
      ) : (
        <div className="d-grid d-lg-flex justify-content-lg-between gap-4">
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
      )}

      <div className="d-lg-flex d-grid row-gap-3 pt-4">
        <div className="col-lg-5">
          <PickupDropForm title="Pick-Up" isPickup={true}></PickupDropForm>
        </div>
        <div className="col-lg-2 justify-content-center d-flex align-items-center">
          <Button children={buttonChildren()} height={60} width={60}></Button>
        </div>
        <div className="col-lg-5">
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
