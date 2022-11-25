// import './styles/index.css';
import React, { useState, useEffect, useContext } from "react";
import Login from './views/Login';
import Home from './views/Home';
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import NavBar from "./components/NavBar";
import { GlobalStyles, darkTheme, lightTheme } from './components/GlobalStyles/StylesReusable';
import { useDarkMode } from './components/DarkMode';
import { AuthProvider } from "./context/AuthContext";
import PageNotFound from "./views/Errors/Error404"
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Router,
  Routes,
} from "react-router-dom";


export default function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>,
    <AuthProvider>
      <ThemeProvider theme={themeMode}>
      <GlobalStyles />
        <Routes>
          <Route element={[<NavBar theme={themeMode}  toggleTheme={toggleTheme} />, <Home theme={themeMode}  toggleTheme={toggleTheme} />]} path="/" />
          <Route element={<Login />}  path="/login" />
          <Route element={<PageNotFound />} path="*" />
        </Routes>
    </ThemeProvider>
  </AuthProvider>
  );
}



