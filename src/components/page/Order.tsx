import React, { SetStateAction } from "react";
import "../../App.css";
import Display from "../atom/Display";
import RatingSection from "../atom/RatingSection";
import OrderBar from "../organisms/OrderBar";
function OrderPage() {
  return (
    <div className="flex w-full justify-around">
      <div className="flex">
        <div className="mt-20 ml-10">
          <Display />
        </div>
        <div className="h-60 mt-20 ml-20 grid grid-cols-1 ">
          <div>
            <h1 className="text-3xl font-bold">주류이름</h1>
            <RatingSection
              ratingIndex={3}
              setRatingIndex={function (value: SetStateAction<number>): void {
                throw new Error("Function not implemented.");
              }}
            ></RatingSection>
          </div>
          <div className="grid grid-cols-1 ml-0 font-semibold">
            <h2>주종:</h2>
            <h3>도수:</h3>
            <h4>용량:</h4>
          </div>
          <div className="mt-20 font-semibold">
            <h5>판매 가격: </h5>
          </div>
        </div>
      </div>
      <div className="ml-20 mt-20">
        <OrderBar />
      </div>

    </div>
  );
}

export default OrderPage;
