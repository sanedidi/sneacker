import { Link } from "react-router-dom";
import logo from "./../../assets/img/logo.webp";
import "./Header.scss";
import { useState } from "react";
const Header = () => {
  const [category, setCategory] = useState(0);
  const [burger, setBurger] = useState(false);  
  const toggleBurger = () => {
    setBurger(!burger);
  };
  return (
    <>
      <header className='header'>
        <div className="header__bg"></div>
        <div className="container">
          <div className="header__wrapper">
            <div className="header__top">
              <img className="header__logo" src={logo} alt="" />
              <div  className={`header__burger ${burger ? "open" : ""}`} onClick={toggleBurger}>
                <span></span>
              </div>

              <div className="header__tools">
                <input
                  className="header__search"
                  placeholder="What are you looking for?"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="header__btn">
                <svg
                  className="header__like"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M12.251 2.546c-.57.523-1 1.251-1.25 1.746-.25-.49-.682-1.224-1.253-1.746-1.032-.945-2.405-1.488-3.768-1.488-2.16 0-4.065 1.502-4.748 3.725-.594 1.936-.228 4.08.973 6.236 1.201 2.155 3.24 4.328 6.006 6.331a54.703 54.703 0 0 0 2.094 1.4c.197.125.444.192.695.192.252 0 .498-.067.697-.193l.025-.017c.222-.142 1.383-.886 2.067-1.382 2.766-2.003 4.805-4.176 6.006-6.331 1.201-2.156 1.567-4.3.973-6.236-.682-2.223-2.588-3.725-4.748-3.725-1.363 0-2.736.543-3.769 1.488ZM11.03 17.62a.14.14 0 0 1-.03.003.14.14 0 0 1-.03-.003 53.245 53.245 0 0 1-2.017-1.348l-.058.081.058-.08c-2.546-1.845-4.421-3.806-5.534-5.715C2.307 8.65 1.962 6.803 2.46 5.18c.516-1.681 1.934-2.802 3.52-2.802 1.049 0 2.11.42 2.912 1.153.317.29.592.7.797 1.057.2.351.329.646.358.715.124.354.295.568.473.693a.83.83 0 0 0 .48.154.845.845 0 0 0 .458-.14c.183-.118.363-.328.487-.688.016-.036.137-.325.337-.682.207-.369.493-.803.826-1.109.801-.733 1.863-1.153 2.912-1.153 1.586 0 3.004 1.12 3.52 2.802.498 1.623.153 3.47-.96 5.377-1.112 1.909-2.987 3.87-5.534 5.714a52.723 52.723 0 0 1-2.016 1.348Z"
                    fill="#000"
                    stroke="#000"
                    // stroke-width=".4"
                  ></path>
                </svg>
                <svg
                  className="header__shop"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M16.414 17.84v.076H3.585V7.089h2.42v2.098a.593.593 0 0 0 1.183 0V7.09h5.623v2.098a.593.593 0 0 0 1.184 0V7.09h2.42V17.84Zm.025-11.935h-2.444v-1.01c0-1.205-.39-2.206-1.09-2.905-.7-.7-1.7-1.09-2.905-1.09-1.206 0-2.206.39-2.906 1.09-.7.7-1.09 1.7-1.09 2.905v1.01H3.56c-.64 0-1.159.52-1.159 1.159v10.877c0 .64.52 1.16 1.16 1.16h12.878a1.16 1.16 0 0 0 1.159-1.16V7.064c0-.64-.52-1.16-1.159-1.16Zm-9.25-1.01c0-1.047.365-1.745.891-2.183.53-.441 1.232-.628 1.92-.628.687 0 1.39.187 1.919.628.526.438.892 1.136.892 2.183v1.01H7.188v-1.01Z"
                    fill="#000"
                    stroke="#000"
                    // stroke-width=".2"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <nav className={`header__nav ${burger ? "burger-open" : ""}`}>
          <div
            onMouseEnter={() => setCategory(1)}
            onMouseLeave={() => setCategory(0)}
            className="header__link"
          >
            <Link to={"/latest"}>LATEST</Link>
            <div className={`${category === 1 ? "active" : "test"}`}>
              <div className="header__categories-latest">
                <div className="header__1">
                  <div className="header__
                  top-1">
                    <Link to={"/"}>SHOP BY CATEGORY</Link>
                  </div>
                  <Link to={"/"}>SNEAKERS</Link>
                  <Link to={"/"}>CLOTHING</Link>
                  <Link to={"/"}>ACCESSORIES</Link>
                  <Link to={"/"}>SALE</Link>
                </div>
                <div className="header__1">
                  <div className="header__top-1">
                    <Link to={"/"}>MEN</Link>
                  </div>
                  <Link to={"/"}>SNEAKERS</Link>
                  <Link to={"/"}>CLOTHING</Link>
                </div>
                <div className="header__1">
                  <div className="header__top-1">
                    <Link to={"/"}>WOMEN</Link>
                  </div>
                  <Link to={"/"}>SNEAKERS</Link>
                  <Link to={"/"}>CLOTHING</Link>
                </div>
              </div>
            </div>
          </div>
          <div
            onMouseEnter={() => setCategory(2)}
            onMouseLeave={() => setCategory(0)}
            className="header__link"
          >
            <Link to={"/"}>SNEACKERS</Link>
            <div className={`${category === 2 ? "active" : "test"}`}>
              <div className="header__categories-latest">
                <div className="header__1">
                  <div className="header__top-1">
                    <Link to={"/"}>SHOP BY CATEGORY</Link>
                  </div>
                  <Link to={"/"}>MEN</Link>
                  <Link to={"/"}>WOMEN</Link>
                  <Link to={"/"}>KIDS</Link>
                  <Link to={"/"}>SNEACKERS CARE</Link>
                  <Link to={"/"}>SALE</Link>
                </div>
                <div className="header__1">
                  <div className="header__top-1">
                    <Link to={"/"}>BRANDS</Link>
                  </div>
                  <Link to={"/"}>adidas</Link>
                  <Link to={"/"}>Asics</Link>
                  <Link to={"/"}>Clarks</Link>
                  <Link to={"/"}>Havaianas</Link>
                  <Link to={"/"}>Hi-Tec</Link>
                  <Link to={"/"}>Karhu</Link>
                  <Link to={"/"}>Mizuno</Link>
                </div>
                <div className="header__1">
                  <div className="header__top-1">
                    <Link to={"/"}>BRANDS</Link>
                  </div>
                  <Link to={"/"}>On Running</Link>
                  <Link to={"/"}>Puma</Link>
                  <Link to={"/"}>Reebok</Link>
                  <Link to={"/"}>Saucony</Link>
                  <Link to={"/"}>Sebago</Link>
                  <Link to={"/"}>Stepney Workers Club</Link>
                  <Link to={"/"}>Timberland</Link>
                </div>
                <div className="header__1">
                  <div className="header__top-1">
                    <Link to={"/"}>MODELS</Link>
                  </div>
                  <Link to={"/"}>adidas Gazelle</Link>
                  <Link to={"/"}>adidas Handball Spezial</Link>
                  <Link to={"/"}>adidas Samba</Link>
                  <Link to={"/"}>Asics GEL-1130</Link>
                  <Link to={"/"}>Asics GEL-Kayano</Link>
                  <Link to={"/"}>Asics GEL-NYC</Link>
                  <Link to={"/"}>Karhu Fusion 2.0</Link>
                </div>
              </div>
            </div>
          </div>
          <div
            onMouseEnter={() => setCategory(3)}
            onMouseLeave={() => setCategory(0)}
            className="header__link"
          >
            <Link to={"/"}>MEN</Link>
            <div className={`${category === 3 ? "active" : "test"}`}>
              <div className="header__categories-latest">
                <div className="header__1">
                  <div className="header__top-1">
                    <Link to={"/"}>SHOP BY CATEGORY</Link>
                  </div>
                  <Link to={"/"}>SNEAKERS</Link>
                  <Link to={"/"}>CLOTHING</Link>
                  <Link to={"/"}>KIDS</Link>
                  <Link to={"/"}>ACCESSORIES</Link>
                  <Link to={"/"}>SALE</Link>
                </div>
                <div className="header__1">
                  <div className="header__top-1">
                    <Link to={"/"}>BRANDS</Link>
                  </div>
                  <Link to={"/"}>adidas</Link>
                  <Link to={"/"}>Asics</Link>
                  <Link to={"/"}>Clarks</Link>
                  <Link to={"/"}>Havaianas</Link>
                  <Link to={"/"}>Hi-Tec</Link>
                  <Link to={"/"}>Karhu</Link>
                  <Link to={"/"}>Mizuno</Link>
                </div>
                <div className="header__1">
                  <div className="header__top-1">
                    <Link to={"/"}>BRANDS</Link>
                  </div>
                  <Link to={"/"}>On Running</Link>
                  <Link to={"/"}>Puma</Link>
                  <Link to={"/"}>Reebok</Link>
                  <Link to={"/"}>Saucony</Link>
                  <Link to={"/"}>Sebago</Link>
                  <Link to={"/"}>Stepney Workers Club</Link>
                  <Link to={"/"}>Timberland</Link>
                </div>
                <div className="header__1">
                  <div className="header__top-1">
                    <Link to={"/"}>CATEGORIES</Link>
                  </div>
                  <Link to={"/"}>Bags</Link>
                  <Link to={"/"}>Coats & Jackets</Link>
                  <Link to={"/"}>Crewnecks</Link>
                  <Link to={"/"}>Gloves</Link>
                  <Link to={"/"}>Headwear</Link>
                  <Link to={"/"}>Hoodies</Link>
                  <Link to={"/"}>Longsleeves</Link>
                </div>
              </div>
            </div>
          </div>
          <div
            onMouseEnter={() => setCategory(4)}
            onMouseLeave={() => setCategory(0)}
            className="header__link"
          >
            <Link to={"/"}>WOMEN</Link>
            <div className={`${category === 4 ? "active" : "test"}`}>
              <div className="header__categories-latest">
                <div className="header__1">
                  <div className="header__top-1">
                    <Link to={"/"}>SHOP BY CATEGORY</Link>
                  </div>
                  <Link to={"/"}>SNEAKERS</Link>
                  <Link to={"/"}>CLOTHING</Link>
                  <Link to={"/"}>KIDS</Link>
                  <Link to={"/"}>ACCESSORIES</Link>
                  <Link to={"/"}>SALE</Link>
                </div>
                <div className="header__1">
                  <div className="header__top-1">
                    <Link to={"/"}>BRANDS</Link>
                  </div>
                  <Link to={"/"}>adidas</Link>
                  <Link to={"/"}>Asics</Link>
                  <Link to={"/"}>Clarks</Link>
                  <Link to={"/"}>Havaianas</Link>
                  <Link to={"/"}>Hi-Tec</Link>
                  <Link to={"/"}>Karhu</Link>
                  <Link to={"/"}>Mizuno</Link>
                </div>
                <div className="header__1">
                  <div className="header__top-1">
                    <Link to={"/"}>BRANDS</Link>
                  </div>
                  <Link to={"/"}>On Running</Link>
                  <Link to={"/"}>Puma</Link>
                  <Link to={"/"}>Reebok</Link>
                  <Link to={"/"}>Saucony</Link>
                  <Link to={"/"}>Sebago</Link>
                  <Link to={"/"}>Stepney Workers Club</Link>
                  <Link to={"/"}>Timberland</Link>
                </div>
                <div className="header__1">
                  <div className="header__top-1">
                    <Link to={"/"}>CATEGORIES</Link>
                  </div>
                  <Link to={"/"}>Bags</Link>
                  <Link to={"/"}>Coats & Jackets</Link>
                  <Link to={"/"}>Crewnecks</Link>
                  <Link to={"/"}>Gloves</Link>
                  <Link to={"/"}>Headwear</Link>
                  <Link to={"/"}>Hoodies</Link>
                  <Link to={"/"}>Longsleeves</Link>
                </div>
              </div>
            </div>
          </div>
          <Link className="header__link" to={"/"}>
            SALE
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;