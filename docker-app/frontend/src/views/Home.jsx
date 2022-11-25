import React, { useState, componentDidUpdate, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import { List, Row, Col, Card, CardBody, Button } from "reactstrap";
import '../styles/style.scss';
import { VscPerson } from "react-icons/vsc";



export default function Home({ theme, toggleTheme }) {
 
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

    return (
    <>
        {/* data-theme="light" */}

        <div class="badge-base LI-profile-badge" data-locale="fr_FR" data-size="medium" data-theme={themeLinkedin} data-type="VERTICAL" data-vanity="antoine-heidet" data-version="v1"></div>
        <List type="unstyled">
            <li>
                Lorem ipsum dolor sit amet
            </li>
            <li>
                Consectetur adipiscing elit
            </li>
            <li>
                Integer molestie lorem at massa
            </li>
            <li>
                Facilisis in pretium nisl aliquet
            </li>
            <li>
                Nulla volutpat aliquam velit
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
                Faucibus porta lacus fringilla vel
            </li>
            <li>
                Aenean sit amet erat nunc
            </li>
            <li>
                Eget porttitor lorem
            </li>
        </List>
    </>
  );
}


