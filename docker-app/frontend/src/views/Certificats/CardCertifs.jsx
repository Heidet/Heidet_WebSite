
import React from "react";
import { Card, CardHeader, CardText, Button, CardFooter, CardBody, CardTitle } from 'reactstrap';
import styled from "styled-components";

export default function Certifs({ theme, toggleTheme }){
    return(
        <>
            <CardCertifs
                className="my-2"
                style={{
                    width: '18rem'
                }}
                >
                {/* <CardHeader>
                    Udemy
                </CardHeader> */}
                <CardBody>
                    <CardTitle tag="h5">
                        Hacking éthique
                    </CardTitle>
                    <CardText>
                        Identifiant de la certification <br />
                        UC-9f81a3d2-4fbf-44e5-9037-774033ec3bfe 
                    </CardText>
                    <CardText>
                        Août 2021
                    </CardText>
                    <Button color="info">
                        Afficher l'identifiant 
                    </Button>
                </CardBody>
            </CardCertifs>
        </>
    );
}



const CardCertifs = styled(Card)`

    --border-radius: 6mm;    
    --border-size: 3px;
    --border-angle: 2turn;
    width: 60vmin;
    background-image: conic-gradient(
        from var(--border-angle),
        white,
        white 100%,
        white
    ),
    conic-gradient(from var(--border-angle), transparent 20%, #08f, #f03);
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


