import React, {useState} from "react";
import {Button, ListGroup } from "react-bootstrap";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import CustomModal from "../customModal/customModal";
import {useStoreActions} from "easy-peasy";

const ListItem = ({movie}) => {

    const selectedMovie = useStoreActions(actions => actions.model.movieSelected)

    const modalOpen = () => {
        setIsOpen(!isOpen)
        selectedMovie(movie.imdbID)
    }

    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <ListContainer>
                <ListGroup as="ul">
                    <ListGroup.Item as="li" className="d-flex w-100">
                        <span className="justify-content-left w-25">
                          <img src={movie.Poster} alt={movie.Title} style={{width: '3rem'}} />
                        </span >
                        <span className="justify-content-center mt-4 w-50">
                        <span style={{fontWeight: 'Bold'}}>{movie.Title}</span> || {movie.Type} || {movie.Year}
                        </span>
                        <span className="justify-content-right w-25 mt-3">
                          <Button onClick={() => modalOpen()} variant="primary">View More</Button>  
                        </span>
                        
                    </ListGroup.Item>
                </ListGroup>
            </ListContainer>

            <MovieMoreView show={isOpen}>
                <CustomClose onClick={() => modalOpen()}>
                    <FontAwesomeIcon icon={faTimes} />
                </CustomClose>
                <CustomModal movie={movie} />
            </MovieMoreView>
        </>
    )
}

const ListContainer = styled.div`
  width: 50rem;
  
  span > button {
    background: #2D2C2E;
    color: #C0A573;
    display: flex,
    justify-content: flex-end; 
    width: 100%,
  }


  button {
    margin-left: 2rem;
    :hover{
      background: #C0A573;
      color: #2D2C2E;
    }
  }
  @media(max-width: 420px) {
    width: 90vw;

    button {
      margin-left: 1rem
    }
  }
`;

const MovieMoreView = styled.div`
    position: fixed;
    top: 10rem;
    bottom: 0;
    right: 0;
    background: #C0A573;
    width: 100vw;
    z-index: 2;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateY(0)' : 'translateY(100%)'};
    transition: transform 0.5s ease-in-out;
  
    @media (max-width: 420px) {
      width: 90vw;
    }
`;

const CustomClose = styled.div`
    display: flex;
    justify-content: flex-end;
    color: #2D2C2E;
    z-index: 999;
    
    .fa-times {
      cursor: pointer;
      transition: transform 2s ease-in-out;
      font-size: 2rem;
    }
  :hover .fa-times {
    animation: rotate-icon 2s linear 1;
  }
`;

export default ListItem