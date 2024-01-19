import { Link } from "react-router-dom";
import "./Shop.scss";
import { shop2 } from "./Shops";
const Shop = () => {
  return (
    <section className="shop">
      <div className="container">
        <div className="shop__wrapper">
          <div className="shop__title">
            <h2>SHOP OUR BRANDS</h2>
          </div>
          <div className="shop__box">
            {shop2.map((card) => {
              return (
                <Link to={'/'}>
                <div className="shop__card">
                  <div className="shop__img">
                    <img src={card.img} alt="" />
                    <button>{card.btn}</button>
                  </div>
                  
                </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
