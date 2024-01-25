import React from 'react';
import './CarouselClientsSay.scss';

const CarouselClientsSay = ({ children }) => {
    return (
        <div className="clients__cards_block mb-4">
            <div className="clients__items-wrapper">
                <div className="client__items_inner d-flex">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default CarouselClientsSay;