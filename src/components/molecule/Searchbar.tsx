import React from "react";
import { HiSearch } from "react-icons/hi";


function Searchbar(props: any) {
  return (
    <div className="bg-[#74bb41] text-white grid grid-cols-2
     justify-center justify-items-center justify-self-center gap-2 m-0 p-3 grid-flow-col">
      <input className="border-none rounded-2xl w-80 p-2 
      text-base font-semibold outline-1 outline-[#cdcdcd]"
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}/>
        
        <HiSearch size="30px"/>
        
    </div>
  );
}

export default Searchbar;
