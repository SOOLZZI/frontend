import React, { SetStateAction } from "react";
import Display from "../atom/Display";
import RatingSection from "../atom/RatingSection";
import OrderSection from "../organisms/OrderSection";
import AlcoholTitle from "../atom/Title";
import Elements from "../atom/Elements";
import Searchbar from "../molecule/Searchbar";
import { HiSearch } from "react-icons/hi";
import Menu from "../atom/Menu";

function AlcoholSearchPage() {
  return (
    <div className="">
        <div className="flex justify-center mt-10">
        <input className='rounded-2xl w-80 p-2 
        text-base font-semibold outline-1 outline-[#cdcdcd]'
      type="search" placeholder="주류를 검색해보세요!"></input>

            <HiSearch className="m-2"size="30px" />
        </div>
        <Menu/>
        
    </div>
  );
}

export default AlcoholSearchPage;
