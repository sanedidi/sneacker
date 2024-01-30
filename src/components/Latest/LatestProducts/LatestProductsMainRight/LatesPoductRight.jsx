import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LatestProductsRight.scss";
import { productsCads } from "./LatestProductsCards";

const LatesPoductRight = () => {
  const [isBtnWinOpen, setIsBtnWinOpen] = useState(false);

  const toggleBtnWin = () => {
    setIsBtnWinOpen(!isBtnWinOpen);
  };

  return (
    <div className="products__right">
      <h2 className="products__title">Latest</h2>
      <div className="products__nav">
        <div className="products__text">
          <p>863 Items</p>
        </div>
        <div className="products__sorts">
          <p className="products__sort">Sorted by:</p>
          <div className="products__option">
            <button onClick={toggleBtnWin}>Recommended</button>
            {isBtnWinOpen && (
              <div className="products__btn-win">
                <Link to={"/"}>Recommended</Link>
                <Link to={"/"}>Product name</Link>
                <Link to={"/"}>Price</Link>
                <Link to={"/"}>Best discount </Link>
                <Link to={"/"}>Most sold </Link>
                <Link to={"/"}>Latest collections </Link>
              </div>
            )}
          </div>
        </div>
      </div>
       <div className="products__cards">
        {productsCads.map((card) => {
          return (
            <Link>
              <div className="products__card">
                <div className="products__cards-img">
                  <img src={card.img} alt="" />
                </div>
                <div className="products__content">
                  <p className="products__desc">{card.desc}</p>
                  <p className="products__price">{card.price}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

    </div>
  );
};

export default LatesPoductRight;
