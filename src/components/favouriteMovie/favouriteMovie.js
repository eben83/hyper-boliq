import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import { useStoreActions} from "easy-peasy";

const FavouriteMovie = ({favourite}) => {

    const remove = useStoreActions(actions => actions.model.remove)

        return (
            <>
                <div>
                    <hr className='mx-3'/>
                    <h6>{favourite.Title} - {favourite.Year} - <span className='ml-4' onClick={() => remove(favourite)}><FontAwesomeIcon icon={faTrash} /></span></h6>
                </div>
            </>
        )
    }

export default FavouriteMovie