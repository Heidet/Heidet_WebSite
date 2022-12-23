import React from "react";
import { Name } from "../../components/Contact";
import './style.css';



export default function Contact({ theme, toggleTheme }) {
    return (
    <>
        <div>
            <div id="form-app">
                <Name />
            </div>
        </div>
    </>
  );
}

