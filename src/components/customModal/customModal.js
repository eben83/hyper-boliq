import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import styled from "styled-components";
import {useStoreActions, useStoreDispatch, useStoreState} from "easy-peasy";

const CustomModal = ({movie}) => {

    const [favMovie, setFavMovie] = useState('')
    const add = useStoreActions(actions => actions.model.addFavourite);
    const dispatch = useStoreDispatch()

    useEffect(() => {
        setFavMovie(movie)
    })

    const addFavourite = () => {
        add(favMovie)
    }


    return (
        <>
            <MovieCustomModalView>
                <div className='d-flex flex-column flex-md-row m-5 justify-content-center'>
                    <div>
                        <img src={movie.Poster}  alt={movie.Title} />
                    </div>
                    <div className='m-md-5'>
                        <h1>{movie.Title}</h1>
                        <p>{movie.Type}</p>
                        <p>{movie.Year}</p>
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