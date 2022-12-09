import React from "react";
import UserProfile from "./UserProfile";
import '../../styles/style.scss';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../GlobalStyles/StylesReusable';
import { useDarkMode } from '../DarkMode';
import NavBar from "../NavBar";

export default function GitHub() {
	const [theme, toggleTheme] = useDarkMode();
	const themeMode = theme === "light" ? lightTheme : darkTheme;
    console.log(themeMode)
    console.log(toggleTheme)
    
    return (
    <>
        <div>
        <ThemeProvider theme={themeMode}>
            <NavBar theme={themeMode}  toggleTheme={toggleTheme}/>
            {/* <Header theme={theme}  toggleTheme={toggleTheme}/> */}
            <UserProfile theme={theme}  toggleTheme={toggleTheme}/>
        </ThemeProvider>
        </div>
    </>
  );
}

