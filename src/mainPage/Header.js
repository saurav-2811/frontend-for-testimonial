import style from "../asset/css/page.module.css";
import shape from "../asset/img/header-shape.svg";

const Header = () => {
  return (
    <div id="home" className={`${style.headerHero} ${style.bgCover} `}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className={`${style.headerContent} text-center `}>
              <h3 className={`${style.headerTitle}`}>
                Handcrafted Landing Page for Startups and SaaS Businesses
              </h3>
              <p className={`${style.text}`}>
                A simple, customizable, and, beautiful SaaS business focused
                landing page to make your project closer to launch!
              </p>
              <ul className={`${style.headerBtn} ${style.roundedButtons} `}>
                <li>
                  <a className={` ${style.roundedThree} rounded-pill btn btn-lg `} href="/">
                    GET IN TOUCH
                  </a>
                </li>
                <li>
                  <a
                    className={` rounded-pill btn btn-lg btn-light shadow`}
                    href="../../watch.html?v=r44RKWyfcFw"
                  >
                    WATCH THE VIDEO
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.headerShape}`}>
        <img src={shape} alt="shape" />
      </div>
    </div>
  );
};
export default Header;
