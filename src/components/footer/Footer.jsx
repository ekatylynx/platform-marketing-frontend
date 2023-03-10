import logo from "../../img/logo.svg";
import facebook from "../../img/facebook.svg";
import twitter from "../../img/twitter.svg";
import instagram from "../../img/instagram.svg";
import linkedin from "../../img/linkedin.svg";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer-information">
          <img src={logo} alt="icon-company"></img>
          <ul className="header-links">
            <li>
              <a className="header__links-item" href="#">
                About
              </a>
            </li>
            <li>
              <a className="header__links-item" href="#">
                Product
              </a>
            </li>
            <li>
              <a className="header__links-item" href="#">
                Service
              </a>
            </li>
            <li>
              <a className="header__links-item" href="#">
                Contact
              </a>
            </li>
          </ul>
          <div className="footer__links">
            <a className="footer__link" href="#">
                <img className="footer__link-icon" src={facebook} alt="icon"></img>
            </a>
            <a className="footer__link" href="#">
                <img className="footer__link-icon" src={twitter} alt="icon"></img>
            </a>
            <a className="footer__link" href="#">
                <img className="footer__link-icon" src={instagram} alt="icon"></img>
            </a>
            <a className="footer__link" href="#">
                <img className="footer__link-icon" src={linkedin} alt="icon"></img>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
