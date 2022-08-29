import React from "react";
import { HiSearch } from "react-icons/hi";
import Input from '../atom/Input';

function Searchbar(props: any) {
  return (
    <div
      className="bg-[#74bb41] grid
     justify-center justify-items-center gap-2 m-0 p-3"
    >
      <Input type="search" placeholder="주류를 검색해보세요!"></Input>
      <HiSearch className="text-white p-0"size="30px" />
    </div>
  );
}

export default Searchbar;
