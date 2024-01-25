import { Link } from 'react-router-dom';
import './popular.scss';

const Popular = () => {
    return (
        <section className="pupolar-dishes">
            <div className="container">
                <div className="pupolar-dishes__content_title d-flex flex-column justify-content-center align-items-center">
                    <h5 className="pupolar-dishes__title">menu</h5>
                    <div className="inner__title_text mb-5 text-center">
                        <h3 className="inner__title">Popular Dishes</h3>
                        <p className="inner__text">There is a game between the waiters in restaurant to see who serves the food to</p>
                        <p className="inner__text">each table fastest. That led to attempting the Guinness Record.</p>
                    </div>
                </div>
                <div className="pupolar-dishes__content mb-5">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="dishe__item">
                                <div className="dishe__image mb-3">
                                    <img className="w-100" src="./image/popular-dishes__img__01.png" alt="Chicken Manjoori" />
                                </div>
                                <div className="dishe__title border-1 border-bottom border-secondary mb-3 d-flex justify-content-between align-items-center">
                                    <h5 className="dishe__name">Chicken Manjoori</h5>
                                    <h5 className="dishe__price">$15</h5>
                                </div>
                                <p className="dishe__text">Dish relished by all age groups as a starter dish at parties.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="dishe__item">
                                <div className="dishe__image mb-3">
                                    <img className="w-100" src="./image/popular-dishes__img__02.png" alt="Hotdog" />
                                </div>
                                <div className="dishe__title border-1 border-bottom border-secondary mb-3 d-flex justify-content-between align-items-center">
                                    <h5 className="dishe__name">Hotdog</h5>
                                    <h5 className="dishe__price">$10</h5>
                                </div>
                                <p className="dishe__text">Grilled sausage served in the slit of a partially sliced bun.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="dishe__item">
                                <div className="dishe__image mb-3">
                                    <img className="w-100" src="./image/popular-dishes__img__03.png" alt="Fresh Salmon" />
                                </div>
                                <div className="dishe__title border-1 border-bottom border-secondary mb-3 d-flex justify-content-between align-items-center">
                                    <h5 className="dishe__name">Fresh Salmon</h5>
                                    <h5 className="dishe__price">$5</h5>
                                </div>
                                <p className="dishe__text">Beat the health blues with our Super Immune Blue Juice Recipe.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="dishe__item">
                                <div className="dishe__image mb-3">
                                    <img className="w-100" src="./image/popular-dishes__img__04.png" alt="Veg Burger" />
                                </div>
                                <div className="dishe__title border-1 border-bottom border-secondary mb-3 d-flex justify-content-between align-items-center">
                                    <h5 className="dishe__name">Veg Burger</h5>
                                    <h5 className="dishe__price">$10</h5>
                                </div>
                                <p className="dishe__text">Burgers may be made from ingredients like beans.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content__btn text-center">
                    <Link to={'/OurMenu'} className="btn__view-menu">See all dishes</Link>
                </div>
            </div>
        </section>

    )
}

export default Popular;