import React, {useState} from "react";
import {Button} from "reactstrap";
import styled from "styled-components";
import {useStoreActions} from "easy-peasy";


function SearchBar () {

    const fetchMovies = useStoreActions(actions => actions.model.fetchMovies)
    const [text, setText] = useState('')
    // useEffect(() => {
    //     fetchMovies();
    // }, [])

    return (
        <>
            <TextSearch>
                <form>
                    <input onBlur={(e) => setText(e.target.value)} />
                </form>
                <Button
                    onClick={() => fetchMovies(text)}
                    color="primary">
                    Search
                </Button>
            </TextSearch>
        </>
    )
}

const TextSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  
  input {
    height: 2.5rem;
  }
  
  button {
    height: 2.5rem;
  }
`;

export default SearchBar