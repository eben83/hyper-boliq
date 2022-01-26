import React from "react";
import logo from '../images/logo.png'
import styled from 'styled-components'
import SearchBar from "../searchBar/searchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-regular-svg-icons";

function Header () {
    return (
        <>
            <HeaderContainer>
                <ImageWrapper>
                    <img src={logo} alt='IMDB Logo'/>
                    <FontAwesomeIcon icon={faStar} />
                </ImageWrapper>
                <SearchBar />
            </HeaderContainer>
        </>
    )
}

const HeaderContainer = styled.div`
  //position: relative;
  //overflow-x: hidden;
  display: block;
  background-color: red;
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  img {
    width: 10rem;
    height: auto;
  }
`;



export default Header