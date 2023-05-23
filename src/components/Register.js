import "../index.css";
import Header from "./Header";
import WecomeScrin from "./WelcomScrin";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import InfoTooltip from "./InfoTooltip";

const Register = ({ handleRegister }) => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isOpenTooltip, setOpenTooltip] = useState(null);
  const [isSuccess, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    const { email, password } = formValue;
    e.preventDefault();
    handleRegister(email, password)
      .then(() => {
        setSuccess(true);
      })
      .catch((e) => {
        setErrorMessage(e);
      })
      .finally(() => {
        setOpenTooltip(true);
      });
  };

  const closeTooltip = () => {
    setOpenTooltip(null);
  };

  return (
    <div>
      <Header
        buttonText={
          <NavLink className="header__button" to="/sign-up">
            Вход
          </NavLink>
        }
      />
      <WecomeScrin
        title="Регистрация"
        buttonText="Зарегестрироваться"
        naviText="Уже зарегестрировались? Войти"
        errorMessage={errorMessage}
        onSubmit={handleSubmit}
      >
        <div className="welcome__inputs">
          <input
            type="email"
            required
            placeholder="Email"
            className="welcome__input"
            name="email"
            value={formValue.email}
            onChange={handleChange}
          />
          <input
            type="password"
            required
            placeholder="Пароль"
            className="welcome__input"
            name="password"
            value={formValue.password}
            onChange={handleChange}
          />
        </div>
      </WecomeScrin>
      <InfoTooltip
        isOpen={isOpenTooltip}
        onClose={closeTooltip}
        isSuccess={isSuccess}
      />
    </div>
  );
};

export default Register;
