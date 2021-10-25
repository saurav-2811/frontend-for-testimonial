import style from "../asset/css/page.module.css";

const GetinTouch = () => {
  return (
    <section id="contact" className={style.contactArea}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className={`${style.sectionTitle} text-center pb-10`}>
              <h4 className={style.title}>Get In touch</h4>
              <p className={style.text}>
                Stop wasting time and money designing and managing a website
                that doesn’t get results. Happiness guaranteed!
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className={style.contactForm}>
              <form
                id="contact-form"
                action="?"
                // method="post"
                data-toggle="validator"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className={`${style.singleForm} form-group`}>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        data-error="Name is required."
                        required="required"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                  <div className={`${style.singleForm} form-group`}>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        data-error="Valid email is required."
                        required="required"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                  <div className={`${style.singleForm} form-group`}>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        data-error="Subject is required."
                        required="required"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                  <div className={`${style.singleForm} form-group`}>
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        data-error="Phone is required."
                        required="required"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className={`${style.singleForm} form-group`}>
                      <textarea
                        placeholder="Your Mesaage"
                        name="message"
                        data-error="Please, leave us a message."
                        required="required"
                      ></textarea>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <p className="form-message"></p>
                  <div className="col-md-12">
                  <div className={`${style.singleForm} form-group text-center`}>
                      <button type="submit" className="btn btn-primary btn-lg rounded-pill">
                        send message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetinTouch;
