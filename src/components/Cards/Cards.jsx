import { card } from "./CardsMap.js";
import { useState } from "react";
import "./Cards.scss";
const Cards = () => {
  const [hover, setHover] = useState(false);

  const onMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <section className="cards">
      <div className="container">
        <div className="cards__wrapper">
          {card.map((el) => {
            return (
              <div className="cards__card">
                <div
                  className="cards__imgs"
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <img className="cards__imgs-img" src={hover ? el.imgHover : el.img} alt="" />
                </div>
                <h2 className="cards__title">{el.title}</h2>
                <p className="cards__text">{el.discription}</p>
                <p className="cards__price">{el.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Cards;
