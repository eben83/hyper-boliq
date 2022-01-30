import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import styled from "styled-components";
import { useStoreActions, useStoreState } from "easy-peasy";

const CustomModal = ({movie}) => {

    const [favMovie, setFavMovie] = useState('')
    const add = useStoreActions(actions => actions.model.addFavourite);
    const movieDetails = useStoreState(state => state.model.movieDetails)


    useEffect(() => {
        setFavMovie(movie)
        // movieDetails()
    })

    const addFavourite = () => {
        add(favMovie)
    }


    return (
        <>
            <MovieCustomModalView>
                <div className='d-flex flex-column flex-md-row m-5 justify-content-center'>
                    <div className='m-md-5'>
                        <h1>{movieDetails.Title}</h1>
                        <p>{movieDetails.Type}</p>
                        <p>{movieDetails.Year}</p>
                        <p>{movieDetails.Poster}</p>
                        <p>{movieDetails.Rated}</p>
                        <Button variant="primary" onClick={() => addFavourite()}>Favourite</Button>
                    </div>
                </div>
            </MovieCustomModalView>
        </>
    )

}

const MovieCustomModalView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
`;


export default CustomModal