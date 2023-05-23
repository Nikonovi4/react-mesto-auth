import successIqon from "../images/logo/Success.svg"
import fallIqon from '../images/logo/Fall.svg'

const InfoTooltip = ({isOpen, onClose, isSuccess}) => {
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
          <p className="tooltip__text">{`${isSuccess ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}`}</p>
        </div>
      </div>
    </div>
  )
}

export default InfoTooltip;