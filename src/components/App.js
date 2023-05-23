import "../index.css";
import { useEffect, useState } from "react";
import api from "../utils/Api";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import InfoTooltip from "./InfoTooltip";
import { ProtectedRoute } from "./ProtectedRout";
import * as auth from "../utils/Auth";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(null);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(null);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [userInfo, getCurrentUser] = useState({});
  const [cards, setCards] = useState(null);
  const [isLogIn, setLogin] = useState(false);
  const [isUserEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

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

  const checkToken = () => {
    const jwt = localStorage.getItem("jwt");
    auth.getInfo(jwt).then((data) => {
      if (data) {
        setUserEmail(data.data.email);
        setLogin(true);
        navigate("/");
      } else {
        setLogin(false);
      }
    });
  };

  useEffect(() => {
    checkToken();
  },[]);
  

  const handleRegister = (email, password) => {
    return auth.register(email, password).then((data) => {
      navigate("/sign-up");
    });
  };

  const handleLogin = (email, password) => {
    return auth.authorize(email, password).then((data) => {
      localStorage.setItem("jwt", data.token);
      setLogin(true);
      navigate("/");
    });
  };

  const handleLogOut = () => {
    localStorage.removeItem("jwt")
    setLogin(false)
    navigate("/sign-up")
  }

  return (
    <div className="main">
      <CurrentUserContext.Provider value={userInfo}>
        <div className="main__content">
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute
                  element={Main}
                  isLogIn={isLogIn}
                  openProfilePopup={handleProfileClick}
                  openAvatarPopup={handleAvatarClick}
                  openNewCardPopup={handleNewCardClick}
                  setSelectedCard={setSelectedCard}
                  cards={cards}
                  onCardLike={handleCardLike}
                  onCardDelete={handleCardDelete}
                  isUserEmail={isUserEmail}
                  handleLogOut={handleLogOut}
                />
              }
            />

            <Route
              path="/sign-up"
              element={<Login handleLogin={handleLogin} />}
            />
            <Route
              path="/sign-in"
              element={<Register handleRegister={handleRegister} />}
            />
            <Route path="*" element={<h1>Страница не найдена</h1>} />
          </Routes>
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
          <InfoTooltip isSuccess="false" />
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
