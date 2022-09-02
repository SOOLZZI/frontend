import React, { SetStateAction } from "react";
import Display from "../atom/Display";
import RatingSection from "../atom/RatingSection";
import OrderSection from "../organisms/OrderSection";
import AlcoholTitle from "../atom/Title";
import Elements from "../atom/Elements";

function OrderPage() {
  return (
    <div className="flex justify-around">
      <div className="flex">
        <div className="w-[400px] h-[500px] mt-20 ml-40">
          <Display />
        </div>
        <div className="mt-20 ml-20 gap-0 h-60 grid grid-cols-1 ">
          <div className="">
            <AlcoholTitle>주류이름</AlcoholTitle>
            <RatingSection
              ratingIndex={3}
              setRatingIndex={function (value: SetStateAction<number>): void {
                throw new Error("Function not implemented.");
              }}
            ></RatingSection>
          </div>

          <div className="grid grid-cols-1 ml-0 mt-10">
            <Elements>주종:</Elements>
            <Elements>도수:</Elements>
            <Elements>용량:</Elements>
          </div>
          <div className="font-semibold mt-48">
            <Elements>판매 가격: </Elements>
          </div>
        </div>
      </div>
      <div className="ml-20 mt-20">
        <OrderSection />
      </div>
    </div>
  );
}

export default OrderPage;
