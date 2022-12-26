import React from 'react';
import styled from "styled-components";
import { Container } from 'reactstrap';

const PageNotFound = () =>{
    return ( 
        <ContainerParent>
            <Container>
                <h1>OUPS !!!</h1>
                <h2>404 Error</h2>
                <h2>La page est introuvable.</h2>
            </Container>
        </ContainerParent>
    )
}
  
export default PageNotFound;

const ContainerParent = styled.div`
    padding-top: 2em;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.bg};
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    padding-bottom: 15em;
    min-height: 95vh;
}
`
