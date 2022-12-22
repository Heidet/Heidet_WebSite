import React from "react";
import Certifs from "./CardCertifs";

import '../../styles/style.scss';


export default function Certificats({ theme, toggleTheme }) {

    return (
    <>
        <div>
            <Certifs theme={theme}  toggleTheme={toggleTheme}/>
        </div>
    </>
  );
}

