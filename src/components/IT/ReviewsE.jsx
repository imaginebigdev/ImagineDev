import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination,
  Navigation,
  Autoplay,
  EffectFade,
} from "swiper";
import reviews from "@data/IT/reviewsE.json";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

SwiperCore.use([Pagination, Navigation, Autoplay, EffectFade]);

const ReviewsE = () => {
  return (
    <section
      className="reviews style-2 border-top brd-light section-padding bg-darkBlue"
      data-scroll-index="5"
      /* style={{
        background:
          "linear-gradient(to right, black 50%, rgba(124, 0, 174, 0.8) 50%), radial-gradient(at center, rgba(72, 0, 103, 0.8), rgba(0, 0, 0, 0.8)), url('tu-imagen-de-fondo.jpg')",
        backgroundBlendMode: "multiply",
      }} */
    >
      <div className="container">
        <div className="reviews_slider">
          <Swiper
            className="swiper-container"
            effect="fade"
            slidesPerView={1}
            spaceBetween={30}
            speed={1000}
            pagination={{
              el: ".reviews_slider .swiper-pagination",
              clickable: true,
            }}
            navigation={{
              nextEl: ".reviews_slider .swiper-button-next",
              prevEl: ".reviews_slider .swiper-button-prev",
            }}
            mousewheel={false}
            keyboard={true}
            autoplay={{
              delay: 4000,
            }}
            loop={true}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="row justify-content-center">
                  <div className="col-lg-7">
                    <div className="reviews_card text-center style-2">
                      <div className="section-head mb-30 text-center">
                        <h3 className="text-white ltspc-20 text-uppercase fs-1 lh-1 mb-70">
                          {review.title}
                        </h3>
                      </div>
                      <h5
                        className="text-white lh-4"
                        style={{ textAlign: "justify" }}
                      >
                        {review.review}
                      </h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="pagination_circle position-relative pagi_white mt-70">
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
      <img src="/assets/img/review/circulo 2.png" alt="" className="rev_l" />
      <img src="/assets/img/review/circulo 1.png" alt="" className="rev_r" />
    </section>
  );
};

export default ReviewsE;