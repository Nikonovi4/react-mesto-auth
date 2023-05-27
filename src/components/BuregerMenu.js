function BurgerMenu({isUserEmail, isOpenMenu}) {

  return(
    <div className={`burger ${isOpenMenu? "burger_opened" : ""}`}>
      <ul>
        <li className="header__email">{isUserEmail}</li>
        <li className="header__button">Выход</li>
      </ul>

    </div>

  )
}
export default BurgerMenu;