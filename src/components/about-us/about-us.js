import './about-us.scss';

const AboutUs = () => {
    return (
        <section className="about-us">
            <div className="container-fluid">
                <div className="about-us__content">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="content__info">
                                    <div className="row py-5 align-items-center">
                                        <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                                            <div className="info__location d-flex justify-content-start align-items-center">
                                                <img src="./icons/abount-us__location__icon.svg" alt="location icon" />
                                                <div className="info__text ms-2">
                                                    <h5 className="info__text_title">Locate Us</h5>
                                                    <p className="info__text_subtitle">Riverside 25, San Diego, California</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                                            <div className="info__hours d-flex justify-content-start align-items-center">
                                                <img src="./icons/about-us__hours__icon.svg" alt="hours icon" />
                                                <div className="info__text ms-2">
                                                    <h5 className="info__text_title">Open Hours</h5>
                                                    <p className="info__text_subtitle">Mon To Fri 9:00 AM - 9:00 PM</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="info__reservation d-flex justify-content-start align-items-center">
                                                <img src="./icons/about-us__reservation__icon.svg" alt="reservation icon" />
                                                <div className="info__text ms-2">
                                                    <h5 className="info__text_title">Reservation</h5>
                                                    <a href="restaurantate@gmail.com" className="info__text_subtitle">restaurantate@gmail.com</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 py-5 my-5">
                                <div className="content__story">
                                    <div className="row">
                                        <div className="col-xxl-7 col-lg-6">
                                            <div className="story__image">
                                                <img className="w-100" src="./image/about-us__img.png" alt="our restorant img" />
                                            </div>
                                        </div>
                                        <div className="col-xxl-5 col-lg-6">
                                            <div className="story__inner p-3 h-100">
                                                <div className="row h-100">
                                                    <div className="col-12">
                                                        <h4 className="inner__title">The Delicious Story</h4>
                                                        <p className="inner__text">The people, food and the prime locations make the perfect place for the friends & family to come together and have great time.</p>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <h4 className="inner__title">2018</h4>
                                                        <p className="inner__text">Plan for this restaurant to deliver healthy food.</p>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <h4 className="inner__title">2022</h4>
                                                        <p className="inner__text">Happily in the fourth year by fulfill the motto.</p>
                                                    </div>
                                                    <div className="col-12">
                                                        <h4 className="inner__text">JOSEFINE</h4>
                                                        <img src="./icons/about-us__signature__icon.png" alt="" />
                                                    </div>
                                                </div>
                                            </div>
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

export default AboutUs;