import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import { useStoreActions} from "easy-peasy";
import styled from 'styled-components';

const FavouriteMovie = ({favourite}) => {

    const remove = useStoreActions(actions => actions.model.remove)

        return (
            <>
                <FavouriteList>
                    <hr className='mx-3'/>
                    <h6>{favourite.Title} - {favourite.Year} - <span  className='ml-4' onClick={() => remove(favourite)}><FontAwesomeIcon icon={faTrash} /></span></h6>
                </FavouriteList>
            </>
        )
    }

    const FavouriteList = styled.div`
        .fa-trash {
            cursor: pointer;
        }
    `;

export default FavouriteMovie