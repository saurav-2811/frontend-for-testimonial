import style from "../asset/css/page.module.css";
import { BASE_URL } from ".././env";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useMedia from "../useMedia"
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);
const MainTestimonial = () => {
  const [dataall, setDataall] = useState([]);
  // const [slideNo, setSlideNo] = useState(3);
  const matches = useMedia('(min-width : 1000px )' );
  useEffect(() => {
    fetch(BASE_URL + "/get-testimonial", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDataall(data?.testimonial);
      });
  }, []);
  return (
    <section id="testimonial" className={style.testimonialArea}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className={`${style.sectionTitle} text-center pb-10`}>
              <h4 className={style.title}>Testimonial</h4>
              <p className={style.text}>
                Stop wasting time and money designing and managing a website
                that doesn’t get results. Happiness guaranteed!
              </p>
            </div>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-lg-12" style={{ overflowX: "hidden" }}>
            <Swiper
              slidesPerView={matches?3:1}
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              loop={true}
              className="mySwiper"
            >
              {dataall.map((val, i) => {
                return (
                  <SwiperSlide>
                    <div
                      className={`${style.singleTestimonial} mt-30 mb-30 text-center`}
                    >
                      <div className={style.testimonialImage}>
                        <img src={val?.photo?.link} alt="Author" />
                      </div>
                      <div className={style.testimonialContent}>
                        <p className={style.text}>{val?.Description}</p>
                        <h6 className={style.authorName}>{val?.name}</h6>
                        <span className={style.subTitle}>{val?.post}</span>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainTestimonial;
