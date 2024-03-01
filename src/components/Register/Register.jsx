import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useForms } from "../Form/Form";
import { CONFLICT_MESSAGE, EXP_EMAIL, EXP_NAME } from "../../utils/constants";
import * as auth from "../../utils/Authorization";

import greenCircle from "../../images/circlelogo.svg";

export default function Register({
  errorMessage,
  setErrorMessage,
  handleAuthProfile,
}) {
  const { values, handleChangeForm, errors, isValidForm } = useForms();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, password } = values;

    auth
      .register(email, password, name)
      .then((res) => {
        if (res) {
          handleAuthProfile(email, password);
          setErrorMessage("");
        }
      })
      .catch((err) => {
        if (err.name === "ValidationError") {
          console.log("Введены некорректные данные");
        }
        setErrorMessage(CONFLICT_MESSAGE);
      });
  };

  useEffect(() => {
    setErrorMessage("");
  }, [setErrorMessage]);

  return (
    <main className="register">
      <a className="register__circle" href="/">
        <img
          src={greenCircle}
          className="register__link"
          alt="Зеленый круг"
        ></img>
      </a>
      <h1 className="register__title">Добро пожаловать!</h1>
      <form className="register__container" onSubmit={handleSubmit}>
        <div className="form__register-inputs">
          <label className="form__register-input-text">Имя</label>
          <input
            name="name"
            className="form__input-register"
            placeholder="Введите имя"
            type="text"
            minLength={2}
            maxLength={30}
            pattern={EXP_NAME}
            required
            onChange={handleChangeForm}
          ></input>
          <span className="form__register-input-error">{errors.name}</span>
        </div>
        <div className="form__register-inputs">
          <label className="form__register-input-text">E-mail</label>
          <input
            name="email"
            className="form__input-register"
            pattern={EXP_EMAIL}
            type="email"
            placeholder="Введите почту"
            required
            onChange={handleChangeForm}
          ></input>
          <span className="form__register-input-error">{errors.email}</span>
        </div>
        <div className="form__register-inputs">
          <label className="form__register-input-text">Пароль</label>
          <input
            className="form__input-register"
            placeholder="Ваш пароль"
            name="password"
            type="password"
            minLength={5}
            maxLength={30}
            onChange={handleChangeForm}
            required
          ></input>
          <span className="form__register-input-error">{errors.password}</span>
        </div>
        <div className="form__buttons-register">
          <span className="form__register-error">{errorMessage}</span>
          <button
            className="form__register-submit-btn"
            type="submit"
            disabled={!isValidForm}
            style={{
              backgroundColor: !isValidForm ? "#F8F8F8" : "",
              color: !isValidForm ? "#C2C2C2" : "",
            }}
          >
            Зарегистрироваться
          </button>
          <div className="form__register-links">
            <p className="form__register-subtitle">Уже зарегистрированы?</p>
            <Link className="form__register-link" to="/signin">
              Войти
            </Link>
          </div>
        </div>
      </form>
    </main>
  );
}