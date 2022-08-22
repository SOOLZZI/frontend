import React, { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import "../../App.css";



// const StyledLink = styled.div`
//   color: white;
//   text-decoration: none;
//   padding: 0.3rem 1rem;

//   &:hover {
//     color: gray;
//     border-radius: 0.5rem;
//     transition: all 0.2s ease-out;
//   }
// `;


function NavBar() {
  return (
    <div className="bg-[#74bb41] flex items-center justify-between text-2xl
    font-bold h-16 border-solid">
      <div className="text-white ml-12 cursor-pointer">SOOLZZI</div>
      <div className="text-white grid grid-cols-2 gap-4 items-center list-none mr-1">
      <div>로그인</div>
        <TiThMenuOutline className="mr-5" size="30"/>
      </div>
    </div>
  );
}

export default NavBar;
