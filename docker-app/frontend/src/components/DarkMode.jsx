
import React, { useState, useEffect, useContext } from "react";

export const useDarkMode = () => {
    const [theme, setTheme] = useState("light");
    const body = document.body
    const toggle = document.querySelector('.toggle-inner')

    const toggleTheme = () => {
      if (theme === "light") {
        setTheme("dark");
        body.classList.add('dark-mode')
        toggle.classList.add('toggle-active')
        //SET THEME IN LOCALSTORAGE
        window.localStorage.setItem("theme", "dark");
      } else {
        setTheme("light");
        body.classList.remove('dark-mode')
        toggle.classList.remove('toggle-active')
        //SET THEME IN LOCALSTORAGE
        window.localStorage.setItem("theme", "light");
      }
    };
  
    useEffect(() => {
      /* DETECTS BROWSER THEME */
      const localTheme = window.localStorage.getItem("theme");
      setTheme(localTheme);
      if (localTheme) {
        setTheme(localTheme);
      } else {
        window.localStorage.setItem("theme", "light");
      } 
    }, []);
  
    return [theme, toggleTheme];
};
  