import { Link } from "react-router-dom";
import "./Footer.scss";
import logo from "../../assets/img/logo.webp";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__wrapper1">
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__box">
              <Link className="footer__title">Customer service</Link>
              <Link className="footer__text">Contact</Link>
              <Link className="footer__text">Shipping & handling</Link>
              <Link className="footer__text">Returns</Link>
              <Link className="footer__text">Payment</Link>
              <Link className="footer__text">Guarantee</Link>
              <Link className="footer__text">Frequently asked questions</Link>
            </div>
            <div className="footer__box">
              <Link className="footer__title">About Sneaker District</Link>
              <Link className="footer__text">Our webshops</Link>
              <Link className="footer__text">Large orders</Link>
              <Link className="footer__text">Sitemap</Link>
            </div>
            <div className="footer__box">
              <Link className="footer__title">Your advantages</Link>
              <Link className="footer__text">Fast delivery</Link>
              <Link className="footer__text">Excellent service</Link>
              <Link className="footer__text">Best brands</Link>
            </div>
            <div className="footer__box">
              <Link className="footer__title">Any questions?</Link>
              <Link className="footer__text">Send us an e-mail</Link>
              <div className="footer__socials">
                <p className="footer__titles">Socials</p>
                <div className="footer__logos">
                  <Link to={"/"}>
                    <img
                      className="facebook"
                      src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
                      alt=""
                    />
                    <img
                      className="twitch"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAWq-yqUDtmmWESD7L_lRElqQOThCUpSKJIiifGcghYQ&s"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="footer__active">
              <div className="footer__active-top">
                <h2 className="footer__title">Any-questions?</h2>
                <p className="footer__text">Send us an e-mail</p>
              </div>
              <div className="footer__active-btm">
                <p className="footer__btm-text">Customer service</p>
                <p className="footer__btm-text">About Sneacker District</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__btm">
        <div className="container">
          <div className="footer__wrapper2">
            <img src={logo} alt="" />
            <div className="footer__mid">
              <div className="footer__mid-img">
                <img
                  src="https://cdn.etrias.nl/shop/partners/paypal.a0b84f4943d53ce2a2e5fae23769a999.svg"
                  alt=""
                />
                <img
                  src="https://cdn.etrias.nl/shop/partners/mastercard.682cfe677637fc50994b33fb76daff8d.svg"
                  alt=""
                />
                <img
                  src="https://cdn.etrias.nl/shop/partners/visa.f7e48650683f2ce46da07abe7f875205.svg"
                  alt=""
                />
                <img
                  src="https://cdn.etrias.nl/shop/partners/mastercard.682cfe677637fc50994b33fb76daff8d.svg"
                  alt=""
                />
              </div>
              <div className="footer__privacy">
                <p className="footer__privacy-text">
                  Terms & Conditions | Privacy Policy | Data tracking
                </p>
                <p className="footer__privacy-text">
                  Copyright © 2024 - Etrias Group
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
