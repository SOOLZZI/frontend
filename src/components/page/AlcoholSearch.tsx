import axios from "axios";
import { useEffect, useState } from "react";
import { HiSearch } from "react-icons/hi";
import Display from "../atom/Display";
import HorizonLine from "../atom/HorizonLine";
import Menu from "../atom/Menu";
import SlimAlcoholInfo from "../atom/SlimAlcoholInfo";

function AlcoholSearchPage() {
  const [alcoholList, setAlcoholList]=useState([] as any);

  const getAllAlcohol=(page:number,size:number)=>{
    console.log("get alcohol list")
    axios({
      url: "api/alcohol",
      method: "get",
      params: {
        page: page, // 페이징
        size: size,
      }
    }).then((res:any)=>{
      console.log(res.data);
      return res.data
    });
  }

  useEffect(()=>{
    const result = getAllAlcohol(0,20)
    console.log(result)
    setAlcoholList(result)
  })

  return (
    <div className="">
      <div className="flex justify-center mt-10">
        <input
          className="rounded-2xl w-80 p-2 
        text-base font-semibold outline-1 outline-[#cdcdcd]"
          type="search"
          placeholder="주류를 검색해보세요!"
        ></input>

        <HiSearch className="m-2" size="30px" />
      </div>
      <div className="flex justify-center">
        <Menu></Menu>
        <Menu></Menu>
        <Menu></Menu>
      </div>
      <HorizonLine />
      <div className="w-100">
        {alcoholList}
        <Display />
        <Display />
        <Display />
      </div>
      
      
    </div>
  );
}

export default AlcoholSearchPage;
