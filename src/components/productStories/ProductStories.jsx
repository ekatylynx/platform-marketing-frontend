import check2 from "../../img/check-2.svg";

const ProductStories = () => {
  return (
    <section className="product" id="link-anchor-service">
      <div className="container">
        <div className="product-information">
          <div className="block-info">OUR PRODUCT STORIES</div>
          <h2 className="main__title title-services title-list-services">
            Why product stories? Learn more
          </h2>
          <ul className="product-advantages">
            <li className="advantages__item">
              <img
                className="advantages__item-icon"
                src={check2}
                alt="icon"
              ></img>
              <div className="advantages__item-info">
                <h3 className="advantages__title">
                  SEO optimized, high Google work
                </h3>
                <p className="advantages__text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </li>
            <li className="advantages__item">
              <img
                className="advantages__item-icon"
                src={check2}
                alt="icon"
              ></img>
              <div className="advantages__item-info">
                <h3 className="advantages__title">
                  Fast loading, low bounce rates
                </h3>
                <p className="advantages__text">
                  It is a long established fact that a reader will be distracted
                  by the readable content
                </p>
              </div>
            </li>
            <li className="advantages__item">
              <img
                className="advantages__item-icon"
                src={check2}
                alt="icon"
              ></img>
              <div className="advantages__item-info">
                <h3 className="advantages__title">
                  SEO optimized, high Google work
                </h3>
                <p className="advantages__text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductStories;
