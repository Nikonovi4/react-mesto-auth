import headerLogo from "../images/logo/logo-white.svg";


function Header({ isUserEmail, buttonText, handleLogOut, isOpenMenu}) {

  
  return (
    <header className="header">
      <img
        className="header__logo"
        src={headerLogo}
        alt="Место. Россия. Логотип."
      />
      <div className= "header__menu" onClick={isOpenMenu} >
        <div className="menu__line"></div>
        <div className="menu__line"></div>
        <div className="menu__line"></div>
      </div>
      <div className="header__service">
        <p className="header__email">{isUserEmail}</p>
        <div className="header__button" onClick={handleLogOut}>
          {buttonText}
        </div>
      </div>
    </header>
  );
}

export default Header;
