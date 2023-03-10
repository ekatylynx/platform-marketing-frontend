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
          <h1 className="main__title">Power up your shopify products</h1>
          <p className="main__text">
            More than 90,000+ companies trust our business. Get help from a
            dedicated shopify developer today.
          </p>
          <div className="main-email-send">
            <div className="main-input">
              <img className="main-email__icon" src={email} alt="check"></img>
              <input
                className="main-email__input"
                placeholder="Your email address"
              ></input>
            </div>
            <button
                className="header-button main-email__button"
                onClick={openConfirmModal}
            >
              Sign up
            </button>
          </div>
          <div className="main-guarantee">
            <div className="main-guarantee_item">
              <img
                className="check-mark__icon"
                src={checkMark}
                alt="check"
              ></img>
              <p className="guarantee__text">30 days free trial</p>
            </div>
            <div className="main-guarantee_item">
              <img
                className="check-mark__icon"
                src={checkMark}
                alt="check"
              ></img>
              <p className="guarantee__text">No credit card required</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
