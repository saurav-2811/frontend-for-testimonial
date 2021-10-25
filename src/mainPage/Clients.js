import style from "../asset/css/page.module.css";
import img1 from "../asset/img/client_logo_01.png";
import img2 from "../asset/img/client_logo_02.png";
import img3 from "../asset/img/client_logo_03.png";
import img4 from "../asset/img/client_logo_04.png";

const Clients = () => {
  return (
    <section className={style.clientLogoArea}>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-6">
            <div className="single-client mt-30 text-center">
              <img src={img1} alt="Logo" />
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="single-client mt-30 text-center">
              <img src={img2} alt="Logo" />
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="single-client mt-30 text-center">
              <img src={img3} alt="Logo" />
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="single-client mt-30 text-center">
              <img src={img4} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
