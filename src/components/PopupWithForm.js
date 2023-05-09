const PopupWithForm = ({
  name,
  title,
  onClose,
  buttonText,
  isOpen,
  children,
  onSubmit,
}) => {
  return (
    <div className={`popup popup_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          aria-label="кнопка закрытия всплывающего окна."
          className="popup__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <form
          name={`${name}`}
          className="popup__form popup__profile-edit"
          onSubmit={onSubmit}
        >
          <h2 className="popup__title">{`${title}`}</h2>
          <fieldset className="popup__fieldset">
            {children}

            <button className="popup__save" type="submit">
              {buttonText}
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;
