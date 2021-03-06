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
  margin-top: 1rem;
  margin-left: 1rem;
  input {
    height: 2.5rem;
  }
  
  button {
    height: 2.5rem;
  }
  
  @media(max-width: 420px) {
    margin-right: 2rem;
  }
`;

export default SearchBar