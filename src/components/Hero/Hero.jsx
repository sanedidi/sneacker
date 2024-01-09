import "./Hero.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,  } from "swiper/modules";
import "swiper/css";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}            
        //   effect="fade" // Set the fade effect for smooth transitions
          speed={800} // Adjust the speed as needed
          modules={[Autoplay]}  
          className="mySwiper"
        >
          <SwiperSlide className="hero__swiper">
            <img
              src="https://cdn.etrias.nl/media/cache/slide_wide_md/images/slider/224993/homepage-slider-adidas.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="hero__swiper">
            <img
              src="https://cdn.etrias.nl/media/cache/slide_wide_md/images/slider/224993/new-balance-9060.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="hero__swiper">
            <img
              src="https://cdn.etrias.nl/media/cache/slide_wide_md/images/slider/224993/homepage-slider-hi-tec.png"
              alt=""
            />
          </SwiperSlide>

        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
