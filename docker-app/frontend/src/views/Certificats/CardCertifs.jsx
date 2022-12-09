
import React from "react";
import { Card, CardHeader, CardText, Button, CardFooter, CardBody, CardTitle } from 'reactstrap';


export default function CardCertifs({ theme, toggleTheme }){
    return(
        <>
            <Card
            className="my-2"
            style={{
                width: '18rem'
            }}
            >
            <CardHeader>
                Udemy
            </CardHeader>
            <CardBody>
                <CardTitle tag="h5">
                    Hacking éthique
                </CardTitle>
                <CardText>
                   <date> 
                        Identifiant de la certification <br />
                        UC-9f81a3d2-4fbf-44e5-9037-774033ec3bfe 
                    </date>
                </CardText>
                <Button color="info">
                    Afficher l'identifiant 
                </Button>
            </CardBody>
            <CardFooter>
                Août 2021
            </CardFooter>
            </Card>
        </>
    );
}
