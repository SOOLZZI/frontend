import React from 'react';
import styled from 'styled-components';

const StyledDisplay = styled.div`
    width: 12rem;
    height: 15rem;
    margin: 4rem auto;
    padding: 200px 123px 192px;
    border-radius: 2rem;
    border: solid 1px #cdcdcd;
  `;


function Display(){
    return(
        <StyledDisplay></StyledDisplay>
    )
}
export default Display;