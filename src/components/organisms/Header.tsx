import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Logo from "../atom/Logo";
import DropDown from "../atom/DropDown";
import Searchbar from "../molecule/Searchbar";
import { TiThMenuOutline } from "react-icons/ti";

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

function Header() {
  return (
    <div
      className="bg-[#74bb41] flex items-center justify-between text-2xl
    font-bold h-16 border-solid"
    >
      <Logo />
      <Searchbar />
      <div className="text-2xl text-white grid grid-cols-2 gap-4 items-center list-none m-0 hover:text-gray">
        <div><a href="Login">로그인</a></div>
        <TiThMenuOutline className="mr-5" size="30" />
      </div>
    </div>
  );
}

export default Header;
