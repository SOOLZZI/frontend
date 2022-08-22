import React, { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../App.css";

const StyledNavBar = styled.nav`
  height: 4rem;
  width: 100%;
  display: flex;
  align-items: center;
  border-styled: solid none;
  font-size: 1.5rem;
  font-weight: bold;
  background: var(--main-green);
  justify-content: space-between;
`;
const StyledLogo = styled.div`
  color: white;
  cursor: pointer;
  font-size: 2rem;
  margin-left: 3rem;
`;
const StyledMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 1rem;
  list-style: none;
  margin: 0rem 1rem 0rem auto;
  color: white;
  align-items: center;
`;

const StyledLink = styled.div`
  color: white;
  text-decoration: none;
  padding: 0.3rem 1rem;

  &:hover {
    color: gray;
    border-radius: 0.5rem;
    transition: all 0.2s ease-out;
  }
`;

function NavBar() {
  return (
    <StyledNavBar>
      <StyledLogo>SOOLZZI</StyledLogo>
      <StyledMenu>
      <StyledLink>로그인</StyledLink>
        <TiThMenuOutline size="30" />
      </StyledMenu>
    </StyledNavBar>
  );
}

export default NavBar;
