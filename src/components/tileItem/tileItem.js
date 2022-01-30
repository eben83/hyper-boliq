import React, {useState} from 'react';
import { Card, Button } from 'react-bootstrap'
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {useStoreActions} from "easy-peasy";
import CustomModal from "../customModal/customModal";

const Tiles = ({movie}) => {

    const selectedMovie = useStoreActions(actions => actions.model.movieSelected)

    const modalOpen = () => {
        setIsOpen(!isOpen)
        selectedMovie(movie.imdbID)
    }

    const [isOpen, setIsOpen] = useState(false)
  return (
      <>
          <CardContainer>
              <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={movie.Poster} />
                  <Card.Body>
                      <Card.Title>{movie.Title}</Card.Title>
                      <Card.Text>
                          {movie.Type}
                      </Card.Text>
                      <Button onClick={() => modalOpen()} variant="primary">View More</Button>
                  </Card.Body>
              </Card>
          </CardContainer>

          <MovieMoreView show={isOpen}>
              <CustomClose onClick={() => modalOpen()}>
                  <FontAwesomeIcon icon={faTimes} />
              </CustomClose>
              <CustomModal movie={movie} />
          </MovieMoreView>
      </>
)
}
const CardContainer = styled.div`
  width: 18rem;
  margin: 2rem;
  color: black;

  button {
    background: #2D2C2E;
    color: #C0A573;
    :hover{
      background: #C0A573;
      color: #2D2C2E;
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
      width: 100vw;
      top: 0;
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
      color: #2D2C2E;
    }
  :hover .fa-times {
    animation: rotate-icon 2s linear 1;
  }
`;


export default Tiles
