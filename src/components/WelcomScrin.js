import { NavLink } from "react-router-dom";

const WecomeScrin = ({
  title,
  buttonText,
  naviText,
  children,
  errorMessage,
  onSubmit,
}) => {
  return (
    <div>
      <div className="welcome">
        <form className="welcome__form" onSubmit={onSubmit}>
          <fieldset className="welcome__fieldset">
            <legend className="welcome__title">{title}</legend>
            {children}
            <p className="error">{errorMessage}</p>
            <button className="welcome__button" type="submit">
              {buttonText}
            </button>
            <NavLink to="/sign-in" className="welcome__text">
              {naviText}
            </NavLink>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default WecomeScrin;
