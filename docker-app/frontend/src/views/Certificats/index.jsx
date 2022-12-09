import React from "react";
import CardCertifs from "./CardCertifs";

import '../../styles/style.scss';


export default function Certificats({ theme, toggleTheme }) {

    return (
    <>
        <div>
            <CardCertifs theme={theme}  toggleTheme={toggleTheme}/>
        </div>
    </>
  );
}

