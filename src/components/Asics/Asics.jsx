import { Link } from "react-router-dom";
import "./Asics.scss";
import Cards from "../Cards/Cards";
import { useState } from "react";

const Asics = () => {
  const [asics, setAsics] = useState(false);

  const handleButtonClick = () => {
    setAsics(true);

    setTimeout(() => {
      setAsics(false);
    }, 1000);
  };

  return (
    <section className="asics">
      <div className="container">
        <div className="asics__wrapper">
          <div className="asics__main">
            <Link className="asics__left">
              <div className="asics__bgi">
                <h2 className="asics__title">Asics</h2>
                <button
                  onClick={handleButtonClick}
                  className={asics ? "asics__btn click" : "asics__btn"}
                >
                  Shop now
                </button>
              </div>
            </Link>
            <Cards />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Asics;
