import React, { useState } from "react";
import { useStoreState } from "easy-peasy";
import TileItem from "../tileItem/tileItem";
import ListItem from "../listItem/listItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faTh} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { ListGroup } from "reactstrap";

const MovieView = () => {

    const [isCardView, setIsCardView] = useState(useStoreState(state => state.model.toggleResultsView))
    const [rotateIcon, setRotateIcon] = useState(false)

    const handelView = () => {
        setIsCardView(!isCardView);
    }

    const handleRotate = () => setRotateIcon(!rotateIcon)
    const rotate = rotateIcon ? "rotate(3600deg)" : "rotate(0)"

    const timer = () => setTimeout(() => {
      handelView()
    }, 1000);
    clearTimeout(timer());

    const movies = useStoreState(state => state.model.movies.Search)

    return (
        <>

            {movies && isCardView &&
                <TableListIconSearch>
                    <div onClick={() => timer()}>
                        <FontAwesomeIcon style={{ transform: rotate, transition: "all 10s ease", cursor: "pointer" }} onClick={handleRotate}  icon={faList} size={"2x"} />
                        <p>List View</p>
                    </div>
                </TableListIconSearch>
            }
            <CardDisplay>
                {movies && isCardView &&
                        movies.map(movie =>
                        <TileItem key={movie.imdbID} movie={movie} />
                        )
                }
            </CardDisplay>

            {movies && !isCardView &&
                <TableListIconSearch>
                    <div onClick={() => timer()} className='icon'>
                        <FontAwesomeIcon style={{ transform: rotate, transition: "all 10s ease", cursor: "pointer" }} onClick={handleRotate} icon={faTh} size={"2x"} />
                        <p>Grid View</p>
                    </div>
                </TableListIconSearch>
            }

           <ListDisplay>
               <ListGroup>
                   {movies && !isCardView &&
                       movies.map(movie =>
                           <ListItem key={movie.imdbID} movie={movie} />
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
  
  .fa-list {
    position: absolute;
    right: 0;
  }
`;

const ListDisplay = styled.div`
  display: flex;
  justify-content: center;
`;

const TableListIconSearch = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  margin: 0 2.3rem 0 1rem;
`;


export default MovieView