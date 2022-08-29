import {AiFillStar} from "react-icons/ai";
import React, { Dispatch, SetStateAction } from "react";

interface RatingSectionProps {
  ratingIndex: number;
  setRatingIndex: Dispatch<SetStateAction<number>>;
}

function RatingSection({ ratingIndex, setRatingIndex }: RatingSectionProps) {
  // map를 사용하려고 급조한 array 입니다;;
  const ArrayIndexes = [1, 2, 3, 4, 5];
  return (
    <div className="flex text-center my-1.5 inactive: bg-yellow active:text-coral">
      {ArrayIndexes.map((arrayindex, index) => (
        <AiFillStar
          size={35}
          key={`rating_${index}`}
// 여기가 핵심
          className={arrayindex <= ratingIndex ? 'active' : 'inactive'}
          onClick={() => setRatingIndex(arrayindex)}
        />
      ))}
      {/* <div className='text-base flex mx-1 items-center'>
        {ratingIndex === 5
          ? '아주좋아요'
          : ratingIndex === 4
          ? '맘에들어요'
          : ratingIndex === 3
          ? '보통이에요'
          : ratingIndex === 2
          ? '그냥그래요'
          : '별로에요'}
      </div> */}
    </div>
  );
}

export default RatingSection;