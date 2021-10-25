import call_to_action from "../asset/img/call-to-action.png";
import style from "../asset/css/page.module.css";
const Staytuned = () => {
  return (
    <section id="call-to-action" className={`${style.callAction}`}>
    <div className={`${style.call}`}>
      <img src={call_to_action} alt="call-to-action" />
    </div>
    <div className="container-fluid">
      <div className="row justify-content-end">
        <div className="col-lg-6">
          <div className={`${style.callContent} text-center`}>
            <h2 className={`${style.callTitle}`}>
              Curious to Learn More? Stay Tuned
            </h2>
            <p className={`${style.text}`}>
              You let us know whenever you want us to update anything or
              think something can be optimised.
            </p>
            <div className={`${style.callNewsletter}`}>
              <i className="lni-envelope"></i>
              <input type="text" placeholder="john@email.com" />
              <button type="submit">SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  );
};

export default Staytuned