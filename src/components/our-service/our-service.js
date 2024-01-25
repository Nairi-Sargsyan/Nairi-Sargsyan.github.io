import './our-service.scss';

const Service = () => {
    return (
        <section className="service">
            <div className="container-fluid">
                <div className="service__content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="service__title_text">
                                    <div className="title__block">
                                        <h5 className="service__title me-1">What</h5>
                                        <h5 className="service__title me-1">we</h5>
                                        <h5 className="service__title">offer</h5>
                                    </div>
                                    <div className="inner__title_text mb-5">
                                        <h3 className="inner__title text-white">Our Great Services</h3>
                                        <p className="inner__text text-white">The atmosphere set the stage. It’s about more than just a dining room away from your home. food takes the spotlight as guests.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="row h-100">
                                    <div className="col-md-4 mb-3 mb-lg-0">
                                        <div className="service__card h-100 p-3">
                                            <img src="./icons/offer-service__icon__01.svg" alt="Сalendar" />
                                            <h5 className="card__text mt-3">Opened 24/7</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3 mb-lg-0">
                                        <div className="service__card h-100 p-3">
                                            <img src="./icons/offer-service__icon__02.svg" alt="Special menu" />
                                            <h5 className="card__text mt-3">Special Menus</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="service__card h-100 p-3">
                                            <img src="./icons/offer-service__icon__03.svg" alt="Delivery" />
                                            <h5 className="card__text mt-3">Home Delivery</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service;