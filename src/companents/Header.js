import React from "react";
import headerLogo from "../images/logo/logo-white.svg"


function Header() {
    return (
        <header className="header">
      <img
        className="header__logo"
        src={ headerLogo }
        alt="Место. Россия. Логотип."
      />
    </header>
    )
}

export default Header