import "../index.css";
import Header from "./Header";
import WecomeScrin from "./WelcomScrin";
import { NavLink } from "react-router-dom";

const Register = ({ onRegister, setFormValue, formValue, errorMessage}) => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister();
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
    </div>
  );
};

export default Register;
