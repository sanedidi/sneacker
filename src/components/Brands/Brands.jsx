import { adidas, asics, karhu, newBalance, puma, rebook } from '../../assets/img/img'
import './Brands.scss'

const Brands = () => {
  return (
    <section className="brands">
      <div className="container">
        <div className="brands__wrapper">
          <img src={adidas} alt="asd" />
          <img src={newBalance} alt="asd" />
          <img src={asics} alt="asd" />
          <img src={karhu} alt="asd" />
          <img src={rebook} alt="asd" />
          <img src={puma} alt="asd" />
        </div>
      </div>
    </section>
  )
}

export default Brands