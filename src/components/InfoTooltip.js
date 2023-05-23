import fallIqon from '../images/logo/Fall.svg'

const InfoTooltip = ({isOpen, onClose, fallText}) => {
  return(
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
      <button
          aria-label="кнопка закрытия всплывающего окна."
          className="popup__close-button"
          type="button"
          onClick={onClose}
        />
        <div className="tooltip">
          <img className="tooltip__iqon" src = {fallIqon}/>
          <p className="tooltip__text">{fallText}</p>
        </div>
      </div>
    </div>
  )
}

export default InfoTooltip;