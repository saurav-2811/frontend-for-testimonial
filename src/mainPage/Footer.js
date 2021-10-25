import style from "../asset/css/page.module.css";
import logo from "../asset/img/logo.svg";
import { Link } from "react-router-dom";
import LineIcon from "react-lineicons";

const Footer = () => {
  return (
    <>
      <footer id="footer" className={style.footerArea}>
        <div className={style.footerWidget}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div
                  className={`${style.footerLogoSupport} d-md-flex align-items-end justify-content-between`}
                >
                  <div className={`${style.footerLogo} d-flex align-items-end`}>
                    <Link className="mt-30" to="/">
                      <img src={logo} alt="Logo" />
                    </Link>
                    <ul className={`${style.social} mt-30`}>
                      <li>
                        <Link to="/">
                          <h4 style={{ color: "grey" }}>
                            <LineIcon name="facebook-filled" />
                          </h4>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <h4 style={{ color: "grey" }}>
                            <LineIcon name="twitter-original" />
                          </h4>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <h4 style={{ color: "grey" }}>
                            <LineIcon name="instagram-original" />
                          </h4>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <h4 style={{ color: "grey" }}>
                            <LineIcon name="linkedin-original" />
                          </h4>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className={style.footerLink}>
                  <h6 className={style.footerTitle}>Company</h6>
                  <ul>
                    <li>
                      <a style={{ textDecoration: "none" }} href="#home">
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ textDecoration: "none" }}
                       
                        href="#contact"
                      >
                        Contact
                      </a>
                    </li>
                    <li>
                      <Link style={{ textDecoration: "none" }} to="#">
                        Career
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className={style.footerLink}>
                  <h6 className={style.footerTitle}>Product & Services</h6>
                  <ul>
                    <li>
                      <Link style={{ textDecoration: "none" }} to="/">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link style={{ textDecoration: "none" }} to="/">
                        Business
                      </Link>
                    </li>
                    <li>
                      <Link style={{ textDecoration: "none" }} to="/">
                        Developer
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-5">
                <div className={style.footerLink}>
                  <h6 className={style.footerTitle}>Help & Support</h6>
                  <ul>
                    <li>
                      <Link style={{ textDecoration: "none" }} to="/">
                        Support Center
                      </Link>
                    </li>
                    <li>
                      <Link style={{ textDecoration: "none" }} to="/">
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link style={{ textDecoration: "none" }} to="/">
                        Terms & Conditions
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-7">
                <div className={style.footerNewsletter}>
                  <h6 className={style.footerTitle}>Subscribe Newsletter</h6>
                  <div className={style.newsletter}>
                    <form action="#">
                      <input type="text" placeholder="Your Email" />
                      <button type="submit">
                        <LineIcon name="angle-double-right" />
                      </button>
                    </form>
                  </div>
                  <p className={style.text}>
                    Subscribe weekly newsletter to stay upto date. We don’t send
                    spam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.footerCopyright}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className={`${style.copyright} text-center`}>
                  <p className={style.text}>
                    Develop by{" "}
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      rel="nofollow"
                      to="/"
                    >
                      <h4 style={{ textDecoration: "none", color: "white" }}>
                        &#169;saurav{" "}
                      </h4>
                    </Link>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
 
    </>
  );
};
export default Footer;
