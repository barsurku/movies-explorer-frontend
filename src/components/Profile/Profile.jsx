import { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../Header/Header";
import userInfo from "../../utils/userInfo";

export default function Profile() {
  const [isDisabled, setIsDisabled] = useState(true);
  const isError = false;
  const { name, email } = userInfo;

  return (
    <>
      <Header />
      <main className="profile">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form className="profile__container">
          <div className="profile__inputs">
            <label className="profile__label">
              <span className="profile__input-name">Имя</span>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Введите имя"
                className="profile__input"
                minLength={2}
                maxLength={30}
                value={name}
                autoComplete="off"
                disabled={isDisabled}
                required
              />
            </label>
            <label className="profile__label">
              <span className="profile__input-name">E-mail</span>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Введите e-mail"
                className="profile__input"
                value={email}
                disabled={isDisabled}
                autoComplete="off"
                required
              />
            </label>
          </div>
          {isError && (
            <span className="profile__error">Не удалось обновить профиль.</span>
          )}
          {isDisabled ? (
            <div className="profile__btns">
              <p
                className="profile__edit-info"
                onClick={() => setIsDisabled(!isDisabled)}
              >
                Редактировать
              </p>
              <Link to={"/"} className="profile__exit">
                Выйти из аккаунта
              </Link>
            </div>
          ) : (
            <button
              type="submit"
              className={`profile__btn-save ${
                isError ? "profile__btn-save_disabled" : "profile__btn-save"
              }`}
              disabled={isError}
            >
              Сохранить
            </button>
          )}
        </form>
      </main>
    </>
  );
}