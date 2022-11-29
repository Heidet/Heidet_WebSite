// import './styles/index.css';
import React, { useState, useEffect, useContext } from "react";
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, darkTheme, lightTheme } from './components/GlobalStyles/StylesReusable';
import { useDarkMode } from './components/DarkMode';
import { AuthProvider } from './context/AuthContext';
import PageNotFound from "./views/Errors/Error404";
import Home from './views/Home';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
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
    <AuthProvider>
      <ThemeProvider theme={themeMode}>
      <GlobalStyles />
        <Routes>
          <Route element={
            [
              <NavBar theme={themeMode}  toggleTheme={toggleTheme} />, 
              <Home theme={themeMode}  toggleTheme={toggleTheme} />,
              <Footer />
            ]
          } 
            path="/" 
          />
          <Route element={<PageNotFound />} path="*" />
        </Routes>
    </ThemeProvider>
  </AuthProvider>
  );
}



