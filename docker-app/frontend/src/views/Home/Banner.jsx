import React, { useEffect, createRef, useContext } from "react";
import styled from "styled-components";
import { List, Container } from "reactstrap";
import '../../styles/style.scss';


export default function Banner({ theme, toggleTheme }) {
    // console.log(theme.linkedin)
    const ref = createRef(null);


    useEffect(() => {
        const script = document.createElement('script');

        script.src = 'https://platform.linkedin.com/badges/js/profile.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        return () => {
          document.body.removeChild(script);
          
        };
    }, []);

    const showLinkedinBadge = () => {
        return (<div className="badge-base LI-profile-badge" ref={ref} data-locale="fr_FR" data-size="medium" data-theme='light' data-type="VERTICAL" data-vanity="antoine-heidet" data-version="v1"></div>)
    }

    return (
    <>
        <ContainerHome
            fluid="sm"
        >
            {showLinkedinBadge()}
            <List type="inline">
                <li>
                    Passionné par ce secteur d’activité, je suis curieux et j'aime expérimenter, <br />
                    découvrir et apprendre au fur et à mesure de mes projets professionnels et personnels. 
                </li>
                <li>
                    ReactJS / Django && Django Rest API / Docker 💕❤️💕❤️💕
                </li>
                <br />
                <li>
                    Stack :
                    <ul>
                        <li>
                            Développement Front-End : JavaScript / ReactJS / Ext JS (NPM, Redux, Hooks, ReactDOM, ReactStrap)
                        </li>
                        <li>
                            Développement Back-End : Django REST API (Oauth JWT, MVT, ORM, CRUD)
                        </li>
                        <li>
                            OS : Windows, MacOS, Linux (Debian, Unbuntu, Kali ...)
                        </li>
                        <li>
                            Infrastructure et intégration continue : Apache, Nginx, Docker et Docker-Compose, Ansible, Saas 
                        </li>
                    </ul>
                </li>
                <li>
                    Centre d'intérêt: Blockchain / Cryptographie / Crypto-actif / NFT / Système décentralisé.
                </li>
            </List>
        </ContainerHome>
    </>
  );
}

const ContainerHome = styled(Container)`
    font-family: Andale Mono,monospace;    
    display: flex;
    padding-top: 5em;
    justify-content: center;
    color : ${({ theme }) => theme.text};
`


