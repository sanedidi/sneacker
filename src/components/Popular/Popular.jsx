import './Popular.scss'
import popularImg1 from './../../assets/img/popularImg1.webp'
import popularImg2 from './../../assets/img/popularImg2.webp'
import popularImg3 from './../../assets/img/popularImg3.webp'
import popularImg4 from './../../assets/img/popularImg4.webp'
import popularImg5 from './../../assets/img/popularImg5.webp'
import popularImg6 from './../../assets/img/popularImg6.webp'
const Popular = () => {
  return (
    <section className="popular">
        <div className="container">
            <h2 className="popular__title">Most popular</h2>
            <div className="popular__wrapper">
                <img className='popular__img' src={popularImg2} alt="" />
                <img className='popular__img' src={popularImg1} alt="" />
                <img className='popular__img' src={popularImg3} alt="" />
                <img className='popular__img' src={popularImg4} alt="" />
                <img className='popular__img' src={popularImg5} alt="" />
                <img className='popular__img' src={popularImg6} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Popular