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
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Order from "./components/page/Order";

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/Order' element={<Order/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
