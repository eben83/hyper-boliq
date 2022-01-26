import React from "react";
import {Button} from "reactstrap";
import styled from "styled-components";


function SearchBar () {
    return (
        <>
            <TextSearch>
                <form>
                    <input />
                </form>
                <Button
                    color="primary">
                    Search
                </Button>
            </TextSearch>
        </>
    )
}

const TextSearch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  input {
    height: 3rem;
  }
  
  @media (min-width: 660px) {
    flex-direction: row;
  }
`;

export default SearchBar