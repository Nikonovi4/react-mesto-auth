import PopupWithForm from "./PopupWithForm";
import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const EditProfilePopup = ({ isOpen, onClose, onUpdateUser }) => {
  const [userName, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);
  React.useEffect(() => {
    setName(currentUser.name ? currentUser.name : "");
    setDescription(currentUser.about ? currentUser.about : "");
  }, [currentUser]);

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeDescription(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateUser({
      name: userName,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
          value={userName}
          onChange={handleChangeName}
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
          value={description}
          onChange={handleChangeDescription}
        />
        <span className="popup__error-element popup__input-activity-error popup__error-text"></span>
      </label>
    </PopupWithForm>
  );
};

export default EditProfilePopup;
