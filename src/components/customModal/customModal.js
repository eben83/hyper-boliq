import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import styled from "styled-components";
import { useStoreActions, useStoreState } from "easy-peasy";

const CustomModal = ({movie}) => {

    const [favMovie, setFavMovie] = useState('')
    const add = useStoreActions(actions => actions.model.addFavourite);
    const movieDetail = useStoreState(state => state.model.movieDetails)


    useEffect(() => {
        setFavMovie(movie)
    })

    const addFavourite = () => {
        add(favMovie)
    }


    return (
        <>
            <MovieCustomModalView>
                <div className='d-flex flex-column flex-md-row m-5 mx-auto'>
                    <ModalImage className='w-50 mx-auto'>
                        <img src={movieDetail.Poster} alt={movieDetail.Title} />
                    </ModalImage>
                    <div className='w-50 mx-auto'>
                        <h1>{movieDetail.Title}</h1>
                        <p>{movieDetail.Type}</p>
                        <p>{movieDetail.Year}</p>
                        <p>{movieDetail.Plot}</p>
                        <Button variant="primary" onClick={() => addFavourite()}>Favourite</Button>
                    </div>
                </div>
            </MovieCustomModalView>
        </>
    )

}

const MovieCustomModalView = styled.div`
  //position: absolute;
  display: flex;
  margin: 0 auto;
  //flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;

  button {
    background: #2D2C2E;
    color: #C0A573;
    :hover{
      background: #C0A573;
      color: #2D2C2E;
    }
  }
`;

const ModalImage = styled.div`
  @media(max-width: 420px) {
    img {
      width: 3rem;
    }
  }
`;


export default CustomModal