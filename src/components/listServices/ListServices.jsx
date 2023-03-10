import traffic from "../../img/traffic.svg";
import sales from "../../img/sales.svg";
import report from "../../img/report.svg";
import conversion from "../../img/conversion.svg";

const ListServices = () => {
  return (
    <section className="list-services" id="link-anchor-product">
      <div className="container">
        <div className="list-services-information">
          <div className="block-info">WHAT WE DO</div>
          <h2 className="main__title title-services title-list-services">
            Our creative process for your business
          </h2>
          <p className="main__text">
            As our motto, we always provide the best service especially for you
            and your company by growing your company to be better.
          </p>
        </div>
        <div className="list-services-cards">
          <div className="cards__item">
            <img className="cards__item-icon" src={traffic} alt="icon"></img>
            <h3 className="cards__item-title">Grow your traffic</h3>
            <p className="cards__item-text">
              We always help your company to grow with us.
            </p>
          </div>
          <div className="cards__item">
            <img className="cards__item-icon cards__item-icon_sales" src={sales} alt="icon"></img>
            <h3 className="cards__item-title">Content for sales</h3>
            <p className="cards__item-text">
              Every company that we handel. We always content more sales.
            </p>
          </div>
          <div className="cards__item">
            <img className="cards__item-icon cards__item-icon_analytycs" src={report} alt="icon"></img>
            <h3 className="cards__item-title">Reporting & analytics</h3>
            <p className="cards__item-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
          </div>
          <div className="cards__item">
            <img className="cards__item-icon cards__item-icon_conversion" src={conversion} alt="icon"></img>
            <h3 className="cards__item-title">Better Conversion</h3>
            <p className="cards__item-text">
              We always help your company to grow with us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListServices;
