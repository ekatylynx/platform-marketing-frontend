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
          <h2 className="main-title about-title title-list-services">
            Our creative process for your business
          </h2>
          <p className="main-text">
            As our motto, we always provide the best service especially for you
            and your company by growing your company to be better.
          </p>
        </div>
        <div className="list-services-cards">
          <div className="service-card">
            <img className="service-card-icon" src={traffic} alt="icon"></img>
            <h3 className="service-card-title">Grow your traffic</h3>
            <p className="service-card-text">
              We always help your company to grow with us.
            </p>
          </div>
          <div className="service-card">
            <img
              className="service-card-icon service-card-icon-sales"
              src={sales}
              alt="icon"
            ></img>
            <h3 className="service-card-title">Content for sales</h3>
            <p className="service-card-text">
              Every company that we handel. We always content more sales.
            </p>
          </div>
          <div className="service-card">
            <img
              className="service-card-icon service-card-icon-analytycs"
              src={report}
              alt="icon"
            ></img>
            <h3 className="service-card-title">Reporting & analytics</h3>
            <p className="service-card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
          </div>
          <div className="service-card">
            <img
              className="service-card-icon service-card-icon-conversion"
              src={conversion}
              alt="icon"
            ></img>
            <h3 className="service-card-title">Better Conversion</h3>
            <p className="service-card-text">
              We always help your company to grow with us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListServices;
