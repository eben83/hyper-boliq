import React, {useState} from "react";
import {Button, ListGroup } from "react-bootstrap";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

const ListItem = ({title, text}) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <ListContainer>
                <ListGroup as="ul">
                    <ListGroup.Item as="li" >
                        {title} - {text}
                        <span className='d-flex'>
                            <Button onClick={() => setIsOpen(!isOpen)} variant="primary">View More</Button>
                        </span>
                    </ListGroup.Item>
                </ListGroup>
            </ListContainer>

            <MovieMoreView show={isOpen}>
                <CustomClose onClick={() => setIsOpen(!isOpen)}>
                    <FontAwesomeIcon icon={faTimes} />
                </CustomClose>
                <MovieCustomModalView>
                    <img src='https://picsum.photos/256/186' alt='Image'/>
                    <h1>{title}</h1>
                    <p>{text}</p>
                </MovieCustomModalView>
            </MovieMoreView>
        </>
    )
}

const ListContainer = styled.div`
  width: 50rem;
  background-image: url("https://picsum.photos/256/186") ;
`;

const ListImage = styled.div`
  background-image: url("https://picsum.photos/256/186") ;
  background-repeat: no-repeat;
  background-size: cover;
`;

const TitleText = styled.span`
  font-weight: bold;
  background-color: #eeeeee;
`;

const MovieMoreView = styled.div`
    position: fixed;
    top: 6.7rem;
    bottom: 0;
    right: 0;
    background: slategrey;
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
    
    .fa-times {
      cursor: pointer;
      transition: transform 2s ease-in-out;
      font-size: 2rem;
    }
  :hover .fa-times {
    animation: rotate-icon 2s linear 1;
  }
`;

const MovieCustomModalView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
`;

export default ListItem