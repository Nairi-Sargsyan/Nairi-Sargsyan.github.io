import { Link } from 'react-router-dom';
import './menu.scss';

const Menu = () => {
    return (
        <section className="menu py-5 my-5">
            <div className="container">
                <div className="menu__content">
                    <div className="row justify-content-between">
                        <div className="col-lg-5 mb-5">
                            <div className="menu__content_aside">
                                <h5 className="content__aside_title">menu</h5>
                                <div className="aside__title-text">
                                    <h3 className="inner__title">Try Our Special dishes</h3>
                                    <p className="inner__text">Every time you perfectly dine with us, it should happy for great inspired food in an environment designed with individual touches unique to the local area.</p>
                                </div>
                                <div className="aside__image my-5">
                                    <img className="w-100" src="./image/menu__img.png" alt="Our menu" />
                                </div>
                                <div className="content__btn">
                                    <Link to={'/OurMenu'} className="btn__view-menu">See all dishes</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="menu__content_body">
                                <div className="menu__items_block mb-5">
                                    <h4 className="block__title mb-5">Starters</h4>
                                    <div className="menu__item mb-4 w-100 d-flex justify-content-between align-items-center">
                                        <img className="me-md-3 me-0" src="./icons/menu__icon_01.png" alt="Raw Scallops from Erquy" />
                                        <div className="item__inner me-auto">
                                            <h4 className="info__text_title">Raw Scallops from Erquy</h4>
                                            <p className="info__text_subtitle">Shuck the scallop to that used for oysters</p>
                                        </div>
                                        <h5 className="info__text_title mb-0 ms-md-3 ms-0">$40</h5>
                                    </div>
                                    <div className="menu__item mb-4 w-100 d-flex justify-content-between align-items-center">
                                        <img className="me-md-3 me-0" src="./icons/menu__icon_02.png" alt="Spring Roll" />
                                        <div className="item__inner me-auto">
                                            <h4 className="info__text_title">Spring Roll</h4>
                                            <p className="info__text_subtitle">Add oil to a hot pan spring onion whites</p>
                                        </div>
                                        <h5 className="info__text_title mb-0 ms-md-3 ms-0">$20</h5>
                                    </div>
                                    <div className="menu__item mb-4 w-100 d-flex justify-content-between align-items-center">
                                        <img className="me-md-3 me-0" src="./icons/menu__icon_03.png" alt="French Onion Soup" />
                                        <div className="item__inner me-auto">
                                            <h4 className="info__text_title">French Onion Soup</h4>
                                            <p className="info__text_subtitle">Wheat flour, apple cider vinegar, bread</p>
                                        </div>
                                        <h5 className="info__text_title mb-0 ms-md-3 ms-0">$25</h5>
                                    </div>
                                    <div className="menu__item w-100 d-flex justify-content-between align-items-center">
                                        <img className="me-md-3 me-0" src="./icons/menu__icon_04.png" alt="Tomato Bruschetta" />
                                        <div className="item__inner me-auto">
                                            <h4 className="info__text_title">Tomato Bruschetta</h4>
                                            <p className="info__text_subtitle">Bread, olive oil, garlic, black pepper</p>
                                        </div>
                                        <h5 className="info__text_title mb-0 ms-md-3 ms-0">$30</h5>
                                    </div>
                                </div>
                                <div className="menu__items_block mb-5">
                                    <h4 className="block__title mb-5">Main Dish</h4>
                                    <div className="menu__item mb-4 w-100 d-flex justify-content-between align-items-center">
                                        <img className="me-md-3 me-0" src="./icons/menu__icon_05.png" alt="Grilled Salmon with Dill Sauce" />
                                        <div className="item__inner me-auto">
                                            <h4 className="info__text_title">Grilled Salmon with Dill Sauce</h4>
                                            <p className="info__text_subtitle">Brown sugar, salmon fillet, Dijon mustard</p>
                                        </div>
                                        <h5 className="info__text_title mb-0 ms-md-3 ms-0">$40</h5>
                                    </div>
                                    <div className="menu__item mb-4 w-100 d-flex justify-content-between align-items-center">
                                        <img className="me-md-3 me-0" src="./icons/menu__icon_06.png" alt="Roast Beef with Vegetable" />
                                        <div className="item__inner me-auto">
                                            <h4 className="info__text_title">Roast Beef with Vegetable</h4>
                                            <p className="info__text_subtitle">Green beans, rib eye, olive oil, beef</p>
                                        </div>
                                        <h5 className="info__text_title mb-0 ms-md-3 ms-0">$20</h5>
                                    </div>
                                    <div className="menu__item mb-4 w-100 d-flex justify-content-between align-items-center">
                                        <img className="me-md-3 me-0" src="./icons/menu__icon_07.png" alt="Marrkesh Vegetetarian Curruy" />
                                        <div className="item__inner me-auto">
                                            <h4 className="info__text_title">Marrkesh Vegetetarian Curruy</h4>
                                            <p className="info__text_subtitle">Sweet potato, eggplant, garbanzo bean</p>
                                        </div>
                                        <h5 className="info__text_title mb-0 ms-md-3 ms-0">$25</h5>
                                    </div>
                                    <div className="menu__item w-100 d-flex justify-content-between align-items-center">
                                        <img className="me-md-3 me-0" src="./icons/menu__icon_08.png" alt="Spicy Vegan Potato Curry" />
                                        <div className="item__inner me-auto">
                                            <h4 className="info__text_title">Spicy Vegan Potato Curry</h4>
                                            <p className="info__text_subtitle">Coconut milk, beans, potatoes, curry powder</p>
                                        </div>
                                        <h5 className="info__text_title mb-0 ms-md-3 ms-0">$35</h5>
                                    </div>
                                </div>
                                <div className="menu__items_block">
                                    <h4 className="block__title mb-5">Dessert</h4>
                                    <div className="menu__item mb-4 w-100 d-flex justify-content-between align-items-center">
                                        <img className="me-md-3 me-0" src="./icons/menu__icon_09.png" alt="Apple Pie with Cream" />
                                        <div className="item__inner me-auto">
                                            <h4 className="info__text_title">Apple Pie with Cream</h4>
                                            <p className="info__text_subtitle">Whipping cream, egg white, cinnamon</p>
                                        </div>
                                        <h5 className="info__text_title mb-0 ms-md-3 ms-0">$15</h5>
                                    </div>
                                    <div className="menu__item mb-4 w-100 d-flex justify-content-between align-items-center">
                                        <img className="me-md-3 me-0" src="./icons/menu__icon_10.png" alt="Lemon Meringue Pie" />
                                        <div className="item__inner me-auto">
                                            <h4 className="info__text_title">Lemon Meringue Pie</h4>
                                            <p className="info__text_subtitle">Frozen pie crust, meringue, lemon</p>
                                        </div>
                                        <h5 className="info__text_title mb-0 ms-md-3 ms-0">$30</h5>
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

export default Menu;