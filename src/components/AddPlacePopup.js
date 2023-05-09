import {useEffect, useState} from "react";
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = ({ isOpen, onClose, onAddPlace }) => {
  const [nameNewCard, setNameNewCard] = useState("");
  const [linkNewCard, setLinkNewCard] = useState("");

  useEffect(() => {
    setNameNewCard("");
    setLinkNewCard("");
  }, [isOpen]);

  function handleInputNameCard(evt) {
    setNameNewCard(evt.target.value);
  }

  function handleInputLinkCard(evt) {
    setLinkNewCard(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onAddPlace({
      name: nameNewCard,
      link: linkNewCard,
    });

  }

  return (
    <PopupWithForm
      name="add-photo"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
          value={nameNewCard}
          onChange={handleInputNameCard}
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
          value={linkNewCard}
          onChange={handleInputLinkCard}
        />
        <span className="popup__error-element popup__input-card-link-error popup__error-text"></span>
      </label>
    </PopupWithForm>
  );
};

export default AddPlacePopup;
