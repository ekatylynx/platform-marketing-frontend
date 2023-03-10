const Contact = () => {
  return (
    <section className="contact" id="link-anchor-contact">
      <div className="container">
        <div className="contact-information">
          <h2 className="main-title about-title title-list-services contact-title">
            Contact with us.
          </h2>
          <p className="main-text">
            More than 50,000+ companies trusted our business
          </p>
          <form className="main-email-send contact-form">
            <div className="main-form">
              <input
                className="main-input main-input-message"
                placeholder="Type your messages.."
              ></input>
            </div>
            <button className="header-button main-email-button">
              Get started
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
