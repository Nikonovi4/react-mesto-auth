function BurgerMenu({isUserEmail, isOpen}) {

  return(
    <div className={`burger ${isOpen? "burger_opened" : ""}`}>
      <ul>
        <li className="header__email">{isUserEmail}</li>
        <li className="header__button">Выход</li>
      </ul>

    </div>

  )
}
export default BurgerMenu;