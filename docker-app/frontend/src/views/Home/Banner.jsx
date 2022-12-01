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
        return (<div className="badge-base LI-profile-badge" ref={ref} data-locale="fr_FR" data-size="medium" data-theme={theme.linkedin} data-type="VERTICAL" data-vanity="antoine-heidet" data-version="v1"></div>)
    }

    return (
    <>
        <ContainerHome
            fluid="sm"
        >
            {showLinkedinBadge()}
            <List type="inline">
                <li>
                    Lorem ipsum dolor sit amet Consectetur adipiscing elit
                </li>
                <li>
                    Consectetur adipiscing elit Consectetur adipiscing elit
                </li>
                <li>
                    Integer molestie lorem at massa nteger molestie lorem at massa 
                </li>
                <li>
                    Facilisis in pretium nisl aliquet acilisis in pretium nisl aliquet
                </li>
                <li>
                    Nulla volutpat aliquam velit ulla volutpat aliquam velit
                    <ul>
                        <li>
                            Phasellus iaculis neque
                        </li>
                        <li>
                            Purus sodales ultricies
                        </li>
                        <li>
                            Vestibulum laoreet porttitor sem
                        </li>
                        <li>
                            Ac tristique libero volutpat at
                        </li>
                    </ul>
                </li>
                <li>
                    Faucibus porta lacus fringilla vel ucibus porta lacus fringilla vel
                </li>
                <li>
                    Aenean sit amet erat nunc enean sit amet erat nunc
                </li>
                <li>
                    Eget porttitor lorem Eget porttitor lorem
                </li>
            </List>
        </ContainerHome>
    </>
  );
}

const ContainerHome = styled(Container)`
    display: flex;
    padding-top: 2em;
    justify-content: center;
    gap: 3vw;
`


