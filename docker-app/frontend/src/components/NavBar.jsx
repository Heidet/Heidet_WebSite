import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { GiConsoleController, GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { Button, Dropdown, NavbarToggler, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';
import '../styles/style.scss';
import AuthContext from "../context/AuthContext";

export default function NavBar({ theme, toggleTheme }) {
  const [navbarState, setNavbarState] = useState(false);
  const { user, logoutUser } = useContext(AuthContext);
  const [ isOpen, setIsOpen ] = useState(false);
  const isLight = theme === "light";
  const toggle = () => setIsOpen(!isOpen);


  return (
    <>
      <Nav>
      <div
        id="toggle"
        onClick={toggleTheme}
      >
        <div className="toggle-inner"/>
      </div>
        <div className="brand1">
          <a href="/">
            <p className="social-name">Heidet Antoine</p>
          </a>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>
          
        </div>
                
        <div className="logout-button">
            {user ? (
              <>
                {/* <Link to="/">Home</Link> */}
                {/* <Link to="/protected">Protected Page</Link> */}
                <Button onClick={logoutUser}color="danger">
                  Déconnecter
                </Button>
                {' '}
                {/* <button onClick={logoutUser}>Logout</button> */}
              </>
            ) : (
              <>
                {/* <Link to="/login">Login</Link> */}
                {/* <Link to="/register">Register</Link>  */}
              </>
            )}
        </div>
        <ul className="links">
          <li>
            <a href="/" className="active">
              Accueil
            </a>
          </li>
          <li>
            <a href="/#services">Nos services</a>
          </li>
          <li>
            <a href="journées-a-themes">3</a>
          </li>
          <li>
            <a href="traiteur">
              4
            </a>
          </li>
          <li>
            <UncontrolledDropdown setActiveFromChild>
              <DropdownToggle
                caret
                className="nav-link"
                tag="a"
              >
                1
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  href="/"
                  tag="a"
                >
                  1
                </DropdownItem>
                <DropdownItem
                  href="/"
                  tag="a"
                >
                  2
                </DropdownItem> 
                <DropdownItem
                  href="/"
                  tag="a"
                >
                  3
                </DropdownItem> 
                <DropdownItem
                  href="/"
                  tag="a"
                >
                  4
                </DropdownItem> 
                <DropdownItem
                  href="/"
                  tag="a"
                >
                  5
                </DropdownItem>  
                <DropdownItem
                  href="/"
                  tag="a"
                >
                  6
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </li>
          <li className="litest">
            <a href="/#footer">Contact</a>
          </li>
        </ul>
      </Nav>
      <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
        <ul>
          <li>
            <a
              href="#home"
              className="active"
              onClick={() => setNavbarState(false)}
            >
              Accueil
            </a>
          </li>
          <li>
            <a href="/#services" onClick={() => setNavbarState(false)}>
              Nos services
            </a>
          </li>
          <li>
            <a href="journées-a-themes" onClick={() => setNavbarState(false)}>
              3
            </a>
          </li>
          <li>
            <a href="traiteur" onClick={() => setNavbarState(false)}>
              4
            </a>
          </li>
          <UncontrolledDropdown onClick={() => setNavbarState(true)} state={navbarState} className={navbarState ? "show" : ""}  nav inNavbar>
              <DropdownToggle nav caret>
                1
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/"
                  tag="a">
                 1
                </DropdownItem>
                <DropdownItem href="/"
                  tag="a">
                 2
                </DropdownItem>
                <DropdownItem href="/s"
                  tag="a">
                 3
                </DropdownItem>
                <DropdownItem href="/"
                  tag="a">
                 4
                </DropdownItem>
                <DropdownItem href="/"
                  tag="a">
                 5
                </DropdownItem>
                <DropdownItem href="/"
                  tag="a">
                 6
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          <li>
            <a href="/#footer" onClick={() => setNavbarState(false)}>
              Contact
            </a>
          </li>
        </ul>
      </ResponsiveNav>
    </>
  );
}


const GiMenu = styled(GiHamburgerMenu)`
  font-size: 20px;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0px 12vw;
  border-bottom: 2px solid ${({ theme }) => theme.text};
  .logout-button {
    margin-right: 25em;
  }
  a {
    text-decoration: none;
  }
  .brand1 {
    .social-name{
      color: ${({ theme }) => theme.text};
      font-family: Andale Mono, monospace;
      margin-top: revert;
    }
    img {
      cursor: pointer;
    }
    .toggle {
      display: none;
    }
  }
  .links {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      .nav-link {
        padding: 0;
      }
      .dropdown-menu{
        width: 15em;
      }
      a {
        color: ${({ theme }) => theme.text};
        font-weight: 600;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: red;
        }
      }
   
      .active {
        color: red;
      }
    }
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2) {
    .logout-button  > button{
      font-size: 10px!important;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .brand1 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      top: 0;
      .toggle {
        display: block;
      }
    }
    .links {
      display: none;
    }
    .logout-button{
      margin-right: initial!important;
    }
  }
`;

const ResponsiveNav = styled.div`
  position: fixed;
  right: -100vw;
  top: 0;
  z-index: 10;
  background-color: white;
  height: 100vh;
  width: ${({ state }) => (state ? "60%" : "0%")};
  transition: 0.3s ease-in-out;
  display: flex;
  opacity: 0;
  visibility: hidden;
  background-color: ${({ theme }) => theme.bg};
  ul {
    list-style-type: none;
    width: 100%;
    margin-top: 3rem;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 0rem;
      a {
        text-decoration: none;
        color: ${({ theme }) => theme.text};
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #fc4958;
        }
      }  
      &:first-of-type {
        a {
          color: #fc4958;
          font-weight: 900;
        }
      }
    }
  }
`;