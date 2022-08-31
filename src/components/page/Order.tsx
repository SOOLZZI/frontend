import React, { SetStateAction } from "react";
import "../../App.css";
import Display from "../atom/Display";
import RatingSection from "../atom/RatingSection";
import OrderBar from "../organisms/OrderBar";
function OrderPage() {
  return (
    <div className="flex">
        <div className="w-96 h-40">
            <Display/>
        </div>
      
      <div className='grid grid-row-3 grid-cols-1'>
      <div className="">
        <h1>참이슬</h1>
        <RatingSection
          ratingIndex={3}
          setRatingIndex={function (value: SetStateAction<number>): void {
            throw new Error("Function not implemented.");
          }}
        ></RatingSection>
        </div>
        <div  className="grid grid-cols-1">
        <h2>주종: </h2>
        <h3>도수: </h3>
        <h4>용량: </h4>
        </div>
        <div  className="grid">
        <h5>판매 가격: </h5>
      </div>
      </div>
      <div className="m-40">
        <OrderBar/>
      </div>
      
    </div>
  );
}

export default OrderPage;
