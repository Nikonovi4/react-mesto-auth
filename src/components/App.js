import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import React from "react";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isOpenPopupProfile, setOpenedPopupProfile] = React.useState(false);
  const [isOpenPopupAvatar, setOpenedPopupAvatar] = React.useState(false);
  const [isOpenPopupNewCard, setOpenedPopupNewCard] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleProfileClick() {
    setOpenedPopupProfile(true);
  }

  function handleAvatarClick() {
    setOpenedPopupAvatar(true);
  }

  function handleNewCardClick() {
    setOpenedPopupNewCard(true);
  }

  function closeAllPopoups() {
    setOpenedPopupNewCard(false);
    setOpenedPopupAvatar(false);
    setOpenedPopupProfile(false);
    setSelectedCard(false);
  }

  return (
    <div className="main">
      <div className="main__content">
        <Header />
        <Main
          openProfilePopup={handleProfileClick}
          openAvatarPopup={handleAvatarClick}
          openNewCardPopup={handleNewCardClick}
          setSelectedCard = {setSelectedCard}
        />
        <Footer />
        <PopupWithForm
          name="profile"
          title="Редактировать профиль"
          buttonText="Сохранить"
          isOpen={isOpenPopupProfile}
          onClose={closeAllPopoups}
        >
          <label>
            <input
              type="text"
              required
              placeholder="Ваше имя"
              name="popup__input-name"
              className="popup__input-name popup__input"
              minLength="2"
              maxLength="40"
            />
            <span className="popup__error-element popup__input-name-error popup__error-text"></span>
          </label>
          <label>
            <input
              type="text"
              required
              placeholder="Ваш вид деятельности"
              name="popup__input-activity"
              className="popup__input-activity popup__input"
              minLength="2"
              maxLength="400"
            />
            <span className="popup__error-element popup__input-activity-error popup__error-text"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm
          name="add-photo"
          title="Новое место"
          buttonText="Сохранить"
          isOpen={isOpenPopupNewCard}
          onClose={closeAllPopoups}
        >
          <label>
            <input
              type="text"
              required
              placeholder="Название"
              name="popup__input-card-name"
              className="popup__input-card-name popup__input"
              minLength="2"
              maxLength="30"
            />
            <span className="popup__error-element popup__input-card-name-error popup__error-text"></span>
          </label>
          <label>
            <input
              type="url"
              required
              placeholder="Ссылка на картинку"
              name="popup__input-card-link"
              className="popup__input-card-link popup__input"
            />
            <span className="popup__error-element popup__input-card-link-error popup__error-text"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm
          name="newavatar"
          title="Обновить аватар?"
          buttonText="Сохранить"
          isOpen={isOpenPopupAvatar}
          onClose={closeAllPopoups}
        >
          <label>
            <input
              type="url"
              required
              placeholder="Ссылка на картинку"
              name="popup__input-card-link"
              className="popup__input-card-link popup__input"
            />
            <span className="popup__error-element popup__input-card-link-error popup__error-text"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm
          name="confirm"
          title="Вы уверены?"
          buttonText="Да"
        ></PopupWithForm>
        <ImagePopup card={selectedCard} isOpen = {selectedCard} onClose={closeAllPopoups} />
      </div>
    </div>
  );
}

export default App;
