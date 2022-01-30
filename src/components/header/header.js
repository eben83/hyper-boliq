import React, {useState} from "react";
import logo from '../images/logo.png'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {useStoreState} from "easy-peasy";
import FavouriteMovie from "../favouriteMovie/favouriteMovie";
import SearchBar from "../searchBar/searchBar";

const Header = () => {

    const favourites = useStoreState(state => state.model.favourites)
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <HeaderContainer>
                <div>
                    <ImageWrapper>
                        <img src={logo} alt='IMDB Logo'/>
                    </ImageWrapper>

                    <Favorite show={isOpen}>
                        <CustomClose onClick={() => setIsOpen(!isOpen)}>
                            <FontAwesomeIcon icon={faTimes} />
                        </CustomClose>
                        <h6>Favorite</h6>
                        {favourites &&
                            favourites.map(favourite =>
                                <FavouriteMovie key={favourite.imdbID} favourite={favourite} />
                            )
                        }
                    </Favorite>
                    <RightMenu>
                        <IconContainer onClick={() => setIsOpen(!isOpen)}>
                            <FontAwesomeIcon on className='icon' icon={faStar} />
                            <p>Favorites</p>
                        </IconContainer>
                    </RightMenu>
                </div>
                <SearchBar />
            </HeaderContainer>
        </>
    )
}

const HeaderContainer = styled.div`
  display: flex;
  background-color: #2D2C2E;
  width: 100vw;
  height: 10rem;
  
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 3rem;
  left: 2rem;
  img {
    width: 10rem;
    height: auto;
  }
`;

const RightMenu = styled.div`
  position: absolute;
  top: 3rem;
  right: 2rem;
  
  @media(max-width: 420px) {
    top: 4rem;
  }
`;

const IconContainer = styled.div`
  font-size: 3rem;
  cursor: pointer;
  
  
  .icon{
    display: flex;
    align-content: center;
    height: 100%;
    margin-right: 2rem;
    transition: transform 2s ease-in-out;
    color: #C0A573;
  }
  
  p {
    font-size: 1rem;
    position: absolute;
    right: 1rem;
    display: none;
  }
  :hover p {
    display: block;
    color: #C0A573
  }
  :hover .icon {
    animation: rotate-icon 2s linear 1;
  }

  @keyframes rotate-icon {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(-360deg);
    }
`;

const Favorite = styled.div`
    position: fixed;
    top: 10rem;
    bottom: 0;
    right: 0;
    background: #C0A573;
    width: 250px;
    z-index: 2;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateY(0)' : 'translateY(100%)'};
    transition: transform 0.5s ease-in-out;
}
    .fa-times {
      font-size: 1.5rem;
      width: 1rem;
      height: 1rem;
      position: absolute;
      color: #2D2C2E;
      transition: transform 2s ease-in-out;
    }
    
    :hover .fa-times {
      animation: rotate-icon 2s linear 1;
    }
    @media (max-width: 420px) {
      width: 100vw;
    }
`;

const CustomClose = styled.div`
    display: flex;
    justify-content: flex-end;
    
    .fa-times {
        cursor: pointer;
    }
`;



export default Header