import React, {useState} from "react";
import TileItem from "../tileItem/tileItem";
import ListItem from "../listItem/listItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faTh} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import {ListGroup} from "reactstrap";
import SearchBar from "../searchBar/searchBar";

const MovieView = () => {

    const [isCardView, setIsCardView] = useState(false)
    const [rotateIcon, setRotateIcon] = useState(false)

    const handelView = () => setIsCardView(!isCardView)
    const handleRotate = () => setRotateIcon(!rotateIcon)
    const rotate = rotateIcon ? "rotate(180deg)" : "rotate(0)"

    const timer = () => setTimeout(() => {
      handelView()
    }, 500);
    clearTimeout(timer());


    const movies = [
        {
            id: 1,
            title: 'SpiderMan',
            text: "This is a long string"
        },
        {
            id: 2,
            title: 'Batman',
            text: "This is a long string"
        },
        {
            id: 3,
            title: 'HeMann',
            text: "This is a long string"
        },
    ]

    return (
        <>

            {isCardView &&
                <div className='d-flex flex-row-reverse justify-content-lg-evenly'>
                    <SearchBar />
                    <div onClick={() => timer()}>
                        <FontAwesomeIcon style={{ transform: rotate, transition: "all 0.2s linear" }} onClick={handleRotate}  icon={faList} size={"2x"} />
                    </div>
                </div>
            }
            <CardDisplay>
                {isCardView &&
                        movies.map(movie =>
                        <TileItem title={movie.title} text={movie.text} />
                        )
                }
            </CardDisplay>

            {!isCardView &&
                <div className='d-flex flex-row-reverse justify-content-lg-evenly'>
                    <SearchBar />
                    <div onClick={() => timer()}>
                        <FontAwesomeIcon style={{ transform: rotate, transition: "all 0.2s linear" }} onClick={handleRotate} icon={faTh} size={"2x"} />
                    </div>
                </div>
            }

           <ListDisplay>
               <ListGroup>
                   {!isCardView &&
                       movies.map(movie =>
                           <ListItem title={movie.title} text={movie.text} />
                       )
                   }
               </ListGroup>
           </ListDisplay>


        </>
    )
}

const CardDisplay = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ListDisplay = styled.div`
  display: flex;
  justify-content: center;
`;

export default MovieView