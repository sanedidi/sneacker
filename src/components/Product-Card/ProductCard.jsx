import "./ProductsCard.scss";
import { useState } from "react";
import { productCardMap } from "./productsCard";
import "../../assets/fonts/SuisseIntl-Regular.otf";
const ProductCard = () => {
  const [card, setCard] = useState(false);

  const onMouseEnter = () => {
    setCard(true);
  };

  const HandleMouseLeave = () => {
    setCard(false);
  };
  return (
    <section className="productCard">
      <div className="container">
        <div className="productCard__wrapper">
          <h2 className="productCard__main-title">Latest sneakers</h2>
          <div className="productCard__cards">
            {productCardMap.map((el) => {
              return (
                <div className="productCard__card">
                  <div
                    className="productCard__box-img"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={HandleMouseLeave}
                  >
                    <img
                      className="productCard__img"
                      src={card ? el.img1 : el.img}
                      alt=""
                    />
                  </div>
                  <h2 className="productCard__title">{el.title}</h2>
                  <p className="productCard__text">{el.description}</p>
                  <p className="productCard__price">€{el.price}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
