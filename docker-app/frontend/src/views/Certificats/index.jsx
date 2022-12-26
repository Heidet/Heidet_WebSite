import React from "react";
import Certifs from "./CardCertifs";
import NavBar from "../../components/NavBar";
import '../../styles/style.scss';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../components/GlobalStyles/StylesReusable';
import { useDarkMode } from '../../components/DarkMode';
import Footer from "../../components/Footer";

export default function Certificats() {
	const [theme, toggleTheme] = useDarkMode();
	const themeMode = theme === "light" ? lightTheme : darkTheme;

    return (
    <>
        <div>
            <ThemeProvider theme={themeMode}>
                <NavBar theme={theme}  toggleTheme={toggleTheme} />
                <Certifs theme={theme}  toggleTheme={toggleTheme}/>
                <Footer />
            </ThemeProvider>
        </div>
    </>
  );
}

