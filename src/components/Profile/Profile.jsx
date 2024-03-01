import { useContext, useEffect } from "react";

import { EXP_NAME, EXP_EMAIL } from "../../utils/constants";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { useForms } from "../Form/Form";

export default function Profile({
  handleLogout,
  handleUpdateUser,

  errorMessage,
  setErrorMessage,
}) {
  const {
    values,
    errors,
    isValidForm,
    setIsValidForm,
    setValuesForms,
    handleChangeForm,
  } = useForms();
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    if (currentUser) {
      setValuesForms({
        name: currentUser.name,
        email: currentUser.email,
      });
    }
  }, [currentUser, setValuesForms]);

  useEffect(() => {
    if (
      currentUser.name === values.name &&
      currentUser.email === values.email
    ) {
      setIsValidForm(false);
    }
  }, [setIsValidForm, currentUser, values]);

  function handleSubmit(event) {
    event.preventDefault();

    handleUpdateUser({
      name: values.name,
      email: values.email,
    });
  }

  useEffect(() => {
    setErrorMessage("");
  }, [setErrorMessage]);

  return (
    <main className="profile">
      <div className="profile__container">
        <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
        <form className="profile__form" onSubmit={handleSubmit}>
          <div className="profile__inputs">
            <label className="profile__label">Имя</label>
            <input
              name="name"
              className="profile__input"
              placeholder="Введите имя"
              pattern={EXP_NAME}
              minLength={3}
              maxLength={25}
              value={values.name || ""}
              onChange={handleChangeForm}
              required
            ></input>
          </div>
          <span className="profile__input-error">{errors.name}</span>
          <div className="profile__inputs profile__inputs-email">
            <label className="profile__label">E-mail</label>
            <input
              name="email"
              className="profile__input"
              type="email"
              placeholder="Почта"
              pattern={EXP_EMAIL}
              minLength={3}
              maxLength={25}
              value={values.email || ""}
              onChange={handleChangeForm}
              required
            ></input>
          </div>
          <span className="profile__input-error">{errors.email}</span>
          <span className="profile__error">{errorMessage}</span>
          <div className="profile__btns">
            <button
              type="submit"
              className="profile__btn profile__btn-save"
              disabled={!isValidForm}
              style={{
                color: !isValidForm ? "#C2C2C2" : "",
              }}
            >
              Редактировать
            </button>
            <button
              className="profile__btn profile__btn-logout"
              type="button"
              onClick={handleLogout}
            >
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}