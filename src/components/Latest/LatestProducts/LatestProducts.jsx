import React, { useState } from "react";
import "./LatestProducts.scss";
import LatesPoductRight from "./LatestProductsMainRight/LatesPoductRight";
import Footer from './../../Footer/Footer'
const LatestProducts = () => {
  const [isBoxOpen, setIsBoxOpen] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [isSortActive, setIsSortActive] = useState(false);

  const toggleBox = () => {
    setIsBoxOpen(!isBoxOpen);
  };

  const toggleBox2 = () => {
    setIsOpen(!isOpen);
  };

  const toggleBox3 = () => {
    setIsOpen1(!isOpen1);
  };

  const closeBox = () => {
    setIsFilterActive(false);
  };

  const toggleFilter = () => {
    setIsFilterActive(!isFilterActive);
  };

  const toggleSort = () => {
    setIsSortActive(!isSortActive);
  };

  return (
    <section className="products">
      <div className="container">
        <p className="products__pag">Home &gt; Latest</p>
        <div className="products__wrapper">
          <div
            className={`products__left ${
              isFilterActive || isSortActive ? "productActive" : ""
            }`}
          >
            <div className="products__items">
              <div className="products__item">
                <div className="products__item__top" onClick={toggleBox}>
                  <h2 className="products__item-title">
                    Product Type <span>&gt; </span>
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
                    Suitable for <span> &gt; </span>
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
                    Material <span> &gt; </span>
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
                <div className="products__items-close">
                  <button onClick={closeBox}>Close the window</button>
                </div>
              </div>
            </div>
          </div>
          <div className="products__burger">
            <button
              className={`products__burger-btn1 ${
                isFilterActive ? "burger-active" : ""
              }`}
              onClick={toggleFilter}
            >
              Filter
            </button>
            <button
              className={`products__burger-btn2 ${
                isSortActive ? "burger-active2" : ""
              }`}
              onClick={toggleSort}
            >
              Sort
            </button>
          </div>
          <LatesPoductRight />
        </div>
      <Footer />
      </div>
    </section>
  );
};

export default LatestProducts;
