import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LatestProducts.scss";

const LatestProducts = () => {
  const [isBoxOpen, setIsBoxOpen] = useState(false);

  const toggleBox = () => {
    setIsBoxOpen(!isBoxOpen);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleBox2 = () => {
    setIsOpen(!isOpen);
  };

  const [isOpen1, setIsOpen1] = useState(false);

  const toggleBox3 = () => {
    setIsOpen1(!isOpen1);
  };


  const [isActive, SetActive] = useState(false);

  const IsActiveBur = ()=>{
    SetActive(!isActive)
  }

  return (
    <section className="products">
      <div className="container">
        <p className="products__pag">Home > Latest</p>
        <div className="products__wrapper">
          <div className="products__left">
            <div className="products__items">
              <div className="products__item">
                <div className="products__item__top" onClick={toggleBox}>
                  <h2 className="products__item-title">
                    Product Type <span> > </span>
                  </h2>
                </div>
                {isBoxOpen && (
                  <div className="products__item-box">
                    <div className="products__box-item">
                      <input type="checkbox" />
                      <p className="products__box-text">Body Warmer</p>
                    </div>
                    <div className="products__box-item">
                      <input type="checkbox" />
                      <p className="products__box-text">Boots</p>
                    </div>
                    <div className="products__box-item">
                      <input type="checkbox" />
                      <p className="products__box-text">Cap</p>
                    </div>
                    <div className="products__box-item">
                      <input type="checkbox" />
                      <p className="products__box-text">Flip Flops</p>
                    </div>
                    <div className="products__box-item">
                      <input type="checkbox" />
                      <p className="products__box-text">Hoodie</p>
                    </div>
                    <div className="products__box-item">
                      <input type="checkbox" />
                      <p className="products__box-text">Jackets</p>
                    </div>
                    <div className="products__box-item">
                      <input type="checkbox" />
                      <p className="products__box-text">Joggers</p>
                    </div>
                    <div className="products__box-item">
                      <input type="checkbox" />
                      <p className="products__box-text">Jumper</p>
                    </div>
                    <div className="products__box-item">
                      <input type="checkbox" />
                      <p className="products__box-text">Lace-up</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="products__item">
                <div className="products__item__top" onClick={toggleBox2}>
                  <h2 className="products__item-title">
                    Suitable for <span> > </span>
                  </h2>
                </div>
                {isOpen && (
                  <div className="products__item-box">
                    <div className="products__box-item">
                      <input type="checkbox" />
                      <p className="products__box-text">Men</p>
                    </div>
                    <div className="products__box-item">
                      <input type="checkbox" />
                      <p className="products__box-text">Woman</p>
                    </div>
                    <div className="products__box-item">
                      <input type="checkbox" />
                      <p className="products__box-text">Boys</p>
                    </div>
                    <div className="products__box-item">
                      <input type="checkbox" />
                      <p className="products__box-text">Girls</p>
                    </div>
                    <div className="products__box-item">
                      <input type="checkbox" />
                      <p className="products__box-text">Babies</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="products__item">
                <div className="products__item__top" onClick={toggleBox3}>
                  <h2 className="products__item-title">
                    Material <span> > </span>
                  </h2>
                </div>
                {isOpen1 && (
                  <div className="products__item-box">
                    <div className="products__box-item">
                      <input type="checkbox" />
                      <p className="products__box-text">Acrylic </p>
                    </div>
                    <div className="products__box-item">
                      <input type="checkbox" />
                      <p className="products__box-text">Canvas</p>
                    </div>
                    <div className="products__box-item">
                      <input type="checkbox" />
                      <p className="products__box-text">Cotton</p>
                    </div>
                    <div className="products__box-item">
                      <input type="checkbox" />
                      <p className="products__box-text">Gore-Tex</p>
                    </div>
                    <div className="products__box-item">
                      <input type="checkbox" />
                      <p className="products__box-text">Leather </p>
                    </div>
                    <div className="products__box-item">
                      <input type="checkbox" />
                      <p className="products__box-text">Natural Fibre </p>
                    </div>
                    <div className="products__box-item">
                      <input type="checkbox" />
                      <p className="products__box-text">Nylon </p>
                    </div>
                    <div className="products__box-item">
                      <input type="checkbox" />
                      <p className="products__box-text">PU </p>
                    </div>
                    <div className="products__box-item">
                      <input type="checkbox" />
                      <p className="products__box-text">Plastic </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="products__burger">
            <button>Filter</button>
            <button className="products__burger-btn">Sort</button>
          </div>
          <div className="products__right">
            <h2 className="products__title">Latest</h2>
            <div className="products__nav">
              <div className="products__text">
                <p>863 Items</p>
              </div>
              <div className="products__sorts">
                <p className="products__sort">Sorted by:</p>
                <button>Recommended</button>
                <div className="products__btn-win">
                  <Link to={"/"}>Recommended</Link>
                  <Link to={"/"}>Product name</Link>
                  <Link to={"/"}> Price</Link>
                  <Link to={"/"}>Best discount </Link>
                  <Link to={"/"}>Most sold </Link>
                  <Link to={"/"}>Latest collections </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
