import email from "../../img/email.svg";
import checkMark from "../../img/check.svg";
import ConfirmModal from "../confirmModal/ConfirmModal";

const Main = ({ setModal }) => {
  const closeModal = () => setModal();
  const openConfirmModal = () => {
    setModal(<ConfirmModal closeModal={closeModal} />);
  };

  return (
    <section className="main">
      <div className="container">
        <div className="main-information">
          <div className="block-info">100% SATISFIED GUARANTEE</div>
          <h1 className="main-title">Power up your shopify products</h1>
          <p className="main-text">
            More than 90,000+ companies trust our business. Get help from a
            dedicated shopify developer today.
          </p>
          <div className="main-email-send">
            <div className="main-form">
              <img className="main-email-icon" src={email} alt="check"></img>
              <input
                className="main-input"
                placeholder="Your email address"
              ></input>
            </div>
            <button
              className="header-button main-email-button"
              onClick={openConfirmModal}
            >
              Sign up
            </button>
          </div>
          <div className="main-guarantee">
            <div className="main-guarantee-item">
              <img
                className="check-mark-icon"
                src={checkMark}
                alt="check"
              ></img>
              <p className="guarantee-text">30 days free trial</p>
            </div>
            <div className="main-guarantee-item">
              <img
                className="check-mark-icon"
                src={checkMark}
                alt="check"
              ></img>
              <p className="guarantee-text">No credit card required</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
