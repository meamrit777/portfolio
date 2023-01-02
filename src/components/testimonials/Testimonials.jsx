import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const data = [
  {
    avatar: AVTR1,
    name: "Menuka Shrestha",
    review:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    avatar: AVTR2,
    name: "Bishal Shrestha",
    review:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    avatar: AVTR3,
    name: "Kalu Shrestha",
    review:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    avatar: AVTR4,
    name: "Buku Shrestha",
    review:
      "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river.",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonial__section">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination,Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        autoplay={true}
        pagination={{ clickable: true }}
      >
        {data.map((data) => {
          return (
            <SwiperSlide className="testimonial">
              <div style={{ padding: 32 }}>
                <img
                  src={data.avatar}
                  alt="Avatar"
                  className="client__avatar"
                />

                <h5 className="client__name">{data.name}</h5>
                <small className="client__review">{data.review}</small>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
