/* eslint-disalbe */
import React, { useState } from "react";
import "./App.css";
import "tailwindcss/tailwind.css";
import Header from "./components/organisms/Header";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Order from "./components/page/Order";
import Login from './components/page/Login';
import SignUp from './components/page/SignUp';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/Order' element={<Order/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
