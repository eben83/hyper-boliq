import React from 'react'

const FavouriteMovie = ({favourite}) => {
        return (
            <>
                <div>
                    <hr className='mx-3'/>
                    <h6>{favourite.Title} - {favourite.Year}</h6>
                </div>
            </>
        )
    }

export default FavouriteMovie