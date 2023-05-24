import fallIqon from '../images/logo/Fall.svg'
import successIqon from '../images/logo/Success.svg'

const InfoTooltip = ({isOpen, onClose, fallText, successText, isSuccess}) => {
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
          <img className="tooltip__iqon" src = {`${isSuccess ? successIqon : fallIqon}`}/> 
          <p className="tooltip__text">{`${isSuccess ? successText : fallText}`}</p>
        </div>
      </div>
    </div>
  )
}

export default InfoTooltip;