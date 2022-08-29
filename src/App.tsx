/* eslint-disalbe */
import React, { useState } from "react";
import "./App.css";
import "tailwindcss/tailwind.css";
import NavBar from "./components/organisms/NavBar";
import Display from "./components/atom/Display";
import Button from "./components/atom/Button";
import DropDown from "./components/atom/DropDown";
import Review from "./components/organisms/Review";
import OrderBar from "./components/organisms/OrderBar";
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <DropDown />
      <Button type="button">입력</Button>
      <Review></Review>

      <OrderBar/>
    </div>
  );
}

export default App;
