import React, { useState } from "react";
import Button from "../atom/Button";
import { HiPlusSm } from "react-icons/hi";
import { HiMinusSm } from "react-icons/hi";

function OrderSection() {
  const [Num, setNum] = useState(1);
  return (
    <div className="grid gap-2 grid-rows-6 grid-cols-1 text-lg font-semibold w-80 border px-5 rounded-lg">
      <h1 className=''>수량</h1>
      <div className="flex justify-between items-center border p-2 rounded-lg">
        <HiMinusSm
          onClick={() => {
            setNum(Num - 1);
          }}
        />
        {Num}
        <HiPlusSm
          onClick={() => {
            setNum(Num + 1);
          }}
        />
      </div>
      <h2>총 상품 가격</h2>
      <div className="flex justify-center border p-2 rounded-lg">
        <h3>{Num} 원</h3>
      </div>
      <div></div>
      <Button>장바구니</Button>
      <Button>바로 구매하기</Button>
    </div>
  );
}

export default OrderSection;
