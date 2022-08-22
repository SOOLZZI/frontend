import React from "react";
import styled from "styled-components";
import { HiSearch } from "react-icons/hi";

const StyledInput = styled.input`
  margin: 2rem 0rem 1.5rem 0rem;
  border-radius: 1rem;
  padding: 1rem 2rem;
  border: none;
  width: 20rem;
  outline: 1px solid #cdcdcd;
  font-size: 1rem;
  font-weight: semi-bold;
  backgroud: var(--main-green);
`;
const StyledSearchbar = styled.div`
  color: white;
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: center;
  align-items: center;
  grid-gap: 0.5rem;
`;

function Searchbar(props: any) {
  return (
    <StyledSearchbar style={{ background: "var(--main-green)" }}>
      <StyledInput
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}/>
      <HiSearch size="30px" />
    </StyledSearchbar>
  );
}

export default Searchbar;
