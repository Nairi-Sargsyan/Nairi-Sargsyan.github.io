import { useState, useEffect, useContext } from "react";
import { MenuContext } from "../Context/MenuContext";
import BasketItem from './basket-item/BasketItem';

import './ShoppingBasket.scss';

const ShoppingBasket = ({ selectedDish, setSelectedDish }) => {
    const { cartCounter, setCartCounter } = useContext(MenuContext);
    const [checkDoubleItemsInCart, setCheckDoubleItemsInCart] = useState([]);
    const [itemsPrice, setItemsPrice] = useState([]);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        const checkDoubleItemsInCartSet = new Set(selectedDish.map(item => item.id));
        const checkDoubleItemsInCartArray = Array.from(checkDoubleItemsInCartSet, id => selectedDish.find(item => item.id === id));
        setCheckDoubleItemsInCart(checkDoubleItemsInCartArray)
    }, [selectedDish]);

    useEffect(() => {
        const initialItemsPrice = selectedDish.map(item => item.dishesPrice);

        if (initialItemsPrice.length === 0) {
            setPrice(0);
        } else {
            const totalSum = initialItemsPrice.reduce((sum, item) => sum + item);
            setPrice(totalSum);
        }

        setItemsPrice(initialItemsPrice);
        setCartCounter(initialItemsPrice.length);

    }, [selectedDish]);

    console.log(cartCounter);

    const deleteItemCart = (id) => {
        const deleteItem = selectedDish.filter(item => item.id !== id);
        setSelectedDish(deleteItem);
    }

    const priceOfCounter = (id, count) => {
        const updatedItemsPrice = [...itemsPrice];
        updatedItemsPrice[id] = selectedDish[id].dishesPrice * count;
        setItemsPrice(updatedItemsPrice);

        const totalSum = updatedItemsPrice.reduce((sum, item) => sum + item);
        setPrice(totalSum);
    }

    return (
        <section className='shopping-basket'>
            <div className="container">
                <div className="shopping-basket__content py-5">
                    <div className="row border__bottom">
                        <div className="col-lg-7 order-lg-1 order-2">
                            <div className="content__basket_items p-3 mb-5">
                                <div className="row">
                                    {
                                        checkDoubleItemsInCart.length === 0
                                            ?
                                            <div>
                                                <h2 className='fw-bold'>In cart not item!</h2>
                                                <h3>But it can be fixed :)</h3>
                                            </div>
                                            : checkDoubleItemsInCart.map((item, index) =>
                                                <BasketItem
                                                    deleteItemCart={deleteItemCart}
                                                    priceOfCounter={priceOfCounter}
                                                    setItemsPrice={setItemsPrice}
                                                    item={item}
                                                    index={index}
                                                    key={index}
                                                />)
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 order-lg-2 order-1">
                            <div className="content__info p-3">
                                <h3 className='total-sum fw-bold'>Total sum: {price.toFixed(2)}$</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShoppingBasket;