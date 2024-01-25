import './MenuListItem.scss';

const MenuListItem = ({ itemList, hendleSelectedMenuItem }) => {

    return (
        < div className="col-lg-3 col-md-6 mb-4" >
            <div className="card dishes__item rounded-0 h-100">
                <div className="card-content h-100">
                    <div className="card-image">
                        <img
                            className='w-100'
                            src={itemList.dishesImage}
                            alt={itemList.dishesName}
                        />
                    </div>
                    <div className="card-body text-center">
                        <h5 className="card-title">{itemList.dishesName}</h5>
                        <p className="card-subtitle">{itemList.dishesSubTitle}</p>
                    </div>
                    <p className="card-price">{itemList.dishesPrice}$</p>
                </div>
                <div className="dishes__item_description">
                    <p className="card-subtitle text-white">{itemList.dishesDescr}</p>
                    <button
                        onClick={() => hendleSelectedMenuItem(itemList, 1)}
                        className='card-btn'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                        </svg>
                    </button>
                </div>
            </div>
        </div >
    )
}

export default MenuListItem;