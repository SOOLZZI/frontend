import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import RatingSection from "../atom/RatingSection";

function Review() {
  const [ratingIndex, setRatingIndex] = useState(1);
  return (
    <div>
       <div className="flex justify-between w-3/5 bg-gray-200 rounded-2xl">
      <div className="flex items-center ml-3">
        <BiUser size="30px" />
        <h1 className="ml-3">닉네임</h1>
      </div>
      <div className="flex items-center text-base mr-3">
        <RatingSection
          ratingIndex={ratingIndex}
          setRatingIndex={setRatingIndex}
        />
        <h1 className="text-lg ml-3">20**.**.**</h1>
      </div>
    </div>
    <h1 className="flex m-3">좋아요!</h1>
    </div>
    
    
  );
}

export default Review;
