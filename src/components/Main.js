import React from "react";
import "../index.css";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Header from "./Header";
const Main = ({
  openProfilePopup,
  openAvatarPopup,
  openNewCardPopup,
  setSelectedCard,
  cards,
  onCardLike,
  onCardDelete,
  isUserEmail,
  handleLogOut,
  openBurgerMenu,
  isOpenMenu
}) => {
  const userInfo = React.useContext(CurrentUserContext);

  return (
    <div>
      <Header
        buttonText="Выход"
        isUserEmail={isUserEmail}
        handleLogOut={handleLogOut}
        openBurgerMenu = {openBurgerMenu}
        isOpenMenu = {isOpenMenu}
      />
      <main>
        <section className="profile lead">
          <div className="cover">
            <img
              src={userInfo.avatar}
              className="profile__foto"
              alt="аватар профиля"
              onClick={openAvatarPopup}
            />
          </div>
          <div className="profile__name-edit">
            <h1 className="profile__name">{userInfo.name}</h1>
            <button
              onClick={openProfilePopup}
              aria-label="кнопка редактирования профиля."
              className="profile__edit-button"
              type="button"
            ></button>
          </div>
          <p className="profile__activity">{userInfo.about}</p>
          <button
            aria-label="кнопка добавления фотографий."
            className="profile__add-content-button"
            type="button"
            onClick={openNewCardPopup}
          ></button>
        </section>
        <section className="content">
          <ul className="foto">
            {cards?.map((card) => (
              <Card
                data={card}
                key={card._id}
                onCardImageClick={setSelectedCard}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
              />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Main;
