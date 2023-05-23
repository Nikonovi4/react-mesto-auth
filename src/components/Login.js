import "../index.css";
import WecomeScrin from "./WelcomScrin";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import InfoTooltip from "./InfoTooltip";

const Login = ({ handleLogin }) => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const [isSuccess, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isOpenTooltip, setOpenTooltip] = useState(null);

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
    handleLogin(email, password)
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
          <NavLink className="header__button" to="/sign-in">
            Регистрация
          </NavLink>
        }
      />
      <WecomeScrin
        title="Вход"
        buttonText="Войти"
        onSubmit={handleSubmit}
        errorMessage={errorMessage}
      >
        <div className="welcome__inputs">
          <input
            type="email"
            required
            placeholder="Email"
            className="welcome__input"
            name="email"
            value={formValue.login}
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

export default Login;
