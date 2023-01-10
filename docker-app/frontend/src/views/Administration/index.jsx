import React from "react";
import '../../styles/style.scss';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../components/GlobalStyles/StylesReusable';
import { useDarkMode } from '../../components/DarkMode';
import Administration from "../../components/Administration/Dashboard/index";
import User from "../../components/Administration/User/index";
import Tasks from "../../components/Administration/Tasks/index";
import PageNotFound from "../Errors/Error404";

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
                <Routes>
                    <Route element={<Administration />}  path="/Dashboard" />,
                    <Route element={<User />}  path="/Team" />
                    <Route element={<Tasks />}  path="/Tasks" />

                    {/* <Route element={<PageNotFound />} path="portail_administration/*" /> */}
                </Routes>
            </ThemeProvider>
        </div>
    </>
  );
}

