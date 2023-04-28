const ImagePopup = ({ card, isOpen, onClose }) => {
  if (!card) {
    return null;
  }
  return (
    <div
      className={`popup popup_dark popup_bigphoto ${
        isOpen ? "popup_opened" : ""
      }`}
    >
      <figure className="popup__figure">
        <button
          aria-label="кнопка закрытия всплывающего окна."
          className="popup__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <img className="popup__photo" src={card.link} />
        <figcaption className="popup__photo-name">{card.name}</figcaption>
      </figure>
    </div>
  );
};

export default ImagePopup;
