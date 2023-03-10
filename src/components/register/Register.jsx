const Register = ({ closeModal }) => {
  return (
    <div className="confirm-modal">
      <form name="register" className="auth-form">
        <h2 className="auth-form-title">Welcome!</h2>
        <label className="auth-form-label">
          E-mail
          <input
            name="email"
            className="modal-form-input modal-form-input-auth"
            type="email"
            required
            placeholder="email@gmail.com"
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
          />
        </label>
        <label className="auth-form-label">
          Repeat password
          <input
            name="password-repeat"
            className="modal-form-input modal-form-input-auth"
            type="password"
            autoComplete="on"
            minLength="8"
            required
            placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
          />
        </label>
        <button type="submit" className="auth-form-btn-submit">
          Register
        </button>
        <p className="auth-helper-link">
          Already registered? <a href="wwd">Sign In</a>
        </p>
      </form>
      <span className="button-icon-close" title="Закрыть" onClick={closeModal}>
        ×
      </span>
    </div>
  );
};

export default Register;
