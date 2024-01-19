import { trendsMap } from "./Trendsjs";
import "./Trends.scss";
const Trends = () => {
  return (
    <section className="trends">
      <div className="container">
        <div className="trends__wrapper">
          <div className="trends__img">
            <img
              src="https://cdn.etrias.nl/media/cache/image_shop_the_look_wide_xl/images/shop_the_look/228029/sd-saucony.jpg"
              alt=""
            />
            <div className="trends__box">
              {trendsMap.map((card1) => {
                return (
                  <div className="trends__card">
                    <div className="trends__card-img">
                      <img src={card1.img} alt="" />
                    </div>
                    <div className="trends__content">
                      <div className="trends__top">
                        <h2 className="trends__card-title">{card1.title}</h2>
                      </div>
                      <div className="trends__mid">
                        <p className="trends__text">{card1.desc}</p>
                      </div>
                        <p className="trends__price">${card1.price}</p>
                      <div className="trends__btm">
                        <button className="trends__btn">{card1.btn}</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trends;
