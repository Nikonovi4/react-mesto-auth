import React from "react";

const ImagePopup = (props) => {
  return (
    <div
      className={`popup popup_dark popup_bigphoto ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <figure className="popup__figure">
        <button
          aria-label="кнопка закрытия всплывающего окна."
          className="popup__close-button"
          type="button"
        ></button>
        <img className="popup__photo" src={props.link} />
        <figcaption className="popup__photo-name">{props.name}</figcaption>
      </figure>
    </div>
  );
};

export default ImagePopup;
