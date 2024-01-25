import { useState, useEffect } from "react";
const BasketItem = ({ item, index, deleteItemCart, priceOfCounter }) => {

    const counterIndex = index + 1;

    const [itemCounter, setItemCounter] = useState(1);
    const [itemPrice, setItemPrice] = useState(item.dishesPrice);

    const increaseCounterItem = () => {
        setItemCounter(prevCount => prevCount + 1);
    }

    const deicreaseConterItem = () => {
        if (itemCounter <= 1) {
            return itemPrice
        }
        setItemCounter(prevCount => prevCount - 1);
    }

    useEffect(() => {
        setItemPrice(item.dishesPrice * itemCounter);
    }, [itemCounter, item.dishesPrice]);

    useEffect(() => {
        priceOfCounter(index, itemCounter)
    }, [itemCounter]);

    return (
        <div className="col-12">
            <div className="item__number">
                <span className='number'>{counterIndex}</span>
            </div>
            <div className="basket_item mb-4 d-flex justify-content-between align-items-center">
                <div className="row align-items-center">
                    <div className="col-md-10">
                        <div className="item__body d-flex justify-content-between align-items-center">
                            <img className='w-25' src={item.dishesImage} alt={item.dishesName} />
                            <h4 className="item__title px-3">{item.dishesName}</h4>
                            <div className="block__item_counter d-flex flex-column">
                                <div className="mb-2 pt-2 d-flex justify-content-between align-items-center">
                                    <button
                                        onClick={deicreaseConterItem}
                                        className='item__counter_btn'
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-dash" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5" />
                                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                                        </svg>
                                    </button>
                                    <span className='item__counter mx-2'>{itemCounter}</span>
                                    <button
                                        onClick={increaseCounterItem}
                                        className='item__counter_btn'
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5" />
                                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                                        </svg>
                                    </button>
                                </div>
                                <h5 className="fw-bold">{itemPrice.toFixed(2)}$</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center mt-lg-0 mt-3">
                        <button
                            onClick={() => deleteItemCart(item.id)}
                            className="item__delete w-100"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="70%" height="70%" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasketItem;