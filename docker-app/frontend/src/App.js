import React from "react";
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './components/GlobalStyles/StylesReusable';
import { GlobalStyles } from './components/GlobalStyles/StylesReusable';
import { useDarkMode } from './components/DarkMode';
import Home from './views/Home/index';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { ClearCacheProvider, useClearCacheCtx } from 'react-clear-cache';
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
} from "react-router-dom";

export default function App() {
  // const { isLatestVersion, emptyCacheStorage } = useClearCacheCtx();
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
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
        </Routes>
      </ThemeProvider>
  );
}



