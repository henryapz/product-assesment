import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";

const NavBarCustom = function NavBarCustom() {
  const [showInfo, setShowInfo] = useState(false);
  const toogleModal = () => {
    setShowInfo(!showInfo);
  };
  return (
    <nav>
      <ul className="menu">
        <li className="menu__item">
          <a
            href="#news"
            onClick={() => {
              setShowInfo(true);
            }}
          >
            About
          </a>
        </li>
        <li className="menu__item">
          <a href="#products">Productos</a>
        </li>
      </ul>
      {showInfo && <PersonalInfo toogleModal={toogleModal} />}
    </nav>
  );
};

export default NavBarCustom;
