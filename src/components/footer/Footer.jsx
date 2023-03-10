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
              <a className="header-link-item" href="#1">
                About
              </a>
            </li>
            <li>
              <a className="header-link-item" href="#1">
                Product
              </a>
            </li>
            <li>
              <a className="header-link-item" href="#1">
                Service
              </a>
            </li>
            <li>
              <a className="header-link-item" href="#1">
                Contact
              </a>
            </li>
          </ul>
          <div className="footer-links">
            <a className="footer-link" href="1#">
              <img
                className="footer-link-icon"
                src={facebook}
                alt="icon"
              ></img>
            </a>
            <a className="footer-link" href="#q">
              <img className="footer-link-icon" src={twitter} alt="icon"></img>
            </a>
            <a className="footer-link" href="#q">
              <img
                className="footer-link-icon"
                src={instagram}
                alt="icon"
              ></img>
            </a>
            <a className="footer-link" href="#q">
              <img
                className="footer-link-icon"
                src={linkedin}
                alt="icon"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
