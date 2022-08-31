import React, { useState } from "react";
import Button from "../atom/Button";
import { HiPlusSm } from "react-icons/hi";
import { HiMinusSm } from "react-icons/hi";

function OrderBar() {
  const [Num, setNum] = useState(1);
  return (
    <div className="grid grid-rows-6 grid-cols-1">
      <h1>수량</h1>
      <div className="flex justify-between items-center">
        <HiPlusSm
          onClick={() => {
            setNum(Num + 1);
          }}
        />
        {Num}
        <HiMinusSm
          onClick={() => {
            setNum(Num - 1);
          }}
        />
      </div>
      <h2>총 상품 가격</h2>
      <h3>{Num}</h3>
      <Button>장바구니</Button>
      <Button>바로 구매하기</Button>
    </div>
  );
}

export default OrderBar;
