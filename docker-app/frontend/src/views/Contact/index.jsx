import React from "react";
import styled from "styled-components";
import { Name } from "../../components/Contact/Contact";
import { darkTheme, lightTheme } from '../../components/GlobalStyles/StylesReusable';
import { useDarkMode } from '../../components/DarkMode';
import { ThemeProvider } from 'styled-components';
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";


export default function Contact() {
    const [theme, toggleTheme] = useDarkMode();
	const themeMode = theme === "light" ? lightTheme : darkTheme;

    return (
    <>
        <ThemeProvider theme={themeMode}>
            <NavBar theme={themeMode}  toggleTheme={toggleTheme} />
            <ContactForm id="form-app">
                <Name />
            </ContactForm>
            <Footer />
        </ThemeProvider>
    </>
  );
}

const ContactForm = styled.div`
    min-width: 280px;
    max-width: 400px;
    padding: 1rem 2rem 5rem;
    background-color: ${({ theme }) => theme.bg};
    border-radius: 8px;
    box-shadow: 2px 2px 6px rgba(0,0,0,0.3);
    margin: 50px auto;
    color: ${({ theme }) => theme.text};
    font-family: 'Nunito', sans-serif;
    font-size: 0.8rem;
    h1 {
        margin-bottom: 3rem;
    }
    
    .form-container {
        margin: 0 2rem;
        text-align: left;
    }
    
    .user-info {
    display: inline-block;
    margin-top: 0.8rem;
    margin-left: 0.6rem;
    font-size: 0.8rem;
    }
    
    .user-info:first-of-type {
    margin-top: 0;
    margin-right: 2px;
    }
    
    .form-input {
    display: flex;
    padding: 0.4rem 0.6rem;
    margin: 0.8rem 0;
    border-radius: 5px;
    box-shadow: 1px 1px 3px rgba(0,0,0,0.3);
    text-align: left;
    background-color: #fff;
    }
    
    .form-input span {
    padding-top: 2px;
    padding-bottom: 2px;
    line-height: 1.1rem;
    }
    
    input, textarea {
    margin: 0;
    padding: 0;
    padding-left: 0.6rem;
    border: none;
    border-radius: 0;
    color: inherit;
    font-family: inherit;
    font-size: 0.8rem;
    }
    
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
    }
    
    input:focus, textarea:focus {
    outline: none;
    }
    
    input::placeholder, textarea::placeholder {
    color: #bbb;
    font-size: 0.8rem;
    }
    
    input[type="text"], input[type="email"],
    textarea {
    flex-grow: 2;
    }
    
    input[type="submit"], input[type="button"] {
    float: right;
    padding: 0.4rem 0.6rem;
    border: none;
    border-radius: 5px;
    background: none;
    box-shadow: 1px 1px 3px rgba(0,0,0,0.3);
    cursor: pointer;
    }
    
    input[type="button"] {
    margin-right: 0.5rem;
    }
    
    .error-message {
    float:left;
    color: red;
    font-size: 0.6rem;
    }
    
    input[type="submit"]:disabled {
    opacity: 0.3;
    }
    
`
