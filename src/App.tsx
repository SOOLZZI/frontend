/* eslint-disalbe */
import React, { useState } from "react";
import "./App.css";
import "tailwindcss/tailwind.css";
import NavBar from "./components/organisms/NavBar";
import Searchbar from "./components/molecule/Searchbar";
import Display from './components/atom/Display';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Searchbar type="search" placeholder="주류를 검색해보세요!"></Searchbar>
      <div className="grid">
        <Display/>
        <Display/>
      </div>
     
    </div>
  );
}

export default App;
