import "../index.css";
import {useEffect, useState} from "react";
import api from "../utils/Api";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    useState(null);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    useState(null);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [userInfo, getCurrentUser] = useState({});
  const [cards, setCards] = useState(null);

  function handleProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleNewCardClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopoups() {
    setIsAddPlacePopupOpen(null);
    setIsEditAvatarPopupOpen(null);
    setIsEditProfilePopupOpen(null);
    setSelectedCard(null);
  }

  useEffect(() => {
    api
      .getAllCards()
      .then((cards) => setCards(cards))
      .catch((error) => console.log(`Произошла ${error}: ${error.massage}`));
  }, []);

  useEffect(() => {
    api
      .getProfileInfo()
      .then((info) => {
        getCurrentUser(info);
      })
      .catch((error) => console.log(`Произошла ${error}: ${error.massage}`));
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === userInfo._id);

    api
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((error) => console.log(`Произошла ${error}: ${error.massage}`));
  }

  function handleCardDelete(card) {
    api
      .removeCard(card._id)
      .then(setCards((state) => state.filter((c) => c._id !== card._id)))
      .catch((error) => console.log(`Произошла ${error}: ${error.massage}`));
  }

  function handleUpdateUser(props) {
    api
      .editProfile(props.name, props.about)
      .then((info) => {
        getCurrentUser(info);
        closeAllPopoups();
      })
      .catch((error) => console.log(`Произошла ${error}: ${error.massage}`));
  }

  function handleUpdateAvatar(props) {
    api
      .editAvatar(props.avatar)
      .then((res) => {
        getCurrentUser(res);
        closeAllPopoups();
      })
      .catch((error) => console.log(`Произошла ${error}: ${error.massage}`));
  }

  function handleAddPlaceSubmit(props) {
    api
      .addNewCard(props.name, props.link)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopoups();
      })
      .catch((error) => console.log(`Произошла ${error}: ${error.massage}`));
  }

  return (
    <div className="main">
      <CurrentUserContext.Provider value={userInfo}>
        <div className="main__content">
          <Header />
          <Main
            openProfilePopup={handleProfileClick}
            openAvatarPopup={handleAvatarClick}
            openNewCardPopup={handleNewCardClick}
            setSelectedCard={setSelectedCard}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <Footer />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopoups}
            onUpdateUser={handleUpdateUser}
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopoups}
            onAddPlace={handleAddPlaceSubmit}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopoups}
            onUpdateAvatar={handleUpdateAvatar}
          />
          <PopupWithForm name="confirm" title="Вы уверены?" buttonText="Да" />
          <ImagePopup
            card={selectedCard}
            isOpen={selectedCard}
            onClose={closeAllPopoups}
          />
        </div>
      </CurrentUserContext.Provider>
    </div>
  );

}

export default App;
