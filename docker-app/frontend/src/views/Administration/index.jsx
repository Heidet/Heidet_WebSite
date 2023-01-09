import React from "react";
import '../../styles/style.scss';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../components/GlobalStyles/StylesReusable';
import { useDarkMode } from '../../components/DarkMode';
import Administration from "../../components/Administration/index";

import {
    BrowserRouter,
    Route,
    Router,
    Routes,
} from "react-router-dom";


export default function AdministrationPanel() {
	const [theme, toggleTheme] = useDarkMode();
	const themeMode = theme === "light" ? lightTheme : darkTheme;

    return (
    <>
        <div>
            <ThemeProvider theme={themeMode}>
                <Administration />
            </ThemeProvider>
        </div>
    </>
  );
}

