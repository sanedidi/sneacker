import "./Stepney.scss";
import { Link } from "react-router-dom";
import "../../assets/fonts/SuisseIntl-Regular.otf";
import { useState } from "react";
const Stepney = () => {
  const [btn, setBtn] = useState(false);

  const handleButtonClick = () => {
    setBtn(true);

    setTimeout(() => {
      setBtn(false);
    }, 1000);
  };
  return (
    <section className="stepney">
      <div className="container">
        <div className="stepney__wrapper">
          <Link className="stepney__left" to={"/"}>
            <div className="stepney__left-bgi">
              <h2 className="stepney__left-title">adidas gazelle indoor</h2>
              <button className={btn ? "stepney__btn click" : "stepney__btn"}>
                Shop now
              </button>
            </div>
          </Link>
          <Link to={'/'}>
            <div className="stepney__right">
                <div className="stepney__top">
                    
                </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Stepney;
