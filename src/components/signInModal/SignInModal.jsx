import { useState } from "react";
import { auth } from "../../api";

const SignInModal = ({ closeModal }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const logIn = (e) => {
    e.preventDefault();
    auth(login, password)
      .then((data) => {
        alert(JSON.stringify(data));
      })
      .catch((err) => {
        alert("Не повезло, попробуй еще раз " + err);
      });
  };

  return (
    <div className="confirm-modal">
      <form name="login" className="auth-form">
        <h2 className="auth-form-title">Welcome!</h2>
        <label className="auth-form-label">
          E-mail
          <input
            name="email"
            className="modal-form-input modal-form-input-auth"
            type="email"
            required
            placeholder="email@gmail.com"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </label>
        <label className="auth-form-label">
          Password
          <input
            name="password"
            className="modal-form-input modal-form-input-auth"
            type="password"
            autoComplete="on"
            minLength="8"
            required
            placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" className="auth-form-btn-submit" onClick={logIn}>
          Sign In
        </button>
        <p className="auth-helper-link">
          Not registered yet? <a href="wwd">Register</a>{" "}
        </p>
      </form>
      <span className="button-icon-close" title="Закрыть" onClick={closeModal}>
        ×
      </span>
    </div>
  );
};

export default SignInModal;
