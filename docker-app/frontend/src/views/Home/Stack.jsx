import React, { useEffect, createRef, useContext } from "react";
import styled from "styled-components";
import { Container, Progress } from "reactstrap";
import '../../styles/style.scss';
import { TiHtml5 } from 'react-icons/ti';
import { FaReact } from 'react-icons/fa';
import { SiPython } from 'react-icons/si';
import { VscTerminalPowershell } from 'react-icons/vsc';
import { GrDocker } from 'react-icons/gr';
import { SiAnsible } from 'react-icons/si';


export default function Stack({ theme, toggleTheme }) {

    return (
    <>
    <ContainerParent>
        <div>
            <ContainerStack   
                fluid="sm"
                >
                <StackContainerIcon>
                    <IconStack>
                        <TiHtml5 color="#e24e24"/>
                    </IconStack>
                    <IconStack>
                        <FaReact color="#63d6f8"/>
                    </IconStack>
                    <IconStack>
                        <SiPython color="#3b79aa"/>
                    </IconStack>
                </StackContainerIcon>

                <StackContainerIcon>
                    <IconStack>
                        <GrDocker color="#1f97f4"/>
                    </IconStack>
                    <IconStack>
                        <SiAnsible color={theme.text}/>
                    </IconStack>
                    <IconStack>
                        <VscTerminalPowershell color={theme.text}/>
                    </IconStack>
                </StackContainerIcon>
            </ContainerStack>
        </div>
        <ContainerStack
            fluid="sm"
        >
            <Progress
                animated
                className="my-3"
                color="warning"
                striped
                value={70}
                > Javascript / REACT / Ext JS 
            </Progress>
            <Progress
                animated
                className="my-3"
                color="danger"
                striped
                value="80"
                > HTML / CSS
            </Progress>
            <Progress
                animated
                className="my-3"
                color="success"
                striped
                value={50}
                > SHELL / BASH
            </Progress>
            <Progress
                animated
                className="my-3"
                striped
                value={40}
                > Python / Django REST FRAMEWORK
            </Progress>
            <Progress
                animated
                className="my-3"
                color="info"
                striped
                value={50}
                > Docker / Ansible
            </Progress>
        </ContainerStack>
    </ContainerParent>
    </>
  );
}


const IconStack = styled.div`
    font-size: 80px;
    margin-right: 8%;
`
const StackContainerIcon = styled.div`
    display: flex;
`

const ContainerParent = styled(Container)`
    display: flex;
    padding-top: 5em;
`

const ContainerStack = styled(Container)`
    padding-left: 3em; 
    align-self: center;
`


