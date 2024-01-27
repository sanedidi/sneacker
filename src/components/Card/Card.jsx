import './Card.scss'
import { cards } from './Cards.js'
import { Link } from 'react-router-dom'
const Card = ({img, desc, price}) => {
  return (
    
    <div className='card'>
        <div className="container">
                <h2 className="card__title">LATEST SNEAKERS</h2>
            <div className="card__wrapper">
{cards.map((card)=>{
    return(
        <Link>
        <div className="card__card">
            <div className="card__img">
                <img  src={card.img} alt="" />
            </div>
            <div className="card__content">
                <p className="card__desc">{card.desc}</p>
                <p className="card__price">€{card.price}</p>
            </div>
        </div>
        </Link>
    )
})}
            </div>
        </div>
    </div>
    
  )
}

export default Card