import "./Hero.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img1 from "./../../assets/img/slider1Img.webp";
import img2 from "./../../assets/img/slider2Img.webp";
import img3 from "./../../assets/img/slider3Img.webp";
import img4 from "./../../assets/img/slider4Img.webp";
import { useState } from "react";
// import "./styles.css";
const Hero = () => {
  const [btn, setBtn] = useState(false);

  const handleButtonClick = () => {
    setBtn(true);

    setTimeout(() => {
      setBtn(false);
    }, 1000);
  };
    return (
    <section className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <Swiper className="mySwiper">
            <SwiperSlide>
              <img src={img1} alt="" />
              <div className="hero__content">
                <p className="hero__text">NEW HEAT!</p>
                <h2 className="hero__title">Asics</h2>
                <button onClick={handleButtonClick}  className= {btn ? 'hero__btn click' : 'hero__btn'}>Shop now</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="" />
              <div className="hero__content">
                <h2 className="hero__title">Hi-tec</h2>
                <button onClick={handleButtonClick}  className= {btn ? 'hero__btn click' : 'hero__btn'}>Shop now</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="" />
              <div className="hero__content">
                <h2 className="hero__title">New Balance 9060</h2>
                <button onClick={handleButtonClick}  className= {btn ? 'hero__btn click' : 'hero__btn'}>Shop now</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt="" />
              <div className="hero__content">
                <h2 className="hero__title">adidas</h2>
                <button onClick={handleButtonClick}  className= {btn ? 'hero__btn click' : 'hero__btn'}>Shop now</button>
              </div>
            </SwiperSlide>

          </Swiper>

          <div className="swiper__content"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
