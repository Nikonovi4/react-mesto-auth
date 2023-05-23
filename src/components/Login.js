import "../index.css";
import WecomeScrin from "./WelcomScrin";
import { NavLink } from "react-router-dom";
import Header from "./Header";

const Login = ({ onLogin, setFormValue, formValue, errorMessage }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
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
    </div>
  );
};

export default Login;
