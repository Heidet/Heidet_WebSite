import React from "react";
import Banner from "./Banner";
import Stack from "./Stack";
import '../../styles/style.scss';


export default function Home({ theme, toggleTheme }) {

    return (
    <>
        <div>
            <Banner theme={theme}  toggleTheme={toggleTheme}/>
            <Stack theme={theme}  toggleTheme={toggleTheme}/>
        </div>
    </>
  );
}

