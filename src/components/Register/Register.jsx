import { useState } from "react";

import WelcomeText from "../WelcomePages/WelcomeText/WelcomeText";
import WelcomePagesInput from "../WelcomePages/WelcomePagesInputs/WelcomePagesInputs";
import SubmitBtn from "../WelcomePages/SubmitBtn/SubmitBtn";

export default function Register() {
  const [name, setName] = useState("Виталий");
  const [email, setEmail] = useState("pochta@yandex.ru|");
  const [password, setPassword] = useState("••••••••••••••");

  return (
    <div className="register">
      <WelcomeText />
      <main className="register__main">
        <form className="welcome">
          <div className="welcome__register-inputs">
            <WelcomePagesInput
              type="text"
              minLength={2}
              maxLength={30}
              value={name}
              setValue={setName}
              span={"Имя"}
              placeholder={"Введите имя"}
              required
            />
            <WelcomePagesInput
              type="email"
              value={email}
              setValue={setEmail}
              span={"E-mail"}
              placeholder={"Введите e-mail"}
              required
            />
            <WelcomePagesInput
              type="text"
              minLength={2}
              maxLength={30}
              value={password}
              setValue={setPassword}
              span={"Пароль"}
              placeholder={"Введите пароль"}
              errorMessage={"Что-то пошло не так..."}
              required
            />
          </div>
          <SubmitBtn />
        </form>
      </main>
    </div>
  );
}