import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import styled, {keyframes} from "styled-components";

const LoadingScreen = () => {
    return(
        <>
            <LoaderContainer >
                <LoaderIcon>
                    <FontAwesomeIcon icon={faSpinner} size={'6x'} />
                </LoaderIcon>
            </LoaderContainer>
        </>
    )
}

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoaderIcon = styled.div`
  text-align: center;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(-360deg);
    }
`;



export default LoadingScreen