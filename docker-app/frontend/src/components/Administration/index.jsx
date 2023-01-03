
import React, {useState} from "react";
import Sidebar from "./Navbar"
import Content from "./Content"
import clsx from "https://cdn.skypack.dev/clsx@1.1.1";


export default function Administration () {
    const [showSidebar, onSetShowSidebar] = useState(false);

    function Icon({ path = 'options', className = 'w-4 h-4' }) {
      return (
        <img
          src={`https://assets.codepen.io/3685267/${path}.svg`}
          alt=""
          className={clsx(className)}
        />
      );
    }

    function IconButton({
      onClick = () => {},
      icon = 'options',
      className = 'w-4 h-4',
    }) {
      return (
        <button onClick={onClick} type="button" className={className}>
          <img
            src={`https://assets.codepen.io/3685267/${icon}.svg`}
            alt=""
            className="w-full h-full"
          />
        </button>
      );
    }

    return (
      <div className="flex">
        <Sidebar
          onSidebarHide={() => {
            onSetShowSidebar(false);
          }}
          showSidebar={showSidebar}
          Icon={Icon}
          IconButton={IconButton}
        />
        <Content
          onSidebarHide={() => {
            onSetShowSidebar(true);
          }}
          Icon={Icon}
        />
      </div>
    );
}

