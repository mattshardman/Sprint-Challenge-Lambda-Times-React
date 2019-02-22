import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const H1 = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;

const Span = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: ${({align}) => align};
  margin-right: ${({right}) => right ? '25px': 0};
  margin-left: ${({left}) => left ? '25px': 0};
  flex: 1;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Span align="left" left>SMARCH 32, 2018</Span>
      <H1>Lambda Times</H1>
      <Span align="right" right>98°</Span>
    </HeaderWrapper>
  )
}

export default Header