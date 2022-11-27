import React from 'react';
import styled from "styled-components";
import wall from './images/imageedit_2_9154631188.png'
import logo from './images/santa-claus (1).png'
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <Wrapper>
            <WrapperDisplay>
                  <a href={'/main'}><ImgWrapper src={logo} /></a>
                <StyledLink href={'/main'}><TextWrapper>Secret Santa</TextWrapper></StyledLink>
            </WrapperDisplay>

        </Wrapper>
    );
};
const Wrapper = styled.div`
  background-color: #04a15e;
  opacity: 0.9;
  background-image: url(${wall});
  color: #fff;
  height: 120px;
  z-index: 1;
  border-bottom: 1px solid;
  position: sticky;
  top: 0;
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  padding-left: 150px
`
const WrapperDisplay = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`
const ImgWrapper = styled.img`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  height:75px;
`
const TextWrapper =styled.span`
  font-family: "Lobster",cursive;
  color: white;
  font-size: 55px;
  justify-content: center;
`
const StyledLink = styled.a`
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`