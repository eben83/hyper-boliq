import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const LoadingScreen = () => {
    return(
        <>
            <LoaderContainer >
                <LoaderIcon>
                    <FontAwesomeIcon icon={faSpinner} size={'9x'} />
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

const LoaderIcon = styled.div`
  text-align: center;
`;

export default LoadingScreen