
import React, { useEffect, useState } from "react";
import { Card, Container, CardText, Button, CardBody, CardTitle } from 'reactstrap';
import styled from "styled-components";
import axios from "axios";
import Error404 from "../Errors/Error404";

export default function Certifs(){
    const [certifications, setCertifications] = useState(null);

    useEffect(() => {    
        refreshCertifications();
    }, []);
  

    const refreshCertifications = () => {
        var url = process.env.REACT_APP_BACKEND_API+'Certifications/'
        axios.get(url)
          .then((res) => {
            setCertifications(res.data);
          })
          .catch(console.error);
      };

    if (!certifications) return <Error404 />;

    return(    
        <>
            <ContainerParent>
                <ContainerCertifs style={{display:'grid'}}
                fluid="sm">
                    {certifications.map((certification) => {
                        return (
                            <CardCertifs
                                className="my-2"
                                style={{width: '18rem'}}
                            >
                                <CardBody >
                                    <CardTitle tag="h5">
                                        {certification.title}
                                    </CardTitle>
                                    <CardText>
                                        Identifiant de la certification <br />
                                        {certification.identifiant}
                                    </CardText>
                                    <CardText>
                                        {certification.datefield}
                                    </CardText>
                                    <a href={certification.urlcertif} rel="noreferrer" target="_blank">
                                        <Button color="info">
                                            Afficher l'identifiant 
                                        </Button>
                                    </a>
                                </CardBody>
                            </CardCertifs>
                        )
                    })}
                </ContainerCertifs>
            </ContainerParent>
        </>
    );
}

const ContainerParent = styled.div`
    padding-top: 2em;
    background-color: ${({ theme }) => theme.bg};
`

const ContainerCertifs = styled(Container)`
    grid-template-columns: repeat(4, 1fr);
    background-color: ${({ theme }) => theme.bg};
    justify-items: center;
    color: ${({ theme }) => theme.text};
    @media screen and (min-width: 260px) and (max-width: 1080px) {
        grid-template-columns: repeat(1, 1fr);
        justify-items: center;
    }
`

const CardCertifs = styled(Card)`
    color: ${({ theme }) => theme.text};
    font-family: monospace;
    --border-radius: 6mm;    
    --border-size: 3px;
    --border-angle: 2turn;
    width: 60vmin;
    background-image: conic-gradient(
        from var(--border-angle),
        ${({ theme }) => theme.bg},
        ${({ theme }) => theme.bg} 100%,
        ${({ theme }) => theme.bg}
    ),
    conic-gradient(from var(--border-angle), transparent 20%, ${({ theme }) => theme.cardCertifs1}, ${({ theme }) => theme.cardCertifs2});
    background-size: calc(100% - (var(--border-size) * 3))
        calc(100% - (var(--border-size) * 3)),
        cover;
    background-position: center center;
    background-repeat: no-repeat;
    animation: bg-spin 3s linear infinite;

    @keyframes bg-spin {
        to {
        --border-angle: 1turn;
        }
    }
    
    
    @property --border-angle {
        syntax: "<angle>";
        inherits: true;
        initial-value: 0turn;
    }   
`


