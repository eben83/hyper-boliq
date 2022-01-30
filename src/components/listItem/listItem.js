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
                    <ListGroup.Item as="li" >
                        {movie.Title} - {movie.Type}
                        <span className='d-flex justify-content-center my-3'>
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
  
  button {
    background: #2D2C2E;
    color: #C0A573;
    :hover{
      background: #C0A573;
      color: #2D2C2E;
    }
  }
  
  @media(max-width: 420px) {
    width: 100vw;
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