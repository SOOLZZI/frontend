import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Logo from "../atom/Logo";
import DropDown from "../atom/DropDown";

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
    <div
      className="bg-[#74bb41] flex items-center justify-between text-2xl
    font-bold h-16 border-solid"
    >
      <Logo />
      <div className="text-white grid grid-cols-2 gap-4 items-center list-none m-0 hover:text-gray">
        <div>로그인</div>
        <DropDown />
      </div>
    </div>
  );
}

export default NavBar;
