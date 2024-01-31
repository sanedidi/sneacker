import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./LatestProductsRight.scss";
// import SecondPage from "./SecondPage/SecondPage";

const LatesPoductRight = () => {
  const [isBtnWinOpen, setIsBtnWinOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(64); // Измените это значение на количество товаров на странице

  const toggleBtnWin = () => {
    setIsBtnWinOpen(!isBtnWinOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3009/productsDatabase"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchData();
  }, []);

  // Логика для отображения товаров на текущей странице
  const indexOfLastProduct = currentPage * pageSize;
  const indexOfFirstProduct = indexOfLastProduct - pageSize;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Логика для переключения между страницами
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="products__right">
      <h2 className="products__title">Latest</h2>
      <div className="products__nav">
        <div className="products__text">
          <p>{products.length} Items</p>
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
        {currentProducts.map((card) => {
          return (
            <Link key={card.index} to={`/product/${card.index}`}>
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
      <div className="products__cards">
        {currentProducts.map((card) => {
          return (
            <Link key={card.index} to={`/product/${card.index}`}>
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
      <div
        class="pagination-container wow zoomIn mar-b-1x"
        data-wow-duration="0.5s"
      >
        <ul class="pagination">
          <li class="pagination-item--wide first">
            <a
              class="pagination-link--wide first"
              href="#"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </a>
          </li>
          {Array.from(
            { length: Math.ceil(products.length / pageSize) },
            (_, index) => (
              <li
                key={index + 1}
                class={`pagination-item ${
                  index + 1 === currentPage ? "is-active" : ""
                }`}
              >
                <a
                  class="pagination-link"
                  href="#"
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </a>
              </li>
            )
          )}
          <li class="pagination-item--wide last">
            <a
              class="pagination-link--wide last"
              href="#"
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === Math.ceil(products.length / pageSize)}
            >
              Next
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LatesPoductRight;
