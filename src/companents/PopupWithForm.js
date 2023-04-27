import React from "react";

const PopupWithForm = (props) => {
  

  return (
    <div className={`popup popup_${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          aria-label="кнопка закрытия всплывающего окна."
          className="popup__close-button"
          type="button"
          onClick={props.onClose}
        ></button>
        <form
          name="profile-edit"
          className="popup__form popup__profile-edit"
          noValidate
        >
          <h2 className="popup__title">{`${props.title}`}</h2>
          <fieldset className="popup__fieldset">
            {props.children}

            <button className="popup__save" type="submit">
                {props.buttonText}
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;
