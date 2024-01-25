import './offers.scss';

const Offers = () => {
    return (
        <section className="offers">
            <div className="container">
                <div className="offers__content">
                    <div className="offers__content_title d-flex flex-column justify-content-center align-items-center">
                        <h5 className="offers__title">offers</h5>
                        <div className="inner__title_text mb-5 text-center">
                            <h3 className="inner__title">Our Offer dishes</h3>
                            <p className="inner__text">Our chefs create melt-in-your-mouth dishes that'll satiate even the fussiest eaters now</p>
                            <p className="inner__text">the dishes are in offers use it based on hunger.</p>
                        </div>
                    </div>
                    <div className="offers__content_images">
                        <div className="row">
                            <div className="col-lg-6">
                                <img className="w-100 mb-lg-0 mb-4" src="./image/offer-dishes__img__01.png" alt="Chichen Burger" />
                            </div>
                            <div className="col-lg-6">
                                <img className="w-100" src="./image/offer-dishes__img__02.png" alt="Chicken Pizza" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offers;