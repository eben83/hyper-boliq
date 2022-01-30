import React, {useState} from "react";
import {Button} from "reactstrap";
import styled from "styled-components";
import {useStoreActions} from "easy-peasy";


function SearchBar () {

    const fetchMovies = useStoreActions(actions => actions.model.fetchMovies)
    const [text, setText] = useState('')
    const search = () => {
        fetchMovies(text)
        setText('')
    }

    return (
        <>
            <TextSearch>
                <form>
                    <input onBlur={(e) => setText(e.target.value)} />
                </form>
                <Button
                    onClick={() => search()}
                    color="primary">
                    Search
                </Button>
            </TextSearch>
        </>
    )
}

const TextSearch = styled.div`
  display: flex;
    
  input {
    height: 2.5rem;
  }
  
  button {
    height: 2.5rem;
  }
`;

export default SearchBar