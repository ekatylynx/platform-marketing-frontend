const Contact = () => {
  return (
    <section className="contact" id="link-anchor-contact">
      <div className="container">
        <div className="contact-information">
          <h2 className="main__title title-services title-list-services contact-title">
            Contact with us.
          </h2>
          <p className="main__text">
            More than 50,000+ companies trusted our business
          </p>
          <form className="main-email-send contact-form">
            <div className="main-input">
              <input
                className="main-email__input main-email__input_contact"
                placeholder="Type your messages.."
              ></input>
            </div>
            <button className="header-button main-email__button">
              Get started
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
