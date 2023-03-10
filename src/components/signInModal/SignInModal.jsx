const SignInModal = ({ closeModal }) => {
  return (
    <div className="confirm-modal">
      <form name="login" className="auth-form">
        <h2 className="auth-form__title">Welcome!</h2>
        <label className="auth-form__label">
          E-mail
          <input
            name="email"
            className="popup-form__input popup-form__input_type_auth"
            type="email"
            required
            placeholder="email@gmail.com"
          />
        </label>
        <label className="auth-form__label">
          Password
          <input
            name="password"
            className="popup-form__input popup-form__input_type_auth"
            type="password"
            autoComplete="on"
            minLength="8"
            required
            placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
          />
        </label>
        <button type="submit" className="auth-form__btn-submit">
          Sign In
        </button>
        <p className="auth-helper-link">
          Not registered yet? <a href="wwd">Register</a>{" "}
        </p>
      </form>
      <span className="button-icon__close" title="Закрыть" onClick={closeModal}>
        ×
      </span>
    </div>
  );
};

export default SignInModal;
