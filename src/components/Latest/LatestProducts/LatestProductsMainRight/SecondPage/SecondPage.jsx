import React from "react";

const SecondPage = ({ products }) => {
  return (
    <div className="second-page">
      <h2 className="second-page__title">Second Page</h2>
      <div className="second-page__cards">
        {products.map((card) => (
          <div key={card.index} className="second-page__card">
            <img src={card.img} alt="" />
            <p className="second-page__desc">{card.desc}</p>
            <p className="second-page__price">{card.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondPage;
