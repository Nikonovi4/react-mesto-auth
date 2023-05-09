import PopupWithForm from "./PopupWithForm";
import React from "react";

const EditAvatarPopup = ({ isOpen, onClose, onUpdateAvatar }) => {
  const avatarRef = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
    avatarRef.current.value = "";
  }

  return (
    <PopupWithForm
      name="newavatar"
      title="Обновить аватар?"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label>
        <input
          type="url"
          required
          placeholder="Ссылка на картинку"
          name="popup__input-card-link"
          className="popup__input-card-link popup__input"
          ref={avatarRef}
        />
        <span className="popup__error-element popup__input-card-link-error popup__error-text"></span>
      </label>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
