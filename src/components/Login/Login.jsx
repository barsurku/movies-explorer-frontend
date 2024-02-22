import WelcomeText from "../WelcomePages/WelcomeText/WelcomeText";
import WelcomePagesInputs from "../WelcomePages/WelcomePagesInputs/WelcomePagesInputs";
import SubmitBtn from "../WelcomePages/SubmitBtn/SubmitBtn";

import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("pochta@yandex.ru|");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <WelcomeText />
      <main className="login__main">
        <form className="welcome-page">
          <div className="welcome__login-inputs">
            <WelcomePagesInputs
              value={email}
              setValue={setEmail}
              type="email"
              id="usermail"
              placeholder={"E-mail"}
              required
            />
            <WelcomePagesInputs
              value={password}
              setValue={setPassword}
              type="password"
              id="password"
              minLength={2}
              maxLength={20}
              placeholder={"Пароль"}
              required
            />
          </div>
          <SubmitBtn />
        </form>
      </main>
    </div>
  );
}