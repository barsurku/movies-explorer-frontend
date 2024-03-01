import { Link } from "react-router-dom";
import { useForms } from "../../components/Form/Form";
import { useEffect } from "react";

import greenCircle from "../../images/circlelogo.svg";

export default function Login({
  errorMessage,
  setErrorMessage,
  handleAuthProfile,
}) {
  const { handleChangeForm, isValidForm, values, errors } = useForms();

  useEffect(() => {
    setErrorMessage("");
  }, [setErrorMessage, values]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = values;

    if (!email || !password) {
      return;
    }

    handleAuthProfile(email, password);
  };

  return (
    <main className="login">
      <a className="login__circle" href="/">
        <img className="login__link" src={greenCircle} alt="Зеленый круг"></img>
      </a>
      <h1 className="login__title">Рады видеть!</h1>
      <form className="login__container" onSubmit={handleSubmit}>
        <div className="form__login-inputs">
          <label className="form__login-input-text">E-mail</label>
          <input
            className="form__input-login"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChangeForm}
            required
          ></input>
          <span className="form__login-input-error">{errors.email}</span>
        </div>
        <div className="form__login-inputs">
          <label className="form__login-input-text">Пароль</label>
          <input
            className="form__input-login"
            id="password"
            placeholder="Пароль"
            name="password"
            type="password"
            onChange={handleChangeForm}
            required
          ></input>
          <span className="form__login-input-error">{errors.password}</span>
        </div>
        <div className="form__buttons-login">
          <span className="form__login-error">{errorMessage}</span>
          <button
            type="submit"
            className="form__login-submit-btn"
            disabled={!isValidForm}
            style={{
              backgroundColor: !isValidForm ? "#F8F8F8" : "",
              color: !isValidForm ? "#C2C2C2" : "",
            }}
          >
            Войти
          </button>
          <div className="form__login-links">
            <p className="form__login-subtitle">Ещё не зарегистрированы?</p>
            <Link className="form__login-link" to="/signup">
              Регистрация
            </Link>
          </div>
        </div>
      </form>
    </main>
  );
}