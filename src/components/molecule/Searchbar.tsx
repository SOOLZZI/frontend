import React from "react";
import { HiSearch } from "react-icons/hi";

function Searchbar(props: any) {
  return (
    <div
      className="bg-[#74bb41] grid
     justify-center justify-items-center gap-2 m-0 p-3"
    >
      <input className='rounded-2xl w-80 p-2 
        text-base font-semibold outline-1 outline-[#cdcdcd]'
      type="search" placeholder="주류를 검색해보세요!"></input>
      <HiSearch className="text-white p-0"size="30px" />
    </div>
  );
}

export default Searchbar;
