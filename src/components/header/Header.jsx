import logo from "../../img/logo.svg";
import SignInModal from "../signInModal/SignInModal";
import Register from "../register/Register";

const Header = ({ setModal }) => {
  const closeModal = () => setModal();

  const openSignInModal = () => {
    setModal(<SignInModal closeModal={closeModal} />);
  };

  const openRegisterModal = () => {
    setModal(<Register closeModal={closeModal} />);
  };

  return (
    <div className="container">
      <section className="header">
        <img src={logo} alt="logotype"></img>
        <ul className="header-links">
          <li>
            <a className="header-link-item" href="#link-anchor-about">
              About
            </a>
          </li>
          <li>
            <a className="header-link-item" href="#link-anchor-product">
              Product
            </a>
          </li>
          <li>
            <a className="header-link-item" href="#link-anchor-service">
              Service
            </a>
          </li>
          <li>
            <a className="header-link-item" href="#link-anchor-contact">
              Contact
            </a>
          </li>
        </ul>
        <div className="header-buttons">
          <button className="header-button" onClick={openSignInModal}>
            Sign in
          </button>
          <button className="header-button" onClick={openRegisterModal}>
            Try Free
          </button>
        </div>
      </section>
    </div>
  );
};

export default Header;
