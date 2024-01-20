import './About.scss'
const About = () => {
  return (
    <section className="about">
        <div className="container">
            <div className="about__wrapper">
                <h2 className="about__title">About us</h2>
                <div className="about__content">
                    <p className="about__text">"A service-first home for contemporary style."</p>
                    <p className="about__text">At Sneaker District you can expect an unrivalled level of service and an ever evolving range of sneakers and apparel. From the classic Nike, adidas, Puma and New Balance drops to the more exclusive brands and releases to surprise even the most curious among us.</p>
                    <p className="about__text">Rooted in Amsterdam street culture we’ve always supported local initiatives, creatives and athletes from day one. Working on unique collaborations with both local and international brands and hosting regular events and parties in our shops for our community. Something we’ll continue doing wherever we go.</p>
                    <p className="about__text">With an expanding assortment of fashion and apparel brands, SD has become your service-first home for contemporary style.</p>
                </div>
                <img className='about__img' src="https://cdn.etrias.nl/media/cache/content_source/content/category/sneaker_district/footer-border-bottom.png" alt="" />
            </div>
        </div>
    </section>
  )
}

export default About