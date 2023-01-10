
import React, {useState} from "react";
import Sidebar from "../Navbar"
import Content from "./Content"
import clsx from "https://cdn.skypack.dev/clsx@1.1.1";
import { darkTheme, lightTheme } from '../../GlobalStyles/StylesReusable';
import { useDarkMode } from '../../DarkMode';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
} from "react-router-dom";


export default function Administration () {
    const [theme, toggleTheme] = useDarkMode();
    const themeMode = theme === "light" ? lightTheme : darkTheme;
    const [showSidebar, onSetShowSidebar] = useState(false);

    function Icon({ path = 'options', className = 'w-4 h-4' }) {
      return (
        <img
          src={`https://assets.codepen.io/3685267/${path}.svg`}
          alt=""
          className={clsx(className)}
        />
      );
    }

    function Image({ path = '1', className = 'w-4 h-4' }) {
      return (
        <img
          src={`https://assets.codepen.io/3685267/${path}.jpg`}
          alt=""
          className={clsx(className, 'rounded-full')}
        />
      );
    }

    function IconButton({
      onClick = () => {},
      icon = 'options',
      className = 'w-4 h-4',
    }) {
      return (
        <button onClick={onClick} type="button" className={className}>
          <img
            src={`https://assets.codepen.io/3685267/${icon}.svg`}
            alt=""
            className="w-full h-full"
          />
        </button>
      );
    }

    return (
        <>
          <ThemeProvider theme={themeMode}>
            <Routes>
              <Route element={
                [
                  <Sidebar
                    theme={themeMode}  toggleTheme={toggleTheme}
                    onSidebarHide={() => {
                      onSetShowSidebar(false);
                    }}
                    showSidebar={showSidebar}
                    Icon={Icon}
                    IconButton={IconButton}
                    Image={Image}
                  />,
                  <Content
                    theme={themeMode}  toggleTheme={toggleTheme}
                    onSidebarHide={() => {
                      onSetShowSidebar(true);
                    }}
                    Icon={Icon}
                    IconButton={IconButton}
                    Image={Image}
                  />
                ]
              } 
                path="/" 
              />
            </Routes>
          </ThemeProvider>
        </>
    );
}

