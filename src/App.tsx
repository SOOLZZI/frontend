/* eslint-disalbe */
import React, { useState } from "react";
import "./App.css";
import "tailwindcss/tailwind.css";
import Header from "./components/organisms/Header";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Order from "./components/page/Order";
import Login from './components/page/Login';
import SignUp from './components/page/SignUp';
import AlcoholSearch from './components/page/AlcoholSearch';
import axios from "axios";

axios.defaults.baseURL="http://localhost:8080/";
axios.defaults.withCredentials=true;

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/Order' element={<Order/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path='/AlcoholSearch' element={<AlcoholSearch/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
