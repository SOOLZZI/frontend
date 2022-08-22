/* eslint-disalbe */
import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/molecule/NavBar";
import Searchbar from "./components/molecule/Searchbar";
import Display from './components/atom/Display';
import styled from "styled-components";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 1rem;
  list-style: none;
  margin: 0rem 1rem 0rem auto;
  align-items: center;

`;

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Searchbar type="search" placeholder="주류를 검색해보세요!"></Searchbar>
      <StyledGrid>
        <Display/>
        <Display/>
      </StyledGrid>
      
     
    </div>
  );
}

export default App;
