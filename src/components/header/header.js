import React, {useState} from "react";
import logo from '../images/logo.png'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {useStoreState} from "easy-peasy";
import FavouriteMovie from "../favouriteMovie/favouriteMovie";

const Header = () => {

    const favourites = useStoreState(state => state.model.favourites)
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <HeaderContainer>
                <ImageWrapper>
                    <img src={logo} alt='IMDB Logo'/>
                </ImageWrapper>
                <RightMenu>
                    <IconContainer onClick={() => setIsOpen(!isOpen)}>
                        <FontAwesomeIcon on className='icon' icon={faStar} />
                        <p>Favorites</p>
                    </IconContainer>
                </RightMenu>
                <Favorite show={isOpen}>
                    <CustomClose onClick={() => setIsOpen(!isOpen)}>
                        <FontAwesomeIcon icon={faTimes} />
                    </CustomClose>
                    <p>Favorite</p>
                    {favourites &&
                        favourites.map(favourite =>
                            <FavouriteMovie key={favourite.imdbID} favourite={favourite} />
                        )
                    }
                </Favorite>
            </HeaderContainer>
        </>
    )
}

const HeaderContainer = styled.div`
  display: flex;
  background-color: red;
  justify-content: space-evenly;
  width: 100%;
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

const RightMenu = styled.div`
  display: flex;
  align-items: center;
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
  }
  
  p {
    font-size: 1rem;
    position: absolute;
    right: 1rem;
    display: none;
  }
  :hover p {
    display: block;
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
    top: 6.7rem;
    bottom: 0;
    right: 0;
    background: slategrey;
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
      transition: transform 2s ease-in-out;
    }
    
    :hover .fa-times {
      animation: rotate-icon 2s linear 1;
    }
    @media (max-width: 420px) {
      width: 90vw;
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