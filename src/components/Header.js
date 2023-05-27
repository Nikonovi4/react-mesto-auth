import headerLogo from "../images/logo/logo-white.svg";


function Header({ isUserEmail, buttonText, handleLogOut, openBurgerMenu, isOpenMenu}) {

  
  return (
    <header className="header">
      <img
        className="header__logo"
        src={headerLogo}
        alt="Место. Россия. Логотип."
      />
      <div className= "header__menu" onClick={openBurgerMenu} >
        <div className={`menu__line ${isOpenMenu? "line-first_clicked" : "line-first_unclicked"}`}></div>
        <div className={`menu__line ${isOpenMenu? "line-second_clicked" : "line-second_unclicked"}`}></div>
        <div className={`menu__line ${isOpenMenu? "line-third_clicked" : "line-third_unclicked"}`}></div>
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
